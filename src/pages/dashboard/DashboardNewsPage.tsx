import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, Bookmark, ChevronRight } from 'lucide-react';
import { filterNews } from '../../services/newsService';
import { useBookmarks } from '../../context/BookmarkContext';

export const DashboardNewsPage: React.FC = () => {
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const { isBookmarked, toggle } = useBookmarks();

  const news = useMemo(() => filterNews({ query, category: selectedCategory }), [query, selectedCategory]);

  const categories = ['All', 'Supreme Court', 'Constitutional Law', 'Corporate Law', 'Criminal Law', 'Arbitration', 'Insolvency', 'Technology Law'];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gold-500/15 pb-4">
        <div>
          <h1 className="text-2xl font-serif font-bold text-slate-100">Legal News Feed</h1>
          <p className="text-xs text-slate-400">Daily cause-list developments and regulatory briefings.</p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-gold-500 absolute left-3.5 top-3" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search news briefs..."
            className="w-full pl-10 pr-4 py-2 rounded-xl bg-navy-900 border border-gold-500/20 text-slate-100 text-sm focus:outline-none focus:border-gold-400"
          />
        </div>

        <div className="flex gap-2 overflow-x-auto pb-1">
          {categories.slice(0, 5).map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
                selectedCategory === cat
                  ? 'bg-gold-500 text-navy-950 font-bold'
                  : 'bg-navy-900 text-slate-300 border border-gold-500/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {news.map(n => {
          const bookmarked = isBookmarked('news', n.id);
          return (
            <div key={n.id} className="p-5 rounded-xl bg-navy-900 border border-gold-500/20 space-y-3 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="text-gold-400 font-semibold">{n.category}</span>
                  <button onClick={() => toggle('news', n.id)} className="text-slate-400 hover:text-gold-400">
                    <Bookmark className={`w-4 h-4 ${bookmarked ? 'fill-gold-400 text-gold-400' : ''}`} />
                  </button>
                </div>
                <h3 className="font-bold text-slate-100 text-base leading-snug mb-2">{n.headline}</h3>
                <p className="text-xs text-slate-300 line-clamp-3">{n.summary}</p>
              </div>

              <div className="pt-3 border-t border-gold-500/10 flex items-center justify-between text-xs text-slate-400">
                <span>{n.publishedDate}</span>
                <Link to={`/news/${n.id}`} className="text-gold-400 font-bold flex items-center gap-1">
                  <span>Read Brief</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

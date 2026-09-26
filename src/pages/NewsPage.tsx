import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Newspaper, Search, Bookmark, ChevronRight, X, Clock } from 'lucide-react';
import { filterNews } from '../services/newsService';
import { useBookmarks } from '../context/BookmarkContext';

export const NewsPage: React.FC = () => {
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const { isBookmarked, toggle } = useBookmarks();

  const newsArticles = useMemo(() => {
    return filterNews({
      query,
      category: selectedCategory
    });
  }, [query, selectedCategory]);

  const categories = [
    'All',
    'Supreme Court',
    'Constitutional Law',
    'Corporate Law',
    'Criminal Law',
    'Arbitration',
    'Commercial Law',
    'Insolvency',
    'Technology Law'
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Header */}
      <div className="space-y-3 border-b border-gold-500/15 pb-6">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gold-400 bg-gold-500/10 px-3 py-1 rounded-full border border-gold-500/20">
          <Newspaper className="w-3.5 h-3.5" />
          <span>Curated Daily Legal Intelligence</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-slate-100">
          Apex Legal News & Editorial Briefs
        </h1>
        <p className="text-slate-400 text-sm max-w-3xl leading-relaxed">
          Stay ahead of cause-list updates, constitutional hearings, SEBI directives, and high-impact regulatory developments across India.
        </p>
      </div>

      {/* Search & Category Pills */}
      <div className="bg-navy-900 border border-gold-500/20 rounded-2xl p-5 space-y-4 shadow-xl">
        <div className="relative flex items-center">
          <Search className="w-5 h-5 text-gold-500 absolute left-4" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search news briefs, legislative updates, hearings..."
            className="w-full pl-12 pr-4 py-3 rounded-xl bg-navy-850 border border-gold-500/20 text-slate-100 placeholder-slate-400 focus:outline-none focus:border-gold-400 text-sm"
          />
          {query && (
            <button onClick={() => setQuery('')} className="absolute right-4 text-slate-400">
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 pt-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                selectedCategory === cat
                  ? 'bg-gold-500 text-navy-950 font-bold shadow-md'
                  : 'bg-navy-850 text-slate-300 hover:bg-navy-800 border border-gold-500/15'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* News Grid */}
      {newsArticles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsArticles.map((n) => {
            const bookmarked = isBookmarked('news', n.id);
            return (
              <div
                key={n.id}
                className="p-6 rounded-2xl bg-navy-900 border border-gold-500/20 hover:border-gold-400 transition-all flex flex-col justify-between group"
              >
                <div>
                  {n.imageUrl && (
                    <div className="h-44 rounded-xl overflow-hidden mb-4 bg-navy-850">
                      <img
                        src={n.imageUrl}
                        alt={n.headline}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}

                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-gold-500/15 text-gold-300 border border-gold-500/30">
                      {n.category}
                    </span>
                    <button
                      onClick={() => toggle('news', n.id)}
                      className="p-1.5 rounded-lg text-slate-400 hover:text-gold-400 hover:bg-navy-850 transition-colors"
                      title="Bookmark Article"
                    >
                      <Bookmark className={`w-4 h-4 ${bookmarked ? 'fill-gold-400 text-gold-400' : ''}`} />
                    </button>
                  </div>

                  <h3 className="text-base font-bold text-slate-100 group-hover:text-gold-300 transition-colors leading-snug line-clamp-2 mb-2">
                    {n.headline}
                  </h3>

                  <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed mb-4">
                    {n.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-gold-500/10 flex items-center justify-between text-xs text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-gold-500" />
                    <span>{n.readTime}</span>
                  </div>

                  <Link
                    to={`/news/${n.id}`}
                    className="font-bold text-gold-400 hover:text-gold-300 flex items-center gap-1"
                  >
                    <span>Read Story</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="p-12 text-center bg-navy-900 border border-gold-500/20 rounded-2xl space-y-3">
          <Newspaper className="w-12 h-12 text-slate-500 mx-auto" />
          <h3 className="text-lg font-bold text-slate-200">No articles found</h3>
          <p className="text-xs text-slate-400">Try changing your category filter or search query.</p>
        </div>
      )}
    </div>
  );
};

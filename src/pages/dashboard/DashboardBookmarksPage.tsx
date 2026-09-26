import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bookmark, Trash2, Scale, Newspaper, UserCheck } from 'lucide-react';
import { useBookmarks } from '../../context/BookmarkContext';
import { getJudgmentById } from '../../services/judgmentService';
import { getNewsById } from '../../services/newsService';
import { getCounselById } from '../../services/counselService';

export const DashboardBookmarksPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'judgment' | 'news' | 'counsel'>('judgment');
  const { bookmarks, toggle } = useBookmarks();

  const filteredBookmarks = bookmarks.filter(b => b.type === activeTab);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gold-500/15 pb-4">
        <div>
          <h1 className="text-2xl font-serif font-bold text-slate-100">Saved Research Workspace</h1>
          <p className="text-xs text-slate-400">Access bookmarked Supreme Court judgments, legal news, and counsel profiles.</p>
        </div>
      </div>

      <div className="flex gap-2 border-b border-gold-500/20 pb-2">
        <button
          onClick={() => setActiveTab('judgment')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
            activeTab === 'judgment'
              ? 'bg-gold-500 text-navy-950 shadow-md'
              : 'bg-navy-900 text-slate-400 hover:text-slate-200 border border-gold-500/15'
          }`}
        >
          <Scale className="w-4 h-4" />
          <span>Judgments ({bookmarks.filter(b => b.type === 'judgment').length})</span>
        </button>

        <button
          onClick={() => setActiveTab('news')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
            activeTab === 'news'
              ? 'bg-gold-500 text-navy-950 shadow-md'
              : 'bg-navy-900 text-slate-400 hover:text-slate-200 border border-gold-500/15'
          }`}
        >
          <Newspaper className="w-4 h-4" />
          <span>News Briefs ({bookmarks.filter(b => b.type === 'news').length})</span>
        </button>

        <button
          onClick={() => setActiveTab('counsel')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
            activeTab === 'counsel'
              ? 'bg-gold-500 text-navy-950 shadow-md'
              : 'bg-navy-900 text-slate-400 hover:text-slate-200 border border-gold-500/15'
          }`}
        >
          <UserCheck className="w-4 h-4" />
          <span>Counsel Profiles ({bookmarks.filter(b => b.type === 'counsel').length})</span>
        </button>
      </div>

      {filteredBookmarks.length > 0 ? (
        <div className="space-y-3">
          {filteredBookmarks.map(bm => {
            if (bm.type === 'judgment') {
              const j = getJudgmentById(bm.itemId);
              if (!j) return null;
              return (
                <div key={bm.id} className="p-4 rounded-xl bg-navy-900 border border-gold-500/20 flex items-center justify-between gap-4">
                  <div>
                    <span className="text-[10px] font-bold text-gold-400 uppercase">{j.practiceArea}</span>
                    <h4 className="font-bold text-slate-100 text-sm">{j.caseTitle}</h4>
                    <p className="text-xs text-slate-400">{j.citation} • {j.bench}</p>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <Link to={`/judgments/${j.id}`} className="px-3 py-1.5 rounded-lg bg-navy-850 border border-gold-500/20 text-gold-400 text-xs font-semibold hover:bg-navy-800">
                      Open
                    </Link>
                    <button onClick={() => toggle('judgment', j.id)} className="p-1.5 rounded-lg text-slate-400 hover:text-rose-400">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            }

            if (bm.type === 'news') {
              const n = getNewsById(bm.itemId);
              if (!n) return null;
              return (
                <div key={bm.id} className="p-4 rounded-xl bg-navy-900 border border-gold-500/20 flex items-center justify-between gap-4">
                  <div>
                    <span className="text-[10px] font-bold text-gold-400 uppercase">{n.category}</span>
                    <h4 className="font-bold text-slate-100 text-sm">{n.headline}</h4>
                    <p className="text-xs text-slate-400">{n.publishedDate}</p>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <Link to={`/news/${n.id}`} className="px-3 py-1.5 rounded-lg bg-navy-850 border border-gold-500/20 text-gold-400 text-xs font-semibold hover:bg-navy-800">
                      Read
                    </Link>
                    <button onClick={() => toggle('news', n.id)} className="p-1.5 rounded-lg text-slate-400 hover:text-rose-400">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            }

            if (bm.type === 'counsel') {
              const c = getCounselById(bm.itemId);
              if (!c) return null;
              return (
                <div key={bm.id} className="p-4 rounded-xl bg-navy-900 border border-gold-500/20 flex items-center justify-between gap-4">
                  <div>
                    <h4 className="font-bold text-slate-100 text-sm">{c.name}</h4>
                    <p className="text-xs text-slate-400">{c.designation} • {c.location}</p>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <Link to={`/counsel/${c.id}`} className="px-3 py-1.5 rounded-lg bg-navy-850 border border-gold-500/20 text-gold-400 text-xs font-semibold hover:bg-navy-800">
                      Profile
                    </Link>
                    <button onClick={() => toggle('counsel', c.id)} className="p-1.5 rounded-lg text-slate-400 hover:text-rose-400">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            }
            return null;
          })}
        </div>
      ) : (
        <div className="p-12 text-center bg-navy-900 border border-gold-500/20 rounded-2xl space-y-3">
          <Bookmark className="w-12 h-12 text-slate-500 mx-auto" />
          <h3 className="text-base font-bold text-slate-200">No saved items in this category</h3>
          <p className="text-xs text-slate-400">Click the bookmark icon on any judgment, news article, or advocate profile to save it here.</p>
        </div>
      )}
    </div>
  );
};

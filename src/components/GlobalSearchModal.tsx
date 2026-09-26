import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Scale, Newspaper, UserCheck, X, ChevronRight } from 'lucide-react';
import { filterJudgments } from '../services/judgmentService';
import { filterNews } from '../services/newsService';
import { filterCounsel } from '../services/counselService';

interface GlobalSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GlobalSearchModal: React.FC<GlobalSearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const judgments = query.trim() ? filterJudgments({ query }).slice(0, 3) : [];
  const news = query.trim() ? filterNews({ query }).slice(0, 3) : [];
  const counsel = query.trim() ? filterCounsel({ query }).slice(0, 3) : [];

  const handleSelect = (path: string) => {
    onClose();
    setQuery('');
    navigate(path);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 px-4 bg-navy-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-navy-900 border border-gold-500/30 rounded-xl shadow-2xl overflow-hidden gold-border-glow">
        {/* Input Bar */}
        <div className="relative flex items-center border-b border-gold-500/20 px-4 py-3 bg-navy-850">
          <Search className="w-5 h-5 text-gold-500 mr-3 shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search judgments, ratio decidendi, legal news, AoR counsel..."
            className="w-full bg-transparent text-slate-100 placeholder-slate-400 focus:outline-none text-base"
            autoFocus
          />
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-navy-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search Results / Suggestions */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-4">
          {!query.trim() && (
            <div className="text-center py-8 text-slate-400">
              <p className="text-sm">Type any key term, citation, case name, or advocate name.</p>
              <div className="mt-4 flex flex-wrap justify-center gap-2">
                <span className="text-xs bg-navy-800 text-gold-400 px-2.5 py-1 rounded-full border border-gold-500/20">Article 300A</span>
                <span className="text-xs bg-navy-800 text-gold-400 px-2.5 py-1 rounded-full border border-gold-500/20">Arbitration Section 11</span>
                <span className="text-xs bg-navy-800 text-gold-400 px-2.5 py-1 rounded-full border border-gold-500/20">PMLA Bail</span>
                <span className="text-xs bg-navy-800 text-gold-400 px-2.5 py-1 rounded-full border border-gold-500/20">Senior Advocate</span>
              </div>
            </div>
          )}

          {query.trim() && (
            <>
              {/* Judgments */}
              {judgments.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-gold-400 uppercase tracking-wider mb-2">
                    <Scale className="w-3.5 h-3.5" />
                    <span>Supreme Court Judgments ({judgments.length})</span>
                  </div>
                  <div className="space-y-1.5">
                    {judgments.map(j => (
                      <button
                        key={j.id}
                        onClick={() => handleSelect(`/judgments/${j.id}`)}
                        className="w-full text-left p-2.5 rounded-lg bg-navy-850/60 hover:bg-navy-800 border border-transparent hover:border-gold-500/30 flex items-center justify-between transition-all group"
                      >
                        <div>
                          <div className="text-sm font-medium text-slate-200 group-hover:text-gold-300">
                            {j.caseTitle}
                          </div>
                          <div className="text-xs text-slate-400 mt-0.5 flex items-center gap-2">
                            <span>{j.citation}</span>
                            <span>•</span>
                            <span>{j.practiceArea}</span>
                          </div>
                        </div>
                        <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-gold-400 transition-colors" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* News */}
              {news.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-gold-400 uppercase tracking-wider mb-2">
                    <Newspaper className="w-3.5 h-3.5" />
                    <span>Legal News ({news.length})</span>
                  </div>
                  <div className="space-y-1.5">
                    {news.map(n => (
                      <button
                        key={n.id}
                        onClick={() => handleSelect(`/news/${n.id}`)}
                        className="w-full text-left p-2.5 rounded-lg bg-navy-850/60 hover:bg-navy-800 border border-transparent hover:border-gold-500/30 flex items-center justify-between transition-all group"
                      >
                        <div>
                          <div className="text-sm font-medium text-slate-200 group-hover:text-gold-300">
                            {n.headline}
                          </div>
                          <div className="text-xs text-slate-400 mt-0.5">
                            {n.category} • {n.publishedDate}
                          </div>
                        </div>
                        <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-gold-400 transition-colors" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Counsel */}
              {counsel.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-gold-400 uppercase tracking-wider mb-2">
                    <UserCheck className="w-3.5 h-3.5" />
                    <span>Verified Counsel ({counsel.length})</span>
                  </div>
                  <div className="space-y-1.5">
                    {counsel.map(c => (
                      <button
                        key={c.id}
                        onClick={() => handleSelect(`/counsel/${c.id}`)}
                        className="w-full text-left p-2.5 rounded-lg bg-navy-850/60 hover:bg-navy-800 border border-transparent hover:border-gold-500/30 flex items-center justify-between transition-all group"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-gold-500/20 text-gold-400 font-bold flex items-center justify-center text-xs">
                            {c.name.substring(0, 2)}
                          </div>
                          <div>
                            <div className="text-sm font-medium text-slate-200 group-hover:text-gold-300">
                              {c.name}
                            </div>
                            <div className="text-xs text-slate-400">
                              {c.designation} • {c.location}
                            </div>
                          </div>
                        </div>
                        <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-gold-400 transition-colors" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {judgments.length === 0 && news.length === 0 && counsel.length === 0 && (
                <div className="text-center py-8 text-slate-400">
                  No matching legal intelligence items found for "{query}".
                </div>
              )}
            </>
          )}
        </div>

        {/* Footer info */}
        <div className="bg-navy-950 px-4 py-2 border-t border-gold-500/10 flex items-center justify-between text-xs text-slate-500">
          <span>Press <kbd className="bg-navy-800 px-1.5 py-0.5 rounded text-slate-300">ESC</kbd> to exit</span>
          <span>InstaLegal Intelligence Index</span>
        </div>
      </div>
    </div>
  );
};

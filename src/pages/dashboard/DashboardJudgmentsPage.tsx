import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, Bookmark, ChevronRight, Filter, Sparkles } from 'lucide-react';
import { filterJudgments } from '../../services/judgmentService';
import { useBookmarks } from '../../context/BookmarkContext';

export const DashboardJudgmentsPage: React.FC = () => {
  const [query, setQuery] = useState('');
  const [selectedPracticeArea, setSelectedPracticeArea] = useState('All');
  const [isConstitutional, setIsConstitutional] = useState(false);
  const { isBookmarked, toggle } = useBookmarks();

  const judgments = useMemo(() => {
    return filterJudgments({
      query,
      practiceArea: selectedPracticeArea,
      isConstitutional
    });
  }, [query, selectedPracticeArea, isConstitutional]);

  const practiceAreaOptions = [
    'All',
    'Constitutional Law',
    'Corporate Law',
    'Criminal Law',
    'Arbitration',
    'Tax Law',
    'Insolvency & Bankruptcy',
    'Intellectual Property',
    'Civil Litigation'
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gold-500/15 pb-4">
        <div>
          <h1 className="text-2xl font-serif font-bold text-slate-100">Supreme Court Judgment Search</h1>
          <p className="text-xs text-slate-400">Search ratio decidendi, bench decisions, and statutes in real-time.</p>
        </div>
        <div className="text-xs text-gold-400 font-mono">Indexed: {judgments.length} Decisions</div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-3 space-y-4 bg-navy-900 border border-gold-500/20 p-5 rounded-2xl h-fit">
          <div className="flex items-center gap-2 font-bold text-slate-200 text-xs uppercase border-b border-gold-500/15 pb-2">
            <Filter className="w-4 h-4 text-gold-500" />
            <span>Refine Search</span>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-400 mb-1.5">Practice Area</label>
            <div className="space-y-1 max-h-60 overflow-y-auto pr-1">
              {practiceAreaOptions.map(pa => (
                <button
                  key={pa}
                  onClick={() => setSelectedPracticeArea(pa)}
                  className={`w-full text-left px-3 py-1.5 rounded text-xs transition-colors ${
                    selectedPracticeArea === pa
                      ? 'bg-gold-500/20 text-gold-300 font-bold border border-gold-500/30'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-navy-850'
                  }`}
                >
                  {pa}
                </button>
              ))}
            </div>
          </div>

          <div className="pt-2 border-t border-gold-500/10">
            <button
              onClick={() => setIsConstitutional(!isConstitutional)}
              className={`w-full py-2 px-3 rounded text-xs font-semibold border transition-all flex items-center justify-center gap-1.5 ${
                isConstitutional
                  ? 'bg-gold-500 text-navy-950 border-gold-400'
                  : 'bg-navy-850 text-slate-300 border-gold-500/20'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Constitutional Benches Only</span>
            </button>
          </div>
        </div>

        <div className="lg:col-span-9 space-y-4">
          <div className="relative flex items-center">
            <Search className="w-5 h-5 text-gold-500 absolute left-4" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search case name, judge, ratio decidendi, citation..."
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-navy-900 border border-gold-500/20 text-slate-100 placeholder-slate-400 focus:outline-none focus:border-gold-400 text-sm"
            />
          </div>

          <div className="space-y-4">
            {judgments.map(j => {
              const bookmarked = isBookmarked('judgment', j.id);
              return (
                <div
                  key={j.id}
                  className="p-5 rounded-xl bg-navy-900 border border-gold-500/20 hover:border-gold-400 transition-all space-y-3 group"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-gold-500/15 text-gold-300 border border-gold-500/30">
                          {j.practiceArea}
                        </span>
                        <span className="text-xs text-slate-400 font-mono">{j.citation}</span>
                      </div>
                      <h3 className="text-base font-bold text-slate-100 group-hover:text-gold-300 transition-colors">
                        {j.caseTitle}
                      </h3>
                      <div className="text-xs text-slate-400 mt-0.5">{j.caseNumber} • {j.bench}</div>
                    </div>

                    <button
                      onClick={() => toggle('judgment', j.id)}
                      className="p-1.5 rounded-lg text-slate-400 hover:text-gold-400 hover:bg-navy-850 transition-colors"
                    >
                      <Bookmark className={`w-4 h-4 ${bookmarked ? 'fill-gold-400 text-gold-400' : ''}`} />
                    </button>
                  </div>

                  <div className="p-3 rounded-lg bg-navy-850 border border-gold-500/10 text-xs text-slate-300 italic">
                    "{j.ratioDecidendi}"
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-gold-500/10 text-xs">
                    <span className="text-slate-400">Decided: {j.judgmentDate}</span>
                    <Link
                      to={`/judgments/${j.id}`}
                      className="text-gold-400 font-semibold hover:underline flex items-center gap-1"
                    >
                      <span>Read Judgment Details</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

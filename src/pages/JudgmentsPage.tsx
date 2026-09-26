import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  Search,
  Scale,
  Bookmark,
  ChevronRight,
  X,
  Sparkles,
  BookOpen
} from 'lucide-react';
import { filterJudgments } from '../services/judgmentService';
import { useBookmarks } from '../context/BookmarkContext';

export const JudgmentsPage: React.FC = () => {
  const [query, setQuery] = useState('');
  const [selectedPracticeArea, setSelectedPracticeArea] = useState('All');
  const [selectedCaseType, setSelectedCaseType] = useState('All');
  const [selectedBench, setSelectedBench] = useState('All');
  const [isConstitutional, setIsConstitutional] = useState(false);
  const [sortBy, setSortBy] = useState<'latest' | 'oldest'>('latest');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const { isBookmarked, toggle } = useBookmarks();

  const judgments = useMemo(() => {
    return filterJudgments({
      query,
      practiceArea: selectedPracticeArea,
      caseType: selectedCaseType,
      bench: selectedBench,
      isConstitutional,
      sortBy
    });
  }, [query, selectedPracticeArea, selectedCaseType, selectedBench, isConstitutional, sortBy]);

  const totalPages = Math.ceil(judgments.length / itemsPerPage);
  const paginatedJudgments = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return judgments.slice(start, start + itemsPerPage);
  }, [judgments, currentPage]);

  const handleClearFilters = () => {
    setQuery('');
    setSelectedPracticeArea('All');
    setSelectedCaseType('All');
    setSelectedBench('All');
    setIsConstitutional(false);
    setSortBy('latest');
    setCurrentPage(1);
  };

  const practiceAreaOptions = [
    'All',
    'Constitutional Law',
    'Corporate Law',
    'Criminal Law',
    'Arbitration',
    'Tax Law',
    'Insolvency & Bankruptcy',
    'Intellectual Property',
    'Civil Litigation',
    'Environmental Law',
    'Administrative Law'
  ];

  const caseTypeOptions = [
    'All',
    'Civil Appeal',
    'Criminal Appeal',
    'Writ Petition',
    'Special Leave Petition',
    'Review Petition',
    'Constitutional Bench'
  ];

  const benchOptions = ['All', '2-Judge Bench', '3-Judge Bench', '5-Judge Bench'];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Header Banner */}
      <div className="space-y-3 border-b border-gold-500/15 pb-6">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gold-400 bg-gold-500/10 px-3 py-1 rounded-full border border-gold-500/20">
          <Scale className="w-3.5 h-3.5" />
          <span>Supreme Court Intelligence Catalog</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-slate-100">
          Supreme Court Judgments & Orders
        </h1>
        <p className="text-slate-400 text-sm max-w-3xl leading-relaxed">
          Search indexed Supreme Court decisions, filter by constitutional benched issues or practice areas, and analyze extracted ratio decidendi.
        </p>
      </div>

      {/* Search Bar & Primary Sort */}
      <div className="bg-navy-900 border border-gold-500/20 rounded-2xl p-4 sm:p-5 gold-border-glow space-y-4">
        <div className="relative flex items-center">
          <Search className="w-5 h-5 text-gold-500 absolute left-4" />
          <input
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setCurrentPage(1);
            }}
            placeholder="Search judgments, case numbers, citations, judge names, ratio decidendi..."
            className="w-full pl-12 pr-4 py-3 rounded-xl bg-navy-850 border border-gold-500/20 text-slate-100 placeholder-slate-400 focus:outline-none focus:border-gold-400 text-sm sm:text-base"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="absolute right-4 text-slate-400 hover:text-slate-200"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Filter Controls Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 pt-2">
          {/* Practice Area */}
          <div>
            <label className="block text-[11px] uppercase font-bold text-slate-400 mb-1">Practice Area</label>
            <select
              value={selectedPracticeArea}
              onChange={(e) => {
                setSelectedPracticeArea(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full px-3 py-2 rounded-lg bg-navy-850 border border-gold-500/20 text-xs text-slate-200 focus:outline-none focus:border-gold-400"
            >
              {practiceAreaOptions.map(pa => (
                <option key={pa} value={pa}>{pa}</option>
              ))}
            </select>
          </div>

          {/* Case Type */}
          <div>
            <label className="block text-[11px] uppercase font-bold text-slate-400 mb-1">Case Type</label>
            <select
              value={selectedCaseType}
              onChange={(e) => {
                setSelectedCaseType(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full px-3 py-2 rounded-lg bg-navy-850 border border-gold-500/20 text-xs text-slate-200 focus:outline-none focus:border-gold-400"
            >
              {caseTypeOptions.map(ct => (
                <option key={ct} value={ct}>{ct}</option>
              ))}
            </select>
          </div>

          {/* Bench */}
          <div>
            <label className="block text-[11px] uppercase font-bold text-slate-400 mb-1">Bench</label>
            <select
              value={selectedBench}
              onChange={(e) => {
                setSelectedBench(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full px-3 py-2 rounded-lg bg-navy-850 border border-gold-500/20 text-xs text-slate-200 focus:outline-none focus:border-gold-400"
            >
              {benchOptions.map(b => (
                <option key={b} value={b}>{b}</option>
              ))}
            </select>
          </div>

          {/* Sort By */}
          <div>
            <label className="block text-[11px] uppercase font-bold text-slate-400 mb-1">Sort Order</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as 'latest' | 'oldest')}
              className="w-full px-3 py-2 rounded-lg bg-navy-850 border border-gold-500/20 text-xs text-slate-200 focus:outline-none focus:border-gold-400"
            >
              <option value="latest">Latest Judgment Date</option>
              <option value="oldest">Oldest Judgment Date</option>
            </select>
          </div>

          {/* Toggle Constitutional & Reset */}
          <div className="flex items-end gap-2">
            <button
              onClick={() => {
                setIsConstitutional(!isConstitutional);
                setCurrentPage(1);
              }}
              className={`flex-1 py-2 px-3 rounded-lg text-xs font-semibold border transition-all flex items-center justify-center gap-1.5 ${
                isConstitutional
                  ? 'bg-gold-500 text-navy-950 border-gold-400'
                  : 'bg-navy-850 text-slate-300 border-gold-500/20 hover:border-gold-400'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Constitutional Only</span>
            </button>

            <button
              onClick={handleClearFilters}
              className="p-2 rounded-lg bg-navy-850 text-slate-400 hover:text-slate-200 border border-gold-500/20"
              title="Clear all filters"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Results Header & Counter */}
      <div className="flex items-center justify-between text-xs text-slate-400 pt-2">
        <div>
          Showing <span className="text-gold-400 font-bold">{judgments.length}</span> matching Apex Court rulings
        </div>
        {(selectedPracticeArea !== 'All' || selectedCaseType !== 'All' || selectedBench !== 'All' || isConstitutional || query) && (
          <button
            onClick={handleClearFilters}
            className="text-gold-400 hover:underline flex items-center gap-1 font-medium"
          >
            <span>Reset Active Filters</span>
          </button>
        )}
      </div>

      {/* Judgments Grid */}
      {paginatedJudgments.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {paginatedJudgments.map((j) => {
            const bookmarked = isBookmarked('judgment', j.id);
            return (
              <div
                key={j.id}
                className="p-6 rounded-2xl bg-navy-900 border border-gold-500/20 hover:border-gold-400 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded bg-gold-500/15 text-gold-300 border border-gold-500/30">
                      {j.practiceArea}
                    </span>
                    <button
                      onClick={() => toggle('judgment', j.id)}
                      className="p-1.5 rounded-lg text-slate-400 hover:text-gold-400 hover:bg-navy-850 transition-colors"
                      title="Bookmark Judgment"
                    >
                      <Bookmark className={`w-4 h-4 ${bookmarked ? 'fill-gold-400 text-gold-400' : ''}`} />
                    </button>
                  </div>

                  <h3 className="text-base font-bold text-slate-100 group-hover:text-gold-300 transition-colors leading-snug line-clamp-2 mb-2">
                    {j.caseTitle}
                  </h3>

                  <div className="text-xs text-slate-400 space-y-1 mb-4">
                    <div>{j.caseNumber}</div>
                    <div className="flex items-center gap-2 text-slate-500 text-[11px]">
                      <span>{j.bench}</span>
                      <span>•</span>
                      <span>{j.judgmentDate}</span>
                    </div>
                  </div>

                  <div className="bg-navy-850/60 p-3 rounded-xl border border-gold-500/10 mb-4">
                    <div className="text-[10px] font-bold uppercase text-gold-400 mb-1">Ratio Decidendi</div>
                    <p className="text-xs text-slate-300 line-clamp-2 italic">
                      "{j.ratioDecidendi}"
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-gold-500/10 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-gold-400">{j.citation}</span>
                  <Link
                    to={`/judgments/${j.id}`}
                    className="text-xs font-semibold text-slate-200 hover:text-gold-300 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                  >
                    <span>Read Full Case</span>
                    <ChevronRight className="w-3.5 h-3.5 text-gold-400" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="p-12 text-center bg-navy-900 border border-gold-500/20 rounded-2xl space-y-4">
          <BookOpen className="w-12 h-12 text-slate-500 mx-auto" />
          <h3 className="text-lg font-bold text-slate-200">No judgments found matching your criteria</h3>
          <p className="text-sm text-slate-400 max-w-md mx-auto">
            Try adjusting your search query, clearing practice area filters, or toggling off constitutional bench restrictions.
          </p>
          <button
            onClick={handleClearFilters}
            className="px-6 py-2.5 rounded-lg bg-gold-500 text-navy-950 font-semibold hover:bg-gold-400 text-sm"
          >
            Clear All Filters
          </button>
        </div>
      )}

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 pt-6">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            className="px-4 py-2 rounded-lg bg-navy-900 border border-gold-500/20 text-xs text-slate-300 disabled:opacity-40"
          >
            Previous Page
          </button>
          <span className="text-xs text-slate-400 px-3">
            Page {currentPage} of {totalPages}
          </span>
          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            className="px-4 py-2 rounded-lg bg-navy-900 border border-gold-500/20 text-xs text-slate-300 disabled:opacity-40"
          >
            Next Page
          </button>
        </div>
      )}
    </div>
  );
};

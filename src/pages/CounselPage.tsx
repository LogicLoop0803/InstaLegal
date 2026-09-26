import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  UserCheck,
  Search,
  ShieldCheck,
  MapPin,
  Briefcase,
  MessageSquare,
  X,
  Bookmark
} from 'lucide-react';
import { filterCounsel } from '../services/counselService';
import type { Counsel } from '../types';
import { ConsultationModal } from '../components/ConsultationModal';
import { useBookmarks } from '../context/BookmarkContext';

export const CounselPage: React.FC = () => {
  const [query, setQuery] = useState('');
  const [selectedDesignation, setSelectedDesignation] = useState('All');
  const [selectedPracticeArea, setSelectedPracticeArea] = useState('All');
  const [selectedLocation, setSelectedLocation] = useState('All');
  const [minExp, setMinExp] = useState(0);

  const [selectedConsultationCounsel, setSelectedConsultationCounsel] = useState<Counsel | null>(null);
  const { isBookmarked, toggle } = useBookmarks();

  const counselList = useMemo(() => {
    return filterCounsel({
      query,
      designation: selectedDesignation,
      practiceArea: selectedPracticeArea,
      location: selectedLocation,
      minExperience: minExp
    });
  }, [query, selectedDesignation, selectedPracticeArea, selectedLocation, minExp]);

  const designationOptions = ['All', 'Advocate-on-Record', 'Senior Advocate', 'Advocate'];
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
  const locationOptions = ['All', 'New Delhi', 'Mumbai', 'Bengaluru', 'Chennai', 'Kolkata', 'Hyderabad'];

  const handleClearFilters = () => {
    setQuery('');
    setSelectedDesignation('All');
    setSelectedPracticeArea('All');
    setSelectedLocation('All');
    setMinExp(0);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Header */}
      <div className="space-y-3 border-b border-gold-500/15 pb-6">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gold-400 bg-gold-500/10 px-3 py-1 rounded-full border border-gold-500/20">
          <UserCheck className="w-3.5 h-3.5" />
          <span>Apex Directory & Chambers Registry</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-slate-100">
          Verified Counsel Hub
        </h1>
        <p className="text-slate-400 text-sm max-w-3xl leading-relaxed">
          Discover verified Supreme Court Advocates-on-Record (AoR) and Senior Advocates by specialization, bar enrollment, Supreme Court appearances, and practice location.
        </p>
      </div>

      {/* Search & Filter Bar */}
      <div className="bg-navy-900 border border-gold-500/20 rounded-2xl p-5 space-y-4 shadow-xl gold-border-glow">
        <div className="relative flex items-center">
          <Search className="w-5 h-5 text-gold-500 absolute left-4" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by advocate name, specialization or location..."
            className="w-full pl-12 pr-4 py-3 rounded-xl bg-navy-850 border border-gold-500/20 text-slate-100 placeholder-slate-400 focus:outline-none focus:border-gold-400 text-sm"
          />
          {query && (
            <button onClick={() => setQuery('')} className="absolute right-4 text-slate-400">
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2">
          {/* Designation */}
          <div>
            <label className="block text-[11px] uppercase font-bold text-slate-400 mb-1">Advocate Type</label>
            <select
              value={selectedDesignation}
              onChange={(e) => setSelectedDesignation(e.target.value)}
              className="w-full px-3 py-2 rounded-lg bg-navy-850 border border-gold-500/20 text-xs text-slate-200 focus:outline-none focus:border-gold-400"
            >
              {designationOptions.map(d => (
                <option key={d} value={d}>{d}</option>
              ))}
            </select>
          </div>

          {/* Practice Area */}
          <div>
            <label className="block text-[11px] uppercase font-bold text-slate-400 mb-1">Practice Area</label>
            <select
              value={selectedPracticeArea}
              onChange={(e) => setSelectedPracticeArea(e.target.value)}
              className="w-full px-3 py-2 rounded-lg bg-navy-850 border border-gold-500/20 text-xs text-slate-200 focus:outline-none focus:border-gold-400"
            >
              {practiceAreaOptions.map(pa => (
                <option key={pa} value={pa}>{pa}</option>
              ))}
            </select>
          </div>

          {/* Location */}
          <div>
            <label className="block text-[11px] uppercase font-bold text-slate-400 mb-1">Chambers Location</label>
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="w-full px-3 py-2 rounded-lg bg-navy-850 border border-gold-500/20 text-xs text-slate-200 focus:outline-none focus:border-gold-400"
            >
              {locationOptions.map(loc => (
                <option key={loc} value={loc}>{loc}</option>
              ))}
            </select>
          </div>

          {/* Min Experience */}
          <div>
            <label className="block text-[11px] uppercase font-bold text-slate-400 mb-1">Min Experience (Years)</label>
            <select
              value={minExp}
              onChange={(e) => setMinExp(Number(e.target.value))}
              className="w-full px-3 py-2 rounded-lg bg-navy-850 border border-gold-500/20 text-xs text-slate-200 focus:outline-none focus:border-gold-400"
            >
              <option value={0}>Any Experience</option>
              <option value={10}>10+ Years</option>
              <option value={15}>15+ Years</option>
              <option value={20}>20+ Years</option>
              <option value={25}>25+ Years</option>
            </select>
          </div>
        </div>
      </div>

      {/* Counter */}
      <div className="flex items-center justify-between text-xs text-slate-400">
        <div>
          Showing <span className="text-gold-400 font-bold">{counselList.length}</span> verified advocates & Senior Counsel
        </div>
        {(selectedDesignation !== 'All' || selectedPracticeArea !== 'All' || selectedLocation !== 'All' || minExp > 0 || query) && (
          <button onClick={handleClearFilters} className="text-gold-400 hover:underline">
            Reset Filters
          </button>
        )}
      </div>

      {/* Grid of Counsel */}
      {counselList.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {counselList.map((c) => {
            const bookmarked = isBookmarked('counsel', c.id);
            return (
              <div
                key={c.id}
                className="p-6 rounded-2xl bg-navy-900 border border-gold-500/20 hover:border-gold-400 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Top profile Header */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      {c.avatarUrl ? (
                        <img
                          src={c.avatarUrl}
                          alt={c.name}
                          className="w-14 h-14 rounded-full object-cover border border-gold-500/40"
                        />
                      ) : (
                        <div className="w-14 h-14 rounded-full bg-gold-500/20 text-gold-400 font-bold flex items-center justify-center text-base border border-gold-500/40">
                          {c.name.substring(0, 2)}
                        </div>
                      )}
                      <div>
                        <div className="flex items-center gap-1.5">
                          <h3 className="text-base font-bold text-slate-100 group-hover:text-gold-300 transition-colors">
                            {c.name}
                          </h3>
                          <span title="Verified Counsel">
                            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                          </span>
                        </div>
                        <span className="text-xs font-semibold text-gold-400 block mt-0.5">
                          {c.designation}
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={() => toggle('counsel', c.id)}
                      className="p-1.5 rounded-lg text-slate-400 hover:text-gold-400 hover:bg-navy-850 transition-colors"
                      title="Save Counsel"
                    >
                      <Bookmark className={`w-4 h-4 ${bookmarked ? 'fill-gold-400 text-gold-400' : ''}`} />
                    </button>
                  </div>

                  {/* Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {c.isAoR && (
                      <span className="text-[10px] font-bold bg-gold-500/20 text-gold-300 border border-gold-400/40 px-2 py-0.5 rounded">
                        Advocate-on-Record
                      </span>
                    )}
                    {c.isSeniorAdvocate && (
                      <span className="text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-400/40 px-2 py-0.5 rounded">
                        Senior Counsel
                      </span>
                    )}
                    <span className="text-[10px] bg-navy-850 text-slate-300 px-2 py-0.5 rounded border border-gold-500/10">
                      {c.experienceYears} Years Exp
                    </span>
                  </div>

                  {/* Details */}
                  <div className="space-y-1.5 text-xs text-slate-300 mb-4">
                    <div className="flex items-center gap-1.5 text-slate-400">
                      <MapPin className="w-3.5 h-3.5 text-gold-500 shrink-0" />
                      <span>{c.location} • {c.barCouncilNo}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-400">
                      <Briefcase className="w-3.5 h-3.5 text-gold-500 shrink-0" />
                      <span>{c.supremeCourtAppearances}+ Supreme Court Appearances</span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed mb-4">
                    {c.bio}
                  </p>

                  <div className="flex flex-wrap gap-1 mb-6">
                    {c.practiceAreas.map((pa, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] bg-navy-850 text-slate-300 px-2 py-0.5 rounded border border-gold-500/10"
                      >
                        {pa}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-4 border-t border-gold-500/10 grid grid-cols-2 gap-2">
                  <Link
                    to={`/counsel/${c.id}`}
                    className="py-2.5 rounded-lg bg-navy-850 text-slate-200 font-semibold border border-gold-500/20 hover:border-gold-400 transition-colors text-center text-xs block"
                  >
                    View Profile
                  </Link>

                  <button
                    onClick={() => setSelectedConsultationCounsel(c)}
                    className="py-2.5 rounded-lg bg-gold-500 text-navy-950 font-bold hover:bg-gold-400 transition-colors text-center text-xs flex items-center justify-center gap-1.5"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Consult</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="p-12 text-center bg-navy-900 border border-gold-500/20 rounded-2xl space-y-3">
          <UserCheck className="w-12 h-12 text-slate-500 mx-auto" />
          <h3 className="text-lg font-bold text-slate-200">No advocate profiles found</h3>
          <p className="text-xs text-slate-400">Try changing your search query or location filter.</p>
        </div>
      )}

      {/* Consultation Modal */}
      <ConsultationModal
        counsel={selectedConsultationCounsel}
        isOpen={!!selectedConsultationCounsel}
        onClose={() => setSelectedConsultationCounsel(null)}
      />
    </div>
  );
};

import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShieldCheck, MapPin, Briefcase } from 'lucide-react';
import { filterCounsel } from '../../services/counselService';
import { ConsultationModal } from '../../components/ConsultationModal';
import type { Counsel } from '../../types';

export const DashboardCounselPage: React.FC = () => {
  const [query, setQuery] = useState('');
  const [selectedCounsel, setSelectedCounsel] = useState<Counsel | null>(null);

  const counselList = useMemo(() => filterCounsel({ query }), [query]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gold-500/15 pb-4">
        <div>
          <h1 className="text-2xl font-serif font-bold text-slate-100">Verified Counsel Hub</h1>
          <p className="text-xs text-slate-400">Search Supreme Court Advocates-on-Record and Senior Counsel.</p>
        </div>
      </div>

      <div className="relative">
        <Search className="w-4 h-4 text-gold-500 absolute left-3.5 top-3" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by advocate name or practice area..."
          className="w-full pl-10 pr-4 py-2 rounded-xl bg-navy-900 border border-gold-500/20 text-slate-100 text-sm focus:outline-none focus:border-gold-400"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {counselList.map(c => (
          <div key={c.id} className="p-5 rounded-xl bg-navy-900 border border-gold-500/20 space-y-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-full bg-gold-500/20 text-gold-400 font-bold flex items-center justify-center text-sm border border-gold-500/40">
                  {c.name.substring(0, 2)}
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <h3 className="font-bold text-slate-100 text-sm">{c.name}</h3>
                    <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  </div>
                  <span className="text-xs text-gold-400 font-semibold">{c.designation}</span>
                </div>
              </div>

              <div className="text-xs text-slate-400 space-y-1 mb-3">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-gold-500" />
                  <span>{c.location} • {c.experienceYears} Years Exp</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Briefcase className="w-3.5 h-3.5 text-gold-500" />
                  <span>{c.supremeCourtAppearances}+ SC Appearances</span>
                </div>
              </div>

              <p className="text-xs text-slate-300 line-clamp-2">{c.bio}</p>
            </div>

            <div className="pt-3 border-t border-gold-500/10 grid grid-cols-2 gap-2 text-xs">
              <Link to={`/counsel/${c.id}`} className="py-2 rounded-lg bg-navy-850 text-slate-200 text-center font-semibold border border-gold-500/20">
                View Profile
              </Link>
              <button
                onClick={() => setSelectedCounsel(c)}
                className="py-2 rounded-lg bg-gold-500 text-navy-950 text-center font-bold"
              >
                Consult
              </button>
            </div>
          </div>
        ))}
      </div>

      <ConsultationModal counsel={selectedCounsel} isOpen={!!selectedCounsel} onClose={() => setSelectedCounsel(null)} />
    </div>
  );
};

import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  UserCheck,
  ShieldCheck,
  MapPin,
  Briefcase,
  Mail,
  Phone,
  ArrowLeft,
  MessageSquare,
  Bookmark,
  BookOpen
} from 'lucide-react';
import { getCounselById } from '../services/counselService';
import { ConsultationModal } from '../components/ConsultationModal';
import { useBookmarks } from '../context/BookmarkContext';

export const CounselDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const counsel = id ? getCounselById(id) : undefined;
  const [isConsultModalOpen, setIsConsultModalOpen] = useState(false);
  const { isBookmarked, toggle } = useBookmarks();

  if (!counsel) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center space-y-4">
        <UserCheck className="w-16 h-16 text-gold-500 mx-auto opacity-50" />
        <h2 className="text-2xl font-bold text-slate-100">Advocate Profile Not Found</h2>
        <button
          onClick={() => navigate('/counsel')}
          className="px-6 py-2.5 rounded-lg bg-gold-500 text-navy-950 font-bold text-sm"
        >
          Return to Counsel Hub
        </button>
      </div>
    );
  }

  const bookmarked = isBookmarked('counsel', counsel.id);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Back link */}
      <Link
        to="/counsel"
        className="inline-flex items-center gap-2 text-xs font-semibold text-gold-400 hover:text-gold-300 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Counsel Directory</span>
      </Link>

      {/* Main Profile Header Card */}
      <div className="bg-navy-900 border border-gold-500/30 rounded-2xl p-6 sm:p-8 shadow-2xl gold-border-glow space-y-6">
        <div className="flex flex-col sm:flex-row items-start justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-start gap-5">
            {counsel.avatarUrl ? (
              <img
                src={counsel.avatarUrl}
                alt={counsel.name}
                className="w-24 h-24 rounded-2xl object-cover border-2 border-gold-500/40 shadow-lg"
              />
            ) : (
              <div className="w-24 h-24 rounded-2xl bg-gold-500/20 text-gold-400 font-bold flex items-center justify-center text-2xl border-2 border-gold-500/40">
                {counsel.name.substring(0, 2)}
              </div>
            )}

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <h1 className="text-2xl sm:text-3xl font-serif font-bold text-slate-100">
                  {counsel.name}
                </h1>
                <span title="Verified Supreme Court Practitioner">
                  <ShieldCheck className="w-6 h-6 text-emerald-400 shrink-0" />
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-2 text-xs">
                <span className="font-bold text-gold-400 px-2.5 py-1 rounded bg-gold-500/15 border border-gold-500/30">
                  {counsel.designation}
                </span>
                {counsel.isAoR && (
                  <span className="font-semibold bg-emerald-500/15 text-emerald-300 px-2.5 py-1 rounded border border-emerald-500/30">
                    AoR Verified
                  </span>
                )}
                {counsel.isSeniorAdvocate && (
                  <span className="font-semibold bg-amber-500/15 text-amber-300 px-2.5 py-1 rounded border border-amber-500/30">
                    Senior Designation
                  </span>
                )}
              </div>

              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 pt-1">
                <div className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-gold-500" />
                  <span>{counsel.location}</span>
                </div>
                <span>•</span>
                <div className="flex items-center gap-1">
                  <Briefcase className="w-3.5 h-3.5 text-gold-500" />
                  <span>{counsel.experienceYears} Years Supreme Court & High Court Practice</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0 w-full sm:w-auto">
            <button
              onClick={() => toggle('counsel', counsel.id)}
              className={`p-3 rounded-xl border transition-all flex items-center gap-2 text-xs font-medium ${
                bookmarked
                  ? 'bg-gold-500 text-navy-950 border-gold-400 font-bold'
                  : 'bg-navy-850 border-gold-500/20 text-slate-300 hover:border-gold-400'
              }`}
            >
              <Bookmark className={`w-4 h-4 ${bookmarked ? 'fill-navy-950' : 'text-gold-400'}`} />
              <span>{bookmarked ? 'Saved' : 'Save'}</span>
            </button>

            <button
              onClick={() => setIsConsultModalOpen(true)}
              className="flex-1 sm:flex-none px-6 py-3 rounded-xl bg-gold-500 text-navy-950 font-bold hover:bg-gold-400 transition-colors shadow-lg flex items-center justify-center gap-2 text-xs"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Request Consultation</span>
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: About & Key Cases */}
        <div className="lg:col-span-2 space-y-8">
          {/* About */}
          <div className="bg-navy-900 border border-gold-500/20 rounded-2xl p-6 sm:p-8 space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-gold-400 border-b border-gold-500/15 pb-2">
              Chambers Profile & Experience
            </h3>
            <p className="text-sm text-slate-200 leading-relaxed font-sans">
              {counsel.bio}
            </p>
          </div>

          {/* Key Supreme Court Cases */}
          <div className="bg-navy-900 border border-gold-500/20 rounded-2xl p-6 sm:p-8 space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-gold-400 border-b border-gold-500/15 pb-2 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-gold-500" />
              <span>Notable Supreme Court Appearances & Matters</span>
            </h3>
            <div className="space-y-3">
              {counsel.keyCases.map((kc, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-navy-850 border border-gold-500/15 flex items-center justify-between text-xs text-slate-200"
                >
                  <span className="font-semibold">{kc}</span>
                  <span className="text-[10px] text-gold-400 font-mono">Supreme Court Record</span>
                </div>
              ))}
            </div>
          </div>

          {/* Practice Areas */}
          <div className="bg-navy-900 border border-gold-500/20 rounded-2xl p-6 space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-gold-400 border-b border-gold-500/15 pb-2">
              Primary Specializations & Practice Areas
            </h3>
            <div className="flex flex-wrap gap-2">
              {counsel.practiceAreas.map((pa, idx) => (
                <span
                  key={idx}
                  className="text-xs bg-navy-850 text-gold-300 font-semibold px-3 py-1.5 rounded-lg border border-gold-500/20"
                >
                  {pa}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Professional Details & Verification */}
        <div className="space-y-6">
          {/* Verification Status */}
          <div className="bg-navy-900 border border-gold-500/20 rounded-2xl p-6 space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              <span>Verification Credentials</span>
            </div>
            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex justify-between py-1.5 border-b border-gold-500/10">
                <span className="text-slate-400">Bar Enrollment:</span>
                <span className="font-mono text-slate-200 font-semibold">{counsel.barCouncilNo}</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-gold-500/10">
                <span className="text-slate-400">SC Appearances:</span>
                <span className="text-slate-200 font-semibold">{counsel.supremeCourtAppearances}+ Matters</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-gold-500/10">
                <span className="text-slate-400">AoR Certified:</span>
                <span className="text-emerald-400 font-semibold">{counsel.isAoR ? 'Verified AoR' : 'Non-AoR'}</span>
              </div>
              <div className="flex justify-between py-1.5">
                <span className="text-slate-400">Languages:</span>
                <span className="text-slate-200">{counsel.languages.join(', ')}</span>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-navy-900 border border-gold-500/20 rounded-2xl p-6 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-gold-400 border-b border-gold-500/15 pb-2">
              Chambers Registry Contact
            </h3>
            <div className="space-y-3 text-xs">
              <div className="flex items-center gap-2 text-slate-300">
                <Mail className="w-4 h-4 text-gold-500 shrink-0" />
                <span className="truncate">{counsel.contactEmail}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Phone className="w-4 h-4 text-gold-500 shrink-0" />
                <span>{counsel.contactPhone}</span>
              </div>
            </div>

            <button
              onClick={() => setIsConsultModalOpen(true)}
              className="w-full py-3 rounded-xl bg-gold-500 text-navy-950 font-bold hover:bg-gold-400 transition-colors shadow-md text-xs flex items-center justify-center gap-2 mt-4"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Submit Consultation Request</span>
            </button>
          </div>
        </div>
      </div>

      {/* Consultation Modal */}
      <ConsultationModal
        counsel={counsel}
        isOpen={isConsultModalOpen}
        onClose={() => setIsConsultModalOpen(false)}
      />
    </div>
  );
};

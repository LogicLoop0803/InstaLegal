import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  Scale,
  Bookmark,
  Share2,
  Copy,
  Download,
  ArrowLeft,
  Sparkles,
  CheckCircle,
  FileText,
  Check
} from 'lucide-react';
import { getJudgmentById } from '../services/judgmentService';
import { useBookmarks } from '../context/BookmarkContext';

export const JudgmentDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const judgment = id ? getJudgmentById(id) : undefined;
  const { isBookmarked, toggle } = useBookmarks();

  const [copiedCitation, setCopiedCitation] = useState(false);
  const [copiedShare, setCopiedShare] = useState(false);

  if (!judgment) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center space-y-4">
        <Scale className="w-16 h-16 text-gold-500 mx-auto opacity-50" />
        <h2 className="text-2xl font-bold text-slate-100">Judgment Record Not Found</h2>
        <p className="text-slate-400 text-sm">
          The requested Supreme Court judgment ID does not exist or has been archived.
        </p>
        <button
          onClick={() => navigate('/judgments')}
          className="px-6 py-2.5 rounded-lg bg-gold-500 text-navy-950 font-bold hover:bg-gold-400 text-sm"
        >
          Return to Judgments Catalog
        </button>
      </div>
    );
  }

  const bookmarked = isBookmarked('judgment', judgment.id);

  const handleCopyCitation = () => {
    navigator.clipboard.writeText(judgment.citation);
    setCopiedCitation(true);
    setTimeout(() => setCopiedCitation(false), 2000);
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedShare(true);
    setTimeout(() => setCopiedShare(false), 2000);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Back button */}
      <Link
        to="/judgments"
        className="inline-flex items-center gap-2 text-xs font-semibold text-gold-400 hover:text-gold-300 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Judgments</span>
      </Link>

      {/* Case Header Card */}
      <div className="bg-navy-900 border border-gold-500/30 rounded-2xl p-6 sm:p-8 shadow-2xl gold-border-glow space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 border-b border-gold-500/15 pb-6">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs uppercase font-bold tracking-wider px-3 py-1 rounded-full bg-gold-500/15 text-gold-300 border border-gold-500/30">
                {judgment.practiceArea}
              </span>
              <span className="text-xs font-mono text-slate-400 px-2.5 py-1 rounded bg-navy-850">
                {judgment.caseType}
              </span>
              {judgment.isConstitutional && (
                <span className="text-xs font-semibold text-gold-400 bg-gold-500/20 px-2.5 py-1 rounded border border-gold-400/40">
                  Constitutional Bench
                </span>
              )}
            </div>

            <h1 className="text-2xl sm:text-3xl font-serif font-bold text-slate-100 leading-snug">
              {judgment.caseTitle}
            </h1>

            <div className="text-sm font-mono text-gold-400 font-semibold">
              {judgment.citation} • {judgment.caseNumber}
            </div>
          </div>

          {/* Action Bar */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => toggle('judgment', judgment.id)}
              className={`p-2.5 rounded-xl border transition-all flex items-center gap-2 text-xs font-medium ${
                bookmarked
                  ? 'bg-gold-500 text-navy-950 border-gold-400 font-bold'
                  : 'bg-navy-850 border-gold-500/20 text-slate-300 hover:border-gold-400'
              }`}
              title="Bookmark Judgment"
            >
              <Bookmark className={`w-4 h-4 ${bookmarked ? 'fill-navy-950' : 'text-gold-400'}`} />
              <span>{bookmarked ? 'Bookmarked' : 'Bookmark'}</span>
            </button>

            <button
              onClick={handleCopyCitation}
              className="p-2.5 rounded-xl bg-navy-850 border border-gold-500/20 text-slate-300 hover:border-gold-400 transition-all flex items-center gap-1.5 text-xs"
              title="Copy Citation"
            >
              {copiedCitation ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-gold-400" />}
              <span>{copiedCitation ? 'Copied' : 'Citation'}</span>
            </button>

            <button
              onClick={handleShare}
              className="p-2.5 rounded-xl bg-navy-850 border border-gold-500/20 text-slate-300 hover:border-gold-400 transition-all flex items-center gap-1.5 text-xs"
              title="Share Link"
            >
              {copiedShare ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4 text-gold-400" />}
              <span>{copiedShare ? 'Copied' : 'Share'}</span>
            </button>
          </div>
        </div>

        {/* Bench & Judges Details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-300 bg-navy-850 p-4 rounded-xl border border-gold-500/10">
          <div>
            <span className="text-slate-400 uppercase font-bold block mb-1">Bench Composition</span>
            <span className="font-semibold text-slate-100">{judgment.bench}</span> • Decided on {judgment.judgmentDate}
          </div>
          <div>
            <span className="text-slate-400 uppercase font-bold block mb-1">Judges</span>
            <span className="text-slate-200">{judgment.judges.join(', ')}</span>
          </div>
        </div>
      </div>

      {/* RATIO DECIDENDI HIGHLIGHT CARD */}
      <div className="bg-navy-900 border-2 border-gold-500/40 rounded-2xl p-6 sm:p-8 space-y-3 shadow-xl gold-border-glow relative overflow-hidden">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gold-400">
            <Sparkles className="w-4 h-4 text-gold-400" />
            <span>RATIO DECIDENDI (BINDING LEGAL PRINCIPLE)</span>
          </div>
          <span className="text-[10px] bg-gold-500/15 text-gold-300 px-2 py-0.5 rounded border border-gold-500/30">
            Apex Ratio Verified
          </span>
        </div>
        <p className="text-base sm:text-lg font-serif italic text-slate-100 leading-relaxed pl-4 border-l-4 border-gold-500">
          "{judgment.ratioDecidendi}"
        </p>
      </div>

      {/* AI SUMMARY SECTION */}
      <div className="bg-navy-900 border border-gold-500/20 rounded-2xl p-6 sm:p-8 space-y-4">
        <div className="text-xs font-bold uppercase tracking-wider text-gold-400 flex items-center gap-2">
          <FileText className="w-4 h-4 text-gold-500" />
          <span>AI EXECUTIVE SUMMARY</span>
        </div>
        <p className="text-sm text-slate-300 leading-relaxed">
          {judgment.summary}
        </p>
      </div>

      {/* KEY ISSUES & KEY HOLDINGS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Issues */}
        <div className="bg-navy-900 border border-gold-500/20 rounded-2xl p-6 space-y-4">
          <h3 className="text-sm font-bold uppercase tracking-wider text-gold-400 border-b border-gold-500/15 pb-2">
            KEY LEGAL ISSUES
          </h3>
          <ul className="space-y-2.5 text-xs text-slate-300">
            {judgment.keyIssues.map((issue, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gold-400 mt-1.5 shrink-0"></span>
                <span className="leading-relaxed">{issue}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Holdings */}
        <div className="bg-navy-900 border border-gold-500/20 rounded-2xl p-6 space-y-4">
          <h3 className="text-sm font-bold uppercase tracking-wider text-gold-400 border-b border-gold-500/15 pb-2">
            KEY HOLDINGS & DIRECTIVES
          </h3>
          <ul className="space-y-2.5 text-xs text-slate-300">
            {judgment.keyHoldings.map((holding, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{holding}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* RELEVANT STATUTORY PROVISIONS */}
      <div className="bg-navy-900 border border-gold-500/20 rounded-2xl p-6 space-y-4">
        <h3 className="text-sm font-bold uppercase tracking-wider text-gold-400 border-b border-gold-500/15 pb-2">
          RELEVANT STATUTORY PROVISIONS
        </h3>
        <div className="flex flex-wrap gap-2">
          {judgment.relevantProvisions.map((prov, idx) => (
            <span
              key={idx}
              className="text-xs bg-navy-850 text-slate-200 px-3 py-1.5 rounded-lg border border-gold-500/20 font-mono"
            >
              {prov}
            </span>
          ))}
        </div>
      </div>

      {/* FULL JUDGMENT REFERENCE / DOWNLOAD */}
      <div className="p-6 rounded-2xl bg-navy-850 border border-gold-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <div className="text-sm font-bold text-slate-100">Official Supreme Court Record Source</div>
          <p className="text-xs text-slate-400">
            Download certified full judgment PDF or view raw registry text.
          </p>
        </div>

        <a
          href={judgment.fullTextPdfUrl || '#'}
          onClick={(e) => {
            e.preventDefault();
            alert(`Demo Environment: Downloading PDF for ${judgment.citation}`);
          }}
          className="px-6 py-2.5 rounded-xl bg-gold-500 text-navy-950 font-bold hover:bg-gold-400 transition-colors flex items-center gap-2 text-xs shrink-0"
        >
          <Download className="w-4 h-4" />
          <span>Download PDF (Demo)</span>
        </a>
      </div>
    </div>
  );
};

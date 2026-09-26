import React from 'react';
import { Link } from 'react-router-dom';
import {
  UserCheck,
  Bookmark,
  ArrowRight,
  Shield,
  Clock,
  DollarSign,
  UserX,
  FileText,
  Sparkles,
  CheckCircle,
  Zap,
  ChevronRight
} from 'lucide-react';
import { CountUpStat } from '../components/CountUpStat';
import { SEEDED_JUDGMENTS } from '../data/judgmentsData';
import { SEEDED_NEWS } from '../data/newsData';
import { SEEDED_COUNSEL } from '../data/counselData';
import { useBookmarks } from '../context/BookmarkContext';

export const LandingPage: React.FC = () => {
  const { isBookmarked, toggle } = useBookmarks();

  const featuredJudgments = SEEDED_JUDGMENTS.slice(0, 6);
  const featuredNews = SEEDED_NEWS.slice(0, 4);
  const featuredCounsel = SEEDED_COUNSEL.slice(0, 4);

  return (
    <div className="space-y-24 pb-16 overflow-hidden">
      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-12 lg:pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-semibold tracking-wide">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-gold-500"></span>
              </span>
              <span>LIVE LEGAL INTELLIGENCE</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-slate-100 leading-[1.15] tracking-tight">
              Supreme Court Intelligence.{' '}
              <span className="gold-gradient-text block mt-1 font-sans">
                Without the Information Lag.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              Track Supreme Court judgments, understand the ratio decidendi, follow critical legal developments, and discover verified counsel — in one intelligent legal platform.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Link
                to="/judgments"
                className="px-8 py-3.5 rounded-xl bg-gold-500 text-navy-950 font-bold hover:bg-gold-400 transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.25)] flex items-center justify-center gap-2 group text-base"
              >
                <span>Explore Judgments</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/counsel"
                className="px-8 py-3.5 rounded-xl bg-navy-850 text-slate-100 font-semibold border border-gold-500/30 hover:border-gold-400 hover:bg-navy-800 transition-all text-base flex items-center justify-center gap-2"
              >
                <UserCheck className="w-5 h-5 text-gold-400" />
                <span>Explore Counsel</span>
              </Link>
            </div>

            <div className="pt-6 border-t border-gold-500/15 grid grid-cols-3 gap-4 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-gold-500" />
                <span>Verified Supreme Court Counsel</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-gold-500" />
                <span>30-Min Ratio Processing</span>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-gold-500" />
                <span>Full Citations & Texts</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl bg-navy-900 border border-gold-500/30 p-5 shadow-2xl gold-border-glow overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent animate-scan z-20"></div>

              <div className="flex items-center justify-between pb-4 border-b border-gold-500/20 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                  <span className="text-slate-400 ml-2 font-mono">InstaLegal Terminal v2.4</span>
                </div>
                <span className="text-gold-400 font-mono text-[11px]">24 SEP 2026</span>
              </div>

              <div className="mt-4 space-y-4">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-gold-500/15 text-gold-300 border border-gold-500/30">
                      CONSTITUTIONAL LAW
                    </span>
                    <h3 className="text-base font-bold text-slate-100 mt-2 leading-snug">
                      State of Maharashtra v. Ananya Infra Ventures Pvt Ltd
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">2026 INSC 482 • 3-Judge Bench</p>
                  </div>
                  <button
                    onClick={() => toggle('judgment', 'sc-2026-001')}
                    className="p-2 rounded-lg bg-navy-850 text-gold-400 hover:bg-navy-800 transition-colors"
                  >
                    <Bookmark className={`w-4 h-4 ${isBookmarked('judgment', 'sc-2026-001') ? 'fill-gold-400' : ''}`} />
                  </button>
                </div>

                <div className="p-3.5 rounded-xl bg-navy-850/80 border border-gold-500/15 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gold-400 font-semibold flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5" />
                      AI RATIO DECIDENDI SUMMARY
                    </span>
                    <span className="text-[10px] text-slate-500">Turnaround: 18 mins</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed italic">
                    "Executive expropriation of contractual concession rights without statutory valuation mechanisms violates Article 300A."
                  </p>
                </div>

                <div className="space-y-1.5 text-xs text-slate-400">
                  <div className="flex justify-between py-1 border-b border-gold-500/10">
                    <span>Bench:</span>
                    <span className="text-slate-200">Justice D.Y. Chandrachud (Former CJI) + 2</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-gold-500/10">
                    <span>Key Act:</span>
                    <span className="text-slate-200">Article 300A, Constitution of India</span>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <span className="text-xs text-emerald-400 flex items-center gap-1 font-medium">
                    <CheckCircle className="w-3.5 h-3.5" />
                    Verified Apex Ratio
                  </span>
                  <Link
                    to="/judgments/sc-2026-001"
                    className="text-xs font-bold text-gold-400 hover:text-gold-300 flex items-center gap-1"
                  >
                    <span>Read Full Ratio</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= STATS SECTION ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <CountUpStat end={1.8} suffix="M+" label="Registered Advocates" sublabel="Across Indian High Courts & District Bar Associations" />
          <CountUpStat end={3000} suffix="+" label="Supreme Court AoRs" sublabel="Advocates-on-Record practicing in Apex Court" />
          <CountUpStat end={70} suffix="M+" label="Litigants & Corporate Seekers" sublabel="Requiring accessible Supreme Court intelligence" />
          <CountUpStat end={30} suffix=" min" label="Target Intelligence Turnaround" sublabel="AI-assisted Ratio extraction speed" />
        </div>
      </section>

      {/* ================= PROBLEM SECTION ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <h2 className="text-xs font-bold uppercase tracking-widest text-gold-400">THE INEFFICIENCY IN LEGAL RESEARCH</h2>
          <h3 className="text-3xl sm:text-4xl font-serif font-bold text-slate-100">
            The Legal Information Void
          </h3>
          <p className="text-slate-400 text-sm">
            Traditional tools leave litigators and research teams struggling with high costs, slow updates, and opaque counsel selection.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl bg-navy-900 border border-gold-500/15 glass-panel-subtle hover:border-gold-500/40 transition-all duration-300 group">
            <div className="w-12 h-12 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <DollarSign className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold text-slate-100 mb-2">Expensive Intelligence</h4>
            <p className="text-sm text-slate-400 leading-relaxed">
              Traditional legal databases can cost <strong className="text-slate-200">₹25,000–₹55,000/year</strong> per license, placing prohibitive costs on junior litigators, independent advocates, and law students.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-navy-900 border border-gold-500/15 glass-panel-subtle hover:border-gold-500/40 transition-all duration-300 group">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Clock className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold text-slate-100 mb-2">Order Lag</h4>
            <p className="text-sm text-slate-400 leading-relaxed">
              Court judgments and cause-list orders take significant time to become actionable legal intelligence, causing missed procedural windows for litigators.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-navy-900 border border-gold-500/15 glass-panel-subtle hover:border-gold-500/40 transition-all duration-300 group">
            <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/20 text-gold-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <UserX className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold text-slate-100 mb-2">Opaque Counsel Discovery</h4>
            <p className="text-sm text-slate-400 leading-relaxed">
              Finding and verifying appropriate Supreme Court Advocates-on-Record (AoR) or Senior Counsel remains locked behind word-of-mouth networks.
            </p>
          </div>
        </div>
      </section>

      {/* ================= CORE SOLUTIONS ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <h2 className="text-xs font-bold uppercase tracking-widest text-gold-400">THE INSTALEGAL PLATFORM</h2>
          <h3 className="text-3xl sm:text-4xl font-serif font-bold text-slate-100">
            Three Layers of Legal Intelligence
          </h3>
          <p className="text-slate-400 text-sm">
            Designed specifically for Advocates, AoRs, researchers, and corporate legal departments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl bg-navy-900 border border-gold-500/20 flex flex-col justify-between hover:border-gold-400 transition-all duration-300 gold-border-glow">
            <div>
              <div className="w-12 h-12 rounded-xl bg-gold-500/20 text-gold-400 font-bold text-xl flex items-center justify-center mb-6 border border-gold-500/40">
                01
              </div>
              <h4 className="text-xl font-bold text-slate-100 mb-3 uppercase tracking-wide">
                DAILY SC JUDGMENTS
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Access Supreme Court judgments and daily orders with concise AI-assisted summaries and key ratio decidendi.
              </p>

              <ul className="space-y-2 text-xs text-slate-400 mb-8">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-gold-500" />
                  <span>Real-time Judgment Search & Filters</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-gold-500" />
                  <span>Bench Composition & Practice Areas</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-gold-500" />
                  <span>AI Ratio Decidendi Extraction</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-gold-500" />
                  <span>Statutory Provision Cross-References</span>
                </li>
              </ul>
            </div>

            <Link
              to="/judgments"
              className="w-full py-3 rounded-xl bg-gold-500/10 text-gold-300 font-semibold border border-gold-500/30 hover:bg-gold-500 hover:text-navy-950 transition-colors text-center text-sm block"
            >
              Browse Judgments
            </Link>
          </div>

          <div className="p-8 rounded-2xl bg-navy-900 border border-gold-500/20 flex flex-col justify-between hover:border-gold-400 transition-all duration-300 gold-border-glow">
            <div>
              <div className="w-12 h-12 rounded-xl bg-gold-500/20 text-gold-400 font-bold text-xl flex items-center justify-center mb-6 border border-gold-500/40">
                02
              </div>
              <h4 className="text-xl font-bold text-slate-100 mb-3 uppercase tracking-wide">
                CURATED LEGAL NEWS
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Follow concise daily briefs covering major hearings, cause-list developments, constitutional matters and important rulings.
              </p>

              <ul className="space-y-2 text-xs text-slate-400 mb-8">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-gold-500" />
                  <span>Daily Editorial Legal Briefings</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-gold-500" />
                  <span>Category Filters (Arbitration, IBC, PMLA)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-gold-500" />
                  <span>Full Article Analysis</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-gold-500" />
                  <span>Save & Bookmark Articles</span>
                </li>
              </ul>
            </div>

            <Link
              to="/news"
              className="w-full py-3 rounded-xl bg-gold-500/10 text-gold-300 font-semibold border border-gold-500/30 hover:bg-gold-500 hover:text-navy-950 transition-colors text-center text-sm block"
            >
              Read Legal News
            </Link>
          </div>

          <div className="p-8 rounded-2xl bg-navy-900 border border-gold-500/20 flex flex-col justify-between hover:border-gold-400 transition-all duration-300 gold-border-glow">
            <div>
              <div className="w-12 h-12 rounded-xl bg-gold-500/20 text-gold-400 font-bold text-xl flex items-center justify-center mb-6 border border-gold-500/40">
                03
              </div>
              <h4 className="text-xl font-bold text-slate-100 mb-3 uppercase tracking-wide">
                VERIFIED COUNSEL HUB
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Discover Supreme Court Advocates-on-Record and Senior Advocates using verified professional information.
              </p>

              <ul className="space-y-2 text-xs text-slate-400 mb-8">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-gold-500" />
                  <span>Search Advocates & Senior Counsel</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-gold-500" />
                  <span>Verified AoR Status & Bar Enrollment</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-gold-500" />
                  <span>Practice Area & Supreme Court Experience</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-gold-500" />
                  <span>Direct Consultation Request Routing</span>
                </li>
              </ul>
            </div>

            <Link
              to="/counsel"
              className="w-full py-3 rounded-xl bg-gold-500/10 text-gold-300 font-semibold border border-gold-500/30 hover:bg-gold-500 hover:text-navy-950 transition-colors text-center text-sm block"
            >
              Find Counsel
            </Link>
          </div>
        </div>
      </section>

      {/* ================= HOW IT WORKS TIMELINE ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-navy-900/60 p-8 sm:p-12 rounded-3xl border border-gold-500/15">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <h2 className="text-xs font-bold uppercase tracking-widest text-gold-400">WORKFLOW</h2>
          <h3 className="text-3xl font-serif font-bold text-slate-100">
            How InstaLegal Works
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          <div className="p-6 rounded-2xl bg-navy-850 border border-gold-500/20 relative group hover:border-gold-400 transition-colors">
            <div className="text-3xl font-extrabold text-gold-500/40 font-mono mb-3 group-hover:text-gold-400 transition-colors">
              01
            </div>
            <h4 className="text-lg font-bold text-slate-100 mb-2 uppercase">SEARCH</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Find the exact Supreme Court judgment, legal issue, statute, or advocate you need in seconds.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-navy-850 border border-gold-500/20 relative group hover:border-gold-400 transition-colors">
            <div className="text-3xl font-extrabold text-gold-500/40 font-mono mb-3 group-hover:text-gold-400 transition-colors">
              02
            </div>
            <h4 className="text-lg font-bold text-slate-100 mb-2 uppercase">UNDERSTAND</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Read concise AI summaries, key legal points, and exact ratio decidendi without reading 100-page judgments.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-navy-850 border border-gold-500/20 relative group hover:border-gold-400 transition-colors">
            <div className="text-3xl font-extrabold text-gold-500/40 font-mono mb-3 group-hover:text-gold-400 transition-colors">
              03
            </div>
            <h4 className="text-lg font-bold text-slate-100 mb-2 uppercase">VERIFY</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Review source citations, bench composition, and verified counsel credentials for litigation strategy.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-navy-850 border border-gold-500/20 relative group hover:border-gold-400 transition-colors">
            <div className="text-3xl font-extrabold text-gold-500/40 font-mono mb-3 group-hover:text-gold-400 transition-colors">
              04
            </div>
            <h4 className="text-lg font-bold text-slate-100 mb-2 uppercase">ACT</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Save to your research workspace, share citations, or submit direct consultation requests to Supreme Court counsel.
            </p>
          </div>
        </div>
      </section>

      {/* ================= FEATURED JUDGMENTS ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-10 border-b border-gold-500/15 pb-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-gold-400">APEX COURT INTELLIGENCE</span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-100 mt-1">
              Latest Supreme Court Judgments
            </h2>
          </div>

          <Link
            to="/judgments"
            className="text-xs font-bold text-gold-400 hover:text-gold-300 flex items-center gap-1"
          >
            <span>View All Judgments</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredJudgments.map((j) => {
            const bookmarked = isBookmarked('judgment', j.id);
            return (
              <div
                key={j.id}
                className="p-6 rounded-2xl bg-navy-900 border border-gold-500/20 flex flex-col justify-between hover:border-gold-400 transition-all duration-300 group"
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

                  <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed mb-6">
                    {j.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-gold-500/10 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-gold-400">{j.citation}</span>
                  <Link
                    to={`/judgments/${j.id}`}
                    className="text-xs font-semibold text-slate-200 hover:text-gold-300 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                  >
                    <span>Read Judgment</span>
                    <ChevronRight className="w-3.5 h-3.5 text-gold-400" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ================= EDITORIAL LEGAL NEWS ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-10 border-b border-gold-500/15 pb-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-gold-400">DAILY LEGAL BRIEFING</span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-100 mt-1">
              Curated Legal News
            </h2>
          </div>

          <Link
            to="/news"
            className="text-xs font-bold text-gold-400 hover:text-gold-300 flex items-center gap-1"
          >
            <span>Read All News</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredNews.map((n) => (
            <div
              key={n.id}
              className="p-6 rounded-2xl bg-navy-900 border border-gold-500/20 flex flex-col sm:flex-row gap-6 hover:border-gold-400 transition-all group"
            >
              {n.imageUrl && (
                <div className="sm:w-44 h-36 rounded-xl overflow-hidden shrink-0 bg-navy-850">
                  <img
                    src={n.imageUrl}
                    alt={n.headline}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-[11px] text-gold-400 mb-2 font-medium">
                    <span className="px-2 py-0.5 rounded bg-gold-500/15 border border-gold-500/30">
                      {n.category}
                    </span>
                    <span>•</span>
                    <span>{n.readTime}</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-100 group-hover:text-gold-300 transition-colors leading-snug line-clamp-2 mb-2">
                    {n.headline}
                  </h3>
                  <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                    {n.summary}
                  </p>
                </div>

                <div className="pt-4 mt-2 border-t border-gold-500/10 flex items-center justify-between text-xs text-slate-400">
                  <span>{n.publishedDate}</span>
                  <Link
                    to={`/news/${n.id}`}
                    className="font-bold text-gold-400 hover:text-gold-300 flex items-center gap-1"
                  >
                    <span>Read Story</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= COUNSEL HUB PREVIEW ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-10 border-b border-gold-500/15 pb-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-gold-400">VERIFIED DIRECTORY</span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-100 mt-1">
              Verified Supreme Court Counsel
            </h2>
          </div>

          <Link
            to="/counsel"
            className="text-xs font-bold text-gold-400 hover:text-gold-300 flex items-center gap-1"
          >
            <span>Search All Advocates</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredCounsel.map((c) => (
            <div
              key={c.id}
              className="p-5 rounded-2xl bg-navy-900 border border-gold-500/20 hover:border-gold-400 transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  {c.avatarUrl ? (
                    <img
                      src={c.avatarUrl}
                      alt={c.name}
                      className="w-12 h-12 rounded-full object-cover border border-gold-500/40"
                    />
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-gold-500/20 text-gold-400 font-bold flex items-center justify-center text-sm border border-gold-500/40">
                      {c.name.substring(0, 2)}
                    </div>
                  )}
                  <div>
                    <h4 className="text-sm font-bold text-slate-100 group-hover:text-gold-300 transition-colors">
                      {c.name}
                    </h4>
                    <span className="text-[11px] font-semibold text-gold-400 block">
                      {c.designation}
                    </span>
                  </div>
                </div>

                <div className="space-y-2 text-xs text-slate-300 mb-4">
                  <div className="flex items-center justify-between text-slate-400">
                    <span>Location:</span>
                    <span className="text-slate-200">{c.location}</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-400">
                    <span>Experience:</span>
                    <span className="text-slate-200">{c.experienceYears} Years</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-400">
                    <span>SC Appearances:</span>
                    <span className="text-slate-200">{c.supremeCourtAppearances}+</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                  {c.practiceAreas.slice(0, 2).map((pa, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] bg-navy-850 text-slate-300 px-2 py-0.5 rounded border border-gold-500/10"
                    >
                      {pa}
                    </span>
                  ))}
                </div>
              </div>

              <Link
                to={`/counsel/${c.id}`}
                className="w-full py-2.5 rounded-lg bg-gold-500/10 text-gold-300 font-semibold border border-gold-500/30 hover:bg-gold-500 hover:text-navy-950 transition-colors text-center text-xs block"
              >
                View Profile
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-r from-navy-900 via-navy-850 to-navy-900 border border-gold-500/30 p-8 sm:p-14 text-center overflow-hidden gold-border-glow">
          <div className="max-w-2xl mx-auto space-y-6 relative z-10">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-100">
              Transform Your Legal Research Workflow Today
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Join Advocates, Advocates-on-Record, researchers, and corporate teams using InstaLegal for real-time Apex Court legal intelligence.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2">
              <Link
                to="/signup"
                className="px-8 py-3.5 rounded-xl bg-gold-500 text-navy-950 font-bold hover:bg-gold-400 transition-colors shadow-lg text-base"
              >
                Get Started Free
              </Link>
              <Link
                to="/pricing"
                className="px-8 py-3.5 rounded-xl bg-navy-850 text-slate-200 font-semibold border border-gold-500/30 hover:bg-navy-800 text-base"
              >
                View Pricing Plans
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

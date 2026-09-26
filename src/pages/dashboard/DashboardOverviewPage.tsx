import React from 'react';
import { Link } from 'react-router-dom';
import {
  Scale,
  Newspaper,
  UserCheck,
  Bookmark,
  Sparkles,
  TrendingUp
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useBookmarks } from '../../context/BookmarkContext';
import { SEEDED_JUDGMENTS } from '../../data/judgmentsData';
import { SEEDED_NEWS } from '../../data/newsData';
import { NyayaAIAssistant } from '../../components/NyayaAIAssistant';

export const DashboardOverviewPage: React.FC = () => {
  const { user } = useAuth();
  const { bookmarks } = useBookmarks();

  const savedJudgmentsCount = bookmarks.filter(b => b.type === 'judgment').length;
  const savedNewsCount = bookmarks.filter(b => b.type === 'news').length;

  const latestJudgments = SEEDED_JUDGMENTS.slice(0, 4);
  const latestNews = SEEDED_NEWS.slice(0, 3);

  return (
    <div className="space-y-8">
      {/* Top Welcome Banner */}
      <div className="bg-navy-900 border border-gold-500/20 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xl gold-border-glow">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-gold-400 bg-gold-500/15 px-2.5 py-0.5 rounded border border-gold-500/30">
              LEGAL TERMINAL ACTIVE
            </span>
            <span className="text-xs text-slate-400 font-mono">25 SEP 2026</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-serif font-bold text-slate-100">
            Good morning, {user?.name || 'Advocate'}.
          </h1>
          <p className="text-xs sm:text-sm text-slate-400">
            Welcome to your InstaLegal Supreme Court Intelligence dashboard.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link
            to="/dashboard/judgments"
            className="px-4 py-2.5 rounded-xl bg-gold-500 text-navy-950 font-bold text-xs hover:bg-gold-400 transition-colors shadow-md flex items-center gap-1.5"
          >
            <Scale className="w-4 h-4" />
            <span>Search Judgments</span>
          </Link>
          <Link
            to="/dashboard/counsel"
            className="px-4 py-2.5 rounded-xl bg-navy-850 text-slate-200 border border-gold-500/20 hover:border-gold-400 font-semibold text-xs transition-colors flex items-center gap-1.5"
          >
            <UserCheck className="w-4 h-4 text-gold-400" />
            <span>Find Counsel</span>
          </Link>
        </div>
      </div>

      {/* Morning Brief Card */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-navy-900 via-navy-850 to-navy-900 border border-gold-500/30 shadow-xl space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-bold text-gold-400 uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-gold-400" />
            <span>MORNING INTELLIGENCE BRIEF</span>
          </div>
          <span className="text-[11px] text-slate-400 font-mono">Updated 20 mins ago</span>
        </div>
        <p className="text-sm text-slate-200 leading-relaxed font-serif italic">
          "5 new Supreme Court judgments indexed today including landmark Article 300A expropriation ratio • 8 critical legal briefs published • 3 saved research topics updated."
        </p>
      </div>

      {/* Top Metric Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-5 rounded-xl bg-navy-900 border border-gold-500/15 flex items-center justify-between">
          <div>
            <div className="text-2xl font-extrabold text-gold-400 font-sans">5</div>
            <div className="text-xs font-semibold text-slate-200 mt-1">New Judgments Today</div>
            <div className="text-[10px] text-slate-400 mt-0.5">Apex court registry feed</div>
          </div>
          <div className="w-10 h-10 rounded-lg bg-gold-500/10 text-gold-400 flex items-center justify-center">
            <Scale className="w-5 h-5" />
          </div>
        </div>

        <div className="p-5 rounded-xl bg-navy-900 border border-gold-500/15 flex items-center justify-between">
          <div>
            <div className="text-2xl font-extrabold text-gold-400 font-sans">{savedJudgmentsCount}</div>
            <div className="text-xs font-semibold text-slate-200 mt-1">Saved Judgments</div>
            <div className="text-[10px] text-slate-400 mt-0.5">In local workspace</div>
          </div>
          <div className="w-10 h-10 rounded-lg bg-gold-500/10 text-gold-400 flex items-center justify-center">
            <Bookmark className="w-5 h-5" />
          </div>
        </div>

        <div className="p-5 rounded-xl bg-navy-900 border border-gold-500/15 flex items-center justify-between">
          <div>
            <div className="text-2xl font-extrabold text-gold-400 font-sans">{savedNewsCount}</div>
            <div className="text-xs font-semibold text-slate-200 mt-1">Saved News</div>
            <div className="text-[10px] text-slate-400 mt-0.5">Bookmarked briefs</div>
          </div>
          <div className="w-10 h-10 rounded-lg bg-gold-500/10 text-gold-400 flex items-center justify-center">
            <Newspaper className="w-5 h-5" />
          </div>
        </div>

        <div className="p-5 rounded-xl bg-navy-900 border border-gold-500/15 flex items-center justify-between">
          <div>
            <div className="text-2xl font-extrabold text-gold-400 font-sans">8</div>
            <div className="text-xs font-semibold text-slate-200 mt-1">Recent Searches</div>
            <div className="text-[10px] text-slate-400 mt-0.5">Ratio & statute queries</div>
          </div>
          <div className="w-10 h-10 rounded-lg bg-gold-500/10 text-gold-400 flex items-center justify-center">
            <TrendingUp className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Main Grid: Intelligence Feed + Nyaya AI Assistant */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-7 space-y-8">
          <div className="bg-navy-900 border border-gold-500/20 rounded-2xl p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-gold-500/15 pb-4">
              <div className="flex items-center gap-2">
                <Scale className="w-5 h-5 text-gold-500" />
                <h3 className="font-serif font-bold text-slate-100 text-lg">Today's Apex Judgments</h3>
              </div>
              <Link to="/dashboard/judgments" className="text-xs font-bold text-gold-400 hover:text-gold-300">
                View All →
              </Link>
            </div>

            <div className="space-y-3">
              {latestJudgments.map((j) => (
                <div
                  key={j.id}
                  className="p-4 rounded-xl bg-navy-850 border border-gold-500/15 hover:border-gold-400 transition-colors space-y-2 group"
                >
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-gold-400">{j.practiceArea}</span>
                    <span className="text-slate-400 font-mono text-[11px]">{j.citation}</span>
                  </div>
                  <h4 className="font-bold text-slate-100 group-hover:text-gold-300 transition-colors text-sm">
                    {j.caseTitle}
                  </h4>
                  <p className="text-xs text-slate-300 line-clamp-2 italic">
                    "{j.ratioDecidendi}"
                  </p>
                  <div className="pt-2 flex items-center justify-between text-xs text-slate-400">
                    <span>{j.bench}</span>
                    <Link to={`/judgments/${j.id}`} className="text-gold-400 font-semibold hover:underline">
                      Read Ratio →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-navy-900 border border-gold-500/20 rounded-2xl p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-gold-500/15 pb-4">
              <div className="flex items-center gap-2">
                <Newspaper className="w-5 h-5 text-gold-500" />
                <h3 className="font-serif font-bold text-slate-100 text-lg">Critical Legal Briefings</h3>
              </div>
              <Link to="/dashboard/news" className="text-xs font-bold text-gold-400 hover:text-gold-300">
                Read Feed →
              </Link>
            </div>

            <div className="space-y-3">
              {latestNews.map((n) => (
                <div key={n.id} className="p-4 rounded-xl bg-navy-850 border border-gold-500/10 space-y-1.5">
                  <div className="text-[11px] text-gold-400 font-semibold">{n.category} • {n.publishedDate}</div>
                  <h4 className="font-bold text-slate-200 text-sm">{n.headline}</h4>
                  <p className="text-xs text-slate-400 line-clamp-2">{n.summary}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 h-[650px] sticky top-20">
          <NyayaAIAssistant />
        </div>
      </div>
    </div>
  );
};

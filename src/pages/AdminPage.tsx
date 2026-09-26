import React, { useState } from 'react';
import { ShieldAlert, Scale, Newspaper, Check } from 'lucide-react';
import { addJudgment } from '../services/judgmentService';
import { addNewsArticle } from '../services/newsService';
import type { PracticeArea, CaseType, NewsCategory } from '../types';

export const AdminPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'judgments' | 'news'>('judgments');
  const [successMsg, setSuccessMsg] = useState('');

  // Form states for new judgment
  const [caseTitle, setCaseTitle] = useState('');
  const [caseNumber] = useState('Civil Appeal No. 9901 of 2026');
  const [bench] = useState('3-Judge Bench');
  const [judges] = useState('Justice D. Y. Chandrachud (Former CJI)');
  const [practiceArea, setPracticeArea] = useState<PracticeArea>('Constitutional Law');
  const [caseType] = useState<CaseType>('Civil Appeal');
  const [summary, setSummary] = useState('');
  const [ratioDecidendi, setRatioDecidendi] = useState('');
  const [citation, setCitation] = useState('');

  // Form states for new news
  const [headline, setHeadline] = useState('');
  const [newsSummary, setNewsSummary] = useState('');
  const [newsCategory, setNewsCategory] = useState<NewsCategory>('Supreme Court');
  const [fullContent, setFullContent] = useState('');

  const handleAddJudgment = (e: React.FormEvent) => {
    e.preventDefault();
    addJudgment({
      caseTitle: `${caseTitle} (Demo)`,
      caseNumber,
      judgmentDate: '25 September 2026',
      bench,
      judges: judges.split(',').map(j => j.trim()),
      practiceArea,
      caseType,
      summary,
      keyIssues: ['Validity of administrative takeover under statutory emergency rules'],
      ratioDecidendi,
      keyHoldings: ['Executive actions must satisfy procedural natural justice'],
      relevantProvisions: ['Article 300A, Constitution of India'],
      citation: citation || '2026 INSC 500 (Demo)'
    });
    setSuccessMsg('Demo judgment published to intelligence index!');
    setCaseTitle('');
    setSummary('');
    setRatioDecidendi('');
    setTimeout(() => setSuccessMsg(''), 3000);
  };

  const handleAddNews = (e: React.FormEvent) => {
    e.preventDefault();
    addNewsArticle({
      headline: `${headline} (Demo)`,
      summary: newsSummary,
      fullContent: fullContent || newsSummary,
      category: newsCategory,
      publishedDate: '25 September 2026',
      readTime: '3 min read',
      author: 'Admin Desk, InstaLegal',
      source: 'Supreme Court Media'
    });
    setSuccessMsg('Demo legal news brief published!');
    setHeadline('');
    setNewsSummary('');
    setFullContent('');
    setTimeout(() => setSuccessMsg(''), 3000);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 space-y-8">
      <div className="bg-navy-900 border border-gold-500/30 rounded-2xl p-6 shadow-xl gold-border-glow space-y-3">
        <div className="flex items-center gap-2 text-xs font-bold text-gold-400 uppercase">
          <ShieldAlert className="w-5 h-5 text-gold-500" />
          <span>InstaLegal Content Administration (Demo Console)</span>
        </div>
        <h1 className="text-2xl font-serif font-bold text-slate-100">
          Admin Portal — Publish Intelligence Records
        </h1>
        <p className="text-xs text-slate-400">
          Operate mock backend dataset: inject judgments or publish editorial briefs into local runtime state.
        </p>
      </div>

      {successMsg && (
        <div className="p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-emerald-300 text-xs font-semibold flex items-center gap-2">
          <Check className="w-4 h-4 text-emerald-400" />
          <span>{successMsg}</span>
        </div>
      )}

      {/* Tabs */}
      <div className="flex gap-2 border-b border-gold-500/15 pb-2">
        <button
          onClick={() => setActiveTab('judgments')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-colors ${
            activeTab === 'judgments'
              ? 'bg-gold-500 text-navy-950'
              : 'bg-navy-900 text-slate-400 border border-gold-500/20'
          }`}
        >
          <Scale className="w-4 h-4" />
          <span>Publish Judgment</span>
        </button>

        <button
          onClick={() => setActiveTab('news')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-colors ${
            activeTab === 'news'
              ? 'bg-gold-500 text-navy-950'
              : 'bg-navy-900 text-slate-400 border border-gold-500/20'
          }`}
        >
          <Newspaper className="w-4 h-4" />
          <span>Publish Legal News</span>
        </button>
      </div>

      {/* Forms */}
      {activeTab === 'judgments' && (
        <form onSubmit={handleAddJudgment} className="bg-navy-900 border border-gold-500/20 rounded-2xl p-6 space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">Case Title *</label>
            <input
              type="text"
              required
              value={caseTitle}
              onChange={(e) => setCaseTitle(e.target.value)}
              placeholder="e.g. State of Karnataka v. Apex Energy Ventures"
              className="w-full px-3.5 py-2 rounded-lg bg-navy-850 border border-gold-500/20 text-slate-100 text-xs focus:outline-none focus:border-gold-400"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Citation</label>
              <input
                type="text"
                value={citation}
                onChange={(e) => setCitation(e.target.value)}
                placeholder="2026 INSC 490 (Demo)"
                className="w-full px-3.5 py-2 rounded-lg bg-navy-850 border border-gold-500/20 text-slate-100 text-xs"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Practice Area</label>
              <select
                value={practiceArea}
                onChange={(e) => setPracticeArea(e.target.value as PracticeArea)}
                className="w-full px-3.5 py-2 rounded-lg bg-navy-850 border border-gold-500/20 text-slate-100 text-xs"
              >
                <option value="Constitutional Law">Constitutional Law</option>
                <option value="Corporate Law">Corporate Law</option>
                <option value="Arbitration">Arbitration</option>
                <option value="Criminal Law">Criminal Law</option>
                <option value="Insolvency & Bankruptcy">Insolvency & Bankruptcy</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">Summary *</label>
            <textarea
              required
              rows={2}
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
              placeholder="Concise overview of the case background..."
              className="w-full px-3.5 py-2 rounded-lg bg-navy-850 border border-gold-500/20 text-slate-100 text-xs"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">Ratio Decidendi *</label>
            <textarea
              required
              rows={2}
              value={ratioDecidendi}
              onChange={(e) => setRatioDecidendi(e.target.value)}
              placeholder="Core binding legal principle established..."
              className="w-full px-3.5 py-2 rounded-lg bg-navy-850 border border-gold-500/20 text-slate-100 text-xs"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-gold-500 text-navy-950 font-bold hover:bg-gold-400 text-xs shadow-md"
          >
            Inject Demo Judgment into Live Feed
          </button>
        </form>
      )}

      {activeTab === 'news' && (
        <form onSubmit={handleAddNews} className="bg-navy-900 border border-gold-500/20 rounded-2xl p-6 space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">Headline *</label>
            <input
              type="text"
              required
              value={headline}
              onChange={(e) => setHeadline(e.target.value)}
              placeholder="Headline..."
              className="w-full px-3.5 py-2 rounded-lg bg-navy-850 border border-gold-500/20 text-slate-100 text-xs"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">Category</label>
            <select
              value={newsCategory}
              onChange={(e) => setNewsCategory(e.target.value as NewsCategory)}
              className="w-full px-3.5 py-2 rounded-lg bg-navy-850 border border-gold-500/20 text-slate-100 text-xs"
            >
              <option value="Supreme Court">Supreme Court</option>
              <option value="Constitutional Law">Constitutional Law</option>
              <option value="Arbitration">Arbitration</option>
              <option value="Corporate Law">Corporate Law</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">Summary *</label>
            <textarea
              required
              rows={2}
              value={newsSummary}
              onChange={(e) => setNewsSummary(e.target.value)}
              placeholder="Brief summary..."
              className="w-full px-3.5 py-2 rounded-lg bg-navy-850 border border-gold-500/20 text-slate-100 text-xs"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">Full Content Body</label>
            <textarea
              rows={4}
              value={fullContent}
              onChange={(e) => setFullContent(e.target.value)}
              placeholder="Detailed article text..."
              className="w-full px-3.5 py-2 rounded-lg bg-navy-850 border border-gold-500/20 text-slate-100 text-xs"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-gold-500 text-navy-950 font-bold hover:bg-gold-400 text-xs shadow-md"
          >
            Publish Legal News Article
          </button>
        </form>
      )}
    </div>
  );
};

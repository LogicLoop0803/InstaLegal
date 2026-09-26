import React from 'react';
import { Scale, Newspaper, UserCheck, Sparkles, Send } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Hero / Philosophy Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gold-400 bg-gold-500/10 px-3 py-1 rounded-full border border-gold-500/20">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Our Legal Intelligence Philosophy</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-serif font-bold text-slate-100">
          Democratizing Apex Court Intelligence
        </h1>
        <p className="text-slate-300 text-base leading-relaxed">
          InstaLegal was founded to eliminate the information lag in Indian apex litigation. We believe every advocate, junior litigator, law student, and researcher deserves instant, affordable access to binding Supreme Court precedents.
        </p>
      </div>

      {/* Philosophy Callout Box */}
      <div className="max-w-4xl mx-auto bg-gradient-to-r from-navy-900 via-navy-850 to-navy-900 border-2 border-gold-500/30 p-8 sm:p-12 rounded-3xl text-center space-y-4 shadow-2xl gold-border-glow">
        <span className="text-xs uppercase font-bold text-gold-400 tracking-widest">PRODUCT BUILDING PRINCIPLE</span>
        <blockquote className="text-2xl sm:text-3xl font-serif italic text-slate-100 leading-snug">
          "Find them. Watch them. Talk to them. Test them. Then earn the right to build."
        </blockquote>
        <p className="text-xs text-slate-400 max-w-xl mx-auto">
          We built InstaLegal by spending hundreds of hours with Supreme Court Advocates-on-Record, district court litigators, and law school researchers across India.
        </p>
      </div>

      {/* Three Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-6 rounded-2xl bg-navy-900 border border-gold-500/20 space-y-3">
          <Scale className="w-10 h-10 text-gold-400 mb-2" />
          <h3 className="text-lg font-bold text-slate-100">Supreme Court Intelligence</h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            Extracting ratio decidendi, bench composition, and key holdings from apex court decisions within 30 minutes of issuance.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-navy-900 border border-gold-500/20 space-y-3">
          <Newspaper className="w-10 h-10 text-gold-400 mb-2" />
          <h3 className="text-lg font-bold text-slate-100">Curated Legal News</h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            Delivering zero-fluff daily editorial briefs on major hearings, cause-list developments, and statutory changes.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-navy-900 border border-gold-500/20 space-y-3">
          <UserCheck className="w-10 h-10 text-gold-400 mb-2" />
          <h3 className="text-lg font-bold text-slate-100">Verified Counsel Hub</h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            Providing transparent discovery for Supreme Court Advocates-on-Record and Senior Counsel across practice domains.
          </p>
        </div>
      </div>

      {/* Contact Form Section */}
      <div id="contact" className="max-w-2xl mx-auto bg-navy-900 border border-gold-500/20 rounded-2xl p-8 space-y-6">
        <h3 className="text-xl font-bold text-slate-100 border-b border-gold-500/15 pb-3">
          Contact Chambers & Technical Support
        </h3>
        <form onSubmit={(e) => { e.preventDefault(); alert('Message sent to InstaLegal Team!'); }} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">Your Name</label>
            <input
              type="text"
              required
              placeholder="Advocate Name or Organization"
              className="w-full px-3.5 py-2 rounded-lg bg-navy-850 border border-gold-500/20 text-slate-100 text-sm focus:outline-none focus:border-gold-400"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">Email Address</label>
            <input
              type="email"
              required
              placeholder="name@lawfirm.com"
              className="w-full px-3.5 py-2 rounded-lg bg-navy-850 border border-gold-500/20 text-slate-100 text-sm focus:outline-none focus:border-gold-400"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">Message</label>
            <textarea
              required
              rows={4}
              placeholder="Inquire about enterprise feeds, AoR verification, or product feedback..."
              className="w-full px-3.5 py-2 rounded-lg bg-navy-850 border border-gold-500/20 text-slate-100 text-sm focus:outline-none focus:border-gold-400"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-gold-500 text-navy-950 font-bold hover:bg-gold-400 transition-colors flex items-center justify-center gap-2 text-sm"
          >
            <Send className="w-4 h-4" />
            <span>Send Message</span>
          </button>
        </form>
      </div>
    </div>
  );
};

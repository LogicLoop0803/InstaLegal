import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import { ShieldAlert, Info } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-950 border-t border-gold-500/20 pt-14 pb-8 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-gold-500/10">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Logo size="lg" />
            <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
              Democratizing Apex Court Intelligence for Advocates, Junior Litigators, Advocates-on-Record, Law Students, Legal Researchers, and Corporate Legal Counsel across India.
            </p>
            <div className="flex items-center gap-3 pt-2 text-xs text-gold-400 font-medium">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-gold-500"></span>
              </span>
              <span>LIVE LEGAL INTELLIGENCE FEED</span>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-slate-100 font-bold uppercase text-xs tracking-wider mb-4 border-l-2 border-gold-500 pl-2">
              Product
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/judgments" className="hover:text-gold-300 transition-colors">
                  Supreme Court Judgments
                </Link>
              </li>
              <li>
                <Link to="/news" className="hover:text-gold-300 transition-colors">
                  Curated Legal News
                </Link>
              </li>
              <li>
                <Link to="/counsel" className="hover:text-gold-300 transition-colors">
                  Verified Counsel Hub
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-gold-300 transition-colors">
                  Pricing Plans
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="hover:text-gold-300 transition-colors">
                  Intelligence Dashboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-slate-100 font-bold uppercase text-xs tracking-wider mb-4 border-l-2 border-gold-500 pl-2">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/about" className="hover:text-gold-300 transition-colors">
                  About InstaLegal
                </Link>
              </li>
              <li>
                <Link to="/about#contact" className="hover:text-gold-300 transition-colors">
                  Contact Chambers
                </Link>
              </li>
              <li>
                <Link to="/about#careers" className="hover:text-gold-300 transition-colors">
                  Legal Engineering Careers
                </Link>
              </li>
              <li>
                <Link to="/admin" className="text-xs text-gold-400 hover:text-gold-300 transition-colors font-medium">
                  Admin Portal (Demo)
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-slate-100 font-bold uppercase text-xs tracking-wider mb-4 border-l-2 border-gold-500 pl-2">
              Legal & Safety
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#disclaimer" className="hover:text-gold-300 transition-colors">
                  Platform Disclaimer
                </a>
              </li>
              <li>
                <a href="#privacy" className="hover:text-gold-300 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#terms" className="hover:text-gold-300 transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#verification" className="hover:text-gold-300 transition-colors">
                  AoR Verification Standards
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Disclaimer Box */}
        <div className="py-6 my-4 bg-navy-900/60 rounded-xl border border-gold-500/15 p-4 space-y-2 text-xs text-slate-400">
          <div className="flex items-center gap-2 font-semibold text-gold-400">
            <ShieldAlert className="w-4 h-4 text-gold-500 shrink-0" />
            <span>LEGAL INFORMATION & DATA INTEGRITY DISCLAIMER</span>
          </div>
          <p>
            InstaLegal is an informational and legal research platform. Content is provided for research and informational purposes and does not constitute legal advice. Users should independently verify legal materials against authoritative sources.
          </p>
          <div className="flex items-center gap-1.5 text-slate-500 pt-1">
            <Info className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span>Demo Environment — Some content shown in this prototype is fictional/sample data and is not an actual court record or verified counsel listing.</span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 pt-2">
          <div>© 2026 InstaLegal. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <span>Built for Advocates & Legal Researchers across India</span>
            <span>•</span>
            <span className="text-gold-400/80 font-mono">v2.4-SupremeCourt-Intel</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

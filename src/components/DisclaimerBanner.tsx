import React from 'react';
import { Info } from 'lucide-react';

export const DisclaimerBanner: React.FC = () => {
  return (
    <div className="bg-navy-950/90 border-b border-gold-500/15 py-1.5 px-4 text-xs text-slate-400">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-gold-500"></span>
          </span>
          <span className="text-gold-400 font-medium">DEMO ENVIRONMENT</span>
          <span className="hidden md:inline text-slate-400">|</span>
          <span className="text-slate-300 truncate">
            Sample intelligence data for demonstration. Content is provided for research and informational purposes only.
          </span>
        </div>
        <div className="hidden lg:flex items-center gap-1.5 text-[11px] text-slate-400 hover:text-slate-200 transition-colors">
          <Info className="w-3.5 h-3.5 text-gold-500" />
          <span>Not formal legal advice • Supreme Court of India Intelligence</span>
        </div>
      </div>
    </div>
  );
};

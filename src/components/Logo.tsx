import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const iconSizes = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-10 h-10'
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl'
  };

  return (
    <Link to="/" className={`inline-flex items-center gap-2.5 group ${className}`}>
      {/* Minimalist Gold Legal Scale & Pulse Icon */}
      <div className={`relative flex items-center justify-center rounded-lg bg-navy-850 border border-gold-500/30 p-1.5 group-hover:border-gold-400 group-hover:shadow-[0_0_15px_rgba(212,175,55,0.25)] transition-all duration-300 ${iconSizes[size]}`}>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          className="w-full h-full text-gold-500 group-hover:text-gold-400 transition-colors"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Legal Pillar / Scale Base */}
          <path d="M4 20h16M12 4v16" strokeOpacity="0.5" />
          {/* Scale Beam */}
          <path d="M6 7h12" />
          {/* Pulse Line Intersecting Justice Scale */}
          <path d="M2 13h4l2.5-4 3 8 2.5-6 2 2h6" stroke="#E5C45A" strokeWidth="2.2" />
        </svg>
      </div>

      <div className={`font-bold tracking-wider ${textSizes[size]}`}>
        <span className="text-slate-100 font-sans tracking-wide">INSTA</span>
        <span className="text-gold-500 font-serif ml-1 tracking-widest uppercase">LEGAL</span>
      </div>
    </Link>
  );
};

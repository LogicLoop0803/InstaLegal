import React, { useState, useEffect, useRef } from 'react';

interface CountUpStatProps {
  end: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  label: string;
  sublabel?: string;
}

export const CountUpStat: React.FC<CountUpStatProps> = ({
  end,
  prefix = '',
  suffix = '',
  duration = 2000,
  label,
  sublabel
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // easeOutExpo function
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(easeProgress * end));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };

    window.requestAnimationFrame(step);
  }, [hasAnimated, end, duration]);

  return (
    <div ref={ref} className="text-center p-6 rounded-2xl bg-navy-850/60 border border-gold-500/15 glass-panel-subtle hover:border-gold-500/40 transition-all duration-300 group">
      <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gold-400 font-sans tracking-tight group-hover:scale-105 transition-transform duration-300">
        {prefix}
        {count.toLocaleString()}
        {suffix}
      </div>
      <div className="text-sm font-semibold text-slate-100 mt-2">{label}</div>
      {sublabel && <div className="text-xs text-slate-400 mt-1">{sublabel}</div>}
    </div>
  );
};

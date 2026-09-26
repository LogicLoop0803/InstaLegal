import React, { useState } from 'react';
import { Check, Sparkles } from 'lucide-react';
import { CheckoutModal } from '../components/CheckoutModal';

export const PricingPage: React.FC = () => {
  const [isYearly, setIsYearly] = useState(true);
  const [selectedPlan, setSelectedPlan] = useState<{
    name: string;
    price: string;
    period: string;
  } | null>(null);

  const plans = [
    {
      name: 'FREE',
      price: '₹0',
      period: 'forever',
      description: 'Ideal for law students and casual legal researchers.',
      features: [
        'Limited judgment access (3/day)',
        'Daily legal news feeds',
        'Basic counsel directory search',
        'Standard ratio view'
      ],
      buttonText: 'Get Started Free',
      highlighted: false,
      badge: null
    },
    {
      name: 'PRO LITIGATOR',
      price: isYearly ? '₹4,999' : '₹499',
      period: isYearly ? 'year' : 'month',
      description: 'Built for Advocates, Junior Litigators, and independent counsel.',
      features: [
        'Unlimited Apex Court legal intelligence',
        'Advanced judgment search & filters',
        'AI Ratio Decidendi extraction',
        'Unlimited bookmarks & saved searches',
        'Full citation & PDF downloads',
        'Counsel intelligence analytics'
      ],
      buttonText: 'Upgrade to Pro Litigator',
      highlighted: true,
      badge: 'MOST POPULAR'
    },
    {
      name: 'VERIFIED COUNSEL',
      price: '₹12,000',
      period: 'year',
      description: 'For Supreme Court Advocates-on-Record & Senior Counsel.',
      features: [
        'Verified counsel profile badge',
        'Direct consultation lead routing',
        'Practice area highlighting',
        'Chambers contact visibility',
        'Supreme Court precedent showcase',
        'Priority registry support'
      ],
      buttonText: 'Claim Verified Counsel Listing',
      highlighted: false,
      badge: 'FOR AoRs & SR. ADV'
    },
    {
      name: 'ENTERPRISE',
      price: '₹45,000',
      period: 'year',
      description: 'For boutique law firms and corporate legal departments.',
      features: [
        'Multi-seat workspace (Up to 10 Seats)',
        'Enterprise automated legal feeds',
        'API access for internal data sync',
        'Shared team bookmarks & notes',
        'Dedicated account manager',
        'Custom compliance audit export'
      ],
      buttonText: 'Get Enterprise Suite',
      highlighted: false,
      badge: 'FOR LAW FIRMS'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gold-400 bg-gold-500/10 px-3 py-1 rounded-full border border-gold-500/20">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Transparent Apex Intelligence Pricing</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-serif font-bold text-slate-100">
          Invest in High-Speed Legal Intelligence
        </h1>
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
          Democratizing Supreme Court judgments, ratio decidendi, and counsel discovery without ₹50,000+ traditional database locks.
        </p>

        {/* Toggle */}
        <div className="pt-4 flex items-center justify-center gap-3">
          <span className={`text-xs font-semibold ${!isYearly ? 'text-gold-400' : 'text-slate-400'}`}>
            Monthly Billing
          </span>
          <button
            onClick={() => setIsYearly(!isYearly)}
            className="relative w-14 h-7 rounded-full bg-navy-850 border border-gold-500/30 p-1 transition-colors"
          >
            <div
              className={`w-5 h-5 rounded-full bg-gold-500 transition-transform ${
                isYearly ? 'translate-x-7' : 'translate-x-0'
              }`}
            />
          </button>
          <span className={`text-xs font-semibold flex items-center gap-1.5 ${isYearly ? 'text-gold-400' : 'text-slate-400'}`}>
            Annual Billing
            <span className="text-[10px] bg-gold-500/20 text-gold-300 px-2 py-0.5 rounded border border-gold-500/40">
              Save ~17%
            </span>
          </span>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {plans.map((plan, idx) => (
          <div
            key={idx}
            className={`p-6 rounded-2xl bg-navy-900 border flex flex-col justify-between relative transition-all duration-300 ${
              plan.highlighted
                ? 'border-gold-400 shadow-2xl gold-border-glow scale-105 z-10'
                : 'border-gold-500/20 hover:border-gold-400/50'
            }`}
          >
            {plan.badge && (
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 text-[10px] font-bold uppercase tracking-wider bg-gold-500 text-navy-950 px-3 py-1 rounded-full shadow">
                {plan.badge}
              </div>
            )}

            <div>
              <h3 className="text-lg font-bold text-slate-100 uppercase tracking-wider mb-2">
                {plan.name}
              </h3>
              <p className="text-xs text-slate-400 mb-6 min-h-[36px]">
                {plan.description}
              </p>

              <div className="mb-6">
                <span className="text-3xl font-extrabold text-gold-400 font-sans">{plan.price}</span>
                <span className="text-xs text-slate-400 font-normal ml-1">/{plan.period}</span>
              </div>

              <ul className="space-y-3 text-xs text-slate-300 mb-8 border-t border-gold-500/10 pt-6">
                {plan.features.map((feat, fidx) => (
                  <li key={fidx} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={() => setSelectedPlan({ name: plan.name, price: plan.price, period: plan.period })}
              className={`w-full py-3 rounded-xl font-bold text-xs transition-colors shadow-md ${
                plan.highlighted
                  ? 'bg-gold-500 text-navy-950 hover:bg-gold-400'
                  : 'bg-navy-850 text-slate-200 hover:bg-navy-800 border border-gold-500/30'
              }`}
            >
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>

      {/* Checkout Modal */}
      {selectedPlan && (
        <CheckoutModal
          planName={selectedPlan.name}
          price={selectedPlan.price}
          billingPeriod={selectedPlan.period}
          isOpen={!!selectedPlan}
          onClose={() => setSelectedPlan(null)}
        />
      )}
    </div>
  );
};

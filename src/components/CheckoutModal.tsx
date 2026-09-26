import React, { useState } from 'react';
import { X, Check, Shield, CreditCard, Lock } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

interface CheckoutModalProps {
  planName: string;
  price: string;
  billingPeriod: string;
  isOpen: boolean;
  onClose: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  planName,
  price,
  billingPeriod,
  isOpen,
  onClose
}) => {
  const { user, updateUser } = useAuth();
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    setTimeout(() => {
      let tier: 'free' | 'pro' | 'counsel' | 'enterprise' = 'pro';
      if (planName.toLowerCase().includes('counsel')) tier = 'counsel';
      if (planName.toLowerCase().includes('enterprise')) tier = 'enterprise';
      if (planName.toLowerCase().includes('free')) tier = 'free';

      updateUser({ subscriptionTier: tier });
      setIsProcessing(false);
      setIsSuccess(true);
    }, 800);
  };

  const handleFinish = () => {
    setIsSuccess(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-md bg-navy-900 border border-gold-500/30 rounded-xl shadow-2xl overflow-hidden gold-border-glow">
        <div className="flex items-center justify-between p-5 border-b border-gold-500/20 bg-navy-850">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-gold-500" />
            <h3 className="text-base font-bold text-slate-100">InstaLegal Subscription Checkout</h3>
          </div>
          <button
            onClick={handleFinish}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-navy-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          {isSuccess ? (
            <div className="py-6 text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 mx-auto flex items-center justify-center">
                <Check className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-slate-100">Plan Upgraded Successfully!</h4>
              <p className="text-sm text-slate-300">
                You are now subscribed to the <strong>{planName}</strong> plan ({price}/{billingPeriod}).
              </p>
              <button
                onClick={handleFinish}
                className="w-full py-2.5 rounded-lg bg-gold-500 text-navy-950 font-semibold hover:bg-gold-400 transition-colors text-sm"
              >
                Return to Dashboard
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="space-y-4">
              <div className="bg-navy-850 p-4 rounded-lg border border-gold-500/20 flex items-center justify-between">
                <div>
                  <div className="text-xs text-gold-400 uppercase font-semibold">Selected Plan</div>
                  <div className="text-lg font-bold text-slate-100">{planName}</div>
                </div>
                <div className="text-right">
                  <div className="text-xl font-bold text-gold-400">{price}</div>
                  <div className="text-xs text-slate-400">/{billingPeriod}</div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Subscriber Email</label>
                <input
                  type="email"
                  readOnly
                  value={user?.email || 'user@instalegal-demo.in'}
                  className="w-full px-3.5 py-2 rounded-lg bg-navy-800 border border-gold-500/10 text-slate-300 text-sm cursor-not-allowed"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Demo Card Number (Simulated)</label>
                <div className="relative">
                  <input
                    type="text"
                    required
                    defaultValue="4242 •••• •••• 4242"
                    className="w-full px-3.5 py-2 rounded-lg bg-navy-850 border border-gold-500/20 text-slate-100 text-sm focus:outline-none focus:border-gold-400"
                  />
                  <CreditCard className="w-4 h-4 text-gold-500 absolute right-3 top-3" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Expiry Date</label>
                  <input
                    type="text"
                    defaultValue="12/28"
                    required
                    className="w-full px-3.5 py-2 rounded-lg bg-navy-850 border border-gold-500/20 text-slate-100 text-sm focus:outline-none focus:border-gold-400"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">CVC</label>
                  <input
                    type="text"
                    defaultValue="888"
                    required
                    className="w-full px-3.5 py-2 rounded-lg bg-navy-850 border border-gold-500/20 text-slate-100 text-sm focus:outline-none focus:border-gold-400"
                  />
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-400 pt-1">
                <Lock className="w-3.5 h-3.5 text-gold-500" />
                <span>256-Bit Encrypted Demo Transaction Protocol</span>
              </div>

              <button
                type="submit"
                disabled={isProcessing}
                className="w-full py-3 rounded-lg bg-gold-500 text-navy-950 font-bold hover:bg-gold-400 transition-colors text-sm shadow-md mt-2 disabled:opacity-50"
              >
                {isProcessing ? 'Processing Upgrade...' : `Confirm & Pay ${price}`}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

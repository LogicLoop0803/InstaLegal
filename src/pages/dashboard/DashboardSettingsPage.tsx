import React, { useState } from 'react';
import { Bell, Key, Check } from 'lucide-react';

export const DashboardSettingsPage: React.FC = () => {
  const [emailAlerts, setEmailAlerts] = useState(true);
  const [ratioAlerts, setRatioAlerts] = useState(true);
  const [apiKey] = useState('il_live_demo_98412498712394871');
  const [isSaved, setIsSaved] = useState(false);

  const handleSave = () => {
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2000);
  };

  return (
    <div className="max-w-3xl space-y-6">
      <div className="border-b border-gold-500/15 pb-4">
        <h1 className="text-2xl font-serif font-bold text-slate-100">Terminal & Account Settings</h1>
        <p className="text-xs text-slate-400">Configure alert notifications, API integrations, and legal feed parameters.</p>
      </div>

      <div className="bg-navy-900 border border-gold-500/20 rounded-2xl p-6 space-y-6">
        {isSaved && (
          <div className="p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-lg text-emerald-300 text-xs flex items-center gap-2">
            <Check className="w-4 h-4" />
            <span>Terminal settings updated.</span>
          </div>
        )}

        <div className="space-y-3">
          <h3 className="text-xs font-bold uppercase text-gold-400 border-b border-gold-500/15 pb-2 flex items-center gap-2">
            <Bell className="w-4 h-4" />
            <span>Supreme Court Order Alerts</span>
          </h3>

          <div className="flex items-center justify-between text-xs text-slate-200 py-1">
            <div>
              <div className="font-semibold">Daily Constitutional Bench Summary</div>
              <div className="text-slate-400">Receive morning intelligence briefs on 5-Judge Benches</div>
            </div>
            <input
              type="checkbox"
              checked={emailAlerts}
              onChange={(e) => setEmailAlerts(e.target.checked)}
              className="w-4 h-4 accent-gold-500"
            />
          </div>

          <div className="flex items-center justify-between text-xs text-slate-200 py-1">
            <div>
              <div className="font-semibold">Instant Ratio Decidendi Extraction Alerts</div>
              <div className="text-slate-400">Get instant pushes when new judgments are published</div>
            </div>
            <input
              type="checkbox"
              checked={ratioAlerts}
              onChange={(e) => setRatioAlerts(e.target.checked)}
              className="w-4 h-4 accent-gold-500"
            />
          </div>
        </div>

        <div className="space-y-3 pt-4 border-t border-gold-500/15">
          <h3 className="text-xs font-bold uppercase text-gold-400 border-b border-gold-500/15 pb-2 flex items-center gap-2">
            <Key className="w-4 h-4" />
            <span>InstaLegal Intelligence API Key</span>
          </h3>
          <p className="text-xs text-slate-400">Use this secret token to integrate InstaLegal feed into internal law firm portals.</p>

          <div className="flex items-center gap-2">
            <input
              type="text"
              readOnly
              value={apiKey}
              className="flex-1 px-3.5 py-2 rounded-lg bg-navy-850 border border-gold-500/20 text-slate-300 font-mono text-xs"
            />
            <button
              onClick={() => {
                navigator.clipboard.writeText(apiKey);
                alert('API Key copied!');
              }}
              className="px-4 py-2 rounded-lg bg-navy-850 border border-gold-500/20 text-gold-400 text-xs font-semibold"
            >
              Copy
            </button>
          </div>
        </div>

        <div className="pt-4 flex justify-end">
          <button
            onClick={handleSave}
            className="px-6 py-2.5 rounded-lg bg-gold-500 text-navy-950 font-bold hover:bg-gold-400 text-xs"
          >
            Save Settings
          </button>
        </div>
      </div>
    </div>
  );
};

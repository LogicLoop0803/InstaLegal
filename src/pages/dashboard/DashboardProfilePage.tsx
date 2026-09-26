import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import type { UserRole } from '../../types';
import { Check, Save } from 'lucide-react';

export const DashboardProfilePage: React.FC = () => {
  const { user, updateUser } = useAuth();
  const [name, setName] = useState(user?.name || '');
  const [email] = useState(user?.email || '');
  const [role, setRole] = useState<UserRole>(user?.role || 'Advocate');
  const [barNumber, setBarNumber] = useState(user?.barNumber || '');
  const [organization, setOrganization] = useState(user?.organization || '');
  const [isSaved, setIsSaved] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateUser({
      name,
      role,
      barNumber,
      organization
    });
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2500);
  };

  return (
    <div className="max-w-3xl space-y-6">
      <div className="border-b border-gold-500/15 pb-4">
        <h1 className="text-2xl font-serif font-bold text-slate-100">User Profile & Chambers Credentials</h1>
        <p className="text-xs text-slate-400">Manage your advocate identity and legal research credentials.</p>
      </div>

      <form onSubmit={handleSubmit} className="bg-navy-900 border border-gold-500/20 rounded-2xl p-6 space-y-4">
        {isSaved && (
          <div className="p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-lg text-emerald-300 text-xs flex items-center gap-2">
            <Check className="w-4 h-4" />
            <span>Profile credentials updated successfully.</span>
          </div>
        )}

        <div>
          <label className="block text-xs font-medium text-slate-300 mb-1">Full Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3.5 py-2 rounded-lg bg-navy-850 border border-gold-500/20 text-slate-100 text-sm focus:outline-none focus:border-gold-400"
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-slate-300 mb-1">Email Address</label>
          <input
            type="email"
            readOnly
            value={email}
            className="w-full px-3.5 py-2 rounded-lg bg-navy-800 border border-gold-500/10 text-slate-400 text-sm cursor-not-allowed"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">Primary Role</label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value as UserRole)}
              className="w-full px-3.5 py-2 rounded-lg bg-navy-850 border border-gold-500/20 text-slate-100 text-sm focus:outline-none focus:border-gold-400"
            >
              <option value="Advocate">Advocate</option>
              <option value="Law Student">Law Student</option>
              <option value="Legal Researcher">Legal Researcher</option>
              <option value="Litigant">Litigant</option>
              <option value="Corporate Legal">Corporate Legal</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">Bar Enrollment Number</label>
            <input
              type="text"
              value={barNumber}
              onChange={(e) => setBarNumber(e.target.value)}
              placeholder="e.g. D/1942/2014"
              className="w-full px-3.5 py-2 rounded-lg bg-navy-850 border border-gold-500/20 text-slate-100 text-sm focus:outline-none focus:border-gold-400"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-medium text-slate-300 mb-1">Chambers / Law Firm / Institution</label>
          <input
            type="text"
            value={organization}
            onChange={(e) => setOrganization(e.target.value)}
            placeholder="e.g. Supreme Court Bar Association"
            className="w-full px-3.5 py-2 rounded-lg bg-navy-850 border border-gold-500/20 text-slate-100 text-sm focus:outline-none focus:border-gold-400"
          />
        </div>

        <div className="pt-2 flex justify-end">
          <button
            type="submit"
            className="px-6 py-2.5 rounded-lg bg-gold-500 text-navy-950 font-bold hover:bg-gold-400 transition-colors text-xs flex items-center gap-2"
          >
            <Save className="w-4 h-4" />
            <span>Save Profile</span>
          </button>
        </div>
      </form>
    </div>
  );
};

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Logo } from '../components/Logo';
import { useAuth } from '../context/AuthContext';
import type { UserRole } from '../types';
import { User, Mail, Lock, Shield, ArrowRight } from 'lucide-react';

export const SignupPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<UserRole>('Advocate');

  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    signup(name || 'Advocate User', email, role);
    navigate('/dashboard');
  };

  const roleOptions: UserRole[] = [
    'Advocate',
    'Law Student',
    'Legal Researcher',
    'Litigant',
    'Corporate Legal'
  ];

  return (
    <div className="min-h-[85vh] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md bg-navy-900 border border-gold-500/30 rounded-2xl p-8 shadow-2xl gold-border-glow space-y-6">
        <div className="text-center space-y-2">
          <Logo size="lg" className="justify-center mb-4" />
          <h2 className="text-2xl font-serif font-bold text-slate-100">Get Started with InstaLegal</h2>
          <p className="text-xs text-slate-400">Join Supreme Court Intelligence Community</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">Full Name *</label>
            <div className="relative">
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Advocate Vikram Mehta"
                className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-navy-850 border border-gold-500/20 text-slate-100 text-sm focus:outline-none focus:border-gold-400"
              />
              <User className="w-4 h-4 text-gold-500 absolute left-3.5 top-3" />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">Email Address *</label>
            <div className="relative">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@lawfirm.com"
                className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-navy-850 border border-gold-500/20 text-slate-100 text-sm focus:outline-none focus:border-gold-400"
              />
              <Mail className="w-4 h-4 text-gold-500 absolute left-3.5 top-3" />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">Primary Role *</label>
            <div className="relative">
              <select
                value={role}
                onChange={(e) => setRole(e.target.value as UserRole)}
                className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-navy-850 border border-gold-500/20 text-slate-100 text-sm focus:outline-none focus:border-gold-400"
              >
                {roleOptions.map(r => (
                  <option key={r} value={r}>{r}</option>
                ))}
              </select>
              <Shield className="w-4 h-4 text-gold-500 absolute left-3.5 top-3" />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">Password *</label>
            <div className="relative">
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-navy-850 border border-gold-500/20 text-slate-100 text-sm focus:outline-none focus:border-gold-400"
              />
              <Lock className="w-4 h-4 text-gold-500 absolute left-3.5 top-3" />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-gold-500 text-navy-950 font-bold hover:bg-gold-400 transition-colors shadow-md text-sm flex items-center justify-center gap-2"
          >
            <span>Create Account & Enter Terminal</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <div className="pt-4 border-t border-gold-500/15 text-center text-xs text-slate-400">
          Already registered?{' '}
          <Link to="/login" className="text-gold-400 font-bold hover:underline">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

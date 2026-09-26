import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Logo } from '../components/Logo';
import { useAuth } from '../context/AuthContext';
import { Lock, Mail, ArrowRight } from 'lucide-react';

export const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('vikram.mehta@instalegal-demo.in');
  const [password, setPassword] = useState('password123');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(email, password);
    navigate('/dashboard');
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md bg-navy-900 border border-gold-500/30 rounded-2xl p-8 shadow-2xl gold-border-glow space-y-6">
        <div className="text-center space-y-2">
          <Logo size="lg" className="justify-center mb-4" />
          <h2 className="text-2xl font-serif font-bold text-slate-100">Sign In to InstaLegal</h2>
          <p className="text-xs text-slate-400">Access Supreme Court Intelligence Terminal</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">Email Address</label>
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
            <label className="block text-xs font-medium text-slate-300 mb-1">Password</label>
            <div className="relative">
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-navy-850 border border-gold-500/20 text-slate-100 text-sm focus:outline-none focus:border-gold-400"
              />
              <Lock className="w-4 h-4 text-gold-500 absolute left-3.5 top-3" />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-gold-500 text-navy-950 font-bold hover:bg-gold-400 transition-colors shadow-md text-sm flex items-center justify-center gap-2"
          >
            <span>Sign In to Terminal</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <div className="pt-4 border-t border-gold-500/15 text-center text-xs text-slate-400">
          Don't have an account?{' '}
          <Link to="/signup" className="text-gold-400 font-bold hover:underline">
            Create an Account
          </Link>
        </div>
      </div>
    </div>
  );
};

import React, { useState, useEffect } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import {
  LayoutDashboard,
  Scale,
  Newspaper,
  UserCheck,
  Bookmark,
  User,
  Settings,
  LogOut,
  Search,
  Bell,
  Sparkles,
  Menu,
  X,
  ExternalLink,
  ShieldCheck
} from 'lucide-react';
import { Logo } from '../components/Logo';
import { useAuth } from '../context/AuthContext';
import { useBookmarks } from '../context/BookmarkContext';
import { GlobalSearchModal } from '../components/GlobalSearchModal';

export const DashboardLayout: React.FC = () => {
  const { user, logout } = useAuth();
  const { totalCount } = useBookmarks();
  const location = useLocation();
  const navigate = useNavigate();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  // "/" keyboard shortcut to open search modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === '/' && !['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement).tagName)) {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navItems = [
    { label: 'Overview', path: '/dashboard', icon: LayoutDashboard },
    { label: 'Judgments', path: '/dashboard/judgments', icon: Scale },
    { label: 'Legal News', path: '/dashboard/news', icon: Newspaper },
    { label: 'Counsel Hub', path: '/dashboard/counsel', icon: UserCheck },
    { label: 'Bookmarks', path: '/dashboard/bookmarks', icon: Bookmark, badge: totalCount },
    { label: 'Profile', path: '/dashboard/profile', icon: User },
    { label: 'Settings', path: '/dashboard/settings', icon: Settings }
  ];

  const isActive = (path: string) => {
    if (path === '/dashboard' && location.pathname === '/dashboard') return true;
    if (path !== '/dashboard' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <div className="min-h-screen flex bg-navy-950 text-slate-100 font-sans">
      {/* Sidebar - Desktop */}
      <aside className="hidden lg:flex flex-col w-64 bg-navy-900 border-r border-gold-500/20 shrink-0">
        <div className="p-5 border-b border-gold-500/15">
          <Logo size="md" />
        </div>

        {/* User Identity Brief */}
        <div className="p-4 mx-3 my-3 rounded-xl bg-navy-850 border border-gold-500/15 flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gold-500/20 border border-gold-400/40 text-gold-400 font-bold flex items-center justify-center text-sm">
            {user?.name ? user.name.substring(0, 2).toUpperCase() : 'ADV'}
          </div>
          <div className="overflow-hidden">
            <div className="text-sm font-bold text-slate-100 truncate">{user?.name || 'Advocate User'}</div>
            <div className="text-xs text-gold-400 flex items-center gap-1 mt-0.5">
              <ShieldCheck className="w-3 h-3 text-gold-400" />
              <span className="capitalize">{user?.subscriptionTier || 'pro'} Plan Active</span>
            </div>
          </div>
        </div>

        {/* Nav Items */}
        <nav className="flex-1 px-3 py-2 space-y-1 overflow-y-auto">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.path);
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  active
                    ? 'bg-gold-500/15 text-gold-300 border border-gold-500/30 font-semibold shadow-[0_0_12px_rgba(212,175,55,0.15)]'
                    : 'text-slate-300 hover:text-gold-300 hover:bg-navy-850'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className={`w-4 h-4 ${active ? 'text-gold-400' : 'text-slate-400'}`} />
                  <span>{item.label}</span>
                </div>
                {item.badge !== undefined && item.badge > 0 && (
                  <span className="bg-gold-500 text-navy-950 font-bold text-xs px-2 py-0.5 rounded-full">
                    {item.badge}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Bottom Subscription status & Logout */}
        <div className="p-4 border-t border-gold-500/15 bg-navy-950/60 space-y-3">
          <div className="p-3 rounded-lg bg-navy-850 border border-gold-500/20 text-xs">
            <div className="flex items-center justify-between font-semibold text-slate-200 mb-1">
              <span>InstaLegal Intelligence</span>
              <span className="text-gold-400 font-bold">PRO</span>
            </div>
            <p className="text-[11px] text-slate-400">Supreme Court Live Feed & AI Summary Active.</p>
          </div>

          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="text-xs text-slate-400 hover:text-gold-300 flex items-center gap-1"
            >
              <span>Public Site</span>
              <ExternalLink className="w-3 h-3" />
            </Link>

            <button
              onClick={() => {
                logout();
                navigate('/');
              }}
              className="text-xs text-slate-400 hover:text-rose-400 flex items-center gap-1 transition-colors"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Sign Out</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Terminal Bar */}
        <header className="h-16 bg-navy-900 border-b border-gold-500/20 px-4 sm:px-6 flex items-center justify-between sticky top-0 z-30">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsMobileSidebarOpen(true)}
              className="lg:hidden p-2 rounded-lg bg-navy-850 text-slate-300"
            >
              <Menu className="w-5 h-5" />
            </button>

            {/* Global Search Bar */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="w-48 sm:w-80 px-3.5 py-1.5 rounded-lg bg-navy-850 border border-gold-500/20 text-slate-400 text-xs hover:border-gold-400 flex items-center justify-between transition-colors"
            >
              <div className="flex items-center gap-2 truncate">
                <Search className="w-3.5 h-3.5 text-gold-500 shrink-0" />
                <span className="truncate">Search judgments, ratio, counsel...</span>
              </div>
              <kbd className="hidden sm:inline bg-navy-800 text-slate-400 px-1.5 py-0.5 rounded text-[10px] border border-slate-700">
                /
              </kbd>
            </button>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-2 rounded-lg bg-navy-850 text-slate-400 hover:text-gold-400 transition-colors relative"
              title="Notifications"
            >
              <Bell className="w-4 h-4 text-gold-500" />
              <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-gold-400"></span>
            </button>

            <Link
              to="/pricing"
              className="hidden sm:flex items-center gap-1.5 text-xs font-semibold text-navy-950 bg-gold-500 hover:bg-gold-400 px-3 py-1.5 rounded-lg transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Upgrade Plan</span>
            </Link>

            <Link
              to="/dashboard/profile"
              className="flex items-center gap-2 pl-2 border-l border-gold-500/20"
            >
              <div className="w-8 h-8 rounded-full bg-gold-500/20 text-gold-400 font-bold flex items-center justify-center text-xs border border-gold-500/40">
                {user?.name ? user.name.substring(0, 2).toUpperCase() : 'U'}
              </div>
            </Link>
          </div>
        </header>

        {/* Dynamic Page Component */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
          <Outlet />
        </main>
      </div>

      {/* Mobile Sidebar Drawer */}
      {isMobileSidebarOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden bg-navy-950/80 backdrop-blur-md">
          <div className="w-72 bg-navy-900 border-r border-gold-500/20 h-full flex flex-col p-4 animate-in slide-in-from-left duration-200">
            <div className="flex items-center justify-between pb-4 border-b border-gold-500/15">
              <Logo size="sm" />
              <button
                onClick={() => setIsMobileSidebarOpen(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="flex-1 py-4 space-y-1 overflow-y-auto">
              {navItems.map((item) => {
                const Icon = item.icon;
                const active = isActive(item.path);
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMobileSidebarOpen(false)}
                    className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                      active
                        ? 'bg-gold-500/15 text-gold-300 font-semibold border border-gold-500/30'
                        : 'text-slate-300 hover:text-gold-300 hover:bg-navy-850'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className={`w-4 h-4 ${active ? 'text-gold-400' : 'text-slate-400'}`} />
                      <span>{item.label}</span>
                    </div>
                    {item.badge !== undefined && item.badge > 0 && (
                      <span className="bg-gold-500 text-navy-950 font-bold text-xs px-2 py-0.5 rounded-full">
                        {item.badge}
                      </span>
                    )}
                  </Link>
                );
              })}
            </nav>

            <div className="pt-4 border-t border-gold-500/15">
              <button
                onClick={() => {
                  logout();
                  setIsMobileSidebarOpen(false);
                  navigate('/');
                }}
                className="w-full py-2 rounded-lg bg-rose-500/10 text-rose-300 text-xs font-semibold"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Global Command Search Overlay */}
      <GlobalSearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </div>
  );
};

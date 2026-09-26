import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Search, Bookmark, Menu, X, LayoutDashboard, LogOut, Sparkles } from 'lucide-react';
import { Logo } from './Logo';
import { useBookmarks } from '../context/BookmarkContext';
import { useAuth } from '../context/AuthContext';
import { GlobalSearchModal } from './GlobalSearchModal';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { totalCount } = useBookmarks();
  const { user, isAuthenticated, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Judgments', path: '/judgments' },
    { name: 'Legal News', path: '/news' },
    { name: 'Counsel Hub', path: '/counsel' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'About', path: '/about' }
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${isScrolled
          ? 'bg-navy-950/90 backdrop-blur-md border-b border-gold-500/20 shadow-xl py-3'
          : 'bg-navy-950/70 border-b border-gold-500/10 py-4'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Logo size="md" />

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${isActive(link.path)
                  ? 'text-gold-400 bg-gold-500/10 border border-gold-500/30'
                  : 'text-slate-300 hover:text-gold-300 hover:bg-navy-850'
                  }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right Action Controls */}
          <div className="hidden md:flex items-center gap-3">
            {/* Quick Search trigger */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-2 rounded-lg bg-navy-850 border border-gold-500/20 text-slate-300 hover:text-gold-400 hover:border-gold-400 transition-all flex items-center gap-2 text-xs"
              title="Global Legal Search (/)"
            >
              <Search className="w-4 h-4 text-gold-500" />
              <span className="hidden lg:inline text-slate-400">Search</span>
              <kbd className="hidden lg:inline bg-navy-800 text-slate-400 px-1.5 py-0.5 rounded text-[10px] border border-slate-700">
                /
              </kbd>
            </button>

            {/* Bookmarks */}
            <Link
              to="/dashboard/bookmarks"
              className="relative p-2 rounded-lg bg-navy-850 border border-gold-500/20 text-slate-300 hover:text-gold-400 hover:border-gold-400 transition-all"
              title="Saved Items"
            >
              <Bookmark className="w-4 h-4 text-gold-500" />
              {totalCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-gold-500 text-navy-950 font-bold text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                  {totalCount}
                </span>
              )}
            </Link>

            {isAuthenticated ? (
              <div className="flex items-center gap-2 pl-2 border-l border-gold-500/20">
                <Link
                  to="/dashboard"
                  className="px-3.5 py-1.5 rounded-lg bg-gold-500 text-navy-950 font-semibold text-xs hover:bg-gold-400 transition-colors flex items-center gap-1.5 shadow-md"
                >
                  <LayoutDashboard className="w-3.5 h-3.5" />
                  <span>Dashboard</span>
                </Link>

                <button
                  onClick={() => {
                    logout();
                    navigate('/');
                  }}
                  className="p-2 rounded-lg bg-navy-850 border border-gold-500/20 text-slate-400 hover:text-rose-400 transition-colors"
                  title="Sign Out"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-2 pl-2 border-l border-gold-500/20">
                <Link
                  to="/login"
                  className="px-3 py-1.5 rounded-lg text-xs font-medium text-slate-300 hover:text-gold-400 hover:bg-navy-850 transition-colors"
                >
                  Sign In
                </Link>

                <Link
                  to="/signup"
                  className="px-4 py-1.5 rounded-lg bg-gold-500 text-navy-950 font-semibold text-xs hover:bg-gold-400 transition-colors shadow-md flex items-center gap-1"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Get Started</span>
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-2 rounded-lg bg-navy-850 text-gold-400"
            >
              <Search className="w-5 h-5" />
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg bg-navy-850 border border-gold-500/20 text-slate-300"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-navy-900 border-b border-gold-500/20 px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top-4 duration-200">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium ${isActive(link.path)
                    ? 'text-gold-400 bg-gold-500/10 font-semibold'
                    : 'text-slate-300 hover:text-slate-100 hover:bg-navy-850'
                    }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="pt-3 border-t border-gold-500/15 flex flex-col space-y-2">
              <Link
                to="/dashboard/bookmarks"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-between px-3 py-2 rounded-lg bg-navy-850 text-sm text-slate-300"
              >
                <div className="flex items-center gap-2">
                  <Bookmark className="w-4 h-4 text-gold-500" />
                  <span>Saved Bookmarks</span>
                </div>
                <span className="bg-gold-500 text-navy-950 font-bold text-xs px-2 py-0.5 rounded-full">
                  {totalCount}
                </span>
              </Link>

              {isAuthenticated ? (
                <div className="space-y-2 pt-1">
                  <div className="text-xs text-slate-400 px-3">Signed in as {user?.name}</div>
                  <Link
                    to="/dashboard"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-full py-2 px-3 rounded-lg bg-gold-500 text-navy-950 font-semibold text-center text-sm block"
                  >
                    Go to Dashboard
                  </Link>
                  <button
                    onClick={() => {
                      logout();
                      setIsMobileMenuOpen(false);
                      navigate('/');
                    }}
                    className="w-full py-2 px-3 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-300 font-medium text-center text-sm block"
                  >
                    Sign Out
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-2 pt-1">
                  <Link
                    to="/login"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="py-2 text-center rounded-lg bg-navy-850 text-slate-300 text-sm border border-gold-500/20"
                  >
                    Sign In
                  </Link>
                  <Link
                    to="/signup"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="py-2 text-center rounded-lg bg-gold-500 text-navy-950 font-semibold text-sm"
                  >
                    Get Started
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </header>

      {/* Global Search Dialog */}
      <GlobalSearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
};

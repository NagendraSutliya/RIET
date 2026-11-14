import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Sparkles } from 'lucide-react';

export default function Template2Header({ onOpenEnquiry }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);
  const location = useLocation();

  const mainNav = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Academics', path: '/academics' },
    { name: 'Departments', path: '/departments' },
    { name: 'Admissions', path: '/admissions' },
    { name: 'Placements', path: '/placements' },
    { name: 'Campus Life', path: '/campus-life' },
    { name: 'Research', path: '/research-innovation' },
    { name: 'News & Events', path: '/news-events' },
    { name: 'Contact', path: '/contact' },
  ];

  const moreNav = [
    { name: 'Leadership & Board', path: '/leadership' },
    { name: 'Approvals & Affiliations', path: '/approvals' },
    { name: 'Fees & Scholarships', path: '/fees-scholarships' },
    { name: 'Campus Facilities', path: '/facilities' },
    { name: 'Incubation Centre', path: '/incubation' },
    { name: 'Photo Gallery', path: '/gallery' },
    { name: 'Student Corner', path: '/student-corner' },
    { name: 'Mandatory Disclosure', path: '/mandatory-disclosure' },
  ];

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-[#e5eaf0] shadow-[0_4px_20px_rgba(16,43,80,0.06)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="h-18 sm:h-20 flex items-center justify-between gap-4">
          {/* Brand Logo & Wordmark (Template 2 Modern Minimal Emblem) */}
          <Link to="/" className="flex items-center gap-3 group shrink-0">
            <div className="w-11 h-11 rounded-full border-2 border-[#e6ad3d] bg-[#fff8e8] flex items-center justify-center text-[#102b50] font-black text-xl font-heading shadow-xs group-hover:scale-105 transition-transform">
              R
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-black text-lg sm:text-xl text-[#102b50] tracking-tight group-hover:text-[#28679e] transition-colors leading-tight">
                RIET JAIPUR
              </span>
              <span className="text-[8px] sm:text-[9px] font-bold tracking-[0.6px] text-[#68798b] uppercase">
                Rajasthan Institute of Engineering & Technology
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links (Single Line, Clean Font) */}
          <nav className="hidden xl:flex items-center gap-1.5 lg:gap-2 shrink-0">
            {mainNav.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-[12px] font-bold px-2.5 py-1.5 rounded-md transition-all ${
                  isActive(item.path)
                    ? 'text-[#28679e] bg-[#f0f5fa]'
                    : 'text-[#334960] hover:text-[#28679e] hover:bg-slate-50'
                }`}
              >
                {item.name}
              </Link>
            ))}

            {/* "More" Dropdown Menu */}
            <div 
              className="relative"
              onMouseEnter={() => setMoreDropdownOpen(true)}
              onMouseLeave={() => setMoreDropdownOpen(false)}
            >
              <button
                className={`text-[12px] font-bold px-2.5 py-1.5 rounded-md transition-all flex items-center gap-1 ${
                  moreDropdownOpen ? 'text-[#28679e] bg-[#f0f5fa]' : 'text-[#334960] hover:text-[#28679e]'
                }`}
              >
                <span>More</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${moreDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {moreDropdownOpen && (
                <div className="absolute top-full right-0 mt-1 w-56 bg-white border border-[#e5eaf0] rounded-xl shadow-xl py-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                  <div className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100">
                    Additional Pages
                  </div>
                  {moreNav.map((sub) => (
                    <Link
                      key={sub.path}
                      to={sub.path}
                      onClick={() => setMoreDropdownOpen(false)}
                      className={`block px-3 py-2 text-xs font-semibold transition-colors ${
                        isActive(sub.path)
                          ? 'text-[#28679e] bg-blue-50/60 font-bold'
                          : 'text-slate-700 hover:text-[#102b50] hover:bg-slate-50'
                      }`}
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Action Button & Mobile Menu Trigger */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenEnquiry}
              className="hidden sm:inline-flex items-center gap-1.5 bg-[#e6ad3d] hover:bg-[#d89f31] text-[#152a42] font-black px-4 py-2.5 rounded-lg text-xs shadow-xs transition-all hover:scale-105 active:scale-95"
            >
              <span>Enquire Now</span>
              <span>↗</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-lg text-[#102b50] hover:bg-slate-100 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-t border-slate-100 px-4 py-4 max-h-[80vh] overflow-y-auto space-y-2 shadow-xl">
          <div className="grid grid-cols-2 gap-1 pb-3 border-b border-slate-100">
            {mainNav.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-xs font-bold px-3 py-2 rounded-lg ${
                  isActive(item.path) ? 'bg-[#f0f5fa] text-[#28679e]' : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="pt-2">
            <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 px-3 mb-1">
              Campus & Institutional
            </div>
            <div className="grid grid-cols-2 gap-1">
              {moreNav.map((sub) => (
                <Link
                  key={sub.path}
                  to={sub.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-xs font-semibold px-3 py-2 rounded-lg ${
                    isActive(sub.path) ? 'bg-[#f0f5fa] text-[#28679e]' : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {sub.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="pt-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEnquiry();
              }}
              className="w-full bg-[#e6ad3d] hover:bg-[#d89f31] text-[#152a42] font-black py-2.5 rounded-lg text-xs text-center shadow-xs"
            >
              Enquire Now ↗
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

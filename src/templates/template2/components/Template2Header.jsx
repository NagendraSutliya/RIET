import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Sparkles } from 'lucide-react';

export default function Template2Header({ onOpenEnquiry }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);
  const location = useLocation();

  // Primary navigation items that comfortably fit on standard laptop screens
  const primaryNav = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Academics', path: '/academics' },
    { name: 'Admissions', path: '/admissions' },
    { name: 'Placements', path: '/placements' },
    { name: 'Campus Life', path: '/campus-life' },
    { name: 'Contact', path: '/contact' },
  ];

  // Secondary items in the "More" dropdown
  const moreNav = [
    { name: 'Departments & Labs', path: '/departments' },
    { name: 'Computer Science & Engg', path: '/department-detail' },
    { name: 'Campus Facilities', path: '/facilities' },
    { name: 'Fees & Scholarships', path: '/fees-scholarships' },
    { name: 'Research & Innovation', path: '/research-innovation' },
    { name: 'Incubation Centre', path: '/incubation' },
    { name: 'News & Events', path: '/news-events' },
    { name: 'Photo Gallery', path: '/gallery' },
    { name: 'Leadership & Governance', path: '/leadership' },
    { name: 'Approvals & Affiliations', path: '/approvals' },
    { name: 'Student Corner', path: '/student-corner' },
    { name: 'Mandatory Disclosure', path: '/mandatory-disclosure' },
  ];

  const allNavForMobile = [
    { name: 'Home', path: '/' },
    { name: 'About RIET', path: '/about' },
    { name: 'Academics', path: '/academics' },
    { name: 'Departments', path: '/departments' },
    { name: 'Admissions 2026', path: '/admissions' },
    { name: 'Placements', path: '/placements' },
    { name: 'Campus Life', path: '/campus-life' },
    { name: 'Facilities', path: '/facilities' },
    { name: 'Research', path: '/research-innovation' },
    { name: 'Incubation Centre', path: '/incubation' },
    { name: 'News & Events', path: '/news-events' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Leadership', path: '/leadership' },
    { name: 'Approvals', path: '/approvals' },
    { name: 'Fees & Aid', path: '/fees-scholarships' },
    { name: 'Student Corner', path: '/student-corner' },
    { name: 'Disclosure', path: '/mandatory-disclosure' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  const isMoreActive = moreNav.some((sub) => location.pathname === sub.path);

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-[#e5eaf0] shadow-[0_4px_20px_rgba(16,43,80,0.06)] w-full max-w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="h-16 sm:h-18 flex items-center justify-between gap-2 sm:gap-4">
          {/* Brand Logo & Wordmark (Official RIET Emblem) */}
          <Link to="/" className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
            <img
              src="/riet-emblem.png"
              alt="RIET Jaipur"
              className="w-10 h-10 sm:w-11 sm:h-11 object-contain group-hover:scale-105 transition-transform"
            />
            <div className="flex flex-col">
              <span className="font-heading font-black text-base sm:text-lg lg:text-xl text-[#102b50] tracking-tight group-hover:text-[#28679e] transition-colors leading-tight whitespace-nowrap">
                RIET JAIPUR
              </span>
              <span className="text-[8px] sm:text-[9px] font-bold tracking-[0.5px] text-[#68798b] uppercase hidden md:inline-block whitespace-nowrap">
                Jaipur • Est. 2000 • AICTE Approved
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links (Clean Single Line with Zero Overflow) */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {primaryNav.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-[11px] xl:text-[12px] font-bold px-2 xl:px-2.5 py-1.5 rounded-md transition-all whitespace-nowrap ${
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
                className={`text-[11px] xl:text-[12px] font-bold px-2 xl:px-2.5 py-1.5 rounded-md transition-all flex items-center gap-1 whitespace-nowrap ${
                  moreDropdownOpen || isMoreActive
                    ? 'text-[#28679e] bg-[#f0f5fa]'
                    : 'text-[#334960] hover:text-[#28679e] hover:bg-slate-50'
                }`}
              >
                <span>More</span>
                <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${moreDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {moreDropdownOpen && (
                <div className="absolute top-full right-0 mt-1 w-64 bg-white border border-[#e5eaf0] rounded-xl shadow-xl py-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                  <div className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100 mb-1">
                    All Sections & Services
                  </div>
                  <div className="max-h-[70vh] overflow-y-auto">
                    {moreNav.map((sub) => (
                      <Link
                        key={sub.path}
                        to={sub.path}
                        onClick={() => setMoreDropdownOpen(false)}
                        className={`block px-3 py-1.5 text-xs font-semibold transition-colors ${
                          isActive(sub.path)
                            ? 'text-[#28679e] bg-blue-50/60 font-bold'
                            : 'text-slate-700 hover:text-[#102b50] hover:bg-slate-50'
                        }`}
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* Action Button & Mobile Menu Trigger */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <button
              onClick={onOpenEnquiry}
              className="hidden sm:inline-flex items-center gap-1 bg-[#e6ad3d] hover:bg-[#d89f31] text-[#152a42] font-black px-3.5 sm:px-4 py-2 rounded-lg text-xs shadow-xs transition-all hover:scale-105 active:scale-95 whitespace-nowrap"
            >
              <span>Enquire</span>
              <span>↗</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-[#102b50] hover:bg-slate-100 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer (Clean Multi-Column) */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 px-4 py-4 max-h-[80vh] overflow-y-auto space-y-3 shadow-xl">
          <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 px-2">
            Main Navigation
          </div>
          <div className="grid grid-cols-2 gap-1 pb-3 border-b border-slate-100">
            {allNavForMobile.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-xs font-bold px-3 py-2 rounded-lg truncate ${
                  isActive(item.path) ? 'bg-[#f0f5fa] text-[#28679e]' : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="pt-2">
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

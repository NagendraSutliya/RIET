import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Template3Header({ onOpenEnquiry }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Academics', path: '/academics' },
    { name: 'Admissions', path: '/admissions' },
    { name: 'Courses', path: '/courses' },
    { name: 'Departments', path: '/departments' },
    { name: 'Placements', path: '/placements' },
    { name: 'Campus', path: '/campus' },
    { name: 'News', path: '/news' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-[#E1E6F0] shadow-xs w-full max-w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="h-16 sm:h-20 flex items-center justify-between gap-4">
          {/* Logo Brand (Official RIET Logo & Corporate typography) */}
          <Link to="/" className="flex items-center gap-3 group shrink-0">
            <img
              src="/riet-emblem.png"
              alt="RIET Logo"
              className="w-10 h-10 sm:w-12 sm:h-12 object-contain group-hover:scale-105 transition-transform"
            />
            <div className="flex flex-col">
              <b className="font-heading font-black text-2xl sm:text-3xl text-[#0E2A5C] tracking-tight leading-none group-hover:text-[#F2A900] transition-colors">
                RIET
              </b>
              <small className="text-[10px] sm:text-[11px] font-semibold text-[#44506B] tracking-tight leading-tight mt-0.5">
                Rajasthan Institute of Engineering &amp; Technology
              </small>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-2 xl:gap-4 shrink-0">
            {navItems.map((item) => {
              const active = isActive(item.path);
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-[12px] xl:text-[13px] font-bold py-1 border-b-2 transition-all whitespace-nowrap ${
                    active
                      ? 'border-[#F2A900] text-[#0E2A5C]'
                      : 'border-transparent text-[#44506B] hover:text-[#0E2A5C] hover:border-slate-300'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Button & Mobile Menu Toggle */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenEnquiry}
              className="hidden sm:inline-flex items-center justify-center bg-[#F2A900] hover:bg-[#e09b00] text-[#0E2A5C] font-extrabold px-4 sm:px-5 py-2.5 rounded-lg text-xs sm:text-sm shadow-xs transition-transform hover:scale-105 active:scale-95 whitespace-nowrap"
            >
              Apply now
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-[#0E2A5C] hover:bg-slate-100 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 px-4 py-4 max-h-[80vh] overflow-y-auto space-y-2 shadow-lg">
          <div className="grid grid-cols-2 gap-1.5 pb-3 border-b border-slate-100">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-xs font-bold px-3 py-2.5 rounded-lg ${
                  isActive(item.path)
                    ? 'bg-amber-50 text-[#0E2A5C] font-black border-l-2 border-[#F2A900]'
                    : 'text-slate-700 hover:bg-slate-50'
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
              className="w-full bg-[#F2A900] hover:bg-[#e09b00] text-[#0E2A5C] font-black py-2.5 rounded-lg text-xs text-center shadow-xs"
            >
              Apply now ↗
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

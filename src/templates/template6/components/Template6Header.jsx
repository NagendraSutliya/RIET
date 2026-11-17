import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Award, ChevronDown } from 'lucide-react';

export default function Template6Header({ onOpenEnquiry }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/academics', label: 'Academics' },
    { to: '/admissions', label: 'Admissions' },
    { to: '/courses', label: 'Courses' },
    { to: '/departments', label: 'Departments' },
    { to: '/placements', label: 'Placements' },
    { to: '/campus', label: 'Campus' },
    { to: '/news', label: 'News' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <header className="bg-[#FAF7F5] border-b border-[#E3DDD8] sticky top-[38px] z-40 shadow-xs">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6">
        {/* Top Masthead: Seal & Name */}
        <div className="py-4 flex items-center justify-between border-b border-[#E8E2DC]">
          <Link to="/" className="flex items-center gap-3.5 group">
            <img
              src="/riet-emblem.png"
              alt="RIET Jaipur Logo"
              className="w-12 h-12 object-contain group-hover:scale-105 transition-transform"
            />
            <div>
              <span className="font-fraunces text-2xl sm:text-[26px] font-bold text-[#1C1B22] tracking-tight leading-none block">
                RIET JAIPUR
              </span>
              <small className="text-[11px] text-[#6B1724] font-semibold tracking-wider uppercase block mt-1">
                Rajasthan Institute of Engineering &amp; Technology
              </small>
            </div>
          </Link>

          {/* Desktop Right CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenEnquiry}
              className="bg-[#6B1724] hover:bg-[#52111B] text-white font-semibold text-xs py-2.5 px-5 rounded-md border border-[#D4AF37]/50 shadow-xs transition-colors"
            >
              Admissions 2026-27
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-[#1C1B22] hover:bg-[#E8E2DC] rounded sm:hidden"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Desktop Horizontal Classic Navigation Bar */}
        <nav className="hidden sm:flex items-center justify-center gap-1 sm:gap-2 py-2.5 font-medium text-xs sm:text-sm overflow-x-auto no-scrollbar">
          {navLinks.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `px-3 py-1.5 rounded transition-all whitespace-nowrap text-xs font-semibold ${
                  isActive
                    ? 'text-[#6B1724] bg-[#F0EAE4] border-b-2 border-[#6B1724]'
                    : 'text-[#4A4752] hover:text-[#1C1B22] hover:bg-[#F0EAE4]/60'
                }`
              }
              end={item.to === '/'}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="sm:hidden py-3 border-t border-[#E8E2DC] space-y-1">
            {navLinks.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded text-sm font-semibold transition-colors ${
                    isActive
                      ? 'bg-[#6B1724] text-white'
                      : 'text-[#1C1B22] hover:bg-[#F0EAE4]'
                  }`
                }
                end={item.to === '/'}
              >
                {item.label}
              </NavLink>
            ))}
            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEnquiry();
                }}
                className="w-full bg-[#6B1724] text-white py-2 rounded font-bold text-xs"
              >
                Apply Online (REAP 1025)
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

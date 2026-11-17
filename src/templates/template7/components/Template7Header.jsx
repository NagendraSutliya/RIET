import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, GraduationCap, ChevronDown } from 'lucide-react';

export default function Template7Header({ onOpenEnquiry }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About Us' },
    { 
      to: '/academics', 
      label: 'Academics',
      submenu: [
        { to: '/academics', label: 'Academic Overview' },
        { to: '/courses', label: 'Degree Programs' },
        { to: '/departments', label: 'Engineering Departments' },
        { to: '/academics', label: 'Calendars & Manuals' }
      ]
    },
    { 
      to: '/admissions', 
      label: 'Admissions',
      submenu: [
        { to: '/admissions', label: 'Admissions 2025-26' },
        { to: '/admissions', label: 'REAP Code 1025 Process' },
        { to: '/admissions', label: 'Eligibility & Seat Matrix' },
        { to: '/admissions', label: 'Frequently Asked Questions' }
      ]
    },
    { to: '/courses', label: 'Courses' },
    { to: '/departments', label: 'Departments' },
    { to: '/placements', label: 'Placements' },
    { 
      to: '/campus', 
      label: 'Campus Life',
      submenu: [
        { to: '/campus', label: 'Virtual Campus Tour' },
        { to: '/campus', label: 'Central Digital Library' },
        { to: '/campus', label: 'Hostels & Residential Living' },
        { to: '/campus', label: 'Sports & Athletics Complex' }
      ]
    },
    { to: '/news', label: 'News & Events' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-40 font-sans shadow-xs">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between gap-4">
        {/* RIET Brand Logo with Collegiate Serif */}
        <Link to="/" className="flex items-center gap-3 group shrink-0">
          <img
            src="/riet-emblem.png"
            alt="RIET Jaipur"
            className="w-11 h-11 object-contain group-hover:scale-105 transition-transform"
          />
          <div className="flex flex-col">
            <span className="text-2xl sm:text-[26px] font-bold font-playfair text-[#192f59] leading-tight tracking-tight">
              RIET <span className="text-[#d2973b]">JAIPUR</span>
            </span>
            <span className="text-[10px] sm:text-[11px] text-[#6b7280] font-medium leading-none tracking-wide uppercase">
              Rajasthan Institute of Engg. &amp; Tech.
            </span>
          </div>
        </Link>

        {/* Desktop Collegiate Navigation with Dropdowns */}
        <nav aria-label="Main Navigation" className="hidden xl:flex items-center gap-5 font-medium text-[13px] text-[#192f59]">
          {navLinks.map((item) => (
            <div
              key={item.label}
              className="relative group py-2"
              onMouseEnter={() => setActiveDropdown(item.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `flex items-center gap-1 py-1 transition-colors relative uppercase tracking-wider text-xs font-semibold ${
                    isActive
                      ? 'text-[#d2973b] font-bold after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#d2973b]'
                      : 'text-[#192f59] hover:text-[#d2973b]'
                  }`
                }
                end={item.to === '/'}
              >
                <span>{item.label}</span>
                {item.submenu && <ChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180" />}
              </NavLink>

              {/* Submenu Dropdown */}
              {item.submenu && (
                <div className="absolute top-full left-0 w-56 bg-white border border-slate-200 rounded-md shadow-xl py-2 hidden group-hover:block transition-all z-50 border-t-2 border-t-[#d2973b]">
                  {item.submenu.map((sub, sIdx) => (
                    <Link
                      key={sIdx}
                      to={sub.to}
                      className="block px-4 py-2 text-xs text-[#192f59] hover:bg-[#f8f9fa] hover:text-[#d2973b] transition-colors font-medium"
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Kingster Signature CTA Button */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenEnquiry}
            className="bg-[#d2973b] hover:bg-[#b8822e] text-white font-bold py-2.5 px-6 rounded text-xs uppercase tracking-wider transition-all shadow-sm hover:shadow"
          >
            Apply Now
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="flex items-center gap-2 xl:hidden">
          <button
            onClick={onOpenEnquiry}
            className="sm:hidden px-3 py-1.5 rounded text-xs font-bold bg-[#d2973b] text-white"
          >
            Apply
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#192f59] hover:bg-slate-100 rounded-lg transition-colors"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-t border-slate-200 px-4 py-4 shadow-lg flex flex-col gap-1 font-sans">
          {navLinks.map((item) => (
            <div key={item.label}>
              <NavLink
                to={item.to}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `px-3 py-2 rounded text-xs font-semibold uppercase tracking-wider transition-colors block ${
                    isActive
                      ? 'bg-[#192f59] text-white'
                      : 'text-[#192f59] hover:bg-slate-100 hover:text-[#d2973b]'
                  }`
                }
                end={item.to === '/'}
              >
                {item.label}
              </NavLink>
            </div>
          ))}
          <div className="pt-3 border-t border-slate-200 mt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEnquiry();
              }}
              className="w-full py-2.5 rounded text-xs font-bold uppercase tracking-wider bg-[#d2973b] text-white shadow"
            >
              Apply Online (REAP 1025)
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

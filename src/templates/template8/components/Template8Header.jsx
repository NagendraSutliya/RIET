import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Search, ChevronDown } from 'lucide-react';

export default function Template8Header({ onOpenEnquiry }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const navLinks = [
    { to: '/', label: 'Home' },
    { 
      to: '/about', 
      label: 'Pages',
      submenu: [
        { to: '/about', label: 'About Our University' },
        { to: '/placements', label: 'Placements & Careers' },
        { to: '/contact', label: 'Contact Us' },
        { to: '/news', label: 'News & Events' }
      ]
    },
    { 
      to: '/academics', 
      label: 'Academics',
      submenu: [
        { to: '/academics', label: 'Academic Overview' },
        { to: '/courses', label: 'Degree Programs' },
        { to: '/departments', label: 'Departments' }
      ]
    },
    { 
      to: '/admissions', 
      label: 'Admissions',
      submenu: [
        { to: '/admissions', label: 'Apply for Admission' },
        { to: '/admissions', label: 'Eligibility & Fees' },
        { to: '/admissions', label: 'REAP Code: 1025' }
      ]
    },
    { to: '/courses', label: 'Courses' },
    { to: '/campus', label: 'Athletics' },
    { to: '/campus', label: 'University Life' },
  ];

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-40 font-sans shadow-xs">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 h-20 flex items-center justify-between gap-4">
        {/* Official RIET Institutional Brand Logo */}
        <Link to="/" className="flex items-center gap-3 shrink-0 group">
          <img
            src="/riet-emblem.png"
            alt="RIET Jaipur Official Logo"
            className="w-12 h-12 sm:w-14 sm:h-14 object-contain transition-transform group-hover:scale-105"
          />
          <div className="flex flex-col">
            <span className="text-2xl sm:text-[26px] font-bold font-playfair text-[#192f59] leading-tight tracking-tight">
              RIET <span className="text-[#192f59] font-normal">JAIPUR</span>
            </span>
            <span className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider -mt-1 hidden sm:block">
              Rajasthan Institute of Engg. &amp; Tech.
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav aria-label="Main Navigation" className="hidden lg:flex items-center gap-6 xl:gap-8 font-medium text-[14px]">
          {navLinks.map((item) => (
            <div key={item.label} className="relative group h-20 flex items-center">
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `flex items-center gap-1 font-semibold transition-colors relative py-1 text-[13px] tracking-wide ${
                    isActive
                      ? 'text-[#3db166] after:content-[""] after:absolute after:-bottom-5 after:left-0 after:w-full after:h-0.5 after:bg-[#3db166]'
                      : 'text-[#2b354f] hover:text-[#3db166]'
                  }`
                }
                end={item.to === '/'}
              >
                <span>{item.label}</span>
                {item.submenu && <ChevronDown className="w-3.5 h-3.5 opacity-60 group-hover:rotate-180 transition-transform" />}
              </NavLink>

              {/* Submenu Dropdown */}
              {item.submenu && (
                <div className="absolute top-[75px] left-0 w-52 bg-white border border-slate-200 rounded-md shadow-xl py-2 hidden group-hover:block transition-all z-50 border-t-2 border-t-[#3db166]">
                  {item.submenu.map((sub, sIdx) => (
                    <Link
                      key={sIdx}
                      to={sub.to}
                      className="block px-4 py-2 text-xs text-[#192f59] hover:bg-[#f8f9fa] hover:text-[#3db166] transition-colors font-medium"
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Search Trigger */}
          <div className="relative">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-1.5 text-slate-700 hover:text-[#3db166] transition-colors"
              aria-label="Search"
            >
              <Search className="w-4 h-4" />
            </button>
            {searchOpen && (
              <div className="absolute right-0 top-10 w-64 bg-white border border-slate-200 shadow-xl rounded-md p-2 z-50">
                <input
                  type="text"
                  placeholder="Search RIET website..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-3 py-1.5 text-xs border border-slate-300 rounded focus:outline-none focus:border-[#3db166]"
                  autoFocus
                />
              </div>
            )}
          </div>
        </nav>

        {/* Mobile Hamburger */}
        <div className="flex items-center gap-2 lg:hidden">
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
        <div className="lg:hidden bg-white border-t border-slate-200 px-4 py-4 shadow-lg flex flex-col gap-1 font-sans">
          {navLinks.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-sm font-semibold text-[#192f59] hover:bg-slate-50 hover:text-[#3db166] rounded"
            >
              {item.label}
            </Link>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenEnquiry();
            }}
            className="mt-3 w-full bg-[#3db166] text-white py-2.5 rounded font-bold text-xs uppercase tracking-wider"
          >
            Apply Now
          </button>
        </div>
      )}
    </header>
  );
}

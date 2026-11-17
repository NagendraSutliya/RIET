import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Template5Header({ onOpenEnquiry }) {
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
    <header className="bg-white sticky top-[38px] z-40 border-b border-[#D5E3E6] shadow-xs">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-7 py-3 sm:py-4 flex flex-col items-center relative">
        {/* Desktop Absolute Apply Button */}
        <div className="hidden lg:block absolute right-7 top-4">
          <button
            onClick={onOpenEnquiry}
            className="bg-[#F58B3A] hover:bg-[#FFB26B] text-[#0A3340] font-bold px-6 py-2.5 rounded-full text-sm transition-all shadow-xs"
          >
            Apply now
          </button>
        </div>

        {/* Mobile Top Row with Brand & Hamburger */}
        <div className="w-full flex items-center justify-between lg:justify-center">
          {/* Logo & Subtitle */}
          <Link to="/" className="group flex items-center gap-3 sm:gap-3.5 text-left">
            <img
              src="/riet-emblem.png"
              alt="RIET Jaipur"
              className="w-12 h-12 sm:w-14 sm:h-14 object-contain group-hover:scale-105 transition-transform shrink-0"
            />
            <div className="flex flex-col">
              <span className="font-fraunces text-2xl sm:text-3xl font-bold text-[#0A3340] tracking-tight leading-tight group-hover:text-[#0F4C5C] transition-colors">
                RIET
              </span>
              <small className="text-[11px] sm:text-[12px] text-[#3C5961] font-medium block tracking-wide">
                Rajasthan Institute of Engineering &amp; Technology
              </small>
            </div>
          </Link>

          {/* Mobile Right Action and Hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenEnquiry}
              className="bg-[#F58B3A] text-[#0A3340] font-bold text-xs px-3 py-1.5 rounded-full"
            >
              Apply
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-[#0A3340] hover:bg-[#EEF4F5] rounded-lg"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Desktop Horizontal Pill Navigation Bar */}
        <nav aria-label="Main" className="hidden lg:flex items-center gap-1.5 mt-3 overflow-x-auto max-w-full font-medium text-sm no-scrollbar">
          {navLinks.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `px-4 py-1.5 rounded-full transition-all whitespace-nowrap text-[14px] ${
                  isActive
                    ? 'bg-[#0F4C5C] text-white font-semibold shadow-xs'
                    : 'text-[#16262B] hover:bg-[#EEF4F5]'
                }`
              }
              end={item.to === '/'}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden w-full mt-3 pt-3 border-t border-[#D5E3E6] space-y-1">
            <div className="flex flex-col gap-1">
              {navLinks.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `px-3.5 py-2 rounded-xl text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-[#0F4C5C] text-white font-semibold'
                        : 'text-[#16262B] hover:bg-[#EEF4F5]'
                    }`
                  }
                  end={item.to === '/'}
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

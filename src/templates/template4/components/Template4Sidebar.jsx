import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Phone, Mail, Award, ArrowUpRight, Compass } from 'lucide-react';
import { collegeInfo } from '../../../data/collegeData';

export default function Template4Sidebar({ onOpenEnquiry }) {
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
    <>
      {/* ============================================================== */}
      {/* MOBILE / TABLET HEADER (Hidden on desktop lg: >= 1024px)        */}
      {/* ============================================================== */}
      <div className="lg:hidden w-full bg-[#1C1B22] text-white border-b border-[#2D2B36] sticky top-[38px] z-40">
        <div className="flex items-center justify-between px-4 py-3">
          <Link to="/" className="flex items-center gap-2.5">
            <img
              src="/riet-emblem.png"
              alt="RIET"
              className="w-8 h-8 object-contain rounded-full bg-white p-0.5"
            />
            <div className="flex flex-col">
              <span className="font-bricolage text-2xl font-bold tracking-tight text-white leading-none">
                RIET
              </span>
              <span className="text-[10px] text-[#CFCBD6] leading-tight mt-0.5">
                Jaipur • REAP 1025
              </span>
            </div>
          </Link>

          <div className="flex items-center gap-2">
            <button
              onClick={onOpenEnquiry}
              className="bg-[#B3263A] hover:bg-[#8F1C2D] text-white text-xs font-bold px-3 py-1.5 rounded transition-colors"
            >
              Apply now
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-white hover:bg-[#2D2B36] rounded"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="bg-[#1C1B22] border-t border-[#2D2B36] px-4 py-4 space-y-1">
            <nav className="flex flex-col gap-1 mb-4">
              {navLinks.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-[#B3263A] text-white font-semibold'
                        : 'text-[#E8E6EC] hover:bg-[#2D2B36]'
                    }`
                  }
                  end={item.to === '/'}
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            <div className="pt-3 border-t border-[#2D2B36] text-xs text-[#CFCBD6] space-y-2">
              <div className="font-semibold text-white">REAP Code: 1025</div>
              <div className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-[#B3263A]" />
                <a href="tel:9257111214" className="hover:text-white">9257111214 / 9257111215</a>
              </div>
              <div className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[#B3263A]" />
                <a href="mailto:inquiry@rietjaipur.ac.in" className="hover:text-white">inquiry@rietjaipur.ac.in</a>
              </div>
              <div className="flex gap-4 pt-1">
                <Link to="/campus" onClick={() => setMobileMenuOpen(false)} className="hover:text-white underline">Virtual tour</Link>
                <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="hover:text-white underline">Career</Link>
                <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="hover:text-white underline">Contact us</Link>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ============================================================== */}
      {/* DESKTOP SIDEBAR (Visible on lg: >= 1024px)                     */}
      {/* ============================================================== */}
      <aside className="hidden lg:flex lg:flex-col lg:justify-between w-[264px] min-w-[264px] bg-[#1C1B22] text-white lg:sticky lg:top-[38px] lg:h-[calc(100vh-38px)] p-6 overflow-y-auto shrink-0 z-40 border-r border-[#2D2B36]">
        {/* Top: Logo & Subtitle */}
        <div>
          <Link to="/" className="block group mb-6">
            <div className="flex items-center gap-3 mb-2">
              <img
                src="/riet-emblem.png"
                alt="RIET Logo"
                className="w-12 h-12 object-contain rounded-full bg-white p-0.5 shadow-md group-hover:scale-105 transition-transform"
              />
              <span className="font-bricolage text-[36px] font-bold text-white tracking-tight leading-none block group-hover:text-[#F6F3F4] transition-colors">
                RIET
              </span>
            </div>
            <small className="text-[12px] text-[#CFCBD6] leading-snug block font-manrope">
              Rajasthan Institute of Engineering &amp; Technology, Jaipur
            </small>
          </Link>

          {/* Navigation links */}
          <nav aria-label="Main" className="flex flex-col gap-1 font-manrope">
            {navLinks.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `px-3.5 py-2 rounded text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-[#B3263A] text-white font-semibold shadow-xs'
                      : 'text-[#E8E6EC] hover:bg-[#2D2B36]'
                  }`
                }
                end={item.to === '/'}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>

        {/* Bottom sidebar widget (.sx) */}
        <div className="mt-8 pt-6 border-t border-[#2D2B36] flex flex-col gap-3 text-sm text-[#CFCBD6] font-manrope">
          <button
            onClick={onOpenEnquiry}
            className="w-full text-center bg-[#B3263A] hover:bg-[#8F1C2D] text-white font-bold py-2.5 px-4 rounded text-sm transition-colors shadow-xs"
          >
            Apply now
          </button>

          <div className="text-xs pt-1">
            <div className="flex items-center gap-1.5 font-semibold text-white">
              <Award className="w-3.5 h-3.5 text-[#B3263A]" />
              <span>REAP code 1025</span>
            </div>
            <p className="text-[11px] text-[#A29EAA] mt-1">
              CAM 1025 • RMCAAP 225 • RMAT 278
            </p>
          </div>

          <div className="flex flex-col gap-1.5 text-xs text-[#CFCBD6]">
            <Link to="/campus" className="hover:text-white flex items-center justify-between group">
              <span>Virtual tour</span>
              <ArrowUpRight className="w-3 h-3 text-[#A29EAA] group-hover:text-white transition-colors" />
            </Link>
            <Link to="/contact" className="hover:text-white flex items-center justify-between group">
              <span>Career at RIET</span>
              <ArrowUpRight className="w-3 h-3 text-[#A29EAA] group-hover:text-white transition-colors" />
            </Link>
            <Link to="/contact" className="hover:text-white flex items-center justify-between group">
              <span>Contact us</span>
              <ArrowUpRight className="w-3 h-3 text-[#A29EAA] group-hover:text-white transition-colors" />
            </Link>
          </div>

          <div className="text-[11px] text-[#878292] pt-2 border-t border-[#2D2B36]/60">
            © 2026 RIET Jaipur
          </div>
        </div>
      </aside>
    </>
  );
}

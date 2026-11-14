import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, ChevronDown, Menu, X, Shield, BookOpen, GraduationCap, Briefcase, Building, Cpu, Calendar, PhoneCall } from 'lucide-react';
import { collegeInfo } from '../data/collegeData';
import CollegeLogo from './CollegeLogo';

export default function Navbar({ onOpenEnquiry }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  const navLinks = [
    {
      name: 'About',
      path: '/about',
      sublinks: [
        { name: 'About RIET & 25-Year Legacy', path: '/about' },
        { name: 'Vision, Mission & Core Values', path: '/about#vision' },
        { name: 'Leadership & Director Desk', path: '/about#leadership' },
        { name: 'Approvals & Affiliations (AICTE/RTU)', path: '/about#approvals' },
        { name: 'Statutory Policies & Sitemap', path: '/about#privacy' }
      ]
    },
    {
      name: 'Academics',
      path: '/academics',
      sublinks: [
        { name: 'All Academic Programs & Degrees', path: '/academics' },
        { name: 'Computer Science & Engineering', path: '/departments/cse' },
        { name: 'AI & Data Science', path: '/departments/aids' },
        { name: 'Cyber Security', path: '/departments/cyber' },
        { name: 'Mechanical & Civil Engineering', path: '/departments/mechanical' },
        { name: 'Management Studies (MBA & BBA)', path: '/departments/management' },
        { name: 'Computer Applications (MCA & BCA)', path: '/departments/mca' },
        { name: 'Online Semester Result Lookup', path: '/academics#results' }
      ]
    },
    {
      name: 'Admissions',
      path: '/admissions',
      sublinks: [
        { name: 'Interactive Scholarship & Fee Calculator', path: '/admissions' },
        { name: '4-Step Admission Workflow', path: '/admissions' },
        { name: 'REAP Code 1025 Guidelines', path: '/admissions' },
        { name: 'Required Documents Checklist', path: '/admissions' },
        { name: 'Frequently Asked Questions (FAQ)', path: '/admissions' }
      ]
    },
    {
      name: 'Placements',
      path: '/placements',
      sublinks: [
        { name: 'Placement Records (Highest ₹44 LPA)', path: '/placements' },
        { name: 'Branch-wise Placement Performance', path: '/placements' },
        { name: 'Corporate Hiring Partners Directory', path: '/placements' },
        { name: 'Corporate Recruiter Registration Desk', path: '/placements' },
        { name: 'Student Success Stories & Testimonials', path: '/placements' }
      ]
    },
    {
      name: 'Campus Life',
      path: '/campus-life',
      sublinks: [
        { name: 'Virtual Campus Explorer & Spaces', path: '/campus-life' },
        { name: 'Student Clubs & Societies Hub', path: '/campus-life#clubs' },
        { name: 'College Bus Routes & Transit Timetable', path: '/campus-life#transport' },
        { name: 'Interactive Full-Screen Photo Gallery', path: '/campus-life#gallery' },
        { name: 'Residential Hostels & Mess Dining', path: '/campus-life' }
      ]
    },
    {
      name: 'Research & Innovation',
      path: '/research-innovation',
      sublinks: [
        { name: 'Research Metrics & Projects', path: '/research-innovation' },
        { name: 'RIET Startup Incubation Center (E-Cell)', path: '/research-innovation#incubation' },
        { name: 'Published & Granted Patents', path: '/research-innovation#patents' },
        { name: 'Pitch Your Startup Idea (E-Cell Deck)', path: '/research-innovation#incubation' }
      ]
    },
    {
      name: 'News & Events',
      path: '/news-events',
      sublinks: [
        { name: 'Latest Campus News & Seminars', path: '/news-events' },
        { name: 'Event Calendar & Free Seat Registration', path: '/news-events#events' },
        { name: 'Official Circulars & Notice Board', path: '/news-events#notices' }
      ]
    },
    {
      name: 'Contact',
      path: '/contact',
      sublinks: [
        { name: 'Campus Office & Map Location', path: '/contact' },
        { name: 'Department Directory & Extensions', path: '/contact' },
        { name: 'Transit & Travel Route Guide', path: '/contact' },
        { name: 'Send an Official Inquiry', path: '/contact' },
        { name: '24x7 Anti-Ragging SOS Helpline', path: '/contact' }
      ]
    }
  ];

  return (
    <header className="bg-white border-b border-riet-line sticky top-[33px] z-40 shadow-sm transition-all overflow-visible">
      <div className="max-w-7xl mx-auto px-4 overflow-visible">
        {/* Brand Header Row - Sleek & Compact for laptop screens */}
        <div className="flex items-center justify-between py-1.5 sm:py-2">
          {/* High-Fidelity Institutional Brand Logo Banner */}
          <Link to="/" className="group block shrink-0">
            <CollegeLogo variant="dark" />
          </Link>

          {/* Quick CTA right on mobile or tablet */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenEnquiry}
              className="hidden lg:flex items-center gap-1.5 bg-riet-gold hover:bg-riet-gold-hover text-riet-navy font-black px-4 py-2 rounded-xl text-xs tracking-wide shadow-sm transition-all hover:scale-105 active:scale-95 whitespace-nowrap"
            >
              <span>Enquire Now</span>
              <span>↗</span>
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 rounded-lg text-riet-navy hover:bg-slate-100 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Desktop Navigation Links Strip (Strictly ONE single line, centered, overflow-visible for floating dropdowns) */}
        <nav className="hidden lg:flex items-center justify-center border-t border-slate-100 py-1 overflow-visible relative">
          <div className="flex items-center justify-center flex-nowrap gap-0.5 xl:gap-1.5 shrink-0 mx-auto overflow-visible">
            {/* Home Icon */}
            <Link
              to="/"
              className={`p-1.5 rounded-md hover:bg-slate-100 transition-colors flex items-center justify-center shrink-0 ${
                location.pathname === '/' ? 'text-riet-blue font-bold bg-blue-50/70' : 'text-slate-700'
              }`}
              title="Home"
            >
              <Home className="w-3.5 h-3.5" />
            </Link>

            {/* Dynamic Dropdown Links with STRICT whitespace-nowrap, Centered */}
            {navLinks.map((item) => {
              const isActive = location.pathname === item.path || location.pathname.startsWith(item.path + '/');
              return (
                <div
                  key={item.name}
                  className="relative group shrink-0"
                  onMouseEnter={() => setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    to={item.path}
                    className={`px-2 xl:px-2.5 py-1 text-[11.5px] xl:text-[12.5px] font-semibold flex items-center gap-1 rounded-md transition-all duration-200 whitespace-nowrap shrink-0 ${
                      isActive 
                        ? 'text-riet-blue bg-blue-50/70 font-bold' 
                        : 'text-slate-700 hover:text-riet-blue hover:bg-slate-50'
                    }`}
                  >
                    <span className="whitespace-nowrap">{item.name}</span>
                    <ChevronDown className="w-3 h-3 text-slate-400 group-hover:text-riet-blue transition-transform duration-300 ease-out group-hover:rotate-180 shrink-0" />
                  </Link>

                  {/* Smooth Animated Dropdown Menu with Elevation, Scale & Invisible Hover Bridge */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-72 bg-white rounded-2xl shadow-2xl border border-slate-100/90 border-t-2 border-t-riet-gold py-2 z-50 mt-1.5 transition-all duration-300 ease-out transform opacity-0 invisible pointer-events-none translate-y-2 scale-95 group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:scale-100 origin-top before:absolute before:-top-2 before:left-0 before:right-0 before:h-2 before:content-['']">
                    {item.sublinks.map((sub) => (
                      <Link
                        key={sub.name}
                        to={sub.path}
                        className="group/item flex items-center justify-between px-4 py-2 text-xs font-medium text-slate-700 hover:bg-riet-paper hover:text-riet-blue transition-all duration-150 border-b border-slate-50 last:border-0 text-left"
                      >
                        <span className="group-hover/item:translate-x-1 transition-transform duration-150">{sub.name}</span>
                        <span className="opacity-0 group-hover/item:opacity-100 text-riet-gold text-[11px] font-bold transition-opacity duration-150">→</span>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </nav>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 py-3 max-h-[80vh] overflow-y-auto shadow-xl">
          <div className="space-y-1">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 px-3 py-2 rounded-md text-sm font-bold text-riet-navy hover:bg-blue-50"
            >
              <Home className="w-4 h-4 text-riet-blue" />
              <span>Home</span>
            </Link>

            {navLinks.map((item) => (
              <div key={item.name} className="border-b border-slate-100 last:border-0 pb-1">
                <Link
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between px-3 py-2 text-sm font-semibold text-slate-800 hover:text-riet-blue"
                >
                  <span>{item.name}</span>
                  <ChevronDown className="w-4 h-4 text-slate-400" />
                </Link>
                <div className="pl-4 space-y-1 py-1 bg-slate-50 rounded-lg">
                  {item.sublinks.map((sub) => (
                    <Link
                      key={sub.name}
                      to={sub.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-3 py-1.5 text-xs text-slate-600 hover:text-riet-blue"
                    >
                      • {sub.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}

            <div className="pt-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEnquiry();
                }}
                className="w-full bg-riet-gold text-riet-navy font-bold py-2.5 rounded-xl text-center shadow-md text-xs uppercase tracking-wider"
              >
                Apply / Enquire Now ↗
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

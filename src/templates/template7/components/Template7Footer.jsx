import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, GraduationCap, ChevronRight, Facebook, Twitter, Instagram, Linkedin, ArrowRight } from 'lucide-react';
import { collegeInfo } from '../../../data/collegeData';

export default function Template7Footer({ onOpenEnquiry }) {
  return (
    <footer className="bg-[#142647] text-slate-300 pt-16 pb-8 px-6 sm:px-10 text-sm font-sans border-t border-[#223d6e] w-full">
      <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
        {/* Col 1: Brand & Contact Info (4 cols) */}
        <div className="lg:col-span-4 space-y-4">
          <div className="flex items-center gap-3">
            <img
              src="/riet-emblem.png"
              alt="RIET Jaipur"
              className="w-11 h-11 object-contain rounded-full bg-white/10 p-0.5"
            />
            <div>
              <span className="text-2xl font-bold font-playfair text-white tracking-tight block leading-tight">
                RIET JAIPUR
              </span>
              <span className="text-[10px] text-slate-300 uppercase tracking-wider block">
                Estd. 2000 • REAP Code: 1025
              </span>
            </div>
          </div>

          <p className="text-xs text-slate-300 leading-relaxed">
            Rajasthan Institute of Engineering &amp; Technology — An A-graded engineering institution affiliated to RTU Kota and approved by AICTE, New Delhi.
          </p>

          <div className="space-y-2 pt-2 text-xs text-slate-300">
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-[#d2973b] shrink-0 mt-0.5" />
              <span>Bhankrota, Ajmer Road, Jaipur, Rajasthan 302026</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Phone className="w-3.5 h-3.5 text-[#d2973b] shrink-0" />
              <span>+91 92571 11214, +91 92571 11215</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Mail className="w-3.5 h-3.5 text-[#d2973b] shrink-0" />
              <a href="mailto:inquiry@rietjaipur.ac.in" className="hover:text-[#d2973b] transition-colors">
                inquiry@rietjaipur.ac.in
              </a>
            </div>
          </div>
        </div>

        {/* Col 2: Our Campus (2.5 cols) */}
        <div className="lg:col-span-3 space-y-3 text-xs">
          <h4 className="text-white font-bold font-playfair text-base uppercase tracking-wider border-b border-white/10 pb-2">
            Our Campus
          </h4>
          <ul className="space-y-2 text-slate-300">
            <li>
              <Link to="/about" className="hover:text-[#d2973b] transition-colors flex items-center gap-1.5">
                <ChevronRight className="w-3.5 h-3.5 text-[#d2973b]" />
                <span>Academic Leadership</span>
              </Link>
            </li>
            <li>
              <Link to="/campus" className="hover:text-[#d2973b] transition-colors flex items-center gap-1.5">
                <ChevronRight className="w-3.5 h-3.5 text-[#d2973b]" />
                <span>Virtual Campus Tour</span>
              </Link>
            </li>
            <li>
              <Link to="/campus" className="hover:text-[#d2973b] transition-colors flex items-center gap-1.5">
                <ChevronRight className="w-3.5 h-3.5 text-[#d2973b]" />
                <span>Central Digital Library</span>
              </Link>
            </li>
            <li>
              <Link to="/campus" className="hover:text-[#d2973b] transition-colors flex items-center gap-1.5">
                <ChevronRight className="w-3.5 h-3.5 text-[#d2973b]" />
                <span>Hostels &amp; Dining Hall</span>
              </Link>
            </li>
            <li>
              <Link to="/campus" className="hover:text-[#d2973b] transition-colors flex items-center gap-1.5">
                <ChevronRight className="w-3.5 h-3.5 text-[#d2973b]" />
                <span>Sports &amp; Recreation Arena</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Col 3: Academics & Research (2.5 cols) */}
        <div className="lg:col-span-2 space-y-3 text-xs">
          <h4 className="text-white font-bold font-playfair text-base uppercase tracking-wider border-b border-white/10 pb-2">
            Academics
          </h4>
          <ul className="space-y-2 text-slate-300">
            <li>
              <Link to="/courses" className="hover:text-[#d2973b] transition-colors flex items-center gap-1.5">
                <ChevronRight className="w-3.5 h-3.5 text-[#d2973b]" />
                <span>Undergraduate (B.Tech)</span>
              </Link>
            </li>
            <li>
              <Link to="/courses" className="hover:text-[#d2973b] transition-colors flex items-center gap-1.5">
                <ChevronRight className="w-3.5 h-3.5 text-[#d2973b]" />
                <span>Postgraduate (M.Tech/MBA)</span>
              </Link>
            </li>
            <li>
              <Link to="/departments" className="hover:text-[#d2973b] transition-colors flex items-center gap-1.5">
                <ChevronRight className="w-3.5 h-3.5 text-[#d2973b]" />
                <span>Engineering Departments</span>
              </Link>
            </li>
            <li>
              <Link to="/placements" className="hover:text-[#d2973b] transition-colors flex items-center gap-1.5">
                <ChevronRight className="w-3.5 h-3.5 text-[#d2973b]" />
                <span>Corporate Placements</span>
              </Link>
            </li>
            <li>
              <Link to="/academics" className="hover:text-[#d2973b] transition-colors flex items-center gap-1.5">
                <ChevronRight className="w-3.5 h-3.5 text-[#d2973b]" />
                <span>Academic Calendars</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Col 4: Newsletter & Quick Apply (3 cols) */}
        <div className="lg:col-span-3 space-y-4 text-xs">
          <h4 className="text-white font-bold font-playfair text-base uppercase tracking-wider border-b border-white/10 pb-2">
            Admissions 2025-26
          </h4>
          <p className="text-xs text-slate-300 leading-relaxed">
            Apply online for direct admission &amp; REAP counselling. Scholarships available for meritorious applicants.
          </p>

          <button
            onClick={onOpenEnquiry}
            className="w-full bg-[#d2973b] hover:bg-[#b8822e] text-white font-bold py-2.5 px-4 rounded text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow"
          >
            <span>Apply For Admission</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <div className="pt-2">
            <span className="text-[11px] text-slate-400 block mb-2 uppercase tracking-wider">
              Connect With Us:
            </span>
            <div className="flex items-center gap-2">
              <a href="#" className="w-8 h-8 rounded bg-white/10 hover:bg-[#d2973b] hover:text-[#142647] flex items-center justify-center text-white transition-colors"><Facebook className="w-4 h-4" /></a>
              <a href="#" className="w-8 h-8 rounded bg-white/10 hover:bg-[#d2973b] hover:text-[#142647] flex items-center justify-center text-white transition-colors"><Twitter className="w-4 h-4" /></a>
              <a href="#" className="w-8 h-8 rounded bg-white/10 hover:bg-[#d2973b] hover:text-[#142647] flex items-center justify-center text-white transition-colors"><Instagram className="w-4 h-4" /></a>
              <a href="#" className="w-8 h-8 rounded bg-white/10 hover:bg-[#d2973b] hover:text-[#142647] flex items-center justify-center text-white transition-colors"><Linkedin className="w-4 h-4" /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="max-w-[1240px] mx-auto pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
        <div>
          &copy; {new Date().getFullYear()} Rajasthan Institute of Engineering &amp; Technology (RIET Jaipur). All Rights Reserved.
        </div>
        <div className="flex items-center gap-4">
          <Link to="/about" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link to="/about" className="hover:text-white transition-colors">Terms of Use</Link>
          <Link to="/contact" className="hover:text-white transition-colors">Grievance Cell</Link>
        </div>
      </div>
    </footer>
  );
}

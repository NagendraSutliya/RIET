import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';
import { collegeInfo } from '../../../data/collegeData';

export default function Template6Footer({ onOpenEnquiry }) {
  return (
    <footer className="bg-[#1C1B22] text-[#D9D6DE] py-14 px-6 sm:px-10 text-sm leading-relaxed border-t-2 border-[#D4AF37] font-sans w-full">
      <div className="max-w-[1140px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Col 1: Brand & Heritage */}
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <img
              src="/riet-emblem.png"
              alt="RIET Jaipur"
              className="w-10 h-10 object-contain rounded-full bg-white/10 p-0.5"
            />
            <div>
              <div className="font-fraunces text-white text-xl font-bold leading-tight">
                RIET Jaipur
              </div>
              <p className="text-[10px] text-[#A29EAA] uppercase tracking-wider">
                Estd. 2000 • AICTE Approved
              </p>
            </div>
          </div>
          <div className="flex items-start gap-2 pt-1 text-xs text-[#D9D6DE]">
            <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
            <span>Bhankrota, Ajmer Road, Jaipur, Rajasthan - 302026</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-[#D9D6DE]">
            <Phone className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
            <span>9257111214, 9257111215</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-[#D9D6DE]">
            <Mail className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
            <a href="mailto:inquiry@rietjaipur.ac.in" className="text-white hover:underline">
              inquiry@rietjaipur.ac.in
            </a>
          </div>
        </div>

        {/* Col 2: Academics */}
        <div className="space-y-2 text-xs">
          <span className="font-fraunces text-white text-base font-bold block mb-2 text-[#D4AF37]">
            Academics &amp; Programs
          </span>
          <Link to="/courses" className="text-[#D9D6DE] hover:text-white block hover:underline">
            Undergraduate Degrees (B.Tech, B.Arch, BCA, BBA)
          </Link>
          <Link to="/courses" className="text-[#D9D6DE] hover:text-white block hover:underline">
            Postgraduate Degrees (M.Tech, MBA, MCA)
          </Link>
          <Link to="/departments" className="text-[#D9D6DE] hover:text-white block hover:underline">
            Academic Engineering Departments
          </Link>
          <Link to="/academics" className="text-[#D9D6DE] hover:text-white block hover:underline">
            Academic Calendar &amp; Regulations
          </Link>
          <Link to="/placements" className="text-[#D9D6DE] hover:text-white block hover:underline">
            Training &amp; Placements
          </Link>
        </div>

        {/* Col 3: Institutional Links */}
        <div className="space-y-2 text-xs">
          <span className="font-fraunces text-white text-base font-bold block mb-2 text-[#D4AF37]">
            Campus &amp; Governance
          </span>
          <Link to="/campus" className="text-[#D9D6DE] hover:text-white block hover:underline">
            Campus Infrastructure &amp; Hostels
          </Link>
          <Link to="/about" className="text-[#D9D6DE] hover:text-white block hover:underline">
            Board of Governors &amp; Approvals
          </Link>
          <Link to="/admissions" className="text-[#D9D6DE] hover:text-white block hover:underline">
            Counseling Code (REAP 1025)
          </Link>
          <Link to="/contact" className="text-[#D9D6DE] hover:text-white block hover:underline">
            Grievance Redressal Cell
          </Link>
          <Link to="/contact" className="text-[#D9D6DE] hover:text-white block hover:underline">
            Contact Admissions Desk
          </Link>
        </div>

        {/* Col 4: Apply Online */}
        <div className="space-y-3">
          <span className="font-fraunces text-white text-base font-bold block text-[#D4AF37]">
            Admissions Desk
          </span>
          <p className="text-xs text-[#A29EAA]">
            Direct Merit &amp; REAP Centralized Allotment Session 2026-27.
          </p>
          <button
            onClick={onOpenEnquiry}
            className="w-full bg-[#6B1724] hover:bg-[#52111B] text-white font-semibold py-2.5 px-4 rounded border border-[#D4AF37]/60 text-xs transition-colors shadow-xs"
          >
            Apply Online (REAP 1025)
          </button>
          <div className="text-[11px] text-[#878292] pt-2">
            &copy; 2026 RIET Jaipur. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

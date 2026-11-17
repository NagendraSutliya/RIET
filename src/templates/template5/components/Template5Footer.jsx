import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Award } from 'lucide-react';
import { collegeInfo } from '../../../data/collegeData';

export default function Template5Footer({ onOpenEnquiry }) {
  return (
    <footer className="bg-[#0A3340] text-[#D5E8EC] py-14 px-6 sm:px-10 text-sm leading-relaxed border-t border-[#0F4C5C]/60 font-sans w-full">
      <div className="max-w-[1180px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Col 1: Institute Info */}
        <div className="space-y-3">
          <div className="flex items-center gap-2.5">
            <img
              src="/riet-emblem.png"
              alt="RIET Jaipur"
              className="w-9 h-9 object-contain rounded-full bg-white p-0.5 shadow-xs"
            />
            <div className="font-fraunces text-white text-2xl font-bold tracking-tight">
              RIET Jaipur
            </div>
          </div>
          <p className="text-xs text-[#95B2BA]">
            Rajasthan Institute of Engineering &amp; Technology • Estd. 2000
          </p>
          <div className="flex items-start gap-2 pt-1 text-xs text-[#D5E8EC]">
            <MapPin className="w-4 h-4 text-[#F58B3A] shrink-0 mt-0.5" />
            <span>Bhankrota, Ajmer Road, Jaipur, Rajasthan - 302026</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-[#D5E8EC]">
            <Phone className="w-3.5 h-3.5 text-[#F58B3A] shrink-0" />
            <span>9257111214, 9257111215</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-[#D5E8EC]">
            <Mail className="w-3.5 h-3.5 text-[#F58B3A] shrink-0" />
            <a href="mailto:inquiry@rietjaipur.ac.in" className="text-white hover:underline">
              inquiry@rietjaipur.ac.in
            </a>
          </div>
        </div>

        {/* Col 2: Institutional Pathways */}
        <div className="space-y-2 text-xs">
          <span className="font-fraunces text-white text-base font-bold block mb-2">
            Admissions &amp; Academic
          </span>
          <Link to="/admissions" className="text-[#D5E8EC] hover:text-white block hover:underline">
            Admissions 2026-27 (REAP 1025)
          </Link>
          <Link to="/courses" className="text-[#D5E8EC] hover:text-white block hover:underline">
            Undergraduate &amp; Postgrad Degrees
          </Link>
          <Link to="/departments" className="text-[#D5E8EC] hover:text-white block hover:underline">
            Nine Academic Departments
          </Link>
          <Link to="/academics" className="text-[#D5E8EC] hover:text-white block hover:underline">
            Academic Calendars &amp; Regulations
          </Link>
          <Link to="/placements" className="text-[#D5E8EC] hover:text-white block hover:underline">
            Corporate Placements &amp; Recruiters
          </Link>
        </div>

        {/* Col 3: Student & Campus Life */}
        <div className="space-y-2 text-xs">
          <span className="font-fraunces text-white text-base font-bold block mb-2">
            Campus &amp; Governance
          </span>
          <Link to="/campus" className="text-[#D5E8EC] hover:text-white block hover:underline">
            Interactive Virtual Tour &amp; Hostels
          </Link>
          <Link to="/contact" className="text-[#D5E8EC] hover:text-white block hover:underline">
            Grievance &amp; Redressal Cell
          </Link>
          <Link to="/admissions" className="text-[#D5E8EC] hover:text-white block hover:underline">
            Admissions FAQs
          </Link>
          <Link to="/about" className="text-[#D5E8EC] hover:text-white block hover:underline">
            AICTE &amp; RTU Approvals
          </Link>
          <Link to="/contact" className="text-[#D5E8EC] hover:text-white block hover:underline">
            Student Feedback &amp; Contact
          </Link>
        </div>

        {/* Col 4: Apply & Accreditation */}
        <div className="space-y-3">
          <span className="font-fraunces text-white text-base font-bold block">
            Enrollment 2026-27
          </span>
          <p className="text-xs text-[#95B2BA]">
            Apply online for B.Tech, M.Tech, MBA, MCA and Ph.D programs.
          </p>
          <button
            onClick={onOpenEnquiry}
            className="w-full bg-[#F58B3A] hover:bg-[#FFB26B] text-[#0A3340] font-bold py-2.5 px-4 rounded-full text-xs transition-colors shadow-xs"
          >
            Start Online Application
          </button>
          <div className="text-[11px] text-[#7C9AA2] pt-2">
            &copy; 2026 RIET Jaipur. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Phone, Mail } from 'lucide-react';
import { collegeInfo } from '../../../data/collegeData';

export default function Template3TopBar() {
  return (
    <div className="bg-[#0E2A5C] text-white text-xs py-2 px-4 border-b border-[#183a75] w-full max-w-full overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
        {/* Left: REAP Code Badge & Accreditation */}
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1.5 font-extrabold text-[#F2A900] tracking-wide uppercase text-[11px] bg-white/10 px-2.5 py-0.5 rounded">
            <Award className="w-3.5 h-3.5" />
            <span>REAP Code: 1025</span>
          </span>
          <span className="hidden md:inline text-slate-300 text-[11px]">
            AICTE Approved • Affiliated to RTU Kota
          </span>
        </div>

        {/* Right: Quick Links */}
        <div className="flex items-center gap-4 text-[11px] sm:text-xs">
          <Link to="/campus" className="text-slate-200 hover:text-[#F2A900] transition-colors">
            Virtual Tour
          </Link>
          <span className="text-white/20">|</span>
          <Link to="/campus" className="text-slate-200 hover:text-[#F2A900] transition-colors">
            Sports Arena
          </Link>
          <span className="text-white/20">|</span>
          <a href={`tel:${collegeInfo.phones[0]}`} className="text-slate-200 hover:text-[#F2A900] transition-colors flex items-center gap-1">
            <Phone className="w-3 h-3 text-[#F2A900]" />
            <span>{collegeInfo.phones[0]}</span>
          </a>
          <span className="text-white/20 hidden sm:inline">|</span>
          <Link to="/contact" className="text-[#F2A900] hover:underline font-bold hidden sm:inline">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}

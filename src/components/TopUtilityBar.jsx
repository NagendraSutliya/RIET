import React from 'react';
import { Phone, Award } from 'lucide-react';
import { collegeInfo } from '../data/collegeData';

export default function TopUtilityBar({ onOpenEnquiry }) {
  return (
    <div className="bg-riet-navy-dark text-slate-300 text-[11px] sm:text-[12px] border-b border-riet-navy-light/40 py-1 px-4">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
        {/* Left: Contact info / Accreditation note */}
        <div className="hidden sm:flex items-center gap-4 text-slate-300">
          <span className="flex items-center gap-1.5">
            <Award className="w-3.5 h-3.5 text-riet-gold" />
            <span className="font-medium text-slate-200">AICTE Approved • Affiliated to RTU Kota</span>
          </span>
          <span className="text-slate-600">|</span>
          <a href={`tel:${collegeInfo.phones[0]}`} className="flex items-center gap-1 hover:text-white transition-colors">
            <Phone className="w-3 h-3 text-riet-gold" />
            <span>{collegeInfo.phones[0]}</span>
          </a>
        </div>

        {/* Right: Quick Links */}
        <div className="flex items-center gap-3 sm:gap-4 ml-auto font-medium text-[11px] sm:text-xs">
          <button 
            onClick={onOpenEnquiry}
            className="text-riet-gold font-bold hover:underline flex items-center gap-0.5"
          >
            Admissions 2026-27
          </button>
        </div>
      </div>
    </div>
  );
}

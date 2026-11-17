import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Phone, Mail, ShieldCheck } from 'lucide-react';
import { collegeInfo } from '../../../data/collegeData';

export default function Template6TopBar() {
  return (
    <div className="bg-[#1C1B22] text-[#E8E6EC] text-xs py-2 px-4 border-b border-[#2D2B36] font-sans">
      <div className="max-w-[1140px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <Award className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span className="font-medium text-white tracking-wide">
            REAP Code 1025 • NBA Accredited • RTU Affiliated
          </span>
        </div>
        <div className="flex items-center gap-4 text-[12px] text-[#CFCBD6]">
          <a href="tel:9257111214" className="hover:text-white transition-colors flex items-center gap-1">
            <Phone className="w-3 h-3 text-[#D4AF37]" />
            <span>+91 92571 11214 / 15</span>
          </a>
          <span className="text-[#4A4752]">|</span>
          <a href="mailto:inquiry@rietjaipur.ac.in" className="hover:text-white transition-colors flex items-center gap-1">
            <Mail className="w-3 h-3 text-[#D4AF37]" />
            <span>inquiry@rietjaipur.ac.in</span>
          </a>
        </div>
      </div>
    </div>
  );
}

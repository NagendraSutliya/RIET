import React from 'react';
import { Phone, Mail, Award } from 'lucide-react';
import { collegeInfo } from '../../../data/collegeData';

export default function Template2TopBar() {
  return (
    <div className="bg-[#091d35] text-[#dbe6f2] text-xs py-2 px-4 border-b border-[#152e4f]">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1.5 sm:gap-4">
        <span className="flex items-center gap-1.5 font-medium tracking-wide">
          <Award className="w-3.5 h-3.5 text-[#e6ad3d]" />
          <span>Rajasthan Institute of Engineering & Technology · Jaipur</span>
        </span>
        <div className="flex items-center gap-4 text-[11px] sm:text-xs">
          <a href={`tel:${collegeInfo.phones[0]}`} className="hover:text-white transition-colors flex items-center gap-1">
            <Phone className="w-3 h-3 text-[#e6ad3d]" />
            <span>{collegeInfo.phones[0]}</span>
          </a>
          <span className="text-slate-600">|</span>
          <a href={`mailto:${collegeInfo.emails[0]}`} className="hover:text-white transition-colors flex items-center gap-1">
            <Mail className="w-3 h-3 text-[#e6ad3d]" />
            <span>{collegeInfo.emails[0]}</span>
          </a>
        </div>
      </div>
    </div>
  );
}

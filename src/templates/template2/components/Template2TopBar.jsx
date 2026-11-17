import React from 'react';
import { Phone, Mail, Award } from 'lucide-react';
import { collegeInfo } from '../../../data/collegeData';

export default function Template2TopBar() {
  return (
    <div className="bg-[#091d35] text-[#dbe6f2] text-xs py-2 px-4 border-b border-[#152e4f] w-full max-w-full overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-1.5 sm:gap-4 text-center md:text-left">
        <span className="flex items-center gap-1.5 font-medium tracking-wide truncate max-w-full">
          <Award className="w-3.5 h-3.5 text-[#e6ad3d] shrink-0" />
          <span className="truncate">Rajasthan Institute of Engineering & Technology · Jaipur</span>
        </span>
        <div className="flex items-center gap-4 text-[11px] sm:text-xs shrink-0 flex-wrap justify-center">
          <a href={`tel:${collegeInfo.phones[0]}`} className="hover:text-white transition-colors flex items-center gap-1">
            <Phone className="w-3 h-3 text-[#e6ad3d] shrink-0" />
            <span>{collegeInfo.phones[0]}</span>
          </a>
          <span className="text-slate-600">|</span>
          <a href={`mailto:${collegeInfo.emails[0]}`} className="hover:text-white transition-colors flex items-center gap-1">
            <Mail className="w-3 h-3 text-[#e6ad3d] shrink-0" />
            <span>{collegeInfo.emails[0]}</span>
          </a>
        </div>
      </div>
    </div>
  );
}

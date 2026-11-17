import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Compass, Trophy, Briefcase, Mail } from 'lucide-react';
import { collegeInfo } from '../../../data/collegeData';

export default function Template5TopBar() {
  return (
    <div className="bg-[#0A3340] text-white text-xs py-2 px-4 border-b border-[#0F4C5C]/60 font-sans">
      <div className="max-w-[1180px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <Award className="w-3.5 h-3.5 text-[#F58B3A]" />
          <span className="font-semibold text-white tracking-wide">
            REAP Code: 1025 • AICTE Approved • RTU Affiliated
          </span>
        </div>
        <div className="flex items-center gap-4 text-[12px] text-[#D5E8EC]">
          <Link to="/campus" className="hover:text-white transition-colors">Virtual Tour</Link>
          <Link to="/campus" className="hover:text-white transition-colors">Sports</Link>
          <Link to="/contact" className="hover:text-white transition-colors">Career</Link>
          <Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link>
        </div>
      </div>
    </div>
  );
}

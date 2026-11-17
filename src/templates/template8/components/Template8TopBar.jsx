import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail } from 'lucide-react';

export default function Template8TopBar({ onOpenEnquiry }) {
  return (
    <div className="bg-[#142647] text-white text-[12px] font-sans border-b border-white/10">
      <div className="max-w-[1240px] mx-auto flex items-center justify-between px-4 sm:px-6 h-10">
        {/* Left: Email & Phone */}
        <div className="flex items-center gap-5 text-slate-300 font-medium">
          <a 
            href="mailto:contact@rietjaipur.ac.in" 
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-slate-300" />
            <span>contact@rietjaipur.ac.in</span>
          </a>
          <a 
            href="tel:+911412250032" 
            className="hidden sm:flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-slate-300" />
            <span>+91 141 225 0032</span>
          </a>
        </div>

        {/* Right: Quick Links & Support Button */}
        <div className="flex items-center h-full">
          <div className="hidden md:flex items-center gap-4 text-slate-300 font-medium mr-5">
            <Link to="/about" className="hover:text-white transition-colors">Alumni</Link>
            <Link to="/news" className="hover:text-white transition-colors">Calendar</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Portal</Link>
          </div>
          <button
            onClick={onOpenEnquiry}
            className="bg-[#3db166] hover:bg-[#349d5a] text-white font-bold px-4 h-full flex items-center justify-center text-[12px] tracking-wide transition-colors"
          >
            Support RIET
          </button>
        </div>
      </div>
    </div>
  );
}

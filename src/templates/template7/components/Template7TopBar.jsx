import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, Award, Facebook, Twitter, Instagram, Linkedin, Globe } from 'lucide-react';

export default function Template7TopBar() {
  return (
    <div className="bg-[#192f59] text-white text-xs py-2 px-4 border-b border-white/10 font-sans">
      <div className="max-w-[1240px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        {/* Left: Contact Info & Accreditation */}
        <div className="flex items-center gap-4 text-[12px] text-slate-200 flex-wrap justify-center sm:justify-start">
          <div className="flex items-center gap-1.5">
            <Phone className="w-3.5 h-3.5 text-[#d2973b]" />
            <span>+91 92571 11214</span>
          </div>
          <span className="hidden sm:inline text-white/30">|</span>
          <div className="flex items-center gap-1.5">
            <Mail className="w-3.5 h-3.5 text-[#d2973b]" />
            <a href="mailto:inquiry@rietjaipur.ac.in" className="hover:text-[#d2973b] transition-colors">
              inquiry@rietjaipur.ac.in
            </a>
          </div>
          <span className="hidden md:inline text-white/30">|</span>
          <div className="hidden md:flex items-center gap-1.5 text-[#d2973b] font-medium">
            <Award className="w-3.5 h-3.5 text-[#d2973b]" />
            <span>REAP Code: 1025 • AICTE Approved</span>
          </div>
        </div>

        {/* Right: Quick Links & Socials */}
        <div className="flex items-center gap-4 text-[12px] text-slate-200">
          <Link to="/about" className="hover:text-[#d2973b] transition-colors">Alumni</Link>
          <Link to="/academics" className="hover:text-[#d2973b] transition-colors">Calendar</Link>
          <Link to="/contact" className="hover:text-[#d2973b] transition-colors">Portal</Link>
          <Link to="/contact" className="hover:text-[#d2973b] transition-colors">Support</Link>
          <div className="hidden lg:flex items-center gap-2 pl-2 border-l border-white/20 text-white/80">
            <a href="#" aria-label="Facebook" className="hover:text-[#d2973b] transition-colors"><Facebook className="w-3 h-3" /></a>
            <a href="#" aria-label="Twitter" className="hover:text-[#d2973b] transition-colors"><Twitter className="w-3 h-3" /></a>
            <a href="#" aria-label="Instagram" className="hover:text-[#d2973b] transition-colors"><Instagram className="w-3 h-3" /></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-[#d2973b] transition-colors"><Linkedin className="w-3 h-3" /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import { collegeInfo } from '../../../data/collegeData';

export default function Template4Footer({ onOpenEnquiry }) {
  return (
    <footer className="bg-[#1C1B22] text-[#D9D6DE] py-12 px-6 sm:px-10 text-sm leading-relaxed border-t border-[#2D2B36] font-manrope w-full">
      <div className="max-w-[1060px] mx-auto flex flex-col md:flex-row justify-between gap-8 flex-wrap">
        {/* Col 1: Institute Info */}
        <div className="space-y-2">
          <div className="flex items-center gap-2.5">
            <img
              src="/riet-emblem.png"
              alt="RIET"
              className="w-8 h-8 object-contain rounded-full bg-white p-0.5"
            />
            <div className="font-bricolage text-white text-lg font-bold tracking-tight">
              RIET Jaipur
            </div>
          </div>
          <div className="text-xs text-[#A29EAA]">
            Rajasthan Institute of Engineering &amp; Technology
          </div>
          <div className="flex items-start gap-2 pt-1 text-xs text-[#D9D6DE]">
            <MapPin className="w-4 h-4 text-[#B3263A] shrink-0 mt-0.5" />
            <span>Bhankrota, Ajmer Road, Jaipur, Rajasthan - 302026</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-[#D9D6DE]">
            <Phone className="w-3.5 h-3.5 text-[#B3263A] shrink-0" />
            <span>9257111214, 9257111215</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-[#D9D6DE]">
            <Mail className="w-3.5 h-3.5 text-[#B3263A] shrink-0" />
            <a href="mailto:inquiry@rietjaipur.ac.in" className="text-white hover:underline">
              inquiry@rietjaipur.ac.in
            </a>
          </div>
        </div>

        {/* Col 2: Quick Links */}
        <div className="flex flex-col gap-2 text-xs">
          <span className="font-bold text-white text-sm uppercase tracking-wider mb-1">
            Quick Links
          </span>
          <Link to="/contact" className="text-[#D9D6DE] hover:text-white hover:underline">
            Grievance cell
          </Link>
          <Link to="/admissions" className="text-[#D9D6DE] hover:text-white hover:underline">
            Admissions FAQs
          </Link>
          <Link to="/about" className="text-[#D9D6DE] hover:text-white hover:underline">
            Mandatory approvals (AICTE &amp; RTU)
          </Link>
          <Link to="/contact" className="text-[#D9D6DE] hover:text-white hover:underline">
            Student Feedback &amp; Support
          </Link>
          <button
            onClick={onOpenEnquiry}
            className="text-left text-[#B3263A] hover:text-white font-bold transition-colors"
          >
            Apply Online (REAP 1025)
          </button>
        </div>

        {/* Col 3: Copyright & Affiliation */}
        <div className="flex flex-col justify-between text-xs space-y-3">
          <div>
            <span className="font-bold text-white text-sm uppercase tracking-wider block mb-1">
              Affiliation
            </span>
            <p className="text-xs text-[#A29EAA] max-w-[280px]">
              Approved by AICTE, New Delhi &amp; Affiliated to Rajasthan Technical University (RTU), Kota. NBA Accredited (2012–15).
            </p>
          </div>
          <div className="text-[#878292] pt-2">
            &copy; 2026 RIET Jaipur. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

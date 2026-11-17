import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Award } from 'lucide-react';
import { collegeInfo } from '../../../data/collegeData';

export default function Template3Footer({ onOpenEnquiry }) {
  return (
    <footer className="bg-[#0E2A5C] text-white pt-12 pb-8 text-sm leading-relaxed border-t border-[#183d7a] w-full max-w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-10 border-b border-white/10">
          {/* Column 1: Campus Info */}
          <div>
            <div className="flex items-center gap-2.5 mb-2">
              <img
                src="/riet-emblem.png"
                alt="RIET Logo"
                className="w-8 h-8 object-contain rounded-full bg-white p-0.5"
              />
              <b className="font-heading font-black text-xl text-white">RIET Jaipur</b>
            </div>
            <p className="text-slate-300 text-xs sm:text-sm">
              Rajasthan Institute of Engineering and Technology<br />
              Bhankrota, Ajmer Road, Jaipur, Rajasthan 302026
            </p>
            <div className="mt-3 space-y-1 text-xs text-slate-300">
              <p>Helpline: {collegeInfo.phones[0]}, {collegeInfo.phones[1] || '9257111215'}</p>
              <p>Email: {collegeInfo.emails[0]}</p>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-2 text-xs sm:text-sm">
            <span className="font-bold text-[#F2A900] uppercase text-[11px] tracking-wider block mb-2">
              Important Links
            </span>
            <div><Link to="/contact" className="hover:text-[#F2A900] transition-colors">Grievance cell &amp; Anti-ragging</Link></div>
            <div><Link to="/admissions" className="hover:text-[#F2A900] transition-colors">Admissions &amp; FAQs</Link></div>
            <div><Link to="/about" className="hover:text-[#F2A900] transition-colors">Mandatory approvals &amp; AICTE EoA</Link></div>
            <div><Link to="/contact" className="hover:text-[#F2A900] transition-colors">Feedback &amp; Inquiries</Link></div>
          </div>

          {/* Column 3: Corporate Grid Info & REAP Code */}
          <div className="space-y-3 text-xs sm:text-sm">
            <span className="font-bold text-[#F2A900] uppercase text-[11px] tracking-wider block">
              Regulatory Details
            </span>
            <div className="bg-white/10 p-3 rounded-lg border border-white/10">
              <span className="block font-extrabold text-[#F2A900] text-sm">REAP Code: 1025</span>
              <span className="text-[11px] text-slate-300">RTU Affiliation: CAM 1025 • RMCAAP 225</span>
            </div>
            <button
              onClick={onOpenEnquiry}
              className="bg-[#F2A900] hover:bg-[#e09b00] text-[#0E2A5C] font-black px-4 py-2 rounded-lg text-xs transition-colors"
            >
              Admission Enquiry 2026 ↗
            </button>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-400">
          <p>&copy; 2026 RIET Jaipur. Template 3: Corporate Grid.</p>
          <p className="text-[11px]">AICTE Approved • Affiliated to RTU Kota • Established in 2000</p>
        </div>
      </div>
    </footer>
  );
}

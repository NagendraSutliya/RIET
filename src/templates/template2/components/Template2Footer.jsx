import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Award, ArrowRight } from 'lucide-react';
import { collegeInfo } from '../../../data/collegeData';

export default function Template2Footer({ onOpenEnquiry }) {
  return (
    <footer className="bg-[#091d35] text-[#c8d5e3] pt-14 pb-8 border-t border-[#122b4d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 pb-12 border-b border-white/10">
          {/* Col 1: Brand & Overview */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-[#e6ad3d] bg-[#fff8e8] flex items-center justify-center text-[#102b50] font-black text-lg">
                R
              </div>
              <div>
                <h4 className="font-heading font-black text-white text-base tracking-tight">RIET JAIPUR</h4>
                <p className="text-[10px] text-[#8fa2b7] font-semibold uppercase tracking-wider">Est. 2000 • AICTE Approved</p>
              </div>
            </div>
            <p className="text-xs leading-relaxed text-[#a8bacc]">
              Quality technical education, practical hands-on laboratories and innovation hub located at Bhankrota, Ajmer Road, Jaipur.
            </p>
            <div className="pt-1">
              <button
                onClick={onOpenEnquiry}
                className="inline-flex items-center gap-1.5 bg-[#e6ad3d] hover:bg-[#d89f31] text-[#152a42] font-extrabold px-3.5 py-2 rounded-lg text-xs transition-colors shadow-xs"
              >
                <span>Admission Inquiry</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Col 2: Explore */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider">
              Explore
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/about" className="hover:text-white transition-colors">About RIET</Link>
              </li>
              <li>
                <Link to="/leadership" className="hover:text-white transition-colors">Leadership & Governance</Link>
              </li>
              <li>
                <Link to="/approvals" className="hover:text-white transition-colors">Approvals & Affiliations</Link>
              </li>
              <li>
                <Link to="/academics" className="hover:text-white transition-colors">Academic Programmes</Link>
              </li>
              <li>
                <Link to="/departments" className="hover:text-white transition-colors">Departments</Link>
              </li>
              <li>
                <Link to="/admissions" className="hover:text-white transition-colors">Admissions 2026-27</Link>
              </li>
              <li>
                <Link to="/placements" className="hover:text-white transition-colors">Placements & Recruiters</Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Resources */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider">
              Resources
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/student-corner" className="hover:text-white transition-colors">Student Corner</Link>
              </li>
              <li>
                <Link to="/fees-scholarships" className="hover:text-white transition-colors">Fees & Scholarships</Link>
              </li>
              <li>
                <Link to="/facilities" className="hover:text-white transition-colors">Campus Facilities</Link>
              </li>
              <li>
                <Link to="/incubation" className="hover:text-white transition-colors">Incubation Centre</Link>
              </li>
              <li>
                <Link to="/research-innovation" className="hover:text-white transition-colors">Research & Innovation</Link>
              </li>
              <li>
                <Link to="/news-events" className="hover:text-white transition-colors">News & Events</Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-white transition-colors">Photo Gallery</Link>
              </li>
              <li>
                <Link to="/mandatory-disclosure" className="hover:text-white transition-colors">Mandatory Disclosure</Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider">
              Contact Campus
            </h4>
            <div className="space-y-2.5 text-xs text-[#a8bacc]">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#e6ad3d] shrink-0 mt-0.5" />
                <span>Bhankrota, Ajmer Road, Jaipur, Rajasthan 302026</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#e6ad3d] shrink-0" />
                <a href={`tel:${collegeInfo.phones[0]}`} className="hover:text-white transition-colors">
                  {collegeInfo.phones[0]} / {collegeInfo.phones[1] || '9257111215'}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#e6ad3d] shrink-0" />
                <a href={`mailto:${collegeInfo.emails[0]}`} className="hover:text-white transition-colors">
                  {collegeInfo.emails[0]}
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#8fa2b7]">
          <p>© 2026 Rajasthan Institute of Engineering & Technology (RIET Jaipur). Template 2 Layout.</p>
          <div className="flex items-center gap-4 text-[11px]">
            <Link to="/mandatory-disclosure" className="hover:text-white">Disclosure</Link>
            <span>•</span>
            <Link to="/contact" className="hover:text-white">Contact</Link>
            <span>•</span>
            <span className="text-[#e6ad3d]">Clean Minimal Edition</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

import React, { useState } from 'react';
import { Shield, Target, Compass, Award, CheckCircle2, Users, Building2, FileCheck, Lock, Globe } from 'lucide-react';
import { collegeInfo } from '../../../data/collegeData';

export default function Template1About({ onOpenEnquiry, onOpenDocument }) {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="bg-white min-h-screen">
      {/* Page Hero Banner */}
      <div className="bg-gradient-to-r from-riet-navy-dark via-riet-navy to-riet-navy-light text-white py-14 px-4 border-b border-riet-line">
        <div className="max-w-7xl mx-auto">
          <span className="text-xs font-bold text-riet-gold uppercase tracking-wider block mb-2">
            Home / About RIET
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black tracking-tight text-white">
            About RIET Jaipur
          </h1>
          <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-2xl">
            Established in 2000, Rajasthan Institute of Engineering & Technology has been at the forefront of technical education, nurturing problem solvers and ethical leaders.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-14 space-y-16">
        {/* Overview Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-bold text-riet-gold uppercase tracking-wider">
              Our Legacy & Purpose
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-black text-riet-navy">
              A Campus Built Around Opportunity & Practical Learning
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              RIET is managed by Chandrawati Education Society and is approved by the All India Council for Technical Education (AICTE), New Delhi, and affiliated to Rajasthan Technical University (RTU), Kota.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              Located on the Jaipur-Ajmer highway, the campus spans 20 acres of lush green grounds with modern digital classrooms, advanced engineering laboratories, high-speed computational clusters, and state-of-the-art incubation facilities.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-riet-paper border border-slate-200">
                <span className="block font-heading font-black text-2xl text-riet-navy">2000</span>
                <span className="text-xs text-slate-500 font-medium">Year Established</span>
              </div>
              <div className="p-4 rounded-xl bg-riet-paper border border-slate-200">
                <span className="block font-heading font-black text-2xl text-riet-navy">15,000+</span>
                <span className="text-xs text-slate-500 font-medium">Alumni Worldwide</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 rounded-2xl overflow-hidden shadow-lift border border-slate-200">
            <img
              src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=900&q=80"
              alt="RIET Campus"
              className="w-full h-80 object-cover"
            />
          </div>
        </div>

        {/* Vision & Mission Cards (#vision) */}
        <div id="vision" className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-2xl bg-gradient-to-br from-riet-paper to-white border border-slate-200 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-xl bg-blue-100 text-riet-blue flex items-center justify-center">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-heading font-black text-riet-navy">Our Vision</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              To be a premier institution of global repute in engineering, technological innovations, and managerial leadership, cultivating ethical individuals with profound technical competencies.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-gradient-to-br from-riet-paper to-white border border-slate-200 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-heading font-black text-riet-navy">Our Mission</h3>
            <ul className="text-sm text-slate-600 space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Provide student-centric, outcome-based technical education aligned with Industry 4.0.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Foster applied research, patent creation, and startup incubation through industry linkages.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Inculcate human values, teamwork, and lifelong learning attitudes in students.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Leadership Section (#leadership) */}
        <div id="leadership" className="pt-6 border-t border-slate-200">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-bold text-riet-gold uppercase tracking-wider block mb-1">
              Institutional Guidance
            </span>
            <h2 className="text-3xl font-heading font-black text-riet-navy">
              Leadership & Director's Message
            </h2>
          </div>

          <div className="bg-riet-paper rounded-2xl p-8 border border-slate-200 max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80"
              alt="Director RIET"
              className="w-36 h-36 rounded-2xl object-cover border-2 border-riet-gold shadow-md shrink-0"
            />
            <div className="space-y-3 text-center md:text-left">
              <blockquote className="text-sm text-slate-700 leading-relaxed italic">
                "Welcome to RIET Jaipur. Our philosophy transcends traditional textbooks. We empower every student with practical technical skills, critical analysis, and entrepreneurship so they can lead in the AI-driven world."
              </blockquote>
              <div>
                <h4 className="font-heading font-black text-base text-riet-navy">
                  Dr. Naveen Sharma
                </h4>
                <p className="text-xs text-riet-muted font-bold">
                  Director & Principal, RIET Jaipur
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Approvals & Affiliations (#approvals) */}
        <div id="approvals" className="pt-6 border-t border-slate-200">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-bold text-riet-gold uppercase tracking-wider block mb-1">
              Statutory Trust & Approvals
            </span>
            <h2 className="text-3xl font-heading font-black text-riet-navy">
              Approvals & Affiliations
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Click any accreditation below to inspect the verified approval documentation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <div
              onClick={() => onOpenDocument && onOpenDocument('AICTE Extension of Approval (EOA) Letter')}
              className="p-5 rounded-xl border border-slate-200 bg-white hover:border-riet-gold hover:shadow-soft text-center space-y-2 shadow-sm cursor-pointer transition-all"
            >
              <div className="w-10 h-10 rounded-full bg-blue-50 text-riet-blue flex items-center justify-center mx-auto">
                <Award className="w-5 h-5" />
              </div>
              <h4 className="font-heading font-bold text-sm text-riet-navy">AICTE Approved</h4>
              <p className="text-xs text-slate-500">Ministry of Education, Govt. of India</p>
              <span className="text-[10px] text-riet-blue font-bold block pt-1">View Approval PDF →</span>
            </div>

            <div
              onClick={() => onOpenDocument && onOpenDocument('RTU Kota University Affiliation Letter')}
              className="p-5 rounded-xl border border-slate-200 bg-white hover:border-riet-gold hover:shadow-soft text-center space-y-2 shadow-sm cursor-pointer transition-all"
            >
              <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center mx-auto">
                <Building2 className="w-5 h-5" />
              </div>
              <h4 className="font-heading font-bold text-sm text-riet-navy">RTU Affiliated</h4>
              <p className="text-xs text-slate-500">Rajasthan Technical University, Kota</p>
              <span className="text-[10px] text-emerald-700 font-bold block pt-1">View Affiliation PDF →</span>
            </div>

            <div
              onClick={() => onOpenDocument && onOpenDocument('NBA Accreditation Certificate (Tier-II)')}
              className="p-5 rounded-xl border border-slate-200 bg-white hover:border-riet-gold hover:shadow-soft text-center space-y-2 shadow-sm cursor-pointer transition-all"
            >
              <div className="w-10 h-10 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center mx-auto">
                <Shield className="w-5 h-5" />
              </div>
              <h4 className="font-heading font-bold text-sm text-riet-navy">NBA Accredited</h4>
              <p className="text-xs text-slate-500">Core Engineering Branches (2012-15)</p>
              <span className="text-[10px] text-amber-800 font-bold block pt-1">View Certificate →</span>
            </div>

            <div
              onClick={() => onOpenDocument && onOpenDocument('Anti-Ragging Statutory Committee & Squad')}
              className="p-5 rounded-xl border border-slate-200 bg-white hover:border-riet-gold hover:shadow-soft text-center space-y-2 shadow-sm cursor-pointer transition-all"
            >
              <div className="w-10 h-10 rounded-full bg-purple-50 text-purple-700 flex items-center justify-center mx-auto">
                <Users className="w-5 h-5" />
              </div>
              <h4 className="font-heading font-bold text-sm text-riet-navy">Anti-Ragging Cell</h4>
              <p className="text-xs text-slate-500">UGC & AICTE Compliance Certified</p>
              <span className="text-[10px] text-purple-800 font-bold block pt-1">View Committee List →</span>
            </div>
          </div>
        </div>

        {/* Institutional Policies & Statutory Disclosures (#privacy, #terms, #sitemap) */}
        <div id="privacy" className="pt-8 border-t border-slate-200">
          <div className="bg-riet-paper rounded-2xl p-8 border border-slate-200 space-y-6">
            <div className="flex flex-wrap gap-2 border-b border-slate-200 pb-4">
              <button
                onClick={() => setActiveTab('overview')}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                  activeTab === 'overview' ? 'bg-riet-navy text-riet-gold shadow-sm' : 'text-slate-600 hover:bg-slate-200'
                }`}
              >
                Privacy Policy
              </button>
              <button
                onClick={() => setActiveTab('terms')}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                  activeTab === 'terms' ? 'bg-riet-navy text-riet-gold shadow-sm' : 'text-slate-600 hover:bg-slate-200'
                }`}
              >
                Terms & Conditions
              </button>
              <button
                onClick={() => setActiveTab('sitemap')}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                  activeTab === 'sitemap' ? 'bg-riet-navy text-riet-gold shadow-sm' : 'text-slate-600 hover:bg-slate-200'
                }`}
              >
                Institutional Sitemap
              </button>
            </div>

            {activeTab === 'overview' && (
              <div className="text-xs text-slate-600 space-y-3 leading-relaxed">
                <h4 className="font-heading font-black text-base text-riet-navy">
                  Privacy Policy & Data Protection
                </h4>
                <p>
                  Rajasthan Institute of Engineering & Technology (RIET), Jaipur is committed to respecting your digital privacy. Any personal information gathered through admission enquiry forms, campus recruitment registrations, or student ERP access is encrypted and utilized strictly for legitimate academic and administrative purposes.
                </p>
                <p>
                  We do not sell, rent, or disburse student or applicant contact data to third-party commercial marketing entities under any circumstances.
                </p>
              </div>
            )}

            {activeTab === 'terms' && (
              <div id="terms" className="text-xs text-slate-600 space-y-3 leading-relaxed">
                <h4 className="font-heading font-black text-base text-riet-navy">
                  Terms & Conditions of Admission and Web Portal Use
                </h4>
                <p>
                  All curriculum regulations, fee notices, and examination protocols published on this website adhere strictly to directives issued by Rajasthan Technical University (RTU), Kota, and the All India Council for Technical Education (AICTE), New Delhi.
                </p>
                <p>
                  Submitting an admission enquiry constitutes consent to receive counselling calls, SMS notifications, and verification updates from authorized RIET academic advisors.
                </p>
              </div>
            )}

            {activeTab === 'sitemap' && (
              <div id="sitemap" className="text-xs text-slate-600 space-y-4">
                <h4 className="font-heading font-black text-base text-riet-navy">
                  Complete Portal Sitemap
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div>
                    <h5 className="font-bold text-riet-navy mb-1.5 uppercase text-[10px]">Institutional</h5>
                    <ul className="space-y-1">
                      <li>• Home</li>
                      <li>• About RIET</li>
                      <li>• Leadership</li>
                      <li>• Approvals & Affiliations</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-bold text-riet-navy mb-1.5 uppercase text-[10px]">Academics</h5>
                    <ul className="space-y-1">
                      <li>• All Programs</li>
                      <li>• CSE Department</li>
                      <li>• Syllabus & Credits</li>
                      <li>• Results Portal</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-bold text-riet-navy mb-1.5 uppercase text-[10px]">Admissions</h5>
                    <ul className="space-y-1">
                      <li>• 4-Step Process</li>
                      <li>• Fee Structure</li>
                      <li>• Scholarships</li>
                      <li>• Online Enquiry</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-bold text-riet-navy mb-1.5 uppercase text-[10px]">Student Hub</h5>
                    <ul className="space-y-1">
                      <li>• Campus Life</li>
                      <li>• Placements Desk</li>
                      <li>• Notice Board</li>
                      <li>• Contact Office</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

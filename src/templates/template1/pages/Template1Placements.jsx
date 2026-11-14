import React, { useState } from 'react';
import { Briefcase, TrendingUp, Award, Building, CheckCircle2, ArrowRight, Search, Download, Users, Mail, X } from 'lucide-react';
import { recruitersList, studentTestimonials } from '../../../data/collegeData';

export default function Template1Placements({ onOpenEnquiry, onOpenDocument }) {
  const [selectedSector, setSelectedSector] = useState('All');
  const [recruiterSearch, setRecruiterSearch] = useState('');
  const [isHrModalOpen, setIsHrModalOpen] = useState(false);
  const [hrForm, setHrForm] = useState({ company: '', hrName: '', email: '', phone: '', packageRange: '₹6 - 12 LPA' });
  const [hrSubmitted, setHrSubmitted] = useState(false);

  const branchStats = [
    { branch: 'Computer Science (CSE)', placed: '94%', count: '148 Students' },
    { branch: 'AI & Data Science', placed: '92%', count: '52 Students' },
    { branch: 'Master of Computer Apps (MCA)', placed: '95%', count: '58 Students' },
    { branch: 'MBA (Dual Specialization)', placed: '91%', count: '74 Students' },
    { branch: 'Electrical & Electronics', placed: '86%', count: '42 Students' },
    { branch: 'Mechanical & Civil', placed: '81%', count: '65 Students' }
  ];

  const filteredRecruiters = recruitersList.filter(r => {
    const matchesSector = selectedSector === 'All' || r.sector.toLowerCase().includes(selectedSector.toLowerCase());
    const matchesSearch = r.name.toLowerCase().includes(recruiterSearch.toLowerCase()) || r.sector.toLowerCase().includes(recruiterSearch.toLowerCase());
    return matchesSector && matchesSearch;
  });

  const handleHrSubmit = (e) => {
    e.preventDefault();
    setHrSubmitted(true);
    setTimeout(() => {
      setHrSubmitted(false);
      setIsHrModalOpen(false);
      setHrForm({ company: '', hrName: '', email: '', phone: '', packageRange: '₹6 - 12 LPA' });
    }, 3000);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <div className="bg-gradient-to-r from-riet-navy-dark via-riet-navy to-riet-navy-light text-white py-14 px-4 border-b border-riet-line">
        <div className="max-w-7xl mx-auto">
          <span className="text-xs font-bold text-riet-gold uppercase tracking-wider block mb-2">
            Career Advancement & Corporate Relations
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black tracking-tight text-white">
            Placement Cell & Recruiter Desk
          </h1>
          <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-2xl">
            Empowering students with industry-relevant competencies. Highest package ₹44 LPA with 120+ national and multinational corporate partners.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-14 space-y-16">
        {/* Placement Key Statistics Dashboard */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-6 rounded-2xl bg-riet-paper border border-slate-200 text-center space-y-1 shadow-sm">
            <span className="font-heading font-black text-3xl sm:text-4xl text-riet-navy">₹44 LPA</span>
            <p className="text-xs font-bold text-riet-gold uppercase tracking-wide">Highest Package</p>
            <p className="text-[11px] text-slate-500">Offered by Microsoft</p>
          </div>

          <div className="p-6 rounded-2xl bg-riet-paper border border-slate-200 text-center space-y-1 shadow-sm">
            <span className="font-heading font-black text-3xl sm:text-4xl text-riet-navy">₹6.8 LPA</span>
            <p className="text-xs font-bold text-riet-gold uppercase tracking-wide">Average Package</p>
            <p className="text-[11px] text-slate-500">Across B.Tech & MCA</p>
          </div>

          <div className="p-6 rounded-2xl bg-riet-paper border border-slate-200 text-center space-y-1 shadow-sm">
            <span className="font-heading font-black text-3xl sm:text-4xl text-riet-navy">88%+</span>
            <p className="text-xs font-bold text-riet-gold uppercase tracking-wide">Overall Placement Rate</p>
            <p className="text-[11px] text-slate-500">Batch 2025-26</p>
          </div>

          <div className="p-6 rounded-2xl bg-riet-paper border border-slate-200 text-center space-y-1 shadow-sm">
            <span className="font-heading font-black text-3xl sm:text-4xl text-riet-navy">120+</span>
            <p className="text-xs font-bold text-riet-gold uppercase tracking-wide">Hiring Companies</p>
            <p className="text-[11px] text-slate-500">On-Campus Drives</p>
          </div>
        </div>

        {/* Branch-wise Placement Analytics Bar Chart */}
        <div className="p-8 rounded-3xl bg-riet-paper border border-slate-200 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-riet-gold uppercase tracking-wider block mb-1">
                Batch Analysis 2025-26
              </span>
              <h2 className="text-2xl font-heading font-black text-riet-navy">
                Branch-wise Placement Performance
              </h2>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => onOpenDocument && onOpenDocument('RIET Annual Placement Report 2025-26 (Audit Verified)')}
                className="bg-riet-navy hover:bg-riet-navy-light text-riet-gold font-bold px-4 py-2 rounded-xl text-xs flex items-center gap-1.5 shadow-sm"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Verified Report PDF</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {branchStats.map((b, i) => (
              <div key={i} className="p-4 rounded-xl bg-white border border-slate-200 space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold text-slate-800">{b.branch}</span>
                  <span className="font-heading font-black text-emerald-700">{b.placed} Placed</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-riet-navy to-riet-blue h-2.5 rounded-full"
                    style={{ width: b.placed }}
                  ></div>
                </div>
                <span className="text-[10px] text-slate-400 block">{b.count} placed in top organizations</span>
              </div>
            ))}
          </div>
        </div>

        {/* Searchable & Filterable Recruiter Directory */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-riet-gold uppercase tracking-wider block mb-1">
                Recruiter Network
              </span>
              <h2 className="text-2xl sm:text-3xl font-heading font-black text-riet-navy">
                Our Corporate Hiring Partners
              </h2>
            </div>

            {/* Recruiter Search */}
            <div className="relative max-w-xs w-full">
              <input
                type="text"
                placeholder="Search company (e.g. Oracle)..."
                value={recruiterSearch}
                onChange={(e) => setRecruiterSearch(e.target.value)}
                className="w-full text-xs px-3.5 py-2.5 pl-9 rounded-xl border border-slate-300 focus:border-riet-gold outline-none"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {filteredRecruiters.map((rec, i) => (
              <div
                key={i}
                className="p-5 rounded-2xl border border-slate-200 bg-white hover:border-riet-gold hover:shadow-soft flex flex-col justify-between transition-all group"
              >
                <div>
                  <span className="font-heading font-black text-lg text-slate-800 group-hover:text-riet-navy transition-colors">
                    {rec.logoText}
                  </span>
                  <span className="text-[10px] text-slate-400 block mt-0.5">
                    {rec.sector}
                  </span>
                </div>

                <div className="pt-3 mt-3 border-t border-slate-100 flex justify-between items-center text-[10px]">
                  <span className="font-bold text-emerald-700">{rec.avgPkg}</span>
                  <span className="text-slate-500">{rec.offers} Selected</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Corporate HR Recruiter Desk CTA */}
        <div className="bg-gradient-to-r from-riet-navy via-riet-navy-light to-riet-navy text-white rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-lift">
          <div className="space-y-1">
            <h3 className="font-heading font-black text-2xl text-white">
              Recruit from RIET Jaipur (Session 2026-27)
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Partner with our Training & Placement Cell to schedule on-campus or virtual recruitment drives. Our graduates are trained in modern full-stack architectures, AI, and domain engineering.
            </p>
          </div>
          <button
            onClick={() => setIsHrModalOpen(true)}
            className="bg-riet-gold hover:bg-riet-gold-hover text-riet-navy font-black px-6 py-3.5 rounded-xl text-xs shrink-0 shadow-md transition-all hover:scale-105"
          >
            Invite for Campus Drive ↗
          </button>
        </div>
      </div>

      {/* Corporate Recruiter Registration Modal */}
      {isHrModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-fade-in">
          <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl border border-slate-100 overflow-hidden relative">
            <div className="bg-riet-navy text-white p-5 flex items-center justify-between">
              <div>
                <h3 className="font-heading font-black text-lg text-white">
                  Corporate Recruiter Registration
                </h3>
                <p className="text-xs text-slate-300">
                  Connect directly with the Head - Training & Placements (TPO)
                </p>
              </div>
              <button
                onClick={() => setIsHrModalOpen(false)}
                className="text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6">
              {hrSubmitted ? (
                <div className="text-center py-6 space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
                  <h4 className="font-heading font-bold text-lg text-riet-navy">
                    Registration Received!
                  </h4>
                  <p className="text-xs text-slate-600">
                    Our TPO desk will coordinate with you at {hrForm.email} within 24 hours to schedule the drive.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleHrSubmit} className="space-y-3.5">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Company / Organization *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Infosys, Cisco, Tech Startups"
                      value={hrForm.company}
                      onChange={(e) => setHrForm({ ...hrForm, company: e.target.value })}
                      className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-riet-gold outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">HR Representative Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="HR Name"
                        value={hrForm.hrName}
                        onChange={(e) => setHrForm({ ...hrForm, hrName: e.target.value })}
                        className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-riet-gold outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Official Work Email *</label>
                      <input
                        type="email"
                        required
                        placeholder="hr@company.com"
                        value={hrForm.email}
                        onChange={(e) => setHrForm({ ...hrForm, email: e.target.value })}
                        className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-riet-gold outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Contact Phone *</label>
                      <input
                        type="tel"
                        required
                        placeholder="Phone Number"
                        value={hrForm.phone}
                        onChange={(e) => setHrForm({ ...hrForm, phone: e.target.value })}
                        className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-riet-gold outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Offered CTC Bracket</label>
                      <select
                        value={hrForm.packageRange}
                        onChange={(e) => setHrForm({ ...hrForm, packageRange: e.target.value })}
                        className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-riet-gold outline-none bg-white"
                      >
                        <option>₹4 - 7 LPA</option>
                        <option>₹7 - 12 LPA</option>
                        <option>₹12 - 20 LPA</option>
                        <option>₹20+ LPA</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-riet-navy hover:bg-riet-navy-light text-riet-gold font-black py-3 rounded-xl text-xs shadow-md transition-all flex items-center justify-center gap-2 mt-2"
                  >
                    <span>Submit Recruitment Request</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

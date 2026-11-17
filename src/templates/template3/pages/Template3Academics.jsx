import React from 'react';
import { Link } from 'react-router-dom';
import Template3PageHeader from '../components/Template3PageHeader';
import { Calendar, FileText, Download, ShieldCheck, Microscope, GraduationCap } from 'lucide-react';

export default function Template3Academics({ onOpenEnquiry }) {
  const cards = [
    {
      title: 'Academic Calendar 2026-27',
      desc: 'Session calendar, semester dates, mid-term examinations, and practical exam schedules.',
      action: 'Download Calendar PDF ↓'
    },
    {
      title: 'Holiday Calendar',
      desc: 'Approved RTU Kota academic gazetted and institutional holiday lists for the current academic year.',
      action: 'View Holidays List →'
    },
    {
      title: 'Laboratory Manuals',
      desc: 'Semester-wise practical lab guidelines, code exercises, and experiment kits across all nine branches.',
      action: 'Browse Lab Manuals →'
    },
    {
      title: 'R&D Department',
      desc: 'Dedicated research domains, Scopus paper publications, student patents and sponsored grants.',
      action: 'Explore Research Cell →'
    },
    {
      title: 'Degree & Examination Process',
      desc: 'Official RTU examination guidelines, semester grade cards, revaluation rules and degree forms.',
      action: 'Examination Portal →'
    },
    {
      title: 'Anti-Ragging Committee',
      desc: 'Statutory monitoring committee members, contact helpline, and zero-tolerance grievance reporting.',
      action: 'View Committee Members →'
    }
  ];

  return (
    <div className="bg-white text-[#1A2233] w-full max-w-full overflow-x-hidden">
      <Template3PageHeader
        title="Academics"
        desc="Calendars, committees, laboratory manuals, and resources for students and faculty."
        breadcrumb="Academics"
      />

      <section className="py-14 sm:py-18 bg-white w-full max-w-full overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cards.map((card, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#E1E6F0] rounded-xl p-6 shadow-xs hover:shadow-md hover:border-[#F2A900] transition-all flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-heading font-black text-lg text-[#0E2A5C] mb-2">
                    {card.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                    {card.desc}
                  </p>
                </div>
                <button
                  onClick={onOpenEnquiry}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0E2A5C] hover:text-[#F2A900] transition-colors"
                >
                  <span>{card.action}</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Action Banner */}
      <section className="bg-[#F4F6FB] py-12 border-t border-[#E1E6F0] text-center w-full max-w-full overflow-hidden">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="font-heading font-black text-xl text-[#0E2A5C] mb-2">
            Need Syllabi or Academic Regulations?
          </h3>
          <p className="text-slate-600 text-xs sm:text-sm mb-4">
            Connect with the Dean Academics office or reach our admissions counsellors for curriculum details.
          </p>
          <button
            onClick={onOpenEnquiry}
            className="bg-[#0E2A5C] hover:bg-[#183a75] text-[#F2A900] font-bold px-6 py-2.5 rounded-lg text-xs shadow-xs transition-colors"
          >
            Request Syllabus Pack ↗
          </button>
        </div>
      </section>
    </div>
  );
}

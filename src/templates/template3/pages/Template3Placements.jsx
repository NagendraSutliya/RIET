import React from 'react';
import { Link } from 'react-router-dom';
import Template3PageHeader from '../components/Template3PageHeader';
import { TrendingUp, Briefcase, Award, Building, Quote } from 'lucide-react';
import { recruitersList, studentTestimonials } from '../../../data/collegeData';

export default function Template3Placements({ onOpenEnquiry }) {
  const alumniStories = [
    {
      quote: 'RIET’s training & placement cell transformed my coding foundations through daily mock interviews and coding hackathons, paving my way to Microsoft.',
      name: 'Aditya Mathur',
      role: 'B.Tech CSE (Batch 2024)',
      company: 'Microsoft, Bangalore'
    },
    {
      quote: 'The practical laboratory drills and faculty mentorship allowed me to publish my research paper and crack off-campus interviews smoothly.',
      name: 'Priyanka Shekhawat',
      role: 'B.Tech AI & DS (Batch 2024)',
      company: 'Oracle Cloud, Hyderabad'
    },
    {
      quote: 'Comprehensive aptitude workshops, industry speaker sessions and soft skills modules gave me the confidence to secure multiple placement offers.',
      name: 'Rohan Meena',
      role: 'B.Tech Mechanical (Batch 2023)',
      company: 'L&T Technology Services, Pune'
    }
  ];

  return (
    <div className="bg-white text-[#1A2233] w-full max-w-full overflow-x-hidden">
      <Template3PageHeader
        title="Training &amp; Placements"
        desc="Career development, corporate recruitment drives and verified outcomes for B.Tech, M.Tech, MBA and MCA students."
        breadcrumb="Placements"
      />

      {/* 4 Stat Cards */}
      <section className="py-14 sm:py-18 bg-white w-full max-w-full overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white border border-[#E1E6F0] rounded-xl p-6 shadow-xs text-center">
              <div className="text-3xl sm:text-5xl font-heading font-black text-[#0E2A5C] mb-1">
                88%
              </div>
              <p className="text-xs sm:text-sm font-semibold text-slate-600">Students Placed</p>
            </div>

            <div className="bg-white border border-[#E1E6F0] rounded-xl p-6 shadow-xs text-center">
              <div className="text-3xl sm:text-5xl font-heading font-black text-[#F2A900] mb-1">
                18.5 LPA
              </div>
              <p className="text-xs sm:text-sm font-semibold text-slate-600">Highest Package</p>
            </div>

            <div className="bg-white border border-[#E1E6F0] rounded-xl p-6 shadow-xs text-center">
              <div className="text-3xl sm:text-5xl font-heading font-black text-[#0E2A5C] mb-1">
                5.2 LPA
              </div>
              <p className="text-xs sm:text-sm font-semibold text-slate-600">Average Package</p>
            </div>

            <div className="bg-white border border-[#E1E6F0] rounded-xl p-6 shadow-xs text-center">
              <div className="text-3xl sm:text-5xl font-heading font-black text-[#0E2A5C] mb-1">
                150+
              </div>
              <p className="text-xs sm:text-sm font-semibold text-slate-600">Recruiting Companies</p>
            </div>
          </div>
        </div>
      </section>

      {/* Recruiters Grid (Alt Background) */}
      <section className="py-14 sm:py-18 bg-[#F4F6FB] border-y border-[#E1E6F0] w-full max-w-full overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="font-heading font-black text-2xl sm:text-3xl text-[#0E2A5C] mb-8">
            Our Top Recruiters
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {recruitersList.slice(0, 12).map((recruiter, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#E1E6F0] rounded-xl p-4 flex flex-col items-center justify-center text-center font-bold text-xs sm:text-sm text-[#0E2A5C] hover:border-[#F2A900] transition-colors min-h-[90px] shadow-xs"
              >
                <Briefcase className="w-4 h-4 text-[#F2A900] mb-1.5" />
                <span>{recruiter.name}</span>
                <span className="text-[10px] text-slate-500 font-normal mt-0.5">{recruiter.package}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Alumni Stories */}
      <section className="py-14 sm:py-18 bg-white w-full max-w-full overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="font-heading font-black text-2xl sm:text-3xl text-[#0E2A5C] mb-8">
            Alumni Stories &amp; Testimonials
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {alumniStories.map((story, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#E1E6F0] rounded-xl p-6 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <Quote className="w-6 h-6 text-[#F2A900] mb-3 opacity-60" />
                  <p className="text-slate-700 text-xs sm:text-sm leading-relaxed italic mb-6">
                    “{story.quote}”
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-100">
                  <b className="font-heading font-bold text-[#0E2A5C] text-sm block">
                    {story.name}
                  </b>
                  <p className="text-xs text-slate-500">{story.role}</p>
                  <p className="text-[11px] font-bold text-[#F2A900] mt-0.5">{story.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring from RIET? Two-Column Action */}
      <section className="py-12 bg-[#F4F6FB] border-t border-[#E1E6F0] w-full max-w-full overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 bg-white p-8 rounded-xl border border-[#E1E6F0] shadow-xs">
            <div>
              <h2 className="font-heading font-black text-2xl text-[#0E2A5C] mb-1">
                Hiring from RIET?
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm">
                Contact the Training and Placement Cell to schedule an on-campus or virtual recruitment drive.
              </p>
            </div>
            <Link
              to="/contact"
              className="bg-[#0E2A5C] hover:bg-[#183a75] text-[#F2A900] font-bold px-6 py-3 rounded-lg text-xs sm:text-sm whitespace-nowrap shadow-xs transition-colors shrink-0"
            >
              Contact the T&amp;P Cell →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

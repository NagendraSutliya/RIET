import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Award, Calendar, BookOpen, Briefcase, Building, ChevronRight } from 'lucide-react';
import Template3RankStrip from '../components/Template3RankStrip';
import { latestNews, recruitersList } from '../../../data/collegeData';

export default function Template3Home({ onOpenEnquiry }) {
  const topRecruiters = recruitersList.slice(0, 8);

  return (
    <div className="bg-white text-[#1A2233] w-full max-w-full overflow-x-hidden">
      {/* 1. Hero Section (Corporate Grid Deep Navy + Accolade Headline) */}
      <section className="bg-[#0E2A5C] text-white py-16 sm:py-24 border-b border-[#183a75] w-full max-w-full overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-block text-[#F2A900] font-extrabold text-xs sm:text-sm uppercase tracking-wider bg-white/10 px-3 py-1 rounded">
                AICTE approved • RTU affiliated • NBA accredited 2012 to 2015
              </span>

              <h1 className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.12]">
                Engineering education built for industry.
              </h1>

              <p className="text-base sm:text-xl text-[#DDE3F0] max-w-2xl leading-relaxed">
                Diploma, undergraduate, postgraduate and doctoral programs at an A-graded institute in Jaipur, established in 2000.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={onOpenEnquiry}
                  className="bg-[#F2A900] hover:bg-[#e09b00] text-[#0E2A5C] font-black px-6 py-3.5 rounded-lg text-sm shadow-md transition-all hover:scale-105 active:scale-95"
                >
                  Apply now
                </button>
                <Link
                  to="/campus"
                  className="border-2 border-white/80 hover:border-white text-white font-bold px-6 py-3.5 rounded-lg text-sm transition-colors hover:bg-white/10"
                >
                  Take a virtual tour
                </Link>
              </div>
            </div>

            {/* Right: Real Campus Photography Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl bg-slate-800 group">
                <img
                  src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=85"
                  alt="RIET Jaipur Campus Academic Block"
                  className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E2A5C] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 right-4 text-xs text-white">
                  <span className="font-extrabold text-[#F2A900] block text-sm">20-Acre Bhankrota Campus</span>
                  <span className="text-slate-200">Ajmer Road, Jaipur • REAP Code 1025</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Amber Recognition Banner Strip */}
      <Template3RankStrip text="RIET is ranked #1 in RTU Quality Index for Electrical Engineering & Technology" />

      {/* 3. Fast Nav 4-Grid Cards */}
      <section className="py-14 sm:py-16 bg-white w-full max-w-full overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link
              to="/admissions"
              className="bg-white border border-[#E1E6F0] rounded-xl p-6 shadow-xs hover:shadow-md hover:border-[#F2A900] transition-all group"
            >
              <h3 className="font-heading font-black text-xl text-[#0E2A5C] group-hover:text-[#F2A900] transition-colors mb-2">
                Admissions
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                B.Tech, lateral entry, M.Tech, MBA, MCA, BCA/BBA and doctoral admissions 2026.
              </p>
              <span className="inline-flex items-center gap-1 text-xs font-bold text-[#0E2A5C] group-hover:underline">
                Explore admission process →
              </span>
            </Link>

            <Link
              to="/courses"
              className="bg-white border border-[#E1E6F0] rounded-xl p-6 shadow-xs hover:shadow-md hover:border-[#F2A900] transition-all group"
            >
              <h3 className="font-heading font-black text-xl text-[#0E2A5C] group-hover:text-[#F2A900] transition-colors mb-2">
                Courses
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                Eight career-aligned programs across engineering, architecture, computing and business.
              </p>
              <span className="inline-flex items-center gap-1 text-xs font-bold text-[#0E2A5C] group-hover:underline">
                View curriculum →
              </span>
            </Link>

            <Link
              to="/placements"
              className="bg-white border border-[#E1E6F0] rounded-xl p-6 shadow-xs hover:shadow-md hover:border-[#F2A900] transition-all group"
            >
              <h3 className="font-heading font-black text-xl text-[#0E2A5C] group-hover:text-[#F2A900] transition-colors mb-2">
                Placements
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                Recruiters, verified salary statistics, training modules and corporate drives.
              </p>
              <span className="inline-flex items-center gap-1 text-xs font-bold text-[#0E2A5C] group-hover:underline">
                View recruiter statistics →
              </span>
            </Link>

            <Link
              to="/campus"
              className="bg-white border border-[#E1E6F0] rounded-xl p-6 shadow-xs hover:shadow-md hover:border-[#F2A900] transition-all group"
            >
              <h3 className="font-heading font-black text-xl text-[#0E2A5C] group-hover:text-[#F2A900] transition-colors mb-2">
                Virtual Tour
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                Laboratories, hostels, sports arena, and central library explored online.
              </p>
              <span className="inline-flex items-center gap-1 text-xs font-bold text-[#0E2A5C] group-hover:underline">
                Tour our facilities →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Departments Grid Section (Soft Alt Background) */}
      <section className="py-14 sm:py-18 bg-[#F4F6FB] border-y border-[#E1E6F0] w-full max-w-full overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-[11px] font-black uppercase tracking-wider text-[#F2A900] block mb-1">
                ACADEMIC DISCIPLINES
              </span>
              <h2 className="font-heading font-black text-2xl sm:text-3xl text-[#0E2A5C]">
                Departments
              </h2>
            </div>
            <Link
              to="/departments"
              className="font-bold text-xs sm:text-sm text-[#0E2A5C] hover:text-[#F2A900] hover:underline flex items-center gap-1"
            >
              <span>See all nine departments</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              to="/department-detail"
              className="bg-white border border-[#E1E6F0] rounded-xl p-6 shadow-xs hover:shadow-md transition-all hover:-translate-y-1 block"
            >
              <span className="inline-block text-[11px] font-bold bg-[#FFF1CC] text-[#5C3D00] px-2.5 py-0.5 rounded-full mb-3">
                NBA Accredited 2011-14
              </span>
              <h3 className="font-heading font-black text-lg text-[#0E2A5C] mb-2">
                Computer Science &amp; Engineering
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                B.Tech and M.Tech. Established in 2000 with specialized iOS, AI and Cloud development hubs.
              </p>
              <span className="text-xs font-extrabold text-[#0E2A5C] underline">
                Explore Department →
              </span>
            </Link>

            <Link
              to="/departments"
              className="bg-white border border-[#E1E6F0] rounded-xl p-6 shadow-xs hover:shadow-md transition-all hover:-translate-y-1 block"
            >
              <span className="inline-block text-[11px] font-bold bg-[#FFF1CC] text-[#5C3D00] px-2.5 py-0.5 rounded-full mb-3">
                New in 2024
              </span>
              <h3 className="font-heading font-black text-lg text-[#0E2A5C] mb-2">
                Cyber Security
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                Four-year B.Tech approved by RTU Kota covering network defense, digital forensics, and cloud security.
              </p>
              <span className="text-xs font-extrabold text-[#0E2A5C] underline">
                View Curriculum →
              </span>
            </Link>

            <Link
              to="/departments"
              className="bg-white border border-[#E1E6F0] rounded-xl p-6 shadow-xs hover:shadow-md transition-all hover:-translate-y-1 block"
            >
              <span className="inline-block text-[11px] font-bold bg-[#FFF1CC] text-[#5C3D00] px-2.5 py-0.5 rounded-full mb-3">
                New in 2024
              </span>
              <h3 className="font-heading font-black text-lg text-[#0E2A5C] mb-2">
                Internet of Things (IoT)
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                Embedded microcontrollers, smart automation sensors, edge AI, and connected industrial devices.
              </p>
              <span className="text-xs font-extrabold text-[#0E2A5C] underline">
                View Curriculum →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Leading Corporate Recruiters Strip */}
      <section className="py-14 sm:py-16 bg-white w-full max-w-full overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between gap-4 mb-8">
            <h2 className="font-heading font-black text-2xl sm:text-3xl text-[#0E2A5C]">
              Our Recruiters
            </h2>
            <Link to="/placements" className="text-xs sm:text-sm font-bold text-[#0E2A5C] hover:underline">
              Placement Cell Highlights →
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {topRecruiters.map((recruiter, idx) => (
              <div
                key={idx}
                className="bg-[#F4F6FB] border border-[#E1E6F0] rounded-xl p-4 flex flex-col items-center justify-center text-center font-bold text-xs sm:text-sm text-[#0E2A5C] hover:bg-amber-50 hover:border-[#F2A900] transition-colors min-h-[90px]"
              >
                <Briefcase className="w-4 h-4 text-[#F2A900] mb-1.5" />
                <span>{recruiter.name}</span>
                <span className="text-[10px] text-slate-500 font-normal mt-0.5">{recruiter.package}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. News & Events Grid */}
      <section className="py-14 sm:py-18 bg-[#F4F6FB] border-t border-[#E1E6F0] w-full max-w-full overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between gap-4 mb-10">
            <h2 className="font-heading font-black text-2xl sm:text-3xl text-[#0E2A5C]">
              News and Events
            </h2>
            <Link to="/news" className="text-xs sm:text-sm font-bold text-[#0E2A5C] hover:underline">
              View All Campus Notices →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {latestNews.slice(0, 3).map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#E1E6F0] rounded-xl p-6 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <span className="inline-block text-[11px] font-bold bg-[#FFF1CC] text-[#5C3D00] px-2.5 py-0.5 rounded-full mb-3">
                    {item.category}
                  </span>
                  <h3 className="font-heading font-bold text-base text-[#0E2A5C] mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                    {item.summary}
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[#F2A900]" />
                    <span>{item.date}</span>
                  </span>
                  <Link to="/news" className="text-[#0E2A5C] font-bold hover:underline">
                    Read note →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Bottom Action CTA */}
      <section className="bg-[#0E2A5C] text-white py-12 text-center w-full max-w-full overflow-hidden">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-heading font-black text-2xl sm:text-3xl text-white mb-3">
            Start Your Technical Career at RIET Jaipur
          </h2>
          <p className="text-[#DDE3F0] text-sm sm:text-base mb-6 max-w-2xl mx-auto">
            Admissions open for B.Tech, M.Tech, MBA, MCA, and Diploma programs for the 2026-27 session under REAP Code 1025.
          </p>
          <button
            onClick={onOpenEnquiry}
            className="bg-[#F2A900] hover:bg-[#e09b00] text-[#0E2A5C] font-black px-8 py-3.5 rounded-lg text-sm shadow-md transition-transform hover:scale-105 active:scale-95"
          >
            Submit Admission Enquiry ↗
          </button>
        </div>
      </section>
    </div>
  );
}

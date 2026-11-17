import React from 'react';
import { Link } from 'react-router-dom';
import Template4PageHeader from '../components/Template4PageHeader';
import { recruitersList, studentTestimonials } from '../../../data/collegeData';
import { Briefcase, Building2, TrendingUp, Users, ArrowRight, Quote } from 'lucide-react';

export default function Template4Placements({ onOpenEnquiry }) {
  const stats = [
    { value: "88%", label: "Students placed" },
    { value: "₹44 LPA", label: "Highest package" },
    { value: "₹5.2 LPA", label: "Average package" },
    { value: "150+", label: "Recruiting companies" }
  ];

  return (
    <div className="w-full font-manrope">
      {/* 1. PAGE HEADER */}
      <Template4PageHeader
        title="Placements"
        desc="Training and placement for B.Tech, M.Tech, MBA, MCA and Ph.D students."
      />

      {/* 2. STATS SECTION (Connected Grid with large crimson numbers) */}
      <section className="py-14 sm:py-20 px-6 sm:px-10 bg-white">
        <div className="max-w-[1060px] mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 border-t border-l border-[#DAD5D8]">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="p-8 bg-white border-r border-b border-[#DAD5D8] flex flex-col justify-center hover:bg-[#FAF8F9] transition-colors"
              >
                <div className="font-bricolage text-4xl sm:text-5xl font-bold text-[#B3263A] leading-none mb-2">
                  {stat.value}
                </div>
                <p className="text-xs sm:text-sm text-[#4A4752] font-semibold">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. OUR RECRUITERS (Alt Background & Connected Grid) */}
      <section className="bg-[#F6F3F4] py-14 sm:py-20 px-6 sm:px-10 border-t border-[#DAD5D8]">
        <div className="max-w-[1060px] mx-auto">
          <div className="mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#B3263A]">
              Corporate Footprint
            </span>
            <h2 className="font-bricolage text-3xl sm:text-4xl font-bold text-[#1C1B22] mt-1">
              Our recruiters
            </h2>
            <p className="text-sm text-[#4A4752]">
              Over 150 top technology giants, consulting MNCs, fintech leaders, and core engineering corporations.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 border-t border-l border-[#DAD5D8]">
            {[
              ...recruitersList,
              { name: "Siemens", sector: "Industrial Automation", avgPkg: "₹9.5 LPA" },
              { name: "Jindal Steel", sector: "Heavy Engineering", avgPkg: "₹7.5 LPA" }
            ].map((recruiter, idx) => (
              <div
                key={idx}
                className="p-6 bg-white border-r border-b border-[#DAD5D8] flex flex-col items-center justify-center text-center min-h-[110px] hover:bg-[#FAF8F9] transition-colors"
              >
                <span className="font-bricolage font-bold text-lg text-[#1C1B22]">
                  {recruiter.name}
                </span>
                <span className="text-[11px] text-[#7A1626] font-semibold mt-1">
                  {recruiter.avgPkg}
                </span>
                <span className="text-[10px] text-[#6E6A77]">
                  {recruiter.sector}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. ALUMNI STORIES */}
      <section className="py-14 sm:py-20 px-6 sm:px-10 bg-white border-t border-[#DAD5D8]">
        <div className="max-w-[1060px] mx-auto">
          <div className="mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#B3263A]">
              Success Stories
            </span>
            <h2 className="font-bricolage text-3xl sm:text-4xl font-bold text-[#1C1B22] mt-1">
              Alumni stories
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-[#DAD5D8]">
            {studentTestimonials.map((alumnus) => (
              <div
                key={alumnus.id}
                className="p-8 bg-white border-r border-b border-[#DAD5D8] hover:bg-[#FAF8F9] transition-colors flex flex-col justify-between"
              >
                <div>
                  <Quote className="w-6 h-6 text-[#B3263A] mb-3 opacity-80" />
                  <p className="text-xs text-[#4A4752] leading-relaxed italic mb-6">
                    “{alumnus.quote}”
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-[#DAD5D8]/70">
                  <img
                    src={alumnus.image}
                    alt={alumnus.name}
                    className="w-11 h-11 rounded-full object-cover border border-[#DAD5D8]"
                  />
                  <div>
                    <b className="font-bricolage text-sm text-[#1C1B22] block leading-snug">
                      {alumnus.name}
                    </b>
                    <p className="text-[11px] text-[#B3263A] font-semibold">
                      {alumnus.role}
                    </p>
                    <p className="text-[10px] text-[#6E6A77]">
                      {alumnus.program}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. HIRING FROM RIET? (Alt Background Two-Column) */}
      <section className="bg-[#F6F3F4] py-14 sm:py-16 px-6 sm:px-10 border-t border-[#DAD5D8]">
        <div className="max-w-[1060px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h2 className="font-bricolage text-2xl sm:text-3xl font-bold text-[#1C1B22]">
              Hiring from RIET?
            </h2>
            <p className="text-sm text-[#4A4752]">
              Contact the Training and Placement Cell to schedule an on-campus or virtual recruitment drive.
            </p>
          </div>
          <div>
            <Link
              to="/contact"
              className="inline-block bg-[#B3263A] hover:bg-[#8F1C2D] text-white font-bold py-3.5 px-6 rounded text-sm transition-colors whitespace-nowrap shadow-xs"
            >
              Contact the T&amp;P cell
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

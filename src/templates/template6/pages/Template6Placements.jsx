import React from 'react';
import { Link } from 'react-router-dom';
import Template6PageHeader from '../components/Template6PageHeader';
import { recruitersList, studentTestimonials } from '../../../data/collegeData';
import { Quote } from 'lucide-react';

export default function Template6Placements({ onOpenEnquiry }) {
  const stats = [
    { value: "88%", label: "Students placed" },
    { value: "₹44 LPA", label: "Highest package" },
    { value: "₹5.2 LPA", label: "Average package" },
    { value: "150+", label: "Recruiting companies" }
  ];

  return (
    <div className="w-full font-sans text-[#1C1B22] bg-white">
      <Template6PageHeader
        title="Placements"
        desc="Training and placement for B.Tech, M.Tech, MBA, MCA and Ph.D students."
      />

      <section className="py-16 sm:py-20 px-6 sm:px-10 bg-white">
        <div className="max-w-[1140px] mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="p-8 bg-[#FAF7F5] border border-[#E3DDD8] rounded flex flex-col justify-center text-center hover:border-[#6B1724] transition-colors"
              >
                <div className="font-fraunces text-4xl sm:text-5xl font-bold text-[#6B1724] leading-none mb-2">
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

      <section className="bg-[#FAF7F5] py-16 sm:py-20 px-6 sm:px-10 border-t border-[#E3DDD8]">
        <div className="max-w-[1140px] mx-auto">
          <div className="mb-10 text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-[#6B1724]">
              Corporate Connect
            </span>
            <h2 className="font-fraunces text-3xl sm:text-4xl font-bold text-[#1C1B22] mt-1">
              Our recruiters
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              ...recruitersList,
              { name: "Siemens", sector: "Industrial Automation", avgPkg: "₹9.5 LPA" },
              { name: "Jindal Steel", sector: "Heavy Engineering", avgPkg: "₹7.5 LPA" }
            ].map((recruiter, idx) => (
              <div
                key={idx}
                className="p-6 bg-white border border-[#E3DDD8] rounded flex flex-col items-center justify-center text-center min-h-[110px] hover:border-[#6B1724] transition-colors"
              >
                <span className="font-fraunces font-bold text-lg text-[#1C1B22]">
                  {recruiter.name}
                </span>
                <span className="text-xs text-[#6B1724] font-bold mt-1">
                  {recruiter.avgPkg}
                </span>
                <span className="text-[10px] text-[#4A4752]">
                  {recruiter.sector}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 px-6 sm:px-10 bg-white border-t border-[#E3DDD8]">
        <div className="max-w-[1140px] mx-auto">
          <div className="mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#6B1724]">
              Success Stories
            </span>
            <h2 className="font-fraunces text-3xl sm:text-4xl font-bold text-[#1C1B22] mt-1">
              Alumni stories
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {studentTestimonials.map((alumnus) => (
              <div
                key={alumnus.id}
                className="p-8 bg-[#FAF7F5] border border-[#E3DDD8] rounded hover:border-[#6B1724] transition-colors flex flex-col justify-between"
              >
                <div>
                  <Quote className="w-7 h-7 text-[#6B1724] mb-3 opacity-80" />
                  <p className="text-xs text-[#4A4752] leading-relaxed italic mb-6">
                    “{alumnus.quote}”
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-[#E3DDD8]">
                  <img
                    src={alumnus.image}
                    alt={alumnus.name}
                    className="w-12 h-12 rounded-full object-cover border border-[#E3DDD8]"
                  />
                  <div>
                    <b className="font-fraunces text-base text-[#1C1B22] block leading-snug">
                      {alumnus.name}
                    </b>
                    <p className="text-[11px] text-[#6B1724] font-bold">
                      {alumnus.role}
                    </p>
                    <p className="text-[10px] text-[#4A4752]">
                      {alumnus.program}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#6B1724] text-white py-14 sm:py-16 px-6 sm:px-10 border-t border-[#52111B]">
        <div className="max-w-[1140px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h2 className="font-fraunces text-3xl font-bold text-white">
              Hiring from RIET?
            </h2>
            <p className="text-sm text-[#FAF7F5]/80">
              Contact the Training and Placement Cell to schedule an on-campus or virtual recruitment drive.
            </p>
          </div>
          <div>
            <Link
              to="/contact"
              className="inline-block bg-[#FAF7F5] hover:bg-white text-[#6B1724] font-bold py-3.5 px-8 rounded text-sm transition-all whitespace-nowrap shadow-xs"
            >
              Contact the T&amp;P cell
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

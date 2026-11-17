import React from 'react';
import { Link } from 'react-router-dom';
import Template5PageHeader from '../components/Template5PageHeader';
import { recruitersList, studentTestimonials } from '../../../data/collegeData';
import { Quote } from 'lucide-react';

export default function Template5Placements({ onOpenEnquiry }) {
  const stats = [
    { value: "88%", label: "Students placed" },
    { value: "₹44 LPA", label: "Highest package" },
    { value: "₹5.2 LPA", label: "Average package" },
    { value: "150+", label: "Recruiting companies" }
  ];

  return (
    <div className="w-full font-sans text-[#16262B]">
      <Template5PageHeader
        title="Placements"
        desc="Training and placement for B.Tech, M.Tech, MBA, MCA and Ph.D students."
      />

      {/* 4 Stats Cards */}
      <section className="py-16 sm:py-20 px-6 sm:px-10 bg-white">
        <div className="max-w-[1180px] mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="p-8 bg-[#EEF4F5] rounded-[22px] flex flex-col justify-center text-center hover:bg-[#DDEAED] transition-colors"
              >
                <div className="font-fraunces text-4xl sm:text-5xl font-bold text-[#0F4C5C] leading-none mb-2">
                  {stat.value}
                </div>
                <p className="text-xs sm:text-sm text-[#3C5961] font-semibold">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Recruiters */}
      <section className="bg-[#F2F6F7] py-16 sm:py-20 px-6 sm:px-10 border-t border-[#D5E3E6]">
        <div className="max-w-[1180px] mx-auto">
          <div className="mb-10 text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-[#F58B3A]">
              Corporate Connect
            </span>
            <h2 className="font-fraunces text-3xl sm:text-4xl font-bold text-[#0A3340] mt-1">
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
                className="p-6 bg-white rounded-[22px] border border-[#D5E3E6] flex flex-col items-center justify-center text-center min-h-[110px] hover:shadow-xs transition-shadow"
              >
                <span className="font-fraunces font-bold text-lg text-[#0A3340]">
                  {recruiter.name}
                </span>
                <span className="text-xs text-[#F58B3A] font-bold mt-1">
                  {recruiter.avgPkg}
                </span>
                <span className="text-[10px] text-[#3C5961]">
                  {recruiter.sector}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Alumni Stories */}
      <section className="py-16 sm:py-20 px-6 sm:px-10 bg-white border-t border-[#D5E3E6]">
        <div className="max-w-[1180px] mx-auto">
          <div className="mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#F58B3A]">
              Success Stories
            </span>
            <h2 className="font-fraunces text-3xl sm:text-4xl font-bold text-[#0A3340] mt-1">
              Alumni stories
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {studentTestimonials.map((alumnus) => (
              <div
                key={alumnus.id}
                className="p-8 bg-[#EEF4F5] rounded-[22px] hover:bg-[#DDEAED] transition-colors flex flex-col justify-between"
              >
                <div>
                  <Quote className="w-7 h-7 text-[#0F4C5C] mb-3 opacity-80" />
                  <p className="text-xs text-[#3C5961] leading-relaxed italic mb-6">
                    “{alumnus.quote}”
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-[#D5E3E6]">
                  <img
                    src={alumnus.image}
                    alt={alumnus.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-xs"
                  />
                  <div>
                    <b className="font-fraunces text-base text-[#0A3340] block leading-snug">
                      {alumnus.name}
                    </b>
                    <p className="text-[11px] text-[#F58B3A] font-bold">
                      {alumnus.role}
                    </p>
                    <p className="text-[10px] text-[#3C5961]">
                      {alumnus.program}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring from RIET CTA */}
      <section className="bg-[#0A3340] text-white py-14 sm:py-16 px-6 sm:px-10 border-t border-[#0F4C5C]">
        <div className="max-w-[1180px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h2 className="font-fraunces text-3xl font-bold text-white">
              Hiring from RIET?
            </h2>
            <p className="text-sm text-[#D5E8EC]">
              Contact the Training and Placement Cell to schedule an on-campus or virtual recruitment drive.
            </p>
          </div>
          <div>
            <Link
              to="/contact"
              className="inline-block bg-[#F58B3A] hover:bg-[#FFB26B] text-[#0A3340] font-bold py-3.5 px-8 rounded-full text-sm transition-all whitespace-nowrap shadow-xs"
            >
              Contact the T&amp;P cell
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

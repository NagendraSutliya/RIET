import React from 'react';
import { Link } from 'react-router-dom';
import Template8PageHeader from '../components/Template8PageHeader';
import { recruitersList, studentTestimonials } from '../../../data/collegeData';
import { Quote, ArrowRight, Trophy, Briefcase, Award } from 'lucide-react';

export default function Template8Placements({ onOpenEnquiry }) {
  const stats = [
    { value: "94.2%", label: "Placement Percentage", sub: "Across All B.Tech Streams" },
    { value: "₹54 LPA", label: "Highest Package", sub: "International Tech Tier" },
    { value: "₹7.8 LPA", label: "Average CTC (Top 30%)", sub: "Software & R&D Roles" },
    { value: "200+", label: "Recruiting Titans", sub: "On-Campus Recruitment" }
  ];

  return (
    <div className="w-full font-sans text-[#2a2a2a] bg-white">
      <Template8PageHeader
        title="Training &amp; Placements"
        desc="Career guidance, industrial internships, mock interview sprints, and top-tier campus placements for engineering graduates."
        breadcrumbs={[{ label: 'Placements' }]}
      />

      {/* 4 Key Placement Stat Boxes */}
      <section className="py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-[1240px] mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="p-8 bg-[#f8f9fa] rounded-lg border border-slate-200 text-center hover:border-[#d2973b] transition-all flex flex-col justify-center shadow-2xs group"
              >
                <div className="text-4xl sm:text-5xl font-bold font-playfair text-[#192f59] group-hover:text-[#d2973b] transition-colors leading-none mb-2">
                  {stat.value}
                </div>
                <p className="text-xs sm:text-sm font-bold text-[#192f59]">
                  {stat.label}
                </p>
                <span className="text-[11px] text-slate-500 mt-1">
                  {stat.sub}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recruiting Corporations Grid */}
      <section className="bg-[#f7f8fa] py-16 sm:py-24 px-4 sm:px-6 border-t border-b border-slate-200">
        <div className="max-w-[1240px] mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#d2973b] block mb-2">
              Corporate Collaborations
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-playfair text-[#192f59]">
              Our Esteemed Recruiters
            </h2>
            <div className="h-1 w-14 bg-[#d2973b] my-4 mx-auto rounded-full" />
            <p className="text-xs sm:text-sm text-slate-600">
              Leading multinational corporations, tech giants, and R&amp;D centers visit RIET Jaipur every year to recruit our graduates.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              ...recruitersList,
              { name: "Siemens", sector: "Industrial Automation", avgPkg: "₹9.5 LPA" },
              { name: "Jindal Steel", sector: "Heavy Engineering", avgPkg: "₹7.5 LPA" }
            ].map((recruiter, idx) => (
              <div
                key={idx}
                className="p-6 bg-white rounded-lg border border-slate-200 flex flex-col items-center justify-center text-center min-h-[110px] shadow-2xs hover:shadow-md hover:border-[#d2973b] transition-all"
              >
                <span className="font-bold font-playfair text-base text-[#192f59]">
                  {recruiter.name}
                </span>
                <span className="text-xs text-[#d2973b] font-bold mt-1">
                  {recruiter.avgPkg || recruiter.pkg || 'Top Recruiter'}
                </span>
                <span className="text-[10px] text-slate-500 mt-0.5">
                  {recruiter.sector || 'Technology'}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Alumni Testimonials */}
      <section className="py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-[1240px] mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#d2973b] block mb-2">
              Alumni Success
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-playfair text-[#192f59]">
              Voices of RIET Graduates
            </h2>
            <div className="h-1 w-14 bg-[#d2973b] my-4 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {studentTestimonials.map((alumnus) => (
              <div
                key={alumnus.id}
                className="p-8 bg-white rounded-lg border border-slate-200 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <Quote className="w-8 h-8 text-[#d2973b] mb-4 opacity-80" />
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic mb-6">
                    “{alumnus.quote}”
                  </p>
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
                  <img
                    src={alumnus.image}
                    alt={alumnus.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-[#d2973b]"
                  />
                  <div>
                    <b className="text-sm font-bold font-playfair text-[#192f59] block leading-snug">
                      {alumnus.name}
                    </b>
                    <p className="text-xs text-[#d2973b] font-semibold">
                      {alumnus.role}
                    </p>
                    <p className="text-[10px] text-slate-500">
                      {alumnus.program}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Hiring Banner */}
      <section className="bg-[#192f59] text-white py-14 px-6 sm:px-10">
        <div className="max-w-[1240px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h2 className="text-2xl sm:text-3xl font-bold font-playfair text-white">
              Looking to Hire Engineering Talent from RIET?
            </h2>
            <p className="text-xs sm:text-sm text-slate-200">
              Schedule your campus recruitment drive or joint hackathon with our Corporate Relations Cell.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-block bg-[#d2973b] hover:bg-[#b8822e] text-white font-bold py-3.5 px-8 rounded text-xs uppercase tracking-wider transition-all whitespace-nowrap shadow-md"
          >
            Contact Placement Cell
          </Link>
        </div>
      </section>
    </div>
  );
}

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Template8PageHeader from '../components/Template8PageHeader';
import { BookOpen, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Template8Courses({ onOpenEnquiry }) {
  const [activeFilter, setActiveFilter] = useState('All');

  const filterTabs = ['All', 'Undergraduate', 'Postgraduate', 'Doctoral'];

  const courseList = [
    { code: "B.Tech", level: "Undergraduate", title: "Bachelor of Technology", duration: "4 Years (8 Semesters)", intake: "480 Seats Total", branches: "CSE, AI & DS, Cyber Security, IoT, Mechanical, Civil, Electrical", desc: "Rigorous engineering curriculum blending core mathematics, lab immersion, and corporate internships.", hasDeptsLink: true },
    { code: "B.Arch", level: "Undergraduate", title: "Bachelor of Architecture", duration: "5 Years (10 Semesters)", intake: "40 Seats", branches: "Architectural Design, Urban Planning & Sustainable Habitats", desc: "CoA approved program emphasizing environmental design, structural integrity, and digital modeling.", hasDeptsLink: false },
    { code: "BBA", level: "Undergraduate", title: "Bachelor of Business Administration", duration: "3 Years (6 Semesters)", intake: "60 Seats", branches: "Finance, Digital Marketing, Human Resources & Analytics", desc: "Foundational business administration with Harvard case studies and executive simulations.", hasDeptsLink: false },
    { code: "BCA", level: "Undergraduate", title: "Bachelor of Computer Applications", duration: "3 Years (6 Semesters)", intake: "60 Seats", branches: "Software Engineering, Cloud Computing & Web Technologies", desc: "Modern software development focusing on JavaScript stacks, cloud systems, and database modeling.", hasDeptsLink: false },
    { code: "M.Tech", level: "Postgraduate", title: "Master of Technology", duration: "2 Years (4 Semesters)", intake: "36 Seats", branches: "Computer Science & Engineering, Power Systems & Digital Communication", desc: "Advanced postgraduate engineering program for R&D engineers, university faculty, and specialists.", hasDeptsLink: true },
    { code: "MBA", level: "Postgraduate", title: "Master of Business Administration", duration: "2 Years (4 Semesters)", intake: "60 Seats", branches: "Dual Specialization in Marketing, Finance, HR & Business Analytics", desc: "Approved by AICTE and affiliated to RTU Kota with 100% placement track record.", hasDeptsLink: false },
    { code: "MCA", level: "Postgraduate", title: "Master of Computer Applications", duration: "2 Years (4 Semesters)", intake: "60 Seats", branches: "Enterprise Systems, Distributed Cloud & Applied AI", desc: "High-intensity postgraduate software curriculum focusing on scalable systems and microservices.", hasDeptsLink: false },
    { code: "Ph.D", level: "Doctoral", title: "Doctor of Philosophy", duration: "3 to 5 Years", intake: "RTU DAT Allotment", branches: "Computer Science, Electrical, Electronics & Mechanical Sciences", desc: "Interdisciplinary doctoral research with state-of-the-art laboratory access and IEEE support.", hasDeptsLink: false }
  ];

  const filteredCourses = activeFilter === 'All'
    ? courseList
    : courseList.filter(c => c.level === activeFilter);

  return (
    <div className="w-full font-sans text-[#2a2a2a] bg-white">
      <Template8PageHeader
        title="Academic Degree Programs"
        desc="Explore our 8 diverse degree programs spanning undergraduate engineering, architecture, management, and doctoral studies."
        breadcrumbs={[{ label: 'Courses' }]}
      />

      <section className="py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-[1240px] mx-auto">
          {/* Kingster Filter Tabs */}
          <div className="flex gap-2 flex-wrap mb-10">
            {filterTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveFilter(tab)}
                className={`px-5 py-2 rounded text-xs font-bold uppercase tracking-wider transition-all border ${
                  activeFilter === tab
                    ? 'bg-[#192f59] text-white border-[#192f59] shadow-sm'
                    : 'bg-white text-[#192f59] border-slate-300 hover:border-[#192f59]'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course, idx) => (
              <div
                key={idx}
                className="bg-white p-7 rounded-lg border border-slate-200 shadow-2xs hover:shadow-lg transition-all flex flex-col justify-between group hover:border-[#d2973b]"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-bold px-3 py-1 rounded bg-[#fef7eb] text-[#d2973b]">
                      {course.level}
                    </span>
                    <span className="text-xs font-semibold text-slate-500">
                      {course.duration}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-playfair text-[#192f59] group-hover:text-[#d2973b] transition-colors mb-2">
                    {course.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-4">
                    {course.desc}
                  </p>

                  <div className="p-3 bg-[#f8f9fa] rounded border border-slate-200 text-xs text-slate-600 space-y-1 mb-6">
                    <div>
                      <strong className="text-[#192f59]">Specializations: </strong>
                      {course.branches}
                    </div>
                    <div>
                      <strong className="text-[#192f59]">Intake: </strong>
                      {course.intake}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold">
                  {course.hasDeptsLink ? (
                    <Link
                      to="/departments"
                      className="text-[#192f59] group-hover:text-[#d2973b] inline-flex items-center gap-1 transition-colors uppercase tracking-wider"
                    >
                      <span>Explore Branches</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  ) : (
                    <span className="text-slate-400">Regular Program</span>
                  )}
                  <button
                    onClick={onOpenEnquiry}
                    className="text-[#d2973b] hover:text-[#192f59] transition-colors"
                  >
                    Enquire Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

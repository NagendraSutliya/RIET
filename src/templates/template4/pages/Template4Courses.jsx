import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Template4PageHeader from '../components/Template4PageHeader';
import { ArrowRight, Clock, Users, Award, BookOpen } from 'lucide-react';

export default function Template4Courses({ onOpenEnquiry }) {
  const [activeFilter, setActiveFilter] = useState('All');

  const filterTabs = ['All', 'Undergraduate', 'Postgraduate', 'Doctoral'];

  const courseList = [
    {
      code: "B.Tech",
      level: "Undergraduate",
      title: "Bachelor of Technology",
      duration: "4 Years (8 Semesters)",
      intake: "480 Seats Total",
      branches: "CSE, AI & DS, Cyber Security, IoT, Mechanical, Civil, Electrical",
      desc: "Comprehensive engineering curriculum blending core fundamentals with hands-on capstone projects and corporate internship semesters.",
      hasDeptsLink: true
    },
    {
      code: "B.Arch",
      level: "Undergraduate",
      title: "Bachelor of Architecture",
      duration: "5 Years (10 Semesters)",
      intake: "40 Seats",
      branches: "Architectural Design, Urban Planning & Sustainable Building",
      desc: "Council of Architecture (CoA) approved degree focusing on sustainable habitats, computational building models, and urban landscaping.",
      hasDeptsLink: false
    },
    {
      code: "BBA",
      level: "Undergraduate",
      title: "Bachelor of Business Administration",
      duration: "3 Years (6 Semesters)",
      intake: "60 Seats",
      branches: "Finance, Digital Marketing, Human Resources & Analytics",
      desc: "Foundational business administration with Harvard case studies, executive mock stock simulations, and startup incubator mentorship.",
      hasDeptsLink: false
    },
    {
      code: "BCA",
      level: "Undergraduate",
      title: "Bachelor of Computer Applications",
      duration: "3 Years (6 Semesters)",
      intake: "60 Seats",
      branches: "Software Engineering, Cloud Computing & Web Technologies",
      desc: "Practical software development focusing on modern JavaScript stacks, mobile applications, database modeling, and cloud deployments.",
      hasDeptsLink: false
    },
    {
      code: "M.Tech",
      level: "Postgraduate",
      title: "Master of Technology",
      duration: "2 Years (4 Semesters)",
      intake: "36 Seats",
      branches: "Computer Science & Engineering, Power Systems & Digital Communication",
      desc: "Advanced research-oriented postgraduate engineering program designed for R&D engineers, university faculty, and product specialists.",
      hasDeptsLink: true
    },
    {
      code: "MBA",
      level: "Postgraduate",
      title: "Master of Business Administration",
      duration: "2 Years (4 Semesters)",
      intake: "60 Seats",
      branches: "Dual Specialization in Marketing, Finance, HR & Business Analytics",
      desc: "Approved by AICTE and affiliated to RTU Kota. Features live consulting internships, CEO guest conclaves, and 100% placement track record.",
      hasDeptsLink: false
    },
    {
      code: "MCA",
      level: "Postgraduate",
      title: "Master of Computer Applications",
      duration: "2 Years (4 Semesters)",
      intake: "60 Seats",
      branches: "Enterprise Systems, Distributed Cloud & Applied AI",
      desc: "High-intensity postgraduate software engineering curriculum focusing on scalable distributed systems, Docker/Kubernetes, and microservices.",
      hasDeptsLink: false
    },
    {
      code: "Ph.D",
      level: "Doctoral",
      title: "Doctor of Philosophy",
      duration: "3 to 5 Years",
      intake: "RTU DAT Allotment",
      branches: "Computer Science, Electrical, Electronics & Mechanical Sciences",
      desc: "Interdisciplinary doctoral research with state-of-the-art laboratory access, IEEE journal indexing support, and recognized RTU Kota guides.",
      hasDeptsLink: false
    }
  ];

  const filteredCourses = activeFilter === 'All'
    ? courseList
    : courseList.filter(c => c.level === activeFilter);

  return (
    <div className="w-full font-manrope">
      {/* 1. PAGE HEADER */}
      <Template4PageHeader
        title="Courses"
        desc="Eight programs across engineering, architecture, computing and management."
      />

      {/* 2. COURSES SECTION */}
      <section className="py-14 sm:py-20 px-6 sm:px-10 bg-white">
        <div className="max-w-[1060px] mx-auto">
          {/* Filter Chips */}
          <div className="flex gap-2 flex-wrap mb-8">
            {filterTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveFilter(tab)}
                className={`px-4 py-2 rounded text-sm font-semibold transition-all border ${
                  activeFilter === tab
                    ? 'bg-[#1C1B22] text-white border-[#1C1B22] shadow-xs'
                    : 'bg-white text-[#1C1B22] border-[#1C1B22] hover:bg-[#F6F3F4]'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Connected Grid of Courses */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-[#DAD5D8]">
            {filteredCourses.map((course, idx) => (
              <div
                key={idx}
                className="p-8 bg-white border-r border-b border-[#DAD5D8] hover:bg-[#F6F3F4] transition-colors flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded bg-[#F7DDE1] text-[#7A1626]">
                      {course.level}
                    </span>
                    <span className="text-xs font-semibold text-[#6E6A77]">
                      {course.duration}
                    </span>
                  </div>

                  <h3 className="font-bricolage text-2xl font-bold text-[#1C1B22] mb-1 group-hover:text-[#B3263A] transition-colors">
                    {course.code}
                  </h3>
                  <div className="text-xs font-bold text-[#7A1626] mb-3">
                    {course.title}
                  </div>

                  <p className="text-xs text-[#4A4752] leading-relaxed mb-4">
                    {course.desc}
                  </p>

                  <div className="text-[11px] text-[#1C1B22] space-y-1 pt-3 border-t border-[#DAD5D8]/70">
                    <div>
                      <strong>Intake:</strong> {course.intake}
                    </div>
                    <div>
                      <strong>Specializations:</strong> {course.branches}
                    </div>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-[#DAD5D8]/70 flex items-center justify-between">
                  {course.hasDeptsLink ? (
                    <Link
                      to="/departments"
                      className="text-xs font-bold text-[#B3263A] hover:underline inline-flex items-center gap-1"
                    >
                      <span>View departments</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  ) : (
                    <button
                      onClick={onOpenEnquiry}
                      className="text-xs font-bold text-[#B3263A] hover:underline inline-flex items-center gap-1"
                    >
                      <span>Apply for {course.code}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

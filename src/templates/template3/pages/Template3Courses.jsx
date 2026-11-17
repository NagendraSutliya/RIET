import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Template3PageHeader from '../components/Template3PageHeader';
import { ArrowRight, Clock, Award, BookOpen } from 'lucide-react';

export default function Template3Courses({ onOpenEnquiry }) {
  const [filter, setFilter] = useState('All');

  const allCourses = [
    {
      level: 'Undergraduate',
      title: 'B.Tech Engineering',
      duration: '4 Years (8 Semesters)',
      intake: 'Sanctioned Intake: 420 Seats',
      desc: 'Specializations in Computer Science, AI & DS, Cyber Security, IoT, Mechanical, Civil, and Electrical Engineering.',
      link: '/departments'
    },
    {
      level: 'Undergraduate',
      title: 'B.Arch Architecture',
      duration: '5 Years (10 Semesters)',
      intake: 'Sanctioned Intake: 40 Seats',
      desc: 'Approved by Council of Architecture (CoA). Architectural studio drawing, urban planning, BIM software, and sustainable design.',
      link: '/contact'
    },
    {
      level: 'Undergraduate',
      title: 'BBA (Business Administration)',
      duration: '3 Years (6 Semesters)',
      intake: 'Sanctioned Intake: 60 Seats',
      desc: 'Fundamentals of corporate management, finance, marketing strategies, entrepreneurship, and business communication.',
      link: '/contact'
    },
    {
      level: 'Undergraduate',
      title: 'BCA (Computer Applications)',
      duration: '3 Years (6 Semesters)',
      intake: 'Sanctioned Intake: 60 Seats',
      desc: 'Core computer science fundamentals, web development, object-oriented programming, and database architecture.',
      link: '/departments'
    },
    {
      level: 'Postgraduate',
      title: 'M.Tech Engineering Research',
      duration: '2 Years (4 Semesters)',
      intake: 'Sanctioned Intake: 36 Seats',
      desc: 'Advanced research degrees in Computer Science & Engineering and Production / Thermal Engineering under RTU Kota.',
      link: '/departments'
    },
    {
      level: 'Postgraduate',
      title: 'MBA Management',
      duration: '2 Years (4 Semesters)',
      intake: 'Sanctioned Intake: 120 Seats',
      desc: 'Dual specialization in Marketing, Finance, HR, and Business Analytics with summer corporate internships and placement.',
      link: '/contact'
    },
    {
      level: 'Postgraduate',
      title: 'MCA Computer Applications',
      duration: '2 Years (4 Semesters)',
      intake: 'Sanctioned Intake: 60 Seats',
      desc: 'Enterprise software architecture, modern JavaScript frameworks, mobile application development, and cloud computing.',
      link: '/departments'
    },
    {
      level: 'Doctoral',
      title: 'Ph.D Doctoral Studies',
      duration: '3–5 Years',
      intake: 'Research Supervisor Allocation',
      desc: 'Doctoral research center in Computer Engineering, Mechanical Engineering, and Business Management recognized by RTU Kota.',
      link: '/contact'
    }
  ];

  const filteredCourses = filter === 'All'
    ? allCourses
    : allCourses.filter((c) => c.level === filter);

  return (
    <div className="bg-white text-[#1A2233] w-full max-w-full overflow-x-hidden">
      <Template3PageHeader
        title="Courses &amp; Curricula"
        desc="Eight career-focused programs across engineering, architecture, computing, and management."
        breadcrumb="Courses"
      />

      <section className="py-14 sm:py-18 bg-white w-full max-w-full overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Interactive Filter Chips */}
          <div className="flex items-center gap-2 flex-wrap mb-10">
            {['All', 'Undergraduate', 'Postgraduate', 'Doctoral'].map((lvl) => (
              <button
                key={lvl}
                onClick={() => setFilter(lvl)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold border transition-all ${
                  filter === lvl
                    ? 'bg-[#0E2A5C] text-white border-[#0E2A5C] shadow-xs'
                    : 'bg-white text-[#0E2A5C] border-[#0E2A5C]/40 hover:border-[#0E2A5C]'
                }`}
              >
                {lvl}
              </button>
            ))}
          </div>

          {/* Courses Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredCourses.map((course, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#E1E6F0] rounded-xl p-6 shadow-xs hover:shadow-md hover:border-[#F2A900] transition-all flex flex-col justify-between group"
              >
                <div>
                  <span className="inline-block text-[11px] font-bold bg-[#FFF1CC] text-[#5C3D00] px-2.5 py-0.5 rounded-full mb-3">
                    {course.level}
                  </span>
                  <h3 className="font-heading font-black text-xl text-[#0E2A5C] group-hover:text-[#F2A900] transition-colors mb-2">
                    {course.title}
                  </h3>
                  <div className="text-[11px] text-[#44506B] font-semibold space-y-0.5 mb-3">
                    <p className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#F2A900]" />
                      <span>{course.duration}</span>
                    </p>
                    <p>{course.intake}</p>
                  </div>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                    {course.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    to={course.link}
                    className="text-xs font-extrabold text-[#0E2A5C] hover:underline"
                  >
                    View departments →
                  </Link>
                  <button
                    onClick={onOpenEnquiry}
                    className="text-xs font-bold text-[#F2A900] hover:underline"
                  >
                    Apply ↗
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

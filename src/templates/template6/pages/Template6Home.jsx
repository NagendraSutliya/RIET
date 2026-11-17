import React from 'react';
import { Link } from 'react-router-dom';
import { Award, GraduationCap, Briefcase, Globe, ArrowRight, ChevronRight } from 'lucide-react';
import Template6RankStrip from '../components/Template6RankStrip';
import { recruitersList, latestNews } from '../../../data/collegeData';

export default function Template6Home({ onOpenEnquiry }) {
  return (
    <div className="w-full font-sans text-[#1C1B22] bg-white">
      {/* 1. HERO SECTION (Classic Ivory Tint #FAF7F5) */}
      <section className="bg-[#FAF7F5] py-16 sm:py-24 px-6 sm:px-10 border-b border-[#E3DDD8]">
        <div className="max-w-[1140px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-block text-[#6B1724] font-bold text-xs uppercase tracking-widest bg-[#F0EAE4] px-3.5 py-1 rounded border border-[#E3DDD8]">
              AICTE Approved • RTU Affiliated • NBA Accredited (2012–15)
            </span>
            <h1 className="font-fraunces text-4xl sm:text-5xl lg:text-[56px] font-bold text-[#1C1B22] leading-[1.08] tracking-tight">
              Engineering education built for industry.
            </h1>
            <p className="text-[#4A4752] text-base sm:text-lg max-w-[50ch] leading-relaxed">
              Diploma, undergraduate, postgraduate and doctoral programs at an A-graded institute in Jaipur, established in 2000.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <button
                onClick={onOpenEnquiry}
                className="bg-[#6B1724] hover:bg-[#52111B] text-white font-semibold py-3.5 px-7 rounded text-sm sm:text-base border border-[#D4AF37]/50 transition-colors shadow-xs"
              >
                Apply now
              </button>
              <Link
                to="/campus"
                className="border-2 border-[#1C1B22] text-[#1C1B22] hover:bg-[#1C1B22] hover:text-white font-semibold py-3.5 px-7 rounded text-sm sm:text-base transition-colors"
              >
                Take a virtual tour
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-lg overflow-hidden shadow-md border-2 border-[#D4AF37]/40 relative group">
              <img
                src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=900&q=80"
                alt="RIET Jaipur Main Campus"
                className="w-full h-[360px] sm:h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C1B22]/90 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                <span className="font-fraunces text-xl font-bold">24+ Years of Educational Rigor</span>
                <span className="text-xs text-[#FAF7F5]/80 mt-1">Bhankrota, Ajmer Road, Jaipur • REAP 1025</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. RECOGNITION STRIP */}
      <Template6RankStrip />

      {/* 3. FOUR CORE PATHWAYS */}
      <section className="py-16 sm:py-20 px-6 sm:px-10 bg-white">
        <div className="max-w-[1140px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link
              to="/admissions"
              className="p-8 bg-[#FAF7F5] border border-[#E3DDD8] rounded hover:border-[#6B1724] hover:shadow-sm transition-all group flex flex-col justify-between"
            >
              <div>
                <GraduationCap className="w-8 h-8 text-[#6B1724] mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-fraunces text-2xl font-bold text-[#1C1B22] mb-2 group-hover:text-[#6B1724] transition-colors">
                  Admissions
                </h3>
                <p className="text-xs sm:text-sm text-[#4A4752] leading-relaxed">
                  B.Tech, lateral entry, M.Tech, MBA, MCA and more. REAP Code 1025.
                </p>
              </div>
              <div className="pt-4 text-xs font-bold text-[#6B1724] inline-flex items-center gap-1">
                <span>View admissions</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </Link>

            <Link
              to="/courses"
              className="p-8 bg-[#FAF7F5] border border-[#E3DDD8] rounded hover:border-[#6B1724] hover:shadow-sm transition-all group flex flex-col justify-between"
            >
              <div>
                <Award className="w-8 h-8 text-[#6B1724] mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-fraunces text-2xl font-bold text-[#1C1B22] mb-2 group-hover:text-[#6B1724] transition-colors">
                  Courses
                </h3>
                <p className="text-xs sm:text-sm text-[#4A4752] leading-relaxed">
                  Eight programs across engineering, architecture, design and management.
                </p>
              </div>
              <div className="pt-4 text-xs font-bold text-[#6B1724] inline-flex items-center gap-1">
                <span>Explore degrees</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </Link>

            <Link
              to="/placements"
              className="p-8 bg-[#FAF7F5] border border-[#E3DDD8] rounded hover:border-[#6B1724] hover:shadow-sm transition-all group flex flex-col justify-between"
            >
              <div>
                <Briefcase className="w-8 h-8 text-[#6B1724] mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-fraunces text-2xl font-bold text-[#1C1B22] mb-2 group-hover:text-[#6B1724] transition-colors">
                  Placements
                </h3>
                <p className="text-xs sm:text-sm text-[#4A4752] leading-relaxed">
                  Recruiters, statistics and the dedicated Training &amp; Placement Cell.
                </p>
              </div>
              <div className="pt-4 text-xs font-bold text-[#6B1724] inline-flex items-center gap-1">
                <span>Placement records</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </Link>

            <Link
              to="/campus"
              className="p-8 bg-[#FAF7F5] border border-[#E3DDD8] rounded hover:border-[#6B1724] hover:shadow-sm transition-all group flex flex-col justify-between"
            >
              <div>
                <Globe className="w-8 h-8 text-[#6B1724] mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-fraunces text-2xl font-bold text-[#1C1B22] mb-2 group-hover:text-[#6B1724] transition-colors">
                  Virtual tour
                </h3>
                <p className="text-xs sm:text-sm text-[#4A4752] leading-relaxed">
                  Explore laboratories, residential hostels and lush campus life online.
                </p>
              </div>
              <div className="pt-4 text-xs font-bold text-[#6B1724] inline-flex items-center gap-1">
                <span>Take tour</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 4. DEPARTMENTS HIGHLIGHT (ALT BACKGROUND) */}
      <section className="bg-[#FAF7F5] py-16 sm:py-20 px-6 sm:px-10 border-t border-[#E3DDD8]">
        <div className="max-w-[1140px] mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#6B1724]">
                Academic Schools
              </span>
              <h2 className="font-fraunces text-3xl sm:text-4xl font-bold text-[#1C1B22] mt-1">
                Departments
              </h2>
            </div>
            <Link
              to="/departments"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-[#6B1724] hover:underline"
            >
              <span>See all nine departments</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              to="/department-detail"
              className="p-8 bg-white rounded border border-[#E3DDD8] hover:border-[#6B1724] hover:shadow-sm transition-all group block"
            >
              <span className="inline-block text-[11px] font-bold px-3 py-0.5 rounded bg-[#F0EAE4] text-[#6B1724] mb-3 border border-[#E3DDD8]">
                NBA Accredited
              </span>
              <h3 className="font-fraunces text-2xl font-bold text-[#1C1B22] group-hover:text-[#6B1724] transition-colors mb-2">
                Computer Science &amp; Engineering
              </h3>
              <p className="text-xs text-[#4A4752] leading-relaxed">
                B.Tech and M.Tech. Established in 2000, NBA accredited with high-performance computing clusters.
              </p>
            </Link>

            <Link
              to="/departments"
              className="p-8 bg-white rounded border border-[#E3DDD8] hover:border-[#6B1724] hover:shadow-sm transition-all group block"
            >
              <span className="inline-block text-[11px] font-bold px-3 py-0.5 rounded bg-[#F0EAE4] text-[#6B1724] mb-3 border border-[#E3DDD8]">
                New in 2024
              </span>
              <h3 className="font-fraunces text-2xl font-bold text-[#1C1B22] group-hover:text-[#6B1724] transition-colors mb-2">
                Cyber Security
              </h3>
              <p className="text-xs text-[#4A4752] leading-relaxed">
                B.Tech degree approved by RTU Kota. Defensive systems, ethical hacking and digital forensics.
              </p>
            </Link>

            <Link
              to="/departments"
              className="p-8 bg-white rounded border border-[#E3DDD8] hover:border-[#6B1724] hover:shadow-sm transition-all group block"
            >
              <span className="inline-block text-[11px] font-bold px-3 py-0.5 rounded bg-[#F0EAE4] text-[#6B1724] mb-3 border border-[#E3DDD8]">
                New in 2024
              </span>
              <h3 className="font-fraunces text-2xl font-bold text-[#1C1B22] group-hover:text-[#6B1724] transition-colors mb-2">
                Internet of Things (IoT)
              </h3>
              <p className="text-xs text-[#4A4752] leading-relaxed">
                B.Tech program approved by RTU Kota. Embedded controllers, sensor meshes &amp; robotics.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* 5. OUR RECRUITERS */}
      <section className="py-16 sm:py-20 px-6 sm:px-10 bg-white">
        <div className="max-w-[1140px] mx-auto">
          <div className="mb-10 text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-[#6B1724]">
              Corporate Footprint
            </span>
            <h2 className="font-fraunces text-3xl sm:text-4xl font-bold text-[#1C1B22] mt-1">
              Our recruiters
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {recruitersList.slice(0, 6).map((recruiter, idx) => (
              <div
                key={idx}
                className="p-6 bg-[#FAF7F5] border border-[#E3DDD8] rounded flex flex-col items-center justify-center text-center min-h-[120px] hover:border-[#6B1724] transition-colors"
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

      {/* 6. NEWS AND EVENTS */}
      <section className="bg-[#FAF7F5] py-16 sm:py-20 px-6 sm:px-10 border-t border-[#E3DDD8]">
        <div className="max-w-[1140px] mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#6B1724]">
                Campus Bulletin
              </span>
              <h2 className="font-fraunces text-3xl sm:text-4xl font-bold text-[#1C1B22] mt-1">
                News and events
              </h2>
            </div>
            <Link
              to="/news"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-[#6B1724] hover:underline"
            >
              <span>View all campus news</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {latestNews.slice(0, 3).map((item) => (
              <div
                key={item.id}
                className="p-6 bg-white rounded border border-[#E3DDD8] hover:border-[#6B1724] hover:shadow-xs transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="h-44 rounded overflow-hidden mb-4 border border-[#E3DDD8]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <span className="inline-block text-[11px] font-bold px-2.5 py-0.5 rounded bg-[#F0EAE4] text-[#6B1724] mb-2 border border-[#E3DDD8]">
                    {item.category} • {item.month} {item.date}, {item.year}
                  </span>
                  <h3 className="font-fraunces text-lg font-bold text-[#1C1B22] mb-2 leading-snug line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#4A4752] leading-relaxed line-clamp-3">
                    {item.desc}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-[#E3DDD8]">
                  <Link
                    to="/news"
                    className="text-xs font-bold text-[#6B1724] hover:underline inline-flex items-center gap-1"
                  >
                    <span>Read details</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

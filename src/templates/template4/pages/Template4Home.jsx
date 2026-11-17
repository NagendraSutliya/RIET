import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, CheckCircle2, ChevronRight, GraduationCap, Building2, Briefcase, Globe } from 'lucide-react';
import Template4RankStrip from '../components/Template4RankStrip';
import { recruitersList, latestNews, collegeInfo } from '../../../data/collegeData';

export default function Template4Home({ onOpenEnquiry }) {
  return (
    <div className="w-full font-manrope">
      {/* 1. HERO SECTION */}
      <section className="bg-[#F6F3F4] py-14 sm:py-20 px-6 sm:px-10 border-b border-[#DAD5D8]">
        <div className="max-w-[1060px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-5">
            <p className="text-[#D97706] font-bold text-sm tracking-wide uppercase">
              AICTE approved • RTU affiliated • NBA accredited 2012 to 2015
            </p>
            <h1 className="font-bricolage text-4xl sm:text-5xl lg:text-[62px] font-bold text-[#1C1B22] leading-[1.05] tracking-tight">
              Engineering education built for industry.
            </h1>
            <p className="text-[#4A4752] text-lg sm:text-xl max-w-[50ch] leading-relaxed">
              Diploma, undergraduate, postgraduate and doctoral programs at an A-graded institute in Jaipur, established in 2000.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <button
                onClick={onOpenEnquiry}
                className="bg-[#B3263A] hover:bg-[#8F1C2D] text-white font-bold py-3.5 px-6 rounded text-sm sm:text-base transition-colors shadow-xs"
              >
                Apply now
              </button>
              <Link
                to="/campus"
                className="inline-block border-2 border-[#1C1B22] text-[#1C1B22] hover:bg-[#1C1B22] hover:text-white font-bold py-3.5 px-6 rounded text-sm sm:text-base transition-colors"
              >
                Take a virtual tour
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-lg overflow-hidden shadow-lg border border-[#DAD5D8] group">
              <img
                src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=900&q=80"
                alt="RIET Jaipur Campus Building"
                className="w-full h-[340px] sm:h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C1B22]/90 via-[#1C1B22]/20 to-transparent flex flex-col justify-end p-6 text-white">
                <span className="inline-block bg-[#B3263A] text-white text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded w-max mb-2">
                  Established 2000
                </span>
                <p className="font-bricolage text-lg font-bold">
                  24+ Years of Engineering &amp; Technology Leadership
                </p>
                <p className="text-xs text-[#E8E6EC] mt-0.5">
                  Bhankrota, Ajmer Road, Jaipur • REAP Code 1025
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. RECOGNITION STRIP */}
      <Template4RankStrip />

      {/* 3. CONNECTED GRID: CORE PATHWAYS (Admissions, Courses, Placements, Virtual Tour) */}
      <section className="py-14 sm:py-20 px-6 sm:px-10 bg-white">
        <div className="max-w-[1060px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-[#DAD5D8]">
            <Link
              to="/admissions"
              className="p-8 bg-white border-r border-b border-[#DAD5D8] hover:bg-[#F6F3F4] transition-colors group block"
            >
              <GraduationCap className="w-8 h-8 text-[#B3263A] mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-bricolage text-xl font-bold text-[#1C1B22] mb-2 group-hover:text-[#B3263A] transition-colors">
                Admissions
              </h3>
              <p className="text-sm text-[#4A4752] leading-relaxed">
                B.Tech, lateral entry, M.Tech, MBA, MCA and more. REAP Code 1025.
              </p>
            </Link>

            <Link
              to="/courses"
              className="p-8 bg-white border-r border-b border-[#DAD5D8] hover:bg-[#F6F3F4] transition-colors group block"
            >
              <Award className="w-8 h-8 text-[#B3263A] mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-bricolage text-xl font-bold text-[#1C1B22] mb-2 group-hover:text-[#B3263A] transition-colors">
                Courses
              </h3>
              <p className="text-sm text-[#4A4752] leading-relaxed">
                Eight programs across engineering, architecture, design and management.
              </p>
            </Link>

            <Link
              to="/placements"
              className="p-8 bg-white border-r border-b border-[#DAD5D8] hover:bg-[#F6F3F4] transition-colors group block"
            >
              <Briefcase className="w-8 h-8 text-[#B3263A] mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-bricolage text-xl font-bold text-[#1C1B22] mb-2 group-hover:text-[#B3263A] transition-colors">
                Placements
              </h3>
              <p className="text-sm text-[#4A4752] leading-relaxed">
                Top recruiters, 88% placement track record, and dedicated T&amp;P training.
              </p>
            </Link>

            <Link
              to="/campus"
              className="p-8 bg-white border-r border-b border-[#DAD5D8] hover:bg-[#F6F3F4] transition-colors group block"
            >
              <Globe className="w-8 h-8 text-[#B3263A] mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-bricolage text-xl font-bold text-[#1C1B22] mb-2 group-hover:text-[#B3263A] transition-colors">
                Virtual tour
              </h3>
              <p className="text-sm text-[#4A4752] leading-relaxed">
                Explore computing labs, residential hostels, central library and campus life.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* 4. DEPARTMENTS HIGHLIGHT (ALT BACKGROUND) */}
      <section className="bg-[#F6F3F4] py-14 sm:py-20 px-6 sm:px-10 border-t border-b border-[#DAD5D8]">
        <div className="max-w-[1060px] mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#B3263A]">Academic Units</span>
              <h2 className="font-bricolage text-3xl sm:text-4xl font-bold text-[#1C1B22] mt-1">
                Departments
              </h2>
            </div>
            <Link
              to="/departments"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-[#B3263A] hover:underline"
            >
              <span>See all nine departments</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-[#DAD5D8]">
            <Link
              to="/department-detail"
              className="p-7 bg-white border-r border-b border-[#DAD5D8] hover:bg-[#FAF8F9] transition-colors group block"
            >
              <span className="inline-block text-[11px] font-bold px-2.5 py-0.5 rounded bg-[#F7DDE1] text-[#7A1626] mb-3">
                NBA Accredited
              </span>
              <h3 className="font-bricolage text-xl font-bold text-[#1C1B22] group-hover:text-[#B3263A] transition-colors mb-2">
                Computer Science &amp; Engineering
              </h3>
              <p className="text-sm text-[#4A4752] leading-relaxed">
                B.Tech and M.Tech. Established in 2000, NBA accredited with cutting-edge computing labs.
              </p>
            </Link>

            <Link
              to="/departments"
              className="p-7 bg-white border-r border-b border-[#DAD5D8] hover:bg-[#FAF8F9] transition-colors group block"
            >
              <span className="inline-block text-[11px] font-bold px-2.5 py-0.5 rounded bg-[#F7DDE1] text-[#7A1626] mb-3">
                New in 2024
              </span>
              <h3 className="font-bricolage text-xl font-bold text-[#1C1B22] group-hover:text-[#B3263A] transition-colors mb-2">
                Cyber Security
              </h3>
              <p className="text-sm text-[#4A4752] leading-relaxed">
                B.Tech degree approved by RTU Kota. Ethical hacking, CTF arena and network defense.
              </p>
            </Link>

            <Link
              to="/departments"
              className="p-7 bg-white border-r border-b border-[#DAD5D8] hover:bg-[#FAF8F9] transition-colors group block"
            >
              <span className="inline-block text-[11px] font-bold px-2.5 py-0.5 rounded bg-[#F7DDE1] text-[#7A1626] mb-3">
                New in 2024
              </span>
              <h3 className="font-bricolage text-xl font-bold text-[#1C1B22] group-hover:text-[#B3263A] transition-colors mb-2">
                Internet of Things (IoT)
              </h3>
              <p className="text-sm text-[#4A4752] leading-relaxed">
                B.Tech program approved by RTU Kota. Embedded controllers, sensor meshes &amp; robotics.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* 5. OUR RECRUITERS */}
      <section className="py-14 sm:py-20 px-6 sm:px-10 bg-white">
        <div className="max-w-[1060px] mx-auto">
          <div className="mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#B3263A]">Corporate Connect</span>
            <h2 className="font-bricolage text-3xl sm:text-4xl font-bold text-[#1C1B22] mt-1">
              Our recruiters
            </h2>
            <p className="text-sm text-[#4A4752] mt-1">
              Over 150+ marquee organizations recruit talent annually from RIET campus drives.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 border-t border-l border-[#DAD5D8]">
            {recruitersList.slice(0, 6).map((recruiter, idx) => (
              <div
                key={idx}
                className="p-6 bg-white border-r border-b border-[#DAD5D8] flex flex-col items-center justify-center text-center min-h-[120px] hover:bg-[#F6F3F4] transition-colors"
              >
                <span className="font-bricolage font-bold text-lg text-[#1C1B22]">
                  {recruiter.name}
                </span>
                <span className="text-[11px] text-[#7A1626] font-semibold mt-1">
                  {recruiter.avgPkg}
                </span>
                <span className="text-[10px] text-[#6E6A77] mt-0.5">
                  {recruiter.sector}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/placements"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#B3263A] hover:underline"
            >
              <span>View full placement report and hiring statistics</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. NEWS AND EVENTS (ALT BACKGROUND) */}
      <section className="bg-[#F6F3F4] py-14 sm:py-20 px-6 sm:px-10 border-t border-[#DAD5D8]">
        <div className="max-w-[1060px] mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#B3263A]">Campus Updates</span>
              <h2 className="font-bricolage text-3xl sm:text-4xl font-bold text-[#1C1B22] mt-1">
                News and events
              </h2>
            </div>
            <Link
              to="/news"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-[#B3263A] hover:underline"
            >
              <span>View all campus news</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-[#DAD5D8]">
            {latestNews.slice(0, 3).map((item) => (
              <div
                key={item.id}
                className="p-6 bg-white border-r border-b border-[#DAD5D8] hover:bg-[#FAF8F9] transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="h-44 rounded overflow-hidden mb-4 border border-[#DAD5D8]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <span className="inline-block text-[11px] font-bold px-2 py-0.5 rounded bg-[#F7DDE1] text-[#7A1626] mb-2">
                    {item.category} • {item.month} {item.date}, {item.year}
                  </span>
                  <h3 className="font-bricolage text-lg font-bold text-[#1C1B22] mb-2 leading-snug line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#4A4752] leading-relaxed line-clamp-3">
                    {item.desc}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-[#DAD5D8]/60">
                  <Link
                    to="/news"
                    className="text-xs font-bold text-[#B3263A] hover:underline inline-flex items-center gap-1"
                  >
                    <span>Read details</span>
                    <ChevronRight className="w-3.5 h-3.5" />
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

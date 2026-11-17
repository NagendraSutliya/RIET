import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, GraduationCap, Briefcase, Globe, ChevronRight } from 'lucide-react';
import Template5RankStrip from '../components/Template5RankStrip';
import { recruitersList, latestNews } from '../../../data/collegeData';

export default function Template5Home({ onOpenEnquiry }) {
  return (
    <div className="w-full font-sans text-[#16262B]">
      {/* 1. HERO SECTION (Teal Background with Arched Photo) */}
      <section className="bg-[#0F4C5C] text-white py-16 sm:py-24 px-6 sm:px-10">
        <div className="max-w-[1180px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <p className="text-[#FFB26B] font-bold text-xs uppercase tracking-wider">
              AICTE approved • RTU affiliated • NBA accredited 2012 to 2015
            </p>
            <h1 className="font-fraunces text-4xl sm:text-5xl lg:text-[58px] font-bold text-white leading-[1.08] tracking-tight">
              Engineering education built for industry.
            </h1>
            <p className="text-[#D5E8EC] text-lg sm:text-xl max-w-[50ch] leading-relaxed">
              Diploma, undergraduate, postgraduate and doctoral programs at an A-graded institute in Jaipur, established in 2000.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <button
                onClick={onOpenEnquiry}
                className="bg-[#F58B3A] hover:bg-[#FFB26B] text-[#0A3340] font-bold py-3.5 px-7 rounded-full text-sm sm:text-base transition-colors shadow-xs"
              >
                Apply now
              </button>
              <Link
                to="/campus"
                className="border-2 border-white text-white hover:bg-white hover:text-[#0F4C5C] font-bold py-3.5 px-7 rounded-full text-sm sm:text-base transition-colors"
              >
                Take a virtual tour
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-[380px] h-[400px] sm:h-[440px] rounded-t-[200px] rounded-b-[24px] overflow-hidden shadow-2xl border-4 border-white/20 relative group">
              <img
                src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=900&q=80"
                alt="RIET Jaipur Main Campus"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A3340]/90 via-transparent to-transparent flex flex-col justify-end p-6 text-white text-center">
                <span className="font-fraunces text-xl font-bold">24+ Years of Excellence</span>
                <span className="text-xs text-[#D5E8EC] mt-1">Bhankrota, Ajmer Road, Jaipur</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. RECOGNITION STRIP */}
      <Template5RankStrip />

      {/* 3. FOUR CORE PATHWAYS (Soft Pale Teal Cards, rounded-[22px]) */}
      <section className="py-16 sm:py-20 px-6 sm:px-10 bg-white">
        <div className="max-w-[1180px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link
              to="/admissions"
              className="p-8 bg-[#EEF4F5] rounded-[22px] hover:bg-[#DDEAED] transition-all group flex flex-col justify-between"
            >
              <div>
                <GraduationCap className="w-8 h-8 text-[#0F4C5C] mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-fraunces text-2xl font-bold text-[#0A3340] mb-2">
                  Admissions
                </h3>
                <p className="text-sm text-[#3C5961] leading-relaxed">
                  B.Tech, lateral entry, M.Tech, MBA, MCA and more. REAP Code 1025.
                </p>
              </div>
              <div className="pt-4 text-xs font-bold text-[#0F4C5C] inline-flex items-center gap-1">
                <span>View admissions</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </Link>

            <Link
              to="/courses"
              className="p-8 bg-[#EEF4F5] rounded-[22px] hover:bg-[#DDEAED] transition-all group flex flex-col justify-between"
            >
              <div>
                <Award className="w-8 h-8 text-[#0F4C5C] mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-fraunces text-2xl font-bold text-[#0A3340] mb-2">
                  Courses
                </h3>
                <p className="text-sm text-[#3C5961] leading-relaxed">
                  Eight programs across engineering, architecture, design and management.
                </p>
              </div>
              <div className="pt-4 text-xs font-bold text-[#0F4C5C] inline-flex items-center gap-1">
                <span>Explore programs</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </Link>

            <Link
              to="/placements"
              className="p-8 bg-[#EEF4F5] rounded-[22px] hover:bg-[#DDEAED] transition-all group flex flex-col justify-between"
            >
              <div>
                <Briefcase className="w-8 h-8 text-[#0F4C5C] mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-fraunces text-2xl font-bold text-[#0A3340] mb-2">
                  Placements
                </h3>
                <p className="text-sm text-[#3C5961] leading-relaxed">
                  Recruiters, statistics and the dedicated Training &amp; Placement Cell.
                </p>
              </div>
              <div className="pt-4 text-xs font-bold text-[#0F4C5C] inline-flex items-center gap-1">
                <span>Placement records</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </Link>

            <Link
              to="/campus"
              className="p-8 bg-[#EEF4F5] rounded-[22px] hover:bg-[#DDEAED] transition-all group flex flex-col justify-between"
            >
              <div>
                <Globe className="w-8 h-8 text-[#0F4C5C] mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-fraunces text-2xl font-bold text-[#0A3340] mb-2">
                  Virtual tour
                </h3>
                <p className="text-sm text-[#3C5961] leading-relaxed">
                  Explore laboratories, residential hostels and lush campus life online.
                </p>
              </div>
              <div className="pt-4 text-xs font-bold text-[#0F4C5C] inline-flex items-center gap-1">
                <span>Take tour</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 4. DEPARTMENTS HIGHLIGHT (ALT BACKGROUND #F2F6F7) */}
      <section className="bg-[#F2F6F7] py-16 sm:py-20 px-6 sm:px-10 border-t border-[#D5E3E6]">
        <div className="max-w-[1180px] mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#F58B3A]">
                Disciplines of Study
              </span>
              <h2 className="font-fraunces text-3xl sm:text-4xl font-bold text-[#0A3340] mt-1">
                Departments
              </h2>
            </div>
            <Link
              to="/departments"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0F4C5C] hover:underline"
            >
              <span>See all nine departments</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              to="/department-detail"
              className="p-8 bg-white rounded-[22px] border border-[#D5E3E6] hover:shadow-md transition-all group block"
            >
              <span className="inline-block text-[11px] font-bold px-3 py-1 rounded-full bg-[#FFE3CC] text-[#7A3300] mb-3">
                NBA Accredited
              </span>
              <h3 className="font-fraunces text-2xl font-bold text-[#0A3340] group-hover:text-[#0F4C5C] transition-colors mb-2">
                Computer Science &amp; Engineering
              </h3>
              <p className="text-sm text-[#3C5961] leading-relaxed">
                B.Tech and M.Tech. Established in 2000, NBA accredited with high-performance computing clusters.
              </p>
            </Link>

            <Link
              to="/departments"
              className="p-8 bg-white rounded-[22px] border border-[#D5E3E6] hover:shadow-md transition-all group block"
            >
              <span className="inline-block text-[11px] font-bold px-3 py-1 rounded-full bg-[#FFE3CC] text-[#7A3300] mb-3">
                New in 2024
              </span>
              <h3 className="font-fraunces text-2xl font-bold text-[#0A3340] group-hover:text-[#0F4C5C] transition-colors mb-2">
                Cyber Security
              </h3>
              <p className="text-sm text-[#3C5961] leading-relaxed">
                B.Tech degree approved by RTU Kota. Defensive systems, ethical hacking and digital forensics.
              </p>
            </Link>

            <Link
              to="/departments"
              className="p-8 bg-white rounded-[22px] border border-[#D5E3E6] hover:shadow-md transition-all group block"
            >
              <span className="inline-block text-[11px] font-bold px-3 py-1 rounded-full bg-[#FFE3CC] text-[#7A3300] mb-3">
                New in 2024
              </span>
              <h3 className="font-fraunces text-2xl font-bold text-[#0A3340] group-hover:text-[#0F4C5C] transition-colors mb-2">
                Internet of Things (IoT)
              </h3>
              <p className="text-sm text-[#3C5961] leading-relaxed">
                B.Tech program approved by RTU Kota. Embedded controllers, sensor meshes &amp; robotics.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* 5. OUR RECRUITERS */}
      <section className="py-16 sm:py-20 px-6 sm:px-10 bg-white">
        <div className="max-w-[1180px] mx-auto">
          <div className="mb-10 text-center max-w-xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-[#F58B3A]">
              Corporate Footprint
            </span>
            <h2 className="font-fraunces text-3xl sm:text-4xl font-bold text-[#0A3340] mt-1">
              Our recruiters
            </h2>
            <p className="text-sm text-[#3C5961] mt-2">
              Over 150 top technology giants, banks, and multinational engineering leaders recruit from RIET.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {recruitersList.slice(0, 6).map((recruiter, idx) => (
              <div
                key={idx}
                className="p-6 bg-[#EEF4F5] rounded-[22px] flex flex-col items-center justify-center text-center min-h-[120px] hover:bg-[#DDEAED] transition-colors"
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

      {/* 6. NEWS AND EVENTS (ALT BACKGROUND) */}
      <section className="bg-[#F2F6F7] py-16 sm:py-20 px-6 sm:px-10 border-t border-[#D5E3E6]">
        <div className="max-w-[1180px] mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#F58B3A]">
                Latest Updates
              </span>
              <h2 className="font-fraunces text-3xl sm:text-4xl font-bold text-[#0A3340] mt-1">
                News and events
              </h2>
            </div>
            <Link
              to="/news"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0F4C5C] hover:underline"
            >
              <span>View all campus news</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {latestNews.slice(0, 3).map((item) => (
              <div
                key={item.id}
                className="p-6 bg-white rounded-[22px] border border-[#D5E3E6] hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="h-44 rounded-[16px] overflow-hidden mb-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <span className="inline-block text-[11px] font-bold px-3 py-0.5 rounded-full bg-[#FFE3CC] text-[#7A3300] mb-2">
                    {item.category} • {item.month} {item.date}, {item.year}
                  </span>
                  <h3 className="font-fraunces text-lg font-bold text-[#0A3340] mb-2 leading-snug line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#3C5961] leading-relaxed line-clamp-3">
                    {item.desc}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-[#D5E3E6]">
                  <Link
                    to="/news"
                    className="text-xs font-bold text-[#0F4C5C] hover:underline inline-flex items-center gap-1"
                  >
                    <span>Read more</span>
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

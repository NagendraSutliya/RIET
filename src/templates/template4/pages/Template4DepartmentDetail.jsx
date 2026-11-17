import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Template4PageHeader from '../components/Template4PageHeader';
import { departmentData } from '../../../data/collegeData';
import { CheckCircle2, FlaskConical, BookOpen, Award, Mail, ArrowRight } from 'lucide-react';

export default function Template4DepartmentDetail({ onOpenEnquiry }) {
  const { deptId } = useParams();

  // Find department or fallback to CSE
  const currentDeptKey = deptId && departmentData[deptId] ? deptId : 'cse';
  const dept = departmentData[currentDeptKey] || departmentData.cse;

  return (
    <div className="w-full font-manrope">
      {/* 1. PAGE HEADER */}
      <Template4PageHeader
        title={dept.name}
        desc={`${dept.degree}. Established in ${dept.established || '2000'} and NBA accredited from 2011 to 2014.`}
        breadcrumbs={[
          { label: 'Departments', to: '/departments' },
          { label: dept.code || dept.name }
        ]}
      />

      {/* 2. ABOUT THE DEPARTMENT (Two-Column) */}
      <section className="py-14 sm:py-20 px-6 sm:px-10 bg-white">
        <div className="max-w-[1060px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Vision, Mission & Programs */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#B3263A]">
                Academic Excellence
              </span>
              <h2 className="font-bricolage text-3xl font-bold text-[#1C1B22] mt-1 mb-3">
                About the department
              </h2>
              <p className="text-base text-[#4A4752] leading-relaxed">
                {dept.overview}
              </p>
            </div>

            <div className="p-5 bg-[#F6F3F4] rounded border border-[#DAD5D8] space-y-2">
              <h4 className="font-bricolage font-bold text-base text-[#1C1B22]">
                Department Vision
              </h4>
              <p className="text-xs text-[#4A4752] leading-relaxed">
                {dept.vision}
              </p>
            </div>

            <div>
              <h4 className="font-bricolage font-bold text-base text-[#1C1B22] mb-2">
                Mission Objectives
              </h4>
              <ul className="space-y-2">
                {dept.mission.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-[#4A4752]">
                    <CheckCircle2 className="w-4 h-4 text-[#B3263A] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-2">
              <h3 className="font-bricolage text-xl font-bold text-[#1C1B22] mb-2">
                Programs Offered
              </h3>
              <p className="text-sm text-[#4A4752] leading-relaxed">
                <strong>{dept.degree}</strong> • Intake: {dept.intake} • Affiliated to RTU Kota &amp; Approved by AICTE.
              </p>
              <div className="mt-4 flex gap-3">
                <button
                  onClick={onOpenEnquiry}
                  className="bg-[#B3263A] hover:bg-[#8F1C2D] text-white font-bold py-2.5 px-5 rounded text-xs transition-colors shadow-xs"
                >
                  Apply for {dept.code}
                </button>
                <Link
                  to="/courses"
                  className="border border-[#1C1B22] text-[#1C1B22] hover:bg-[#1C1B22] hover:text-white font-bold py-2.5 px-5 rounded text-xs transition-colors"
                >
                  View curriculum
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: Head of Department */}
          <div className="lg:col-span-5">
            <div className="p-6 bg-white rounded border border-[#DAD5D8] shadow-sm">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#B3263A] block mb-1">
                Department Leadership
              </span>
              <h3 className="font-bricolage text-2xl font-bold text-[#1C1B22] mb-4">
                Head of department
              </h3>

              <div className="h-56 rounded overflow-hidden mb-4 border border-[#DAD5D8]">
                <img
                  src={dept.hodImage}
                  alt={dept.hodName}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="font-bricolage font-bold text-lg text-[#1C1B22]">
                {dept.hodName}
              </div>
              <div className="text-xs text-[#B3263A] font-semibold mb-2">
                {dept.hodQualification}
              </div>
              <p className="text-xs text-[#4A4752] leading-relaxed italic bg-[#F6F3F4] p-3 rounded border border-[#DAD5D8]/60">
                "{dept.hodMessage}"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FACULTY SECTION (Alt Background & Connected Grid) */}
      <section className="bg-[#F6F3F4] py-14 sm:py-20 px-6 sm:px-10 border-t border-[#DAD5D8]">
        <div className="max-w-[1060px] mx-auto">
          <div className="mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#B3263A]">
              Eminent Mentors
            </span>
            <h2 className="font-bricolage text-3xl sm:text-4xl font-bold text-[#1C1B22] mt-1">
              Faculty
            </h2>
            <p className="text-sm text-[#4A4752]">
              Distinguished professors, research mentors, and industry consultants driving student success.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-[#DAD5D8]">
            {dept.faculty.map((f, idx) => (
              <div
                key={idx}
                className="p-6 bg-white border-r border-b border-[#DAD5D8] hover:bg-[#FAF8F9] transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="h-44 rounded overflow-hidden mb-4 border border-[#DAD5D8]">
                    <img
                      src={f.img}
                      alt={f.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <b className="font-bricolage text-base text-[#1C1B22] block">
                    {f.name}
                  </b>
                  <p className="text-xs text-[#B3263A] font-bold mt-0.5">
                    {f.role}
                  </p>
                  <p className="text-[11px] text-[#6E6A77] mt-1">
                    {f.degree}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. LABS AND RESEARCH (Connected Grid) */}
      <section className="py-14 sm:py-20 px-6 sm:px-10 bg-white border-t border-[#DAD5D8]">
        <div className="max-w-[1060px] mx-auto">
          <div className="mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#B3263A]">
              Infrastructure &amp; Innovation
            </span>
            <h2 className="font-bricolage text-3xl sm:text-4xl font-bold text-[#1C1B22] mt-1">
              Labs and research
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-[#DAD5D8]">
            {dept.labs.map((lab, idx) => (
              <div
                key={idx}
                className="p-7 bg-white border-r border-b border-[#DAD5D8] hover:bg-[#F6F3F4] transition-colors flex flex-col justify-between"
              >
                <div>
                  <FlaskConical className="w-6 h-6 text-[#B3263A] mb-3" />
                  <h3 className="font-bricolage text-xl font-bold text-[#1C1B22] mb-2">
                    {lab.name}
                  </h3>
                  <p className="text-xs text-[#7A1626] font-semibold mb-2">
                    {lab.systems}
                  </p>
                  <p className="text-xs text-[#4A4752] leading-relaxed">
                    <strong>Focus:</strong> {lab.purpose}
                  </p>
                </div>
              </div>
            ))}

            {/* Publications Card */}
            <div className="p-7 bg-white border-r border-b border-[#DAD5D8] hover:bg-[#F6F3F4] transition-colors flex flex-col justify-between">
              <div>
                <BookOpen className="w-6 h-6 text-[#B3263A] mb-3" />
                <h3 className="font-bricolage text-xl font-bold text-[#1C1B22] mb-2">
                  Publications
                </h3>
                <p className="text-xs text-[#7A1626] font-semibold mb-2">
                  IEEE, Springer &amp; Scopus Indexed
                </p>
                <p className="text-xs text-[#4A4752] leading-relaxed">
                  Over 120+ peer-reviewed international conference and journal papers authored by departmental faculty and student research fellows.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

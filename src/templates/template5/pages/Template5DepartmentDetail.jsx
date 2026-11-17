import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Template5PageHeader from '../components/Template5PageHeader';
import { departmentData } from '../../../data/collegeData';
import { CheckCircle2, FlaskConical, BookOpen, ArrowRight } from 'lucide-react';

export default function Template5DepartmentDetail({ onOpenEnquiry }) {
  const { deptId } = useParams();
  const currentDeptKey = deptId && departmentData[deptId] ? deptId : 'cse';
  const dept = departmentData[currentDeptKey] || departmentData.cse;

  return (
    <div className="w-full font-sans text-[#16262B]">
      <Template5PageHeader
        title={dept.name}
        desc={`${dept.degree}. Established in ${dept.established || '2000'} and NBA accredited from 2011 to 2014.`}
        breadcrumbs={[
          { label: 'Departments', to: '/departments' },
          { label: dept.code || dept.name }
        ]}
      />

      {/* Two Column: Overview & HOD */}
      <section className="py-16 sm:py-20 px-6 sm:px-10 bg-white">
        <div className="max-w-[1180px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#F58B3A]">
                Academic Excellence
              </span>
              <h2 className="font-fraunces text-3xl font-bold text-[#0A3340] mt-1 mb-3">
                About the department
              </h2>
              <p className="text-base text-[#3C5961] leading-relaxed">
                {dept.overview}
              </p>
            </div>

            <div className="p-6 bg-[#EEF4F5] rounded-[22px] border border-[#D5E3E6] space-y-2">
              <h4 className="font-fraunces font-bold text-lg text-[#0A3340]">
                Department Vision
              </h4>
              <p className="text-xs text-[#3C5961] leading-relaxed">
                {dept.vision}
              </p>
            </div>

            <div>
              <h4 className="font-fraunces font-bold text-lg text-[#0A3340] mb-3">
                Mission Objectives
              </h4>
              <ul className="space-y-2.5">
                {dept.mission.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-[#3C5961]">
                    <CheckCircle2 className="w-4 h-4 text-[#0F4C5C] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-2">
              <h3 className="font-fraunces text-2xl font-bold text-[#0A3340] mb-2">
                Programs Offered
              </h3>
              <p className="text-sm text-[#3C5961] leading-relaxed">
                <strong>{dept.degree}</strong> • Intake: {dept.intake} • Affiliated to RTU Kota.
              </p>
              <div className="mt-4 flex gap-3">
                <button
                  onClick={onOpenEnquiry}
                  className="bg-[#F58B3A] hover:bg-[#FFB26B] text-[#0A3340] font-bold py-2.5 px-6 rounded-full text-xs transition-colors shadow-xs"
                >
                  Apply for {dept.code}
                </button>
                <Link
                  to="/courses"
                  className="border border-[#0F4C5C] text-[#0F4C5C] hover:bg-[#0F4C5C] hover:text-white font-bold py-2.5 px-6 rounded-full text-xs transition-colors"
                >
                  View curriculum
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: Head of Department */}
          <div className="lg:col-span-5">
            <div className="p-8 bg-[#EEF4F5] rounded-[22px] border border-[#D5E3E6]">
              <span className="text-xs font-bold uppercase tracking-wider text-[#F58B3A] block mb-1">
                Department Leadership
              </span>
              <h3 className="font-fraunces text-2xl font-bold text-[#0A3340] mb-4">
                Head of department
              </h3>

              <div className="h-56 rounded-[16px] overflow-hidden mb-4 border border-[#D5E3E6]">
                <img
                  src={dept.hodImage}
                  alt={dept.hodName}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="font-fraunces font-bold text-xl text-[#0A3340]">
                {dept.hodName}
              </div>
              <div className="text-xs text-[#F58B3A] font-bold mb-3">
                {dept.hodQualification}
              </div>
              <p className="text-xs text-[#3C5961] leading-relaxed italic bg-white p-4 rounded-xl border border-[#D5E3E6]">
                "{dept.hodMessage}"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Section */}
      <section className="bg-[#F2F6F7] py-16 sm:py-20 px-6 sm:px-10 border-t border-[#D5E3E6]">
        <div className="max-w-[1180px] mx-auto">
          <div className="mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#F58B3A]">
              Eminent Mentors
            </span>
            <h2 className="font-fraunces text-3xl sm:text-4xl font-bold text-[#0A3340] mt-1">
              Faculty
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {dept.faculty.map((f, idx) => (
              <div
                key={idx}
                className="p-6 bg-white rounded-[22px] border border-[#D5E3E6] hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="h-44 rounded-[16px] overflow-hidden mb-4">
                    <img
                      src={f.img}
                      alt={f.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <b className="font-fraunces text-lg text-[#0A3340] block">
                    {f.name}
                  </b>
                  <p className="text-xs text-[#0F4C5C] font-bold mt-0.5">
                    {f.role}
                  </p>
                  <p className="text-[11px] text-[#3C5961] mt-1">
                    {f.degree}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Labs and Research */}
      <section className="py-16 sm:py-20 px-6 sm:px-10 bg-white border-t border-[#D5E3E6]">
        <div className="max-w-[1180px] mx-auto">
          <div className="mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#F58B3A]">
              Infrastructure &amp; Innovation
            </span>
            <h2 className="font-fraunces text-3xl sm:text-4xl font-bold text-[#0A3340] mt-1">
              Labs and research
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dept.labs.map((lab, idx) => (
              <div
                key={idx}
                className="p-8 bg-[#EEF4F5] rounded-[22px] border border-[#D5E3E6] hover:bg-[#DDEAED] transition-all flex flex-col justify-between"
              >
                <div>
                  <FlaskConical className="w-7 h-7 text-[#0F4C5C] mb-3" />
                  <h3 className="font-fraunces text-2xl font-bold text-[#0A3340] mb-2">
                    {lab.name}
                  </h3>
                  <p className="text-xs text-[#F58B3A] font-bold mb-2">
                    {lab.systems}
                  </p>
                  <p className="text-xs text-[#3C5961] leading-relaxed">
                    <strong>Focus:</strong> {lab.purpose}
                  </p>
                </div>
              </div>
            ))}

            <div className="p-8 bg-[#EEF4F5] rounded-[22px] border border-[#D5E3E6] hover:bg-[#DDEAED] transition-all flex flex-col justify-between">
              <div>
                <BookOpen className="w-7 h-7 text-[#0F4C5C] mb-3" />
                <h3 className="font-fraunces text-2xl font-bold text-[#0A3340] mb-2">
                  Publications
                </h3>
                <p className="text-xs text-[#F58B3A] font-bold mb-2">
                  IEEE, Springer &amp; Scopus Indexed
                </p>
                <p className="text-xs text-[#3C5961] leading-relaxed">
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

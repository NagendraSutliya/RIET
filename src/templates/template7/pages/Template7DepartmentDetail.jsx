import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Template7PageHeader from '../components/Template7PageHeader';
import { departmentData } from '../../../data/collegeData';
import { CheckCircle2, FlaskConical, BookOpen, ArrowRight } from 'lucide-react';

export default function Template7DepartmentDetail({ onOpenEnquiry }) {
  const { deptId } = useParams();
  const currentDeptKey = deptId && departmentData[deptId] ? deptId : 'cse';
  const dept = departmentData[currentDeptKey] || departmentData.cse;

  return (
    <div className="w-full font-sans text-[#2a2a2a] bg-white">
      <Template7PageHeader
        title={dept.name}
        desc={`${dept.degree} • Established in ${dept.established || '2000'} • NBA Accredited (2011-14) • Affiliated to RTU Kota.`}
        breadcrumbs={[
          { label: 'Departments', to: '/departments' },
          { label: dept.code || dept.name }
        ]}
      />

      {/* Main Department Overview */}
      <section className="py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#d2973b] block mb-2">
                Department Overview
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-playfair text-[#192f59]">
                About {dept.name}
              </h2>
              <div className="h-1 w-14 bg-[#d2973b] my-4 rounded-full" />
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                {dept.overview}
              </p>
            </div>

            {/* Vision & Mission */}
            <div className="p-6 bg-[#f8f9fa] rounded-lg border-l-4 border-[#d2973b] space-y-2">
              <h4 className="font-bold font-playfair text-lg text-[#192f59]">
                Department Vision
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {dept.vision}
              </p>
            </div>

            <div>
              <h4 className="font-bold font-playfair text-lg text-[#192f59] mb-3">
                Mission Objectives
              </h4>
              <ul className="space-y-2.5">
                {dept.mission.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-[#d2973b] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Programs Offered in Department */}
            <div className="pt-4 border-t border-slate-200">
              <h3 className="text-xl font-bold font-playfair text-[#192f59] mb-2">
                Degree Offerings &amp; Intake
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                <strong className="text-[#192f59]">{dept.degree}</strong> • Intake Capacity: {dept.intake} • Affiliated to RTU Kota.
              </p>
              <div className="mt-4 flex flex-wrap gap-4">
                <button
                  onClick={onOpenEnquiry}
                  className="bg-[#192f59] hover:bg-[#d2973b] text-white font-bold py-3 px-6 rounded text-xs uppercase tracking-wider transition-colors shadow-sm"
                >
                  Apply For {dept.code || 'Program'}
                </button>
                <Link
                  to="/courses"
                  className="border border-[#192f59] text-[#192f59] hover:bg-[#192f59] hover:text-white font-bold py-3 px-6 rounded text-xs uppercase tracking-wider transition-colors"
                >
                  View Curricular Syllabi
                </Link>
              </div>
            </div>
          </div>

          {/* Right: HOD Leadership Card */}
          <div className="lg:col-span-5">
            <div className="p-7 bg-white rounded-lg border border-slate-200 shadow-md">
              <span className="text-xs font-bold uppercase tracking-widest text-[#d2973b] block mb-1">
                Faculty Leadership
              </span>
              <h3 className="text-2xl font-bold font-playfair text-[#192f59] mb-4">
                Head of Department
              </h3>

              <div className="h-60 rounded-md overflow-hidden mb-4 border border-slate-200">
                <img
                  src={dept.hodImage}
                  alt={dept.hodName}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="font-bold font-playfair text-xl text-[#192f59]">
                {dept.hodName}
              </div>
              <div className="text-xs text-[#d2973b] font-bold mb-3">
                {dept.hodQualification}
              </div>
              <p className="text-xs text-slate-600 leading-relaxed italic bg-[#f8f9fa] p-4 rounded border border-slate-200">
                "{dept.hodMessage}"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Directory */}
      <section className="bg-[#f7f8fa] py-16 sm:py-24 px-4 sm:px-6 border-t border-b border-slate-200">
        <div className="max-w-[1240px] mx-auto">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#d2973b] block mb-1">
              Mentors &amp; Scholars
            </span>
            <h2 className="text-3xl font-bold font-playfair text-[#192f59]">
              Department Faculty Members
            </h2>
            <div className="h-1 w-14 bg-[#d2973b] my-3 rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {dept.faculty.map((f, idx) => (
              <div
                key={idx}
                className="p-5 bg-white rounded-lg border border-slate-200 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="h-48 rounded overflow-hidden mb-4 border border-slate-200">
                    <img
                      src={f.img}
                      alt={f.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <b className="text-base font-playfair text-[#192f59] block group-hover:text-[#d2973b] transition-colors">
                    {f.name}
                  </b>
                  <p className="text-xs text-[#d2973b] font-semibold mt-0.5">
                    {f.role}
                  </p>
                  <p className="text-[11px] text-slate-500 mt-1">
                    {f.degree}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Laboratories & Research Pods */}
      <section className="py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-[1240px] mx-auto">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#d2973b] block mb-1">
              Infrastructure &amp; Innovation
            </span>
            <h2 className="text-3xl font-bold font-playfair text-[#192f59]">
              Specialized Laboratories &amp; Research Centers
            </h2>
            <div className="h-1 w-14 bg-[#d2973b] my-3 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dept.labs.map((lab, idx) => (
              <div
                key={idx}
                className="p-7 bg-white rounded-lg border border-slate-200 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <FlaskConical className="w-8 h-8 text-[#192f59] mb-3" />
                  <h3 className="text-xl font-bold font-playfair text-[#192f59] mb-1">
                    {lab.name}
                  </h3>
                  <p className="text-xs font-bold text-[#d2973b] mb-3">
                    {lab.systems}
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    <strong>Focus:</strong> {lab.purpose}
                  </p>
                </div>
              </div>
            ))}

            <div className="p-7 bg-white rounded-lg border border-slate-200 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <BookOpen className="w-8 h-8 text-[#192f59] mb-3" />
                <h3 className="text-xl font-bold font-playfair text-[#192f59] mb-1">
                  Research Publications
                </h3>
                <p className="text-xs font-bold text-[#d2973b] mb-3">
                  IEEE, Springer &amp; Elsevier Indexed
                </p>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Over 120+ peer-reviewed international conference and journal papers authored by departmental faculty and research scholars.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

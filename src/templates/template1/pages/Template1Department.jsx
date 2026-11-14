import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Cpu, Award, BookOpen, Layers, Users, ShieldCheck, ArrowRight, CheckCircle2, Search, Download, Sparkles, School, ChevronDown, ChevronUp } from 'lucide-react';
import { departmentData } from '../../../data/collegeData';

export default function Template1Department({ onOpenEnquiry, onOpenDocument }) {
  const { deptId } = useParams();
  const currentKey = (deptId && departmentData[deptId.toLowerCase()]) ? deptId.toLowerCase() : 'cse';
  const dept = departmentData[currentKey] || departmentData.cse;

  const [activeTab, setActiveTab] = useState('overview');
  const [facultySearch, setFacultySearch] = useState('');
  const [openCurriculumIndex, setOpenCurriculumIndex] = useState(0);

  const allDepts = Object.keys(departmentData).map(k => departmentData[k]);

  const filteredFaculty = dept.faculty.filter(f =>
    f.name.toLowerCase().includes(facultySearch.toLowerCase()) ||
    f.role.toLowerCase().includes(facultySearch.toLowerCase()) ||
    f.degree.toLowerCase().includes(facultySearch.toLowerCase())
  );

  return (
    <div className="bg-white min-h-screen">
      {/* Department Hero */}
      <div className="bg-gradient-to-r from-riet-navy-dark via-riet-navy to-riet-navy-light text-white py-14 px-4 border-b border-riet-line relative overflow-hidden">
        <div className="absolute right-0 top-0 w-96 h-96 bg-riet-gold/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-wrap items-center gap-2 text-xs font-bold text-riet-gold uppercase tracking-wider mb-2">
            <Link to="/academics" className="hover:underline">Academics</Link>
            <span>/</span>
            <span>Departments</span>
            <span>/</span>
            <span className="text-white">{dept.code}</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black tracking-tight text-white">
                {dept.name}
              </h1>
              <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-2xl">
                {dept.degree} • Approved Intake: {dept.intake} • Estd. {dept.established} • Affiliated to RTU Kota
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={onOpenEnquiry}
                className="bg-riet-gold hover:bg-riet-gold-hover text-riet-navy font-black px-6 py-3 rounded-xl text-xs shadow-lift transition-all hover:scale-105"
              >
                Apply for {dept.code} ↗
              </button>
              <button
                onClick={() => onOpenDocument && onOpenDocument(`${dept.name} Scheme & Syllabus 2026`)}
                className="bg-white/10 hover:bg-white/20 text-white font-bold px-4 py-3 rounded-xl text-xs transition-colors border border-white/20 flex items-center gap-1.5"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Syllabus</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Department Switcher Strip */}
      <div className="bg-slate-100 border-b border-slate-200 py-2.5 px-4 overflow-x-auto">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs font-semibold">
          <span className="text-slate-500 uppercase tracking-wider text-[10px] font-bold shrink-0 mr-2">
            Select Department:
          </span>
          <div className="flex items-center gap-1.5">
            {allDepts.map((d) => (
              <Link
                key={d.id}
                to={`/departments/${d.id}`}
                className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-all ${
                  d.id === currentKey
                    ? 'bg-riet-navy text-riet-gold font-bold shadow-sm'
                    : 'bg-white text-slate-700 hover:bg-slate-200'
                }`}
              >
                {d.code}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10 space-y-12">
        {/* Department Interactive Tabs Bar */}
        <div className="flex border-b border-slate-200 overflow-x-auto text-xs sm:text-sm font-bold text-slate-600 gap-2">
          {[
            { id: 'overview', label: 'Overview & Vision' },
            { id: 'labs', label: `Labs & Infrastructure (${dept.labs.length})` },
            { id: 'faculty', label: `Faculty Directory (${dept.faculty.length})` },
            { id: 'curriculum', label: 'Semester Curriculum' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-3 px-4 border-b-2 whitespace-nowrap transition-all ${
                activeTab === tab.id
                  ? 'border-riet-navy text-riet-navy font-black bg-blue-50/50 rounded-t-lg'
                  : 'border-transparent hover:text-riet-navy hover:bg-slate-50'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab 1: Overview & Vision */}
        {activeTab === 'overview' && (
          <div className="space-y-12 animate-fade-in">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-4">
                <span className="text-xs font-bold text-riet-gold uppercase tracking-wider">
                  Academic Focus
                </span>
                <h2 className="text-2xl sm:text-3xl font-heading font-black text-riet-navy">
                  Ideas Become Intelligent Solutions
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {dept.overview}
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  The curriculum blends foundational principles with emerging industry paradigms, rigorous practical lab sessions, hackathons, and research publications.
                </p>

                <div className="grid grid-cols-3 gap-3 pt-2">
                  <div className="p-3.5 rounded-xl bg-riet-paper border border-slate-200">
                    <span className="block font-heading font-black text-xl text-riet-navy">{dept.intake}</span>
                    <span className="text-[11px] text-slate-500 font-medium">Approved Intake</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-riet-paper border border-slate-200">
                    <span className="block font-heading font-black text-xl text-riet-navy">100%</span>
                    <span className="text-[11px] text-slate-500 font-medium">Placement Guidance</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-riet-paper border border-slate-200">
                    <span className="block font-heading font-black text-xl text-riet-navy">{dept.labs.length} Labs</span>
                    <span className="text-[11px] text-slate-500 font-medium">Specialized Facilities</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 rounded-2xl overflow-hidden shadow-lift border border-slate-200">
                <img
                  src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=800&q=80"
                  alt={dept.name}
                  className="w-full h-80 object-cover"
                />
              </div>
            </div>

            {/* Vision & Mission of Department */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-riet-paper border border-slate-200 space-y-2">
                <h3 className="font-heading font-black text-lg text-riet-navy flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-riet-gold"></span>
                  <span>Department Vision</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {dept.vision}
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-riet-paper border border-slate-200 space-y-2">
                <h3 className="font-heading font-black text-lg text-riet-navy flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-riet-gold"></span>
                  <span>Department Mission</span>
                </h3>
                <ul className="text-xs sm:text-sm text-slate-600 space-y-1.5">
                  {dept.mission.map((m, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{m}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* HOD Message Box */}
            <div className="bg-gradient-to-br from-riet-paper to-white rounded-2xl p-8 border border-slate-200 max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 shadow-sm">
              <img
                src={dept.hodImage}
                alt={dept.hodName}
                className="w-32 h-32 rounded-2xl object-cover border-2 border-riet-gold shadow-md shrink-0"
              />
              <div className="space-y-3 text-center md:text-left">
                <span className="text-[11px] font-bold text-riet-gold uppercase tracking-wider block">
                  Head of Department Message
                </span>
                <blockquote className="text-sm text-slate-700 leading-relaxed italic">
                  "{dept.hodMessage}"
                </blockquote>
                <div>
                  <h4 className="font-heading font-black text-base text-riet-navy">
                    {dept.hodName}
                  </h4>
                  <p className="text-xs text-riet-muted font-medium">
                    {dept.hodQualification}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Laboratories & Infrastructure */}
        {activeTab === 'labs' && (
          <div className="space-y-8 animate-fade-in">
            <div className="max-w-xl">
              <span className="text-xs font-bold text-riet-gold uppercase tracking-wider block mb-1">
                Practical Computing & R&D
              </span>
              <h2 className="text-2xl font-heading font-black text-riet-navy">
                Specialized Department Laboratories
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                High-end equipment, licensed enterprise software, and dedicated research servers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {dept.labs.map((lab, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl border border-slate-200 bg-white hover:border-riet-gold hover:shadow-soft transition-all space-y-3"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-100 text-riet-blue flex items-center justify-center font-bold text-sm shrink-0">
                      0{idx + 1}
                    </div>
                    <div>
                      <h4 className="font-heading font-black text-base text-riet-navy">
                        {lab.name}
                      </h4>
                      <span className="text-[10px] text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded">
                        Active & Monitored
                      </span>
                    </div>
                  </div>

                  <div className="space-y-1.5 text-xs text-slate-600 bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                    <p><span className="font-bold text-slate-800">Hardware & Specs:</span> {lab.systems}</p>
                    <p><span className="font-bold text-slate-800">Key Focus:</span> {lab.purpose}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Faculty Directory */}
        {activeTab === 'faculty' && (
          <div className="space-y-8 animate-fade-in">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold text-riet-gold uppercase tracking-wider block mb-1">
                  Department Mentors
                </span>
                <h2 className="text-2xl font-heading font-black text-riet-navy">
                  Faculty Members & Researchers
                </h2>
              </div>

              {/* Search Faculty */}
              <div className="relative max-w-xs w-full">
                <input
                  type="text"
                  placeholder="Search faculty..."
                  value={facultySearch}
                  onChange={(e) => setFacultySearch(e.target.value)}
                  className="w-full text-xs px-3.5 py-2 pl-9 rounded-xl border border-slate-300 focus:border-riet-gold outline-none"
                />
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredFaculty.map((f, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl border border-slate-200 bg-white text-center hover:shadow-lift hover:border-riet-gold transition-all space-y-3 group"
                >
                  <img
                    src={f.img}
                    alt={f.name}
                    className="w-24 h-24 rounded-full object-cover mx-auto border-2 border-slate-200 group-hover:border-riet-gold shadow-sm transition-all"
                  />
                  <div>
                    <h4 className="font-heading font-black text-base text-riet-navy">
                      {f.name}
                    </h4>
                    <p className="text-xs text-riet-blue font-bold mt-0.5">
                      {f.role}
                    </p>
                    <p className="text-[11px] text-slate-500 mt-1">
                      {f.degree}
                    </p>
                  </div>
                  <button
                    onClick={() => onOpenEnquiry && onOpenEnquiry()}
                    className="text-[11px] font-bold text-riet-navy hover:text-riet-blue border border-slate-200 hover:bg-slate-50 px-3 py-1.5 rounded-lg w-full transition-colors"
                  >
                    Contact Faculty
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 4: Curriculum Accordion */}
        {activeTab === 'curriculum' && (
          <div className="space-y-6 animate-fade-in max-w-4xl mx-auto">
            <div className="text-center max-w-md mx-auto mb-6">
              <span className="text-xs font-bold text-riet-gold uppercase tracking-wider block mb-1">
                Scheme of Teaching
              </span>
              <h2 className="text-2xl font-heading font-black text-riet-navy">
                Course Curriculum & Credits
              </h2>
            </div>

            <div className="space-y-3">
              {dept.curriculum.map((semBlock, i) => {
                const isOpen = openCurriculumIndex === i;
                return (
                  <div
                    key={i}
                    className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-sm"
                  >
                    <button
                      onClick={() => setOpenCurriculumIndex(isOpen ? null : i)}
                      className="w-full p-4 px-5 flex items-center justify-between text-left font-heading font-black text-sm text-riet-navy hover:bg-slate-50 transition-colors"
                    >
                      <span className="flex items-center gap-2">
                        <BookOpen className="w-4 h-4 text-riet-gold" />
                        <span>{semBlock.sem}</span>
                      </span>
                      {isOpen ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
                    </button>

                    {isOpen && (
                      <div className="p-5 pt-0 border-t border-slate-100 bg-slate-50/60">
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700 pt-3">
                          {semBlock.subjects.map((sub, j) => (
                            <li key={j} className="flex items-center gap-2 p-2 bg-white rounded-lg border border-slate-200">
                              <span className="w-1.5 h-1.5 rounded-full bg-riet-navy"></span>
                              <span>{sub}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Branch Admission CTA */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-riet-navy to-riet-navy-light text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-heading font-black text-xl text-white">
              Enroll in {dept.name} for 2026-27
            </h3>
            <p className="text-xs text-slate-300 mt-1">
              Direct merit seats and REAP Code 1025 counselling registrations are currently underway.
            </p>
          </div>
          <button
            onClick={onOpenEnquiry}
            className="bg-riet-gold hover:bg-riet-gold-hover text-riet-navy font-black px-6 py-3 rounded-xl text-xs shrink-0 shadow-lift"
          >
            Apply for {dept.code} Now ↗
          </button>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, GraduationCap, Download, CheckCircle, FileText, Search, ExternalLink } from 'lucide-react';
import { programs } from '../../../data/collegeData';

export default function Template1Academics({ onOpenEnquiry, onOpenDocument }) {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [rollNumber, setRollNumber] = useState('');
  const [resultQuery, setResultQuery] = useState(null);

  const filteredPrograms = selectedFilter === 'All'
    ? programs
    : programs.filter((p) => p.code.toLowerCase().includes(selectedFilter.toLowerCase()) || p.level.toLowerCase().includes(selectedFilter.toLowerCase()));

  const handleResultSearch = (e) => {
    e.preventDefault();
    if (!rollNumber) return;
    setResultQuery({
      roll: rollNumber,
      name: 'Aditya Mathur',
      branch: 'Computer Science & Engineering',
      sem: 'Semester VI (Even Term 2026)',
      sgpa: '8.74',
      status: 'PASSED (FIRST CLASS WITH DISTINCTION)'
    });
  };

  const formsList = [
    { title: "Bonafide Certificate Application Form", code: "FORM-ACAD-01", size: "180 KB" },
    { title: "Semester Leave / Medical Exemption Form", code: "FORM-ACAD-04", size: "210 KB" },
    { title: "Hostel Allotment & Mess Application", code: "FORM-HOSTEL-02", size: "290 KB" },
    { title: "No Dues / Clearance Certificate", code: "FORM-EXAM-09", size: "150 KB" }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <div className="bg-gradient-to-r from-riet-navy-dark via-riet-navy to-riet-navy-light text-white py-14 px-4 border-b border-riet-line">
        <div className="max-w-7xl mx-auto">
          <span className="text-xs font-bold text-riet-gold uppercase tracking-wider block mb-2">
            Home / Academics
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black tracking-tight text-white">
            Academic Programs & Resources
          </h1>
          <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-2xl">
            Choose from comprehensive undergraduate, postgraduate, and doctoral disciplines designed in collaboration with industry pioneers.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-14 space-y-16">
        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 justify-center">
          {['All', 'Undergraduate', 'Postgraduate', 'B.Tech', 'MBA', 'MCA', 'Doctoral'].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedFilter(cat)}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                selectedFilter === cat
                  ? 'bg-riet-navy text-riet-gold shadow-sm'
                  : 'bg-riet-paper text-slate-700 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Programs Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPrograms.map((prog) => (
            <div
              key={prog.id}
              className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-lift hover:border-riet-gold transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={prog.image}
                  alt={prog.code}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 right-3 bg-riet-navy/90 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                  {prog.duration}
                </span>
                <span className="absolute bottom-3 left-3 bg-white/90 text-riet-navy text-xs font-bold px-2.5 py-0.5 rounded shadow-sm">
                  {prog.level}
                </span>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="font-heading font-black text-xl text-riet-navy group-hover:text-riet-blue transition-colors">
                    {prog.code} — {prog.category}
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {prog.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    to={prog.link}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-riet-navy hover:text-riet-blue"
                  >
                    <span>Know More</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <button
                    onClick={onOpenEnquiry}
                    className="bg-riet-gold hover:bg-riet-gold-hover text-riet-navy font-bold px-3 py-1.5 rounded-md text-xs shadow-sm"
                  >
                    Enquire Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Academic Resources Strip with Workable Actions */}
        <div className="p-8 rounded-2xl bg-riet-paper border border-slate-200 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-100 text-riet-blue flex items-center justify-center shrink-0">
              <Download className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-base text-riet-navy">Syllabus & Curriculum</h4>
              <p className="text-xs text-slate-500 mt-1 mb-2">RTU affiliated scheme & course curriculum.</p>
              <button
                onClick={() => onOpenDocument && onOpenDocument('RTU B.Tech & PG Detailed Syllabus 2026-27')}
                className="text-xs font-bold text-riet-blue hover:underline flex items-center gap-1"
              >
                <span>View Syllabus PDF</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>

          <div id="calendar" className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-base text-riet-navy">Academic Calendar</h4>
              <p className="text-xs text-slate-500 mt-1 mb-2">Semester milestones and exam schedules.</p>
              <button
                onClick={() => onOpenDocument && onOpenDocument('RIET Academic Calendar 2026-27')}
                className="text-xs font-bold text-amber-800 hover:underline flex items-center gap-1"
              >
                <span>Download Calendar</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
              <CheckCircle className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-base text-riet-navy">Choice Based Credit</h4>
              <p className="text-xs text-slate-500 mt-1 mb-2">CBCS flexible scheme & interdisciplinary electives.</p>
              <button
                onClick={() => onOpenDocument && onOpenDocument('CBCS Academic Regulations & Credit Scheme')}
                className="text-xs font-bold text-emerald-700 hover:underline flex items-center gap-1"
              >
                <span>Credit Guidelines</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>

        {/* Examination Results Portal Section (#results) */}
        <div id="results" className="pt-6 border-t border-slate-200">
          <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
            <div className="max-w-xl mb-6">
              <span className="text-xs font-bold text-riet-gold uppercase tracking-wider block mb-1">
                Student Examination Portal
              </span>
              <h2 className="text-2xl font-heading font-black text-riet-navy">
                Online Semester Results Lookup
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Enter your RTU Roll Number to check current examination marksheets and grade cards.
              </p>
            </div>

            <form onSubmit={handleResultSearch} className="flex flex-col sm:flex-row gap-3 max-w-lg mb-6">
              <input
                type="text"
                required
                placeholder="Enter Roll Number (e.g. 23ERICS045)"
                value={rollNumber}
                onChange={(e) => setRollNumber(e.target.value)}
                className="flex-1 text-xs px-4 py-3 rounded-xl border border-slate-300 focus:border-riet-gold outline-none"
              />
              <button
                type="submit"
                className="bg-riet-navy hover:bg-riet-navy-light text-riet-gold font-bold px-6 py-3 rounded-xl text-xs flex items-center justify-center gap-2"
              >
                <Search className="w-4 h-4" />
                <span>Search Result</span>
              </button>
            </form>

            {resultQuery && (
              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-3 max-w-lg animate-fade-in">
                <div className="flex justify-between border-b pb-2">
                  <span className="text-slate-500">Student Name:</span>
                  <span className="font-bold text-riet-navy">{resultQuery.name}</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="text-slate-500">Roll Number:</span>
                  <span className="font-mono font-bold text-slate-700">{resultQuery.roll}</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="text-slate-500">Branch & Term:</span>
                  <span className="font-semibold">{resultQuery.branch} ({resultQuery.sem})</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="text-slate-500">Semester SGPA:</span>
                  <span className="font-heading font-black text-emerald-700 text-sm">{resultQuery.sgpa} / 10.0</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Result Status:</span>
                  <span className="font-bold text-emerald-700">{resultQuery.status}</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Downloads & Forms (#downloads) */}
        <div id="downloads" className="pt-6 border-t border-slate-200">
          <div className="max-w-xl mb-6">
            <span className="text-xs font-bold text-riet-gold uppercase tracking-wider block mb-1">
              Official Downloads
            </span>
            <h2 className="text-2xl font-heading font-black text-riet-navy">
              Downloadable Forms & Formats
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {formsList.map((form, i) => (
              <div
                key={i}
                className="p-4 rounded-xl border border-slate-200 bg-riet-paper hover:bg-white hover:border-riet-gold flex items-center justify-between transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-blue-50 text-riet-blue flex items-center justify-center font-bold text-xs shrink-0">
                    PDF
                  </div>
                  <div>
                    <h4 className="font-bold text-xs text-riet-navy">{form.title}</h4>
                    <p className="text-[10px] text-slate-500">{form.code} • {form.size}</p>
                  </div>
                </div>
                <button
                  onClick={() => onOpenDocument && onOpenDocument(form.title)}
                  className="p-2 text-riet-blue hover:text-riet-navy transition-colors"
                  title="Download Form"
                >
                  <Download className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

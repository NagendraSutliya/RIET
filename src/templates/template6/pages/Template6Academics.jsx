import React, { useState } from 'react';
import Template6PageHeader from '../components/Template6PageHeader';
import { Calendar, Download, FlaskConical, Award, FileText, ShieldAlert, CheckCircle2 } from 'lucide-react';

export default function Template6Academics({ onOpenEnquiry }) {
  const [downloadMsg, setDownloadMsg] = useState('');

  const handleDownload = (docName) => {
    setDownloadMsg(`Downloading ${docName}... (PDF will open)`);
    setTimeout(() => setDownloadMsg(''), 3500);
  };

  const academicCards = [
    { title: "Academic calendar", tag: "Session 2026-27", desc: "RTU Kota & institutional schedule for Odd & Even semesters, mid-terms, vivas, and end-term exams.", actionText: "Download calendar (PDF)", icon: Calendar },
    { title: "Holiday calendar", tag: "Gazetted & RTU", desc: "Gazetted state holidays, national commemorations, vacations, and declared institutional holidays.", actionText: "View holiday schedule", icon: Calendar },
    { title: "Lab manuals", tag: "Curriculum Resources", desc: "Standardized laboratory experiment manuals, viva questions, and safety guidelines by branch.", actionText: "Browse repository", icon: FlaskConical },
    { title: "R&D department", tag: "Research & Patents", desc: "Dedicated research cell fostering high-impact interdisciplinary investigations and IEEE publications.", actionText: "View research areas", icon: Award },
    { title: "Degree registration", tag: "Student Services", desc: "Degree verification, provisional certificates, migration, transcript requests, and convocation enrollment.", actionText: "Convocation portal", icon: FileText },
    { title: "Anti-ragging committee", tag: "Zero Tolerance", desc: "Strict compliance with Supreme Court & UGC norms. Anti-ragging flying squad and 24x7 helpline.", actionText: "Committee contacts", icon: ShieldAlert }
  ];

  return (
    <div className="w-full font-sans text-[#1C1B22] bg-white">
      <Template6PageHeader
        title="Academics"
        desc="Calendars, committees and resources for students and faculty."
      />

      {downloadMsg && (
        <div className="max-w-[1140px] mx-auto px-6 sm:px-10 mt-6">
          <div className="bg-[#6B1724] text-white p-3.5 rounded text-sm font-semibold flex items-center justify-between border border-[#D4AF37]/50 shadow-xs">
            <span>{downloadMsg}</span>
            <button onClick={() => setDownloadMsg('')} className="text-[#D4AF37] hover:underline text-xs">
              Dismiss
            </button>
          </div>
        </div>
      )}

      <section className="py-16 sm:py-20 px-6 sm:px-10 bg-white">
        <div className="max-w-[1140px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {academicCards.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-8 bg-[#FAF7F5] border border-[#E3DDD8] rounded hover:border-[#6B1724] hover:shadow-xs transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[11px] font-bold px-2.5 py-0.5 rounded bg-[#F0EAE4] text-[#6B1724] border border-[#E3DDD8]">
                        {item.tag}
                      </span>
                      <Icon className="w-6 h-6 text-[#6B1724] group-hover:scale-110 transition-transform" />
                    </div>
                    <h3 className="font-fraunces text-2xl font-bold text-[#1C1B22] mb-3 group-hover:text-[#6B1724] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#4A4752] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-[#E3DDD8]">
                    <button
                      onClick={() => handleDownload(item.title)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#6B1724] hover:underline"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>{item.actionText}</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#FAF7F5] py-16 sm:py-20 px-6 sm:px-10 border-t border-[#E3DDD8]">
        <div className="max-w-[1140px] mx-auto">
          <div className="mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#6B1724]">
              Academic Regulations
            </span>
            <h2 className="font-fraunces text-3xl sm:text-4xl font-bold text-[#1C1B22] mt-1">
              Examination &amp; Grading Standards
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-8 bg-white border border-[#E3DDD8] rounded space-y-3">
              <h3 className="font-fraunces text-2xl font-bold text-[#1C1B22]">
                Internal Assessment (30% Weightage)
              </h3>
              <p className="text-xs text-[#4A4752] leading-relaxed">
                Two mid-term examinations, regular laboratory records, quizzes, objective assignments, and classroom attendance participation.
              </p>
              <ul className="text-xs text-[#1C1B22] space-y-2 pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#6B1724]" />
                  <span>Mid Term I &amp; Mid Term II (20 Marks combined)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#6B1724]" />
                  <span>Continuous Lab Assessment &amp; Practical Viva (10 Marks)</span>
                </li>
              </ul>
            </div>

            <div className="p-8 bg-white border border-[#E3DDD8] rounded space-y-3">
              <h3 className="font-fraunces text-2xl font-bold text-[#1C1B22]">
                University End-Term (70% Weightage)
              </h3>
              <p className="text-xs text-[#4A4752] leading-relaxed">
                Semester-end centralized theory examinations conducted by RTU Kota at designated university centers.
              </p>
              <ul className="text-xs text-[#1C1B22] space-y-2 pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#6B1724]" />
                  <span>Comprehensive Theory Exam (70 Marks per subject)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#6B1724]" />
                  <span>External University Examiner for End-Semester Practical Vivas</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

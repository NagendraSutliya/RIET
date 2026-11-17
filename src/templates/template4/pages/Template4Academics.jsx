import React, { useState } from 'react';
import Template4PageHeader from '../components/Template4PageHeader';
import { Calendar, Download, FileText, FlaskConical, Award, ShieldAlert, CheckCircle2, ChevronRight } from 'lucide-react';

export default function Template4Academics({ onOpenEnquiry }) {
  const [downloadMsg, setDownloadMsg] = useState('');

  const handleDownload = (docName) => {
    setDownloadMsg(`Downloading ${docName}... (PDF will open)`);
    setTimeout(() => {
      setDownloadMsg('');
    }, 3500);
  };

  const academicCards = [
    {
      id: "academic-cal",
      title: "Academic calendar",
      desc: "Official RTU Kota & RIET institutional schedule for Odd & Even semesters 2026-27, internal mid-terms, practical vivas, and end-term examinations.",
      actionText: "Download session calendar (PDF)",
      icon: Calendar,
      tag: "Session 2026-27"
    },
    {
      id: "holiday-cal",
      title: "Holiday calendar",
      desc: "Gazetted holidays, national observances, winter/summer vacations, and institutional declared holidays for the academic year 2026-27.",
      actionText: "View holiday schedule",
      icon: Calendar,
      tag: "Gazetted & RTU"
    },
    {
      id: "lab-manuals",
      title: "Lab manuals",
      desc: "Standardized laboratory experiment manuals, viva questions, safety guidelines, and code templates categorized by branch, year, and semester.",
      actionText: "Browse lab repository",
      icon: FlaskConical,
      tag: "Curriculum Resources"
    },
    {
      id: "rnd",
      title: "R&D department",
      desc: "Dedicated research cell fostering high-impact interdisciplinary investigations, IEEE journal publications, patent filings, and DST research grants.",
      actionText: "View research publications",
      icon: Award,
      tag: "Innovation & Patents"
    },
    {
      id: "degree-reg",
      title: "Degree registration",
      desc: "Degree verification, provisional certificate issuance, migration certificates, transcript requests, and university convocation registration portal.",
      actionText: "Access convocation portal",
      icon: FileText,
      tag: "Student Services"
    },
    {
      id: "anti-ragging",
      title: "Anti-ragging committee",
      desc: "Strict zero-tolerance policy in compliance with Supreme Court & UGC regulations. Anti-ragging flying squad, toll-free helpline, and online grievance cell.",
      actionText: "Anti-ragging squad contacts",
      icon: ShieldAlert,
      tag: "Zero Tolerance"
    }
  ];

  return (
    <div className="w-full font-manrope">
      {/* 1. PAGE HEADER */}
      <Template4PageHeader
        title="Academics"
        desc="Calendars, committees and resources for students and faculty."
      />

      {/* Download Alert Notification */}
      {downloadMsg && (
        <div className="max-w-[1060px] mx-auto px-6 sm:px-10 mt-6">
          <div className="bg-[#B3263A] text-white p-3.5 rounded text-sm font-semibold flex items-center justify-between shadow-xs">
            <span>{downloadMsg}</span>
            <button onClick={() => setDownloadMsg('')} className="text-white hover:underline text-xs">
              Dismiss
            </button>
          </div>
        </div>
      )}

      {/* 2. ACADEMIC RESOURCES (Connected Grid) */}
      <section className="py-14 sm:py-20 px-6 sm:px-10 bg-white">
        <div className="max-w-[1060px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-[#DAD5D8]">
            {academicCards.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  className="p-8 bg-white border-r border-b border-[#DAD5D8] hover:bg-[#F6F3F4] transition-colors flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[11px] font-bold px-2.5 py-0.5 rounded bg-[#F7DDE1] text-[#7A1626]">
                        {item.tag}
                      </span>
                      <Icon className="w-5 h-5 text-[#B3263A] group-hover:scale-110 transition-transform" />
                    </div>
                    <h3 className="font-bricolage text-2xl font-bold text-[#1C1B22] mb-3 group-hover:text-[#B3263A] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#4A4752] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-[#DAD5D8]/70">
                    <button
                      onClick={() => handleDownload(item.title)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#B3263A] hover:underline"
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

      {/* 3. EXAMINATION & EVALUATION GUIDELINES */}
      <section className="bg-[#F6F3F4] py-14 sm:py-20 px-6 sm:px-10 border-t border-[#DAD5D8]">
        <div className="max-w-[1060px] mx-auto">
          <div className="mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#B3263A]">
              Academic Regulations
            </span>
            <h2 className="font-bricolage text-3xl sm:text-4xl font-bold text-[#1C1B22] mt-1">
              Examination &amp; Grading Standards
            </h2>
            <p className="text-sm text-[#4A4752]">
              Governed strictly by Rajasthan Technical University (RTU), Kota credit system and CBCS framework.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-white rounded border border-[#DAD5D8] space-y-3">
              <h3 className="font-bricolage text-xl font-bold text-[#1C1B22]">
                Internal Assessment (30% Weightage)
              </h3>
              <p className="text-xs text-[#4A4752] leading-relaxed">
                Conducted through two centrally monitored mid-term examinations, regular laboratory records, quizzes, objective assignments, and classroom attendance participation.
              </p>
              <ul className="text-xs text-[#1C1B22] space-y-1.5 pt-1">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B3263A]" />
                  <span>Mid Term I (10 Marks) &amp; Mid Term II (10 Marks)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B3263A]" />
                  <span>Continuous Lab Assessment &amp; Practical Viva (10 Marks)</span>
                </li>
              </ul>
            </div>

            <div className="p-6 bg-white rounded border border-[#DAD5D8] space-y-3">
              <h3 className="font-bricolage text-xl font-bold text-[#1C1B22]">
                University End-Term (70% Weightage)
              </h3>
              <p className="text-xs text-[#4A4752] leading-relaxed">
                Centralized semester-end theory and practical examinations organized by RTU Kota at designated university examination centers across Rajasthan.
              </p>
              <ul className="text-xs text-[#1C1B22] space-y-1.5 pt-1">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B3263A]" />
                  <span>Comprehensive Theory Exam (70 Marks per subject)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B3263A]" />
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

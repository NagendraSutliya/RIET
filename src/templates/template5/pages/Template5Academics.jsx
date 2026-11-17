import React, { useState } from 'react';
import Template5PageHeader from '../components/Template5PageHeader';
import { Calendar, Download, FlaskConical, Award, FileText, ShieldAlert, CheckCircle2 } from 'lucide-react';

export default function Template5Academics({ onOpenEnquiry }) {
  const [downloadMsg, setDownloadMsg] = useState('');

  const handleDownload = (docName) => {
    setDownloadMsg(`Downloading ${docName}... (PDF will open)`);
    setTimeout(() => setDownloadMsg(''), 3500);
  };

  const academicCards = [
    {
      title: "Academic calendar",
      tag: "Session 2026-27",
      desc: "Comprehensive RTU Kota & institutional schedule for Odd & Even semesters, internal mid-terms, practical vivas, and end-term exams.",
      actionText: "Download session calendar (PDF)",
      icon: Calendar
    },
    {
      title: "Holiday calendar",
      tag: "Gazetted & RTU",
      desc: "Gazetted state holidays, national commemorations, winter/summer vacations, and institutional declared holidays for 2026-27.",
      actionText: "View holiday schedule",
      icon: Calendar
    },
    {
      title: "Lab manuals",
      tag: "Lab Repositories",
      desc: "Laboratory experiment procedures, viva questions, safety precautions, and code templates categorized by branch, year, and semester.",
      actionText: "Browse lab repository",
      icon: FlaskConical
    },
    {
      title: "R&D department",
      tag: "Research & Patents",
      desc: "Dedicated research cell fostering high-impact interdisciplinary investigations, IEEE journal publications, and funded projects.",
      actionText: "View publications",
      icon: Award
    },
    {
      title: "Degree registration",
      tag: "Convocation Portal",
      desc: "Degree verification, provisional certificate issuance, migration certificates, transcript requests, and convocation enrollment.",
      actionText: "Access convocation portal",
      icon: FileText
    },
    {
      title: "Anti-ragging committee",
      tag: "Zero Tolerance",
      desc: "Strict compliance with Supreme Court & UGC norms. Anti-ragging flying squad, toll-free helpline, and rapid grievance redressal.",
      actionText: "Anti-ragging contacts",
      icon: ShieldAlert
    }
  ];

  return (
    <div className="w-full font-sans text-[#16262B]">
      <Template5PageHeader
        title="Academics"
        desc="Calendars, committees and resources for students and faculty."
      />

      {downloadMsg && (
        <div className="max-w-[1180px] mx-auto px-6 sm:px-10 mt-6">
          <div className="bg-[#0F4C5C] text-white p-4 rounded-full text-sm font-semibold flex items-center justify-between px-6 shadow-xs">
            <span>{downloadMsg}</span>
            <button onClick={() => setDownloadMsg('')} className="text-[#FFB26B] hover:underline text-xs">
              Dismiss
            </button>
          </div>
        </div>
      )}

      {/* 6 Academic Cards */}
      <section className="py-16 sm:py-20 px-6 sm:px-10 bg-white">
        <div className="max-w-[1180px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {academicCards.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-8 bg-[#EEF4F5] rounded-[22px] hover:bg-[#DDEAED] transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-[#FFE3CC] text-[#7A3300]">
                        {item.tag}
                      </span>
                      <Icon className="w-6 h-6 text-[#0F4C5C] group-hover:scale-110 transition-transform" />
                    </div>
                    <h3 className="font-fraunces text-2xl font-bold text-[#0A3340] mb-3">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#3C5961] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-[#D5E3E6]">
                    <button
                      onClick={() => handleDownload(item.title)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0F4C5C] hover:underline"
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

      {/* Examination Regulations */}
      <section className="bg-[#F2F6F7] py-16 sm:py-20 px-6 sm:px-10 border-t border-[#D5E3E6]">
        <div className="max-w-[1180px] mx-auto">
          <div className="mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#F58B3A]">
              Academic Regulations
            </span>
            <h2 className="font-fraunces text-3xl sm:text-4xl font-bold text-[#0A3340] mt-1">
              Examination &amp; Grading Standards
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-8 bg-white rounded-[22px] border border-[#D5E3E6] space-y-3">
              <h3 className="font-fraunces text-2xl font-bold text-[#0A3340]">
                Internal Assessment (30% Weightage)
              </h3>
              <p className="text-xs text-[#3C5961] leading-relaxed">
                Conducted through two centrally monitored mid-term examinations, regular laboratory records, quizzes, objective assignments, and classroom attendance participation.
              </p>
              <ul className="text-xs text-[#16262B] space-y-2 pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0F4C5C]" />
                  <span>Mid Term I (10 Marks) &amp; Mid Term II (10 Marks)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0F4C5C]" />
                  <span>Continuous Lab Assessment &amp; Practical Viva (10 Marks)</span>
                </li>
              </ul>
            </div>

            <div className="p-8 bg-white rounded-[22px] border border-[#D5E3E6] space-y-3">
              <h3 className="font-fraunces text-2xl font-bold text-[#0A3340]">
                University End-Term (70% Weightage)
              </h3>
              <p className="text-xs text-[#3C5961] leading-relaxed">
                Centralized semester-end theory and practical examinations organized by RTU Kota at designated university examination centers across Rajasthan.
              </p>
              <ul className="text-xs text-[#16262B] space-y-2 pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0F4C5C]" />
                  <span>Comprehensive Theory Exam (70 Marks per subject)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0F4C5C]" />
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

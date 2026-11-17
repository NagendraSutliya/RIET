import React, { useState } from 'react';
import Template8PageHeader from '../components/Template8PageHeader';
import { Calendar, Download, FlaskConical, Award, FileText, ShieldAlert, CheckCircle2 } from 'lucide-react';

export default function Template8Academics({ onOpenEnquiry }) {
  const [downloadMsg, setDownloadMsg] = useState('');

  const handleDownload = (docName) => {
    setDownloadMsg(`Downloading official ${docName}... (PDF will stream in a new tab)`);
    setTimeout(() => setDownloadMsg(''), 3500);
  };

  const academicCards = [
    { title: "Academic Calendar 2025-26", tag: "Session Schedule", desc: "RTU Kota & institutional schedule for Odd & Even semesters, mid-terms, practical vivas, and final examinations.", actionText: "Download Calendar (PDF)", icon: Calendar },
    { title: "Gazetted Holidays Schedule", tag: "Official Holidays", desc: "State gazetted holidays, institutional observances, research symposiums, and semester vacation windows.", actionText: "View Holiday Schedule", icon: Calendar },
    { title: "Curriculum & Laboratory Manuals", tag: "Learning Resources", desc: "Standardized experiment manuals, course outcomes, viva question banks, and safety guidelines across all branches.", actionText: "Browse Repository", icon: FlaskConical },
    { title: "Research & Development Cell", tag: "Patents & Grants", desc: "Dedicated research cell fostering high-impact investigations, DST grants, AICTE schemes, and IEEE publications.", actionText: "View Research Areas", icon: Award },
    { title: "Degree Verification & Convocation", tag: "Student Registry", desc: "Degree verification, provisional certificates, migration, transcript requests, and convocation enrollment.", actionText: "Access Registry", icon: FileText },
    { title: "Anti-Ragging Squad & Committee", tag: "Zero Tolerance", desc: "Strict compliance with Supreme Court & UGC norms. Anti-ragging flying squad and 24x7 helpline.", actionText: "Emergency Contacts", icon: ShieldAlert }
  ];

  return (
    <div className="w-full font-sans text-[#2a2a2a] bg-white">
      <Template8PageHeader
        title="Academics & Curricula"
        desc="Explore our academic calendars, degree requirements, research cells, and standardized laboratory experiment resources."
        breadcrumbs={[{ label: 'Academics' }]}
      />

      {downloadMsg && (
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 mt-6">
          <div className="bg-[#192f59] text-white p-4 rounded-lg text-xs font-semibold flex items-center justify-between shadow-sm">
            <span>{downloadMsg}</span>
            <button onClick={() => setDownloadMsg('')} className="text-[#d2973b] hover:underline text-xs">
              Dismiss
            </button>
          </div>
        </div>
      )}

      {/* Academic Resource Cards */}
      <section className="py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-[1240px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {academicCards.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-8 rounded-lg border border-slate-200 shadow-2xs hover:shadow-lg transition-all flex flex-col justify-between group hover:border-[#d2973b]"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[11px] font-bold px-3 py-1 rounded bg-[#fef7eb] text-[#d2973b]">
                        {item.tag}
                      </span>
                      <Icon className="w-6 h-6 text-[#192f59] group-hover:text-[#d2973b] transition-colors" />
                    </div>

                    <h3 className="text-xl font-bold font-playfair text-[#192f59] mb-2 group-hover:text-[#d2973b] transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-6">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100">
                    <button
                      onClick={() => handleDownload(item.title)}
                      className="text-xs font-bold text-[#192f59] hover:text-[#d2973b] inline-flex items-center gap-1.5 uppercase tracking-wider transition-colors"
                    >
                      <Download className="w-3.5 h-3.5 text-[#d2973b]" />
                      <span>{item.actionText}</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Research & Higher Studies Callout */}
      <section className="py-16 px-4 sm:px-6 bg-[#f7f8fa] border-t border-slate-200">
        <div className="max-w-[1240px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#d2973b]">
              Research &amp; Higher Studies
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-playfair text-[#192f59]">
              Interested in Doctoral or Postgraduate Research?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl">
              RIET Jaipur offers Ph.D and M.Tech fellowships in Computer Science, Power Systems, Robotics, and VLSI with RTU DAT admissions.
            </p>
          </div>
          <button
            onClick={onOpenEnquiry}
            className="bg-[#192f59] hover:bg-[#d2973b] text-white font-bold py-3.5 px-8 rounded text-xs uppercase tracking-wider transition-colors whitespace-nowrap shadow-sm"
          >
            Inquire With Dean Academics
          </button>
        </div>
      </section>
    </div>
  );
}

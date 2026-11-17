import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Template5PageHeader from '../components/Template5PageHeader';
import { ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';

export default function Template5Admissions({ onOpenEnquiry }) {
  const [openFaq, setOpenFaq] = useState(0);

  const programsTable = [
    { name: "B.Tech 1st Year (4 Years)", eligibility: "10+2 with Physics & Mathematics (Min 45%)", code: "REAP 1025" },
    { name: "B.Tech Lateral Entry 2nd Year (3 Years)", eligibility: "Diploma in Engg / B.Sc with Maths (Min 45%)", code: "LEEP 1025" },
    { name: "B.Arch (Architecture - 5 Years)", eligibility: "10+2 with PCM + Valid NATA Score", code: "COA Approved" },
    { name: "BBA (Bachelor of Business Admin - 3 Years)", eligibility: "10+2 Any Stream (Min 48%)", code: "Direct Merit" },
    { name: "BCA (Bachelor of Computer App - 3 Years)", eligibility: "10+2 with Mathematics / Computer (Min 48%)", code: "Direct Merit" },
    { name: "M.Tech (Postgraduate - 2 Years)", eligibility: "B.E. / B.Tech in relevant branch (Min 50%)", code: "CAM 1025" },
    { name: "MBA (Master of Business Admin - 2 Years)", eligibility: "Graduation Any Stream (Min 50%) + CMAT/RMAT", code: "RMAT 278" },
    { name: "MCA (Master of Computer App - 2 Years)", eligibility: "BCA / B.Sc / B.Tech with Maths (Min 50%)", code: "RMCAAP 225" },
    { name: "Ph.D (Doctoral Research - 3-5 Years)", eligibility: "Master's Degree in relevant field (Min 55%) + RTU-DAT", code: "RTU DAT" }
  ];

  const faqs = [
    {
      q: "What is the official REAP counseling code for RIET Jaipur?",
      a: "The official REAP (Rajasthan Engineering Admission Process) code for RIET Jaipur is 1025. Candidates should select code 1025 during choice filling for engineering programs."
    },
    {
      q: "What documents are required during counseling reporting?",
      a: "Original and self-attested copies of 10th & 12th marksheets, JEE Main / REAP allotment letter, Migration & Transfer certificates, Category certificate, Domicile certificate, and 6 passport-size photographs."
    },
    {
      q: "Are hostel accommodations available for outstation students?",
      a: "Yes, RIET Jaipur provides separate on-campus secure hostels for boys and girls with furnished rooms, 24x7 Wi-Fi, air-cooled options, nutritious mess meals, gymnasium, and round-the-clock security."
    },
    {
      q: "Is there any merit scholarship available for meritorious students?",
      a: "Yes, RIET offers generous tuition fee waiver scholarships based on 10+2 board marks, JEE Main percentiles, and state sports championships. Government post-matric scholarships are also facilitated."
    }
  ];

  return (
    <div className="w-full font-sans text-[#16262B]">
      <Template5PageHeader
        title="Admissions"
        desc="Choose a program, apply online and upload your payment details."
      />

      {/* Two Column Layout */}
      <section className="py-16 sm:py-20 px-6 sm:px-10 bg-white">
        <div className="max-w-[1180px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Programs Table */}
          <div className="lg:col-span-7">
            <h2 className="font-fraunces text-3xl font-bold text-[#0A3340] mb-6">
              Programs Offered
            </h2>

            <div className="border border-[#D5E3E6] rounded-[22px] overflow-hidden">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#EEF4F5] text-[#0A3340] font-fraunces text-sm font-bold border-b border-[#D5E3E6]">
                    <th className="py-4 px-5">Program</th>
                    <th className="py-4 px-5 hidden sm:table-cell">Eligibility</th>
                    <th className="py-4 px-5 text-right">Details</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#D5E3E6] text-sm">
                  {programsTable.map((prog, idx) => (
                    <tr key={idx} className="hover:bg-[#F2F6F7] transition-colors">
                      <td className="py-4 px-5 font-semibold text-[#0A3340]">
                        <div>{prog.name}</div>
                        <div className="text-[11px] text-[#F58B3A] font-bold sm:hidden mt-0.5">
                          {prog.code}
                        </div>
                      </td>
                      <td className="py-4 px-5 text-xs text-[#3C5961] hidden sm:table-cell">
                        {prog.eligibility}
                      </td>
                      <td className="py-4 px-5 text-right">
                        <Link
                          to="/courses"
                          className="text-[#0F4C5C] hover:underline font-bold text-xs inline-flex items-center gap-1"
                        >
                          <span>Details</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Right Column: Apply Online & Steps */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 bg-[#EEF4F5] rounded-[22px] border border-[#D5E3E6]">
              <span className="text-xs font-bold uppercase tracking-wider text-[#F58B3A] block mb-1">
                Admissions 2026-27
              </span>
              <h3 className="font-fraunces text-3xl font-bold text-[#0A3340] mb-3">
                Apply online
              </h3>
              <p className="text-sm text-[#3C5961] leading-relaxed mb-6">
                <strong>REAP code 1025</strong><br />
                CAM 1025 • RMCAAP 225 • RMAT 278
              </p>
              <button
                onClick={onOpenEnquiry}
                className="w-full bg-[#F58B3A] hover:bg-[#FFB26B] text-[#0A3340] font-bold py-3.5 px-6 rounded-full text-sm transition-all shadow-xs text-center"
              >
                Start application
              </button>
            </div>

            <div className="p-8 bg-white rounded-[22px] border border-[#D5E3E6]">
              <h3 className="font-fraunces text-2xl font-bold text-[#0A3340] mb-4">
                How to apply
              </h3>
              <ol className="space-y-4">
                {[
                  { step: "1", title: "Pick your program", desc: "Select discipline based on eligibility criteria." },
                  { step: "2", title: "Fill online application", desc: "Submit candidate biodata and branch preference." },
                  { step: "3", title: "Upload payment details", desc: "Submit registration fee or REAP voucher." },
                  { step: "4", title: "Confirm your admission", desc: "Document verification at campus and receive ID." }
                ].map((item) => (
                  <li key={item.step} className="flex gap-3 items-start">
                    <span className="w-8 h-8 rounded-full bg-[#0F4C5C] text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      {item.step}
                    </span>
                    <div>
                      <div className="font-bold text-sm text-[#0A3340]">{item.title}</div>
                      <div className="text-xs text-[#3C5961] leading-relaxed">{item.desc}</div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="bg-[#F2F6F7] py-16 sm:py-20 px-6 sm:px-10 border-t border-[#D5E3E6]">
        <div className="max-w-[1180px] mx-auto">
          <div className="mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#F58B3A]">
              Clarifications &amp; Guidance
            </span>
            <h2 className="font-fraunces text-3xl sm:text-4xl font-bold text-[#0A3340] mt-1">
              Frequently asked questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-[22px] border border-[#D5E3E6] overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                    className="w-full text-left p-6 flex items-center justify-between gap-4 font-fraunces font-bold text-xl text-[#0A3340] hover:bg-[#F2F6F7]"
                  >
                    <span>{faq.q}</span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-[#0F4C5C] shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-[#3C5961] shrink-0" />
                    )}
                  </button>
                  {isOpen && (
                    <div className="p-6 pt-0 text-sm text-[#3C5961] leading-relaxed border-t border-[#D5E3E6]/60">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

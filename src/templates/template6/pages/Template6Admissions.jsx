import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Template6PageHeader from '../components/Template6PageHeader';
import { ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';

export default function Template6Admissions({ onOpenEnquiry }) {
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
    { q: "What is the official REAP counseling code for RIET Jaipur?", a: "The official REAP code for RIET Jaipur is 1025. Select code 1025 during counseling choice filling." },
    { q: "What documents are required during counseling reporting?", a: "Original and self-attested copies of 10th & 12th marksheets, JEE Main / REAP allotment letter, Migration, Transfer, Category, and Domicile certificates, plus 6 photographs." },
    { q: "Are hostel accommodations available for outstation students?", a: "Yes, RIET Jaipur provides separate on-campus secure hostels for boys and girls with furnished rooms, 24x7 Wi-Fi, air-cooling, and nutritious dining mess." },
    { q: "Is there any merit scholarship available for meritorious students?", a: "Yes, RIET offers tuition fee waiver scholarships based on 10+2 board marks, JEE Main percentiles, and state sports championships." }
  ];

  return (
    <div className="w-full font-sans text-[#1C1B22] bg-white">
      <Template6PageHeader
        title="Admissions"
        desc="Choose a program, apply online and upload your payment details."
      />

      <section className="py-16 sm:py-20 px-6 sm:px-10 bg-white">
        <div className="max-w-[1140px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Programs Table */}
          <div className="lg:col-span-7">
            <h2 className="font-fraunces text-3xl font-bold text-[#1C1B22] mb-6">
              Programs Offered
            </h2>

            <div className="border border-[#E3DDD8] rounded overflow-hidden">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#FAF7F5] text-[#1C1B22] font-fraunces text-sm font-bold border-b border-[#E3DDD8]">
                    <th className="py-4 px-5">Program</th>
                    <th className="py-4 px-5 hidden sm:table-cell">Eligibility</th>
                    <th className="py-4 px-5 text-right">Details</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E3DDD8] text-sm">
                  {programsTable.map((prog, idx) => (
                    <tr key={idx} className="hover:bg-[#FAF7F5] transition-colors">
                      <td className="py-4 px-5 font-semibold text-[#1C1B22]">
                        <div>{prog.name}</div>
                        <div className="text-[11px] text-[#6B1724] font-bold sm:hidden mt-0.5">
                          {prog.code}
                        </div>
                      </td>
                      <td className="py-4 px-5 text-xs text-[#4A4752] hidden sm:table-cell">
                        {prog.eligibility}
                      </td>
                      <td className="py-4 px-5 text-right">
                        <Link
                          to="/courses"
                          className="text-[#6B1724] hover:underline font-bold text-xs inline-flex items-center gap-1"
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
            <div className="p-8 bg-[#FAF7F5] rounded border border-[#E3DDD8]">
              <span className="text-xs font-bold uppercase tracking-wider text-[#6B1724] block mb-1">
                Admissions Session 2026-27
              </span>
              <h3 className="font-fraunces text-2xl font-bold text-[#1C1B22] mb-3">
                Apply online
              </h3>
              <p className="text-sm text-[#4A4752] leading-relaxed mb-6">
                <strong>REAP code 1025</strong><br />
                CAM 1025 • RMCAAP 225 • RMAT 278
              </p>
              <button
                onClick={onOpenEnquiry}
                className="w-full bg-[#6B1724] hover:bg-[#52111B] text-white font-semibold py-3.5 px-6 rounded text-sm transition-all border border-[#D4AF37]/50 shadow-xs text-center"
              >
                Start application
              </button>
            </div>

            <div className="p-8 bg-white rounded border border-[#E3DDD8]">
              <h3 className="font-fraunces text-2xl font-bold text-[#1C1B22] mb-4">
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
                    <span className="w-8 h-8 rounded bg-[#6B1724] text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      {item.step}
                    </span>
                    <div>
                      <div className="font-bold text-sm text-[#1C1B22]">{item.title}</div>
                      <div className="text-xs text-[#4A4752] leading-relaxed">{item.desc}</div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="bg-[#FAF7F5] py-16 sm:py-20 px-6 sm:px-10 border-t border-[#E3DDD8]">
        <div className="max-w-[1140px] mx-auto">
          <div className="mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#6B1724]">
              Clarifications &amp; Guidance
            </span>
            <h2 className="font-fraunces text-3xl sm:text-4xl font-bold text-[#1C1B22] mt-1">
              Frequently asked questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded border border-[#E3DDD8] overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                    className="w-full text-left p-6 flex items-center justify-between gap-4 font-fraunces font-bold text-xl text-[#1C1B22] hover:bg-[#FAF7F5]"
                  >
                    <span>{faq.q}</span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-[#6B1724] shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-[#4A4752] shrink-0" />
                    )}
                  </button>
                  {isOpen && (
                    <div className="p-6 pt-0 text-sm text-[#4A4752] leading-relaxed border-t border-[#E3DDD8]">
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

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Template4PageHeader from '../components/Template4PageHeader';
import { Award, ArrowRight, CheckCircle2, ChevronDown, ChevronUp, FileText, Phone } from 'lucide-react';

export default function Template4Admissions({ onOpenEnquiry }) {
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
      q: "What documents are required during the counseling reporting?",
      a: "Original and self-attested copies of 10th & 12th marksheets, JEE Main / REAP allotment letter, Migration & Transfer certificates, Caste/Category certificate (if applicable), Domicile certificate, and 6 passport-size photographs."
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
    <div className="w-full font-manrope">
      {/* 1. PAGE HEADER */}
      <Template4PageHeader
        title="Admissions"
        desc="Choose a program, apply online and upload your payment details."
      />

      {/* 2. MAIN ADMISSIONS CONTENT (Two-Column) */}
      <section className="py-14 sm:py-20 px-6 sm:px-10 bg-white">
        <div className="max-w-[1060px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Programs Table */}
          <div className="lg:col-span-7">
            <h2 className="font-bricolage text-3xl font-bold text-[#1C1B22] mb-6">
              Programs Offered
            </h2>

            <div className="border border-[#DAD5D8] rounded overflow-hidden">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#F6F3F4] text-[#1C1B22] font-bricolage text-xs font-bold uppercase tracking-wider border-b border-[#DAD5D8]">
                    <th className="py-3 px-4">Program</th>
                    <th className="py-3 px-4 hidden sm:table-cell">Eligibility</th>
                    <th className="py-3 px-4 text-right">Details</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#DAD5D8] text-sm">
                  {programsTable.map((prog, idx) => (
                    <tr key={idx} className="hover:bg-[#FAF8F9] transition-colors">
                      <td className="py-3.5 px-4 font-semibold text-[#1C1B22]">
                        <div>{prog.name}</div>
                        <div className="text-[11px] text-[#7A1626] font-medium sm:hidden mt-0.5">
                          {prog.code}
                        </div>
                      </td>
                      <td className="py-3.5 px-4 text-xs text-[#4A4752] hidden sm:table-cell">
                        {prog.eligibility}
                      </td>
                      <td className="py-3.5 px-4 text-right">
                        <Link
                          to="/courses"
                          className="text-[#B3263A] hover:underline font-bold text-xs inline-flex items-center gap-1"
                        >
                          <span>Details</span>
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-4 p-4 bg-[#F6F3F4] rounded border border-[#DAD5D8] flex items-center justify-between text-xs text-[#4A4752]">
              <span>Need counseling assistance? Helpline:</span>
              <a href="tel:9257111214" className="font-bold text-[#B3263A] hover:underline">
                +91 92571 11214 / 15
              </a>
            </div>
          </div>

          {/* Right Column: Apply Online & Steps */}
          <div className="lg:col-span-5 space-y-6">
            {/* Apply Online Card */}
            <div className="p-6 bg-[#F6F3F4] rounded border border-[#DAD5D8]">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#B3263A] block mb-1">
                Admissions Session 2026-27
              </span>
              <h3 className="font-bricolage text-2xl font-bold text-[#1C1B22] mb-3">
                Apply online
              </h3>
              <p className="text-sm text-[#4A4752] leading-relaxed mb-4">
                <strong>REAP code 1025</strong><br />
                CAM 1025 • RMCAAP 225 • RMAT 278
              </p>
              <button
                onClick={onOpenEnquiry}
                className="w-full text-center bg-[#B3263A] hover:bg-[#8F1C2D] text-white font-bold py-3 px-4 rounded text-sm transition-colors shadow-xs"
              >
                Start application
              </button>
            </div>

            {/* How to Apply Workflow */}
            <div className="p-6 bg-white rounded border border-[#DAD5D8]">
              <h3 className="font-bricolage text-xl font-bold text-[#1C1B22] mb-4">
                How to apply
              </h3>
              <ol className="space-y-4">
                {[
                  { step: "1", title: "Pick your program", desc: "Select discipline based on eligibility criteria." },
                  { step: "2", title: "Fill the online application form", desc: "Submit candidate biodata, qualifying marks and branch preference." },
                  { step: "3", title: "Upload your payment details", desc: "Submit application fee receipt or REAP seat allotment voucher." },
                  { step: "4", title: "Confirm your admission", desc: "Document verification at campus and receive student enrollment ID." }
                ].map((item) => (
                  <li key={item.step} className="flex gap-3 items-start">
                    <span className="w-7 h-7 rounded bg-[#B3263A] text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
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

      {/* 3. FREQUENTLY ASKED QUESTIONS (Alt Background) */}
      <section className="bg-[#F6F3F4] py-14 sm:py-20 px-6 sm:px-10 border-t border-[#DAD5D8]">
        <div className="max-w-[1060px] mx-auto">
          <div className="mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#B3263A]">
              Clarifications &amp; Guidance
            </span>
            <h2 className="font-bricolage text-3xl sm:text-4xl font-bold text-[#1C1B22] mt-1">
              Frequently asked questions
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded border border-[#DAD5D8] overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                    className="w-full text-left p-5 flex items-center justify-between gap-4 font-bricolage font-bold text-lg text-[#1C1B22] hover:bg-[#FAF8F9]"
                  >
                    <span>{faq.q}</span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-[#B3263A] shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-[#4A4752] shrink-0" />
                    )}
                  </button>
                  {isOpen && (
                    <div className="p-5 pt-0 text-sm text-[#4A4752] leading-relaxed border-t border-[#DAD5D8]/50">
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

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Template8PageHeader from '../components/Template8PageHeader';
import { ChevronDown, ChevronUp, CheckCircle2, Phone, Mail, Award, HelpCircle } from 'lucide-react';

export default function Template8Admissions({ onOpenEnquiry }) {
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

  const steps = [
    { num: "01", title: "Choose Your Program", desc: "Select from our 8 specialized B.Tech streams, M.Tech, MBA, MCA, or doctoral research." },
    { num: "02", title: "Check Eligibility", desc: "Review 10+2 PCM criteria, JEE Main percentile, REAP counseling, or merit requirements." },
    { num: "03", title: "Apply Online", desc: "Fill out the online application form and upload your academic transcripts." },
    { num: "04", title: "Seat Confirmation", desc: "Complete document verification and secure your admission seat with scholarship assistance." }
  ];

  const faqs = [
    { q: "What is the official REAP counseling code for RIET Jaipur?", a: "The official REAP code for RIET Jaipur is 1025. Please choose code 1025 during the centralized Rajasthan engineering counseling choice filling." },
    { q: "What documents are required during counseling reporting?", a: "Original and self-attested copies of 10th & 12th marksheets, JEE Main / REAP allotment letter, Migration, Transfer, Category, and Domicile certificates, plus 6 photographs." },
    { q: "Are hostel accommodations available for outstation students?", a: "Yes, RIET Jaipur provides separate on-campus secure hostels for boys and girls with furnished rooms, 24x7 Wi-Fi, air-cooling, and nutritious dining mess." },
    { q: "Is there any merit scholarship available for meritorious students?", a: "Yes, RIET offers tuition fee waiver scholarships based on 10+2 board marks, JEE Main percentiles, and state sports championships." }
  ];

  return (
    <div className="w-full font-sans text-[#2a2a2a] bg-white">
      <Template8PageHeader
        title="Admissions 2025-26"
        desc="Begin your engineering journey at RIET Jaipur. Explore eligibility criteria, REAP Code 1025 guidelines, and scholarship opportunities."
        breadcrumbs={[{ label: 'Admissions' }]}
      />

      {/* 4-Step Process Strip */}
      <section className="py-14 px-4 sm:px-6 bg-[#f8f9fa] border-b border-slate-200">
        <div className="max-w-[1240px] mx-auto">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs uppercase font-bold text-[#d2973b] tracking-widest block mb-1">
              Easy Application Protocol
            </span>
            <h3 className="text-2xl font-bold font-playfair text-[#192f59]">
              How to Apply in 4 Steps
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((st, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg border border-slate-200 shadow-2xs relative">
                <span className="text-3xl font-bold font-playfair text-[#d2973b] block mb-2">
                  {st.num}
                </span>
                <h4 className="text-base font-bold text-[#192f59] mb-1">
                  {st.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {st.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Table & Admission Sidebar */}
      <section className="py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Table (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#d2973b] block mb-1">
                Curricular Programs
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-playfair text-[#192f59]">
                Offered Programs &amp; Minimum Criteria
              </h2>
            </div>

            <div className="border border-slate-200 rounded-lg overflow-hidden shadow-2xs">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-[#192f59] text-white uppercase tracking-wider text-[11px]">
                    <th className="py-3.5 px-4 font-bold">Program</th>
                    <th className="py-3.5 px-4 hidden sm:table-cell font-bold">Eligibility Criteria</th>
                    <th className="py-3.5 px-4 text-right font-bold">Code</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {programsTable.map((prog, idx) => (
                    <tr key={idx} className="hover:bg-[#f8f9fa] transition-colors">
                      <td className="py-3.5 px-4 font-semibold text-[#192f59]">
                        <div>{prog.name}</div>
                        <div className="text-[10px] text-slate-500 sm:hidden mt-0.5">
                          {prog.eligibility}
                        </div>
                      </td>
                      <td className="py-3.5 px-4 text-slate-600 hidden sm:table-cell">
                        {prog.eligibility}
                      </td>
                      <td className="py-3.5 px-4 text-right">
                        <span className="bg-[#fef7eb] text-[#d2973b] font-bold px-2 py-0.5 rounded text-[11px] border border-[#fbd89a]">
                          {prog.code}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Sidebar (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 bg-[#192f59] text-white rounded-lg shadow-md space-y-4">
              <span className="text-[11px] uppercase font-bold text-[#d2973b] tracking-wider block">
                Direct Admissions Desk
              </span>
              <h3 className="text-xl font-bold font-playfair text-white">
                Need Help with REAP 1025?
              </h3>
              <p className="text-xs text-slate-200 leading-relaxed font-normal">
                Our senior admissions counselors are ready to help you with choice filling, document verification, and tuition scholarship applications.
              </p>

              <div className="space-y-2 pt-2 border-t border-white/10 text-xs">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#d2973b]" />
                  <span>+91 92571 11214 / 92571 11215</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#d2973b]" />
                  <span>inquiry@rietjaipur.ac.in</span>
                </div>
              </div>

              <button
                onClick={onOpenEnquiry}
                className="w-full bg-[#d2973b] hover:bg-[#b8822e] text-white font-bold py-3 px-6 rounded text-xs uppercase tracking-wider transition-colors shadow"
              >
                Apply Online Now
              </button>
            </div>

            {/* Checklist */}
            <div className="p-6 bg-white border border-slate-200 rounded-lg shadow-2xs space-y-3">
              <h4 className="font-bold text-[#192f59] text-sm uppercase tracking-wide">
                Documents Required For Reporting
              </h4>
              <ul className="space-y-2 text-xs text-slate-600">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#d2973b] shrink-0 mt-0.5" />
                  <span>10th &amp; 12th Marksheets &amp; Passing Certificates</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#d2973b] shrink-0 mt-0.5" />
                  <span>JEE Main Scorecard / REAP Allotment Letter</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#d2973b] shrink-0 mt-0.5" />
                  <span>Migration, Transfer &amp; Character Certificate</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#d2973b] shrink-0 mt-0.5" />
                  <span>Category &amp; Domicile Certificate (if applicable)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 bg-[#f8f9fa] border-t border-slate-200">
        <div className="max-w-[850px] mx-auto space-y-6">
          <div className="text-center">
            <span className="text-xs uppercase font-bold text-[#d2973b] tracking-widest block mb-1">
              Have Questions?
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-playfair text-[#192f59]">
              Frequently Asked Questions
            </h3>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-lg overflow-hidden shadow-2xs"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-bold text-sm text-[#192f59] hover:text-[#d2973b] transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-[#d2973b] shrink-0" />
                    <span>{faq.q}</span>
                  </span>
                  {openFaq === idx ? (
                    <ChevronUp className="w-4 h-4 text-[#d2973b] shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                  )}
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5 pt-1 text-xs text-slate-600 leading-relaxed border-t border-slate-100">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

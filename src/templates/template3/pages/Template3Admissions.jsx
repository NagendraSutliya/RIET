import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Template3PageHeader from '../components/Template3PageHeader';
import { ChevronDown, CheckCircle2 } from 'lucide-react';

export default function Template3Admissions({ onOpenEnquiry }) {
  const [openFaq, setOpenFaq] = useState(0);

  const programs = [
    { name: 'B.Tech 1st year', intake: 'Undergraduate (4 Years)', code: 'REAP 1025' },
    { name: 'B.Tech 2nd year (Lateral Entry)', intake: 'Direct 2nd Year (3 Years)', code: 'LEEEP 1025' },
    { name: 'B.Arch Architecture', intake: 'Council of Architecture (5 Years)', code: 'NATA / REAP' },
    { name: 'BBA Business Administration', intake: 'Undergraduate (3 Years)', code: 'Merit Direct' },
    { name: 'BCA Computer Applications', intake: 'Undergraduate (3 Years)', code: 'Merit Direct' },
    { name: 'M.Tech Advanced Engineering', intake: 'Postgraduate (2 Years)', code: 'CAM 1025' },
    { name: 'MBA Business Administration', intake: 'Postgraduate Dual (2 Years)', code: 'RMAT 278' },
    { name: 'MCA Computer Applications', intake: 'Postgraduate (2 Years)', code: 'RMCAAP 225' },
    { name: 'Ph.D Doctoral Research', intake: 'Doctoral (3+ Years)', code: 'RTU DAT' },
  ];

  const faqs = [
    {
      q: 'What is the REAP counselling code for RIET Jaipur?',
      a: 'The official REAP (Rajasthan Engineering Admission Process) counselling code for Rajasthan Institute of Engineering & Technology (RIET), Jaipur is 1025.'
    },
    {
      q: 'What are the eligibility criteria for B.Tech admission?',
      a: 'Candidates must have passed 10+2 with Physics and Mathematics as compulsory subjects along with Chemistry/CS/Bio, securing at least 45% marks (40% for reserved categories), or valid JEE Main scores.'
    },
    {
      q: 'Are scholarships available for girl students and defense wards?',
      a: 'Yes, RIET provides specialized institutional fee concessions up to 25% for girl students, wards of defense and paramilitary forces, and merit waivers up to 50% based on 12th board scores.'
    },
    {
      q: 'Can I apply for direct admission under the management quota?',
      a: 'Yes, 15% seats across B.Tech, MBA and MCA are reserved under the institutional management quota for direct merit-based admission. Contact the admissions desk for priority counselling.'
    }
  ];

  return (
    <div className="bg-white text-[#1A2233] w-full max-w-full overflow-x-hidden">
      <Template3PageHeader
        title="Admissions 2026-27"
        desc="Choose a program, apply online and upload your payment details. Transparent merit-based admission guidelines."
        breadcrumb="Admissions"
      />

      {/* Main Two-Column Workflow Section */}
      <section className="py-14 sm:py-18 bg-white w-full max-w-full overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left: Programs Table */}
            <div className="lg:col-span-7">
              <h2 className="font-heading font-black text-2xl text-[#0E2A5C] mb-6">
                Offered Programs &amp; Admission Codes
              </h2>

              <div className="border border-[#E1E6F0] rounded-xl overflow-hidden shadow-xs">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-[#F4F6FB] border-b border-[#E1E6F0] text-[#0E2A5C] font-bold">
                    <tr>
                      <th className="py-3.5 px-4">Program</th>
                      <th className="py-3.5 px-4 hidden sm:table-cell">Duration / Level</th>
                      <th className="py-3.5 px-4">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E1E6F0]">
                    {programs.map((p, idx) => (
                      <tr key={idx} className="hover:bg-slate-50 transition-colors">
                        <td className="py-3.5 px-4 font-bold text-[#0E2A5C]">
                          {p.name}
                          <span className="block text-[11px] font-normal text-slate-500 sm:hidden">
                            {p.intake} • {p.code}
                          </span>
                        </td>
                        <td className="py-3.5 px-4 text-slate-600 hidden sm:table-cell">
                          {p.intake}
                        </td>
                        <td className="py-3.5 px-4">
                          <Link
                            to="/courses"
                            className="font-extrabold text-xs text-[#0E2A5C] hover:text-[#F2A900] underline whitespace-nowrap"
                          >
                            Details →
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Right: Apply Online Card & 4-Step Guide */}
            <div className="lg:col-span-5 space-y-6">
              {/* Card 1: Official Codes */}
              <div className="bg-[#F4F6FB] border border-[#E1E6F0] rounded-xl p-6 shadow-xs">
                <h3 className="font-heading font-black text-xl text-[#0E2A5C] mb-2">
                  Apply Online
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                  REAP Code: <b className="text-[#0E2A5C]">1025</b><br />
                  CAM Code: <b className="text-[#0E2A5C]">1025</b> (M.Tech)<br />
                  RMCAAP Code: <b className="text-[#0E2A5C]">225</b> (MCA)<br />
                  RMAT Code: <b className="text-[#0E2A5C]">278</b> (MBA)
                </p>
                <button
                  onClick={onOpenEnquiry}
                  className="w-full bg-[#F2A900] hover:bg-[#e09b00] text-[#0E2A5C] font-black py-3 rounded-lg text-xs sm:text-sm shadow-xs transition-transform hover:scale-[1.01] active:scale-[0.99]"
                >
                  Start Online Application ↗
                </button>
              </div>

              {/* Card 2: How to Apply (Ordered numbered steps from Template 3) */}
              <div className="bg-white border border-[#E1E6F0] rounded-xl p-6 shadow-xs">
                <h3 className="font-heading font-black text-xl text-[#0E2A5C] mb-4">
                  How to Apply
                </h3>
                <ol className="space-y-4">
                  <li className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-[#0E2A5C] text-white font-extrabold text-xs flex items-center justify-center shrink-0">
                      1
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-slate-800">
                      Pick your program &amp; check eligibility
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-[#0E2A5C] text-white font-extrabold text-xs flex items-center justify-center shrink-0">
                      2
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-slate-800">
                      Fill the online application form
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-[#0E2A5C] text-white font-extrabold text-xs flex items-center justify-center shrink-0">
                      3
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-slate-800">
                      Upload your academic &amp; payment details
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-[#0E2A5C] text-white font-extrabold text-xs flex items-center justify-center shrink-0">
                      4
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-slate-800">
                      Confirm your provisional admission seat
                    </span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-14 sm:py-18 bg-[#F4F6FB] border-t border-[#E1E6F0] w-full max-w-full overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-heading font-black text-2xl sm:text-3xl text-[#0E2A5C] mb-6 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#E1E6F0] rounded-xl overflow-hidden shadow-xs"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 font-bold text-sm text-[#0E2A5C] hover:bg-slate-50 transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-[#F2A900] transition-transform ${openFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
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

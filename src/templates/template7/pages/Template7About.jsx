import React from 'react';
import Template7PageHeader from '../components/Template7PageHeader';
import { Award, ShieldCheck, Users, Building, FileText, Handshake, CheckCircle2, ArrowRight } from 'lucide-react';

export default function Template7About({ onOpenEnquiry }) {
  const exploreCards = [
    { title: "Leadership & Chancellor Message", badge: "Vision 2026", desc: "Insights from our Chairman, Vice-Chairman and Principal on engineering pedagogy.", icon: Users },
    { title: "Academic Advisory Board", badge: "Curriculum Council", desc: "Senior professors from IITs, NITs, and central research bodies reviewing curriculum standards.", icon: Award },
    { title: "Board of Governors", badge: "Apex Council", desc: "Eminent academicians, RTU nominees, industrial stalwarts, and administrative mentors.", icon: ShieldCheck },
    { title: "Corporate Alliances & MoUs", badge: "Active Alliances", desc: "Official technology academies with Microsoft Imagine Academy, Cisco, Oracle, IBM, and SAP.", icon: Handshake },
    { title: "Affiliations & Approvals", badge: "AICTE / RTU", desc: "Permanent AICTE approval, Rajasthan Technical University Kota affiliation, and NBA Accreditation.", icon: FileText },
    { title: "Student Welfare & Grievance Cell", badge: "Campus Support", desc: "Dedicated student ombudsman, women cell, anti-ragging squad, and psychological counselling.", icon: Building }
  ];

  return (
    <div className="w-full font-sans text-[#2a2a2a] bg-white">
      <Template7PageHeader
        title="About Our University"
        desc="Established in 2000, RIET Jaipur is an A-graded premier technology institution approved by AICTE, New Delhi and affiliated to Rajasthan Technical University, Kota."
        breadcrumbs={[{ label: 'About Us' }]}
      />

      {/* Main Narrative */}
      <section className="py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#d2973b] block mb-2">
                A Quarter Century of Rigor
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-playfair text-[#192f59] leading-tight">
                Empowering Tomorrow's Engineers, Researchers &amp; Entrepreneurs
              </h2>
              <div className="h-1 w-14 bg-[#d2973b] my-4 rounded-full" />
            </div>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Rajasthan Institute of Engineering and Technology (RIET) was founded in the year 2000 by a society of visionary educationists and industrial stalwarts. Over the past 24+ years, RIET has grown into an internationally recognized center of technical learning.
            </p>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Situated on Ajmer Road in Jaipur across a modern 30-acre green campus, RIET offers 8 B.Tech branches, M.Tech specializations, MBA, MCA, and doctoral programs. The institute has graduated over 15,000 alumni who lead innovative projects at Fortune 500 tech companies worldwide.
            </p>

            {/* Quick Stat Pill Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 bg-[#f8f9fa] border border-slate-200 rounded text-center">
                <div className="text-2xl sm:text-3xl font-bold font-playfair text-[#192f59]">2000</div>
                <div className="text-xs font-semibold text-slate-500 uppercase mt-0.5">Established</div>
              </div>
              <div className="p-4 bg-[#f8f9fa] border border-slate-200 rounded text-center">
                <div className="text-2xl sm:text-3xl font-bold font-playfair text-[#d2973b]">1025</div>
                <div className="text-xs font-semibold text-slate-500 uppercase mt-0.5">REAP Code</div>
              </div>
              <div className="p-4 bg-[#f8f9fa] border border-slate-200 rounded text-center col-span-2 sm:col-span-1">
                <div className="text-2xl sm:text-3xl font-bold font-playfair text-[#192f59]">15,000+</div>
                <div className="text-xs font-semibold text-slate-500 uppercase mt-0.5">Alumni</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-lg overflow-hidden shadow-xl border border-slate-200 relative group">
              <img
                src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80"
                alt="RIET Main Campus Building"
                className="w-full h-[380px] object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#192f59]/90 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                <span className="font-playfair text-xl font-bold">Main Academic Block</span>
                <span className="text-xs text-slate-200 mt-1">Bhankrota, Ajmer Road, Jaipur • 30-Acre Campus</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Cards */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-[#f7f8fa] border-t border-b border-slate-200">
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg border-t-4 border-[#d2973b] shadow-sm">
            <span className="text-xs uppercase font-bold text-[#d2973b] tracking-wider block mb-2">
              Our Direction
            </span>
            <h3 className="text-2xl font-bold font-playfair text-[#192f59] mb-4">
              Institutional Vision
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              To be an internationally recognized center of technological excellence, fostering ethical leadership, research innovation, and multidisciplinary education that transforms lives and drives national prosperity.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg border-t-4 border-[#192f59] shadow-sm">
            <span className="text-xs uppercase font-bold text-[#192f59] tracking-wider block mb-2">
              Our Purpose
            </span>
            <h3 className="text-2xl font-bold font-playfair text-[#192f59] mb-4">
              Institutional Mission
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              To impart rigorous engineering and management education with state-of-the-art laboratory infrastructure, foster industry-academia collaboration, instill ethical responsibility, and nurture student entrepreneurship.
            </p>
          </div>
        </div>
      </section>

      {/* Governance & Boards */}
      <section className="py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-[1240px] mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#d2973b] block mb-2">
              Leadership &amp; Councils
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-playfair text-[#192f59]">
              University Governance Structure
            </h2>
            <div className="h-1 w-14 bg-[#d2973b] my-4 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {exploreCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-lg border border-slate-200 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between group"
                >
                  <div className="space-y-3">
                    <div className="w-12 h-12 rounded bg-[#192f59]/10 text-[#192f59] group-hover:bg-[#192f59] group-hover:text-white flex items-center justify-center transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#d2973b] block">
                      {card.badge}
                    </span>
                    <h3 className="text-lg font-bold font-playfair text-[#192f59] group-hover:text-[#d2973b] transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-slate-100 mt-4 flex items-center gap-1.5 text-xs text-[#192f59] font-bold">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#d2973b]" />
                    <span>Active Regulatory Charter</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

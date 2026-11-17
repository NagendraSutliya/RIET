import React, { useState } from 'react';
import Template4PageHeader from '../components/Template4PageHeader';
import { Award, CheckCircle2, ShieldCheck, Users, Building, FileText, Handshake } from 'lucide-react';
import { collegeInfo } from '../../../data/collegeData';

export default function Template4About({ onOpenEnquiry }) {
  const [activeTab, setActiveTab] = useState('all');

  const exploreCards = [
    {
      title: "Leadership Messages",
      category: "Governance",
      desc: "Insights from our Chairman, Vice-Chairman and Principal on engineering pedagogy, ethical character, and continuous technological transformation.",
      icon: Users,
      badge: "Vision 2026"
    },
    {
      title: "Disciplines & Faculties",
      category: "Academics",
      desc: "Specialized schools in Computing & AI, Emerging Technologies, Core Mechanical & Civil, Management Studies, and Computer Applications.",
      icon: Building,
      badge: "8 Faculties"
    },
    {
      title: "Board of Governors",
      category: "Governance",
      desc: "Eminent academicians, RTU nominees, industrial stalwarts, and administrative mentors guiding strategic policy and capital investments.",
      icon: ShieldCheck,
      badge: "Apex Council"
    },
    {
      title: "Academic Advisory Board",
      category: "Academic Quality",
      desc: "Senior professors from IITs, NITs, and central research bodies reviewing curriculum standards, syllabus modernization, and evaluation rigor.",
      icon: Award,
      badge: "Curriculum Council"
    },
    {
      title: "Industry Advisory Board",
      category: "Industry Linkages",
      desc: "Corporate leaders from Microsoft, Oracle, Cisco, and TCS bridging university curriculum with enterprise software and automation requirements.",
      icon: Users,
      badge: "Corporate Council"
    },
    {
      title: "MoUs & Collaborations",
      category: "Partnerships",
      desc: "Official technology academies and center of excellence partnerships with Microsoft Imagine Academy, Cisco Networking Academy, Oracle, IBM, and SAP.",
      icon: Handshake,
      badge: "Active Alliances"
    },
    {
      title: "Affiliation & Approvals",
      category: "Accreditation",
      desc: "Permanent AICTE New Delhi approval, Rajasthan Technical University (RTU) Kota affiliation, NBA Accreditation (2012–15), and A-grade standing.",
      icon: FileText,
      badge: "AICTE / RTU"
    }
  ];

  return (
    <div className="w-full font-manrope">
      {/* 1. PAGE HEADER */}
      <Template4PageHeader
        title="About"
        desc="Established in 2000, an A-graded institute approved by AICTE and affiliated to Rajasthan Technical University, Kota."
      />

      {/* 2. THE INSTITUTE OVERVIEW (Two-Column) */}
      <section className="py-14 sm:py-20 px-6 sm:px-10 bg-white">
        <div className="max-w-[1060px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#B3263A]">
              Institute Heritage
            </span>
            <h2 className="font-bricolage text-3xl sm:text-4xl font-bold text-[#1C1B22] tracking-tight">
              The institute
            </h2>
            <p className="text-[#4A4752] text-base sm:text-lg leading-relaxed">
              RIET offers industry-focused diploma, undergraduate, postgraduate and doctoral courses. It was established in 2000 with approvals from AICTE, New Delhi and Rajasthan Technical University, Kota.
            </p>
            <p className="text-[#4A4752] text-base leading-relaxed">
              The institute is A-graded and was NBA accredited for 2012 to 2015. Located on Ajmer Road, Jaipur across a lush green Wi-Fi enabled campus, RIET has fostered more than 15,000 engineers, managers, and innovators globally.
            </p>

            <div className="grid grid-cols-2 gap-3 pt-3">
              <div className="p-4 bg-[#F6F3F4] rounded border border-[#DAD5D8]">
                <div className="font-bricolage text-2xl font-bold text-[#B3263A]">2000</div>
                <div className="text-xs text-[#4A4752] font-semibold mt-0.5">Year of Foundation</div>
              </div>
              <div className="p-4 bg-[#F6F3F4] rounded border border-[#DAD5D8]">
                <div className="font-bricolage text-2xl font-bold text-[#B3263A]">1025</div>
                <div className="text-xs text-[#4A4752] font-semibold mt-0.5">Official REAP Code</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-lg overflow-hidden border border-[#DAD5D8] shadow-md relative group">
              <img
                src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80"
                alt="RIET Jaipur Campus Infrastructure"
                className="w-full h-[320px] object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C1B22]/85 via-transparent to-transparent flex flex-col justify-end p-5 text-white">
                <span className="font-bricolage font-bold text-base">Campus Academic Block</span>
                <span className="text-xs text-[#D9D6DE]">Ajmer Road, Bhankrota, Jaipur</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. EXPLORE SECTION (Connected Grid) */}
      <section className="bg-[#F6F3F4] py-14 sm:py-20 px-6 sm:px-10 border-t border-[#DAD5D8]">
        <div className="max-w-[1060px] mx-auto">
          <div className="mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#B3263A]">
              Institutional Pillars
            </span>
            <h2 className="font-bricolage text-3xl sm:text-4xl font-bold text-[#1C1B22] mt-1">
              Explore
            </h2>
            <p className="text-sm text-[#4A4752]">
              Governance councils, academic advisories, industry collaborations and statutory affiliations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-[#DAD5D8]">
            {exploreCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <div
                  key={idx}
                  className="p-7 bg-white border-r border-b border-[#DAD5D8] hover:bg-[#FAF8F9] transition-colors flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-[#F7DDE1] text-[#7A1626]">
                        {card.badge}
                      </span>
                      <Icon className="w-5 h-5 text-[#B3263A]" />
                    </div>
                    <h3 className="font-bricolage text-xl font-bold text-[#1C1B22] mb-2">
                      {card.title}
                    </h3>
                    <p className="text-xs text-[#4A4752] leading-relaxed">
                      {card.desc}
                    </p>
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

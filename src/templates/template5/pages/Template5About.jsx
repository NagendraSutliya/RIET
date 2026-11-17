import React from 'react';
import Template5PageHeader from '../components/Template5PageHeader';
import { Award, ShieldCheck, Users, Building, FileText, Handshake } from 'lucide-react';

export default function Template5About({ onOpenEnquiry }) {
  const exploreCards = [
    {
      title: "Leadership Messages",
      badge: "Vision 2026",
      desc: "Guiding philosophy from our Chairman, Vice-Chairman and Principal on future-focused engineering and ethical values.",
      icon: Users
    },
    {
      title: "Disciplines & Schools",
      badge: "8 Faculties",
      desc: "Specialized schools in Computing & AI, Emerging Technologies, Core Mechanical & Civil, Management, and Applications.",
      icon: Building
    },
    {
      title: "Board of Governors",
      badge: "Apex Council",
      desc: "Eminent academicians, RTU nominees, industrial stalwarts, and administrative mentors guiding strategic policy.",
      icon: ShieldCheck
    },
    {
      title: "Academic Advisory Board",
      badge: "Curriculum Council",
      desc: "Senior professors from IITs, NITs, and central research bodies reviewing curriculum standards and syllabus modernization.",
      icon: Award
    },
    {
      title: "Industry Advisory Board",
      badge: "Corporate Council",
      desc: "Corporate leaders from Microsoft, Oracle, Cisco, and TCS bridging university curriculum with enterprise systems.",
      icon: Users
    },
    {
      title: "MoUs & Collaborations",
      badge: "Active Alliances",
      desc: "Official technology academies and center of excellence partnerships with Microsoft, Cisco, Oracle, IBM, and SAP.",
      icon: Handshake
    },
    {
      title: "Affiliation & Approvals",
      badge: "AICTE / RTU",
      desc: "Permanent AICTE approval, Rajasthan Technical University (RTU) Kota affiliation, NBA Accreditation, and A-grade standing.",
      icon: FileText
    }
  ];

  return (
    <div className="w-full font-sans text-[#16262B]">
      <Template5PageHeader
        title="About"
        desc="Established in 2000, an A-graded institute approved by AICTE and affiliated to Rajasthan Technical University, Kota."
      />

      {/* Two Column Institute Heritage */}
      <section className="py-16 sm:py-20 px-6 sm:px-10 bg-white">
        <div className="max-w-[1180px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#F58B3A]">
              Institute Heritage
            </span>
            <h2 className="font-fraunces text-3xl sm:text-4xl font-bold text-[#0A3340]">
              The institute
            </h2>
            <p className="text-base sm:text-lg text-[#3C5961] leading-relaxed">
              RIET offers industry-focused diploma, undergraduate, postgraduate and doctoral courses. It was established in 2000 with approvals from AICTE, New Delhi and Rajasthan Technical University, Kota.
            </p>
            <p className="text-base text-[#3C5961] leading-relaxed">
              The institute is A-graded and was NBA accredited for 2012 to 2015. Located on Ajmer Road, Jaipur across a lush green Wi-Fi enabled campus, RIET has fostered more than 15,000 engineers, managers, and innovators globally.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-5 bg-[#EEF4F5] rounded-[22px]">
                <div className="font-fraunces text-3xl font-bold text-[#0F4C5C]">2000</div>
                <div className="text-xs text-[#3C5961] font-semibold mt-1">Foundation Year</div>
              </div>
              <div className="p-5 bg-[#EEF4F5] rounded-[22px]">
                <div className="font-fraunces text-3xl font-bold text-[#0F4C5C]">1025</div>
                <div className="text-xs text-[#3C5961] font-semibold mt-1">REAP Counseling Code</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-[22px] overflow-hidden shadow-lg border border-[#D5E3E6] relative group">
              <img
                src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80"
                alt="RIET Jaipur Campus Infrastructure"
                className="w-full h-[320px] object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A3340]/85 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                <span className="font-fraunces font-bold text-lg">Academic Complex</span>
                <span className="text-xs text-[#D5E8EC]">Bhankrota, Ajmer Road, Jaipur</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Grid */}
      <section className="bg-[#F2F6F7] py-16 sm:py-20 px-6 sm:px-10 border-t border-[#D5E3E6]">
        <div className="max-w-[1180px] mx-auto">
          <div className="mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#F58B3A]">
              Institutional Pillars
            </span>
            <h2 className="font-fraunces text-3xl sm:text-4xl font-bold text-[#0A3340] mt-1">
              Explore
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {exploreCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <div
                  key={idx}
                  className="p-8 bg-white rounded-[22px] border border-[#D5E3E6] hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-[#FFE3CC] text-[#7A3300]">
                        {card.badge}
                      </span>
                      <Icon className="w-5 h-5 text-[#0F4C5C]" />
                    </div>
                    <h3 className="font-fraunces text-2xl font-bold text-[#0A3340] mb-2">
                      {card.title}
                    </h3>
                    <p className="text-xs text-[#3C5961] leading-relaxed">
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

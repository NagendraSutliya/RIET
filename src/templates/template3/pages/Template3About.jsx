import React from 'react';
import { Link } from 'react-router-dom';
import Template3PageHeader from '../components/Template3PageHeader';
import { ShieldCheck, Award, Users, BookOpen, Handshake, FileCheck } from 'lucide-react';

export default function Template3About({ onOpenEnquiry }) {
  const exploreCards = [
    { title: 'Chairman & Principal Message', desc: 'Guidance and academic vision shaping progressive engineering pedagogies.', link: '/contact' },
    { title: 'Academic Disciplines', desc: 'Nine specialized fields of study across engineering, management and computing.', link: '/courses' },
    { title: 'Board of Governors', desc: 'Distinguished academic leaders and industry luminaries directing institutional growth.', link: '/about' },
    { title: 'Academic Advisory Board', desc: 'Renowned researchers and professors guiding syllabus modernization and research.', link: '/academics' },
    { title: 'Industry Advisory Board', desc: 'Corporate leaders from IT and core sectors steering placement and technical workshops.', link: '/placements' },
    { title: 'MoUs & Collaborations', desc: 'Academic partnerships with Microsoft, Cisco Networking Academy, IBM, Oracle, and Red Hat.', link: '/about' },
    { title: 'Regulatory Affiliations', desc: 'Verified AICTE Extension of Approval and RTU Kota permanent affiliation documentation.', link: '/about' },
  ];

  return (
    <div className="bg-white text-[#1A2233] w-full max-w-full overflow-x-hidden">
      <Template3PageHeader
        title="About RIET Jaipur"
        desc="Established in 2000, an A-graded institute approved by AICTE and affiliated to Rajasthan Technical University, Kota."
        breadcrumb="About"
      />

      {/* The Institute Overview Split */}
      <section className="py-14 sm:py-18 bg-white w-full max-w-full overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-5">
              <h2 className="font-heading font-black text-2xl sm:text-3xl text-[#0E2A5C]">
                The Institute
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                RIET offers industry-focused diploma, undergraduate, postgraduate and doctoral courses. It was established in 2000 with approvals from AICTE, New Delhi and Rajasthan Technical University, Kota.
              </p>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                The institute is A-graded and was NBA accredited for 2012 to 2015. Over the last 25 years, more than 18,000 alumni have graduated from RIET into prominent technological and leadership careers globally.
              </p>

              <div className="pt-2">
                <button
                  onClick={onOpenEnquiry}
                  className="bg-[#F2A900] hover:bg-[#e09b00] text-[#0E2A5C] font-black px-6 py-3 rounded-lg text-xs sm:text-sm shadow-xs transition-transform hover:scale-105 active:scale-95"
                >
                  Contact Admissions ↗
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-xl overflow-hidden border border-[#E1E6F0] shadow-md bg-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=900&q=82"
                  alt="RIET Campus Building"
                  className="w-full h-72 sm:h-80 object-cover"
                />
                <div className="p-4 bg-[#F4F6FB] border-t border-[#E1E6F0] text-xs text-[#44506B]">
                  <b>RIET Campus, Bhankrota</b> • Ajmer Road, Jaipur
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Grid */}
      <section className="py-14 sm:py-18 bg-[#F4F6FB] border-t border-[#E1E6F0] w-full max-w-full overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="font-heading font-black text-2xl sm:text-3xl text-[#0E2A5C] mb-8">
            Explore Institutional Governance
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {exploreCards.map((card, idx) => (
              <Link
                key={idx}
                to={card.link}
                className="bg-white border border-[#E1E6F0] rounded-xl p-6 shadow-xs hover:shadow-md hover:border-[#F2A900] transition-all flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-heading font-bold text-lg text-[#0E2A5C] mb-2">
                    {card.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                    {card.desc}
                  </p>
                </div>
                <span className="text-xs font-bold text-[#0E2A5C] hover:underline">
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

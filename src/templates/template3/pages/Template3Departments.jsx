import React from 'react';
import { Link } from 'react-router-dom';
import Template3PageHeader from '../components/Template3PageHeader';
import { ArrowRight, Cpu, Layers, ShieldCheck, Wifi, Wrench, Building2, Monitor } from 'lucide-react';

export default function Template3Departments({ onOpenEnquiry }) {
  const departments = [
    {
      title: 'Cyber Security',
      tag: 'New in 2024',
      degree: 'B.Tech (4 Years)',
      desc: 'Network defense, threat intelligence, cryptography, ethical hacking drills, and cloud infrastructure security approved by RTU Kota.',
      link: '/department-detail'
    },
    {
      title: 'Computer Science & Design',
      tag: 'New in 2024',
      degree: 'B.Tech (4 Years)',
      desc: 'Synergy of core computing, human-computer interaction, UI/UX architecture, digital media engineering, and generative visuals.',
      link: '/department-detail'
    },
    {
      title: 'Internet of Things (IoT)',
      tag: 'New in 2024',
      degree: 'B.Tech (4 Years)',
      desc: 'Embedded firmware, sensory network protocols, edge cloud computing, and industrial automation under RTU Kota approval.',
      link: '/department-detail'
    },
    {
      title: 'Artificial Intelligence & Data Science',
      tag: 'Trending Field',
      degree: 'B.Tech (4 Years)',
      desc: 'Deep learning models, natural language processing, predictive analytics, computer vision, and neural network engineering.',
      link: '/department-detail'
    },
    {
      title: 'Computer Science & Engineering',
      tag: 'Flagship Branch',
      degree: 'B.Tech & M.Tech',
      desc: 'Established in 2000. NBA accredited 2011 to 2014. Full-stack software engineering, algorithms, iOS and cloud laboratories.',
      link: '/department-detail'
    },
    {
      title: 'Electronics & Communication',
      tag: 'Core Tech',
      degree: 'B.Tech & M.Tech',
      desc: 'Digital signal processing, VLSI microelectronics, microwave communication, 5G wireless protocols, and embedded systems.',
      link: '/department-detail'
    },
    {
      title: 'Mechanical Engineering',
      tag: 'Core Discipline',
      degree: 'B.Tech & M.Tech',
      desc: 'Automotive dynamics, thermodynamics, CNC machining, CAD/CAM drafting, robotics, and precision manufacturing.',
      link: '/department-detail'
    },
    {
      title: 'Civil Engineering',
      tag: 'Infrastructure',
      degree: 'B.Tech (Established 2012)',
      desc: 'Structural modeling, concrete testing, soil mechanics, GIS surveying, fluid hydraulics, and sustainable smart city design.',
      link: '/department-detail'
    },
    {
      title: 'Information Technology',
      tag: 'Established 2000',
      degree: 'B.Tech (4 Years)',
      desc: 'Enterprise database systems, distributed networking, IT service management, web architectures, and mobile applications.',
      link: '/department-detail'
    }
  ];

  return (
    <div className="bg-white text-[#1A2233] w-full max-w-full overflow-x-hidden">
      <Template3PageHeader
        title="Departments"
        desc="Nine academic departments across computing, electronics, mechanical and civil engineering."
        breadcrumb="Departments"
      />

      <section className="py-14 sm:py-18 bg-white w-full max-w-full overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept, idx) => (
              <Link
                key={idx}
                to={dept.link}
                className="bg-white border border-[#E1E6F0] rounded-xl p-6 shadow-xs hover:shadow-md hover:border-[#F2A900] transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="inline-block text-[11px] font-bold bg-[#FFF1CC] text-[#5C3D00] px-2.5 py-0.5 rounded-full">
                      {dept.tag}
                    </span>
                    <span className="text-[11px] text-slate-500 font-semibold">{dept.degree}</span>
                  </div>

                  <h3 className="font-heading font-black text-xl text-[#0E2A5C] group-hover:text-[#F2A900] transition-colors mb-2">
                    {dept.title}
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                    {dept.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#0E2A5C]">
                  <span>View department details</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="bg-[#F4F6FB] py-12 border-t border-[#E1E6F0] text-center w-full max-w-full overflow-hidden">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="font-heading font-black text-xl text-[#0E2A5C] mb-2">
            Interested in Joining a Specific Engineering Department?
          </h3>
          <p className="text-slate-600 text-xs sm:text-sm mb-4">
            Seats allocated through REAP Code 1025 or direct management quota.
          </p>
          <button
            onClick={onOpenEnquiry}
            className="bg-[#0E2A5C] hover:bg-[#183a75] text-[#F2A900] font-bold px-6 py-2.5 rounded-lg text-xs shadow-xs transition-colors"
          >
            Apply for Department ↗
          </button>
        </div>
      </section>
    </div>
  );
}

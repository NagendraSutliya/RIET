import React from 'react';
import { Link } from 'react-router-dom';
import Template3PageHeader from '../components/Template3PageHeader';
import { Cpu, Users, BookOpen, Award, CheckCircle2 } from 'lucide-react';
import { departmentData } from '../../../data/collegeData';

export default function Template3DepartmentDetail({ onOpenEnquiry }) {
  const cseFaculty = departmentData.cse?.faculty || [];

  const labs = [
    {
      title: 'Apple iOS & Swift Development Lab',
      desc: '30+ high-end iMacs with macOS Sonoma, Xcode development environments, and mobile device testbeds.'
    },
    {
      title: 'NVIDIA AI & High Performance Computing Lab',
      desc: 'Multi-GPU acceleration nodes dedicated to training deep neural networks, computer vision, and NLP.'
    },
    {
      title: 'Cyber Security & Network Defense Lab',
      desc: 'Isolated virtualized sandboxes for packet sniffer analysis, ethical penetration testing, and cryptography.'
    },
    {
      title: 'IoT & Embedded Systems Lab',
      desc: 'Arduino, Raspberry Pi 4 kits, ESP32 microcontrollers, Zigbee mesh sensors, and cloud communication gateways.'
    }
  ];

  return (
    <div className="bg-white text-[#1A2233] w-full max-w-full overflow-x-hidden">
      <Template3PageHeader
        title="Computer Science &amp; Engineering"
        desc="B.Tech and M.Tech. Established in 2000 and NBA accredited from 2011 to 2014."
        breadcrumb="CSE Department"
      />

      {/* About Department Two-Column Split */}
      <section className="py-14 sm:py-18 bg-white w-full max-w-full overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left: About Details */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <h2 className="font-heading font-black text-2xl sm:text-3xl text-[#0E2A5C] mb-3">
                  About the Department
                </h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  The Department of Computer Science & Engineering at RIET Jaipur was founded in the year 2000. It has established an exceptional track record of academic rigor, research publications, and corporate recruitment across tier-1 technology multinationals.
                </p>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mt-3">
                  The department was granted NBA Accreditation for 2011 to 2014. It emphasizes hands-on software development, competitive algorithmic problem solving, machine learning, and cloud infrastructure.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <h3 className="font-heading font-black text-xl text-[#0E2A5C] mb-3">
                  Academic Programs Offered
                </h3>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#F2A900] shrink-0" />
                    <span><b>B.Tech in Computer Science &amp; Engineering:</b> 4-Year Undergraduate (Intake: 180 Seats)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#F2A900] shrink-0" />
                    <span><b>M.Tech in Computer Science &amp; Engineering:</b> 2-Year Postgraduate Research (Intake: 18 Seats)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#F2A900] shrink-0" />
                    <span><b>Ph.D in Computer Science:</b> Recognized RTU Kota Doctoral Research Center</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right: Head of Department Card */}
            <div className="lg:col-span-5">
              <div className="bg-[#F4F6FB] border border-[#E1E6F0] rounded-xl p-6 shadow-xs">
                <h3 className="font-heading font-black text-xl text-[#0E2A5C] mb-4">
                  Head of Department
                </h3>
                <div className="rounded-xl overflow-hidden mb-4 border border-[#E1E6F0] bg-white">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80"
                    alt="Head of Department"
                    className="w-full h-56 object-cover"
                  />
                </div>
                <h4 className="font-heading font-black text-lg text-[#0E2A5C]">
                  Dr. Neha Sharma
                </h4>
                <p className="text-xs text-[#F2A900] font-extrabold uppercase tracking-wide">
                  Professor &amp; Head, Dept of CSE
                </p>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mt-3">
                  “Our pedagogy empowers undergraduates to bridge abstract mathematical concepts with deployable, cloud-native applications solving real-world challenges.”
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Section (Alt Background) */}
      <section className="py-14 sm:py-18 bg-[#F4F6FB] border-y border-[#E1E6F0] w-full max-w-full overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="font-heading font-black text-2xl sm:text-3xl text-[#0E2A5C] mb-8">
            Department Faculty
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {cseFaculty.map((f, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#E1E6F0] rounded-xl p-5 shadow-xs text-center flex flex-col items-center"
              >
                <div className="w-24 h-24 rounded-full overflow-hidden mb-3 border-2 border-[#F2A900] bg-slate-100">
                  <img
                    src={f.img || f.photo || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80"}
                    alt={f.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <b className="font-heading font-bold text-base text-[#0E2A5C] block">
                  {f.name}
                </b>
                <p className="text-xs text-slate-500 mt-0.5">{f.role || f.designation}</p>
                <span className="text-[11px] text-[#F2A900] font-semibold mt-2">{f.degree || f.specialization}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Labs and Research */}
      <section className="py-14 sm:py-18 bg-white w-full max-w-full overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="font-heading font-black text-2xl sm:text-3xl text-[#0E2A5C] mb-8">
            Labs and Research Facilities
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {labs.map((lab, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#E1E6F0] rounded-xl p-6 shadow-xs hover:border-[#F2A900] transition-colors"
              >
                <h3 className="font-heading font-black text-lg text-[#0E2A5C] mb-2 flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-[#F2A900]" />
                  <span>{lab.title}</span>
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {lab.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

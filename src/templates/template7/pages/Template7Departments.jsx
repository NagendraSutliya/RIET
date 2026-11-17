import React from 'react';
import { Link } from 'react-router-dom';
import Template7PageHeader from '../components/Template7PageHeader';
import { Shield, Laptop, Wifi, Brain, Terminal, Radio, Cog, Building2, Cpu, ArrowRight } from 'lucide-react';

export default function Template7Departments({ onOpenEnquiry }) {
  const departmentsList = [
    { id: "cyber", name: "Cyber Security", tag: "New in 2024", degree: "B.Tech", desc: "Defensive architecture, ethical hacking, digital forensics, network cryptography, and threat analysis.", icon: Shield, labs: "Cyber Range & CTF Arena • Digital Forensics Lab" },
    { id: "csd", name: "Computer Science & Design", tag: "New in 2024", degree: "B.Tech", desc: "Merging algorithmic computer science with UI/UX design, interactive media, and human-computer interaction.", icon: Laptop, labs: "HCI & Interface Lab • 3D Shader Graphics Suite" },
    { id: "iot", name: "Internet of Things (IoT)", tag: "New in 2024", degree: "B.Tech", desc: "Micro-controllers, wireless sensor networks, embedded C/Python, and smart industrial automation.", icon: Wifi, labs: "Smart Sensor Mesh Lab • ARM Cortex Lab" },
    { id: "aids", name: "Artificial Intelligence & Data Science", degree: "B.Tech", desc: "Predictive neural architectures, deep learning models, computer vision, and GPU cluster computing.", icon: Brain, labs: "NVIDIA Deep Learning Pod • Big Data Hadoop Node" },
    { id: "cse", name: "Computer Science & Engineering", tag: "NBA Accredited", degree: "B.Tech & M.Tech", desc: "Established 2000. Core algorithms, compiler design, cloud microservices, and distributed data structures.", icon: Terminal, labs: "Advanced Computing Cluster • Cloud DevOps Suite" },
    { id: "ece", name: "Electronics & Communication", tag: "RTU Rank #1", degree: "B.Tech & M.Tech", desc: "Ranked 1 in RTU Kota. Semiconductor design, Cadence VLSI layout, FPGA synthesis, 5G RF engineering, and DSP nodes.", icon: Radio, labs: "VLSI Cadence Suite • Microwave & Antenna Lab" },
    { id: "me", name: "Mechanical Engineering", degree: "B.Tech & M.Tech", desc: "Autonomous mobile robotics, CNC machining, digital twin kinematics, and BAJA SAE motorsport design.", icon: Cog, labs: "Robotics Mechatronics Lab • SolidWorks Studio" },
    { id: "ce", name: "Civil Engineering", degree: "B.Tech", desc: "Smart transit corridors, seismic structural dynamics, digital total stations, and environmental engineering.", icon: Building2, labs: "1000 kN Structural UTM Lab • Total Station GIS" },
    { id: "it", name: "Information Technology", degree: "B.Tech", desc: "High-scale enterprise databases, network protocols, cybersecurity audits, and full-stack cloud DevOps.", icon: Cpu, labs: "Enterprise Database Lab • Cisco CCNA Routing Lab" }
  ];

  return (
    <div className="w-full font-sans text-[#2a2a2a] bg-white">
      <Template7PageHeader
        title="Academic Departments"
        desc="Nine specialized engineering faculties equipped with advanced laboratories, corporate technology alliances, and experienced researchers."
        breadcrumbs={[{ label: 'Departments' }]}
      />

      <section className="py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-[1240px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {departmentsList.map((dept) => {
              const Icon = dept.icon;
              return (
                <Link
                  key={dept.id}
                  to={`/departments/${dept.id}`}
                  className="bg-white p-7 rounded-lg border border-slate-200 shadow-2xs hover:shadow-xl transition-all flex flex-col justify-between group hover:border-[#d2973b]"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      {dept.tag ? (
                        <span className="text-[11px] font-bold px-3 py-1 rounded bg-[#fef7eb] text-[#d2973b]">
                          {dept.tag}
                        </span>
                      ) : (
                        <span className="text-[11px] font-bold px-3 py-1 rounded bg-[#f0f4fa] text-[#192f59]">
                          {dept.degree}
                        </span>
                      )}
                      <div className="w-10 h-10 rounded bg-[#f8f9fa] flex items-center justify-center text-[#192f59] group-hover:bg-[#192f59] group-hover:text-white transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="text-xl font-bold font-playfair text-[#192f59] group-hover:text-[#d2973b] transition-colors mb-2">
                      {dept.name}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-4">
                      {dept.desc}
                    </p>

                    <div className="text-xs text-slate-600 bg-[#f8f9fa] p-3 rounded border border-slate-200">
                      <strong className="text-[#192f59]">Labs: </strong>
                      {dept.labs}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 mt-6 flex items-center justify-between text-xs font-bold text-[#192f59] group-hover:text-[#d2973b] transition-colors uppercase tracking-wider">
                    <span>Department Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

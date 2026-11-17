import React from 'react';
import { Link } from 'react-router-dom';
import Template4PageHeader from '../components/Template4PageHeader';
import { ArrowRight, Cpu, Shield, Wifi, Brain, Laptop, Radio, Cog, Building2, Terminal } from 'lucide-react';

export default function Template4Departments({ onOpenEnquiry }) {
  const departmentsList = [
    {
      id: "cyber",
      name: "Cyber Security",
      tag: "New in 2024",
      degree: "B.Tech",
      desc: "B.Tech, approved by RTU Kota. Defensive architecture, ethical hacking, malware analysis, cryptography, and digital forensics.",
      icon: Shield,
      labs: "Cyber Range & CTF Arena, Digital Forensics Lab"
    },
    {
      id: "csd",
      name: "Computer Science & Design",
      tag: "New in 2024",
      degree: "B.Tech",
      desc: "B.Tech, approved by RTU Kota. Merging computational systems with UI/UX interaction design, digital media, 3D graphics, and HCI.",
      icon: Laptop,
      labs: "UI/UX & HCI Studio, Computer Graphics Suite"
    },
    {
      id: "iot",
      name: "Internet of Things (IoT)",
      tag: "New in 2024",
      degree: "B.Tech",
      desc: "B.Tech, approved by RTU Kota. Micro-controllers, wireless sensor networks, embedded C/Python, industrial automation, and smart cities.",
      icon: Wifi,
      labs: "Smart Sensor Mesh Lab, Embedded Systems Lab"
    },
    {
      id: "aids",
      name: "Artificial Intelligence & Data Science",
      degree: "B.Tech",
      desc: "B.Tech degree focusing on predictive statistical models, machine learning, deep learning with NVIDIA GPU clusters, and NLP architectures.",
      icon: Brain,
      labs: "NVIDIA Deep Learning Lab, Big Data Hadoop Cluster"
    },
    {
      id: "cse",
      name: "Computer Science & Engineering",
      tag: "NBA Accredited",
      degree: "B.Tech & M.Tech",
      desc: "B.Tech and M.Tech. Established 2000. Comprehensive software engineering, cloud computing, algorithms, and distributed systems.",
      icon: Terminal,
      labs: "Advanced Computing Lab, Cloud DevOps Suite"
    },
    {
      id: "ece",
      name: "Electronics & Communication",
      degree: "B.Tech & M.Tech",
      desc: "B.Tech and M.Tech, including Digital Communication and VLSI. Semiconductor design, DSP, wireless communication, and RF microwave labs.",
      icon: Radio,
      labs: "VLSI Cadence Lab, Microwave & Antenna Lab"
    },
    {
      id: "me",
      name: "Mechanical Engineering",
      degree: "B.Tech & M.Tech",
      desc: "Machine design, production engineering, CAD/CAM automation, thermal systems, and motorsport BAJA ATV design studio.",
      icon: Cog,
      labs: "CNC Machining Center, SolidWorks & ANSYS Studio"
    },
    {
      id: "ce",
      name: "Civil Engineering",
      degree: "B.Tech",
      desc: "B.Tech since 2012, with concrete, hydraulic and structural testing labs, digital total stations, and environmental engineering suites.",
      icon: Building2,
      labs: "1000 kN UTM Concrete Lab, Total Station GIS"
    },
    {
      id: "it",
      name: "Information Technology",
      degree: "B.Tech",
      desc: "B.Tech established 2000. Enterprise data management, network protocols, web systems architecture, and mobile platform engineering.",
      icon: Cpu,
      labs: "Enterprise Database Lab, Networking CISCO Lab"
    }
  ];

  return (
    <div className="w-full font-manrope">
      {/* 1. PAGE HEADER */}
      <Template4PageHeader
        title="Departments"
        desc="Nine departments across computing, electronics, mechanical and civil engineering."
      />

      {/* 2. DEPARTMENTS GRID */}
      <section className="py-14 sm:py-20 px-6 sm:px-10 bg-white">
        <div className="max-w-[1060px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-[#DAD5D8]">
            {departmentsList.map((dept) => {
              const Icon = dept.icon;
              return (
                <Link
                  key={dept.id}
                  to={`/departments/${dept.id}`}
                  className="p-8 bg-white border-r border-b border-[#DAD5D8] hover:bg-[#F6F3F4] transition-colors flex flex-col justify-between group block"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      {dept.tag ? (
                        <span className="text-[11px] font-bold px-2.5 py-0.5 rounded bg-[#F7DDE1] text-[#7A1626]">
                          {dept.tag}
                        </span>
                      ) : (
                        <span className="text-[11px] font-bold px-2.5 py-0.5 rounded bg-[#EDE8EA] text-[#4A4752]">
                          {dept.degree}
                        </span>
                      )}
                      <Icon className="w-5 h-5 text-[#B3263A] group-hover:scale-110 transition-transform" />
                    </div>

                    <h3 className="font-bricolage text-2xl font-bold text-[#1C1B22] mb-2 group-hover:text-[#B3263A] transition-colors leading-snug">
                      {dept.name}
                    </h3>

                    <p className="text-xs text-[#4A4752] leading-relaxed mb-4">
                      {dept.desc}
                    </p>

                    <div className="text-[11px] text-[#6E6A77] bg-[#FAF8F9] p-2.5 rounded border border-[#DAD5D8]/60">
                      <strong>Key Labs:</strong> {dept.labs}
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-[#DAD5D8]/70 flex items-center justify-between">
                    <span className="text-xs font-bold text-[#B3263A] group-hover:underline inline-flex items-center gap-1">
                      <span>Explore department &amp; faculty</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
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

import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Award, BookOpen, Sparkles, Building2, Users } from 'lucide-react';
import Template2CardGrid from '../components/Template2CardGrid';
import Template2CtaBanner from '../components/Template2CtaBanner';

export default function Template2Home({ onOpenEnquiry }) {
  const programmeCards = [
    {
      title: 'B.Tech Engineering',
      desc: 'Undergraduate 4-year technical degree in CSE, AI & DS, Cyber Security, Mechanical & Civil with industry labs.',
      link: '/academics',
      image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=900&q=82'
    },
    {
      title: 'M.Tech Research',
      desc: 'Postgraduate 2-year advanced technical study, high-performance computing, and specialized research thesis.',
      link: '/academics',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=82'
    },
    {
      title: 'MBA Management',
      desc: 'Two-year dual specialization in Marketing, Finance, HR, and Business Analytics with corporate internships.',
      link: '/academics',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=82'
    },
    {
      title: 'MCA Computer Applications',
      desc: 'Two-year postgraduate curriculum in full-stack software development, cloud infrastructure, and modern algorithms.',
      link: '/academics',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&q=82'
    },
    {
      title: 'BCA & BBA',
      desc: 'Three-year undergraduate pathways delivering practical computing skills and corporate leadership foundations.',
      link: '/academics',
      image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=900&q=82'
    },
    {
      title: 'Polytechnic Diploma & Ph.D.',
      desc: 'Hands-on engineering diplomas and doctoral research fellowships recognized by RTU Kota and AICTE.',
      link: '/academics',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=900&q=82'
    }
  ];

  const campusCards = [
    {
      title: 'Campus Facilities',
      desc: 'Specialized Apple iOS labs, robotics workshops, central library, sports complex, and on-campus separate hostels.',
      link: '/facilities',
      image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=900&q=82'
    },
    {
      title: 'Student Activities & Clubs',
      desc: 'Hackathons, cultural annual festivals, tech symposiums, IEEE student branch, and inter-college sports tournaments.',
      link: '/campus-life',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=82'
    },
    {
      title: 'Innovation & Incubation',
      desc: 'State-supported startup incubation centre with seed funding, prototyping mentorship, and patent filing guidance.',
      link: '/incubation',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&q=82'
    }
  ];

  return (
    <div className="bg-white text-slate-800 w-full max-w-full overflow-x-hidden">
      {/* 1. Hero Section (Clean Minimal Headline + Action CTA) */}
      <section className="relative bg-[#071b34] text-white py-20 sm:py-28 overflow-hidden w-full max-w-full">
        {/* Background photo with clean dark gradient */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-overlay"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1800&q=85')"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071b34] via-[#071b34]/95 to-[#0d2a4e]/85" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl">
            <span className="text-[11px] font-black uppercase tracking-[2px] text-[#e6ad3d] block mb-3">
              LEARN · INNOVATE · LEAD
            </span>
            <h1 className="font-heading font-black text-4xl sm:text-5xl md:text-6xl text-white tracking-tight leading-[1.12] mb-6">
              Building Engineers.<br />
              <span className="text-[#e6ad3d]">Creating Tomorrow.</span>
            </h1>
            <p className="text-base sm:text-lg text-[#dce6f0] leading-relaxed mb-8 max-w-2xl">
              Quality education. Practical learning. A better future. Discover a campus where curiosity, capability and ambition come together.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                to="/academics"
                className="bg-[#e6ad3d] hover:bg-[#d89f31] text-[#152a42] font-black px-6 py-3.5 rounded-lg text-xs sm:text-sm shadow-md transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
              >
                <span>Explore Programmes</span>
                <span>↗</span>
              </Link>
              <button
                onClick={onOpenEnquiry}
                className="border border-white/40 hover:border-white text-white font-bold px-6 py-3.5 rounded-lg text-xs sm:text-sm transition-colors hover:bg-white/10"
              >
                Apply / Enquire
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Key Stats Strip */}
      <section className="bg-[#102b50] text-white py-7 border-y border-[#1a3f70] w-full max-w-full overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="border-r last:border-none border-white/10">
              <strong className="block text-[#e6ad3d] font-heading font-black text-2xl sm:text-3xl">2000</strong>
              <span className="text-xs text-[#d3deeb] font-medium">Year Established</span>
            </div>
            <div className="border-r last:border-none border-white/10">
              <strong className="block text-[#e6ad3d] font-heading font-black text-2xl sm:text-3xl">RIET</strong>
              <span className="text-xs text-[#d3deeb] font-medium">Learning Community</span>
            </div>
            <div className="border-r last:border-none border-white/10">
              <strong className="block text-[#e6ad3d] font-heading font-black text-2xl sm:text-3xl">Jaipur</strong>
              <span className="text-xs text-[#d3deeb] font-medium">Rajasthan, India</span>
            </div>
            <div>
              <strong className="block text-[#e6ad3d] font-heading font-black text-2xl sm:text-3xl">Future</strong>
              <span className="text-xs text-[#d3deeb] font-medium">Built Through Learning</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Welcome to RIET Split Section */}
      <section className="py-16 sm:py-20 bg-white w-full max-w-full overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-[#e5eaf0] group">
              <img
                src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=900&q=82"
                alt="RIET Campus"
                className="w-full h-80 sm:h-96 object-cover group-hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-xs p-4 rounded-xl border border-slate-200 text-xs">
                <span className="font-bold text-[#102b50] block">Modern Campus at Bhankrota</span>
                <span className="text-slate-500 text-[11px]">Ajmer Road, Jaipur • 25+ Years of Academic Excellence</span>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <span className="text-[11px] font-black uppercase tracking-[1.7px] text-[#b57c18] block mb-2">
                  ABOUT THE INSTITUTE
                </span>
                <h2 className="font-heading font-black text-2xl sm:text-3xl md:text-4xl text-[#102b50] tracking-tight leading-tight">
                  Education that connects knowledge with practice.
                </h2>
              </div>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Rajasthan Institute of Engineering & Technology is located at Bhankrota on Ajmer Road, Jaipur. Explore the institute, academic programmes, industry certifications, and student advancement opportunities.
              </p>

              <ul className="space-y-3 text-sm text-[#53657a]">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#bd841e] shrink-0 mt-0.5" />
                  <span>Academic pathways across engineering, computing, architecture, and management</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#bd841e] shrink-0 mt-0.5" />
                  <span>Practical workshops, active research labs, and collaborative team projects</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#bd841e] shrink-0 mt-0.5" />
                  <span>Student development, career preparation, incubation, and recruiter partnerships</span>
                </li>
              </ul>

              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 bg-[#e6ad3d] hover:bg-[#d89f31] text-[#152a42] font-black px-5 py-3 rounded-lg text-xs sm:text-sm shadow-xs transition-transform hover:scale-105 active:scale-95"
                >
                  <span>Discover RIET</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Explore Our Programmes Grid (Soft Background) */}
      <Template2CardGrid
        title="Explore Our Programmes"
        subtitle="Choose a learning pathway that matches your interests, technical ambitions and career aspirations."
        kicker="ACADEMIC OFFERINGS"
        items={programmeCards}
        softBackground={true}
        columns={3}
      />

      {/* 5. A Vibrant Campus Experience */}
      <Template2CardGrid
        title="A Vibrant Campus Experience"
        subtitle="Discover the spaces, communities and real-world opportunities that support learning beyond lecture halls."
        kicker="CAMPUS ENVIRONMENT"
        items={campusCards}
        softBackground={false}
        columns={3}
      />

      {/* 6. Call to Action Banner */}
      <Template2CtaBanner
        kicker="YOUR JOURNEY STARTS HERE"
        title="Ready to take the next step?"
        desc="Connect with the admissions desk, schedule a campus visit, or explore scholarship eligibility for the 2026-27 academic session."
        buttonText="Enquire Now ↗"
        onOpenEnquiry={onOpenEnquiry}
      />
    </div>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, GraduationCap, Settings, Trophy, ShieldCheck } from 'lucide-react';
import { collegeInfo } from '../../data/collegeData';

export default function AboutHighlights() {
  const highlights = [
    {
      title: "Quality Infrastructure",
      subtitle: "Smart classrooms, advanced AI/ML & engineering laboratories, high-speed campus-wide Wi-Fi, and extensive digital library.",
      icon: GraduationCap
    },
    {
      title: "Experienced Faculty",
      subtitle: "Dedicated professors, PhD mentors from premier institutions, and industry consultants nurturing future technocrats.",
      icon: Settings
    },
    {
      title: "Holistic Development",
      subtitle: "Active clubs, national technical symposiums, hackathons, sports complexes, and vibrant cultural celebrations.",
      icon: Trophy
    }
  ];

  return (
    <section className="py-16 bg-white border-b border-riet-line">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Column: About RIET (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center gap-2 text-riet-gold text-xs font-bold uppercase tracking-wider mb-2">
                <span className="w-6 h-0.5 bg-riet-gold"></span>
                <span>Welcome to RIET Jaipur</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-heading font-black text-riet-navy tracking-tight">
                About RIET
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mt-3">
                Rajasthan Institute of Engineering & Technology (RIET), Jaipur is committed to excellence in technical education, applied research, and professional ethics. Established in 2000, the institute has nurtured over 15,000+ engineers, innovators, and leaders making significant impacts in global organizations.
              </p>
              
              <div className="mt-5">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 bg-riet-navy hover:bg-riet-navy-light text-white font-bold px-5 py-2.5 rounded-lg text-xs shadow-sm transition-all hover:translate-x-1"
                >
                  <span>Know More</span>
                  <ArrowRight className="w-3.5 h-3.5 text-riet-gold" />
                </Link>
              </div>
            </div>

            {/* Campus Photo with subtle border */}
            <div className="relative rounded-2xl overflow-hidden shadow-md group">
              <img
                src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1000&q=80"
                alt="RIET Jaipur Campus Building"
                className="w-full h-56 sm:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-riet-navy-dark/70 via-transparent to-transparent flex items-end p-4">
                <span className="text-white text-xs font-semibold flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-riet-gold" />
                  Scenic 20-Acre Campus at Bhankrota, Ajmer Road, Jaipur
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Our Key Highlights (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-riet-gold text-xs font-bold uppercase tracking-wider mb-2">
                <span className="w-6 h-0.5 bg-riet-gold"></span>
                <span>Why Choose RIET</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-heading font-black text-riet-navy tracking-tight mb-6">
                Our Key Highlights
              </h2>
            </div>

            <div className="space-y-4 flex-1 flex flex-col justify-center">
              {highlights.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={index}
                    className="p-5 rounded-xl border border-slate-200 bg-riet-paper hover:bg-white hover:border-riet-gold/50 hover:shadow-soft transition-all duration-300 flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-blue-100 text-riet-blue group-hover:bg-riet-navy group-hover:text-riet-gold flex items-center justify-center shrink-0 transition-colors shadow-sm">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-base text-riet-navy group-hover:text-riet-blue transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Template2CtaBanner({
  kicker = 'YOUR JOURNEY STARTS HERE',
  title = 'Ready to take the next step?',
  desc = 'Connect with the admissions team and explore your options for B.Tech, M.Tech, MBA, MCA, and Polytechnic diplomas.',
  buttonText = 'Enquire Now ↗',
  buttonLink = '/admissions',
  onOpenEnquiry
}) {
  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-r from-[#102b50] via-[#163b6b] to-[#1d4e7c] text-white rounded-2xl p-8 sm:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 shadow-xl relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute right-0 top-0 w-80 h-80 bg-[#e6ad3d]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-2xl relative z-10">
            <span className="text-[11px] font-black uppercase tracking-[2px] text-[#e6ad3d] block mb-2">
              {kicker}
            </span>
            <h2 className="font-heading font-black text-2xl sm:text-3xl text-white tracking-tight mb-2">
              {title}
            </h2>
            <p className="text-[#d3e0ed] text-xs sm:text-sm leading-relaxed">
              {desc}
            </p>
          </div>

          <div className="shrink-0 relative z-10">
            {onOpenEnquiry ? (
              <button
                onClick={onOpenEnquiry}
                className="bg-[#e6ad3d] hover:bg-[#d89f31] text-[#152a42] font-black px-6 py-3.5 rounded-lg text-xs sm:text-sm shadow-md transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
              >
                <span>{buttonText}</span>
              </button>
            ) : (
              <Link
                to={buttonLink}
                className="bg-[#e6ad3d] hover:bg-[#d89f31] text-[#152a42] font-black px-6 py-3.5 rounded-lg text-xs sm:text-sm shadow-md transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
              >
                <span>{buttonText}</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

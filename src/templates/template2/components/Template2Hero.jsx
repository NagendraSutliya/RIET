import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ArrowRight } from 'lucide-react';

export default function Template2Hero({
  title,
  headline,
  desc,
  eyebrow = 'RIET JAIPUR',
  primaryAction = { label: 'Get Started ↗', path: '/admissions' },
  secondaryAction = { label: 'Talk to RIET', path: '/contact' }
}) {
  return (
    <section className="relative bg-[#081f3b] text-white py-14 sm:py-20 overflow-hidden border-b border-[#122e54]">
      {/* Background overlay with subtle tech accent */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-overlay"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1800&q=80')"
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#071930] via-[#081f3b]/95 to-[#0b2950]/80" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Breadcrumb */}
        <div className="flex items-center gap-1.5 text-xs text-[#dbe6f2] mb-4">
          <Link to="/" className="text-[#e6ad3d] hover:underline font-semibold">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-300 font-medium">{title}</span>
        </div>

        {/* Eyebrow */}
        <div className="text-[11px] uppercase tracking-[2px] font-black text-[#e6ad3d] mb-2.5">
          {eyebrow}
        </div>

        {/* Headline */}
        <h1 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight max-w-3xl leading-tight mb-4">
          {headline}
        </h1>

        {/* Description */}
        <p className="text-base sm:text-lg text-[#dce6f0] max-w-2xl leading-relaxed mb-8">
          {desc}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3">
          {primaryAction && (
            <Link
              to={primaryAction.path}
              className="inline-flex items-center gap-2 bg-[#e6ad3d] hover:bg-[#d89f31] text-[#152a42] font-black px-5 py-3 rounded-lg text-xs sm:text-sm shadow-md transition-all hover:scale-105 active:scale-95"
            >
              <span>{primaryAction.label}</span>
            </Link>
          )}

          {secondaryAction && (
            <Link
              to={secondaryAction.path}
              className="inline-flex items-center gap-2 border border-white/30 hover:border-white text-white font-bold px-5 py-3 rounded-lg text-xs sm:text-sm transition-colors hover:bg-white/5"
            >
              <span>{secondaryAction.label}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export default function Template8PageHeader({ title, desc, breadcrumbs }) {
  return (
    <div className="bg-[#192f59] text-white py-14 sm:py-16 px-6 sm:px-10 relative overflow-hidden font-sans border-b border-[#233f75]">
      {/* Background Subtle Gradient & Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#142647] via-[#192f59] to-[#1e386a] opacity-95 pointer-events-none" />

      <div className="max-w-[1240px] mx-auto relative z-10">
        {/* Breadcrumbs */}
        <div className="text-slate-300 text-xs sm:text-[13px] mb-3 flex items-center gap-1.5 flex-wrap">
          <Link to="/" className="hover:text-[#d2973b] transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          {breadcrumbs ? (
            breadcrumbs.map((crumb, idx) => (
              <React.Fragment key={idx}>
                {crumb.to ? (
                  <Link to={crumb.to} className="hover:text-[#d2973b] transition-colors">{crumb.label}</Link>
                ) : (
                  <span className="text-[#d2973b] font-medium">{crumb.label}</span>
                )}
                {idx < breadcrumbs.length - 1 && <ChevronRight className="w-3.5 h-3.5 text-slate-400" />}
              </React.Fragment>
            ))
          ) : (
            <span className="text-[#d2973b] font-medium">{title}</span>
          )}
        </div>

        {/* Page Title with Playfair Serif */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-playfair text-white tracking-tight leading-tight">
          {title}
        </h1>

        {/* Kingster Gold Bar */}
        <div className="h-1 w-14 bg-[#d2973b] my-3 rounded-full" />

        {desc && (
          <p className="text-slate-200 text-sm sm:text-base max-w-[70ch] leading-relaxed font-normal">
            {desc}
          </p>
        )}
      </div>
    </div>
  );
}

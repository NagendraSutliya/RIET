import React from 'react';
import { Link } from 'react-router-dom';

export default function Template6PageHeader({ title, desc, breadcrumbs }) {
  return (
    <div className="bg-[#6B1724] text-white py-12 lg:py-16 px-6 sm:px-10 border-b border-[#52111B] w-full">
      <div className="max-w-[1140px] mx-auto">
        <div className="text-[#D4AF37] font-semibold text-xs sm:text-sm mb-3 flex items-center gap-1.5 flex-wrap uppercase tracking-wider">
          <Link to="/" className="hover:underline text-white/90">Home</Link>
          <span>/</span>
          {breadcrumbs ? (
            breadcrumbs.map((crumb, idx) => (
              <React.Fragment key={idx}>
                {crumb.to ? (
                  <Link to={crumb.to} className="hover:underline text-white/90">{crumb.label}</Link>
                ) : (
                  <span className="text-[#D4AF37] font-bold">{crumb.label}</span>
                )}
                {idx < breadcrumbs.length - 1 && <span>/</span>}
              </React.Fragment>
            ))
          ) : (
            <span className="text-[#D4AF37] font-bold">{title}</span>
          )}
        </div>

        <h1 className="font-fraunces text-3xl sm:text-4xl lg:text-[46px] font-bold text-white leading-[1.1] tracking-tight mb-3">
          {title}
        </h1>

        {desc && (
          <p className="text-[#FAF7F5]/90 text-base sm:text-lg max-w-[66ch] leading-relaxed font-sans">
            {desc}
          </p>
        )}
      </div>
    </div>
  );
}

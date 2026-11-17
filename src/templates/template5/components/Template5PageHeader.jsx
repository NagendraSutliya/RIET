import React from 'react';
import { Link } from 'react-router-dom';

export default function Template5PageHeader({ title, desc, breadcrumbs }) {
  return (
    <div className="bg-[#0F4C5C] text-white py-12 lg:py-16 px-6 sm:px-10 border-b border-[#0A3340] w-full">
      <div className="max-w-[1180px] mx-auto">
        {/* Breadcrumb */}
        <div className="text-[#FFB26B] font-semibold text-sm mb-3 flex items-center gap-1.5 flex-wrap">
          <Link to="/" className="hover:underline text-white/90">Home</Link>
          <span>/</span>
          {breadcrumbs ? (
            breadcrumbs.map((crumb, idx) => (
              <React.Fragment key={idx}>
                {crumb.to ? (
                  <Link to={crumb.to} className="hover:underline text-white/90">{crumb.label}</Link>
                ) : (
                  <span className="text-[#FFB26B] font-bold">{crumb.label}</span>
                )}
                {idx < breadcrumbs.length - 1 && <span>/</span>}
              </React.Fragment>
            ))
          ) : (
            <span className="text-[#FFB26B] font-bold">{title}</span>
          )}
        </div>

        {/* Heading */}
        <h1 className="font-fraunces text-3xl sm:text-4xl lg:text-[48px] font-bold text-white leading-[1.1] tracking-tight mb-3">
          {title}
        </h1>

        {/* Description */}
        {desc && (
          <p className="text-[#D5E8EC] text-base sm:text-lg max-w-[66ch] leading-relaxed font-sans">
            {desc}
          </p>
        )}
      </div>
    </div>
  );
}

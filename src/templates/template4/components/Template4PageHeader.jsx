import React from 'react';
import { Link } from 'react-router-dom';

export default function Template4PageHeader({ title, desc, breadcrumbs }) {
  return (
    <div className="bg-[#F6F3F4] py-12 lg:py-16 px-6 sm:px-10 border-b border-[#DAD5D8] w-full">
      <div className="max-w-[1060px] mx-auto">
        {/* Breadcrumb */}
        <div className="text-[#B3263A] font-bold text-sm mb-3 flex items-center gap-1.5 flex-wrap">
          <Link to="/" className="hover:underline">Home</Link>
          <span>/</span>
          {breadcrumbs ? (
            breadcrumbs.map((crumb, idx) => (
              <React.Fragment key={idx}>
                {crumb.to ? (
                  <Link to={crumb.to} className="hover:underline">{crumb.label}</Link>
                ) : (
                  <span className="text-[#1C1B22] font-semibold">{crumb.label}</span>
                )}
                {idx < breadcrumbs.length - 1 && <span>/</span>}
              </React.Fragment>
            ))
          ) : (
            <span className="text-[#1C1B22] font-semibold">{title}</span>
          )}
        </div>

        {/* Heading */}
        <h1 className="font-bricolage text-3xl sm:text-4xl lg:text-[48px] font-bold text-[#1C1B22] leading-[1.1] tracking-tight mb-3">
          {title}
        </h1>

        {/* Description */}
        {desc && (
          <p className="text-[#4A4752] text-base sm:text-lg max-w-[68ch] leading-relaxed font-manrope">
            {desc}
          </p>
        )}
      </div>
    </div>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';

export default function Template3PageHeader({ title, desc, breadcrumb }) {
  return (
    <div className="bg-[#0E2A5C] text-white py-12 sm:py-16 border-b border-[#183a75] w-full max-w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-sm font-bold text-[#F2A900] mb-2">
          <Link to="/" className="text-[#F2A900] hover:underline">Home</Link>
          <span className="mx-1 text-slate-300">/</span>
          <span className="text-white">{breadcrumb || title}</span>
        </div>
        <h1 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight mb-3">
          {title}
        </h1>
        {desc && (
          <p className="text-base sm:text-lg text-[#DDE3F0] max-w-3xl leading-relaxed">
            {desc}
          </p>
        )}
      </div>
    </div>
  );
}

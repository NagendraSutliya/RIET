import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Briefcase } from 'lucide-react';
import { recruitersList } from '../../../data/collegeData';

export default function RecruitersStrip() {
  return (
    <section className="py-12 bg-white border-b border-riet-line">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-between mb-8 gap-4">
          <div className="text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2 text-riet-gold text-xs font-bold uppercase tracking-wider mb-1">
              <Briefcase className="w-3.5 h-3.5" />
              <span>Career Opportunities</span>
            </div>
            <h3 className="text-2xl font-heading font-black text-riet-navy tracking-tight">
              Our Leading Recruiters & Industry Partners
            </h3>
          </div>

          <Link
            to="/placements"
            className="text-xs font-bold text-riet-blue hover:text-riet-navy flex items-center gap-1 group"
          >
            <span>View Placement Highlights</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Recruiter Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {recruitersList.map((rec, idx) => (
            <div
              key={idx}
              className="h-16 rounded-xl border border-slate-200/90 bg-riet-paper/60 hover:bg-white hover:border-riet-gold hover:shadow-soft flex items-center justify-center p-3 transition-all duration-200 group"
            >
              <span className="font-heading font-black text-sm text-slate-600 group-hover:text-riet-navy transition-colors tracking-tight">
                {rec.logoText}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

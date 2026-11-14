import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Clock, ChevronRight } from 'lucide-react';
import { programs } from '../../data/collegeData';

export default function ProgramsSection() {
  return (
    <section className="py-16 bg-riet-paper border-b border-riet-line">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <div className="flex items-center gap-2 text-riet-gold text-xs font-bold uppercase tracking-wider mb-2">
              <span className="w-6 h-0.5 bg-riet-gold"></span>
              <span>Academics & Degrees</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-black text-riet-navy tracking-tight">
              Our Programs
            </h2>
          </div>

          <Link
            to="/academics"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-riet-blue hover:text-riet-navy transition-colors group"
          >
            <span>View All Programs</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 7 Programs Grid matching the layout */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {programs.map((prog) => (
            <Link
              key={prog.id}
              to={prog.link}
              className="bg-white rounded-xl overflow-hidden border border-slate-200/80 hover:border-riet-gold/60 hover:shadow-lift transition-all duration-300 flex flex-col group"
            >
              {/* Thumbnail */}
              <div className="relative h-28 sm:h-32 overflow-hidden bg-slate-100">
                <img
                  src={prog.image}
                  alt={prog.code}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-2 right-2 bg-riet-navy/90 text-[10px] text-white font-bold px-2 py-0.5 rounded shadow-sm">
                  {prog.duration}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-3.5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-heading font-black text-base text-riet-navy group-hover:text-riet-blue transition-colors">
                    {prog.code}
                  </h3>
                  <p className="text-[11px] font-semibold text-riet-muted mt-0.5 line-clamp-1">
                    {prog.category}
                  </p>
                </div>

                <div className="pt-3 mt-2 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-riet-blue group-hover:text-riet-navy">
                  <span>Know More</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

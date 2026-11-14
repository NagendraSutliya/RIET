import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { campusLifePhotos } from '../../../data/collegeData';

export default function CampusLifeBanner() {
  return (
    <section className="py-14 bg-white border-b border-riet-line">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left Block: Deep Blue Promotional Box */}
          <div className="lg:col-span-4 bg-gradient-to-br from-riet-navy via-riet-navy-light to-riet-navy text-white rounded-2xl p-7 flex flex-col justify-between shadow-lift relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute -right-10 -bottom-10 w-44 h-44 rounded-full bg-riet-gold/10 blur-xl pointer-events-none"></div>

            <div className="space-y-3 relative z-10">
              <div className="inline-flex items-center gap-1.5 text-riet-gold text-[11px] font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Life Beyond Academics</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-heading font-black tracking-tight text-white">
                Campus Life
              </h2>

              <p className="text-riet-gold font-semibold text-sm tracking-wide">
                Learn • Explore • Grow
              </p>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed pt-1">
                From vibrant cultural fests and high-octane sports leagues to technical hackathons and student societies, life at RIET is enriching and memorable.
              </p>
            </div>

            <div className="pt-6 relative z-10">
              <Link
                to="/campus-life"
                className="inline-flex items-center gap-2 bg-riet-gold hover:bg-riet-gold-hover text-riet-navy font-black px-5 py-3 rounded-lg text-xs tracking-wide shadow-md transition-all hover:scale-105 active:scale-95"
              >
                <span>Explore Campus</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Block: 4 Photo Showcase Grid */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {campusLifePhotos.map((photo) => (
              <div
                key={photo.id}
                className="relative rounded-xl overflow-hidden shadow-sm group h-56 sm:h-auto border border-slate-200"
              >
                <img
                  src={photo.url}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-riet-navy-dark/80 via-transparent to-transparent flex flex-col justify-end p-3 text-white">
                  <span className="text-[10px] text-riet-gold font-bold uppercase tracking-wider">
                    {photo.category}
                  </span>
                  <h4 className="font-heading font-bold text-xs text-white line-clamp-1">
                    {photo.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

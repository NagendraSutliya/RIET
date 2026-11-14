import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Quote, ChevronLeft, ChevronRight, Award } from 'lucide-react';
import { latestNews, studentTestimonials } from '../../../data/collegeData';

export default function NewsTestimonials() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + studentTestimonials.length) % studentTestimonials.length);
  };

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % studentTestimonials.length);
  };

  const currentT = studentTestimonials[activeTestimonial];

  return (
    <section className="py-16 bg-riet-paper border-b border-riet-line">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Column: Latest News & Events (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-6">
              <div>
                <div className="flex items-center gap-2 text-riet-gold text-xs font-bold uppercase tracking-wider mb-1">
                  <span className="w-6 h-0.5 bg-riet-gold"></span>
                  <span>Campus Happenings</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-heading font-black text-riet-navy tracking-tight">
                  Latest News & Events
                </h2>
              </div>

              <Link
                to="/news-events"
                className="inline-flex items-center gap-1 text-xs font-bold text-riet-blue hover:text-riet-navy transition-colors group"
              >
                <span>View All</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Split layout: Events List on left, Photo on right */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-stretch flex-1">
              {/* Event items (7 cols) */}
              <div className="sm:col-span-7 space-y-3">
                {latestNews.map((news) => (
                  <Link
                    key={news.id}
                    to="/news-events"
                    className="p-3.5 rounded-xl bg-white border border-slate-200 hover:border-riet-gold/50 hover:shadow-soft flex items-start gap-3.5 transition-all group"
                  >
                    {/* Date Block */}
                    <div className="w-12 h-14 rounded-lg bg-riet-paper border border-slate-200 text-center flex flex-col justify-center shrink-0 group-hover:bg-riet-navy group-hover:text-white transition-colors">
                      <span className="font-heading font-black text-base text-riet-navy group-hover:text-riet-gold leading-none">
                        {news.date}
                      </span>
                      <span className="text-[10px] font-bold text-riet-muted uppercase mt-0.5 group-hover:text-slate-300">
                        {news.month}
                      </span>
                    </div>

                    {/* News Details */}
                    <div>
                      <span className="text-[10px] font-bold uppercase text-riet-blue">
                        {news.category}
                      </span>
                      <h4 className="font-heading font-bold text-xs sm:text-sm text-riet-navy group-hover:text-riet-blue transition-colors line-clamp-2 mt-0.5">
                        {news.title}
                      </h4>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Event Photo Preview (5 cols) */}
              <div className="sm:col-span-5 rounded-xl overflow-hidden border border-slate-200 relative group h-48 sm:h-auto">
                <img
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80"
                  alt="Campus Event"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-riet-navy-dark/80 via-transparent to-transparent flex items-end p-3.5">
                  <span className="text-white text-xs font-semibold">
                    Technical Workshops & Seminars
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: What Our Students Say (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-riet-gold text-xs font-bold uppercase tracking-wider mb-1">
                <span className="w-6 h-0.5 bg-riet-gold"></span>
                <span>Success Stories</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-heading font-black text-riet-navy tracking-tight mb-6">
                What Our Students Say
              </h2>
            </div>

            {/* Testimonial Card */}
            <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-7 shadow-sm hover:shadow-soft transition-all flex-1 flex flex-col justify-between relative">
              {/* Quote icon watermark */}
              <Quote className="w-10 h-10 text-riet-gold/30 mb-3" />

              {/* Quote text */}
              <blockquote className="text-sm sm:text-base text-slate-700 font-medium leading-relaxed italic mb-6">
                "{currentT.quote}"
              </blockquote>

              {/* Author & Controls */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={currentT.image}
                    alt={currentT.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-riet-gold shadow-sm"
                  />
                  <div>
                    <h4 className="font-heading font-black text-sm text-riet-navy">
                      {currentT.name}
                    </h4>
                    <p className="text-xs text-riet-muted font-medium">
                      {currentT.program}
                    </p>
                    <span className="inline-block text-[10px] text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded mt-0.5">
                      {currentT.role}
                    </span>
                  </div>
                </div>

                {/* Navigation Chevrons */}
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={prevTestimonial}
                    className="w-8 h-8 rounded-full border border-slate-300 hover:border-riet-navy hover:bg-riet-navy hover:text-white flex items-center justify-center text-slate-600 transition-colors"
                    aria-label="Previous Testimonial"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="w-8 h-8 rounded-full border border-slate-300 hover:border-riet-navy hover:bg-riet-navy hover:text-white flex items-center justify-center text-slate-600 transition-colors"
                    aria-label="Next Testimonial"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

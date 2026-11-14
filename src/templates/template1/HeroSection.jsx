import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import { collegeInfo } from '../../data/collegeData';

export default function HeroSection({ onOpenEnquiry }) {
  const slides = [
    {
      headline: "Building Engineers.",
      subheadline: "Creating Tomorrow.",
      tagline: "Quality Education. Practical Learning. A Better Future.",
      badge: "AICTE Approved • RTU Affiliated • Estd. 2000",
      bgImage: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1920&q=85"
    },
    {
      headline: "Empowering Careers.",
      subheadline: "Leading In Tech & AI.",
      tagline: "Highest Package ₹44 LPA • 85%+ Placements • Top Global Recruiters.",
      badge: "Campus Placements & Corporate Ties",
      bgImage: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1920&q=85"
    },
    {
      headline: "Innovation & Research.",
      subheadline: "Shape Your Ideas.",
      tagline: "High-Tech Labs • Incubation Center • Dedicated Mentorship for Startups.",
      badge: "Research & Entrepreneurship Cell",
      bgImage: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1920&q=85"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const slide = slides[currentSlide];

  return (
    <section className="relative min-h-[540px] md:min-h-[620px] flex items-center bg-riet-navy text-white overflow-hidden transition-all duration-700">
      {/* Background Image with Dark Navy Gradient Overlay matching the mock */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000 transform scale-105"
        style={{
          backgroundImage: `url(${slide.bgImage})`,
          filter: 'brightness(0.7)'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-riet-navy-dark/95 via-riet-navy/80 to-transparent"></div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 py-20 relative z-10 w-full">
        <div className="max-w-2xl space-y-6 animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-3.5 py-1.5 rounded-full text-xs font-semibold text-riet-gold">
            <span className="w-2 h-2 rounded-full bg-riet-gold animate-ping"></span>
            <span>{slide.badge}</span>
          </div>

          {/* Headline */}
          <div className="space-y-1">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-black tracking-tight text-white leading-[1.1]">
              {slide.headline}
            </h1>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black tracking-tight text-riet-gold leading-[1.1]">
              {slide.subheadline}
            </h2>
          </div>

          {/* Subtitle / Tagline */}
          <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-medium max-w-xl">
            {slide.tagline}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              to="/academics"
              className="bg-riet-gold hover:bg-riet-gold-hover text-riet-navy font-black px-6 py-3.5 rounded-lg text-sm shadow-lift transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
            >
              <span>Explore Programs</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <button
              onClick={onOpenEnquiry}
              className="bg-transparent hover:bg-white/15 text-white font-bold px-6 py-3.5 rounded-lg text-sm border-2 border-white/70 hover:border-white transition-all"
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>

      {/* Slider Left & Right Chevrons */}
      <button
        onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center transition-colors backdrop-blur-sm z-20 hidden md:flex"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center transition-colors backdrop-blur-sm z-20 hidden md:flex"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slider Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`transition-all rounded-full ${
              currentSlide === idx ? 'w-8 h-2.5 bg-riet-gold' : 'w-2.5 h-2.5 bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

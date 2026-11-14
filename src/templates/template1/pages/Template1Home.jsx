import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutHighlights from '../components/AboutHighlights';
import ProgramsSection from '../components/ProgramsSection';
import CampusLifeBanner from '../components/CampusLifeBanner';
import NewsTestimonials from '../components/NewsTestimonials';
import RecruitersStrip from '../components/RecruitersStrip';

export default function Template1Home({ onOpenEnquiry }) {
  return (
    <div className="min-h-screen flex flex-col animate-fade-in">
      {/* 1. Hero Banner with carousel & admissions CTA */}
      <HeroSection onOpenEnquiry={onOpenEnquiry} />

      {/* 2. About RIET + Key Highlights Split Section */}
      <AboutHighlights />

      {/* 3. Our Programs 7-Card Grid */}
      <ProgramsSection />

      {/* 4. Campus Life Blue Banner + 4 Photo Highlights */}
      <CampusLifeBanner />

      {/* 5. Leading Recruiters Strip */}
      <RecruitersStrip />

      {/* 6. Latest News & Events + Student Testimonials */}
      <NewsTestimonials />
    </div>
  );
}

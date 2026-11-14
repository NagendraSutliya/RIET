import React from 'react';
import Template2Hero from '../components/Template2Hero';
import Template2CardGrid from '../components/Template2CardGrid';
import Template2CtaBanner from '../components/Template2CtaBanner';

export default function Template2NewsEvents({ onOpenEnquiry }) {
  const cards = [
    {
      title: 'National AI & Cloud Computing Workshop 2026',
      desc: 'Three-day hands-on workshop led by industry cloud specialists covering distributed systems and LLM deployment.',
      link: '/news-events',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=82'
    },
    {
      title: 'Annual Tech Expo & Prototype Showcase',
      desc: 'Inter-college technical competition featuring over 80+ student engineering prototypes and robotics combat arenas.',
      link: '/news-events',
      image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=900&q=82'
    },
    {
      title: 'Admissions 2026-27 Merit Scholarship Circular',
      desc: 'Official notification announcing branch intake schedules, REAP Code 1025 counselling deadlines and fee waivers.',
      link: '/admissions',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=82'
    }
  ];

  return (
    <div>
      <Template2Hero
        title="News & Events"
        headline="What's happening at RIET."
        desc="Campus announcements, hands-on technical workshops, national symposiums and student celebrations."
      />

      <Template2CardGrid
        title="Latest Campus Updates"
        subtitle="Stay updated with our latest academic circulars, campus celebrations, and industry engagement sessions."
        kicker="ANNOUNCEMENTS"
        items={cards}
        softBackground={false}
      />

      <Template2CtaBanner
        kicker="EVENT REGISTRATION"
        title="Participate in Upcoming Events"
        desc="Register for upcoming guest lectures, coding hackathons, and campus conferences."
        buttonText="Register for Events ↗"
        onOpenEnquiry={onOpenEnquiry}
      />
    </div>
  );
}

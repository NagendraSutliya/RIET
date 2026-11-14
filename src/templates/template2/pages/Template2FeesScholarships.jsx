import React from 'react';
import Template2Hero from '../components/Template2Hero';
import Template2CardGrid from '../components/Template2CardGrid';
import Template2CtaBanner from '../components/Template2CtaBanner';

export default function Template2FeesScholarships({ onOpenEnquiry }) {
  const cards = [
    {
      title: 'Programme Fee Structure',
      desc: 'Transparent, government-approved tuition fee schedules across B.Tech, M.Tech, MBA, MCA and Diploma programmes.',
      link: '/admissions',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=82'
    },
    {
      title: 'Merit Scholarship Schemes',
      desc: 'Generous institutional waivers up to 50% for high academic performers in Class 12 PCM / JEE Main percentiles.',
      link: '/admissions',
      image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=900&q=82'
    },
    {
      title: 'Special Concessions & Assistance',
      desc: 'Dedicated concessions for girl students, children of defense personnel, and state government scholarship facilitation.',
      link: '/contact',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=900&q=82'
    }
  ];

  return (
    <div>
      <Template2Hero
        title="Fees & Scholarships"
        headline="Make an informed investment."
        desc="Review transparent fee breakdowns, institutional merit scholarship guidelines and flexible payment plans."
      />

      <Template2CardGrid
        title="Fees & Financial Support"
        subtitle="Publishing the latest approved fee circulars, eligibility criteria and scholarship conditions."
        kicker="AFFORDABILITY & AID"
        items={cards}
        softBackground={false}
      />

      <Template2CtaBanner
        kicker="CALCULATE YOUR SCHOLARSHIP"
        title="Check Your Scholarship Eligibility"
        desc="Submit your 12th board marks or entrance percentile to receive an instant scholarship appraisal."
        buttonText="Enquire About Scholarship ↗"
        onOpenEnquiry={onOpenEnquiry}
      />
    </div>
  );
}

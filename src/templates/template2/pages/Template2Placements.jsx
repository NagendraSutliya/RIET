import React from 'react';
import Template2Hero from '../components/Template2Hero';
import Template2CardGrid from '../components/Template2CardGrid';
import Template2CtaBanner from '../components/Template2CtaBanner';

export default function Template2Placements({ onOpenEnquiry }) {
  const cards = [
    {
      title: 'Training & Skill Preparation',
      desc: 'Extensive pre-placement modules covering DSA, competitive coding, mock technical interviews, and soft skills.',
      link: '/placements',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=82'
    },
    {
      title: 'Leading Corporate Recruiters',
      desc: 'Annual on-campus placement drives with TCS, Infosys, Wipro, Capgemini, Cognizant, IBM, L&T, and innovative tech startups.',
      link: '/placements',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=82'
    },
    {
      title: 'Verified Placement Outcomes',
      desc: 'Consistently achieving 85%+ placement records with highest packages reaching ₹18.5 LPA and average of ₹5.2 LPA.',
      link: '/placements',
      image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=900&q=82'
    }
  ];

  return (
    <div>
      <Template2Hero
        title="Placements"
        headline="Prepare for the world of work."
        desc="Discover career development pathways, industry placement preparation and high-impact recruiter engagement."
      />

      <Template2CardGrid
        title="Career Development & Placements"
        subtitle="Bridging campus talent with global corporate hiring partners through tailored career readiness."
        kicker="CAREER EXCELLENCE"
        items={cards}
        softBackground={false}
      />

      <Template2CtaBanner
        kicker="FOR EMPLOYERS & RECRUITERS"
        title="Recruit Top Engineering Talent from RIET"
        desc="Connect with our Training & Placement Cell to schedule campus recruitment drives or industry interaction sessions."
        buttonText="Contact Placement Cell ↗"
        buttonLink="/contact"
      />
    </div>
  );
}

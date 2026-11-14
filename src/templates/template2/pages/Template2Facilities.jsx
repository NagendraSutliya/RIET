import React from 'react';
import Template2Hero from '../components/Template2Hero';
import Template2CardGrid from '../components/Template2CardGrid';
import Template2CtaBanner from '../components/Template2CtaBanner';

export default function Template2Facilities({ onOpenEnquiry }) {
  const cards = [
    {
      title: 'Advanced Laboratories',
      desc: 'Department-specific practical learning spaces with high-end machinery, IoT kits, and specialized software tools.',
      link: '/departments',
      image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=900&q=82'
    },
    {
      title: 'Central Library & Digital Reading',
      desc: 'Over 45,000 print volumes, IEEE electronic journals, DELNET subscriptions, and quiet reading halls.',
      link: '/student-corner',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=900&q=82'
    },
    {
      title: 'Hostels & Residential Living',
      desc: 'Separate secure hostels for boys and girls with high-speed Wi-Fi, hygienic mess dining, and 24x7 security.',
      link: '/campus-life',
      image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=900&q=82'
    },
    {
      title: 'Sports Arena & Recreation',
      desc: 'Comprehensive outdoor fields and indoor recreation spaces supporting basketball, football, cricket, and table tennis.',
      link: '/campus-life',
      image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=900&q=82'
    },
    {
      title: 'Bus Transit & Transport',
      desc: 'Extensive fleet of GPS-tracked college buses covering all major residential corridors and hubs across Jaipur city.',
      link: '/contact',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=82'
    },
    {
      title: 'Modern Cafeteria & Food Court',
      desc: 'Hygienic multi-cuisine dining serving nutritious meals, snacks, and beverages in a lively social atmosphere.',
      link: '/campus-life',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=900&q=82'
    }
  ];

  return (
    <div>
      <Template2Hero
        title="Campus Facilities"
        headline="Spaces designed for learning."
        desc="Explore cutting-edge laboratories, central library, sports grounds, residential living, and student amenities."
      />

      <Template2CardGrid
        title="Explore Campus Facilities"
        subtitle="Modern physical infrastructure carefully developed to cultivate academic focus, physical fitness and comfort."
        kicker="INFRASTRUCTURE"
        items={cards}
        softBackground={false}
      />

      <Template2CtaBanner
        kicker="CAMPUS VISITS"
        title="Experience our campus firsthand"
        desc="Visit our 20-acre lush green campus at Bhankrota, Ajmer Road, Jaipur. Guided tours available Monday through Saturday."
        buttonText="Schedule Campus Tour ↗"
        onOpenEnquiry={onOpenEnquiry}
      />
    </div>
  );
}

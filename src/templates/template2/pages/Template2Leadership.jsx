import React from 'react';
import Template2Hero from '../components/Template2Hero';
import Template2CardGrid from '../components/Template2CardGrid';
import Template2CtaBanner from '../components/Template2CtaBanner';

export default function Template2Leadership({ onOpenEnquiry }) {
  const cards = [
    {
      title: 'Board of Management',
      desc: 'Institutional vision, strategic policy planning, infrastructure expansion, and corporate partnerships.',
      link: '/leadership',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=82'
    },
    {
      title: 'Principal & Academic Director',
      desc: 'Academic leadership, pedagogy standards, research initiatives, and holistic student experience.',
      link: '/leadership',
      image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=900&q=82'
    },
    {
      title: 'Department Chairs & Heads',
      desc: 'Domain experts and senior professors spearheading innovative curriculum and laboratory advancements.',
      link: '/leadership',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=900&q=82'
    }
  ];

  return (
    <div>
      <Template2Hero
        title="Leadership"
        headline="Guidance that shapes ambition."
        desc="Meet the visionary leadership and academic advisory teams steering RIET Jaipur forward."
      />

      <Template2CardGrid
        title="Institutional Leadership"
        subtitle="Experienced educators and industry luminaries leading our departments and strategic growth."
        kicker="ACADEMIC GOVERNANCE"
        items={cards}
        softBackground={false}
      />

      <Template2CtaBanner
        kicker="REACH OUR LEADERSHIP"
        title="Connect with Academic Advisors"
        desc="Schedule a consultation or discuss collaborative research opportunities with our faculty heads."
        buttonText="Get in Touch ↗"
        onOpenEnquiry={onOpenEnquiry}
      />
    </div>
  );
}

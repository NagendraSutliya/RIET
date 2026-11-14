import React from 'react';
import Template2Hero from '../components/Template2Hero';
import Template2CardGrid from '../components/Template2CardGrid';
import Template2CtaBanner from '../components/Template2CtaBanner';

export default function Template2Approvals({ onOpenEnquiry }) {
  const cards = [
    {
      title: 'AICTE Extension of Approval (EoA)',
      desc: 'All India Council for Technical Education approval for engineering, technology, and management intake.',
      link: '/mandatory-disclosure',
      image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=900&q=82'
    },
    {
      title: 'RTU Kota University Affiliation',
      desc: 'Affiliated to Rajasthan Technical University (RTU), Kota for B.Tech, M.Tech, MCA, and MBA degrees.',
      link: '/mandatory-disclosure',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=900&q=82'
    },
    {
      title: 'NBA & NAAC Accreditation',
      desc: 'Accreditation benchmarks validating curriculum excellence, outcomes, and student achievements.',
      link: '/mandatory-disclosure',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&q=82'
    }
  ];

  return (
    <div>
      <Template2Hero
        title="Approvals & Affiliations"
        headline="Trust, transparency and academic standards."
        desc="Access current institutional approvals, university affiliation letters and public accreditation records."
      />

      <Template2CardGrid
        title="Verified Affiliations"
        subtitle="Transparent documentation confirming our statutory compliance and university credentials."
        kicker="REGULATORY RECOGNITION"
        items={cards}
        softBackground={false}
      />

      <Template2CtaBanner
        kicker="PUBLIC DISCLOSURES"
        title="Need statutory verification copies?"
        desc="Download verified PDF copies of our latest AICTE EoA and affiliation orders directly from the mandatory disclosure section."
        buttonText="View Disclosures ↗"
        buttonLink="/mandatory-disclosure"
      />
    </div>
  );
}

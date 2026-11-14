import React from 'react';
import Template2Hero from '../components/Template2Hero';
import Template2CardGrid from '../components/Template2CardGrid';
import Template2CtaBanner from '../components/Template2CtaBanner';

export default function Template2Research({ onOpenEnquiry }) {
  const cards = [
    {
      title: 'Faculty Research & Publications',
      desc: 'Over 120+ peer-reviewed research papers published in Scopus and SCI-indexed international journals and conferences.',
      link: '/research-innovation',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&q=82'
    },
    {
      title: 'Student Innovation & Applied Projects',
      desc: 'Interdisciplinary student prototypes spanning IoT environmental monitors, automated rovers, and healthcare diagnostics.',
      link: '/incubation',
      image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=900&q=82'
    },
    {
      title: 'Industry Collaboration & MoUs',
      desc: 'Active industry tie-ups with leading technology firms offering student internships, live case studies and technical grants.',
      link: '/contact',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=82'
    }
  ];

  return (
    <div>
      <Template2Hero
        title="Research & Innovation"
        headline="Question boldly. Create what's next."
        desc="Explore our thriving research ecosystem, faculty scholarly interests, patents, and transformative student inventions."
      />

      <Template2CardGrid
        title="Research Ecosystem"
        subtitle="Cultivating scientific inquiry, intellectual property creation, and cross-disciplinary technology transfer."
        kicker="RESEARCH & ADVANCEMENT"
        items={cards}
        softBackground={false}
      />

      <Template2CtaBanner
        kicker="STARTUP INCUBATION"
        title="Have an innovative tech idea?"
        desc="Join our on-campus incubation centre and access seed prototyping funds, technical mentors, and legal patent assistance."
        buttonText="Explore Incubation ↗"
        buttonLink="/incubation"
      />
    </div>
  );
}

import React from 'react';
import Template2Hero from '../components/Template2Hero';
import Template2CardGrid from '../components/Template2CardGrid';
import Template2CtaBanner from '../components/Template2CtaBanner';

export default function Template2CampusLife({ onOpenEnquiry }) {
  const cards = [
    {
      title: 'Student Clubs & Societies',
      desc: 'Technical coding clubs, cultural dance and music collectives, robotics teams, and IEEE / CSI student branches.',
      link: '/campus-life',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=82'
    },
    {
      title: 'Sports, Athletics & Fitness',
      desc: 'Floodlit cricket ground, football pitch, basketball court, badminton facilities, gymnasium, and indoor gaming arena.',
      link: '/facilities',
      image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=900&q=82'
    },
    {
      title: 'Annual Celebrations & Fests',
      desc: 'Goonj cultural festival, national technical symposiums, youth sports leagues, and alumni homecoming gatherings.',
      link: '/gallery',
      image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=900&q=82'
    }
  ];

  return (
    <div>
      <Template2Hero
        title="Campus Life"
        headline="More than a classroom."
        desc="Experience vibrant student clubs, cultural celebrations, competitive sports and unforgettable campus moments."
      />

      <Template2CardGrid
        title="Life Beyond Academics"
        subtitle="Campus life brings students together through shared passions, cultural expressions and lifelong friendships."
        kicker="CAMPUS CULTURE"
        items={cards}
        softBackground={false}
      />

      <Template2CtaBanner
        kicker="PHOTO GALLERY"
        title="Explore life on campus visually"
        desc="Browse hundreds of campus photographs capturing student activities, labs, sports meets, and cultural festivals."
        buttonText="View Photo Gallery ↗"
        buttonLink="/gallery"
      />
    </div>
  );
}

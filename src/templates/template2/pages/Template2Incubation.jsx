import React from 'react';
import Template2Hero from '../components/Template2Hero';
import Template2CardGrid from '../components/Template2CardGrid';
import Template2CtaBanner from '../components/Template2CtaBanner';

export default function Template2Incubation({ onOpenEnquiry }) {
  const cards = [
    {
      title: '01 · Discover a Problem',
      desc: 'Identify meaningful societal or industrial challenges suitable for engineering and technology-driven solutions.',
      link: '/incubation',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=82'
    },
    {
      title: '02 · Validate the Idea',
      desc: 'Engage target users, test underlying market assumptions, and conduct feasibility studies under faculty guidance.',
      link: '/incubation',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=82'
    },
    {
      title: '03 · Build a Working Prototype',
      desc: 'Access college maker spaces, 3D printers, IoT testbeds and development servers to create minimum viable products.',
      link: '/incubation',
      image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=900&q=82'
    },
    {
      title: '04 · Grow, Pitch & Connect',
      desc: 'Pitch to angel investors, secure state startup grants, and scale ventures into sustainable registered enterprises.',
      link: '/incubation',
      image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=900&q=82'
    }
  ];

  return (
    <div>
      <Template2Hero
        title="Incubation Centre"
        headline="Turn ideas into real-world impact."
        desc="Explore our incubation hub offering hands-on mentoring, prototyping facilities, patent filing, and investor pitch sessions."
      />

      <Template2CardGrid
        title="From Idea to Impact"
        subtitle="A structured 4-stage incubation journey tailored for student entrepreneurs, faculty founders, and tech innovators."
        kicker="STARTUP ACCELERATOR"
        items={cards}
        softBackground={false}
        columns={4}
      />

      <Template2CtaBanner
        kicker="SUBMIT PITCH DECK"
        title="Ready to launch your enterprise?"
        desc="Submit your venture concept or working prototype to the RIET Incubation Council for immediate mentorship review."
        buttonText="Pitch Your Idea ↗"
        onOpenEnquiry={onOpenEnquiry}
      />
    </div>
  );
}

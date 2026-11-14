import React from 'react';
import Template2Hero from '../components/Template2Hero';
import Template2CardGrid from '../components/Template2CardGrid';
import Template2CtaBanner from '../components/Template2CtaBanner';

export default function Template2About({ onOpenEnquiry }) {
  const cards = [
    {
      title: 'Vision & Mission',
      desc: 'To establish a centre of excellence imparting value-based quality technical and management education to meet global challenges.',
      link: '/about',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=900&q=82'
    },
    {
      title: 'Our 25-Year Journey',
      desc: 'Established in the year 2000, RIET has nurtured over 18,000 engineers and leaders across top multinational corporations.',
      link: '/about',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&q=82'
    },
    {
      title: 'Learning Culture',
      desc: 'Hands-on practical work, industry-aligned syllabus, collaborative design workshops, and ethical leadership development.',
      link: '/about',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=82'
    }
  ];

  const helpfulCards = [
    {
      title: 'Approvals & Recognitions',
      desc: 'AICTE approved institution permanently affiliated to Rajasthan Technical University (RTU), Kota.',
      link: '/approvals',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=82'
    },
    {
      title: 'Academic Leadership',
      desc: 'Meet our experienced academic leadership, board of governors, and visionary institutional management.',
      link: '/leadership',
      image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=900&q=82'
    },
    {
      title: 'Mandatory Disclosure',
      desc: 'Access verified institutional disclosures, AICTE extension letters, RTI documentation and committee details.',
      link: '/mandatory-disclosure',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=900&q=82'
    }
  ];

  return (
    <div>
      <Template2Hero
        title="About RIET"
        headline="A campus built around opportunity."
        desc="Discover the people, purpose and learning environment behind Rajasthan Institute of Engineering & Technology, Jaipur."
      />

      <Template2CardGrid
        title="Our Institutional Purpose"
        subtitle="An institute experience shaped by learning, application, and opportunity."
        kicker="DISCOVER RIET"
        items={cards}
        softBackground={false}
      />

      <Template2CardGrid
        title="Helpful Institutional Resources"
        subtitle="Access official documentation, leadership profiles and verified committee records."
        kicker="GOVERNANCE & TRUST"
        items={helpfulCards}
        softBackground={true}
      />

      <Template2CtaBanner
        kicker="CONNECT WITH RIET"
        title="Have a question? Let's help you find the answer."
        desc="Get in touch with the admissions and administrative team at Bhankrota, Jaipur."
        buttonText="Contact Us ↗"
        onOpenEnquiry={onOpenEnquiry}
      />
    </div>
  );
}

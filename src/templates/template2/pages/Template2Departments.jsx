import React from 'react';
import Template2Hero from '../components/Template2Hero';
import Template2CardGrid from '../components/Template2CardGrid';
import Template2CtaBanner from '../components/Template2CtaBanner';

export default function Template2Departments({ onOpenEnquiry }) {
  const cards = [
    {
      title: 'Computer Science & Engineering',
      desc: 'Computing foundations, full-stack architectures, algorithms, and next-generation software development.',
      link: '/department-detail',
      image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=900&q=82'
    },
    {
      title: 'Artificial Intelligence & Data Science',
      desc: 'Machine learning, neural networks, computer vision, natural language processing, and big data analysis.',
      link: '/department-detail',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=82'
    },
    {
      title: 'Cyber Security & Forensic Computing',
      desc: 'Offensive and defensive security, network penetration testing, cryptography, and digital forensics.',
      link: '/department-detail',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&q=82'
    },
    {
      title: 'Electrical & Electronics Engineering',
      desc: 'Smart grid technologies, renewable energy systems, microcontrollers, VLSI design, and automation.',
      link: '/department-detail',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=82'
    },
    {
      title: 'Mechanical Engineering',
      desc: 'Thermodynamics, CAD/CAM drafting, robotics, automotive engineering, and advanced manufacturing.',
      link: '/department-detail',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=900&q=82'
    },
    {
      title: 'Civil Engineering',
      desc: 'Structural analysis, geotechnical testing, GIS mapping, environmental management, and construction planning.',
      link: '/department-detail',
      image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=900&q=82'
    }
  ];

  return (
    <div>
      <Template2Hero
        title="Departments"
        headline="Find your field. Build your future."
        desc="Explore cutting-edge engineering, computing, management, and scientific departments at RIET Jaipur."
      />

      <Template2CardGrid
        title="Engineering & Applied Sciences"
        subtitle="Each department features specialized laboratory spaces, dedicated faculty mentors and student project hubs."
        kicker="EXPLORE DISCIPLINES"
        items={cards}
        softBackground={false}
      />

      <Template2CtaBanner
        kicker="DEPARTMENT EXPLORATION"
        title="Need detailed laboratory tours?"
        desc="Schedule an on-campus laboratory walk-through or interact directly with department professors."
        buttonText="Schedule Visit ↗"
        onOpenEnquiry={onOpenEnquiry}
      />
    </div>
  );
}

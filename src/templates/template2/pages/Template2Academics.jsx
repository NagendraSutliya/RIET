import React from 'react';
import Template2Hero from '../components/Template2Hero';
import Template2CardGrid from '../components/Template2CardGrid';
import Template2CtaBanner from '../components/Template2CtaBanner';

export default function Template2Academics({ onOpenEnquiry }) {
  const cards = [
    {
      title: 'B.Tech Programmes (4 Years)',
      desc: 'Computer Science, Artificial Intelligence, Cyber Security, Mechanical and Civil Engineering.',
      link: '/departments',
      image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=900&q=82'
    },
    {
      title: 'M.Tech Research (2 Years)',
      desc: 'Specialized master programmes in Computer Science and Production Engineering with thesis work.',
      link: '/departments',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=82'
    },
    {
      title: 'Master of Business Administration (MBA)',
      desc: 'Dual specialization in Marketing, Human Resource, Financial Management and Business Intelligence.',
      link: '/departments',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=82'
    },
    {
      title: 'Master of Computer Applications (MCA)',
      desc: 'Advanced 2-year software engineering, mobile development, cloud computing, and AI architectures.',
      link: '/departments',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&q=82'
    },
    {
      title: 'BCA & BBA Undergraduate',
      desc: 'Undergraduate professional foundations delivering digital literacy, coding rigor, and corporate management skills.',
      link: '/departments',
      image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=900&q=82'
    },
    {
      title: 'Polytechnic Diploma & Ph.D.',
      desc: 'Hands-on practical diploma training and high-impact doctoral research under recognized research supervisors.',
      link: '/departments',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=900&q=82'
    }
  ];

  return (
    <div>
      <Template2Hero
        title="Academics"
        headline="Learn deeply. Apply confidently."
        desc="Explore career-focused undergraduate, postgraduate, and diploma programmes engineered for real-world impact."
      />

      <Template2CardGrid
        title="Academic Pathways"
        subtitle="Explore programme categories and rigorous learning curricula built for modern industry requirements."
        kicker="PROGRAMMES"
        items={cards}
        softBackground={false}
      />

      <Template2CtaBanner
        kicker="ADMISSION ENQUIRY 2026"
        title="Find the right programme for you"
        desc="Our academic counselling team will guide you through branch selection, eligibility criteria, and fee scholarships."
        buttonText="Get Academic Guidance ↗"
        onOpenEnquiry={onOpenEnquiry}
      />
    </div>
  );
}

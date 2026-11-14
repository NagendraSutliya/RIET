import React from 'react';
import Template2Hero from '../components/Template2Hero';
import Template2CardGrid from '../components/Template2CardGrid';
import Template2CtaBanner from '../components/Template2CtaBanner';

export default function Template2DepartmentDetail({ onOpenEnquiry }) {
  const cards = [
    {
      title: 'About the Department',
      desc: 'Building solid computing foundations through rigorous theory, hands-on lab sessions, and live industry capstone projects.',
      link: '/contact',
      image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=900&q=82'
    },
    {
      title: 'Programme Educational Outcomes (PEOs)',
      desc: 'Graduates exhibit analytical problem solving, scalable software architecture skills, and ethical professional conduct.',
      link: '/contact',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=82'
    },
    {
      title: 'Department Activities & Hackathons',
      desc: 'Annual national hackathons, IEEE coding contests, open-source contributor sprints, and guest lectures from FAANG engineers.',
      link: '/contact',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=82'
    }
  ];

  const labs = [
    {
      title: 'Apple iOS & Mobile Dev Lab',
      desc: '30+ high-performance iMac workstations with Xcode, Swift development frameworks, and iOS testing devices.',
      link: '/facilities',
      image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=900&q=82'
    },
    {
      title: 'AI & GPU Compute Cluster',
      desc: 'Dedicated NVIDIA GPU nodes for training deep learning models, computer vision systems, and generative neural networks.',
      link: '/facilities',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&q=82'
    },
    {
      title: 'Cyber Security & Network Lab',
      desc: 'Isolated virtualized sandboxes for penetration testing, packet analysis, cryptography drills, and firewall security audits.',
      link: '/facilities',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=900&q=82'
    }
  ];

  return (
    <div>
      <Template2Hero
        title="Computer Science & Engineering"
        headline="Ideas become intelligent solutions."
        desc="Explore academic focus, advanced laboratories, distinguished faculty and student innovation in Computer Science."
      />

      <Template2CardGrid
        title="Department Overview"
        subtitle="Empowering future software architects with modern toolchains, industry certifications, and problem-solving rigor."
        kicker="DEPARTMENT HIGHLIGHTS"
        items={cards}
        softBackground={false}
      />

      <Template2CardGrid
        title="Specialized Laboratory Facilities"
        subtitle="Hands-on computing environments equipped with enterprise-grade development workstations."
        kicker="INFRASTRUCTURE"
        items={labs}
        softBackground={true}
      />

      <Template2CtaBanner
        kicker="JOIN CSE AT RIET"
        title="Ready to build software that impacts millions?"
        desc="Apply for B.Tech Computer Science & Engineering for the 2026-27 intake."
        buttonText="Apply for CSE ↗"
        onOpenEnquiry={onOpenEnquiry}
      />
    </div>
  );
}

import React from 'react';
import Template2Hero from '../components/Template2Hero';
import Template2CardGrid from '../components/Template2CardGrid';
import Template2CtaBanner from '../components/Template2CtaBanner';

export default function Template2StudentCorner({ onOpenEnquiry }) {
  const cards = [
    {
      title: 'Notices & Circulars',
      desc: 'Official institutional notifications, exam dates, holiday schedules, and RTU Kota circulars.',
      link: '/news-events',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=82'
    },
    {
      title: 'Academic Calendar 2026-27',
      desc: 'Semester teaching schedules, mid-term examinations, practical lab dates, and semester break timelines.',
      link: '/academics',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=900&q=82'
    },
    {
      title: 'Results & Examination Cell',
      desc: 'Access semester grade sheets, RTU revaluation forms, marks verification and backlog exam schedules.',
      link: '/student-corner',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&q=82'
    },
    {
      title: 'Download Forms & Syllabus',
      desc: 'RTU curriculum PDFs, railway concession forms, scholarship applications, and library requisition cards.',
      link: '/student-corner',
      image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=900&q=82'
    },
    {
      title: 'Mentoring & Grievance Cell',
      desc: 'Confidential student mentoring, internal complaints committee, and dedicated 24x7 anti-ragging support.',
      link: '/contact',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=82'
    },
    {
      title: 'E-Library & Digital Resources',
      desc: 'Remote access to IEEE Xplore, DELNET digital books, NPTEL video lectures and virtual laboratory simulations.',
      link: '/facilities',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=900&q=82'
    }
  ];

  return (
    <div>
      <Template2Hero
        title="Student Corner"
        headline="Everything students need, in one place."
        desc="Access exam schedules, academic calendars, syllabus downloads, result portals, and student support channels."
      />

      <Template2CardGrid
        title="Student Resources & Portals"
        subtitle="Quick links to vital student-facing services, institutional documents and administrative portals."
        kicker="STUDENT SERVICES"
        items={cards}
        softBackground={false}
      />

      <Template2CtaBanner
        kicker="NEED IMMEDIATE ASSISTANCE?"
        title="Connect with the Student Welfare Cell"
        desc="Reach out to the Dean of Student Welfare or the Registrar Office for verification certificates, transcripts, or queries."
        buttonText="Contact Student Welfare ↗"
        buttonLink="/contact"
      />
    </div>
  );
}

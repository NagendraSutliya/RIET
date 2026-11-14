import React from 'react';
import Template2Hero from '../components/Template2Hero';
import Template2CardGrid from '../components/Template2CardGrid';
import Template2CtaBanner from '../components/Template2CtaBanner';

export default function Template2Admissions({ onOpenEnquiry }) {
  const cards = [
    {
      title: '01 · Choose a Programme',
      desc: 'Review B.Tech, M.Tech, MBA, MCA and Polytechnic diplomas, exploring curricula, duration and specialization electives.',
      link: '/academics',
      image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=900&q=82'
    },
    {
      title: '02 · Check Eligibility & REAP Code 1025',
      desc: 'Confirm Class 12 PCM scores (min 45% aggregate) or REAP / JEE Main merit ranking. Direct management quota seats available.',
      link: '/admissions',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=900&q=82'
    },
    {
      title: '03 · Submit an Online Enquiry',
      desc: 'Fill out our instant admission query form with your academic details, contact information, and preferred branch choice.',
      link: '/contact',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&q=82'
    },
    {
      title: '04 · Campus Counselling & Verification',
      desc: 'Visit our Bhankrota campus or attend online counselling with senior faculty to finalize provisional seat allotment.',
      link: '/fees-scholarships',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=82'
    }
  ];

  return (
    <div>
      <Template2Hero
        title="Admissions"
        headline="Your next chapter starts here."
        desc="Understand the 4-step admission journey, eligibility guidelines and connect with the admissions counsellors."
      />

      <Template2CardGrid
        title="Admission Journey"
        subtitle="A transparent, hassle-free pathway designed to assist students and parents at every step."
        kicker="ENROLLMENT WORKFLOW"
        items={cards}
        softBackground={false}
        columns={4}
      />

      <Template2CtaBanner
        kicker="ADMISSIONS 2026-27 OPEN"
        title="Start Your Application Today"
        desc="Connect directly with our admissions helpline at 9257111214 / 9257111215 or request an immediate callback."
        buttonText="Begin Online Application ↗"
        onOpenEnquiry={onOpenEnquiry}
      />
    </div>
  );
}

import React from 'react';
import Template2Hero from '../components/Template2Hero';
import Template2CardGrid from '../components/Template2CardGrid';
import Template2CtaBanner from '../components/Template2CtaBanner';

export default function Template2MandatoryDisclosure({ onOpenEnquiry }) {
  const cards = [
    {
      title: 'AICTE Approvals & Extension of Approval',
      desc: 'Statutory approvals, annual extension orders, sanctioned intake capacities, and compliance reports.',
      link: '/mandatory-disclosure',
      image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=900&q=82'
    },
    {
      title: 'RTU Affiliation & Academic Permissions',
      desc: 'Rajasthan Technical University permanent affiliation records and official curriculum orders.',
      link: '/mandatory-disclosure',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=900&q=82'
    },
    {
      title: 'Faculty Profiles & Infrastructure Audits',
      desc: 'Verified list of approved faculty members, laboratory carpet area details, and library holdings.',
      link: '/mandatory-disclosure',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&q=82'
    },
    {
      title: 'Statutory Committees & Grievance Mechanism',
      desc: 'Anti-Ragging Committee, Internal Complaints Committee (ICC), SC/ST Cell, and Ombudsman details.',
      link: '/mandatory-disclosure',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=82'
    },
    {
      title: 'Financial Statements & Audits',
      desc: 'Audited balance sheets, institutional fee fixation orders, and scholarship disbursements.',
      link: '/mandatory-disclosure',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=82'
    },
    {
      title: 'Right to Information (RTI)',
      desc: 'Designated Public Information Officer (PIO) and First Appellate Authority contact details under the RTI Act.',
      link: '/contact',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=900&q=82'
    }
  ];

  return (
    <div>
      <Template2Hero
        title="Mandatory Disclosure"
        headline="Institutional information, clearly presented."
        desc="Access official regulatory disclosures, AICTE compliance records, committee notifications and institutional governance orders."
      />

      <Template2CardGrid
        title="Statutory Disclosures & Records"
        subtitle="Publicly accessible institutional records upholding regulatory transparency and quality benchmarks."
        kicker="PUBLIC TRANSPARENCY"
        items={cards}
        softBackground={false}
      />

      <Template2CtaBanner
        kicker="COMPLIANCE & INTEGRITY"
        title="Need certified document copies?"
        desc="Contact the Registrar Office for certified statutory documentation or academic verification requests."
        buttonText="Contact Registrar ↗"
        buttonLink="/contact"
      />
    </div>
  );
}

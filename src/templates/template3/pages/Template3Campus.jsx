import React from 'react';
import { Link } from 'react-router-dom';
import Template3PageHeader from '../components/Template3PageHeader';
import { Video, MapPin, Calendar, CheckCircle2 } from 'lucide-react';
import { campusLifePhotos } from '../../../data/collegeData';

export default function Template3Campus({ onOpenEnquiry }) {
  const facilities = [
    {
      title: 'Classrooms & Smart Lecture Theatres',
      desc: 'Air-conditioned multimedia amphitheatres with interactive projection and smart recording boards.',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Separate Secure Hostels',
      desc: 'Dedicated on-campus boys and girls hostels with 24x7 biometric security, Wi-Fi, and mess.',
      image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Central Library & E-Resource Hub',
      desc: 'Over 45,000 print books, IEEE journal subscriptions, DELNET network, and peaceful reading halls.',
      image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Sports Complex & Athletics Ground',
      desc: 'Full-size cricket ground, football pitch, basketball court, badminton facilities, and gymnasium.',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Auditorium & Annual Fests',
      desc: '800-seat central auditorium hosting annual Goonj cultural fest, tech symposiums, and convocation.',
      image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Hygienic Cafeteria & Food Court',
      desc: 'Multi-cuisine nutritious dining serving breakfast, hot lunch, snacks, and fresh beverages.',
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <div className="bg-white text-[#1A2233] w-full max-w-full overflow-x-hidden">
      <Template3PageHeader
        title="Campus Life &amp; Facilities"
        desc="Labs, hostels, sports, library and student communities on a lush 20-acre campus."
        breadcrumb="Campus"
      />

      <section className="py-14 sm:py-18 bg-white w-full max-w-full overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Virtual Tour Feature Banner */}
          <div className="bg-[#0E2A5C] text-white rounded-2xl p-8 sm:p-12 mb-12 shadow-lg flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl space-y-2">
              <span className="text-[11px] font-black uppercase tracking-wider text-[#F2A900] block">
                IMMERSIVE EXPERIENCE
              </span>
              <h3 className="font-heading font-black text-2xl sm:text-3xl text-white">
                Take an Online Virtual Tour of RIET
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Explore our high-performance computing labs, mechanical engineering workshops, library reading spaces, and hostel amenities from the comfort of your home.
              </p>
            </div>
            <div className="shrink-0">
              <button
                onClick={onOpenEnquiry}
                className="bg-[#F2A900] hover:bg-[#e09b00] text-[#0E2A5C] font-black px-6 py-3.5 rounded-lg text-xs sm:text-sm shadow-md transition-all hover:scale-105 active:scale-95"
              >
                Book a Campus Visit ↗
              </button>
            </div>
          </div>

          {/* 6-Item Facility Photo Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((fac, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#E1E6F0] rounded-xl overflow-hidden shadow-xs hover:shadow-md transition-all group"
              >
                <div className="h-52 overflow-hidden bg-slate-100">
                  <img
                    src={fac.image}
                    alt={fac.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-heading font-black text-lg text-[#0E2A5C] mb-2 group-hover:text-[#F2A900] transition-colors">
                    {fac.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {fac.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

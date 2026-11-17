import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Template4PageHeader from '../components/Template4PageHeader';
import { MapPin, Play, Building2, BookOpen, Utensils, Trophy, Music, BedDouble, ArrowRight } from 'lucide-react';

export default function Template4Campus({ onOpenEnquiry }) {
  const [isPlayingTour, setIsPlayingTour] = useState(false);

  const facilities = [
    {
      title: "Classrooms and Computing Labs",
      desc: "Smart acoustic lecture theaters, high-performance computing centers with 500+ workstations, GPU clusters, and high-speed Wi-Fi.",
      img: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=600&q=80",
      tag: "Academic Infrastructure",
      icon: Building2
    },
    {
      title: "Hostels & Residential Living",
      desc: "Separate on-campus secure residences for boys and girls with furnished rooms, air-cooling, 24x7 security, and hygienic dining mess.",
      img: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=600&q=80",
      tag: "On-Campus Living",
      icon: BedDouble
    },
    {
      title: "Central Digital Library",
      desc: "Over 50,000 volumes, international IEEE/Springer journals, DelNet digital subscriptions, silent study bays, and research workstations.",
      img: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=600&q=80",
      tag: "Knowledge Hub",
      icon: BookOpen
    },
    {
      title: "Sports & Athletics Arena",
      desc: "Full-sized cricket grounds, football pitch, basketball court, badminton hall, indoor table tennis, and modern fitness gymnasium.",
      img: "https://images.unsplash.com/photo-1526676037777-05a232554f77?auto=format&fit=crop&w=600&q=80",
      tag: "Physical Fitness",
      icon: Trophy
    },
    {
      title: "Auditorium & Technocultural Fests",
      desc: "State-of-the-art 800-seat centrally air-conditioned auditorium hosting annual national fests, conferences, hackathons, and corporate conclaves.",
      img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80",
      tag: "Cultural Vibrancy",
      icon: Music
    },
    {
      title: "Cafeteria & Student Hangouts",
      desc: "Multi-cuisine hygienic food court, open green lawns, coffee shop, and vibrant social spaces for informal peer collaboration.",
      img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80",
      tag: "Social Spaces",
      icon: Utensils
    }
  ];

  return (
    <div className="w-full font-manrope">
      {/* 1. PAGE HEADER */}
      <Template4PageHeader
        title="Campus"
        desc="Labs, hostels, sports and campus life across a lush green ecosystem in Jaipur."
      />

      {/* 2. CAMPUS VIRTUAL TOUR HERO CARD & FACILITIES */}
      <section className="py-14 sm:py-20 px-6 sm:px-10 bg-white">
        <div className="max-w-[1060px] mx-auto space-y-12">
          {/* Charcoal / Navy Virtual Tour Card */}
          <div className="bg-[#1C1B22] text-white p-8 sm:p-12 rounded-lg border border-[#2D2B36] shadow-lg relative overflow-hidden">
            <div className="max-w-2xl space-y-4 relative z-10">
              <span className="inline-block bg-[#B3263A] text-white text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">
                Interactive Campus Experience
              </span>
              <h2 className="font-bricolage text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Virtual tour
              </h2>
              <p className="text-[#CFCBD6] text-sm sm:text-base leading-relaxed">
                Take an immersive 360-degree digital walkthrough of RIET's academic blocks, high-tech engineering laboratories, robotics arena, sports complexes, and residential facilities.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  onClick={() => setIsPlayingTour(true)}
                  className="bg-[#B3263A] hover:bg-[#8F1C2D] text-white font-bold py-3 px-6 rounded text-sm transition-colors inline-flex items-center gap-2 shadow-xs"
                >
                  <Play className="w-4 h-4 fill-white" />
                  <span>Watch campus tour</span>
                </button>
                <Link
                  to="/contact"
                  className="inline-block border border-[#CFCBD6] text-[#E8E6EC] hover:bg-white hover:text-[#1C1B22] font-bold py-3 px-6 rounded text-sm transition-colors"
                >
                  Book a campus visit
                </Link>
              </div>
            </div>

            {/* Video preview / Modal backdrop simulation */}
            {isPlayingTour && (
              <div className="mt-8 pt-8 border-t border-[#2D2B36] aspect-video w-full max-w-3xl rounded overflow-hidden shadow-2xl relative bg-black">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1"
                  title="RIET Jaipur Campus Tour"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <button
                  onClick={() => setIsPlayingTour(false)}
                  className="absolute top-3 right-3 bg-black/80 hover:bg-black text-white px-3 py-1 rounded text-xs font-bold"
                >
                  Close Video
                </button>
              </div>
            )}
          </div>

          {/* Connected Grid of 6 Campus Facilities */}
          <div>
            <div className="mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-[#B3263A]">
                World-Class Amenities
              </span>
              <h2 className="font-bricolage text-3xl sm:text-4xl font-bold text-[#1C1B22] mt-1">
                Campus Facilities
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-[#DAD5D8]">
              {facilities.map((fac, idx) => {
                const Icon = fac.icon;
                return (
                  <div
                    key={idx}
                    className="p-6 bg-white border-r border-b border-[#DAD5D8] hover:bg-[#FAF8F9] transition-colors flex flex-col justify-between group"
                  >
                    <div>
                      <div className="h-48 rounded overflow-hidden mb-4 border border-[#DAD5D8]">
                        <img
                          src={fac.img}
                          alt={fac.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="flex items-center gap-1.5 mb-2">
                        <Icon className="w-4 h-4 text-[#B3263A]" />
                        <span className="text-[11px] font-bold text-[#7A1626]">
                          {fac.tag}
                        </span>
                      </div>
                      <h3 className="font-bricolage text-xl font-bold text-[#1C1B22] mb-2 group-hover:text-[#B3263A] transition-colors">
                        {fac.title}
                      </h3>
                      <p className="text-xs text-[#4A4752] leading-relaxed">
                        {fac.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

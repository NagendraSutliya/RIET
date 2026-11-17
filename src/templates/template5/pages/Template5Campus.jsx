import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Template5PageHeader from '../components/Template5PageHeader';
import { Play, Building2, BookOpen, Utensils, Trophy, Music, BedDouble } from 'lucide-react';

export default function Template5Campus({ onOpenEnquiry }) {
  const [isPlayingTour, setIsPlayingTour] = useState(false);

  const facilities = [
    {
      title: "Classrooms and Computing Labs",
      desc: "Smart acoustic lecture theaters, high-performance computing centers with 500+ workstations, GPU clusters, and high-speed Wi-Fi.",
      img: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=600&q=80",
      tag: "Academic Labs",
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
    <div className="w-full font-sans text-[#16262B]">
      <Template5PageHeader
        title="Campus"
        desc="Labs, hostels, sports and campus life across a lush green ecosystem in Jaipur."
      />

      <section className="py-16 sm:py-20 px-6 sm:px-10 bg-white">
        <div className="max-w-[1180px] mx-auto space-y-12">
          {/* Deep Teal Virtual Tour Hero Card */}
          <div className="bg-[#0A3340] text-white p-8 sm:p-12 rounded-[22px] border border-[#0F4C5C] shadow-lg relative overflow-hidden">
            <div className="max-w-2xl space-y-4 relative z-10">
              <span className="inline-block bg-[#F58B3A] text-[#0A3340] text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                Interactive Campus Experience
              </span>
              <h2 className="font-fraunces text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Virtual tour
              </h2>
              <p className="text-[#D5E8EC] text-sm sm:text-base leading-relaxed">
                Take an immersive 360-degree digital walkthrough of RIET's academic blocks, high-tech engineering laboratories, robotics arena, sports complexes, and residential facilities.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  onClick={() => setIsPlayingTour(true)}
                  className="bg-[#F58B3A] hover:bg-[#FFB26B] text-[#0A3340] font-bold py-3 px-6 rounded-full text-sm transition-colors inline-flex items-center gap-2 shadow-xs"
                >
                  <Play className="w-4 h-4 fill-[#0A3340]" />
                  <span>Watch campus tour</span>
                </button>
                <Link
                  to="/contact"
                  className="inline-block border border-white/60 text-white hover:bg-white hover:text-[#0A3340] font-bold py-3 px-6 rounded-full text-sm transition-colors"
                >
                  Book a campus visit
                </Link>
              </div>
            </div>

            {isPlayingTour && (
              <div className="mt-8 pt-8 border-t border-[#0F4C5C] aspect-video w-full max-w-3xl rounded-[16px] overflow-hidden shadow-2xl relative bg-black">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1"
                  title="RIET Jaipur Campus Tour"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <button
                  onClick={() => setIsPlayingTour(false)}
                  className="absolute top-3 right-3 bg-black/80 hover:bg-black text-white px-3 py-1 rounded-full text-xs font-bold"
                >
                  Close Video
                </button>
              </div>
            )}
          </div>

          {/* 6 Facilities Grid */}
          <div>
            <div className="mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-[#F58B3A]">
                World-Class Amenities
              </span>
              <h2 className="font-fraunces text-3xl sm:text-4xl font-bold text-[#0A3340] mt-1">
                Campus Facilities
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {facilities.map((fac, idx) => {
                const Icon = fac.icon;
                return (
                  <div
                    key={idx}
                    className="p-6 bg-[#EEF4F5] rounded-[22px] hover:bg-[#DDEAED] transition-all flex flex-col justify-between group"
                  >
                    <div>
                      <div className="h-48 rounded-[16px] overflow-hidden mb-4">
                        <img
                          src={fac.img}
                          alt={fac.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="flex items-center gap-1.5 mb-2">
                        <Icon className="w-4 h-4 text-[#0F4C5C]" />
                        <span className="text-[11px] font-bold text-[#F58B3A]">
                          {fac.tag}
                        </span>
                      </div>
                      <h3 className="font-fraunces text-2xl font-bold text-[#0A3340] mb-2">
                        {fac.title}
                      </h3>
                      <p className="text-xs text-[#3C5961] leading-relaxed">
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

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Template6PageHeader from '../components/Template6PageHeader';
import { Play, Building2, BookOpen, Utensils, Trophy, Music, BedDouble } from 'lucide-react';

export default function Template6Campus({ onOpenEnquiry }) {
  const [isPlayingTour, setIsPlayingTour] = useState(false);

  const facilities = [
    { title: "Classrooms and Computing Labs", desc: "Smart acoustic lecture theaters, high-performance computing centers with 500+ workstations, and GPU clusters.", img: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=600&q=80", tag: "Academic Labs", icon: Building2 },
    { title: "Hostels & Residential Living", desc: "Separate secure residences for boys and girls with furnished rooms, air-cooling, 24x7 security, and hygienic dining mess.", img: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=600&q=80", tag: "On-Campus Living", icon: BedDouble },
    { title: "Central Digital Library", desc: "Over 50,000 volumes, international IEEE/Springer journals, DelNet digital subscriptions, and research workstations.", img: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=600&q=80", tag: "Knowledge Hub", icon: BookOpen },
    { title: "Sports & Athletics Arena", desc: "Full-sized cricket grounds, football pitch, basketball court, badminton hall, indoor table tennis, and gymnasium.", img: "https://images.unsplash.com/photo-1526676037777-05a232554f77?auto=format&fit=crop&w=600&q=80", tag: "Physical Fitness", icon: Trophy },
    { title: "Auditorium & Technocultural Fests", desc: "State-of-the-art 800-seat centrally air-conditioned auditorium hosting annual national fests and conferences.", img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80", tag: "Cultural Vibrancy", icon: Music },
    { title: "Cafeteria & Student Hangouts", desc: "Multi-cuisine hygienic food court, open green lawns, coffee shop, and vibrant social spaces for informal collaboration.", img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80", tag: "Social Spaces", icon: Utensils }
  ];

  return (
    <div className="w-full font-sans text-[#1C1B22] bg-white">
      <Template6PageHeader
        title="Campus"
        desc="Labs, hostels, sports and campus life across a lush green ecosystem in Jaipur."
      />

      <section className="py-16 sm:py-20 px-6 sm:px-10 bg-white">
        <div className="max-w-[1140px] mx-auto space-y-12">
          {/* Classic Burgundy Tour Card */}
          <div className="bg-[#6B1724] text-white p-8 sm:p-12 rounded border border-[#52111B] shadow-md relative overflow-hidden">
            <div className="max-w-2xl space-y-4 relative z-10">
              <span className="inline-block bg-[#FAF7F5] text-[#6B1724] text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded">
                Interactive Campus Walkthrough
              </span>
              <h2 className="font-fraunces text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Virtual tour
              </h2>
              <p className="text-[#FAF7F5]/85 text-sm sm:text-base leading-relaxed">
                Take an immersive 360-degree digital walkthrough of RIET's academic blocks, high-tech engineering laboratories, robotics arena, sports complexes, and residential facilities.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  onClick={() => setIsPlayingTour(true)}
                  className="bg-[#FAF7F5] hover:bg-white text-[#6B1724] font-bold py-3 px-6 rounded text-sm transition-colors inline-flex items-center gap-2 shadow-xs"
                >
                  <Play className="w-4 h-4 fill-[#6B1724]" />
                  <span>Watch campus tour</span>
                </button>
                <Link
                  to="/contact"
                  className="inline-block border border-white/60 text-white hover:bg-white hover:text-[#6B1724] font-bold py-3 px-6 rounded text-sm transition-colors"
                >
                  Book a campus visit
                </Link>
              </div>
            </div>

            {isPlayingTour && (
              <div className="mt-8 pt-8 border-t border-[#52111B] aspect-video w-full max-w-3xl rounded overflow-hidden shadow-2xl relative bg-black">
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

          <div>
            <div className="mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-[#6B1724]">
                Campus Amenities
              </span>
              <h2 className="font-fraunces text-3xl sm:text-4xl font-bold text-[#1C1B22] mt-1">
                Campus Facilities
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {facilities.map((fac, idx) => {
                const Icon = fac.icon;
                return (
                  <div
                    key={idx}
                    className="p-6 bg-[#FAF7F5] border border-[#E3DDD8] rounded hover:border-[#6B1724] transition-all flex flex-col justify-between group"
                  >
                    <div>
                      <div className="h-48 rounded overflow-hidden mb-4 border border-[#E3DDD8]">
                        <img
                          src={fac.img}
                          alt={fac.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="flex items-center gap-1.5 mb-2">
                        <Icon className="w-4 h-4 text-[#6B1724]" />
                        <span className="text-[11px] font-bold text-[#6B1724]">
                          {fac.tag}
                        </span>
                      </div>
                      <h3 className="font-fraunces text-2xl font-bold text-[#1C1B22] mb-2">
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

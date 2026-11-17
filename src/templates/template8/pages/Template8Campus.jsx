import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Template8PageHeader from '../components/Template8PageHeader';
import { Play, Building2, BookOpen, Utensils, Trophy, Music, BedDouble, X } from 'lucide-react';

export default function Template8Campus({ onOpenEnquiry }) {
  const [isPlayingTour, setIsPlayingTour] = useState(false);

  const facilities = [
    { title: "Classrooms & Computing Centers", desc: "Acoustically treated smart lecture theaters, high-performance computing centers with 500+ workstations, and GPU clusters.", img: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=600&q=80", tag: "Academic Pods", icon: Building2 },
    { title: "Hostels & Residential Living", desc: "Separate secure residences for boys and girls with furnished rooms, air-cooling, 24x7 Wi-Fi, biometric security, and hygienic dining mess.", img: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=600&q=80", tag: "On-Campus Living", icon: BedDouble },
    { title: "Central Digital Library", desc: "Over 50,000 volumes, international IEEE/Springer journals, DelNet digital subscriptions, and research workstations.", img: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=600&q=80", tag: "Knowledge Hub", icon: BookOpen },
    { title: "Sports & Athletics Complex", desc: "Full-sized cricket grounds, football pitch, floodlit basketball court, badminton hall, indoor table tennis, and gymnasium.", img: "https://images.unsplash.com/photo-1526676037777-05a232554f77?auto=format&fit=crop&w=600&q=80", tag: "Physical Fitness", icon: Trophy },
    { title: "Auditorium & Cultural Arena", desc: "Centrally air-conditioned 800-seat auditorium hosting annual national hackathons, robotic combat leagues, and cultural fests.", img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80", tag: "Cultural Fests", icon: Music },
    { title: "Cafeteria & Collaborative Spaces", desc: "Multi-cuisine hygienic food court, open green lawns, coffee shop, and vibrant spaces for informal peer collaboration.", img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80", tag: "Social Life", icon: Utensils }
  ];

  return (
    <div className="w-full font-sans text-[#2a2a2a] bg-white">
      <Template8PageHeader
        title="Campus Life &amp; Amenities"
        desc="Discover a vibrant 30-acre green university campus in Jaipur equipped with world-class computing labs, modern student residences, and sports complexes."
        breadcrumbs={[{ label: 'Campus Life' }]}
      />

      {/* Virtual Tour Banner */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-[1240px] mx-auto bg-[#192f59] text-white p-8 sm:p-14 rounded-xl shadow-xl relative overflow-hidden">
          <div className="max-w-2xl space-y-4 relative z-10">
            <span className="inline-block bg-[#d2973b] text-[#192f59] text-xs font-bold uppercase tracking-widest px-3 py-1 rounded">
              Interactive 360° Walkthrough
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-playfair text-white tracking-tight">
              Experience RIET Campus Virtually
            </h2>
            <p className="text-slate-200 text-xs sm:text-sm leading-relaxed font-normal">
              Take an interactive digital tour through our academic blocks, smart lecture halls, advanced robotics labs, sports complex, and residential hostels.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={() => setIsPlayingTour(!isPlayingTour)}
                className="bg-[#d2973b] hover:bg-[#b8822e] text-white font-bold py-3.5 px-6 rounded text-xs uppercase tracking-wider transition-colors inline-flex items-center gap-2 shadow"
              >
                <Play className="w-4 h-4 fill-white" />
                <span>{isPlayingTour ? 'Close Walkthrough' : 'Watch Campus Tour'}</span>
              </button>
              <Link
                to="/contact"
                className="inline-block border-2 border-white text-white hover:bg-white hover:text-[#192f59] font-bold py-3 px-6 rounded text-xs uppercase tracking-wider transition-colors"
              >
                Book a Campus Visit
              </Link>
            </div>
          </div>

          {isPlayingTour && (
            <div className="mt-8 pt-8 border-t border-white/20 aspect-video w-full max-w-3xl rounded-lg overflow-hidden shadow-2xl relative bg-black">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="RIET Campus Walkthrough"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          )}
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 bg-[#f7f8fa] border-t border-slate-200">
        <div className="max-w-[1240px] mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#d2973b] block mb-2">
              Campus Infrastructure
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-playfair text-[#192f59]">
              Facilities &amp; Student Living
            </h2>
            <div className="h-1 w-14 bg-[#d2973b] my-4 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((fac, idx) => {
              const Icon = fac.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-lg border border-slate-200 overflow-hidden shadow-2xs hover:shadow-lg transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="h-48 overflow-hidden relative">
                      <img
                        src={fac.img}
                        alt={fac.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3 bg-[#192f59] text-white text-[11px] font-bold px-3 py-1 rounded">
                        {fac.tag}
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-2">
                        <Icon className="w-5 h-5 text-[#d2973b] shrink-0" />
                        <h3 className="text-lg font-bold font-playfair text-[#192f59] group-hover:text-[#d2973b] transition-colors">
                          {fac.title}
                        </h3>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed font-normal">
                        {fac.desc}
                      </p>
                    </div>
                  </div>

                  <div className="px-6 pb-6 pt-0 text-xs font-bold text-[#192f59] flex items-center justify-between">
                    <span className="text-slate-400">Jaipur Campus</span>
                    <span className="text-[#d2973b]">Available 24x7</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

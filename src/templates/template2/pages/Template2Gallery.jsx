import React, { useState } from 'react';
import Template2Hero from '../components/Template2Hero';
import Template2CtaBanner from '../components/Template2CtaBanner';
import PhotoLightboxModal from '../../../components/PhotoLightboxModal';

const galleryPhotos = [
  { url: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=85', title: 'Main Campus Academic Block', category: 'Campus' },
  { url: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=85', title: 'Central University Library & Reading Hall', category: 'Library' },
  { url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=85', title: 'High-Tech Computing & Networking Lab', category: 'Laboratories' },
  { url: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=1200&q=85', title: 'Mechanical Robotics & CAD Workshop', category: 'Workshops' },
  { url: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=85', title: 'Student Team Project Collaboration', category: 'Student Life' },
  { url: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=85', title: 'Software Engineering Coding Marathon', category: 'Hackathons' },
  { url: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=1200&q=85', title: 'Annual Cultural Festival & Concert', category: 'Celebrations' },
  { url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=85', title: 'Industry Leadership Seminar', category: 'Seminars' },
  { url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=85', title: 'Graduation Day Convocation', category: 'Events' }
];

export default function Template2Gallery({ onOpenEnquiry }) {
  const [activePhoto, setActivePhoto] = useState(null);

  return (
    <div>
      <Template2Hero
        title="Photo Gallery"
        headline="A glimpse of life at RIET."
        desc="Explore campus grounds, high-tech research laboratories, sports arenas and vibrant student celebrations."
      />

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-10 max-w-2xl">
            <span className="text-[11px] font-black uppercase tracking-[1.7px] text-[#b57c18] block mb-2">
              CAMPUS MOMENTS
            </span>
            <h2 className="font-heading font-black text-2xl sm:text-3xl text-[#102b50] tracking-tight">
              Life on Campus in Pictures
            </h2>
            <p className="text-slate-500 text-sm mt-2">
              Click any photograph to view high-resolution image details and full-screen preview.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryPhotos.map((photo, idx) => (
              <div
                key={idx}
                onClick={() => setActivePhoto(photo)}
                className="group relative h-64 sm:h-72 rounded-2xl overflow-hidden cursor-pointer shadow-md border border-[#e5eaf0] bg-slate-100"
              >
                <img
                  src={photo.url}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#091d35]/90 via-[#091d35]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#e6ad3d] mb-1">
                    {photo.category}
                  </span>
                  <h4 className="text-white font-bold text-sm leading-tight">
                    {photo.title}
                  </h4>
                  <span className="text-[11px] text-slate-300 mt-2 font-medium flex items-center gap-1">
                    Click to enlarge ↗
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Template2CtaBanner
        kicker="SCHEDULE A VISIT"
        title="Experience RIET Campus in Person"
        desc="Book a personalized guided tour of our facilities, laboratories, sports grounds and residential hostels."
        buttonText="Schedule Campus Tour ↗"
        onOpenEnquiry={onOpenEnquiry}
      />

      {/* Lightbox Modal */}
      {activePhoto && (
        <PhotoLightboxModal
          photo={activePhoto}
          onClose={() => setActivePhoto(null)}
        />
      )}
    </div>
  );
}

import React, { useState } from 'react';
import { Home, Trophy, BookOpen, Coffee, Wifi, Bus, Sparkles, ZoomIn, Users, CheckCircle2, X, Compass, ChevronRight } from 'lucide-react';
import { campusLifePhotos, busRoutes, studentClubs } from '../../data/collegeData';
import PhotoLightboxModal from '../../components/PhotoLightboxModal';

export default function Template1CampusLife({ onOpenEnquiry }) {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(null);
  const [activeTourTab, setActiveTourTab] = useState('academic');
  const [clubCategory, setClubCategory] = useState('All');
  const [selectedClub, setSelectedClub] = useState(null);
  const [clubJoined, setClubJoined] = useState(false);
  const [studentName, setStudentName] = useState('');
  const [rollNo, setRollNo] = useState('');

  const facilities = [
    { name: "Hostels", icon: Home, desc: "Separate, secure AC & non-AC residential blocks for boys and girls with 24/7 security." },
    { name: "Sports", icon: Trophy, desc: "Full-sized cricket ground, football turf, volleyball, basketball, and indoor gaming arena." },
    { name: "Library", icon: BookOpen, desc: "Over 50,000+ volumes, IEEE digital subscriptions, DELNET access, and silent reading zones." },
    { name: "Cafeteria", icon: Coffee, desc: "Hygienic multi-cuisine dining serving fresh meals, snacks, beverages, and student hangouts." },
    { name: "Wi-Fi Campus", icon: Wifi, desc: "Seamless 1 Gbps high-speed optical fiber wireless network across hostels and academic blocks." },
    { name: "Transport", icon: Bus, desc: "Fleet of dedicated college buses connecting all major routes across Jaipur city." }
  ];

  const campusTourPillars = {
    academic: {
      title: "Smart Academic Blocks",
      desc: "Architecturally planned lecture halls equipped with audio-visual projection, interactive smartboards, and ergonomic seating.",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1000&q=80",
      features: ["50+ Smart Classrooms", "Air-conditioned Seminar Halls", "Departmental Tutorial Rooms", "Campus-wide High-Speed Wi-Fi"]
    },
    library: {
      title: "Central Digital Library",
      desc: "Knowledge repository hosting 50,000+ technical volumes, 120 national and international journals, IEEE Xplore digital library access.",
      image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1000&q=80",
      features: ["Automated RFID Circulation", "E-Journal Reading Carrels", "DELNET Inter-Library Loan", "Reprographic Xerox Facilities"]
    },
    sports: {
      title: "Sports Arena & Fitness Center",
      desc: "Sprawling athletics ground hosting cricket leagues, football tournaments, synthetic basketball courts, and modernized gymnasium.",
      image: "https://images.unsplash.com/photo-1526676037777-05a232554f77?auto=format&fit=crop&w=1000&q=80",
      features: ["Standard Cricket Pitch", "Volleyball & Badminton Courts", "Indoor Table Tennis & Chess", "Professional Physical Instructors"]
    },
    hostels: {
      title: "Residential Hostels & Mess",
      desc: "Comfortable 'home away from home' with 24x7 security, hygienic nutritious dining, recreation halls, and round-the-clock medical warden.",
      image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1000&q=80",
      features: ["Single & Shared AC/Non-AC Rooms", "Nutritious 4-Meal Mess Schedule", "Solar Water Heating Systems", "Wi-Fi in Every Wing"]
    }
  };

  const currentTour = campusTourPillars[activeTourTab] || campusTourPillars.academic;

  const filteredClubs = clubCategory === 'All'
    ? studentClubs
    : studentClubs.filter(c => c.category === clubCategory);

  const galleryItems = [
    ...campusLifePhotos,
    { id: 5, title: "Tech Fest 'Tarang'", category: "Hackathon", url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80" },
    { id: 6, title: "Robotics Laboratory", category: "Innovation", url: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80" },
    { id: 7, title: "Cricket Tournament", category: "Sports", url: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=800&q=80" },
    { id: 8, title: "Music & Drama Society", category: "Cultural", url: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=800&q=80" }
  ];

  const currentPhoto = selectedPhotoIndex !== null ? galleryItems[selectedPhotoIndex] : null;

  const handleJoinClub = (e) => {
    e.preventDefault();
    setClubJoined(true);
    setTimeout(() => {
      setClubJoined(false);
      setSelectedClub(null);
      setStudentName('');
      setRollNo('');
    }, 3000);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <div className="bg-gradient-to-r from-riet-navy-dark via-riet-navy to-riet-navy-light text-white py-14 px-4 border-b border-riet-line">
        <div className="max-w-7xl mx-auto">
          <span className="text-xs font-bold text-riet-gold uppercase tracking-wider block mb-2">
            Vibrant 20-Acre Campus • Bhankrota, Jaipur
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black tracking-tight text-white">
            Campus Life, Clubs & Infrastructure
          </h1>
          <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-2xl">
            A dynamic student ecosystem that fosters creativity, athletic excellence, lifelong friendships, and cultural leadership.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-14 space-y-16">
        {/* Interactive Virtual Campus Explorer */}
        <div className="p-8 rounded-3xl bg-riet-paper border border-slate-200 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-riet-gold uppercase tracking-wider block mb-1">
                Campus Tour
              </span>
              <h2 className="text-2xl sm:text-3xl font-heading font-black text-riet-navy">
                Explore Our Campus Spaces
              </h2>
            </div>

            <div className="flex items-center gap-2 border border-slate-200 bg-white p-1 rounded-xl">
              {[
                { id: 'academic', label: 'Academic Blocks' },
                { id: 'library', label: 'Central Library' },
                { id: 'sports', label: 'Sports Arena' },
                { id: 'hostels', label: 'Residential Hostels' }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTourTab(tab.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    activeTourTab === tab.id
                      ? 'bg-riet-navy text-riet-gold shadow-sm'
                      : 'text-slate-600 hover:text-riet-navy'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white p-6 rounded-2xl border border-slate-200">
            <div className="lg:col-span-6 rounded-xl overflow-hidden shadow-sm h-64 sm:h-80">
              <img
                src={currentTour.image}
                alt={currentTour.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="lg:col-span-6 space-y-4">
              <h3 className="font-heading font-black text-2xl text-riet-navy">
                {currentTour.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {currentTour.desc}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                {currentTour.features.map((feat, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs font-semibold text-slate-700 p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Student Clubs & Societies Hub */}
        <div id="clubs" className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-riet-gold uppercase tracking-wider block mb-1">
                Student Communities
              </span>
              <h2 className="text-2xl sm:text-3xl font-heading font-black text-riet-navy">
                Student Clubs & Societies
              </h2>
            </div>

            <div className="flex items-center gap-2 border border-slate-200 bg-slate-50 p-1 rounded-xl text-xs font-bold">
              {['All', 'Technical', 'Cultural', 'Sports', 'Community'].map(cat => (
                <button
                  key={cat}
                  onClick={() => setClubCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg transition-all ${
                    clubCategory === cat ? 'bg-riet-navy text-riet-gold shadow-sm' : 'text-slate-600 hover:text-riet-navy'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredClubs.map((club, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-slate-200 bg-white hover:border-riet-gold hover:shadow-soft transition-all flex flex-col justify-between space-y-4"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-riet-navy bg-blue-50 px-2.5 py-0.5 rounded">
                      {club.category}
                    </span>
                    <span className="text-xs font-semibold text-slate-400">
                      {club.members}
                    </span>
                  </div>
                  <h4 className="font-heading font-black text-lg text-riet-navy">
                    {club.name}
                  </h4>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {club.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] text-slate-500 font-medium">Lead: {club.lead.split(' ')[0]}</span>
                  <button
                    onClick={() => setSelectedClub(club)}
                    className="text-xs font-bold text-riet-navy hover:text-riet-blue flex items-center gap-1 bg-riet-paper hover:bg-slate-200 px-3 py-1.5 rounded-lg transition-colors"
                  >
                    <span>Join Club</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Transport & Bus Routes Directory */}
        <div id="transport" className="space-y-6 pt-8 border-t border-slate-200">
          <div>
            <span className="text-xs font-bold text-riet-gold uppercase tracking-wider block mb-1">
              Connectivity Across Jaipur
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-black text-riet-navy">
              College Bus Routes & Timings
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Safe, GPS-tracked institutional buses connecting all major neighborhoods in Jaipur directly to Bhankrota Campus.
            </p>
          </div>

          <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
            <table className="w-full text-left text-xs">
              <thead className="bg-riet-navy text-white">
                <tr>
                  <th className="p-3.5 font-heading">Route No.</th>
                  <th className="p-3.5 font-heading">Origin Area</th>
                  <th className="p-3.5 font-heading">Major Pickup Stops</th>
                  <th className="p-3.5 font-heading">Campus Arrival</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                {busRoutes.map((route, i) => (
                  <tr key={i} className="hover:bg-slate-50">
                    <td className="p-3.5 font-bold text-riet-navy">{route.routeNo}</td>
                    <td className="p-3.5 font-semibold text-slate-800">{route.origin}</td>
                    <td className="p-3.5 text-slate-600 text-[11px]">{route.stops.join(' → ')}</td>
                    <td className="p-3.5 font-bold text-emerald-700">{route.morningArrival}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Photo Gallery Grid (#gallery) */}
        <div id="gallery" className="space-y-6 pt-8 border-t border-slate-200">
          <div className="text-center max-w-xl mx-auto">
            <span className="text-xs font-bold text-riet-gold uppercase tracking-wider block mb-1">
              Visual Moments
            </span>
            <h2 className="text-3xl font-heading font-black text-riet-navy">
              Campus Photo Gallery
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Click any picture to open the high-definition interactive lightbox.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {galleryItems.map((item, index) => (
              <div
                key={item.id}
                onClick={() => setSelectedPhotoIndex(index)}
                className="relative rounded-2xl overflow-hidden shadow-sm group h-52 border border-slate-200 cursor-pointer"
              >
                <img
                  src={item.url}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-riet-navy-dark/90 via-transparent to-transparent flex flex-col justify-end p-4 text-white opacity-90 group-hover:opacity-100 transition-opacity">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-riet-gold font-bold uppercase tracking-wider">
                      {item.category}
                    </span>
                    <ZoomIn className="w-4 h-4 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <h4 className="font-heading font-bold text-xs text-white line-clamp-1 mt-0.5">
                    {item.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <PhotoLightboxModal
        isOpen={selectedPhotoIndex !== null}
        photo={currentPhoto}
        onClose={() => setSelectedPhotoIndex(null)}
        onPrev={() => setSelectedPhotoIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length)}
        onNext={() => setSelectedPhotoIndex((prev) => (prev + 1) % galleryItems.length)}
      />

      {/* Join Club Modal */}
      {selectedClub && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-fade-in">
          <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl border border-slate-100 overflow-hidden relative">
            <div className="bg-riet-navy text-white p-5 flex items-center justify-between">
              <div>
                <h3 className="font-heading font-black text-lg text-white">
                  Join {selectedClub.name}
                </h3>
                <p className="text-xs text-slate-300">
                  {selectedClub.category} Society • RIET Jaipur
                </p>
              </div>
              <button
                onClick={() => setSelectedClub(null)}
                className="text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6">
              {clubJoined ? (
                <div className="text-center py-6 space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
                  <h4 className="font-heading font-bold text-lg text-riet-navy">
                    Welcome to the Club, {studentName}!
                  </h4>
                  <p className="text-xs text-slate-600">
                    Your registration has been shared with the club coordinator ({selectedClub.lead}). We will contact you for the upcoming sprint.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleJoinClub} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Full Student Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Enter your name"
                      value={studentName}
                      onChange={(e) => setStudentName(e.target.value)}
                      className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-riet-gold outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Roll / Enrollment Number *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. 23ERICS045"
                      value={rollNo}
                      onChange={(e) => setRollNo(e.target.value)}
                      className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-riet-gold outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Department & Year</label>
                    <select className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-riet-gold outline-none bg-white">
                      <option>1st Year (B.Tech / BCA / BBA)</option>
                      <option>2nd Year</option>
                      <option>3rd Year</option>
                      <option>4th Year</option>
                      <option>Postgraduate (MBA / MCA / M.Tech)</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-riet-navy hover:bg-riet-navy-light text-riet-gold font-black py-3 rounded-xl text-xs shadow-md transition-all flex items-center justify-center gap-2 mt-2"
                  >
                    <span>Complete Membership Registration</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

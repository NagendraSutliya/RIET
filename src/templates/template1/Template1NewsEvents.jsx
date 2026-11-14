import React, { useState } from 'react';
import { Calendar, Tag, ArrowRight, Bell, Download, Search, CheckCircle2, X } from 'lucide-react';
import { latestNews } from '../../data/collegeData';

export default function Template1NewsEvents({ onOpenEnquiry, onOpenDocument }) {
  const [activeTab, setActiveTab] = useState('All');
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [noticeSearch, setNoticeSearch] = useState('');

  const allEvents = [
    ...latestNews,
    {
      id: 4,
      date: "28",
      month: "SEP",
      year: "2026",
      title: "Industry 4.0 & Cloud Architecture Seminar",
      category: "Seminars",
      desc: "Distinguished keynotes by senior software architects from Microsoft and Amazon Web Services discussing scalable microservices and serverless paradigms.",
      image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 5,
      date: "20",
      month: "SEP",
      year: "2026",
      title: "Blood Donation Camp by RIET NSS Wing",
      category: "Social",
      desc: "Over 350 units collected in association with Sawai Man Singh (SMS) Medical College Hospital, Jaipur.",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 6,
      date: "12",
      month: "SEP",
      year: "2026",
      title: "Alumni Meet 2026 'Samagam'",
      category: "Alumni",
      desc: "Reconnecting graduates from 2004 to 2025 batches celebrating shared memories and institute milestones.",
      image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=600&q=80"
    }
  ];

  const noticesList = [
    { id: 1, title: "RTU End-Term Practical & Viva-Voce Schedule (Nov-Dec 2026)", category: "Examination", date: "12 Nov 2026", isNew: true },
    { id: 2, title: "National Scholarship Portal (NSP) Post-Matric Application Deadline", category: "Scholarships", date: "08 Nov 2026", isNew: true },
    { id: 3, title: "Commencement of Classes for B.Tech & MCA Even Semester 2026-27", category: "Academics", date: "02 Nov 2026", isNew: false },
    { id: 4, title: "Notice regarding Annual Technocultural Fest 'Tarang 2026' Auditions", category: "Student Affairs", date: "29 Oct 2026", isNew: false },
    { id: 5, title: "Campus Recruitment Drive: Oracle Financial Services Software Registration", category: "Placements", date: "24 Oct 2026", isNew: false }
  ];

  const filteredNotices = noticesList.filter(n =>
    n.title.toLowerCase().includes(noticeSearch.toLowerCase()) ||
    n.category.toLowerCase().includes(noticeSearch.toLowerCase())
  );

  const filtered = activeTab === 'All'
    ? allEvents
    : activeTab === 'News'
      ? allEvents.filter(e => ['Workshops', 'Seminars', 'Alumni'].includes(e.category))
      : allEvents.filter(e => ['Sports', 'E-Cell', 'Social'].includes(e.category));

  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <div className="bg-gradient-to-r from-riet-navy-dark via-riet-navy to-riet-navy-light text-white py-14 px-4 border-b border-riet-line">
        <div className="max-w-7xl mx-auto">
          <span className="text-xs font-bold text-riet-gold uppercase tracking-wider block mb-2">
            Home / News & Events
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black tracking-tight text-white">
            News, Events & Notice Board
          </h1>
          <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-2xl">
            Stay updated with academic circulars, technical symposiums, sports tournaments, and student achievements at RIET Jaipur.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-14 space-y-16">
        {/* Events Section */}
        <div id="events" className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-riet-gold uppercase tracking-wider block mb-1">
                Calendar Highlights
              </span>
              <h2 className="text-3xl font-heading font-black text-riet-navy">
                Campus Happenings
              </h2>
            </div>

            {/* Filter Tabs matching the mock */}
            <div className="flex items-center gap-2 border border-slate-200 bg-slate-50 p-1 rounded-xl">
              {['All', 'News', 'Events'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    activeTab === tab
                      ? 'bg-riet-navy text-riet-gold shadow-sm'
                      : 'text-slate-600 hover:text-riet-navy'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Grid of Events */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-soft hover:border-riet-gold transition-all duration-300 flex flex-col justify-between group cursor-pointer"
                onClick={() => setSelectedEvent(item)}
              >
                <div className="relative h-48 overflow-hidden bg-slate-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-riet-navy text-white text-[10px] font-bold uppercase px-2.5 py-1 rounded shadow-sm">
                    {item.category}
                  </span>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center gap-1.5 text-slate-500 text-xs font-semibold mb-2">
                      <Calendar className="w-3.5 h-3.5 text-riet-gold" />
                      <span>{item.date} {item.month} {item.year}</span>
                    </div>
                    <h3 className="font-heading font-black text-base text-riet-navy group-hover:text-riet-blue transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed line-clamp-3">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-bold text-riet-blue group-hover:text-riet-navy flex items-center gap-1">
                      <span>View Details</span>
                      <ArrowRight className="w-3 h-3" />
                    </span>
                    <span className="text-[10px] text-slate-400 font-medium">Click to expand</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Official Notice Board (#notices) */}
        <div id="notices" className="pt-8 border-t border-slate-200">
          <div className="bg-riet-paper rounded-2xl border border-slate-200 p-8 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <div>
                <span className="text-xs font-bold text-riet-gold uppercase tracking-wider block mb-1">
                  Circulars & Updates
                </span>
                <h2 className="text-2xl sm:text-3xl font-heading font-black text-riet-navy">
                  Official Notice Board
                </h2>
              </div>

              {/* Notice Search */}
              <div className="relative max-w-xs w-full">
                <input
                  type="text"
                  placeholder="Filter notices..."
                  value={noticeSearch}
                  onChange={(e) => setNoticeSearch(e.target.value)}
                  className="w-full text-xs px-3.5 py-2 pl-9 rounded-xl border border-slate-300 focus:border-riet-gold outline-none bg-white"
                />
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
              </div>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden divide-y divide-slate-100">
              {filteredNotices.map((n) => (
                <div
                  key={n.id}
                  className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-slate-50 transition-colors"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-riet-blue bg-blue-50 border border-blue-200 px-2 py-0.5 rounded">
                        {n.category}
                      </span>
                      {n.isNew && (
                        <span className="text-[9px] font-extrabold uppercase text-white bg-rose-600 px-1.5 py-0.5 rounded animate-pulse">
                          NEW
                        </span>
                      )}
                      <span className="text-[11px] text-slate-400">• {n.date}</span>
                    </div>
                    <h4 className="font-heading font-bold text-sm text-riet-navy hover:text-riet-blue transition-colors">
                      {n.title}
                    </h4>
                  </div>

                  <button
                    onClick={() => onOpenDocument && onOpenDocument(n.title)}
                    className="self-start sm:self-center bg-slate-100 hover:bg-riet-navy hover:text-riet-gold text-slate-700 font-bold px-3 py-1.5 rounded-lg text-xs flex items-center gap-1.5 transition-colors shrink-0"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download PDF</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Event Details Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-fade-in">
          <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl border border-slate-100 overflow-hidden relative">
            <div className="relative h-48">
              <img
                src={selectedEvent.image}
                alt={selectedEvent.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedEvent(null)}
                className="absolute top-3 right-3 text-white bg-black/50 hover:bg-black/70 p-1.5 rounded-full"
              >
                <X className="w-5 h-5" />
              </button>
              <span className="absolute bottom-3 left-3 bg-riet-navy text-riet-gold text-xs font-bold px-3 py-1 rounded">
                {selectedEvent.category}
              </span>
            </div>

            <div className="p-6 space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                <Calendar className="w-4 h-4 text-riet-gold" />
                <span>Date: {selectedEvent.date} {selectedEvent.month} {selectedEvent.year}</span>
              </div>

              <h3 className="font-heading font-black text-xl text-riet-navy">
                {selectedEvent.title}
              </h3>

              <p className="text-xs text-slate-600 leading-relaxed">
                {selectedEvent.desc}
              </p>

              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs space-y-1">
                <div className="flex justify-between">
                  <span className="text-slate-500">Venue:</span>
                  <span className="font-semibold text-riet-navy">Main Auditorium, RIET Campus</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Eligibility:</span>
                  <span className="font-semibold text-emerald-700">Open to All Students & Faculty</span>
                </div>
              </div>

              <div className="pt-2 flex gap-3">
                <button
                  onClick={() => {
                    alert(`Seat registered for ${selectedEvent.title}! Confirmation code sent to your email.`);
                    setSelectedEvent(null);
                  }}
                  className="flex-1 bg-riet-gold hover:bg-riet-gold-hover text-riet-navy font-black py-2.5 rounded-xl text-xs shadow-sm transition-colors text-center"
                >
                  Register for Event (Free) ↗
                </button>
                <button
                  onClick={() => setSelectedEvent(null)}
                  className="px-4 py-2.5 border border-slate-200 hover:bg-slate-100 text-slate-700 rounded-xl text-xs font-semibold"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

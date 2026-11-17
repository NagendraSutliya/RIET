import React, { useState } from 'react';
import Template5PageHeader from '../components/Template5PageHeader';
import { ChevronRight, X } from 'lucide-react';
import { latestNews } from '../../../data/collegeData';

export default function Template5News({ onOpenEnquiry }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedArticle, setSelectedArticle] = useState(null);

  const categories = ['All', 'Events', 'Placement drives', 'Workshops'];

  const allNewsItems = [
    ...latestNews,
    {
      id: 4,
      date: "28",
      month: "SEP",
      year: "2026",
      title: "Mega Campus Recruitment Drive by Oracle & TCS",
      category: "Placement drives",
      desc: "Over 65 students from final-year B.Tech CSE, AI & DS and MCA secured pre-placement offers during the autumn recruitment sprint.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 5,
      date: "18",
      month: "SEP",
      year: "2026",
      title: "National Conference on Green Energy & AI in Engineering",
      category: "Events",
      desc: "Keynote addresses by RTU Kota Vice Chancellor and leading solar energy scientists exploring smart power grids and sustainability.",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 6,
      date: "05",
      month: "SEP",
      year: "2026",
      title: "Hands-on Cyber Security & Ethical Hacking Bootcamp",
      category: "Workshops",
      desc: "Three-day offensive security training covering OWASP Top 10 web vulnerabilities, network packet analysis, and live Capture-The-Flag challenges.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80"
    }
  ];

  const filteredNews = activeCategory === 'All'
    ? allNewsItems
    : allNewsItems.filter(item => item.category === activeCategory);

  return (
    <div className="w-full font-sans text-[#16262B]">
      <Template5PageHeader
        title="News and events"
        desc="Workshops, placement drives, conferences and campus celebrations."
      />

      <section className="py-16 sm:py-20 px-6 sm:px-10 bg-white">
        <div className="max-w-[1180px] mx-auto">
          {/* Pill Chips */}
          <div className="flex gap-2.5 flex-wrap mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                  activeCategory === cat
                    ? 'bg-[#0F4C5C] text-white shadow-xs'
                    : 'bg-[#EEF4F5] text-[#16262B] hover:bg-[#DDEAED]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredNews.map((item) => (
              <div
                key={item.id}
                className="p-6 bg-[#EEF4F5] rounded-[22px] hover:bg-[#DDEAED] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="h-44 rounded-[16px] overflow-hidden mb-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <span className="inline-block text-[11px] font-bold px-3 py-1 rounded-full bg-[#FFE3CC] text-[#7A3300] mb-2">
                    {item.category} • {item.month} {item.date}, {item.year}
                  </span>

                  <h3 className="font-fraunces text-xl font-bold text-[#0A3340] mb-2 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs text-[#3C5961] leading-relaxed line-clamp-3">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#D5E3E6]">
                  <button
                    onClick={() => setSelectedArticle(item)}
                    className="text-xs font-bold text-[#0F4C5C] hover:underline inline-flex items-center gap-1"
                  >
                    <span>Read more</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 z-50 animate-in fade-in duration-200">
          <div className="bg-white rounded-[24px] max-w-xl w-full p-8 shadow-2xl relative border border-[#D5E3E6] max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-[#EEF4F5] text-[#0A3340] hover:bg-[#DDEAED]"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="inline-block text-xs font-bold px-3 py-1 rounded-full bg-[#FFE3CC] text-[#7A3300] mb-3">
              {selectedArticle.category} • {selectedArticle.month} {selectedArticle.date}, {selectedArticle.year}
            </span>

            <h2 className="font-fraunces text-2xl sm:text-3xl font-bold text-[#0A3340] mb-4 leading-tight">
              {selectedArticle.title}
            </h2>

            <div className="rounded-[16px] overflow-hidden mb-5">
              <img
                src={selectedArticle.image}
                alt={selectedArticle.title}
                className="w-full h-56 object-cover"
              />
            </div>

            <p className="text-sm text-[#3C5961] leading-relaxed mb-6">
              {selectedArticle.desc}
            </p>

            <div className="pt-4 border-t border-[#D5E3E6] flex items-center justify-between">
              <span className="text-xs text-[#7C9AA2]">RIET Media &amp; PR Cell</span>
              <button
                onClick={() => setSelectedArticle(null)}
                className="bg-[#0A3340] hover:bg-black text-white text-xs font-bold px-5 py-2 rounded-full"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

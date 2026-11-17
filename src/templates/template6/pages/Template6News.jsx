import React, { useState } from 'react';
import Template6PageHeader from '../components/Template6PageHeader';
import { ChevronRight, X } from 'lucide-react';
import { latestNews } from '../../../data/collegeData';

export default function Template6News({ onOpenEnquiry }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedArticle, setSelectedArticle] = useState(null);

  const categories = ['All', 'Events', 'Placement drives', 'Workshops'];

  const allNewsItems = [
    ...latestNews,
    { id: 4, date: "28", month: "SEP", year: "2026", title: "Mega Campus Recruitment Drive by Oracle & TCS", category: "Placement drives", desc: "Over 65 students from final-year B.Tech CSE, AI & DS and MCA secured pre-placement offers.", image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80" },
    { id: 5, date: "18", month: "SEP", year: "2026", title: "National Conference on Green Energy & AI in Engineering", category: "Events", desc: "Keynote addresses by RTU Kota Vice Chancellor and leading solar energy scientists.", image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=600&q=80" },
    { id: 6, date: "05", month: "SEP", year: "2026", title: "Hands-on Cyber Security & Ethical Hacking Bootcamp", category: "Workshops", desc: "Three-day offensive security training covering OWASP Top 10 vulnerabilities.", image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80" }
  ];

  const filteredNews = activeCategory === 'All'
    ? allNewsItems
    : allNewsItems.filter(item => item.category === activeCategory);

  return (
    <div className="w-full font-sans text-[#1C1B22] bg-white">
      <Template6PageHeader
        title="News and events"
        desc="Workshops, placement drives, conferences and campus celebrations."
      />

      <section className="py-16 sm:py-20 px-6 sm:px-10 bg-white">
        <div className="max-w-[1140px] mx-auto">
          {/* Filter Chips */}
          <div className="flex gap-2 flex-wrap mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded text-xs font-semibold tracking-wider uppercase transition-all border ${
                  activeCategory === cat
                    ? 'bg-[#6B1724] text-white border-[#6B1724] shadow-xs'
                    : 'bg-[#FAF7F5] text-[#1C1B22] border-[#E3DDD8] hover:border-[#6B1724]'
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
                className="p-6 bg-[#FAF7F5] border border-[#E3DDD8] rounded hover:border-[#6B1724] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="h-44 rounded overflow-hidden mb-4 border border-[#E3DDD8]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <span className="inline-block text-[11px] font-bold px-2.5 py-0.5 rounded bg-[#F0EAE4] text-[#6B1724] mb-2 border border-[#E3DDD8]">
                    {item.category} • {item.month} {item.date}, {item.year}
                  </span>

                  <h3 className="font-fraunces text-xl font-bold text-[#1C1B22] mb-2 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs text-[#4A4752] leading-relaxed line-clamp-3">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#E3DDD8]">
                  <button
                    onClick={() => setSelectedArticle(item)}
                    className="text-xs font-bold text-[#6B1724] hover:underline inline-flex items-center gap-1"
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
          <div className="bg-white rounded-lg max-w-xl w-full p-8 shadow-2xl relative border-2 border-[#6B1724] max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-4 right-4 p-2 rounded bg-[#FAF7F5] text-[#1C1B22] hover:bg-[#E3DDD8]"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="inline-block text-xs font-bold px-3 py-1 rounded bg-[#F0EAE4] text-[#6B1724] mb-3 border border-[#E3DDD8]">
              {selectedArticle.category} • {selectedArticle.month} {selectedArticle.date}, {selectedArticle.year}
            </span>

            <h2 className="font-fraunces text-2xl sm:text-3xl font-bold text-[#1C1B22] mb-4 leading-tight">
              {selectedArticle.title}
            </h2>

            <div className="rounded overflow-hidden mb-5 border border-[#E3DDD8]">
              <img
                src={selectedArticle.image}
                alt={selectedArticle.title}
                className="w-full h-56 object-cover"
              />
            </div>

            <p className="text-sm text-[#4A4752] leading-relaxed mb-6">
              {selectedArticle.desc}
            </p>

            <div className="pt-4 border-t border-[#E3DDD8] flex items-center justify-between">
              <span className="text-xs text-[#878292]">RIET Media &amp; PR Cell</span>
              <button
                onClick={() => setSelectedArticle(null)}
                className="bg-[#6B1724] hover:bg-[#52111B] text-white text-xs font-bold px-5 py-2 rounded"
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

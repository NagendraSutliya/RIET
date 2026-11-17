import React, { useState } from 'react';
import Template7PageHeader from '../components/Template7PageHeader';
import { ChevronRight, X, ArrowRight, Calendar, Tag } from 'lucide-react';
import { latestNews } from '../../../data/collegeData';

export default function Template7News({ onOpenEnquiry }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedArticle, setSelectedArticle] = useState(null);

  const categories = ['All', 'Events', 'Placement drives', 'Workshops'];

  const allNewsItems = [
    ...latestNews,
    { id: 4, date: "28", month: "SEP", year: "2025", title: "Mega Campus Recruitment Drive by Oracle & TCS", category: "Placement drives", desc: "Over 65 students from final-year B.Tech CSE, AI & DS and MCA secured pre-placement offers during the recent mega placement drive.", image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80" },
    { id: 5, date: "18", month: "SEP", year: "2025", title: "National Conference on Green Energy & AI in Engineering", category: "Events", desc: "Keynote addresses by RTU Kota Vice Chancellor and leading solar energy scientists highlighting future trends in renewable power grids.", image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=600&q=80" },
    { id: 6, date: "05", month: "SEP", year: "2025", title: "Hands-on Cyber Security & Ethical Hacking Bootcamp", category: "Workshops", desc: "Three-day intensive offensive security training covering OWASP Top 10 vulnerabilities, CTF defense, and industrial digital forensics.", image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80" }
  ];

  const filteredNews = activeCategory === 'All'
    ? allNewsItems
    : allNewsItems.filter(item => item.category === activeCategory);

  return (
    <div className="w-full font-sans text-[#2a2a2a] bg-white">
      <Template7PageHeader
        title="News &amp; Events"
        desc="Stay updated with university announcements, research breakthroughs, upcoming conferences, and campus celebrations."
        breadcrumbs={[{ label: 'News & Events' }]}
      />

      <section className="py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-[1240px] mx-auto">
          {/* Category Filter Pills */}
          <div className="flex gap-2 flex-wrap mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded text-xs font-bold uppercase tracking-wider transition-all border ${
                  activeCategory === cat
                    ? 'bg-[#192f59] text-white border-[#192f59] shadow-sm'
                    : 'bg-white text-[#192f59] border-slate-300 hover:border-[#192f59]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNews.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg border border-slate-200 overflow-hidden shadow-2xs hover:shadow-lg transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="h-48 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-2 text-[11px] font-bold text-[#d2973b] uppercase tracking-wider mb-2">
                      <Tag className="w-3 h-3" />
                      <span>{item.category || item.cat || 'University'} • {item.month} {item.date}, {item.year || '2025'}</span>
                    </div>

                    <h3 className="text-lg font-bold font-playfair text-[#192f59] group-hover:text-[#d2973b] transition-colors leading-snug mb-2">
                      {item.title}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed font-normal line-clamp-3">
                      {item.desc}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button
                    onClick={() => setSelectedArticle(item)}
                    className="text-xs font-bold text-[#192f59] group-hover:text-[#d2973b] inline-flex items-center gap-1 transition-colors uppercase tracking-wider"
                  >
                    <span>Read Full Story</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reader Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4 z-50 animate-in fade-in duration-200">
          <div className="bg-white rounded-lg max-w-xl w-full p-8 shadow-2xl relative border border-slate-200 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 text-[#192f59] hover:bg-slate-200"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="inline-block text-xs font-bold px-3 py-1 rounded bg-[#fef7eb] text-[#d2973b] mb-3">
              {selectedArticle.category || selectedArticle.cat} • {selectedArticle.month} {selectedArticle.date}, {selectedArticle.year || '2025'}
            </span>

            <h2 className="text-2xl font-bold font-playfair text-[#192f59] mb-4 leading-tight">
              {selectedArticle.title}
            </h2>

            <div className="rounded-lg overflow-hidden mb-5 border border-slate-200">
              <img
                src={selectedArticle.image}
                alt={selectedArticle.title}
                className="w-full h-56 object-cover"
              />
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-normal">
              {selectedArticle.desc}
            </p>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-400">RIET Public Relations Cell</span>
              <button
                onClick={() => setSelectedArticle(null)}
                className="bg-[#192f59] hover:bg-[#d2973b] text-white text-xs font-bold px-6 py-2 rounded transition-colors"
              >
                Close Article
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

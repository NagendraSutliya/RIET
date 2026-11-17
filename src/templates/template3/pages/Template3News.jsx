import React, { useState } from 'react';
import Template3PageHeader from '../components/Template3PageHeader';
import { Calendar, Tag, ArrowRight } from 'lucide-react';
import { latestNews } from '../../../data/collegeData';

export default function Template3News({ onOpenEnquiry }) {
  const [filter, setFilter] = useState('All');
  const [selectedNews, setSelectedNews] = useState(null);

  const categories = ['All', 'Events', 'Placement drives', 'Workshops'];

  const newsItems = [
    {
      category: 'Workshops',
      title: 'National Level Workshop on Generative AI & Cloud Workloads',
      date: 'March 28, 2026',
      summary: 'Three-day technical workshop on large language model deployment, GPU clusters, and cloud-native Kubernetes containers.',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80'
    },
    {
      category: 'Placement drives',
      title: 'Mega On-Campus Recruiter Drive with Tier-1 Tech Giants',
      date: 'April 05, 2026',
      summary: 'Over 18 multinational employers visiting campus for 2026 graduating batch recruitment across B.Tech and MCA.',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80'
    },
    {
      category: 'Events',
      title: 'Goonj 2026 Annual Cultural & Tech Fest Announced',
      date: 'April 18, 2026',
      summary: 'Annual 3-day gala featuring inter-college battle of bands, robotics arena, coding hackathon, and celebrity concert night.',
      image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=800&q=80'
    },
    {
      category: 'Workshops',
      title: 'Ethical Hacking & Industrial IoT Hardware Sprint',
      date: 'April 22, 2026',
      summary: 'Hands-on hardware laboratory sessions covering microcontroller sensor integration and security vulnerability discovery.',
      image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=800&q=80'
    },
    {
      category: 'Placement drives',
      title: 'Summer Internship Selection Drive for 3rd Year B.Tech Students',
      date: 'May 02, 2026',
      summary: 'Paid internship opportunities with stipend packages up to ₹45,000/month across Bangalore and Gurgaon tech parks.',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80'
    },
    {
      category: 'Events',
      title: 'RTU Kota Inter-Collegiate Basketball & Cricket Championship',
      date: 'May 12, 2026',
      summary: 'RIET Sports Council hosting over 32 engineering colleges across Rajasthan on our 20-acre floodlit campus grounds.',
      image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80'
    }
  ];

  const filteredNews = filter === 'All'
    ? newsItems
    : newsItems.filter((item) => item.category === filter);

  return (
    <div className="bg-white text-[#1A2233] w-full max-w-full overflow-x-hidden">
      <Template3PageHeader
        title="News and Events"
        desc="Workshops, placement drives, academic conferences and campus celebrations."
        breadcrumb="News & Events"
      />

      <section className="py-14 sm:py-18 bg-white w-full max-w-full overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Interactive Filter Chips */}
          <div className="flex items-center gap-2 flex-wrap mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold border transition-all ${
                  filter === cat
                    ? 'bg-[#0E2A5C] text-white border-[#0E2A5C] shadow-xs'
                    : 'bg-white text-[#0E2A5C] border-[#0E2A5C]/40 hover:border-[#0E2A5C]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* News Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredNews.map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#E1E6F0] rounded-xl overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="h-48 overflow-hidden bg-slate-100">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <span className="inline-block text-[11px] font-bold bg-[#FFF1CC] text-[#5C3D00] px-2.5 py-0.5 rounded-full mb-2">
                      {item.category}
                    </span>
                    <h3 className="font-heading font-black text-lg text-[#0E2A5C] mb-2 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                      {item.summary}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 flex items-center justify-between text-xs text-slate-500 font-semibold border-t border-slate-50">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[#F2A900]" />
                    <span>{item.date}</span>
                  </span>
                  <button
                    onClick={() => setSelectedNews(item)}
                    className="text-[#0E2A5C] font-extrabold hover:text-[#F2A900] underline"
                  >
                    Read more →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detail Modal */}
      {selectedNews && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl relative animate-in fade-in">
            <span className="inline-block text-[11px] font-bold bg-[#FFF1CC] text-[#5C3D00] px-2.5 py-0.5 rounded-full mb-2">
              {selectedNews.category}
            </span>
            <h3 className="font-heading font-black text-xl text-[#0E2A5C] mb-2">
              {selectedNews.title}
            </h3>
            <p className="text-xs text-slate-400 mb-4">{selectedNews.date}</p>
            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              {selectedNews.summary}
            </p>
            <div className="flex items-center justify-end gap-3">
              <button
                onClick={() => setSelectedNews(null)}
                className="bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold px-4 py-2 rounded-lg text-xs"
              >
                Close
              </button>
              <button
                onClick={() => {
                  setSelectedNews(null);
                  onOpenEnquiry();
                }}
                className="bg-[#F2A900] hover:bg-[#e09b00] text-[#0E2A5C] font-bold px-4 py-2 rounded-lg text-xs"
              >
                Event Registration ↗
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

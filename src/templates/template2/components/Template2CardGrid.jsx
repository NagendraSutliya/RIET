import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const defaultPics = [
  "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=900&q=82",
  "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=900&q=82",
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&q=82",
  "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=900&q=82",
  "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=82",
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=82",
  "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=900&q=82",
  "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=900&q=82"
];

export default function Template2CardGrid({
  title,
  subtitle,
  kicker = 'DISCOVER RIET',
  items = [],
  softBackground = false,
  columns = 3
}) {
  return (
    <section className={`py-16 sm:py-20 ${softBackground ? 'bg-[#f4f7fa]' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        {(title || subtitle) && (
          <div className="mb-10 sm:mb-12 max-w-2xl">
            {kicker && (
              <span className="text-[11px] font-black uppercase tracking-[1.7px] text-[#b57c18] block mb-2">
                {kicker}
              </span>
            )}
            {title && (
              <h2 className="font-heading font-black text-2xl sm:text-3xl text-[#102b50] tracking-tight">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-slate-500 text-sm sm:text-base leading-relaxed mt-2.5">
                {subtitle}
              </p>
            )}
          </div>
        )}

        {/* Card Grid */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 ${columns === 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'} gap-6`}>
          {items.map((item, idx) => {
            const cardTitle = Array.isArray(item) ? item[0] : item.title;
            const cardDesc = Array.isArray(item) ? item[1] : item.desc;
            const cardLink = Array.isArray(item) ? (item[2] || '/contact') : (item.link || '/contact');
            const cardImg = (item.image || defaultPics[idx % defaultPics.length]);

            return (
              <article
                key={idx}
                className="bg-white rounded-2xl border border-[#e5eaf0] overflow-hidden shadow-[0_8px_25px_rgba(16,43,80,0.04)] hover:shadow-[0_15px_30px_rgba(16,43,80,0.12)] transition-all duration-300 hover:-translate-y-1 flex flex-col group"
              >
                <div className="h-44 sm:h-48 overflow-hidden relative bg-slate-100">
                  <img
                    src={cardImg}
                    alt={cardTitle}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-heading font-bold text-lg text-[#102b50] group-hover:text-[#28679e] transition-colors mb-2">
                      {cardTitle}
                    </h3>
                    <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                      {cardDesc}
                    </p>
                  </div>

                  <div className="pt-4 mt-2 border-t border-slate-50">
                    <Link
                      to={cardLink}
                      className="inline-flex items-center gap-1.5 text-xs font-black text-[#28679e] hover:text-[#102b50] transition-colors"
                    >
                      <span>Explore more</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

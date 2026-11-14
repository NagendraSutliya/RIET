import React from 'react';
import { X, ChevronLeft, ChevronRight, Tag } from 'lucide-react';

export default function PhotoLightboxModal({ isOpen, onClose, photo, onNext, onPrev }) {
  if (!isOpen || !photo) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md animate-fade-in">
      <button
        onClick={onClose}
        className="absolute top-5 right-5 text-white/70 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-50"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev button */}
      {onPrev && (
        <button
          onClick={onPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-2.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-50"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}

      {/* Next button */}
      {onNext && (
        <button
          onClick={onNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-2.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-50"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}

      <div className="max-w-4xl max-h-[85vh] flex flex-col items-center">
        <img
          src={photo.url}
          alt={photo.title}
          className="max-h-[75vh] w-auto max-w-full rounded-xl shadow-2xl object-contain border border-white/10"
        />
        <div className="mt-4 text-center text-white space-y-1">
          <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-riet-gold bg-riet-navy px-2.5 py-0.5 rounded">
            {photo.category}
          </span>
          <h4 className="font-heading font-bold text-base text-white">
            {photo.title}
          </h4>
        </div>
      </div>
    </div>
  );
}

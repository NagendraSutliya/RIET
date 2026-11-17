import React from 'react';
import { Award } from 'lucide-react';

export default function Template6RankStrip() {
  return (
    <div className="bg-[#52111B] text-[#FAF7F5] font-semibold text-center py-3 px-4 text-xs sm:text-sm tracking-wide flex items-center justify-center gap-2 border-y border-[#D4AF37]/30 w-full">
      <Award className="w-4 h-4 text-[#D4AF37] shrink-0" />
      <span>RIET is ranked 1 in RTU Ranking for Electrical Engineering • REAP Code: 1025</span>
    </div>
  );
}

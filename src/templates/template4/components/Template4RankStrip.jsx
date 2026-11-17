import React from 'react';
import { Award } from 'lucide-react';

export default function Template4RankStrip() {
  return (
    <div className="bg-[#B3263A] text-white font-bold text-center py-3.5 px-4 text-sm sm:text-base tracking-wide flex items-center justify-center gap-2 shadow-xs w-full">
      <Award className="w-4 h-4 shrink-0 text-amber-200" />
      <span>RIET is ranked 1 in RTU Ranking for Electrical Engineering • REAP Code: 1025</span>
    </div>
  );
}

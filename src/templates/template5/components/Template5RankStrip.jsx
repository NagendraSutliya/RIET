import React from 'react';
import { Award } from 'lucide-react';

export default function Template5RankStrip() {
  return (
    <div className="bg-[#F58B3A] text-[#0A3340] font-bold text-center py-3.5 px-4 text-sm sm:text-base tracking-wide flex items-center justify-center gap-2 shadow-xs w-full">
      <Award className="w-4 h-4 shrink-0 text-[#0A3340]" />
      <span>RIET is ranked 1 in RTU Ranking for Electrical Engineering • REAP Code: 1025</span>
    </div>
  );
}

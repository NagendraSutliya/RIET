import React from 'react';
import { Award, Trophy } from 'lucide-react';

export default function Template3RankStrip({
  text = 'RIET is ranked #1 in RTU Kota Quality Index for Engineering Education'
}) {
  return (
    <div className="bg-[#F2A900] text-[#0E2A5C] font-black text-xs sm:text-sm text-center py-3.5 px-4 shadow-xs flex items-center justify-center gap-2 w-full max-w-full overflow-hidden">
      <Trophy className="w-4 h-4 shrink-0" />
      <span>{text}</span>
    </div>
  );
}

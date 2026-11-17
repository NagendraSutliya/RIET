import React from 'react';
import { Award, CheckCircle2, ShieldCheck, Trophy } from 'lucide-react';

export default function Template8RankStrip() {
  return (
    <div className="bg-[#192f59] text-white py-3 px-4 text-xs font-sans border-t border-b border-[#243d6c]">
      <div className="max-w-[1240px] mx-auto flex flex-wrap items-center justify-between gap-3 text-center sm:text-left">
        <div className="flex items-center gap-2">
          <Trophy className="w-4 h-4 text-[#d2973b] shrink-0" />
          <span className="font-semibold text-white">
            Ranked #1 in RTU Kota Ranking for Electrical &amp; Computer Engineering
          </span>
        </div>

        <div className="flex items-center gap-4 text-slate-300 text-[11px] mx-auto sm:mx-0">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#d2973b]" />
            <span>AICTE Approved</span>
          </div>
          <span className="text-white/20">|</span>
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-[#d2973b]" />
            <span>NBA Accredited (2012-15)</span>
          </div>
          <span className="text-white/20 hidden md:inline">|</span>
          <div className="hidden md:flex items-center gap-1.5 text-[#d2973b] font-bold">
            <Award className="w-3.5 h-3.5" />
            <span>REAP Code: 1025</span>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from 'react';

export default function Template7Layout({ onOpenEnquiry }) {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 font-sans">
      <header className="bg-cyan-950 text-white border-b border-cyan-900 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-extrabold text-white tracking-tight text-lg">RIET JAIPUR</span>
            <span className="text-[10px] uppercase tracking-wider text-cyan-300 font-semibold">• Template 7 (Modern Portal)</span>
          </div>
          <button onClick={onOpenEnquiry} className="bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-bold px-4 py-2 rounded-lg text-xs">
            Enquire
          </button>
        </div>
      </header>
      <main className="flex-1 flex items-center justify-center p-8">
        <div className="max-w-xl text-center space-y-4 bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
          <span className="inline-block px-3 py-1 bg-cyan-100 text-cyan-800 text-xs font-semibold rounded-full">
            Isolated Template Directory
          </span>
          <h2 className="text-2xl font-bold text-slate-900">Template 7: Modern Portal</h2>
          <p className="text-sm text-slate-600">
            Dedicated folder: <code className="bg-slate-100 px-1 py-0.5 rounded text-xs font-mono">src/templates/template7/</code>
          </p>
        </div>
      </main>
      <footer className="bg-cyan-950 text-cyan-400 py-6 text-center text-xs">
        <p>© 2026 RIET Jaipur. Template 7 Layout.</p>
      </footer>
    </div>
  );
}

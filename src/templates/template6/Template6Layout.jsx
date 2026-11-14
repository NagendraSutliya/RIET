import React from 'react';

export default function Template6Layout({ onOpenEnquiry }) {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 font-sans">
      <header className="bg-rose-950 text-white border-b border-rose-900 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-extrabold text-white tracking-tight text-lg">RIET JAIPUR</span>
            <span className="text-[10px] uppercase tracking-wider text-rose-300 font-semibold">• Template 6 (Elegant Academic)</span>
          </div>
          <button onClick={onOpenEnquiry} className="bg-rose-500 hover:bg-rose-600 text-white font-bold px-4 py-2 rounded-lg text-xs">
            Enquire
          </button>
        </div>
      </header>
      <main className="flex-1 flex items-center justify-center p-8">
        <div className="max-w-xl text-center space-y-4 bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
          <span className="inline-block px-3 py-1 bg-rose-100 text-rose-800 text-xs font-semibold rounded-full">
            Isolated Template Directory
          </span>
          <h2 className="text-2xl font-bold text-slate-900">Template 6: Elegant Academic</h2>
          <p className="text-sm text-slate-600">
            Dedicated folder: <code className="bg-slate-100 px-1 py-0.5 rounded text-xs font-mono">src/templates/template6/</code>
          </p>
        </div>
      </main>
      <footer className="bg-rose-950 text-rose-400 py-6 text-center text-xs">
        <p>© 2026 RIET Jaipur. Template 6 Layout.</p>
      </footer>
    </div>
  );
}

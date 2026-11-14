import React from 'react';

export default function Template2Layout({ onOpenEnquiry }) {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 font-sans">
      {/* Template 2 Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-amber-50 border border-amber-300 flex items-center justify-center font-bold text-amber-600 text-sm">
              RIET
            </div>
            <div>
              <span className="font-extrabold text-slate-900 tracking-tight text-base sm:text-lg block">RIET JAIPUR</span>
              <span className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold block">Template 2 • Clean Modern Minimal</span>
            </div>
          </div>
          <button
            onClick={onOpenEnquiry}
            className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold px-4 py-2 rounded-lg text-xs transition-colors"
          >
            Apply Now
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center p-8">
        <div className="max-w-xl text-center space-y-4 bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
          <span className="inline-block px-3 py-1 bg-amber-100 text-amber-800 text-xs font-semibold rounded-full">
            Isolated Template Directory
          </span>
          <h2 className="text-2xl font-bold text-slate-900">
            Template 2: Clean Modern Minimal
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            This template has its own separate folder structure at <code className="bg-slate-100 px-1 py-0.5 rounded text-xs font-mono">src/templates/template2/</code> with dedicated components and pages completely isolated from Template 1.
          </p>
        </div>
      </main>

      {/* Template 2 Footer */}
      <footer className="bg-slate-900 text-slate-400 py-6 text-center text-xs border-t border-slate-800">
        <p>© 2026 Rajasthan Institute of Engineering & Technology (RIET Jaipur). Template 2 Layout.</p>
      </footer>
    </div>
  );
}

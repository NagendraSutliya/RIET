import React from 'react';
import { Layout, Check, Sparkles } from 'lucide-react';

export default function TemplateSwitcher({ activeTemplate, onSelectTemplate, onOpenEnquiry }) {
  const templates = [
    { id: 'template1', name: 'T1: Official Portal', badge: 'Active' },
    { id: 'template2', name: 'T2: Clean Minimal', badge: 'Minimal' },
    { id: 'template3', name: 'T3: Corporate Grid', badge: 'Grid' },
    { id: 'template4', name: 'T4: Crimson Sidebar', badge: 'Sidebar' },
    { id: 'template5', name: 'T5: Vibrant Univ', badge: 'Vibrant' },
    { id: 'template6', name: 'T6: Elegant Acad', badge: 'Classic' },
    { id: 'template7', name: 'T7: Modern Portal', badge: 'Portal' },
    { id: 'template8', name: 'T8: Kingster Univ', badge: 'Kingster' },
    { id: 'template9', name: 'T9: Template 9', badge: 'New' },
  ];

  return (
    <div className="bg-slate-900 text-white text-xs py-1.5 px-3 sm:px-4 border-b border-slate-800 sticky top-0 z-50 shadow-md w-full max-w-full overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
        {/* Left: Template Switcher Title & Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto max-w-full py-0.5 no-scrollbar min-w-0 flex-1">
          <div className="flex items-center gap-1 font-bold text-slate-300 shrink-0 uppercase tracking-wider text-[10px] sm:text-[11px] mr-1">
            <Layout className="w-3.5 h-3.5 text-riet-gold" />
            <span className="hidden sm:inline">Templates:</span>
          </div>
          
          <div className="flex items-center gap-1 bg-slate-800/90 p-0.5 rounded-lg border border-slate-700/80 shrink-0">
            {templates.map((tpl) => (
              <button
                key={tpl.id}
                onClick={() => onSelectTemplate(tpl.id)}
                className={`flex items-center gap-1 px-2 sm:px-2.5 py-1 rounded-md text-[11px] font-medium transition-all whitespace-nowrap ${
                  activeTemplate === tpl.id
                    ? 'bg-riet-navy text-white shadow-xs border border-riet-gold/60 font-semibold'
                    : 'text-slate-300 hover:text-white hover:bg-slate-700/60'
                }`}
                title={tpl.name}
              >
                {activeTemplate === tpl.id && <Check className="w-3 h-3 text-riet-gold" />}
                <span>{tpl.name}</span>
              </button>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

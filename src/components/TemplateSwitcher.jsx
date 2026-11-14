import React from 'react';
import { Layout, Check, Sparkles, ExternalLink } from 'lucide-react';

export default function TemplateSwitcher({ activeTemplate, onSelectTemplate, onOpenEnquiry }) {
  const templates = [
    { id: 'template1', name: 'Template 1: Official Portal (Active)', status: 'Active', badge: 'Primary' },
    { id: 'template2', name: 'Template 2: Clean Minimal', status: 'Available', badge: 'Prototype' },
    { id: 'template3', name: 'Template 3: Corporate Grid', status: 'Preview', badge: 'Wireframe' },
  ];

  return (
    <div className="bg-slate-900 text-white text-xs py-2 px-4 border-b border-slate-800 sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        {/* Left: Template Switcher Title & Tabs */}
        <div className="flex items-center gap-2 flex-wrap">
          <div className="flex items-center gap-1.5 font-bold text-slate-300 mr-2 uppercase tracking-wider text-[11px]">
            <Layout className="w-3.5 h-3.5 text-riet-gold" />
            <span>UI Template Switcher:</span>
          </div>
          
          <div className="flex items-center gap-1.5 bg-slate-800/80 p-0.5 rounded-lg border border-slate-700">
            {templates.map((tpl) => (
              <button
                key={tpl.id}
                onClick={() => onSelectTemplate(tpl.id)}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-md font-medium transition-all ${
                  activeTemplate === tpl.id
                    ? 'bg-riet-navy text-white shadow-sm border border-riet-gold/60 font-semibold'
                    : 'text-slate-300 hover:text-white hover:bg-slate-700/60'
                }`}
              >
                {activeTemplate === tpl.id && <Check className="w-3 h-3 text-riet-gold" />}
                <span>{tpl.name}</span>
                {tpl.id !== 'template1' && (
                  <span className="text-[9px] bg-slate-700 text-slate-300 px-1.5 py-0.2 rounded font-normal">
                    {tpl.badge}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Right: Quick actions */}
        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center text-slate-400 text-[11px] gap-1">
            <Sparkles className="w-3 h-3 text-amber-400" />
            <span>Comparing UI Designs</span>
          </div>

          <button
            onClick={onOpenEnquiry}
            className="bg-riet-gold hover:bg-riet-gold-hover text-riet-navy font-bold px-3 py-1 rounded-md text-xs transition-colors flex items-center gap-1 shadow-sm"
          >
            <span>Quick Enquiry</span>
            <span className="text-xs">↗</span>
          </button>
        </div>
      </div>
    </div>
  );
}

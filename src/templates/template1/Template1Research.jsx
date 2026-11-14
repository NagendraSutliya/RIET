import React, { useState } from 'react';
import { Lightbulb, Rocket, Cpu, Award, CheckCircle2, ArrowRight, ShieldCheck, DollarSign, Send, X } from 'lucide-react';
import { startupsList } from '../../data/collegeData';

export default function Template1Research({ onOpenEnquiry, onOpenDocument }) {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [isPitchModalOpen, setIsPitchModalOpen] = useState(false);
  const [pitchForm, setPitchForm] = useState({ startupName: '', founder: '', email: '', sector: 'EdTech / AI', pitchSummary: '' });
  const [pitchSubmitted, setPitchSubmitted] = useState(false);

  const patentsData = [
    { title: "IoT-Based Intelligent Smart Campus Energy Distribution Grid", patentNo: "202411039821 A", status: "Published (IP India)", inventors: "Dr. Arvind Kumar & Student Team", year: "2024" },
    { title: "Autonomous Edge-Computing Drone for Crop Health Monitoring", patentNo: "202311028472 A", status: "Published (IP India)", inventors: "Prof. Rajesh Meena & Team", year: "2023" },
    { title: "High-Efficiency Hybrid Thermoelectric Refrigeration Unit", patentNo: "202211019201 B", status: "Granted", inventors: "Dr. R.K. Sharma", year: "2022" }
  ];

  const handlePitchSubmit = (e) => {
    e.preventDefault();
    setPitchSubmitted(true);
    setTimeout(() => {
      setPitchSubmitted(false);
      setIsPitchModalOpen(false);
      setPitchForm({ startupName: '', founder: '', email: '', sector: 'EdTech / AI', pitchSummary: '' });
    }, 3000);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <div className="bg-gradient-to-r from-riet-navy-dark via-riet-navy to-riet-navy-light text-white py-14 px-4 border-b border-riet-line">
        <div className="max-w-7xl mx-auto">
          <span className="text-xs font-bold text-riet-gold uppercase tracking-wider block mb-2">
            Frontier Technologies & Incubation
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black tracking-tight text-white">
            Research, Innovation & E-Cell
          </h1>
          <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-2xl">
            Empowering students and faculty to investigate boldly, file patents, build hardware prototypes, and launch market-ready startups.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-14 space-y-16">
        {/* Research Metrics Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-6 rounded-2xl bg-riet-paper border border-slate-200 text-center space-y-1 shadow-sm">
            <span className="font-heading font-black text-3xl sm:text-4xl text-riet-navy">45+</span>
            <p className="text-xs font-bold text-riet-gold uppercase tracking-wide">Patents Filed & Granted</p>
            <p className="text-[11px] text-slate-500">IP India & International</p>
          </div>

          <div className="p-6 rounded-2xl bg-riet-paper border border-slate-200 text-center space-y-1 shadow-sm">
            <span className="font-heading font-black text-3xl sm:text-4xl text-riet-navy">280+</span>
            <p className="text-xs font-bold text-riet-gold uppercase tracking-wide">Published Papers</p>
            <p className="text-[11px] text-slate-500">Scopus & IEEE Indexed</p>
          </div>

          <div className="p-6 rounded-2xl bg-riet-paper border border-slate-200 text-center space-y-1 shadow-sm">
            <span className="font-heading font-black text-3xl sm:text-4xl text-riet-navy">₹1.2 Cr+</span>
            <p className="text-xs font-bold text-riet-gold uppercase tracking-wide">Research Grants</p>
            <p className="text-[11px] text-slate-500">AICTE, DST & MSME</p>
          </div>

          <div className="p-6 rounded-2xl bg-riet-paper border border-slate-200 text-center space-y-1 shadow-sm">
            <span className="font-heading font-black text-3xl sm:text-4xl text-riet-navy">18+</span>
            <p className="text-xs font-bold text-riet-gold uppercase tracking-wide">Startups Incubated</p>
            <p className="text-[11px] text-slate-500">Through RIET E-Cell</p>
          </div>
        </div>

        {/* RIET Incubation Center & Pitch CTA */}
        <div id="incubation" className="bg-gradient-to-br from-riet-paper to-white rounded-3xl p-8 border border-slate-200 space-y-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-riet-gold uppercase tracking-wider">
                <Rocket className="w-4 h-4 text-riet-navy" />
                <span>Entrepreneurship Development Cell</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-heading font-black text-riet-navy">
                RIET Startup Incubation Center
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed">
                We provide seed capital funding, co-working infrastructure, IP legal advisory, and mentorship by prominent angel investors to turn your prototype into an enterprise.
              </p>
            </div>

            <button
              onClick={() => setIsPitchModalOpen(true)}
              className="bg-riet-navy hover:bg-riet-navy-light text-riet-gold font-black px-6 py-3.5 rounded-xl text-xs shrink-0 shadow-md transition-all hover:scale-105"
            >
              Pitch Your Startup Idea ↗
            </button>
          </div>

          {/* Incubated Startups Showcase */}
          <div>
            <h3 className="font-heading font-bold text-base text-slate-800 mb-4">
              Featured Ventures Incubated at RIET:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {startupsList.map((st, i) => (
                <div key={i} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase text-riet-blue bg-blue-50 px-2 py-0.5 rounded">
                      {st.sector}
                    </span>
                    <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                      {st.funding}
                    </span>
                  </div>
                  <h4 className="font-heading font-black text-lg text-riet-navy">
                    {st.name}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {st.desc}
                  </p>
                  <div className="pt-3 border-t border-slate-100 flex justify-between text-[11px] text-slate-500">
                    <span>Founders: {st.founders.split(' ')[0]}</span>
                    <span className="font-semibold text-emerald-700">{st.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Institutional Patents Directory */}
        <div id="patents" className="space-y-6 pt-8 border-t border-slate-200">
          <div>
            <span className="text-xs font-bold text-riet-gold uppercase tracking-wider block mb-1">
              Intellectual Property
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-black text-riet-navy">
              Published & Granted Patents
            </h2>
          </div>

          <div className="space-y-3">
            {patentsData.map((pat, i) => (
              <div
                key={i}
                className="p-5 rounded-xl border border-slate-200 bg-riet-paper hover:bg-white hover:border-riet-gold transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold uppercase text-riet-navy bg-white border border-slate-200 px-2 py-0.5 rounded font-mono">
                      {pat.patentNo}
                    </span>
                    <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                      {pat.status}
                    </span>
                  </div>
                  <h4 className="font-heading font-bold text-sm text-riet-navy">
                    {pat.title}
                  </h4>
                  <p className="text-xs text-slate-500">
                    Lead Inventors: {pat.inventors} • Published {pat.year}
                  </p>
                </div>

                <button
                  onClick={() => onOpenDocument && onOpenDocument(`Patent Specification Document: ${pat.patentNo}`)}
                  className="bg-white hover:bg-slate-100 text-riet-blue font-bold px-3 py-1.5 rounded-lg text-xs border border-slate-200 shrink-0 self-start sm:self-center"
                >
                  View Details →
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Startup Pitch Application Modal */}
      {isPitchModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-fade-in">
          <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl border border-slate-100 overflow-hidden relative">
            <div className="bg-riet-navy text-white p-5 flex items-center justify-between">
              <div>
                <h3 className="font-heading font-black text-lg text-white">
                  RIET E-Cell Idea Pitch Deck
                </h3>
                <p className="text-xs text-slate-300">
                  Submit your venture proposal for incubation and seed funding
                </p>
              </div>
              <button
                onClick={() => setIsPitchModalOpen(false)}
                className="text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6">
              {pitchSubmitted ? (
                <div className="text-center py-6 space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
                  <h4 className="font-heading font-bold text-lg text-riet-navy">
                    Pitch Received by E-Cell Committee!
                  </h4>
                  <p className="text-xs text-slate-600">
                    We will review your submission and contact you at {pitchForm.email} within 48 hours to schedule your pitch presentation.
                  </p>
                </div>
              ) : (
                <form onSubmit={handlePitchSubmit} className="space-y-3.5">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Proposed Startup / Project Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. NextGen Robotics"
                      value={pitchForm.startupName}
                      onChange={(e) => setPitchForm({ ...pitchForm, startupName: e.target.value })}
                      className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-riet-gold outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Founder / Lead Student *</label>
                      <input
                        type="text"
                        required
                        placeholder="Your Name"
                        value={pitchForm.founder}
                        onChange={(e) => setPitchForm({ ...pitchForm, founder: e.target.value })}
                        className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-riet-gold outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="founder@example.com"
                        value={pitchForm.email}
                        onChange={(e) => setPitchForm({ ...pitchForm, email: e.target.value })}
                        className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-riet-gold outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Industry Sector</label>
                    <select
                      value={pitchForm.sector}
                      onChange={(e) => setPitchForm({ ...pitchForm, sector: e.target.value })}
                      className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-riet-gold outline-none bg-white"
                    >
                      <option>Artificial Intelligence & Data</option>
                      <option>EdTech & Digital Learning</option>
                      <option>AgriTech & Smart Farming</option>
                      <option>Hardware & IoT Robotics</option>
                      <option>Fintech & Blockchain</option>
                      <option>CleanTech & Solar Energy</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Problem & Solution Summary *</label>
                    <textarea
                      required
                      rows="3"
                      placeholder="Briefly describe what problem you are solving and your target customer..."
                      value={pitchForm.pitchSummary}
                      onChange={(e) => setPitchForm({ ...pitchForm, pitchSummary: e.target.value })}
                      className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-riet-gold outline-none resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-riet-gold hover:bg-riet-gold-hover text-riet-navy font-black py-3 rounded-xl text-xs shadow-md transition-all flex items-center justify-center gap-2 mt-2"
                  >
                    <span>Submit Pitch to Incubation Board</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

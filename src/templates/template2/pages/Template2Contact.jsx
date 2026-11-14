import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send, CheckCircle2, Clock } from 'lucide-react';
import Template2Hero from '../components/Template2Hero';
import Template2CtaBanner from '../components/Template2CtaBanner';
import { collegeInfo } from '../../../data/collegeData';

export default function Template2Contact({ onOpenEnquiry }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    department: 'General enquiry',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.phone) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          department: 'General enquiry',
          message: ''
        });
      }, 5000);
    }
  };

  return (
    <div>
      <Template2Hero
        title="Contact"
        headline="Let's start a conversation."
        desc="Reach RIET Jaipur for admissions, institutional enquiries, campus visits, collaborations and student services."
        primaryAction={{ label: 'Send an Enquiry ↓', path: '#contact-form' }}
        secondaryAction={{ label: 'Campus Map', path: 'https://maps.google.com/?q=RIET+Jaipur' }}
      />

      <section id="contact-form" className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-10 max-w-2xl">
            <span className="text-[11px] font-black uppercase tracking-[1.7px] text-[#b57c18] block mb-2">
              GET IN TOUCH
            </span>
            <h2 className="font-heading font-black text-2xl sm:text-3xl text-[#102b50] tracking-tight">
              We would be happy to hear from you
            </h2>
            <p className="text-slate-500 text-sm mt-2">
              Contact our offices directly or complete the brief enquiry form below.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Left Card: Direct Contact Details */}
            <div className="bg-[#f4f7fa] rounded-2xl border border-[#e5eaf0] p-8 sm:p-10 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#28679e] block mb-1">
                  MAIN CAMPUS
                </span>
                <h3 className="font-heading font-black text-2xl text-[#102b50]">
                  RIET Jaipur Campus
                </h3>
                <p className="text-sm text-slate-600 mt-2">
                  Bhankrota, Ajmer Road, Jaipur, Rajasthan 302026, India.
                </p>
              </div>

              <div className="space-y-4 pt-4 border-t border-slate-200/80 text-sm">
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#e6ad3d] shrink-0 mt-1" />
                  <div>
                    <span className="font-bold text-[#102b50] block">Helpline Numbers:</span>
                    <a href={`tel:${collegeInfo.phones[0]}`} className="text-slate-700 hover:text-[#28679e] block">
                      {collegeInfo.phones[0]}
                    </a>
                    <a href={`tel:${collegeInfo.phones[1]}`} className="text-slate-700 hover:text-[#28679e] block">
                      {collegeInfo.phones[1]}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#e6ad3d] shrink-0 mt-1" />
                  <div>
                    <span className="font-bold text-[#102b50] block">Official Email Inquiries:</span>
                    <a href={`mailto:${collegeInfo.emails[0]}`} className="text-slate-700 hover:text-[#28679e] block">
                      {collegeInfo.emails[0]}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#e6ad3d] shrink-0 mt-1" />
                  <div>
                    <span className="font-bold text-[#102b50] block">Campus Office Timings:</span>
                    <span className="text-slate-600">Monday – Saturday: 9:00 AM to 5:00 PM</span>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <a
                  href="https://maps.google.com/?q=RIET+Jaipur"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#102b50] hover:bg-[#1a4073] text-white font-bold px-5 py-3 rounded-lg text-xs transition-colors shadow-xs"
                >
                  <MapPin className="w-4 h-4 text-[#e6ad3d]" />
                  <span>Open Campus in Google Maps ↗</span>
                </a>
              </div>
            </div>

            {/* Right Card: Interactive Enquiry Form */}
            <div className="bg-white rounded-2xl border border-[#e5eaf0] p-8 sm:p-10 shadow-[0_8px_25px_rgba(16,43,80,0.06)]">
              <h3 className="font-heading font-black text-2xl text-[#102b50] mb-2">
                Send an Enquiry
              </h3>
              <p className="text-xs text-slate-500 mb-6">
                Fill in your details below and an official institute counsellor will get back to you promptly.
              </p>

              {submitted ? (
                <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-xl text-center space-y-2 animate-in fade-in">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                  <h4 className="font-bold text-emerald-900 text-sm">Enquiry Received Successfully!</h4>
                  <p className="text-xs text-emerald-700">
                    Thank you, {formData.name}. Our admissions desk will call you shortly on {formData.phone}.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-[#28679e] text-xs font-medium"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="you@domain.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-[#28679e] text-xs font-medium"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Mobile Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="10-digit mobile number"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-[#28679e] text-xs font-medium"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Inquiry Department
                    </label>
                    <select
                      value={formData.department}
                      onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-[#28679e] text-xs font-medium bg-white"
                    >
                      <option>General enquiry</option>
                      <option>Admissions 2026-27</option>
                      <option>B.Tech Engineering Programmes</option>
                      <option>M.Tech / MBA / MCA Courses</option>
                      <option>Placements & Corporate Hiring</option>
                      <option>Hostel Accommodation</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Your Message / Questions
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Please specify any questions or requirements..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-[#28679e] text-xs font-medium"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#e6ad3d] hover:bg-[#d89f31] text-[#152a42] font-black py-3 rounded-lg text-xs shadow-md transition-all hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2"
                  >
                    <span>Submit Enquiry</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                  <p className="text-[10px] text-slate-400 text-center">
                    Official response guaranteed within 24 working hours.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <Template2CtaBanner
        kicker="CAMPUS ADMISSIONS HELPLINE"
        title="Prefer to speak directly with an advisor?"
        desc="Call our direct admission desk at 9257111214 / 9257111215 for instant guidance."
        buttonText="Call Admissions Desk ↗"
        buttonLink="tel:9257111214"
      />
    </div>
  );
}

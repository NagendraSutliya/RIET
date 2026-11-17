import React, { useState } from 'react';
import Template8PageHeader from '../components/Template8PageHeader';
import { 
  MapPin, Phone, Mail, Clock, Send, CheckCircle2, 
  Building, GraduationCap, ShieldAlert, Bus, Car, Train
} from 'lucide-react';

export default function Template8Contact({ onOpenEnquiry }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    program: 'B.Tech - Computer Science & Engineering',
    city: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const programs = [
    'B.Tech - Computer Science & Engineering',
    'B.Tech - Artificial Intelligence & Data Science',
    'B.Tech - Computer Science (Cyber Security)',
    'B.Tech - Electronics & Communication (VLSI)',
    'B.Tech - Electrical Engineering (EV Systems)',
    'B.Tech - Mechanical Engineering (Robotics)',
    'B.Tech - Civil Engineering (Smart Infrastructure)',
    'Master of Computer Applications (MCA)',
    'M.Tech - Advanced Computer Science',
    'M.Tech - Power Systems & Renewable Energy'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate inquiry submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        program: 'B.Tech - Computer Science & Engineering',
        city: '',
        message: ''
      });
    }, 1000);
  };

  const contactCards = [
    {
      icon: MapPin,
      title: "Campus Location",
      details: ["RIET Campus, Bhankrota, Ajmer Road", "Jaipur, Rajasthan 302026, India"],
      linkText: "Get Driving Directions",
      linkUrl: "https://maps.google.com/?q=Rajasthan+Institute+of+Engineering+and+Technology+Jaipur"
    },
    {
      icon: Phone,
      title: "Admissions Helpline",
      details: ["+91 90011 22334 / +91 90011 22335", "Toll Free: 1800-120-RIET (7438)"],
      linkText: "Call Admissions Desk",
      linkUrl: "tel:+919001122334"
    },
    {
      icon: Mail,
      title: "Official Email Desks",
      details: ["admissions@rietjaipur.ac.in", "info@rietjaipur.ac.in"],
      linkText: "Send Official Email",
      linkUrl: "mailto:admissions@rietjaipur.ac.in"
    },
    {
      icon: Clock,
      title: "Visiting Hours",
      details: ["Monday – Saturday: 9:00 AM – 5:00 PM", "Admissions Helpdesk Open Sundays During REAP"],
      linkText: "Schedule A Visit",
      linkAction: onOpenEnquiry
    }
  ];

  const keyDepartments = [
    { title: "Registrar & Academic Affairs", contact: "registrar@rietjaipur.ac.in", phone: "+91 141 225 0031" },
    { title: "Training & Placement Cell", contact: "placements@rietjaipur.ac.in", phone: "+91 141 225 0034" },
    { title: "Student Hostels & Residential", contact: "hostelwarden@rietjaipur.ac.in", phone: "+91 141 225 0036" },
    { title: "Anti-Ragging & Grievance Cell", contact: "antiragging@rietjaipur.ac.in", phone: "+91 141 225 0038" },
  ];

  return (
    <div className="w-full font-sans text-[#2a2a2a] bg-white">
      {/* 1. Kingster Page Header */}
      <Template8PageHeader
        title="Contact &amp; Campus Directions"
        desc="Connect with Rajasthan Institute of Engineering &amp; Technology. We are here to assist prospective students, parents, corporate recruiters, and alumni."
        breadcrumbs={[{ label: 'Contact Us' }]}
      />

      {/* 2. Four Key Contact Cards */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-[#f8f9fa] border-b border-slate-200">
        <div className="max-w-[1240px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-lg border border-slate-200 shadow-xs hover:border-[#d2973b] transition-all flex flex-col justify-between group"
                >
                  <div className="space-y-3">
                    <div className="w-12 h-12 rounded bg-[#192f59] text-[#d2973b] flex items-center justify-center group-hover:bg-[#d2973b] group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-base font-bold font-playfair text-[#192f59]">
                      {card.title}
                    </h3>
                    <div className="space-y-1 text-xs text-slate-600 leading-relaxed font-normal">
                      {card.details.map((line, i) => (
                        <p key={i}>{line}</p>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100">
                    {card.linkAction ? (
                      <button
                        onClick={card.linkAction}
                        className="text-xs font-bold text-[#192f59] group-hover:text-[#d2973b] uppercase tracking-wider transition-colors inline-flex items-center gap-1"
                      >
                        {card.linkText} &rarr;
                      </button>
                    ) : (
                      <a
                        href={card.linkUrl}
                        target={card.linkUrl.startsWith('http') ? '_blank' : '_self'}
                        rel="noreferrer"
                        className="text-xs font-bold text-[#192f59] group-hover:text-[#d2973b] uppercase tracking-wider transition-colors inline-flex items-center gap-1"
                      >
                        {card.linkText} &rarr;
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Inquiry Form & Department Directory */}
      <section className="py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-[1240px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Col: Collegiate Inquiry Form (7 cols) */}
            <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-xl border border-slate-200 shadow-md">
              <div className="mb-8">
                <span className="text-xs font-bold uppercase tracking-widest text-[#d2973b] block mb-1">
                  Admissions &amp; General Inquiries
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold font-playfair text-[#192f59]">
                  Send an Academic Message
                </h2>
                <div className="h-1 w-12 bg-[#d2973b] my-3 rounded-full" />
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Fill in your details below and an official RIET faculty advisor will get back to you within 24 business hours.
                </p>
              </div>

              {submitted && (
                <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 rounded-lg text-emerald-800 text-xs flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm mb-1">Inquiry Submitted Successfully!</h4>
                    <p className="leading-relaxed">
                      Thank you for contacting RIET Jaipur. Your message has been routed to the Admissions &amp; Academic Advisory Directorate. We will reach you shortly.
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#192f59] mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-2.5 bg-[#f8f9fa] border border-slate-300 rounded text-xs text-[#2a2a2a] focus:outline-none focus:border-[#d2973b] focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#192f59] mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. rahul.sharma@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 bg-[#f8f9fa] border border-slate-300 rounded text-xs text-[#2a2a2a] focus:outline-none focus:border-[#d2973b] focus:bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#192f59] mb-1.5">
                      Contact Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 bg-[#f8f9fa] border border-slate-300 rounded text-xs text-[#2a2a2a] focus:outline-none focus:border-[#d2973b] focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#192f59] mb-1.5">
                      Current City / State
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Jaipur, Rajasthan"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-4 py-2.5 bg-[#f8f9fa] border border-slate-300 rounded text-xs text-[#2a2a2a] focus:outline-none focus:border-[#d2973b] focus:bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#192f59] mb-1.5">
                    Program of Interest
                  </label>
                  <select
                    value={formData.program}
                    onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                    className="w-full px-4 py-2.5 bg-[#f8f9fa] border border-slate-300 rounded text-xs text-[#2a2a2a] focus:outline-none focus:border-[#d2973b] focus:bg-white"
                  >
                    {programs.map((prog, idx) => (
                      <option key={idx} value={prog}>{prog}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#192f59] mb-1.5">
                    Your Message / Specific Question *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Ask about REAP counseling cutoffs, syllabus, hostel accommodation, or campus visits..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 bg-[#f8f9fa] border border-slate-300 rounded text-xs text-[#2a2a2a] focus:outline-none focus:border-[#d2973b] focus:bg-white resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto bg-[#d2973b] hover:bg-[#b8822e] text-white font-bold py-3.5 px-8 rounded text-xs uppercase tracking-wider transition-colors inline-flex items-center justify-center gap-2 shadow"
                >
                  {loading ? (
                    <span>Submitting Message...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Academic Inquiry</span>
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Right Col: Department Contacts & Campus Connectivity (5 cols) */}
            <div className="lg:col-span-5 space-y-8">
              
              {/* Department Directorate Contacts */}
              <div className="bg-[#f8f9fa] border border-slate-200 rounded-lg p-6">
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#d2973b] block mb-1">
                  Directory
                </span>
                <h3 className="text-xl font-bold font-playfair text-[#192f59] mb-4">
                  Key Institutional Desks
                </h3>

                <div className="divide-y divide-slate-200">
                  {keyDepartments.map((dept, idx) => (
                    <div key={idx} className="py-3 first:pt-0 last:pb-0">
                      <h4 className="text-xs font-bold text-[#192f59] mb-1">
                        {dept.title}
                      </h4>
                      <div className="text-[11px] text-slate-600 space-y-0.5">
                        <div>
                          Email: <a href={`mailto:${dept.contact}`} className="text-[#d2973b] hover:underline">{dept.contact}</a>
                        </div>
                        <div>
                          Phone: <span className="text-slate-700">{dept.phone}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Transit & Commute Box */}
              <div className="bg-white border border-slate-200 rounded-lg p-6 space-y-4">
                <h3 className="text-lg font-bold font-playfair text-[#192f59]">
                  Reaching RIET Jaipur Campus
                </h3>
                
                <div className="space-y-3 text-xs text-slate-600 leading-relaxed">
                  <div className="flex items-start gap-3">
                    <Train className="w-4 h-4 text-[#d2973b] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#192f59]">Jaipur Railway Junction:</strong> ~14 km (Direct low-floor buses and radio taxis available 24x7).
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Car className="w-4 h-4 text-[#d2973b] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#192f59]">Jaipur International Airport:</strong> ~18 km (via Jawahar Circle and Gopalpura Bypass).
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Bus className="w-4 h-4 text-[#d2973b] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#192f59]">Institute Bus Fleets:</strong> 25+ air-conditioned college buses connect all residential colonies across Jaipur.
                    </div>
                  </div>
                </div>
              </div>

              {/* Safety & Compliance Badge */}
              <div className="p-4 bg-[#192f59] text-white rounded-lg flex items-center gap-3">
                <ShieldAlert className="w-8 h-8 text-[#d2973b] shrink-0" />
                <div className="text-xs">
                  <div className="font-bold text-white">Ragging-Free &amp; Secure Campus</div>
                  <div className="text-slate-300 text-[11px]">Strict compliance with Supreme Court &amp; AICTE anti-ragging directives with round-the-clock security.</div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 4. Embedded Google Map Section */}
      <section className="w-full h-96 sm:h-[450px] relative border-t border-slate-200">
        <iframe
          title="RIET Jaipur Campus Map"
          className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-500"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.2062325324024!2d75.6967882759902!3d26.865187662125026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4d7ec6b2513f%3A0xbcf4c6f3769c279c!2sRajasthan%20Institute%20of%20Engineering%20and%20Technology%2C%20Jaipur!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </div>
  );
}

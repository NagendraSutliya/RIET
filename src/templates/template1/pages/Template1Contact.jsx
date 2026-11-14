import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send, Clock, CheckCircle2, Facebook, Twitter, Linkedin, Instagram, Youtube, Compass, ShieldAlert, PhoneCall, Building } from 'lucide-react';
import { collegeInfo } from '../../../data/collegeData';

export default function Template1Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', department: 'Admissions Inquiry', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', department: 'Admissions Inquiry', message: '' });
    }, 4000);
  };

  const directory = [
    { title: "Admissions & Counselling Cell", phone: "+91 92571 11214", email: "admissions@rietjaipur.ac.in", timing: "9:00 AM - 6:00 PM (Mon-Sat)" },
    { title: "Training & Placement Cell (TPO)", phone: "+91 92571 11215", email: "tpo@rietjaipur.ac.in", timing: "9:30 AM - 5:00 PM (Mon-Fri)" },
    { title: "Registrar & Academic Administration", phone: "0141-2250033", email: "registrar@rietjaipur.ac.in", timing: "9:00 AM - 4:30 PM (Mon-Sat)" },
    { title: "Examination & Degree Cell", phone: "0141-2250034", email: "exam@rietjaipur.ac.in", timing: "10:00 AM - 4:00 PM (Mon-Fri)" },
    { title: "Boys & Girls Hostel Wardens", phone: "+91 92571 11218", email: "hostel@rietjaipur.ac.in", timing: "24x7 Emergency Contact" },
    { title: "Accounts & Tuition Fee Desk", phone: "0141-2250035", email: "accounts@rietjaipur.ac.in", timing: "9:30 AM - 4:00 PM (Mon-Sat)" }
  ];

  const travelRoutes = [
    { from: "Jaipur Junction Railway Station", distance: "16 km", time: "Approx. 25 mins via Ajmer Road Elevated Expressway" },
    { from: "Jaipur International Airport (Sanganer)", distance: "18 km", time: "Approx. 28 mins via B2 Bypass & 200 Feet Expressway" },
    { from: "Sindhi Camp Central Inter-State Bus Terminal", distance: "17 km", time: "Approx. 26 mins via Gopalpura Bypass / Sodala" },
    { from: "Bhankrota Bus Stop / Flyover", distance: "0.8 km", time: "3 mins walk from main Ajmer Road flyover" }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <div className="bg-gradient-to-r from-riet-navy-dark via-riet-navy to-riet-navy-light text-white py-14 px-4 border-b border-riet-line">
        <div className="max-w-7xl mx-auto">
          <span className="text-xs font-bold text-riet-gold uppercase tracking-wider block mb-2">
            Institutional Helpdesk • Bhankrota, Jaipur
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black tracking-tight text-white">
            Connect With RIET Jaipur
          </h1>
          <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-2xl">
            Whether you are a prospective student, parent, corporate recruiter, or alumnus, our administrative team is here to assist you.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-14 space-y-16">
        {/* Contact Info & Message Form Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Campus Address & Emergency SOS (6 Cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs font-bold text-riet-gold uppercase tracking-wider block mb-1">
                Main Institutional Campus
              </span>
              <h2 className="text-2xl sm:text-3xl font-heading font-black text-riet-navy">
                Reach Our Campus Office
              </h2>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-slate-700">
              <div className="p-4 rounded-xl bg-riet-paper border border-slate-200 flex items-start gap-3.5">
                <MapPin className="w-5 h-5 text-riet-gold shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-heading font-bold text-sm text-riet-navy">Physical Address</h4>
                  <p className="text-slate-600 mt-0.5">{collegeInfo.address}</p>
                  <p className="text-[11px] text-slate-500 mt-1">Near Bhankrota Flyover, Jaipur-Ajmer Expressway</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-riet-paper border border-slate-200 flex items-start gap-3.5">
                <Phone className="w-5 h-5 text-riet-gold shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-heading font-bold text-sm text-riet-navy">Helpline & Direct Lines</h4>
                  <p className="text-slate-600 mt-0.5">
                    <a href={`tel:${collegeInfo.phones[0]}`} className="hover:text-riet-blue font-semibold">
                      {collegeInfo.phones[0]}
                    </a> / {' '}
                    <a href={`tel:${collegeInfo.phones[1]}`} className="hover:text-riet-blue font-semibold">
                      {collegeInfo.phones[1]}
                    </a>
                  </p>
                  <p className="text-[11px] text-slate-500 mt-1">Available Mon–Sat: 9:00 AM – 6:00 PM</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-riet-paper border border-slate-200 flex items-start gap-3.5">
                <Mail className="w-5 h-5 text-riet-gold shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-heading font-bold text-sm text-riet-navy">Official Email Desks</h4>
                  <p className="text-slate-600 mt-0.5">
                    <a href={`mailto:${collegeInfo.emails[0]}`} className="hover:text-riet-blue">
                      {collegeInfo.emails[0]}
                    </a>
                  </p>
                  <p className="text-slate-600">
                    <a href={`mailto:${collegeInfo.emails[1]}`} className="hover:text-riet-blue">
                      {collegeInfo.emails[1]}
                    </a>
                  </p>
                </div>
              </div>

              {/* Anti-Ragging SOS Banner */}
              <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-900 text-xs flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ShieldAlert className="w-5 h-5 text-red-600 shrink-0" />
                  <div>
                    <span className="font-bold block">24x7 Anti-Ragging Emergency Helpline</span>
                    <span className="text-[11px] text-red-700">Toll-Free National Helpline: 1800-180-5522</span>
                  </div>
                </div>
                <a
                  href="tel:18001805522"
                  className="bg-red-600 hover:bg-red-700 text-white font-bold px-3 py-1.5 rounded-lg text-xs"
                >
                  Dial SOS
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Send a Message Form (6 Cols) */}
          <div className="lg:col-span-6 bg-riet-paper border border-slate-200 p-7 sm:p-8 rounded-3xl shadow-sm">
            <h3 className="font-heading font-black text-xl text-riet-navy mb-1">
              Send an Official Message
            </h3>
            <p className="text-xs text-slate-500 mb-6">
              Our campus reception will route your inquiry directly to the respective department officer.
            </p>

            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-6 rounded-xl text-center space-y-2">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                <h4 className="font-bold">Inquiry Dispatched Successfully!</h4>
                <p className="text-xs">Thank you, {formData.name}. Our designated officer will contact you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Vikramaditya Singh"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-riet-gold outline-none bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Contact Phone *</label>
                    <input
                      type="tel"
                      required
                      placeholder="10-digit mobile number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-riet-gold outline-none bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-riet-gold outline-none bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Concerned Department</label>
                    <select
                      value={formData.department}
                      onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                      className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-riet-gold outline-none bg-white"
                    >
                      <option>Admissions Inquiry</option>
                      <option>Academic Verification</option>
                      <option>Training & Placement Office (TPO)</option>
                      <option>Accounts & Fee Receipts</option>
                      <option>Hostel Accommodation</option>
                      <option>General Administration</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Your Message / Query *</label>
                  <textarea
                    required
                    rows="3"
                    placeholder="Provide details about your query..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-riet-gold outline-none bg-white resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-riet-gold hover:bg-riet-gold-hover text-riet-navy font-black py-3 rounded-xl text-xs shadow-md transition-all flex items-center justify-center gap-1.5"
                >
                  <span>Submit Message to Helpdesk</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Department-wise Direct Phone Extension Directory */}
        <div className="space-y-6 pt-8 border-t border-slate-200">
          <div>
            <span className="text-xs font-bold text-riet-gold uppercase tracking-wider block mb-1">
              Direct Contact
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-black text-riet-navy">
              Departmental Directory & Extensions
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {directory.map((dir, i) => (
              <div key={i} className="p-5 rounded-2xl border border-slate-200 bg-white space-y-2 shadow-sm">
                <h4 className="font-heading font-bold text-sm text-riet-navy flex items-center gap-2">
                  <Building className="w-4 h-4 text-riet-gold" />
                  <span>{dir.title}</span>
                </h4>
                <div className="text-xs text-slate-600 space-y-1 pt-1">
                  <p>
                    <span className="font-semibold text-slate-800">Phone:</span>{' '}
                    <a href={`tel:${dir.phone}`} className="text-riet-blue hover:underline">{dir.phone}</a>
                  </p>
                  <p>
                    <span className="font-semibold text-slate-800">Email:</span>{' '}
                    <a href={`mailto:${dir.email}`} className="text-riet-blue hover:underline">{dir.email}</a>
                  </p>
                  <p className="text-[11px] text-slate-400">Timings: {dir.timing}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Travel Directions from Jaipur Key Hubs */}
        <div className="p-8 rounded-3xl bg-riet-paper border border-slate-200 space-y-6">
          <div>
            <span className="text-xs font-bold text-riet-gold uppercase tracking-wider block mb-1">
              Navigation & Transit
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-black text-riet-navy">
              Directions to RIET Campus
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {travelRoutes.map((r, i) => (
              <div key={i} className="p-4 rounded-xl bg-white border border-slate-200 space-y-1.5">
                <span className="font-heading font-black text-lg text-riet-navy block">{r.distance}</span>
                <h5 className="font-bold text-xs text-slate-800">{r.from}</h5>
                <p className="text-[11px] text-slate-500 leading-snug">{r.time}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Embedded Interactive Map */}
        <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-md">
          <div className="bg-riet-navy text-white px-6 py-4 flex items-center justify-between text-xs">
            <span className="font-bold flex items-center gap-2">
              <MapPin className="w-4 h-4 text-riet-gold" />
              Interactive Live Campus Location — Bhankrota, Ajmer Road, Jaipur
            </span>
            <a
              href="https://maps.google.com/?q=RIET+Jaipur"
              target="_blank"
              rel="noreferrer"
              className="bg-riet-gold text-riet-navy px-3 py-1 rounded font-bold hover:bg-riet-gold-hover"
            >
              Open in Google Maps ↗
            </a>
          </div>
          <iframe
            title="RIET Jaipur Map Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.789123456789!2d75.6987654!3d26.8654321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4b2671bcf627%3A0x6b876a4df146cfd0!2sRajasthan%20Institute%20of%20Engineering%20and%20Technology%2C%20Jaipur!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

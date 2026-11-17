import React, { useState } from 'react';
import Template7PageHeader from '../components/Template7PageHeader';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react';

export default function Template7Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    program: 'B.Tech',
    message: ''
  });
  const [statusMsg, setStatusMsg] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatusMsg(`Thank you, ${formData.name}! Your enquiry for ${formData.program} has been submitted to the RIET Admissions Desk.`);
    setFormData({
      name: '',
      email: '',
      phone: '',
      program: 'B.Tech',
      message: ''
    });
  };

  return (
    <div className="w-full font-sans text-[#2a2a2a] bg-white">
      <Template7PageHeader
        title="Contact Us"
        desc="Connect with the Central Admissions Office, Training &amp; Placement Cell, Registrar, or Women's Grievance Cell."
        breadcrumbs={[{ label: 'Contact' }]}
      />

      <section className="py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Form (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#d2973b] block mb-1">
                Direct Inquiries
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-playfair text-[#192f59]">
                Send an Academic Enquiry
              </h2>
              <div className="h-1 w-14 bg-[#d2973b] my-3 rounded-full" />
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs font-sans">
              <div>
                <label htmlFor="n7" className="font-bold text-[#192f59] block mb-1.5 uppercase tracking-wider">
                  Full Name *
                </label>
                <input
                  id="n7"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Rahul Sharma"
                  className="w-full p-3.5 bg-white border border-slate-300 rounded text-sm text-[#2a2a2a] focus:outline-none focus:border-[#d2973b]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="e7" className="font-bold text-[#192f59] block mb-1.5 uppercase tracking-wider">
                    Email Address *
                  </label>
                  <input
                    id="e7"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. rahul@example.com"
                    className="w-full p-3.5 bg-white border border-slate-300 rounded text-sm text-[#2a2a2a] focus:outline-none focus:border-[#d2973b]"
                  />
                </div>
                <div>
                  <label htmlFor="p7" className="font-bold text-[#192f59] block mb-1.5 uppercase tracking-wider">
                    Phone Number *
                  </label>
                  <input
                    id="p7"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. +91 98765 43210"
                    className="w-full p-3.5 bg-white border border-slate-300 rounded text-sm text-[#2a2a2a] focus:outline-none focus:border-[#d2973b]"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="c7" className="font-bold text-[#192f59] block mb-1.5 uppercase tracking-wider">
                  Program of Interest
                </label>
                <select
                  id="c7"
                  value={formData.program}
                  onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                  className="w-full p-3.5 bg-white border border-slate-300 rounded text-sm text-[#2a2a2a] focus:outline-none focus:border-[#d2973b]"
                >
                  <option value="B.Tech">B.Tech (CSE, AI & DS, Cyber Security, IoT, Mechanical, Civil)</option>
                  <option value="B.Arch">B.Arch (Architecture)</option>
                  <option value="BBA">BBA (Business Administration)</option>
                  <option value="BCA">BCA (Computer Applications)</option>
                  <option value="M.Tech">M.Tech (Engineering Postgraduate)</option>
                  <option value="MBA">MBA (Management Studies)</option>
                  <option value="MCA">MCA (Computer Applications)</option>
                  <option value="Ph.D">Ph.D (Doctoral Research)</option>
                </select>
              </div>

              <div>
                <label htmlFor="m7" className="font-bold text-[#192f59] block mb-1.5 uppercase tracking-wider">
                  Questions or Message
                </label>
                <textarea
                  id="m7"
                  rows="4"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Inquire about REAP cutoff scores, scholarships, hostel amenities, or fee structures..."
                  className="w-full p-3.5 bg-white border border-slate-300 rounded text-sm text-[#2a2a2a] focus:outline-none focus:border-[#d2973b]"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-[#d2973b] hover:bg-[#b8822e] text-white font-bold py-3.5 px-8 rounded text-xs uppercase tracking-wider transition-colors inline-flex items-center gap-2 shadow"
              >
                <Send className="w-4 h-4" />
                <span>Submit Enquiry</span>
              </button>

              {statusMsg && (
                <div role="status" className="p-4 bg-[#fef7eb] border-l-4 border-[#d2973b] text-[#192f59] rounded text-xs font-semibold mt-3 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#d2973b] shrink-0" />
                  <span>{statusMsg}</span>
                </div>
              )}
            </form>
          </div>

          {/* Contact Details & Map (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-7 bg-[#f8f9fa] rounded-lg border border-slate-200 space-y-4">
              <h3 className="text-xl font-bold font-playfair text-[#192f59] border-b border-slate-200 pb-2">
                University Coordinates
              </h3>

              <div className="space-y-1 text-xs">
                <span className="font-bold text-[#192f59] block uppercase">Campus Address:</span>
                <p className="text-slate-600 leading-relaxed">
                  Rajasthan Institute of Engineering and Technology, Bhankrota, Ajmer Road, Jaipur, Rajasthan 302026
                </p>
              </div>

              <div className="space-y-1 text-xs pt-2 border-t border-slate-200">
                <span className="font-bold text-[#192f59] block uppercase">Direct Telephony:</span>
                <p className="text-slate-600">
                  +91 92571 11214, +91 92571 11215
                </p>
              </div>

              <div className="space-y-1 text-xs pt-2 border-t border-slate-200">
                <span className="font-bold text-[#192f59] block uppercase">Official Email:</span>
                <p className="text-slate-600">
                  <a href="mailto:inquiry@rietjaipur.ac.in" className="text-[#192f59] hover:underline font-semibold">
                    inquiry@rietjaipur.ac.in
                  </a>
                </p>
              </div>

              <div className="pt-2 border-t border-slate-200 text-xs text-slate-500">
                <strong>Office Hours:</strong> Monday – Saturday: 9:00 AM – 5:00 PM IST
              </div>
            </div>

            <div className="rounded-lg overflow-hidden border border-slate-200 h-64 shadow-2xs">
              <iframe
                title="RIET Jaipur Campus Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.8390829878237!2d75.6983053150438!3d26.845089983156294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4b69d8544c01%3A0x7d6a50ee515ebfb0!2sRajasthan%20Institute%20of%20Engineering%20and%20Technology!5e0!3m2!1sen!2sin!4v1655000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

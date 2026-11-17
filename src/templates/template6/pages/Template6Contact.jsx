import React, { useState } from 'react';
import Template6PageHeader from '../components/Template6PageHeader';

export default function Template6Contact() {
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
    setStatusMsg(`Thank you, ${formData.name}! Your enquiry for ${formData.program} has been submitted successfully.`);
    setFormData({
      name: '',
      email: '',
      phone: '',
      program: 'B.Tech',
      message: ''
    });
  };

  return (
    <div className="w-full font-sans text-[#1C1B22] bg-white">
      <Template6PageHeader
        title="Contact"
        desc="Reach the admissions office, placement cell or grievance cell."
      />

      <section className="py-16 sm:py-20 px-6 sm:px-10 bg-white">
        <div className="max-w-[1140px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Form */}
          <div className="lg:col-span-7">
            <h2 className="font-fraunces text-3xl font-bold text-[#1C1B22] mb-6">
              Send an enquiry
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="n6" className="font-semibold text-xs text-[#1C1B22] block mb-1 uppercase tracking-wider">
                  Full name *
                </label>
                <input
                  id="n6"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Rahul Sharma"
                  className="w-full p-3.5 border border-[#8A8490] rounded text-sm text-[#1C1B22] focus:outline-none focus:ring-2 focus:ring-[#6B1724] bg-white"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="e6" className="font-semibold text-xs text-[#1C1B22] block mb-1 uppercase tracking-wider">
                    Email address *
                  </label>
                  <input
                    id="e6"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. rahul@example.com"
                    className="w-full p-3.5 border border-[#8A8490] rounded text-sm text-[#1C1B22] focus:outline-none focus:ring-2 focus:ring-[#6B1724] bg-white"
                  />
                </div>
                <div>
                  <label htmlFor="p6" className="font-semibold text-xs text-[#1C1B22] block mb-1 uppercase tracking-wider">
                    Phone number
                  </label>
                  <input
                    id="p6"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. +91 98765 43210"
                    className="w-full p-3.5 border border-[#8A8490] rounded text-sm text-[#1C1B22] focus:outline-none focus:ring-2 focus:ring-[#6B1724] bg-white"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="c6" className="font-semibold text-xs text-[#1C1B22] block mb-1 uppercase tracking-wider">
                  Program of interest
                </label>
                <select
                  id="c6"
                  value={formData.program}
                  onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                  className="w-full p-3.5 border border-[#8A8490] rounded text-sm text-[#1C1B22] focus:outline-none focus:ring-2 focus:ring-[#6B1724] bg-white"
                >
                  <option value="B.Tech">B.Tech (CSE, AI/DS, Cyber, IoT, Mechanical, Civil)</option>
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
                <label htmlFor="m6" className="font-semibold text-xs text-[#1C1B22] block mb-1 uppercase tracking-wider">
                  Message or questions
                </label>
                <textarea
                  id="m6"
                  rows="4"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Ask about admissions, fee schedules, hostel amenities, or campus visits..."
                  className="w-full p-3.5 border border-[#8A8490] rounded text-sm text-[#1C1B22] focus:outline-none focus:ring-2 focus:ring-[#6B1724] bg-white"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-[#6B1724] hover:bg-[#52111B] text-white font-semibold py-3.5 px-8 rounded text-sm transition-all shadow-xs"
              >
                Send enquiry
              </button>

              {statusMsg && (
                <div role="status" className="p-4 bg-[#FAF7F5] text-[#1C1B22] border-l-4 border-[#6B1724] rounded text-sm font-semibold mt-3">
                  {statusMsg}
                </div>
              )}
            </form>
          </div>

          {/* Right Column: Contact info & Google Map */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 bg-[#FAF7F5] border border-[#E3DDD8] rounded space-y-4">
              <div>
                <h3 className="font-fraunces text-2xl font-bold text-[#1C1B22] mb-1">
                  Address
                </h3>
                <p className="text-xs text-[#4A4752] leading-relaxed">
                  Rajasthan Institute of Engineering and Technology, Bhankrota, Ajmer Road, Jaipur, Rajasthan - 302026
                </p>
              </div>

              <div>
                <h3 className="font-fraunces text-2xl font-bold text-[#1C1B22] mb-1">
                  Phone
                </h3>
                <p className="text-xs text-[#4A4752] leading-relaxed">
                  +91 92571 11214, +91 92571 11215
                </p>
              </div>

              <div>
                <h3 className="font-fraunces text-2xl font-bold text-[#1C1B22] mb-1">
                  Email
                </h3>
                <p className="text-xs text-[#4A4752] leading-relaxed">
                  <a href="mailto:inquiry@rietjaipur.ac.in" className="text-[#6B1724] hover:underline font-semibold">
                    inquiry@rietjaipur.ac.in
                  </a>
                </p>
              </div>

              <div className="pt-2 border-t border-[#E3DDD8] text-xs text-[#7D7884]">
                <strong>Office Hours:</strong> Monday – Saturday: 9:00 AM – 5:00 PM
              </div>
            </div>

            <div className="rounded overflow-hidden border border-[#E3DDD8] h-64 shadow-xs">
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

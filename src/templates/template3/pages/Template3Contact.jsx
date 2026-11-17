import React, { useState } from 'react';
import Template3PageHeader from '../components/Template3PageHeader';
import { MapPin, Phone, Mail, Send, CheckCircle2 } from 'lucide-react';
import { collegeInfo } from '../../../data/collegeData';

export default function Template3Contact({ onOpenEnquiry }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: 'B.Tech',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          course: 'B.Tech',
          message: ''
        });
      }, 5000);
    }
  };

  return (
    <div className="bg-white text-[#1A2233] w-full max-w-full overflow-x-hidden">
      <Template3PageHeader
        title="Contact RIET Jaipur"
        desc="Reach the admissions office, placement cell, registrar or grievance cell."
        breadcrumb="Contact"
      />

      <section className="py-14 sm:py-18 bg-white w-full max-w-full overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left: Send an Enquiry Form */}
            <div className="lg:col-span-7 bg-[#F4F6FB] border border-[#E1E6F0] rounded-xl p-8 sm:p-10 shadow-xs">
              <h2 className="font-heading font-black text-2xl text-[#0E2A5C] mb-2">
                Send an Enquiry
              </h2>
              <p className="text-xs text-slate-500 mb-6">
                Our counsellors will get back to you with program fees, syllabus, and seat allocation rules.
              </p>

              {submitted ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 text-center space-y-2 animate-in fade-in">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                  <h3 className="font-bold text-emerald-900 text-sm">Enquiry Submitted Successfully</h3>
                  <p className="text-xs text-emerald-700">
                    Thank you, {formData.name}. Our admissions office will reach you at {formData.email}.
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
                      placeholder="Enter candidate full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-[#0E2A5C] text-xs font-medium bg-white"
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
                        placeholder="you@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-[#0E2A5C] text-xs font-medium bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="10-digit mobile number"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-[#0E2A5C] text-xs font-medium bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Program of Interest
                    </label>
                    <select
                      value={formData.course}
                      onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-[#0E2A5C] text-xs font-medium bg-white"
                    >
                      <option>B.Tech Engineering</option>
                      <option>B.Tech Lateral Entry (2nd Year)</option>
                      <option>B.Arch Architecture</option>
                      <option>BBA Business Administration</option>
                      <option>BCA Computer Applications</option>
                      <option>M.Tech Research</option>
                      <option>MBA Management</option>
                      <option>MCA Computer Applications</option>
                      <option>Ph.D Doctoral Studies</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Message / Special Queries
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Write your questions or hostel/bus inquiry..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-[#0E2A5C] text-xs font-medium bg-white"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#F2A900] hover:bg-[#e09b00] text-[#0E2A5C] font-black py-3 rounded-lg text-xs sm:text-sm shadow-xs transition-transform hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2"
                  >
                    <span>Send Enquiry</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>

            {/* Right: Contact Information & Map */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white border border-[#E1E6F0] rounded-xl p-8 shadow-xs space-y-5">
                <div>
                  <h3 className="font-heading font-black text-xl text-[#0E2A5C] mb-1">
                    Campus Address
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    Rajasthan Institute of Engineering and Technology,<br />
                    Bhankrota, Ajmer Road, Jaipur, Rajasthan 302026, India.
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <h4 className="font-heading font-bold text-sm text-[#0E2A5C] mb-1">
                    Direct Telephones
                  </h4>
                  <p className="text-slate-600 text-xs sm:text-sm">
                    <a href={`tel:${collegeInfo.phones[0]}`} className="text-[#0E2A5C] hover:underline">
                      {collegeInfo.phones[0]}
                    </a>,{' '}
                    <a href={`tel:${collegeInfo.phones[1]}`} className="text-[#0E2A5C] hover:underline">
                      {collegeInfo.phones[1] || '9257111215'}
                    </a>
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <h4 className="font-heading font-bold text-sm text-[#0E2A5C] mb-1">
                    Email Inquiries
                  </h4>
                  <p className="text-slate-600 text-xs sm:text-sm">
                    <a href={`mailto:${collegeInfo.emails[0]}`} className="text-[#0E2A5C] hover:underline">
                      {collegeInfo.emails[0]}
                    </a>
                  </p>
                </div>
              </div>

              {/* Map Card */}
              <div className="rounded-xl overflow-hidden border border-[#E1E6F0] shadow-xs h-64 bg-slate-100">
                <iframe
                  title="RIET Jaipur Campus Map"
                  src="https://maps.google.com/maps?q=RIET+Jaipur+Rajasthan&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  allowFullScreen=""
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

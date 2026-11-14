import React, { useState } from 'react';
import { X, Send, CheckCircle, GraduationCap } from 'lucide-react';
import { collegeInfo } from '../data/collegeData';

export default function EnquiryModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: 'B.Tech - Computer Science & Engineering',
    city: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-fade-in">
      <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl border border-slate-100 overflow-hidden relative">
        {/* Header */}
        <div className="bg-gradient-to-r from-riet-navy to-riet-navy-light text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-riet-gold/20 border border-riet-gold/30 flex items-center justify-center text-riet-gold">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-heading font-black text-lg text-white">
                Admission Enquiry 2026-27
              </h3>
              <p className="text-xs text-slate-300">
                Connect directly with RIET Jaipur Admissions Counsellors
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-8 space-y-3">
              <CheckCircle className="w-14 h-14 text-emerald-500 mx-auto" />
              <h4 className="font-heading font-bold text-xl text-riet-navy">
                Thank You, {formData.name || 'Student'}!
              </h4>
              <p className="text-sm text-slate-600 max-w-sm mx-auto">
                Your admission enquiry has been submitted. Our counselling team will call you within 24 hours at <span className="font-semibold">{formData.phone}</span>.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Student Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-riet-gold focus:ring-1 focus:ring-riet-gold outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="10-digit number"
                    pattern="[0-9]{10}"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-riet-gold focus:ring-1 focus:ring-riet-gold outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="student@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-riet-gold focus:ring-1 focus:ring-riet-gold outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    City / State
                  </label>
                  <input
                    type="text"
                    placeholder="Jaipur, Rajasthan"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-riet-gold focus:ring-1 focus:ring-riet-gold outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Program of Interest *
                </label>
                <select
                  value={formData.course}
                  onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                  className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-riet-gold focus:ring-1 focus:ring-riet-gold outline-none bg-white"
                >
                  <option>B.Tech - Computer Science & Engineering</option>
                  <option>B.Tech - Artificial Intelligence & Data Science</option>
                  <option>B.Tech - Cyber Security</option>
                  <option>B.Tech - Internet of Things (IoT)</option>
                  <option>B.Tech - Mechanical Engineering</option>
                  <option>B.Tech - Civil Engineering</option>
                  <option>B.Tech - Electrical Engineering</option>
                  <option>MBA - Master of Business Administration</option>
                  <option>MCA - Master of Computer Applications</option>
                  <option>BCA - Bachelor of Computer Applications</option>
                  <option>BBA - Bachelor of Business Administration</option>
                  <option>M.Tech - Advanced Engineering</option>
                  <option>Ph.D. - Doctoral Research</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Questions / Remarks (Optional)
                </label>
                <textarea
                  rows="2"
                  placeholder="Ask about fee waivers, hostel availability, scholarships..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-riet-gold focus:ring-1 focus:ring-riet-gold outline-none resize-none"
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-riet-gold hover:bg-riet-gold-hover text-riet-navy font-black py-3 rounded-xl text-sm shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <span>Submit Admission Enquiry</span>
                  <Send className="w-4 h-4" />
                </button>
                <p className="text-[10px] text-center text-slate-500 mt-2">
                  🔒 Your contact information is strictly confidential and used solely for counselling.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

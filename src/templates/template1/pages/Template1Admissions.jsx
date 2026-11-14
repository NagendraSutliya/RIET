import React, { useState } from 'react';
import { CheckCircle2, ArrowRight, HelpCircle, FileText, ChevronDown, Send, Calculator, Sparkles, CheckSquare, Square, PhoneCall, Award } from 'lucide-react';
import { collegeInfo } from '../../../data/collegeData';

export default function Template1Admissions({ onOpenEnquiry }) {
  // Calculator State
  const [selectedCourse, setSelectedCourse] = useState('btech');
  const [percentage, setPercentage] = useState(86);
  const [isGirlStudent, setIsGirlStudent] = useState(false);
  const [isDefenseWard, setIsDefenseWard] = useState(false);

  // Document checklist state
  const [checkedDocs, setCheckedDocs] = useState({});

  // FAQ state
  const [activeFaq, setActiveFaq] = useState(0);
  const [faqSearch, setFaqSearch] = useState('');

  // Course Fee Matrix
  const coursesFee = {
    btech: { name: 'B.Tech (All Engineering Branches)', fee: 85000, duration: '4 Years' },
    mtech: { name: 'M.Tech (Advanced Engineering)', fee: 75000, duration: '2 Years' },
    mba: { name: 'MBA (Dual Specialization)', fee: 65000, duration: '2 Years' },
    mca: { name: 'MCA (Computer Applications)', fee: 65000, duration: '2 Years' },
    bca: { name: 'BCA (Software Engineering)', fee: 55000, duration: '3 Years' },
    bba: { name: 'BBA (Business Management)', fee: 50000, duration: '3 Years' }
  };

  const currentCourseObj = coursesFee[selectedCourse] || coursesFee.btech;

  // Calculate Scholarship
  let meritDiscountPercent = 0;
  if (percentage >= 90) meritDiscountPercent = 40;
  else if (percentage >= 80) meritDiscountPercent = 25;
  else if (percentage >= 70) meritDiscountPercent = 15;

  let extraDiscountPercent = (isGirlStudent ? 10 : 0) + (isDefenseWard ? 10 : 0);
  let totalDiscountPercent = Math.min(meritDiscountPercent + extraDiscountPercent, 60);

  const discountAmount = Math.round((currentCourseObj.fee * totalDiscountPercent) / 100);
  const finalPayable = currentCourseObj.fee - discountAmount;

  const toggleDoc = (id) => {
    setCheckedDocs(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const requiredDocuments = [
    { id: '10th', name: '10th Board Marksheet & Certificate (Date of Birth proof)' },
    { id: '12th', name: '12th Marksheet & Passing Certificate (Physics, Math mandatory for B.Tech)' },
    { id: 'reap', name: 'JEE Main Scorecard / REAP Allotment Letter (Code 1025)' },
    { id: 'transfer', name: 'Transfer Certificate (TC) & Migration Certificate' },
    { id: 'domicile', name: 'Rajasthan Domicile / Residence Certificate' },
    { id: 'photos', name: '5 Passport Sized Recent Photographs' }
  ];

  const faqs = [
    { q: "What is the REAP Code for RIET Jaipur?", a: "RIET Jaipur's official Rajasthan Engineering Admission Process (REAP) code is 1025. Students can select RIET as their preferred college during online counselling." },
    { q: "Are direct admissions available under Management Quota?", a: "Yes, 15% seats across B.Tech, MBA, MCA, BCA, and BBA are reserved for direct admission based on 10+2 / graduation academic merit. Early registration is recommended." },
    { q: "How can I apply for the Merit Scholarships?", a: "Merit scholarships (up to 50% tuition waiver) are auto-calculated during the admission counselling session based on your verified marksheet." },
    { q: "Are hostel accommodations available for outstation students?", a: "Yes, RIET has separate residential hostel blocks for boys and girls on campus, equipped with 24/7 security, AC/Air-cooled rooms, Wi-Fi, and mess facilities." },
    { q: "Does RIET facilitate education loans?", a: "Yes, RIET has tie-ups with nationalized banks (SBI, PNB, ICICI) to provide expedited education loan approval letters and document support." }
  ];

  const filteredFaqs = faqs.filter(f =>
    f.q.toLowerCase().includes(faqSearch.toLowerCase()) ||
    f.a.toLowerCase().includes(faqSearch.toLowerCase())
  );

  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <div className="bg-gradient-to-r from-riet-navy-dark via-riet-navy to-riet-navy-light text-white py-14 px-4 border-b border-riet-line">
        <div className="max-w-7xl mx-auto">
          <span className="text-xs font-bold text-riet-gold uppercase tracking-wider block mb-2">
            Admissions 2026-27 • REAP Code: 1025
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black tracking-tight text-white">
            Admissions & Scholarship Hub
          </h1>
          <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-2xl">
            Join Rajasthan's leading technical community. Explore transparent fee structures, eligibility guidelines, and interactive scholarship calculations.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-14 space-y-16">
        {/* Interactive Fee & Scholarship Calculator */}
        <div className="bg-gradient-to-br from-riet-paper to-blue-50/40 rounded-3xl border border-slate-200 p-8 shadow-sm">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="lg:w-7/12 space-y-6">
              <div>
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-riet-gold uppercase tracking-wider mb-1">
                  <Calculator className="w-4 h-4 text-riet-navy" />
                  <span>Interactive Fee Estimator</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-heading font-black text-riet-navy">
                  Calculate Your Scholarship & Net Fee
                </h2>
                <p className="text-xs text-slate-600 mt-1">
                  RIET Jaipur awards over ₹1.5 Crore annually in merit scholarships and fee waivers.
                </p>
              </div>

              {/* Course Selection */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-2">
                  1. Select Your Desired Academic Program:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs font-semibold">
                  {Object.keys(coursesFee).map(key => (
                    <button
                      key={key}
                      onClick={() => setSelectedCourse(key)}
                      className={`p-3 rounded-xl border text-left transition-all ${
                        selectedCourse === key
                          ? 'border-riet-navy bg-riet-navy text-white shadow-sm font-bold'
                          : 'border-slate-200 bg-white text-slate-700 hover:border-riet-gold'
                      }`}
                    >
                      <span>{coursesFee[key].name.split(' ')[0]}</span>
                      <span className="block text-[10px] text-slate-300 font-normal mt-0.5">
                        {coursesFee[key].duration}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Percentage Slider */}
              <div>
                <div className="flex justify-between items-center mb-1 text-xs">
                  <label className="font-bold text-slate-700">
                    2. Qualifying Exam Score (10+2 / Graduation %):
                  </label>
                  <span className="font-heading font-black text-riet-navy text-base">
                    {percentage}%
                  </span>
                </div>
                <input
                  type="range"
                  min="60"
                  max="100"
                  step="1"
                  value={percentage}
                  onChange={(e) => setPercentage(Number(e.target.value))}
                  className="w-full accent-riet-navy cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                  <span>60% (Base Eligibility)</span>
                  <span>75% (15% Waiver)</span>
                  <span>85% (25% Waiver)</span>
                  <span>90%+ (40% Waiver)</span>
                </div>
              </div>

              {/* Category Checkboxes */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-2">
                  3. Additional Special Concessions:
                </label>
                <div className="flex flex-wrap gap-4 text-xs">
                  <label className="flex items-center gap-2 cursor-pointer bg-white px-3 py-2 rounded-lg border border-slate-200">
                    <input
                      type="checkbox"
                      checked={isGirlStudent}
                      onChange={(e) => setIsGirlStudent(e.target.checked)}
                      className="rounded text-riet-navy focus:ring-riet-gold"
                    />
                    <span className="font-medium text-slate-700">Girl Student (+10% Waiver)</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer bg-white px-3 py-2 rounded-lg border border-slate-200">
                    <input
                      type="checkbox"
                      checked={isDefenseWard}
                      onChange={(e) => setIsDefenseWard(e.target.checked)}
                      className="rounded text-riet-navy focus:ring-riet-gold"
                    />
                    <span className="font-medium text-slate-700">Defense / Ex-Servicemen Ward (+10% Waiver)</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Calculated Fee Summary Card */}
            <div className="lg:w-5/12 bg-white rounded-2xl border-2 border-riet-navy p-6 shadow-lift space-y-4 w-full">
              <div className="border-b border-slate-100 pb-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded">
                  Instant Estimate Generated
                </span>
                <h3 className="font-heading font-black text-lg text-riet-navy mt-1">
                  {currentCourseObj.name}
                </h3>
              </div>

              <div className="space-y-2 text-xs">
                <div className="flex justify-between text-slate-500">
                  <span>Standard Annual Tuition Fee:</span>
                  <span className="font-semibold text-slate-700">₹{currentCourseObj.fee.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-emerald-700 font-semibold">
                  <span>Total Scholarship Applied ({totalDiscountPercent}%):</span>
                  <span>- ₹{discountAmount.toLocaleString()}</span>
                </div>
                <div className="border-t border-dashed border-slate-200 pt-2 flex justify-between items-baseline">
                  <span className="font-heading font-black text-slate-800 text-sm">Net Payable Annual Fee:</span>
                  <span className="font-heading font-black text-2xl text-riet-navy">
                    ₹{finalPayable.toLocaleString()}
                  </span>
                </div>
                <p className="text-[10px] text-slate-400">
                  * Payable in two equal semester installments. Hostel, exam, and transport fees extra as applicable.
                </p>
              </div>

              <button
                onClick={onOpenEnquiry}
                className="w-full bg-riet-gold hover:bg-riet-gold-hover text-riet-navy font-black py-3 rounded-xl text-xs shadow-md transition-all flex items-center justify-center gap-2"
              >
                <span>Claim This Scholarship</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* 4-Step Process & Documents Checklist */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Steps Timeline (6 Cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs font-bold text-riet-gold uppercase tracking-wider block mb-1">
                Step-by-Step
              </span>
              <h2 className="text-2xl sm:text-3xl font-heading font-black text-riet-navy">
                Admission Workflow
              </h2>
            </div>

            <div className="space-y-4">
              {[
                { step: "01", title: "Submit Online Enquiry / Registration", desc: "Fill the admission enquiry form online or visit the campus admission cell at Bhankrota." },
                { step: "02", title: "Counselling & REAP Code 1025", desc: "Select RIET Jaipur (REAP Code: 1025) in Centralized Admission or report for direct merit round." },
                { step: "03", title: "Document Verification", desc: "Verify 10th, 12th, Domicile, and Transfer certificates with our admissions registrar." },
                { step: "04", title: "Fee Deposit & Seat Confirmation", desc: "Deposit semester tuition fee via NetBanking, UPI, or Bank DD and receive your student kit." }
              ].map((s, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-xl border border-slate-200 bg-riet-paper">
                  <div className="w-10 h-10 rounded-full bg-riet-navy text-riet-gold font-heading font-black text-sm flex items-center justify-center shrink-0">
                    {s.step}
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-sm text-riet-navy">{s.title}</h4>
                    <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Document Checklist (6 Cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs font-bold text-riet-gold uppercase tracking-wider block mb-1">
                Preparation Guide
              </span>
              <h2 className="text-2xl sm:text-3xl font-heading font-black text-riet-navy">
                Required Documents Checklist
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Tick the documents you have prepared for verification:
              </p>
            </div>

            <div className="space-y-2.5">
              {requiredDocuments.map((doc) => {
                const isChecked = !!checkedDocs[doc.id];
                return (
                  <div
                    key={doc.id}
                    onClick={() => toggleDoc(doc.id)}
                    className={`p-3.5 rounded-xl border flex items-center gap-3 cursor-pointer transition-all ${
                      isChecked
                        ? 'border-emerald-300 bg-emerald-50/60 text-emerald-900'
                        : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    {isChecked ? (
                      <CheckSquare className="w-5 h-5 text-emerald-600 shrink-0" />
                    ) : (
                      <Square className="w-5 h-5 text-slate-400 shrink-0" />
                    )}
                    <span className="text-xs font-medium">{doc.name}</span>
                  </div>
                );
              })}
            </div>

            <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 text-xs text-blue-900 flex items-center justify-between">
              <span>Have questions about eligibility or documents?</span>
              <a
                href={`tel:${collegeInfo.phones[0]}`}
                className="font-bold text-riet-navy hover:underline flex items-center gap-1 shrink-0"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Call Helpline</span>
              </a>
            </div>
          </div>
        </div>

        {/* Searchable Admissions FAQs */}
        <div className="pt-8 border-t border-slate-200 max-w-4xl mx-auto space-y-6">
          <div className="text-center">
            <span className="text-xs font-bold text-riet-gold uppercase tracking-wider block mb-1">
              Common Questions
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-black text-riet-navy">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {filteredFaqs.map((faq, i) => {
              const isOpen = activeFaq === i;
              return (
                <div
                  key={i}
                  className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-sm"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : i)}
                    className="w-full p-4 px-5 flex items-center justify-between text-left font-heading font-bold text-xs sm:text-sm text-riet-navy hover:bg-slate-50 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="p-5 pt-0 text-xs text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

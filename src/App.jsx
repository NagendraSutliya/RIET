import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import TemplateSwitcher from './components/TemplateSwitcher';
import TopUtilityBar from './components/TopUtilityBar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import EnquiryModal from './components/EnquiryModal';
import LoginModal from './components/LoginModal';
import DocumentModal from './components/DocumentModal';
import ScrollToTop from './components/ScrollToTop';

// Template 1 Pages
import Template1Home from './templates/template1/Template1Home';
import Template1About from './templates/template1/Template1About';
import Template1Academics from './templates/template1/Template1Academics';
import Template1Department from './templates/template1/Template1Department';
import Template1Admissions from './templates/template1/Template1Admissions';
import Template1Placements from './templates/template1/Template1Placements';
import Template1CampusLife from './templates/template1/Template1CampusLife';
import Template1Research from './templates/template1/Template1Research';
import Template1NewsEvents from './templates/template1/Template1NewsEvents';
import Template1Contact from './templates/template1/Template1Contact';

export default function App() {
  const [activeTemplate, setActiveTemplate] = useState('template1');
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  
  // Login Portal Modal State
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [loginRole, setLoginRole] = useState('student');

  // Document Viewer / Download Modal State
  const [isDocOpen, setIsDocOpen] = useState(false);
  const [docTitle, setDocTitle] = useState('');

  const handleOpenLogin = (role = 'student') => {
    setLoginRole(role);
    setIsLoginOpen(true);
  };

  const handleOpenDoc = (title) => {
    setDocTitle(title);
    setIsDocOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-riet-paper text-riet-ink font-sans">
      <ScrollToTop />

      {/* 1. Global Header: Template Switcher for comparing UI designs */}
      <TemplateSwitcher
        activeTemplate={activeTemplate}
        onSelectTemplate={(tpl) => setActiveTemplate(tpl)}
        onOpenEnquiry={() => setIsEnquiryOpen(true)}
      />

      {activeTemplate === 'template1' ? (
        <>
          {/* Top Utility Contact Bar */}
          <TopUtilityBar
            onOpenEnquiry={() => setIsEnquiryOpen(true)}
          />

          {/* Institutional Brand Navbar */}
          <Navbar onOpenEnquiry={() => setIsEnquiryOpen(true)} />

          {/* Main Routing Body */}
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Template1Home onOpenEnquiry={() => setIsEnquiryOpen(true)} />} />
              <Route path="/about" element={<Template1About onOpenEnquiry={() => setIsEnquiryOpen(true)} onOpenDocument={handleOpenDoc} />} />
              <Route path="/academics" element={<Template1Academics onOpenEnquiry={() => setIsEnquiryOpen(true)} onOpenDocument={handleOpenDoc} />} />
              <Route path="/departments" element={<Template1Department onOpenEnquiry={() => setIsEnquiryOpen(true)} onOpenDocument={handleOpenDoc} />} />
              <Route path="/departments/:deptId" element={<Template1Department onOpenEnquiry={() => setIsEnquiryOpen(true)} onOpenDocument={handleOpenDoc} />} />
              <Route path="/admissions" element={<Template1Admissions onOpenEnquiry={() => setIsEnquiryOpen(true)} onOpenDocument={handleOpenDoc} />} />
              <Route path="/placements" element={<Template1Placements onOpenEnquiry={() => setIsEnquiryOpen(true)} onOpenDocument={handleOpenDoc} />} />
              <Route path="/campus-life" element={<Template1CampusLife onOpenEnquiry={() => setIsEnquiryOpen(true)} />} />
              <Route path="/research-innovation" element={<Template1Research onOpenEnquiry={() => setIsEnquiryOpen(true)} onOpenDocument={handleOpenDoc} />} />
              <Route path="/news-events" element={<Template1NewsEvents onOpenEnquiry={() => setIsEnquiryOpen(true)} onOpenDocument={handleOpenDoc} />} />
              <Route path="/contact" element={<Template1Contact onOpenEnquiry={() => setIsEnquiryOpen(true)} />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>

          {/* Full Institutional Footer */}
          <Footer
            onOpenEnquiry={() => setIsEnquiryOpen(true)}
            onOpenDocument={handleOpenDoc}
          />
        </>
      ) : (
        /* Placeholder for other templates when switching */
        <div className="flex-1 flex items-center justify-center p-8 bg-slate-100">
          <div className="max-w-lg bg-white rounded-2xl p-8 border border-slate-200 shadow-lift text-center space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center mx-auto text-xl font-bold">
              🛠️
            </div>
            <h2 className="font-heading font-black text-2xl text-riet-navy">
              {activeTemplate === 'template2' ? 'Template 2: Clean Minimal' : 'Template 3: Corporate Grid'}
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              As per instructions, we are currently prioritizing and building the complete primary template design (Template 1).
            </p>
            <p className="text-xs text-slate-500">
              You can switch back to Template 1 anytime using the header switcher bar above or by clicking below:
            </p>
            <div className="pt-2">
              <button
                onClick={() => setActiveTemplate('template1')}
                className="bg-riet-navy hover:bg-riet-navy-light text-riet-gold font-bold px-6 py-2.5 rounded-lg text-xs shadow-md transition-colors"
              >
                ← Return to Template 1 (Active Design)
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Global Admission Enquiry Modal */}
      <EnquiryModal
        isOpen={isEnquiryOpen}
        onClose={() => setIsEnquiryOpen(false)}
      />

      {/* Official Student & Faculty ERP Login Modal */}
      <LoginModal
        isOpen={isLoginOpen}
        initialTab={loginRole}
        onClose={() => setIsLoginOpen(false)}
      />

      {/* Document & Syllabus PDF Viewer / Download Modal */}
      <DocumentModal
        isOpen={isDocOpen}
        docTitle={docTitle}
        onClose={() => setIsDocOpen(false)}
      />
    </div>
  );
}

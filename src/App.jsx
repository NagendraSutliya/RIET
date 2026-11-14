import React, { useState } from 'react';
import TemplateSwitcher from './components/TemplateSwitcher';
import EnquiryModal from './components/EnquiryModal';
import LoginModal from './components/LoginModal';
import DocumentModal from './components/DocumentModal';
import ScrollToTop from './components/ScrollToTop';

// Template Layouts (Each isolated in its own separate directory)
import Template1Layout from './templates/template1';
import Template2Layout from './templates/template2';
import Template3Layout from './templates/template3';
import Template4Layout from './templates/template4';
import Template5Layout from './templates/template5';
import Template6Layout from './templates/template6';
import Template7Layout from './templates/template7';

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

      {/* Global Header: Template Switcher for comparing UI designs */}
      <TemplateSwitcher
        activeTemplate={activeTemplate}
        onSelectTemplate={(tpl) => setActiveTemplate(tpl)}
        onOpenEnquiry={() => setIsEnquiryOpen(true)}
      />

      {/* Isolated Template Layouts */}
      {activeTemplate === 'template1' && (
        <Template1Layout
          onOpenEnquiry={() => setIsEnquiryOpen(true)}
          onOpenDocument={handleOpenDoc}
        />
      )}
      {activeTemplate === 'template2' && (
        <Template2Layout
          onOpenEnquiry={() => setIsEnquiryOpen(true)}
        />
      )}
      {activeTemplate === 'template3' && (
        <Template3Layout
          onOpenEnquiry={() => setIsEnquiryOpen(true)}
        />
      )}
      {activeTemplate === 'template4' && (
        <Template4Layout
          onOpenEnquiry={() => setIsEnquiryOpen(true)}
        />
      )}
      {activeTemplate === 'template5' && (
        <Template5Layout
          onOpenEnquiry={() => setIsEnquiryOpen(true)}
        />
      )}
      {activeTemplate === 'template6' && (
        <Template6Layout
          onOpenEnquiry={() => setIsEnquiryOpen(true)}
        />
      )}
      {activeTemplate === 'template7' && (
        <Template7Layout
          onOpenEnquiry={() => setIsEnquiryOpen(true)}
        />
      )}

      {/* Global Modals */}
      <EnquiryModal
        isOpen={isEnquiryOpen}
        onClose={() => setIsEnquiryOpen(false)}
      />

      <LoginModal
        isOpen={isLoginOpen}
        initialTab={loginRole}
        onClose={() => setIsLoginOpen(false)}
      />

      <DocumentModal
        isOpen={isDocOpen}
        docTitle={docTitle}
        onClose={() => setIsDocOpen(false)}
      />
    </div>
  );
}

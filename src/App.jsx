import React, { useState } from 'react';
import { Layout } from 'lucide-react';
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
import Template8Layout from './templates/template8';

export default function App() {
  const [activeTemplate, setActiveTemplate] = useState('template8');
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
    <div className="min-h-screen flex flex-col bg-riet-paper text-riet-ink font-sans w-full max-w-full overflow-x-hidden">
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
      {activeTemplate === 'template8' && (
        <Template8Layout
          onOpenEnquiry={() => setIsEnquiryOpen(true)}
          onOpenDocument={handleOpenDoc}
        />
      )}
      {activeTemplate === 'template9' && (
        <div className="flex-1 flex flex-col items-center justify-center p-12 text-center min-h-[60vh]">
          <div className="w-16 h-16 rounded-2xl bg-riet-navy/10 text-riet-navy flex items-center justify-center mb-4">
            <Layout className="w-8 h-8 text-riet-navy" />
          </div>
          <h2 className="text-2xl font-bold text-riet-navy mb-2">
            Template 9
          </h2>
          <p className="text-sm text-riet-muted max-w-md">
            Template option ready. Awaiting design requirements.
          </p>
        </div>
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

import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Template 2 Layout Components
import Template2TopBar from './components/Template2TopBar';
import Template2Header from './components/Template2Header';
import Template2Footer from './components/Template2Footer';

// Template 2 Pages
import Template2Home from './pages/Template2Home';
import Template2About from './pages/Template2About';
import Template2Leadership from './pages/Template2Leadership';
import Template2Approvals from './pages/Template2Approvals';
import Template2Academics from './pages/Template2Academics';
import Template2Departments from './pages/Template2Departments';
import Template2DepartmentDetail from './pages/Template2DepartmentDetail';
import Template2Admissions from './pages/Template2Admissions';
import Template2FeesScholarships from './pages/Template2FeesScholarships';
import Template2Placements from './pages/Template2Placements';
import Template2CampusLife from './pages/Template2CampusLife';
import Template2Facilities from './pages/Template2Facilities';
import Template2Research from './pages/Template2Research';
import Template2Incubation from './pages/Template2Incubation';
import Template2NewsEvents from './pages/Template2NewsEvents';
import Template2Gallery from './pages/Template2Gallery';
import Template2StudentCorner from './pages/Template2StudentCorner';
import Template2MandatoryDisclosure from './pages/Template2MandatoryDisclosure';
import Template2Contact from './pages/Template2Contact';

export default function Template2Layout({ onOpenEnquiry, onOpenDocument }) {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 font-sans selection:bg-[#28679e] selection:text-white w-full max-w-full overflow-x-hidden">
      {/* 1. Template 2 Top Utility Strip */}
      <Template2TopBar />

      {/* 2. Template 2 Clean Modern Header & Navigation */}
      <Template2Header onOpenEnquiry={onOpenEnquiry} />

      {/* 3. Main Routing Body */}
      <main className="flex-1 w-full max-w-full overflow-x-hidden">
        <Routes>
          <Route path="/" element={<Template2Home onOpenEnquiry={onOpenEnquiry} />} />
          <Route path="/about" element={<Template2About onOpenEnquiry={onOpenEnquiry} />} />
          <Route path="/leadership" element={<Template2Leadership onOpenEnquiry={onOpenEnquiry} />} />
          <Route path="/approvals" element={<Template2Approvals onOpenEnquiry={onOpenEnquiry} />} />
          <Route path="/academics" element={<Template2Academics onOpenEnquiry={onOpenEnquiry} />} />
          <Route path="/departments" element={<Template2Departments onOpenEnquiry={onOpenEnquiry} />} />
          <Route path="/department-detail" element={<Template2DepartmentDetail onOpenEnquiry={onOpenEnquiry} />} />
          <Route path="/departments/:deptId" element={<Template2DepartmentDetail onOpenEnquiry={onOpenEnquiry} />} />
          <Route path="/admissions" element={<Template2Admissions onOpenEnquiry={onOpenEnquiry} />} />
          <Route path="/fees-scholarships" element={<Template2FeesScholarships onOpenEnquiry={onOpenEnquiry} />} />
          <Route path="/placements" element={<Template2Placements onOpenEnquiry={onOpenEnquiry} />} />
          <Route path="/campus-life" element={<Template2CampusLife onOpenEnquiry={onOpenEnquiry} />} />
          <Route path="/facilities" element={<Template2Facilities onOpenEnquiry={onOpenEnquiry} />} />
          <Route path="/research-innovation" element={<Template2Research onOpenEnquiry={onOpenEnquiry} />} />
          <Route path="/incubation" element={<Template2Incubation onOpenEnquiry={onOpenEnquiry} />} />
          <Route path="/news-events" element={<Template2NewsEvents onOpenEnquiry={onOpenEnquiry} />} />
          <Route path="/gallery" element={<Template2Gallery onOpenEnquiry={onOpenEnquiry} />} />
          <Route path="/student-corner" element={<Template2StudentCorner onOpenEnquiry={onOpenEnquiry} />} />
          <Route path="/mandatory-disclosure" element={<Template2MandatoryDisclosure onOpenEnquiry={onOpenEnquiry} />} />
          <Route path="/contact" element={<Template2Contact onOpenEnquiry={onOpenEnquiry} />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {/* 4. Template 2 Clean Footer */}
      <Template2Footer onOpenEnquiry={onOpenEnquiry} />
    </div>
  );
}

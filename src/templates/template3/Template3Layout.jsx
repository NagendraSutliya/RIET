import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Template 3 Layout Components
import Template3TopBar from './components/Template3TopBar';
import Template3Header from './components/Template3Header';
import Template3Footer from './components/Template3Footer';

// Template 3 Pages
import Template3Home from './pages/Template3Home';
import Template3About from './pages/Template3About';
import Template3Academics from './pages/Template3Academics';
import Template3Admissions from './pages/Template3Admissions';
import Template3Courses from './pages/Template3Courses';
import Template3Departments from './pages/Template3Departments';
import Template3DepartmentDetail from './pages/Template3DepartmentDetail';
import Template3Placements from './pages/Template3Placements';
import Template3Campus from './pages/Template3Campus';
import Template3News from './pages/Template3News';
import Template3Contact from './pages/Template3Contact';

export default function Template3Layout({ onOpenEnquiry, onOpenDocument }) {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#1A2233] font-sans selection:bg-[#F2A900] selection:text-[#0E2A5C] w-full max-w-full overflow-x-hidden">
      {/* 1. Template 3 Top Utility Bar */}
      <Template3TopBar />

      {/* 2. Template 3 Header & Navigation */}
      <Template3Header onOpenEnquiry={onOpenEnquiry} />

      {/* 3. Main Routing Body */}
      <main className="flex-1 w-full max-w-full overflow-x-hidden">
        <Routes>
          <Route path="/" element={<Template3Home onOpenEnquiry={onOpenEnquiry} />} />
          <Route path="/about" element={<Template3About onOpenEnquiry={onOpenEnquiry} />} />
          <Route path="/academics" element={<Template3Academics onOpenEnquiry={onOpenEnquiry} />} />
          <Route path="/admissions" element={<Template3Admissions onOpenEnquiry={onOpenEnquiry} />} />
          <Route path="/courses" element={<Template3Courses onOpenEnquiry={onOpenEnquiry} />} />
          <Route path="/departments" element={<Template3Departments onOpenEnquiry={onOpenEnquiry} />} />
          <Route path="/department-detail" element={<Template3DepartmentDetail onOpenEnquiry={onOpenEnquiry} />} />
          <Route path="/departments/:deptId" element={<Template3DepartmentDetail onOpenEnquiry={onOpenEnquiry} />} />
          <Route path="/placements" element={<Template3Placements onOpenEnquiry={onOpenEnquiry} />} />
          <Route path="/campus" element={<Template3Campus onOpenEnquiry={onOpenEnquiry} />} />
          <Route path="/news" element={<Template3News onOpenEnquiry={onOpenEnquiry} />} />
          <Route path="/contact" element={<Template3Contact onOpenEnquiry={onOpenEnquiry} />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {/* 4. Template 3 Footer */}
      <Template3Footer onOpenEnquiry={onOpenEnquiry} />
    </div>
  );
}

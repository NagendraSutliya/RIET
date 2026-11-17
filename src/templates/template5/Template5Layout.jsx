import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Template 5 Components
import Template5TopBar from './components/Template5TopBar';
import Template5Header from './components/Template5Header';
import Template5Footer from './components/Template5Footer';

// Template 5 Pages
import Template5Home from './pages/Template5Home';
import Template5About from './pages/Template5About';
import Template5Academics from './pages/Template5Academics';
import Template5Admissions from './pages/Template5Admissions';
import Template5Courses from './pages/Template5Courses';
import Template5Departments from './pages/Template5Departments';
import Template5DepartmentDetail from './pages/Template5DepartmentDetail';
import Template5Placements from './pages/Template5Placements';
import Template5Campus from './pages/Template5Campus';
import Template5News from './pages/Template5News';
import Template5Contact from './pages/Template5Contact';

export default function Template5Layout({ onOpenEnquiry, onOpenDocument }) {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#16262B] font-sans selection:bg-[#F58B3A] selection:text-[#0A3340] w-full max-w-full overflow-x-hidden">
      {/* 1. Top Utility Bar */}
      <Template5TopBar />

      {/* 2. Sticky Header with Centered Brand and Pill Navigation */}
      <Template5Header onOpenEnquiry={onOpenEnquiry} />

      {/* 3. Main Route Body */}
      <main className="flex-1 w-full max-w-full overflow-x-hidden">
        <Routes>
          <Route path="/" element={<Template5Home onOpenEnquiry={onOpenEnquiry} />} />
          <Route path="/about" element={<Template5About onOpenEnquiry={onOpenEnquiry} />} />
          <Route path="/academics" element={<Template5Academics onOpenEnquiry={onOpenEnquiry} />} />
          <Route path="/admissions" element={<Template5Admissions onOpenEnquiry={onOpenEnquiry} />} />
          <Route path="/courses" element={<Template5Courses onOpenEnquiry={onOpenEnquiry} />} />
          <Route path="/departments" element={<Template5Departments onOpenEnquiry={onOpenEnquiry} />} />
          <Route path="/department-detail" element={<Template5DepartmentDetail onOpenEnquiry={onOpenEnquiry} />} />
          <Route path="/departments/:deptId" element={<Template5DepartmentDetail onOpenEnquiry={onOpenEnquiry} />} />
          <Route path="/placements" element={<Template5Placements onOpenEnquiry={onOpenEnquiry} />} />
          <Route path="/campus" element={<Template5Campus onOpenEnquiry={onOpenEnquiry} />} />
          <Route path="/news" element={<Template5News onOpenEnquiry={onOpenEnquiry} />} />
          <Route path="/contact" element={<Template5Contact onOpenEnquiry={onOpenEnquiry} />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {/* 4. Deep Teal Footer */}
      <Template5Footer onOpenEnquiry={onOpenEnquiry} />
    </div>
  );
}

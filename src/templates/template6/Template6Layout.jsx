import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Template 6 Components
import Template6TopBar from './components/Template6TopBar';
import Template6Header from './components/Template6Header';
import Template6Footer from './components/Template6Footer';

// Template 6 Pages
import Template6Home from './pages/Template6Home';
import Template6About from './pages/Template6About';
import Template6Academics from './pages/Template6Academics';
import Template6Admissions from './pages/Template6Admissions';
import Template6Courses from './pages/Template6Courses';
import Template6Departments from './pages/Template6Departments';
import Template6DepartmentDetail from './pages/Template6DepartmentDetail';
import Template6Placements from './pages/Template6Placements';
import Template6Campus from './pages/Template6Campus';
import Template6News from './pages/Template6News';
import Template6Contact from './pages/Template6Contact';

export default function Template6Layout({ onOpenEnquiry, onOpenDocument }) {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#1C1B22] font-sans selection:bg-[#6B1724] selection:text-white w-full max-w-full overflow-x-hidden">
      {/* 1. Top Utility Bar */}
      <Template6TopBar />

      {/* 2. Classic University Header & Navigation */}
      <Template6Header onOpenEnquiry={onOpenEnquiry} />

      {/* 3. Main Routes */}
      <main className="flex-1 w-full max-w-full overflow-x-hidden">
        <Routes>
          <Route path="/" element={<Template6Home onOpenEnquiry={onOpenEnquiry} />} />
          <Route path="/about" element={<Template6About onOpenEnquiry={onOpenEnquiry} />} />
          <Route path="/academics" element={<Template6Academics onOpenEnquiry={onOpenEnquiry} />} />
          <Route path="/admissions" element={<Template6Admissions onOpenEnquiry={onOpenEnquiry} />} />
          <Route path="/courses" element={<Template6Courses onOpenEnquiry={onOpenEnquiry} />} />
          <Route path="/departments" element={<Template6Departments onOpenEnquiry={onOpenEnquiry} />} />
          <Route path="/department-detail" element={<Template6DepartmentDetail onOpenEnquiry={onOpenEnquiry} />} />
          <Route path="/departments/:deptId" element={<Template6DepartmentDetail onOpenEnquiry={onOpenEnquiry} />} />
          <Route path="/placements" element={<Template6Placements onOpenEnquiry={onOpenEnquiry} />} />
          <Route path="/campus" element={<Template6Campus onOpenEnquiry={onOpenEnquiry} />} />
          <Route path="/news" element={<Template6News onOpenEnquiry={onOpenEnquiry} />} />
          <Route path="/contact" element={<Template6Contact onOpenEnquiry={onOpenEnquiry} />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {/* 4. Elegant Footer */}
      <Template6Footer onOpenEnquiry={onOpenEnquiry} />
    </div>
  );
}

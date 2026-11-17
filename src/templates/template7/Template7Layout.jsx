import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Kingster Components
import Template7TopBar from './components/Template7TopBar';
import Template7Header from './components/Template7Header';
import Template7Footer from './components/Template7Footer';

// Kingster Pages
import Template7Home from './pages/Template7Home';
import Template7About from './pages/Template7About';
import Template7Academics from './pages/Template7Academics';
import Template7Admissions from './pages/Template7Admissions';
import Template7Courses from './pages/Template7Courses';
import Template7Departments from './pages/Template7Departments';
import Template7DepartmentDetail from './pages/Template7DepartmentDetail';
import Template7Placements from './pages/Template7Placements';
import Template7Campus from './pages/Template7Campus';
import Template7News from './pages/Template7News';
import Template7Contact from './pages/Template7Contact';

export default function Template7Layout({ onOpenEnquiry, onOpenDocument }) {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#2a2a2a] font-sans selection:bg-[#d2973b] selection:text-white w-full max-w-full overflow-x-hidden">
      {/* 1. Kingster Top Contact Bar */}
      <Template7TopBar />

      {/* 2. Kingster Collegiate Main Navigation */}
      <Template7Header onOpenEnquiry={onOpenEnquiry} />

      {/* 3. Main Route Container */}
      <main className="flex-1 w-full max-w-full overflow-x-hidden">
        <Routes>
          <Route path="/" element={<Template7Home onOpenEnquiry={onOpenEnquiry} />} />
          <Route path="/about" element={<Template7About onOpenEnquiry={onOpenEnquiry} />} />
          <Route path="/academics" element={<Template7Academics onOpenEnquiry={onOpenEnquiry} />} />
          <Route path="/admissions" element={<Template7Admissions onOpenEnquiry={onOpenEnquiry} />} />
          <Route path="/courses" element={<Template7Courses onOpenEnquiry={onOpenEnquiry} />} />
          <Route path="/departments" element={<Template7Departments onOpenEnquiry={onOpenEnquiry} />} />
          <Route path="/department-detail" element={<Template7DepartmentDetail onOpenEnquiry={onOpenEnquiry} />} />
          <Route path="/departments/:deptId" element={<Template7DepartmentDetail onOpenEnquiry={onOpenEnquiry} />} />
          <Route path="/placements" element={<Template7Placements onOpenEnquiry={onOpenEnquiry} />} />
          <Route path="/campus" element={<Template7Campus onOpenEnquiry={onOpenEnquiry} />} />
          <Route path="/news" element={<Template7News onOpenEnquiry={onOpenEnquiry} />} />
          <Route path="/contact" element={<Template7Contact onOpenEnquiry={onOpenEnquiry} />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {/* 4. Kingster 4-Column Collegiate Footer */}
      <Template7Footer onOpenEnquiry={onOpenEnquiry} />
    </div>
  );
}

import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Kingster Components (Template 8)
import Template8TopBar from './components/Template8TopBar';
import Template8Header from './components/Template8Header';
import Template8Footer from './components/Template8Footer';

// Kingster Pages (Template 8)
import Template8Home from './pages/Template8Home';
import Template8About from './pages/Template8About';
import Template8Academics from './pages/Template8Academics';
import Template8Admissions from './pages/Template8Admissions';
import Template8Courses from './pages/Template8Courses';
import Template8Departments from './pages/Template8Departments';
import Template8DepartmentDetail from './pages/Template8DepartmentDetail';
import Template8Placements from './pages/Template8Placements';
import Template8Campus from './pages/Template8Campus';
import Template8News from './pages/Template8News';
import Template8Contact from './pages/Template8Contact';

export default function Template8Layout({ onOpenEnquiry, onOpenDocument }) {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#2a2a2a] font-sans selection:bg-[#3db166] selection:text-white w-full max-w-full overflow-x-hidden">
      {/* 1. Kingster Top Contact Bar */}
      <Template8TopBar onOpenEnquiry={onOpenEnquiry} />

      {/* 2. Kingster Collegiate Main Navigation */}
      <Template8Header onOpenEnquiry={onOpenEnquiry} />

      {/* 3. Main Route Container */}
      <main className="flex-1 w-full max-w-full overflow-x-hidden">
        <Routes>
          <Route path="/" element={<Template8Home onOpenEnquiry={onOpenEnquiry} />} />
          <Route path="/about" element={<Template8About onOpenEnquiry={onOpenEnquiry} />} />
          <Route path="/academics" element={<Template8Academics onOpenEnquiry={onOpenEnquiry} />} />
          <Route path="/admissions" element={<Template8Admissions onOpenEnquiry={onOpenEnquiry} />} />
          <Route path="/courses" element={<Template8Courses onOpenEnquiry={onOpenEnquiry} />} />
          <Route path="/departments" element={<Template8Departments onOpenEnquiry={onOpenEnquiry} />} />
          <Route path="/department-detail" element={<Template8DepartmentDetail onOpenEnquiry={onOpenEnquiry} />} />
          <Route path="/departments/:deptId" element={<Template8DepartmentDetail onOpenEnquiry={onOpenEnquiry} />} />
          <Route path="/placements" element={<Template8Placements onOpenEnquiry={onOpenEnquiry} />} />
          <Route path="/campus" element={<Template8Campus onOpenEnquiry={onOpenEnquiry} />} />
          <Route path="/news" element={<Template8News onOpenEnquiry={onOpenEnquiry} />} />
          <Route path="/contact" element={<Template8Contact onOpenEnquiry={onOpenEnquiry} />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {/* 4. Kingster 4-Column Collegiate Footer */}
      <Template8Footer onOpenEnquiry={onOpenEnquiry} />
    </div>
  );
}

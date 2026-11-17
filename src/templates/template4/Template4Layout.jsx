import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Template 4 Components
import Template4Sidebar from './components/Template4Sidebar';
import Template4Footer from './components/Template4Footer';

// Template 4 Pages
import Template4Home from './pages/Template4Home';
import Template4About from './pages/Template4About';
import Template4Academics from './pages/Template4Academics';
import Template4Admissions from './pages/Template4Admissions';
import Template4Courses from './pages/Template4Courses';
import Template4Departments from './pages/Template4Departments';
import Template4DepartmentDetail from './pages/Template4DepartmentDetail';
import Template4Placements from './pages/Template4Placements';
import Template4Campus from './pages/Template4Campus';
import Template4News from './pages/Template4News';
import Template4Contact from './pages/Template4Contact';

export default function Template4Layout({ onOpenEnquiry, onOpenDocument }) {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-[#F6F3F4] text-[#1C1B22] font-manrope w-full max-w-full overflow-x-hidden selection:bg-[#B3263A] selection:text-white">
      {/* 1. Left Sidebar Navigation (Desktop) & Top Header (Mobile) */}
      <Template4Sidebar onOpenEnquiry={onOpenEnquiry} />

      {/* 2. Main Content Column */}
      <div className="flex-1 flex flex-col min-w-0 w-full overflow-x-hidden">
        <main className="flex-1 w-full max-w-full overflow-x-hidden bg-white">
          <Routes>
            <Route path="/" element={<Template4Home onOpenEnquiry={onOpenEnquiry} />} />
            <Route path="/about" element={<Template4About onOpenEnquiry={onOpenEnquiry} />} />
            <Route path="/academics" element={<Template4Academics onOpenEnquiry={onOpenEnquiry} />} />
            <Route path="/admissions" element={<Template4Admissions onOpenEnquiry={onOpenEnquiry} />} />
            <Route path="/courses" element={<Template4Courses onOpenEnquiry={onOpenEnquiry} />} />
            <Route path="/departments" element={<Template4Departments onOpenEnquiry={onOpenEnquiry} />} />
            <Route path="/department-detail" element={<Template4DepartmentDetail onOpenEnquiry={onOpenEnquiry} />} />
            <Route path="/departments/:deptId" element={<Template4DepartmentDetail onOpenEnquiry={onOpenEnquiry} />} />
            <Route path="/placements" element={<Template4Placements onOpenEnquiry={onOpenEnquiry} />} />
            <Route path="/campus" element={<Template4Campus onOpenEnquiry={onOpenEnquiry} />} />
            <Route path="/news" element={<Template4News onOpenEnquiry={onOpenEnquiry} />} />
            <Route path="/contact" element={<Template4Contact onOpenEnquiry={onOpenEnquiry} />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* 3. Footer */}
        <Template4Footer onOpenEnquiry={onOpenEnquiry} />
      </div>
    </div>
  );
}

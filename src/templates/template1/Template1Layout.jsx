import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Template 1 Specific Layout Components
import TopUtilityBar from './components/TopUtilityBar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Template 1 Specific Pages
import Template1Home from './pages/Template1Home';
import Template1About from './pages/Template1About';
import Template1Academics from './pages/Template1Academics';
import Template1Department from './pages/Template1Department';
import Template1Admissions from './pages/Template1Admissions';
import Template1Placements from './pages/Template1Placements';
import Template1CampusLife from './pages/Template1CampusLife';
import Template1Research from './pages/Template1Research';
import Template1NewsEvents from './pages/Template1NewsEvents';
import Template1Contact from './pages/Template1Contact';

export default function Template1Layout({ onOpenEnquiry, onOpenDocument }) {
  return (
    <div className="min-h-screen flex flex-col bg-riet-paper text-riet-ink font-sans">
      {/* Top Utility Contact Bar */}
      <TopUtilityBar onOpenEnquiry={onOpenEnquiry} />

      {/* Institutional Brand Navbar */}
      <Navbar onOpenEnquiry={onOpenEnquiry} />

      {/* Main Routing Body for Template 1 */}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Template1Home onOpenEnquiry={onOpenEnquiry} />} />
          <Route path="/about" element={<Template1About onOpenEnquiry={onOpenEnquiry} onOpenDocument={onOpenDocument} />} />
          <Route path="/academics" element={<Template1Academics onOpenEnquiry={onOpenEnquiry} onOpenDocument={onOpenDocument} />} />
          <Route path="/departments" element={<Template1Department onOpenEnquiry={onOpenEnquiry} onOpenDocument={onOpenDocument} />} />
          <Route path="/departments/:deptId" element={<Template1Department onOpenEnquiry={onOpenEnquiry} onOpenDocument={onOpenDocument} />} />
          <Route path="/admissions" element={<Template1Admissions onOpenEnquiry={onOpenEnquiry} onOpenDocument={onOpenDocument} />} />
          <Route path="/placements" element={<Template1Placements onOpenEnquiry={onOpenEnquiry} onOpenDocument={onOpenDocument} />} />
          <Route path="/campus-life" element={<Template1CampusLife onOpenEnquiry={onOpenEnquiry} />} />
          <Route path="/research-innovation" element={<Template1Research onOpenEnquiry={onOpenEnquiry} onOpenDocument={onOpenDocument} />} />
          <Route path="/news-events" element={<Template1NewsEvents onOpenEnquiry={onOpenEnquiry} onOpenDocument={onOpenDocument} />} />
          <Route path="/contact" element={<Template1Contact onOpenEnquiry={onOpenEnquiry} />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {/* Full Institutional Footer */}
      <Footer onOpenEnquiry={onOpenEnquiry} onOpenDocument={onOpenDocument} />
    </div>
  );
}

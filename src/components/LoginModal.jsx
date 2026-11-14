import React, { useState } from 'react';
import { X, Lock, User, GraduationCap, ShieldCheck, CheckCircle2, AlertCircle } from 'lucide-react';

export default function LoginModal({ isOpen, onClose, initialTab = 'student' }) {
  const [activeTab, setActiveTab] = useState(initialTab);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleLogin = (e) => {
    e.preventDefault();
    if (!username || !password) {
      setError('Please enter both ID and password');
      return;
    }
    setError('');
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
    setPassword('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-fade-in">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl border border-slate-100 overflow-hidden relative">
        {/* Header */}
        <div className="bg-gradient-to-r from-riet-navy to-riet-navy-dark text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-riet-gold/20 border border-riet-gold/30 flex items-center justify-center text-riet-gold">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-heading font-black text-lg text-white">
                RIET ERP Portal
              </h3>
              <p className="text-xs text-slate-300">
                Official Institutional Management System
              </p>
            </div>
          </div>
          <button
            onClick={() => {
              handleLogout();
              onClose();
            }}
            className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Selector */}
        {!isLoggedIn && (
          <div className="flex border-b border-slate-200 bg-slate-50">
            <button
              onClick={() => {
                setActiveTab('student');
                setError('');
              }}
              className={`flex-1 py-3 text-xs font-bold flex items-center justify-center gap-2 border-b-2 transition-all ${
                activeTab === 'student'
                  ? 'border-riet-navy text-riet-navy bg-white'
                  : 'border-transparent text-slate-500 hover:text-slate-700'
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              <span>Student ERP Login</span>
            </button>
            <button
              onClick={() => {
                setActiveTab('faculty');
                setError('');
              }}
              className={`flex-1 py-3 text-xs font-bold flex items-center justify-center gap-2 border-b-2 transition-all ${
                activeTab === 'faculty'
                  ? 'border-riet-navy text-riet-navy bg-white'
                  : 'border-transparent text-slate-500 hover:text-slate-700'
              }`}
            >
              <User className="w-4 h-4" />
              <span>Faculty & Staff Login</span>
            </button>
          </div>
        )}

        {/* Content Body */}
        <div className="p-6">
          {isLoggedIn ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="font-heading font-bold text-xl text-riet-navy">
                Welcome, {username}!
              </h4>
              <p className="text-xs text-slate-600 max-w-xs mx-auto">
                You are authenticated to the {activeTab === 'student' ? 'Student Academic Dashboard' : 'Faculty LMS Portal'}. Attendance, timetables, and grade submissions are synchronized.
              </p>

              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-left text-xs space-y-1.5">
                <div className="flex justify-between">
                  <span className="text-slate-500">Roll/Emp No:</span>
                  <span className="font-bold text-riet-navy">{username}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Academic Term:</span>
                  <span className="font-bold text-emerald-700">Odd Semester 2026-27</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Status:</span>
                  <span className="font-bold text-emerald-700">Active / Enrolled</span>
                </div>
              </div>

              <div className="pt-2 flex gap-3">
                <button
                  onClick={() => {
                    alert('Redirecting to full ERP dashboard workspace...');
                    onClose();
                  }}
                  className="flex-1 bg-riet-navy hover:bg-riet-navy-light text-white font-bold py-2.5 rounded-xl text-xs shadow-sm transition-colors"
                >
                  Enter Portal Dashboard →
                </button>
                <button
                  onClick={handleLogout}
                  className="px-4 py-2.5 border border-slate-200 hover:bg-slate-100 text-slate-700 rounded-xl text-xs font-semibold transition-colors"
                >
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleLogin} className="space-y-4">
              {error && (
                <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  {activeTab === 'student' ? 'Enrollment / Roll Number *' : 'Employee ID / Faculty Code *'}
                </label>
                <div className="relative">
                  <input
                    type="text"
                    required
                    placeholder={activeTab === 'student' ? 'e.g. 23ERICS045' : 'e.g. FAC-CSE-102'}
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-riet-gold outline-none"
                  />
                  <User className="w-4 h-4 text-slate-400 absolute right-3 top-3" />
                </div>
                <p className="text-[10px] text-slate-400 mt-1">
                  Demo hint: enter any text (e.g. <span className="font-semibold text-slate-600">23ERICS045</span>)
                </p>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Password / PIN *
                </label>
                <div className="relative">
                  <input
                    type="password"
                    required
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-riet-gold outline-none"
                  />
                  <Lock className="w-4 h-4 text-slate-400 absolute right-3 top-3" />
                </div>
              </div>

              <div className="flex items-center justify-between text-[11px]">
                <label className="flex items-center gap-1.5 text-slate-600 cursor-pointer">
                  <input type="checkbox" className="rounded text-riet-navy focus:ring-riet-gold" />
                  <span>Remember me</span>
                </label>
                <a
                  href="#forgot"
                  onClick={(e) => {
                    e.preventDefault();
                    alert('Password reset instructions will be sent to your registered college email.');
                  }}
                  className="text-riet-blue hover:underline font-semibold"
                >
                  Forgot Password?
                </a>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-riet-navy hover:bg-riet-navy-light text-white font-black py-3 rounded-xl text-xs shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <span>Secure Login</span>
                  <ShieldCheck className="w-4 h-4 text-riet-gold" />
                </button>
              </div>

              <p className="text-[10px] text-center text-slate-400 pt-2">
                Need account access? Contact the RIET IT Helpdesk at <span className="font-medium text-slate-600">it.support@rietjaipur.ac.in</span>
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

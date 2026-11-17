import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Send, ArrowRight, Facebook, Twitter, Linkedin, Instagram, Youtube, Award } from 'lucide-react';
import { collegeInfo } from '../../../data/collegeData';
import CollegeLogo from './CollegeLogo';

export default function Footer({ onOpenEnquiry, onOpenDocument }) {
  const [subscribedEmail, setSubscribedEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (subscribedEmail) {
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setSubscribedEmail('');
      }, 4000);
    }
  };

  return (
    <footer className="bg-riet-navy-dark text-slate-300">
      {/* Pre-Footer Action Banner */}
      <div className="bg-gradient-to-r from-riet-navy via-riet-navy-light to-riet-navy border-b border-riet-navy-light/60 py-10 px-4 relative overflow-hidden">
        {/* Subtle decorative background circle */}
        <div className="absolute right-0 top-0 w-96 h-96 bg-riet-gold/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center shrink-0 text-riet-gold shadow-inner">
              <Award className="w-9 h-9" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-heading font-black text-white tracking-tight">
                Start Your Journey With RIET
              </h3>
              <p className="text-slate-300 text-sm mt-1 max-w-xl">
                Take the first step towards a successful career. Admissions open for Engineering, Technology, and Management programs.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenEnquiry}
              className="bg-riet-gold hover:bg-riet-gold-hover text-riet-navy font-black px-6 py-3.5 rounded-lg text-sm shadow-lift transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
            >
              <span>Enquire Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <Link
              to="/admissions"
              className="bg-white/10 hover:bg-white/20 text-white font-bold px-5 py-3.5 rounded-lg text-sm transition-colors border border-white/20"
            >
              Admission Guide
            </Link>
          </div>
        </div>
      </div>

      {/* Main 5-Column Institutional Footer */}
      <div className="max-w-7xl mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Column 1: Institution Info */}
          <div className="lg:col-span-1 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/riet-emblem.png"
                alt="RIET Jaipur Official Seal"
                className="w-12 h-12 rounded-full object-contain bg-white p-0.5 shadow-md border border-slate-300 shrink-0"
              />
              <div>
                <h4 className="font-heading font-black text-white text-lg tracking-tight">
                  {collegeInfo.name}
                </h4>
                <p className="text-[10px] text-slate-400 font-medium uppercase">
                  Est. {collegeInfo.estd} • RTU Affiliated
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Rajasthan Institute of Engineering & Technology is committed to quality education, hands-on learning, and holistic personality development.
            </p>

            <div className="pt-2">
              <span className="inline-block text-[11px] text-amber-300 font-semibold bg-amber-950/40 border border-amber-800/40 px-2.5 py-1 rounded">
                AICTE Approved Institution
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white font-heading font-bold text-sm tracking-wide uppercase mb-4 text-riet-gold">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <Link to="/about" className="hover:text-white hover:underline transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/academics" className="hover:text-white hover:underline transition-colors">
                  Academics & Degrees
                </Link>
              </li>
              <li>
                <Link to="/admissions" className="hover:text-white hover:underline transition-colors">
                  Admissions 2026-27
                </Link>
              </li>
              <li>
                <Link to="/placements" className="hover:text-white hover:underline transition-colors">
                  Placements & Recruiter Desk
                </Link>
              </li>
              <li>
                <Link to="/research-innovation" className="hover:text-white hover:underline transition-colors">
                  Research & Incubation
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Student Corner */}
          <div>
            <h4 className="text-white font-heading font-bold text-sm tracking-wide uppercase mb-4 text-riet-gold">
              Student Corner
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <Link to="/news-events#notices" className="hover:text-white hover:underline transition-colors">
                  Official Notice Board
                </Link>
              </li>
              <li>
                <Link to="/academics#results" className="hover:text-white hover:underline transition-colors">
                  Examination Results
                </Link>
              </li>
              <li>
                <Link to="/academics#downloads" className="hover:text-white hover:underline transition-colors">
                  Syllabus & Downloads
                </Link>
              </li>
              <li>
                <button
                  onClick={() => onOpenDocument && onOpenDocument('RIET Academic Calendar 2026-27')}
                  className="hover:text-white hover:underline transition-colors text-left"
                >
                  Academic Calendar 2026
                </button>
              </li>
              <li>
                <Link to="/about#approvals" className="hover:text-white hover:underline transition-colors">
                  Mandatory Disclosures
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div>
            <h4 className="text-white font-heading font-bold text-sm tracking-wide uppercase mb-4 text-riet-gold">
              Contact Us
            </h4>
            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-riet-gold shrink-0 mt-0.5" />
                <Link to="/contact" className="hover:text-white transition-colors">
                  {collegeInfo.address}
                </Link>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-riet-gold shrink-0" />
                <div className="space-y-0.5">
                  <a href={`tel:${collegeInfo.phones[0]}`} className="hover:text-white block">
                    {collegeInfo.phones[0]}
                  </a>
                  <a href={`tel:${collegeInfo.phones[1]}`} className="hover:text-white block">
                    {collegeInfo.phones[1]}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-riet-gold shrink-0" />
                <a href={`mailto:${collegeInfo.emails[0]}`} className="hover:text-white">
                  {collegeInfo.emails[0]}
                </a>
              </div>
            </div>
          </div>

          {/* Column 5: Subscribe to Updates */}
          <div>
            <h4 className="text-white font-heading font-bold text-sm tracking-wide uppercase mb-4 text-riet-gold">
              Subscribe to Updates
            </h4>
            <p className="text-xs text-slate-400 mb-3">
              Receive notifications for admission rounds, scholarship alerts, and campus events.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  required
                  value={subscribedEmail}
                  onChange={(e) => setSubscribedEmail(e.target.value)}
                  placeholder="Your Email Address"
                  className="w-full bg-slate-800/90 border border-slate-700 text-white placeholder-slate-400 text-xs rounded-lg px-3.5 py-2.5 pr-10 focus:outline-none focus:border-riet-gold"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 top-1.5 bg-riet-gold hover:bg-riet-gold-hover text-riet-navy p-1.5 rounded-md transition-colors"
                  title="Subscribe"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
              {isSubscribed && (
                <p className="text-[11px] text-emerald-400 font-medium">
                  ✓ Thank you! You are subscribed to updates.
                </p>
              )}
            </form>

            <div className="pt-4">
              <span className="block text-[11px] text-slate-400 mb-2 uppercase font-semibold">
                Follow RIET Jaipur:
              </span>
              <div className="flex items-center gap-2 text-slate-400">
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-7 h-7 rounded-full bg-slate-800 hover:bg-riet-gold hover:text-riet-navy flex items-center justify-center transition-colors"
                  title="Facebook"
                >
                  <Facebook className="w-3.5 h-3.5" />
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-7 h-7 rounded-full bg-slate-800 hover:bg-riet-gold hover:text-riet-navy flex items-center justify-center transition-colors"
                  title="Twitter / X"
                >
                  <Twitter className="w-3.5 h-3.5" />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-7 h-7 rounded-full bg-slate-800 hover:bg-riet-gold hover:text-riet-navy flex items-center justify-center transition-colors"
                  title="LinkedIn"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-7 h-7 rounded-full bg-slate-800 hover:bg-riet-gold hover:text-riet-navy flex items-center justify-center transition-colors"
                  title="Instagram"
                >
                  <Instagram className="w-3.5 h-3.5" />
                </a>
                <a 
                  href="https://youtube.com" 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-7 h-7 rounded-full bg-slate-800 hover:bg-riet-gold hover:text-riet-navy flex items-center justify-center transition-colors"
                  title="YouTube"
                >
                  <Youtube className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800 py-5 px-4 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
          <p>© 2026 RIET Jaipur. All Rights Reserved. Rajasthan Institute of Engineering & Technology.</p>
          <div className="flex items-center gap-4 text-xs">
            <Link to="/about#privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link to="/about#terms" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
            <span>•</span>
            <Link to="/about#sitemap" className="hover:text-white transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

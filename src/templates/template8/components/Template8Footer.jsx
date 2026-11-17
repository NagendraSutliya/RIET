import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Linkedin, Twitter, Instagram, MessageCircle } from 'lucide-react';

export default function Template8Footer({ onOpenEnquiry }) {
  return (
    <footer className="bg-[#161616] text-[#9a9a9a] text-[13px] font-sans border-t border-white/5 w-full">
      {/* 4 Main Columns */}
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 pt-16 pb-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Col 1: University Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/riet-emblem.png"
                alt="RIET Jaipur"
                className="w-10 h-10 object-contain rounded-full bg-white/10 p-0.5"
              />
              <div className="flex flex-col">
                <span className="text-xl font-bold font-playfair text-white tracking-wide">
                  RIET <span className="font-normal text-slate-300">JAIPUR</span>
                </span>
                <span className="text-[10px] text-slate-400 font-medium">
                  Rajasthan Institute of Engg. &amp; Tech.
                </span>
              </div>
            </div>

            <div className="space-y-1 text-slate-400 text-xs leading-relaxed pt-2">
              <p>Box 35300</p>
              <p>RIET Campus, Bhankrota, Ajmer Road</p>
              <p>Jaipur, Rajasthan 302026</p>
              <p className="pt-2 font-bold text-white">+91 141 225 0032</p>
              <p className="font-medium text-white hover:text-[#3db166] transition-colors">
                <a href="mailto:admin@rietjaipur.ac.in">admin@rietjaipur.ac.in</a>
              </p>
            </div>

            <div className="h-0.5 w-32 bg-[#3db166] mt-4" />
          </div>

          {/* Col 2: Our Campus */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wide">
              Our Campus
            </h4>
            <div className="h-0.5 w-full bg-[#3db166] mt-2.5 mb-4" />
            <ul className="space-y-2 text-xs">
              <li><Link to="/about" className="hover:text-white transition-colors">Acedemic</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">Planning &amp; Administration</Link></li>
              <li><Link to="/campus" className="hover:text-white transition-colors">Campus Safety</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">Office of the Chancellor</Link></li>
              <li><Link to="/campus" className="hover:text-white transition-colors">Facility Services</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">Human Resources</Link></li>
            </ul>
          </div>

          {/* Col 3: Campus Life */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wide">
              Campus Life
            </h4>
            <div className="h-0.5 w-full bg-[#3db166] mt-2.5 mb-4" />
            <ul className="space-y-2 text-xs">
              <li><Link to="/campus" className="hover:text-white transition-colors">Accessibility</Link></li>
              <li><Link to="/admissions" className="hover:text-white transition-colors">Financial Aid</Link></li>
              <li><Link to="/campus" className="hover:text-white transition-colors">Food Services</Link></li>
              <li><Link to="/campus" className="hover:text-white transition-colors">Housing</Link></li>
              <li><Link to="/campus" className="hover:text-white transition-colors">Information Technologies</Link></li>
              <li><Link to="/campus" className="hover:text-white transition-colors">Student Life</Link></li>
            </ul>
          </div>

          {/* Col 4: Academics */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wide">
              Academics
            </h4>
            <div className="h-0.5 w-full bg-[#3db166] mt-2.5 mb-4" />
            <ul className="space-y-2 text-xs">
              <li><Link to="/academics" className="hover:text-white transition-colors">Canvas</Link></li>
              <li><Link to="/academics" className="hover:text-white transition-colors">Catalyst</Link></li>
              <li><Link to="/campus" className="hover:text-white transition-colors">Library</Link></li>
              <li><Link to="/news" className="hover:text-white transition-colors">Time Schedule</Link></li>
              <li><button onClick={onOpenEnquiry} className="hover:text-white transition-colors text-left">Apply For Admissions</button></li>
              <li><Link to="/admissions" className="hover:text-white transition-colors">Pay My Tuition</Link></li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Copyright & Green Social Icons Bar */}
      <div className="border-t border-white/10 bg-[#111111] py-5 px-4 sm:px-6">
        <div className="max-w-[1240px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            Copyright All Right Reserved 2026, Rajasthan Institute of Engineering &amp; Technology (RIET)
          </div>

          <div className="flex items-center gap-4 text-[#3db166]">
            <a href="#" aria-label="Facebook" className="hover:text-white transition-colors">
              <Facebook className="w-4 h-4 fill-current" />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-white transition-colors">
              <Linkedin className="w-4 h-4 fill-current" />
            </a>
            <a href="#" aria-label="Skype" className="hover:text-white transition-colors">
              <MessageCircle className="w-4 h-4 fill-current" />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-white transition-colors">
              <Twitter className="w-4 h-4 fill-current" />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-white transition-colors">
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

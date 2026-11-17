import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, GraduationCap, Trophy, Share2, Play, BookOpen, 
  Globe, Award, Clock, MapPin, ChevronRight, ArrowRight, 
  Link2, Mail, Heart, Twitter, ChevronLeft, Search, CheckCircle2, X
} from 'lucide-react';

export default function Template8Home({ onOpenEnquiry }) {
  // State management
  const [activeTab, setActiveTab] = useState('Benefits');
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [tweetIdx, setTweetIdx] = useState(0);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  // Interactive Tab Data for Section 9 (Matches all 4 Kingster Screenshots adapted with authentic RIET content)
  const tabData = {
    'Benefits': {
      title: 'Why Choose RIET Jaipur?',
      image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80',
      imageAlt: 'Smiling Student with Backpack and Notebook at RIET Jaipur'
    },
    'Self Development': {
      title: 'Self Development',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80',
      imageAlt: 'Group of Engineering Students Studying Together on RIET Campus'
    },
    'Spirituality': {
      title: 'Spirituality & Ethics',
      image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=80',
      imageAlt: 'Student Reading in RIET Central Digital Library'
    },
    'Alumni': {
      title: 'Alumni Network',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
      imageAlt: 'RIET Alumnus Working in Global Technology Corporate'
    }
  };

  const [courseFilter, setCourseFilter] = useState({
    keyword: '',
    courseId: '',
    department: 'all',
    campus: 'all',
    level: 'all',
    instructor: 'all',
    semester: 'all',
    credit: 'all'
  });

  const tweets = [
    "RT @rietjaipur: Admissions are officially open for B.Tech, M.Tech & MCA sessions 2026-27 under REAP Code: 1025. Apply online today! yesterday",
    "RT @rietjaipur: Congratulations to our 3 CSE scholars securing ₹54 LPA international tech placement offers! 2 days ago",
    "RT @rietjaipur: Annual National Hackathon & Robotics Conclave 2026 dates announced. 500+ participants competing for ₹5 Lakh cash prizes! 4 days ago"
  ];

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSubscribed(true);
      setTimeout(() => {
        setNewsletterSubscribed(false);
        setNewsletterEmail('');
      }, 4000);
    }
  };

  return (
    <div className="w-full font-sans text-[#2a2a2a] bg-white overflow-x-hidden">
      
      {/* ========================================================
          SECTION 1: HERO BANNER (Screenshot 1)
          ======================================================== */}
      <section className="relative w-full min-h-[560px] sm:min-h-[640px] flex items-center bg-[#192f59]">
        {/* Background Image: Female student in library */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1920&q=80')` 
          }}
        >
          {/* Subtle gradient overlay to match Kingster screenshot */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#192f59]/90 via-[#192f59]/60 to-transparent sm:to-[#192f59]/30" />
        </div>

        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 relative z-10 py-24 sm:py-32 w-full">
          <div className="max-w-2xl space-y-4">
            <span className="text-white text-sm sm:text-base font-medium tracking-wide uppercase block">
              The Best Engineering Institute Of The State
            </span>

            {/* RIET Jaipur Headline with dark navy highlight box matching screenshot */}
            <h1 className="text-4xl sm:text-6xl lg:text-[70px] font-bold font-playfair text-white tracking-tight leading-none">
              RIET Jaipur
            </h1>

            <p className="text-slate-200 text-xs sm:text-sm max-w-xl leading-relaxed pt-1 font-normal">
              Estd. 2000 • Approved by AICTE, New Delhi &amp; Affiliated to RTU Kota • REAP Code: 1025. 25 Years of Academic Excellence in Engineering &amp; Technology.
            </p>

            <div className="pt-4">
              <button
                onClick={() => setIsVideoModalOpen(true)}
                className="bg-white hover:bg-slate-100 text-[#192f59] font-bold py-3.5 px-8 rounded-none text-xs uppercase tracking-wider transition-all shadow-md inline-flex items-center gap-2"
              >
                <span>Take A Tour</span>
              </button>
            </div>
          </div>
        </div>

        {/* Carousel indicator dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-white cursor-pointer" />
          <span className="w-2.5 h-2.5 rounded-full bg-white/40 cursor-pointer" />
          <span className="w-2.5 h-2.5 rounded-full bg-white/40 cursor-pointer" />
        </div>
      </section>

      {/* ========================================================
          SECTION 2: FOUR OVERLAPPING FEATURE BOXES (Screenshot 1)
          ======================================================== */}
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 -mt-10 sm:-mt-14 relative z-20">
        <div className="bg-white shadow-xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-200 border border-slate-100">
          
          {/* Box 1: University Life */}
          <Link to="/campus" className="p-6 flex items-center gap-4 group hover:bg-[#fcfcfc] transition-colors">
            <div className="text-slate-700 group-hover:text-[#3db166] transition-colors">
              <Building2 className="w-9 h-9 stroke-[1.5]" />
            </div>
            <div>
              <h3 className="text-base font-bold text-[#192f59] group-hover:text-[#3db166] transition-colors leading-tight">
                Campus Life
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">30-Acre Green Campus</p>
            </div>
          </Link>

          {/* Box 2: Graduation */}
          <Link to="/academics" className="p-6 flex items-center gap-4 group hover:bg-[#fcfcfc] transition-colors">
            <div className="text-slate-700 group-hover:text-[#3db166] transition-colors">
              <GraduationCap className="w-9 h-9 stroke-[1.5]" />
            </div>
            <div>
              <h3 className="text-base font-bold text-[#192f59] group-hover:text-[#3db166] transition-colors leading-tight">
                Academic Degrees
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">B.Tech, M.Tech &amp; MCA</p>
            </div>
          </Link>

          {/* Box 3: Athletics */}
          <Link to="/campus" className="p-6 flex items-center gap-4 group hover:bg-[#fcfcfc] transition-colors">
            <div className="text-slate-700 group-hover:text-[#3db166] transition-colors">
              <Trophy className="w-9 h-9 stroke-[1.5]" />
            </div>
            <div>
              <h3 className="text-base font-bold text-[#192f59] group-hover:text-[#3db166] transition-colors leading-tight">
                Sports &amp; Clubs
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">State &amp; National Leagues</p>
            </div>
          </Link>

          {/* Box 4: Social */}
          <Link to="/about" className="p-6 flex items-center gap-4 group hover:bg-[#fcfcfc] transition-colors">
            <div className="text-slate-700 group-hover:text-[#3db166] transition-colors">
              <Share2 className="w-9 h-9 stroke-[1.5]" />
            </div>
            <div>
              <h3 className="text-base font-bold text-[#192f59] group-hover:text-[#3db166] transition-colors leading-tight">
                Alumni Connect
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">20,000+ Global Network</p>
            </div>
          </Link>

        </div>
      </div>

      {/* ========================================================
          SECTION 3: 2-COLUMN ADMISSION HIGHLIGHT (Screenshot 1)
          ======================================================== */}
      <section className="pt-16 sm:pt-24 pb-12 px-4 sm:px-6">
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-2 shadow-lg overflow-hidden">
          {/* Left: Photo of professor in lecture hall */}
          <div className="min-h-[360px] sm:min-h-[440px] relative bg-slate-900">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=80"
              alt="RIET Professor in Smart Lecture Hall"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right: Dark navy callout with subtle watermark */}
          <div className="bg-[#192f59] p-8 sm:p-14 text-white flex flex-col justify-center relative overflow-hidden">
            {/* Background architectural watermark */}
            <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none w-96 h-96">
              <Building2 className="w-full h-full text-white" />
            </div>

            <div className="space-y-4 relative z-10">
              <h2 className="text-3xl sm:text-4xl font-bold font-playfair text-white tracking-tight">
                Apply for Admission
              </h2>
              <span className="text-sm font-semibold text-[#3db166] block tracking-wide">
                Session 2026-27 Applications Open • REAP Code: 1025
              </span>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal">
                We don't just give students an education and experiences that set them up for success in a career. We help them succeed in their career—to discover a field they're passionate about and dare to lead it. Direct merit scholarships up to 100% available.
              </p>
              <div className="pt-4">
                <button
                  onClick={onOpenEnquiry}
                  className="bg-[#3db166] hover:bg-[#349d5a] text-white font-bold py-3.5 px-8 rounded-none text-xs uppercase tracking-wider transition-colors shadow-md"
                >
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 4: "ABOUT OUR INSTITUTE" BANNER (Screenshot 2)
          ======================================================== */}
      <section 
        className="py-20 px-4 sm:px-6 relative bg-cover bg-center text-white"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1920&q=80')` }}
      >
        <div className="absolute inset-0 bg-[#142647]/95" />
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
          
          {/* Left: Crest & Green Title */}
          <div className="lg:col-span-4 space-y-3">
            <div className="flex items-center gap-3">
              <svg viewBox="0 0 64 64" fill="none" className="w-7 h-7 text-white" xmlns="http://www.w3.org/2000/svg">
                <path d="M32 4L12 14V30C12 43 20.6 55 32 60C43.4 55 52 43 52 30V14L32 4Z" stroke="#3db166" strokeWidth="2.5" fill="#142647"/>
                <path d="M32 18V42M22 24C26 23 29 24 32 26C35 24 38 23 42 24M22 32C26 31 29 32 32 34C35 32 38 31 42 32M22 40C26 39 29 40 32 42C35 40 38 39 42 40" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <span className="text-xl font-bold font-playfair tracking-tight text-white">
                RIET <span className="font-normal">Jaipur</span>
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-playfair text-[#3db166] tracking-tight">
              About Our Institute
            </h2>
          </div>

          {/* Right: Paragraphs & Read More link */}
          <div className="lg:col-span-8 space-y-4">
            <h3 className="text-lg sm:text-xl font-semibold text-white leading-snug">
              We are one of Rajasthan's leading engineering institutions with over 20,000 alumni across India and global corporate tech hubs.
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              Rajasthan Institute of Engineering &amp; Technology (RIET), Jaipur was established in 2000 for the public benefit and it is recognized nationally. Throughout our distinguished history, RIET has offered access to a wide range of academic and research opportunities. Approved by AICTE, New Delhi and affiliated to RTU Kota, the Institute has pioneered innovation in technical education.
            </p>
            <div className="pt-1">
              <Link to="/about" className="text-white hover:text-[#3db166] font-bold text-xs uppercase tracking-wider inline-flex items-center gap-1.5 transition-colors">
                <span>Read More</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================
          SECTION 5: FOUR FEATURE PILLARS ON DARK NAVY (Screenshot 2)
          ======================================================== */}
      <section className="bg-[#192f59] py-14 px-4 sm:px-6 border-t border-white/10">
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Pillar 1 */}
          <div className="space-y-3">
            <div className="text-[#3db166]">
              <BookOpen className="w-8 h-8 stroke-[1.5]" />
            </div>
            <h4 className="text-base font-bold text-white font-playfair">
              Education Services
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed font-normal">
              RIET Jaipur was established in 2000, offering NBA accredited technical disciplines, smart IoT labs, and experienced doctoral mentors.
            </p>
            <Link to="/academics" className="text-xs font-semibold text-[#3db166] hover:underline block pt-1">
              Learn More
            </Link>
          </div>

          {/* Pillar 2 */}
          <div className="space-y-3">
            <div className="text-[#3db166]">
              <Globe className="w-8 h-8 stroke-[1.5]" />
            </div>
            <h4 className="text-base font-bold text-white font-playfair">
              International Hubs
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed font-normal">
              Global academic alliances with premier universities, international IEEE conferences, and high-impact collaborative research.
            </p>
            <Link to="/about" className="text-xs font-semibold text-[#3db166] hover:underline block pt-1">
              Learn More
            </Link>
          </div>

          {/* Pillar 3 */}
          <div className="space-y-3">
            <div className="text-[#3db166]">
              <Award className="w-8 h-8 stroke-[1.5]" />
            </div>
            <h4 className="text-base font-bold text-white font-playfair">
              Bachelor's and Master's
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed font-normal">
              Approved B.Tech degrees in AI, Data Science, Cyber Security, CSE, ECE, Civil, Mech, plus MCA and M.Tech tracks.
            </p>
            <Link to="/courses" className="text-xs font-semibold text-[#3db166] hover:underline block pt-1">
              Learn More
            </Link>
          </div>

          {/* Pillar 4 */}
          <div className="space-y-3">
            <div className="text-[#3db166]">
              <Building2 className="w-8 h-8 stroke-[1.5]" />
            </div>
            <h4 className="text-base font-bold text-white font-playfair">
              Campus Life
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed font-normal">
              A vibrant 30-acre green campus equipped with modern residential hostels, sports complex, digital library, and technical clubs.
            </p>
            <Link to="/campus" className="text-xs font-semibold text-[#3db166] hover:underline block pt-1">
              Learn More
            </Link>
          </div>

        </div>
      </section>

      {/* ========================================================
          SECTION 6: NEWS & UPDATES + QUICK LINKS (Screenshot 2)
          ======================================================== */}
      <section className="py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left: News & Updates (8 cols) */}
          <div className="lg:col-span-8 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <h3 className="text-2xl font-bold font-playfair text-[#192f59]">
                News &amp; Updates
              </h3>
              <Link to="/news" className="text-xs font-bold text-[#3db166] hover:underline uppercase tracking-wider">
                Read All News
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6">
              {/* Featured News Left (7 cols) */}
              <div className="sm:col-span-7 space-y-3 group">
                <div className="h-56 overflow-hidden rounded-xs bg-slate-100">
                  <img
                    src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80"
                    alt="Professor at Blackboard"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                  November 12, 2025 / Placements, Record
                </div>
                <h4 className="text-base font-bold font-playfair text-[#192f59] group-hover:text-[#3db166] transition-colors leading-snug">
                  RIET Students Bag Record ₹54 LPA Package at US Tech Conglomerate
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Three final-year B.Tech Computer Science students have secured international job offers with ₹54 LPA compensation, leading this season's placement drive.
                </p>
              </div>

              {/* Smaller News List Right (5 cols) */}
              <div className="sm:col-span-5 space-y-5">
                {/* Item 1 */}
                <div className="flex gap-3 group">
                  <div className="w-16 h-16 shrink-0 overflow-hidden rounded-xs bg-slate-100">
                    <img
                      src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=200&q=80"
                      alt="Students in Library"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="space-y-1 min-w-0">
                    <div className="text-[10px] text-slate-500 uppercase font-semibold">
                      November 08, 2025 / Hackathon
                    </div>
                    <h5 className="text-xs font-bold text-[#192f59] group-hover:text-[#3db166] transition-colors leading-tight">
                      Annual National Smart Rajasthan Hackathon 2026 Announced
                    </h5>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="flex gap-3 group">
                  <div className="w-16 h-16 shrink-0 overflow-hidden rounded-xs bg-slate-100">
                    <img
                      src="https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=200&q=80"
                      alt="Robotics Lab"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="space-y-1 min-w-0">
                    <div className="text-[10px] text-slate-500 uppercase font-semibold">
                      October 28, 2025 / Industry MoU
                    </div>
                    <h5 className="text-xs font-bold text-[#192f59] group-hover:text-[#3db166] transition-colors leading-tight">
                      MoU Signed with Siemens &amp; Dassault for Industry 4.0 Center of Excellence
                    </h5>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="flex gap-3 group">
                  <div className="w-16 h-16 shrink-0 overflow-hidden rounded-xs bg-slate-100">
                    <img
                      src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80"
                      alt="Campus Blocks"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="space-y-1 min-w-0">
                    <div className="text-[10px] text-slate-500 uppercase font-semibold">
                      October 15, 2025 / Academic
                    </div>
                    <h5 className="text-xs font-bold text-[#192f59] group-hover:text-[#3db166] transition-colors leading-tight">
                      IEEE International Conference on Advanced Computing &amp; Cloud (ICACCA)
                    </h5>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right: Quick Links Sidebar (4 cols) */}
          <div 
            className="lg:col-span-4 p-8 rounded-xs relative text-white bg-cover bg-center flex flex-col justify-between"
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=600&q=80')` }}
          >
            <div className="absolute inset-0 bg-[#142647]/90" />
            <div className="relative z-10 space-y-4">
              <div className="flex items-center gap-2 border-b border-white/20 pb-3">
                <Link2 className="w-5 h-5 text-white" />
                <h3 className="text-xl font-bold font-playfair text-white">
                  Quick Links
                </h3>
              </div>

              <ul className="space-y-3 text-xs divide-y divide-white/10">
                <li className="pt-2"><Link to="/about" className="text-[#3db166] hover:underline font-medium block">Alumni &amp; Donors</Link></li>
                <li className="pt-2"><Link to="/campus" className="text-[#3db166] hover:underline font-medium block">Athletic Calendar</Link></li>
                <li className="pt-2"><Link to="/news" className="text-[#3db166] hover:underline font-medium block">All RIET Events</Link></li>
                <li className="pt-2"><Link to="/about" className="text-[#3db166] hover:underline font-medium block">Partnership &amp; Out Reach</Link></li>
                <li className="pt-2"><Link to="/academics" className="text-[#3db166] hover:underline font-medium block">Academic Calendars</Link></li>
                <li className="pt-2"><Link to="/contact" className="text-[#3db166] hover:underline font-medium block">Examination Portal</Link></li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================
          SECTION 7: TWEET STRIP + APPLY TO RIET (Screenshot 3)
          ======================================================== */}
      <section className="border-t border-b border-slate-200">
        <div className="grid grid-cols-1 md:grid-cols-12">
          
          {/* Left: Twitter ticker (8 cols) */}
          <div className="md:col-span-8 bg-[#f8f9fa] px-6 py-4 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3 min-w-0">
              <Twitter className="w-5 h-5 text-[#192f59] shrink-0 fill-current" />
              <p className="text-xs text-slate-700 truncate">
                {tweets[tweetIdx]}
              </p>
            </div>

            <div className="flex items-center gap-1 shrink-0 text-slate-500">
              <button 
                onClick={() => setTweetIdx((tweetIdx - 1 + tweets.length) % tweets.length)}
                className="p-1 hover:text-black transition-colors"
                aria-label="Previous Tweet"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button 
                onClick={() => setTweetIdx((tweetIdx + 1) % tweets.length)}
                className="p-1 hover:text-black transition-colors"
                aria-label="Next Tweet"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right: Apply To RIET button (4 cols) */}
          <button
            onClick={onOpenEnquiry}
            className="md:col-span-4 bg-[#3db166] hover:bg-[#349d5a] text-white py-4 px-6 flex items-center justify-center gap-3 transition-colors text-center font-bold text-sm tracking-wide"
          >
            <img
              src="/riet-emblem.png"
              alt="RIET Logo"
              className="w-7 h-7 object-contain bg-white rounded-full p-0.5"
            />
            <span>Apply To RIET</span>
          </button>

        </div>
      </section>

      {/* ========================================================
          SECTION 8: VIDEO TOUR IN RIET (Screenshot 3)
          ======================================================== */}
      <section 
        className="py-28 sm:py-36 px-4 sm:px-6 relative bg-cover bg-center text-center text-white"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1920&q=80')` }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="max-w-[700px] mx-auto relative z-10 space-y-4">
          {/* Circular Play Button */}
          <button
            onClick={() => setIsVideoModalOpen(true)}
            className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center mx-auto hover:bg-[#3db166] hover:border-[#3db166] transition-all group shadow-lg"
            aria-label="Play Video"
          >
            <Play className="w-6 h-6 text-white fill-white ml-0.5 group-hover:scale-110 transition-transform" />
          </button>

          <h2 className="text-3xl sm:text-5xl font-bold font-playfair text-white tracking-tight pt-2">
            Video Tour in RIET
          </h2>

          <p className="text-xs sm:text-sm text-slate-200 max-w-lg mx-auto leading-relaxed">
            Take a virtual tour of RIET Jaipur and explore Rajasthan's premier engineering campus, featuring advanced computing centers, robotics labs, sports complex, and campus life.
          </p>
        </div>
      </section>

      {/* ========================================================
          SECTION 9: TABBED FEATURE ("Why Choose RIET?" / All 4 States)
          ======================================================== */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-[#fcfcfc]">
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-12 shadow-sm border border-slate-200/80 bg-white overflow-hidden">
          
          {/* Left: Dynamic Photo based on active tab (5 cols) */}
          <div className="lg:col-span-5 relative min-h-[380px] sm:min-h-[460px] bg-slate-100 overflow-hidden">
            <img
              src={tabData[activeTab]?.image || tabData['Benefits'].image}
              alt={tabData[activeTab]?.imageAlt || 'RIET Academic Life'}
              className="w-full h-full object-cover transition-opacity duration-300"
            />
            
            {/* Centered White Circle Play Button with Solid Green Triangle (from screenshots) */}
            <button
              onClick={() => setIsVideoModalOpen(true)}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-white shadow-2xl flex items-center justify-center hover:scale-110 transition-transform group z-10"
              aria-label="Play Tab Video"
            >
              <Play className="w-7 h-7 text-[#3db166] fill-[#3db166] ml-1 group-hover:scale-105 transition-transform" />
            </button>
          </div>

          {/* Right: Tab Header & Content (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between relative bg-white">
            
            {/* Top Tab Switcher Bar (exact style from Screenshots 2026-11-16 155022/34/47) */}
            <div className="bg-[#f2f2f2] flex items-stretch overflow-x-auto no-scrollbar border-b border-slate-200/60">
              {['Benefits', 'Self Development', 'Spirituality', 'Alumni'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-4 text-xs sm:text-sm font-bold tracking-wide transition-all whitespace-nowrap text-center ${
                    activeTab === tab
                      ? 'bg-white text-[#192f59] border-t-2 border-t-[#3db166] shadow-xs'
                      : 'text-[#6b7280] hover:text-[#192f59] bg-[#f2f2f2]'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Content Area with Watermark Crest */}
            <div className="p-8 sm:p-12 relative flex-1 flex flex-col justify-center">
              {/* Real RIET Emblem Watermark */}
              <div className="absolute right-4 bottom-4 pointer-events-none opacity-10">
                <img
                  src="/riet-emblem.png"
                  alt=""
                  className="w-48 h-48 sm:w-56 sm:h-56 object-contain grayscale"
                />
              </div>

              {/* Dynamic Heading based on tab */}
              <div className="space-y-4 relative z-10">
                <h3 className="text-2xl sm:text-3xl font-bold font-playfair text-[#192f59] tracking-tight">
                  {tabData[activeTab]?.title || 'Why Choose RIET?'}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  The RIET Alumni Association is proud to connect over 20,000+ engineers, technocrats, and leaders across Fortune 500 corporations and global research institutions. Through our dedicated Alumni Connect platform, graduates access mentorship roundtables, seed startup funding, and exclusive placement opportunities.
                </p>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Rajasthan Institute of Engineering &amp; Technology (RIET), Jaipur was established in 2000 as a premier center of technical excellence. Accredited by NAAC and affiliated to Rajasthan Technical University (RTU), Kota, RIET combines rigorous academic foundations with hands-on industry partnerships.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================
          SECTION 10: THREE CALLOUT BLOCKS (Screenshot 4)
          ======================================================== */}
      <section className="grid grid-cols-1 md:grid-cols-3 text-white">
        
        {/* Block 1: Undergraduate */}
        <div 
          className="p-12 relative bg-cover bg-center flex flex-col justify-center min-h-[200px]"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80')` }}
        >
          <div className="absolute inset-0 bg-[#192f59]/90" />
          <div className="relative z-10 space-y-2">
            <h4 className="text-xl font-bold font-playfair text-white">Undergraduate (B.Tech)</h4>
            <p className="text-xs text-slate-200 leading-relaxed font-normal">
              Accredited 4-year B.Tech degrees across Computer Science, AI &amp; ML, Cyber Security, Data Science, ECE, Civil &amp; Mechanical Engineering.
            </p>
          </div>
        </div>

        {/* Block 2: Graduated & Professional */}
        <div className="p-12 bg-[#142442] flex flex-col justify-center min-h-[200px]">
          <div className="space-y-2">
            <h4 className="text-xl font-bold font-playfair text-white">Postgraduate (M.Tech &amp; MCA)</h4>
            <p className="text-xs text-slate-200 leading-relaxed font-normal">
              Advanced master's curricula focused on deep technology, distributed cloud architectures, power systems, and software engineering.
            </p>
          </div>
        </div>

        {/* Block 3: Scholarships & Financial AID */}
        <div 
          className="p-12 relative bg-cover bg-center flex flex-col justify-center min-h-[200px]"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=600&q=80')` }}
        >
          <div className="absolute inset-0 bg-[#192f59]/90" />
          <div className="relative z-10 space-y-2">
            <h4 className="text-xl font-bold font-playfair text-white">Scholarships &amp; Financial AID</h4>
            <p className="text-xs text-slate-200 leading-relaxed font-normal">
              Direct merit scholarships up to 100% tuition waiver for meritorious 10+2 students, JEE Main top rankers, and state sports medalists.
            </p>
          </div>
        </div>

      </section>

      {/* ========================================================
          SECTION 11: 3-COLUMN FEATURE ROW (Screenshot 4)
          ======================================================== */}
      <section className="py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Col 1: Donation Helps Us */}
          <div className="space-y-4">
            <div className="h-48 overflow-hidden rounded-xs bg-slate-100">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80"
                alt="RIET Endowment Leader"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-bold font-playfair text-[#192f59]">
              Scholarship &amp; Endowment
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              The RIET Student Endowment &amp; Research Fund empowers underprivileged meritorious scholars, incubates student deep-tech startups, and sponsors international hackathon participation.
            </p>
            <button
              onClick={onOpenEnquiry}
              className="bg-[#3db166] hover:bg-[#349d5a] text-white font-bold py-2.5 px-6 rounded-none text-xs uppercase tracking-wider transition-colors inline-flex items-center gap-2 shadow-xs"
            >
              <Heart className="w-3.5 h-3.5 fill-current" />
              <span>Support Scholarships</span>
            </button>
          </div>

          {/* Col 2: Upcoming Events with Green Numbers */}
          <div className="space-y-4">
            <div className="border-b border-slate-200 pb-3">
              <h3 className="text-xl font-bold font-playfair text-[#192f59]">
                Upcoming Events
              </h3>
            </div>

            <div className="space-y-4">
              {/* Event 1 */}
              <div className="flex items-start gap-4 group">
                <div className="text-center shrink-0">
                  <div className="text-3xl font-extrabold text-[#3db166] leading-none">17</div>
                  <div className="text-[10px] font-bold text-[#192f59] uppercase tracking-wider">DEC</div>
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs font-bold text-[#192f59] group-hover:text-[#3db166] transition-colors leading-snug">
                    National Hackathon &amp; AI Conclave 2026
                  </h4>
                  <div className="flex items-center gap-3 text-[10px] text-slate-400">
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3 text-[#3db166]" /> 10:00 am - 5:00 pm</span>
                    <span className="flex items-center gap-1"><MapPin className="w-3 h-3 text-[#3db166]" /> RIET Central Auditorium, Jaipur</span>
                  </div>
                </div>
              </div>

              {/* Event 2 */}
              <div className="flex items-start gap-4 group">
                <div className="text-center shrink-0">
                  <div className="text-3xl font-extrabold text-[#3db166] leading-none">04</div>
                  <div className="text-[10px] font-bold text-[#192f59] uppercase tracking-wider">NOV</div>
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs font-bold text-[#192f59] group-hover:text-[#3db166] transition-colors leading-snug">
                    Annual Technocultural Festival: Tarang 2026
                  </h4>
                  <div className="flex items-center gap-3 text-[10px] text-slate-400">
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3 text-[#3db166]" /> 09:00 am - 06:00 pm</span>
                    <span className="flex items-center gap-1"><MapPin className="w-3 h-3 text-[#3db166]" /> Open Air Amphitheatre</span>
                  </div>
                </div>
              </div>

              {/* Event 3 */}
              <div className="flex items-start gap-4 group">
                <div className="text-center shrink-0">
                  <div className="text-3xl font-extrabold text-[#3db166] leading-none">11</div>
                  <div className="text-[10px] font-bold text-[#192f59] uppercase tracking-wider">SEP</div>
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs font-bold text-[#192f59] group-hover:text-[#3db166] transition-colors leading-snug">
                    Corporate Placement Drive: Capgemini &amp; TCS
                  </h4>
                  <div className="flex items-center gap-3 text-[10px] text-slate-400">
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3 text-[#3db166]" /> 8:30 am - 6:00 pm</span>
                    <span className="flex items-center gap-1"><MapPin className="w-3 h-3 text-[#3db166]" /> Placement Suite, Block A</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Link to="/news" className="text-xs font-bold text-[#192f59] hover:text-[#3db166] transition-colors inline-flex items-center gap-1">
                <span>View All Events</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Col 3: Subscribe To Newsletter */}
          <div 
            className="p-8 rounded-xs text-white relative bg-cover bg-center flex flex-col justify-between"
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=80')` }}
          >
            <div className="absolute inset-0 bg-[#192f59]/95" />
            
            <div className="relative z-10 space-y-4 text-center">
              <div className="w-14 h-14 rounded-lg border border-[#3db166] text-[#3db166] flex items-center justify-center mx-auto">
                <Mail className="w-7 h-7 stroke-[1.5]" />
              </div>

              <div>
                <h3 className="text-xl font-bold font-playfair text-white">
                  Subscribe To Newsletter
                </h3>
                <p className="text-xs text-slate-300 mt-1">
                  Get official RIET admissions &amp; placement updates
                </p>
              </div>

              {newsletterSubscribed ? (
                <div className="p-3 bg-emerald-600/30 border border-emerald-400 text-emerald-300 text-xs rounded">
                  Thank you for subscribing to RIET updates!
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="space-y-3 pt-2">
                  <input
                    type="email"
                    required
                    placeholder="Your Email Address"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="w-full px-4 py-2.5 bg-[#121e36] border border-white/20 rounded-none text-xs text-white placeholder-slate-400 focus:outline-none focus:border-[#3db166]"
                  />
                  <button
                    type="submit"
                    className="w-full bg-[#3db166] hover:bg-[#349d5a] text-white font-bold py-2.5 rounded-none text-xs uppercase tracking-wider transition-colors shadow"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================
          SECTION 12: SEARCH FOR COURSES (Screenshot 5)
          ======================================================== */}
      <section className="bg-[#192f59] text-white">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
          
          {/* Left: Close-up Laptop Photo (5 cols) */}
          <div className="lg:col-span-5 min-h-[350px] relative bg-slate-900">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1000&q=80"
              alt="RIET Technical Curricula Search"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right: Search For Courses Form (7 cols) */}
          <div className="lg:col-span-7 p-8 sm:p-14 flex flex-col justify-center space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold font-playfair text-white tracking-tight">
              Search For Courses
            </h2>

            <form onSubmit={(e) => e.preventDefault()} className="space-y-3.5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <input
                  type="text"
                  placeholder="Keywords (e.g. AI, Cyber, Robotics)"
                  value={courseFilter.keyword}
                  onChange={(e) => setCourseFilter({ ...courseFilter, keyword: e.target.value })}
                  className="w-full px-4 py-2.5 bg-[#2d436f] border border-[#3b5385] rounded-none text-xs text-white placeholder-slate-300 focus:outline-none focus:border-[#3db166]"
                />
                <input
                  type="text"
                  placeholder="Course ID (e.g. CS101, REAP1025)"
                  value={courseFilter.courseId}
                  onChange={(e) => setCourseFilter({ ...courseFilter, courseId: e.target.value })}
                  className="w-full px-4 py-2.5 bg-[#2d436f] border border-[#3b5385] rounded-none text-xs text-white placeholder-slate-300 focus:outline-none focus:border-[#3db166]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <select
                  value={courseFilter.department}
                  onChange={(e) => setCourseFilter({ ...courseFilter, department: e.target.value })}
                  className="w-full px-4 py-2.5 bg-[#2d436f] border border-[#3b5385] rounded-none text-xs text-white focus:outline-none focus:border-[#3db166]"
                >
                  <option value="all">All Departments</option>
                  <option value="cse">Computer Science &amp; Engg.</option>
                  <option value="ai">AI &amp; Data Science</option>
                  <option value="cyber">Cyber Security</option>
                  <option value="ece">Electronics &amp; Comm.</option>
                  <option value="ee">Electrical Engineering</option>
                  <option value="civil">Civil Engineering</option>
                  <option value="mech">Mechanical Engineering</option>
                </select>

                <select
                  value={courseFilter.campus}
                  onChange={(e) => setCourseFilter({ ...courseFilter, campus: e.target.value })}
                  className="w-full px-4 py-2.5 bg-[#2d436f] border border-[#3b5385] rounded-none text-xs text-white focus:outline-none focus:border-[#3db166]"
                >
                  <option value="all">Campus</option>
                  <option value="main">RIET Bhankrota Campus</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <select
                  value={courseFilter.level}
                  onChange={(e) => setCourseFilter({ ...courseFilter, level: e.target.value })}
                  className="w-full px-4 py-2.5 bg-[#2d436f] border border-[#3b5385] rounded-none text-xs text-white focus:outline-none focus:border-[#3db166]"
                >
                  <option value="all">Program Level</option>
                  <option value="ug">Undergraduate (B.Tech)</option>
                  <option value="pg">Postgraduate (M.Tech / MCA)</option>
                </select>

                <select
                  value={courseFilter.instructor}
                  onChange={(e) => setCourseFilter({ ...courseFilter, instructor: e.target.value })}
                  className="w-full px-4 py-2.5 bg-[#2d436f] border border-[#3b5385] rounded-none text-xs text-white focus:outline-none focus:border-[#3db166]"
                >
                  <option value="all">Faculty / Department</option>
                  <option value="faculty">All Doctoral Faculty</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <select
                  value={courseFilter.semester}
                  onChange={(e) => setCourseFilter({ ...courseFilter, semester: e.target.value })}
                  className="w-full px-4 py-2.5 bg-[#2d436f] border border-[#3b5385] rounded-none text-xs text-white focus:outline-none focus:border-[#3db166]"
                >
                  <option value="all">Academic Session</option>
                  <option value="fall">Odd Semester 2026</option>
                  <option value="spring">Even Semester 2027</option>
                </select>

                <select
                  value={courseFilter.credit}
                  onChange={(e) => setCourseFilter({ ...courseFilter, credit: e.target.value })}
                  className="w-full px-4 py-2.5 bg-[#2d436f] border border-[#3b5385] rounded-none text-xs text-white focus:outline-none focus:border-[#3db166]"
                >
                  <option value="all">Credits</option>
                  <option value="3">3 Credits</option>
                  <option value="4">4 Credits</option>
                </select>
              </div>

              <Link
                to="/courses"
                className="w-full bg-[#3db166] hover:bg-[#349d5a] text-white font-bold py-3.5 rounded-none text-xs uppercase tracking-wider transition-colors shadow-md mt-2 flex items-center justify-center"
              >
                Search Courses
              </Link>
            </form>
          </div>

        </div>
      </section>

      {/* ========================================================
          SECTION 13: RECRUITER / PARTNER LOGOS STRIP (Screenshot 5)
          ======================================================== */}
      <section className="bg-[#152238] py-12 px-4 sm:px-6 border-b border-white/5">
        <div className="max-w-[1240px] mx-auto flex flex-wrap items-center justify-between gap-8 text-white/70 font-semibold tracking-wider text-sm uppercase">
          <span className="font-extrabold tracking-widest text-base hover:text-white transition-colors">TCS</span>
          <span className="flex items-center gap-1.5 font-bold tracking-widest hover:text-white transition-colors">
            <span className="text-[#3db166]">✦</span> INFOSYS
          </span>
          <span className="font-serif italic font-bold tracking-normal text-lg hover:text-white transition-colors">Capgemini</span>
          <span className="font-sans font-light tracking-wide text-base hover:text-white transition-colors">
            <strong className="font-bold">Cognizant</strong>
          </span>
          <span className="tracking-widest font-mono text-base font-bold hover:text-white transition-colors">AMAZON</span>
          <span className="tracking-wider text-sm font-bold hover:text-white transition-colors">L&amp;T INFOTECH</span>
        </div>
      </section>

      {/* ========================================================
          VIDEO MODAL (Interactive for Take A Tour & Video Tour)
          ======================================================== */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs">
          <div className="relative max-w-4xl w-full aspect-video bg-black rounded-lg overflow-hidden shadow-2xl">
            <button
              onClick={() => setIsVideoModalOpen(false)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/20 hover:bg-white text-white hover:text-black flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
              title="RIET Jaipur Campus Walkthrough"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}

    </div>
  );
}

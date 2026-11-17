import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  GraduationCap, BookOpen, Award, Users, Calendar, ArrowRight, Play, 
  CheckCircle2, Search, MapPin, Clock, ChevronRight, Trophy, Briefcase, Star, X
} from 'lucide-react';
import Template7RankStrip from '../components/Template7RankStrip';
import { recruitersList, latestNews, studentTestimonials } from '../../../data/collegeData';

export default function Template7Home({ onOpenEnquiry }) {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [selectedDept, setSelectedDept] = useState('all');
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  // Kingster Programs
  const kingsterPrograms = [
    {
      title: "Computer Science & Engineering",
      degree: "B.Tech & M.Tech",
      duration: "4 Years",
      category: "School of Computing",
      desc: "Specializations in Artificial Intelligence, Machine Learning, Cloud DevOps, and Advanced Algorithms.",
      img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80",
      link: "/departments/cse"
    },
    {
      title: "Cyber Security & Forensics",
      degree: "B.Tech",
      duration: "4 Years",
      category: "Emerging Technologies",
      desc: "Offensive security, ethical hacking, digital forensics, threat simulation, and network cryptography.",
      img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80",
      link: "/departments/cyber"
    },
    {
      title: "Artificial Intelligence & Data Science",
      degree: "B.Tech",
      duration: "4 Years",
      category: "School of Computing",
      desc: "Deep neural networks, computer vision, natural language processing, and GPU computing clusters.",
      img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80",
      link: "/departments/aids"
    },
    {
      title: "Electronics & Communication (VLSI)",
      degree: "B.Tech & M.Tech",
      duration: "4 Years",
      category: "School of Electronics",
      desc: "Ranked #1 in RTU. Semiconductor physics, Cadence VLSI layout, FPGA synthesis, and 5G RF engineering.",
      img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80",
      link: "/departments/ece"
    },
    {
      title: "Mechanical & Robotics Engineering",
      degree: "B.Tech & M.Tech",
      duration: "4 Years",
      category: "School of Mechanical",
      desc: "Autonomous mobile robotics, CNC machining, digital twin kinematics, and BAJA SAE motorsport design.",
      img: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80",
      link: "/departments/me"
    },
    {
      title: "Civil & Smart Infrastructure",
      degree: "B.Tech",
      duration: "4 Years",
      category: "School of Civil",
      desc: "Smart transit corridors, seismic structural design, digital total stations, and environmental engineering.",
      img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=600&q=80",
      link: "/departments/ce"
    }
  ];

  // Kingster Events (Classic Date Block)
  const kingsterEvents = [
    { day: "18", month: "NOV", title: "National Conference on AI & Green Computing", time: "10:00 AM - 04:30 PM", location: "Central Auditorium, RIET" },
    { day: "25", month: "NOV", title: "Annual Campus Recruitment Drive: Microsoft & Amazon", time: "09:00 AM - 06:00 PM", location: "T&P Placement Complex" },
    { day: "02", month: "DEC", title: "National Robotics Combat League & Hackathon", time: "09:30 AM - 05:00 PM", location: "Maker Space Arena" },
  ];

  const filteredPrograms = kingsterPrograms.filter(prog => {
    const matchesKeyword = !searchKeyword || 
      prog.title.toLowerCase().includes(searchKeyword.toLowerCase()) || 
      prog.desc.toLowerCase().includes(searchKeyword.toLowerCase());
    const matchesDept = selectedDept === 'all' || 
      (selectedDept === 'cse' && prog.link.includes('cse')) ||
      (selectedDept === 'cyber' && prog.link.includes('cyber')) ||
      (selectedDept === 'aids' && prog.link.includes('aids')) ||
      (selectedDept === 'ece' && prog.link.includes('ece')) ||
      (selectedDept === 'me' && prog.link.includes('me')) ||
      (selectedDept === 'ce' && prog.link.includes('ce'));
    return matchesKeyword && matchesDept;
  });

  return (
    <div className="w-full font-sans text-[#2a2a2a] bg-white">
      {/* 1. SIGNATURE KINGSTER HERO SLIDER BANNER */}
      <section className="relative min-h-[580px] sm:min-h-[640px] flex items-center bg-[#192f59] overflow-hidden">
        {/* Background Image with Collegiate Navy Gradient */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-35 scale-105 transition-transform duration-1000"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1600&q=80')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#192f59] via-[#192f59]/90 to-transparent" />

        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 py-20 relative z-10 w-full">
          <div className="max-w-2xl space-y-6">
            <div className="inline-flex items-center gap-2 bg-[#d2973b] text-[#192f59] font-bold text-xs uppercase tracking-widest px-3.5 py-1 rounded">
              <span>Rajasthan's Premier Technology Institute</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-bold font-playfair text-white leading-[1.12] tracking-tight">
              A Leading University in Engineering, Innovation &amp; Research.
            </h1>

            <p className="text-slate-200 text-sm sm:text-base lg:text-lg leading-relaxed font-normal">
              Empowering over 15,000 engineers and leaders worldwide since 2000. Approved by AICTE, affiliated to RTU Kota, with NBA accredited excellence across all branches.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onOpenEnquiry}
                className="bg-[#d2973b] hover:bg-[#b8822e] text-white font-bold py-3.5 px-8 rounded text-xs uppercase tracking-wider transition-all shadow-md hover:shadow-lg"
              >
                Apply For Admission
              </button>
              <Link
                to="/campus"
                className="border-2 border-white text-white hover:bg-white hover:text-[#192f59] font-bold py-3.5 px-8 rounded text-xs uppercase tracking-wider transition-all"
              >
                Take a Campus Tour
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THREE OVERLAPPING FEATURE BOXES (KINGSTER SIGNATURE) */}
      <section className="relative z-20 max-w-[1240px] mx-auto px-4 sm:px-6 -mt-14 sm:-mt-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 shadow-xl">
          {/* Box 1 */}
          <div className="bg-[#192f59] text-white p-8 rounded-lg flex flex-col justify-between group hover:bg-[#142647] transition-colors border-b-4 border-[#d2973b]">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded bg-[#d2973b] text-[#192f59] flex items-center justify-center font-bold">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold font-playfair text-white">
                Undergraduate Study
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                Choose from 8 accredited B.Tech degree tracks spanning AI/ML, Cyber Security, Robotics, VLSI, and Core Engineering.
              </p>
            </div>
            <Link to="/courses" className="pt-6 text-xs font-bold text-[#d2973b] group-hover:text-white inline-flex items-center gap-1.5 uppercase tracking-wider transition-colors">
              <span>View All Programs</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Box 2 */}
          <div className="bg-[#1f3a6e] text-white p-8 rounded-lg flex flex-col justify-between group hover:bg-[#192f59] transition-colors border-b-4 border-[#d2973b]">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded bg-white text-[#192f59] flex items-center justify-center font-bold">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold font-playfair text-white">
                University Life
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                A 30-acre lush green Wi-Fi campus with 40+ high-tech laboratories, modern hostels, sports stadium, and cultural fests.
              </p>
            </div>
            <Link to="/campus" className="pt-6 text-xs font-bold text-[#d2973b] group-hover:text-white inline-flex items-center gap-1.5 uppercase tracking-wider transition-colors">
              <span>Explore Campus</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Box 3 */}
          <div className="bg-[#192f59] text-white p-8 rounded-lg flex flex-col justify-between group hover:bg-[#142647] transition-colors border-b-4 border-[#d2973b]">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded bg-[#d2973b] text-[#192f59] flex items-center justify-center font-bold">
                <Trophy className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold font-playfair text-white">
                Career &amp; Placements
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                ₹54 LPA peak salary package, 94.2% placement record, and direct hiring partnerships with over 200+ global tech corporations.
              </p>
            </div>
            <Link to="/placements" className="pt-6 text-xs font-bold text-[#d2973b] group-hover:text-white inline-flex items-center gap-1.5 uppercase tracking-wider transition-colors">
              <span>View Placement Report</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. KINGSTER COURSE SEARCH WIDGET */}
      <section className="py-12 px-4 sm:px-6">
        <div className="max-w-[1240px] mx-auto bg-[#f8f9fa] border border-slate-200 rounded-lg p-6 sm:p-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="lg:w-1/3">
              <span className="text-xs uppercase font-bold text-[#d2973b] tracking-wider block mb-1">
                Find Your Degree
              </span>
              <h3 className="text-2xl font-bold font-playfair text-[#192f59]">
                Search Academic Courses
              </h3>
            </div>

            <div className="lg:w-2/3 w-full grid grid-cols-1 sm:grid-cols-3 gap-3">
              <input
                type="text"
                placeholder="Keywords (e.g. AI, Cyber, Robotics)"
                value={searchKeyword}
                onChange={(e) => setSearchKeyword(e.target.value)}
                className="w-full px-4 py-3 bg-white border border-slate-300 rounded text-xs text-[#2a2a2a] focus:outline-none focus:border-[#d2973b]"
              />

              <select
                value={selectedDept}
                onChange={(e) => setSelectedDept(e.target.value)}
                className="w-full px-4 py-3 bg-white border border-slate-300 rounded text-xs text-[#2a2a2a] focus:outline-none focus:border-[#d2973b]"
              >
                <option value="all">All Departments</option>
                <option value="cse">Computer Science</option>
                <option value="cyber">Cyber Security</option>
                <option value="aids">AI &amp; Data Science</option>
                <option value="ece">Electronics &amp; Comm</option>
                <option value="me">Mechanical Engg</option>
                <option value="ce">Civil Engg</option>
              </select>

              <Link
                to="/courses"
                className="w-full bg-[#192f59] hover:bg-[#d2973b] text-white font-bold py-3 px-6 rounded text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
              >
                <Search className="w-4 h-4" />
                <span>Search Course</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ABOUT UNIVERSITY (KINGSTER STYLE WITH PLAY BUTTON & STATS) */}
      <section className="py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#d2973b] block mb-2">
                About Our University
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold font-playfair text-[#192f59] leading-tight">
                A Few Words About RIET Jaipur
              </h2>
              <div className="h-1 w-14 bg-[#d2973b] my-4 rounded-full" />
            </div>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Rajasthan Institute of Engineering and Technology (RIET) was established in 2000 with approvals from AICTE, New Delhi and affiliation with Rajasthan Technical University (RTU), Kota. Over the past 24+ years, RIET has established a prestigious heritage of engineering excellence, world-class faculty mentoring, and career leadership.
            </p>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Located on Ajmer Road, Jaipur across a verdant 30-acre campus, RIET features 40+ specialized laboratories, an active entrepreneurship incubation center, and high-impact international IEEE research publication tracks.
            </p>

            {/* Counters */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-4 border-t border-slate-200">
              <div>
                <div className="text-3xl sm:text-4xl font-bold font-playfair text-[#192f59]">24+</div>
                <div className="text-xs font-semibold text-slate-500 uppercase mt-1">Years of Rigor</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold font-playfair text-[#192f59]">15K+</div>
                <div className="text-xs font-semibold text-slate-500 uppercase mt-1">Alumni Worldwide</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold font-playfair text-[#192f59]">94%</div>
                <div className="text-xs font-semibold text-slate-500 uppercase mt-1">Placement Rate</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold font-playfair text-[#192f59]">40+</div>
                <div className="text-xs font-semibold text-slate-500 uppercase mt-1">Modern Labs</div>
              </div>
            </div>

            <div className="pt-2">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#192f59] hover:text-[#d2973b] uppercase tracking-wider transition-colors"
              >
                <span>Read More About Our Mission</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Image with Video Modal */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-lg overflow-hidden shadow-2xl relative group">
              <img
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80"
                alt="RIET Campus Students"
                className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-[#192f59]/30 flex items-center justify-center">
                <button
                  onClick={() => setIsVideoModalOpen(true)}
                  className="w-16 h-16 rounded-full bg-[#d2973b] hover:bg-[#b8822e] text-white flex items-center justify-center shadow-xl transition-transform hover:scale-110"
                  aria-label="Play Campus Video"
                >
                  <Play className="w-6 h-6 fill-white ml-1" />
                </button>
              </div>

              {/* Badge Stamp */}
              <div className="absolute bottom-4 left-4 bg-white/95 p-3 rounded shadow-lg border-l-4 border-[#d2973b]">
                <div className="text-xs font-bold text-[#192f59]">RTU Kota Rank #1</div>
                <div className="text-[10px] text-slate-500">Electrical &amp; Computer Engineering</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4 z-50">
          <div className="bg-black rounded-lg max-w-3xl w-full aspect-video relative overflow-hidden shadow-2xl">
            <button
              onClick={() => setIsVideoModalOpen(false)}
              className="absolute top-3 right-3 p-2 rounded-full bg-white/20 text-white hover:bg-white/40 z-10"
            >
              <X className="w-5 h-5" />
            </button>
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
              title="RIET Campus Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}

      {/* 5. POPULAR ACADEMIC PROGRAMS (KINGSTER CARDS) */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-[#f7f8fa] border-t border-b border-slate-200">
        <div className="max-w-[1240px] mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#d2973b] block mb-2">
              Featured Programs
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-playfair text-[#192f59]">
              Explore Our Degree Programs
            </h2>
            <div className="h-1 w-14 bg-[#d2973b] my-4 mx-auto rounded-full" />
            <p className="text-xs sm:text-sm text-slate-600">
              Our comprehensive curriculum combines theoretical foundations, hands-on laboratory immersion, and industry-led capstone internships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPrograms.map((prog, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="h-48 overflow-hidden relative">
                    <img
                      src={prog.img}
                      alt={prog.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-[#192f59] text-white text-[11px] font-bold px-3 py-1 rounded">
                      {prog.duration}
                    </div>
                  </div>

                  <div className="p-6">
                    <span className="text-[11px] text-[#d2973b] font-bold uppercase tracking-wider block mb-1">
                      {prog.category}
                    </span>
                    <h3 className="text-xl font-bold font-playfair text-[#192f59] group-hover:text-[#d2973b] transition-colors mb-2">
                      {prog.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal mb-4">
                      {prog.desc}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-0 border-t border-slate-100 flex items-center justify-between text-xs font-bold">
                  <span className="text-slate-500">{prog.degree}</span>
                  <Link
                    to={prog.link}
                    className="text-[#192f59] group-hover:text-[#d2973b] inline-flex items-center gap-1 transition-colors uppercase tracking-wider text-[11px]"
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/courses"
              className="inline-flex items-center gap-2 bg-[#192f59] hover:bg-[#d2973b] text-white font-bold py-3.5 px-8 rounded text-xs uppercase tracking-wider transition-colors shadow-sm"
            >
              <span>View All 8 Degree Programs</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. CALLOUT PARALLAX ADMISSION BANNER */}
      <section 
        className="py-20 px-4 sm:px-6 relative bg-fixed bg-cover bg-center text-white"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1600&q=80')` }}
      >
        <div className="absolute inset-0 bg-[#192f59]/90" />
        <div className="max-w-[900px] mx-auto text-center relative z-10 space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-[#d2973b] block">
            Admissions Open For Session 2025-26
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-playfair text-white tracking-tight leading-tight">
            Apply for Direct Admission &amp; REAP Counselling Code: 1025
          </h2>
          <p className="text-slate-200 text-sm sm:text-base max-w-[65ch] mx-auto leading-relaxed">
            Direct merit scholarships up to 100% tuition waiver for meritorious 10+2 students, JEE Main high-rankers, and state sports medalists.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={onOpenEnquiry}
              className="bg-[#d2973b] hover:bg-[#b8822e] text-white font-bold py-3.5 px-8 rounded text-xs uppercase tracking-wider transition-all shadow-lg"
            >
              Apply Online Now
            </button>
            <Link
              to="/admissions"
              className="border-2 border-white text-white hover:bg-white hover:text-[#192f59] font-bold py-3.5 px-8 rounded text-xs uppercase tracking-wider transition-all"
            >
              Admissions Guidelines
            </Link>
          </div>
        </div>
      </section>

      {/* 7. KINGSTER NEWS & EVENTS (CLASSIC 2-COLUMN SPLIT) */}
      <section className="py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-[1240px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Col: Upcoming Events (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#d2973b] block mb-1">
                  University Calendar
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold font-playfair text-[#192f59]">
                  Upcoming Events
                </h2>
                <div className="h-1 w-12 bg-[#d2973b] my-3 rounded-full" />
              </div>

              <div className="space-y-4">
                {kingsterEvents.map((ev, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-white border border-slate-200 rounded-lg shadow-xs hover:border-[#d2973b] transition-all flex items-start gap-4 group"
                  >
                    {/* Kingster Square Date Block */}
                    <div className="w-14 h-14 rounded bg-[#192f59] text-white flex flex-col items-center justify-center shrink-0 group-hover:bg-[#d2973b] transition-colors">
                      <span className="text-lg font-bold font-playfair leading-none">{ev.day}</span>
                      <span className="text-[10px] font-bold uppercase tracking-wider mt-0.5">{ev.month}</span>
                    </div>

                    <div className="space-y-1">
                      <h4 className="text-sm font-bold text-[#192f59] group-hover:text-[#d2973b] transition-colors leading-snug">
                        {ev.title}
                      </h4>
                      <div className="flex items-center gap-1.5 text-[11px] text-slate-500">
                        <Clock className="w-3 h-3 text-[#d2973b]" />
                        <span>{ev.time}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-[11px] text-slate-500">
                        <MapPin className="w-3 h-3 text-[#d2973b]" />
                        <span>{ev.location}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div>
                <Link
                  to="/news"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#192f59] hover:text-[#d2973b] uppercase tracking-wider transition-colors"
                >
                  <span>View All Academic Events</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Col: Latest University News (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#d2973b] block mb-1">
                  Campus Journal
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold font-playfair text-[#192f59]">
                  Latest News &amp; Updates
                </h2>
                <div className="h-1 w-12 bg-[#d2973b] my-3 rounded-full" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {latestNews.slice(0, 2).map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white border border-slate-200 rounded-lg overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
                  >
                    <div>
                      <div className="h-40 overflow-hidden">
                        <img
                          src={item.image || "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80"}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-5">
                        <div className="text-[11px] text-[#d2973b] font-bold uppercase tracking-wider mb-1">
                          {item.cat || item.category || 'Academic'} • {item.date}
                        </div>
                        <h4 className="text-base font-bold font-playfair text-[#192f59] group-hover:text-[#d2973b] transition-colors leading-snug mb-2">
                          {item.title}
                        </h4>
                        <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                    <div className="p-5 pt-0">
                      <Link
                        to="/news"
                        className="text-xs font-bold text-[#192f59] group-hover:text-[#d2973b] inline-flex items-center gap-1 transition-colors uppercase tracking-wider text-[11px]"
                      >
                        <span>Read Story</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>

              <div>
                <Link
                  to="/news"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#192f59] hover:text-[#d2973b] uppercase tracking-wider transition-colors"
                >
                  <span>View News Archive</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. CORPORATE RECRUITERS STRIP */}
      <section className="py-12 px-4 sm:px-6 bg-[#f8f9fa] border-t border-slate-200">
        <div className="max-w-[1240px] mx-auto text-center">
          <span className="text-xs uppercase font-bold text-slate-500 tracking-widest block mb-6">
            Leading Corporations Recruiting From RIET
          </span>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 items-center">
            {recruitersList.slice(0, 6).map((recruiter, idx) => (
              <div
                key={idx}
                className="p-4 bg-white rounded border border-slate-200 shadow-2xs text-center flex flex-col justify-center min-h-[75px]"
              >
                <span className="font-bold font-playfair text-sm text-[#192f59]">
                  {recruiter.name}
                </span>
                <span className="text-[10px] text-[#d2973b] font-semibold mt-0.5">
                  {recruiter.pkg || 'Top Recruiter'}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

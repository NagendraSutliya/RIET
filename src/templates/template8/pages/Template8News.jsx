import React, { useState } from 'react';
import Template8PageHeader from '../components/Template8PageHeader';
import { 
  Calendar, Clock, MapPin, Tag, ChevronRight, Search, 
  ArrowRight, BookOpen, Share2, X, CheckCircle2, User, Filter
} from 'lucide-react';

export default function Template8News({ onOpenEnquiry }) {
  const [selectedCat, setSelectedCat] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeArticle, setActiveArticle] = useState(null);
  const [subscribedEmail, setSubscribedEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const categories = [
    'All',
    'Campus News',
    'Hackathons & Tech',
    'Placements',
    'Workshops & Seminars',
    'Academic Notices'
  ];

  const newsArticles = [
    {
      id: 1,
      title: "RIET Students Bag Record ₹54 LPA Package at US Tech Conglomerate",
      category: "Placements",
      date: "Nov 12, 2025",
      author: "Placement Cell",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
      excerpt: "Three final-year B.Tech Computer Science students have secured international job offers with an unprecedented compensation of ₹54 LPA, leading this season's placement drive.",
      content: `The Training and Placement Cell at Rajasthan Institute of Engineering & Technology (RIET), Jaipur is delighted to announce that three of our B.Tech Computer Science & Engineering students have accepted offers from a top-tier global enterprise headquartered in Silicon Valley with an annual package of ₹54 LPA.

The recruitment drive witnessed rigorous screening rounds including competitive algorithm design, distributed system architecture interviews, and high-performance engineering assessments.

Over 120 Fortune 500 corporations and cutting-edge deep tech startups have visited RIET Jaipur this semester alone, offering a record 94.2% placement rate across B.Tech, M.Tech, and MCA cohorts.

"This remarkable milestone reflects the steadfast commitment of RIET to experiential project-based learning and industry-aligned technical curriculum," remarked the Director of RIET.`
    },
    {
      id: 2,
      title: "Annual National Smart Rajasthan Hackathon 2026 Announced",
      category: "Hackathons & Tech",
      date: "Nov 08, 2025",
      author: "Innovation Hub",
      readTime: "3 min read",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
      excerpt: "36-hour non-stop hackathon inviting over 500 student developers across India to build AI-driven solutions for civic governance, renewable energy, and desert water conservation.",
      content: `RIET Jaipur's Department of Artificial Intelligence and Data Science is proud to host the 6th edition of the 'Smart Rajasthan National Hackathon'.

The event brings together undergraduate developers, machine learning practitioners, and IoT hardware inventors across premier institutes including IITs, NITs, and top technical colleges in India.

Prizes worth over ₹5,00,000 will be awarded across six tracks:
1. Generative AI for Rural Healthcare
2. Smart Grid & Solar Microgrids
3. Water Desalination & Canal Monitoring IoT
4. AgriTech Drone Vision
5. Decentralized Land Registry
6. Open Track Innovation

Registrations are currently open for 4-member teams. Free residential lodging and mentorship from Google Developer Experts and AWS Solutions Architects will be provided.`
    },
    {
      id: 3,
      title: "MoU Signed with Siemens & Dassault Systèmes for Industry 4.0 Center of Excellence",
      category: "Campus News",
      date: "Oct 28, 2025",
      author: "Dean Academics",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80",
      excerpt: "State-of-the-art ₹3.2 Crore robotics, digital twin, and automation lab inaugurated on campus to train mechanical, electrical, and computer engineering students.",
      content: `RIET Jaipur has formalized a landmark academic-industrial partnership with Siemens India and Dassault Systèmes. The joint initiative establishes a dedicated Center of Excellence in Industrial Robotics and Digital Twin Simulation within the campus.

Equipped with 6-axis articulated robotic arms, PLC automation racks, additive manufacturing units, and Catia/NX software licenses, the lab enables students to achieve international professional certifications during their undergraduate studies.

The initiative bridges the gap between academic theory and high-precision production environments in automotive, aerospace, and semiconductor manufacturing.`
    },
    {
      id: 4,
      title: "IEEE International Conference on Advanced Computing & Cloud Architectures (ICACCA 2026)",
      category: "Workshops & Seminars",
      date: "Oct 15, 2025",
      author: "Research Directorate",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80",
      excerpt: "Call for research papers across cloud computing, zero-trust security, distributed ledgers, and quantum computing. Accepted papers to be published in IEEE Xplore.",
      content: `The 4th IEEE International Conference on Advanced Computing and Cloud Architectures (ICACCA 2026) will take place at RIET Jaipur on March 20-22, 2026.

Keynote speakers include distinguished research scientists from Carnegie Mellon University, IIT Delhi, and Microsoft Research.

Researchers, post-graduate scholars, and industry engineers are invited to submit original manuscripts across cloud infrastructure, edge intelligence, cryptographic protocols, and quantum computing.

Important Dates:
- Manuscript Submission: January 15, 2026
- Acceptance Notification: February 10, 2026
- Camera-ready Copy: February 28, 2026`
    },
    {
      id: 5,
      title: "REAP 2025 Cutoffs & Direct Merit Seat Counselling Schedule",
      category: "Academic Notices",
      date: "Sep 30, 2025",
      author: "Admissions Directorate",
      readTime: "3 min read",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80",
      excerpt: "Important instructions for students admitted through Rajasthan Engineering Admission Process (REAP Code: 1025) and management quota merit rounds.",
      content: `Candidates seeking admission to B.Tech First Year (Semester 1) and Lateral Entry (Semester 3) for session 2025-26 at RIET Jaipur (REAP Code: 1025) are advised to review the verified reporting schedule.

Candidates must present original documentation along with two self-attested photocopies:
1. 10th & 12th standard marksheets
2. JEE Main 2025 score card / REAP allotment letter
3. Transfer Certificate & Migration Certificate
4. Domicile & Category Certificate (if applicable)
5. 6 Passport-size color photographs

Merit scholarship fee waiver certificates will be issued on the spot during document verification for qualifying candidates.`
    },
    {
      id: 6,
      title: "RIET Annual Cultural & Technical Festival 'Tarang 2026' Dates Released",
      category: "Campus News",
      date: "Sep 20, 2025",
      author: "Student Council",
      readTime: "2 min read",
      image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80",
      excerpt: "Three days of electrifying concerts, battle of bands, robotics wars, code marathons, and fashion showcases scheduled for February 2026.",
      content: `The Student Affairs Council of RIET Jaipur is delighted to announce that 'Tarang 2026', our premier annual technical and cultural fest, will be held from February 26 to February 28, 2026.

With over 40 distinct inter-collegiate competitions, celebrity musical concerts, food trucks, and art exhibits, Tarang hosts over 8,000 attendees annually from colleges across Rajasthan, Delhi NCR, and Gujarat.

Competition registration links and performer line-ups will be made live on the student portal next month.`
    }
  ];

  const upcomingEvents = [
    {
      day: "28",
      month: "NOV",
      year: "2025",
      title: "Google Cloud & Generative AI Hands-on Workshop",
      time: "10:00 AM - 04:30 PM",
      location: "Central Computing Center, Block A",
      tag: "Technical Workshop"
    },
    {
      day: "05",
      month: "DEC",
      year: "2025",
      title: "Global Alumni Meet & Mentorship Roundtable 2025",
      time: "02:00 PM - 07:00 PM",
      location: "Main Auditorium & Convention Hall",
      tag: "Alumni Network"
    },
    {
      day: "14",
      month: "DEC",
      year: "2025",
      title: "Campus Recruitment Drive: Capgemini & Cognizant",
      time: "09:00 AM - 06:00 PM",
      location: "Corporate Placement Suite",
      tag: "Placement"
    },
    {
      day: "22",
      month: "JAN",
      year: "2026",
      title: "Inter-College Robotics Combat Championship",
      time: "11:00 AM - 05:00 PM",
      location: "Open Air Sports Arena",
      tag: "Robotics Fest"
    }
  ];

  const filteredNews = newsArticles.filter((article) => {
    const matchesCat = selectedCat === 'All' || article.category === selectedCat;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

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
    <div className="w-full font-sans text-[#2a2a2a] bg-white">
      {/* 1. Header Banner */}
      <Template8PageHeader
        title="News &amp; Events"
        desc="Official press releases, campus innovations, academic symposia, and career achievements from Rajasthan Institute of Engineering &amp; Technology."
        breadcrumbs={[{ label: 'News & Events' }]}
      />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {/* 2. Top Filter and Search Bar */}
        <div className="bg-[#f8f9fa] border border-slate-200 rounded-lg p-5 mb-10">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            {/* Category Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1 md:pb-0">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCat(cat)}
                  className={`px-3.5 py-1.5 rounded text-xs font-bold transition-all whitespace-nowrap ${
                    selectedCat === cat
                      ? 'bg-[#192f59] text-white shadow-xs'
                      : 'bg-white text-slate-600 hover:text-[#192f59] border border-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Box */}
            <div className="relative min-w-[240px]">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 bg-white border border-slate-300 rounded text-xs text-[#2a2a2a] focus:outline-none focus:border-[#d2973b]"
              />
            </div>
          </div>
        </div>

        {/* 3. Main Content Split: News Grid (8 cols) & Upcoming Events Sidebar (4 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* LEFT: News Grid (8 Cols) */}
          <div className="lg:col-span-8 space-y-8">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <h2 className="text-xl sm:text-2xl font-bold font-playfair text-[#192f59]">
                Articles &amp; Announcements ({filteredNews.length})
              </h2>
              <span className="text-xs text-slate-500 font-medium">
                Category: <strong className="text-[#192f59]">{selectedCat}</strong>
              </span>
            </div>

            {filteredNews.length === 0 ? (
              <div className="bg-[#f8f9fa] border border-dashed border-slate-300 rounded-lg p-12 text-center">
                <p className="text-slate-500 text-sm mb-3">No news articles found matching your criteria.</p>
                <button
                  onClick={() => { setSelectedCat('All'); setSearchQuery(''); }}
                  className="text-xs font-bold text-[#d2973b] hover:underline"
                >
                  Reset all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredNews.map((article) => (
                  <article
                    key={article.id}
                    className="bg-white border border-slate-200 rounded-lg overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
                  >
                    <div>
                      {/* Image */}
                      <div className="h-48 overflow-hidden relative">
                        <img
                          src={article.image}
                          alt={article.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <span className="absolute top-3 left-3 bg-[#192f59] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded shadow">
                          {article.category}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="p-5">
                        <div className="flex items-center gap-3 text-[11px] text-slate-500 mb-2">
                          <span className="inline-flex items-center gap-1">
                            <Calendar className="w-3 h-3 text-[#d2973b]" />
                            {article.date}
                          </span>
                          <span>•</span>
                          <span className="inline-flex items-center gap-1">
                            <Clock className="w-3 h-3 text-[#d2973b]" />
                            {article.readTime}
                          </span>
                        </div>

                        <h3 className="text-base font-bold font-playfair text-[#192f59] group-hover:text-[#d2973b] transition-colors leading-snug mb-2.5">
                          {article.title}
                        </h3>

                        <p className="text-xs text-slate-600 leading-relaxed font-normal line-clamp-3">
                          {article.excerpt}
                        </p>
                      </div>
                    </div>

                    <div className="px-5 pb-5 pt-0">
                      <button
                        onClick={() => setActiveArticle(article)}
                        className="text-xs font-bold text-[#192f59] group-hover:text-[#d2973b] inline-flex items-center gap-1.5 transition-colors uppercase tracking-wider"
                      >
                        <span>Read Full Story</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>

          {/* RIGHT: Kingster Signature Events & Info Sidebar (4 Cols) */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* 1. Upcoming Events Box */}
            <div className="bg-[#f8f9fa] border border-slate-200 rounded-lg p-6">
              <div className="border-b border-slate-200 pb-3 mb-5">
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#d2973b] block mb-1">
                  Schedule
                </span>
                <h3 className="text-xl font-bold font-playfair text-[#192f59]">
                  Upcoming Events
                </h3>
              </div>

              <div className="space-y-4">
                {upcomingEvents.map((evt, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 bg-white border border-slate-200 rounded-md hover:border-[#d2973b] transition-colors flex items-start gap-3.5 group"
                  >
                    {/* Kingster Square Date Block */}
                    <div className="w-13 h-13 rounded bg-[#192f59] text-white flex flex-col items-center justify-center shrink-0 group-hover:bg-[#d2973b] transition-colors p-1">
                      <span className="text-base font-bold font-playfair leading-none">{evt.day}</span>
                      <span className="text-[9px] font-bold uppercase tracking-wider mt-0.5">{evt.month}</span>
                    </div>

                    <div className="space-y-1 min-w-0">
                      <span className="text-[10px] font-semibold text-[#d2973b] uppercase tracking-wider">
                        {evt.tag}
                      </span>
                      <h4 className="text-xs font-bold text-[#192f59] group-hover:text-[#d2973b] transition-colors leading-snug">
                        {evt.title}
                      </h4>
                      <div className="flex items-center gap-1 text-[10px] text-slate-500">
                        <Clock className="w-2.5 h-2.5 text-slate-400" />
                        <span>{evt.time}</span>
                      </div>
                      <div className="flex items-center gap-1 text-[10px] text-slate-500">
                        <MapPin className="w-2.5 h-2.5 text-slate-400" />
                        <span className="truncate">{evt.location}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-5 pt-4 border-t border-slate-200 text-center">
                <button
                  onClick={onOpenEnquiry}
                  className="w-full bg-[#192f59] hover:bg-[#142647] text-white text-xs font-bold py-2.5 px-4 rounded uppercase tracking-wider transition-colors shadow-xs"
                >
                  Register For An Event
                </button>
              </div>
            </div>

            {/* 2. Kingster Newsletter Subscription Box */}
            <div className="bg-[#192f59] text-white p-6 rounded-lg shadow-md border-b-4 border-[#d2973b]">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#d2973b] block mb-1">
                Stay Informed
              </span>
              <h3 className="text-lg font-bold font-playfair text-white mb-2">
                Subscribe to RIET Gazette
              </h3>
              <p className="text-xs text-slate-200 leading-relaxed font-normal mb-4">
                Receive weekly digests containing placement notifications, workshop schedules, and exam circulars.
              </p>

              {isSubscribed ? (
                <div className="bg-emerald-600/20 border border-emerald-400/30 text-emerald-300 p-3 rounded text-xs flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Thank you! You are subscribed to RIET updates.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="space-y-2">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address"
                    value={subscribedEmail}
                    onChange={(e) => setSubscribedEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-white/10 border border-white/20 rounded text-xs text-white placeholder-slate-400 focus:outline-none focus:border-[#d2973b]"
                  />
                  <button
                    type="submit"
                    className="w-full bg-[#d2973b] hover:bg-[#b8822e] text-white text-xs font-bold py-2.5 rounded uppercase tracking-wider transition-colors shadow"
                  >
                    Subscribe Now
                  </button>
                </form>
              )}
            </div>

            {/* 3. Media Relations Card */}
            <div className="bg-white border border-slate-200 p-5 rounded-lg space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#192f59]">
                Media &amp; Press Relations
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Journalists and publication editors can reach our public relations desk for interviews and official releases:
              </p>
              <div className="text-xs text-slate-700 font-medium space-y-1">
                <div>Email: <a href="mailto:press@rietjaipur.ac.in" className="text-[#d2973b] hover:underline">press@rietjaipur.ac.in</a></div>
                <div>Phone: +91 141 225 0033</div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* 4. Full Article Reading Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative animate-in fade-in zoom-in-95 duration-200">
            {/* Close Button */}
            <button
              onClick={() => setActiveArticle(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-slate-900/70 hover:bg-slate-900 text-white flex items-center justify-center transition-colors shadow"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image */}
            <div className="h-60 sm:h-72 w-full overflow-hidden relative">
              <img
                src={activeArticle.image}
                alt={activeArticle.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-5 right-5 text-white">
                <span className="bg-[#d2973b] text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded">
                  {activeArticle.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-playfair mt-1.5 leading-snug">
                  {activeArticle.title}
                </h3>
              </div>
            </div>

            {/* Article Body */}
            <div className="p-6 sm:p-8 space-y-4">
              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 pb-3 border-b border-slate-100">
                <span className="inline-flex items-center gap-1 font-semibold text-[#192f59]">
                  <User className="w-3.5 h-3.5 text-[#d2973b]" />
                  {activeArticle.author}
                </span>
                <span>•</span>
                <span className="inline-flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-[#d2973b]" />
                  {activeArticle.date}
                </span>
                <span>•</span>
                <span>{activeArticle.readTime}</span>
              </div>

              <div className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal whitespace-pre-line space-y-3">
                {activeArticle.content}
              </div>

              <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs font-bold text-[#192f59]">
                  <Share2 className="w-4 h-4 text-[#d2973b]" />
                  <span>Share Announcement</span>
                </div>
                <button
                  onClick={() => setActiveArticle(null)}
                  className="bg-[#192f59] hover:bg-[#142647] text-white text-xs font-bold py-2 px-5 rounded uppercase tracking-wider transition-colors"
                >
                  Close Article
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

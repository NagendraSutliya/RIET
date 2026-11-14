# RIET Jaipur — Full-Fledged College Website Project Plan

> **Institution**: Rajasthan Institute of Engineering & Technology (RIET), Jaipur  
> **Tech Stack**: React.js + Vite + Tailwind CSS + React Router DOM + Lucide Icons  
> **Design Theme**: Academic Navy (`#102b50`), Institutional Gold (`#e6ad3d`), Slate Ink (`#1c3048`), Paper Light (`#f4f7fa`)  
> **Target Audience**: Prospective Students, Parents, Current Students, Faculty, Corporate Recruiters, and Accrediting Bodies (AICTE / RTU)

---

## 1. Project Overview & Objectives

The goal is to build a full-fledged, modern, fast, and responsive institutional web portal for **RIET Jaipur**, taking structural and content cues from the verified requirements and prototypes in `requirements/RIET Website template 2`.

### Core Goals:
1. **Admissions & High-Conversion Funnel**: Clear program details, transparent fee & scholarship information, and high-converting admission enquiry forms with validation.
2. **Academic & Departmental Showcase**: In-depth department pages (CSE, Cyber Security, IoT, AI & DS, Mechanical, Civil, Electrical, Management) detailing labs, faculty, syllabi, and POs/PEOs.
3. **Training & Placements Portal**: Recruiter logos marquee, placement statistics, top packages, placement cell (TPO) contact, and student success stories.
4. **Student Hub & Circulars**: Dedicated Student Corner with real-time notice ticker, examination updates, downloadable syllabus, and academic calendar.
5. **Accreditation & Statutory Compliance**: Transparent sections for AICTE approval letters (EOA), RTU affiliations, Mandatory Disclosures, Anti-Ragging committee, and Grievance Redressal cell.

---

## 2. Technology Stack & Tooling

| Component | Selected Technology | Purpose & Value |
| :--- | :--- | :--- |
| **Frontend Core** | **React.js 18+ (Vite)** | Lightning-fast development builds, component-driven UI, optimal bundle size. |
| **Styling & Design System** | **Tailwind CSS 3+** | Utility-first styling matching RIET's brand tokens with responsive layout utilities. |
| **Icons & Micro-graphics** | **Lucide React** | Clean, modern, accessible institutional icons. |
| **Routing** | **React Router DOM v6** | Declarative client-side routing with smooth scroll-to-top and nested routes. |
| **Animations** | **Framer Motion / Tailwind Animate** | Subtle micro-interactions, smooth accordion reveals, modal popups, and marquee tickers. |
| **Data Layer** | **Modular JSON & Mock Store** | Cleanly separated mock datasets (`courses.json`, `notices.json`, `faculty.json`, `placements.json`) that can easily connect to a REST/GraphQL backend or CMS later. |
| **Form Handling** | **React Hook Form / Standard Controlled State** | Real-time validation for admission enquiries and contact forms. |

---

## 3. Design System & Brand Palette

### Color Tokens
```css
/* Core Brand Tokens */
--riet-navy-dark:   #091d35; /* Top utility bar & footer background */
--riet-navy:        #102b50; /* Primary brand color, headers, buttons */
--riet-blue:        #28679e; /* Hover accents, secondary links */
--riet-gold:        #e6ad3d; /* Highlights, badges, primary CTA button */
--riet-gold-hover:  #d49c2c; /* CTA button hover state */
--riet-ink:         #1c3048; /* Primary body copy */
--riet-muted:       #64748b; /* Secondary helper text, subtitles */
--riet-paper:       #f4f7fa; /* Alternating section background */
--riet-line:        #e5eaf0; /* Card borders, dividers */
```

### Typography Hierarchy
- **Headings**: `Manrope`, sans-serif (800 / 700 weight, bold institutional tone)
- **Body**: `DM Sans` or `Plus Jakarta Sans`, sans-serif (400 / 500 / 600 weight, high readability)

---

## 4. Complete Sitemap & Route Structure

```
/ (Home)
├── /about (About RIET, Vision, Mission, History, Infrastructure)
├── /leadership (President, Director, HODs, Advisory Board)
├── /approvals (AICTE Approvals, RTU Affiliations, NBA/NAAC)
├── /academics (All Academic Pathways & Programs Overview)
├── /departments (Department Hub)
│   ├── /departments/cse (Computer Science & Engineering)
│   ├── /departments/cyber-security (Cyber Security)
│   ├── /departments/iot (Internet of Things)
│   ├── /departments/ai-ds (Artificial Intelligence & Data Science)
│   ├── /departments/mechanical (Mechanical Engineering)
│   ├── /departments/civil (Civil Engineering)
│   ├── /departments/electrical (Electrical Engineering)
│   └── /departments/management (MBA / BBA / MCA)
├── /admissions (Admission Process, Eligibility, How to Apply)
├── /fees-scholarships (Tuition Fees, Scholarships, Education Loans)
├── /placements (Placement Stats, Recruiter Marquee, TPO Desk, Recruiters List)
├── /campus-life (Campus Atmosphere, Student Clubs, Sports, Cultural Fest)
├── /facilities (Laboratories, Central Library, Hostels, Transport, Cafeteria)
├── /research-innovation (R&D Projects, Faculty Publications, Patents)
├── /incubation (RIET Incubation & Entrepreneurship Cell - E-Cell)
├── /news-events (Campus News, Technical Workshops, Upcoming Seminars)
├── /gallery (Categorized Photo & Video Gallery)
├── /student-corner (Notice Board, Exam Schedule, Syllabi, Downloads)
├── /mandatory-disclosure (Statutory AICTE & RTU Disclosures, Anti-Ragging Cell)
└── /contact (Enquiry Form, Campus Address, Directions, Direct Contacts)
```

---

## 5. Component Architecture & Modular Layout

```
src/
├── assets/                  # Logos, banners, campus photos, recruiter logos
├── components/
│   ├── common/
│   │   ├── TopBar.jsx       # Phone, Email, AICTE code, Quick Links
│   │   ├── Navbar.jsx       # Brand logo, Desktop Megamenu, Mobile Drawer
│   │   ├── Footer.jsx       # Multi-column footer, Quick links, Statutory links, Copyright
│   │   ├── Button.jsx       # Primary gold CTA, Navy outline, Ghost buttons
│   │   ├── SectionHeading.jsx # Kicker, Main title, Subtitle with consistent spacing
│   │   ├── Card.jsx         # Uniform elevation, hover-lift, image container
│   │   └── Modal.jsx        # Admission enquiry pop-up modal
│   ├── home/
│   │   ├── HeroBanner.jsx   # High-impact slider, punchline, CTA buttons
│   │   ├── StatsStrip.jsx   # 2000 Est., Placements stats, Campus area, Faculty ratio
│   │   ├── ProgramsGrid.jsx # Interactive UG/PG course cards with duration & eligibility
│   │   ├── NoticeTicker.jsx # Scrolling / filterable live notifications
│   │   ├── RecruitersMarquee.jsx # Infinite smooth recruiter logo carousel
│   │   ├── CampusTourSnippet.jsx # Photo showcase / Video tour link
│   │   └── Testimonials.jsx # Student and alumni quote cards
│   ├── department/
│   │   ├── DeptHeader.jsx   # Banner, HOD message snippet, Quick stats
│   │   ├── DeptNavTabs.jsx  # Overview, Labs, Faculty, Syllabus, Achievements
│   │   ├── LabsGrid.jsx     # Lab photos, equipment list
│   │   └── FacultyCard.jsx  # Profile image, designation, qualifications, research
│   ├── admissions/
│   │   ├── StepProcess.jsx  # 4-step admission journey
│   │   ├── FeeTable.jsx     # Course-wise fee structure
│   │   └── EnquiryForm.jsx  # High-converting lead form with validation
│   └── student/
│       ├── NoticeBoard.jsx  # Category tabs: Academic, Exam, Placement, Circulars
│       └── DownloadCard.jsx # Syllabus & Forms with PDF download icon
├── data/                    # JSON datasets for instant editing and future API migration
│   ├── departments.json     # All departmental data, labs, faculty
│   ├── courses.json         # Course details, duration, intake, eligibility
│   ├── notices.json         # Notices with category, date, and PDF link
│   ├── recruiters.json      # Top recruiter companies and packages
│   └── gallery.json         # Photo categories (Campus, Events, Labs, Sports)
├── pages/                   # Route page components (Home, About, Placements, etc.)
├── router/
│   └── AppRouter.jsx        # Central route definitions with ScrollToTop
├── App.jsx                  # Root layout wrapper
└── main.jsx                 # Entry point with Tailwind CSS imports
```

---

## 6. Detailed Implementation Roadmap

### Phase 1: Environment Setup & Project Initialization
- [ ] Initialize React + Vite project in the repository.
- [ ] Install dependencies: `tailwindcss`, `postcss`, `autoprefixer`, `lucide-react`, `react-router-dom`, `clsx`, `tailwind-merge`.
- [ ] Configure `tailwind.config.js` with RIET brand colors, fonts (`Manrope`, `DM Sans`), and container max-widths.
- [ ] Setup base CSS styles, font imports, and reusable utility classes.

### Phase 2: Navigation & Structural Shell
- [ ] Build **TopBar** (Emergency helpline, Admissions numbers, Email, Student portal link).
- [ ] Build **Navbar** with a modern responsive mega-menu:
  - Academics & Departments dropdown.
  - Admissions & Fees dropdown.
  - Placements, Campus Life, About, and Contact links.
  - Prominent "Enquire Now" gold action button.
- [ ] Build mobile navigation drawer with accordion submenus.
- [ ] Build multi-column **Footer** with Google Map link, institutional affiliations, and quick links.

### Phase 3: Homepage Build (Core Showcase)
- [ ] **Hero Section**: Engaging background, accreditation highlights, headline: *"Building Engineers. Creating Tomorrow."*, and dual CTA buttons.
- [ ] **Institutional Highlights Counter**: 2000 Established, top packages, qualified faculty, RTU ranking.
- [ ] **About RIET Split Section**: Connecting knowledge with practice, key institutional pillars.
- [ ] **Explore Programs Grid**: Filter tabs (B.Tech, M.Tech, MBA, MCA, BCA, BBA) linking directly to details.
- [ ] **Live Notice & Announcement Board**: Real-time ticker with categories and download links.
- [ ] **Top Recruiters Carousel**: Marquee of companies hiring from RIET.
- [ ] **Campus Life & Facilities Teaser**: Modern interactive cards with hover effects.
- [ ] **Quick Enquiry Ribbon**: High-conversion floating or embedded banner.

### Phase 4: Academics & Department System
- [ ] Build central **Academics Overview** page (`/academics`).
- [ ] Build dynamic **Department Hub** (`/departments`) and individual pages:
  - Computer Science & Engineering
  - Cyber Security
  - Internet of Things (IoT)
  - Mechanical Engineering
  - Civil Engineering
  - Electrical Engineering
  - Management & Computer Applications (MBA, MCA, BCA, BBA)
- [ ] Include Department Overview, HOD Desk, Laboratory Infrastructure, Faculty Directory, and Syllabi.

### Phase 5: Admissions, Fees & Lead Funnel
- [ ] Build **Admissions Page** (`/admissions`): 4-step process guide, eligibility criteria, required documents checklist.
- [ ] Build **Fees & Scholarships** (`/fees-scholarships`): Transparent breakdown, state/merit scholarship details, education loan partners.
- [ ] Build **Interactive Lead Form**:
  - Name, Email, Phone, Preferred Course, City, and Message.
  - Form validation with error states and instant success confirmation.
  - Quick "Apply Now" modal accessible from any page.

### Phase 6: Placements, Student Corner & Statutory Pages
- [ ] **Placements Page** (`/placements`):
  - Highest & Average package metrics.
  - Year-wise placement reports.
  - Training & Placement Cell (TPO) message and corporate engagement process.
- [ ] **Student Corner** (`/student-corner`):
  - Categorized notice board (Exams, Circulars, Events).
  - Academic calendar download.
- [ ] **Mandatory Disclosure & Compliance** (`/mandatory-disclosure`, `/approvals`):
  - AICTE EOA letters, RTU affiliation records.
  - Anti-Ragging Committee member list and 24x7 helpline.
  - Grievance Redressal and Women's Cell.
- [ ] **Campus Facilities & Life** (`/facilities`, `/campus-life`, `/gallery`).
- [ ] **Contact Us** (`/contact`): Interactive layout with contact cards, enquiry form, and Google Maps embed.

### Phase 7: Optimization, Responsive Polish & Build
- [ ] Rigorous responsive testing (Mobile 360px, Tablet 768px, Desktop 1024px, Large Screens 1440px).
- [ ] SEO Meta tags, OpenGraph previews, and Favicon integration.
- [ ] Fast production build verification with `npm run build`.

---

## 7. Immediate Next Action

1. Initialize the React + Vite + Tailwind CSS scaffolding in `d:\GitHub\RIET`.
2. Configure the design tokens and component foundation.
3. Build the core layout shell (TopBar, Navbar, Footer, and Router).

const ASSETS = {
  monogram: '/assets/aistudio/A880DB7F-19B0-4625-8744-040D94A8435B_e207c5d0.png',
  crest: '/assets/aistudio/92B26B15-F4AB-4BBD-B068-79601753C31D_bdc8dd35.png',
  heroAtelier: '/src/assets/images/hero_publishing_atelier_1795615010303.jpg',
  books: {
    executive: '/src/assets/images/work_executive_edge_1795616446357.jpg',
    whispers: '/src/assets/images/work_whispers_wind_1795616449440.jpg',
    purpose: '/src/assets/images/work_lead_purpose_1795616447765.jpg',
  },
  team: {
    gracious: '/assets/aistudio/IMG_0010_55a5f7f9.jpeg',
    rapheal: '/assets/aistudio/IMG_0011_4a7c0b55.jpeg',
    katherine: '/assets/aistudio/IMG_0012_7f92ff9b.jpeg',
    benjamin: '/assets/aistudio/IMG_0013_d58db1da.jpeg',
    newMemberOne: '/assets/aistudio/eebfae47-e2de-44d8-ad66-751de0aa9c64_decfff18.jpeg',
    newMemberTwo: '/assets/aistudio/bce90cec-7a51-4abb-9d4d-d7f45bba9217_d8ada729.jpeg',
  },
};

const SERVICES = [
  {
    id: 'publishing-support',
    category: 'editorial',
    categoryLabel: 'Editorial & Publishing',
    title: 'Publishing Support',
    summary:
      'Publishing guidance, preparation and practical support for authors navigating the decisions involved in bringing a book to market.',
    deliverables: [
      'Publishing-readiness assessment and guidance',
      'Manuscript and file preparation guidance',
      'ISBN, imprint and metadata considerations',
      'Platform and distribution option review',
      'Launch-readiness checklist and next-step recommendations',
    ],
  },
  {
    id: 'editing-writing',
    category: 'editorial',
    categoryLabel: 'Editorial & Publishing',
    title: 'Editing & Writing',
    summary:
      'Editorial and writing support to improve clarity, consistency, structure and the reading experience while respecting the author’s voice.',
    deliverables: [
      'Developmental and structural feedback',
      'Copy editing for clarity, flow and consistency',
      'Proofreading for spelling, punctuation and typographical issues',
      'Writing and rewriting support by agreed brief',
      'Editorial notes and revision guidance',
    ],
  },
  {
    id: 'cover-design',
    category: 'design',
    categoryLabel: 'Design & Media',
    title: 'Cover Design',
    summary:
      'Genre-aware cover concepts and production-ready design intended to communicate the book’s subject, tone and market positioning.',
    deliverables: [
      'Creative direction and visual research',
      'Front-cover concept and typography',
      'Spine and back-cover layout where required',
      'Print and digital specifications by platform',
      'Final export files included in the agreed scope',
    ],
  },
  {
    id: 'book-promotion',
    category: 'promotion',
    categoryLabel: 'Promotion & Outreach',
    title: 'Book Promotion',
    summary:
      'Campaign planning and promotional content designed to introduce a book to relevant audiences through selected channels.',
    deliverables: [
      'Campaign objectives and audience definition',
      'Promotional messaging and content planning',
      'Channel and schedule recommendations',
      'Campaign coordination and progress communication',
      'Post-campaign review of agreed activity',
    ],
  },
  {
    id: 'video-promotion',
    category: 'design',
    categoryLabel: 'Design & Media',
    title: 'Video Promotion & Book Trailers',
    summary:
      'Creative video content that presents a book and its author in an engaging, shareable format to support awareness and promotion.',
    deliverables: [
      'Book trailer concept and creative direction',
      'Promotional video scripting and storyboarding',
      'Short-form promotional videos for social platforms',
      'Author introduction and book-launch video content',
      'Editing, captions and export in agreed formats',
    ],
  },
  {
    id: 'visibility-discoverability',
    category: 'promotion',
    categoryLabel: 'Promotion & Outreach',
    title: 'Visibility & Discoverability',
    summary:
      'Book positioning and listing improvements that help readers and relevant search systems understand what a book is about.',
    deliverables: [
      'Book description and positioning review',
      'Category and keyword research guidance',
      'Metadata review and recommendations',
      'Author and book profile consistency',
      'Storefront listing improvement recommendations',
    ],
  },
  {
    id: 'reader-outreach',
    category: 'promotion',
    categoryLabel: 'Promotion & Outreach',
    title: 'Reader Outreach',
    summary:
      'Thoughtful outreach to relevant reader communities, reviewers, podcasts and literary platforms, subject to their rules and editorial decisions.',
    deliverables: [
      'Audience and community research',
      'Personalised outreach copy and pitch preparation',
      'Reviewer and podcast prospect identification',
      'Outreach tracking and response coordination',
      'Clear reporting on activity and responses',
    ],
  },
];

const TEAM = [
  {
    id: 'gracious',
    initials: 'GJ',
    name: 'Gracious J. Literary',
    role: 'Team Leader & Senior Publishing and Literary Specialist',
    bio: 'Provides senior literary and publishing direction, helping coordinate the Centre’s author-focused work and maintain a clear view of each project’s publishing objectives.',
    email: 'gracious@bookrisecentre.com',
    photo: ASSETS.team.gracious,
    framedScreenshot: true,
    focus: '50% 3%',
    scale: '1.34',
  },
  {
    id: 'rapheal',
    initials: 'RA',
    name: 'Rapheal Adebayo',
    role: 'Publishing & Book Promotion Specialist',
    bio: 'Contributes publishing and book-promotion expertise, with a focus on project positioning, communication and connecting books with relevant promotional opportunities.',
    email: 'rapheal@bookrisecentre.com',
    photo: ASSETS.team.rapheal,
    framedScreenshot: true,
    focus: '50% 3%',
    scale: '1.28',
  },
  {
    id: 'katherine',
    initials: 'KA',
    name: 'Katherine S. Ashmore',
    role: 'Book Marketing Specialist & Reader Promoter',
    bio: 'Specializes in book marketing and reader promotion, supporting audience research, campaign planning and reader-focused outreach.',
    email: 'katherine@bookrisecentre.com',
    photo: ASSETS.team.katherine,
    framedScreenshot: true,
    focus: '50% 3%',
    scale: '1.28',
  },
  {
    id: 'benjamin',
    initials: 'BS',
    name: 'Benjamin Stewart',
    role: 'Publishing & Book Promotion Specialist',
    bio: 'Contributes publishing, book-promotion and author-support expertise to coordinated project delivery.',
    email: 'benjamin@bookrisecentre.com',
    photo: ASSETS.team.benjamin,
    framedScreenshot: true,
    focus: '50% 3%',
    scale: '1.28',
  },
  {
    id: 'stephen',
    initials: 'SQ',
    name: 'Stephen O. Quill',
    role: 'Editorial & Publishing Operations Specialist',
    bio: 'Supports manuscript preparation, editorial workflow coordination and pre-publication readiness to keep author milestones structured and on schedule.',
    email: 'stephen@bookrisecentre.com',
    photo: ASSETS.team.newMemberOne,
    framedScreenshot: false,
    focus: '50% 18%',
    scale: '1',
  },
  {
    id: 'moses',
    initials: 'ML',
    name: 'Moses O. Lane',
    role: 'Book Visibility & Author Strategy Specialist',
    bio: 'Advises authors on positioning, discoverability planning and multi-channel launch campaigns tailored to each title’s target readership.',
    email: 'moses@bookrisecentre.com',
    photo: ASSETS.team.newMemberTwo,
    framedScreenshot: false,
    focus: '50% 16%',
    scale: '1',
  },
];

const PROJECTS = [
  {
    number: '01',
    id: 'the-executive-edge',
    title: 'The Executive Edge',
    author: 'James Sterling',
    genre: 'Business & Strategy',
    scope: 'Developmental Editing · Hardcover Cover Design · Positioning',
    brief: 'Strengthen executive clarity across twelve leadership chapters and establish a flagship clothbound visual identity built for senior decision-makers.',
    deliverables: ['Full developmental & structural manuscript edit', 'Custom navy linen & gold-foil hardcover design', 'Storefront positioning & executive synopsis'],
    image: ASSETS.books.executive,
    quote:
      'BookRise Centre completely transformed my manuscript. Their developmental editing was sharp, and the cover design for The Executive Edge gave it the premium, authoritative look I needed for the business market.',
  },
  {
    number: '02',
    id: 'whispers-of-the-wind',
    title: 'Whispers of the Wind',
    author: 'Sarah Mitchell',
    genre: 'Memoir',
    scope: 'Editorial Support · Visibility & Categorization · Reader Outreach',
    brief: 'Preserve an intimate literary memoir voice while refining chapter pacing, reader categorization, and thoughtful book-club outreach.',
    deliverables: ['Line editing & sensitive narrative pacing review', 'Tactile ivory cotton jacket & botanical embossing', 'Category taxonomy & targeted memoir reader outreach'],
    image: ASSETS.books.whispers,
    quote:
      'As a memoirist, I was nervous about sharing my personal story. The team at BookRise was incredibly supportive and respectful. The visibility and categorization they set up meant my book reached exactly the right readers.',
  },
  {
    number: '03',
    id: 'lead-with-purpose',
    title: 'Lead with Purpose',
    author: 'Robert Caldwell',
    genre: 'Leadership & Strategy',
    scope: 'Book Positioning · Metadata Optimization · Launch Campaign',
    brief: 'Unify hardcover presentation, keyword architecture, and launch-month outreach into one cohesive leadership release.',
    deliverables: ['Slate cloth hardcover & brass spine typography', 'Keyword, BISAC category & listing optimization', 'Coordinated launch-window campaign plan'],
    image: ASSETS.books.purpose,
    quote:
      'They do not just design a cover; they position the whole book. The promotional strategy and metadata optimization they did for Lead with Purpose made my launch much smoother.',
  },
];

const FAQS = [
  [
    'What services does BookRise Centre provide?',
    'We provide publishing support, editing and writing, cover design, book promotion, video promotion and book trailers, visibility and discoverability support, and reader outreach. The exact work available for a project is confirmed during the initial discussion and scoping process.',
  ],
  [
    'Can I request just one service?',
    'Yes. You may enquire about an individual service or a combination of services. The recommendation depends on your project requirements and the work you want completed.',
  ],
  [
    'How much do your services cost?',
    'We use project-based quotations rather than publishing a single price for every book. Fees depend on the service, manuscript or campaign requirements, scope, turnaround, deliverables and any external costs. Contact us for a written quotation.',
  ],
  [
    'Do you offer fixed packages?',
    'A defined package may be discussed where the scope is suitable, but we do not assume every author needs the same combination of services. Any package, inclusions and exclusions must be stated clearly in writing.',
  ],
  [
    'Does BookRise Centre take ownership of my book?',
    'No. Authors retain their intellectual property rights. The written agreement should confirm ownership and any limited permissions needed to perform the agreed services.',
  ],
  [
    'Do you take royalties from book sales?',
    'No. BookRise Centre charges for the agreed author services and does not take your book royalties.',
  ],
  [
    'Do you guarantee book sales, reviews, rankings or media coverage?',
    'No. Sales, reviews, rankings, media coverage and audience response depend on factors outside any service provider’s control. We do not guarantee these outcomes. We focus on carrying out the agreed professional work and reporting on the activity within scope.',
  ],
  [
    'How do you begin a project?',
    'We start with an enquiry and a discussion of your book, goals and requirements. If the proposed work is suitable, we provide a written scope, quotation and terms for your review.',
  ],
  [
    'When does work begin?',
    'Work begins after the scope, fees, deliverables, timeline, payment arrangements and applicable terms have been agreed in writing and any required initial payment has been received.',
  ],
  [
    'Can you work with a book that is already published?',
    'Yes. Authors may enquire about editing, cover updates, metadata and discoverability reviews, promotional planning or reader outreach for an already published title.',
  ],
  [
    'Will I receive updates during the project?',
    'Communication and review points are agreed as part of the project scope. The agreement should identify the expected contact points and how feedback or approvals will be handled.',
  ],
  [
    'What information should I include in my enquiry?',
    'Include your name, email, book title if available, genre, current publishing stage, the service you are considering, a short project description and your preferred timeline.',
  ],
];

const esc = (str = '') =>
  String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

const css = `
@view-transition {
  navigation: auto;
}

:root {
  --bg: #f8f6f1;
  --surface: #ffffff;
  --surface-alt: #f0ece3;
  --ink: #172337;
  --ink-strong: #0c1930;
  --muted: #586578;
  --line: rgba(12, 25, 48, 0.11);
  --line-strong: rgba(12, 25, 48, 0.22);
  --navy: #0c1a32;
  --navy-soft: #152847;
  --gold: #b58b40;
  --gold-bright: #d4af62;
  --gold-soft: rgba(181, 139, 64, 0.12);
  --header-bg: rgba(255, 255, 255, 0.94);
  --input-bg: #fcfbf8;
  --shadow-card: 0 12px 32px rgba(12, 25, 48, 0.05);
  --serif: "Playfair Display", Georgia, serif;
  --sans: "DM Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  --ease: cubic-bezier(0.16, 1, 0.3, 1);
  --base-size: 16px;
  --container: 1200px;
}

html[data-theme="dark"] {
  color-scheme: dark;
  --bg: #0b1524;
  --surface: #122035;
  --surface-alt: #182942;
  --ink: #e5ebf3;
  --ink-strong: #f6f8fb;
  --muted: #aab6c8;
  --line: rgba(226, 232, 240, 0.12);
  --line-strong: rgba(226, 232, 240, 0.24);
  --navy: #091322;
  --navy-soft: #14253e;
  --gold: #dfbd75;
  --gold-bright: #ecd091;
  --gold-soft: rgba(223, 189, 117, 0.14);
  --header-bg: rgba(11, 21, 36, 0.94);
  --input-bg: #0d192b;
  --shadow-card: 0 16px 36px rgba(0, 0, 0, 0.3);
}

html[data-text-size="comfortable"] { --base-size: 17px; }
html[data-text-size="large"] { --base-size: 19px; }

html[data-contrast="high"] {
  --ink: #0a1220;
  --muted: #394659;
  --line: rgba(12, 25, 48, 0.28);
  --line-strong: rgba(12, 25, 48, 0.45);
}

html[data-theme="dark"][data-contrast="high"] {
  --ink: #ffffff;
  --muted: #d2dce9;
  --line: rgba(255, 255, 255, 0.28);
  --line-strong: rgba(255, 255, 255, 0.48);
}

*, *::before, *::after {
  box-sizing: border-box;
}

html {
  font-size: var(--base-size);
  scroll-behavior: smooth;
  scrollbar-width: thin;
  scrollbar-color: var(--gold) var(--surface-alt);
}

html[data-motion="reduced"] {
  scroll-behavior: auto;
}

body {
  margin: 0;
  background: var(--bg);
  color: var(--ink);
  font-family: var(--sans);
  font-size: 1rem;
  line-height: 1.65;
  -webkit-font-smoothing: antialiased;
  transition: background-color 180ms var(--ease), color 180ms var(--ease);
}

html[data-theme="dark"] body {
  letter-spacing: 0.01em;
}

img {
  max-width: 100%;
  display: block;
}

a {
  color: inherit;
  text-decoration: none;
}

button, input, select, textarea {
  font-family: inherit;
}

:focus-visible {
  outline: 2px solid var(--gold);
  outline-offset: 3px;
}

.wrap {
  width: min(var(--container), calc(100% - 48px));
  margin: 0 auto;
}

.tabular {
  font-variant-numeric: tabular-nums;
}

/* Scroll Progress */
.scroll-progress {
  position: fixed;
  top: 0;
  left: 0;
  height: 2px;
  width: 100%;
  background: linear-gradient(90deg, var(--gold), var(--gold-bright));
  transform-origin: left center;
  transform: scaleX(0);
  z-index: 60;
  pointer-events: none;
}

/* Top Bar Contract: strictly 3 zones — Brand | 5 links | 1 Primary Action */
.site-header {
  position: sticky;
  top: 0;
  z-index: 40;
  background: var(--header-bg);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--line);
}

.header-inner {
  min-height: 76px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
}

.brand-link {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
  white-space: nowrap;
}

.brand-mark {
  width: 38px;
  height: 38px;
  border-radius: 6px;
  background: #ffffff;
  border: 1px solid rgba(181, 139, 64, 0.45);
  padding: 3px;
  display: grid;
  place-items: center;
  flex-shrink: 0;
}

.brand-mark img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.brand-wordmark {
  font-family: var(--serif);
  font-size: 1.05rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  color: var(--ink-strong);
  white-space: nowrap;
}

.primary-nav {
  display: flex;
  align-items: center;
  gap: 28px;
}

.primary-nav a {
  position: relative;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--muted);
  white-space: nowrap;
  flex-shrink: 0;
  padding: 6px 0;
  transition: color 160ms var(--ease);
}

.primary-nav a::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 1.5px;
  background: var(--gold);
  transform: scaleX(0);
  transform-origin: left center;
  transition: transform 180ms var(--ease);
}

.primary-nav a:hover,
.primary-nav a.is-active {
  color: var(--ink-strong);
}

.primary-nav a:hover::after,
.primary-nav a.is-active::after {
  transform: scaleX(1);
}

.header-cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 18px;
  background: var(--navy);
  color: #ffffff;
  border: 1px solid var(--navy);
  border-radius: 6px;
  font-size: 0.8125rem;
  font-weight: 600;
  white-space: nowrap;
  flex-shrink: 0;
  min-height: 40px;
  transition: transform 160ms var(--ease), background-color 160ms var(--ease), border-color 160ms var(--ease);
}

html[data-theme="dark"] .header-cta {
  background: var(--gold);
  color: #091322;
  border-color: var(--gold);
}

.header-cta:hover {
  transform: translateY(-1px);
  background: var(--navy-soft);
}

html[data-theme="dark"] .header-cta:hover {
  background: var(--gold-bright);
}

.mobile-menu-btn {
  display: none;
  align-items: center;
  justify-content: center;
  min-width: 44px;
  min-height: 44px;
  padding: 8px 14px;
  background: var(--surface);
  color: var(--ink-strong);
  border: 1px solid var(--line-strong);
  border-radius: 6px;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  gap: 8px;
}

.mobile-drawer {
  display: none;
  border-top: 1px solid var(--line);
  background: var(--surface);
  padding: 16px 24px 24px;
  opacity: 0;
  transform: translateY(-6px);
  transition: opacity 180ms var(--ease), transform 180ms var(--ease);
}

.mobile-drawer.is-open {
  display: block;
  opacity: 1;
  transform: translateY(0);
}

.mobile-drawer-links {
  display: grid;
  gap: 4px;
}

.mobile-drawer-links a {
  display: flex;
  align-items: center;
  min-height: 44px;
  padding: 8px 4px;
  font-size: 1rem;
  font-weight: 600;
  color: var(--ink);
  border-bottom: 1px solid var(--line);
}

.mobile-drawer-links a.is-active {
  color: var(--gold);
}

.mobile-drawer-actions {
  display: grid;
  gap: 10px;
  margin-top: 16px;
}

/* Main entrance transition */
.page-main {
  animation: pageEnter 240ms var(--ease) both;
}

@keyframes pageEnter {
  from {
    opacity: 0;
    transform: translateY(8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Buttons */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-height: 44px;
  padding: 12px 24px;
  border-radius: 6px;
  font-size: 0.875rem;
  font-weight: 600;
  white-space: nowrap;
  cursor: pointer;
  border: 1px solid transparent;
  transition: transform 160ms var(--ease), background-color 160ms var(--ease), color 160ms var(--ease), border-color 160ms var(--ease);
}

.btn:hover {
  transform: translateY(-1px);
}

.btn-primary {
  background: var(--gold-bright);
  color: #0b1524;
  border-color: var(--gold-bright);
}

.btn-primary:hover {
  background: #e2c27e;
  border-color: #e2c27e;
}

.btn-navy {
  background: var(--navy);
  color: #ffffff;
  border-color: var(--navy);
}

html[data-theme="dark"] .btn-navy {
  background: var(--gold);
  color: #091322;
  border-color: var(--gold);
}

.btn-ghost {
  background: transparent;
  color: #ffffff;
  border-color: rgba(255, 255, 255, 0.35);
}

.btn-ghost:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.7);
}

.btn-outline {
  background: transparent;
  color: var(--ink-strong);
  border-color: var(--line-strong);
}

.btn-outline:hover {
  border-color: var(--gold);
  color: var(--gold);
}

/* Typography & Section Primitives */
.eyebrow {
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--gold);
}

.section {
  padding: 84px 0;
}

.section-surface {
  background: var(--surface);
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
}

.section-header {
  max-width: 720px;
  margin-bottom: 40px;
}

.section-header-split {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 24px;
  margin-bottom: 40px;
  flex-wrap: wrap;
}

.section-header-split > div {
  max-width: 680px;
}

.section h2 {
  font-family: var(--serif);
  font-size: clamp(1.85rem, 3vw, 2.65rem);
  font-weight: 600;
  line-height: 1.18;
  letter-spacing: -0.02em;
  color: var(--ink-strong);
  margin: 10px 0 14px;
  text-wrap: balance;
}

.lead {
  font-size: 1.0625rem;
  line-height: 1.7;
  color: var(--muted);
  margin: 0;
  max-width: 64ch;
}

.text-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--gold);
  transition: transform 160ms var(--ease), color 160ms var(--ease);
}

.text-link:hover {
  transform: translateX(3px);
}

/* Hero Section */
.hero {
  background: linear-gradient(125deg, #091529 0%, #122442 62%, #0c1930 100%);
  color: #f8fafc;
  padding: 72px 0 64px;
  border-bottom: 1px solid rgba(212, 175, 98, 0.25);
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.08fr 0.92fr;
  gap: 48px;
  align-items: stretch;
}

.hero-copy {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 12px 0;
}

.hero h1 {
  font-family: var(--serif);
  font-size: clamp(2.35rem, 4.1vw, 3.75rem);
  font-weight: 600;
  line-height: 1.12;
  letter-spacing: -0.025em;
  margin: 14px 0 20px;
  color: #ffffff;
  text-wrap: balance;
}

.hero-lead {
  font-size: 1.0625rem;
  line-height: 1.7;
  color: #d4deec;
  max-width: 58ch;
  margin: 0;
}

.hero-actions {
  display: flex;
  align-items: center;
  gap: 14px;
  flex-wrap: wrap;
  margin-top: 30px;
}

.hero-meta {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 28px;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.14);
  font-size: 0.8125rem;
  color: #bcc8da;
}

.hero-media {
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid rgba(212, 175, 98, 0.35);
  background: #0d1b32;
  min-height: 360px;
}

.hero-media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: transform 420ms var(--ease);
}

.hero-media:hover img {
  transform: scale(1.025);
}

.hero-media-caption {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 28px 20px 16px;
  background: linear-gradient(to top, rgba(9, 21, 41, 0.88), rgba(9, 21, 41, 0.35) 60%, transparent);
  color: #e6edf7;
  font-size: 0.8125rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
}

/* Full-width 4-column Credential Strip below Hero Split */
.metrics-band {
  margin-top: 44px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.03);
}

.metric-cell {
  padding: 20px 22px;
  border-right: 1px solid rgba(255, 255, 255, 0.12);
}

.metric-cell:last-child {
  border-right: 0;
}

.metric-cell strong {
  display: block;
  font-family: var(--serif);
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--gold-bright);
  line-height: 1.2;
}

.metric-cell span {
  display: block;
  margin-top: 4px;
  font-size: 0.8125rem;
  color: #cbd6e6;
}

/* Page Intro Header (Inner Pages) */
.page-intro {
  background: linear-gradient(125deg, #091529 0%, #142848 100%);
  color: #ffffff;
  padding: 64px 0;
  border-bottom: 1px solid rgba(212, 175, 98, 0.25);
}

.page-intro h1 {
  font-family: var(--serif);
  font-size: clamp(2.1rem, 3.8vw, 3.15rem);
  font-weight: 600;
  line-height: 1.15;
  letter-spacing: -0.02em;
  color: #ffffff;
  margin: 12px 0 16px;
  max-width: 820px;
  text-wrap: balance;
}

.page-intro p {
  font-size: 1.0625rem;
  color: #d4deec;
  max-width: 65ch;
  margin: 0;
}

/* Asymmetric Bento Grid (7 Services — zero orphans) */
.bento-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 20px;
}

.bento-span-3 {
  grid-column: span 3;
}

.bento-span-2 {
  grid-column: span 2;
}

.card {
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 8px;
  padding: 28px;
  display: flex;
  flex-direction: column;
  transition: transform 200ms var(--ease), border-color 200ms var(--ease);
}

.card:hover {
  transform: translateY(-2px);
  border-color: var(--gold);
}

.card-index {
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--gold);
  margin-bottom: 10px;
}

.card h3 {
  font-family: var(--serif);
  font-size: 1.35rem;
  font-weight: 600;
  color: var(--ink-strong);
  margin: 0 0 10px;
  line-height: 1.25;
}

.card p {
  font-size: 0.9375rem;
  color: var(--muted);
  margin: 0;
}

.card-footer-link {
  margin-top: auto;
  padding-top: 18px;
}

.card ul {
  margin: 16px 0 0;
  padding-left: 18px;
  color: var(--muted);
  font-size: 0.875rem;
}

.card li {
  margin: 6px 0;
}

/* Editorial Grids */
.grid-2 {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}

.grid-3 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.split-editorial {
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap: 48px;
  align-items: center;
}

/* Pullquote & Notice (clean hairline enclosure — NO thick left bar!) */
.editorial-callout {
  background: var(--surface-alt);
  border: 1px solid var(--line);
  border-radius: 8px;
  padding: 28px 30px;
}

.editorial-callout blockquote {
  margin: 0;
  font-family: var(--serif);
  font-size: 1.25rem;
  line-height: 1.55;
  color: var(--ink-strong);
}

.editorial-callout figcaption {
  margin-top: 14px;
  font-size: 0.8125rem;
  color: var(--muted);
}

.crest-panel {
  background: #ffffff;
  border: 1px solid var(--line);
  border-radius: 10px;
  padding: 28px;
  display: grid;
  place-items: center;
}

.crest-panel img {
  width: min(100%, 290px);
  height: auto;
  object-fit: contain;
}

/* Selected Work & Adjacent Testimonials */
.work-card {
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 200ms var(--ease), border-color 200ms var(--ease);
}

.work-card:hover {
  transform: translateY(-2px);
  border-color: var(--gold);
}

.work-media {
  aspect-ratio: 3 / 4;
  overflow: hidden;
  background: var(--surface-alt);
  border-bottom: 1px solid var(--line);
}

.work-media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: transform 320ms var(--ease);
}

.work-card:hover .work-media img {
  transform: scale(1.025);
}

.work-inspect-btn {
  margin-top: 16px;
  padding: 0;
  border: 0;
  background: transparent;
  color: var(--gold);
  font-size: 0.875rem;
  font-weight: 600;
  text-align: left;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  transition: transform 160ms var(--ease);
}

.work-inspect-btn:hover {
  transform: translateX(3px);
}

/* Case Study Inspection Modal */
.case-backdrop {
  position: fixed;
  inset: 0;
  z-index: 85;
  background: rgba(9, 19, 34, 0.6);
  display: grid;
  place-items: center;
  padding: 20px;
  opacity: 0;
  pointer-events: none;
  transition: opacity 200ms var(--ease);
}

.case-backdrop.is-open {
  opacity: 1;
  pointer-events: auto;
}

.case-modal {
  width: min(880px, 100%);
  max-height: 90vh;
  overflow-y: auto;
  background: var(--surface);
  border: 1px solid var(--line-strong);
  border-radius: 10px;
  display: grid;
  grid-template-columns: 0.92fr 1.08fr;
  transform: translateY(10px);
  transition: transform 220ms var(--ease);
}

.case-backdrop.is-open .case-modal {
  transform: translateY(0);
}

.case-modal-media {
  background: var(--surface-alt);
  border-right: 1px solid var(--line);
}

.case-modal-media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.case-modal-body {
  padding: 28px;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.case-modal-head {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 12px;
}

.case-modal-body h3 {
  font-family: var(--serif);
  font-size: 1.65rem;
  color: var(--ink-strong);
  margin: 4px 0 0;
}

.case-modal-body ul {
  margin: 0;
  padding-left: 18px;
  color: var(--muted);
  font-size: 0.875rem;
}

.case-modal-body li {
  margin: 5px 0;
}

@media (max-width: 760px) {
  .case-modal {
    grid-template-columns: 1fr;
  }
  .case-modal-media {
    border-right: 0;
    border-bottom: 1px solid var(--line);
    max-height: 340px;
  }
}

.work-body {
  padding: 24px;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.work-meta {
  font-size: 0.8125rem;
  color: var(--muted);
  margin-bottom: 8px;
}

.work-body h3 {
  font-family: var(--serif);
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--ink-strong);
  margin: 0 0 8px;
}

.work-scope {
  font-size: 0.8125rem;
  color: var(--gold);
  font-weight: 500;
  margin-bottom: 16px;
}

.work-quote {
  margin: auto 0 0;
  padding-top: 16px;
  border-top: 1px solid var(--line);
  font-size: 0.9rem;
  line-height: 1.65;
  color: var(--ink);
}

.work-quote cite {
  display: block;
  margin-top: 10px;
  font-style: normal;
  font-size: 0.8125rem;
  color: var(--muted);
}

/* Team Cards (6 members in 3-col balanced grid) */
.team-card {
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 8px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  transition: transform 200ms var(--ease), border-color 200ms var(--ease);
}

.team-card:hover {
  transform: translateY(-2px);
  border-color: var(--gold);
}

.team-portrait-frame {
  position: relative;
  width: 100%;
  aspect-ratio: 4 / 5;
  border-radius: 6px;
  overflow: hidden;
  background: var(--surface-alt);
  border: 1px solid var(--line);
  margin-bottom: 18px;
}

.team-portrait-frame img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 320ms var(--ease);
}

.team-card:hover .team-portrait-frame img.team-photo-native {
  transform: scale(1.03);
}

.team-fallback {
  position: absolute;
  inset: 0;
  display: none;
  place-items: center;
  font-family: var(--serif);
  font-size: 2rem;
  color: var(--gold);
  background: var(--surface-alt);
}

.team-portrait-frame.is-broken .team-fallback {
  display: grid;
}

.team-card h3 {
  font-family: var(--serif);
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--ink-strong);
  margin: 0 0 6px;
}

.team-role {
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--gold);
  margin-bottom: 12px;
  line-height: 1.4;
}

.team-bio {
  font-size: 0.875rem;
  color: var(--muted);
  margin: 0 0 18px;
  flex: 1;
}

.team-contact {
  padding-top: 14px;
  border-top: 1px solid var(--line);
  font-size: 0.8125rem;
}

.team-contact a {
  color: var(--ink-strong);
  font-weight: 600;
  overflow-wrap: anywhere;
}

.team-contact a:hover {
  color: var(--gold);
}

/* Home compact team strip */
.team-strip-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 16px;
}

.team-mini {
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 8px;
  padding: 14px;
  transition: transform 180ms var(--ease), border-color 180ms var(--ease);
}

.team-mini:hover {
  transform: translateY(-2px);
  border-color: var(--gold);
}

.team-mini .team-portrait-frame {
  margin-bottom: 12px;
}

.team-mini h3 {
  font-family: var(--serif);
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--ink-strong);
  margin: 0 0 4px;
  line-height: 1.3;
}

.team-mini p {
  font-size: 0.75rem;
  color: var(--muted);
  margin: 0;
  line-height: 1.4;
}

/* Segmented Filter Controls */
.filter-bar {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 4px;
  background: var(--surface-alt);
  border: 1px solid var(--line);
  border-radius: 8px;
  flex-wrap: wrap;
}

.filter-btn {
  min-height: 36px;
  padding: 6px 14px;
  border: 0;
  border-radius: 6px;
  background: transparent;
  color: var(--muted);
  font-size: 0.8125rem;
  font-weight: 600;
  white-space: nowrap;
  cursor: pointer;
  transition: background-color 160ms var(--ease), color 160ms var(--ease);
}

.filter-btn:hover {
  color: var(--ink-strong);
}

.filter-btn.is-active {
  background: var(--surface);
  color: var(--ink-strong);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
}

/* FAQ Search & Accordion */
.faq-toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 24px;
  flex-wrap: wrap;
}

.faq-search {
  width: min(420px, 100%);
  min-height: 44px;
  padding: 10px 14px;
  border: 1px solid var(--line-strong);
  border-radius: 6px;
  background: var(--surface);
  color: var(--ink);
  font-size: 0.9375rem;
}

.faq-list {
  border-top: 1px solid var(--line);
}

.faq-item {
  border-bottom: 1px solid var(--line);
}

.faq-item summary {
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 20px 4px;
  cursor: pointer;
  font-family: var(--serif);
  font-size: 1.15rem;
  font-weight: 600;
  color: var(--ink-strong);
  transition: color 160ms var(--ease);
}

.faq-item summary::-webkit-details-marker {
  display: none;
}

.faq-item summary:hover {
  color: var(--gold);
}

.faq-chevron {
  font-family: var(--sans);
  font-size: 1.1rem;
  color: var(--gold);
  transition: transform 180ms var(--ease);
  flex-shrink: 0;
}

.faq-item[open] .faq-chevron {
  transform: rotate(45deg);
}

.faq-answer {
  padding: 0 4px 20px;
  color: var(--muted);
  font-size: 0.9375rem;
  max-width: 74ch;
  animation: fadeSlide 180ms var(--ease);
}

@keyframes fadeSlide {
  from { opacity: 0; transform: translateY(-4px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Process Steps */
.process-list {
  border-top: 1px solid var(--line);
}

.process-row {
  display: grid;
  grid-template-columns: 72px 1fr;
  gap: 20px;
  padding: 26px 0;
  border-bottom: 1px solid var(--line);
  align-items: start;
}

.process-num {
  font-family: var(--serif);
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--gold);
}

.process-row h3 {
  font-family: var(--serif);
  font-size: 1.25rem;
  color: var(--ink-strong);
  margin: 0 0 6px;
}

.process-row p {
  margin: 0;
  color: var(--muted);
  font-size: 0.9375rem;
  max-width: 68ch;
}

/* Contact Layout & Form */
.contact-layout {
  display: grid;
  grid-template-columns: 0.85fr 1.15fr;
  gap: 36px;
  align-items: start;
}

.contact-panel {
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 8px;
  padding: 28px;
}

.contact-row {
  padding: 14px 0;
  border-bottom: 1px solid var(--line);
}

.contact-row:last-child {
  border-bottom: 0;
  padding-bottom: 0;
}

.contact-label {
  display: block;
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--muted);
  margin-bottom: 4px;
}

.contact-row a {
  font-weight: 600;
  color: var(--ink-strong);
}

.contact-row a:hover {
  color: var(--gold);
}

.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.form-full {
  grid-column: 1 / -1;
}

.field-label {
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--ink-strong);
}

.field-input {
  width: 100%;
  min-height: 44px;
  padding: 10px 14px;
  border: 1px solid var(--line-strong);
  border-radius: 6px;
  background: var(--input-bg);
  color: var(--ink);
  font-size: 0.9375rem;
  transition: border-color 160ms var(--ease);
}

.field-input:focus {
  border-color: var(--gold);
}

textarea.field-input {
  min-height: 140px;
  resize: vertical;
}

.field-hint-row {
  display: flex;
  justify-content: space-between;
  font-size: 0.75rem;
  color: var(--muted);
  font-weight: 400;
}

.consent-label {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 0.875rem;
  color: var(--muted);
  cursor: pointer;
}

.consent-label input {
  width: 18px;
  height: 18px;
  margin-top: 2px;
  accent-color: var(--gold);
  flex-shrink: 0;
}

.consent-label a {
  color: var(--gold);
  text-decoration: underline;
}

.honeypot {
  position: absolute;
  left: -9999px;
}

.form-status {
  margin: 14px 0 0;
  font-size: 0.875rem;
  font-weight: 500;
  min-height: 22px;
}

.form-status.success {
  color: #166534;
}

html[data-theme="dark"] .form-status.success {
  color: #86efac;
}

.form-status.error {
  color: #b91c1c;
}

html[data-theme="dark"] .form-status.error {
  color: #fca5a5;
}

/* CTA Band */
.cta-band {
  background: var(--surface-alt);
  border-top: 1px solid var(--line);
  padding: 56px 0;
}

.cta-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 28px;
  flex-wrap: wrap;
}

.cta-inner h2 {
  font-family: var(--serif);
  font-size: clamp(1.6rem, 2.6vw, 2.15rem);
  color: var(--ink-strong);
  margin: 0 0 6px;
}

.cta-inner p {
  margin: 0;
  color: var(--muted);
  font-size: 0.9375rem;
}

/* Quiet Editorial Footer */
.site-footer {
  background: #091322;
  color: #d0dae7;
  padding: 60px 0 28px;
  border-top: 1px solid rgba(212, 175, 98, 0.25);
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.4fr 1fr 1fr 1fr;
  gap: 36px;
}

.footer-brand {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
}

.footer-brand strong {
  font-family: var(--serif);
  font-size: 1rem;
  letter-spacing: 0.08em;
  color: #ffffff;
}

.footer-tagline {
  font-size: 0.875rem;
  color: #aab6c8;
  max-width: 34ch;
  margin: 0 0 14px;
}

.footer-location {
  font-size: 0.8125rem;
  color: #8e9cb2;
}

.site-footer h4 {
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--gold-bright);
  margin: 0 0 14px;
}

.footer-links {
  display: grid;
  gap: 9px;
}

.footer-links a,
.footer-links button {
  background: none;
  border: 0;
  padding: 0;
  text-align: left;
  font-size: 0.875rem;
  color: #c2cede;
  cursor: pointer;
  transition: color 150ms var(--ease);
}

.footer-links a:hover,
.footer-links button:hover {
  color: var(--gold-bright);
}

.footer-social {
  display: flex;
  gap: 10px;
  margin-top: 14px;
  flex-wrap: wrap;
}

.footer-social a {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 7px 12px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 6px;
  font-size: 0.8125rem;
  color: #f1f5f9;
  transition: border-color 160ms var(--ease), color 160ms var(--ease);
}

.footer-social a:hover {
  border-color: var(--gold-bright);
  color: var(--gold-bright);
}

.footer-bottom {
  margin-top: 40px;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  display: flex;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
  font-size: 0.8125rem;
  color: #8e9cb2;
}

/* Legal Prose */
.legal-prose {
  max-width: 78ch;
}

.legal-prose h2 {
  font-family: var(--serif);
  font-size: 1.45rem;
  color: var(--ink-strong);
  margin: 32px 0 10px;
}

.legal-prose p {
  color: var(--muted);
  margin: 0 0 12px;
}

/* Floating Utility Dock & Display Settings Drawer */
.utility-dock {
  position: fixed;
  right: 20px;
  bottom: 20px;
  z-index: 45;
  display: flex;
  align-items: center;
  gap: 8px;
}

.utility-btn {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  min-height: 40px;
  padding: 8px 14px;
  border-radius: 8px;
  border: 1px solid var(--line-strong);
  background: var(--surface);
  color: var(--ink-strong);
  font-size: 0.8125rem;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 8px 24px rgba(10, 20, 38, 0.14);
  transition: transform 160ms var(--ease), border-color 160ms var(--ease), opacity 180ms var(--ease);
}

.utility-btn:hover {
  transform: translateY(-1px);
  border-color: var(--gold);
}

.to-top-btn {
  opacity: 0;
  pointer-events: none;
  transform: translateY(8px);
}

.to-top-btn.is-visible {
  opacity: 1;
  pointer-events: auto;
  transform: translateY(0);
}

.settings-backdrop {
  position: fixed;
  inset: 0;
  z-index: 70;
  background: rgba(9, 19, 34, 0.45);
  opacity: 0;
  pointer-events: none;
  transition: opacity 200ms var(--ease);
}

.settings-backdrop.is-open {
  opacity: 1;
  pointer-events: auto;
}

.settings-drawer {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: min(380px, 100vw);
  z-index: 80;
  background: var(--surface);
  border-left: 1px solid var(--line);
  padding: 28px 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  overflow-y: auto;
  transform: translateX(100%);
  transition: transform 220ms var(--ease);
}

.settings-drawer.is-open {
  transform: translateX(0);
}

.settings-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 16px;
  border-bottom: 1px solid var(--line);
}

.settings-head h2 {
  font-family: var(--serif);
  font-size: 1.35rem;
  color: var(--ink-strong);
  margin: 0;
}

.settings-close {
  min-width: 40px;
  min-height: 40px;
  border-radius: 6px;
  border: 1px solid var(--line);
  background: transparent;
  color: var(--ink);
  font-size: 1.1rem;
  cursor: pointer;
}

.setting-group {
  display: grid;
  gap: 10px;
}

.setting-label {
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--ink-strong);
}

.setting-desc {
  font-size: 0.78rem;
  color: var(--muted);
  margin: -4px 0 2px;
}

.segmented {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4px;
  padding: 4px;
  background: var(--surface-alt);
  border: 1px solid var(--line);
  border-radius: 8px;
}

.segmented.two-col {
  grid-template-columns: repeat(2, 1fr);
}

.seg-opt {
  min-height: 36px;
  border: 0;
  border-radius: 5px;
  background: transparent;
  color: var(--muted);
  font-size: 0.8125rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 150ms var(--ease), color 150ms var(--ease);
}

.seg-opt.is-selected {
  background: var(--surface);
  color: var(--ink-strong);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.settings-footer {
  margin-top: auto;
  padding-top: 16px;
  border-top: 1px solid var(--line);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
}

/* Scroll Reveal (Progressive, Zero-Latency for hero/critical content) */
.reveal {
  transition: opacity 320ms var(--ease), transform 320ms var(--ease);
}

.reveal.is-pending {
  opacity: 0;
  transform: translateY(14px);
}

.reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
}

html[data-motion="reduced"] *,
html[data-motion="reduced"] *::before,
html[data-motion="reduced"] *::after {
  animation-duration: 0.01ms !important;
  transition-duration: 0.01ms !important;
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}

/* Responsive Breakpoints */
@media (max-width: 1080px) {
  .team-strip-grid {
    grid-template-columns: repeat(3, 1fr);
  }
  .bento-span-2 {
    grid-column: span 3;
  }
  .footer-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 920px) {
  .primary-nav,
  .header-cta {
    display: none;
  }
  .mobile-menu-btn {
    display: inline-flex;
  }
  .hero-grid,
  .split-editorial,
  .contact-layout,
  .grid-3 {
    grid-template-columns: 1fr;
  }
  .metrics-band {
    grid-template-columns: repeat(2, 1fr);
  }
  .metric-cell:nth-child(2) {
    border-right: 0;
  }
  .metric-cell:nth-child(-n+2) {
    border-bottom: 1px solid rgba(255, 255, 255, 0.12);
  }
  .bento-grid {
    grid-template-columns: 1fr;
  }
  .bento-span-3,
  .bento-span-2 {
    grid-column: span 1;
  }
  .grid-2 {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .wrap {
    width: calc(100% - 32px);
  }
  .header-inner {
    min-height: 64px;
  }
  .section {
    padding: 56px 0;
  }
  .hero {
    padding: 48px 0;
  }
  .team-strip-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .form-grid {
    grid-template-columns: 1fr;
  }
  .footer-grid {
    grid-template-columns: 1fr;
  }
  .process-row {
    grid-template-columns: 1fr;
    gap: 8px;
  }
  .utility-dock {
    right: 14px;
    bottom: 14px;
  }
}
`;

function renderPortrait(member, eager = false) {
  const imgStyle = member.framedScreenshot
    ? `object-fit:cover;object-position:${member.focus};transform:scale(${member.scale});transform-origin:50% 4%;`
    : `object-fit:cover;object-position:${member.focus};`;
  const cls = member.framedScreenshot ? 'team-photo-cropped' : 'team-photo-native';
  return `<div class="team-portrait-frame">
    <img class="${cls}" src="${member.photo}" alt="${esc(member.name)} — ${esc(member.role)}" referrerpolicy="no-referrer" loading="${eager ? 'eager' : 'lazy'}" decoding="async" style="${imgStyle}" onerror="this.style.display='none';this.parentElement.classList.add('is-broken');">
    <div class="team-fallback" aria-hidden="true">${esc(member.initials)}</div>
  </div>`;
}

function renderServiceCardsHome() {
  return SERVICES.map((service, index) => {
    const spanClass = index < 2 || index >= 5 ? 'bento-span-3' : 'bento-span-2';
    const num = String(index + 1).padStart(2, '0');
    return `<article class="card ${spanClass} reveal">
      <div class="card-index tabular">${num}. ${esc(service.categoryLabel)}</div>
      <h3>${esc(service.title)}</h3>
      <p>${esc(service.summary)}</p>
      <div class="card-footer-link">
        <a class="text-link" href="/services#${service.id}">Explore scope &rarr;</a>
      </div>
    </article>`;
  }).join('');
}

function renderProjectCards() {
  return PROJECTS.map(
    (project) => `<article class="work-card reveal">
      <div class="work-media">
        <img src="${project.image}" alt="${esc(project.title)} by ${esc(project.author)} — BookRise Centre portfolio edition" referrerpolicy="no-referrer" loading="lazy" decoding="async" onerror="this.style.display='none'">
      </div>
      <div class="work-body">
        <div class="work-meta tabular">${project.number}. ${esc(project.genre)} &middot; ${esc(project.author)}</div>
        <h3>${esc(project.title)}</h3>
        <div class="work-scope">${esc(project.scope)}</div>
        <blockquote class="work-quote">
          &ldquo;${esc(project.quote)}&rdquo;
          <cite>&mdash; ${esc(project.author)}, Author</cite>
        </blockquote>
        <button type="button" class="work-inspect-btn" data-case-id="${project.id}">Inspect Edition &amp; Case Study &rarr;</button>
      </div>
    </article>`
  ).join('');
}

function renderTeamCards(eager = true) {
  return TEAM.map(
    (member) => `<article class="team-card reveal">
      ${renderPortrait(member, eager)}
      <h3>${esc(member.name)}</h3>
      <div class="team-role">${esc(member.role)}</div>
      <p class="team-bio">${esc(member.bio)}</p>
      <div class="team-contact">
        <a href="mailto:${esc(member.email)}">${esc(member.email)}</a>
      </div>
    </article>`
  ).join('');
}

function renderMiniTeamStrip() {
  return TEAM.map(
    (member) => `<a class="team-mini reveal" href="/team">
      ${renderPortrait(member, false)}
      <h3>${esc(member.name)}</h3>
      <p>${esc(member.role)}</p>
    </a>`
  ).join('');
}

const CTA_SECTION = `
<section class="cta-band">
  <div class="wrap cta-inner">
    <div>
      <h2>Have a book project in mind?</h2>
      <p>Share your manuscript stage and the support you are considering. We will prepare a clear next step.</p>
    </div>
    <a class="btn btn-primary" href="/contact">Start a Conversation</a>
  </div>
</section>`;

const homePage = `
<main class="page-main">
  <section class="hero">
    <div class="wrap">
      <div class="hero-grid">
        <div class="hero-copy">
          <div class="eyebrow">Publishing &middot; Editorial &middot; Design &middot; Promotion</div>
          <h1>Helping authors bring remarkable books to market.</h1>
          <p class="hero-lead">BookRise Centre brings editorial craft, book design, positioning, and reader outreach together under one coordinated team&mdash;so authors retain full creative control and ownership while moving forward with clarity.</p>
          <div class="hero-actions">
            <a class="btn btn-primary" href="/contact">Discuss Your Book</a>
            <a class="btn btn-ghost" href="/services">Explore Our Services</a>
          </div>
          <div class="hero-meta">
            <span>Brooklyn, New York</span>
            <span aria-hidden="true">&middot;</span>
            <span>Author-retained IP &amp; royalties</span>
            <span aria-hidden="true">&middot;</span>
            <span>Written project scoping</span>
          </div>
        </div>
        <div class="hero-media">
          <img src="${ASSETS.heroAtelier}" alt="BookRise Centre editorial desk with bound editions, manuscript galley proofs, and brass fountain pen" referrerpolicy="no-referrer" fetchpriority="high" decoding="async" onerror="this.style.display='none'">
          <div class="hero-media-caption">
            <span>Editorial &amp; Publishing Desk</span>
            <span>BookRise Centre</span>
          </div>
        </div>
      </div>
      <div class="metrics-band tabular">
        <div class="metric-cell"><strong>Six</strong><span>Publishing &amp; promotion specialists</span></div>
        <div class="metric-cell"><strong>Seven</strong><span>Connected service disciplines</span></div>
        <div class="metric-cell"><strong>100%</strong><span>Author IP &amp; royalty retention</span></div>
        <div class="metric-cell"><strong>Written</strong><span>Scope &amp; deliverables upfront</span></div>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="wrap">
      <div class="section-header-split">
        <div>
          <div class="eyebrow">Capabilities</div>
          <h2>One Centre. Seven connected disciplines.</h2>
          <p class="lead">Commission an individual service or combine editorial, design, and promotional support around a unified publishing schedule.</p>
        </div>
        <a class="text-link" href="/services">View full service breakdown &rarr;</a>
      </div>
      <div class="bento-grid">${renderServiceCardsHome()}</div>
    </div>
  </section>

  <section class="section section-surface">
    <div class="wrap">
      <div class="section-header-split">
        <div>
          <div class="eyebrow">Selected Work &amp; Author Experiences</div>
          <h2>Books positioned with craft and clarity.</h2>
          <p class="lead">Recent author engagements alongside direct feedback from the writers behind each title.</p>
        </div>
        <a class="text-link" href="/work">Explore our portfolio &rarr;</a>
      </div>
      <div class="grid-3">${renderProjectCards()}</div>
    </div>
  </section>

  <section class="section">
    <div class="wrap">
      <div class="section-header-split">
        <div>
          <div class="eyebrow">Our Team</div>
          <h2>Six specialists aligned around your book.</h2>
          <p class="lead">Expanded to six publishing, editorial, design, and book-promotion specialists working together as one coordinated team.</p>
        </div>
        <a class="text-link" href="/team">Meet the full team &rarr;</a>
      </div>
      <div class="team-strip-grid">${renderMiniTeamStrip()}</div>
    </div>
  </section>

  <section class="section section-surface">
    <div class="wrap split-editorial">
      <div>
        <div class="eyebrow">Our Philosophy</div>
        <h2>Clear agreements. Full author ownership.</h2>
        <p class="lead" style="margin-bottom:24px">BookRise Centre is a paid author-services organization. Authors retain 100% of their intellectual property rights and book royalties. Every engagement begins with written deliverables, timelines, and transparent terms.</p>
        <div style="display:flex;gap:12px;flex-wrap:wrap">
          <a class="btn btn-navy" href="/process">See Our 5-Step Process</a>
          <a class="btn btn-outline" href="/pricing">Pricing &amp; Scoping</a>
        </div>
      </div>
      <div class="crest-panel">
        <img src="${ASSETS.crest}" alt="BookRise Centre official emblem — Where Books Gain Visibility and Authors Gain Recognition" referrerpolicy="no-referrer" loading="lazy" decoding="async">
      </div>
    </div>
  </section>

  ${CTA_SECTION}
</main>`;

const aboutPage = `
<main class="page-main">
  <section class="page-intro">
    <div class="wrap">
      <div class="eyebrow">About BookRise Centre</div>
      <h1>Bringing publishing expertise together around authors.</h1>
      <p>An author-services team built around editorial quality, clear written agreements, and complete respect for creative ownership.</p>
    </div>
  </section>

  <section class="section">
    <div class="wrap split-editorial">
      <div>
        <div class="eyebrow">Who We Are</div>
        <h2>Thoughtful support. A shared commitment to authors.</h2>
        <p class="lead">BookRise Centre supports authors with the editorial, publishing, design, and promotional work involved in preparing and positioning a book. Led by Gracious J. Literary, our six-person team brings together expertise in literary direction, editing, writing, cover design, marketing, and reader outreach.</p>
      </div>
      <figure class="editorial-callout">
        <blockquote>&ldquo;The author’s goals, creative voice, and ownership remain central to every decision we help them make.&rdquo;</blockquote>
        <figcaption>BookRise Centre Editorial Charter &middot; Brooklyn, New York</figcaption>
      </figure>
    </div>
  </section>

  <section class="section section-surface">
    <div class="wrap">
      <div class="section-header">
        <div class="eyebrow">Guiding Principles</div>
        <h2>What shapes every engagement.</h2>
      </div>
      <div class="grid-3">
        <article class="card reveal">
          <div class="card-index tabular">01. Clarity</div>
          <h3>Clear expectations</h3>
          <p>We discuss the proposed scope, fees, deliverables, timelines, and responsibilities in writing before any project begins.</p>
        </article>
        <article class="card reveal">
          <div class="card-index tabular">02. Craft</div>
          <h3>Respect for the work</h3>
          <p>We approach each manuscript and book project with careful attention to its subject, audience, voice, and presentation.</p>
        </article>
        <article class="card reveal">
          <div class="card-index tabular">03. Independence</div>
          <h3>Author ownership</h3>
          <p>Our service model is built around professional execution, never acquiring an author’s intellectual property or royalties.</p>
        </article>
      </div>
    </div>
  </section>

  ${CTA_SECTION}
</main>`;

const servicesPage = `
<main class="page-main">
  <section class="page-intro">
    <div class="wrap">
      <div class="eyebrow">Our Services</div>
      <h1>Specialist support for every stage of your book journey.</h1>
      <p>Explore the seven disciplines available through BookRise Centre. Commission a single service or combine areas into a coordinated publishing plan.</p>
    </div>
  </section>

  <section class="section">
    <div class="wrap">
      <div class="section-header-split">
        <div>
          <div class="eyebrow">Service Directory</div>
          <h2>Filter by discipline</h2>
        </div>
        <div class="filter-bar" role="tablist" aria-label="Filter services by category">
          <button type="button" class="filter-btn is-active" data-filter="all" role="tab" aria-selected="true">All Disciplines</button>
          <button type="button" class="filter-btn" data-filter="editorial" role="tab" aria-selected="false">Editorial &amp; Publishing</button>
          <button type="button" class="filter-btn" data-filter="design" role="tab" aria-selected="false">Design &amp; Media</button>
          <button type="button" class="filter-btn" data-filter="promotion" role="tab" aria-selected="false">Promotion &amp; Outreach</button>
        </div>
      </div>

      <div class="grid-2" id="services-grid">
        ${SERVICES.map((s, i) => `
          <article class="card service-item" id="${s.id}" data-category="${s.category}">
            <div class="card-index tabular">${String(i + 1).padStart(2, '0')}. ${esc(s.categoryLabel)}</div>
            <h3>${esc(s.title)}</h3>
            <p>${esc(s.summary)}</p>
            <ul>${s.deliverables.map((d) => `<li>${esc(d)}</li>`).join('')}</ul>
            <div class="card-footer-link">
              <a class="text-link" href="/contact?service=${encodeURIComponent(s.title)}">Enquire about ${esc(s.title)} &rarr;</a>
            </div>
          </article>
        `).join('')}
      </div>

      <div class="editorial-callout" style="margin-top:32px">
        <p style="margin:0;color:var(--ink);font-size:0.9375rem"><strong>Scope transparency:</strong> Exact deliverables, revision rounds, schedule, and fees are confirmed in writing for each project. Services are not considered included unless specified in the agreed scope.</p>
      </div>
    </div>
  </section>

  ${CTA_SECTION}
</main>`;

const teamPage = `
<main class="page-main">
  <section class="page-intro">
    <div class="wrap">
      <div class="eyebrow">Our Team</div>
      <h1>Complementary expertise. One author-focused team.</h1>
      <p>Meet the six publishing, editorial, marketing, and reader-outreach specialists guiding authors at BookRise Centre.</p>
    </div>
  </section>

  <section class="section">
    <div class="wrap">
      <div class="grid-3">${renderTeamCards(true)}</div>
      <div class="editorial-callout" style="margin-top:36px">
        <p style="margin:0;color:var(--ink);font-size:0.9375rem">Project responsibilities are coordinated across our team around the services agreed with each author and the specific needs of the book.</p>
      </div>
    </div>
  </section>

  ${CTA_SECTION}
</main>`;

const workPage = `
<main class="page-main">
  <section class="page-intro">
    <div class="wrap">
      <div class="eyebrow">Selected Work</div>
      <h1>Every book has its own voice. Every project deserves its own approach.</h1>
      <p>Explore featured editions and direct author perspectives from the BookRise Centre portfolio.</p>
    </div>
  </section>

  <section class="section">
    <div class="wrap">
      <div class="grid-3">${renderProjectCards()}</div>
    </div>
  </section>

  ${CTA_SECTION}
</main>`;

const authorsPage = `
<main class="page-main">
  <section class="page-intro">
    <div class="wrap">
      <div class="eyebrow">For Authors</div>
      <h1>Your book. Your rights. A clearer path forward.</h1>
      <p>Professional support shaped around your manuscript, publishing ambitions, and intended readership.</p>
    </div>
  </section>

  <section class="section">
    <div class="wrap">
      <div class="section-header">
        <div class="eyebrow">Author Partnership</div>
        <h2>Support that begins with listening.</h2>
        <p class="lead">Every author arrives at a different stage. We begin by understanding your book, priorities, and timeline before recommending a practical scope.</p>
      </div>
      <div class="grid-3">
        <article class="card reveal"><div class="card-index tabular">01. Discovery</div><h3>Share your project</h3><p>Tell us about your book, current stage, genre, intended readership, and what you want to accomplish.</p></article>
        <article class="card reveal"><div class="card-index tabular">02. Scope</div><h3>Review the recommendation</h3><p>Discuss services, deliverables, schedule, fees, revision rounds, and any third-party platform costs.</p></article>
        <article class="card reveal"><div class="card-index tabular">03. Agreement</div><h3>Move forward clearly</h3><p>Review and approve the written agreement before work begins so expectations stay aligned on both sides.</p></article>
      </div>
    </div>
  </section>

  <section class="section section-surface">
    <div class="wrap split-editorial">
      <div>
        <div class="eyebrow">Creative Independence</div>
        <h2>Author ownership is fundamental.</h2>
        <p class="lead">BookRise Centre is a paid author-services organization. Authors retain their intellectual property rights and book royalties in full.</p>
      </div>
      <div class="editorial-callout">
        <p style="margin:0;color:var(--ink);font-size:0.9375rem">Every written agreement details the exact scope, fees, deliverables, ownership terms, third-party expenses, payment schedule, and cancellation terms before commencement.</p>
      </div>
    </div>
  </section>

  ${CTA_SECTION}
</main>`;

const processPage = `
<main class="page-main">
  <section class="page-intro">
    <div class="wrap">
      <div class="eyebrow">Our Process</div>
      <h1>From first conversation to agreed delivery.</h1>
      <p>Good collaboration begins with shared expectations, an appropriate scope, and transparent milestones.</p>
    </div>
  </section>

  <section class="section">
    <div class="wrap">
      <div class="process-list">
        <div class="process-row"><div class="process-num tabular">01</div><div><h3>Discovery and project understanding</h3><p>We learn about your manuscript or published book, its genre, current stage, intended readership, objectives, and the support you are seeking.</p></div></div>
        <div class="process-row"><div class="process-num tabular">02</div><div><h3>Service recommendation and scope</h3><p>We identify relevant areas of support and outline the proposed tasks, deliverables, review points, responsibilities, and estimated schedule.</p></div></div>
        <div class="process-row"><div class="process-num tabular">03</div><div><h3>Written quotation and agreement</h3><p>You receive the proposed fee and terms covering payment stages, deliverables, ownership, third-party costs, and cancellation conditions before work begins.</p></div></div>
        <div class="process-row"><div class="process-num tabular">04</div><div><h3>Project delivery and communication</h3><p>We carry out the agreed work, provide scheduled updates, and incorporate feedback within the agreed review rounds.</p></div></div>
        <div class="process-row"><div class="process-num tabular">05</div><div><h3>Completion and handover</h3><p>At completion, the final files, editorial materials, or campaign summary are handed over cleanly. Any further work is scoped separately.</p></div></div>
      </div>
    </div>
  </section>

  ${CTA_SECTION}
</main>`;

const whyPage = `
<main class="page-main">
  <section class="page-intro">
    <div class="wrap">
      <div class="eyebrow">Why BookRise Centre</div>
      <h1>Author-focused support with clear terms and respect for your work.</h1>
      <p>A coordinated six-person team, a transparent service model, and complete respect for your creative rights.</p>
    </div>
  </section>

  <section class="section">
    <div class="wrap">
      <div class="grid-3">
        <article class="card"><div class="card-index tabular">01</div><h3>Complementary expertise</h3><p>Publishing, literary, editorial, design, marketing, and reader-promotion skills aligned under one roof.</p></article>
        <article class="card"><div class="card-index tabular">02</div><h3>Coordinated support</h3><p>Discuss connected areas of support without managing disconnected freelancers or conflicting timelines.</p></article>
        <article class="card"><div class="card-index tabular">03</div><h3>Transparent terms</h3><p>Scope, fees, deliverables, timelines, and responsibilities are confirmed in writing before work starts.</p></article>
        <article class="card"><div class="card-index tabular">04</div><h3>Author ownership</h3><p>Authors retain 100% of their intellectual property rights, creative independence, and royalties.</p></article>
        <article class="card"><div class="card-index tabular">05</div><h3>Project-led recommendations</h3><p>Every recommendation is grounded in your book’s actual stage and stated publishing objectives.</p></article>
        <article class="card"><div class="card-index tabular">06</div><h3>Thoughtful communication</h3><p>Structured review points and responsive project coordination throughout the engagement.</p></article>
      </div>
    </div>
  </section>

  ${CTA_SECTION}
</main>`;

const pricingPage = `
<main class="page-main">
  <section class="page-intro">
    <div class="wrap">
      <div class="eyebrow">Pricing &amp; Engagement</div>
      <h1>Clear quotations. Defined deliverables. No one-size-fits-all fees.</h1>
      <p>BookRise Centre provides paid professional author services. Each quotation is shaped around the exact work your book requires.</p>
    </div>
  </section>

  <section class="section">
    <div class="wrap">
      <div class="editorial-callout" style="margin-bottom:32px">
        <div class="eyebrow" style="margin-bottom:8px">Scoping Model</div>
        <p style="font-family:var(--serif);font-size:1.35rem;color:var(--ink-strong);margin:0 0 10px">Every project is scoped before it is priced.</p>
        <p class="lead">The fee for a project reflects the service selected, manuscript length and condition, editing depth or design requirements, number of deliverables, turnaround time, and any approved third-party expenses.</p>
      </div>

      <div class="grid-3">
        <article class="card">
          <div class="card-index tabular">01. Single Service</div>
          <h3>Individual services</h3>
          <p>Request a quotation for a focused task such as proofreading, cover design, metadata optimization, or a promotional campaign.</p>
          <div class="card-footer-link"><a class="text-link" href="/contact">Request single-service quote &rarr;</a></div>
        </article>
        <article class="card">
          <div class="card-index tabular">02. Combined Support</div>
          <h3>Coordinated projects</h3>
          <p>When a book requires multiple disciplines, we sequence editorial, cover design, and visibility work into clear milestones.</p>
          <div class="card-footer-link"><a class="text-link" href="/contact?service=${encodeURIComponent('Multiple Services / Not Sure')}">Discuss combined scope &rarr;</a></div>
        </article>
        <article class="card">
          <div class="card-index tabular">03. Bespoke Scope</div>
          <h3>Project-specific proposals</h3>
          <p>For multi-title or extended launch campaigns, proposals detail milestones, review stages, payment schedule, and delivery timing.</p>
          <div class="card-footer-link"><a class="text-link" href="/contact">Request bespoke proposal &rarr;</a></div>
        </article>
      </div>
    </div>
  </section>

  <section class="section section-surface">
    <div class="wrap">
      <div class="section-header">
        <div class="eyebrow">What Shapes a Quotation</div>
        <h2>The factors we evaluate.</h2>
      </div>
      <div class="grid-2">
        <article class="card"><h3>Nature and size of the work</h3><p>Manuscript word count, file condition, editorial depth, cover specifications, and volume of material under review.</p></article>
        <article class="card"><h3>Deliverables and revisions</h3><p>Agreed output files, formats, concept variations, included revision rounds, and final handover requirements.</p></article>
        <article class="card"><h3>Schedule and coordination</h3><p>Target publication date, turnaround window, approval stages, and cross-discipline coordination.</p></article>
        <article class="card"><h3>External and platform costs</h3><p>Any agreed third-party expenses such as printing, paid advertising spend, or platform fees are itemized separately.</p></article>
      </div>
      <div class="editorial-callout" style="margin-top:28px">
        <p style="margin:0;color:var(--ink);font-size:0.9375rem"><strong>Commitment to transparency:</strong> We do not guarantee sales, reviews, rankings, or commercial outcomes. Any quotation covers the professional services and deliverables specified in the written agreement.</p>
      </div>
    </div>
  </section>

  ${CTA_SECTION}
</main>`;

const resourcesPage = `
<main class="page-main">
  <section class="page-intro">
    <div class="wrap">
      <div class="eyebrow">The Author Desk</div>
      <h1>Author Resources</h1>
      <p>Practical publishing guidance to help authors make informed decisions at every stage of the book journey.</p>
    </div>
  </section>

  <section class="section">
    <div class="wrap">
      <div class="grid-3">
        <article class="card"><div class="card-index tabular">01. Preparation</div><h3>Manuscript readiness checklist</h3><p>Review structure, consistency, formatting, permissions, and final proofing before production begins.</p><div class="card-footer-link"><a class="text-link" href="/contact?service=${encodeURIComponent('Editing & Writing')}">Discuss manuscript preparation &rarr;</a></div></article>
        <article class="card"><div class="card-index tabular">02. Presentation</div><h3>What makes a strong book cover?</h3><p>Understand genre expectations, title hierarchy, thumbnail legibility, and print-versus-digital framing.</p><div class="card-footer-link"><a class="text-link" href="/services#cover-design">Explore cover design &rarr;</a></div></article>
        <article class="card"><div class="card-index tabular">03. Distribution</div><h3>Choosing a publishing platform</h3><p>Compare distribution channels, file specifications, royalty structures, territories, and metadata control.</p><div class="card-footer-link"><a class="text-link" href="/authors">Read our author approach &rarr;</a></div></article>
        <article class="card"><div class="card-index tabular">04. Discoverability</div><h3>Metadata, categories and keywords</h3><p>Learn how accurate descriptions and structured metadata help readers locate the right book.</p><div class="card-footer-link"><a class="text-link" href="/services#visibility-discoverability">Explore discoverability &rarr;</a></div></article>
        <article class="card"><div class="card-index tabular">05. Ownership</div><h3>Protecting creative independence</h3><p>Clarify intellectual property retention, service agreements, asset licenses, and third-party fees.</p><div class="card-footer-link"><a class="text-link" href="/why-choose-us">Our transparency standard &rarr;</a></div></article>
        <article class="card"><div class="card-index tabular">06. Promotion</div><h3>Planning thoughtful outreach</h3><p>Set realistic launch milestones and identify relevant reader communities, podcasts, and reviewers.</p><div class="card-footer-link"><a class="text-link" href="/services#book-promotion">Explore book promotion &rarr;</a></div></article>
      </div>
    </div>
  </section>

  ${CTA_SECTION}
</main>`;

const faqPage = `
<main class="page-main">
  <section class="page-intro">
    <div class="wrap">
      <div class="eyebrow">Frequently Asked Questions</div>
      <h1>Helpful answers before you begin.</h1>
      <p>Clear information about our services, project scoping, author ownership, and working process.</p>
    </div>
  </section>

  <section class="section">
    <div class="wrap">
      <div class="faq-toolbar">
        <input class="faq-search" id="faq-search" type="search" placeholder="Filter questions (e.g. royalties, pricing, timeline)..." aria-label="Filter frequently asked questions">
        <span class="tabular" id="faq-count" style="font-size:0.875rem;color:var(--muted)">Showing ${FAQS.length} of ${FAQS.length} questions</span>
      </div>
      <div class="faq-list" id="faq-list">
        ${FAQS.map(
          ([q, a], i) => `<details class="faq-item" ${i === 0 ? 'open' : ''}>
            <summary>
              <span><span class="tabular" style="color:var(--gold);margin-right:8px">${String(i + 1).padStart(2, '0')}.</span>${esc(q)}</span>
              <span class="faq-chevron" aria-hidden="true">+</span>
            </summary>
            <div class="faq-answer">${esc(a)}</div>
          </details>`
        ).join('')}
      </div>
    </div>
  </section>

  ${CTA_SECTION}
</main>`;

const contactPage = `
<main class="page-main">
  <section class="page-intro">
    <div class="wrap">
      <div class="eyebrow">Contact BookRise Centre</div>
      <h1>Let us start a conversation about your book.</h1>
      <p>Share a few details about your project. Our team will review your inquiry and follow up using your contact details.</p>
    </div>
  </section>

  <section class="section">
    <div class="wrap contact-layout">
      <div>
        <div class="eyebrow">Direct Channels</div>
        <h2 style="font-family:var(--serif);font-size:2rem;color:var(--ink-strong);margin:10px 0 12px">Tell us about the book you are building.</h2>
        <p class="lead" style="margin-bottom:24px">Whether you are preparing a manuscript, refining a published title, or planning a promotional campaign, context helps us recommend a practical next step.</p>
        <div class="contact-panel">
          <div class="contact-row">
            <span class="contact-label">General Inquiries</span>
            <a href="mailto:hello@bookrisecentre.com">hello@bookrisecentre.com</a>
          </div>
          <div class="contact-row">
            <span class="contact-label">WhatsApp</span>
            <a href="https://wa.me/2349049497206" target="_blank" rel="noopener noreferrer">+234 904 949 7206</a>
          </div>
          <div class="contact-row">
            <span class="contact-label">Office</span>
            <span>Brooklyn, New York, United States</span>
          </div>
        </div>
        <p style="font-size:0.8125rem;color:var(--muted);margin-top:16px">Please do not attach confidential manuscript files, passwords, or payment details at this initial inquiry stage.</p>
      </div>

      <div class="contact-panel">
        <div class="eyebrow">Project Inquiry</div>
        <h2 style="font-family:var(--serif);font-size:1.75rem;color:var(--ink-strong);margin:8px 0 20px">How can we support you?</h2>
        <form id="enquiry-form" novalidate>
          <div class="form-grid">
            <label class="field-label">Full name *
              <input class="field-input" name="fullName" required maxlength="120" autocomplete="name" placeholder="Your full name">
            </label>
            <label class="field-label">Email address *
              <input class="field-input" name="email" type="email" required maxlength="180" autocomplete="email" placeholder="you@example.com">
            </label>
            <label class="field-label">Book title
              <input class="field-input" name="bookTitle" maxlength="180" placeholder="Working or published title">
            </label>
            <label class="field-label">Genre / category
              <input class="field-input" name="genre" maxlength="120" placeholder="e.g. Memoir, Business, Fiction">
            </label>
            <label class="field-label">Service required *
              <select class="field-input" name="service" id="service-select" required>
                <option value="">Select a service</option>
                <option>Publishing Support</option>
                <option>Editing &amp; Writing</option>
                <option>Cover Design</option>
                <option>Book Promotion</option>
                <option>Video Promotion &amp; Book Trailers</option>
                <option>Visibility &amp; Discoverability</option>
                <option>Reader Outreach</option>
                <option>Multiple Services / Not Sure</option>
              </select>
            </label>
            <label class="field-label">Publishing stage
              <select class="field-input" name="projectStage">
                <option value="">Select stage</option>
                <option>Planning a book</option>
                <option>Manuscript in progress</option>
                <option>Manuscript completed</option>
                <option>Preparing for publication</option>
                <option>Already published</option>
              </select>
            </label>
            <label class="field-label form-full">Preferred timeline
              <select class="field-input" name="timeline">
                <option value="">Select timeline</option>
                <option>As soon as practical</option>
                <option>Within 1 month</option>
                <option>Within 2&ndash;3 months</option>
                <option>Flexible</option>
              </select>
            </label>
            <label class="field-label form-full">Tell us about your project *
              <textarea class="field-input" name="message" id="message-input" rows="5" required maxlength="5000" placeholder="Share a brief overview of your book, word count if known, and goals..."></textarea>
              <span class="field-hint-row"><span>Minimum 10 characters</span><span class="tabular" id="char-count">0 / 5000</span></span>
            </label>
            <label class="honeypot">Leave empty <input name="website" tabindex="-1" autocomplete="off"></label>
            <label class="consent-label form-full">
              <input type="checkbox" name="consent" required>
              <span>I agree that BookRise Centre may use these details to respond to my enquiry. See our <a href="/privacy">Privacy Policy</a>.</span>
            </label>
          </div>
          <button class="btn btn-primary" type="submit" style="margin-top:20px;width:100%">Submit Project Enquiry</button>
          <p class="form-status" id="form-status" role="status" aria-live="polite"></p>
        </form>
      </div>
    </div>
  </section>
</main>`;

function legalPage(title, desc, sections) {
  return `<main class="page-main">
    <section class="page-intro">
      <div class="wrap">
        <div class="eyebrow">BookRise Centre &middot; Information</div>
        <h1>${esc(title)}</h1>
        <p>${esc(desc)}</p>
      </div>
    </section>
    <section class="section">
      <div class="wrap legal-prose">
        ${sections.map(([heading, body]) => `<h2>${esc(heading)}</h2><p>${esc(body)}</p>`).join('')}
      </div>
    </section>
  </main>`;
}

const termsPage = legalPage(
  'Terms of Service',
  'The principles governing inquiries and paid author-service engagements with BookRise Centre.',
  [
    ['1. Services and project scope', 'BookRise Centre provides professional author services including publishing support, editing and writing, cover design, book promotion, visibility and discoverability support, and reader outreach. The services provided for a particular project are limited to the tasks and deliverables expressly described in the written quotation or service agreement.'],
    ['2. Quotations and acceptance', 'A quotation is based on the information available when it is prepared. If the manuscript, project requirements, deliverables or schedule change, the scope and fee may need to be reviewed. Work begins only after the parties have accepted the applicable written terms and any required initial payment has been received.'],
    ['3. Fees and payment', 'The quotation or agreement should state the fee, currency, payment stages, due dates and any external costs. Any additional work outside the agreed scope requires a separate written approval and may attract an additional fee.'],
    ['4. Author materials and responsibilities', 'Authors are responsible for ensuring that they have the right to provide all manuscripts, images, text and other materials supplied for the project. Authors should provide accurate information, feedback and approvals within the agreed timeframe.'],
    ['5. Intellectual property and ownership', 'Authors retain ownership of their original manuscripts and intellectual property. Any limited permission required for BookRise Centre to access, edit, format, design or promote materials is restricted to performing the agreed services. The project agreement should record any third-party assets, licenses or platform terms that apply.'],
    ['6. Revisions, approvals and delivery', 'The agreement should state the number and nature of included revision rounds, approval responsibilities, file formats and delivery method. Work requested after approval or beyond the agreed revision allowance may be treated as additional work.'],
    ['7. Third-party services and platforms', 'Printing, distribution platforms, advertising platforms, paid placements, software, ISBN services and other third-party providers may have their own fees, rules and terms. Such costs should be identified and approved before they are incurred. BookRise Centre does not control third-party platform decisions or availability.'],
    ['8. No guaranteed commercial outcomes', 'BookRise Centre does not guarantee book sales, income, reviews, rankings, media coverage, acceptance by reviewers or podcasts, or a particular audience response. Marketing and outreach outcomes depend on independent decisions and market conditions.'],
    ['9. Cancellation and refunds', 'Cancellation, pause and refund arrangements should be stated in the project-specific agreement, including how completed work, committed third-party costs and outstanding payments are handled.'],
    ['10. Communication and changes', 'Project updates, review points, response expectations and change requests should be agreed at the outset. Material changes to the project may require a revised scope, fee or timeline.'],
    ['11. Contact', 'Questions about these terms or a proposed engagement may be sent to hello@bookrisecentre.com.'],
  ]
);

const privacyPage = legalPage(
  'Privacy Policy',
  'How BookRise Centre handles information provided through enquiries and service engagements.',
  [
    ['1. Information you may provide', 'Depending on your enquiry, you may provide your name, email address, contact details, book title, genre, manuscript or project information, service preferences and communications with our team.'],
    ['2. How information is used', 'Information is used to respond to enquiries, assess requested services, prepare quotations, communicate about projects, deliver agreed services and maintain relevant business records.'],
    ['3. Sharing and service providers', 'Information may be shared with team members or service providers only where reasonably necessary to respond to an enquiry or perform agreed work. Any third-party platform or provider may process information under its own terms and privacy practices.'],
    ['4. Manuscripts and confidential material', 'Please do not send a complete manuscript or sensitive personal information through an unsecured channel before the submission method and any applicable confidentiality arrangements have been discussed and agreed.'],
    ['5. Retention and security', 'Information is retained for as long as reasonably necessary for the purpose for which it was provided, relevant project administration and legitimate record-keeping. Appropriate care should be taken to protect information, although no method of electronic transmission or storage can be guaranteed to be completely secure.'],
    ['6. Your questions and requests', 'You may contact BookRise Centre to ask about information you have provided or to request an update where appropriate. We may need to retain certain records for legitimate business or legal purposes.'],
    ['7. Policy updates and contact', 'This policy may be updated as the Centre’s practices or applicable requirements change. For questions about this policy or requests concerning information you have provided, contact hello@bookrisecentre.com.'],
  ]
);

const refundsPage = legalPage(
  'Refund & Cancellation Policy',
  'How cancellation and refund arrangements are addressed for BookRise Centre author services.',
  [
    ['1. Written terms before payment', 'Before a project begins, the author should receive written information describing the services, deliverables, total fee, payment schedule, estimated timeline, cancellation process and any applicable refund conditions.'],
    ['2. Project-specific arrangements', 'Refund eligibility and cancellation arrangements depend on the agreement for the particular project, the nature of the service, work already completed, resources committed and third-party costs already incurred.'],
    ['3. Work already completed', 'Where a project is cancelled after work has started, the agreement should explain how completed work, work in progress and any non-recoverable external costs are accounted for.'],
    ['4. Third-party charges', 'Charges paid or committed to independent platforms, suppliers, advertising providers, printers or other third parties may be subject to their own refund rules. Such costs should be disclosed and approved where applicable.'],
    ['5. Requesting a cancellation or clarification', 'Authors should submit cancellation requests or questions in writing to hello@bookrisecentre.com, identifying the project and the relevant agreement. The team can then review the applicable terms and respond.'],
    ['6. Governing agreement', 'This page provides general information. The project-specific written agreement and any mandatory consumer protections applicable to the transaction govern the final cancellation and refund position.'],
  ]
);

const PAGES = {
  '/': ['Home', 'Publishing, editorial, design and book-promotion support for authors preparing, positioning and promoting their books.', homePage],
  '/about': ['About BookRise Centre', 'Learn about BookRise Centre and our author-focused publishing philosophy.', aboutPage],
  '/services': ['Our Services', 'Explore publishing, editing, cover design, book promotion, discoverability and reader outreach.', servicesPage],
  '/team': ['Our Team', 'Meet the six publishing, literary, marketing and book-promotion specialists at BookRise Centre.', teamPage],
  '/work': ['Our Work', 'Explore selected author projects and testimonials represented in the BookRise Centre portfolio.', workPage],
  '/authors': ['For Authors', 'How BookRise Centre supports authors with publishing, editorial and promotional services.', authorsPage],
  '/resources': ['Author Resources', 'Practical publishing guidance for authors.', resourcesPage],
  '/process': ['Our Process', 'A clear, author-focused process for working with BookRise Centre.', processPage],
  '/why-choose-us': ['Why Choose Us', 'Learn about BookRise Centre’s collaborative expertise, author focus and transparent service model.', whyPage],
  '/faq': ['Frequently Asked Questions', 'Answers about BookRise Centre services, pricing, ownership and project process.', faqPage],
  '/pricing': ['Pricing & Engagement', 'Understand how BookRise Centre scopes projects and prepares transparent quotations.', pricingPage],
  '/contact': ['Contact BookRise Centre', 'Contact BookRise Centre to discuss publishing, editing, writing and book promotion support.', contactPage],
  '/terms': ['Terms of Service', 'Terms for BookRise Centre author-service engagements.', termsPage],
  '/privacy': ['Privacy Policy', 'How BookRise Centre handles information provided through enquiries and projects.', privacyPage],
  '/refunds': ['Refund & Cancellation Policy', 'Information about cancellation and refund arrangements for BookRise Centre services.', refundsPage],
};

function renderShell(currentPath, title, desc, body) {
  const navItems = [
    ['/about', 'About'],
    ['/services', 'Services'],
    ['/work', 'Our Work'],
    ['/team', 'Team'],
    ['/resources', 'Resources'],
  ];

  const mobileLinks = [
    ['/', 'Home'],
    ['/about', 'About'],
    ['/services', 'Services'],
    ['/pricing', 'Pricing & Engagement'],
    ['/work', 'Our Work'],
    ['/team', 'Our Team'],
    ['/authors', 'For Authors'],
    ['/resources', 'Resources'],
    ['/process', 'Our Process'],
    ['/faq', 'FAQ'],
    ['/contact', 'Contact'],
  ];

  const isActive = (u) => (currentPath === u ? 'is-active' : '');

  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <meta name="theme-color" content="#0c1a32">
  <meta name="description" content="${esc(desc)}">
  <meta property="og:type" content="website">
  <meta property="og:title" content="${esc(title)} | BookRise Centre">
  <meta property="og:description" content="${esc(desc)}">
  <title>${esc(title)} | BookRise Centre</title>
  <link rel="icon" type="image/png" href="${ASSETS.monogram}">
  <script type="application/ld+json">${JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'BookRise Centre',
    description: 'Coordinated publishing, editorial, cover design, and book-promotion services with full author ownership.',
    email: 'hello@bookrisecentre.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Brooklyn',
      addressRegion: 'NY',
      addressCountry: 'US',
    },
    sameAs: ['https://www.instagram.com/bookrisecentre', 'https://x.com/bookrisecentre'],
  })}</script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:wght@500;600;700&display=swap" rel="stylesheet">
  <script>
    (function () {
      try {
        var raw = localStorage.getItem('bookrise-prefs');
        var prefs = raw ? JSON.parse(raw) : {};
        var theme = prefs.theme || 'system';
        var resolved = theme === 'system'
          ? (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
          : theme;
        var root = document.documentElement;
        root.setAttribute('data-theme', resolved);
        root.setAttribute('data-text-size', prefs.textSize || 'standard');
        root.setAttribute('data-motion', prefs.motion || 'smooth');
        root.setAttribute('data-contrast', prefs.contrast || 'standard');
      } catch (e) {}
    })();
  </script>
  <style>${css}</style>
</head>
<body>
  <div class="scroll-progress" id="scroll-progress" aria-hidden="true"></div>

  <header class="site-header">
    <div class="wrap header-inner">
      <a class="brand-link" href="/" aria-label="BookRise Centre Home">
        <span class="brand-mark"><img src="${ASSETS.monogram}" alt="" width="32" height="32"></span>
        <span class="brand-wordmark">BOOKRISE CENTRE</span>
      </a>

      <nav class="primary-nav" aria-label="Primary navigation">
        ${navItems.map(([href, label]) => `<a class="${isActive(href)}" href="${href}">${label}</a>`).join('')}
      </nav>

      <a class="header-cta" href="/contact">Start a Conversation</a>

      <button class="mobile-menu-btn" id="mobile-menu-btn" type="button" aria-expanded="false" aria-controls="mobile-drawer">
        <span>Menu</span>
      </button>
    </div>

    <div class="mobile-drawer" id="mobile-drawer" hidden>
      <div class="mobile-drawer-links">
        ${mobileLinks.map(([href, label]) => `<a class="${isActive(href)}" href="${href}">${label}</a>`).join('')}
      </div>
      <div class="mobile-drawer-actions">
        <a class="btn btn-primary" href="/contact">Start a Conversation</a>
        <button class="btn btn-outline" type="button" data-open-settings>Display Settings</button>
      </div>
    </div>
  </header>

  ${body}

  <footer class="site-footer">
    <div class="wrap">
      <div class="footer-grid">
        <div>
          <a class="footer-brand" href="/">
            <span class="brand-mark"><img src="${ASSETS.monogram}" alt="BookRise Centre emblem" width="32" height="32"></span>
            <strong>BOOKRISE CENTRE</strong>
          </a>
          <p class="footer-tagline">Where books gain visibility and authors gain recognition. Coordinated editorial, design, and promotional support with full author ownership.</p>
          <div class="footer-location">Brooklyn, New York, United States</div>
        </div>

        <div>
          <h4>Explore</h4>
          <div class="footer-links">
            <a href="/about">About Us</a>
            <a href="/services">Our Services</a>
            <a href="/pricing">Pricing &amp; Engagement</a>
            <a href="/work">Our Work</a>
            <a href="/team">Our Team</a>
            <a href="/process">Our Process</a>
          </div>
        </div>

        <div>
          <h4>Authors &amp; Policy</h4>
          <div class="footer-links">
            <a href="/authors">For Authors</a>
            <a href="/resources">Author Resources</a>
            <a href="/why-choose-us">Why Choose Us</a>
            <a href="/faq">Frequently Asked Questions</a>
            <a href="/terms">Terms of Service</a>
            <a href="/privacy">Privacy Policy</a>
            <a href="/refunds">Refund &amp; Cancellation Policy</a>
          </div>
        </div>

        <div>
          <h4>Connect</h4>
          <div class="footer-links">
            <a href="mailto:hello@bookrisecentre.com">hello@bookrisecentre.com</a>
            <a href="https://wa.me/2349049497206" target="_blank" rel="noopener noreferrer">WhatsApp: +234 904 949 7206</a>
            <button type="button" data-open-settings>Display &amp; Reading Settings</button>
          </div>
          <div class="footer-social">
            <a href="https://www.instagram.com/bookrisecentre" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://x.com/bookrisecentre" target="_blank" rel="noopener noreferrer">X</a>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <span>&copy; 2026 BookRise Centre. All rights reserved.</span>
        <span>Author-first publishing support.</span>
      </div>
    </div>
  </footer>

  <div class="utility-dock">
    <button class="utility-btn to-top-btn" id="to-top-btn" type="button" aria-label="Back to top">&uarr; Top</button>
    <button class="utility-btn" id="settings-trigger" type="button" aria-haspopup="dialog" aria-controls="settings-drawer">Settings</button>
  </div>

  <div class="settings-backdrop" id="settings-backdrop" hidden></div>
  <aside class="settings-drawer" id="settings-drawer" role="dialog" aria-modal="true" aria-labelledby="settings-title" hidden>
    <div class="settings-head">
      <h2 id="settings-title">Display Settings</h2>
      <button class="settings-close" id="settings-close" type="button" aria-label="Close display settings">&times;</button>
    </div>

    <div class="setting-group">
      <div class="setting-label">Color Theme</div>
      <p class="setting-desc">Switch between editorial daylight paper, dark nocturnal slate, or your device preference.</p>
      <div class="segmented" role="group" aria-label="Color theme">
        <button type="button" class="seg-opt" data-setting="theme" data-value="light">Light</button>
        <button type="button" class="seg-opt" data-setting="theme" data-value="dark">Dark</button>
        <button type="button" class="seg-opt" data-setting="theme" data-value="system">System</button>
      </div>
    </div>

    <div class="setting-group">
      <div class="setting-label">Reading Size</div>
      <p class="setting-desc">Adjust base typography scale across articles, service guides, and legal terms.</p>
      <div class="segmented" role="group" aria-label="Reading text size">
        <button type="button" class="seg-opt" data-setting="textSize" data-value="standard">Standard</button>
        <button type="button" class="seg-opt" data-setting="textSize" data-value="comfortable">Medium</button>
        <button type="button" class="seg-opt" data-setting="textSize" data-value="large">Large</button>
      </div>
    </div>

    <div class="setting-group">
      <div class="setting-label">Page Transitions</div>
      <p class="setting-desc">Control entrance transitions, hover movement, and scroll reveals.</p>
      <div class="segmented two-col" role="group" aria-label="Motion preference">
        <button type="button" class="seg-opt" data-setting="motion" data-value="smooth">Smooth</button>
        <button type="button" class="seg-opt" data-setting="motion" data-value="reduced">Reduced</button>
      </div>
    </div>

    <div class="setting-group">
      <div class="setting-label">Text &amp; Border Contrast</div>
      <p class="setting-desc">Increase ink density and hairline border clarity for higher legibility.</p>
      <div class="segmented two-col" role="group" aria-label="Contrast preference">
        <button type="button" class="seg-opt" data-setting="contrast" data-value="standard">Standard</button>
        <button type="button" class="seg-opt" data-setting="contrast" data-value="high">High Contrast</button>
      </div>
    </div>

    <div class="settings-footer">
      <button type="button" class="btn btn-outline" id="settings-reset" style="min-height:40px;padding:8px 16px">Reset Defaults</button>
      <button type="button" class="btn btn-navy" id="settings-done" style="min-height:40px;padding:8px 18px">Done</button>
    </div>
  </aside>

  <div class="case-backdrop" id="case-backdrop" hidden>
    <div class="case-modal" role="dialog" aria-modal="true" aria-labelledby="case-title">
      <div class="case-modal-media">
        <img id="case-img" src="" alt="">
      </div>
      <div class="case-modal-body">
        <div class="case-modal-head">
          <div>
            <div class="eyebrow" id="case-meta"></div>
            <h3 id="case-title"></h3>
          </div>
          <button class="settings-close" id="case-close" type="button" aria-label="Close case study">&times;</button>
        </div>
        <p id="case-brief" style="margin:0;color:var(--muted);font-size:0.9375rem"></p>
        <div>
          <div class="setting-label" style="margin-bottom:6px">Scope Delivered</div>
          <ul id="case-deliverables"></ul>
        </div>
        <blockquote id="case-quote" style="margin:4px 0 0;padding-top:12px;border-top:1px solid var(--line);font-size:0.875rem;color:var(--ink)"></blockquote>
        <div style="margin-top:auto;padding-top:12px;display:flex;gap:10px;flex-wrap:wrap">
          <a class="btn btn-primary" href="/contact" id="case-cta">Discuss a Similar Project</a>
        </div>
      </div>
    </div>
  </div>

  <script>
    window.__BOOKRISE_CASES__ = ${JSON.stringify(PROJECTS)};
  </script>
  <script>
    (function () {
      var DEFAULTS = { theme: 'system', textSize: 'standard', motion: 'smooth', contrast: 'standard' };
      var root = document.documentElement;

      function loadPrefs() {
        try {
          var raw = localStorage.getItem('bookrise-prefs');
          return raw ? Object.assign({}, DEFAULTS, JSON.parse(raw)) : Object.assign({}, DEFAULTS);
        } catch (e) {
          return Object.assign({}, DEFAULTS);
        }
      }

      function savePrefs(prefs) {
        try {
          localStorage.setItem('bookrise-prefs', JSON.stringify(prefs));
        } catch (e) {}
      }

      function applyPrefs(prefs) {
        var resolvedTheme = prefs.theme === 'system'
          ? (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
          : prefs.theme;
        root.setAttribute('data-theme', resolvedTheme);
        root.setAttribute('data-text-size', prefs.textSize);
        root.setAttribute('data-motion', prefs.motion);
        root.setAttribute('data-contrast', prefs.contrast);

        document.querySelectorAll('[data-setting]').forEach(function (btn) {
          var key = btn.getAttribute('data-setting');
          var val = btn.getAttribute('data-value');
          var active = prefs[key] === val;
          btn.classList.toggle('is-selected', active);
          btn.setAttribute('aria-pressed', active ? 'true' : 'false');
        });
      }

      var prefs = loadPrefs();
      applyPrefs(prefs);

      if (window.matchMedia) {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function () {
          if (prefs.theme === 'system') applyPrefs(prefs);
        });
      }

      // Settings Drawer
      var drawer = document.getElementById('settings-drawer');
      var backdrop = document.getElementById('settings-backdrop');
      var trigger = document.getElementById('settings-trigger');
      var closeBtn = document.getElementById('settings-close');
      var doneBtn = document.getElementById('settings-done');
      var resetBtn = document.getElementById('settings-reset');

      function openSettings() {
        if (!drawer || !backdrop) return;
        backdrop.hidden = false;
        drawer.hidden = false;
        requestAnimationFrame(function () {
          backdrop.classList.add('is-open');
          drawer.classList.add('is-open');
        });
        if (closeBtn) closeBtn.focus();
      }

      function closeSettings() {
        if (!drawer || !backdrop) return;
        backdrop.classList.remove('is-open');
        drawer.classList.remove('is-open');
        setTimeout(function () {
          backdrop.hidden = true;
          drawer.hidden = true;
        }, 220);
      }

      if (trigger) trigger.addEventListener('click', openSettings);
      document.querySelectorAll('[data-open-settings]').forEach(function (el) {
        el.addEventListener('click', function () {
          closeMobileMenu();
          openSettings();
        });
      });
      if (closeBtn) closeBtn.addEventListener('click', closeSettings);
      if (doneBtn) doneBtn.addEventListener('click', closeSettings);
      if (backdrop) backdrop.addEventListener('click', closeSettings);

      document.querySelectorAll('[data-setting]').forEach(function (btn) {
        btn.addEventListener('click', function () {
          var key = btn.getAttribute('data-setting');
          var val = btn.getAttribute('data-value');
          prefs[key] = val;
          savePrefs(prefs);
          applyPrefs(prefs);
        });
      });

      if (resetBtn) {
        resetBtn.addEventListener('click', function () {
          prefs = Object.assign({}, DEFAULTS);
          savePrefs(prefs);
          applyPrefs(prefs);
        });
      }

      // Mobile Navigation Drawer
      var menuBtn = document.getElementById('mobile-menu-btn');
      var mobileDrawer = document.getElementById('mobile-drawer');

      function closeMobileMenu() {
        if (!menuBtn || !mobileDrawer) return;
        mobileDrawer.classList.remove('is-open');
        mobileDrawer.hidden = true;
        menuBtn.setAttribute('aria-expanded', 'false');
        menuBtn.querySelector('span').textContent = 'Menu';
      }

      if (menuBtn && mobileDrawer) {
        menuBtn.addEventListener('click', function () {
          var opening = mobileDrawer.hidden;
          if (opening) {
            mobileDrawer.hidden = false;
            requestAnimationFrame(function () {
              mobileDrawer.classList.add('is-open');
            });
            menuBtn.setAttribute('aria-expanded', 'true');
            menuBtn.querySelector('span').textContent = 'Close';
          } else {
            closeMobileMenu();
          }
        });
      }

      // Case Study Modal
      var caseBackdrop = document.getElementById('case-backdrop');
      var caseClose = document.getElementById('case-close');
      var casesData = window.__BOOKRISE_CASES__ || [];

      function openCase(id) {
        if (!caseBackdrop) return;
        var item = casesData.find(function (c) { return c.id === id; });
        if (!item) return;
        document.getElementById('case-img').src = item.image;
        document.getElementById('case-img').alt = item.title + ' by ' + item.author;
        document.getElementById('case-meta').textContent = item.genre + ' · ' + item.author;
        document.getElementById('case-title').textContent = item.title;
        document.getElementById('case-brief').textContent = item.brief;
        document.getElementById('case-quote').textContent = '“' + item.quote + '” — ' + item.author;
        var list = document.getElementById('case-deliverables');
        list.innerHTML = '';
        (item.deliverables || []).forEach(function (d) {
          var li = document.createElement('li');
          li.textContent = d;
          list.appendChild(li);
        });
        caseBackdrop.hidden = false;
        requestAnimationFrame(function () {
          caseBackdrop.classList.add('is-open');
        });
        if (caseClose) caseClose.focus();
      }

      function closeCase() {
        if (!caseBackdrop || caseBackdrop.hidden) return;
        caseBackdrop.classList.remove('is-open');
        setTimeout(function () {
          caseBackdrop.hidden = true;
        }, 220);
      }

      document.querySelectorAll('[data-case-id]').forEach(function (btn) {
        btn.addEventListener('click', function () {
          openCase(btn.getAttribute('data-case-id'));
        });
      });
      if (caseClose) caseClose.addEventListener('click', closeCase);
      if (caseBackdrop) {
        caseBackdrop.addEventListener('click', function (e) {
          if (e.target === caseBackdrop) closeCase();
        });
      }

      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
          closeSettings();
          closeMobileMenu();
          closeCase();
        }
      });

      // Scroll Progress + Back-to-Top
      var progressBar = document.getElementById('scroll-progress');
      var toTopBtn = document.getElementById('to-top-btn');

      function onScroll() {
        var docH = document.documentElement.scrollHeight - window.innerHeight;
        var ratio = docH > 0 ? Math.min(1, Math.max(0, window.scrollY / docH)) : 0;
        if (progressBar) progressBar.style.transform = 'scaleX(' + ratio.toFixed(4) + ')';
        if (toTopBtn) toTopBtn.classList.toggle('is-visible', window.scrollY > 420);
      }

      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();

      if (toTopBtn) {
        toTopBtn.addEventListener('click', function () {
          window.scrollTo({ top: 0, behavior: prefs.motion === 'reduced' ? 'auto' : 'smooth' });
        });
      }

      // Progressive Reveal Observer for below-the-fold elements
      var revealItems = document.querySelectorAll('.reveal');
      if ('IntersectionObserver' in window && prefs.motion !== 'reduced') {
        var observer = new IntersectionObserver(function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.remove('is-pending');
              entry.target.classList.add('is-visible');
              observer.unobserve(entry.target);
            }
          });
        }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

        revealItems.forEach(function (el) {
          var rect = el.getBoundingClientRect();
          if (rect.top > window.innerHeight * 0.95) {
            el.classList.add('is-pending');
            observer.observe(el);
          }
        });
      }

      // Services Page Filter Tabs
      var filterBtns = document.querySelectorAll('[data-filter]');
      var serviceItems = document.querySelectorAll('.service-item');
      if (filterBtns.length && serviceItems.length) {
        filterBtns.forEach(function (btn) {
          btn.addEventListener('click', function () {
            var cat = btn.getAttribute('data-filter');
            filterBtns.forEach(function (b) {
              var active = b === btn;
              b.classList.toggle('is-active', active);
              b.setAttribute('aria-selected', active ? 'true' : 'false');
            });
            serviceItems.forEach(function (item) {
              var match = cat === 'all' || item.getAttribute('data-category') === cat;
              item.style.display = match ? '' : 'none';
            });
          });
        });
      }

      // FAQ Live Filter
      var faqSearch = document.getElementById('faq-search');
      var faqItems = document.querySelectorAll('#faq-list .faq-item');
      var faqCount = document.getElementById('faq-count');
      if (faqSearch && faqItems.length) {
        faqSearch.addEventListener('input', function () {
          var q = faqSearch.value.trim().toLowerCase();
          var visible = 0;
          faqItems.forEach(function (item) {
            var text = item.textContent.toLowerCase();
            var match = !q || text.indexOf(q) !== -1;
            item.style.display = match ? '' : 'none';
            if (match) {
              visible++;
              if (q.length >= 2) item.open = true;
            }
          });
          if (faqCount) {
            faqCount.textContent = 'Showing ' + visible + ' of ' + faqItems.length + ' questions';
          }
        });
      }

      // Contact Form Pre-select, Counter & Submission
      var enquiryForm = document.getElementById('enquiry-form');
      if (enquiryForm) {
        var serviceSelect = document.getElementById('service-select');
        var params = new URLSearchParams(window.location.search);
        var requestedService = params.get('service');
        if (requestedService && serviceSelect) {
          for (var i = 0; i < serviceSelect.options.length; i++) {
            if (serviceSelect.options[i].text === requestedService) {
              serviceSelect.selectedIndex = i;
              break;
            }
          }
        }

        var msgInput = document.getElementById('message-input');
        var charCount = document.getElementById('char-count');
        if (msgInput && charCount) {
          msgInput.addEventListener('input', function () {
            charCount.textContent = msgInput.value.length + ' / 5000';
          });
        }

        enquiryForm.addEventListener('submit', async function (e) {
          e.preventDefault();
          var statusEl = document.getElementById('form-status');
          var submitBtn = enquiryForm.querySelector('button[type="submit"]');
          var fd = new FormData(enquiryForm);
          var payload = {
            fullName: fd.get('fullName'),
            email: fd.get('email'),
            bookTitle: fd.get('bookTitle'),
            genre: fd.get('genre'),
            service: fd.get('service'),
            projectStage: fd.get('projectStage'),
            timeline: fd.get('timeline'),
            message: fd.get('message'),
            consent: fd.get('consent') === 'on',
            website: fd.get('website'),
          };

          submitBtn.disabled = true;
          statusEl.className = 'form-status';
          statusEl.textContent = 'Submitting your enquiry...';

          try {
            var resp = await fetch('/api/enquiry', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(payload),
            });
            var data = await resp.json();
            if (!resp.ok) throw new Error(data.error || 'Submission failed.');
            enquiryForm.reset();
            if (charCount) charCount.textContent = '0 / 5000';
            statusEl.className = 'form-status success';
            statusEl.textContent =
              'Thank you. Your enquiry has been received. Our team will follow up using your email address.';
          } catch (err) {
            statusEl.className = 'form-status error';
            statusEl.textContent =
              err.message || 'Please try again or email hello@bookrisecentre.com.';
          } finally {
            submitBtn.disabled = false;
          }
        });
      }
    })();
  </script>
</body>
</html>`;
}

export default {
  async fetch(request, env) {
    const u = new URL(request.url);

    if (u.pathname === '/api/enquiry') {
      const json = (v, s) =>
        new Response(JSON.stringify(v), {
          status: s,
          headers: { 'content-type': 'application/json', 'cache-control': 'no-store' },
        });

      if (request.method !== 'POST') return json({ error: 'Method not allowed' }, 405);

      const origin = request.headers.get('Origin');
      if (origin && new URL(origin).host !== u.host) {
        return json({ error: 'Origin not allowed' }, 403);
      }

      if (!env.DB) {
        return json(
          { error: 'Enquiry service temporarily unavailable. Please email hello@bookrisecentre.com.' },
          503
        );
      }

      let d;
      try {
        d = await request.json();
      } catch {
        return json({ error: 'Invalid form submission.' }, 400);
      }

      const v = (x, n) => (typeof x === 'string' ? x.trim().slice(0, n) : '');
      const name = v(d.fullName, 120);
      const email = v(d.email, 180);
      const title = v(d.bookTitle, 180);
      const genre = v(d.genre, 120);
      const service = v(d.service, 120);
      const stage = v(d.projectStage, 100);
      const timeline = v(d.timeline, 100);
      const message = v(d.message, 5000);

      if (d.website) return json({ ok: true }, 200);

      if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !service || message.length < 10 || d.consent !== true) {
        return json({ error: 'Please complete required fields and provide a valid email address.' }, 400);
      }

      const ip = request.headers.get('CF-Connecting-IP') || 'unknown';
      const hash = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(ip));
      const ipHash = Array.from(new Uint8Array(hash))
        .map((x) => x.toString(16).padStart(2, '0'))
        .join('');

      const recent = await env.DB.prepare(
        "SELECT COUNT(*) AS total FROM enquiries WHERE source_ip_hash=? AND created_at>=datetime('now','-1 hour')"
      )
        .bind(ipHash)
        .first();

      if (((recent && recent.total) || 0) >= 5) {
        return json({ error: 'Please wait before submitting another enquiry.' }, 429);
      }

      await env.DB.prepare(
        'INSERT INTO enquiries (created_at,full_name,email,book_title,genre,service,project_stage,timeline,message,consent,source_ip_hash) VALUES (?,?,?,?,?,?,?,?,?,?,?)'
      )
        .bind(new Date().toISOString(), name, email, title, genre, service, stage, timeline, message, 1, ipHash)
        .run();

      return json({ ok: true }, 201);
    }

    if (u.pathname === '/healthz') {
      return new Response('BOOKRISE_CENTRE_RELEASE_16_OK', {
        headers: { 'content-type': 'text/plain; charset=utf-8', 'cache-control': 'no-store' },
      });
    }

    if (request.method !== 'GET' && request.method !== 'HEAD') {
      return new Response('Method Not Allowed', { status: 405, headers: { allow: 'GET, HEAD' } });
    }

    const path = u.pathname === '/' ? '/' : u.pathname.replace(/\/+$/, '');
    const page = PAGES[path];
    const body = page
      ? page[2]
      : `<main class="page-main">
          <section class="page-intro">
            <div class="wrap">
              <div class="eyebrow">404</div>
              <h1>We could not find that page.</h1>
              <p>The address may be incorrect or the page may have moved. Use the navigation to continue exploring BookRise Centre.</p>
            </div>
          </section>
          <section class="section">
            <div class="wrap"><a class="btn btn-navy" href="/">Return to Home</a></div>
          </section>
        </main>`;

    const html = renderShell(
      path,
      page ? page[0] : 'Page Not Found',
      page ? page[1] : 'The requested BookRise Centre page could not be found.',
      body
    );

    return new Response(request.method === 'HEAD' ? null : html, {
      status: page ? 200 : 404,
      headers: {
        'content-type': 'text/html; charset=utf-8',
        'cache-control': 'public, max-age=60',
        'x-content-type-options': 'nosniff',
        'referrer-policy': 'strict-origin-when-cross-origin',
        'permissions-policy': 'camera=(), microphone=(), geolocation=()',
      },
    });
  },
};

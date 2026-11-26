const ASSETS = {
  monogram: '/public/assets/aistudio/A880DB7F-19B0-4625-8744-040D94A8435B_e207c5d0.png',
  crest: '/public/assets/aistudio/92B26B15-F4AB-4BBD-B068-79601753C31D_bdc8dd35.png',
  heroAtelier: '/src/assets/images/hero_publishing_atelier_1795615010303.jpg',
  books: {
    executive: '/public/assets/bookrise-executive-edge-v2.svg',
    whispers: '/public/assets/bookrise-whispers-wind-v2.svg',
    purpose: '/public/assets/bookrise-lead-purpose-v2.svg',
  },
  team: {
    gracious: '/public/assets/aistudio/IMG_0010_55a5f7f9.jpeg',
    rapheal: '/public/assets/aistudio/IMG_0011_4a7c0b55.jpeg',
    katherine: '/public/assets/aistudio/IMG_0012_7f92ff9b.jpeg',
    benjamin: '/public/assets/aistudio/IMG_0013_d58db1da.jpeg',
    stephen: '/public/assets/aistudio/eebfae47-e2de-44d8-ad66-751de0aa9c64_decfff18.jpeg',
    moses: '/public/assets/aistudio/bce90cec-7a51-4abb-9d4d-d7f45bba9217_d8ada729.jpeg',
  },
  adrian: {
    vol1AuthorFeature: '/public/assets/aistudio/image_f5d7a1f7.jpeg',
    vol2OceanPoster: '/public/assets/aistudio/image_5ac19ddd.jpeg',
    vol2LandscapePromo: '/public/assets/aistudio/image_b738bcb7.jpeg',
    vol2Availability: '/public/assets/aistudio/image_1534ac7e.jpeg',
    vol2CalloutDiagram: '/public/assets/aistudio/image_bac8f1ef.jpeg',
    vol2CoverWrap: '/public/assets/aistudio/image_6282f2dd.jpeg',
    vol1VisionBanner: '/public/assets/aistudio/image_9344ecf6.jpeg',
    vol1CoverWrap: '/public/assets/aistudio/image_40c593dc.jpeg',
    meetAuthorArched: '/public/assets/aistudio/image_952aa696.jpeg',
    duologySideBySide: '/public/assets/aistudio/image_ae2218a8.jpeg',
    duologyMinimalist: '/public/assets/aistudio/image_48d8c6bc.jpeg',
    duologyInvitation: '/public/assets/aistudio/image_af8dfaa4.jpeg',
    meetAuthorTransformation: '/public/assets/aistudio/image_2228d4b4.jpeg',
    vol2DeskLifestyle: '/public/assets/aistudio/image_1f772201.jpeg',
  },
};

const ADRIAN_DELIVERABLES = [
  {
    id: 'adrian-vol1-wrap',
    category: 'covers',
    categoryLabel: 'Cover Spreads & Editions',
    title: 'Personal Sovereignty — Full Print Wrap & Standing Edition',
    volume: 'Volume I · Front, Spine & Back Cover',
    description: 'Complete hardcover and paperback wrap featuring full-bleed planetary artwork, spine alignment, barcode/ISBN integration, and back-cover editorial copy.',
    image: ASSETS.adrian.vol1CoverWrap,
  },
  {
    id: 'adrian-vol2-wrap',
    category: 'covers',
    categoryLabel: 'Cover Spreads & Editions',
    title: 'Tao Tuning: The Art of Flow — Full Print Wrap',
    volume: 'Volume II · Front, Spine & Back Cover',
    description: 'Coordinated sequel wrap layout pairing bold crimson cover typography with wave illustration, spine branding, and structured bulleted back-cover copy.',
    image: ASSETS.adrian.vol2CoverWrap,
  },
  {
    id: 'adrian-duology-minimal',
    category: 'covers',
    categoryLabel: 'Cover Spreads & Editions',
    title: 'The Temple of Understanding — Duology Edition Card',
    volume: 'Volumes I & II · Series Presentation',
    description: 'Clean editorial presentation uniting both covers under a cohesive series masthead for retail, press kits, and author landing pages.',
    image: ASSETS.adrian.duologyMinimalist,
  },
  {
    id: 'adrian-vol1-feature',
    category: 'spotlights',
    categoryLabel: 'Author & Duology Spotlights',
    title: 'Personal Sovereignty — Author Feature Banner',
    volume: 'Volume I · Author Portrait & Benefit Triad',
    description: 'Flagship promotional banner pairing Adrian Emery’s portrait with Volume I’s core reader takeaways and signature block.',
    image: ASSETS.adrian.vol1AuthorFeature,
  },
  {
    id: 'adrian-meet-arched',
    category: 'spotlights',
    categoryLabel: 'Author & Duology Spotlights',
    title: 'Meet Adrian Emery — Author Spotlight Card',
    volume: 'Series · Arched Editorial Portrait',
    description: 'Vertical social and reader-outreach spotlight introducing Adrian Emery as author of The Temple of Understanding duology.',
    image: ASSETS.adrian.meetAuthorArched,
  },
  {
    id: 'adrian-vol2-ocean',
    category: 'posters',
    categoryLabel: 'Promotional Posters',
    title: 'Tao Tuning — Cliffside Reader Benefit Poster',
    volume: 'Volume II · Campaign Creative',
    description: 'Coastal atmospheric promotional card pairing Volume II with four structured reader outcome pillars.',
    image: ASSETS.adrian.vol2OceanPoster,
  },
  {
    id: 'adrian-vol2-availability',
    category: 'posters',
    categoryLabel: 'Promotional Posters',
    title: 'Tao Tuning — Multi-Format Storefront Availability Graphic',
    volume: 'Volume II · Kindle, eBook & Print',
    description: 'Retail-ready promotional sheet highlighting Kindle, eBook, and Print availability alongside thematic icons.',
    image: ASSETS.adrian.vol2Availability,
  },
  {
    id: 'adrian-vol2-desk',
    category: 'posters',
    categoryLabel: 'Promotional Posters',
    title: 'Tao Tuning — Editorial Desk Lifestyle Promo',
    volume: 'Volume II · Warm Studio Scene',
    description: 'Warm desk lifestyle creative staging Volume II beside manuscript notebook and fountain pen for reader engagement.',
    image: ASSETS.adrian.vol2DeskLifestyle,
  },
];

const SERVICES = [
  {
    id: 'publishing-support',
    category: 'editorial',
    categoryLabel: 'Editorial & Publishing',
    title: 'Publishing Support',
    bestFor: 'Authors preparing a completed manuscript for independent or hybrid release who want clear technical and strategic guidance.',
    turnaround: '2 to 4 weeks depending on platform scope',
    summary:
      'End-to-end publishing guidance, file preparation, ISBN and imprint planning, and distribution setup for authors bringing a book to market without surrendering their rights.',
    workflow: [
      'Audit manuscript files, front/back matter completeness, and copyright/imprint readiness.',
      'Compare distribution options (Amazon KDP, IngramSpark, wide ebook aggregators) against your territorial and format goals.',
      'Prepare print-ready interior PDFs and validated EPUB packages with clean chapter navigation and typography.',
      'Guide storefront setup, pricing calculations, proof copy checks, and release timing.',
    ],
    deliverables: [
      'Comprehensive publishing-readiness assessment and action roadmap',
      'Print-ready interior typesetting and validated EPUB file guidance',
      'ISBN, imprint, copyright page, and front/back matter structuring',
      'Platform and global distribution comparison tailored to your title',
      'Pre-launch technical checklist and post-upload verification notes',
    ],
  },
  {
    id: 'editing-writing',
    category: 'editorial',
    categoryLabel: 'Editorial & Publishing',
    title: 'Editing & Writing',
    bestFor: 'Writers seeking structural clarity, stronger narrative flow, line-level polish, or collaborative manuscript development.',
    turnaround: '2 to 6 weeks based on word count and editorial depth',
    summary:
      'Careful editorial and writing support—from big-picture developmental feedback to meticulous copy editing and final proofreading—while safeguarding the author’s distinctive voice.',
    workflow: [
      'Complete an initial sample read to calibrate editorial depth, tone preservation, and revision scope.',
      'Deliver chapter-by-chapter structural or developmental notes addressing pacing, clarity, and argument arc.',
      'Execute sentence-level copy editing using Track Changes for grammar, cadence, consistency, and style.',
      'Perform a dedicated final proofread on formatted proofs before publication.',
    ],
    deliverables: [
      'Editorial assessment memo with structural and chapter recommendations',
      'Tracked-changes copy-edited manuscript with marginal explanations',
      'Project style sheet recording spelling, hyphenation, and terminology choices',
      'Final proofread pass catching typographical, spacing, and punctuation errors',
      'Collaborative writing or rewriting support strictly to an agreed brief',
    ],
  },
  {
    id: 'cover-design',
    category: 'design',
    categoryLabel: 'Design & Media',
    title: 'Cover Design',
    bestFor: 'Authors launching a debut title, unifying a multi-book series, or refreshing an existing cover to match genre expectations.',
    turnaround: '2 to 3 weeks including concept and print wrap rounds',
    summary:
      'Genre-aware cover architecture and production-ready artwork engineered to read clearly at thumbnail scale while holding physical authority in hardcover and paperback print.',
    workflow: [
      'Research category benchmarks, visual tone, typography hierarchies, and series continuity.',
      'Present distinct front-cover concepts for author review and focused creative feedback.',
      'Refine typography, color balance, imagery, and thumbnail legibility across agreed revision rounds.',
      'Build exact spine-width print wraps (hardcover, paperback, dust jacket) and high-resolution digital covers.',
    ],
    deliverables: [
      'Creative direction and category visual positioning brief',
      'Custom front-cover concepts with hierarchy and typography study',
      'Full print wrap (front, calibrated spine, back cover blurb, ISBN/barcode space)',
      'Platform-compliant KDP, IngramSpark, and ebook cover specifications',
      'Final layered/print-ready PDF and high-resolution RGB JPEG/PNG exports',
    ],
  },
  {
    id: 'book-promotion',
    category: 'promotion',
    categoryLabel: 'Promotion & Outreach',
    title: 'Book Promotion',
    bestFor: 'Newly releasing or backlist authors needing structured launch campaigns, promotional graphics, and coordinated reader messaging.',
    turnaround: '4 to 8 week campaign cycles',
    summary:
      'Structured campaign planning and bespoke promotional assets designed to introduce your book credibly to target readers across digital channels.',
    workflow: [
      'Define campaign objectives, core reader personas, and key message angles from the manuscript.',
      'Design cohesive promotional graphics, author spotlight cards, and launch-week visual collateral.',
      'Map a realistic multi-week content and outreach calendar aligned to your release date.',
      'Coordinate scheduled activity, monitor engagement signals, and deliver a transparent post-campaign summary.',
    ],
    deliverables: [
      'Written campaign strategy with audience positioning and messaging pillars',
      'Custom promotional graphics suite (social cards, quotes, availability banners)',
      'Structured release calendar with weekly milestones and copy prompts',
      'Launch coordination and regular milestone progress reporting',
      'Post-campaign activity review and next-stage recommendations',
    ],
  },
  {
    id: 'video-promotion',
    category: 'design',
    categoryLabel: 'Design & Media',
    title: 'Video Promotion & Book Trailers',
    bestFor: 'Authors wanting atmospheric book trailers, launch teasers, or short-form vertical reels for social platforms and author pages.',
    turnaround: '2 to 3 weeks per trailer suite',
    summary:
      'Narrative book trailers and short-form promotional videos combining evocative pacing, clear typography, licensed visuals, and voice/caption storytelling.',
    workflow: [
      'Extract core emotional hooks or strategic takeaways into a concise 30-to-60 second script and beat sheet.',
      'Assemble visual storyboard frames matching the book cover palette and genre atmosphere.',
      'Produce motion typography, book 3D/studio reveals, paced soundbed, and readable burned-in captions.',
      'Export master cuts in widescreen (16:9), square (1:1), and vertical reel (9:16) ratios.',
    ],
    deliverables: [
      'Trailer concept brief, hook script, and scene-by-scene storyboard',
      'Primary 45–60 second launch book trailer in 1080p MP4',
      'Short-form 15–30 second social reels formatted for Instagram, TikTok, and YouTube Shorts',
      'Accessible captions, music licensing, and cover end-card call-to-action',
      'Platform-ready exports with thumbnail still frames',
    ],
  },
  {
    id: 'visibility-discoverability',
    category: 'promotion',
    categoryLabel: 'Promotion & Outreach',
    title: 'Visibility & Discoverability',
    bestFor: 'Authors whose books are live or nearing upload and need stronger storefront copy, category placement, and search relevance.',
    turnaround: '1 to 2 weeks',
    summary:
      'Detailed storefront positioning, book description copywriting, BISAC/retail category refinement, and metadata alignment so readers and search systems accurately understand your book.',
    workflow: [
      'Audit existing or planned retailer listings, subtitle clarity, author bio, and category competitiveness.',
      'Conduct reader-intent keyword and thematic category research tailored to your book’s exact audience.',
      'Rewrite the storefront book description with strong hook copy, scannable formatting, and clear reader promise.',
      'Align author profiles, series metadata, and retail attributes across platforms for consistency.',
    ],
    deliverables: [
      'Storefront listing audit with prioritized improvement notes',
      'Rewritten conversion-focused book description (HTML-ready for Amazon/retailers)',
      'Targeted category and reader-search keyword matrix',
      'Author bio refinement and series metadata consistency check',
      'Step-by-step implementation guide for updating live retailer dashboards',
    ],
  },
  {
    id: 'reader-outreach',
    category: 'promotion',
    categoryLabel: 'Promotion & Outreach',
    title: 'Reader Outreach',
    bestFor: 'Authors seeking genuine outreach to genre book clubs, independent reviewers, podcast hosts, and niche newsletters.',
    turnaround: '3 to 6 week outreach cycles',
    summary:
      'Thoughtful, human-written outreach to relevant reader communities, podcasts, and editorial platforms—respecting every publication’s submission rules and independent editorial judgment.',
    workflow: [
      'Research aligned podcasts, book bloggers, literary newsletters, and genre communities matching your readership.',
      'Draft individualized pitch letters, review-copy invitations, and concise author press notes.',
      'Coordinate outreach batches, track responses, and manage review-copy fulfillment requests.',
      'Provide a clean activity log detailing every prospect contacted, response received, and follow-up status.',
    ],
    deliverables: [
      'Curated prospect list of aligned reviewers, podcasts, and reader communities',
      'Personalized pitch templates and one-page digital media/press sheet',
      'Coordinated outreach execution and response tracking',
      'Review-copy coordination notes (ARC / digital / print)',
      'Transparent outreach activity and response report',
    ],
  },
];

const TEAM = [
  {
    id: 'gracious',
    initials: 'GJ',
    name: 'Gracious J. Literary',
    role: 'Team Leader & Senior Publishing and Literary Specialist',
    email: 'gracious@bookrisecentre.com',
    photo: ASSETS.team.gracious,
    framedScreenshot: true,
    focus: '50% 3%',
    scale: '1.34',
    bio: 'Leads overall literary direction and team coordination at BookRise Centre, ensuring every author project is structured around sound editorial judgment, clear written agreements, and realistic publishing goals.',
    officeSummary:
      'In the office, Gracious oversees initial manuscript evaluations, chairs weekly project-alignment reviews across all six specialists, and personally guides authors through complex publishing decisions—from structural editorial roadmaps to imprint and distribution strategy.',
    workflow: [
      'Reviews incoming project briefs and evaluates manuscript readiness before formal scoping begins.',
      'Leads literary direction and assigns editorial, design, and promotion milestones across the specialist team.',
      'Audits final deliverables prior to handover to verify editorial fidelity and adherence to the written agreement.',
      'Serves as senior advisor on author rights, creative independence, and multi-book series planning.',
    ],
    collaboration: 'Coordinates directly with Stephen O. Quill on editorial scheduling and with Moses O. Lane on launch-level strategic positioning.',
  },
  {
    id: 'rapheal',
    initials: 'RA',
    name: 'Rapheal Adebayo',
    role: 'Publishing & Book Promotion Specialist',
    email: 'rapheal@bookrisecentre.com',
    photo: ASSETS.team.rapheal,
    framedScreenshot: true,
    focus: '50% 3%',
    scale: '1.28',
    bio: 'Combines hands-on publishing preparation with practical campaign execution, helping authors bridge the gap between finishing a manuscript and presenting it persuasively to the marketplace.',
    officeSummary:
      'Day-to-day at BookRise Centre, Rapheal translates a book’s core themes into clear promotional messaging, builds campaign rollouts, and manages visual and written promotion assets—ensuring the book’s positioning stays consistent across cover design, listings, and outreach.',
    workflow: [
      'Audits manuscript positioning and identifies the strongest hooks for target reader segments.',
      'Coordinates promotional asset production—including launch banners, author spotlights, and trailer briefs.',
      'Manages multi-week promotional schedules and keeps authors informed at each campaign checkpoint.',
      'Compiles post-campaign performance notes and clear next-step recommendations after launch.',
    ],
    collaboration: 'Partners closely with Katherine S. Ashmore on campaign execution and with Benjamin Stewart on promotional collateral.',
  },
  {
    id: 'katherine',
    initials: 'KA',
    name: 'Katherine S. Ashmore',
    role: 'Book Marketing Specialist & Reader Promoter',
    email: 'katherine@bookrisecentre.com',
    photo: ASSETS.team.katherine,
    framedScreenshot: true,
    focus: '50% 3%',
    scale: '1.28',
    bio: 'Focuses on audience discovery, reader-community engagement, and personalized outreach that introduces books to the specific readers, podcasts, and reviewers most likely to appreciate them.',
    officeSummary:
      'In the office, Katherine conducts deep genre-audience research, crafts individualized pitch letters for literary podcasts, book clubs, and independent reviewers, and manages reader-outreach calendars with strict respect for editorial independence.',
    workflow: [
      'Maps genre-specific reader communities, newsletters, book clubs, and podcast rosters.',
      'Writes tailored pitch copy and press notes highlighting each book’s distinctive reader value.',
      'Tracks outreach correspondence, review-copy dispatches, and interview or feature confirmations.',
      'Maintains transparent reporting logs so authors see every outreach touchpoint completed.',
    ],
    collaboration: 'Works alongside Rapheal Adebayo on launch-month audience momentum and Moses O. Lane on discoverability alignment.',
  },
  {
    id: 'benjamin',
    initials: 'BS',
    name: 'Benjamin Stewart',
    role: 'Publishing & Book Promotion Specialist',
    email: 'benjamin@bookrisecentre.com',
    photo: ASSETS.team.benjamin,
    framedScreenshot: true,
    focus: '50% 3%',
    scale: '1.28',
    bio: 'Supports both pre-publication readiness and coordinated book promotion, helping authors navigate platform workflows, storefront asset preparation, and campaign follow-through.',
    officeSummary:
      'At his desk, Benjamin handles cross-channel promotional coordination, validates retail storefront assets, supports video trailer production briefs, and ensures campaign deliverables move smoothly from concept approval to publication day.',
    workflow: [
      'Prepares platform-ready promotional kits, storefront visuals, and retail presentation assets.',
      'Coordinates trailer storyboarding, captioning checks, and multi-ratio social video exports.',
      'Reviews campaign checklists ahead of scheduled release milestones to prevent launch bottlenecks.',
      'Supports client communication and revision coordination during active promotional cycles.',
    ],
    collaboration: 'Works hand-in-hand with Rapheal Adebayo on promotional production and Stephen O. Quill on technical delivery deadlines.',
  },
  {
    id: 'stephen',
    initials: 'SQ',
    name: 'Stephen O. Quill',
    role: 'Editorial & Publishing Operations Specialist',
    email: 'stephen@bookrisecentre.com',
    photo: ASSETS.team.stephen,
    framedScreenshot: false,
    focus: '50% 18%',
    scale: '1',
    bio: 'Oversees editorial workflows, manuscript preparation, formatting standards, and production operations so every book transitions cleanly from raw draft to publication-grade files.',
    officeSummary:
      'In the office, Stephen manages manuscript intake, coordinates developmental and copy-editing passes, enforces style-sheet consistency, and oversees print interior typesetting, EPUB validation, and ISBN/imprint technical checks.',
    workflow: [
      'Performs structural and technical intake checks on newly submitted manuscripts and front/back matter.',
      'Maintains project style sheets and tracks editorial revisions across developmental, copy, and proof passes.',
      'Supervises print layout specifications (margins, bleed, spine math) and digital EPUB validation.',
      'Manages milestone timelines and final production file handovers to the author.',
    ],
    collaboration: 'Coordinates directly with Gracious J. Literary on editorial quality and with Benjamin Stewart on print/digital release readiness.',
  },
  {
    id: 'moses',
    initials: 'ML',
    name: 'Moses O. Lane',
    role: 'Book Visibility & Author Strategy Specialist',
    email: 'moses@bookrisecentre.com',
    photo: ASSETS.team.moses,
    framedScreenshot: false,
    focus: '50% 16%',
    scale: '1',
    bio: 'Specializes in book discoverability, storefront listing architecture, keyword and category research, and long-term author positioning across major retail ecosystems.',
    officeSummary:
      'In the office, Moses analyzes storefront category dynamics, writes high-clarity book descriptions, structures BISAC and retail keyword metadata, and advises authors on building cohesive multi-book visibility across Amazon, Ingram, and direct channels.',
    workflow: [
      'Audits book titles, subtitles, descriptions, and category placements against live marketplace patterns.',
      'Researches reader-intent search terms and builds balanced primary/secondary category recommendations.',
      'Rewrites storefront blurbs and author bios for immediate clarity, credibility, and reader conversion.',
      'Designs long-tail visibility plans connecting debut releases with follow-up volumes and backlist titles.',
    ],
    collaboration: 'Partners with Katherine S. Ashmore on audience targeting and with Gracious J. Literary on overarching author strategy.',
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
    deliverables: [
      'Full developmental and structural manuscript edit across 12 chapters',
      'Custom navy linen and brushed gold-foil hardcover design',
      'Storefront positioning, executive synopsis, and category placement',
    ],
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
    deliverables: [
      'Sensitive line editing and narrative pacing review',
      'Tactile ivory cotton dust jacket with embossed botanical motif',
      'Memoir category taxonomy and targeted reader-community outreach',
    ],
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
    deliverables: [
      'Slate cloth hardcover and brass spine typography',
      'Keyword, BISAC category, and retail listing optimization',
      'Coordinated launch-window campaign plan and progress reporting',
    ],
    image: ASSETS.books.purpose,
    quote:
      'They do not just design a cover; they position the whole book. The promotional strategy and metadata optimization they did for Lead with Purpose made my launch much smoother.',
  },
];

const FAQS = [
  ['What services does BookRise Centre provide?', 'We provide seven connected author services: publishing support, editing and writing, cover design, book promotion, video promotion and book trailers, visibility and discoverability optimization, and reader outreach. Services can be commissioned individually or combined under a coordinated written plan.'],
  ['Can I request just one service?', 'Yes. Authors frequently engage us for a single focused discipline—such as cover design, copy editing, or storefront metadata optimization—without being pushed into a bundled package.'],
  ['How much do your services cost?', 'We prepare project-based quotations rather than flat one-size-fits-all pricing. Fees depend on manuscript word count, file condition, editorial depth, design deliverables, turnaround timeline, and any approved external costs. You receive a full written quotation before making any commitment.'],
  ['Do you offer fixed packages?', 'Defined multi-service scopes can be structured when a book genuinely needs several stages (for example, editing plus cover design plus launch visibility), and every inclusion and exclusion is stated clearly in writing.'],
  ['Does BookRise Centre take ownership of my book?', 'No. Authors retain 100% of their copyright and intellectual property. Our written agreements confirm that any limited access granted to BookRise Centre is solely for executing the agreed project deliverables.'],
  ['Do you take royalties from book sales?', 'No. BookRise Centre operates strictly as a fee-for-service partner. You keep 100% of your royalties and distribution account control.'],
  ['Do you guarantee book sales, reviews, rankings, or media coverage?', 'No. No ethical publishing-services provider can guarantee commercial sales, bestseller rankings, or independent editorial reviews. We guarantee disciplined, professional execution of every agreed deliverable and transparent reporting on all work carried out.'],
  ['How do you begin a project?', 'Start with an enquiry sharing your book stage, genre, word count if known, and goals. We review your project, discuss recommended options, and send a written scope, timeline, and quotation for review.'],
  ['When does work begin?', 'Work begins only after you have reviewed and approved the written agreement and submitted any agreed initial stage payment.'],
  ['Can you work with a book that is already published?', 'Yes. We regularly help published authors refresh book covers, rewrite storefront descriptions, refine categories and keywords, produce promotional trailers, and launch reader outreach campaigns.'],
  ['Will I receive updates during the project?', 'Yes. Every project includes clear communication checkpoints, revision windows, and milestone updates managed by your assigned specialist team.'],
  ['Who owns the final design and manuscript files?', 'Upon completion and final payment, the final agreed export files (print-ready wraps, ebook covers, edited manuscripts, promotional graphics, and trailers) are handed over directly to you.'],
  ['How do you handle confidential manuscripts?', 'Please do not upload complete manuscripts in the initial public contact form. Once we establish contact and agree terms, secure submission channels and confidentiality arrangements are confirmed directly.'],
  ['What information should I include in my enquiry?', 'Share your name, email, working title, genre, approximate word count, publishing stage, the services you are exploring, and your preferred timeline or consultation window.'],
];

const CHECKLIST_GROUPS = [
  {
    title: '01. Structural & Editorial Readiness',
    items: [
      { id: 'chk-struct', label: 'Manuscript structure, chapter sequence, and narrative arc reviewed' },
      { id: 'chk-copy', label: 'Copy edit completed for clarity, voice consistency, and grammar' },
      { id: 'chk-proof', label: 'Final proofread completed on formatted pages prior to release' },
    ],
  },
  {
    title: '02. Design & Production Files',
    items: [
      { id: 'chk-cover', label: 'Front cover evaluated at both full scale and mobile thumbnail size' },
      { id: 'chk-wrap', label: 'Spine width and back-cover wrap calibrated to final page count' },
      { id: 'chk-interior', label: 'Interior print PDF (margins, bleed) and validated EPUB prepared' },
    ],
  },
  {
    title: '03. Rights, ISBN & Metadata',
    items: [
      { id: 'chk-isbn', label: 'ISBN ownership, imprint name, and copyright page details confirmed' },
      { id: 'chk-blurb', label: 'Storefront book description written with clear hook and reader promise' },
      { id: 'chk-cats', label: 'Primary retail categories and reader-intent keywords selected' },
    ],
  },
  {
    title: '04. Promotion & Reader Outreach',
    items: [
      { id: 'chk-assets', label: 'Author spotlight graphics, quote cards, or launch trailer prepared' },
      { id: 'chk-bio', label: 'Author bio and press/contact links aligned across platforms' },
      { id: 'chk-outreach', label: 'Target podcasts, reviewers, or reader communities shortlisted' },
    ],
  },
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

*, *::before, *::after { box-sizing: border-box; }

html {
  font-size: var(--base-size);
  scroll-behavior: smooth;
  scrollbar-width: thin;
  scrollbar-color: var(--gold) var(--surface-alt);
}

html[data-motion="reduced"] { scroll-behavior: auto; }

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

html[data-theme="dark"] body { letter-spacing: 0.01em; }
img { max-width: 100%; display: block; }
a { color: inherit; text-decoration: none; }
button, input, select, textarea { font-family: inherit; }
:focus-visible { outline: 2px solid var(--gold); outline-offset: 3px; }

.wrap { width: min(var(--container), calc(100% - 48px)); margin: 0 auto; }
.tabular { font-variant-numeric: tabular-nums; }

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

/* Top Bar Contract: strictly 3 zones */
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

.brand-mark img { width: 100%; height: 100%; object-fit: contain; }

.brand-wordmark {
  font-family: var(--serif);
  font-size: 1.05rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  color: var(--ink-strong);
  white-space: nowrap;
}

.primary-nav { display: flex; align-items: center; gap: 28px; }

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

.primary-nav a:hover, .primary-nav a.is-active { color: var(--ink-strong); }
.primary-nav a:hover::after, .primary-nav a.is-active::after { transform: scaleX(1); }

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
  transition: transform 160ms var(--ease), background-color 160ms var(--ease);
}

html[data-theme="dark"] .header-cta {
  background: var(--gold);
  color: #091322;
  border-color: var(--gold);
}

.header-cta:hover { transform: translateY(-1px); background: var(--navy-soft); }
html[data-theme="dark"] .header-cta:hover { background: var(--gold-bright); }

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

.mobile-drawer.is-open { display: block; opacity: 1; transform: translateY(0); }
.mobile-drawer-links { display: grid; gap: 4px; }
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
.mobile-drawer-links a.is-active { color: var(--gold); }
.mobile-drawer-actions { display: grid; gap: 10px; margin-top: 16px; }

.page-main { animation: pageEnter 240ms var(--ease) both; }
@keyframes pageEnter {
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
}

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
.btn:hover { transform: translateY(-1px); }
.btn-primary { background: var(--gold-bright); color: #0b1524; border-color: var(--gold-bright); }
.btn-primary:hover { background: #e2c27e; border-color: #e2c27e; }
.btn-navy { background: var(--navy); color: #ffffff; border-color: var(--navy); }
html[data-theme="dark"] .btn-navy { background: var(--gold); color: #091322; border-color: var(--gold); }
.btn-ghost { background: transparent; color: #ffffff; border-color: rgba(255, 255, 255, 0.35); }
.btn-ghost:hover { background: rgba(255, 255, 255, 0.08); border-color: rgba(255, 255, 255, 0.7); }
.btn-outline { background: transparent; color: var(--ink-strong); border-color: var(--line-strong); }
.btn-outline:hover { border-color: var(--gold); color: var(--gold); }

.eyebrow {
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--gold);
}

.section { padding: 80px 0; }
.section-surface {
  background: var(--surface);
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
}

.section-header { max-width: 740px; margin-bottom: 40px; }
.section-header-split {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 24px;
  margin-bottom: 40px;
  flex-wrap: wrap;
}
.section-header-split > div { max-width: 700px; }

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

.lead { font-size: 1.0625rem; line-height: 1.7; color: var(--muted); margin: 0; max-width: 68ch; }

.text-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--gold);
  transition: transform 160ms var(--ease);
}
.text-link:hover { transform: translateX(3px); }

/* Hero */
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

.hero-copy { display: flex; flex-direction: column; justify-content: center; padding: 10px 0; }
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
.hero-lead { font-size: 1.0625rem; line-height: 1.7; color: #d4deec; max-width: 60ch; margin: 0; }
.hero-actions { display: flex; align-items: center; gap: 14px; flex-wrap: wrap; margin-top: 28px; }
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
.hero-media:hover img { transform: scale(1.025); }
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

.metrics-band {
  margin-top: 44px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.03);
}
.metric-cell { padding: 20px 22px; border-right: 1px solid rgba(255, 255, 255, 0.12); }
.metric-cell:last-child { border-right: 0; }
.metric-cell strong { display: block; font-family: var(--serif); font-size: 1.5rem; font-weight: 600; color: var(--gold-bright); line-height: 1.2; }
.metric-cell span { display: block; margin-top: 4px; font-size: 0.8125rem; color: #cbd6e6; }

/* Page Intro */
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
  max-width: 860px;
  text-wrap: balance;
}
.page-intro p { font-size: 1.0625rem; color: #d4deec; max-width: 68ch; margin: 0; }

/* Bento & Cards */
.bento-grid { display: grid; grid-template-columns: repeat(6, 1fr); gap: 20px; }
.bento-span-3 { grid-column: span 3; }
.bento-span-2 { grid-column: span 2; }

.card {
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 8px;
  padding: 28px;
  display: flex;
  flex-direction: column;
  transition: transform 200ms var(--ease), border-color 200ms var(--ease);
}
.card:hover { transform: translateY(-2px); border-color: var(--gold); }
.card-index { font-size: 0.75rem; font-weight: 600; color: var(--gold); margin-bottom: 10px; }
.card h3 { font-family: var(--serif); font-size: 1.35rem; font-weight: 600; color: var(--ink-strong); margin: 0 0 10px; line-height: 1.25; }
.card p { font-size: 0.9375rem; color: var(--muted); margin: 0; }
.card-footer-link { margin-top: auto; padding-top: 18px; }
.card ul { margin: 12px 0 0; padding-left: 18px; color: var(--muted); font-size: 0.875rem; }
.card li { margin: 6px 0; }
.card-subhead { font-size: 0.8125rem; font-weight: 700; color: var(--ink-strong); margin: 18px 0 6px; }

.grid-2 { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; }
.grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
.split-editorial { display: grid; grid-template-columns: 1.05fr 0.95fr; gap: 48px; align-items: center; }

.editorial-callout {
  background: var(--surface-alt);
  border: 1px solid var(--line);
  border-radius: 8px;
  padding: 26px 28px;
}
.editorial-callout blockquote { margin: 0; font-family: var(--serif); font-size: 1.25rem; line-height: 1.55; color: var(--ink-strong); }
.editorial-callout figcaption { margin-top: 14px; font-size: 0.8125rem; color: var(--muted); }

.crest-panel {
  background: #ffffff;
  border: 1px solid var(--line);
  border-radius: 10px;
  padding: 28px;
  display: grid;
  place-items: center;
}
.crest-panel img { width: min(100%, 290px); height: auto; object-fit: contain; }

/* Adrian Emery Portfolio Gallery */
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.gallery-card {
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 200ms var(--ease), border-color 200ms var(--ease);
}

.gallery-card:hover {
  transform: translateY(-2px);
  border-color: var(--gold);
}

.gallery-mat {
  height: 310px;
  padding: 14px;
  background: var(--surface-alt);
  border-bottom: 1px solid var(--line);
  display: grid;
  place-items: center;
  cursor: pointer;
}

.gallery-mat img {
  max-width: 100%;
  max-height: 282px;
  width: auto;
  height: auto;
  object-fit: contain;
  border-radius: 4px;
  transition: transform 280ms var(--ease);
}

.gallery-card:hover .gallery-mat img {
  transform: scale(1.025);
}

.gallery-body {
  padding: 20px;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.gallery-meta {
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--gold);
  margin-bottom: 6px;
}

.gallery-body h3 {
  font-family: var(--serif);
  font-size: 1.15rem;
  color: var(--ink-strong);
  margin: 0 0 8px;
  line-height: 1.3;
}

.gallery-body p {
  font-size: 0.875rem;
  color: var(--muted);
  margin: 0 0 14px;
  flex: 1;
}

/* Selected Work Editions */
.work-card {
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 200ms var(--ease), border-color 200ms var(--ease);
}
.work-card:hover { transform: translateY(-2px); border-color: var(--gold); }
.work-media { aspect-ratio: 3 / 4; overflow: hidden; background: var(--surface-alt); border-bottom: 1px solid var(--line); }
.work-media img { width: 100%; height: 100%; object-fit: cover; object-position: center; transition: transform 320ms var(--ease); }
.work-card:hover .work-media img { transform: scale(1.025); }
.work-body { padding: 24px; display: flex; flex-direction: column; flex: 1; }
.work-meta { font-size: 0.8125rem; color: var(--muted); margin-bottom: 8px; }
.work-body h3 { font-family: var(--serif); font-size: 1.4rem; font-weight: 600; color: var(--ink-strong); margin: 0 0 8px; }
.work-scope { font-size: 0.8125rem; color: var(--gold); font-weight: 500; margin-bottom: 16px; }
.work-quote { margin: auto 0 0; padding-top: 16px; border-top: 1px solid var(--line); font-size: 0.9rem; line-height: 1.65; color: var(--ink); }
.work-quote cite { display: block; margin-top: 10px; font-style: normal; font-size: 0.8125rem; color: var(--muted); }

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
.work-inspect-btn:hover { transform: translateX(3px); }

/* Modals */
.case-backdrop {
  position: fixed;
  inset: 0;
  z-index: 85;
  background: rgba(9, 19, 34, 0.65);
  display: grid;
  place-items: center;
  padding: 20px;
  opacity: 0;
  pointer-events: none;
  transition: opacity 200ms var(--ease);
}
.case-backdrop.is-open { opacity: 1; pointer-events: auto; }
.case-modal {
  width: min(920px, 100%);
  max-height: 90vh;
  overflow-y: auto;
  background: var(--surface);
  border: 1px solid var(--line-strong);
  border-radius: 10px;
  display: grid;
  grid-template-columns: 0.95fr 1.05fr;
  transform: translateY(10px);
  transition: transform 220ms var(--ease);
}
.case-backdrop.is-open .case-modal { transform: translateY(0); }
.case-modal-media {
  background: var(--surface-alt);
  border-right: 1px solid var(--line);
  padding: 16px;
  display: grid;
  place-items: center;
}
.case-modal-media img { max-width: 100%; max-height: 75vh; width: auto; height: auto; object-fit: contain; border-radius: 4px; }
.case-modal-body { padding: 28px; display: flex; flex-direction: column; gap: 14px; }
.case-modal-head { display: flex; justify-content: space-between; align-items: flex-start; gap: 12px; }
.case-modal-body h3 { font-family: var(--serif); font-size: 1.6rem; color: var(--ink-strong); margin: 4px 0 0; }
.case-modal-body ul { margin: 0; padding-left: 18px; color: var(--muted); font-size: 0.875rem; }
.case-modal-body li { margin: 5px 0; }

/* Team Detailed Profiles */
.team-detailed-card {
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 8px;
  padding: 28px;
  display: grid;
  grid-template-columns: 220px 1fr;
  gap: 28px;
  align-items: start;
}

.team-portrait-frame {
  position: relative;
  width: 100%;
  aspect-ratio: 4 / 5;
  border-radius: 6px;
  overflow: hidden;
  background: var(--surface-alt);
  border: 1px solid var(--line);
}
.team-portrait-frame img { width: 100%; height: 100%; object-fit: cover; transition: transform 320ms var(--ease); }
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
.team-portrait-frame.is-broken .team-fallback { display: grid; }

.team-detail-head h3 { font-family: var(--serif); font-size: 1.5rem; font-weight: 600; color: var(--ink-strong); margin: 0 0 4px; }
.team-role { font-size: 0.875rem; font-weight: 600; color: var(--gold); margin-bottom: 12px; }
.team-office-box {
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid var(--line);
}
.team-office-box h4 { font-size: 0.8125rem; font-weight: 700; color: var(--ink-strong); margin: 0 0 8px; }
.team-office-box ul { margin: 0; padding-left: 18px; color: var(--muted); font-size: 0.875rem; }
.team-office-box li { margin: 6px 0; }
.team-collab { margin-top: 14px; font-size: 0.8125rem; color: var(--muted); }
.team-contact-row {
  margin-top: 16px;
  padding-top: 14px;
  border-top: 1px solid var(--line);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
  font-size: 0.875rem;
}
.team-contact-row a { font-weight: 600; color: var(--ink-strong); }
.team-contact-row a:hover { color: var(--gold); }

/* Home compact team strip */
.team-strip-grid { display: grid; grid-template-columns: repeat(6, 1fr); gap: 16px; }
.team-mini {
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 8px;
  padding: 14px;
  transition: transform 180ms var(--ease), border-color 180ms var(--ease);
}
.team-mini:hover { transform: translateY(-2px); border-color: var(--gold); }
.team-mini .team-portrait-frame { margin-bottom: 12px; }
.team-mini h3 { font-family: var(--serif); font-size: 0.95rem; font-weight: 600; color: var(--ink-strong); margin: 0 0 4px; line-height: 1.3; }
.team-mini p { font-size: 0.75rem; color: var(--muted); margin: 0; line-height: 1.4; }

/* Interactive Tools (Before/After, Estimator, Checklist, Comparison Table) */
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
.filter-btn:hover { color: var(--ink-strong); }
.filter-btn.is-active { background: var(--surface); color: var(--ink-strong); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08); }

.sample-compare-box {
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 8px;
  padding: 28px;
}
.sample-pane { display: none; }
.sample-pane.is-active { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin-top: 20px; }
.sample-column {
  background: var(--surface-alt);
  border: 1px solid var(--line);
  border-radius: 8px;
  padding: 22px;
}
.sample-column-head {
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--gold);
  margin-bottom: 10px;
}
.sample-column p { margin: 0 0 10px; font-size: 0.9375rem; color: var(--ink); }
.sample-notes { font-size: 0.8125rem; color: var(--muted); border-top: 1px solid var(--line); padding-top: 10px; margin-top: 12px; }

.estimator-shell {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 28px;
  align-items: start;
}
.estimator-options {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
}
.check-chip {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 11px 14px;
  border: 1px solid var(--line-strong);
  border-radius: 6px;
  background: var(--input-bg);
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
}
.check-chip input { width: 17px; height: 17px; accent-color: var(--gold); flex-shrink: 0; }

.checklist-progress-bar {
  height: 8px;
  width: 100%;
  background: var(--surface-alt);
  border-radius: 999px;
  overflow: hidden;
  border: 1px solid var(--line);
}
.checklist-progress-fill {
  height: 100%;
  width: 0%;
  background: var(--gold);
  transition: width 220ms var(--ease);
}
.checklist-group {
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 8px;
  padding: 22px;
}
.checklist-group h3 { font-family: var(--serif); font-size: 1.15rem; margin: 0 0 12px; color: var(--ink-strong); }
.checklist-row {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 8px 0;
  border-top: 1px solid var(--line);
  font-size: 0.875rem;
  cursor: pointer;
}
.checklist-row input { width: 17px; height: 17px; margin-top: 2px; accent-color: var(--gold); flex-shrink: 0; }

.table-scroll { overflow-x: auto; border: 1px solid var(--line); border-radius: 8px; background: var(--surface); }
.compare-table { width: 100%; border-collapse: collapse; min-width: 720px; font-size: 0.875rem; }
.compare-table th, .compare-table td { padding: 14px 16px; text-align: left; border-bottom: 1px solid var(--line); vertical-align: top; }
.compare-table th { background: var(--surface-alt); color: var(--ink-strong); font-weight: 700; font-size: 0.8125rem; }
.compare-table tr:last-child td { border-bottom: 0; }

/* FAQ Search & Accordion */
.faq-toolbar { display: flex; align-items: center; justify-content: space-between; gap: 16px; margin-bottom: 24px; flex-wrap: wrap; }
.faq-search {
  width: min(440px, 100%);
  min-height: 44px;
  padding: 10px 14px;
  border: 1px solid var(--line-strong);
  border-radius: 6px;
  background: var(--surface);
  color: var(--ink);
  font-size: 0.9375rem;
}
.faq-list { border-top: 1px solid var(--line); }
.faq-item { border-bottom: 1px solid var(--line); }
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
}
.faq-item summary::-webkit-details-marker { display: none; }
.faq-item summary:hover { color: var(--gold); }
.faq-chevron { font-family: var(--sans); font-size: 1.1rem; color: var(--gold); transition: transform 180ms var(--ease); flex-shrink: 0; }
.faq-item[open] .faq-chevron { transform: rotate(45deg); }
.faq-answer { padding: 0 4px 20px; color: var(--muted); font-size: 0.9375rem; max-width: 76ch; }

/* Process */
.process-list { border-top: 1px solid var(--line); }
.process-row { display: grid; grid-template-columns: 72px 1fr; gap: 20px; padding: 28px 0; border-bottom: 1px solid var(--line); align-items: start; }
.process-num { font-family: var(--serif); font-size: 1.5rem; font-weight: 600; color: var(--gold); }
.process-row h3 { font-family: var(--serif); font-size: 1.3rem; color: var(--ink-strong); margin: 0 0 8px; }
.process-row p { margin: 0; color: var(--muted); font-size: 0.9375rem; max-width: 72ch; }

/* Contact & Receipt */
.contact-layout { display: grid; grid-template-columns: 0.85fr 1.15fr; gap: 36px; align-items: start; }
.contact-panel { background: var(--surface); border: 1px solid var(--line); border-radius: 8px; padding: 28px; }
.contact-row { padding: 14px 0; border-bottom: 1px solid var(--line); }
.contact-row:last-child { border-bottom: 0; padding-bottom: 0; }
.contact-label { display: block; font-size: 0.75rem; font-weight: 600; color: var(--muted); margin-bottom: 4px; }
.contact-row a { font-weight: 600; color: var(--ink-strong); }
.contact-row a:hover { color: var(--gold); }

.form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
.form-full { grid-column: 1 / -1; }
.field-label { display: flex; flex-direction: column; gap: 6px; font-size: 0.8125rem; font-weight: 600; color: var(--ink-strong); }
.field-input {
  width: 100%;
  min-height: 44px;
  padding: 10px 14px;
  border: 1px solid var(--line-strong);
  border-radius: 6px;
  background: var(--input-bg);
  color: var(--ink);
  font-size: 0.9375rem;
}
.field-input:focus { border-color: var(--gold); }
textarea.field-input { min-height: 140px; resize: vertical; }
.field-hint-row { display: flex; justify-content: space-between; font-size: 0.75rem; color: var(--muted); font-weight: 400; }
.consent-label { display: flex; align-items: flex-start; gap: 10px; font-size: 0.875rem; color: var(--muted); cursor: pointer; }
.consent-label input { width: 18px; height: 18px; margin-top: 2px; accent-color: var(--gold); flex-shrink: 0; }
.consent-label a { color: var(--gold); text-decoration: underline; }
.honeypot { position: absolute; left: -9999px; }
.form-status { margin: 14px 0 0; font-size: 0.875rem; font-weight: 500; min-height: 22px; }
.form-status.success { color: #166534; }
html[data-theme="dark"] .form-status.success { color: #86efac; }
.form-status.error { color: #b91c1c; }
html[data-theme="dark"] .form-status.error { color: #fca5a5; }

.receipt-box {
  margin-top: 20px;
  padding: 22px;
  border: 1px solid var(--line-strong);
  border-radius: 8px;
  background: var(--surface-alt);
}

/* CTA & Footer */
.cta-band { background: var(--surface-alt); border-top: 1px solid var(--line); padding: 56px 0; }
.cta-inner { display: flex; align-items: center; justify-content: space-between; gap: 28px; flex-wrap: wrap; }
.cta-inner h2 { font-family: var(--serif); font-size: clamp(1.6rem, 2.6vw, 2.15rem); color: var(--ink-strong); margin: 0 0 6px; }
.cta-inner p { margin: 0; color: var(--muted); font-size: 0.9375rem; }

.site-footer {
  background: #091322;
  color: #d0dae7;
  padding: 60px 0 28px;
  border-top: 1px solid rgba(212, 175, 98, 0.25);
}
.footer-grid { display: grid; grid-template-columns: 1.4fr 1fr 1fr 1fr; gap: 36px; }
.footer-brand { display: flex; align-items: center; gap: 12px; margin-bottom: 16px; }
.footer-brand strong { font-family: var(--serif); font-size: 1rem; letter-spacing: 0.08em; color: #ffffff; }
.footer-tagline { font-size: 0.875rem; color: #aab6c8; max-width: 34ch; margin: 0 0 14px; }
.footer-location { font-size: 0.8125rem; color: #8e9cb2; }
.site-footer h4 { font-size: 0.75rem; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; color: var(--gold-bright); margin: 0 0 14px; }
.footer-links { display: grid; gap: 9px; }
.footer-links a, .footer-links button { background: none; border: 0; padding: 0; text-align: left; font-size: 0.875rem; color: #c2cede; cursor: pointer; }
.footer-links a:hover, .footer-links button:hover { color: var(--gold-bright); }
.footer-social { display: flex; gap: 10px; margin-top: 14px; flex-wrap: wrap; }
.footer-social a { display: inline-flex; align-items: center; gap: 7px; padding: 7px 12px; border: 1px solid rgba(255, 255, 255, 0.2); border-radius: 6px; font-size: 0.8125rem; color: #f1f5f9; }
.footer-social a:hover { border-color: var(--gold-bright); color: var(--gold-bright); }
.footer-bottom { margin-top: 40px; padding-top: 20px; border-top: 1px solid rgba(255, 255, 255, 0.12); display: flex; justify-content: space-between; gap: 16px; flex-wrap: wrap; font-size: 0.8125rem; color: #8e9cb2; }

.legal-prose { max-width: 78ch; }
.legal-prose h2 { font-family: var(--serif); font-size: 1.45rem; color: var(--ink-strong); margin: 32px 0 10px; }
.legal-prose p { color: var(--muted); margin: 0 0 12px; }

/* Settings Dock & Drawer */
.utility-dock { position: fixed; right: 20px; bottom: 20px; z-index: 45; display: flex; align-items: center; gap: 8px; }
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
}
.utility-btn:hover { transform: translateY(-1px); border-color: var(--gold); }
.to-top-btn { opacity: 0; pointer-events: none; transform: translateY(8px); transition: opacity 180ms var(--ease), transform 180ms var(--ease); }
.to-top-btn.is-visible { opacity: 1; pointer-events: auto; transform: translateY(0); }

.settings-backdrop { position: fixed; inset: 0; z-index: 70; background: rgba(9, 19, 34, 0.45); opacity: 0; pointer-events: none; transition: opacity 200ms var(--ease); }
.settings-backdrop.is-open { opacity: 1; pointer-events: auto; }
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
.settings-drawer.is-open { transform: translateX(0); }
.settings-head { display: flex; align-items: center; justify-content: space-between; padding-bottom: 16px; border-bottom: 1px solid var(--line); }
.settings-head h2 { font-family: var(--serif); font-size: 1.35rem; color: var(--ink-strong); margin: 0; }
.settings-close { min-width: 40px; min-height: 40px; border-radius: 6px; border: 1px solid var(--line); background: transparent; color: var(--ink); font-size: 1.1rem; cursor: pointer; }
.setting-group { display: grid; gap: 10px; }
.setting-label { font-size: 0.8125rem; font-weight: 600; color: var(--ink-strong); }
.setting-desc { font-size: 0.78rem; color: var(--muted); margin: -4px 0 2px; }
.segmented { display: grid; grid-template-columns: repeat(3, 1fr); gap: 4px; padding: 4px; background: var(--surface-alt); border: 1px solid var(--line); border-radius: 8px; }
.segmented.two-col { grid-template-columns: repeat(2, 1fr); }
.seg-opt { min-height: 36px; border: 0; border-radius: 5px; background: transparent; color: var(--muted); font-size: 0.8125rem; font-weight: 600; cursor: pointer; }
.seg-opt.is-selected { background: var(--surface); color: var(--ink-strong); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); }
.settings-footer { margin-top: auto; padding-top: 16px; border-top: 1px solid var(--line); display: flex; justify-content: space-between; align-items: center; gap: 12px; }

.reveal { transition: opacity 320ms var(--ease), transform 320ms var(--ease); }
.reveal.is-pending { opacity: 0; transform: translateY(14px); }
.reveal.is-visible { opacity: 1; transform: translateY(0); }

html[data-motion="reduced"] *, html[data-motion="reduced"] *::before, html[data-motion="reduced"] *::after {
  animation-duration: 0.01ms !important;
  transition-duration: 0.01ms !important;
}
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
}

@media (max-width: 1080px) {
  .team-strip-grid { grid-template-columns: repeat(3, 1fr); }
  .bento-span-2 { grid-column: span 3; }
  .gallery-grid { grid-template-columns: repeat(2, 1fr); }
  .footer-grid { grid-template-columns: 1fr 1fr; }
}

@media (max-width: 920px) {
  .primary-nav, .header-cta { display: none; }
  .mobile-menu-btn { display: inline-flex; }
  .hero-grid, .split-editorial, .contact-layout, .grid-3, .estimator-shell, .sample-pane.is-active, .case-modal { grid-template-columns: 1fr; }
  .case-modal-media { border-right: 0; border-bottom: 1px solid var(--line); }
  .team-detailed-card { grid-template-columns: 1fr; }
  .team-detailed-card .team-portrait-frame { max-width: 260px; }
  .metrics-band { grid-template-columns: repeat(2, 1fr); }
  .metric-cell:nth-child(2) { border-right: 0; }
  .metric-cell:nth-child(-n+2) { border-bottom: 1px solid rgba(255, 255, 255, 0.12); }
  .bento-grid, .grid-2 { grid-template-columns: 1fr; }
  .bento-span-3, .bento-span-2 { grid-column: span 1; }
}

@media (max-width: 640px) {
  .wrap { width: calc(100% - 32px); }
  .header-inner { min-height: 64px; }
  .section { padding: 56px 0; }
  .hero { padding: 48px 0; }
  .team-strip-grid { grid-template-columns: repeat(2, 1fr); }
  .gallery-grid, .form-grid, .estimator-options, .footer-grid { grid-template-columns: 1fr; }
  .process-row { grid-template-columns: 1fr; gap: 8px; }
  .utility-dock { right: 14px; bottom: 14px; }
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
      <p style="font-size:0.8125rem;color:var(--ink);margin-top:12px"><strong>Typical turnaround:</strong> ${esc(service.turnaround)}</p>
      <div class="card-footer-link">
        <a class="text-link" href="/services#${service.id}">View full scope &amp; deliverables &rarr;</a>
      </div>
    </article>`;
  }).join('');
}

function renderAdrianShowcaseGrid(limit = null) {
  const items = limit ? ADRIAN_DELIVERABLES.slice(0, limit) : ADRIAN_DELIVERABLES;
  return items
    .map(
      (item, idx) => `<article class="gallery-card reveal" data-adrian-cat="${item.category}">
      <div class="gallery-mat" data-lightbox-id="${item.id}" role="button" tabindex="0" aria-label="Inspect ${esc(item.title)} full size">
        <img src="${item.image}" alt="${esc(item.title)} — ${esc(item.volume)}" referrerpolicy="no-referrer" loading="lazy" decoding="async">
      </div>
      <div class="gallery-body">
        <div class="gallery-meta tabular">${String(idx + 1).padStart(2, '0')}. ${esc(item.volume)}</div>
        <h3>${esc(item.title)}</h3>
        <p>${esc(item.description)}</p>
        <button type="button" class="work-inspect-btn" data-lightbox-id="${item.id}">Inspect Full Design &rarr;</button>
      </div>
    </article>`
    )
    .join('');
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

function renderTeamDetailedProfiles() {
  return TEAM.map(
    (member) => `<article class="team-detailed-card reveal" id="${member.id}">
      ${renderPortrait(member, true)}
      <div class="team-detail-head">
        <h3>${esc(member.name)}</h3>
        <div class="team-role">${esc(member.role)}</div>
        <p style="margin:0 0 12px;color:var(--ink);font-size:0.9375rem">${esc(member.bio)}</p>
        <p style="margin:0;color:var(--muted);font-size:0.9375rem">${esc(member.officeSummary)}</p>
        <div class="team-office-box">
          <h4>Daily Office Responsibilities &amp; Execution Workflow</h4>
          <ul>${member.workflow.map((step) => `<li>${esc(step)}</li>`).join('')}</ul>
          <p class="team-collab"><strong>Team Coordination:</strong> ${esc(member.collaboration)}</p>
        </div>
        <div class="team-contact-row">
          <a href="mailto:${esc(member.email)}">${esc(member.email)}</a>
          <a class="text-link" href="/contact">Discuss a project with our team &rarr;</a>
        </div>
      </div>
    </article>`
  ).join('');
}

function renderMiniTeamStrip() {
  return TEAM.map(
    (member) => `<a class="team-mini reveal" href="/team#${member.id}">
      ${renderPortrait(member, false)}
      <h3>${esc(member.name)}</h3>
      <p>${esc(member.role)}</p>
    </a>`
  ).join('');
}

const BEFORE_AFTER_SECTION = `
<div class="sample-compare-box">
  <div class="section-header-split" style="margin-bottom:12px">
    <div>
      <div class="eyebrow">Craft Samples</div>
      <h3 style="font-family:var(--serif);font-size:1.6rem;color:var(--ink-strong);margin:6px 0 6px">Before &amp; After Editorial and Listing Samples</h3>
      <p style="margin:0;color:var(--muted);font-size:0.9375rem">Inspect how BookRise Centre refines raw manuscript prose and restructures storefront book descriptions for reader clarity.</p>
    </div>
    <div class="filter-bar" role="tablist" aria-label="Choose craft sample">
      <button type="button" class="filter-btn is-active" data-sample-tab="editing" role="tab" aria-selected="true">Copy Editing Sample</button>
      <button type="button" class="filter-btn" data-sample-tab="metadata" role="tab" aria-selected="false">Storefront Listing Sample</button>
    </div>
  </div>

  <div class="sample-pane is-active" data-sample-pane="editing">
    <div class="sample-column">
      <div class="sample-column-head">Original Author Draft</div>
      <p>&ldquo;In today’s fast paced business world leaders often times find themselves making very quick decisions without actually having the full clarity on what their teams are really needing from them at that moment in time.&rdquo;</p>
      <div class="sample-notes">Issues: filler phrasing (&ldquo;actually&rdquo;, &ldquo;really&rdquo;, &ldquo;at that moment in time&rdquo;), missing comma after introductory phrase, passive cadence.</div>
    </div>
    <div class="sample-column">
      <div class="sample-column-head">BookRise Copy-Edited Revision</div>
      <p>&ldquo;In a fast-moving organization, leaders often make rapid decisions before understanding what their teams truly need.&rdquo;</p>
      <div class="sample-notes">Improvements: tightened word count by 47%, preserved the author’s meaning, sharpened rhythm, and corrected hyphenation and punctuation.</div>
    </div>
  </div>

  <div class="sample-pane" data-sample-pane="metadata">
    <div class="sample-column">
      <div class="sample-column-head">Generic Book Description</div>
      <p>&ldquo;This book is about personal growth and understanding how life works. The author shares many thoughts and chapters on awareness, flow, and living better every day for anyone who wants to improve.&rdquo;</p>
      <div class="sample-notes">Issues: vague value proposition, zero scannable structure, missing audience signal and thematic search keywords.</div>
    </div>
    <div class="sample-column">
      <div class="sample-column-head">Discoverability-Positioned Listing</div>
      <p>&ldquo;<strong>Reclaim clarity in an age of noise.</strong> Blending practical self-awareness with timeless philosophy, <em>The Temple of Understanding</em> gives thoughtful readers a structured framework for deliberate decisions, inner steadiness, and purposeful daily living.&rdquo;</p>
      <div class="sample-notes">Improvements: bold opening hook, clear audience alignment, scannable reader promise, and natural thematic keywords.</div>
    </div>
  </div>
</div>`;

const VIDEO_PROMO_SHOWCASE = `
<div class="card" style="margin-top:32px">
  <div class="eyebrow" style="margin-bottom:6px">Video Promotion &amp; Book Trailers</div>
  <h3 style="margin-top:0">Adrian Emery — Video Promotion Campaign Architecture</h3>
  <p style="margin-bottom:18px">Alongside these eight selected print and digital design deliverables, BookRise Centre also produced video content for Adrian Emery’s campaign. The finished videos will be added to this showcase once the original files are uploaded to Cloudflare Stream.</p>
  <div class="grid-2" style="gap:16px">
    <div class="editorial-callout" style="padding:20px">
      <div class="card-index tabular">01. 60-Second Narrative Book Trailer (16:9)</div>
      <p style="margin:0;font-size:0.875rem;color:var(--muted)">Opening hook question, atmospheric motion visuals aligned to Volume I &amp; Volume II covers, voiceover/on-screen title cards, and clear availability end-slate.</p>
    </div>
    <div class="editorial-callout" style="padding:20px">
      <div class="card-index tabular">02. 30-Second Vertical Launch Reels (9:16)</div>
      <p style="margin:0;font-size:0.875rem;color:var(--muted)">Short-form vertical cuts tailored for Instagram Reels, TikTok, and YouTube Shorts with crisp burned-in captions and quick 3D hardcover reveals.</p>
    </div>
    <div class="editorial-callout" style="padding:20px">
      <div class="card-index tabular">03. Author Spotlight Introduction Clip</div>
      <p style="margin:0;font-size:0.875rem;color:var(--muted)">Author-led story clip introducing Adrian Emery’s philosophy behind <em>Personal Sovereignty</em> and <em>Tao Tuning</em> to build direct reader trust.</p>
    </div>
    <div class="editorial-callout" style="padding:20px">
      <div class="card-index tabular">04. Storefront &amp; Social Square Teasers (1:1)</div>
      <p style="margin:0;font-size:0.875rem;color:var(--muted)">Looping 15-second thematic quote animations linking readers directly to Kindle, eBook, and print editions.</p>
    </div>
  </div>
</div>`;

const CTA_SECTION = `
<section class="cta-band">
  <div class="wrap cta-inner">
    <div>
      <h2>Have a book project in mind?</h2>
      <p>Share your manuscript stage, goals, and the support you are considering. We will prepare a clear written scope and next step.</p>
    </div>
    <div style="display:flex;gap:12px;flex-wrap:wrap">
      <a class="btn btn-primary" href="/contact">Start a Conversation</a>
      <a class="btn btn-outline" href="/pricing">Use Scope Estimator</a>
    </div>
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
          <p class="hero-lead">BookRise Centre is a Brooklyn-coordinated author-services team bringing publishing preparation, developmental and copy editing, custom cover design, video promotion, discoverability, and reader outreach together under clear written agreements&mdash;while you keep 100% of your intellectual property and royalties.</p>
          <div class="hero-actions">
            <a class="btn btn-primary" href="/contact">Discuss Your Book</a>
            <a class="btn btn-ghost" href="/services">Explore Our Services</a>
          </div>
          <div class="hero-meta">
            <span>Brooklyn, New York</span>
            <span aria-hidden="true">&middot;</span>
            <span>Six dedicated specialists</span>
            <span aria-hidden="true">&middot;</span>
            <span>100% Author IP &amp; Royalties</span>
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
        <div class="metric-cell"><strong>Six</strong><span>In-house publishing &amp; marketing specialists</span></div>
        <div class="metric-cell"><strong>Seven</strong><span>Connected service disciplines</span></div>
        <div class="metric-cell"><strong>100%</strong><span>Author IP &amp; royalty retention</span></div>
        <div class="metric-cell"><strong>Written</strong><span>Scope, timeline &amp; deliverables upfront</span></div>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="wrap">
      <div class="section-header-split">
        <div>
          <div class="eyebrow">Capabilities</div>
          <h2>One Centre. Seven connected disciplines.</h2>
          <p class="lead">Whether you are refining an unpublished draft, designing a print wrap, optimizing storefront metadata, or planning reader outreach, every service is scoped transparently around your book’s exact stage.</p>
        </div>
        <a class="text-link" href="/services">View detailed workflows &amp; deliverables &rarr;</a>
      </div>
      <div class="bento-grid">${renderServiceCardsHome()}</div>
    </div>
  </section>

  <section class="section section-surface">
    <div class="wrap">
      <div class="section-header-split">
        <div>
          <div class="eyebrow">Featured Client Campaign &middot; Adrian Emery</div>
          <h2>The Temple of Understanding — Vol. I &amp; II Showcase</h2>
          <p class="lead">Recent visual and promotional work produced for author Adrian Emery across <em>Personal Sovereignty</em> (Volume I) and <em>Tao Tuning: The Art of Flow</em> (Volume II)—spanning full print wraps, author spotlight cards, multi-format launch graphics, and video production.</p>
        </div>
        <a class="text-link" href="/work">View all 8 selected campaign designs &rarr;</a>
      </div>
      <div class="gallery-grid">${renderAdrianShowcaseGrid(3)}</div>
    </div>
  </section>

  <section class="section">
    <div class="wrap">
      ${BEFORE_AFTER_SECTION}
    </div>
  </section>

  <section class="section section-surface">
    <div class="wrap">
      <div class="section-header-split">
        <div>
          <div class="eyebrow">Selected Author Editions &amp; Perspectives</div>
          <h2>Crafted editions paired with client feedback.</h2>
          <p class="lead">Explore additional featured client editions alongside perspectives from the authors behind each book.</p>
        </div>
        <a class="text-link" href="/work">Explore full portfolio &rarr;</a>
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
          <p class="lead">Click any specialist to read their detailed daily office responsibilities, execution workflow, and how they collaborate on your project.</p>
        </div>
        <a class="text-link" href="/team">Read full office profiles &rarr;</a>
      </div>
      <div class="team-strip-grid">${renderMiniTeamStrip()}</div>
    </div>
  </section>

  <section class="section section-surface">
    <div class="wrap split-editorial">
      <div>
        <div class="eyebrow">Author Ownership &amp; Transparency</div>
        <h2>Clear agreements. Full author ownership.</h2>
        <p class="lead" style="margin-bottom:20px">BookRise Centre is strictly a professional author-services partner. We never claim copyright, never take a percentage of your book royalties, and never lock you into vague retainers. Every engagement begins with written deliverables, revision rounds, timelines, and separate disclosure of any third-party platform fees.</p>
        <div style="display:flex;gap:12px;flex-wrap:wrap">
          <a class="btn btn-navy" href="/process">Explore Our 5-Step Process</a>
          <a class="btn btn-outline" href="/resources">Manuscript Readiness Checklist</a>
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
      <h1>A thoughtful publishing partner for authors who want their work presented with purpose.</h1>
      <p>BookRise Centre brings editorial care, publishing preparation, design, discoverability, and reader outreach into one coordinated service experience. We help authors make informed decisions at every stage while protecting the rights, voice, and independence that make each book their own.</p>
    </div>
  </section>
  <section class="section">
    <div class="wrap split-editorial">
      <div>
        <div class="eyebrow">Who We Are</div>
        <h2>One connected team. A clearer path from manuscript to reader.</h2>
        <p class="lead" style="margin-bottom:16px">A book is more than a manuscript or a cover. It is a complete work that must be edited thoughtfully, prepared correctly, positioned clearly, and introduced to the readers it is intended to serve. When these activities are handled in isolation, important details can be missed and the author is left coordinating several separate providers.</p>
        <p class="lead">BookRise Centre was structured to make that process more coherent. Coordinated from Brooklyn, New York, our six-specialist team brings together editorial and production operations, publishing support, visual design, book promotion, and reader-focused strategy. We look at the book as a whole while respecting the distinct expertise required at each stage.</p>
      </div>
      <figure class="editorial-callout"><blockquote>&ldquo;The author’s goals, creative voice, and intellectual property remain central to every recommendation we make and every deliverable we produce.&rdquo;</blockquote><figcaption>BookRise Centre Editorial Charter &middot; Brooklyn, New York</figcaption></figure>
    </div>
  </section>
  <section class="section section-surface">
    <div class="wrap">
      <div class="section-header"><div class="eyebrow">Our Purpose</div><h2>Help good books move forward with clarity and care.</h2><p class="lead">Our purpose is to make professional publishing support easier to understand and easier to coordinate. We help authors identify what their book needs now, what can wait, and which services will make a meaningful contribution to the finished work.</p></div>
      <div class="grid-3">
        <article class="card"><div class="card-index tabular">01. Clarity</div><h3>Informed decisions</h3><p>We explain the work involved, the available options, the expected deliverables, and the practical limits of each service before an author commits.</p></article>
        <article class="card"><div class="card-index tabular">02. Craft</div><h3>Careful execution</h3><p>Editorial, design, and promotional decisions should serve the book rather than follow a generic formula. We work to preserve its voice while improving its presentation.</p></article>
        <article class="card"><div class="card-index tabular">03. Independence</div><h3>Author control</h3><p>Authors retain their copyright, royalties, and publishing-account control. Our role is to provide agreed professional services, not to take ownership of the work.</p></article>
      </div>
    </div>
  </section>
  <section class="section">
    <div class="wrap">
      <div class="section-header"><div class="eyebrow">Who We Serve</div><h2>Support shaped around the author’s stage and objectives.</h2><p class="lead">Different books need different kinds of attention. We begin by understanding the project rather than assuming every author needs the same package.</p></div>
      <div class="grid-3">
        <article class="card"><div class="card-index tabular">01. First-Time Authors</div><h3>A guided first publication</h3><p>For writers completing a debut manuscript who need help understanding editing priorities, book structure, ISBN and imprint considerations, cover requirements, production files, and release planning.</p></article>
        <article class="card"><div class="card-index tabular">02. Thought Leaders &amp; Memoirists</div><h3>Ideas and lived experience</h3><p>For executives, founders, educators, and memoirists who want their arguments, expertise, or personal stories shaped with clarity while retaining the perspective and voice that make the work distinctive.</p></article>
        <article class="card"><div class="card-index tabular">03. Published &amp; Series Authors</div><h3>Stronger presentation over time</h3><p>For authors refreshing an existing title, preparing a sequel, aligning a series, improving retailer information, or planning a new campaign for a book already in circulation.</p></article>
      </div>
    </div>
  </section>
  <section class="section section-surface">
    <div class="wrap">
      <div class="section-header"><div class="eyebrow">How We Work</div><h2>A considered process, not a one-size-fits-all package.</h2><p class="lead">We match the scope to the book, the author’s priorities, and the stage of publication. Some projects need one specialist service; others benefit from several connected stages.</p></div>
      <div class="grid-2">
        <article class="card"><div class="card-index tabular">01. Understand</div><h3>Start with the book and its goals</h3><p>We review the information shared in the enquiry: the book’s genre, manuscript stage, approximate length, intended audience, timeline, and the questions the author wants answered.</p></article>
        <article class="card"><div class="card-index tabular">02. Recommend</div><h3>Identify the right scope</h3><p>We discuss the services that are relevant, explain the sequence where several stages are involved, and distinguish essential work from optional additions.</p></article>
        <article class="card"><div class="card-index tabular">03. Agree</div><h3>Put the details in writing</h3><p>Before work begins, the author receives a written quotation and project scope describing deliverables, formats, revision arrangements, responsibilities, timing, and payment milestones.</p></article>
        <article class="card"><div class="card-index tabular">04. Deliver</div><h3>Work to agreed milestones</h3><p>The assigned specialists complete the approved work, communicate at agreed checkpoints, address the included revision rounds, and hand over the final agreed files.</p></article>
      </div>
      <p style="margin-top:22px"><a class="text-link" href="/process">Read the complete five-step project process &rarr;</a></p>
    </div>
  </section>
  <section class="section">
    <div class="wrap">
      <div class="section-header"><div class="eyebrow">Our Service Disciplines</div><h2>The practical parts of bringing a book to market.</h2><p class="lead">Our services connect where useful, while remaining available as individual engagements when an author only needs a specific area of support.</p></div>
      <div class="grid-2">
        <article class="card"><h3>Editorial &amp; manuscript development</h3><p>Developmental feedback, copy editing, proofreading, writing support, and attention to structure, consistency, readability, and author voice.</p></article>
        <article class="card"><h3>Publishing &amp; production support</h3><p>Publishing-readiness guidance, interior preparation, print and ebook considerations, ISBN and imprint planning, and distribution-platform guidance.</p></article>
        <article class="card"><h3>Cover design &amp; visual presentation</h3><p>Genre-aware cover concepts, typography and visual direction, full print wraps, and digital artwork prepared to the agreed platform specifications.</p></article>
        <article class="card"><h3>Promotion &amp; reader visibility</h3><p>Campaign planning, promotional graphics, book trailers, storefront descriptions, category and keyword research, and individualized reader outreach.</p></article>
      </div>
      <p style="margin-top:22px"><a class="text-link" href="/services">Explore service workflows and deliverables &rarr;</a></p>
    </div>
  </section>
  <section class="section section-surface">
    <div class="wrap split-editorial">
      <div><div class="eyebrow">Our Standards</div><h2>Professional boundaries are part of good service.</h2><p class="lead">Trust is built by being specific about what a service includes and honest about what no provider can promise. We aim to make expectations clear before a project starts and to keep communication grounded in the agreed work.</p></div>
      <div class="grid-2">
        <article class="card"><h3>Written scope before work</h3><p>Deliverables, formats, revision rounds, responsibilities, and milestone timing are documented and approved before commencement.</p></article>
        <article class="card"><h3>Full author ownership</h3><p>Authors retain 100% of their copyright, intellectual property, royalties, and control of their publishing accounts.</p></article>
        <article class="card"><h3>No sales or ranking promises</h3><p>We do not guarantee sales figures, bestseller rankings, independent reviews, or media coverage. Those outcomes depend on readers, platforms, and third parties.</p></article>
        <article class="card"><h3>Respect for confidential work</h3><p>Project information is handled within the agreed working relationship. Complete manuscripts should only be shared through the submission channel agreed with the team.</p></article>
      </div>
    </div>
  </section>
  <section class="section">
    <div class="wrap split-editorial">
      <div><div class="eyebrow">The People Behind the Work</div><h2>Specialists with defined responsibilities.</h2><p class="lead">The team brings together literary direction, publishing and promotional coordination, editorial operations, and author-visibility strategy. Each project is assigned a lead contact and only the specialists needed for its approved scope.</p><p>That structure helps keep communication clear: authors know who is coordinating the work, which stages are underway, and what is expected at each handover. It also allows focused single-service projects to receive attention without being pushed into an unnecessary bundle.</p><a class="text-link" href="/team">Meet the BookRise Centre team &rarr;</a></div>
      <figure class="editorial-callout"><blockquote>&ldquo;A good publishing experience should leave the author better informed, confident about the work completed, and in control of the next decision.&rdquo;</blockquote><figcaption>Our approach to author collaboration</figcaption></figure>
    </div>
  </section>
  <section class="section section-surface">
    <div class="wrap">
      <div class="section-header"><div class="eyebrow">Location &amp; Collaboration</div><h2>Brooklyn-coordinated. Built for clear communication.</h2><p class="lead">BookRise Centre is coordinated from Brooklyn, New York. Initial enquiries and project discussions can be handled remotely, allowing authors to share their goals, review written scopes, and collaborate with the team without needing to attend an in-person meeting.</p></div>
      <div class="grid-2"><article class="card"><h3>Communication around your schedule</h3><p>We agree on practical communication channels and milestone updates at the start of the engagement. Consultation arrangements are confirmed directly rather than assumed.</p></article><article class="card"><h3>Clear next steps</h3><p>Whether you are still planning a book or preparing files for release, the first step is a focused enquiry. We will review the details and explain the appropriate next step.</p></article></div>
    </div>
  </section>
  ${CTA_SECTION}
</main>`;

const servicesPage = `
<main class="page-main">
  <section class="page-intro">
    <div class="wrap">
      <div class="eyebrow">Our Services</div>
      <h1>Deeply structured support for every stage of your book.</h1>
      <p>Read the complete workflow, typical turnaround, target fit, and exact deliverables for all seven BookRise Centre disciplines. Filter by area or proceed directly to scoping.</p>
    </div>
  </section>

  <section class="section">
    <div class="wrap">
      <div class="section-header-split">
        <div>
          <div class="eyebrow">Service Directory</div>
          <h2>Detailed workflows &amp; deliverables</h2>
        </div>
        <div class="filter-bar" role="tablist" aria-label="Filter services by category">
          <button type="button" class="filter-btn is-active" data-filter="all" role="tab" aria-selected="true">All Disciplines (7)</button>
          <button type="button" class="filter-btn" data-filter="editorial" role="tab" aria-selected="false">Editorial &amp; Publishing</button>
          <button type="button" class="filter-btn" data-filter="design" role="tab" aria-selected="false">Design &amp; Media</button>
          <button type="button" class="filter-btn" data-filter="promotion" role="tab" aria-selected="false">Promotion &amp; Outreach</button>
        </div>
      </div>

      <div class="grid-2" id="services-grid">
        ${SERVICES.map((s, i) => `
          <article class="card service-item" id="${s.id}" data-category="${s.category}">
            <div class="card-index tabular">${String(i + 1).padStart(2, '0')}. ${esc(s.categoryLabel)} &middot; ${esc(s.turnaround)}</div>
            <h3>${esc(s.title)}</h3>
            <p>${esc(s.summary)}</p>
            <p style="font-size:0.875rem;color:var(--ink);margin-top:12px"><strong>Ideal for:</strong> ${esc(s.bestFor)}</p>
            <div class="card-subhead">How our team executes this service</div>
            <ul>${s.workflow.map((w) => `<li>${esc(w)}</li>`).join('')}</ul>
            <div class="card-subhead">Included deliverables (per agreed scope)</div>
            <ul>${s.deliverables.map((d) => `<li>${esc(d)}</li>`).join('')}</ul>
            <div class="card-footer-link" style="display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap">
              <a class="text-link" href="/contact?service=${encodeURIComponent(s.title)}">Request scope for ${esc(s.title)} &rarr;</a>
              <a class="text-link" href="/pricing" style="color:var(--muted)">Estimate timeline &rarr;</a>
            </div>
          </article>
        `).join('')}
      </div>

      ${VIDEO_PROMO_SHOWCASE}

      <div style="margin-top:32px">${BEFORE_AFTER_SECTION}</div>
    </div>
  </section>

  ${CTA_SECTION}
</main>`;

const teamPage = `
<main class="page-main">
  <section class="page-intro">
    <div class="wrap">
      <div class="eyebrow">Our Team</div>
      <h1>Six specialists. Clearly defined roles inside our office.</h1>
      <p>Meet the full BookRise Centre team and read exactly how each specialist operates day-to-day—from manuscript evaluation and typesetting to cover positioning, storefront discoverability, and reader outreach.</p>
    </div>
  </section>

  <section class="section">
    <div class="wrap">
      <div style="display:grid;gap:24px">${renderTeamDetailedProfiles()}</div>
      <div class="editorial-callout" style="margin-top:36px">
        <p style="margin:0;color:var(--ink);font-size:0.9375rem"><strong>How projects are staffed:</strong> Every engagement is assigned a lead point of contact alongside the specific specialists required for your agreed deliverables—so your editorial, design, and promotional work stays unified.</p>
      </div>
    </div>
  </section>

  ${CTA_SECTION}
</main>`;

const workPage = `
<main class="page-main">
  <section class="page-intro">
    <div class="wrap">
      <div class="eyebrow">Our Work &amp; Client Showcase</div>
      <h1>Real publishing, design, and promotional campaigns built around each author’s vision.</h1>
      <p>Explore a curated selection of eight distinct campaign designs for Adrian Emery’s <em>The Temple of Understanding</em> duology alongside additional selected author editions.</p>
    </div>
  </section>

  <section class="section">
    <div class="wrap">
      <div class="section-header-split">
        <div>
          <div class="eyebrow">Featured Client Portfolio &middot; Adrian Emery</div>
          <h2>The Temple of Understanding (Vol. I &amp; Vol. II)</h2>
          <p class="lead">A complete multi-volume visual, promotional, and video-production campaign covering <em>Personal Sovereignty</em> (Volume I) and <em>Tao Tuning: The Art of Flow</em> (Volume II). Click any design deliverable to inspect the full-resolution artwork; video pieces will be added to this portfolio after upload.</p>
        </div>
        <div class="filter-bar" role="tablist" aria-label="Filter Adrian Emery deliverables">
          <button type="button" class="filter-btn is-active" data-adrian-filter="all" role="tab" aria-selected="true">All Deliverables (8)</button>
          <button type="button" class="filter-btn" data-adrian-filter="covers" role="tab" aria-selected="false">Cover Spreads (3)</button>
          <button type="button" class="filter-btn" data-adrian-filter="posters" role="tab" aria-selected="false">Promo Posters (3)</button>
          <button type="button" class="filter-btn" data-adrian-filter="spotlights" role="tab" aria-selected="false">Author Spotlights (2)</button>
        </div>
      </div>

      <div class="gallery-grid" id="adrian-gallery">${renderAdrianShowcaseGrid()}</div>

      ${VIDEO_PROMO_SHOWCASE}
    </div>
  </section>

  <section class="section section-surface">
    <div class="wrap">
      <div class="section-header">
        <div class="eyebrow">Selected Portfolio Editions &amp; Testimonials</div>
        <h2>Additional author engagements.</h2>
        <p class="lead">Inspect edition details, delivered scope, and client feedback across business, memoir, and leadership titles.</p>
      </div>
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
      <h1>Your book. Your rights. Complete clarity on every publishing path.</h1>
      <p>Understand how BookRise Centre partners with you at every stage, protects your intellectual property, and compares major distribution platforms honestly.</p>
    </div>
  </section>

  <section class="section">
    <div class="wrap">
      <div class="section-header">
        <div class="eyebrow">Stage-by-Stage Partnership</div>
        <h2>How we support you from idea to live release.</h2>
      </div>
      <div class="grid-3">
        <article class="card"><div class="card-index tabular">01. Discovery</div><h3>Share your project</h3><p>Tell us your working title, genre, approximate word count, current manuscript status, and desired release window. Partial drafts and initial questions are welcome.</p></article>
        <article class="card"><div class="card-index tabular">02. Scoping</div><h3>Review our written recommendation</h3><p>We break down recommended services into clear phases, revision rounds, estimated turnaround, exact deliverables, and any external third-party costs.</p></article>
        <article class="card"><div class="card-index tabular">03. Ownership</div><h3>Approve and retain full control</h3><p>Your written agreement confirms you retain 100% of copyright, distribution account ownership, and all net royalties from book sales.</p></article>
      </div>
    </div>
  </section>

  <section class="section section-surface">
    <div class="wrap">
      <div class="section-header">
        <div class="eyebrow">Platform &amp; Distribution Guide</div>
        <h2>Comparing your book distribution options.</h2>
        <p class="lead">Before formatting or uploading, we help authors weigh print reach, ISBN control, and royalty structures across primary publishing channels.</p>
      </div>
      <div class="table-scroll">
        <table class="compare-table">
          <thead>
            <tr>
              <th>Channel / Model</th>
              <th>Format Reach</th>
              <th>ISBN &amp; Imprint Control</th>
              <th>Typical Royalty Structure</th>
              <th>Best Fit</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Amazon KDP</strong></td>
              <td>Kindle eBook, Paperback &amp; Hardcover via Amazon stores</td>
              <td>Free platform ASIN/ISBN or your own purchased ISBN</td>
              <td>~60% print list minus print cost; 35%–70% eBook</td>
              <td>Fast direct Amazon storefront availability &amp; Kindle Unlimited option</td>
            </tr>
            <tr>
              <td><strong>IngramSpark</strong></td>
              <td>Global wholesalers, indie bookstores, libraries, Barnes &amp; Noble</td>
              <td>Requires author-owned ISBN &amp; imprint name</td>
              <td>List minus wholesale discount (typically 40%–55%) &amp; print cost</td>
              <td>Bookstore/library ordering capability &amp; wider hardcover availability</td>
            </tr>
            <tr>
              <td><strong>Wide eBook Aggregators</strong></td>
              <td>Apple Books, Kobo, Barnes &amp; Noble Nook, library OverDrive</td>
              <td>Author-owned ISBN recommended for clean tracking</td>
              <td>Typically 60%–70% of net retail proceeds</td>
              <td>Non-exclusive authors reaching international &amp; library readers</td>
            </tr>
            <tr>
              <td><strong>Direct / Offset Print Runs</strong></td>
              <td>Bulk physical inventory for events, speaking, &amp; direct store</td>
              <td>Author-owned ISBN &amp; barcode</td>
              <td>100% direct net margin minus upfront unit printing &amp; shipping</td>
              <td>Keynote speakers, corporate bulk orders, &amp; premium special editions</td>
            </tr>
          </tbody>
        </table>
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
      <h1>A disciplined five-stage workflow from first enquiry to final handover.</h1>
      <p>Every BookRise Centre engagement follows transparent checkpoints so you always know what is being worked on, who is responsible, and what happens next.</p>
    </div>
  </section>

  <section class="section">
    <div class="wrap">
      <div class="process-list">
        <div class="process-row"><div class="process-num tabular">01</div><div><h3>Discovery &amp; Manuscript Understanding</h3><p>We review your enquiry, learn about your book’s genre, word count, stage, target audience, and goals, and hold an introductory email or consultation discussion to identify genuine priorities.</p></div></div>
        <div class="process-row"><div class="process-num tabular">02</div><div><h3>Editorial &amp; Service Scoping</h3><p>Gracious J. Literary and the relevant specialists evaluate sample pages or existing assets to map a tailored sequence of tasks, review points, and realistic turnaround estimates.</p></div></div>
        <div class="process-row"><div class="process-num tabular">03</div><div><h3>Written Quotation &amp; Agreement</h3><p>You receive a formal written scope detailing exact deliverables, included revision rounds, payment schedule, third-party cost transparency, cancellation terms, and explicit author IP retention.</p></div></div>
        <div class="process-row"><div class="process-num tabular">04</div><div><h3>Coordinated Execution &amp; Checkpoints</h3><p>Our team executes each milestone—sharing editorial notes, cover concepts, metadata drafts, or trailer cuts at agreed checkpoints for your feedback and sign-off.</p></div></div>
        <div class="process-row"><div class="process-num tabular">05</div><div><h3>Final Delivery, Handover &amp; Next Steps</h3><p>Upon approval, final print-ready files, digital exports, style sheets, or campaign reports are delivered directly to you. Any follow-on phase is discussed separately with zero obligation.</p></div></div>
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
      <h1>Six reasons authors choose a coordinated partner over fragmented shortcuts.</h1>
      <p>Built on transparent agreements, complementary specialist skill sets, and unwavering respect for your creative independence.</p>
    </div>
  </section>

  <section class="section">
    <div class="wrap">
      <div class="grid-3">
        <article class="card"><div class="card-index tabular">01. Integrated Team</div><h3>Six aligned specialists</h3><p>Editorial operations, cover direction, visibility strategy, and reader outreach collaborate under one roof so your book’s message never fractures between vendors.</p></article>
        <article class="card"><div class="card-index tabular">02. Author Rights</div><h3>100% ownership retained</h3><p>You never assign copyright, publishing control, or royalty shares to BookRise Centre. Your accounts and files stay completely yours.</p></article>
        <article class="card"><div class="card-index tabular">03. Written Clarity</div><h3>Detailed upfront scopes</h3><p>Deliverables, revision allowances, timelines, and payment milestones are documented in plain language before any work begins.</p></article>
        <article class="card"><div class="card-index tabular">04. Honest Boundaries</div><h3>Zero misleading promises</h3><p>We never sell guaranteed bestseller lists or fabricated review promises—our focus is verifiable editorial, design, and outreach craft.</p></article>
        <article class="card"><div class="card-index tabular">05. Tailored Recommendations</div><h3>No forced packages</h3><p>Request a single focused service or combine disciplines into a phased roadmap tailored to your manuscript’s true condition.</p></article>
        <article class="card"><div class="card-index tabular">06. Consistent Communication</div><h3>Structured review checkpoints</h3><p>Clear milestone updates and direct specialist accountability ensure you are never left wondering where your project stands.</p></article>
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
      <h1>Transparent project-based scoping built around your exact manuscript.</h1>
      <p>Use our interactive scope estimator below to map your recommended engagement model and estimated timeline, then send your configured brief straight to our team for a formal written quotation.</p>
    </div>
  </section>

  <section class="section">
    <div class="wrap">
      <div class="section-header">
        <div class="eyebrow">Interactive Tool</div>
        <h2>Project Scope &amp; Timeline Estimator</h2>
        <p class="lead">Select the services, manuscript length, and timeline you are considering to preview a tailored milestone plan.</p>
      </div>

      <div class="estimator-shell">
        <div class="card">
          <div class="setting-group" style="margin-bottom:20px">
            <div class="setting-label">1. Services under consideration</div>
            <div class="estimator-options" id="est-services">
              ${SERVICES.map(
                (s) => `<label class="check-chip"><input type="checkbox" value="${esc(s.title)}" data-weeks="2"><span>${esc(s.title)}</span></label>`
              ).join('')}
            </div>
          </div>

          <div class="form-grid">
            <label class="field-label">2. Approximate word count
              <select class="field-input" id="est-words">
                <option value="1">Under 25,000 words (Short / Guide)</option>
                <option value="2" selected>25,000 &ndash; 60,000 words (Standard Non-Fiction / Novella)</option>
                <option value="3">60,000 &ndash; 95,000 words (Full-Length Trade Book)</option>
                <option value="4">95,000+ words (Comprehensive / Epic)</option>
                <option value="1">Already Published (Promotion / Refresh Only)</option>
              </select>
            </label>
            <label class="field-label">3. Preferred pace
              <select class="field-input" id="est-pace">
                <option value="1" selected>Standard Balanced Schedule</option>
                <option value="0.75">Accelerated Priority Timeline</option>
                <option value="1.25">Flexible Phased Delivery</option>
              </select>
            </label>
          </div>
        </div>

        <div class="editorial-callout" id="est-output">
          <div class="eyebrow" style="margin-bottom:6px">Estimated Engagement Blueprint</div>
          <h3 id="est-model" style="font-family:var(--serif);font-size:1.5rem;color:var(--ink-strong);margin:0 0 8px">Select one or more services</h3>
          <p id="est-duration" class="tabular" style="font-weight:700;color:var(--gold);margin:0 0 14px">Estimated duration: &mdash;</p>
          <p id="est-summary" style="font-size:0.9375rem;color:var(--muted);margin:0 0 14px">Choose at least one service on the left to generate a recommended delivery sequence.</p>
          <ul id="est-milestones" style="margin:0 0 20px;padding-left:18px;font-size:0.875rem;color:var(--ink)"></ul>
          <a class="btn btn-primary" id="est-apply-link" href="/contact" style="width:100%">Send This Scope for a Written Quote &rarr;</a>
        </div>
      </div>
    </div>
  </section>

  <section class="section section-surface">
    <div class="wrap">
      <div class="section-header">
        <div class="eyebrow">Quotation Factors</div>
        <h2>What determines your final written quotation.</h2>
      </div>
      <div class="grid-2">
        <article class="card"><h3>Manuscript length &amp; condition</h3><p>Total word count, structural state, presence of tables, citations, or illustrations, and the depth of editing required.</p></article>
        <article class="card"><h3>Deliverables &amp; revision rounds</h3><p>Number of concepts, interior/print formats (paperback, hardcover, ebook), and agreed review iterations.</p></article>
        <article class="card"><h3>Schedule &amp; multi-service sequencing</h3><p>Target release date and whether editorial, cover design, and promotional phases run sequentially or in parallel.</p></article>
        <article class="card"><h3>External third-party costs</h3><p>Any optional external costs—such as ISBN blocks, paid advertising spend, or author proof printing—are itemized separately before approval.</p></article>
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
      <h1>Author Resources &amp; Interactive Readiness Checklist</h1>
      <p>Assess where your book stands today with our interactive 12-point readiness checklist, then explore practical guides on covers, platforms, metadata, and outreach.</p>
    </div>
  </section>

  <section class="section">
    <div class="wrap">
      <div class="section-header-split" style="margin-bottom:20px">
        <div>
          <div class="eyebrow">Interactive Readiness Tool</div>
          <h2>Manuscript &amp; Launch Readiness Checklist</h2>
          <p class="lead">Check off completed steps below. Your progress saves automatically in your browser and can be attached straight to a consultation request.</p>
        </div>
        <div style="text-align:right">
          <div class="tabular" id="chk-score" style="font-family:var(--serif);font-size:1.65rem;font-weight:600;color:var(--gold)">0% Ready (0 / 12)</div>
          <div style="font-size:0.8125rem;color:var(--muted)" id="chk-stage-label">Early preparation stage</div>
        </div>
      </div>

      <div class="checklist-progress-bar" style="margin-bottom:24px">
        <div class="checklist-progress-fill" id="chk-bar"></div>
      </div>

      <div class="grid-2" id="checklist-root">
        ${CHECKLIST_GROUPS.map(
          (group) => `<div class="checklist-group">
            <h3>${esc(group.title)}</h3>
            ${group.items
              .map(
                (item) => `<label class="checklist-row"><input type="checkbox" class="readiness-chk" value="${esc(item.id)}" data-label="${esc(item.label)}"><span>${esc(item.label)}</span></label>`
              )
              .join('')}
          </div>`
        ).join('')}
      </div>

      <div style="margin-top:20px;display:flex;gap:12px;flex-wrap:wrap;align-items:center">
        <a class="btn btn-primary" id="chk-carry-btn" href="/contact">Attach Readiness Stage to Enquiry &rarr;</a>
        <button type="button" class="btn btn-outline" id="chk-print-btn">Print Checklist Summary</button>
        <button type="button" class="btn btn-outline" id="chk-reset-btn">Reset Checklist</button>
      </div>
    </div>
  </section>

  <section class="section section-surface">
    <div class="wrap">
      <div class="section-header">
        <div class="eyebrow">Publishing Guides</div>
        <h2>Practical guidance for every milestone.</h2>
      </div>
      <div class="grid-3">
        <article class="card"><div class="card-index tabular">01. Preparation</div><h3>Manuscript readiness checklist</h3><p>How to separate developmental structural feedback from final line copy editing and proofread checks so revisions stay clean and cost-effective.</p><div class="card-footer-link"><a class="text-link" href="/contact?service=${encodeURIComponent('Editing & Writing')}">Discuss manuscript preparation &rarr;</a></div></article>
        <article class="card"><div class="card-index tabular">02. Presentation</div><h3>What makes a strong book cover?</h3><p>Why title contrast, genre cues, thumbnail legibility at 120px width, and calibrated spine math matter equally across digital and print editions.</p><div class="card-footer-link"><a class="text-link" href="/services#cover-design">Explore cover design &rarr;</a></div></article>
        <article class="card"><div class="card-index tabular">03. Distribution</div><h3>Choosing a publishing platform</h3><p>Understanding when Amazon KDP alone suffices versus pairing KDP with IngramSpark for bookstore and library wholesale distribution.</p><div class="card-footer-link"><a class="text-link" href="/authors">Compare distribution platforms &rarr;</a></div></article>
        <article class="card"><div class="card-index tabular">04. Discoverability</div><h3>Metadata, categories &amp; keywords</h3><p>How subtitle clarity, HTML-formatted storefront descriptions, and accurate BISAC/retail categories help the right readers find your title.</p><div class="card-footer-link"><a class="text-link" href="/services#visibility-discoverability">Explore discoverability &rarr;</a></div></article>
        <article class="card"><div class="card-index tabular">05. Ownership</div><h3>Protecting creative independence</h3><p>Essential questions every author should ask about copyright ownership, ISBN registration, third-party costs, and non-royalty service agreements.</p><div class="card-footer-link"><a class="text-link" href="/why-choose-us">Our transparency standard &rarr;</a></div></article>
        <article class="card"><div class="card-index tabular">06. Promotion</div><h3>Planning thoughtful outreach</h3><p>Sequencing advance review copies, trailer teasers, author spotlights, and targeted podcast pitches around a sustainable launch calendar.</p><div class="card-footer-link"><a class="text-link" href="/services#book-promotion">Explore book promotion &rarr;</a></div></article>
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
      <h1>Clear answers before you begin.</h1>
      <p>Search or browse detailed answers covering BookRise Centre services, project scoping, author IP ownership, timelines, and confidentiality.</p>
    </div>
  </section>

  <section class="section">
    <div class="wrap">
      <div class="faq-toolbar">
        <input class="faq-search" id="faq-search" type="search" placeholder="Filter questions (e.g. royalties, ISBN, pricing, timeline)..." aria-label="Filter frequently asked questions">
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
      <h1>Let us start a clear, structured conversation about your book.</h1>
      <p>Share your project details and preferred consultation window below. You will receive an immediate confirmation receipt upon submission.</p>
    </div>
  </section>

  <section class="section">
    <div class="wrap contact-layout">
      <div>
        <div class="eyebrow">Direct Channels</div>
        <h2 style="font-family:var(--serif);font-size:2rem;color:var(--ink-strong);margin:10px 0 12px">Tell us about the book you are building.</h2>
        <p class="lead" style="margin-bottom:24px">Whether you are planning an outline, revising a completed draft, or repositioning a published title, detailed context helps our team prepare an accurate written scope.</p>
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
          <div class="contact-row">
            <span class="contact-label">Enquiry Admin Portal</span>
            <a href="/admin">Team Enquiry Dashboard &rarr;</a>
          </div>
        </div>
        <p style="font-size:0.8125rem;color:var(--muted);margin-top:16px">Please do not include full manuscripts, passwords, or payment details in this initial form. Secure file-transfer instructions are provided after initial contact.</p>
      </div>

      <div class="contact-panel">
        <div class="eyebrow">Project Inquiry &amp; Consultation Window</div>
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
              <input class="field-input" name="genre" maxlength="120" placeholder="e.g. Memoir, Business, Philosophy">
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
            <label class="field-label">Preferred timeline
              <select class="field-input" name="timeline">
                <option value="">Select timeline</option>
                <option>As soon as practical</option>
                <option>Within 1 month</option>
                <option>Within 2&ndash;3 months</option>
                <option>Flexible</option>
              </select>
            </label>
            <label class="field-label">Preferred consultation format
              <select class="field-input" name="contactMethod">
                <option value="Email follow-up">Email follow-up</option>
                <option value="Video consultation">Video consultation</option>
                <option value="Phone / WhatsApp call">Phone / WhatsApp call</option>
              </select>
            </label>
            <label class="field-label">Preferred time window
              <select class="field-input" name="preferredWindow">
                <option value="Flexible">Flexible</option>
                <option value="Morning (9:00 AM - 12:00 PM)">Morning (9:00 AM &ndash; 12:00 PM)</option>
                <option value="Afternoon (12:00 PM - 4:00 PM)">Afternoon (12:00 PM &ndash; 4:00 PM)</option>
                <option value="Late Afternoon (4:00 PM - 6:00 PM)">Late Afternoon (4:00 PM &ndash; 6:00 PM)</option>
              </select>
            </label>
            <label class="field-label">Your timezone
              <select class="field-input" name="timezone">
                <option value="EST / New York (UTC-5)">EST / New York (UTC-5)</option>
                <option value="CST / Chicago (UTC-6)">CST / Chicago (UTC-6)</option>
                <option value="PST / Los Angeles (UTC-8)">PST / Los Angeles (UTC-8)</option>
                <option value="GMT / London (UTC+0)">GMT / London (UTC+0)</option>
                <option value="WAT / Lagos (UTC+1)">WAT / Lagos (UTC+1)</option>
                <option value="Other">Other</option>
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
          <div class="receipt-box" id="enquiry-receipt" hidden></div>
        </form>
      </div>
    </div>
  </section>
</main>`;

const adminPage = `
<main class="page-main">
  <section class="page-intro">
    <div class="wrap">
      <div class="eyebrow">Team Workspace</div>
      <h1>Enquiry Management Dashboard</h1>
      <p>Review submitted author project inquiries, consultation windows, and workflow statuses.</p>
    </div>
  </section>

  <section class="section">
    <div class="wrap">
      <div class="card" id="admin-loading-card" style="max-width:480px">
        <p style="margin:0;color:var(--muted)">Checking team workspace status...</p>
      </div>

      <div id="admin-setup-card" hidden></div>

      <div class="card" id="admin-auth-card" style="max-width:480px" hidden>
        <h3 style="margin-top:0">Sign in with Team Passcode</h3>
        <p style="margin-bottom:16px" id="admin-auth-hint">Enter your team admin passcode to view and manage submitted author enquiries.</p>
        <form id="admin-login-form" style="display:grid;gap:12px">
          <input class="field-input" type="password" id="admin-passcode-input" placeholder="Enter admin passcode" required>
          <button type="submit" class="btn btn-navy">Unlock Enquiries</button>
        </form>
        <p class="form-status" id="admin-auth-status"></p>
      </div>

      <div id="admin-board" hidden>
        <div class="section-header-split" style="margin-bottom:20px">
          <div>
            <h2 style="margin:0 0 6px">Submitted Project Enquiries</h2>
            <p class="lead" id="admin-count-label">Loading records...</p>
          </div>
          <div style="display:flex;gap:10px;flex-wrap:wrap">
            <select class="field-input" id="admin-status-filter" style="width:auto;min-width:160px">
              <option value="all">All Statuses</option>
              <option value="new">New</option>
              <option value="in_review">In Review</option>
              <option value="quoted">Quoted</option>
              <option value="archived">Archived</option>
            </select>
            <button type="button" class="btn btn-outline" id="admin-refresh-btn">Refresh</button>
            <button type="button" class="btn btn-outline" id="admin-logout-btn">Sign Out</button>
          </div>
        </div>
        <div id="admin-list" style="display:grid;gap:16px"></div>
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
    ['1. Services and project scope', 'BookRise Centre provides professional author services including publishing support, editing and writing, cover design, book promotion, video promotion, visibility and discoverability support, and reader outreach. The services provided for a particular project are limited to the tasks and deliverables expressly described in the written quotation or service agreement.'],
    ['2. Quotations and acceptance', 'A quotation is based on the information available when it is prepared. If the manuscript, project requirements, deliverables or schedule change, the scope and fee may need to be reviewed. Work begins only after the parties have accepted the applicable written terms and any required initial payment has been received.'],
    ['3. Fees and payment', 'The quotation or agreement states the fee, currency, payment stages, due dates and any external costs. Additional work outside the agreed scope requires separate written approval.'],
    ['4. Author materials and responsibilities', 'Authors are responsible for ensuring they have the right to supply all manuscripts, images, text and materials for the project, and for providing timely feedback within agreed review windows.'],
    ['5. Intellectual property and ownership', 'Authors retain 100% ownership of their original manuscripts and intellectual property. Limited permissions granted to BookRise Centre apply strictly to performing the agreed services.'],
    ['6. Revisions, approvals and delivery', 'The written agreement specifies included revision rounds, approval checkpoints, file formats and delivery methods.'],
    ['7. Third-party services and platforms', 'Printing, distribution platforms, advertising spend, ISBN agencies and other third-party providers operate under their own fees and policies, disclosed separately where applicable.'],
    ['8. No guaranteed commercial outcomes', 'BookRise Centre does not guarantee book sales, income, reviews, rankings, or media coverage. We guarantee professional execution of agreed deliverables and clear activity reporting.'],
    ['9. Cancellation and refunds', 'Cancellation, pause and refund arrangements are governed by the project-specific written agreement and applicable consumer protections.'],
    ['10. Contact', 'Questions about these terms or a proposed engagement may be sent to hello@bookrisecentre.com.'],
  ]
);

const privacyPage = legalPage(
  'Privacy Policy',
  'What information BookRise Centre receives, why it is used, how it is protected, and the choices available to authors and visitors.',
  [
    ['1. Who this policy covers', 'This policy explains how BookRise Centre handles information submitted through this website, initial enquiries, and subsequent author-service discussions. It applies to website visitors and people who contact us about a possible or active project. Questions or privacy requests may be sent to hello@bookrisecentre.com.'],
    ['2. Information you may provide', 'The enquiry form may collect your name, email address, book title, genre, requested service, manuscript stage, intended timeline, preferred contact method, consultation window, time zone, and the message you submit. If a project proceeds, we may also receive project correspondence, approved manuscript extracts, design references, feedback, and other materials needed to perform the agreed work. Please do not submit passwords, payment-card details, government identification numbers, or a complete manuscript through the initial public form.'],
    ['3. Technical and security information', 'To limit automated or abusive submissions, the enquiry service creates a one-way SHA-256 hash from the connecting IP address and uses it for short-term submission-rate checks. The enquiry record stores this hash rather than the raw IP address. Cloudflare may separately process technical request information as part of providing website hosting and security services, under its own terms and privacy documentation.'],
    ['4. Browser storage and display preferences', 'The website uses local browser storage to remember display preferences such as theme, text size, motion, and contrast. The author-readiness checklist may also save your checklist progress in your browser so you can continue later. These settings are stored on your device and are not required to submit an enquiry. Clearing your browser storage may reset them.'],
    ['5. Why information is used', 'We use submitted information to respond to questions, understand the book project, assess requested services, prepare quotations and written scopes, arrange consultations, deliver agreed services, provide project updates, maintain business records, and protect the website and enquiry service from abuse. Where applicable law requires a specific legal basis, processing may be necessary to respond to a request you make, perform or prepare an agreement, meet a legal obligation, protect legitimate business interests such as service security, or act on consent you have provided.'],
    ['6. Who may receive information', 'Information is made available only to BookRise Centre team members who need it to respond to or carry out the relevant work. The website and enquiry records are hosted using Cloudflare services. If email notifications are enabled, relevant enquiry details may be processed by the email delivery provider used for those notifications. Other providers, such as publishing or advertising platforms, receive information only where it is needed for a service you have requested or approved. We do not sell personal information.'],
    ['7. Email communications', 'If you submit an enquiry, we use the email address you provide to respond about that enquiry and any related project discussion. Automated enquiry notifications may be sent to the team when the email integration is configured. An enquiry is not an automatic subscription to unrelated marketing emails. If we later offer a separate mailing list, its subscription and unsubscribe arrangements will be explained at the point of sign-up.'],
    ['8. Retention', 'We keep enquiry and project information for as long as it is reasonably needed to respond, administer an active engagement, maintain appropriate business records, resolve questions or disputes, and meet applicable legal requirements. Retention periods may differ depending on whether an enquiry becomes a project and on the nature of the records. We do not state a single fixed retention period for every category of information.'],
    ['9. Confidential manuscripts and project materials', 'We treat unpublished work and project communications as confidential within the working relationship and limit access to people who need the material for the agreed service. Before sending a complete manuscript or sensitive material, contact the team and request the appropriate submission instructions. Authors remain responsible for keeping their own backup copies and for confirming that they have permission to share third-party material.'],
    ['10. External services and international processing', 'The website loads certain typefaces from Google Fonts. When your browser requests those fonts, the request is handled by Google under its own privacy terms. Cloudflare and other service providers may process information in locations outside the country where you are based. Where applicable, we take reasonable steps to use providers and arrangements appropriate to the service being delivered.'],
    ['11. Your choices and requests', 'Depending on the law that applies to you, you may be able to request access to, correction of, or deletion of personal information, object to or restrict certain processing, or withdraw consent where processing relies on consent. You may also ask us to clarify how information from an enquiry is being used. Send your request to hello@bookrisecentre.com and include enough detail for us to identify the enquiry. We may need to verify your request before acting on it, and some records may need to be retained where the law permits or requires this.'],
    ['12. Security and policy updates', 'We use reasonable technical and organisational measures intended to protect information against unauthorised access, loss, or misuse. No website or electronic transmission can be guaranteed completely secure. We may update this policy when our services, systems, or legal obligations change; the version published on this page is the version currently in effect.'],
    ['13. Contact', 'For privacy questions, access or correction requests, or concerns about information you have submitted, contact hello@bookrisecentre.com.']
  ]
);

const refundsPage = legalPage(
  'Refund & Cancellation Policy',
  'How project cancellation, work already completed, external costs, and refund requests are handled.',
  [
    ['1. The written project agreement comes first', 'Every engagement should have a written quotation or agreement stating the approved services, deliverables, fee and currency, payment milestones, expected schedule, revision arrangements, third-party costs, and project-specific cancellation terms. This policy should be read together with that agreement. If a project-specific term differs, the written agreement applies to the extent permitted by applicable law. Nothing in this policy removes a consumer right that cannot lawfully be excluded.'],
    ['2. Before work begins', 'If you decide not to proceed after receiving a quotation, notify us in writing before approving the scope or making a payment. If a payment has already been made but work has not started, any refund will be assessed against the written agreement, any clearly disclosed and applicable costs, and the legal rights that apply to the transaction. A payment is not automatically treated as forfeited merely because it was paid in advance.'],
    ['3. Cancellation after work has started', 'If you ask to cancel after work has begun, we will review the project status against its agreed milestones. The account may take into consideration deliverables already completed, work in progress where the agreement provides for it, and third-party costs that were approved in advance and have become non-recoverable. The basis for any amount retained or refunded should be explained by reference to the agreed scope and work performed; we do not apply an undisclosed blanket cancellation charge.'],
    ['4. Third-party and external costs', 'Costs paid to or committed with external providers—such as advertising platforms, printing services, ISBN agencies, stock-asset providers, or distribution services—are subject to those providers’ terms. Where such a cost is non-refundable or cannot be recovered, it may be excluded from a refund only where it was disclosed and approved as part of the project, and where applicable law permits. External costs should be itemised separately in the quotation wherever practical.'],
    ['5. Revisions, approvals, and concerns', 'If a delivered item does not match the approved brief or written scope, contact the assigned specialist with a clear description of the issue and the relevant file or milestone. We will review the concern against the agreed deliverables and revision allowance. Requests that change the approved direction or add new work may require a revised quotation. A difference in personal preference, by itself, does not automatically establish that agreed work was not delivered; concerns will be considered against the actual scope and applicable rights.'],
    ['6. Delays and paused projects', 'If a project is delayed because information, approvals, or materials are outstanding, the team will discuss a revised schedule. If you need to pause a project, contact us in writing so the status of completed work, reserved time, outstanding payments, and any external commitments can be reviewed under the agreement.'],
    ['7. If BookRise Centre cannot continue', 'If circumstances prevent us from completing an agreed engagement, we will communicate the position and review the completed work, any transferable deliverables, and any unearned amounts in line with the written agreement and applicable law.'],
    ['8. How to request a cancellation or refund review', 'Email hello@bookrisecentre.com with your name, project or enquiry reference if available, the service concerned, the payment date and amount, and a brief explanation of the request. Please do not send full payment-card details. We will review the request against the project records and respond with the next steps.'],
    ['9. Payment disputes', 'If you have a concern about an invoice, payment, or project milestone, contact us promptly so we can review it with you. This does not prevent you from using any dispute or consumer-protection process available through your payment provider or under applicable law.'],
    ['10. Contact', 'All cancellation, refund, or policy questions should be sent in writing to hello@bookrisecentre.com.']
  ]
);

const PAGES = {
  '/': ['Home', 'Detailed publishing, editorial, design, video promotion, and book-marketing support for authors retaining 100% IP and royalties.', homePage],
  '/about': ['About BookRise Centre', 'Learn about BookRise Centre, our operating model, who we serve, and our author-first standards.', aboutPage],
  '/services': ['Our Services', 'Detailed workflows, turnaround times, deliverables, video trailers, and editorial samples across seven disciplines.', servicesPage],
  '/team': ['Our Team', 'Detailed office profiles and workflows for all six BookRise Centre specialists.', teamPage],
  '/work': ['Our Work', 'Curated Adrian Emery duology campaign showcase with eight selected deliverables and featured author editions.', workPage],
  '/authors': ['For Authors', 'Stage-by-stage partnership guide, author IP charter, and distribution platform comparison.', authorsPage],
  '/resources': ['Author Resources', 'Interactive 12-point Manuscript Readiness Checklist and practical publishing guides.', resourcesPage],
  '/process': ['Our Process', 'Our five-stage workflow from discovery through completion and file handover.', processPage],
  '/why-choose-us': ['Why Choose Us', 'Why authors choose BookRise Centre’s integrated six-specialist model.', whyPage],
  '/faq': ['Frequently Asked Questions', 'Detailed answers on services, pricing, IP ownership, royalties, and process.', faqPage],
  '/pricing': ['Pricing & Engagement', 'Interactive Project Scope & Timeline Estimator and transparent quotation guide.', pricingPage],
  '/contact': ['Contact BookRise Centre', 'Start a conversation with consultation window selection and instant confirmation receipt.', contactPage],
  '/admin': ['Enquiry Dashboard', 'Manage submitted author enquiries.', adminPage],
  '/terms': ['Terms of Service', 'Terms for BookRise Centre author-service engagements.', termsPage],
  '/privacy': ['Privacy Policy', 'How BookRise Centre handles enquiry and project information.', privacyPage],
  '/refunds': ['Refund & Cancellation Policy', 'Cancellation and refund policy for BookRise Centre services.', refundsPage],
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
    ['/pricing', 'Pricing & Estimator'],
    ['/work', 'Our Work'],
    ['/team', 'Our Team'],
    ['/authors', 'For Authors'],
    ['/resources', 'Resources & Checklist'],
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
    description: 'Coordinated publishing, editorial, cover design, video promotion, and book-marketing services with full author ownership.',
    email: 'hello@bookrisecentre.com',
    address: { '@type': 'PostalAddress', addressLocality: 'Brooklyn', addressRegion: 'NY', addressCountry: 'US' },
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
          <p class="footer-tagline">Where books gain visibility and authors gain recognition. Detailed editorial, design, video promotion, and outreach support with 100% author ownership.</p>
          <div class="footer-location">Brooklyn, New York, United States</div>
        </div>

        <div>
          <h4>Explore</h4>
          <div class="footer-links">
            <a href="/about">About Us</a>
            <a href="/services">Our Services</a>
            <a href="/pricing">Pricing &amp; Scope Estimator</a>
            <a href="/work">Our Work &amp; Portfolio</a>
            <a href="/team">Our Team (6 Specialists)</a>
            <a href="/process">Our 5-Step Process</a>
          </div>
        </div>

        <div>
          <h4>Authors &amp; Policy</h4>
          <div class="footer-links">
            <a href="/authors">For Authors &amp; Platforms</a>
            <a href="/resources">Resources &amp; Readiness Checklist</a>
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
            <a href="/admin">Team Enquiry Dashboard</a>
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
      <p class="setting-desc">Switch between editorial daylight paper, dark nocturnal slate, or device preference.</p>
      <div class="segmented" role="group" aria-label="Color theme">
        <button type="button" class="seg-opt" data-setting="theme" data-value="light">Light</button>
        <button type="button" class="seg-opt" data-setting="theme" data-value="dark">Dark</button>
        <button type="button" class="seg-opt" data-setting="theme" data-value="system">System</button>
      </div>
    </div>

    <div class="setting-group">
      <div class="setting-label">Reading Size</div>
      <p class="setting-desc">Adjust base typography scale across articles, guides, and team profiles.</p>
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
      <p class="setting-desc">Increase ink density and hairline border clarity.</p>
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
          <button class="settings-close" id="case-close" type="button" aria-label="Close inspection dialog">&times;</button>
        </div>
        <p id="case-brief" style="margin:0;color:var(--muted);font-size:0.9375rem"></p>
        <div id="case-scope-wrap">
          <div class="setting-label" style="margin-bottom:6px">Scope Delivered</div>
          <ul id="case-deliverables"></ul>
        </div>
        <blockquote id="case-quote" style="margin:4px 0 0;padding-top:12px;border-top:1px solid var(--line);font-size:0.875rem;color:var(--ink)"></blockquote>
        <div style="margin-top:auto;padding-top:12px;display:flex;gap:10px;flex-wrap:wrap">
          <a class="btn btn-primary" href="/contact">Discuss a Similar Project</a>
        </div>
      </div>
    </div>
  </div>

  <script>
    window.__BOOKRISE_CASES__ = ${JSON.stringify(PROJECTS)};
    window.__BOOKRISE_ADRIAN__ = ${JSON.stringify(ADRIAN_DELIVERABLES)};
  </script>
  <script>
    (function () {
      var DEFAULTS = { theme: 'system', textSize: 'standard', motion: 'smooth', contrast: 'standard' };
      var root = document.documentElement;

      function loadPrefs() {
        try {
          var raw = localStorage.getItem('bookrise-prefs');
          return raw ? Object.assign({}, DEFAULTS, JSON.parse(raw)) : Object.assign({}, DEFAULTS);
        } catch (e) { return Object.assign({}, DEFAULTS); }
      }
      function savePrefs(prefs) {
        try { localStorage.setItem('bookrise-prefs', JSON.stringify(prefs)); } catch (e) {}
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
          var active = prefs[btn.getAttribute('data-setting')] === btn.getAttribute('data-value');
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
        if (!drawer || !backdrop || drawer.hidden) return;
        backdrop.classList.remove('is-open');
        drawer.classList.remove('is-open');
        setTimeout(function () { backdrop.hidden = true; drawer.hidden = true; }, 220);
      }
      if (trigger) trigger.addEventListener('click', openSettings);
      document.querySelectorAll('[data-open-settings]').forEach(function (el) {
        el.addEventListener('click', function () { closeMobileMenu(); openSettings(); });
      });
      if (closeBtn) closeBtn.addEventListener('click', closeSettings);
      if (doneBtn) doneBtn.addEventListener('click', closeSettings);
      if (backdrop) backdrop.addEventListener('click', closeSettings);
      document.querySelectorAll('[data-setting]').forEach(function (btn) {
        btn.addEventListener('click', function () {
          prefs[btn.getAttribute('data-setting')] = btn.getAttribute('data-value');
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
          if (mobileDrawer.hidden) {
            mobileDrawer.hidden = false;
            requestAnimationFrame(function () { mobileDrawer.classList.add('is-open'); });
            menuBtn.setAttribute('aria-expanded', 'true');
            menuBtn.querySelector('span').textContent = 'Close';
          } else { closeMobileMenu(); }
        });
      }

      // Case Study & Adrian Lightbox Modal
      var caseBackdrop = document.getElementById('case-backdrop');
      var caseClose = document.getElementById('case-close');
      var casesData = window.__BOOKRISE_CASES__ || [];
      var adrianData = window.__BOOKRISE_ADRIAN__ || [];

      function showModal(imgSrc, imgAlt, meta, title, brief, deliverables, quote) {
        if (!caseBackdrop) return;
        document.getElementById('case-img').src = imgSrc;
        document.getElementById('case-img').alt = imgAlt;
        document.getElementById('case-meta').textContent = meta;
        document.getElementById('case-title').textContent = title;
        document.getElementById('case-brief').textContent = brief;
        var scopeWrap = document.getElementById('case-scope-wrap');
        var list = document.getElementById('case-deliverables');
        list.innerHTML = '';
        if (deliverables && deliverables.length) {
          scopeWrap.style.display = '';
          deliverables.forEach(function (d) {
            var li = document.createElement('li');
            li.textContent = d;
            list.appendChild(li);
          });
        } else {
          scopeWrap.style.display = 'none';
        }
        var qEl = document.getElementById('case-quote');
        if (quote) {
          qEl.style.display = '';
          qEl.textContent = quote;
        } else {
          qEl.style.display = 'none';
        }
        caseBackdrop.hidden = false;
        requestAnimationFrame(function () { caseBackdrop.classList.add('is-open'); });
        if (caseClose) caseClose.focus();
      }

      function closeCase() {
        if (!caseBackdrop || caseBackdrop.hidden) return;
        caseBackdrop.classList.remove('is-open');
        setTimeout(function () { caseBackdrop.hidden = true; }, 220);
      }

      document.querySelectorAll('[data-case-id]').forEach(function (btn) {
        btn.addEventListener('click', function () {
          var item = casesData.find(function (c) { return c.id === btn.getAttribute('data-case-id'); });
          if (item) showModal(item.image, item.title, item.genre + ' · ' + item.author, item.title, item.brief, item.deliverables, '“' + item.quote + '” — ' + item.author);
        });
      });

      document.querySelectorAll('[data-lightbox-id]').forEach(function (el) {
        function openAdrian() {
          var item = adrianData.find(function (d) { return d.id === el.getAttribute('data-lightbox-id'); });
          if (item) showModal(item.image, item.title, 'Adrian Emery · ' + item.volume, item.title, item.description, ['Client: Adrian Emery (The Temple of Understanding)', 'Deliverable Category: ' + item.categoryLabel, 'Produced by BookRise Centre'], '');
        }
        el.addEventListener('click', openAdrian);
        el.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openAdrian(); } });
      });

      if (caseClose) caseClose.addEventListener('click', closeCase);
      if (caseBackdrop) caseBackdrop.addEventListener('click', function (e) { if (e.target === caseBackdrop) closeCase(); });

      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') { closeSettings(); closeMobileMenu(); closeCase(); }
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

      // Reveal Observer
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
        }, { threshold: 0.08, rootMargin: '0px 0px -24px 0px' });
        revealItems.forEach(function (el) {
          if (el.getBoundingClientRect().top > window.innerHeight * 0.95) {
            el.classList.add('is-pending');
            observer.observe(el);
          }
        });
      }

      // Services Filter
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
              item.style.display = (cat === 'all' || item.getAttribute('data-category') === cat) ? '' : 'none';
            });
          });
        });
      }

      // Adrian Emery Portfolio Filter
      var adrianBtns = document.querySelectorAll('[data-adrian-filter]');
      var adrianCards = document.querySelectorAll('[data-adrian-cat]');
      if (adrianBtns.length && adrianCards.length) {
        adrianBtns.forEach(function (btn) {
          btn.addEventListener('click', function () {
            var cat = btn.getAttribute('data-adrian-filter');
            adrianBtns.forEach(function (b) {
              var active = b === btn;
              b.classList.toggle('is-active', active);
              b.setAttribute('aria-selected', active ? 'true' : 'false');
            });
            adrianCards.forEach(function (card) {
              card.style.display = (cat === 'all' || card.getAttribute('data-adrian-cat') === cat) ? '' : 'none';
            });
          });
        });
      }

      // Before / After Samples Toggle
      document.querySelectorAll('[data-sample-tab]').forEach(function (btn) {
        btn.addEventListener('click', function () {
          var target = btn.getAttribute('data-sample-tab');
          var box = btn.closest('.sample-compare-box');
          if (!box) return;
          box.querySelectorAll('[data-sample-tab]').forEach(function (b) {
            var active = b === btn;
            b.classList.toggle('is-active', active);
            b.setAttribute('aria-selected', active ? 'true' : 'false');
          });
          box.querySelectorAll('[data-sample-pane]').forEach(function (pane) {
            pane.classList.toggle('is-active', pane.getAttribute('data-sample-pane') === target);
          });
        });
      });

      // Pricing Scope Estimator
      var estServices = document.getElementById('est-services');
      var estWords = document.getElementById('est-words');
      var estPace = document.getElementById('est-pace');
      if (estServices && estWords && estPace) {
        function updateEstimator() {
          var checked = Array.prototype.slice.call(estServices.querySelectorAll('input:checked'));
          var modelEl = document.getElementById('est-model');
          var durEl = document.getElementById('est-duration');
          var sumEl = document.getElementById('est-summary');
          var listEl = document.getElementById('est-milestones');
          var linkEl = document.getElementById('est-apply-link');
          listEl.innerHTML = '';

          if (!checked.length) {
            modelEl.textContent = 'Select one or more services';
            durEl.textContent = 'Estimated duration: —';
            sumEl.textContent = 'Choose at least one service on the left to generate a recommended delivery sequence.';
            linkEl.href = '/contact';
            return;
          }

          var names = checked.map(function (c) { return c.value; });
          var wordFactor = Number(estWords.value) || 2;
          var paceFactor = Number(estPace.value) || 1;
          var baseWeeks = checked.length * 1.6 + wordFactor * 0.8;
          var minW = Math.max(1, Math.round(baseWeeks * paceFactor));
          var maxW = Math.max(minW + 1, Math.round((baseWeeks + 2) * paceFactor));

          modelEl.textContent = checked.length === 1
            ? 'Single-Discipline Scope'
            : checked.length <= 3
              ? 'Coordinated Multi-Service Scope'
              : 'Comprehensive Full-Launch Campaign';
          durEl.textContent = 'Estimated duration: ' + minW + ' to ' + maxW + ' weeks';
          sumEl.textContent = 'Selected focus: ' + names.join(', ') + '.';

          var milestones = [
            'Phase 1: Discovery review & formal written quotation',
            'Phase 2: Primary production (' + names.slice(0, 2).join(' & ') + ')',
            'Phase 3: Author review checkpoint & agreed revisions',
            'Phase 4: Final export handover & next-step roadmap',
          ];
          milestones.forEach(function (m) {
            var li = document.createElement('li');
            li.textContent = m;
            listEl.appendChild(li);
          });

          var serviceParam = checked.length === 1 ? names[0] : 'Multiple Services / Not Sure';
          var note = 'Scope Estimator Brief: Services [' + names.join(', ') + '], ' +
            'Length [' + estWords.options[estWords.selectedIndex].text + '], ' +
            'Pace [' + estPace.options[estPace.selectedIndex].text + '], ' +
            'Est. Window [' + minW + '-' + maxW + ' weeks].';
          linkEl.href = '/contact?service=' + encodeURIComponent(serviceParam) + '&brief=' + encodeURIComponent(note);
        }
        estServices.addEventListener('change', updateEstimator);
        estWords.addEventListener('change', updateEstimator);
        estPace.addEventListener('change', updateEstimator);
      }

      // Resources Readiness Checklist
      var checklistRoot = document.getElementById('checklist-root');
      if (checklistRoot) {
        var chks = Array.prototype.slice.call(checklistRoot.querySelectorAll('.readiness-chk'));
        var scoreEl = document.getElementById('chk-score');
        var stageEl = document.getElementById('chk-stage-label');
        var barEl = document.getElementById('chk-bar');
        var carryBtn = document.getElementById('chk-carry-btn');

        function loadChecklist() {
          try {
            var saved = JSON.parse(localStorage.getItem('bookrise-checklist') || '{}');
            chks.forEach(function (c) { c.checked = Boolean(saved[c.value]); });
          } catch (e) {}
        }
        function updateChecklist() {
          var state = {};
          var done = 0;
          var missing = [];
          chks.forEach(function (c) {
            state[c.value] = c.checked;
            if (c.checked) done++;
            else missing.push(c.getAttribute('data-label'));
          });
          try { localStorage.setItem('bookrise-checklist', JSON.stringify(state)); } catch (e) {}
          var pct = Math.round((done / chks.length) * 100);
          scoreEl.textContent = pct + '% Ready (' + done + ' / ' + chks.length + ')';
          barEl.style.width = pct + '%';
          var stageLabel = pct < 30 ? 'Early preparation stage' : pct < 70 ? 'Mid-production stage' : pct < 100 ? 'Pre-launch refinement stage' : 'Publication & outreach ready';
          stageEl.textContent = stageLabel;
          var brief = 'Readiness Checklist Summary: ' + pct + '% complete (' + done + '/' + chks.length + ', ' + stageLabel + '). Remaining items: ' + (missing.slice(0, 4).join('; ') || 'None — ready for launch support.');
          carryBtn.href = '/contact?service=' + encodeURIComponent('Publishing Support') + '&brief=' + encodeURIComponent(brief);
        }
        loadChecklist();
        updateChecklist();
        chks.forEach(function (c) { c.addEventListener('change', updateChecklist); });
        document.getElementById('chk-reset-btn').addEventListener('click', function () {
          chks.forEach(function (c) { c.checked = false; });
          updateChecklist();
        });
        document.getElementById('chk-print-btn').addEventListener('click', function () { window.print(); });
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
            var match = !q || item.textContent.toLowerCase().indexOf(q) !== -1;
            item.style.display = match ? '' : 'none';
            if (match) { visible++; if (q.length >= 2) item.open = true; }
          });
          if (faqCount) faqCount.textContent = 'Showing ' + visible + ' of ' + faqItems.length + ' questions';
        });
      }

      // Contact Form
      var enquiryForm = document.getElementById('enquiry-form');
      if (enquiryForm) {
        var serviceSelect = document.getElementById('service-select');
        var msgInput = document.getElementById('message-input');
        var charCount = document.getElementById('char-count');
        var params = new URLSearchParams(window.location.search);
        var reqService = params.get('service');
        var reqBrief = params.get('brief');

        if (reqService && serviceSelect) {
          for (var i = 0; i < serviceSelect.options.length; i++) {
            if (serviceSelect.options[i].text === reqService) { serviceSelect.selectedIndex = i; break; }
          }
        }
        if (reqBrief && msgInput && !msgInput.value) {
          msgInput.value = reqBrief + '\\n\\nAdditional project notes: ';
        }
        if (msgInput && charCount) {
          charCount.textContent = msgInput.value.length + ' / 5000';
          msgInput.addEventListener('input', function () { charCount.textContent = msgInput.value.length + ' / 5000'; });
        }

        enquiryForm.addEventListener('submit', async function (e) {
          e.preventDefault();
          var statusEl = document.getElementById('form-status');
          var receiptEl = document.getElementById('enquiry-receipt');
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
            contactMethod: fd.get('contactMethod'),
            preferredWindow: fd.get('preferredWindow'),
            timezone: fd.get('timezone'),
            message: fd.get('message'),
            consent: fd.get('consent') === 'on',
            website: fd.get('website'),
          };
          submitBtn.disabled = true;
          statusEl.className = 'form-status';
          statusEl.textContent = 'Submitting your enquiry...';
          receiptEl.hidden = true;

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
            statusEl.textContent = 'Thank you. Your enquiry has been received.';
            receiptEl.innerHTML =
              '<div class="eyebrow" style="margin-bottom:6px">Enquiry Confirmation Receipt</div>' +
              '<p style="margin:0 0 8px;font-weight:700;color:var(--ink-strong)">Reference #' + (data.referenceId || 'BR-' + Date.now()) + '</p>' +
              '<p style="margin:0 0 8px;font-size:0.875rem;color:var(--muted)">Service: ' + payload.service + ' · Consultation: ' + payload.contactMethod + ' (' + payload.preferredWindow + ', ' + payload.timezone + ')</p>' +
              '<button type="button" class="btn btn-outline" onclick="window.print()" style="min-height:36px;padding:6px 14px">Print Confirmation Receipt</button>';
            receiptEl.hidden = false;
          } catch (err) {
            statusEl.className = 'form-status error';
            statusEl.textContent = err.message || 'Please try again or email hello@bookrisecentre.com.';
          } finally {
            submitBtn.disabled = false;
          }
        });
      }

      // Admin Enquiries Dashboard
      var adminLoadingCard = document.getElementById('admin-loading-card');
      var adminSetupCard = document.getElementById('admin-setup-card');
      var adminAuthCard = document.getElementById('admin-auth-card');
      var adminBoard = document.getElementById('admin-board');
      if (adminAuthCard && adminBoard && adminSetupCard) {
        var adminToken = '';
        var loginForm = document.getElementById('admin-login-form');
        var authStatus = document.getElementById('admin-auth-status');
        var authHint = document.getElementById('admin-auth-hint');
        var listEl = document.getElementById('admin-list');
        var filterSel = document.getElementById('admin-status-filter');
        var countLbl = document.getElementById('admin-count-label');
        var allRows = [];

        function renderRows() {
          var f = filterSel.value;
          var rows = f === 'all' ? allRows : allRows.filter(function (r) { return r.status === f; });
          countLbl.textContent = 'Showing ' + rows.length + ' of ' + allRows.length + ' enquiries';
          listEl.innerHTML = '';
          if (!rows.length) {
            listEl.innerHTML = '<div class="card"><p>No enquiries match this filter yet.</p></div>';
            return;
          }
          rows.forEach(function (row) {
            var card = document.createElement('article');
            card.className = 'card';
            var head = document.createElement('div');
            head.style.cssText = 'display:flex;justify-content:space-between;gap:12px;flex-wrap:wrap;margin-bottom:8px';
            var title = document.createElement('strong');
            title.textContent = row.full_name + ' (' + row.email + ')';
            var sel = document.createElement('select');
            sel.className = 'field-input';
            sel.style.cssText = 'width:auto;min-height:36px;padding:4px 10px';
            ['new', 'in_review', 'quoted', 'archived'].forEach(function (st) {
              var opt = document.createElement('option');
              opt.value = st;
              opt.textContent = st;
              if (row.status === st) opt.selected = true;
              sel.appendChild(opt);
            });
            sel.addEventListener('change', async function () {
              await fetch('/api/enquiries/' + row.id, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + adminToken },
                body: JSON.stringify({ status: sel.value }),
              });
              row.status = sel.value;
            });
            head.appendChild(title);
            head.appendChild(sel);
            var meta = document.createElement('div');
            meta.style.cssText = 'font-size:0.8125rem;color:var(--gold);margin-bottom:8px';
            meta.textContent = row.service + ' · ' + (row.book_title || 'Untitled') + ' · ' + new Date(row.created_at).toLocaleString();
            var msg = document.createElement('p');
            msg.style.whiteSpace = 'pre-wrap';
            msg.textContent = row.message;
            card.appendChild(head);
            card.appendChild(meta);
            card.appendChild(msg);
            listEl.appendChild(card);
          });
        }

        async function loadEnquiries() {
          var resp = await fetch('/api/enquiries', { headers: { 'Authorization': 'Bearer ' + adminToken } });
          if (!resp.ok) {
            var errData = await resp.json().catch(function () { return {}; });
            throw new Error(errData.error || 'Authentication failed');
          }
          var data = await resp.json();
          allRows = data.enquiries || [];
          adminSetupCard.hidden = true;
          adminAuthCard.hidden = true;
          adminBoard.hidden = false;
          renderRows();
        }

        async function initAdminView() {
          try {
            var res = await fetch('/api/admin/status');
            var info = await res.json();
            if (adminLoadingCard) adminLoadingCard.hidden = true;
            if (info.sessionReady === false) {
              adminSetupCard.hidden = true;
              adminAuthCard.hidden = false;
              if (setupForm) setupForm.hidden = true;
              if (loginForm) loginForm.hidden = true;
              if (authHint) {
                authHint.textContent = 'The admin dashboard is not ready yet. The site administrator must configure ADMIN_SESSION_SECRET as a stable secret of at least 32 characters in Cloudflare Worker secrets.';
              }
              return;
            }
            adminSetupCard.hidden = true;
            if (authHint) {
              authHint.textContent = info.mode === 'env'
                ? 'Enter your configured environment ADMIN_PASSCODE to view and manage enquiries.'
                : 'Enter your team admin passcode to view and manage submitted author enquiries.';
            }
            adminAuthCard.hidden = false;
          } catch (_e) {
            if (adminLoadingCard) adminLoadingCard.hidden = true;
            adminAuthCard.hidden = false;
          }
        }

        initAdminView();

        loginForm.addEventListener('submit', async function (e) {
          e.preventDefault();
          var pass = document.getElementById('admin-passcode-input').value;
          authStatus.className = 'form-status';
          authStatus.textContent = 'Verifying...';
          try {
            var loginResp = await fetch('/api/admin/login', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ passcode: pass }),
            });
            var loginData = await loginResp.json().catch(function () { return {}; });
            if (!loginResp.ok || !loginData.token) {
              throw new Error(loginData.error || 'Invalid admin passcode.');
            }
            adminToken = loginData.token;
            loginForm.reset();
            await loadEnquiries();
          } catch (err) {
            authStatus.className = 'form-status error';
            authStatus.textContent = err.message;
          }
        });

        filterSel.addEventListener('change', renderRows);
        document.getElementById('admin-refresh-btn').addEventListener('click', function () {
          if (adminToken) loadEnquiries();
        });
        document.getElementById('admin-logout-btn').addEventListener('click', function () {
          adminToken = '';
          allRows = [];
          adminBoard.hidden = true;
          authStatus.className = 'form-status';
          authStatus.textContent = '';
          adminAuthCard.hidden = false;
        });
      }
    })();
  </script>
</body>
</html>`;
}

function hasSessionSecret(env) {
  return Boolean(
    env &&
    typeof env.ADMIN_SESSION_SECRET === 'string' &&
    env.ADMIN_SESSION_SECRET.length >= 32
  );
}

function getSessionSecret(env) {
  if (!hasSessionSecret(env)) {
    throw new Error('ADMIN_SESSION_SECRET must be configured as a stable secret of at least 32 characters.');
  }
  return env.ADMIN_SESSION_SECRET;
}

function toHex(buf) {
  return Array.from(new Uint8Array(buf), (b) => b.toString(16).padStart(2, '0')).join('');
}

function fromHex(hex) {
  if (typeof hex !== 'string' || hex.length % 2 !== 0 || !/^[0-9a-f]+$/i.test(hex)) return null;
  const out = new Uint8Array(hex.length / 2);
  for (let i = 0; i < out.length; i++) {
    out[i] = parseInt(hex.slice(i * 2, i * 2 + 2), 16);
  }
  return out;
}

async function constantTimeEqual(a, b) {
  const enc = new TextEncoder();
  const ha = await crypto.subtle.digest('SHA-256', enc.encode(String(a)));
  const hb = await crypto.subtle.digest('SHA-256', enc.encode(String(b)));
  const ba = new Uint8Array(ha);
  const bb = new Uint8Array(hb);
  let diff = 0;
  for (let i = 0; i < ba.length; i++) diff |= ba[i] ^ bb[i];
  return diff === 0;
}

async function hashPasscode(passcode) {
  const salt = new Uint8Array(16);
  crypto.getRandomValues(salt);
  const key = await crypto.subtle.importKey('raw', new TextEncoder().encode(passcode), 'PBKDF2', false, ['deriveBits']);
  const derived = await crypto.subtle.deriveBits({ name: 'PBKDF2', salt, iterations: 100000, hash: 'SHA-256' }, key, 256);
  return `pbkdf2_sha256:100000:${toHex(salt)}:${toHex(derived)}`;
}

async function verifyPasscodeHash(passcode, stored) {
  if (typeof stored !== 'string') return false;
  const parts = stored.split(':');
  if (parts.length !== 4 || parts[0] !== 'pbkdf2_sha256') return false;
  const iterations = Number(parts[1]);
  const salt = fromHex(parts[2]);
  const expected = fromHex(parts[3]);
  if (!Number.isInteger(iterations) || iterations < 10000 || !salt || !expected) return false;
  const key = await crypto.subtle.importKey('raw', new TextEncoder().encode(passcode), 'PBKDF2', false, ['deriveBits']);
  const derived = new Uint8Array(await crypto.subtle.deriveBits({ name: 'PBKDF2', salt, iterations, hash: 'SHA-256' }, key, 256));
  if (derived.length !== expected.length) return false;
  let diff = 0;
  for (let i = 0; i < derived.length; i++) diff |= derived[i] ^ expected[i];
  return diff === 0;
}

async function signAdminToken(env, mode) {
  const exp = Date.now() + 8 * 60 * 60 * 1000;
  const payload = `${mode}.${exp}`;
  const key = await crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(getSessionSecret(env)),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  );
  const sig = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(payload));
  return `${payload}.${toHex(sig)}`;
}

async function verifyAdminToken(env, token, currentMode) {
  const parts = String(token || '').split('.');
  if (parts.length !== 3) return false;
  const [mode, expStr, sigHex] = parts;
  const exp = Number(expStr);
  if (mode !== currentMode || !Number.isFinite(exp) || Date.now() > exp) return false;
  const sigBytes = fromHex(sigHex);
  if (!sigBytes) return false;
  const payload = `${mode}.${expStr}`;
  const key = await crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(getSessionSecret(env)),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  );
  const expected = new Uint8Array(await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(payload)));
  if (sigBytes.length !== expected.length) return false;
  let diff = 0;
  for (let i = 0; i < sigBytes.length; i++) diff |= sigBytes[i] ^ expected[i];
  return diff === 0;
}

async function getAdminAuthState(env) {
  const envPasscode = env && env.ADMIN_PASSCODE ? String(env.ADMIN_PASSCODE) : '';
  if (envPasscode) {
    return { mode: 'env', envPasscode, storedHash: '' };
  }
  if (env && env.DB) {
    try {
      const row = await env.DB.prepare('SELECT value FROM admin_settings WHERE key=?')
        .bind('admin_passcode_hash')
        .first();
      if (row && row.value) {
        return { mode: 'claimed', envPasscode: '', storedHash: row.value };
      }
    } catch {
      // Fallback if admin_settings table is not yet migrated in D1
    }
  }
  return { mode: 'unclaimed', envPasscode: '', storedHash: '' };
}

export default {
  async fetch(request, env) {
    const u = new URL(request.url);
    const json = (v, s) =>
      new Response(JSON.stringify(v), {
        status: s,
        headers: { 'content-type': 'application/json', 'cache-control': 'no-store' },
      });

    // Serve repository image assets through the Worker so every page uses a stable same-origin URL.
    if (u.pathname.startsWith('/public/assets/') || u.pathname.startsWith('/src/assets/images/')) {
      const assetUrl = 'https://raw.githubusercontent.com/ralphpublishing-collab/BookRise-website-new/main' + u.pathname;
      const assetResponse = await fetch(assetUrl, {
        headers: { 'Accept': 'image/avif,image/webp,image/apng,image/*,*/*;q=0.8' },
      });
      if (!assetResponse.ok) {
        return new Response('Image asset not found', {
          status: assetResponse.status,
          headers: { 'cache-control': 'public, max-age=60', 'x-content-type-options': 'nosniff' },
        });
      }
      const headers = new Headers(assetResponse.headers);
      headers.set('cache-control', 'public, max-age=86400, s-maxage=604800, stale-while-revalidate=86400');
      headers.set('x-content-type-options', 'nosniff');
      headers.delete('content-security-policy');
      return new Response(request.method === 'HEAD' ? null : assetResponse.body, {
        status: 200,
        headers,
      });
    }

    if (u.pathname === '/api/enquiry') {
      if (request.method !== 'POST') return json({ error: 'Method not allowed' }, 405);

      const origin = request.headers.get('Origin');
      if (origin && new URL(origin).host !== u.host) {
        return json({ error: 'Origin not allowed' }, 403);
      }

      if (!env.DB) {
        return json({ error: 'Enquiry service temporarily unavailable. Please email hello@bookrisecentre.com.' }, 503);
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
      const contactMethod = v(d.contactMethod, 80);
      const preferredWindow = v(d.preferredWindow, 80);
      const timezone = v(d.timezone, 80);
      const rawMessage = v(d.message, 4600);

      if (d.website) return json({ ok: true }, 200);

      if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !service || rawMessage.length < 10 || d.consent !== true) {
        return json({ error: 'Please complete required fields and provide a valid email address.' }, 400);
      }

      const consultationMeta =
        contactMethod || preferredWindow || timezone
          ? `\n\n[Consultation Preference: ${contactMethod || 'Email'} | ${preferredWindow || 'Flexible'} | ${timezone || 'Unspecified'}]`
          : '';
      const message = (rawMessage + consultationMeta).slice(0, 5000);

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

      const result = await env.DB.prepare(
        'INSERT INTO enquiries (created_at,full_name,email,book_title,genre,service,project_stage,timeline,message,consent,source_ip_hash) VALUES (?,?,?,?,?,?,?,?,?,?,?)'
      )
        .bind(new Date().toISOString(), name, email, title, genre, service, stage, timeline, message, 1, ipHash)
        .run();

      const referenceId = `BR-${String((result && result.meta && result.meta.last_row_id) || Date.now()).padStart(4, '0')}`;

      // Optional automated email alert hook when RESEND_API_KEY is configured
      if (env.RESEND_API_KEY) {
        const notifyTo = env.ENQUIRY_NOTIFY_EMAIL || 'hello@bookrisecentre.com';
        const fromAddr = env.ENQUIRY_FROM_EMAIL || 'noreply@bookrisecentre.com';
        try {
          await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
              Authorization: `Bearer ${env.RESEND_API_KEY}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              from: fromAddr,
              to: [notifyTo],
              reply_to: email,
              subject: `[BookRise Enquiry ${referenceId}] ${service} — ${name}`,
              text: `Reference: ${referenceId}\nAuthor: ${name} (${email})\nTitle: ${title || 'Not specified'}\nGenre: ${genre || 'Not specified'}\nService: ${service}\nStage: ${stage || 'Not specified'}\nTimeline: ${timeline || 'Not specified'}\n\n${message}`,
            }),
          });
        } catch (err) {
          console.warn('Email notification failed:', err.message);
        }
      }

      return json({ ok: true, referenceId }, 201);
    }

    if (u.pathname === '/api/admin/status') {
      if (request.method !== 'GET') return json({ error: 'Method not allowed' }, 405);
      const state = await getAdminAuthState(env);
      return json({ configured: state.mode !== 'unclaimed', mode: state.mode, sessionReady: hasSessionSecret(env) }, 200);
    }

    if (u.pathname === '/api/admin/claim') {
      return json({ error: 'First-time admin setup has been disabled. Use the existing team admin passcode sign-in.' }, 410);
    }

    if (u.pathname === '/api/admin/login') {
      if (request.method !== 'POST') return json({ error: 'Method not allowed' }, 405);
      const origin = request.headers.get('Origin');
      if (origin && new URL(origin).host !== u.host) {
        return json({ error: 'Origin not allowed' }, 403);
      }
      if (!hasSessionSecret(env)) return json({ error: 'Admin session signing is not configured. Set ADMIN_SESSION_SECRET in Cloudflare Worker secrets before logging in.' }, 503);
      const state = await getAdminAuthState(env);
      if (state.mode === 'unclaimed') {
        return json({ error: 'Set your initial admin passcode first.' }, 409);
      }
      let bodyData;
      try {
        bodyData = await request.json();
      } catch {
        return json({ error: 'Invalid request body.' }, 400);
      }
      const passcode = typeof bodyData.passcode === 'string' ? bodyData.passcode : '';
      if (!passcode) return json({ error: 'Passcode is required.' }, 400);

      let valid = false;
      if (state.mode === 'env') {
        valid = await constantTimeEqual(passcode, state.envPasscode);
      } else if (state.mode === 'claimed') {
        valid = await verifyPasscodeHash(passcode, state.storedHash);
      }
      if (!valid) {
        return json({ error: 'Invalid admin passcode.' }, 401);
      }
      const token = await signAdminToken(env, state.mode);
      return json({ ok: true, token }, 200);
    }

    if (u.pathname === '/api/enquiries' || u.pathname.startsWith('/api/enquiries/')) {
      if (!hasSessionSecret(env)) return json({ error: 'Admin session signing is not configured. Set ADMIN_SESSION_SECRET in Cloudflare Worker secrets.' }, 503);
      const state = await getAdminAuthState(env);
      if (state.mode === 'unclaimed') {
        return json({ error: 'Admin passcode must be configured before viewing enquiries.' }, 503);
      }
      const auth = request.headers.get('Authorization') || '';
      const provided = auth.startsWith('Bearer ') ? auth.slice(7).trim() : '';
      const ok = provided ? await verifyAdminToken(env, provided, state.mode) : false;
      if (!ok) {
        return json({ error: 'Unauthorized or expired session.' }, 401);
      }

      if (u.pathname === '/api/enquiries' && request.method === 'GET') {
        const rows = await env.DB.prepare('SELECT * FROM enquiries ORDER BY created_at DESC').all();
        return json({ enquiries: (rows && rows.results) || [] }, 200);
      }

      if (u.pathname.startsWith('/api/enquiries/') && request.method === 'PATCH') {
        const id = Number(u.pathname.split('/').pop());
        let d;
        try {
          d = await request.json();
        } catch {
          return json({ error: 'Invalid body.' }, 400);
        }
        const allowed = ['new', 'in_review', 'quoted', 'archived'];
        if (!Number.isInteger(id) || !allowed.includes(d.status)) {
          return json({ error: 'Invalid status or ID.' }, 400);
        }
        await env.DB.prepare('UPDATE enquiries SET status=? WHERE id=?').bind(d.status, id).run();
        return json({ ok: true }, 200);
      }

      return json({ error: 'Method not allowed' }, 405);
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

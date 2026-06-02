import type { Dictionary } from './types'
import { feeTableSectionsEn } from '../data/feeTables.en'

export const en: Dictionary = {
  meta: {
    siteTitle: 'Nippon Systems | Technical Coding · E-Commerce · CMS Development',
    siteDescription:
      'Nippon Systems (日本システムズ) — B2B development partner for WordPress, e-commerce, CMS, React/Next.js, and web animation',
  },
  nav: {
    home: 'Home',
    strengths: 'Strengths',
    services: 'Services',
    fee: 'Pricing',
    faq: 'FAQ',
    works: 'Works',
    blog: 'Blog',
    staff: 'Team',
    company: 'Company',
  },
  common: {
    freeConsult: 'Free Consultation',
    freeConsultShort: 'Free Consult',
    contact: 'Contact Us',
    documentRequest: 'Materials',
    downloadDocs: 'Download Brochure',
    readMore: 'Read More',
    viewAll: 'View All',
    submit: 'Submit',
    home: 'Home',
    breadcrumbHome: 'Home',
    phoneHours: 'Weekdays 10:00–18:00',
    feelFree: 'Feel free to reach out',
    mail: 'Email',
    menu: 'Menu',
    backToTop: 'Back to Top',
    officialSite: 'Official Site →',
    sitemap: 'Sitemap',
    office: 'Offices',
    tokyoOffice: 'Tokyo HQ',
    osakaOffice: 'Osaka Office',
    relatedWorks: 'Related Projects',
    noResults: 'No matching projects found.',
    category: 'Category',
  },
  cta: {
    labelEn: 'Consultation / Quotation',
    title: 'Consultation & Quotes',
    chatwork: 'Chat on ChatWork',
  },
  footer: {
    seo: 'Coding Outsourcing · WordPress · CMS · E-Commerce Development · Web Animation · React/Next.js · Shopify · EC-CUBE · MovableType · Headless CMS · Development Partner for Agencies',
    copyright: '© Nippon Systems Inc. All rights reserved.',
  },
  home: {
    heroEyebrow: 'Technical Coding Partner',
    heroTitle1:
      'We build reliable digital systems, online stores, CMS platforms, and AI-powered solutions to help businesses improve efficiency, increase sales, and grow faster.',
    heroTitle2: '',
    heroDesc:
      'WordPress, Shopify, EC-CUBE, React/Next.js, and web animation. We serve as a development partner for agencies and businesses, delivering high-quality implementation.',
    achievements: [
      { label: 'Total Pages Coded', unit: 'pages' },
      { label: 'Total Client Companies', unit: 'companies' },
      { label: 'Total Projects', unit: 'projects' },
    ],
    concerns: {
      title: "WHAT'S YOUR CONCERN",
      subtitle: 'Coding challenges that never go away…',
    },
    servicesPreview: { en: 'Services', ja: 'Services', viewAll: 'View All Services' },
    price: { en: 'Price', ja: 'Base Rates', viewDetail: 'View Pricing Details' },
    works: { en: 'Works', ja: 'Case Studies', viewAll: 'View All Projects' },
    faq: { en: 'FAQ', ja: 'Frequently Asked Questions', viewAll: 'View All FAQs' },
    blog: { en: 'Blog', ja: 'Development Blog', viewAll: 'View All Posts' },
    company: {
      en: 'Who We Are',
      ja: 'About Us',
      desc: 'Since our founding in 2010, Nippon Systems has provided web coding and e-commerce/CMS development for agencies, advertising firms, and businesses. Our team of 50+ engineers balances quality and speed.',
      viewAll: 'View Company Profile',
    },
    nextSection: 'Go to next section',
  },
  reasons: {
    section: {
      enTitle: 'REASONS TO BE CHOSEN',
      jaSubtitle: 'Why Choose Us',
      bannerText: 'Nippon Systems solves your front-end and coding challenges.',
      ctaLabel: 'Learn More About Our Strengths',
    },
    page: { en: 'our strength', ja: 'Why Choose Us' },
    items: [
      {
        number: '01',
        title: 'Reliable Quality & Expert Guidance',
        gridTitle: 'Reliable Quality & Expert Guidance',
        description:
          'End-to-end quality control from requirements through implementation and QA. We interpret design comps accurately and propose practical, buildable solutions.',
        imageAlt: 'Quality assurance illustration',
        icon: 'medal',
      },
      {
        number: '02',
        title: 'Long-Term Partnership',
        gridTitle: 'Stable Long-Term Development Partner',
        description:
          'Beyond one-off coding, we support ongoing maintenance, updates, and feature additions — working as an extension of your team.',
        imageAlt: 'Partnership illustration',
        icon: 'handshake',
      },
      {
        number: '03',
        title: 'Advanced Animation Implementation',
        gridTitle: 'Advanced Animation Implementation',
        description:
          'Rich motion using GSAP, CSS, and Three.js. We specialize in interactions that elevate brand experience.',
        imageAlt: 'Animation implementation illustration',
        icon: 'motion',
      },
      {
        number: '04',
        title: '50+ Coding Specialists',
        gridTitle: '50+ Coding Specialists',
        description:
          'Teams organized by expertise — front-end, CMS, e-commerce, WordPress, and more. We scale flexibly for large projects.',
        imageAlt: 'Development team illustration',
        icon: 'team',
      },
      {
        number: '05',
        title: 'Client Meeting Participation',
        gridTitle: 'Requirements & Meeting Support',
        description:
          'We join kickoffs and progress meetings as needed, providing technical explanations and smooth schedule coordination.',
        imageAlt: 'Meeting participation illustration',
        icon: 'meeting',
      },
      {
        number: '06',
        title: 'E-Commerce & Cart Systems',
        gridTitle: 'E-Commerce & Cart System Expertise',
        description:
          'Extensive experience building and customizing Shopify, EC-CUBE, Makeshop, ecforce, and other major e-commerce platforms.',
        imageAlt: 'E-commerce development illustration',
        icon: 'ec',
      },
    ],
  },
  concerns: {
    items: [
      { id: '1', text: 'We need high-quality, reliable coding', side: 'left' },
      { id: '2', text: 'We need complex WordPress customization', side: 'left' },
      { id: '3', text: 'We want to build an e-commerce site on Shopify, Makeshop, or EC-CUBE', side: 'left' },
      { id: '4', text: 'We want rich web animations implemented', side: 'left' },
      { id: '5', text: 'We need advice on web development challenges', side: 'right' },
      { id: '6', text: 'We want development with React/Next.js and modern stacks', side: 'right' },
      { id: '7', text: 'We need a site integrated with other services', side: 'right' },
      { id: '8', text: 'We want to commission from the design stage', side: 'right' },
    ],
  },
  services: {
    page: { en: 'SERVICES', ja: 'Services' },
    items: [
      {
        number: '01',
        title: 'AI Chatbots & Customer Support',
        description: 'FAQ automation, live-agent handoff, and inquiry form integration — reduce support load with on-site chat.',
        tags: ['AI', 'Support'],
      },
      {
        number: '02',
        title: 'AI-Powered Business Automation',
        description: 'Automate repetitive tasks, data entry, aggregation, and internal workflows with AI-assisted tooling.',
        tags: ['AI', 'Automation'],
      },
      {
        number: '03',
        title: 'API Development & Integrations',
        description: 'REST/GraphQL API design and secure connections to payment, CRM, inventory, and third-party services.',
        tags: ['API', 'Integration'],
      },
      {
        number: '04',
        title: 'Cloud Infrastructure & DevOps',
        description: 'Build on AWS/GCP/Azure with CI/CD pipelines, monitoring, and scalable production infrastructure.',
        tags: ['Cloud', 'DevOps'],
      },
      {
        number: '05',
        title: 'CMS Development & Integration',
        description: 'WordPress, MovableType, and headless CMS builds, customization, and content operations support.',
        tags: ['CMS', 'Corporate'],
      },
      {
        number: '06',
        title: 'CRM & Customer Management',
        description: 'Unified customer data, segmented outreach, and visibility into inquiries and sales activity.',
        tags: ['CRM', 'Customer Data'],
      },
      {
        number: '07',
        title: 'Custom Web Application Development',
        description: 'Tailored web apps for business systems, membership sites, admin panels, and internal tools.',
        tags: ['Web App', 'Custom Build'],
      },
      {
        number: '08',
        title: 'Dashboard & Analytics Platforms',
        description: 'KPI visualization, automated reporting, and BI integrations for data-driven decision making.',
        tags: ['Analytics', 'Dashboard'],
      },
      {
        number: '09',
        title: 'E-Commerce Store Development',
        description: 'Store builds and redesigns on Shopify, EC-CUBE, Makeshop, and other e-commerce platforms.',
        tags: ['E-Commerce', 'Store Build'],
      },
      {
        number: '10',
        title: 'ERP & Inventory Management',
        description: 'Inventory, order, and logistics data integration to streamline back-office operations.',
        tags: ['ERP', 'Inventory'],
      },
      {
        number: '11',
        title: 'Maintenance, Optimization & Support',
        description: 'Ongoing updates, performance tuning, security patches, and dedicated technical support.',
        tags: ['Maintenance', 'Support'],
      },
      {
        number: '12',
        title: 'Marketplace Integration',
        description: 'Listing, inventory sync, and order integration for Amazon, Rakuten, Yahoo Shopping, and more.',
        tags: ['E-Commerce', 'Marketplace'],
      },
      {
        number: '13',
        title: 'Mobile App Development',
        description: 'Native and cross-platform iOS/Android app design and development from concept to release.',
        tags: ['Mobile', 'Apps'],
      },
      {
        number: '14',
        title: 'SaaS Platform Development',
        description: 'Multi-tenant architecture, billing, and role management for SaaS product launches.',
        tags: ['SaaS', 'Platform'],
      },
      {
        number: '15',
        title: 'Shopify / eBay / Amazon Automation',
        description: 'Cross-border and multi-channel selling automation with inventory, order, and shipping sync.',
        tags: ['E-Commerce', 'Automation'],
      },
      {
        number: '16',
        title: 'UI/UX Design & Front-End Engineering',
        description: 'Design systems, responsive UI, and high-quality React/Next.js front-end implementation.',
        tags: ['UI/UX', 'Front-End'],
      },
      {
        number: '17',
        title: 'Workflow Automation',
        description: 'Approval flows, notifications, and tool integrations to automate internal business processes.',
        tags: ['Automation', 'Workflow'],
      },
    ],
  },
  fee: {
    page: { en: 'price', ja: 'Pricing' },
    basicTitle: 'Base Rates',
    pageFeeTitle: 'Page & Coding Fees (Estimates)',
    pageTablesTitle: 'Pricing Details',
    tableBadges: { basic: 'Basic', mid: 'Mid', high: 'High' },
    tableNotes: [
      'Figures are estimates and vary by scope, page count, and complexity.',
      'No warranty, legal liability, or detailed handover documentation included.',
      'Assumes templates, remote delivery, and minimal scope.',
      'Hosting and domains quoted separately when needed.',
    ],
    tableSections: feeTableSectionsEn,
    notesTitle: 'Notes',
    notes: [
      'Prices exclude tax.',
      'Rates vary based on scope, timeline, and complexity.',
      'Quotes are free. Please contact us with no obligation.',
    ],
    requestQuote: 'Request a Quote',
    pricing: [
      {
        label: 'Base Rate',
        price: '6,000',
        unit: 'JPY / hour',
        note: 'E-commerce development from 8,000 JPY / hour',
      },
      {
        label: 'E-Commerce Development',
        price: '8,000',
        unit: 'JPY / hour',
        note: 'Shopify, EC-CUBE, etc.',
      },
      {
        label: 'Project Management Fee',
        price: '20',
        unit: '%',
        prefix: 'Approx.',
        note: 'Typical PM fee relative to labor cost',
      },
    ],
  },
  faq: {
    page: { en: 'FAQ', ja: 'Frequently Asked Questions' },
    categories: {
      all: 'All',
      beforeOrder: 'Before Ordering',
      progress: 'Process & Quality',
      tech: 'Technical',
      fee: 'Pricing',
    },
    items: [
      {
        id: '001',
        category: 'beforeOrder',
        question: 'Can we meet in person before placing an order?',
        answer:
          'Yes. We offer consultations at our Tokyo or Osaka offices, or online. Please share your preferred date and time via the contact form.',
      },
      {
        id: '002',
        category: 'progress',
        question: 'Can you attend our client meetings?',
        answer:
          'Depending on project scope and your needs, we can join progress and review meetings, providing technical explanations and schedule coordination.',
      },
      {
        id: '003',
        category: 'tech',
        question: 'Do you support responsive coding?',
        answer:
          'Multi-device support for smartphone, tablet, and desktop is standard. Breakpoints and display specs are agreed upon in advance.',
      },
      {
        id: '004',
        category: 'tech',
        question: 'Can we request landing page coding only?',
        answer:
          'Yes. We accept standalone LP coding. Provide design files (Figma, XD, Photoshop, etc.) and we can proceed.',
      },
      {
        id: '005',
        category: 'tech',
        question: 'Can you build or modify WordPress sites?',
        answer:
          'We cover theme development, plugin selection, custom fields, and existing site updates across a wide range of needs.',
      },
      {
        id: '006',
        category: 'fee',
        question: 'How are estimates calculated?',
        answer:
          'We provide estimates based on labor (hourly rate) or by page/feature unit. PM fees are typically an additional 20%. See the pricing page for details.',
      },
    ],
  },
  works: {
    page: { en: 'works', ja: 'Case Studies' },
    label: 'Case Studies by Service (Advanced)',
    filterAll: 'All',
    highDifficulty: 'Advanced',
    challenge: 'Challenge',
    technicalDifficulty: 'Technical Complexity',
    solution: 'Solution',
    result: 'Result',
  },
  blog: {
    page: { en: 'Blog', ja: 'Development Blog' },
    filters: ['All', 'Technical', 'E-Commerce', 'CMS', 'Animation', 'Operations'],
    items: [
      {
        id: '1',
        title: 'Building a Fast Corporate Site with Next.js 15 and Headless CMS',
        date: '2026.05.20',
        category: 'Technical',
        excerpt: 'Key performance optimization strategies for Jamstack architecture.',
      },
      {
        id: '2',
        title: '5 Essentials for Shopify Liquid Theme Updates',
        date: '2026.05.12',
        category: 'E-Commerce',
        excerpt: 'Implementation considerations when refreshing an existing store design.',
      },
      {
        id: '3',
        title: 'Designing Scroll Effects with GSAP ScrollTrigger',
        date: '2026.05.01',
        category: 'Animation',
        excerpt: 'Patterns that enhance experience without excessive motion.',
      },
    ],
  },
  staff: {
    page: { en: 'Staff', ja: 'Our Team' },
    items: [
      { id: '1', name: 'Kenta Tanaka', role: 'Tech Lead', specialty: 'React / Next.js' },
      { id: '2', name: 'Misaki Suzuki', role: 'Front-End Developer', specialty: 'WordPress / CMS' },
      { id: '3', name: 'Daisuke Sato', role: 'E-Commerce Engineer', specialty: 'Shopify / EC-CUBE' },
      { id: '4', name: 'Ayumi Yamamoto', role: 'Animation Specialist', specialty: 'GSAP / CSS Motion' },
      { id: '5', name: 'Makoto Ito', role: 'Project Manager', specialty: 'Requirements / Project Management' },
      { id: '6', name: 'Ryo Takahashi', role: 'Front-End Developer', specialty: 'MovableType / LP' },
    ],
  },
  company: {
    page: { en: 'Company', ja: 'About Us' },
    profile: { en: 'Profile', ja: 'Company Information' },
    executives: [
      {
        id: 'ceo',
        role: 'President & CEO',
        roleEn: 'CEO',
        name: 'Yuki Maeda',
        message:
          'As your web development partner, we pursue quality, speed, and proactive proposals that drive business growth. From small projects to long-term partnerships — we welcome your inquiry.',
      },
    ],
    rows: [
      { label: 'Company Name', value: 'Nippon Systems Inc.' },
      { label: 'Representative', value: 'Yuki Maeda, President & CEO' },
      { label: 'Founded', value: 'April 2010' },
      { label: 'Capital', value: '¥30 million' },
      { label: 'Location (Tokyo)', value: '5F XX Building, 1-2-3 XX, Shibuya-ku, Tokyo' },
      { label: 'Location (Osaka)', value: '4-5-6 XX, Kita-ku, Osaka-shi, Osaka' },
      { label: 'Business', value: 'Web coding, e-commerce/CMS development, front-end development, web animation production' },
      { label: 'Employees', value: '85 (as of April 2026)' },
    ],
  },
  contact: {
    page: { en: 'Contact', ja: 'Contact Us' },
    company: 'Company Name',
    name: 'Your Name',
    email: 'Email Address',
    message: 'Message',
    success: 'Thank you for your inquiry. (Demo)',
  },
  testimonials: {
    section: { en: 'Voice', ja: 'Client Testimonials' },
    items: [
      {
        id: '1',
        quote:
          'Design fidelity was exceptional — even subtle animations exceeded expectations. We trust them with ongoing projects.',
        author: 'Creative Agency A',
        role: 'Director',
        initials: 'AD',
        avatarFrom: '#1e3347',
        avatarTo: '#3d5a75',
      },
      {
        id: '2',
        quote:
          'They delivered EC-CUBE customizations others declined, with sharp proposals and on-time launch.',
        author: 'Apparel Brand B',
        role: 'Project Owner',
        initials: 'BK',
        avatarFrom: '#c45c48',
        avatarTo: '#d97a6a',
      },
      {
        id: '3',
        quote: 'Meeting participation and progress updates are thorough — they feel like an in-house dev team.',
        author: 'IT Company C',
        role: 'Marketing Department',
        initials: 'MK',
        avatarFrom: '#5a8fa8',
        avatarTo: '#457a94',
      },
    ],
  },
  heroTags: [
    'Shopify',
    'EC-CUBE',
    'EC-force',
    'Color Me Shop',
    'Makeshop',
    'MovableType',
    'headless CMS',
    'AI Solutions',
    'Systems',
  ],
}

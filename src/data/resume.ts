export const profile = {
  name: "Murali Prasanth Ponnusamy",
  shortName: "Murali Prasanth",
  title: "Software Engineer II",
  tagline:
    "Full-stack engineer building multi-tenant SaaS across React, TypeScript, Node.js and Java.",
  location: "Bengaluru, India",
  experienceYears: "4",
  email: "muraliprasanth706@gmail.com",
  phone: "+91 90254 65713",
  github: "https://github.com/MuraliPrasanth706",
  githubUsername: "MuraliPrasanth706",
  linkedin:
    "https://www.linkedin.com/in/murali-prasanth-ponnusamy-640bb8210/",
  leetcode: "https://leetcode.com/u/MuraliPrasanth706/",
  leetcodeUsername: "MuraliPrasanth706",
  resumeFile: "/resume/Murali_Prasanth_SDE2_Resume.pdf",
} as const;

export const hero = {
  /** Split so the second line can carry the one italic ember emphasis. */
  headlineLead: "Between the interface",
  headlineAccent: "and the infrastructure.",
  subheading:
    "Full-stack engineer on multi-tenant SaaS. React and TypeScript on the front, Node.js and Java behind it — and an AI document pipeline that has processed over a thousand real applications.",
  roles: [
    "React & TypeScript",
    "Node.js & Express",
    "Java & Spring Boot",
    "AI document pipelines",
    "Kafka & Redis",
    "Full Stack Engineer",
  ],
};

/** The profile rendered as a typeset spec table beside the headline. */
export const heroSpec: Array<{ label: string; value: string; status?: boolean }> = [
  { label: "Base", value: "Bengaluru, India" },
  { label: "Exp", value: "Almost 4 years, product companies" },
  { label: "Core", value: "React · TypeScript · Node.js · Java" },
  { label: "Also", value: "Kafka · Redis · MySQL · AWS" },
  { label: "Now", value: "AI document processing — GUS Education" },
  { label: "Status", value: "Open to new roles", status: true },
];

export const about = {
  paragraphs: [
    "I'm a full-stack engineer with almost four years on multi-tenant SaaS, working across both halves of the stack: React, TypeScript and Next.js on the front, REST APIs on Node.js and Java behind them, with MySQL, MongoDB and Redis underneath.",
    "At Incresco I built an AI document-processing platform for GUS Education India. It pulls student applications out of the SIS, extracts document data with OpenAI Vision OCR, routes each application to an admission officer, and writes the result back after review. It has processed over 1,000 production applications at a 98% completion rate, running hourly with no manual data entry — plus a Chrome extension that diffs AI-extracted values against SIS records so an officer sees the mismatches before approving.",
    "On the same team I own role-based access control for APEX (NP 360) — including a scoped External Organization Editor role that lets outside organizations join approval workflows without administrative or publishing rights — and the Redis caching layer behind high-volume quote listing. Before that, at OneBill, I built and owned a Node.js BFF that gave the React UI one stable contract over downstream Java microservices, led six billing modules off legacy GWT onto React, and built a Kafka-based SLA pipeline for support ticketing.",
    "I care about the parts that decide whether a system holds: the API contract, the permission boundary, what gets cached, and what happens when the link expires mid-review. I also mentor a junior engineer through code reviews and day-to-day debugging.",
  ],
  highlights: [
    "Almost 4 years shipping production SaaS",
    "AI document processing at scale",
    "Full-stack, React through Java",
    "Performance, caching & reliability",
  ],
};

export type TechCategory = {
  title: string;
  items: string[];
};

export const techStack: TechCategory[] = [
  {
    title: "Languages",
    items: ["JavaScript", "TypeScript", "Java"],
  },
  {
    title: "Frontend",
    items: ["React.js", "Next.js", "React Native", "Redux", "HTML5", "CSS3"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "Spring Boot", "Kafka", "REST APIs", "Microservices"],
  },
  {
    title: "Databases",
    items: ["MySQL", "MongoDB", "Redis"],
  },
  {
    title: "Cloud & DevOps",
    items: ["AWS", "GitHub Actions", "Git"],
  },
  {
    title: "Testing",
    items: ["Jest", "React Testing Library", "Playwright"],
  },
  {
    title: "AI",
    items: ["OpenAI Vision OCR", "LLM APIs", "Multi-Agent Pipelines", "OpenCV"],
  },
  {
    title: "Tools",
    items: ["Postman", "JIRA", "Claude Code", "GitHub Copilot"],
  },
];

export type ExperienceProject = {
  name: string;
  highlights: string[];
};

export type ExperienceEntry = {
  company: string;
  role: string;
  duration: string;
  location: string;
  projects: ExperienceProject[];
};

export const experience: ExperienceEntry[] = [
  {
    company: "Incresco Technology",
    role: "Software Engineer II",
    duration: "Mar 2026 — Present",
    location: "Bengaluru, India",
    projects: [
      {
        name: "AI Document Processing Platform — GUS Education India",
        highlights: [
          "OpenAI Vision OCR",
          "SIS Integration",
          "1,000+ Applications",
          "98% Completion",
          "Hourly Automation",
          "Round-Robin Assignment",
          "S3 Link Re-signing",
          "Playwright Scraping",
          "Chrome Extension",
          "21 Document Types",
        ],
      },
      {
        name: "APEX (NP 360) — Expert & Quote Management",
        highlights: [
          "Role Based Access Control",
          "Least Privilege Roles",
          "Approval Workflows",
          "REST API Design",
          "Redis Caching",
          "Search · Filter · Pagination",
          "Mentoring",
        ],
      },
    ],
  },
  {
    company: "OneBill Software",
    role: "Software Engineer",
    duration: "Feb 2023 — Mar 2026",
    location: "Bangalore, India",
    projects: [
      {
        name: "Self-Care & Shopping Cart — Node.js BFF & Authentication",
        highlights: [
          "Node.js BFF Layer",
          "Express",
          "JWT & Refresh Tokens",
          "Unified Auth Abstraction",
          "Angular to React",
          "Java Microservices",
        ],
      },
      {
        name: "Pricing Studio — Core Billing Product",
        highlights: [
          "6 Modules GWT to React",
          "30% Smaller Bundle",
          "Improved TTI",
          "Context API & Hooks",
          "RESTful Services",
          "MySQL",
        ],
      },
      {
        name: "Service Desk — Support Ticketing",
        highlights: [
          "Kafka SLA Pipeline",
          "MongoDB",
          "Escalation Workflows",
          "Dynamic Ticket Tagging",
          "Redis Caching",
          "10–15% Faster APIs",
        ],
      },
    ],
  },
];

export type Project = {
  title: string;
  description: string;
  tags: string[];
  category: "AI" | "Web" | "Mobile" | "Backend";
  link?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "AI Document Processing Platform",
    description:
      "Pulls student applications from the SIS, extracts document data with OpenAI Vision OCR, routes each one to an admission officer via a MySQL-backed round-robin engine, and writes the result back after review. 1,000+ production applications processed at 98% completion, running hourly with no manual data entry.",
    tags: ["OpenAI Vision OCR", "Node.js", "MySQL", "Playwright", "AWS S3", "Chrome Extension"],
    category: "AI",
    featured: true,
  },
  {
    title: "APEX (NP 360)",
    description:
      "Role-based access control for expert and quote management, including a scoped External Organization Editor role that brings outside organizations into approval workflows without administrative or publishing rights. Redis caching behind high-volume quote listing with search, filtering, sorting and pagination.",
    tags: ["Java", "Spring Boot", "RBAC", "Redis", "REST APIs", "Multi-tenant"],
    category: "Backend",
    featured: true,
  },
  {
    title: "Node.js BFF & Authentication",
    description:
      "A Backend-for-Frontend that handles authentication and orchestrates REST calls from the React UI to downstream Java microservices, giving the frontend one stable contract. Two auth mechanisms unified behind a single abstraction, then migrated to JWT with refresh tokens.",
    tags: ["Node.js", "Express", "JWT", "Orchestration", "Angular to React"],
    category: "Backend",
    featured: true,
  },
  {
    title: "Pricing Studio",
    description:
      "Led the migration of six core billing modules — Products, Taxes, Bundles, Discounts, Policies and Partners — from legacy GWT to React, with a reusable component architecture on Context API and custom hooks. Bundle size down 30% and TTI improved across 1,000+ real-world use cases.",
    tags: ["React", "Context API", "Code Splitting", "REST APIs", "MySQL"],
    category: "Web",
    featured: true,
  },
  {
    title: "Service Desk",
    description:
      "Support ticketing with a dynamic tagging system for categorization and routing, and a Kafka-based SLA pipeline: scheduled jobs find expired SLA tasks in MongoDB and publish events, and consumers handle response, relief and resolution SLAs to trigger reminders, track breaches and run escalations.",
    tags: ["Kafka", "MongoDB", "Redis", "SLA Automation", "Ticket Routing"],
    category: "Backend",
    featured: true,
  },
  {
    title: "Smart Healthcare Appointment System",
    description:
      "A doctor web dashboard and a patient mobile app with live queue tracking and estimated consultation times — a working MVP built in three days using AI-assisted development.",
    tags: ["React", "React Native", "Node.js", "PostgreSQL", "Queue Tracking"],
    category: "Mobile",
    link: "https://github.com/MuraliPrasanth706/hospital-admin",
    featured: true,
  },
];

/**
 * Numbers that came off real, attributable work — each one traceable to a
 * project above, rather than an unverifiable headcount.
 */
export const achievements = [
  { value: "1,000+", label: "applications processed — AI document platform" },
  { value: "98%", label: "completion rate in production" },
  { value: "83%", label: "shorter link revalidation window" },
  { value: "30%", label: "smaller JS bundle — Pricing Studio" },
  { value: "10–15%", label: "faster APIs — Service Desk" },
];

export const education = {
  degree: "Bachelor of Technology",
  field: "Information Technology",
  school: "Government College of Technology, Coimbatore",
  duration: "2020 — 2023",
  detail: "CGPA: 7.9",
};

export const careerTimeline = [
  { year: "2020", label: "Started B.Tech, Information Technology" },
  { year: "2023", label: "Graduated · Joined OneBill Software" },
  { year: "2026", label: "Software Engineer II · Incresco Technology" },
];

export const buildingSection = {
  title: "Building a Product",
  subtitle: "Side projects in progress, and what is already in use",
};

export type BuildingProductItem = {
  name?: string;
  tagline: string;
  description?: string;
  status: string;
  cta: string;
  link?: string;
};

export const buildingProducts: BuildingProductItem[] = [
  {
    name: "UGC Desk",
    tagline: "A multi-tenant CRM for creators and brands.",
    description:
      "The core CRM is built and in use. I built the authentication service and deal-stage management.",
    status: "Core CRM in use — extending",
    cta: "Launching soon",
  },
  {
    name: "Offer Sprint",
    tagline: "A Next.js web app on Neon Postgres.",
    description:
      "Built with Next.js and a Neon PostgreSQL database, deployed on Vercel.",
    status: "Shipped on Vercel",
    cta: "Launching soon",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Building", href: "#building" },
  { label: "GitHub", href: "#github" },
  { label: "LeetCode", href: "#leetcode" },
  { label: "Contact", href: "#contact" },
];

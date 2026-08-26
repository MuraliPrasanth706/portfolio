export const profile = {
  name: "Murali Prasanth Ponnusamy",
  shortName: "Murali Prasanth",
  title: "Software Engineer II",
  tagline:
    "Building scalable backend systems, AI-powered platforms, and modern web applications.",
  location: "Bangalore, India",
  experienceYears: "3.6+",
  email: "muraliprasanth706@gmail.com",
  phone: "+91 90254 65713",
  github: "https://github.com/MuraliPrasanth706",
  githubUsername: "MuraliPrasanth706",
  linkedin:
    "https://www.linkedin.com/in/murali-prasanth-ponnusamy-640bb8210/",
  leetcode: "https://leetcode.com/u/MuraliPrasanth706/",
  leetcodeUsername: "MuraliPrasanth706",
  resumeFile: "/resume/Murali_Prasanth_FullStack.pdf",
} as const;

export const hero = {
  headline: "Building Scalable Software for Millions.",
  subheading:
    "Software Engineer specializing in Backend Engineering, AI-powered applications, Java, Spring Boot, Node.js, React, and scalable cloud architectures.",
  roles: [
    "Backend Engineer",
    "Java & Spring Boot",
    "Node.js & TypeScript",
    "React & Next.js",
    "Scalable API Developer",
    "Full Stack Engineer",
  ],
};

export const about = {
  paragraphs: [
    "I'm a Software Engineer II with 3.6+ years building production software that carries real weight — multi-tenant SaaS platforms, AI document-processing pipelines, and billing systems that thousands of users touch every day. I care less about which framework is trendy and more about whether the system still holds up under load, under edge cases, and under a new engineer reading it six months later.",
    "At Incresco Technology, I design Role-Based Access Control and multi-tenant permission models for APEX (NP360) on a Java and Spring Boot backend, and build an AI-powered document extraction platform that runs resumes, IDs, certificates, payslips, and bank statements through a modular multi-agent pipeline — OpenCV preprocessing, async orchestration, and validation baked in end to end. Before that, at OneBill, I helped migrate core billing modules off legacy GWT into React, rebuilt authentication as a Node.js BFF layer with JWT, and shipped a cross-platform React Native service desk app used by real support teams.",
    "My stack runs deep on both sides: Java with Spring Boot and Node.js for services, React and Next.js for interfaces, Redis for the caching layer that keeps things fast, and PostgreSQL/MongoDB underneath. I'm drawn to the unglamorous parts of engineering — API contracts, caching strategy, permission boundaries, performance budgets — because that's where scalable systems are actually won or lost.",
    "Outside of ticket queues, I like compressing an MVP into days rather than weeks using AI-assisted development, and I'm always looking for the next system worth building properly.",
  ],
  highlights: [
    "3.6+ years shipping production SaaS",
    "AI document processing at scale",
    "Full-stack, backend-leaning",
    "Performance & caching focused",
  ],
};

export type TechCategory = {
  title: string;
  items: string[];
};

export const techStack: TechCategory[] = [
  {
    title: "Frontend",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind", "React Native"],
  },
  {
    title: "Backend",
    items: ["Java", "Spring Boot", "Node.js", "Express", "REST APIs", "gRPC", "Authentication"],
  },
  {
    title: "Databases",
    items: ["PostgreSQL", "MongoDB", "Redis", "Caching"],
  },
  {
    title: "Architecture",
    items: ["Microservices", "Modular Architecture", "RBAC", "Multi Tenant", "API Design", "AI Pipelines"],
  },
  {
    title: "DevOps",
    items: ["Docker", "Linux", "NGINX", "Git", "GitHub", "Postman", "Jira"],
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
    location: "Coimbatore, On-site",
    projects: [
      {
        name: "Localization & Terminology Configuration Platform",
        highlights: [
          "Multi Tenant SaaS",
          "API Driven Localization",
          "HLD & LLD",
          "Tenant Specific Terminology",
          "REST API Design",
          "Role Scoped Admin Interface",
          "Runtime Configuration",
          "Independently Deployable Service",
          "Zero Redeploy Updates",
        ],
      },
      {
        name: "APEX NP360",
        highlights: [
          "Java",
          "Spring Boot",
          "Role Based Access Control",
          "Multi Tenant Permissions",
          "Expert Management APIs",
          "Redis Caching",
          "Secure Business Workflows",
        ],
      },
      {
        name: "AI Candidate Extraction Platform",
        highlights: [
          "FastAPI",
          "AI Document Processing",
          "OpenCV",
          "OCR",
          "Multi Agent Pipeline",
          "Resume Extraction",
          "Identity Documents",
          "Educational Certificates",
          "Payslips",
          "Bank Statements",
          "Async Processing",
          "SMB Integration",
          "Validation",
          "Normalization",
        ],
      },
    ],
  },
  {
    company: "OneBill Software",
    role: "Software Engineer",
    duration: "Feb 2023 — Mar 2026",
    location: "Bangalore, On-site",
    projects: [
      {
        name: "Pricing Studio",
        highlights: [
          "Java",
          "Spring Boot",
          "React Migration",
          "Legacy Modernization",
          "REST APIs",
          "Performance Optimization",
        ],
      },
      {
        name: "Authentication BFF",
        highlights: ["JWT", "Node.js BFF Layer", "Angular to React Migration"],
      },
      {
        name: "React Native Service Desk",
        highlights: [
          "Java",
          "Spring Boot",
          "Redis Caching",
          "TanStack Query",
          "Offline Sync",
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
    title: "Localization & Terminology Configuration Platform",
    description:
      "Centralized, API-driven localization for a multi-tenant SaaS — text labels and field names moved out of hardcoded JavaScript into configuration served to the frontend at runtime. Tenant-specific terminology lets different customers label the same business field differently on one shared frontend codebase, and a role-scoped Admin/Editor interface lets business users manage keys and values without a code change or redeploy.",
    tags: [
      "Multi Tenant SaaS",
      "REST API Design",
      "HLD & LLD",
      "RBAC",
      "Runtime Configuration",
      "Admin Interface",
    ],
    category: "Backend",
    featured: true,
  },
  {
    title: "AI Candidate Extraction Platform",
    description:
      "Modular multi-agent document-processing platform that extracts structured data from resumes, IDs, certificates, payslips, and bank statements using FastAPI, OpenCV preprocessing, and async pipelines.",
    tags: ["FastAPI", "OpenCV", "Multi Agent AI", "OCR", "REST APIs", "Redis", "Python"],
    category: "AI",
    featured: true,
  },
  {
    title: "Smart Healthcare Appointment System",
    description:
      "Doctor dashboard and patient mobile app with real-time appointment queue tracking and estimated consultation time — full MVP shipped in 3 days using AI-assisted development.",
    tags: ["React Native", "Node.js", "PostgreSQL", "Doctor Dashboard", "Patient App", "Queue Tracking"],
    category: "Mobile",
    featured: true,
  },
  {
    title: "Pricing Studio",
    description:
      "Enterprise billing module migrated from legacy GWT to React — Products, Taxes, Bundles, Discounts, Policies, and Partners — backed by Java and Spring Boot services, with a 30% bundle-size reduction and improved TTI.",
    tags: ["Java", "Spring Boot", "React", "REST APIs", "Performance Optimization", "Enterprise Billing"],
    category: "Web",
    featured: true,
  },
  {
    title: "Service Desk Platform",
    description:
      "Cross-platform React Native app for Android, iOS, and Web with offline sync, flexible ticket tagging, and Redis-cached search on Java and Spring Boot APIs — response times improved 10-15%.",
    tags: ["Java", "Spring Boot", "React Native", "Offline Sync", "Redis", "Ticket Management"],
    category: "Mobile",
    featured: true,
  },
];

export const achievements = [
  { value: "3.6+", label: "Years Experience" },
  { value: "50+", label: "Production Features Delivered" },
  { value: "10+", label: "Enterprise Modules Built" },
  { value: "4+", label: "Large Scale Products" },
  { value: "1000s", label: "Users Supported" },
];

export const skills = [
  { name: "Backend", value: 95 },
  { name: "React", value: 90 },
  { name: "Java", value: 90 },
  { name: "Node.js", value: 95 },
  { name: "Spring Boot", value: 88 },
  { name: "System Design", value: 85 },
  { name: "Databases", value: 90 },
  { name: "Redis", value: 88 },
  { name: "Microservices", value: 85 },
  { name: "Micro Frontend", value: 80 },
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
  subtitle: "Upcoming • Actively Building • Extending in Production",
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
    tagline: "Something exciting is coming.",
    description: "Building something I've always wished existed.",
    status: "🚧 Building in Public",
    cta: "Launching Soon.",
  },
  {
    name: "Live Queue",
    tagline: "Streamlining hospital operations from admission to discharge.",
    status: "✅ MVP Done — Extending with New Features",
    cta: "View on GitHub",
    link: "https://github.com/MuraliPrasanth706/hospital-admin",
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

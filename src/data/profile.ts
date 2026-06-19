export const profile = {
  name: "Jonathan Trick",
  title: "Senior Software Engineer",
  location: "Houston, TX",
  phone: "(972) 474-7596",
  email: "j.trick921@gmail.com",
  linkedin: "https://linkedin.com",
  github: "https://github.com/jtrick921",
  available: true,
};

export const focusAreas = [
  {
    icon: "⚙️",
    title: "Backend Systems",
    description: "Scalable APIs and services with Python, Node.js, and clean architecture.",
  },
  {
    icon: "☁️",
    title: "Cloud & Messagin",
    description: "AWS, Kafka, Docker, and event-driven workflows for reliable platforms.",
  },
  {
    icon: "🛡️",
    title: "Reliability & Quality",
    description: "Testing, observability, error handling, and production-ready delivery.",
  }
];

export const skills = [
  "Python",
  "Node.js",
  "AWS",
  "Kafka",
  "React"
];

export const experience = [
  {
    company: "Amwell",
    location: "Remote",
    role: "Software Engineer",
    period: "Mar 2024 – Present",
    color: "brand",
    highlights: [
      "Architecting Python and Node.js backend services for healthcare workflow platforms supporting high-volume internal operations and digital care delivery.",
      "Standardizing REST and GraphQL APIs across distributed services to improve integration quality, reduce service errors, and strengthen backend reliability.", "Improving latency, observability, and production readiness through Redis caching, PostgreSQL query optimization, workflow health APIs, and monitoring improvements.",
    ],
  },
  {
    company: "symplr",
    location: "Houston, TX",
    role: "Software Engineer",
    period: "May 2020 – Feb 2024",
    color: "cyan",
    highlights: [
      "Engineered Python and Node.js microservices for healthcare operations workflows, including reporting, internal process automation, and enterprise service integrations.",
      "Built backend APIs and event-driven workflows that improved data consistency, reduced synchronous bottlenecks, and supported reliable operational reporting.",
      "Optimized PostgreSQL and MongoDB access patterns, improved CI/CD release paths, and mentored engineers on scalable backend architecture and maintainable service design.",
    ],
  },
  {
    company: "Improving",
    location: "Houston, TX",
    role: "Software Engineer",
    period: "Sep 2017 – Mar 2020",
    color: "indigo",
    highlights: [
      "Delivered Python and Node.js services for consulting client systems involving order processing, reporting, data synchronization, and internal workflow automation.",
      "Automated Airflow-based ETL and reconciliation workflows, reducing manual work and improving data reliability across downstream enterprise systems.",
      "Built backend endpoints and React-based internal interfaces that improved operational visibility into workflow progress, processing failures, and reporting status.",
    ],
  },
  {
    company: "PROS",
    location: "Houston, TX",
    role: "Software Engineer",
    period: "Jul 2014 – Aug 2017",
    color: "emerald",
    highlights: [
      "Built REST API features and Node.js modules for pricing, revenue-management, reporting, and admin workflows used by enterprise software teams.",
      "Automated recurring data-processing workflows to reduce manual effort and improve operational efficiency for internal reporting systems.",
      "Improved backend maintainability through SQL and NoSQL query optimization, API documentation, test coverage, and reliable handoff practices.",
    ],
  },
];

export const projects = [
  {
    title: "Digital Care Workflow Platform",
    description:
      "Backend platform inspired by digital healthcare operations, supporting workflow orchestration, retry handling, service health visibility, and API-driven care operations using Python and Node.js.",
    stack: ["Python", "Node.js", "AWS", "PostgreSQL", "Redis"],
    demo: "#",
    source: "#",
    badge: "Python",
  },
  {
    title: "Healthcare Operations API Hub",
    description:
      "Enterprise operations system for healthcare workflow tracking, reporting, role-based access, and internal dashboards, combining Node.js APIs with React views for operational visibility.",
    stack: ["Node.js", "React", "TypeScript", "MongoDB", "Kafka"],
    demo: "#",
    source: "#",
    badge: "Node.js",
  },
  {
    title: "Consulting Data Automation Pipeline",
    description:
      "Python-based automation pipeline for data reconciliation, reporting workflows, and downstream system synchronization across consulting client environments",
    stack: ["Python", "Airflow", "SQL", "REST APIs", "Monitoring"],
    demo: "#",
    source: "#",
    badge: "Python",
    featured: true,
  },
];

export const education = {
  degree: "Bachelor of Science in Computer Science",
  school: "Texas State University",
  period: "2010 – 2014",
};

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

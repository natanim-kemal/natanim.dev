export const profile = {
  name: 'Natanim Kemal',
  location: 'Addis Ababa, Ethiopia',
  timeZone: 'Africa/Addis_Ababa',
  email: 'reachnatanim@gmail.com',
  github: 'https://github.com/natanim-kemal',
  linkedin: 'https://www.linkedin.com/in/natanim-kemal',
  x: 'https://x.com/straydeg',
  telegram: 'https://t.me/phnatanim',
} as const;

export const links = {
  mailto: `mailto:${profile.email}`,
} as const;

export type Experience = {
  org: string;
  mark: string; 
  logo?: string;
  role: string;
  location: string;
  period: string;
  details?: string[];
  summary: string;
  url?: string;
};

export const experience: Experience[] = [
  {
    org: 'Addis Ababa University',
    mark: 'AAU',
    logo: '/company/aau.jpg',
    role: 'Backend Developer',
    location: 'Addis Ababa · Hybrid',
    period: 'May 2025 — Jul 2026',
    details: [
      'Developing the PPMoS platform with a focus on server-side programming.',
      'Optimizing database queries and API endpoints for performance.',
    ],
    summary:
      'Build and maintain the server side of the PPMoS platform, data models, APIs, and the workflows university staff depend on.',
    url: 'https://www.aau.edu.et/',
  },
  {
    org: 'INSA',
    mark: 'INSA',
    logo: '/company/insa.png',
    role: 'Cybersecurity Analyst',
    location: 'Addis Ababa · On-site',
    period: 'Mar 2025 — Jul 2025',
    details: [
      'Focused on information security, Wazuh configuration, and SIEM management.',
      'Implemented monitoring solutions to detect and respond to security threats.',
      'Collaborated with security teams to analyze system vulnerabilities.',
    ],
    summary:
      'Worked in security operations with Wazuh and SIEM, log pipelines, alert triage, and hardening across monitored systems.',
    url: 'https://www.insa.gov.et/',
  },
  {
    org: 'RELEX Solutions',
    mark: 'RELEX',
    logo: '/company/relex.png',
    role: 'Backend System Engineer',
    location: 'Helsinki · Remote',
    period: 'Feb 2024 — Jun 2025',
    details: [
      'Built and maintained backend services and APIs that production teams relied on every day.',
      'Owned deployment and systems administration across production environments.',
      'Kept server-side systems reliable: monitoring, troubleshooting, and steady hardening.',
    ],
    summary:
      'Backend and systems administration, server-side services, deployment, and the day-to-day reliability of production systems.',
    url: 'https://www.relexsolutions.com/',
  },
  {
    org: 'RDX',
    mark: 'RDX',
    logo: '/company/rdx.png',
    role: 'Frontend Developer',
    location: 'Addis Ababa · On-site',
    period: 'Jun 2022 — Nov 2023',
    details: [
      'Translated Figma designs into high-quality code.',
      'Implemented responsive UI/UX designs ensuring cross-browser compatibility.',
    ],
    summary:
      'Implemented responsive interfaces from Figma systems and handled UI handoff for client projects.',
  },
];

export const education = {
  org: 'Addis Ababa University',
  logo: '/company/aau.jpg',
  degree: 'Bachelor of Science in Software Engineering',
  detail: 'Cybersecurity major',
  url: 'https://www.aau.edu.et/',
  honors: [
    {
      label: 'Google Security Certified',
      url: 'https://www.credly.com/badges/8193a2e2-8cbd-4886-be1f-617719db6b74/public_url',
    },
    { label: 'Most Outstanding CICT Student', url: undefined },
  ] as const,
} as const;

export const skillGroups = [
  {
    label: 'Languages',
    items: ['Go', 'Python', 'TypeScript', 'JavaScript', 'Dart', 'SQL', 'PowerShell'],
  },
  {
    label: 'Backend',
    items: [
      'Node.js',
      'Express',
      'NestJS',
      'PostgreSQL',
      'MongoDB',
      'MySQL',
      'Redis',
      'gRPC',
      'GraphQL',
      'Firebase',
      'Convex',
      'Docker',
      'Kubernetes',
      'Linux',
      'Git',
      'GCP',
      'AWS',
      'Cloudflare',
      'Vercel',
      'Railway',
    ],
  },
  {
    label: 'Security',
    items: ['Wireshark', 'Metasploit', 'ModSecurity', 'OWASP CRS', 'Coraza WAF', 'Wazuh', 'SIEM'],
  },
  {
    label: 'Product',
    items: ['Flutter', 'React', 'Next.js', 'Tailwind CSS', 'SQLite'],
  },
  {
    label: 'Harnesses',
    items: ['OpenCode', 'T3 Code', 'Claude'],
  },
] as const;

export type Project = {
  name: string;
  description: string;
  tags: string[];
  image: string;
  href?: string;
  source?: string;
};

export const projects: Project[] = [
  {
    name: 'rem',
    description:
      'A read-later vault that turns saved links, videos, and books into a habit, smart reminders, clean organization, and sync across devices.',
    tags: ['Flutter', 'Dart', 'Convex', 'Clerk'],
    image: '/projects/rem.png',
    href: 'https://rem.natanim.dev',
    source: 'https://github.com/natanim-kemal/rem',
  },
  {
    name: 'cofiz',
    description:
      'One shared ledger for a coffee business: daily prices, sales, purchases, returns, and transfers. Set prices in the app or record sales from Telegram, in English or Amharic.',
    tags: ['Flutter', 'Firebase', 'Telegram', 'i18n'],
    image: '/projects/cofiz.png',
    href: 'https://cofiz-web.vercel.app',
    source: 'https://github.com/cofiz-org',
  },
  {
    name: 'synce',
    description:
      'Cross-platform PDF sync. Drop a file on one device and pick it up on another, mobile and desktop, without manual imports.',
    tags: ['Flutter', 'NestJS', 'PostgreSQL', 'AWS'],
    image: '/projects/synce.png',
    href: 'https://synce.natanim.dev',
    source: 'https://github.com/natanim-kemal/synce',
  },
  {
    name: 'modintel',
    description:
      'An ML pipeline that augments Coraza: learns from traffic, surfaces threats, and gives analysts a live dashboard for WAF detections.',
    tags: ['Go', 'Python', 'Caddy', 'Coraza'],
    image: '/projects/modintel.jpg',
    href: 'https://modintel.natanim.dev',
    source: 'https://github.com/modintel',
  },
  {
    name: 'zentask',
    description:
      'A minimalist productivity app built around deep-work sessions and flow state, with a sharp landing page to launch it.',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Supabase'],
    image: '/projects/zentask.png',
    href: 'https://zentask.natanim.dev',
    source: 'https://github.com/natanim-kemal/zentask-site',
  },
  {
    name: 'akllyl',
    description:
      'A soft, editorial portfolio for a newborn photography studio, built to feel calm, load fast, and book sessions.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    image: '/projects/akllyl.png',
    href: 'https://akllyl.vercel.app',
    source: 'https://github.com/natanim-kemal/akllyl',
  },
];

export const openSource = [
  {
    name: 'coraza-audit-suite',
    description:
      'Test harness for Coraza WAF: replay attacks, inspect audit logs, and verify OWASP CRS behaviour.',
    href: 'https://github.com/natanim-kemal/coraza-audit-suite',
    language: 'Python',
    stars: 2,
  },
  {
    name: 'paseo',
    description:
      'One self-hosted interface to run and orchestrate Claude Code, Codex, and OpenCode agents from your phone, desktop, or CLI.',
    href: 'https://github.com/natanim-kemal/paseo',
    language: 'TypeScript',
    stars: 0,
  },
  {
    name: 'rem',
    description:
      'Fully open source read-later vault: smart reminders, clean organization, and sync across devices.',
    href: 'https://github.com/natanim-kemal/rem',
    language: 'Dart',
    stars: 0,
  },
  {
    name: 'coraza-caddy',
    description:
      'Upstream contribution: raised the missing container image gap, which led the maintainers to point the README at the OWASP Coraza CRS Docker image.',
    href: 'https://github.com/corazawaf/coraza-caddy/issues/292',
    language: 'Go',
    stars: 0,
  },
  {
    name: 'hook',
    description:
      'Machine-learning browser extension that flags phishing sites from URL features.',
    href: 'https://github.com/natanim-kemal/hook',
    language: 'Python',
    stars: 3,
  },
] as const;

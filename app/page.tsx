import Image from 'next/image';
import type { ComponentType, ReactNode } from 'react';
import {
  ArrowUpRight,
  Award,
  Clock3,
  Database,
  Mail,
  Network,
  PenLine,
  BrickWall,
  Radar,
  Shield,
  Siren,
  Star,
  Terminal,
  Trophy,
  Workflow,
} from 'lucide-react';
import {
  SiClaude,
  SiCloudflare,
  SiDart,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiFlutter,
  SiGit,
  SiGo,
  SiGooglecloud,
  SiGraphql,
  SiJavascript,
  SiKubernetes,
  SiLinux,
  SiMetasploit,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiOwasp,
  SiPostgresql,
  SiPython,
  SiReact,
  SiRedis,
  SiRailway,
  SiSqlite,
  SiTailwindcss,
  SiTypescript,
  SiUpwork,
  SiVercel,
  SiWireshark,
} from 'react-icons/si';
import { FaAws, FaGithub, FaLinkedinIn, FaTelegram, FaXTwitter } from 'react-icons/fa6';
import Link from 'next/link';
import LocalTime from '@/components/portfolio/LocalTime';
import ContactButton from '@/components/portfolio/ContactButton';
import ExperienceSummary from '@/components/portfolio/ExperienceSummary';
import ProjectCard from '@/components/portfolio/ProjectCard';
import Reveal from '@/components/portfolio/Reveal';
import {
  education,
  experience,
  openSource,
  profile,
  projects,
  skillGroups,
} from '@/lib/portfolio';

const primaryButton =
  'inline-flex h-9 items-center gap-2 rounded-lg bg-primary px-3.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring';
const secondaryButton =
  'inline-flex h-9 items-center gap-2 rounded-lg border px-3.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring';
const inlineLink =
  'font-medium text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground';

function UpworkLink({ className, iconOnly = false }: { className: string; iconOnly?: boolean }) {
  return (
    <a
      href={profile.upwork}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Hire me on Upwork"
      className={iconOnly ? `${className} group relative` : className}
    >
      {iconOnly ? (
        <>
          <SiUpwork className="size-4" style={{ color: '#14a800' }} />
          <ArrowUpRight className="text-muted-foreground size-3.5" />
          <span
            aria-hidden
            className="pointer-events-none absolute bottom-full left-1/2 z-50 mb-2 -translate-x-1/2 translate-y-1 scale-95 rounded-xl bg-primary px-4 py-2 text-sm whitespace-nowrap text-primary-foreground opacity-0 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] transition-all delay-0 duration-150 group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100 group-hover:delay-100"
          >
            Hire me on Upwork
          </span>
        </>
      ) : (
        <>
          Hire me on
          <SiUpwork className="size-3.5" style={{ color: '#14a800' }} />
          <ArrowUpRight className="size-4" />
        </>
      )}
    </a>
  );
}

const skillIcons: Record<string, ComponentType<{ className?: string; style?: React.CSSProperties }>> = {
  Go: SiGo,
  Python: SiPython,
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  Dart: SiDart,
  SQL: Database,
  PowerShell: Terminal,
  'Node.js': SiNodedotjs,
  Express: SiExpress,
  NestJS: SiNestjs,
  PostgreSQL: SiPostgresql,
  MongoDB: SiMongodb,
  MySQL: SiMysql,
  SQLite: SiSqlite,
  Redis: SiRedis,
  gRPC: Network,
  GraphQL: SiGraphql,
  Firebase: SiFirebase,
  Convex: Database,
  Wireshark: SiWireshark,
  Metasploit: SiMetasploit,
  ModSecurity: Shield,
  'OWASP CRS': SiOwasp,
  'Coraza WAF': BrickWall,
  Wazuh: Siren,
  SIEM: Radar,
  Flutter: SiFlutter,
  React: SiReact,
  'Next.js': SiNextdotjs,
  'Tailwind CSS': SiTailwindcss,
  Docker: SiDocker,
  Kubernetes: SiKubernetes,
  Linux: SiLinux,
  Git: SiGit,
  GCP: SiGooglecloud,
  AWS: FaAws,
  Cloudflare: SiCloudflare,
  Vercel: SiVercel,
  Railway: SiRailway,
  'T3 Code': Workflow,
  Claude: SiClaude,
};
const skillImages: Record<string, string> = {
  Convex: '/rare-skill/convex.webp',
  'T3 Code': '/rare-skill/t3-code.webp',
  OpenCode: '/rare-skill/opencode-dark.webp',
};

const skillColors: Record<string, string> = {
  TypeScript: '#3178c6',
  JavaScript: '#f7df1e',
  Go: '#00add8',
  Dart: '#0175c2',
  Python: '#3776ab',
  SQL: '#64748b',
  PowerShell: '#5391fe',
  'Node.js': '#5fa04c',
  NestJS: '#e0234e',
  PostgreSQL: '#4169e1',
  MongoDB: '#47a248',
  MySQL: '#00758f',
  SQLite: '#2f7ed8',
  Redis: '#dc382d',
  gRPC: '#5a9fd4',
  GraphQL: '#e535ab',
  Firebase: '#ffca28',
  Convex: '#e9e9e9',
  Wireshark: '#1679a7',
  Metasploit: '#5a8dee',
  ModSecurity: '#d97706',
  'OWASP CRS': '#d97706',
  'Coraza WAF': '#d97706',
  Wazuh: '#47769c',
  SIEM: '#d97706',
  Flutter: '#02569b',
  React: '#61dafb',
  'Tailwind CSS': '#38bdf8',
  Docker: '#2496ed',
  Kubernetes: '#326ce5',
  Linux: '#9ca3af',
  Git: '#f05032',
  GCP: '#4285f4',
  AWS: '#ff9900',
  Cloudflare: '#f38020',
  Claude: '#d97757',
};

function SectionTitle({ index, children }: { index: string; children: ReactNode }) {
  return (
    <Reveal>
      <div className="flex items-baseline gap-3">
        <span className="font-mono text-[10px] tracking-widest text-blue-500">{index}</span>
        <h2 className="text-xl font-bold">{children}</h2>
      </div>
    </Reveal>
  );
}

function OrgLogo({ logo, mark, org }: { logo?: string; mark: string; org: string }) {
  return (
    <span className="bg-background relative flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-xl border">
      {logo ? (
        <Image src={logo} alt={`${org} logo`} fill sizes="40px" className="object-cover" />
      ) : (
        <span className="font-mono text-[10px] font-semibold tracking-tight">{mark}</span>
      )}
    </span>
  );
}

export default function Home() {
  return (
    <main className="flex min-h-dvh flex-col gap-14 sm:gap-16">
      <section id="home">
        <div className="flex flex-row items-start justify-between gap-4">
          <div className="flex min-w-0 flex-col gap-4">
            <Reveal delay={0.02}>
              <h1 className="text-3xl font-semibold tracking-tighter sm:text-4xl lg:text-5xl">
                Hi, I&apos;m Natanim
              </h1>
            </Reveal>
            <Reveal delay={0.06}>
              <div className="bg-muted/60 inline-flex w-full max-w-full items-center justify-center gap-1.5 rounded-full px-2.5 py-1.5 text-sm sm:w-fit sm:justify-start sm:gap-2 sm:px-3">
                <span className="relative flex size-2 shrink-0">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-60" />
                  <span className="relative inline-flex size-2 rounded-full bg-green-500" />
                </span>
                <span className="group relative font-medium">
                  {profile.location}
                  <span className="pointer-events-none absolute bottom-full left-1/2 z-50 mb-2 -translate-x-1/2 translate-y-1 scale-95 rounded-xl bg-primary px-4 py-2 text-sm whitespace-nowrap text-primary-foreground opacity-0 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] transition-all delay-0 duration-150 group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100 group-hover:delay-100">
                    UTC + 3
                  </span>
                </span>
                <span className="text-muted-foreground">·</span>
                <span className="text-muted-foreground flex items-center gap-1">
                  <Clock3 className="hidden size-4 shrink-0 sm:block" />
                  <span className="whitespace-nowrap">
                    <LocalTime />
                  </span>
                </span>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0}>
            <span className="relative block size-20 shrink-0 overflow-hidden rounded-full border shadow-lg sm:size-28 md:size-32">
              <Image
                src="/ascii.webp"
                alt="Natanim Kemal"
                fill
                priority
                sizes="(min-width: 768px) 128px, (min-width: 640px) 112px, 80px"
                className="object-cover"
              />
            </span>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="mt-7">
          <p className="max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Backend, security, and product engineer. I build the systems products run on:{' '}
            <span className="font-medium text-foreground">APIs, data, and defenses</span>, then ship
            the interface that makes them feel simple.
          </p>
        </Reveal>

        <Reveal delay={0.14} className="mt-6 flex flex-wrap items-center gap-3">
          <ContactButton className={primaryButton}>
            Let&apos;s talk
            <ArrowUpRight className="size-4" />
          </ContactButton>
          <a href="#projects" className={secondaryButton}>
            Selected work
          </a>
          <UpworkLink iconOnly className={secondaryButton} />
        </Reveal>
      </section>

      <section id="about" className="flex flex-col gap-5">
        <SectionTitle index="01">About</SectionTitle>
        <Reveal delay={0.03}>
          <div className="space-y-4 text-pretty leading-relaxed text-muted-foreground">
            <p>
              I&apos;m a software engineer based in{' '}
              <span className="group relative font-medium">
                Addis Ababa, Ethiopia
                <span className="pointer-events-none absolute bottom-full left-1/2 z-50 mb-2 -translate-x-1/2 translate-y-1 scale-95 rounded-xl bg-primary px-4 py-2 text-sm whitespace-nowrap text-primary-foreground opacity-0 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] transition-all delay-0 duration-150 group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100 group-hover:delay-100">
                  UTC + 3
                </span>
              </span>
              . BSc in software engineering from{' '}
              <a
                href={education.url}
                target="_blank"
                rel="noopener noreferrer"
                className={inlineLink}
              >
                Addis Ababa University
              </a>
              , cybersecurity major. I&apos;ve been shipping production software the whole way:
              backend at AAU and{' '}
              <a
                href={experience[2].url}
                target="_blank"
                rel="noopener noreferrer"
                className={inlineLink}
              >
                RELEX Solutions
              </a>
              , security operations at{' '}
              <a
                href={experience[1].url}
                target="_blank"
                rel="noopener noreferrer"
                className={inlineLink}
              >
                INSA
              </a>
              , frontend at RDX.
            </p>
            <p>
              My sweet spot is where those meet:{' '}
              <span className="font-medium text-foreground">
                backend systems, application security, and product engineering.
              </span>{' '}
              I care about clean data models, boring reliability, and interfaces people don&apos;t
              have to think about.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.06}>
          <Link
            href="/blog"
            className="group bg-muted/30 hover:bg-muted/60 flex items-center justify-between gap-4 rounded-xl border p-4 transition-colors"
          >
            <div>
              <div className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
                Blog
              </div>
              <div className="mt-2 flex items-center gap-2">
                <PenLine className="write-pen size-4 shrink-0" />
                <span className="text-base font-bold tracking-tight">Things that didn't fit in a commit message</span>
                <ArrowUpRight className="size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-foreground" />
              </div>
              <svg
                className="text-foreground mt-1"
                width="340"
                height="6"
                viewBox="0 0 340 6"
                fill="none"
                aria-hidden="true"
              >
                <path
                  className="write-line"
                  d="M2 4.5C90 1 210 5.5 338 2"
                  pathLength="100"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
              <p className="mt-2 max-w-md text-xs leading-relaxed text-muted-foreground">
                Posts on whatever I&apos;m into at the moment: engineering, security, tools, or
                ideas I want to get out of my head.
              </p>
            </div>
          </Link>
        </Reveal>
      </section>

      <section id="work" className="flex flex-col gap-6">
        <SectionTitle index="02">Experience</SectionTitle>
        {experience.map((job, index) => (
          <Reveal key={job.org} delay={index * 0.04}>
            <div
              className={`flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-6 ${
                index < experience.length - 1 ? 'border-b border-border/70 pb-6' : ''
              }`}
            >
              <div className="flex gap-3">
                <OrgLogo logo={job.logo} mark={job.mark} org={job.org} />
                <div className="min-w-0">
                  <div className="flex items-center gap-2 font-semibold leading-none">
                    {job.url ? (
                      <a
                        href={job.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link inline-flex items-center gap-1.5"
                      >
                        {job.org}
                        <ArrowUpRight className="text-muted-foreground size-3.5 -translate-x-1 opacity-0 transition-all duration-200 group-hover/link:translate-x-0 group-hover/link:opacity-100" />
                      </a>
                    ) : (
                      job.org
                    )}
                  </div>
                  <div className="mt-1.5 text-sm text-muted-foreground">
                    {job.role} · {job.location}
                  </div>
                  <ExperienceSummary summary={job.summary} details={job.details} />
                </div>
              </div>
              <time className="text-muted-foreground shrink-0 text-xs tabular-nums sm:pt-0.5">
                {job.period}
              </time>
            </div>
          </Reveal>
        ))}
      </section>

      <section id="education" className="flex flex-col gap-5">
        <SectionTitle index="03">Education</SectionTitle>
        <Reveal delay={0.03}>
          <div className="flex gap-3">
            <OrgLogo logo={education.logo} mark="AAU" org={education.org} />
            <div className="min-w-0">
              <a
                href={education.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group/link inline-flex items-center gap-1.5 font-semibold leading-none"
              >
                {education.org}
                <ArrowUpRight className="text-muted-foreground size-3.5 -translate-x-1 opacity-0 transition-all duration-200 group-hover/link:translate-x-0 group-hover/link:opacity-100" />
              </a>
              <div className="mt-1.5 text-sm text-muted-foreground">{education.degree}</div>
              <div className="mt-0.5 text-xs text-muted-foreground">{education.detail}</div>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.06}>
          <div className="flex flex-wrap gap-2 sm:pl-[52px]">
            {education.honors.map((honor, index) => {
              const cls =
                'inline-flex items-center gap-1.5 rounded-lg border bg-background px-2.5 py-1 text-xs font-medium ring-1 ring-border/20';
              const icon = index === 0 ? <Award className="size-3.5" /> : <Trophy className="size-3.5" />;
              if (!honor.url) {
                return (
                  <span key={honor.label} className={cls}>
                    {icon}
                    {honor.label}
                  </span>
                );
              }
              return (
                <span key={honor.label} className="group relative inline-flex">
                  <a
                    href={honor.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${cls} transition-colors hover:border-primary/40 hover:text-foreground`}
                  >
                    {icon}
                    {honor.label}
                  </a>
                  <span
                    aria-hidden
                    className="pointer-events-none absolute bottom-full left-1/2 z-[60] mb-2 -translate-x-1/2 translate-y-1 scale-95 overflow-hidden rounded-xl border bg-background opacity-0 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] transition-all delay-0 duration-150 group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100 group-hover:delay-100"
                  >
                    <iframe
                      tabIndex={-1}
                      loading="lazy"
                      title="Google Security Certified badge on Credly"
                      src="https://www.credly.com/embedded_badge/8193a2e2-8cbd-4886-be1f-617719db6b74"
                      className="block h-[270px] w-[150px] border-0"
                    />
                  </span>
                </span>
              );
            })}
          </div>
        </Reveal>
      </section>

      <section id="skills" className="flex flex-col gap-5">
        <SectionTitle index="04">Skills</SectionTitle>
        {skillGroups.map((group, index) => (
          <Reveal key={group.label} delay={index * 0.03}>
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:gap-6">
              <div className="w-24 shrink-0 pt-1.5 font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
                {group.label}
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => {
                  const Icon = skillIcons[item];
                  const image = skillImages[item];
                  return (
                    <span
                      key={item}
                      className="flex h-8 w-fit items-center gap-2 rounded-lg border bg-background px-3 text-xs font-medium ring-1 ring-border/20"
                    >
                      {image ? (
                        <Image
                          src={image}
                          alt=""
                          width={14}
                          height={14}
                          className="size-3.5 object-contain"
                        />
                      ) : Icon ? (
                        <Icon className="size-3.5" style={{ color: skillColors[item] || 'currentColor' }} />
                      ) : (
                        <span className="bg-muted-foreground/50 size-1.5 rounded-full" />
                      )}
                      {item}
                    </span>
                  );
                })}
              </div>
            </div>
          </Reveal>
        ))}
      </section>

      <section id="projects" className="flex flex-col gap-8">
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="flex w-full items-center">
            <div className="h-px flex-1 bg-linear-to-r from-transparent via-border to-transparent" />
            <div className="bg-primary z-10 rounded-xl border px-4 py-1">
              <span className="text-background text-sm font-medium">Selected work</span>
            </div>
            <div className="h-px flex-1 bg-linear-to-l from-transparent via-border to-transparent" />
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Things I&apos;ve shipped
            </h2>
            <p className="max-w-lg text-balance text-center text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed">
              Six projects, from WAF auditing to consumer apps. Each one designed, built, and
              live in production.
            </p>
          </div>
        </div>
        <div className="grid auto-rows-fr grid-cols-1 gap-3 sm:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.name} delay={(index % 2) * 0.05} className="h-full">
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </section>

      <section id="open-source" className="flex flex-col gap-5">
        <SectionTitle index="05">Open source</SectionTitle>
        <Reveal delay={0.03}>
          <div>
            <div className="flex flex-col">
              {openSource.map((repo) => (
                <a
                  key={repo.name}
                  href={repo.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group hover:bg-muted/40 -mx-2 flex items-start justify-between gap-4 rounded-lg border-b border-border/60 px-2 py-4 transition-colors last:border-0 sm:-mx-3 sm:px-3"
                >
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 font-mono text-sm font-medium">
                      {repo.name}
                      <ArrowUpRight className="text-muted-foreground size-3.5 -translate-x-1 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100" />
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">{repo.description}</p>
                  </div>
                  <div className="text-muted-foreground flex shrink-0 items-center gap-2 text-xs">
                    {repo.stars > 0 && (
                      <span className="flex items-center gap-1 tabular-nums">
                        <Star className="size-3" />
                        {repo.stars}
                      </span>
                    )}
                    <span className="rounded-md border px-1.5 py-0.5">{repo.language}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <section id="contact" className="flex flex-col gap-8">
        <Reveal>
          <div className="relative rounded-xl border p-8 sm:p-10">
            <div className="bg-primary absolute -top-4 left-1/2 z-10 -translate-x-1/2 rounded-xl border px-4 py-1">
              <span className="text-background text-sm font-medium">Contact</span>
            </div>
            <div className="relative flex flex-col items-center gap-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Let&apos;s build something
              </h2>
              <p className="mx-auto max-w-lg text-balance text-muted-foreground">
                I&apos;m open to backend, security, and product engineering roles and to select
                freelance works. If your team cares about the systems under the surface, my inbox
                is open.
              </p>
              <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
                <ContactButton className={primaryButton}>
                  <Mail className="size-4" />
                  {profile.email}
                </ContactButton>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={secondaryButton}
                >
                  <FaLinkedinIn className="size-3.5" />
                  LinkedIn
                </a>
                <UpworkLink className={secondaryButton} />
              </div>
              <div className="text-muted-foreground mt-1 flex items-center gap-4">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  title="GitHub"
                  className="hover:text-foreground transition-colors"
                >
                  <FaGithub className="size-4" />
                </a>
                <a
                  href={profile.x}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X"
                  title="X"
                  className="hover:text-foreground transition-colors"
                >
                  <FaXTwitter className="size-4" />
                </a>
                <a
                  href={profile.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Telegram"
                  title="Telegram"
                  className="hover:text-foreground transition-colors"
                >
                  <FaTelegram className="size-4" />
                </a>
              </div>
            </div>
          </div>
        </Reveal>

        <footer className="flex flex-col items-center justify-between gap-2 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Natanim Kemal</p>
          <p className="font-mono tracking-widest uppercase">Addis Ababa · 9.03°N, 38.74°E</p>
        </footer>
      </section>
    </main>
  );
}

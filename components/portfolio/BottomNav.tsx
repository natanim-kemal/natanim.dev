'use client';

import type { ReactNode } from 'react';
import Link from 'next/link';
import { BriefcaseBusiness, FolderGit2, Home, Moon, Notebook, Sun } from 'lucide-react';
import { FaEnvelope, FaGithub, FaLinkedinIn } from 'react-icons/fa6';
import { profile } from '@/lib/portfolio';

const button =
  'group relative flex size-9 shrink-0 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:size-10';
const icon = 'size-[18px] sm:size-5';

// hover label above each item, matching abdullahtech.dev: 700ms delay, fade + zoom + slide up
function Tip({ label }: { label: string }) {
  return (
    <span
      aria-hidden
      className="pointer-events-none absolute bottom-full left-1/2 z-50 mb-2 -translate-x-1/2 translate-y-1 scale-95 rounded-xl bg-primary px-4 py-2 text-sm whitespace-nowrap text-primary-foreground opacity-0 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] transition-all delay-0 duration-150 group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100 group-hover:delay-100"
    >
      {label}
    </span>
  );
}

function NavLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: ReactNode;
}) {
  const external = href.startsWith('http') || href.startsWith('mailto');
  if (external) {
    return (
      <a
        href={href}
        aria-label={label}
        className={button}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
        <Tip label={label} />
      </a>
    );
  }
  return (
    <Link href={href} aria-label={label} className={button}>
      {children}
      <Tip label={label} />
    </Link>
  );
}

export default function BottomNav() {
  const toggleTheme = () => {
    const dark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  };

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-4 z-40 flex justify-center px-3">
      <nav
        aria-label="Primary"
        className="pointer-events-auto flex h-13 items-center gap-0.5 rounded-full border bg-card/90 p-1.5 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.3)] backdrop-blur-xl sm:gap-1"
      >
        <NavLink href="/#home" label="Home">
          <Home className={icon} />
        </NavLink>
        <NavLink href="/#work" label="Experience">
          <BriefcaseBusiness className={icon} />
        </NavLink>
        <NavLink href="/#projects" label="Projects">
          <FolderGit2 className={icon} />
        </NavLink>
        <NavLink href="/blog" label="Blog">
          <Notebook className={icon} />
        </NavLink>
        <span className="mx-0.5 h-6 w-px shrink-0 bg-border sm:mx-1" />
        <NavLink href={profile.github} label="GitHub">
          <FaGithub className={icon} />
        </NavLink>
        <NavLink href={profile.linkedin} label="LinkedIn">
          <FaLinkedinIn className={icon} />
        </NavLink>
        <button
          type="button"
          onClick={() => window.dispatchEvent(new Event('natanim:contact'))}
          aria-label="Email"
          className={button}
        >
          <FaEnvelope className={icon} />
          <Tip label="Email" />
        </button>
        <span className="mx-0.5 h-6 w-px shrink-0 bg-border sm:mx-1" />
        <button
          type="button"
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className={button}
        >
          <Moon className={`${icon} dark:hidden`} />
          <Sun className={`hidden ${icon} dark:block`} />
          <Tip label="Theme" />
        </button>
      </nav>
    </div>
  );
}

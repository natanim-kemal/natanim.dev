'use client';

import { useState } from 'react';
import ProjectCard from '@/components/portfolio/ProjectCard';
import Reveal from '@/components/portfolio/Reveal';
import type { Project } from '@/lib/portfolio';

const INITIAL = 6;
const button =
  'inline-flex h-9 items-center gap-2 rounded-lg border px-3.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring';

export default function ProjectGrid({ projects }: { projects: Project[] }) {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? projects : projects.slice(0, INITIAL);

  return (
    <>
      <div className="grid auto-rows-fr grid-cols-1 gap-3 sm:grid-cols-2">
        {visible.map((project, index) => (
          <Reveal key={project.name} delay={(index % 2) * 0.05} className="h-full">
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
      {projects.length > INITIAL && (
        <div className="flex justify-center">
          <button type="button" onClick={() => setExpanded((v) => !v)} className={button}>
            {expanded ? 'Show less' : `Show more (${projects.length - INITIAL})`}
          </button>
        </div>
      )}
    </>
  );
}

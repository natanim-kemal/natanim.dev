import Image from 'next/image';
import { ArrowUpRight, Github, Globe } from 'lucide-react';
import type { Project } from '@/lib/portfolio';

const chip =
  'flex items-center gap-1.5 rounded-md border px-2.5 py-1 text-[11px] font-semibold transition-colors';
const chipPrimary = `${chip} border-transparent bg-foreground text-background hover:bg-foreground/85`;
const chipGhost = `${chip} text-muted-foreground hover:bg-muted hover:text-foreground`;

export default function ProjectCard({ project }: { project: Project }) {
  const preview = (
    <div className="relative h-44 w-full overflow-hidden bg-muted sm:h-48">
      <Image
        src={project.image}
        alt={`${project.name} preview`}
        fill
        sizes="(min-width: 640px) 360px, 100vw"
        className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
      />
    </div>
  );

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border transition-all duration-200 hover:ring-2 hover:ring-muted">
      {project.href ? (
        <a
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${project.name}`}
          className="block shrink-0"
        >
          {preview}
        </a>
      ) : (
        <div className="shrink-0">{preview}</div>
      )}

      <div className="flex flex-1 flex-col gap-3 p-5 sm:p-6">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-semibold">{project.name}</h3>
          {project.href && (
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${project.name}`}
              className="rounded-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <ArrowUpRight className="size-4" />
            </a>
          )}
        </div>

        <p className="text-muted-foreground flex-1 text-pretty text-xs leading-relaxed">
          {project.description}
        </p>

        <div className="mt-auto flex flex-wrap gap-1">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-foreground h-6 w-fit rounded-md border px-2 text-[11px] font-medium leading-5"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap gap-2">
          {project.href && (
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className={chipPrimary}
            >
              <Globe className="size-3" />
              Website
            </a>
          )}
          {project.source && (
            <a
              href={project.source}
              target="_blank"
              rel="noopener noreferrer"
              className={chipGhost}
            >
              <Github className="size-3" />
              Source
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

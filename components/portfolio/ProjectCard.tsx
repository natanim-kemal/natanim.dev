import Image from 'next/image';
import { ArrowUpRight, Github, Globe } from 'lucide-react';
import type { Project } from '@/lib/portfolio';
import { skillColors, skillIcons, skillImages } from '@/lib/tech-icons';

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
          {project.tags.map((tag) => {
            const Icon = skillIcons[tag];
            const image = skillImages[tag];
            return (
              <span
                key={tag}
                className="group/chip text-foreground relative flex h-6 w-6 items-center justify-center rounded-md border"
              >
                {image ? (
                  <Image src={image} alt="" width={14} height={14} className="size-3.5 object-contain" />
                ) : Icon ? (
                  <Icon className="size-3.5" style={{ color: skillColors[tag] || 'currentColor' }} />
                ) : (
                  <span className="size-1.5 rounded-full bg-current" />
                )}
                <span className="sr-only">{tag}</span>
                <span
                  aria-hidden
                  className="pointer-events-none absolute bottom-full left-1/2 z-50 mb-2 -translate-x-1/2 translate-y-1 scale-95 rounded-xl bg-primary px-4 py-2 text-sm whitespace-nowrap text-primary-foreground opacity-0 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] transition-all delay-0 duration-150 group-hover/chip:translate-y-0 group-hover/chip:scale-100 group-hover/chip:opacity-100 group-hover/chip:delay-100"
                >
                  {tag}
                </span>
              </span>
            );
          })}
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

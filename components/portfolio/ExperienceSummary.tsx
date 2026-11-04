'use client';

import { useState } from 'react';
import { ChevronRight } from 'lucide-react';

export default function ExperienceSummary({
  summary,
  details,
}: {
  summary: string;
  details?: readonly string[];
}) {
  const [open, setOpen] = useState(false);

  if (!details?.length) {
    return (
      <p className="text-muted-foreground mt-2 max-w-md text-sm leading-relaxed">{summary}</p>
    );
  }

  return (
    <div className="mt-2 max-w-md">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="group flex w-full cursor-pointer items-start gap-1.5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        <ChevronRight
          className={`text-muted-foreground group-hover:text-foreground mt-1 size-3.5 shrink-0 transition-transform duration-200 ${
            open ? 'rotate-90' : ''
          }`}
        />
        <span className="text-muted-foreground text-sm leading-relaxed">{summary}</span>
      </button>
      {open && (
        <ul className="border-border mt-2 ml-[7px] flex flex-col gap-1.5 border-l pl-4">
          {details.map((item) => (
            <li
              key={item}
              className="text-muted-foreground relative text-sm leading-relaxed before:text-foreground/40 before:absolute before:-left-4 before:content-['–']"
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

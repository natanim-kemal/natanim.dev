'use client';

import { useEffect, useRef } from 'react';
import type { ReactNode } from 'react';

export default function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || el.dataset.visible) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.dataset.visible = 'true';
          observer.disconnect();
        }
      },
      { rootMargin: '-60px' },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} data-reveal className={className} style={{ transitionDelay: `${delay}s` }}>
      {children}
    </div>
  );
}

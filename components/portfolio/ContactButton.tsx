'use client';

import type { ReactNode } from 'react';

export default function ContactButton({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event('natanim:contact'))}
      className={className}
    >
      {children}
    </button>
  );
}

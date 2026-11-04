'use client';

import { useEffect, useRef } from 'react';

const REPO = 'natanim-kemal/natanim.dev';

// Giscus renders in an iframe and reads the host page's <html class> to pick
// its theme, so this just keeps a `theme` variable on <html> in sync.
// `light` maps to giscus' built-in `light`, dark to `dark_dimmed`.
export default function GiscusTheme() {
  const raf = useRef(0);

  useEffect(() => {
    const sync = () => {
      const dark = document.documentElement.classList.contains('dark');
      document.documentElement.style.setProperty('theme', dark ? 'dark_dimmed' : 'light');
    };

    sync();
    // the layout's inline theme script may flip the class after mount
    let attempts = 0;
    const poll = window.setInterval(() => {
      sync();
      attempts += 1;
      if (attempts >= 10) window.clearInterval(poll);
    }, 100);

    const observer = new MutationObserver(() => {
      cancelAnimationFrame(raf.current);
      raf.current = requestAnimationFrame(sync);
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    return () => {
      observer.disconnect();
      window.clearInterval(poll);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <script
      src="https://giscus.app/client.js"
      data-repo={REPO}
      data-repo-id=""
      data-category="Announcements"
      data-category-id=""
      data-mapping="pathname"
      data-strict="0"
      data-reactions-enabled="1"
      data-emit-metadata="0"
      data-input-position="bottom"
      data-theme="light"
      data-lang="en"
      data-loading="lazy"
      async
    />
  );
}

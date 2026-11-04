'use client';

import { useEffect, useRef } from 'react';

const REPO = 'natanim-kemal/natanim.dev';
const GISCUS_ORIGIN = 'https://giscus.app';

const themeName = () =>
  document.documentElement.classList.contains('dark')
    ? `${window.location.origin}/giscus-theme.css` // matches site bg #0a0a0a
    : 'light';

// React 19 hoists <script src> into <head>, and giscus inserts its iframe right
// after the script — landing it in <head> (display:none, never loads).
// So we inject the script into a body container ourselves instead of via JSX.
export default function GiscusTheme() {
  const containerRef = useRef<HTMLDivElement>(null);
  const raf = useRef(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    if (!container.querySelector('script')) {
      const script = document.createElement('script');
      script.src = `${GISCUS_ORIGIN}/client.js`;
      script.async = true;
      script.dataset.repo = REPO;
      script.dataset.repoId = 'R_kgDOQllHYQ';
      script.dataset.category = 'Announcements';
      script.dataset.categoryId = 'DIC_kwDOQllHYc4DKYN_';
      script.dataset.mapping = 'pathname';
      script.dataset.strict = '0';
      script.dataset.reactionsEnabled = '1';
      script.dataset.emitMetadata = '0';
      script.dataset.inputPosition = 'bottom';
      script.dataset.theme = themeName();
      script.dataset.lang = 'en';
      container.appendChild(script);
    }

    // giscus iframe only reads data-theme at boot; after that, switch via postMessage
    const sync = () => {
      const frame = document.querySelector<HTMLIFrameElement>('iframe.giscus-frame');
      frame?.contentWindow?.postMessage(
        { giscus: { setConfig: { theme: themeName() } } },
        GISCUS_ORIGIN,
      );
    };
    const observer = new MutationObserver(() => {
      cancelAnimationFrame(raf.current);
      raf.current = requestAnimationFrame(sync);
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf.current);
    };
  }, []);

  return <div ref={containerRef} />;
}

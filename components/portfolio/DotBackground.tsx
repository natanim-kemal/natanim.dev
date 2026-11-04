'use client';

import { useEffect, useRef } from 'react';

const SPACING = 14;
const DASH_W = 3;
const DASH_H = 6;
const TICK_MS = 300;

export default function DotBackground({ className, flip = false }: { className?: string; flip?: boolean }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const parent = canvas?.parentElement;
    if (!canvas || !parent) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let alphas: number[] = [];
    let cols = 0;
    let rows = 0;
    let width = 0;
    let height = 0;
    let dark = false;

    // repaints one cell; much cheaper than redrawing the whole grid
    const paintCell = (i: number) => {
      const cx = i % cols;
      const cy = (i - cx) / cols;
      const a = alphas[i] * (flip ? (cy + 1) / rows : 1 - cy / rows);
      ctx.clearRect(cx * SPACING, cy * SPACING, DASH_W, DASH_H);
      ctx.globalAlpha = (dark ? 0.35 : 0.3) * a;
      ctx.fillRect(cx * SPACING, cy * SPACING, DASH_W, DASH_H);
    };

    const layout = () => {
      const w = parent.clientWidth;
      const h = parent.clientHeight;
      if (!w || !h) return false;
      const dpr = window.devicePixelRatio || 1;
      const pw = Math.round(w * dpr);
      const ph = Math.round(h * dpr);
      // only reallocate the bitmap when the size actually changed
      if (canvas.width !== pw || canvas.height !== ph) {
        canvas.width = pw;
        canvas.height = ph;
        canvas.style.width = `${w}px`;
        canvas.style.height = `${h}px`;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      }
      width = w;
      height = h;
      cols = Math.ceil(w / SPACING);
      rows = Math.ceil(h / SPACING);
      if (alphas.length !== cols * rows) {
        alphas = Array.from({ length: cols * rows }, () => 0.15 + Math.random() * 0.85);
      }
      return true;
    };

    const drawAll = () => {
      if (!layout()) return;
      dark = document.documentElement.classList.contains('dark');
      ctx.fillStyle = dark ? '#ffffff' : '#000000';
      ctx.globalAlpha = 1;
      ctx.clearRect(0, 0, width, height);
      for (let i = 0; i < alphas.length; i++) paintCell(i);
    };

    const flicker = () => {
      if (!alphas.length) return;
      // theme changed since last tick: full repaint so colors never go stale
      if (document.documentElement.classList.contains('dark') !== dark) {
        drawAll();
        return;
      }
      const n = Math.max(6, Math.floor(alphas.length * 0.05));
      for (let k = 0; k < n; k++) {
        const i = Math.floor(Math.random() * alphas.length);
        alphas[i] = 0.05 + Math.random() * 0.95;
        paintCell(i);
      }
    };

    drawAll();
    window.addEventListener('resize', drawAll);

    // repaint the moment the theme class flips, no waiting on the tick
    const observer = new MutationObserver(drawAll);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const interval = reduced ? null : setInterval(flicker, TICK_MS);

    return () => {
      window.removeEventListener('resize', drawAll);
      observer.disconnect();
      if (interval) clearInterval(interval);
    };
  }, [flip]);

  return <canvas ref={ref} aria-hidden className={`pointer-events-none block ${className ?? ''}`} />;
}

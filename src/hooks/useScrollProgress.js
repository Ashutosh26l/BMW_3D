import { useState, useEffect, useRef, useCallback } from 'react';

/**
 * High-performance scroll progress tracker.
 * Returns scroll position, normalised progress within a section,
 * the current "phase" index, and instantaneous velocity.
 *
 * Runs entirely on requestAnimationFrame for jank‑free 60 fps.
 */
export default function useScrollProgress(sectionRef, phases = []) {
  const [state, setState] = useState({
    scrollY: 0,
    progress: 0,   // 0‑1 within sectionRef
    phase: 0,
    velocity: 0,
  });

  const raf = useRef(null);
  const prevScroll = useRef(0);
  const prevTime = useRef(performance.now());

  const update = useCallback(() => {
    const el = sectionRef?.current;
    if (!el) {
      raf.current = requestAnimationFrame(update);
      return;
    }

    const rect = el.getBoundingClientRect();
    const sectionTop = window.scrollY + rect.top;
    const sectionHeight = el.scrollHeight - window.innerHeight;
    const raw = (window.scrollY - sectionTop) / Math.max(sectionHeight, 1);
    const progress = Math.min(Math.max(raw, 0), 1);

    // Velocity (px / ms → normalised per frame)
    const now = performance.now();
    const dt = now - prevTime.current || 16;
    const velocity = (window.scrollY - prevScroll.current) / dt;
    prevScroll.current = window.scrollY;
    prevTime.current = now;

    // Determine phase
    let phase = 0;
    for (let i = 0; i < phases.length; i++) {
      if (progress >= phases[i]) phase = i + 1;
    }

    setState({ scrollY: window.scrollY, progress, phase, velocity });
    raf.current = requestAnimationFrame(update);
  }, [sectionRef, phases]);

  useEffect(() => {
    raf.current = requestAnimationFrame(update);
    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [update]);

  return state;
}

/* ── Helpers ────────────────────────────────────────────────── */

/** Clamp value between min and max */
export function clamp(v, min, max) {
  return Math.min(Math.max(v, min), max);
}

/** Map progress to a sub‑range (0‑1 within [start, end]) */
export function mapRange(progress, start, end) {
  return clamp((progress - start) / (end - start), 0, 1);
}

/** Smooth‑step easing */
export function smoothstep(t) {
  return t * t * (3 - 2 * t);
}

/** Lerp between a and b */
export function lerp(a, b, t) {
  return a + (b - a) * t;
}

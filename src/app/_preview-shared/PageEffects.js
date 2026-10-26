"use client";

import { useEffect } from "react";

/**
 * Pointer and scroll polish for the marketing pages, as progressive enhancement: the page is
 * server-rendered and complete without this; it only sets CSS custom properties on
 * elements marked with data attributes, and the stylesheet does the drawing.
 *
 *   data-glow      hero ambient glow follows the pointer      (--gx, --gy)
 *   data-tilt      3D tilt + inner image drift on hover       (--rx, --ry, --tx, --ty)
 *   data-spotlight gold spotlight follows the pointer         (--mx, --my)
 *   data-magnetic  button eases toward the pointer           (inline transform)
 *   data-parallax  image drifts as it scrolls past           (--py)
 *
 * Skipped entirely for reduced motion; pointer effects need a fine pointer (no touch).
 */
export default function PageEffects() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const cleanups = [];
    const on = (el, type, fn, opts) => {
      el.addEventListener(type, fn, opts);
      cleanups.push(() => el.removeEventListener(type, fn, opts));
    };

    if (finePointer) {
      document.querySelectorAll("[data-glow]").forEach(el => {
        on(el, "pointermove", e => {
          const r = el.getBoundingClientRect();
          // The glow layer spans the full screen width, so x is measured from the screen edge
          el.style.setProperty("--gx", `${e.clientX}px`);
          el.style.setProperty("--gy", `${e.clientY - r.top}px`);
        });
      });

      document.querySelectorAll("[data-tilt]").forEach(el => {
        on(el, "pointermove", e => {
          const r = el.getBoundingClientRect();
          const x = (e.clientX - r.left) / r.width - 0.5;
          const y = (e.clientY - r.top) / r.height - 0.5;
          el.style.setProperty("--ry", `${(x * 7).toFixed(2)}deg`);
          el.style.setProperty("--rx", `${(-y * 7).toFixed(2)}deg`);
          el.style.setProperty("--tx", `${(-x * 18).toFixed(1)}px`);
          el.style.setProperty("--ty", `${(-y * 18).toFixed(1)}px`);
        });
        on(el, "pointerleave", () => {
          ["--rx", "--ry", "--tx", "--ty"].forEach(p => el.style.setProperty(p, p.startsWith("--r") ? "0deg" : "0px"));
        });
      });

      document.querySelectorAll("[data-spotlight]").forEach(el => {
        on(el, "pointermove", e => {
          const r = el.getBoundingClientRect();
          el.style.setProperty("--mx", `${e.clientX - r.left}px`);
          el.style.setProperty("--my", `${e.clientY - r.top}px`);
        });
      });

      document.querySelectorAll("[data-magnetic]").forEach(el => {
        on(el, "pointermove", e => {
          const r = el.getBoundingClientRect();
          const x = e.clientX - (r.left + r.width / 2);
          const y = e.clientY - (r.top + r.height / 2);
          el.style.transform = `translate(${(x * 0.18).toFixed(1)}px, ${(y * 0.28).toFixed(1)}px)`;
        });
        on(el, "pointerleave", () => { el.style.transform = ""; });
      });
    }

    // Scroll parallax, batched to one write per frame
    const parallax = [...document.querySelectorAll("[data-parallax]")];
    let frame = 0;
    const update = () => {
      frame = 0;
      const vh = window.innerHeight;
      parallax.forEach(el => {
        const r = el.getBoundingClientRect();
        if (r.bottom < -100 || r.top > vh + 100) return;
        const progress = (r.top + r.height / 2 - vh / 2) / vh; // -1..1 across the screen
        el.style.setProperty("--py", `${(progress * -36).toFixed(1)}px`);
      });
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update); };
    if (parallax.length) {
      update();
      on(window, "scroll", onScroll, { passive: true });
      on(window, "resize", onScroll, { passive: true });
    }

    return () => {
      if (frame) cancelAnimationFrame(frame);
      cleanups.forEach(fn => fn());
    };
  }, []);

  return null;
}

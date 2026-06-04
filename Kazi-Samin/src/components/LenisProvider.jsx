"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger once
gsap.registerPlugin(ScrollTrigger);

/**
 * LenisProvider
 * Sets up buttery smooth scrolling globally and integrates Lenis
 * with the GSAP ticker so ScrollTrigger stays in sync.
 */
export default function LenisProvider({ children }) {
  useEffect(() => {
    // ── Lenis instance ──────────────────────────────────────────
    const lenis = new Lenis({
      duration: 1.3,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // expo out
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 2,
      infinite: false,
    });

    // ── Sync GSAP ScrollTrigger with Lenis scroll position ──────
    lenis.on("scroll", ScrollTrigger.update);

    // ── Drive Lenis via GSAP ticker for perfect frame sync ───────
    const tickerFn = (time) => lenis.raf(time * 1000);
    gsap.ticker.add(tickerFn);
    gsap.ticker.lagSmoothing(0); // prevent large jumps on tab focus

    // ── Smooth anchor click navigation ──────────────────────────
    const handleAnchorClick = (e) => {
      const href = e.currentTarget.getAttribute("href");
      if (href?.startsWith("#")) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          lenis.scrollTo(target, {
            offset: -80,
            duration: 1.5,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          });
        }
      }
    };

    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach((a) => a.addEventListener("click", handleAnchorClick));

    // ── Cleanup ─────────────────────────────────────────────────
    return () => {
      lenis.destroy();
      gsap.ticker.remove(tickerFn);
      anchors.forEach((a) => a.removeEventListener("click", handleAnchorClick));
    };
  }, []);

  return children;
}

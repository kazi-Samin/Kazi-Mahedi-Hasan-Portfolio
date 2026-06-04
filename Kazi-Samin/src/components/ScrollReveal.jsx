"use client";

import { motion } from "framer-motion";
import { fadeUp, easeExpo, viewport } from "@/lib/animations";

/**
 * ScrollReveal — drop-in replacement for the old IntersectionObserver version.
 * Uses Framer Motion's whileInView for smooth, GPU-accelerated reveals.
 *
 * @param {boolean} initiallyActive - Skip scroll trigger, animate immediately (Hero section)
 * @param {object}  variants        - Override default fadeUp variants
 * @param {number}  delay           - Optional transition delay in seconds
 */
export default function ScrollReveal({
  children,
  className = "",
  initiallyActive = false,
  variants = fadeUp,
  delay = 0,
}) {
  const transitionOverride = delay
    ? { transition: { duration: 0.8, ease: easeExpo, delay } }
    : {};

  const mergedVariants = delay
    ? {
        hidden: variants.hidden,
        visible: { ...variants.visible, ...transitionOverride },
      }
    : variants;

  if (initiallyActive) {
    return (
      <motion.div
        initial="hidden"
        animate="visible"
        variants={mergedVariants}
        className={className}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={mergedVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

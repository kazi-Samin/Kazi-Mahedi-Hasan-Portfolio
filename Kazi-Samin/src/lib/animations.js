/**
 * Reusable Framer Motion animation variants.
 * All use an expo-out easing curve for a premium, cinematic feel.
 */

/** Expo-out easing — snappy start, smooth settle */
export const easeExpo = [0.16, 1, 0.3, 1];

/** Smooth ease-in-out */
export const easeSmooth = [0.25, 0.46, 0.45, 0.94];

// ─────────────────────────────────────────────
// ENTRANCE VARIANTS
// ─────────────────────────────────────────────

export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: easeExpo },
  },
};

export const fadeDown = {
  hidden: { opacity: 0, y: -40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easeExpo },
  },
};

export const fadeLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: easeExpo },
  },
};

export const fadeRight = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: easeExpo },
  },
};

export const scaleUp = {
  hidden: { opacity: 0, scale: 0.82 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.85, ease: easeExpo },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: easeSmooth },
  },
};

// ─────────────────────────────────────────────
// STAGGER CONTAINERS
// ─────────────────────────────────────────────

/** Wraps children that each have their own variants */
export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

/** Slower stagger for grids */
export const staggerContainerSlow = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.1,
    },
  },
};

/** Stagger item — used inside staggerContainer */
export const staggerItem = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: easeExpo },
  },
};

// ─────────────────────────────────────────────
// HERO-SPECIFIC
// ─────────────────────────────────────────────

export const heroContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

export const heroItem = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: easeExpo },
  },
};

export const heroImageVariant = {
  hidden: { opacity: 0, scale: 0.78, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 1.1, ease: easeExpo },
  },
};

// ─────────────────────────────────────────────
// VIEWPORT DEFAULTS
// ─────────────────────────────────────────────

/** Standard viewport config for whileInView triggers */
export const viewport = { once: true, margin: "-80px" };

/** Stricter viewport — element must be more visible */
export const viewportStrict = { once: true, margin: "-120px" };

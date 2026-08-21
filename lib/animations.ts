import type { Transition, Variants } from "framer-motion";

/** Shared easing curve from the design spec */
export const EASE_REVEAL = [0.22, 1, 0.36, 1] as const;

/** Standard section reveal transition */
export const sectionRevealTransition: Transition = {
  duration: 0.6,
  ease: EASE_REVEAL,
};

/** Card hover transition */
export const cardHoverTransition: Transition = {
  duration: 0.2,
  ease: "easeOut",
};

/** Stagger delay between child elements (ms converted to seconds) */
export const STAGGER_CHILD = 0.04;

/** Kinetic type stagger for hero headline */
export const KINETIC_STAGGER = 0.04;

/** Section reveal: fade in + translateY(24px -> 0), triggered once via whileInView */
export const sectionRevealVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: sectionRevealTransition,
  },
};

/** Reduced-motion variant: opacity only, no translate */
export const sectionRevealReducedVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

/** Container variant for staggered children */
export const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: STAGGER_CHILD,
      delayChildren: 0.1,
    },
  },
};

/** Child item for staggered reveals */
export const staggerItemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: sectionRevealTransition,
  },
};

/** Kinetic type: per-word/letter fade-slide on load */
export const kineticWordVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * KINETIC_STAGGER,
      duration: 0.5,
      ease: EASE_REVEAL,
    },
  }),
};

/** Card hover motion values (use with whileHover) */
export const cardHoverMotion = {
  y: -4,
  transition: cardHoverTransition,
};

/** Fade-only variant for reduced motion card hover alternative */
export const cardHoverReducedMotion = {
  opacity: 0.95,
  transition: cardHoverTransition,
};

/** Nav bar background transition on scroll */
export const navScrollVariants: Variants = {
  top: {
    backgroundColor: "rgba(10, 10, 15, 0)",
    backdropFilter: "blur(0px)",
  },
  scrolled: {
    backgroundColor: "rgba(10, 10, 15, 0.85)",
    backdropFilter: "blur(12px)",
  },
};

/** Default viewport options for whileInView triggers */
export const inViewOnce = {
  once: true,
  margin: "-80px" as const,
};

/** Hook-friendly helper: pick variants based on reduced motion preference */
export function getSectionVariants(prefersReducedMotion: boolean): Variants {
  return prefersReducedMotion
    ? sectionRevealReducedVariants
    : sectionRevealVariants;
}

"use client";

import { motion } from "framer-motion";
import {
  cardHoverMotion,
  cardHoverReducedMotion,
  cardHoverTransition,
} from "@/lib/animations";
import { useReducedMotion } from "@/lib/use-reduced-motion";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "article" | "a";
  href?: string;
}

export function Card({
  children,
  className = "",
  as = "div",
  href,
}: CardProps) {
  const prefersReducedMotion = useReducedMotion();
  const hoverProps = prefersReducedMotion
    ? cardHoverReducedMotion
    : cardHoverMotion;

  const baseClass = `card-surface block transition-shadow duration-hover hover:shadow-card-hover ${className}`;

  if (as === "a" && href) {
    return (
      <motion.a
        href={href}
        className={baseClass}
        whileHover={hoverProps}
        transition={cardHoverTransition}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.div
      className={baseClass}
      whileHover={hoverProps}
      transition={cardHoverTransition}
    >
      {children}
    </motion.div>
  );
}

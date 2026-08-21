"use client";

import { motion } from "framer-motion";
import { getSectionVariants, inViewOnce } from "@/lib/animations";
import { useReducedMotion } from "@/lib/use-reduced-motion";

interface SectionWrapperProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  label?: string;
  title?: string;
  description?: string;
}

export function SectionWrapper({
  id,
  children,
  className = "",
  label,
  title,
  description,
}: SectionWrapperProps) {
  const prefersReducedMotion = useReducedMotion();
  const variants = getSectionVariants(prefersReducedMotion);

  return (
    <section id={id} className={`section-padding ${className}`}>
      <motion.div
        className="section-container"
        initial="hidden"
        whileInView="visible"
        viewport={inViewOnce}
        variants={variants}
      >
        {(label || title || description) && (
          <header className="mb-10 md:mb-14">
            {label && <p className="section-label mb-3">{label}</p>}
            {title && <h2 className="section-title text-balance">{title}</h2>}
            {description && (
              <p className="mt-4 max-w-narrow text-body text-muted">{description}</p>
            )}
          </header>
        )}
        {children}
      </motion.div>
    </section>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { getHeroContent, getSiteConfig } from "@/lib/content";
import { kineticWordVariants, EASE_REVEAL } from "@/lib/animations";
import { useReducedMotion } from "@/lib/use-reduced-motion";
import { SocialLinks } from "@/components/SocialLinks";

export function Hero() {
  const hero = getHeroContent();
  const site = getSiteConfig();
  const prefersReducedMotion = useReducedMotion();
  const [showFact, setShowFact] = useState(false);
  const words = hero.headline.split(" ");

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center section-padding pt-24"
    >
      <div className="section-container grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="order-2 lg:order-1">
          <motion.h1
            className="font-display text-hero font-bold text-balance"
            initial="hidden"
            animate="visible"
          >
            {words.map((word, i) => (
              <motion.span
                key={`${word}-${i}`}
                custom={i}
                variants={kineticWordVariants}
                className="mr-[0.25em] inline-block"
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            className="mt-6 max-w-narrow text-body text-muted"
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: words.length * 0.04 + 0.2,
              duration: 0.6,
              ease: EASE_REVEAL,
            }}
          >
            {hero.subhead}
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap gap-4"
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: words.length * 0.04 + 0.35,
              duration: 0.6,
              ease: EASE_REVEAL,
            }}
          >
            <a href={hero.cta.primary.target} className="btn-primary">
              {hero.cta.primary.label}
            </a>
            <a href={hero.cta.secondary.target} className="btn-secondary">
              {hero.cta.secondary.label}
            </a>
          </motion.div>

          <motion.div
            className="mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: words.length * 0.04 + 0.5, duration: 0.5 }}
          >
            <SocialLinks links={site.links} iconSize={20} />
          </motion.div>
        </div>

        <motion.div
          className="relative order-1 mx-auto w-full max-w-md lg:order-2 lg:max-w-[32rem]"
          initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.7, ease: EASE_REVEAL }}
        >
          <div className="hero-visual-shell">
            <span className="hero-neon-orb hero-orb-one" />
            <span className="hero-neon-orb hero-orb-two" />
            <span className="hero-neon-orb hero-orb-three" />

            <button
              type="button"
              onClick={() => setShowFact((prev) => !prev)}
              className="group relative z-10 block w-full cursor-pointer overflow-hidden rounded-[2rem] border border-white/10 bg-surface/40 shadow-[0_0_60px_rgba(124,58,237,0.18)] backdrop-blur-sm focus-visible:outline-none"
              aria-label="Reveal a fun fact about Samiya"
            >
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src={hero.photo.src}
                  alt={hero.photo.alt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.02] group-focus-visible:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface/25 via-transparent to-transparent" />
              </div>
            </button>
          </div>

          <AnimatePresence>
            {showFact && (
              <motion.div
                initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: prefersReducedMotion ? 0 : 8 }}
                transition={{ duration: 0.3, ease: EASE_REVEAL }}
                className="absolute -bottom-4 left-4 right-4 z-10 rounded-xl border border-border-subtle bg-surface/95 p-4 text-sm text-primary shadow-glow backdrop-blur-sm"
                role="status"
              >
                {hero.microInteraction.fact}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

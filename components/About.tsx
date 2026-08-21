"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { getAboutContent } from "@/lib/content";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export function About() {
  const about = getAboutContent();
  const [greetingIndex, setGreetingIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setGreetingIndex((prev) => (prev + 1) % about.greetings.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [about.greetings.length]);

  return (
    <SectionWrapper id="about" label="About" title="The Person Behind The Projects">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="mb-6 font-display text-lg text-muted">
            <span className="gradient-text text-4xl font-semibold sm:text-5xl">
              {about.greetings[greetingIndex]}
            </span>
            <span className="mx-2 text-border-subtle">·</span>
            <span>Samiya here</span>
          </p>
          <div className="space-y-4 text-body text-muted">
            {about.bio.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-8">
            <p className="section-label mb-4">Tech stack</p>
            <div className="flex flex-wrap gap-2">
              {about.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-border-subtle bg-surface px-3 py-1.5 text-xs text-primary"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-2xl border border-border-subtle lg:max-w-none">
          <Image
            src={about.photo.src}
            alt={about.photo.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>
    </SectionWrapper>
  );
}

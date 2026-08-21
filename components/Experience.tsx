import { getExperienceContent } from "@/lib/content";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

function BriefcaseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
    </svg>
  );
}

export function Experience() {
  const experience = getExperienceContent();

  return (
    <SectionWrapper
      id="experience"
      label="Experience"
      title="Where I have been building"
      className="bg-surface/30"
    >
      <div className="space-y-6">
        {experience.map((role) => (
          <article
            key={role.id}
            className="flex gap-4 rounded-xl border border-border-subtle bg-surface/50 p-5 transition-colors hover:border-accent-start/30 md:gap-6 md:p-6"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-gradient-subtle text-accent-end">
              <BriefcaseIcon />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
                <h3 className="font-display text-lg font-semibold text-primary">
                  {role.title}
                  <span className="font-normal text-muted"> · {role.company}</span>
                </h3>
                <p className="shrink-0 text-sm text-muted">{role.period}</p>
              </div>
              <p className="mt-1 text-xs text-muted">
                {role.type} · {role.location}
              </p>
              <p className="mt-3 text-body text-muted">{role.description}</p>
            </div>
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
}

import { getTestimonialsContent } from "@/lib/content";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

function QuoteIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-accent-start/40" aria-hidden="true">
      <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
    </svg>
  );
}

export function Testimonials() {
  const testimonials = getTestimonialsContent();

  return (
    <SectionWrapper
      id="testimonials"
      label="Testimonials"
      title="What colleagues say"
      className="bg-surface/30"
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((item) => (
          <blockquote
            key={item.id}
            className="card-surface flex flex-col p-6"
          >
            <QuoteIcon />
            <p className="mt-4 flex-1 text-body italic text-muted">&ldquo;{item.quote}&rdquo;</p>
            <footer className="mt-6 border-t border-border-subtle pt-4">
              <cite className="not-italic">
                <p className="font-display font-medium text-primary">{item.name}</p>
                <p className="text-sm text-muted">
                  {item.title}, {item.company}
                </p>
              </cite>
            </footer>
          </blockquote>
        ))}
      </div>
    </SectionWrapper>
  );
}

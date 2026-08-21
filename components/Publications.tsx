import Image from "next/image";
import { getPublicationsContent } from "@/lib/content";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { MediumArticles } from "@/components/MediumArticles";

function isPlaceholderLink(url: string): boolean {
  return url.startsWith("[");
}

export function Publications() {
  const { book, papers } = getPublicationsContent();

  return (
    <SectionWrapper
      id="publications"
      label="Publications & Writing"
      title="Research, books, and essays"
      className="bg-surface/30"
    >
      <div className="space-y-12">
        <article className="card-surface overflow-hidden">
          <div className="grid md:grid-cols-[200px_1fr]">
            <div className="relative aspect-[3/4] w-full md:aspect-auto md:min-h-[280px]">
              <Image
                src={book.cover}
                alt={`Cover of ${book.title}`}
                fill
                sizes="200px"
                className="object-cover"
              />
            </div>
            <div className="p-6 md:p-8">
              <p className="text-xs font-medium uppercase tracking-widest text-accent-end">
                Published {book.published}
              </p>
              <h3 className="mt-2 font-display text-xl font-semibold text-primary">{book.title}</h3>
              <p className="mt-3 text-body text-muted">{book.pitch}</p>
              <a
                href={isPlaceholderLink(book.link) ? undefined : book.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-5 inline-block text-sm font-medium ${
                  isPlaceholderLink(book.link) ? "text-muted" : "text-accent-end hover:underline"
                }`}
              >
                {isPlaceholderLink(book.link) ? book.link : "Read or buy →"}
              </a>
            </div>
          </div>
        </article>

        <div>
          <h3 className="mb-4 font-display text-lg font-semibold text-primary">Research Papers</h3>
          <div className="space-y-4">
            {papers.map((paper) => (
              <article key={paper.title} className="card-surface p-5 md:p-6">
                <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                  <h4 className="font-display font-medium text-primary">{paper.title}</h4>
                  <p className="shrink-0 text-xs text-muted">
                    {paper.venue} · {paper.date}
                  </p>
                </div>
                <p className="mt-2 text-sm text-muted">{paper.abstract}</p>
                {isPlaceholderLink(paper.link) ? (
                  <p className="mt-3 text-sm text-muted">{paper.link}</p>
                ) : (
                  <a
                    href={paper.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block text-sm font-medium text-accent-end hover:underline"
                  >
                    Read paper →
                  </a>
                )}
              </article>
            ))}
          </div>
        </div>

        <MediumArticles />
      </div>
    </SectionWrapper>
  );
}

import Image from "next/image";
import { getCertificationsContent } from "@/lib/content";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export function Certifications() {
  const certifications = getCertificationsContent();

  return (
    <SectionWrapper
      id="certifications"
      label="Certifications & Licenses"
      title="Credentials"
      description="A growing collection of certifications across generative AI, cloud, and LLM operations."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {certifications.map((certification) => {
          const Card = certification.verificationUrl ? "a" : "article";

          return (
          <Card
            key={certification.id}
            {...(certification.verificationUrl
              ? {
                  href: certification.verificationUrl,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  "aria-label": `Verify ${certification.title}`,
                }
              : {})}
            className="card-surface group block overflow-hidden transition-shadow duration-hover hover:shadow-card-hover focus-visible:outline-none"
          >
            <div className="relative aspect-[4/3] w-full bg-surface">
              {certification.image ? (
                <Image
                  src={certification.image}
                  alt={`${certification.title} certificate`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-contain p-3"
                />
              ) : (
                <div className="flex h-full items-center justify-center p-6 text-center text-sm text-muted">
                  Certificate image not available
                </div>
              )}
            </div>
            <div className="p-5">
              <p className="text-xs font-medium uppercase tracking-widest text-accent-end">
                {certification.issuer}
              </p>
              <h3 className="mt-2 font-display text-lg font-semibold text-primary">
                {certification.title}
              </h3>
              <p className="mt-2 text-sm text-muted">
                Issued {certification.issued}
                {certification.expires ? ` · Expires ${certification.expires}` : ""}
              </p>
              <p className="mt-4 text-sm font-medium text-accent-end">
                Verify certificate <span aria-hidden="true">↗</span>
              </p>
            </div>
          </Card>
          );
        })}
        <p className="py-3 text-center font-display text-lg italic text-muted sm:col-span-2 lg:col-span-4">
          and more...
        </p>
      </div>
    </SectionWrapper>
  );
}

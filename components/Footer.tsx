import { getSiteConfig } from "@/lib/content";
import { SocialLinks } from "@/components/SocialLinks";

export function Footer() {
  const site = getSiteConfig();

  return (
    <footer id="contact" className="border-t border-border-subtle section-padding pb-10 pt-section-sm">
      <div className="section-container">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="font-display text-xl font-semibold text-primary">{site.name}</p>
            <p className="mt-2 text-sm text-muted">{site.positioning}</p>
            <p className="mt-4 text-sm italic text-muted">{site.footer.currentlyReading}</p>
          </div>
          <SocialLinks links={site.links} iconSize={22} />
        </div>
      </div>
    </footer>
  );
}

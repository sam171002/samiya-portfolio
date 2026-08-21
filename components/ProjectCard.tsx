import Image from "next/image";
import type { ProjectItem } from "@/types/content";
import { Card } from "@/components/ui/Card";

function isPlaceholderLink(url?: string): boolean {
  return !url || url.startsWith("[");
}

interface ProjectCardProps {
  project: ProjectItem;
  featured?: boolean;
}

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  return (
    <Card className={`group overflow-hidden ${featured ? "md:col-span-2" : ""}`}>
      <div className={`relative w-full overflow-hidden ${featured ? "aspect-[21/9]" : "aspect-video"}`}>
        <Image
          src={project.image}
          alt={`Screenshot of ${project.title}`}
          fill
          sizes={featured ? "100vw" : "(max-width: 768px) 100vw, 50vw"}
          unoptimized={project.id === "omnisource"}
          className={`${project.id === "omnisource" ? "bg-white object-contain" : "object-cover"} transition-transform duration-300 group-hover:scale-[1.03]`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-base/90 via-base/20 to-transparent" />
      </div>
      <div className={`p-5 ${featured ? "md:p-8" : ""}`}>
        <p className="text-xs font-medium uppercase tracking-widest text-accent-end">
          {project.tagline}
        </p>
        <h3 className={`mt-2 font-display font-semibold text-primary ${featured ? "text-2xl" : "text-xl"}`}>
          {project.title}
        </h3>
        <p className="mt-2 text-sm text-muted">{project.impact}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-md bg-base/60 px-2 py-1 text-xs text-muted"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-5 flex flex-wrap gap-4">
          {project.links.demo &&
            (isPlaceholderLink(project.links.demo) ? (
              <span className="text-sm text-muted">{project.links.demo}</span>
            ) : (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-accent-end hover:underline"
              >
                View demo →
              </a>
            ))}
          {project.links.github &&
            (isPlaceholderLink(project.links.github) ? (
              <span className="text-sm text-muted">{project.links.github}</span>
            ) : (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-accent-end hover:underline"
              >
                View on GitHub →
              </a>
            ))}
        </div>
      </div>
    </Card>
  );
}

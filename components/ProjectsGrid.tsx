import { getProjectsContent } from "@/lib/content";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { ProjectCard } from "@/components/ProjectCard";

export function ProjectsGrid() {
  const projects = getProjectsContent();

  return (
    <SectionWrapper
      id="projects"
      label="Projects"
      title="Featured work"
      description="Production GenAI systems, fine-tuning experiments, and full-stack builds."
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            featured={project.featured}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}

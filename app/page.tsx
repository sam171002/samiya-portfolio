import { Nav } from "@/components/Nav";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Hero } from "@/components/Hero";
import { StatsBar } from "@/components/StatsBar";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { ProjectsGrid } from "@/components/ProjectsGrid";
import { Publications } from "@/components/Publications";
import { Certifications } from "@/components/Certifications";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <StatsBar />
        <About />
        <Experience />
        <ProjectsGrid />
        <Publications />
        <Certifications />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}

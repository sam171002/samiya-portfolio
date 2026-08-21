import type {
  AboutContent,
  CertificationItem,
  ExperienceItem,
  HeroContent,
  ProjectItem,
  PublicationsContent,
  SiteConfig,
  StatItem,
  TestimonialItem,
} from "@/types/content";
import testimonialsData from "@/content/testimonials.json";
import aboutData from "@/content/about.json";
import certificationsData from "@/content/certifications.json";
import experienceData from "@/content/experience.json";
import heroData from "@/content/hero.json";
import projectsData from "@/content/projects.json";
import publicationsData from "@/content/publications.json";
import siteConfig from "@/content/site.json";
import statsData from "@/content/stats.json";

export function getSiteConfig(): SiteConfig {
  return siteConfig as SiteConfig;
}

export function getHeroContent(): HeroContent {
  return heroData as HeroContent;
}

export function getStatsContent(): StatItem[] {
  return statsData.stats as StatItem[];
}

export function getAboutContent(): AboutContent {
  return aboutData as AboutContent;
}

export function getCertificationsContent(): CertificationItem[] {
  return certificationsData.certifications as CertificationItem[];
}

export function getExperienceContent(): ExperienceItem[] {
  return experienceData.experience as ExperienceItem[];
}

export function getProjectsContent(): ProjectItem[] {
  return projectsData.projects as ProjectItem[];
}

export function getPublicationsContent(): PublicationsContent {
  return publicationsData as PublicationsContent;
}

export function getTestimonialsContent(): TestimonialItem[] {
  return testimonialsData.testimonials as TestimonialItem[];
}

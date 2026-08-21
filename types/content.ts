export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  positioning: string;
  links: {
    linkedin: string;
    github: string;
    medium: string;
    email: string;
  };
  footer: {
    currentlyReading: string;
  };
  github: {
    username: string;
  };
  medium: {
    username: string;
  };
}

export interface HeroContent {
  headline: string;
  subhead: string;
  cta: {
    primary: { label: string; target: string };
    secondary: { label: string; target: string };
  };
  photo: {
    src: string;
    alt: string;
  };
  microInteraction: {
    type: "fact";
    fact: string;
  };
}

export interface StatItem {
  id: string;
  label: string;
  value?: number;
  suffix?: string;
  source: "static" | "github";
  githubKey?: "public_repos" | "followers" | "totalStars";
}

export interface AboutContent {
  greetings: string[];
  bio: string[];
  techStack: string[];
  photo: {
    src: string;
    alt: string;
  };
}

export interface ExperienceItem {
  id: string;
  title: string;
  company: string;
  type: string;
  period: string;
  location: string;
  description: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  impact: string;
  description: string;
  tech: string[];
  links: {
    demo?: string;
    github?: string;
  };
  image: string;
  featured?: boolean;
}

export interface PublicationBook {
  title: string;
  pitch: string;
  published: string;
  cover: string;
  link: string;
}

export interface PublicationPaper {
  title: string;
  venue: string;
  date: string;
  abstract: string;
  link: string;
}

export interface PublicationsContent {
  book: PublicationBook;
  papers: PublicationPaper[];
}

export interface TestimonialItem {
  id: string;
  quote: string;
  name: string;
  title: string;
  company: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  issued: string;
  expires?: string;
  image?: string;
  verificationUrl?: string;
  skills: string[];
}

export interface MediumArticle {
  title: string;
  link: string;
  pubDate: string;
  description: string;
}

export interface GitHubStats {
  public_repos: number;
  followers: number;
  totalStars: number;
}

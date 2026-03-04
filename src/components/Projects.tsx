import ProjectCard, { type Project } from "./ProjectCard";

const projectPreviews = {
  htailorsGifUrl:
    "https://pub-5d9166ba62984fd38a0185b21e8ba486.r2.dev/htailors.gif",
  pulseGifUrl:
    "https://pub-5d9166ba62984fd38a0185b21e8ba486.r2.dev/pulse-vid.gif",
  logbookGifUrl:
    "https://pub-5d9166ba62984fd38a0185b21e8ba486.r2.dev/logbook.gif",
};

const projects: Project[] = [
  {
    name: "HTailors",
    description: "Full-Stack E-Commerce Platform",
    tech: [
      "Next.js",
      "TypeScript",
      "tRPC",
      "TanStack Query",
      "Drizzle ORM",
      "PostgreSQL",
      "Stripe",
    ],
    highlights: [
      "Production-style full-stack e-commerce app with modular, domain-based architecture",
      "Type-safe API layer with tRPC and schema-validated contracts",
      "Server-side rendering/prefetching/hydration for performance and SEO",
      "Cart + checkout with optimistic UI updates and server-side validation",
      "Stripe webhooks with signature verification to persist final order state",
      "Resilient UX patterns with Suspense + Error Boundaries",
    ],
    coverGradient: "bg-gradient-to-br from-primary/80 to-primary/40",
    gifUrl: projectPreviews.htailorsGifUrl,
    githubUrl: "https://github.com/Harimz/NextJs-Ecommerce",
    liveUrl: "https://www.htailors.shop",
    imageUrl: "/portfolio-images/htailors-image.png",
  },
  {
    name: "Pulse",
    description: "Social Activity Feed Platform",
    tech: ["React", "Spring Boot", "PostgreSQL", "JUnit"],
    highlights: [
      "Full-stack social platform with modular React frontend and Spring Boot backend",
      "Cursor-based pagination for scalable infinite scrolling feeds",
      "Follow/like relationships with relational integrity",
      "JWT auth using Spring Security (protected routes + token refresh)",
      "Event-driven notifications triggered by backend domain events",
      "Integration tests using JUnit/Spring testing utilities",
    ],
    coverGradient: "bg-gradient-to-br from-foreground/70 to-foreground/30",
    liveUrl: "https://www.pulse-feed.online/login",
    githubUrl: "https://github.com/Harimz/pulse-client",
    imageUrl: "/portfolio-images/pulse-image.png",
    gifUrl: projectPreviews.pulseGifUrl,
  },
  {
    name: "Logbook",
    description: "Full-Stack Blogging Platform",
    tech: ["React", "TypeScript", "Spring Boot", "PostgreSQL"],
    highlights: [
      "Modular React frontend integrated with a Spring Boot monolith",
      "JWT auth with refresh tokens stored in HTTP-only cookies",
      "REST APIs with validation and structured error handling",
      "CRUD workflows for posts, categories, profile management",
      "Improved UX with caching + loading skeletons",
    ],
    coverGradient:
      "bg-gradient-to-br from-secondary-foreground/60 to-muted-foreground/30",
    gifUrl: projectPreviews.logbookGifUrl,
    githubUrl: "https://github.com/Harimz/blog-react-client",
    liveUrl: "https://www.logbook-blog.online",
    imageUrl: "/portfolio-images/logbook-image.png",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24">
      <div className="section-container">
        <p className="text-sm font-medium text-primary tracking-widest uppercase mb-2">
          Featured Work
        </p>
        <h2 className="heading-display text-3xl md:text-4xl font-bold text-foreground mb-12">
          Projects
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((p) => (
            <ProjectCard key={p.name} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

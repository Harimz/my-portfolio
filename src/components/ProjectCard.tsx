import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";

export interface Project {
  name: string;
  description: string;
  tech: string[];
  highlights: string[];
  liveUrl?: string;
  githubUrl?: string;
  coverGradient: string;
  gifUrl?: string;
  imageUrl?: string;
}

const ProjectCard = ({ project }: { project: Project }) => {
  const [hovered, setHovered] = useState(false);
  const [tapped, setTapped] = useState(false);

  const hasGif = !!project.gifUrl;
  const hasImage = !!project.imageUrl;

  const showGif = (hovered || tapped) && hasGif;

  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden group transition-shadow hover:shadow-lg">
      {" "}
      <div
        className="relative aspect-video overflow-hidden cursor-pointer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => setTapped((t) => !t)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && setTapped((t) => !t)}
        aria-label={`Preview ${project.name}`}
      >
        <div
          className={[
            "absolute inset-0",
            project.coverGradient,
            "transition-opacity duration-500",
            hasImage ? "opacity-0" : "opacity-100",
          ].join(" ")}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-heading text-2xl font-bold text-primary-foreground/80">
              {project.name}
            </span>
          </div>
        </div>

        {hasImage && (
          <img
            src={project.imageUrl}
            alt={`${project.name} cover`}
            loading="lazy"
            className={[
              "absolute inset-0 w-full h-full object-cover",
              "transition-all duration-500",
              showGif ? "opacity-0 scale-100" : "opacity-100 scale-100",
            ].join(" ")}
          />
        )}

        {hasGif && (
          <img
            src={project.gifUrl}
            alt={`${project.name} preview`}
            className={[
              "absolute inset-0 w-full h-full object-cover",
              "transition-all duration-500",
              showGif ? "opacity-100 scale-105" : "opacity-0 scale-100",
            ].join(" ")}
          />
        )}

        <div
          className={[
            "absolute top-3 right-3 bg-foreground/80 text-background text-xs px-2 py-1 rounded",
            "transition-opacity duration-300",
            showGif ? "opacity-100" : "opacity-0",
          ].join(" ")}
        >
          Preview
        </div>

        {!hasGif && (
          <div className="absolute bottom-3 left-3 text-primary-foreground/60 text-xs">
            GIF preview coming soon
          </div>
        )}
      </div>
      <div className="p-6 flex flex-col flex-1">
        {" "}
        <div>
          <h3 className="font-heading text-xl font-bold text-foreground mb-1">
            {project.name}
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded font-medium"
              >
                {t}
              </span>
            ))}
          </div>

          <ul className="space-y-1.5 mb-5">
            {project.highlights.map((h, i) => (
              <li key={i} className="text-sm text-muted-foreground flex gap-2">
                <span className="text-primary mt-1 shrink-0">•</span>
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex gap-3 mt-auto">
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm font-medium bg-primary text-primary-foreground px-4 py-2 rounded-md hover:opacity-90 transition-opacity"
            >
              <ExternalLink size={14} /> Live
            </a>
          ) : (
            <span className="flex items-center gap-1.5 text-sm font-medium bg-muted text-muted-foreground px-4 py-2 rounded-md cursor-default">
              <ExternalLink size={14} /> Live (soon)
            </span>
          )}

          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm font-medium border border-border text-foreground px-4 py-2 rounded-md hover:bg-secondary transition-colors"
            >
              <Github size={14} /> GitHub
            </a>
          ) : (
            <span className="flex items-center gap-1.5 text-sm font-medium border border-border text-muted-foreground px-4 py-2 rounded-md cursor-default">
              <Github size={14} /> GitHub (soon)
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

import { ArrowUpRight, Gamepad2, Smartphone } from "lucide-react";
import type { PortfolioProject } from "@/types/PortfolioProject";

interface ProjectCardProps {
  project: PortfolioProject;
}

const ProjectCard = ({ project }: ProjectCardProps) => (
  <article className="project-card">
    <a
      href={project.playUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`project-image ${project.category === "android" ? "mobile-game-cover" : project.imageUrl ? "" : "arcade-cover"}`}
      aria-label={`View ${project.title} on ${project.platform} (opens in a new tab)`}
    >
      {project.screenshots ? (
        <div className="game-screenshots">
          {project.screenshots.map((screenshot, index) => (
            <img
              key={screenshot}
              src={screenshot}
              alt={`${project.title} gameplay screenshot ${index + 1}`}
              loading="lazy"
            />
          ))}
        </div>
      ) : project.imageUrl ? (
        <img
          src={project.imageUrl}
          alt={`${project.title} game artwork`}
          loading="lazy"
        />
      ) : (
        <div className="arcade-art" aria-hidden="true">
          <span className="arcade-orbit" />
          <Gamepad2 size={58} strokeWidth={1.3} />
          <span className="arcade-title">
            JUMP
            <br />
            <strong>DASH</strong>
          </span>
          <span className="arcade-label">2D ARCADE / UNITY</span>
        </div>
      )}
      <span className="project-year">
        {project.category === "android" ? (
          <>
            <Smartphone size={12} /> ANDROID
          </>
        ) : (
          project.year
        )}
      </span>
      <span className="image-link">
        <ArrowUpRight size={22} />
      </span>
    </a>
    <div className="project-content">
      <div className="game-identity">
        {project.iconUrl && (
          <img
            className="game-icon"
            src={project.iconUrl}
            alt=""
            width={44}
            height={44}
            loading="lazy"
          />
        )}
        <div>
          <h3>{project.title}</h3>
          <span className="game-publisher">
            {project.publisher ?? "Personal project"}
          </span>
        </div>
      </div>
      <p>{project.description}</p>
      {project.role && <p className="project-role">{project.role}</p>}
      <div className="project-tags">
        {project.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
      <a
        className="text-link"
        href={project.playUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        {project.platform === "Google Play"
          ? "View on Google Play"
          : "Play on itch.io"}
        <ArrowUpRight size={17} />
      </a>
    </div>
  </article>
);

export default ProjectCard;

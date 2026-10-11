import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

const filters = [
  { value: "all", label: "All games" },
  { value: "android", label: "Android games" },
  { value: "personal", label: "Personal projects" },
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const shouldReduceMotion = useReducedMotion();
  const visibleProjects = projects.filter(
    (project) => activeFilter === "all" || project.category === activeFilter,
  );

  return (
    <section id="projects" className="section-space projects-section">
      <div className="page-container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">01 / THE GAME COLLECTION</p>
            <h2>
              Small screens.
              <br />
              Big possibilities.
            </h2>
          </div>
          <p>
            Mobile puzzles and personal adventures.
            <br />
            Explore the gameplay. Find your next favorite.
          </p>
        </div>
        <div className="project-toolbar">
          <div
            className="project-filters"
            role="group"
            aria-label="Filter projects"
          >
            {filters.map((filter) => (
              <button
                key={filter.value}
                className="project-filter"
                aria-pressed={activeFilter === filter.value}
                onClick={() => setActiveFilter(filter.value)}
              >
                {activeFilter === filter.value && (
                  <motion.span
                    className="filter-indicator"
                    layoutId="project-filter"
                    transition={shouldReduceMotion ? { duration: 0 } : { type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span>{filter.label}</span>
                <span className="filter-count">
                  {filter.value === "all"
                    ? projects.length
                    : projects.filter(
                        (project) => project.category === filter.value,
                      ).length}
                </span>
              </button>
            ))}
          </div>
          <span className="collection-note" aria-live="polite">
            {visibleProjects.length} games to explore
          </span>
        </div>
        <motion.div layout={!shouldReduceMotion} className="project-grid">
          <AnimatePresence mode="popLayout" initial={false}>
            {visibleProjects.map((project) => (
              <motion.div
                key={project.playUrl}
                layout={!shouldReduceMotion}
                initial={{
                  opacity: shouldReduceMotion ? 1 : 0,
                  y: shouldReduceMotion ? 0 : 18,
                }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.97 }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.35,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

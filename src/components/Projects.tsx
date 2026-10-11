import { useLayoutEffect, useState } from "react";
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
  const [gridElement, setGridElement] = useState<HTMLDivElement | null>(null);
  const [gridHeight, setGridHeight] = useState<number>();
  const shouldReduceMotion = useReducedMotion();
  const visibleProjects = projects.filter(
    (project) => activeFilter === "all" || project.category === activeFilter,
  );

  useLayoutEffect(() => {
    if (!gridElement) {
      return;
    }

    const updateHeight = () => {
      setGridHeight(Math.ceil(gridElement.getBoundingClientRect().height));
    };

    updateHeight();
    const observer = new ResizeObserver(updateHeight);
    observer.observe(gridElement);
    return () => observer.disconnect();
  }, [gridElement]);

  return (
    <section id="projects" className="section-space projects-section">
      <div className="page-container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">02 / THE GAME COLLECTION</p>
            <h2>
              Small screens.
              <br />
              Big possibilities.
            </h2>
          </div>
          <p>
            <strong>Gameplay / Unity development</strong> across mobile puzzles
            <br />
            and personal adventures. Explore the games below.
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
        <motion.div
          className="project-stage"
          initial={false}
          animate={{ height: gridHeight ?? "auto" }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.28,
            ease: [0.25, 0.1, 0.25, 1],
          }}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={activeFilter}
              ref={setGridElement}
              className="project-grid"
              initial={{ opacity: shouldReduceMotion ? 1 : 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: shouldReduceMotion ? 1 : 0 }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.16,
                ease: "easeInOut",
              }}
            >
              {visibleProjects.map((project) => (
                <ProjectCard key={project.playUrl} project={project} />
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

import { ArrowUpRight, Code2, GraduationCap, Layers, Zap } from "lucide-react";
import ResumeLink from "@/components/ResumeLink";
import { prototypes } from "@/data/profile";

const Experience = () => (
  <section id="experience" className="section-space experience-section">
    <div className="page-container">
      <div className="section-heading">
        <div>
          <p className="eyebrow">01 / EXPERIENCE & SKILLS</p>
          <h2>
            Gameplay first.
            <br />
            Built to last.
          </h2>
        </div>
        <ResumeLink className="action-button resume-light" />
      </div>
      <div className="experience-grid">
        <div className="work-timeline">
          <article className="work-entry">
            <div className="work-meta">
              <span>Zlab Studio</span>
              <span>Jan 2026 — Present</span>
            </div>
            <h3>Unity Game Developer</h3>
            <ul>
              <li>
                Collaborated with game designers on a{" "}
                <strong>casual puzzle game</strong>, delivering a{" "}
                <strong>playable prototype within 2 weeks</strong>.
              </li>
              <li>
                Implemented and optimized <strong>core gameplay systems</strong>{" "}
                for a smoother player experience.
              </li>
              <li>
                Used <strong>playtesting and player feedback</strong> to refine
                mechanics and engagement.
              </li>
            </ul>
          </article>
          <article className="work-entry">
            <div className="work-meta">
              <span>Ebizworld</span>
              <span>Sep — Dec 2025</span>
            </div>
            <h3>Unity Game Developer Intern</h3>
            <ul>
              <li>
                Worked with <strong>Unity C#</strong> and the{" "}
                <strong>Singleton and Observer</strong> design patterns.
              </li>
              <li>
                Built <strong>component-based architecture</strong> and scalable{" "}
                <strong>buff / status effect systems</strong> with
                maintainability and extensibility in mind.
              </li>
            </ul>
          </article>
        </div>
        <aside
          className="expertise-panel"
          aria-label="Technical skills and education"
        >
          <h3>What I bring to the team</h3>
          <div className="expertise-item">
            <Code2 size={20} />
            <div>
              <strong>Unity 2D / 3D & C#</strong>
              <p>
                Gameplay programming, GDD comprehension, and puzzle, casual, and
                hypercasual games.
              </p>
            </div>
          </div>
          <div className="expertise-item">
            <Layers size={20} />
            <div>
              <strong>SOLID & Design Patterns</strong>
              <p>
                MVC, component-based architecture, and maintainable gameplay
                systems.
              </p>
            </div>
          </div>
          <div className="expertise-item">
            <Zap size={20} />
            <div>
              <strong>Performance & Production</strong>
              <p>Optimization, Addressables, Firebase, Git flow, and CI/CD.</p>
            </div>
          </div>
          <div className="education-note">
            <GraduationCap size={20} />
            <div>
              <strong>Van Hien University</strong>
              <span>Computer Science</span>
            </div>
          </div>
          <p className="supporting-skills">
            Also familiar with Java, TCP/UDP, backend CRUD, Photoshop, and
            Figma.
          </p>
        </aside>
      </div>
      <div className="prototype-section">
        <div className="prototype-heading">
          <h3>More gameplay prototypes</h3>
          <p>Experiments in mechanics, puzzles, and 3D gameplay.</p>
        </div>
        <div className="prototype-grid">
          {prototypes.map((prototype) => (
            <article className="prototype-card" key={prototype.title}>
              <span>{prototype.category}</span>
              <h4>{prototype.title}</h4>
              <p>{prototype.description}</p>
              <a href={prototype.url} target="_blank" rel="noopener noreferrer">
                {prototype.linkLabel}
                <ArrowUpRight size={16} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Experience;

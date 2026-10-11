import { ArrowDown, ArrowUpRight, Code2, Gamepad2 } from "lucide-react";
import faceImage from "../imagess/Face.jpg";
import ResumeLink from "@/components/ResumeLink";

const Hero = () => (
  <section id="about" className="hero-section">
    <div className="page-container hero-grid">
      <div className="hero-copy">
        <p className="eyebrow">
          <span className="status-dot" /> GAME DEVELOPER PORTFOLIO
        </p>
        <h1>
          Hi, I'm Viet.
          <br />I build games
          <br />
          <span>worth playing.</span>
        </h1>
        <p className="hero-description">
          <strong>Unity Game Developer</strong> focused on{" "}
          <strong>Puzzle, Casual, and Hypercasual games</strong>. I turn ideas
          into playable experiences with <strong>Unity and C#</strong>, backed
          by hands-on work at
          <strong> Zlab Studio</strong> and <strong>Ebizworld</strong>.
        </p>
        <div className="hero-actions">
          <a href="#projects" className="action-button primary-button">
            Explore my projects <ArrowUpRight size={19} />
          </a>
          <ResumeLink />
        </div>
        <div className="skill-list" aria-label="Technical skills">
          <span>
            <Gamepad2 size={16} /> Unity
          </span>
          <span>
            <Code2 size={16} /> C#
          </span>
          <span>2D / 3D</span>
          <span>Gameplay & Optimization</span>
        </div>
      </div>
      <div className="hero-portrait">
        <div className="portrait-frame">
          <img src={faceImage} alt="Nguyen Van Viet" fetchPriority="high" />
          <div className="portrait-caption">
            <span>Nguyen Van Viet</span>
            <span>Game Developer</span>
          </div>
        </div>
        <div className="portrait-note">
          <Gamepad2 size={22} />
          <div>
            <strong>From an idea to a playable world.</strong>
            <span>Code. Create. Keep learning.</span>
          </div>
        </div>
      </div>
    </div>
    <div className="page-container hero-bottom">
      <span>CREATIVE MIND. DEVELOPER AT HEART.</span>
      <a href="#projects">
        Discover my work <ArrowDown size={16} />
      </a>
    </div>
  </section>
);

export default Hero;

import { ArrowDown, ArrowUpRight, Code2, Gamepad2 } from "lucide-react";
import faceImage from "../imagess/Face.jpg";

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
          A Gameplay / Unity Developer with a Computer Science background at Van
          Hien University. I bring mobile puzzles and personal game ideas to
          life with Unity and C#.
        </p>
        <div className="hero-actions">
          <a href="#projects" className="action-button primary-button">
            Explore my projects <ArrowUpRight size={19} />
          </a>
          <a href="#contact" className="action-button secondary-button">
            Get in touch <ArrowUpRight size={19} />
          </a>
        </div>
        <div className="skill-list" aria-label="Technical skills">
          <span>
            <Gamepad2 size={16} /> Unity
          </span>
          <span>
            <Code2 size={16} /> C#
          </span>
          <span>Java</span>
          <span>2D game development</span>
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

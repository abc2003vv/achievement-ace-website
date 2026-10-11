import AwardCard from "./AwardCard";
import { awards } from "@/data/awards";

const Awards = () => {
  return (
    <section id="awards" className="section-space awards-section">
      <div className="page-container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">03 / ACHIEVEMENTS</p>
            <h2>Learning. Building. Growing.</h2>
          </div>
          <p>
            Milestones from competitions
            <br />
            and my journey in game development.
          </p>
        </div>
        <div className="award-grid">
          {awards.map((award) => (
            <AwardCard key={`${award.title}-${award.award}`} {...award} />
          ))}
        </div>
        <div className="competition-notes">
          <p>
            <strong>ICPC Southern Regional Programming Contest</strong>
            <span>Competitor · Sep 2025</span>
          </p>
          <p>
            <strong>Prompt to Play — VNG Games</strong>
            <span>
              Built a puzzle game within <b>24 hours</b> · Jul 2026
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Awards;

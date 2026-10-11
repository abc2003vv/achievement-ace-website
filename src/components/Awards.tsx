import AwardCard from "./AwardCard";
import { awards } from "@/data/awards";

const Awards = () => {
  return (
    <section id="awards" className="section-space awards-section">
      <div className="page-container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">02 / ACHIEVEMENTS</p>
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
            <AwardCard key={award.title} {...award} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;

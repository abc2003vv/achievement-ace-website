import { Award } from "lucide-react";

interface AwardCardProps {
  title: string;
  organization: string;
  award: string;
  image: string;
}

const AwardCard = ({ title, organization, award, image }: AwardCardProps) => (
  <article className="award-card">
    <div className="award-image">
      <img src={image} alt={title} loading="lazy" />
    </div>
    <div className="award-content">
      <span className="award-prize">
        <Award size={15} />
        {award}
      </span>
      <h3>{title}</h3>
      <p>{organization}</p>
    </div>
  </article>
);

export default AwardCard;

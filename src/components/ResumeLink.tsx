import { Download } from "lucide-react";
import { profile } from "@/data/profile";

interface ResumeLinkProps {
  className?: string;
}

const ResumeLink = ({
  className = "action-button secondary-button",
}: ResumeLinkProps) => (
  <a
    className={className}
    href={profile.resumeUrl}
    download={profile.resumeFilename}
  >
    Download CV <Download size={17} aria-hidden="true" />
  </a>
);

export default ResumeLink;

import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";

import ResumeLink from "@/components/ResumeLink";
import { profile } from "@/data/profile";

const Contact = () => (
  <section id="contact" className="contact-section">
    <div className="page-container contact-grid">
      <div>
        <p className="eyebrow">04 / LET'S CONNECT</p>
        <h2>
          Have a game in mind?
          <br />
          <span>Let's build it together.</span>
        </h2>
        <p>
          For <strong>Unity game development opportunities</strong>,
          collaborations,
          <br className="desktop-break" /> or a conversation about my work — I'd
          love to hear from you.
        </p>
      </div>
      <div className="contact-details">
        <div className="contact-resume">
          <ResumeLink />
          <span>{profile.location}</span>
        </div>
        <a className="email-link" href="mailto:nguyenvanviet170303@gmail.com">
          <Mail size={22} />
          <span>
            Email me<span>nguyenvanviet170303@gmail.com</span>
          </span>
          <ArrowUpRight size={24} />
        </a>
        <div className="social-links">
          <a
            href="https://github.com/abc2003vv"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={17} />
            GitHub
            <ArrowUpRight size={15} />
          </a>
          <a
            href="https://www.linkedin.com/in/tcyvn/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin size={17} />
            LinkedIn
            <ArrowUpRight size={15} />
          </a>
          <a
            href="https://www.facebook.com/TCYVN/?locale=vi_VN"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
            <ArrowUpRight size={15} />
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;

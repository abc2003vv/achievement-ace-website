import React from "react";
import facebookIcon from "../imagess/facebook.png";
import linkedinIcon from "../imagess/linkedin.png";
import gmailIcon from "../imagess/gmail.png";
import githubIcon from "../imagess/github.png";

const Contact = () => {
  return (
    <section id="contact" className="py-16 gre">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-[#F97316] mb-4">
          📬 Contact Me
        </h2>
        <p className="text-gray-600 mb-8">
          Let’s connect! Reach out through any of the platforms below.
        </p>

        <div className="flex justify-center items-center gap-6 flex-wrap">
          {/* Facebook */}
          <a
            href="https://www.facebook.com/TCYVN/?locale=vi_VN"
            target="_blank"
            rel="noopener noreferrer"
            title="Facebook"
          >
            <img src={facebookIcon} alt="Facebook" className="w-7 h-7" />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/tcyvn/"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
          >
            <img src={linkedinIcon} alt="LinkedIn" className="w-7 h-7" />
          </a>

          {/* Gmail */}
          <a href="nguyenvanviet170303@gmail.com" title="Gmail">
            <img src={gmailIcon} alt="Gmail" className="w-7 h-7" />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/abc2003vv"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
          >
            <img src={githubIcon} alt="GitHub" className="w-7 h-7" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import { ArrowUp } from "lucide-react";

const Footer = () => (
  <footer className="site-footer">
    <div className="page-container footer-content">
      <span>© {new Date().getFullYear()} Nguyen Van Viet</span>
      <span>Made with curiosity. Built with care.</span>
      <a href="#about">
        Back to top <ArrowUp size={15} />
      </a>
    </div>
  </footer>
);

export default Footer;

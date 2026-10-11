import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useActiveSection } from "@/hooks/use-active-section";

const navigation = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#awards" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const activeSection = useActiveSection();
  const shouldReduceMotion = useReducedMotion();

  return (
    <header
      className="site-header"
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          setIsMenuOpen(false);
        }
      }}
    >
      <nav className="page-container navigation" aria-label="Main navigation">
        <a
          href="#about"
          className="brand"
          aria-label="Nguyen Van Viet home"
          onClick={() => setIsMenuOpen(false)}
        >
          <span className="brand-mark">
            V<span>.</span>
          </span>
          <span>
            Nguyen Van Viet
            <span className="brand-subtitle">GAME DEVELOPER</span>
          </span>
        </a>
        <div className="desktop-navigation">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              aria-current={
                item.href === `#${activeSection}` ? "location" : undefined
              }
            >
              {item.label}
              {item.href === `#${activeSection}` && (
                <motion.span
                  className="navigation-indicator"
                  layoutId="navigation-indicator"
                  transition={{ duration: shouldReduceMotion ? 0 : 0.3 }}
                />
              )}
            </a>
          ))}
          <a
            className="nav-contact"
            href="#contact"
            aria-current={activeSection === "contact" ? "location" : undefined}
          >
            Let's talk <ArrowUpRight size={16} />
          </a>
        </div>
        <button
          className="menu-toggle"
          aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </nav>
      {isMenuOpen && (
        <nav
          id="mobile-navigation"
          className="mobile-navigation page-container"
          aria-label="Mobile navigation"
        >
          {[...navigation, { label: "Contact", href: "#contact" }].map(
            (item) => (
              <a
                key={item.href}
                href={item.href}
                aria-current={
                  item.href === `#${activeSection}` ? "location" : undefined
                }
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
                <ArrowUpRight size={16} />
              </a>
            ),
          )}
        </nav>
      )}
    </header>
  );
};

export default Navbar;

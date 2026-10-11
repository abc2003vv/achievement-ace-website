import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useActiveSection } from "@/hooks/use-active-section";

const navigation = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
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
      <AnimatePresence initial={false}>
        {isMenuOpen && (
          <motion.nav
            id="mobile-navigation"
            className="mobile-navigation page-container"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: shouldReduceMotion ? 0 : -4 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.16 }}
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
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;

import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Awards from "@/components/Awards";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import Reveal from "@/components/Reveal";
const Index = () => {
  useEffect(() => {
    // Update document title
    document.title = "Nguyễn Văn Việt - Game Developer";
  }, []);

  return (
    <div className="portfolio-page">
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <Reveal>
          <Projects />
        </Reveal>
        <Reveal>
          <Awards />
        </Reveal>
        <Reveal>
          <Contact />
        </Reveal>
      </main>
      <Footer />
    </div>
  );
};

export default Index;

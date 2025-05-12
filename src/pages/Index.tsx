import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Awards from "@/components/Awards";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
const Index = () => {
  useEffect(() => {
    // Update document title
    document.title = "Nguyễn Văn Việt - Game Developer";
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Projects />
        <Awards />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

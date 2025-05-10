
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Awards from "@/components/Awards";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Update document title
    document.title = "Nguyễn Văn A - Game Developer";
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Projects />
      <Awards />
      <Footer />
    </div>
  );
};

export default Index;

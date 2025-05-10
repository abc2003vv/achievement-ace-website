
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Awards from "@/components/Awards";
import Education from "@/components/Education";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Update document title
    document.title = "Nguyễn Văn A - Trang Web Cá Nhân";
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Awards />
      <Education />
      <Footer />
    </div>
  );
};

export default Index;

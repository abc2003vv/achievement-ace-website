
import React from "react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-lightGray to-white pt-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 animate-fade-in" style={{animationDelay: '0.2s'}}>
          <h1 className="text-4xl md:text-6xl font-bold text-navy mb-4">
            Nguyễn Văn A
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-navy/80 mb-6">
            Sinh viên xuất sắc ngành Khoa học máy tính
          </h2>
          <p className="text-charcoal text-lg mb-8">
            Chào mừng đến với trang web cá nhân của tôi. Tôi là một sinh viên đam mê nghiên cứu và đã đạt được nhiều thành tựu trong lĩnh vực công nghệ thông tin và khoa học máy tính.
          </p>
          <div className="flex space-x-4">
            <Button className="bg-navy hover:bg-navy/90 text-white">Xem thành tựu</Button>
            <Button variant="outline" className="border-navy text-navy hover:bg-navy/10">Liên hệ</Button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center mt-12 md:mt-0 animate-fade-in" style={{animationDelay: '0.5s'}}>
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-navy/10 flex items-center justify-center overflow-hidden border-4 border-gold">
            <img 
              src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80" 
              alt="Nguyễn Văn A" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

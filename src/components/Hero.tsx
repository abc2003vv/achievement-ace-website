
import React from "react";
import { Button } from "@/components/ui/button";
import { Gamepad2 } from "lucide-react";

const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#F97316]/10 to-[#FB923C]/5 pt-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 animate-fade-in" style={{animationDelay: '0.2s'}}>
          <h1 className="text-4xl md:text-6xl font-bold text-[#F97316] mb-4">
            Nguyễn Văn A
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-[#EA580C] mb-6 flex items-center">
            <Gamepad2 className="mr-2" /> Game Developer Xuất Sắc
          </h2>
          <p className="text-charcoal text-lg mb-8">
            Chào mừng đến với trang web cá nhân của tôi. Tôi là một game developer đam mê và đã đạt được nhiều thành tựu trong lĩnh vực phát triển game và esports.
          </p>
          <div className="flex space-x-4">
            <Button className="bg-[#F97316] hover:bg-[#EA580C] text-white">Xem dự án</Button>
            <Button variant="outline" className="border-[#F97316] text-[#F97316] hover:bg-[#F97316]/10">Liên hệ</Button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center mt-12 md:mt-0 animate-fade-in" style={{animationDelay: '0.5s'}}>
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-[#F97316]/10 flex items-center justify-center overflow-hidden border-4 border-[#FB923C]">
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

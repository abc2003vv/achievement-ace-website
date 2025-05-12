import React from "react";
import { Button } from "@/components/ui/button";
import { Gamepad2, Images } from "lucide-react";
import faceImage from "../Imagess/face.jpg";

const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#F97316]/10 to-[#FB923C]/5 pt-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div
          className="md:w-1/2 animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-[#F97316] mb-4">
            I'm Nguyen Van Viet
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-[#EA580C] mb-6 flex items-center">
            <Gamepad2 className="mr-2" /> About Me
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            I’m a senior student in Computer Science at Van Hien University with
            a strong passion for game development. I have practical experience
            in C# and Java through various projects, and have received four
            awards, including a Game Programming Prize, a Gold Prize, a
            Blockchain Incubation Award, and an Encouragement Prize. I’m always
            striving to learn and grow both personally and professionally.
          </p>
          <div className="flex space-x-4">
            <Button className="bg-[#F97316] hover:bg-[#EA580C] text-white">
              <a href="#project">Xem dự án</a>
            </Button>
            <Button
              variant="outline"
              className="border-[#F97316] text-[#F97316] hover:bg-[#F97316]/10"
            >
              Liên hệ
            </Button>
          </div>
        </div>
        <div
          className="md:w-1/2 flex justify-center mt-12 md:mt-0 animate-fade-in"
          style={{ animationDelay: "0.5s" }}
        >
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-[#F97316]/10 flex items-center justify-center overflow-hidden border-4 border-[#FB923C]">
            <img
              src={faceImage}
              alt="Nguyen Van Viet"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

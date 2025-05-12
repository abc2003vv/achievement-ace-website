import React from "react";
import { Button } from "@/components/ui/button";
import { Gamepad } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#F97316] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold flex items-center">
              <Gamepad className="mr-2" />
              Nguyen Van Viet
            </h3>
            <p className="text-white/70 mt-2">Game Developer</p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/20 text-center text-white/60 text-sm">
          <p>© 2025. Thank you for visiting our website</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


import React from "react";
import { Button } from "@/components/ui/button";
import { Gamepad } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0EA5E9] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold flex items-center">
              <Gamepad className="mr-2" />
              Nguyễn Văn A
            </h3>
            <p className="text-white/70 mt-2">Game Developer | Esports Player</p>
          </div>
          
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 items-center">
            <Button variant="outline" className="border-white text-white hover:bg-white/20">
              nguyen.van.a@gamedeveloper.com
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/20">
              0123 456 789
            </Button>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/20 text-center text-white/60 text-sm">
          <p>© 2023 Nguyễn Văn A. Tất cả các quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

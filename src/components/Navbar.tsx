import React from "react";
import { Button } from "@/components/ui/button";
import { Gamepad } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="w-full py-4 backdrop-blur-md bg-[#F97316]/80 fixed top-0 z-10 shadow-sm">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-white font-bold text-xl flex items-center">
          <Gamepad className="mr-2 text-white" />
          Nguyen Van Viet
        </div>
        <div className="space-x-4 hidden md:flex">
          <Button variant="ghost" className="text-white hover:bg-white/10">
            Home
          </Button>
          <Button variant="ghost" className="text-white hover:bg-white/10">
            Projects
          </Button>
          <Button variant="ghost" className="text-white hover:bg-white/10">
            Achievements
          </Button>
          <Button variant="ghost" className="text-white hover:bg-white/10">
            Contact
          </Button>
        </div>
        <Button variant="outline" className="md:hidden text-white border-white">
          Menu
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;

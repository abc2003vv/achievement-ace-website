
import React from "react";
import { Button } from "@/components/ui/button";
import { Gamepad } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="w-full py-4 backdrop-blur-md bg-[#0EA5E9]/80 fixed top-0 z-10 shadow-sm">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-white font-bold text-xl flex items-center">
          <Gamepad className="mr-2 text-white" />
          Nguyễn Văn A
        </div>
        <div className="space-x-4 hidden md:flex">
          <Button variant="ghost" className="text-white hover:bg-white/10">Trang Chủ</Button>
          <Button variant="ghost" className="text-white hover:bg-white/10">Thành Tựu</Button>
          <Button variant="ghost" className="text-white hover:bg-white/10">Liên Hệ</Button>
        </div>
        <Button variant="outline" className="md:hidden text-white border-white">Menu</Button>
      </div>
    </nav>
  );
};

export default Navbar;

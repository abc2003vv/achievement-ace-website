
import React from "react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="w-full py-4 backdrop-blur-md bg-white/80 fixed top-0 z-10 shadow-sm">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-navy font-bold text-xl">Nguyễn Văn A</div>
        <div className="space-x-4 hidden md:flex">
          <Button variant="ghost" className="hover:bg-navy/10">Trang Chủ</Button>
          <Button variant="ghost" className="hover:bg-navy/10">Thành Tựu</Button>
          <Button variant="ghost" className="hover:bg-navy/10">Học Vấn</Button>
          <Button variant="ghost" className="hover:bg-navy/10">Liên Hệ</Button>
        </div>
        <Button variant="outline" className="md:hidden">Menu</Button>
      </div>
    </nav>
  );
};

export default Navbar;

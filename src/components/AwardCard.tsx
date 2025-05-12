import React from "react";
import { Gamepad2 } from "lucide-react";

interface AwardCardProps {
  title: string;
  organization: string;
  award: string;
  image: string;
  delay?: number;
}

const AwardCard = ({
  title,
  organization,
  award,
  image,
  delay = 0,
}: AwardCardProps) => {
  return (
    <div
      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 opacity-0 animate-fade-in"
      style={{ animationDelay: `${delay}s`, animationFillMode: "forwards" }}
    >
      <div className="w-full aspect-[3/2] overflow-hidden rounded-t-xl">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
        />
      </div>

      <div className="p-4 text-center">
        <div className="flex justify-center items-center text-[#F97316] mb-2">
          <Gamepad2 className="w-4 h-4 mr-1" />
          <h3 className="text-base font-bold">{title}</h3>
        </div>
        <p className="text-sm font-medium text-gray-700">{organization}</p>
        <p className="text-sm text-gray-500">Award: {award}</p>
      </div>
    </div>
  );
};

export default AwardCard;

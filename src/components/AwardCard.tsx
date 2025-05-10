
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Gamepad } from "lucide-react";

interface AwardCardProps {
  title: string;
  organization: string;
  date: string;
  description: string;
  delay: number;
}

const AwardCard = ({ title, organization, date, description, delay }: AwardCardProps) => {
  return (
    <Card className="border border-[#F97316]/20 hover:shadow-lg transition-shadow duration-300 animate-fade-in opacity-0" style={{animationDelay: `${delay}s`}}>
      <CardHeader className="bg-gradient-to-r from-[#F97316] to-[#FB923C] text-white pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-semibold flex items-center">
            <Gamepad className="h-5 w-5 text-white mr-2" /> {title}
          </CardTitle>
          <span className="bg-[#EA580C] text-white text-xs font-semibold px-2 py-1 rounded">
            {date}
          </span>
        </div>
        <CardDescription className="text-white/80">{organization}</CardDescription>
      </CardHeader>
      <CardContent className="pt-4">
        <p className="text-charcoal">{description}</p>
      </CardContent>
    </Card>
  );
};

export default AwardCard;

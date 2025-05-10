
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy } from "lucide-react";

interface AwardCardProps {
  title: string;
  organization: string;
  date: string;
  description: string;
  delay: number;
}

const AwardCard = ({ title, organization, date, description, delay }: AwardCardProps) => {
  return (
    <Card className="border border-navy/20 hover:shadow-lg transition-shadow duration-300 animate-fade-in opacity-0" style={{animationDelay: `${delay}s`}}>
      <CardHeader className="bg-gradient-to-r from-navy to-navy/80 text-white pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-semibold flex items-center">
            <Trophy className="h-5 w-5 text-gold mr-2" /> {title}
          </CardTitle>
          <span className="bg-gold text-navy text-xs font-semibold px-2 py-1 rounded">
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

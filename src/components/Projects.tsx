
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Gamepad2, Star, Rocket } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Project {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  year: string;
}

const Projects = () => {
  const projects: Project[] = [
    {
      title: "Fantasy Quest",
      description: "Game nhập vai phiêu lưu với đồ họa 3D tuyệt đẹp và hệ thống chiến đấu sáng tạo.",
      imageUrl: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      tags: ["Unity", "3D", "RPG"],
      year: "2023"
    },
    {
      title: "Speed Racer",
      description: "Game đua xe thể thao với các tính năng vật lý xe chân thực và đồ họa tốc độ cao.",
      imageUrl: "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
      tags: ["Unreal Engine", "Racing", "Multiplayer"],
      year: "2022"
    },
    {
      title: "Zombie Survival",
      description: "Game sinh tồn trong thế giới hậu tận thế với cơ chế crafting và xây dựng căn cứ.",
      imageUrl: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1147&q=80",
      tags: ["Unity", "Survival", "Open World"],
      year: "2022"
    },
    {
      title: "Puzzle Master",
      description: "Game giải đố với các thử thách sáng tạo và đồ họa tối giản nhưng đẹp mắt.",
      imageUrl: "https://images.unsplash.com/photo-1611996575749-79a3a250f948?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      tags: ["Mobile", "Puzzle", "2D"],
      year: "2021"
    }
  ];

  return (
    <div className="bg-gradient-to-b from-[#F97316]/10 to-[#F97316]/5 py-20" id="projects">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-12">
          <Rocket className="h-10 w-10 text-[#F97316] mr-3" />
          <h2 className="text-3xl md:text-4xl font-bold text-[#F97316] text-center">
            Các Dự Án Game
          </h2>
        </div>

        <Carousel className="w-full">
          <CarouselContent>
            {projects.map((project, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Card className="border border-[#F97316]/20 hover:shadow-lg transition-shadow duration-300 h-full animate-fade-in opacity-0" 
                      style={{animationDelay: `${0.2 + index * 0.1}s`}}>
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={project.imageUrl} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                  <CardHeader className="bg-gradient-to-r from-[#F97316] to-[#FB923C] text-white pb-2">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl font-semibold flex items-center">
                        <Gamepad2 className="h-5 w-5 text-white mr-2" /> {project.title}
                      </CardTitle>
                      <span className="bg-[#EA580C] text-white text-xs font-semibold px-2 py-1 rounded">
                        {project.year}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <p className="text-charcoal mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="outline" className="border-[#F97316] text-[#F97316] bg-[#F97316]/5">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-4">
            <CarouselPrevious className="relative static mx-2 bg-[#F97316] text-white hover:bg-[#EA580C]" />
            <CarouselNext className="relative static mx-2 bg-[#F97316] text-white hover:bg-[#EA580C]" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Projects;

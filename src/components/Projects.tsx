import React from "react";
import faceImage from "../imagess/Charactergame.jpg";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
      title: "Berie's Adventure",
      description:
        "A 2D adventure game featuring stunning visuals and an innovative combat system.",
      imageUrl: faceImage,
      tags: ["Unity", "2D", "Adventure"],
      year: "2024",
    },
    {
      title: "Game Jump Dash",
      description:
        "A game where players dodge falling objects to score points and achieve the highest possible accomplishment..",
      imageUrl:
        "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
      tags: ["Unity", "2D", "Puzzle"],
      year: "2025",
    },
  ];

  return (
    <section className="py-10">
      <h2 className="text-3xl font-bold text-center text-orange-500 mb-8">
        🎮 Project
      </h2>
      <div className="w-full flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 w-80"
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="bg-orange-500 text-white px-4 py-2 flex justify-between items-center">
                <span className="font-semibold">{project.title}</span>
                <span className="text-sm">{project.year}</span>
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-700 mb-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-orange-100 text-orange-600 text-xs px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

import React from "react";
import AwardCard from "./AwardCard";
import hackathonImg from "../Images/mamothon.jpg";
import unityImg from "../Images/korean.jpg";
import esportImg from "../Images/winner.jpg";
import innovationImg from "../Images/seco.jpg";

const Awards = () => {
  const awards = [
    {
      title: "Academic Competition Season 2",
      organization: "Van Hien University",
      award: "Second Prize",
      image: innovationImg,
    },
    {
      title: "Game Hackathon Champion",
      organization: "Gia Dinh University",
      award: "Incubation solution",
      image: hackathonImg,
    },
    {
      title: "Game Idea & Program Contest",
      organization: "Korea cultural center",
      award: "Consolation Prize",
      image: unityImg,
    },
    {
      title: "Academic Competitions Season ",
      organization: "National Esports Tournament",
      award: "Gold Prize",
      image: esportImg,
    },
  ];

  return (
    <section id="awards" className="bg-background py-17">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#F97316] mb-10">
          🎖️ Achievements & Awards
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {awards.map((award, index) => (
            <AwardCard key={index} {...award} delay={0.2 + index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;

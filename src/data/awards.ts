import type { PortfolioAward } from "@/types/PortfolioAward";
import hackathonImg from "../imagess/mamothon.jpg";
import unityImg from "../imagess/korean.jpg";
import esportImg from "../imagess/winner.jpg";
import innovationImg from "../imagess/seco.jpg";

export const awards: PortfolioAward[] = [
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

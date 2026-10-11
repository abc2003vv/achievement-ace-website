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
    title: "MAMMOTHON — Celestia Vietnam",
    organization: "Gia Dinh University",
    award: "Incubation Prize",
    image: hackathonImg,
  },
  {
    title: "Game Idea & Program Contest",
    organization: "Korea Cultural Center",
    award: "Consolation Prize",
    image: unityImg,
  },
  {
    title: "Academic Competition Season 2",
    organization: "Van Hien University",
    award: "Gold Prize",
    image: esportImg,
  },
];

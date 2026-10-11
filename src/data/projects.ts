import type { PortfolioProject } from "@/types/PortfolioProject";
import adventureImage from "@/imagess/Charactergame.jpg";

export const personalProjects: PortfolioProject[] = [
  {
    title: "Berie's Adventure",
    description:
      "A 2D adventure game with a focus on exploration, visuals, and a distinctive combat system.",
    imageUrl: adventureImage,
    tags: ["Unity", "C#", "2D Adventure"],
    year: "2024",
    platform: "itch.io",
    category: "personal",
    playUrl: "https://abc2003vv.itch.io/beries-adventure",
  },
  {
    title: "Game Jump Dash",
    description:
      "A score-chasing game where players dodge falling objects and challenge themselves to beat their personal best.",
    imageUrl: "",
    tags: ["Unity", "C#", "2D Arcade"],
    year: "2025",
    platform: "itch.io",
    category: "personal",
    playUrl: "https://abc2003vv.itch.io/game-jump-doash",
  },
];

export const androidProjects: PortfolioProject[] = [
  {
    title: "Topic Match 3D",
    description:
      "Rotate a world of cubes and match objects by topic in a colorful 3D puzzle.",
    imageUrl: "/assets/games/topic-1.webp",
    iconUrl: "/assets/games/topic-icon.webp",
    screenshots: ["/assets/games/topic-1.webp", "/assets/games/topic-2.webp"],
    tags: ["3D", "Matching"],
    platform: "Google Play",
    category: "android",
    publisher: "Tenefic Games",
    role: "Gameplay / Unity Developer",
    playUrl:
      "https://play.google.com/store/apps/details?id=com.tenefic.topiccubematch",
  },
  {
    title: "Cargo Crew: Color Puzzle",
    description:
      "Guide a busy crew through colorful cargo stacks. Sort strategically and make the most of limited space.",
    imageUrl: "/assets/games/cargo-1.webp",
    iconUrl: "/assets/games/cargo-icon.webp",
    screenshots: ["/assets/games/cargo-1.webp", "/assets/games/cargo-2.webp"],
    tags: ["Color sorting", "Logic"],
    platform: "Google Play",
    category: "android",
    publisher: "Tenefic Games",
    role: "Gameplay / Unity Developer",
    playUrl:
      "https://play.google.com/store/apps/details?id=cargo.crew.color.sort.puzzle",
  },
  {
    title: "Saw Blast",
    description:
      "Aim bouncing saw blades to slice matching pixel blocks and reveal colorful artwork.",
    imageUrl: "/assets/games/saw-1.webp",
    iconUrl: "/assets/games/saw-icon.webp",
    screenshots: ["/assets/games/saw-1.webp", "/assets/games/saw-2.webp"],
    tags: ["Physics", "Puzzle"],
    platform: "Google Play",
    category: "android",
    publisher: "Tenefic Games",
    role: "Gameplay / Unity Developer",
    playUrl:
      "https://play.google.com/store/apps/details?id=com.TeneficGames.SawBlast.Bounce",
  },
  {
    title: "Sand Maze: Arrow Escape",
    description:
      "Plan your arrow moves and escape the maze before the conveyor fills up.",
    imageUrl: "/assets/games/sand-1.webp",
    iconUrl: "/assets/games/sand-icon.webp",
    screenshots: ["/assets/games/sand-1.webp", "/assets/games/sand-2.webp"],
    tags: ["Maze", "Puzzle"],
    platform: "Google Play",
    category: "android",
    publisher: "Tenefic Games",
    role: "Gameplay / Unity Developer",
    playUrl:
      "https://play.google.com/store/apps/details?id=sand.maze.arrow.escape",
  },
  {
    title: "Slice Quest: Island Puzzle",
    description:
      "Find the right cutting angle, slice an island, and collect treasures with a limited number of moves.",
    imageUrl: "/assets/games/slice-1.webp",
    iconUrl: "/assets/games/slice-icon.webp",
    screenshots: ["/assets/games/slice-1.webp", "/assets/games/slice-2.webp"],
    tags: ["Cutting", "Logic"],
    platform: "Google Play",
    category: "android",
    publisher: "Tenefic Games",
    role: "Gameplay / Unity Developer",
    playUrl:
      "https://play.google.com/store/apps/details?id=slice.quest.island.puzzle",
  },
];

export const projects: PortfolioProject[] = [
  ...androidProjects,
  ...personalProjects,
];

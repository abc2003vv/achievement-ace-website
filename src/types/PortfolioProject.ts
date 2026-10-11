export interface PortfolioProject {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  year?: string;
  playUrl: string;
  platform: "Google Play" | "itch.io";
  category: "android" | "personal";
  iconUrl?: string;
  screenshots?: string[];
  publisher?: string;
  role?: string;
}

import { discovery } from "./list/discovery";
import { learning } from "./list/learning";
import { paper } from "./list/paper";

export interface ResourceLink {
  title: string;
  short?: string;
  description: string;
  link: string;
  recommended?: boolean;
  rip?: boolean;
  seriesLinks?: { title: string; link: string }[];
  year?: string;
  author?: string;
  difficulty?: "beginner" | "intermediate" | "advanced";
  related?: { title: string; link: string; short: string }[];
  category?: string;
}

export interface EventLink {
  title: string;
  description?: string;
  link: string;
  recommended?: boolean;
  outdated: string;
  location: string;
  dateDescription: string;
}

export interface ResourceSection {
  id: string;
  title: string;
  description?: string;
  subsections?: ResourceSection[];
  emoji: string;
  links: (ResourceLink | EventLink)[];
}

export interface Resource {
  id: string;
  sections: ResourceSection[];
}

export const resourceList: Resource[] = [discovery, learning, paper];

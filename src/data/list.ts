import { awesome } from "./list/awesome";
import { beginner } from "./list/beginner";
import { intermediate } from "./list/intermediate";
import { news } from "./list/news";

export interface ResourceLink {
  title: string;
  description: string;
  link: string;
  recommended?: boolean;
}

export interface ResourceSection {
  id: string;
  title: string;
  description?: string;
  emoji: string;
  links: ResourceLink[];
}

export interface Resource {
  id: string;
  sections: ResourceSection[];
}

export const resourceList: Resource[] = [
  beginner,
  intermediate,
  awesome,
  news,
];

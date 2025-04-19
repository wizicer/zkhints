import { discovery } from "./list/discovery";
import { learning } from "./list/learning";

export interface ResourceLink {
  title: string;
  description: string;
  link: string;
  recommended?: boolean;
  rip?: boolean;
  seriesLinks?: { title: string; link: string }[];
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
  emoji: string;
  links: (ResourceLink | EventLink)[];
}

export interface Resource {
  id: string;
  sections: ResourceSection[];
}

export const resourceList: Resource[] = [discovery, learning];

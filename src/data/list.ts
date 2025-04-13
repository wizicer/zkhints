import { awesome } from "./list/awesome";
import { beginner } from "./list/beginner";
import { intermediate } from "./list/intermediate";
import { news } from "./list/news";
import { events } from "./list/events";

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

export const resourceList: Resource[] = [beginner, intermediate, awesome, news, events];

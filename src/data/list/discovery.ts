import type { Resource } from "../list";
import { awesome } from "./discovery/awesome";
import { events } from "./discovery/events";
import { news } from "./discovery/news";

export const discovery: Resource = {
  id: "discovery",
  sections: [events, awesome, news],
};

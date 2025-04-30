import type { Resource } from "../list";
import { cheatsheet } from "./learning/cheatsheet";
import { intro } from "./learning/intro";
import { knowledgeBase } from "./learning/knowledge-base";
import { math } from "./learning/math";
import { playgrounds } from "./learning/playgrounds";
import { proofSystems } from "./learning/proof-systems";
import { vision } from "./learning/vision";

export const learning: Resource = {
  id: "learning",
  sections: [intro, math, playgrounds, vision, proofSystems, knowledgeBase, cheatsheet],
};

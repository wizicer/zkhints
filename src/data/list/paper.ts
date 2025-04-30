import type { Resource } from "../list";
import { frontend } from "./paper/frontend";
import { backend } from "./paper/backend";
import { cryptography } from "./paper/cryptography";
import { analysis } from "./paper/analysis";

export const paper: Resource = {
  id: "paper",
  sections: [frontend, backend, cryptography, analysis],
};

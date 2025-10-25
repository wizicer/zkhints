import type { EIP } from "../model";
import json_eips from "./eip.json";
import flags_data from "./eip-flags.json";

const stars = [196, 197, 2537];
const flags = flags_data as Record<string, "new" | "update">;

export const eips: EIP[] = json_eips.map((eip) => ({
  id: eip.id,
  title: eip.title,
  status: eip.status,
  authors: eip.authors,
  erc: eip.erc,
  star: stars.includes(eip.id),
  flag: flags[eip.id],
}));

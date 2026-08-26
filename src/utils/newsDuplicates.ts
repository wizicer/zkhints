import type { DailyNewsItem, Project } from "../data/daily/types";

export interface DuplicateProjectInfo {
  project: Project;
  matchedDate: string;
}

// Find projects in `dayData` that were already published under a different
// date in `allData` (matched by identical url or identical name). This is
// used to warn about / block accidentally re-sending the same news item.
// Historical duplicates that don't involve `dateString` itself are ignored
// on purpose.
export function findDuplicateProjects(
  allData: DailyNewsItem[],
  dayData: DailyNewsItem,
  dateString: string,
): DuplicateProjectInfo[] {
  const seen = new Map<string, string>();
  for (const entry of allData) {
    if (entry.date === dateString) continue;
    for (const project of entry.projects || []) {
      if (project.url) seen.set(`url:${project.url}`, entry.date);
      if (project.name) seen.set(`name:${project.name}`, entry.date);
    }
  }

  const duplicates: DuplicateProjectInfo[] = [];
  for (const project of dayData.projects || []) {
    const matchedDate =
      (project.url && seen.get(`url:${project.url}`)) ||
      (project.name && seen.get(`name:${project.name}`));
    if (matchedDate) {
      duplicates.push({ project, matchedDate });
    }
  }
  return duplicates;
}

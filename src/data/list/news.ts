import type { Resource } from "../list";

export const news: Resource = {
  id: "news",
  sections: [
    {
      id: "newsletters",
      title: "Newsletters & Weekly Updates",
      description:
        "Trusted sources for staying up to date on ZK-related developments.",
      emoji: "📰",
      links: [
        {
          title: "zkNews",
          description: "Daily summaries of ZK papers, blogs, and events.",
          link: "https://zknews.ai/",
        },
        {
          title: "ZKMesh",
          description:
            "Weekly zk-focused newsletter curated by Geometry and friends.",
          link: "https://zkmesh.substack.com/",
        },
      ],
    },
    {
      id: "feeds",
      title: "Realtime Updates & Blogs",
      description:
        "Dynamic sources like blog posts, Twitter accounts, and GitHub feeds.",
      emoji: "📡",
      links: [
        {
          title: "ZK Collective",
          description:
            "News, updates and podcasts from leading ZK researchers and teams.",
          link: "https://www.zkcollective.org/",
        },
        {
          title: "Zero Knowledge Podcast",
          description: "Weekly podcast exploring ZK research and applications.",
          link: "https://www.zeroknowledge.fm/",
        },
      ],
    },
  ],
};

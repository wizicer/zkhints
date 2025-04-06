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
          title: "ZK Security News",
          description: "Hacker news-style news about ZK.",
          link: "https://news.zksecurity.xyz/"
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
          title: "Zero Knowledge Podcast",
          description: "Weekly podcast exploring ZK research and applications.",
          link: "https://www.zeroknowledge.fm/",
        },
      ],
    },
  ],
};

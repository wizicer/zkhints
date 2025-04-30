import type { ResourceSection } from "../../list";

export const news: ResourceSection = {
  id: "news",
  title: "News",
  description: "Trusted sources for staying up to date on ZK-related developments.",
  links: [],
  emoji: "📰️",
  subsections: [
    {
      id: "newsletters",
      title: "Newsletters & Weekly Updates",
      description: "",
      emoji: "🗞️",
      links: [
        {
          title: "ZK Security News",
          description: "Hacker news-style news about ZK.",
          link: "https://news.zksecurity.xyz/",
        },
        {
          title: "ZKMesh",
          description: "Weekly zk-focused newsletter curated by Geometry and friends.",
          link: "https://zkmesh.substack.com/",
        },
        {
          title: "ZK Punk Insights",
          description: "Weekly zkNews about ZK.",
          link: "https://insights.zkpunk.pro/",
        },
        {
          title: "The State of ZK",
          description: "Quarterly insights on ZK developments.",
          link: "https://zkv.xyz/the-state-of-zk/",
        },
      ],
    },
    {
      id: "feeds",
      title: "Realtime Updates & Blogs",
      description: "",
      emoji: "📡",
      links: [
        {
          title: "Zero Knowledge Podcast",
          description: "Weekly podcast exploring ZK research and applications.",
          link: "https://www.zeroknowledge.fm/",
        },
        {
          title: "Coset",
          description:
            "Coset (a.k.a Antalpha Labs) is a Web3 developer community dedicated to push the boundaries of crypto space.",
          link: "https://coset.notion.site/",
        },
        {
          title: "Cysic",
          description: "Cysic team's blog: ZK Proof Layer.",
          link: "https://hackmd.io/@Cysic",
        },
      ],
    },
  ],
};

import type { Resource } from "../list";

export const discovery: Resource = {
  id: "discovery",
  sections: [
    {
      id: "meetings",
      title: "ZK Meetings & Conferences",
      description: "Upcoming zero-knowledge proof conferences, summits and community meetups.",
      emoji: "🗓️",
      links: [
        {
          title: "ZK Hack Meetup #11",
          link: "https://lu.ma/wjj4bvau",
          recommended: true,
          location: "Taipei, Taiwan",
          outdated: "2025-04-01",
          dateDescription: "April 1, 2025",
        },
        {
          title: "zkSummit13",
          link: "https://www.zksummit.com/",
          recommended: true,
          location: "Toronto, Canada",
          outdated: "2025-05-12",
          dateDescription: "May 12, 2025",
        },
        {
          title: "ZK Hack Berlin",
          link: "https://zkberlin.com/",
          recommended: true,
          location: "Berlin, Germany",
          outdated: "2025-06-22",
          dateDescription: "June 20 - 22, 2025",
        },
        {
          title: "ETHCC",
          link: "https://ethcc.io/",
          location: "Cannes, France",
          outdated: "2025-07-03",
          dateDescription: "June 30 - July 3, 2025",
        },
        {
          title: "DappCon 25",
          link: "https://dappcon.io/",
          location: "Berlin, Germany",
          outdated: "2025-06-18",
          dateDescription: "June 16 - 18, 2025",
        },
      ],
    },
    {
      id: "hackathons",
      title: "Hackathons & Developer Events",
      description: "Upcoming hackathons and developer-focused events with ZK components.",
      emoji: "💻",
      links: [
        {
          title: "ETHGlobal Taipei",
          link: "https://ethglobal.com/events/taipei",
          location: "Taipei, Taiwan",
          outdated: "2025-04-06",
          dateDescription: "April 4 - 6, 2025",
        },
        {
          title: "BUIDL Asia",
          link: "https://www.buidl.asia/",
          location: "Seoul, South Korea",
          outdated: "2025-04-16",
          dateDescription: "April 15 - 16, 2025",
        },
        {
          title: "Invisible Garden",
          link: "https://invisible.garden/",
          location: "Costa Rica",
          outdated: "2025-05-31",
          dateDescription: "April 21 - May 31, 2025",
        },
        {
          title: "ETHGlobal Prague",
          link: "https://ethglobal.com/events/prague",
          location: "Prague, Czech Republic",
          outdated: "2025-06-01",
          dateDescription: "May 30 - June 1, 2025",
        },
      ],
    },

    {
      id: "awesome-list",
      title: "Awesome List",
      description: "Curated lists of ZK resources, libraries, tools and more.",
      emoji: "📦",
      links: [
        {
          title: "ventali's Awesome ZK",
          description: "A curated list of awesome ZK resources, libraries, tools and more.",
          link: "https://github.com/ventali/awesome-zk",
        },
        {
          title: "sCrypt-Inc's Awesome ZKPs",
          description: "A curated list of awesome ZKP resources, libraries, tools and more.",
          link: "https://github.com/sCrypt-Inc/awesome-zero-knowledge-proofs",
        },
        {
          title: "matter-labs' Awesome Zero Knowledge Proofs",
          description:
            "A curated list of awesome things related to learning zero knowledge proofs.",
          link: "https://github.com/matter-labs/awesome-zero-knowledge-proofs",
        },
        {
          title: "Fluidex's Awesome PLONK",
          description: "A curated list of awesome PLONK resources, libraries, tools and more.",
          link: "https://github.com/Fluidex/awesome-plonk",
        },
        {
          title: "noir-lang's Awesome Noir",
          description: "A curated list of resources for learning and programming in Noir.",
          link: "https://github.com/noir-lang/awesome-noir",
        },
      ],
    },
    {
      id: "newsletters",
      title: "Newsletters & Weekly Updates",
      description: "Trusted sources for staying up to date on ZK-related developments.",
      emoji: "📰",
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
      ],
    },
    {
      id: "feeds",
      title: "Realtime Updates & Blogs",
      description: "Dynamic sources like blog posts, Twitter accounts, and GitHub feeds.",
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

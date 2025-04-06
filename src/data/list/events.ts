import type { Resource } from "../list";

export const events: Resource = {
  id: "events",
  sections: [
    {
      id: "meetings",
      title: "ZK Meetings & Conferences",
      description:
        "Upcoming zero-knowledge proof conferences, summits and community meetups.",
      emoji: "🗓️",
      links: [
        {
          title: "ZK Hack Meetup #11",
          description: "Taipei, Taiwan. April 1, 2025",
          link: "https://lu.ma/wjj4bvau",
          recommended: true,
          outdated: "2025-04-01",
        },
        {
          title: "zkSummit13",
          description: "Toronto. May 12, 2025",
          link: "https://www.zksummit.com/",
          recommended: true,
          outdated: "2025-05-12",
        },
        {
          title: "ZK Hack Berlin",
          description: "Berlin, Germany. June 20 - 22, 2025",
          link: "https://zkberlin.com/",
          recommended: true,
          outdated: "2025-06-22",
        },
        {
          title: "ETHCC",
          description: "Cannes, France. June 30 - July 3, 2025",
          link: "https://ethcc.io/",
          outdated: "2025-07-03",
        },
        {
          title: "DappCon 25",
          description: "Berlin, Germany. June 16 - 18, 2025",
          link: "https://dappcon.io/",
          outdated: "2025-06-18",
        },
      ],
    },
    {
      id: "hackathons",
      title: "Hackathons & Developer Events",
      description:
        "Upcoming hackathons and developer-focused events with ZK components.",
      emoji: "💻",
      links: [
        {
          title: "ETHGlobal Taipei",
          description: "Taipei, Taiwan. April 4 - 6, 2025",
          link: "https://ethglobal.com/events/taipei",
          outdated: "2025-04-06",
        },
        {
          title: "BUIDL Asia",
          description: "Seoul, South Korea. April 15 - 16, 2025",
          link: "https://www.buidl.asia/",
          outdated: "2025-04-16",
        },
        {
          title: "Invisible Garden",
          description: "Costa Rica. April 21 - May 31, 2025",
          link: "https://invisible.garden/",
          outdated: "2025-05-31",
        },
        {
          title: "ETHGlobal Prague",
          description: "Prague, Czech Republic. May 30 - June 1, 2025",
          link: "https://ethglobal.com/events/prague",
          outdated: "2025-06-01",
        },
      ],
    },
  ],
};

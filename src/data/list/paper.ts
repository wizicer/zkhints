import type { Resource } from "../list";

export const paper: Resource = {
  id: "paper",
  sections: [
    {
      id: "paper",
      title: "Papers",
      description: "",
      emoji: "📚",
      links: [
        {
          title: "ZK101 by a16z",
          description: "A simple and visual explanation of ZKPs from a16z.",
          link: "https://a16zcrypto.com/zero-knowledge-101/",
        },
        {
          title: "ZK Whiteboard Sessions",
          description: "Visual whiteboard sessions explaining ZK concepts.",
          link: "https://www.zkwhiteboard.com/",
        },
      ],
    },
  ],
};

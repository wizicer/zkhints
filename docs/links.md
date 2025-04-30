# ZK Resource Categories

This document outlines the categories for organizing Zero Knowledge (ZK) related resources.

## Discovery Resources

[src/data/list/discovery.ts]

Resources for discovering new ZK content and staying updated:

### Events

[src/data/list/discovery/events.ts]

- ZK Meetings & Conferences
- Hackathons & Developer Events

### Awesome Lists

[src/data/list/discovery/awesome.ts]

- Curated collections of ZK resources, libraries, tools and more

### News

[src/data/list/discovery/news.ts]

- Newsletters & Weekly Updates
- Realtime Updates & Blogs

## Learning Resources

[src/data/list/learning.ts]

Resources for learning about ZK:

### Introduction

[src/data/list/learning/intro.ts]

- Basic explanations and intuitive overviews of Zero-Knowledge Proofs
- Beginner-friendly content
- Fundamental concepts

### Mathematical & Cryptography

[src/data/list/learning/math.ts]

- Essential mathematics
- Cryptography foundations
- Academic papers and textbooks

### Online Playgrounds

[src/data/list/learning/playgrounds.ts]

- Interactive environments
- Online tools and REPLs
- Development sandboxes

### Visionary Insights

[src/data/list/learning/vision.ts]

- Future perspectives
- Industry trends
- Strategic thinking

### Proof Systems

[src/data/list/learning/proof-systems.ts]

- STARK implementations and explanations
- PLONK systems and tutorials
- Other proving systems

### Knowledge Base

[src/data/list/learning/knowledge-base.ts]

- Comprehensive learning resources
- Documentation collections
- Educational platforms

### Cheatsheets

[src/data/list/learning/cheatsheet.ts]

- Quick reference guides
- Language cheatsheets
- Technical summaries

### Indistinguishability Obfuscation

[src/data/list/learning/io.ts]

- iO resources
- Advanced cryptographic concepts

## Resource Properties

[src/data/list.ts]

Resources can have the following properties:

- `title`: Required - Name of the resource
- `description`: Required - Brief description
- `link`: Required - URL to the resource
- `recommended`: Optional - Highlighted as particularly valuable
- `difficulty`: Optional - "beginner" | "intermediate" | "advanced"
- `rip`: Optional - Marks deprecated/inactive resources
- `seriesLinks`: Optional - Related content in a series
  - `title`: Required - Name of the series chapter
  - `link`: Required - URL to the series chapter
- `year`: Optional - Publication year
- `author`: Optional - Content creator
- `related`: Optional - Related resources
- `category`: Optional - Additional categorization

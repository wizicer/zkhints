# Add Item Script Usage

This script allows you to add new items (events or resources) to the `list.json` file via command line.

## Installation

No additional dependencies required. Uses Node.js built-in modules and only reads from `list.json`.

## Basic Usage

```bash
node scripts/add-item.js --section <section-id> [options]
node scripts/add-item.js --list
node scripts/add-item.js --help
```

## Required Arguments

- `--section, -s <id>`: The section ID where the item will be added

## Item Types

The script supports two types of items:

1. **Event** (`--type event`): For meetings, conferences, and hackathons
2. **Resource** (`--type resource`): For articles, tutorials, tools, etc. (default)

---

## Adding Events

Events are used in sections like `meetings` and `hackathons`.

### Required Fields

| Field | Description | Example |
|-------|-------------|---------|
| `--title` | Event name | "ZK Summit 14" |
| `--link` | Event URL | "https://zksummit.com" |
| `--outdated` | Date when event becomes outdated (YYYY-MM-DD) | "2025-12-31" |
| `--location` | Event location | "San Francisco, USA" |
| `--dateDescription` | Human-readable date | "December 2025" |

### Optional Fields

| Field | Description | Example |
|-------|-------------|---------|
| `--description` | Event description | "Annual ZK conference" |
| `--recommended` | Mark as recommended | `true` or `false` |

### Example: Add a Conference

```bash
node scripts/add-item.js --section meetings --type event \
  --title "ZK Summit 14" \
  --link "https://zksummit.com" \
  --location "San Francisco, USA" \
  --outdated "2025-12-31" \
  --dateDescription "December 2025"
```

### Example: Add a Hackathon

```bash
node scripts/add-item.js --section hackathons --type event \
  --title "ETHGlobal London" \
  --link "https://ethglobal.com/events/london" \
  --location "London, UK" \
  --outdated "2025-09-15" \
  --dateDescription "September 13-15, 2025" \
  --description "Build the future of Ethereum"
```

---

## Adding Resources

Resources are used in most other sections (tutorials, tools, papers, etc.).

### Required Fields

| Field | Description | Example |
|-------|-------------|---------|
| `--title` | Resource title | "Introduction to ZK" |
| `--description` | Full description | "A beginner-friendly guide..." |
| `--link` | Resource URL | "https://example.com/zk-intro" |

### Optional Fields

| Field | Description | Example |
|-------|-------------|---------|
| `--short` | Short description | "ZK intro guide" |
| `--recommended` | Mark as recommended | `true` or `false` |
| `--rip` | Mark as no longer available | `true` or `false` |
| `--year` | Publication year | "2024" |
| `--author` | Author name | "Vitalik Buterin" |
| `--difficulty` | Difficulty level | `beginner`, `intermediate`, or `advanced` |
| `--category` | Category | "tutorial" |

### Example: Add a Tutorial

```bash
node scripts/add-item.js --section intro --type resource \
  --title "Zero-Knowledge Proofs for Beginners" \
  --description "A comprehensive introduction to ZK proofs with interactive examples" \
  --link "https://example.com/zk-beginners" \
  --difficulty "beginner" \
  --year "2024"
```

### Example: Add a Tool

```bash
node scripts/add-item.js --section playgrounds --type resource \
  --title "ZK Playground" \
  --description "Interactive environment for testing ZK circuits" \
  --link "https://zkplayground.dev"
```

### Example: Add a Research Paper

```bash
node scripts/add-item.js --section proving-schemes --type resource \
  --title "Nova: Recursive Zero-Knowledge Arguments" \
  --description "A new approach to recursive SNARKs without trusted setup" \
  --link "https://eprint.iacr.org/2021/370" \
  --difficulty "advanced" \
  --author "Abhiram Kothapalli et al." \
  --year "2021"
```

---

## Available Section IDs

To see all available section IDs:

```bash
node scripts/add-item.js --list
```

You can add items to the following sections:

### Discovery
- `meetings` - ZK Meetings & Conferences
- `hackathons` - Hackathons & Developer Events
- `awesome-list` - Awesome List
- `newsletters` - Newsletters & Weekly Updates
- `feeds` - Realtime Updates & Blogs

### Learning
- `intro` - What is Zero-Knowledge?
- `math-crypto` - Mathematical & Cryptography
- `playgrounds` - Online Playgrounds
- `visions` - Visionary Insights
- `stark` - STARK
- `plonk` - PLONK
- `knowledge-base` - Knowledge Base
- `cheatsheet` - Cheatsheets

### Papers
- `dsl` - Domain-Specific Languages
- `primitives` - Primitives
- `privacy` - Privacy Applications
- `scaling` - Scaling Applications
- `proving-schemes` - Proving Schemes
- `optimization` - Proof Optimization Techniques
- `zkvm` - zkVM
- `pairing` - Pairing-Based Cryptography
- `algebra` - Algebraic Foundations
- `io` - Indistinguishability Obfuscation
- `survey` - Survey & SoK
- `benchmark` - Benchmark
- `security` - Security

---

## Tips

1. **Use quotes** for values with spaces:
   ```bash
   --title "My Event Title"
   ```

2. **Boolean values** should be lowercase:
   ```bash
   --recommended true
   --rip false
   ```

3. **Date format** for events should be YYYY-MM-DD:
   ```bash
   --outdated "2025-12-31"
   ```

4. **Difficulty levels** must be one of: `beginner`, `intermediate`, `advanced`

5. **Check the result** by viewing `src/data/list/list.json` after running the script

---

## Troubleshooting

### Error: Section ID not found
Make sure you're using a valid section ID. Use `--list` to see all available section IDs.

### Error: Missing required fields
Ensure you've provided all required fields for the item type (event or resource).

### Error: Could not find section
The section ID doesn't exist in the list.json file. Use `--list` to see all available section IDs.

---

## File Structure

The script modifies:
- `src/data/list/list.json` - The main data file (only external dependency)

---

## TypeScript Interfaces

The items added follow these TypeScript interfaces defined in `src/data/list.ts`:

### EventLink
```typescript
interface EventLink {
  title: string;
  description?: string;
  link: string;
  recommended?: boolean;
  outdated: string;
  location: string;
  dateDescription: string;
}
```

### ResourceLink
```typescript
interface ResourceLink {
  title: string;
  short?: string;
  description: string;
  link: string;
  recommended?: boolean;
  rip?: boolean;
  seriesLinks?: { title: string; link: string }[];
  year?: string;
  author?: string;
  difficulty?: "beginner" | "intermediate" | "advanced";
  related?: { title: string; link: string; short: string }[];
  category?: string;
}
```

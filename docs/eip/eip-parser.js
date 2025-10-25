import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Keywords to look for in titles
const keywords = [
  "zk",
  "zero knowledge",
  "zksnark",
  "zk-snark",
  "snark",
  "stark",
  "kzg",
  "bls",
  "pairing",
  "cryptograph",
  "math",
  "curve",
  "verif",
  "commit",
  "polynomial",
  "bn128",
  "bn256",
  "bls12",
  "signature",
  "verkle",
  "poseidon",
  "trustless",
];

// Specific EIP IDs to include regardless of title
const specificIds = [2565, 7667];

// Specific EIP IDs to exclude even if they match keywords
const excludeIds = [1890, 6066, 7549];

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to parse author information
function parseAuthors(authorText) {
  // Split multiple authors by commas that aren't inside brackets or parentheses
  const authorParts = [];
  let currentPart = "";
  let bracketCount = 0;
  let parenCount = 0;

  for (let i = 0; i < authorText.length; i++) {
    const char = authorText[i];

    if (char === "(" || char === "[" || char === "<") bracketCount++;
    else if (char === ")" || char === "]" || char === ">") bracketCount--;

    if (char === "," && bracketCount === 0 && parenCount === 0) {
      authorParts.push(currentPart.trim());
      currentPart = "";
    } else {
      currentPart += char;
    }
  }

  if (currentPart.trim()) {
    authorParts.push(currentPart.trim());
  }

  // Process each author
  return authorParts.map((part) => {
    const author = {
      name: "",
      email: undefined,
      nick: undefined,
      url: undefined,
    };

    // Extract email (<<email@example.com>>)
    const emailMatch = part.match(/<<([^>]+)>>/);
    if (emailMatch) {
      author.email = emailMatch[1];
      part = part.replace(emailMatch[0], "").trim();
    }

    // Extract GitHub username/URL ([@username](https://github.com/username))
    const githubMatch = part.match(/\[@([^\]]+)\]\(([^)]+)\)/);
    if (githubMatch) {
      author.nick = githubMatch[1];
      author.url = githubMatch[2];
      part = part.replace(githubMatch[0], "").trim();
    }

    // Clean up any remaining empty parentheses
    part = part.replace(/\(\s*\)/g, "").trim();

    // What remains should be the name
    author.name = part.replace(/\s+/g, " ").trim();

    return author;
  });
}

// Function to parse the EIP markdown file
function parseEIPMarkdown(filePath) {
  try {
    // Read the markdown file
    const content = fs.readFileSync(filePath, "utf8");

    // Array to store all EIP objects
    const eips = [];

    // Split the content into sections based on ## headers
    const sections = content.split(/^## /m).filter(Boolean);

    // Process each section
    for (const section of sections) {
      const lines = section.split("\n");
      const sectionTitle = lines[0].trim();
      const sectionContent = lines.slice(1).join("\n");

      // Skip if there's no content
      if (!sectionContent.trim()) continue;

      // Different regex patterns for different section types
      let pattern;
      if (sectionTitle === "Last Call") {
        // Last Call has an extra column for review end date
        pattern =
          /\|\s*\[?(\d+)\]?(?:\(\/EIPS\/eip-\d+\))?\s*\|\s*[^|]+\|\s*([^|]+)\|\s*([^|]+)\|/g;
      } else {
        // Standard pattern for other sections
        pattern = /\|\s*\[?(\d+)\]?(?:\(\/EIPS\/eip-\d+\))?\s*\|\s*([^|]+)\|\s*([^|]+)\|/g;
      }

      // Process all table rows in this section
      let match;
      while ((match = pattern.exec(sectionContent)) !== null) {
        const id = match[1].trim();
        const title = match[2].trim();

        // Parse author information
        const authorText = match[3].trim();
        const authors = parseAuthors(authorText);

        // Add the EIP to our array
        eips.push({
          id: parseInt(id),
          title: title.replaceAll("\\", ""),
          status: sectionTitle,
          authors,
        });
      }
    }

    return eips;
  } catch (error) {
    console.error("Error parsing EIP markdown:", error);
    return [];
  }
}

// Function to filter ZKP-related EIPs
function filterZKPRelatedEIPs(eips) {
  // Filter EIPs based on keywords in title or specific IDs
  return eips
    .filter((eip) => {
      // Exclude specific IDs first
      if (excludeIds.includes(eip.id)) {
        return false;
      }

      // Include if ID is in the specific list
      if (specificIds.includes(eip.id)) {
        return true;
      }

      // Include if title contains any of the keywords
      const lowerTitle = eip.title.toLowerCase();
      return keywords.some((keyword) => lowerTitle.includes(keyword.toLowerCase()));
    })
    .map((eip) => ({
      id: eip.id,
      title: eip.title,
      status: eip.status,
      authors: eip.authors,
      erc: eip.erc,
    }));
}

// Function to calculate statistics
function calculateStatistics(eips) {
  const maxId = Math.max(...eips.map((eip) => eip.id));
  const statusCounts = {};

  eips.forEach((eip) => {
    statusCounts[eip.status] = (statusCounts[eip.status] || 0) + 1;
  });

  return {
    totalEIPs: eips.length,
    maxId,
    statusCounts,
  };
}

// Main function
function main() {
  // Read previous EIPs if they exist
  let previousEIPs = [];
  const eipsJsonPath = path.resolve(__dirname, "eips.json");
  if (fs.existsSync(eipsJsonPath)) {
    try {
      previousEIPs = JSON.parse(fs.readFileSync(eipsJsonPath, "utf8"));
    } catch (error) {
      console.error("Error reading or parsing eips.json:", error);
    }
  }

  const previousEIPsMap = new Map(previousEIPs.map((eip) => [eip.id, eip]));

  // Parse erc.md to get a set of ERC IDs
  const ercFilePath = path.resolve(__dirname, "erc.md");
  if (!fs.existsSync(ercFilePath)) {
    console.error(`File not found: ${ercFilePath}`);
    process.exit(1);
  }
  const ercs = parseEIPMarkdown(ercFilePath);
  const ercIds = new Set(ercs.map((erc) => erc.id));

  // Parse input.md as the base list of all items
  const allItemsFilePath = path.resolve(__dirname, "input.md");
  if (!fs.existsSync(allItemsFilePath)) {
    console.error(`File not found: ${allItemsFilePath}`);
    process.exit(1);
  }
  let allItems = parseEIPMarkdown(allItemsFilePath);

  // Add 'erc: true' to items that are in the ercIds set
  allItems = allItems.map((item) => {
    if (ercIds.has(item.id)) {
      item.erc = true;
    }
    return item;
  });

  // Add flags for new or updated items
  const flags = {};
  allItems = allItems.map((item) => {
    const prevItem = previousEIPsMap.get(item.id);
    if (!prevItem) {
      flags[item.id] = "new";
    } else if (prevItem.status !== item.status) {
      flags[item.id] = "update";
    }
    return item;
  });

  // Calculate statistics
  const stats = calculateStatistics(allItems);

  // Save all items to eips.json
  fs.writeFileSync(path.resolve(__dirname, "eips.json"), JSON.stringify(allItems, null, 2));
  console.log(`Successfully parsed ${allItems.length} items and saved to eips.json`);

  // Filter ZKP-related items
  const zkpItems = filterZKPRelatedEIPs(allItems);

  // Save the filtered ZKP items to eip.json in src/data
  fs.writeFileSync(
    path.resolve(__dirname, "../../src/data/eip.json"),
    JSON.stringify(zkpItems, null, 2)
  );
  console.log(`Filtered ${zkpItems.length} ZKP-related items and saved to src/data/eip.json`);

  // Save flags to a separate file
  fs.writeFileSync(
    path.resolve(__dirname, "../../src/data/eip-flags.json"),
    JSON.stringify(flags, null, 2)
  );
  console.log("Saved EIP flags to src/data/eip-flags.json");

  // Output statistics
  console.log("\nEIP Statistics:");
  console.log(`Total EIPs: ${stats.totalEIPs}`);
  console.log(`Maximum EIP ID: ${stats.maxId}`);
  console.log("EIPs by status:");
  Object.entries(stats.statusCounts).forEach(([status, count]) => {
    console.log(`  ${status}: ${count}`);
  });
}

// Run the program
main();

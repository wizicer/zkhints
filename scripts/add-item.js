#!/usr/bin/env node

import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

// ESM-compatible way to get __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// File paths
const LIST_JSON_PATH = path.join(__dirname, '../src/data/list/list.json');

// Load JSON files
function loadJSON(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(content);
  } catch (error) {
    console.error(`Error loading ${filePath}:`, error.message);
    process.exit(1);
  }
}

// Save JSON file with formatting
function saveJSON(filePath, data) {
  try {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n', 'utf8');
    console.log(`✓ Successfully saved to ${filePath}`);
  } catch (error) {
    console.error(`Error saving ${filePath}:`, error.message);
    process.exit(1);
  }
}

// Find all sections recursively and build a flat map
function buildSectionMap(listData) {
  const sectionMap = new Map();
  
  function traverse(item, path = []) {
    if (item.id) {
      const currentPath = [...path, item.id];
      sectionMap.set(item.id, { section: item, path: currentPath });
    }
    
    if (item.sections) {
      const currentPath = item.id ? [...path, item.id] : path;
      item.sections.forEach(section => traverse(section, currentPath));
    }
    
    if (item.subsections) {
      const currentPath = item.id ? [...path, item.id] : path;
      item.subsections.forEach(subsection => traverse(subsection, currentPath));
    }
  }
  
  listData.forEach(resource => traverse(resource));
  return sectionMap;
}

// Find section by ID
function findSectionById(listData, sectionId) {
  const sectionMap = buildSectionMap(listData);
  return sectionMap.get(sectionId);
}

// Validate required fields for EventLink
function validateEventLink(item) {
  const required = ['title', 'link', 'outdated', 'location', 'dateDescription'];
  const missing = required.filter(field => !item[field]);
  
  if (missing.length > 0) {
    throw new Error(`Missing required fields for EventLink: ${missing.join(', ')}`);
  }
}

// Validate required fields for ResourceLink
function validateResourceLink(item) {
  const required = ['title', 'description', 'link'];
  const missing = required.filter(field => !item[field]);
  
  if (missing.length > 0) {
    throw new Error(`Missing required fields for ResourceLink: ${missing.join(', ')}`);
  }
}

// Parse command line arguments
function parseArgs() {
  const args = process.argv.slice(2);
  
  if (args.length === 0 || args.includes('--help') || args.includes('-h')) {
    printUsage();
    process.exit(0);
  }
  
  if (args.includes('--list') || args.includes('-l')) {
    return { listSections: true };
  }
  
  const options = {
    sectionId: null,
    type: 'resource', // default to resource
    fields: {}
  };
  
  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    
    if (arg === '--section' || arg === '-s') {
      options.sectionId = args[++i];
    } else if (arg === '--type' || arg === '-t') {
      const type = args[++i];
      if (type !== 'event' && type !== 'resource') {
        console.error('Error: --type must be either "event" or "resource"');
        process.exit(1);
      }
      options.type = type;
    } else if (arg.startsWith('--')) {
      const fieldName = arg.slice(2);
      const fieldValue = args[++i];
      
      // Handle boolean fields
      if (fieldValue === 'true') {
        options.fields[fieldName] = true;
      } else if (fieldValue === 'false') {
        options.fields[fieldName] = false;
      } else {
        options.fields[fieldName] = fieldValue;
      }
    }
  }
  
  if (!options.sectionId) {
    console.error('Error: --section is required');
    printUsage();
    process.exit(1);
  }
  
  return options;
}

// List all available sections
function listAvailableSections(listData) {
  const sectionMap = buildSectionMap(listData);
  const sections = Array.from(sectionMap.entries()).sort((a, b) => a[0].localeCompare(b[0]));
  
  console.log('\nAVAILABLE SECTIONS\n');
  sections.forEach(([id, { path }]) => {
    console.log(`  ${id.padEnd(20)} ${path.join(' > ')}`);
  });
  console.log('');
}

// Print usage information
function printUsage() {
  console.log(`
NAME
    add-item - add events or resources to the ZKHint list

SYNOPSIS
    node add-item.js --section SECTION_ID --type TYPE [OPTIONS]
    node add-item.js --list
    node add-item.js --help

DESCRIPTION
    Add new events or resources to the list.json file. Items are added to
    the specified section identified by its section ID.

OPTIONS
    --section, -s SECTION_ID
        Section ID where the item will be added (required unless --list)

    --type, -t TYPE
        Type of item: "event" or "resource" (default: resource)

    --list, -l
        List all available section IDs and their paths

    --help, -h
        Display this help message

EVENT FIELDS
    Required fields for --type event:
        --title STRING          Event title
        --link URL              Event URL
        --outdated DATE         Outdated date (YYYY-MM-DD format)
        --location STRING       Event location
        --dateDescription STR   Human-readable date description

    Optional fields:
        --description STRING    Event description

RESOURCE FIELDS
    Required fields for --type resource:
        --title STRING          Resource title
        --description STRING    Resource description
        --link URL              Resource URL

    Optional fields:
        --short STRING          Short description
        --rip BOOLEAN           Mark as no longer available (true/false)
        --year STRING           Publication year
        --author STRING         Author name
        --difficulty LEVEL      beginner, intermediate, or advanced
        --category STRING       Category

EXAMPLES
    List all available sections:
        node add-item.js --list

    Add an event to the meetings section:
        node add-item.js --section meetings --type event \\
          --title "ZK Summit 14" \\
          --link "https://zksummit.com" \\
          --location "San Francisco, USA" \\
          --outdated "2025-12-31" \\
          --dateDescription "December 2025"

    Add a resource to the intro section:
        node add-item.js --section intro --type resource \\
          --title "Introduction to ZK" \\
          --description "A beginner-friendly guide to zero-knowledge proofs" \\
          --link "https://example.com/zk-intro" \\
          --difficulty "beginner"

    Add a research paper:
        node add-item.js --section proving-schemes --type resource \\
          --title "Nova: Recursive Zero-Knowledge Arguments" \\
          --description "A new approach to recursive SNARKs" \\
          --link "https://eprint.iacr.org/2021/370" \\
          --difficulty "advanced" \\
          --author "Abhiram Kothapalli et al." \\
          --year "2021"

FILES
    ../src/data/list/list.json
        The main data file that stores all resources and events

SEE ALSO
    list-sections.js(1), extract-sections.js(1)
`);
}

// Main function
function main() {
  const options = parseArgs();
  
  // Load data
  const listData = loadJSON(LIST_JSON_PATH);
  
  // Handle --list option
  if (options.listSections) {
    listAvailableSections(listData);
    process.exit(0);
  }
  
  // Find the section by ID
  const result = findSectionById(listData, options.sectionId);
  if (!result) {
    console.error(`Error: Section ID "${options.sectionId}" not found`);
    console.error('Use --list to see all available section IDs');
    process.exit(1);
  }
  
  const { section, path } = result;
  
  // Validate and create the item
  let newItem = { ...options.fields };
  
  try {
    if (options.type === 'event') {
      validateEventLink(newItem);
    } else {
      validateResourceLink(newItem);
    }
  } catch (error) {
    console.error(`Validation error: ${error.message}`);
    process.exit(1);
  }
  
  // Add the item to the section
  if (!section.links) {
    section.links = [];
  }
  
  section.links.push(newItem);
  
  // Save the updated list
  saveJSON(LIST_JSON_PATH, listData);
  
  console.log(`\n✓ Successfully added ${options.type} to section "${section.title || options.sectionId}"`);
  console.log(`  Path: ${path.join(' > ')}`);
  console.log(`  Title: ${newItem.title}`);
  console.log(`  Link: ${newItem.link}`);
}

// Run the script
main();

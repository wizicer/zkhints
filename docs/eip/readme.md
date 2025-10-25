# EIP Parser

This tool parses Ethereum Improvement Proposals (EIPs) from a markdown file and generates structured data for use in the application.

## How to Update EIP Data

Follow these steps to update the EIP data in the application:

### 1. Prepare the Input File

First, you need to prepare the input markdown file:

1. Get the latest EIP list from https://eips.ethereum.org/all
2. Copy with [copycat](https://microsoftedge.microsoft.com/addons/detail/copycat/afnfdembabcfmjgjdklllnenkkldfdin) with Markdown format.
3. Save it as `input.md` in the `docs/eip/` directory
4. Similarly, copy [ERC](https://eips.ethereum.org/erc) with copycat and save to `erc.md` in the `docs/eip/` directory

### 2. Run the Parser

Execute the parser script to process the input file:

```bash
cd docs/eip
node eip-parser.js
```

This will:

- Parse all EIPs from the input file
- Filter for ZKP-related EIPs based on keywords and specific IDs
- Generate the `eips.json` file with all parsed EIPs
- Update `src/data/eip.ts` with the filtered ZKP-related EIPs
- Display statistics about the parsed EIPs

### 3. Verify the Results

After running the parser:

1. Check the console output for any errors or warnings
2. Verify the statistics to ensure all EIPs were properly parsed
3. Review the generated `src/data/eip.ts` file to confirm the ZKP-related EIPs look correct
4. If needed, adjust the filter keywords or specific IDs in the parser script

### 4. Customize Filtering (Optional)

If you need to modify which EIPs are included or excluded:

- Edit the `keywords` array to change which terms are considered ZKP-related
- Modify the `specificIds` array to include specific EIPs regardless of their title
- Update the `excludeIds` array to exclude specific EIPs even if they match keywords

### 5. Commit Changes

Once you're satisfied with the updated data:

1. Commit the updated `src/data/eip.ts` file
2. Optionally commit the `input.md` and `eips.json` files if you want to track the source data

## Parser Features

The parser provides several features:

- Extracts EIP ID, title, status, and authors from markdown tables
- Handles different table formats (standard and Last Call)
- Parses author information into structured objects with name, email, GitHub username, and URL
- Filters EIPs based on ZKP-related keywords
- Generates TypeScript code for direct import into the application
- Provides statistics about the parsed EIPs

# Markdown Removal Scripts for Payload CMS

This directory contains scripts to remove markdown formatting from your Payload CMS pages and blog posts.

## Scripts

### 1. `test-markdown-removal.ts` - Test Script

This script tests the markdown removal on a single page without making changes.

**Usage:**

```bash
npx tsx scripts/test-markdown-removal.ts
```

**What it does:**

- Finds the `services-emergency-tree-service` page
- Shows a preview of the current content
- Detects markdown patterns (links, bold, italic, etc.)
- Shows what the cleaned content would look like
- **Does NOT modify the page** (safe to run)

### 2. `remove-markdown-from-pages.ts` - Full Script

This script removes markdown from ALL pages and blog posts in your CMS.

**Usage:**

```bash
npx tsx scripts/remove-markdown-from-pages.ts
```

**What it does:**

- Processes all pages in the `pages` collection
- Processes all posts in the `blog-posts` collection
- Removes markdown from both `content` and `excerpt` fields
- **MODIFIES your data** - make sure to backup first!

## Markdown Patterns Removed

The scripts remove the following markdown patterns:

- **Links**: `[text](url)` → `text`
- **Bold**: `**text**` → `text`
- **Italic**: `*text*` → `text`
- **Inline code**: `` `text` `` → `text`
- **Strikethrough**: `~~text~~` → `text`
- **Headings**: `# text`, `## text`, etc. → `text`
- **Horizontal rules**: `---` or `***` → removed
- **Blockquotes**: `> text` → `text`
- **Lists**: `- item` or `1. item` → `item`

## Before Running

1. **Backup your database** - These scripts modify your content
2. Test first with `test-markdown-removal.ts`
3. Make sure your environment variables are set:
   - `DATABASE_URI`
   - `PAYLOAD_SECRET`

## Environment Setup

Make sure your `.env` file contains:

```
DATABASE_URI=your_database_connection_string
PAYLOAD_SECRET=your_payload_secret
```

## Example

Based on your example content:

**Before:**

```
Our [ISA certified arborists](https://www.isa-arbor.com/Credentials/ISA-Certified-Arborist) understand the challenges...
```

**After:**

```
Our ISA certified arborists understand the challenges...
```

The link text is preserved, but the markdown formatting and URL are removed.

## Safety Features

- The test script shows previews without making changes
- Both scripts provide detailed logging of what's being processed
- Error handling prevents crashes if a page fails to update
- Summary statistics show what was actually changed

## Troubleshooting

If you encounter issues:

1. Check that your environment variables are set correctly
2. Ensure your database is accessible
3. Verify Payload CMS is properly configured
4. Check the console output for specific error messages

## Customization

You can modify the `removeMarkdown()` function in either script to:

- Keep certain markdown patterns
- Add support for additional markdown syntax
- Change how specific patterns are handled

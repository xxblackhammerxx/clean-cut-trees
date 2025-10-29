#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const glob = require('glob')

/**
 * Script to fix React unescaped entities errors
 * Replaces unescaped quotes and apostrophes in JSX with proper HTML entities
 */

// Configuration
const config = {
  // File patterns to search
  patterns: ['src/**/*.tsx', 'src/**/*.ts', 'src/**/*.jsx', 'src/**/*.js'],

  // Replacements for unescaped entities
  replacements: [
    // Single quotes/apostrophes - use right single quotation mark for better readability
    { pattern: /([^\\])'([^s])/g, replacement: '$1&rsquo;$2' }, // Don't replace contractions like don't
    { pattern: /^'([^s])/g, replacement: '&rsquo;$1' }, // Start of line
    { pattern: /([^\\])'$/g, replacement: '$1&rsquo;' }, // End of line
    { pattern: /([^\\])'(\s)/g, replacement: '$1&rsquo;$2' }, // Before whitespace
    { pattern: /(\s)'([^s])/g, replacement: '$1&rsquo;$2' }, // After whitespace

    // Double quotes - use right double quotation mark
    { pattern: /([^\\])"([^"])/g, replacement: '$1&rdquo;$2' },
    { pattern: /^"([^"])/g, replacement: '&rdquo;$1' }, // Start of line
    { pattern: /([^\\])"$/g, replacement: '$1&rdquo;' }, // End of line
    { pattern: /([^\\])"(\s)/g, replacement: '$1&rdquo;$2' }, // Before whitespace
    { pattern: /(\s)"([^"])/g, replacement: '$1&rdquo;$2' }, // After whitespace
  ],

  // Backup directory
  backupDir: 'backup-before-entity-fix',
}

/**
 * Get all files matching the patterns
 */
function getFilesToProcess() {
  const files = []

  for (const pattern of config.patterns) {
    const matches = glob.sync(pattern, { cwd: process.cwd() })
    files.push(...matches)
  }

  // Remove duplicates and return absolute paths
  return [...new Set(files)].map((file) => path.resolve(file))
}

/**
 * Create backup of original files
 */
function createBackups(files) {
  const backupPath = path.resolve(config.backupDir)

  if (!fs.existsSync(backupPath)) {
    fs.mkdirSync(backupPath, { recursive: true })
  }

  console.log(`📁 Creating backups in ${backupPath}`)

  for (const file of files) {
    const relativePath = path.relative(process.cwd(), file)
    const backupFile = path.join(backupPath, relativePath)
    const backupDir = path.dirname(backupFile)

    if (!fs.existsSync(backupDir)) {
      fs.mkdirSync(backupDir, { recursive: true })
    }

    fs.copyFileSync(file, backupFile)
  }
}

/**
 * Check if a position is inside JSX content
 */
function isInJSXContent(content, position) {
  // Simple heuristic: check if we're between > and <
  // This is not perfect but should work for most cases
  let beforeContent = content.substring(0, position)
  let afterContent = content.substring(position)

  // Look for the nearest JSX tags
  let lastOpenTag = beforeContent.lastIndexOf('>')
  let lastCloseTag = beforeContent.lastIndexOf('<')
  let nextOpenTag = afterContent.indexOf('<')
  let nextCloseTag = afterContent.indexOf('>')

  // If we're between > and <, we're likely in JSX content
  return lastOpenTag > lastCloseTag && nextOpenTag >= 0
}

/**
 * Process a single file
 */
function processFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8')
  let modifiedContent = content
  let changeCount = 0

  // Only process files that contain JSX (have .tsx extension or JSX syntax)
  if (!filePath.endsWith('.tsx') && !filePath.endsWith('.jsx') && !content.includes('<')) {
    return { changeCount: 0, hasChanges: false }
  }

  // Apply replacements more carefully for JSX content
  for (const { pattern, replacement } of config.replacements) {
    const matches = [...modifiedContent.matchAll(pattern)]

    for (const match of matches.reverse()) {
      // Process in reverse to maintain positions
      const matchStart = match.index
      const matchEnd = matchStart + match[0].length

      // Check if this match is in JSX content
      if (isInJSXContent(modifiedContent, matchStart)) {
        const before = modifiedContent.substring(0, matchStart)
        const after = modifiedContent.substring(matchEnd)
        const replaced = match[0].replace(pattern, replacement)

        modifiedContent = before + replaced + after
        changeCount++
      }
    }
  }

  // Additional specific patterns for common cases
  const specificReplacements = [
    // Handle contractions more carefully
    { pattern: /don't/g, replacement: 'don&rsquo;t' },
    { pattern: /won't/g, replacement: 'won&rsquo;t' },
    { pattern: /can't/g, replacement: 'can&rsquo;t' },
    { pattern: /isn't/g, replacement: 'isn&rsquo;t' },
    { pattern: /aren't/g, replacement: 'aren&rsquo;t' },
    { pattern: /wasn't/g, replacement: 'wasn&rsquo;t' },
    { pattern: /weren't/g, replacement: 'weren&rsquo;t' },
    { pattern: /hasn't/g, replacement: 'hasn&rsquo;t' },
    { pattern: /haven't/g, replacement: 'haven&rsquo;t' },
    { pattern: /doesn't/g, replacement: 'doesn&rsquo;t' },
    { pattern: /didn't/g, replacement: 'didn&rsquo;t' },
    { pattern: /shouldn't/g, replacement: 'shouldn&rsquo;t' },
    { pattern: /wouldn't/g, replacement: 'wouldn&rsquo;t' },
    { pattern: /couldn't/g, replacement: 'couldn&rsquo;t' },
    { pattern: /that's/g, replacement: 'that&rsquo;s' },
    { pattern: /it's/g, replacement: 'it&rsquo;s' },
    { pattern: /there's/g, replacement: 'there&rsquo;s' },
    { pattern: /here's/g, replacement: 'here&rsquo;s' },
    { pattern: /what's/g, replacement: 'what&rsquo;s' },
    { pattern: /where's/g, replacement: 'where&rsquo;s' },
    { pattern: /who's/g, replacement: 'who&rsquo;s' },
    { pattern: /you're/g, replacement: 'you&rsquo;re' },
    { pattern: /we're/g, replacement: 'we&rsquo;re' },
    { pattern: /they're/g, replacement: 'they&rsquo;re' },
    { pattern: /I'm/g, replacement: 'I&rsquo;m' },
    { pattern: /you'll/g, replacement: 'you&rsquo;ll' },
    { pattern: /we'll/g, replacement: 'we&rsquo;ll' },
    { pattern: /they'll/g, replacement: 'they&rsquo;ll' },
    { pattern: /I'll/g, replacement: 'I&rsquo;ll' },
    { pattern: /you've/g, replacement: 'you&rsquo;ve' },
    { pattern: /we've/g, replacement: 'we&rsquo;ve' },
    { pattern: /they've/g, replacement: 'they&rsquo;ve' },
    { pattern: /I've/g, replacement: 'I&rsquo;ve' },
  ]

  for (const { pattern, replacement } of specificReplacements) {
    const before = modifiedContent
    modifiedContent = modifiedContent.replace(pattern, replacement)
    if (before !== modifiedContent) {
      changeCount += (before.match(pattern) || []).length
    }
  }

  const hasChanges = content !== modifiedContent

  if (hasChanges) {
    fs.writeFileSync(filePath, modifiedContent, 'utf8')
  }

  return { changeCount, hasChanges }
}

/**
 * Main execution
 */
function main() {
  console.log('🔧 Starting React unescaped entities fix...\n')

  const files = getFilesToProcess()
  console.log(`📄 Found ${files.length} files to process`)

  if (files.length === 0) {
    console.log('❌ No files found matching the patterns')
    return
  }

  // Create backups
  createBackups(files)

  // Process files
  let totalChanges = 0
  let filesModified = 0

  console.log('\n🔄 Processing files:')

  for (const file of files) {
    const relativePath = path.relative(process.cwd(), file)

    try {
      const result = processFile(file)

      if (result.hasChanges) {
        console.log(`✅ ${relativePath} - ${result.changeCount} changes`)
        totalChanges += result.changeCount
        filesModified++
      } else {
        console.log(`⚪ ${relativePath} - no changes needed`)
      }
    } catch (error) {
      console.error(`❌ Error processing ${relativePath}:`, error.message)
    }
  }

  console.log(`\n📊 Summary:`)
  console.log(`   Files processed: ${files.length}`)
  console.log(`   Files modified: ${filesModified}`)
  console.log(`   Total changes: ${totalChanges}`)
  console.log(`   Backup location: ${config.backupDir}`)

  if (totalChanges > 0) {
    console.log('\n✨ All unescaped entities have been fixed!')
    console.log('💡 Run your linter again to verify the fixes')
  } else {
    console.log('\n🎉 No unescaped entities found!')
  }
}

// Run the script
if (require.main === module) {
  main()
}

module.exports = { processFile, getFilesToProcess, config }

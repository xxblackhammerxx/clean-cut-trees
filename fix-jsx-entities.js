#!/usr/bin/env node

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

/**
 * Advanced script to fix React unescaped entities in JSX content only
 * This script properly identifies JSX content vs JavaScript code
 */

/**
 * Parse and fix unescaped entities only in JSX text content
 */
function fixUnescapedEntitiesInJSX(content) {
  let result = content
  let offset = 0

  // Find all JSX text content (between > and < that isn't in strings)
  const jsxTextRegex = />([^<]*?['""][^<]*?)</g
  let match

  // Track positions where we've made changes to adjust subsequent matches
  const changes = []

  while ((match = jsxTextRegex.exec(content)) !== null) {
    const textContent = match[1]
    const startPos = match.index + 1 // Start after the '>'
    const endPos = startPos + textContent.length

    // Skip if this looks like it's inside a JavaScript string or comment
    if (isInsideJavaScriptCode(content, startPos)) {
      continue
    }

    // Fix entities in this text content
    let fixedText = textContent

    // Replace unescaped single quotes/apostrophes
    fixedText = fixedText.replace(/'/g, '&rsquo;')

    // Replace unescaped double quotes
    fixedText = fixedText.replace(/"/g, '&rdquo;')

    if (fixedText !== textContent) {
      changes.push({
        start: startPos,
        end: endPos,
        original: textContent,
        replacement: fixedText,
      })
    }
  }

  // Apply changes in reverse order to maintain positions
  changes.reverse().forEach((change) => {
    result = result.substring(0, change.start) + change.replacement + result.substring(change.end)
  })

  return result
}

/**
 * Check if a position is inside JavaScript code (not JSX text)
 */
function isInsideJavaScriptCode(content, position) {
  const beforeContent = content.substring(0, position)

  // Simple heuristics to avoid JavaScript code areas
  const lines = beforeContent.split('\n')
  const currentLine = lines[lines.length - 1]

  // Skip if we're inside a string literal
  const singleQuotes = (currentLine.match(/'/g) || []).length
  const doubleQuotes = (currentLine.match(/"/g) || []).length
  const backticks = (currentLine.match(/`/g) || []).length

  // If odd number of quotes, we're probably inside a string
  if (singleQuotes % 2 === 1 || doubleQuotes % 2 === 1 || backticks % 2 === 1) {
    return true
  }

  // Skip if line looks like JavaScript (has = or ; or function keywords)
  if (
    currentLine.includes(' = ') ||
    currentLine.includes(';') ||
    currentLine.includes('function') ||
    currentLine.includes('const ') ||
    currentLine.includes('let ') ||
    currentLine.includes('var ')
  ) {
    return true
  }

  return false
}

/**
 * Better approach: Use regex to find JSX text nodes specifically
 */
function fixJSXTextNodes(content) {
  // This regex finds text between JSX tags that contains quotes
  const jsxTextWithQuotes = />([^<]*?['"][^<]*?)</g

  return content.replace(jsxTextWithQuotes, (match, textContent) => {
    // Don't process if this looks like it's in a JavaScript context
    const beforeMatch = content.substring(0, content.indexOf(match))

    // Skip if we're inside template literals, comments, or imports
    if (
      (beforeMatch.includes('`') && !beforeMatch.endsWith('`')) ||
      (beforeMatch.includes('//') && !beforeMatch.includes('\n')) ||
      (beforeMatch.includes('import') &&
        beforeMatch.lastIndexOf('import') > beforeMatch.lastIndexOf(';'))
    ) {
      return match
    }

    let fixed = textContent

    // Replace unescaped quotes with HTML entities
    fixed = fixed.replace(/'/g, '&rsquo;')
    fixed = fixed.replace(/"/g, '&rdquo;')

    return '>' + fixed + '<'
  })
}

/**
 * Most reliable approach: Only fix obvious JSX text content
 */
function fixUnescapedEntitiesReliably(content) {
  let result = content

  // Pattern 1: Text between JSX tags that contains quotes
  // e.g., >Don't worry about it<  or  >He said "hello"<
  result = result.replace(/>([^<{]*?)(['"]+)([^<{]*?)</g, (match, before, quotes, after) => {
    const fixedQuotes = quotes.replace(/'/g, '&rsquo;').replace(/"/g, '&rdquo;')
    return `>${before}${fixedQuotes}${after}<`
  })

  // Pattern 2: Text with quotes followed by JSX closing tag
  // Handle cases where text with quotes is at the end of JSX content
  result = result.replace(/([^>}])(['"]+)([^<{'"]*?)</g, (match, before, quotes, after) => {
    // Only if this looks like JSX text (not JavaScript code)
    if (before.match(/[a-zA-Z\s]/) && !before.includes('=') && !before.includes(';')) {
      const fixedQuotes = quotes.replace(/'/g, '&rsquo;').replace(/"/g, '&rdquo;')
      return `${before}${fixedQuotes}${after}<`
    }
    return match
  })

  // Pattern 3: Handle contractions and common phrases more specifically
  const commonPhrases = [
    { pattern: />\s*([^<]*?)don't([^<]*?)\s*</g, replacement: '>$1don&rsquo;t$2<' },
    { pattern: />\s*([^<]*?)won't([^<]*?)\s*</g, replacement: '>$1won&rsquo;t$2<' },
    { pattern: />\s*([^<]*?)can't([^<]*?)\s*</g, replacement: '>$1can&rsquo;t$2<' },
    { pattern: />\s*([^<]*?)isn't([^<]*?)\s*</g, replacement: '>$1isn&rsquo;t$2<' },
    { pattern: />\s*([^<]*?)it's([^<]*?)\s*</g, replacement: '>$1it&rsquo;s$2<' },
    { pattern: />\s*([^<]*?)that's([^<]*?)\s*</g, replacement: '>$1that&rsquo;s$2<' },
    { pattern: />\s*([^<]*?)you're([^<]*?)\s*</g, replacement: '>$1you&rsquo;re$2<' },
    { pattern: />\s*([^<]*?)we're([^<]*?)\s*</g, replacement: '>$1we&rsquo;re$2<' },
    { pattern: />\s*([^<]*?)they're([^<]*?)\s*</g, replacement: '>$1they&rsquo;re$2<' },
  ]

  commonPhrases.forEach(({ pattern, replacement }) => {
    result = result.replace(pattern, replacement)
  })

  return result
}

/**
 * Process a single file
 */
function processFile(filePath) {
  const fullPath = path.resolve(filePath)

  if (!fs.existsSync(fullPath)) {
    console.log(`⚠️  File not found: ${filePath}`)
    return false
  }

  try {
    const content = fs.readFileSync(fullPath, 'utf8')
    const fixedContent = fixUnescapedEntitiesReliably(content)

    if (content !== fixedContent) {
      // Create backup
      const backupPath = fullPath + '.backup'
      fs.writeFileSync(backupPath, content, 'utf8')

      // Write fixed content
      fs.writeFileSync(fullPath, fixedContent, 'utf8')

      console.log(`✅ Fixed: ${filePath}`)
      return true
    } else {
      console.log(`⚪ No changes needed: ${filePath}`)
      return false
    }
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message)
    return false
  }
}

/**
 * Get files from glob patterns
 */
function getFilesToProcess() {
  // Start with specific files from error messages, then expand if needed
  const specificFiles = [
    'src/app/(frontend)/service-areas/american-fork-ut-tree-service/page.tsx',
    'src/app/(frontend)/service-areas/bountiful-ut-tree-service/page.tsx',
    'src/app/(frontend)/service-areas/centerville-ut-tree-service/page.tsx',
    'src/app/(frontend)/service-areas/clearfield-ut-tree-service/page.tsx',
    'src/app/(frontend)/service-areas/draper-ut-tree-service/page.tsx',
    'src/app/(frontend)/service-areas/farmington-ut-tree-service/page.tsx',
    'src/app/(frontend)/service-areas/highland-ut-tree-service/page.tsx',
    'src/app/(frontend)/service-areas/kaysville-ut-tree-service/page.tsx',
    'src/app/(frontend)/service-areas/layton-ut-tree-service/page.tsx',
    'src/app/(frontend)/service-areas/lehi-ut-tree-service/page.tsx',
    'src/app/(frontend)/service-areas/murray-ut-tree-service/page.tsx',
    'src/app/(frontend)/service-areas/north-ogden-ut-tree-service/page.tsx',
    'src/app/(frontend)/service-areas/north-salt-lake-ut-tree-service/page.tsx',
    'src/app/(frontend)/service-areas/ogden-ut-tree-service/page.tsx',
    'src/app/(frontend)/service-areas/orem-ut-tree-service/page.tsx',
    'src/app/(frontend)/service-areas/pleasant-grove-ut-tree-service/page.tsx',
    'src/app/(frontend)/service-areas/provo-ut-tree-service/page.tsx',
    'src/app/(frontend)/service-areas/riverdale-ut-tree-service/page.tsx',
    'src/app/(frontend)/service-areas/roy-ut-tree-service/page.tsx',
    'src/app/(frontend)/service-areas/salt-lake-city-ut-tree-service/page.tsx',
    'src/app/(frontend)/service-areas/south-jordan-ut-tree-service/page.tsx',
    'src/app/(frontend)/service-areas/south-weber-ut-tree-service/page.tsx',
    'src/app/(frontend)/service-areas/syracuse-ut-tree-service/page.tsx',
    'src/app/(frontend)/service-areas/washington-terrace-ut-tree-service/page.tsx',
    'src/app/(frontend)/service-areas/weber-county-ut-tree-service/page.tsx',
    'src/app/(frontend)/service-areas/west-bountiful-ut-tree-service/page.tsx',
    'src/app/(frontend)/service-areas/west-haven-ut-tree-service/page.tsx',
    'src/app/(frontend)/service-areas/west-jordan-ut-tree-service/page.tsx',
    'src/app/(frontend)/service-areas/west-valley-city-ut-tree-service/page.tsx',
    'src/app/(frontend)/service-areas/woods-cross-ut-tree-service/page.tsx',
    'src/app/(frontend)/services/services-commercial-property-tree-management/page.tsx',
    'src/app/(frontend)/services/services-emergency-tree-service/page.tsx',
    'src/app/(frontend)/services/services-land-clearing/page.tsx',
    'src/app/(frontend)/services/services-municipal-tree-service/page.tsx',
    'src/app/(frontend)/services/services-professional-land-clearing-services/page.tsx',
    'src/app/(frontend)/services/services-storm-cleanup/page.tsx',
    'src/app/(frontend)/services/services-tree-removal/page.tsx',
    'src/app/(frontend)/services/services-tree-trimming/page.tsx',
    'src/app/(frontend)/services-falling-branches/page.tsx',
    'src/app/(frontend)/services-fruit-tree-pruning/page.tsx',
    'src/app/(frontend)/services-hazardous-tree-removal/page.tsx',
    'src/app/(frontend)/services-hoa-tree-management/page.tsx',
    'src/app/(frontend)/services-landscaping-tree/page.tsx',
    'src/app/(frontend)/services-overgrown-trees/page.tsx',
    'src/app/(frontend)/services-property-management-trees/page.tsx',
    'src/app/(frontend)/services-safe-tree-removal/page.tsx',
    'src/app/(frontend)/services-stump-grinding/page.tsx',
    'src/app/(frontend)/services-tree-treatment-healthcare/page.tsx',
    'src/app/(frontend)/sitemap/page.tsx',
  ]

  return specificFiles.filter((file) => fs.existsSync(path.resolve(file)))
}

/**
 * Main execution
 */
function main() {
  console.log('🔧 Fixing React unescaped entities in JSX content...\n')

  const files = getFilesToProcess()
  console.log(`📄 Found ${files.length} files to process\n`)

  if (files.length === 0) {
    console.log('❌ No files found to process')
    return
  }

  let fixedFiles = 0
  let totalFiles = files.length

  for (const file of files) {
    if (processFile(file)) {
      fixedFiles++
    }
  }

  console.log(`\n📊 Summary:`)
  console.log(`   Files processed: ${totalFiles}`)
  console.log(`   Files fixed: ${fixedFiles}`)
  console.log(`   Backup files: ${fixedFiles} (*.backup)`)

  if (fixedFiles > 0) {
    console.log('\n✨ Unescaped entities have been fixed!')
    console.log('📝 Backup files created with .backup extension')
    console.log('💡 Run `pnpm build` to verify the fixes')
    console.log('🧹 Clean up backups with: rm src/**/*.backup')
  } else {
    console.log('\n🎉 All files were already clean!')
  }
}

// Run the script
if (import.meta.url === `file://${process.argv[1]}`) {
  main()
}

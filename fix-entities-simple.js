#!/usr/bin/env node

const fs = require('fs')
const path = require('path')

/**
 * Simple and reliable script to fix React unescaped entities
 * This script specifically targets the exact patterns causing ESLint errors
 */

// Get all TypeScript React files from the error list
const filesToFix = [
  './src/app/(frontend)/service-areas/american-fork-ut-tree-service/page.tsx',
  './src/app/(frontend)/service-areas/bountiful-ut-tree-service/page.tsx',
  './src/app/(frontend)/service-areas/centerville-ut-tree-service/page.tsx',
  './src/app/(frontend)/service-areas/clearfield-ut-tree-service/page.tsx',
  './src/app/(frontend)/service-areas/draper-ut-tree-service/page.tsx',
  './src/app/(frontend)/service-areas/farmington-ut-tree-service/page.tsx',
  './src/app/(frontend)/service-areas/highland-ut-tree-service/page.tsx',
  './src/app/(frontend)/service-areas/kaysville-ut-tree-service/page.tsx',
  './src/app/(frontend)/service-areas/layton-ut-tree-service/page.tsx',
  './src/app/(frontend)/service-areas/lehi-ut-tree-service/page.tsx',
  './src/app/(frontend)/service-areas/murray-ut-tree-service/page.tsx',
  './src/app/(frontend)/service-areas/north-ogden-ut-tree-service/page.tsx',
  './src/app/(frontend)/service-areas/north-salt-lake-ut-tree-service/page.tsx',
  './src/app/(frontend)/service-areas/ogden-ut-tree-service/page.tsx',
  './src/app/(frontend)/service-areas/orem-ut-tree-service/page.tsx',
  './src/app/(frontend)/service-areas/pleasant-grove-ut-tree-service/page.tsx',
  './src/app/(frontend)/service-areas/provo-ut-tree-service/page.tsx',
  './src/app/(frontend)/service-areas/riverdale-ut-tree-service/page.tsx',
  './src/app/(frontend)/service-areas/roy-ut-tree-service/page.tsx',
  './src/app/(frontend)/service-areas/salt-lake-city-ut-tree-service/page.tsx',
  './src/app/(frontend)/service-areas/south-jordan-ut-tree-service/page.tsx',
  './src/app/(frontend)/service-areas/south-weber-ut-tree-service/page.tsx',
  './src/app/(frontend)/service-areas/syracuse-ut-tree-service/page.tsx',
  './src/app/(frontend)/service-areas/washington-terrace-ut-tree-service/page.tsx',
  './src/app/(frontend)/service-areas/weber-county-ut-tree-service/page.tsx',
  './src/app/(frontend)/service-areas/west-bountiful-ut-tree-service/page.tsx',
  './src/app/(frontend)/service-areas/west-haven-ut-tree-service/page.tsx',
  './src/app/(frontend)/service-areas/west-jordan-ut-tree-service/page.tsx',
  './src/app/(frontend)/service-areas/west-valley-city-ut-tree-service/page.tsx',
  './src/app/(frontend)/service-areas/woods-cross-ut-tree-service/page.tsx',
  './src/app/(frontend)/services/services-commercial-property-tree-management/page.tsx',
  './src/app/(frontend)/services/services-emergency-tree-service/page.tsx',
  './src/app/(frontend)/services/services-land-clearing/page.tsx',
  './src/app/(frontend)/services/services-municipal-tree-service/page.tsx',
  './src/app/(frontend)/services/services-professional-land-clearing-services/page.tsx',
  './src/app/(frontend)/services/services-storm-cleanup/page.tsx',
  './src/app/(frontend)/services/services-tree-removal/page.tsx',
  './src/app/(frontend)/services/services-tree-trimming/page.tsx',
  './src/app/(frontend)/services-falling-branches/page.tsx',
  './src/app/(frontend)/services-fruit-tree-pruning/page.tsx',
  './src/app/(frontend)/services-hazardous-tree-removal/page.tsx',
  './src/app/(frontend)/services-hoa-tree-management/page.tsx',
  './src/app/(frontend)/services-landscaping-tree/page.tsx',
  './src/app/(frontend)/services-overgrown-trees/page.tsx',
  './src/app/(frontend)/services-property-management-trees/page.tsx',
  './src/app/(frontend)/services-safe-tree-removal/page.tsx',
  './src/app/(frontend)/services-stump-grinding/page.tsx',
  './src/app/(frontend)/services-tree-treatment-healthcare/page.tsx',
  './src/app/(frontend)/sitemap/page.tsx',
]

/**
 * Fix unescaped entities in JSX content
 */
function fixUnescapedEntities(content) {
  let fixed = content

  // Replace unescaped single quotes/apostrophes with &rsquo;
  // This is the most common issue in the error list
  fixed = fixed.replace(/'/g, '&rsquo;')

  // Replace unescaped double quotes with &rdquo;
  fixed = fixed.replace(/"/g, '&rdquo;')

  return fixed
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
    const fixedContent = fixUnescapedEntities(content)

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
 * Main execution
 */
function main() {
  console.log('🔧 Fixing React unescaped entities...\n')

  let fixedFiles = 0
  let totalFiles = 0

  for (const file of filesToFix) {
    totalFiles++
    if (processFile(file)) {
      fixedFiles++
    }
  }

  console.log(`\n📊 Summary:`)
  console.log(`   Files processed: ${totalFiles}`)
  console.log(`   Files fixed: ${fixedFiles}`)

  if (fixedFiles > 0) {
    console.log('\n✨ Unescaped entities have been fixed!')
    console.log('📝 Backup files created with .backup extension')
    console.log('💡 Run your build command to verify the fixes')
  } else {
    console.log('\n🎉 All files were already clean!')
  }
}

// Run the script
if (require.main === module) {
  main()
}

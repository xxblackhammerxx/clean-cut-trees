import fs from 'fs/promises'
import path from 'path'

const serviceAreasDir =
  '/Users/eric.blackham/codebase/personal/gainz/client-sites-3000/clean-cut-trees/src/app/(frontend)/service-areas'

// Function to extract city name from directory name
function extractCityName(dirName: string): string {
  // Remove '-ut-tree-service' suffix and convert to proper case
  const citySlug = dirName.replace('-ut-tree-service', '')

  // Handle special cases
  const specialCases: Record<string, string> = {
    'north-ogden': 'North Ogden',
    'north-salt-lake': 'North Salt Lake',
    'south-jordan': 'South Jordan',
    'south-ogden': 'South Ogden',
    'south-weber': 'South Weber',
    'west-bountiful': 'West Bountiful',
    'west-haven': 'West Haven',
    'west-jordan': 'West Jordan',
    'west-valley-city': 'West Valley City',
    'woods-cross': 'Woods Cross',
    'fruit-heights': 'Fruit Heights',
    'plain-city': 'Plain City',
    'pleasant-view': 'Pleasant View',
    'farr-west': 'Farr West',
    'washington-terrace': 'Washington Terrace',
    'salt-lake-city': 'Salt Lake City',
    'salt-lake-county': 'Salt Lake County',
    'davis-county': 'Davis County',
    'weber-county': 'Weber County',
    'st-george': 'St. George',
  }

  if (specialCases[citySlug]) {
    return specialCases[citySlug]
  }

  // For single word cities, just capitalize
  return citySlug.charAt(0).toUpperCase() + citySlug.slice(1)
}

async function fixServiceAreaCTAs() {
  console.log('🏙️ Fixing service area CTAs with actual city names...')

  try {
    const items = await fs.readdir(serviceAreasDir, { withFileTypes: true })

    let fixedCount = 0
    let skippedCount = 0
    let errorCount = 0

    for (const item of items) {
      if (item.isDirectory() && item.name.endsWith('-ut-tree-service')) {
        const dirPath = path.join(serviceAreasDir, item.name)
        const pageFile = path.join(dirPath, 'page.tsx')

        console.log(`🔄 Processing: ${item.name}`)

        try {
          // Check if page.tsx exists
          await fs.access(pageFile)

          // Read the file content
          const content = await fs.readFile(pageFile, 'utf-8')

          // Check if it contains the problematic code
          if (
            content.includes(
              "page.title\n                        .replace('Tree Service ', '')\n                        .replace(', UT - Clean Cuts Trees', '')",
            )
          ) {
            // Extract city name from directory
            const cityName = extractCityName(item.name)

            // Replace the dynamic title manipulation with the actual city name
            const updatedContent = content.replace(
              /\{page\.title\s*\.replace\('Tree Service ', ''\)\s*\.replace\(', UT - Clean Cuts Trees', ''\)\}/g,
              `${cityName}`,
            )

            // Write the updated content back
            await fs.writeFile(pageFile, updatedContent, 'utf-8')

            console.log(`   ✅ Fixed: ${item.name} → "${cityName}"`)
            fixedCount++
          } else {
            console.log(`   ⏭️  No dynamic title found, skipping`)
            skippedCount++
          }
        } catch (error) {
          console.error(`   ❌ Error processing ${item.name}:`, error)
          errorCount++
        }
      }
    }

    console.log(`\n🎉 Service area CTA fixing complete!`)
    console.log(`   ✅ Fixed: ${fixedCount} pages`)
    console.log(`   ⏭️  Skipped: ${skippedCount} pages`)
    console.log(`   ❌ Errors: ${errorCount} pages`)
  } catch (error) {
    console.error('❌ Error during CTA fixing:', error)
  }
}

// Run the fix
fixServiceAreaCTAs()

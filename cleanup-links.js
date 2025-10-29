import fs from 'fs'

// Files that have unused Link imports
const filesToCleanup = [
  'src/app/(frontend)/free-wood-chips/page.tsx',
  'src/app/(frontend)/service-areas/clinton-ut-tree-service/page.tsx',
  'src/app/(frontend)/service-areas/davis-county-ut-tree-service/page.tsx',
  'src/app/(frontend)/service-areas/draper-ut-tree-service/page.tsx',
  'src/app/(frontend)/service-areas/eden-ut-tree-service/page.tsx',
  'src/app/(frontend)/service-areas/farr-west-ut-tree-service/page.tsx',
  'src/app/(frontend)/service-areas/fruit-heights-ut-tree-service/page.tsx',
  'src/app/(frontend)/service-areas/harrisville-ut-tree-service/page.tsx',
  'src/app/(frontend)/service-areas/hooper-ut-tree-service/page.tsx',
  'src/app/(frontend)/service-areas/layton-ut-tree-service/page.tsx',
  'src/app/(frontend)/service-areas/murray-ut-tree-service/page.tsx',
  'src/app/(frontend)/service-areas/north-ogden-ut-tree-service/page.tsx',
  'src/app/(frontend)/service-areas/ogden-ut-tree-service/page.tsx',
  'src/app/(frontend)/service-areas/plain-city-ut-tree-service/page.tsx',
  'src/app/(frontend)/service-areas/pleasant-view-ut-tree-service/page.tsx',
  'src/app/(frontend)/service-areas/riverdale-ut-tree-service/page.tsx',
  'src/app/(frontend)/service-areas/roy-ut-tree-service/page.tsx',
  'src/app/(frontend)/service-areas/salt-lake-city-ut-tree-service/page.tsx',
  'src/app/(frontend)/service-areas/salt-lake-county-ut-tree-service/page.tsx',
  'src/app/(frontend)/service-areas/sandy-ut-tree-service/page.tsx',
  'src/app/(frontend)/service-areas/service-areas-farr-west-ut-tree-service/page.tsx',
  'src/app/(frontend)/service-areas/service-areas-ogden-ut-tree-service/page.tsx',
  'src/app/(frontend)/service-areas/south-jordan-ut-tree-service/page.tsx',
  'src/app/(frontend)/service-areas/south-ogden-ut-tree-service/page.tsx',
  'src/app/(frontend)/service-areas/south-weber-ut-tree-service/page.tsx',
  'src/app/(frontend)/service-areas/st-george-ut-tree-service/page.tsx',
  'src/app/(frontend)/service-areas/sunset-ut-tree-service/page.tsx',
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

function cleanupUnusedLinks(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8')

    // Remove unused Link import if it exists
    let updatedContent = content

    // Check if Link is actually used in the file
    const hasLinkUsage = content.includes('<Link') || content.includes('{Link}')

    if (!hasLinkUsage) {
      // Remove the Link import line
      updatedContent = updatedContent.replace(/import Link from 'next\/link'\n/, '')
      updatedContent = updatedContent.replace(
        /import { Metadata } from 'next'\nimport Link from 'next\/link'\n/,
        "import { Metadata } from 'next'\n",
      )

      fs.writeFileSync(filePath, updatedContent)
      console.log(`✓ Removed unused Link import: ${filePath}`)
    } else {
      console.log(`Link is used in: ${filePath}`)
    }
  } catch (error) {
    console.error(`✗ Error cleaning ${filePath}:`, error.message)
  }
}

console.log('Cleaning up unused Link imports...')

filesToCleanup.forEach(cleanupUnusedLinks)

console.log('Link cleanup complete!')

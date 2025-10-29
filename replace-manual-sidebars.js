import fs from 'fs'

// Files that need manual handling (have additional sidebar content)
const manualFiles = [
  'src/app/(frontend)/service-areas/centerville-ut-tree-service/page.tsx',
  'src/app/(frontend)/service-areas/clearfield-ut-tree-service/page.tsx',
  'src/app/(frontend)/service-areas/kaysville-ut-tree-service/page.tsx',
  'src/app/(frontend)/service-areas/farmington-ut-tree-service/page.tsx',
  'src/app/(frontend)/service-areas/bountiful-ut-tree-service/page.tsx',
  'src/app/(frontend)/service-areas/north-ogden-ut-tree-service/page.tsx',
  'src/app/(frontend)/service-areas/riverdale-ut-tree-service/page.tsx',
  'src/app/(frontend)/service-areas/roy-ut-tree-service/page.tsx',
  'src/app/(frontend)/service-areas/service-areas-ogden-ut-tree-service/page.tsx',
  'src/app/(frontend)/service-areas/north-salt-lake-ut-tree-service/page.tsx',
  'src/app/(frontend)/service-areas/clinton-ut-tree-service/page.tsx',
  'src/app/(frontend)/service-areas/davis-county-ut-tree-service/page.tsx',
  'src/app/(frontend)/service-areas/eden-ut-tree-service/page.tsx',
  'src/app/(frontend)/service-areas/farr-west-ut-tree-service/page.tsx',
  'src/app/(frontend)/service-areas/hooper-ut-tree-service/page.tsx',
  'src/app/(frontend)/service-areas/murray-ut-tree-service/page.tsx',
  'src/app/(frontend)/service-areas/plain-city-ut-tree-service/page.tsx',
  'src/app/(frontend)/service-areas/pleasant-view-ut-tree-service/page.tsx',
  'src/app/(frontend)/service-areas/salt-lake-county-ut-tree-service/page.tsx',
  'src/app/(frontend)/service-areas/sandy-ut-tree-service/page.tsx',
  'src/app/(frontend)/service-areas/service-areas-farr-west-ut-tree-service/page.tsx',
  'src/app/(frontend)/service-areas/south-jordan-ut-tree-service/page.tsx',
  'src/app/(frontend)/service-areas/st-george-ut-tree-service/page.tsx',
  'src/app/(frontend)/service-areas/sunset-ut-tree-service/page.tsx',
  'src/app/(frontend)/free-wood-chips/page.tsx',
  'src/app/(frontend)/services/[slug]/page.tsx',
  'src/app/(frontend)/blog/page.tsx',
  'src/app/(frontend)/blog/[slug]/page.tsx',
]

function handleManualFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8')

    // Check if already updated
    if (content.includes('import PageSidebar') && content.includes('<PageSidebar>')) {
      console.log(`✓ Already updated: ${filePath}`)
      return
    }

    // Add import if not present
    let updatedContent = content
    if (!content.includes('import PageSidebar')) {
      const importRegex = /import.*from.*['"][^'"]+['"](\s*\n)/g
      let lastImportIndex = 0
      let match
      while ((match = importRegex.exec(content)) !== null) {
        lastImportIndex = match.index + match[0].length
      }

      if (lastImportIndex > 0) {
        updatedContent =
          content.slice(0, lastImportIndex) +
          "import PageSidebar from '@/components/PageSidebar'\n" +
          content.slice(lastImportIndex)
      }
    }

    // Find the sidebar section and extract the middle content
    const sidebarStart = updatedContent.indexOf('            {/* Sidebar */}')
    const sidebarEnd = updatedContent.indexOf('            </aside>')

    if (sidebarStart !== -1 && sidebarEnd !== -1) {
      const sidebarSection = updatedContent.substring(
        sidebarStart,
        sidebarEnd + '            </aside>'.length,
      )

      // Extract any content between the CTA widget and the "Why Choose" widget
      const ctaEndPattern =
        /              <\/div>\s*\n(?:              <div className="sidebar-widget">(?:(?!              <div className="sidebar-widget">\s*<h3>Why Choose Clean Cuts Trees\?<\/h3>)[\s\S])*?              <\/div>\s*\n)*/
      const whyChoosePattern =
        /              <div className="sidebar-widget">\s*<h3>Why Choose Clean Cuts Trees\?<\/h3>/

      const ctaEndMatch = sidebarSection.match(
        /              <\/div>\s*\n\s*(?=              <div className="sidebar-widget">)/,
      )
      const whyChooseMatch = sidebarSection.match(whyChoosePattern)

      if (ctaEndMatch && whyChooseMatch) {
        const ctaEndIndex = ctaEndMatch.index + ctaEndMatch[0].length
        const whyChooseIndex = whyChooseMatch.index

        if (whyChooseIndex > ctaEndIndex) {
          // There's content between CTA and Why Choose
          const middleContent = sidebarSection.substring(ctaEndIndex, whyChooseIndex).trim()

          if (middleContent) {
            // Replace the entire sidebar with PageSidebar component containing the middle content
            const replacement = `            <PageSidebar>
${middleContent}
            </PageSidebar>`

            updatedContent = updatedContent.replace(sidebarSection, replacement)
            fs.writeFileSync(filePath, updatedContent)
            console.log(`✓ Updated with custom content: ${filePath}`)
            return
          }
        }
      }

      // If no middle content or extraction failed, just use simple PageSidebar
      updatedContent = updatedContent.replace(sidebarSection, '            <PageSidebar />')
      fs.writeFileSync(filePath, updatedContent)
      console.log(`✓ Updated: ${filePath}`)
    } else {
      console.log(`⚠ Sidebar section not found in: ${filePath}`)
    }
  } catch (error) {
    console.error(`✗ Error updating ${filePath}:`, error.message)
  }
}

console.log('Handling files with custom sidebar content...')

manualFiles.forEach(handleManualFile)

console.log('Manual sidebar replacement complete!')

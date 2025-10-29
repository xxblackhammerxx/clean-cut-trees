import fs from 'fs'

// Files that use the sidebar (from our grep search results)
const filesToUpdate = [
  'src/app/(frontend)/service-areas/north-salt-lake-ut-tree-service/page.tsx',
  'src/app/(frontend)/service-areas/centerville-ut-tree-service/page.tsx',
  'src/app/(frontend)/service-areas/clearfield-ut-tree-service/page.tsx',
  'src/app/(frontend)/service-areas/kaysville-ut-tree-service/page.tsx',
  'src/app/(frontend)/sitemap/page.tsx',
  'src/app/(frontend)/service-areas/farmington-ut-tree-service/page.tsx',
  'src/app/(frontend)/service-areas/bountiful-ut-tree-service/page.tsx',
  'src/app/(frontend)/service-areas/ogden-ut-tree-service/page.tsx',
  'src/app/(frontend)/service-areas/north-ogden-ut-tree-service/page.tsx',
  'src/app/(frontend)/service-areas/layton-ut-tree-service/page.tsx',
  'src/app/(frontend)/service-areas/riverdale-ut-tree-service/page.tsx',
  'src/app/(frontend)/service-areas/roy-ut-tree-service/page.tsx',
  'src/app/(frontend)/service-areas/service-areas-ogden-ut-tree-service/page.tsx',
  'src/app/(frontend)/service-areas/south-weber-ut-tree-service/page.tsx',
  'src/app/(frontend)/service-areas/woods-cross-ut-tree-service/page.tsx',
  'src/app/(frontend)/service-areas/clinton-ut-tree-service/page.tsx',
  'src/app/(frontend)/service-areas/davis-county-ut-tree-service/page.tsx',
  'src/app/(frontend)/service-areas/draper-ut-tree-service/page.tsx',
  'src/app/(frontend)/service-areas/eden-ut-tree-service/page.tsx',
  'src/app/(frontend)/service-areas/farr-west-ut-tree-service/page.tsx',
  'src/app/(frontend)/service-areas/fruit-heights-ut-tree-service/page.tsx',
  'src/app/(frontend)/service-areas/harrisville-ut-tree-service/page.tsx',
  'src/app/(frontend)/service-areas/hooper-ut-tree-service/page.tsx',
  'src/app/(frontend)/service-areas/murray-ut-tree-service/page.tsx',
  'src/app/(frontend)/service-areas/plain-city-ut-tree-service/page.tsx',
  'src/app/(frontend)/service-areas/pleasant-view-ut-tree-service/page.tsx',
  'src/app/(frontend)/service-areas/salt-lake-city-ut-tree-service/page.tsx',
  'src/app/(frontend)/service-areas/salt-lake-county-ut-tree-service/page.tsx',
  'src/app/(frontend)/service-areas/sandy-ut-tree-service/page.tsx',
  'src/app/(frontend)/service-areas/service-areas-farr-west-ut-tree-service/page.tsx',
  'src/app/(frontend)/service-areas/south-jordan-ut-tree-service/page.tsx',
  'src/app/(frontend)/service-areas/st-george-ut-tree-service/page.tsx',
  'src/app/(frontend)/service-areas/sunset-ut-tree-service/page.tsx',
  'src/app/(frontend)/service-areas/syracuse-ut-tree-service/page.tsx',
  'src/app/(frontend)/service-areas/washington-terrace-ut-tree-service/page.tsx',
  'src/app/(frontend)/service-areas/weber-county-ut-tree-service/page.tsx',
  'src/app/(frontend)/service-areas/west-bountiful-ut-tree-service/page.tsx',
  'src/app/(frontend)/service-areas/west-haven-ut-tree-service/page.tsx',
  'src/app/(frontend)/service-areas/west-jordan-ut-tree-service/page.tsx',
  'src/app/(frontend)/service-areas/west-valley-city-ut-tree-service/page.tsx',
  'src/app/(frontend)/services/services-emergency-tree-service/page.tsx',
  'src/app/(frontend)/services/services-land-clearing/page.tsx',
  'src/app/(frontend)/services/services-municipal-tree-service/page.tsx',
  'src/app/(frontend)/services/services-professional-land-clearing-services/page.tsx',
  'src/app/(frontend)/services/services-storm-cleanup/page.tsx',
  'src/app/(frontend)/services/services-tree-removal/page.tsx',
  'src/app/(frontend)/services/services-tree-trimming/page.tsx',
  'src/app/(frontend)/free-wood-chips/page.tsx',
  'src/app/(frontend)/services-hoa-tree-management/page.tsx',
  'src/app/(frontend)/services/services-commercial-property-tree-management/page.tsx',
  'src/app/(frontend)/services/[slug]/page.tsx',
  'src/app/(frontend)/services-tree-treatment-healthcare/page.tsx',
  'src/app/(frontend)/services-stump-grinding/page.tsx',
  'src/app/(frontend)/services-property-management-trees/page.tsx',
  'src/app/(frontend)/services-landscaping-tree/page.tsx',
  'src/app/(frontend)/blog/page.tsx',
  'src/app/(frontend)/services-safe-tree-removal/page.tsx',
  'src/app/(frontend)/services-overgrown-trees/page.tsx',
  'src/app/(frontend)/blog/[slug]/page.tsx',
  'src/app/(frontend)/services-hazardous-tree-removal/page.tsx',
]

// The sidebar content to replace (exact match needed)
const sidebarPattern = `            {/* Sidebar */}
            <aside className="page-sidebar">
              <div className="sidebar-widget cta-widget">
                <h3>Need Tree Service?</h3>
                <p>Get expert tree care from Utah's most trusted professionals.</p>
                <Link href="/contact-us" className="btn btn-primary">
                  Free Estimate
                </Link>
                <Link href="tel:+18014737548" className="btn btn-phone">
                  <span
                    className="material-symbols-outlined"
                    style={{ verticalAlign: 'middle', fontSize: 20, marginRight: 4 }}
                  >
                    call
                  </span>
                  (801) 473-7548
                </Link>
              </div>

              <div className="sidebar-widget">
                <h3>Why Choose Clean Cuts Trees?</h3>
                <ul className="features-list">
                  <li>
                    <span
                      className="material-symbols-outlined"
                      style={{ fontSize: 18, verticalAlign: 'middle', marginRight: 4 }}
                    >
                      check_circle
                    </span>
                    Licensed & Insured
                  </li>
                  <li>
                    <span
                      className="material-symbols-outlined"
                      style={{ fontSize: 18, verticalAlign: 'middle', marginRight: 4 }}
                    >
                      check_circle
                    </span>
                    24/7 Emergency Service
                  </li>
                  <li>
                    <span
                      className="material-symbols-outlined"
                      style={{ fontSize: 18, verticalAlign: 'middle', marginRight: 4 }}
                    >
                      check_circle
                    </span>
                    Free Estimates
                  </li>
                  <li>
                    <span
                      className="material-symbols-outlined"
                      style={{ fontSize: 18, verticalAlign: 'middle', marginRight: 4 }}
                    >
                      check_circle
                    </span>
                    Family Owned & Operated
                  </li>
                  <li>
                    <span
                      className="material-symbols-outlined"
                      style={{ fontSize: 18, verticalAlign: 'middle', marginRight: 4 }}
                    >
                      check_circle
                    </span>
                    Professional Equipment
                  </li>
                  <li>
                    <span
                      className="material-symbols-outlined"
                      style={{ fontSize: 18, verticalAlign: 'middle', marginRight: 4 }}
                    >
                      check_circle
                    </span>
                    Satisfaction Guaranteed
                  </li>
                </ul>
              </div>
            </aside>`

const replacement = `            <PageSidebar />`

function updateFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8')

    // Check if file already has PageSidebar import and component
    if (content.includes('import PageSidebar') && content.includes('<PageSidebar />')) {
      console.log(`✓ Already updated: ${filePath}`)
      return
    }

    // Add import if not present
    let updatedContent = content
    if (!content.includes('import PageSidebar')) {
      // Find the last import statement and add our import after it
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

    // Replace the sidebar content
    if (updatedContent.includes(sidebarPattern)) {
      updatedContent = updatedContent.replace(sidebarPattern, replacement)
      fs.writeFileSync(filePath, updatedContent)
      console.log(`✓ Updated: ${filePath}`)
    } else {
      console.log(`⚠ Sidebar pattern not found in: ${filePath}`)
    }
  } catch (error) {
    console.error(`✗ Error updating ${filePath}:`, error.message)
  }
}

console.log('Starting sidebar replacement...')

filesToUpdate.forEach(updateFile)

console.log('Sidebar replacement complete!')

const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')

// Function to extract city name from CTA content
function extractCityName(content) {
  const match = content.match(/<h3>Serving ([^<]+)<\/h3>/)
  return match ? match[1] : null
}

// Function to fix service area pages
function fixServiceAreaPage(filePath) {
  let content = fs.readFileSync(filePath, 'utf8')

  // Extract city name for the CTA
  const cityMatch = content.match(/<h3>Serving ([^<]+)<\/h3>/)
  const cityName = cityMatch ? cityMatch[1] : 'this community'

  console.log(`Processing service area page: ${filePath} (City: ${cityName})`)

  // Remove the boolean variables
  content = content.replace(
    /export default function [^{]+\{\s*const isServicePage = false\s*const isServiceAreaPage = true\s*return \(/,
    (match) => {
      const funcName = match.match(/export default function ([^{]+)\{/)[1]
      return `export default function ${funcName}{\n  return (`
    },
  )

  // Replace conditional CTA blocks with direct service area CTA
  content = content.replace(
    /\{\/\* Service-specific CTAs \*\/\}\s*\{isServicePage && \([^}]+\{\/\* Service Area specific CTAs \*\/\}\s*\{isServiceAreaPage && \(\s*<div className="service-area-cta">[^}]+\}\s*\)\}/s,
    `{/* Service Area CTA */}
              <div className="service-area-cta">
                <div className="cta-box">
                  <h3>Serving ${cityName}</h3>
                  <p>We're proud to provide professional tree services to this community.</p>
                  <div className="cta-buttons">
                    <Link href="/contact-us" className="btn btn-primary">
                      Schedule Service
                    </Link>
                    <Link href="tel:+18014737548" className="btn btn-phone">
                      📞 Call Now
                    </Link>
                  </div>
                </div>
              </div>`,
  )

  // Replace conditional sidebar blocks with direct service areas sidebar
  content = content.replace(
    /\{isServicePage && \([^}]+\{isServiceAreaPage && \(\s*<div className="sidebar-widget">\s*<h3>Service Areas<\/h3>[^}]+\}\s*\)\}/s,
    `<div className="sidebar-widget">
                <h3>Service Areas</h3>
                <ul className="areas-list">
                  <li>
                    <Link href="/service-areas/kaysville-ut-tree-service">Kaysville</Link>
                  </li>
                  <li>
                    <Link href="/service-areas/layton-ut-tree-service">Layton</Link>
                  </li>
                  <li>
                    <Link href="/service-areas/bountiful-ut-tree-service">Bountiful</Link>
                  </li>
                  <li>
                    <Link href="/service-areas/farmington-ut-tree-service">Farmington</Link>
                  </li>
                  <li>
                    <Link href="/service-areas/centerville-ut-tree-service">Centerville</Link>
                  </li>
                </ul>
              </div>`,
  )

  fs.writeFileSync(filePath, content)
  console.log(`✅ Fixed: ${filePath}`)
}

// Function to fix service pages
function fixServicePage(filePath) {
  let content = fs.readFileSync(filePath, 'utf8')

  console.log(`Processing service page: ${filePath}`)

  // Remove the boolean variables
  content = content.replace(
    /export default function [^{]+\{\s*const isServicePage = true\s*const isServiceAreaPage = false\s*return \(/,
    (match) => {
      const funcName = match.match(/export default function ([^{]+)\{/)[1]
      return `export default function ${funcName}{\n  return (`
    },
  )

  // Replace conditional CTA blocks with direct service CTA
  content = content.replace(
    /\{\/\* Service-specific CTAs \*\/\}\s*\{isServicePage && \(\s*<div className="service-cta">[^}]+\}\s*\)\}\s*\{\/\* Service Area specific CTAs \*\/\}\s*\{isServiceAreaPage && \([^}]+\)\}/s,
    `{/* Service CTA */}
              <div className="service-cta">
                <div className="cta-box">
                  <h3>Ready to Get Started?</h3>
                  <p>Contact us today for a free estimate on this service.</p>
                  <div className="cta-buttons">
                    <Link href="/contact-us" className="btn btn-primary">
                      Get Free Estimate
                    </Link>
                    <Link href="tel:+18014737548" className="btn btn-phone">
                      <span
                        className="material-symbols-outlined"
                        style={{ verticalAlign: 'middle', fontSize: 20, marginRight: 4 }}
                      >
                        call
                      </span>{' '}
                      (801) 473-7548
                    </Link>
                  </div>
                </div>
              </div>`,
  )

  // Replace conditional sidebar blocks with direct services sidebar
  content = content.replace(
    /\{isServicePage && \(\s*<div className="sidebar-widget">\s*<h3>Our Services<\/h3>[^}]+\}\s*\)\}\s*\{isServiceAreaPage && \([^}]+\)\}/s,
    `<div className="sidebar-widget">
                <h3>Our Services</h3>
                <ul className="services-list">
                  <li>
                    <Link href="/services/tree-removal">Tree Removal</Link>
                  </li>
                  <li>
                    <Link href="/services/tree-trimming">Tree Trimming</Link>
                  </li>
                  <li>
                    <Link href="/services/emergency-tree-service">Emergency Service</Link>
                  </li>
                  <li>
                    <Link href="/services/storm-cleanup">Storm Cleanup</Link>
                  </li>
                  <li>
                    <Link href="/services/professional-land-clearing-services">
                      Land Clearing
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/municipal-tree-service">Municipal Service</Link>
                  </li>
                </ul>
              </div>`,
  )

  fs.writeFileSync(filePath, content)
  console.log(`✅ Fixed: ${filePath}`)
}

// Function to fix general pages
function fixGeneralPage(filePath) {
  let content = fs.readFileSync(filePath, 'utf8')

  console.log(`Processing general page: ${filePath}`)

  // Remove the boolean variables
  content = content.replace(
    /export default function [^{]+\{\s*const isServicePage = false\s*const isServiceAreaPage = false\s*return \(/,
    (match) => {
      const funcName = match.match(/export default function ([^{]+)\{/)[1]
      return `export default function ${funcName}{\n  return (`
    },
  )

  // Remove all conditional CTA blocks
  content = content.replace(
    /\{\/\* Service-specific CTAs \*\/\}\s*\{isServicePage && \([^}]+\)\}\s*\{\/\* Service Area specific CTAs \*\/\}\s*\{isServiceAreaPage && \([^}]+\)\}/s,
    '',
  )

  // Remove conditional sidebar blocks, keeping only the static ones
  content = content.replace(
    /\{isServicePage && \([^}]+\)\}\s*\{isServiceAreaPage && \([^}]+\)\}/s,
    '',
  )

  fs.writeFileSync(filePath, content)
  console.log(`✅ Fixed: ${filePath}`)
}

// Main execution
const args = process.argv.slice(2)
if (args.length === 0) {
  console.log('Usage: node fix-conditional-logic.js <file-path> [service-area|service|general]')
  process.exit(1)
}

const filePath = args[0]
const pageType = args[1]

if (!fs.existsSync(filePath)) {
  console.error(`File not found: ${filePath}`)
  process.exit(1)
}

try {
  if (pageType === 'service-area') {
    fixServiceAreaPage(filePath)
  } else if (pageType === 'service') {
    fixServicePage(filePath)
  } else if (pageType === 'general') {
    fixGeneralPage(filePath)
  } else {
    console.error('Invalid page type. Use: service-area, service, or general')
    process.exit(1)
  }
} catch (error) {
  console.error(`Error processing ${filePath}:`, error.message)
  process.exit(1)
}

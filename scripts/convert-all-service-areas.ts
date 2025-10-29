import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { parseServiceAreaContent } from '../src/utils/contentParser.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

interface ContentSection {
  type: 'heading' | 'paragraph' | 'list' | 'subheading' | 'subsubheading'
  content: string
  level?: number
  items?: string[]
}

// Extract city name from directory path
function extractCityName(dirPath: string): string {
  const cityMappings: { [key: string]: string } = {
    'bountiful-ut-tree-service': 'Bountiful',
    'centerville-ut-tree-service': 'Centerville',
    'clearfield-ut-tree-service': 'Clearfield',
    'farmington-ut-tree-service': 'Farmington',
    'kaysville-ut-tree-service': 'Kaysville',
    'layton-ut-tree-service': 'Layton',
    'north-ogden-ut-tree-service': 'North Ogden',
    'north-salt-lake-ut-tree-service': 'North Salt Lake',
    'ogden-ut-tree-service': 'Ogden',
    'riverdale-ut-tree-service': 'Riverdale',
    'roy-ut-tree-service': 'Roy',
    'service-areas-ogden-ut-tree-service': 'Ogden',
    'south-weber-ut-tree-service': 'South Weber',
    'woods-cross-ut-tree-service': 'Woods Cross',
  }

  return (
    cityMappings[dirPath] ||
    dirPath
      .replace(/-ut-tree-service$/, '')
      .replace(/-/g, ' ')
      .replace(/\b\w/g, (l) => l.toUpperCase())
  )
}

// Convert parsed sections to JSX string
function sectionsToJSX(sections: ContentSection[]): string {
  const jsxLines: string[] = []

  sections.forEach((section, index) => {
    switch (section.type) {
      case 'heading':
        jsxLines.push(`                  <h2 className="service-heading section-heading">`)
        jsxLines.push(`                    ${section.content}`)
        jsxLines.push(`                  </h2>`)
        jsxLines.push('')
        break

      case 'subheading':
        jsxLines.push(`                  <h3 className="service-subheading section-subheading">`)
        jsxLines.push(`                    ${section.content}`)
        jsxLines.push(`                  </h3>`)
        jsxLines.push('')
        break

      case 'subsubheading':
        jsxLines.push(
          `                  <h4 className="service-subsubheading section-subsubheading">`,
        )
        jsxLines.push(`                    ${section.content}`)
        jsxLines.push(`                  </h4>`)
        jsxLines.push('')
        break

      case 'paragraph':
        jsxLines.push(`                  <p className="service-paragraph section-paragraph">`)
        jsxLines.push(`                    ${section.content}`)
        jsxLines.push(`                  </p>`)
        jsxLines.push('')
        break

      case 'list':
        jsxLines.push(`                  <ul className="service-list section-list">`)
        section.items?.forEach((item) => {
          jsxLines.push(`                    <li className="service-list-item section-list-item">`)
          jsxLines.push(`                      ${item}`)
          jsxLines.push(`                    </li>`)
        })
        jsxLines.push(`                  </ul>`)
        jsxLines.push('')
        break
    }
  })

  return jsxLines.join('\n').trim()
}

// Extract content from serviceAreaContent constant
function extractContentFromPage(fileContent: string): string | null {
  const regex = /const serviceAreaContent = `([^`]+)`/s
  const match = fileContent.match(regex)
  return match ? match[1] : null
}

// Convert a single service area page
function convertServiceAreaPage(filePath: string) {
  const dirName = path.basename(path.dirname(filePath))
  const cityName = extractCityName(dirName)

  console.log(`🔄 Converting: ${dirName} (${cityName})`)

  try {
    const fileContent = fs.readFileSync(filePath, 'utf8')

    // Check if already converted
    if (!fileContent.includes('ServiceAreaContent')) {
      console.log(`   ✅ Already converted, skipping`)
      return
    }

    // Extract content
    const rawContent = extractContentFromPage(fileContent)
    if (!rawContent) {
      console.log(`   ❌ No content found`)
      return
    }

    // Parse content into sections
    const sections = parseServiceAreaContent(rawContent)
    const jsxContent = sectionsToJSX(sections)

    // Transform the file content
    let newContent = fileContent

    // Update imports - remove ServiceAreaContent, add StructuredData
    newContent = newContent
      .replace(/import ServiceAreaContent from '@\/components\/ServiceAreaContent'\n?/, '')
      .replace(
        "import { Metadata } from 'next'",
        "import { Metadata } from 'next'\nimport StructuredData from '@/components/StructuredData'",
      )

    // Remove content constant
    newContent = newContent.replace(/\s*const serviceAreaContent = `[^`]+`\n/s, '\n')

    // Replace ServiceAreaContent usage with static JSX
    const componentUsageRegex =
      /\s*<ServiceAreaContent\s+content=\{serviceAreaContent\}\s+cityName="[^"]*"\s+phoneNumber="[^"]*"\s*\/>/s
    const replacement = `                <StructuredData cityName="${cityName}" phoneNumber="(801) 473-7548" />
                <div className="markdown-content service-area-content">
${jsxContent}
                </div>`

    newContent = newContent.replace(componentUsageRegex, replacement)

    // Write the updated file
    fs.writeFileSync(filePath, newContent)
    console.log(`   ✅ Successfully converted`)
  } catch (error) {
    console.error(`   ❌ Error converting ${dirName}:`, error)
  }
}

// Find all service area pages that need conversion
function findServiceAreaPages(): string[] {
  const serviceAreasDir = path.join(__dirname, '../src/app/(frontend)/service-areas')
  const pages: string[] = []

  try {
    const entries = fs.readdirSync(serviceAreasDir, { withFileTypes: true })

    for (const entry of entries) {
      if (entry.isDirectory()) {
        const pagePath = path.join(serviceAreasDir, entry.name, 'page.tsx')
        if (fs.existsSync(pagePath)) {
          pages.push(pagePath)
        }
      }
    }
  } catch (error) {
    console.error('Error reading service areas directory:', error)
  }

  return pages
}

// Main conversion function
function main() {
  console.log('🚀 Starting conversion of all service area pages to static JSX...\n')

  const pages = findServiceAreaPages()
  console.log(`📄 Found ${pages.length} service area pages\n`)

  let converted = 0
  let skipped = 0
  let errors = 0

  for (const page of pages) {
    try {
      const fileContent = fs.readFileSync(page, 'utf8')
      if (fileContent.includes('ServiceAreaContent')) {
        convertServiceAreaPage(page)
        converted++
      } else {
        console.log(`⏭️  Skipped: ${path.basename(path.dirname(page))} (already converted)`)
        skipped++
      }
    } catch (error) {
      console.error(`❌ Error processing ${page}:`, error)
      errors++
    }
  }

  console.log('\n📊 Conversion Summary:')
  console.log(`   ✅ Converted: ${converted}`)
  console.log(`   ⏭️  Skipped: ${skipped}`)
  console.log(`   ❌ Errors: ${errors}`)
  console.log(`   📄 Total: ${pages.length}`)
  console.log('\n✨ Conversion complete!')
}

// Run the conversion
main()

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// City name mappings
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

// Simple markdown to JSX conversion
function markdownToJSX(markdown: string): string {
  const lines = markdown.split('\n')
  const jsxLines: string[] = []
  let inList = false

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim()

    if (!line) {
      if (inList) {
        jsxLines.push('                  </ul>')
        jsxLines.push('')
        inList = false
      }
      continue
    }

    // Handle headings
    if (line.startsWith('## ')) {
      if (inList) {
        jsxLines.push('                  </ul>')
        jsxLines.push('')
        inList = false
      }
      const headingText = line.replace('## ', '')
      jsxLines.push('                  <h2 className="service-heading section-heading">')
      jsxLines.push(`                    ${headingText}`)
      jsxLines.push('                  </h2>')
      jsxLines.push('')
    } else if (line.startsWith('### ')) {
      if (inList) {
        jsxLines.push('                  </ul>')
        jsxLines.push('')
        inList = false
      }
      const headingText = line.replace('### ', '')
      jsxLines.push('                  <h3 className="service-subheading section-subheading">')
      jsxLines.push(`                    ${headingText}`)
      jsxLines.push('                  </h3>')
      jsxLines.push('')
    } else if (line.startsWith('**') && line.endsWith('**:')) {
      // Handle bold text that ends with colon as h4
      if (inList) {
        jsxLines.push('                  </ul>')
        jsxLines.push('')
        inList = false
      }
      const headingText = line.replace(/^\*\*/, '').replace(/\*\*:$/, '')
      jsxLines.push(
        '                  <h4 className="service-subsubheading section-subsubheading">',
      )
      jsxLines.push(`                    ${headingText}`)
      jsxLines.push('                  </h4>')
      jsxLines.push('')
    }
    // Handle list items
    else if (line.startsWith('- ')) {
      if (!inList) {
        jsxLines.push('                  <ul className="service-list section-list">')
        inList = true
      }
      const itemText = line.replace('- ', '').replace(/^\*\*/, '').replace(/\*\*:/, ':')
      jsxLines.push('                    <li className="service-list-item section-list-item">')
      jsxLines.push(`                      ${itemText}`)
      jsxLines.push('                    </li>')
    }
    // Handle regular paragraphs
    else if (line.length > 0 && !line.startsWith('#')) {
      if (inList) {
        jsxLines.push('                  </ul>')
        jsxLines.push('')
        inList = false
      }
      const cleanLine = line.replace(/^\*\*/, '').replace(/\*\*$/, '')
      jsxLines.push('                  <p className="service-paragraph section-paragraph">')
      jsxLines.push(`                    ${cleanLine}`)
      jsxLines.push('                  </p>')
      jsxLines.push('')
    }
  }

  // Close any open list
  if (inList) {
    jsxLines.push('                  </ul>')
  }

  return jsxLines.join('\n').trim()
}

// Convert a single service area page
function convertServiceAreaPage(dirName: string) {
  const cityName = cityMappings[dirName]
  if (!cityName) {
    console.log(`⏭️  Skipped: ${dirName} (no city mapping)`)
    return
  }

  console.log(`🔄 Converting: ${dirName} (${cityName})`)

  const filePath = path.join(__dirname, '../src/app/(frontend)/service-areas', dirName, 'page.tsx')
  const contentPath = path.join(
    __dirname,
    `../service-area-content-${cityName.toLowerCase().replace(' ', '-')}-eeat-content.md`,
  )

  try {
    // Check if files exist
    if (!fs.existsSync(filePath)) {
      console.log(`   ❌ Page file not found`)
      return
    }

    if (!fs.existsSync(contentPath)) {
      console.log(`   ❌ Content file not found: ${contentPath}`)
      return
    }

    // Read current page content
    const fileContent = fs.readFileSync(filePath, 'utf8')

    // Check if already converted
    if (!fileContent.includes('ServiceAreaContent')) {
      console.log(`   ✅ Already converted`)
      return
    }

    // Read markdown content
    let actualContentPath = contentPath
    if (!fs.existsSync(contentPath)) {
      // Try alternative naming for cities with spaces
      const altPath = path.join(
        __dirname,
        `../service-area-content-${cityName.toLowerCase().replace(/\s+/g, '-')}-eeat-content.md`,
      )
      if (fs.existsSync(altPath)) {
        actualContentPath = altPath
      }
    }

    const markdownContent = fs.readFileSync(actualContentPath, 'utf8')

    // Convert markdown to JSX
    const jsxContent = markdownToJSX(markdownContent)

    // Transform the file
    let newContent = fileContent

    // Update imports
    newContent = newContent
      .replace(/import ServiceAreaContent from '@\/components\/ServiceAreaContent'\n?/, '')
      .replace(
        "import { Metadata } from 'next'",
        "import { Metadata } from 'next'\nimport StructuredData from '@/components/StructuredData'",
      )

    // Replace ServiceAreaContent usage with static JSX
    const componentUsageRegex = /\s*<ServiceAreaContent[^>]*\/>/s
    const replacement = `                <StructuredData cityName="${cityName}" phoneNumber="(801) 473-7548" />
                <div className="markdown-content service-area-content">
${jsxContent}
                </div>`

    newContent = newContent.replace(componentUsageRegex, replacement)

    // Write the updated file
    fs.writeFileSync(filePath, newContent)
    console.log(`   ✅ Successfully converted`)
  } catch (error) {
    console.error(`   ❌ Error: ${error}`)
  }
}

// Main function
function main() {
  console.log('🚀 Converting service area pages to static JSX...\n')

  const pagesToConvert = Object.keys(cityMappings)

  console.log(`📄 Found ${pagesToConvert.length} pages to convert\n`)

  for (const page of pagesToConvert) {
    convertServiceAreaPage(page)
  }

  console.log('\n✨ Conversion complete!')
}

main()

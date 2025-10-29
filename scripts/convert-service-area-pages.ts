import fs from 'fs'
import path from 'path'

// Service area pages to convert
const serviceAreaPages = [
  'bountiful-ut-tree-service',
  'clearfield-ut-tree-service',
  'farmington-ut-tree-service',
  'kaysville-ut-tree-service',
  'layton-ut-tree-service',
  'north-ogden-ut-tree-service',
  'north-salt-lake-ut-tree-service',
  'ogden-ut-tree-service',
  'riverdale-ut-tree-service',
  'roy-ut-tree-service',
  'service-areas-ogden-ut-tree-service',
  'south-weber-ut-tree-service',
  'woods-cross-ut-tree-service',
]

function extractCityName(pagePath: string): string {
  const cityNames: { [key: string]: string } = {
    'bountiful-ut-tree-service': 'Bountiful',
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

  return cityNames[pagePath] || 'Unknown'
}

function extractContentFromMarked(fileContent: string): string | null {
  const markedRegex = /__html:\s*marked\(`([^`]+)`\)/s
  const match = fileContent.match(markedRegex)

  if (!match) {
    console.log('No marked content found')
    return null
  }

  return match[1]
}

function convertServiceAreaPage(pagePath: string) {
  const serviceAreasDir =
    '/Users/eric.blackham/codebase/personal/gainz/client-sites-3000/clean-cut-trees/src/app/(frontend)/service-areas'
  const filePath = path.join(serviceAreasDir, pagePath, 'page.tsx')

  console.log(`Converting: ${pagePath}`)

  try {
    const fileContent = fs.readFileSync(filePath, 'utf8')

    // Extract the content from the marked() call
    const markedContent = extractContentFromMarked(fileContent)
    if (!markedContent) {
      console.log(`❌ No marked content found in ${pagePath}`)
      return
    }

    const cityName = extractCityName(pagePath)

    // Replace imports
    let newContent = fileContent.replace("import { marked } from 'marked'", '')

    // Add ServiceAreaContent import
    newContent = newContent.replace(
      "import { Metadata } from 'next'",
      "import { Metadata } from 'next'\nimport ServiceAreaContent from '@/components/ServiceAreaContent'",
    )

    // Add content constant
    const functionRegex =
      /(export default function [^(]+\([^)]*\) \{[^}]*const isServiceAreaPage = true)/
    newContent = newContent.replace(
      functionRegex,
      `$1\n\n  const serviceAreaContent = \`${markedContent.replace(/`/g, '\\`')}\``,
    )

    // Replace dangerouslySetInnerHTML with ServiceAreaContent
    const dangerousRegex =
      /<div\s+className="markdown-content"\s+dangerouslySetInnerHTML=\{\{\s*__html:\s*marked\(`[^`]+`\)[^}]*\}\}\s*\/>/s
    newContent = newContent.replace(
      dangerousRegex,
      `<ServiceAreaContent 
                  content={serviceAreaContent}
                  cityName="${cityName}"
                  phoneNumber="(801) 473-7548"
                />`,
    )

    // Write the converted file
    fs.writeFileSync(filePath, newContent)
    console.log(`✅ Successfully converted ${pagePath}`)
  } catch (error) {
    console.error(`❌ Error converting ${pagePath}:`, error)
  }
}

function main() {
  console.log('🚀 Starting service area pages conversion...')

  serviceAreaPages.forEach(convertServiceAreaPage)

  console.log('✨ Conversion complete!')
}

main()

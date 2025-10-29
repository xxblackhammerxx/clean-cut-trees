import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Fix duplicate imports and missing module issues
function fixImports() {
  const serviceAreasDir = path.join(__dirname, '../src/app/(frontend)/service-areas')

  try {
    const entries = fs.readdirSync(serviceAreasDir, { withFileTypes: true })

    for (const entry of entries) {
      if (entry.isDirectory()) {
        const pagePath = path.join(serviceAreasDir, entry.name, 'page.tsx')

        if (fs.existsSync(pagePath)) {
          console.log(`🔧 Fixing: ${entry.name}`)

          try {
            let content = fs.readFileSync(pagePath, 'utf8')

            // Remove duplicate StructuredData imports
            content = content.replace(
              /import StructuredData from '@\/components\/StructuredData'\nimport StructuredData from '@\/components\/StructuredData'/g,
              "import StructuredData from '@/components/StructuredData'",
            )

            // Ensure we have the correct imports structure
            const lines = content.split('\n')
            const fixedLines = []
            let hasStructuredDataImport = false

            for (const line of lines) {
              if (line.includes("import StructuredData from '@/components/StructuredData'")) {
                if (!hasStructuredDataImport) {
                  fixedLines.push(line)
                  hasStructuredDataImport = true
                }
                // Skip duplicate imports
              } else {
                fixedLines.push(line)
              }
            }

            // Write fixed content
            fs.writeFileSync(pagePath, fixedLines.join('\n'))
            console.log(`   ✅ Fixed duplicate imports`)
          } catch (error) {
            console.error(`   ❌ Error fixing ${entry.name}:`, error)
          }
        }
      }
    }
  } catch (error) {
    console.error('Error reading service areas directory:', error)
  }
}

console.log('🔧 Fixing duplicate imports in service area pages...\n')
fixImports()
console.log('\n✨ Import fixes complete!')

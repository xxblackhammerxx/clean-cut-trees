import fs from 'fs/promises'
import path from 'path'

const baseDir =
  '/Users/eric.blackham/codebase/personal/gainz/client-sites-3000/clean-cut-trees/src/app/(frontend)'

async function addLinkImports() {
  console.log('🔗 Adding Link imports to all generated pages...')

  try {
    // Find all page.tsx files in the generated directories
    const directories = [
      'services',
      'service-areas',
      // Root level pages
      baseDir,
    ]

    let fixedCount = 0
    let skippedCount = 0
    let errorCount = 0

    // Process each directory
    for (const dir of directories) {
      const dirPath = dir === baseDir ? baseDir : path.join(baseDir, dir)

      try {
        const items = await fs.readdir(dirPath, { withFileTypes: true })

        for (const item of items) {
          if (item.isDirectory()) {
            // Check for page.tsx in subdirectories
            const pagePath = path.join(dirPath, item.name, 'page.tsx')

            try {
              await fs.access(pagePath)
              await processPageFile(pagePath)
              fixedCount++
            } catch {
              // File doesn't exist, skip
            }
          } else if (item.name === 'page.tsx' && dir === baseDir) {
            // Process root level page.tsx files
            const pagePath = path.join(dirPath, item.name)
            try {
              await processPageFile(pagePath)
              fixedCount++
            } catch {
              // Skip if error
            }
          }
        }
      } catch (error) {
        console.error(`Error processing directory ${dirPath}:`, error)
      }
    }

    // Also process any other page.tsx files in the root level
    const rootFiles = await fs.readdir(baseDir, { withFileTypes: true })
    for (const item of rootFiles) {
      if (item.isDirectory()) {
        // Check if this is a single page directory (not services or service-areas)
        if (
          item.name !== 'services' &&
          item.name !== 'service-areas' &&
          !item.name.startsWith('[')
        ) {
          const pagePath = path.join(baseDir, item.name, 'page.tsx')
          try {
            await fs.access(pagePath)
            await processPageFile(pagePath)
            fixedCount++
          } catch {
            // File doesn't exist or error, skip
          }
        }
      }
    }

    console.log(`\n🎉 Link import fixing complete!`)
    console.log(`   ✅ Fixed: ${fixedCount} pages`)
    console.log(`   ⏭️  Skipped: ${skippedCount} pages`)
    console.log(`   ❌ Errors: ${errorCount} pages`)
  } catch (error) {
    console.error('❌ Error during import fixing:', error)
  }
}

async function processPageFile(filePath: string) {
  try {
    console.log(`🔄 Processing: ${path.relative(baseDir, filePath)}`)

    const content = await fs.readFile(filePath, 'utf-8')

    // Check if Link import already exists
    if (content.includes("import Link from 'next/link'")) {
      console.log(`   ⏭️  Already has Link import, skipping`)
      return
    }

    // Check if the file uses Link components
    if (!content.includes('<Link ')) {
      console.log(`   ⏭️  No Link components found, skipping`)
      return
    }

    // Add Link import after the existing imports
    let updatedContent = content

    // Find the last import statement
    const importLines = content.split('\n').filter((line) => line.trim().startsWith('import '))

    if (importLines.length === 0) {
      // No imports found, add at the beginning
      updatedContent = `import Link from 'next/link'\n${content}`
    } else {
      // Add after the last import
      const lastImportLine = importLines[importLines.length - 1]
      const lastImportIndex = content.indexOf(lastImportLine)
      const endOfLastImport = lastImportIndex + lastImportLine.length

      // Insert the Link import after the last import
      updatedContent =
        content.slice(0, endOfLastImport) +
        "\nimport Link from 'next/link'" +
        content.slice(endOfLastImport)
    }

    // Write the updated content
    await fs.writeFile(filePath, updatedContent, 'utf-8')
    console.log(`   ✅ Added Link import`)
  } catch (error) {
    console.error(`   ❌ Error processing ${filePath}:`, error)
    throw error
  }
}

// Run the fix
addLinkImports()

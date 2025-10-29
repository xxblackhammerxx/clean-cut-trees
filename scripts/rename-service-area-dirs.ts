import fs from 'fs/promises'
import path from 'path'

const serviceAreasDir =
  '/Users/eric.blackham/codebase/personal/gainz/client-sites-3000/clean-cut-trees/src/app/(frontend)/service-areas'

async function renameServiceAreaDirectories() {
  console.log('📁 Renaming service area directories to remove "service-areas-" prefix...')

  try {
    const items = await fs.readdir(serviceAreasDir, { withFileTypes: true })

    let renamedCount = 0
    let skippedCount = 0
    let errorCount = 0

    for (const item of items) {
      if (item.isDirectory() && item.name.startsWith('service-areas-')) {
        const oldPath = path.join(serviceAreasDir, item.name)
        const newName = item.name.replace('service-areas-', '')
        const newPath = path.join(serviceAreasDir, newName)

        console.log(`🔄 Renaming: ${item.name} → ${newName}`)

        try {
          // Check if the new path already exists
          try {
            await fs.access(newPath)
            console.log(`   ⚠️  Target directory already exists, skipping: ${newName}`)
            skippedCount++
            continue
          } catch {
            // New path doesn't exist, we can proceed with rename
          }

          // Rename the directory
          await fs.rename(oldPath, newPath)
          console.log(`   ✅ Renamed successfully`)
          renamedCount++
        } catch (error) {
          console.error(`   ❌ Error renaming ${item.name}:`, error)
          errorCount++
        }
      } else if (item.isDirectory()) {
        console.log(`⏭️  Skipping directory (no prefix): ${item.name}`)
        skippedCount++
      }
    }

    console.log(`\n🎉 Directory renaming complete!`)
    console.log(`   ✅ Renamed: ${renamedCount} directories`)
    console.log(`   ⏭️  Skipped: ${skippedCount} directories`)
    console.log(`   ❌ Errors: ${errorCount} directories`)
  } catch (error) {
    console.error('❌ Error during directory renaming:', error)
  }
}

// Run the rename operation
renameServiceAreaDirectories()

import dotenv from 'dotenv'
import payload from 'payload'
import config from '../src/payload.config'

// Load environment variables
dotenv.config()

async function fixHomepageImages() {
  await payload.init({
    config,
  })

  console.log('🔧 Fixing remaining WordPress URLs in homepage...')

  try {
    const pages = await payload.find({
      collection: 'pages',
      where: { slug: { equals: 'index' } },
      limit: 1,
      depth: 0,
    })

    if (pages.docs.length > 0) {
      const page = pages.docs[0]
      console.log(`\n📄 Examining page: ${page.title}`)

      if (page.content && typeof page.content === 'object') {
        // Get the full content as string to search and replace
        let contentStr = JSON.stringify(page.content, null, 2)
        console.log('Original content length:', contentStr.length)

        // Find all instances of WordPress URLs
        const wpUrlPattern = /https:\/\/cleancutstrees\.com\/wp-content\/uploads\/([^"\s)]*)/g
        const matches = contentStr.match(wpUrlPattern)

        if (matches) {
          console.log(`Found ${matches.length} instances of WordPress URLs:`)
          matches.forEach((match) => console.log(`  - ${match}`))

          // Replace all instances with local asset paths
          contentStr = contentStr.replace(wpUrlPattern, (match, filename) => {
            console.log(`    Replacing: ${filename}`)
            return `/content-migration/assets/${filename}`
          })

          try {
            const newContent = JSON.parse(contentStr)

            await payload.update({
              collection: 'pages',
              id: page.id,
              data: { content: newContent },
            })

            console.log('✅ Successfully updated homepage')
          } catch (parseError) {
            console.error('Error parsing JSON:', parseError)
          }
        } else {
          console.log('No WordPress URLs found')
        }
      }
    }
  } catch (error) {
    console.error('Error fixing homepage images:', error)
  }

  process.exit(0)
}

fixHomepageImages()

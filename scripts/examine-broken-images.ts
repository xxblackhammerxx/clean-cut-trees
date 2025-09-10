import dotenv from 'dotenv'
import payload from 'payload'
import config from '../src/payload.config'

// Load environment variables
dotenv.config()

async function examineSpecificPages() {
  await payload.init({
    config,
  })

  console.log('🔍 Examining specific pages with broken images...')

  try {
    // Get the municipal tree service page and a few others
    const pagesToExamine = [
      'services-municipal-tree-service',
      'services-tree-removal',
      'photo-gallery',
    ]

    for (const slug of pagesToExamine) {
      const pages = await payload.find({
        collection: 'pages',
        where: { slug: { equals: slug } },
        limit: 1,
        depth: 0,
      })

      if (pages.docs.length > 0) {
        const page = pages.docs[0]
        console.log(`\n📄 Page: ${page.title}`)
        console.log(`   Slug: ${page.slug}`)
        console.log(`   Content type: ${typeof page.content}`)

        if (page.content) {
          if (typeof page.content === 'object') {
            // Pretty print the content for examination
            const contentStr = JSON.stringify(page.content, null, 2)
            console.log('   Content preview (first 1000 chars):')
            console.log(contentStr.substring(0, 1000))
          } else {
            console.log('   Content preview:')
            console.log(page.content.substring(0, 1000))
          }
        }
      }
    }
  } catch (error) {
    console.error('Error examining pages:', error)
  }

  process.exit(0)
}

examineSpecificPages()

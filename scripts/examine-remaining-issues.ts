import dotenv from 'dotenv'
import payload from 'payload'
import config from '../src/payload.config'

// Load environment variables
dotenv.config()

async function examineRemainingIssues() {
  await payload.init({
    config,
  })

  console.log('🔍 Examining remaining pages with broken images...')

  try {
    // Get the specific pages that still have issues
    const pagesToExamine = ['services-municipal-tree-service', 'photo-gallery']

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

        if (page.content && typeof page.content === 'object') {
          const contentStr = JSON.stringify(page.content, null, 2)

          // Look for specific broken patterns
          const brokenPatterns = [
            /!\[([^\]]*)\]\(https:\/\/cleancutstrees\.com\/wp-content\/uploads\/[^)]*\)/g,
            /!\[image1-1\]/g,
            /municipal tree service ogden ut/gi,
            /3360c69ff26cc8732183a7edd60e6ee6f293b9ee.jpg/g,
            /image1-1\.jpeg/g,
          ]

          for (const pattern of brokenPatterns) {
            const matches = contentStr.match(pattern)
            if (matches) {
              console.log(`   Found pattern matches:`)
              matches.forEach((match) => console.log(`     - ${match}`))
            }
          }

          // Look for any WordPress image links that might still exist
          const wpMatches = contentStr.match(/cleancutstrees\.com\/wp-content/g)
          if (wpMatches) {
            console.log(`   Found ${wpMatches.length} WordPress references`)

            // Show context around these matches
            const lines = contentStr.split('\n')
            lines.forEach((line, index) => {
              if (line.includes('cleancutstrees.com/wp-content')) {
                console.log(`     Line ${index + 1}: ${line.trim()}`)
              }
            })
          }
        }
      }
    }
  } catch (error) {
    console.error('Error examining pages:', error)
  }

  process.exit(0)
}

examineRemainingIssues()

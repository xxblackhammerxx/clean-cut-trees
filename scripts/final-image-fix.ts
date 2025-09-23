import dotenv from 'dotenv'
import payload from 'payload'
import config from '../src/payload.config'

// Load environment variables
dotenv.config()

async function finalImageFix() {
  await payload.init({
    config,
  })

  console.log('🔧 Final fix for Municipal Tree Service page...')

  try {
    const pages = await payload.find({
      collection: 'pages',
      where: { slug: { equals: 'services-municipal-tree-service' } },
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

        // Find all instances of the problematic filename
        const problematicPattern = /3360c69ff26cc8732183a7edd60e6ee6f293b9ee\.jpg/g
        const matches = contentStr.match(problematicPattern)

        if (matches) {
          console.log(`Found ${matches.length} instances of problematic filename`)

          // Replace all instances with the proper path
          contentStr = contentStr.replace(
            problematicPattern,
            '/content-migration/assets/3360c69ff26cc8732183a7edd60e6ee6f293b9ee.jpg',
          )

          try {
            const newContent = JSON.parse(contentStr)

            await payload.update({
              collection: 'pages',
              id: page.id,
              data: { content: newContent },
            })

            console.log('✅ Successfully updated Municipal Tree Service page')
          } catch (parseError) {
            console.error('Error parsing JSON:', parseError)
          }
        } else {
          console.log('No problematic filenames found')
        }
      }
    }
  } catch (error) {
    console.error('Error fixing final images:', error)
  }

  process.exit(0)
}

finalImageFix()

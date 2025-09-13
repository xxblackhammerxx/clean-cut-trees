import dotenv from 'dotenv'
import { getPayload } from 'payload'
import config from '../src/payload.config'

// Load environment variables
dotenv.config()

async function quickFixAsterisks() {
  try {
    const payloadConfig = await config
    const payload = await getPayload({ config: payloadConfig })

    console.log('🔧 Quick fix: removing double asterisks from service pages...')

    // Service pages to fix
    const serviceSlugs = [
      'services-emergency-tree-service',
      'services-tree-removal', 
      'services-tree-trimming',
      'storm-clean-up'
    ]

    for (const slug of serviceSlugs) {
      console.log(`Processing: ${slug}`)

      const pages = await payload.find({
        collection: 'pages',
        where: {
          slug: {
            equals: slug
          }
        },
        limit: 1
      })

      if (pages.docs.length > 0) {
        const page = pages.docs[0]
        
        // Simple recursive function to remove asterisks from all text
        function removeAsterisks(obj: any): any {
          if (!obj || typeof obj !== 'object') {
            return obj
          }

          if (Array.isArray(obj)) {
            return obj.map(removeAsterisks)
          }

          const result = { ...obj }

          // If this is a text node, remove asterisks
          if (result.type === 'text' && result.text && typeof result.text === 'string') {
            result.text = result.text.replace(/\*\*/g, '')
          }

          // Process children recursively
          if (result.children) {
            result.children = removeAsterisks(result.children)
          }

          return result
        }

        if (page.content) {
          const cleanedContent = removeAsterisks(page.content)

          await payload.update({
            collection: 'pages',
            id: page.id,
            data: {
              content: cleanedContent
            }
          })

          console.log(`✅ Cleaned asterisks from ${slug}`)
        }
      } else {
        console.log(`⚠️ Page not found: ${slug}`)
      }
    }

    console.log('🎉 Quick asterisk removal completed!')

  } catch (error) {
    console.error('❌ Error removing asterisks:', error)
  }
}

// Run the function
quickFixAsterisks()

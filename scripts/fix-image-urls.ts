import dotenv from 'dotenv'
import payload from 'payload'
import config from '../src/payload.config'

// Load environment variables
dotenv.config()

const fixImageUrls = async () => {
  try {
    console.log('🔧 Fixing image URLs that include titles...')

    await payload.init({
      config,
    })

    console.log('✅ Payload initialized successfully')

    // Find the land clearing page
    const pages = await payload.find({
      collection: 'pages',
      where: {
        slug: {
          equals: 'services-professional-land-clearing-services',
        },
      },
      limit: 1,
    })

    const page = pages.docs[0]
    if (!page) {
      console.log('❌ Page not found')
      return
    }

    // Function to clean image URLs
    const cleanImageUrls = (node: any): any => {
      if (node.type === 'image') {
        // Clean up the src URL if it contains title text
        if (node.src && node.src.includes(' "')) {
          const cleanSrc = node.src.split(' "')[0]
          console.log(`   🧹 Cleaning image URL: ${node.src} -> ${cleanSrc}`)

          return {
            ...node,
            src: cleanSrc,
            value: {
              ...node.value,
              url: cleanSrc,
              filename: cleanSrc.split('/').pop() || node.value.filename,
            },
          }
        }
      }

      if (node.children) {
        return {
          ...node,
          children: node.children.map(cleanImageUrls),
        }
      }

      return node
    }

    // Clean the content
    const cleanedContent = {
      ...page.content,
      root: {
        ...page.content.root,
        children: page.content.root.children.map(cleanImageUrls),
      },
    }

    // Update the page
    await payload.update({
      collection: 'pages',
      id: page.id,
      data: {
        content: cleanedContent,
      },
    })

    console.log('✅ Successfully cleaned image URLs!')
  } catch (error) {
    console.error('❌ Error fixing image URLs:', error)
  } finally {
    process.exit(0)
  }
}

fixImageUrls()

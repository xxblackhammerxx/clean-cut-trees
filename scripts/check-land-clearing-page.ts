import dotenv from 'dotenv'
import payload from 'payload'
import config from '../src/payload.config'

// Load environment variables
dotenv.config()

const checkPage = async () => {
  try {
    console.log('🔍 Checking professional land clearing services page...')

    await payload.init({
      config,
    })

    console.log('✅ Payload initialized successfully')

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
    if (page) {
      console.log('📄 Page found!')
      console.log('Page ID:', page.id)
      console.log('Title:', page.title)
      console.log('Content type:', typeof page.content)

      if (typeof page.content === 'object' && page.content?.root) {
        console.log('📝 Lexical content found')
        console.log('Root children count:', page.content.root.children.length)

        // Look for images in the content
        const findImages = (node: any, path = '') => {
          if (node.type === 'image') {
            console.log('🖼️  Found image node at', path, ':', JSON.stringify(node, null, 2))
          }
          if (node.type === 'paragraph' && node.children) {
            // Look for markdown-style image references in text nodes
            node.children.forEach((child: any, index: number) => {
              if (child.type === 'text' && child.text) {
                const imageMatches = child.text.match(/!\[([^\]]*)\]\(([^)]+)\)/g)
                if (imageMatches) {
                  console.log(
                    `🖼️  Found markdown image in paragraph at ${path}.children[${index}]:`,
                    imageMatches,
                  )
                }
              }
            })
          }
          if (node.children) {
            node.children.forEach((child: any, index: number) =>
              findImages(child, `${path}.children[${index}]`),
            )
          }
        }

        page.content.root.children.forEach((child: any, index: number) =>
          findImages(child, `root.children[${index}]`),
        )

        // Sample the first few paragraphs to see what's there
        console.log('\n📝 First few content nodes:')
        page.content.root.children.slice(0, 5).forEach((node: any, index: number) => {
          console.log(`  ${index}: ${node.type}`)
          if (node.type === 'paragraph' && node.children) {
            const text = node.children.map((child: any) => child.text || '').join('')
            console.log(`       Text: ${text.substring(0, 100)}${text.length > 100 ? '...' : ''}`)
          } else if (node.type === 'heading' && node.children) {
            const text = node.children.map((child: any) => child.text || '').join('')
            console.log(`       Heading: ${text}`)
          }
        })
      } else if (typeof page.content === 'string') {
        console.log('📝 Markdown content found')
        // Look for markdown images
        const imageMatches = page.content.match(/!\[([^\]]*)\]\(([^)]+)\)/g)
        if (imageMatches) {
          console.log('🖼️  Found markdown images:', imageMatches)
        } else {
          console.log('❌ No markdown images found')
        }
        console.log('Content sample:', page.content.substring(0, 500) + '...')
      }
    } else {
      console.log('❌ Page not found')
    }
  } catch (error) {
    console.error('❌ Error:', error)
  } finally {
    process.exit(0)
  }
}

checkPage()

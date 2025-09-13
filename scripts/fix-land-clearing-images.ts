import dotenv from 'dotenv'
import payload from 'payload'
import config from '../src/payload.config'

// Load environment variables
dotenv.config()

const fixLandClearingImages = async () => {
  try {
    console.log('🔧 Fixing images in professional land clearing services page...')

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

    console.log('📄 Found page:', page.title)

    if (typeof page.content !== 'object' || !page.content?.root) {
      console.log('❌ Page does not have Lexical content')
      return
    }

    // Function to fix image references in text nodes
    const fixImagesInNode = (node: any): any => {
      if (node.type === 'paragraph' && node.children) {
        const newChildren: any[] = []

        for (const child of node.children) {
          if (child.type === 'text' && child.text) {
            // Check if this text contains markdown images
            const imageRegex = /!\[([^\]]*)\]\((\.\/assets\/[^)]+)\)/g
            let text = child.text
            let match
            let lastIndex = 0

            while ((match = imageRegex.exec(text)) !== null) {
              const [fullMatch, alt, src] = match
              const beforeImage = text.substring(lastIndex, match.index)

              // Add text before the image (if any)
              if (beforeImage.trim()) {
                newChildren.push({
                  type: 'text',
                  text: beforeImage,
                  format: child.format || 0,
                  style: child.style || '',
                  mode: child.mode || 'normal',
                  detail: child.detail || 0,
                })
              }

              // Add the image as an image node
              const imageSrc = src.replace('./assets/', '/content-migration/assets/')
              newChildren.push({
                type: 'image',
                src: imageSrc,
                alt: alt || '',
                width: null,
                height: null,
                maxWidth: null,
                showCaption: false,
                caption: {
                  editorState: {
                    root: {
                      children: [],
                      direction: null,
                      format: '',
                      indent: 0,
                      type: 'root',
                      version: 1,
                    },
                  },
                },
                enableLink: false,
                value: {
                  id: null,
                  alt: alt || '',
                  filename: src.split('/').pop() || '',
                  mimeType: 'image/jpeg',
                  filesize: null,
                  width: null,
                  height: null,
                  url: imageSrc,
                },
                version: 1,
              })

              lastIndex = match.index + fullMatch.length
            }

            // Add remaining text after the last image (if any)
            const remainingText = text.substring(lastIndex)
            if (remainingText.trim()) {
              newChildren.push({
                type: 'text',
                text: remainingText,
                format: child.format || 0,
                style: child.style || '',
                mode: child.mode || 'normal',
                detail: child.detail || 0,
              })
            }

            // If no images were found, keep the original text node
            if (newChildren.length === 0) {
              newChildren.push(child)
            }
          } else {
            // Keep non-text children as-is
            newChildren.push(child)
          }
        }

        return {
          ...node,
          children: newChildren,
        }
      }

      // Recursively process children
      if (node.children) {
        return {
          ...node,
          children: node.children.map(fixImagesInNode),
        }
      }

      return node
    }

    // Fix images in the content
    const fixedContent = {
      ...page.content,
      root: {
        ...page.content.root,
        children: page.content.root.children.map(fixImagesInNode),
      },
    }

    // Update the page
    await payload.update({
      collection: 'pages',
      id: page.id,
      data: {
        content: fixedContent,
      },
    })

    console.log('✅ Successfully fixed images in the land clearing page!')
    console.log('🖼️  Images have been converted from markdown syntax to proper Lexical image nodes')
    console.log('🔗 Image paths have been updated to use /content-migration/assets/')
  } catch (error) {
    console.error('❌ Error fixing images:', error)
  } finally {
    process.exit(0)
  }
}

fixLandClearingImages()

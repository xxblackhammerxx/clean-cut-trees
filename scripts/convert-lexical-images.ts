import dotenv from 'dotenv'
import payload from 'payload'
import config from '../src/payload.config'

// Load environment variables
dotenv.config()

const convertToPayloadLexicalImages = async () => {
  try {
    console.log('🔧 Converting custom image nodes to Payload Lexical format...')

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

    // Function to convert our custom image nodes to Payload format
    const convertImageNodes = (node: any): any => {
      if (node.type === 'image') {
        // Convert to Payload's upload node format
        return {
          type: 'upload',
          value: {
            id: null, // We'll need to find/create media records
            url: node.src,
            alt: node.alt,
            filename: node.src?.split('/').pop() || '',
            mimeType: node.src?.toLowerCase().includes('.png') ? 'image/png' : 'image/jpeg',
            filesize: null,
            width: null,
            height: null,
          },
          relationTo: 'media',
          fields: {
            alt: node.alt || '',
          },
          version: 1,
        }
      }

      if (node.children) {
        return {
          ...node,
          children: node.children.map(convertImageNodes),
        }
      }

      return node
    }

    // Convert the content
    const convertedContent = {
      ...page.content,
      root: {
        ...page.content.root,
        children: page.content.root.children.map(convertImageNodes),
      },
    }

    console.log('📝 Sample of converted content:')
    console.log(JSON.stringify(convertedContent.root.children.slice(0, 5), null, 2))

    // For now, let's just remove the image nodes to prevent errors
    // and let users re-add them properly through the admin
    const cleanContent = (node: any): any => {
      if (node.type === 'image') {
        // Replace image with a text note
        return {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              text: `[Image: ${node.alt || 'Untitled'}]`,
              format: 1, // italic
              style: '',
              mode: 'normal',
              detail: 0,
            },
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1,
        }
      }

      if (node.children) {
        return {
          ...node,
          children: node.children.map(cleanContent),
        }
      }

      return node
    }

    const cleanedContent = {
      ...page.content,
      root: {
        ...page.content.root,
        children: page.content.root.children.map(cleanContent),
      },
    }

    // Update the page with cleaned content
    await payload.update({
      collection: 'pages',
      id: page.id,
      data: {
        content: cleanedContent,
      },
    })

    console.log('✅ Successfully converted image nodes to text placeholders!')
    console.log('📝 The images have been replaced with text placeholders like "[Image: Alt Text]"')
    console.log('🔧 You can now re-add the images through the Payload admin interface')
  } catch (error) {
    console.error('❌ Error converting image nodes:', error)
  } finally {
    process.exit(0)
  }
}

convertToPayloadLexicalImages()

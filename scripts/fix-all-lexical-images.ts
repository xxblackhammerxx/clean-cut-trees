import dotenv from 'dotenv'
import payload from 'payload'
import config from '../src/payload.config'

// Load environment variables
dotenv.config()

const fixAllLexicalImages = async () => {
  try {
    console.log('🔧 Fixing images in all Lexical content...')

    await payload.init({
      config,
    })

    console.log('✅ Payload initialized successfully')

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
                  mimeType: src.toLowerCase().includes('.png') ? 'image/png' : 'image/jpeg',
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

    // Check if content has markdown images
    const hasMarkdownImages = (content: any): boolean => {
      if (!content?.root?.children) return false

      const checkNode = (node: any): boolean => {
        if (node.type === 'text' && node.text) {
          return /!\[([^\]]*)\]\((\.\/assets\/[^)]+)\)/.test(node.text)
        }
        if (node.children) {
          return node.children.some(checkNode)
        }
        return false
      }

      return content.root.children.some(checkNode)
    }

    // Process all pages
    const allPages = await payload.find({
      collection: 'pages',
      limit: 1000,
    })

    console.log(`📄 Found ${allPages.docs.length} total pages to check`)

    let pagesProcessed = 0
    let pagesFixed = 0

    for (const page of allPages.docs) {
      console.log(`\n🔍 Checking: "${page.title}" (ID: ${page.id})`)

      // Only process pages that have Lexical content
      if (typeof page.content !== 'object' || !page.content?.root) {
        console.log('   ⏭️  Skipping - not Lexical content')
        continue
      }

      pagesProcessed++

      // Check if this page has markdown images
      if (hasMarkdownImages(page.content)) {
        console.log('   🖼️  Found markdown images - converting...')

        try {
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

          pagesFixed++
          console.log('   ✅ Fixed successfully')
        } catch (error) {
          console.error(`   ❌ Failed to fix page "${page.title}":`, error)
        }
      } else {
        console.log('   ✅ No markdown images found')
      }
    }

    // Process all blog posts
    const allPosts = await payload.find({
      collection: 'blog-posts',
      limit: 1000,
    })

    console.log(`\n📝 Found ${allPosts.docs.length} total blog posts to check`)

    let postsProcessed = 0
    let postsFixed = 0

    for (const post of allPosts.docs) {
      console.log(`\n🔍 Checking: "${post.title}" (ID: ${post.id})`)

      // Only process posts that have Lexical content
      if (typeof post.content !== 'object' || !post.content?.root) {
        console.log('   ⏭️  Skipping - not Lexical content')
        continue
      }

      postsProcessed++

      // Check if this post has markdown images
      if (hasMarkdownImages(post.content)) {
        console.log('   🖼️  Found markdown images - converting...')

        try {
          // Fix images in the content
          const fixedContent = {
            ...post.content,
            root: {
              ...post.content.root,
              children: post.content.root.children.map(fixImagesInNode),
            },
          }

          // Update the post
          await payload.update({
            collection: 'blog-posts',
            id: post.id,
            data: {
              content: fixedContent,
            },
          })

          postsFixed++
          console.log('   ✅ Fixed successfully')
        } catch (error) {
          console.error(`   ❌ Failed to fix post "${post.title}":`, error)
        }
      } else {
        console.log('   ✅ No markdown images found')
      }
    }

    console.log('\n🎉 Image fixing completed!')
    console.log('📊 Summary:')
    console.log(`   📄 Pages processed: ${pagesProcessed}`)
    console.log(`   📄 Pages fixed: ${pagesFixed}`)
    console.log(`   📝 Blog posts processed: ${postsProcessed}`)
    console.log(`   📝 Blog posts fixed: ${postsFixed}`)
    console.log('\n✅ All markdown images have been converted to proper Lexical image nodes!')
  } catch (error) {
    console.error('❌ Error fixing images:', error)
  } finally {
    process.exit(0)
  }
}

fixAllLexicalImages()

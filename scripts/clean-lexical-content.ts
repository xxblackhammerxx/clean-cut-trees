import dotenv from 'dotenv'
import payload from 'payload'
import config from '../src/payload.config'

// Load environment variables
dotenv.config()

// Function to check if Lexical content contains unwanted contact information
const hasUnwantedContactInLexical = (lexicalContent: any): boolean => {
  if (!lexicalContent?.root?.children) return false

  const contentText = extractTextFromLexical(lexicalContent)
  return (
    (contentText.includes('Contact Us') ||
      contentText.includes('Fruit Heights, UT 84037') ||
      contentText.includes('estimates@cleancutstrees.com') ||
      contentText.includes('Follow on Facebook') ||
      contentText.includes('Our Services') ||
      contentText.includes('Service Areas') ||
      contentText.includes('Location')) &&
    contentText.includes('801') &&
    contentText.includes('473') &&
    contentText.includes('7548')
  )
}

// Function to extract all text from Lexical content for searching
const extractTextFromLexical = (lexicalContent: any): string => {
  if (!lexicalContent?.root?.children) return ''

  let text = ''

  const extractFromNode = (node: any) => {
    if (node.type === 'text') {
      text += node.text + ' '
    } else if (node.children) {
      node.children.forEach(extractFromNode)
    }
  }

  lexicalContent.root.children.forEach(extractFromNode)
  return text
}

// Function to remove unwanted contact sections from Lexical content
const cleanLexicalContent = (lexicalContent: any): any => {
  if (!lexicalContent?.root?.children) return lexicalContent

  const cleanedChildren: any[] = []
  let skipNext = false
  let foundContactUs = false

  for (let i = 0; i < lexicalContent.root.children.length; i++) {
    const node = lexicalContent.root.children[i]

    // Check if this is a heading with "Contact Us"
    if (node.type === 'heading' && node.children) {
      const headingText = node.children.map((child: any) => child.text || '').join('')
      if (headingText.includes('Contact Us')) {
        foundContactUs = true
        continue // Skip this heading
      }

      // Also skip "Our Services", "Service Areas", "Location" headings that follow Contact Us
      if (
        foundContactUs &&
        (headingText.includes('Our Services') ||
          headingText.includes('Service Areas') ||
          headingText.includes('Location'))
      ) {
        continue // Skip these headings too
      }
    }

    // If we found Contact Us, check if this paragraph contains contact info
    if (foundContactUs && node.type === 'paragraph' && node.children) {
      const paragraphText = node.children.map((child: any) => child.text || '').join('')

      // Skip paragraphs with contact information
      if (
        paragraphText.includes('Fruit Heights, UT 84037') ||
        (paragraphText.includes('801') &&
          paragraphText.includes('473') &&
          paragraphText.includes('7548')) ||
        paragraphText.includes('estimates@cleancutstrees.com') ||
        (paragraphText.includes('Follow') && paragraphText.includes('Facebook')) ||
        (paragraphText.includes('Follow') && paragraphText.includes('Youtube')) ||
        (paragraphText.includes('Follow') && paragraphText.includes('Instagram'))
      ) {
        continue // Skip this paragraph
      }
    }

    // If we've moved past the contact section and hit real content, stop filtering
    if (foundContactUs && node.type === 'paragraph' && node.children) {
      const paragraphText = node.children.map((child: any) => child.text || '').join('')
      // If it's a substantial paragraph (not contact info), we're past the contact section
      if (
        paragraphText.length > 20 &&
        !paragraphText.includes('Fruit Heights') &&
        !paragraphText.includes('Follow') &&
        !paragraphText.includes('801-473-7548')
      ) {
        foundContactUs = false // Reset the flag
      }
    }

    // Keep this node if we're not filtering it out
    if (!foundContactUs || (node.type !== 'paragraph' && node.type !== 'heading')) {
      cleanedChildren.push(node)
    }
  }

  return {
    ...lexicalContent,
    root: {
      ...lexicalContent.root,
      children: cleanedChildren,
    },
  }
}

const cleanLexicalPages = async () => {
  try {
    console.log('🧹 Starting Lexical content cleaning...')
    console.log('PAYLOAD_SECRET exists:', !!process.env.PAYLOAD_SECRET)
    console.log('DATABASE_URI exists:', !!process.env.DATABASE_URI)

    await payload.init({
      config,
    })

    console.log('✅ Payload initialized successfully')

    // Find all pages with Lexical content
    const allPages = await payload.find({
      collection: 'pages',
      limit: 1000,
    })

    console.log(`📄 Found ${allPages.docs.length} total pages to check`)

    let pagesProcessed = 0
    let pagesCleaned = 0

    for (const page of allPages.docs) {
      console.log(`\n🔍 Checking: "${page.title}" (ID: ${page.id})`)

      // Only process pages that have Lexical content (not strings)
      if (typeof page.content === 'string') {
        console.log('   ⏭️ Skipping - content is still a string')
        continue
      }

      if (!page.content || !page.content.root) {
        console.log('   ⏭️ Skipping - no valid content')
        continue
      }

      pagesProcessed++

      // Check if this page has unwanted contact information
      if (hasUnwantedContactInLexical(page.content)) {
        console.log('   🧹 Found unwanted contact info - cleaning...')

        try {
          const cleanedContent = cleanLexicalContent(page.content)

          // Update the page
          await payload.update({
            collection: 'pages',
            id: page.id,
            data: {
              content: cleanedContent,
            },
          })

          pagesCleaned++
          console.log('   ✅ Cleaned successfully')
        } catch (error) {
          console.error(`   ❌ Failed to clean page "${page.title}":`, error)
        }
      } else {
        console.log('   ✅ No unwanted contact info found')
      }
    }

    // Also check blog posts
    console.log('\n📝 Checking blog posts...')
    const allBlogPosts = await payload.find({
      collection: 'blog-posts',
      limit: 1000,
    })

    console.log(`📝 Found ${allBlogPosts.docs.length} blog posts to check`)

    let postsProcessed = 0
    let postsCleaned = 0

    for (const post of allBlogPosts.docs) {
      console.log(`\n🔍 Checking blog post: "${post.title}" (ID: ${post.id})`)

      if (typeof post.content === 'string') {
        console.log('   ⏭️ Skipping - content is still a string')
        continue
      }

      if (!post.content || !post.content.root) {
        console.log('   ⏭️ Skipping - no valid content')
        continue
      }

      postsProcessed++

      if (hasUnwantedContactInLexical(post.content)) {
        console.log('   🧹 Found unwanted contact info - cleaning...')

        try {
          const cleanedContent = cleanLexicalContent(post.content)

          await payload.update({
            collection: 'blog-posts',
            id: post.id,
            data: {
              content: cleanedContent,
            },
          })

          postsCleaned++
          console.log('   ✅ Cleaned successfully')
        } catch (error) {
          console.error(`   ❌ Failed to clean blog post "${post.title}":`, error)
        }
      } else {
        console.log('   ✅ No unwanted contact info found')
      }
    }

    console.log('\n🎉 Lexical content cleaning completed!')
    console.log('📊 Summary:')
    console.log(`   📄 Pages processed: ${pagesProcessed}`)
    console.log(`   📄 Pages cleaned: ${pagesCleaned}`)
    console.log(`   📝 Blog posts processed: ${postsProcessed}`)
    console.log(`   📝 Blog posts cleaned: ${postsCleaned}`)
    console.log('\n✅ All unwanted contact information has been removed!')
  } catch (error) {
    console.error('❌ Error during Lexical content cleaning:', error)
  } finally {
    process.exit(0)
  }
}

cleanLexicalPages()

import dotenv from 'dotenv'
import { getPayload } from 'payload'

// Load environment variables
dotenv.config()

// Function to remove markdown from text
function removeMarkdown(text: string): string {
  if (!text) return text

  let cleanText = text

  // Remove markdown links [text](url) and keep only the text
  cleanText = cleanText.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')

  // Remove bold markdown **text** and keep only the text
  cleanText = cleanText.replace(/\*\*([^*]+)\*\*/g, '$1')

  // Remove italic markdown *text* and keep only the text
  cleanText = cleanText.replace(/\*([^*]+)\*/g, '$1')

  // Remove inline code `text` and keep only the text
  cleanText = cleanText.replace(/`([^`]+)`/g, '$1')

  // Remove strikethrough ~~text~~ and keep only the text
  cleanText = cleanText.replace(/~~([^~]+)~~/g, '$1')

  // Remove heading markers # ## ### etc
  cleanText = cleanText.replace(/^#{1,6}\s+/gm, '')

  // Remove horizontal rules --- or ***
  cleanText = cleanText.replace(/^[-*]{3,}$/gm, '')

  // Remove blockquote markers >
  cleanText = cleanText.replace(/^>\s+/gm, '')

  // Remove list markers (both ordered and unordered)
  cleanText = cleanText.replace(/^\s*[\*\-\+]\s+/gm, '') // Unordered lists
  cleanText = cleanText.replace(/^\s*\d+\.\s+/gm, '') // Ordered lists

  // Remove extra whitespace and normalize line breaks
  cleanText = cleanText.replace(/\n{3,}/g, '\n\n')
  cleanText = cleanText.trim()

  return cleanText
}

// Function to clean Lexical content recursively
function cleanLexicalContent(content: any): any {
  if (!content) return content

  if (typeof content === 'string') {
    return removeMarkdown(content)
  }

  if (Array.isArray(content)) {
    return content.map(cleanLexicalContent)
  }

  if (typeof content === 'object') {
    const cleanedContent: any = {}

    for (const [key, value] of Object.entries(content)) {
      if (key === 'text' && typeof value === 'string') {
        cleanedContent[key] = removeMarkdown(value)
      } else if (key === 'url' && typeof value === 'string') {
        // Keep URLs as they are
        cleanedContent[key] = value
      } else {
        cleanedContent[key] = cleanLexicalContent(value)
      }
    }

    return cleanedContent
  }

  return content
}

// Function to extract text from Lexical content for analysis
function extractTextFromLexical(lexicalContent: any): string {
  if (!lexicalContent) return ''

  let text = ''

  const extractFromNode = (node: any) => {
    if (node.type === 'text') {
      text += node.text + ' '
    } else if (node.children) {
      node.children.forEach(extractFromNode)
    }
  }

  if (lexicalContent.root && lexicalContent.root.children) {
    lexicalContent.root.children.forEach(extractFromNode)
  }

  return text
}

// Function to check if content contains markdown
function hasMarkdown(content: any): boolean {
  const textContent = typeof content === 'string' ? content : extractTextFromLexical(content)

  // Check for common markdown patterns
  const markdownPatterns = [
    /\[([^\]]+)\]\([^)]+\)/, // Links [text](url)
    /\*\*([^*]+)\*\*/, // Bold **text**
    /\*([^*]+)\*/, // Italic *text*
    /`([^`]+)`/, // Inline code `text`
    /~~([^~]+)~~/, // Strikethrough ~~text~~
    /^#{1,6}\s+/m, // Headings
    /^[-*]{3,}$/m, // Horizontal rules
    /^>\s+/m, // Blockquotes
    /^\s*[\*\-\+]\s+/m, // Unordered lists
    /^\s*\d+\.\s+/m, // Ordered lists
  ]

  return markdownPatterns.some((pattern) => pattern.test(textContent))
}

async function removeMarkdownFromPages() {
  try {
    console.log('🧹 Starting markdown removal from Payload CMS pages...')
    console.log('PAYLOAD_SECRET exists:', !!process.env.PAYLOAD_SECRET)
    console.log('DATABASE_URI exists:', !!process.env.DATABASE_URI)

    // Import config dynamically to ensure env vars are loaded
    const { default: config } = await import('../src/payload.config.js')
    const payload = await getPayload({ config })

    console.log('✅ Payload initialized successfully')

    // Find all pages
    const allPages = await payload.find({
      collection: 'pages',
      limit: 1000,
    })

    console.log(`📄 Found ${allPages.docs.length} total pages to process`)

    let pagesProcessed = 0
    let pagesCleaned = 0
    const processedPages: string[] = []

    for (const page of allPages.docs) {
      console.log(`\n🔍 Processing: "${page.title}" (slug: ${page.slug})`)

      let hasChanges = false

      // Check and clean the main content field
      if (page.content && hasMarkdown(page.content)) {
        console.log('   🎯 Found markdown in content field')
        hasChanges = true
      }

      // Check and clean the excerpt field
      if (page.excerpt && hasMarkdown(page.excerpt)) {
        console.log('   🎯 Found markdown in excerpt field')
        hasChanges = true
      }

      if (hasChanges) {
        try {
          const updateData: any = {}

          if (page.content) {
            updateData.content = cleanLexicalContent(page.content)
          }

          if (page.excerpt) {
            updateData.excerpt = removeMarkdown(page.excerpt)
          }

          await payload.update({
            collection: 'pages',
            id: page.id,
            data: updateData,
          })

          pagesCleaned++
          processedPages.push(`${page.title} (${page.slug})`)
          console.log('   ✅ Markdown removed successfully')
        } catch (error) {
          console.error(`   ❌ Failed to update page "${page.title}":`, error)
        }
      } else {
        console.log('   ✅ No markdown found')
      }

      pagesProcessed++
    }

    // Also process blog posts
    console.log('\n📝 Processing blog posts...')
    const allBlogPosts = await payload.find({
      collection: 'blog-posts',
      limit: 1000,
    })

    console.log(`📝 Found ${allBlogPosts.docs.length} blog posts to process`)

    let postsProcessed = 0
    let postsCleaned = 0
    const processedPosts: string[] = []

    for (const post of allBlogPosts.docs) {
      console.log(`\n🔍 Processing blog post: "${post.title}" (slug: ${post.slug})`)

      let hasChanges = false

      // Check and clean the main content field
      if (post.content && hasMarkdown(post.content)) {
        console.log('   🎯 Found markdown in content field')
        hasChanges = true
      }

      // Check and clean the excerpt field
      if (post.excerpt && hasMarkdown(post.excerpt)) {
        console.log('   🎯 Found markdown in excerpt field')
        hasChanges = true
      }

      if (hasChanges) {
        try {
          const updateData: any = {}

          if (post.content) {
            updateData.content = cleanLexicalContent(post.content)
          }

          if (post.excerpt) {
            updateData.excerpt = removeMarkdown(post.excerpt)
          }

          await payload.update({
            collection: 'blog-posts',
            id: post.id,
            data: updateData,
          })

          postsCleaned++
          processedPosts.push(`${post.title} (${post.slug})`)
          console.log('   ✅ Markdown removed successfully')
        } catch (error) {
          console.error(`   ❌ Failed to update blog post "${post.title}":`, error)
        }
      } else {
        console.log('   ✅ No markdown found')
      }

      postsProcessed++
    }

    console.log('\n🎉 Markdown removal completed!')
    console.log('📊 Summary:')
    console.log(`   📄 Pages processed: ${pagesProcessed}`)
    console.log(`   📄 Pages cleaned: ${pagesCleaned}`)
    console.log(`   📝 Blog posts processed: ${postsProcessed}`)
    console.log(`   📝 Blog posts cleaned: ${postsCleaned}`)

    if (processedPages.length > 0) {
      console.log('\n📄 Pages that had markdown removed:')
      processedPages.forEach((page) => console.log(`   - ${page}`))
    }

    if (processedPosts.length > 0) {
      console.log('\n📝 Blog posts that had markdown removed:')
      processedPosts.forEach((post) => console.log(`   - ${post}`))
    }

    console.log('\n✅ All markdown has been removed from your Payload CMS content!')
  } catch (error) {
    console.error('❌ Error during markdown removal:', error)
    if (error instanceof Error) {
      console.error('Stack trace:', error.stack)
    }
  } finally {
    process.exit(0)
  }
}

// Run the function
removeMarkdownFromPages()

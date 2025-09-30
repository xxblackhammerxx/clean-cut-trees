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

async function testMarkdownRemoval() {
  try {
    console.log('🧪 Testing markdown removal on a single page...')
    console.log('PAYLOAD_SECRET exists:', !!process.env.PAYLOAD_SECRET)
    console.log('DATABASE_URI exists:', !!process.env.DATABASE_URI)

    // Import config dynamically to ensure env vars are loaded
    const { default: config } = await import('../src/payload.config.js')
    const payload = await getPayload({ config })

    console.log('✅ Payload initialized successfully')

    // Test with the specific page you mentioned
    const targetSlug = 'services-emergency-tree-service'

    const pages = await payload.find({
      collection: 'pages',
      where: {
        slug: {
          equals: targetSlug,
        },
      },
      limit: 1,
    })

    if (pages.docs.length === 0) {
      console.log(`❌ Page with slug "${targetSlug}" not found`)
      return
    }

    const page = pages.docs[0]
    console.log(`📄 Found page: "${page.title}"`)

    // Show current content preview and full structure
    let contentPreview = ''
    let fullContent = ''

    if (page.content) {
      if (typeof page.content === 'string') {
        contentPreview = page.content.substring(0, 500) + '...'
        fullContent = page.content
      } else if (page.content.root && page.content.root.children) {
        // Extract all text from Lexical content for analysis
        const extractText = (node: any): string => {
          if (node.type === 'text') return node.text
          if (node.children) return node.children.map(extractText).join('')
          return ''
        }
        fullContent = page.content.root.children.map(extractText).join(' ')
        contentPreview = fullContent.substring(0, 500) + '...'
      }
    }

    console.log('📝 Current content preview (first 500 chars):')
    console.log(contentPreview)

    // Show raw structure for debugging
    console.log('\n🔍 Content structure type:', typeof page.content)
    if (page.content && typeof page.content === 'object') {
      console.log('Content keys:', Object.keys(page.content))
      if (page.content.root) {
        console.log('Root keys:', Object.keys(page.content.root))
        if (page.content.root.children && page.content.root.children.length > 0) {
          console.log(
            'First few children types:',
            page.content.root.children.slice(0, 3).map((child: any) => child.type),
          )
        }
      }
    }

    // Check for markdown patterns in full content
    console.log('\n🔍 Checking for markdown patterns in full content...')
    const markdownLinks = (fullContent.match(/\[([^\]]+)\]\([^)]+\)/g) || []).length
    const markdownBold = (fullContent.match(/\*\*([^*]+)\*\*/g) || []).length
    const markdownItalic = (fullContent.match(/\*([^*\*]+)\*/g) || []).length

    // Show some actual matches if found
    if (markdownLinks > 0) {
      const linkMatches = fullContent.match(/\[([^\]]+)\]\([^)]+\)/g) || []
      console.log('   📎 Link examples:', linkMatches.slice(0, 3))
    }
    if (markdownBold > 0) {
      const boldMatches = fullContent.match(/\*\*([^*]+)\*\*/g) || []
      console.log('   💪 Bold examples:', boldMatches.slice(0, 3))
    }

    console.log(`   📎 Found ${markdownLinks} markdown links`)
    console.log(`   📝 Found ${markdownBold} bold markers`)
    console.log(`   📝 Found ${markdownItalic} italic markers`)

    if (markdownLinks > 0 || markdownBold > 0 || markdownItalic > 0) {
      console.log(
        '\n⚠️  Markdown detected! Do you want to proceed with cleaning? (This is a test run)',
      )
      console.log('   To actually clean the page, uncomment the update section below')

      // Show what the cleaned content would look like
      const cleanedContent = cleanLexicalContent(page.content)

      console.log('\n🧹 Preview of cleaned content:')
      if (typeof cleanedContent === 'string') {
        console.log(cleanedContent.substring(0, 200) + '...')
      } else if (cleanedContent && cleanedContent.root && cleanedContent.root.children) {
        const extractText = (node: any): string => {
          if (node.type === 'text') return node.text
          if (node.children) return node.children.map(extractText).join('')
          return ''
        }
        const cleanedText = cleanedContent.root.children.map(extractText).join(' ')
        console.log(cleanedText.substring(0, 200) + '...')
      }

      // To actually update the page, run the main script: remove-markdown-from-pages.ts
      console.log('\n� To clean this page, run: npx tsx scripts/remove-markdown-from-pages.ts')
      console.log('   Or to clean just this page, uncomment the update section in this script')
    } else {
      console.log('✅ No markdown patterns found in this page')
    }
  } catch (error) {
    console.error('❌ Error during test:', error)
  } finally {
    process.exit(0)
  }
}

// Run the test
testMarkdownRemoval()

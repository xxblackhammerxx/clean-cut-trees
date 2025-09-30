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

async function cleanSinglePage() {
  try {
    console.log('🧹 Cleaning markdown from single page...')

    // Import config dynamically to ensure env vars are loaded
    const { default: config } = await import('../src/payload.config.js')
    const payload = await getPayload({ config })

    console.log('✅ Payload initialized successfully')

    // Target the specific page you mentioned
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
    console.log(`📄 Cleaning page: "${page.title}"`)

    // Count markdown before cleaning
    const extractText = (node: any): string => {
      if (node.type === 'text') return node.text
      if (node.children) return node.children.map(extractText).join('')
      return ''
    }

    let fullContent = ''
    if (page.content && page.content.root && page.content.root.children) {
      fullContent = page.content.root.children.map(extractText).join(' ')
    }

    const beforeLinks = (fullContent.match(/\[([^\]]+)\]\([^)]+\)/g) || []).length
    const beforeBold = (fullContent.match(/\*\*([^*]+)\*\*/g) || []).length
    const beforeItalic = (fullContent.match(/\*([^*\*]+)\*/g) || []).length

    console.log(
      `📊 Before cleaning: ${beforeLinks} links, ${beforeBold} bold, ${beforeItalic} italic`,
    )

    // Clean the content
    const cleanedContent = cleanLexicalContent(page.content)

    // Update the page
    await payload.update({
      collection: 'pages',
      id: page.id,
      data: {
        content: cleanedContent,
      },
    })

    // Count markdown after cleaning
    let cleanedFullContent = ''
    if (cleanedContent && cleanedContent.root && cleanedContent.root.children) {
      cleanedFullContent = cleanedContent.root.children.map(extractText).join(' ')
    }

    const afterLinks = (cleanedFullContent.match(/\[([^\]]+)\]\([^)]+\)/g) || []).length
    const afterBold = (cleanedFullContent.match(/\*\*([^*]+)\*\*/g) || []).length
    const afterItalic = (cleanedFullContent.match(/\*([^*\*]+)\*/g) || []).length

    console.log(`📊 After cleaning: ${afterLinks} links, ${afterBold} bold, ${afterItalic} italic`)
    console.log('✅ Page cleaned successfully!')

    // Show a sample of cleaned content
    console.log('\n📝 Sample of cleaned content:')
    console.log(cleanedFullContent.substring(0, 300) + '...')
  } catch (error) {
    console.error('❌ Error during cleaning:', error)
  } finally {
    process.exit(0)
  }
}

// Run the function
cleanSinglePage()

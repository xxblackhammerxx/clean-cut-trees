import dotenv from 'dotenv'
import { getPayload } from 'payload'
import config from '../src/payload.config'

// Load environment variables
dotenv.config()

async function fixBoldFormatting() {
  try {
    const payloadConfig = await config
    const payload = await getPayload({ config: payloadConfig })

    console.log('🔧 Fixing bold text formatting (removing double asterisks)...')

    // Service pages to fix
    const serviceSlugs = [
      'services-emergency-tree-service',
      'services-tree-removal', 
      'services-tree-trimming',
      'storm-clean-up'
    ]

    for (const slug of serviceSlugs) {
      console.log(`Fixing formatting for: ${slug}`)

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
        
        // Recursively fix bold formatting in the content
        if (page.content && page.content.root && page.content.root.children) {
          const fixedContent = fixBoldInLexicalContent(page.content)

          await payload.update({
            collection: 'pages',
            id: page.id,
            data: {
              content: fixedContent
            }
          })

          console.log(`✅ Fixed formatting for ${slug}`)
        } else {
          console.log(`⚠️ No content found for ${slug}`)
        }
      } else {
        console.log(`⚠️ Page not found: ${slug}`)
      }
    }

    console.log('🎉 Bold formatting fixes completed!')

  } catch (error) {
    console.error('❌ Error fixing bold formatting:', error)
  }
}

// Function to recursively fix bold formatting in Lexical content
function fixBoldInLexicalContent(content: any): any {
  if (!content || typeof content !== 'object') {
    return content
  }

  if (Array.isArray(content)) {
    return content.map(item => fixBoldInLexicalContent(item))
  }

  const fixed = { ...content }

  // If this is a text node with asterisks, fix it
  if (fixed.type === 'text' && fixed.text && typeof fixed.text === 'string') {
    const text = fixed.text
    
    // Check if text contains **bold** patterns
    if (text.includes('**')) {
      // Split the text and create multiple text nodes for bold/regular text
      const parts = parseTextWithBold(text)
      if (parts.length > 1) {
        // Return the parts array to be flattened by parent
        return parts
      } else {
        // Just remove asterisks if no proper bold patterns found
        fixed.text = text.replace(/\*\*/g, '')
      }
    }
  }

  // Recursively fix children
  if (fixed.children && Array.isArray(fixed.children)) {
    const newChildren: any[] = []
    
    for (const child of fixed.children) {
      const fixedChild = fixBoldInLexicalContent(child)
      
      // If fixedChild is an array (from text node splitting), flatten it
      if (Array.isArray(fixedChild)) {
        newChildren.push(...fixedChild)
      } else {
        newChildren.push(fixedChild)
      }
    }
    
    fixed.children = newChildren
  }

  return fixed
}

// Parse text with **bold** patterns and return array of text nodes
function parseTextWithBold(text: string): any[] {
  const parts: any[] = []
  let currentPos = 0
  
  const boldRegex = /\*\*(.*?)\*\*/g
  let match
  
  while ((match = boldRegex.exec(text)) !== null) {
    // Add text before the bold part
    if (match.index > currentPos) {
      const beforeText = text.substring(currentPos, match.index)
      if (beforeText) {
        parts.push({
          type: 'text',
          text: beforeText,
          format: 0,
          style: '',
          mode: 'normal',
          detail: 0
        })
      }
    }
    
    // Add the bold text
    parts.push({
      type: 'text',
      text: match[1], // The text inside the asterisks
      format: 1, // Bold format
      style: '',
      mode: 'normal',
      detail: 0
    })
    
    currentPos = match.index + match[0].length
  }
  
  // Add any remaining text after the last bold part
  if (currentPos < text.length) {
    const afterText = text.substring(currentPos)
    if (afterText) {
      parts.push({
        type: 'text',
        text: afterText,
        format: 0,
        style: '',
        mode: 'normal',
        detail: 0
      })
    }
  }
  
  // If no bold patterns found, just remove asterisks
  if (parts.length === 0) {
    parts.push({
      type: 'text',
      text: text.replace(/\*\*/g, ''),
      format: 0,
      style: '',
      mode: 'normal',
      detail: 0
    })
  }
  
  return parts
}

// Run the function
fixBoldFormatting()

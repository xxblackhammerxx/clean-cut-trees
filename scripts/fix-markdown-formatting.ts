import dotenv from 'dotenv'
import { getPayload } from 'payload'
import config from '../src/payload.config'

// Load environment variables
dotenv.config()

// Function to convert markdown text to Lexical format with proper bold formatting
function convertMarkdownToLexical(markdown: string) {
  const lines = markdown.split('\n')
  const lexicalNodes: any[] = []

  let currentParagraph = ''
  
  for (const line of lines) {
    if (line.startsWith('# ')) {
      // Flush current paragraph
      if (currentParagraph.trim()) {
        lexicalNodes.push(createParagraphNode(currentParagraph.trim()))
        currentParagraph = ''
      }
      // Add heading
      lexicalNodes.push({
        type: 'heading',
        tag: 'h1',
        format: '',
        indent: 0,
        version: 1,
        children: parseInlineFormatting(line.substring(2))
      })
    } else if (line.startsWith('## ')) {
      // Flush current paragraph
      if (currentParagraph.trim()) {
        lexicalNodes.push(createParagraphNode(currentParagraph.trim()))
        currentParagraph = ''
      }
      // Add heading
      lexicalNodes.push({
        type: 'heading',
        tag: 'h2',
        format: '',
        indent: 0,
        version: 1,
        children: parseInlineFormatting(line.substring(3))
      })
    } else if (line.startsWith('### ')) {
      // Flush current paragraph
      if (currentParagraph.trim()) {
        lexicalNodes.push(createParagraphNode(currentParagraph.trim()))
        currentParagraph = ''
      }
      // Add heading
      lexicalNodes.push({
        type: 'heading',
        tag: 'h3',
        format: '',
        indent: 0,
        version: 1,
        children: parseInlineFormatting(line.substring(4))
      })
    } else if (line.startsWith('- ')) {
      // Flush current paragraph
      if (currentParagraph.trim()) {
        lexicalNodes.push(createParagraphNode(currentParagraph.trim()))
        currentParagraph = ''
      }
      // Add list item
      lexicalNodes.push({
        type: 'list',
        listType: 'bullet',
        start: 1,
        format: '',
        indent: 0,
        version: 1,
        children: [
          {
            type: 'listitem',
            format: '',
            indent: 0,
            version: 1,
            children: [
              {
                type: 'paragraph',
                format: '',
                indent: 0,
                version: 1,
                children: parseInlineFormatting(line.substring(2))
              }
            ]
          }
        ]
      })
    } else if (line.trim() === '') {
      // Empty line - flush current paragraph
      if (currentParagraph.trim()) {
        lexicalNodes.push(createParagraphNode(currentParagraph.trim()))
        currentParagraph = ''
      }
    } else {
      // Regular content line
      if (currentParagraph) {
        currentParagraph += ' ' + line
      } else {
        currentParagraph = line
      }
    }
  }

  // Flush any remaining paragraph
  if (currentParagraph.trim()) {
    lexicalNodes.push(createParagraphNode(currentParagraph.trim()))
  }

  return {
    root: {
      type: 'root',
      format: '',
      indent: 0,
      version: 1,
      children: lexicalNodes
    }
  }
}

// Create a paragraph node with proper inline formatting
function createParagraphNode(text: string) {
  return {
    type: 'paragraph',
    format: '',
    indent: 0,
    version: 1,
    children: parseInlineFormatting(text)
  }
}

// Parse inline formatting like **bold** and [links](urls)
function parseInlineFormatting(text: string): any[] {
  const children: any[] = []
  let currentText = ''
  let i = 0

  while (i < text.length) {
    // Check for bold formatting **text**
    if (text.substr(i, 2) === '**') {
      // Add any accumulated text first
      if (currentText) {
        children.push({
          type: 'text',
          text: currentText,
          format: 0,
          style: '',
          mode: 'normal',
          detail: 0
        })
        currentText = ''
      }

      // Find the closing **
      let boldEnd = text.indexOf('**', i + 2)
      if (boldEnd !== -1) {
        const boldText = text.substring(i + 2, boldEnd)
        children.push({
          type: 'text',
          text: boldText,
          format: 1, // Bold format
          style: '',
          mode: 'normal',
          detail: 0
        })
        i = boldEnd + 2
      } else {
        // No closing **, treat as regular text
        currentText += text[i]
        i++
      }
    }
    // Check for links [text](url)
    else if (text[i] === '[') {
      // Add any accumulated text first
      if (currentText) {
        children.push({
          type: 'text',
          text: currentText,
          format: 0,
          style: '',
          mode: 'normal',
          detail: 0
        })
        currentText = ''
      }

      const linkTextEnd = text.indexOf(']', i)
      const linkUrlStart = text.indexOf('(', linkTextEnd)
      const linkUrlEnd = text.indexOf(')', linkUrlStart)

      if (linkTextEnd !== -1 && linkUrlStart === linkTextEnd + 1 && linkUrlEnd !== -1) {
        const linkText = text.substring(i + 1, linkTextEnd)
        const linkUrl = text.substring(linkUrlStart + 1, linkUrlEnd)

        children.push({
          type: 'link',
          url: linkUrl,
          format: '',
          indent: 0,
          version: 1,
          children: [
            {
              type: 'text',
              text: linkText,
              format: 0,
              style: '',
              mode: 'normal',
              detail: 0
            }
          ]
        })
        i = linkUrlEnd + 1
      } else {
        // Not a valid link format, treat as regular text
        currentText += text[i]
        i++
      }
    } else {
      currentText += text[i]
      i++
    }
  }

  // Add any remaining text
  if (currentText) {
    children.push({
      type: 'text',
      text: currentText,
      format: 0,
      style: '',
      mode: 'normal',
      detail: 0
    })
  }

  return children
}

async function fixMarkdownFormatting() {
  try {
    const payloadConfig = await config
    const payload = await getPayload({ config: payloadConfig })

    console.log('🔧 Fixing markdown formatting issues in service pages...')

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
        
        // Get the current content and extract text content
        let markdownContent = ''
        
        // Extract text from the current Lexical content
        if (page.content && page.content.root && page.content.root.children) {
          markdownContent = extractTextFromLexical(page.content.root.children)
        }

        if (markdownContent) {
          // Convert the markdown to proper Lexical format
          const properLexicalContent = convertMarkdownToLexical(markdownContent)

          await payload.update({
            collection: 'pages',
            id: page.id,
            data: {
              content: properLexicalContent
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

    console.log('🎉 Markdown formatting fixes completed!')

  } catch (error) {
    console.error('❌ Error fixing markdown formatting:', error)
  }
}

// Helper function to extract text content from Lexical structure
function extractTextFromLexical(children: any[]): string {
  let text = ''
  
  for (const child of children) {
    if (child.type === 'heading') {
      const level = child.tag === 'h1' ? '# ' : child.tag === 'h2' ? '## ' : '### '
      text += level + extractTextFromChildren(child.children || []) + '\n\n'
    } else if (child.type === 'paragraph') {
      text += extractTextFromChildren(child.children || []) + '\n\n'
    } else if (child.type === 'list') {
      if (child.children) {
        for (const listItem of child.children) {
          if (listItem.type === 'listitem' && listItem.children) {
            for (const listPara of listItem.children) {
              if (listPara.type === 'paragraph') {
                text += '- ' + extractTextFromChildren(listPara.children || []) + '\n'
              }
            }
          }
        }
        text += '\n'
      }
    }
  }
  
  return text.trim()
}

function extractTextFromChildren(children: any[]): string {
  let text = ''
  
  for (const child of children) {
    if (child.type === 'text') {
      // Preserve bold formatting
      if (child.format === 1) {
        text += `**${child.text}**`
      } else {
        text += child.text
      }
    } else if (child.type === 'link') {
      const linkText = extractTextFromChildren(child.children || [])
      text += `[${linkText}](${child.url})`
    }
  }
  
  return text
}

// Run the function
fixMarkdownFormatting()

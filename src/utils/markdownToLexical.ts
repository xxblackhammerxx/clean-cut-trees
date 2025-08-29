import { marked } from 'marked'

interface LexicalTextNode {
  type: 'text'
  version: 1
  text: string
  format?: number
  style?: string
  mode?: 'normal' | 'token' | 'segmented'
  detail?: number
}

interface LexicalElementNode {
  type: string
  version: 1
  children: (LexicalTextNode | LexicalElementNode)[]
  direction?: 'ltr' | 'rtl'
  format?: string | number
  indent?: number
  tag?: string
  textFormat?: number
  textStyle?: string
}

interface LexicalRootNode {
  type: 'root'
  version: 1
  children: LexicalElementNode[]
  direction: 'ltr' | 'rtl'
  format: string
  indent: number
}

interface LexicalDocument {
  root: LexicalRootNode
}

// Simple markdown to Lexical converter
export function markdownToLexical(markdown: string): LexicalDocument {
  // Parse markdown to tokens
  const tokens = marked.lexer(markdown)

  const children: LexicalElementNode[] = []

  for (const token of tokens) {
    switch (token.type) {
      case 'heading':
        children.push({
          type: 'heading',
          version: 1,
          tag: `h${token.depth}`,
          children: [
            {
              type: 'text',
              version: 1,
              text: token.text,
            },
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
        })
        break

      case 'paragraph':
        // Handle inline formatting in paragraphs
        const paragraphChildren = parseInlineText(token.text)
        children.push({
          type: 'paragraph',
          version: 1,
          children: paragraphChildren,
          direction: 'ltr',
          format: '',
          indent: 0,
          textFormat: 0,
          textStyle: '',
        })
        break

      case 'list':
        children.push({
          type: token.ordered ? 'list' : 'list',
          version: 1,
          children: token.items.map((item: any) => ({
            type: 'listitem',
            version: 1,
            children: parseInlineText(item.text),
            direction: 'ltr',
            format: '',
            indent: 0,
          })),
          direction: 'ltr',
          format: '',
          indent: 0,
          tag: token.ordered ? 'ol' : 'ul',
        })
        break

      case 'blockquote':
        children.push({
          type: 'quote',
          version: 1,
          children: [
            {
              type: 'paragraph',
              version: 1,
              children: parseInlineText(token.text),
              direction: 'ltr',
              format: '',
              indent: 0,
              textFormat: 0,
              textStyle: '',
            },
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
        })
        break

      case 'code':
        children.push({
          type: 'code',
          version: 1,
          children: [
            {
              type: 'text',
              version: 1,
              text: token.text,
            },
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
        })
        break

      case 'hr':
        children.push({
          type: 'horizontalrule',
          version: 1,
          children: [],
          direction: 'ltr',
          format: '',
          indent: 0,
        })
        break

      case 'space':
        // Skip whitespace tokens
        break

      default:
        // For any unhandled token types, create a paragraph
        if (token.raw && token.raw.trim()) {
          children.push({
            type: 'paragraph',
            version: 1,
            children: [
              {
                type: 'text',
                version: 1,
                text: token.raw.trim(),
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            textFormat: 0,
            textStyle: '',
          })
        }
        break
    }
  }

  return {
    root: {
      type: 'root',
      version: 1,
      children,
      direction: 'ltr',
      format: '',
      indent: 0,
    },
  }
}

// Helper function to parse inline text with formatting
function parseInlineText(text: string): LexicalTextNode[] {
  // Simple regex-based parsing for common markdown formatting
  const nodes: LexicalTextNode[] = []

  // For now, just create a simple text node
  // In a more sophisticated implementation, you'd parse **bold**, *italic*, `code`, [links](url), etc.

  // Handle basic formatting patterns
  let remainingText = text

  // Handle links: [text](url)
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g
  let linkMatch
  let lastIndex = 0

  while ((linkMatch = linkRegex.exec(text)) !== null) {
    // Add text before the link
    if (linkMatch.index > lastIndex) {
      const beforeText = text.slice(lastIndex, linkMatch.index)
      if (beforeText) {
        nodes.push({
          type: 'text',
          version: 1,
          text: beforeText,
        })
      }
    }

    // Add the link as text (Lexical links are more complex)
    nodes.push({
      type: 'text',
      version: 1,
      text: linkMatch[1], // Just the link text for now
    })

    lastIndex = linkMatch.index + linkMatch[0].length
  }

  // Add remaining text
  if (lastIndex < text.length) {
    const remainingText = text.slice(lastIndex)
    if (remainingText) {
      nodes.push({
        type: 'text',
        version: 1,
        text: remainingText,
      })
    }
  }

  // If no links were found, just return the whole text
  if (nodes.length === 0) {
    nodes.push({
      type: 'text',
      version: 1,
      text: text,
    })
  }

  return nodes
}

// Alternative simple approach for basic content
export function simpleMarkdownToLexical(markdown: string): LexicalDocument {
  // Split by double newlines to get paragraphs
  const paragraphs = markdown.split('\n\n').filter((p) => p.trim())

  const children: LexicalElementNode[] = paragraphs.map((paragraph) => {
    const trimmed = paragraph.trim()

    // Check if it's a heading
    if (trimmed.startsWith('#')) {
      const headingMatch = trimmed.match(/^(#{1,6})\s+(.+)/)
      if (headingMatch) {
        const [, hashes, text] = headingMatch
        return {
          type: 'heading',
          version: 1,
          tag: `h${hashes.length}`,
          children: [
            {
              type: 'text',
              version: 1,
              text: text,
            },
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
        }
      }
    }

    // Check if it's a list item
    if (trimmed.startsWith('-') || trimmed.startsWith('*') || /^\d+\./.test(trimmed)) {
      // For now, treat as paragraph - proper list handling would be more complex
      return {
        type: 'paragraph',
        version: 1,
        children: [
          {
            type: 'text',
            version: 1,
            text: trimmed,
          },
        ],
        direction: 'ltr',
        format: '',
        indent: 0,
        textFormat: 0,
        textStyle: '',
      }
    }

    // Default to paragraph
    return {
      type: 'paragraph',
      version: 1,
      children: [
        {
          type: 'text',
          version: 1,
          text: trimmed,
        },
      ],
      direction: 'ltr',
      format: '',
      indent: 0,
      textFormat: 0,
      textStyle: '',
    }
  })

  return {
    root: {
      type: 'root',
      version: 1,
      children,
      direction: 'ltr',
      format: '',
      indent: 0,
    },
  }
}

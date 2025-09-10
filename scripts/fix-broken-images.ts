import dotenv from 'dotenv'
import payload from 'payload'
import config from '../src/payload.config'

// Load environment variables
dotenv.config()

// Function to fix broken image references in Lexical content
function fixLexicalImages(lexicalContent: any): { content: any; fixed: boolean } {
  if (!lexicalContent?.root?.children) {
    return { content: lexicalContent, fixed: false }
  }

  let hasChanges = false

  const processNode = (node: any): any => {
    let newNode = { ...node }

    if (node.type === 'text' && node.text) {
      let text = node.text

      // Fix WordPress image links - replace with local asset paths
      const wpImagePattern =
        /!\[([^\]]*)\]\(https:\/\/cleancutstrees\.com\/wp-content\/uploads\/([^)]*)\)/g
      text = text.replace(wpImagePattern, (match, alt, filename) => {
        console.log(`    Fixing WordPress image: ${filename}`)
        hasChanges = true
        return `![${alt}](/content-migration/assets/${filename})`
      })

      // Fix malformed image references like "![municipal tree service ogden ut](./assets/3360c69ff26cc8732183a7edd60e6ee6f293b9ee.jpg)"
      const malformedImagePattern = /!\[([^\]]*)\]\(\.\/assets\/([^)]*)\)/g
      text = text.replace(malformedImagePattern, (match, alt, filename) => {
        console.log(`    Fixing malformed image reference: ${filename}`)
        hasChanges = true
        return `![${alt}](/content-migration/assets/${filename})`
      })

      // Fix any remaining broken image references like "![image1-1](https://cleancutstrees.com/wp-content/uploads/image1-1.jpeg)"
      const image1Pattern = /!\[image1-1\]\([^)]*\)/g
      text = text.replace(image1Pattern, (match) => {
        console.log(`    Removing broken image1-1 reference`)
        hasChanges = true
        return '' // Remove completely broken references
      })

      // Fix any direct mentions of municipal tree service image
      const municipalImagePattern = /!\[municipal tree service ogden ut\]\([^)]*\)/gi
      text = text.replace(municipalImagePattern, (match) => {
        console.log(`    Fixing municipal tree service image`)
        hasChanges = true
        return '![Municipal Tree Service in Ogden, UT](/content-migration/assets/3360c69ff26cc8732183a7edd60e6ee6f293b9ee.jpg)'
      })

      if (text !== node.text) {
        newNode.text = text
      }
    }

    if (node.children) {
      const newChildren = node.children.map(processNode)
      if (JSON.stringify(newChildren) !== JSON.stringify(node.children)) {
        newNode.children = newChildren
      }
    }

    return newNode
  }

  const newRoot = {
    ...lexicalContent.root,
    children: lexicalContent.root.children.map(processNode),
  }

  return {
    content: { ...lexicalContent, root: newRoot },
    fixed: hasChanges,
  }
}

async function fixAllBrokenImages() {
  await payload.init({
    config,
  })

  console.log('🔧 Fixing broken image references in all pages...')

  try {
    const pages = await payload.find({
      collection: 'pages',
      limit: 1000,
      depth: 0,
    })

    let totalFixed = 0

    for (const page of pages.docs) {
      let needsUpdate = false
      let updateData: any = {}

      // Fix content if it's Lexical format
      if (page.content && typeof page.content === 'object') {
        const { content: fixedContent, fixed } = fixLexicalImages(page.content)
        if (fixed) {
          updateData.content = fixedContent
          needsUpdate = true
        }
      }

      // Fix content if it's string format
      if (page.content && typeof page.content === 'string') {
        let content = page.content

        // Fix WordPress image links
        const wpImagePattern =
          /!\[([^\]]*)\]\(https:\/\/cleancutstrees\.com\/wp-content\/uploads\/([^)]*)\)/g
        const originalContent = content
        content = content.replace(wpImagePattern, (match, alt, filename) => {
          return `![${alt}](/content-migration/assets/${filename})`
        })

        if (content !== originalContent) {
          updateData.content = content
          needsUpdate = true
        }
      }

      if (needsUpdate) {
        console.log(`\n✅ Fixing page: ${page.title} (ID: ${page.id})`)
        await payload.update({
          collection: 'pages',
          id: page.id,
          data: updateData,
        })
        totalFixed++
      }
    }

    console.log(`\n🎉 Fixed ${totalFixed} pages with broken image references`)
    console.log(`📊 Checked ${pages.docs.length} total pages`)
  } catch (error) {
    console.error('Error fixing broken images:', error)
  }

  process.exit(0)
}

fixAllBrokenImages()

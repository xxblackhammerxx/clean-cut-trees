import dotenv from 'dotenv'
import payload from 'payload'
import config from '../src/payload.config'

// Load environment variables
dotenv.config()

// Function to comprehensively fix broken image references in Lexical content
function comprehensiveFixLexicalImages(lexicalContent: any): { content: any; fixed: boolean } {
  if (!lexicalContent?.root?.children) {
    return { content: lexicalContent, fixed: false }
  }

  let hasChanges = false

  const processNode = (node: any): any => {
    let newNode = { ...node }

    if (node.type === 'text' && node.text) {
      let text = node.text

      // Fix WordPress image links in markdown link format: [![alt](local)](wp-url)
      const linkedImagePattern =
        /\[!\[([^\]]*)\]\(([^)]*)\)\]\(https:\/\/cleancutstrees\.com\/wp-content\/uploads\/[^)]*\)/g
      text = text.replace(linkedImagePattern, (match, alt, localPath) => {
        console.log(`    Fixing linked WordPress image: ${alt}`)
        hasChanges = true
        return `![${alt}](${localPath})`
      })

      // Fix any standalone filename references that weren't caught
      const standaloneFilePattern = /3360c69ff26cc8732183a7edd60e6ee6f293b9ee\.jpg/g
      text = text.replace(standaloneFilePattern, (match) => {
        console.log(`    Fixing standalone municipal image reference`)
        hasChanges = true
        return '/content-migration/assets/3360c69ff26cc8732183a7edd60e6ee6f293b9ee.jpg'
      })

      // Fix any standalone image1-1.jpeg references
      const image1FilePattern = /image1-1\.jpeg/g
      text = text.replace(image1FilePattern, (match) => {
        console.log(`    Removing broken image1-1.jpeg reference`)
        hasChanges = true
        return ''
      })

      // Fix any remaining WordPress URLs in text
      const wpUrlPattern = /https:\/\/cleancutstrees\.com\/wp-content\/uploads\/([^)\s"']*)/g
      text = text.replace(wpUrlPattern, (match, filename) => {
        console.log(`    Fixing WordPress URL: ${filename}`)
        hasChanges = true
        return `/content-migration/assets/${filename}`
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

async function comprehensiveFixBrokenImages() {
  await payload.init({
    config,
  })

  console.log('🔧 Comprehensive fix for all remaining broken image references...')

  try {
    // Focus on the specific problematic pages first
    const problemPages = ['services-municipal-tree-service', 'photo-gallery']

    for (const slug of problemPages) {
      const pages = await payload.find({
        collection: 'pages',
        where: { slug: { equals: slug } },
        limit: 1,
        depth: 0,
      })

      if (pages.docs.length > 0) {
        const page = pages.docs[0]
        console.log(`\n🔧 Fixing page: ${page.title} (ID: ${page.id})`)

        let needsUpdate = false
        let updateData: any = {}

        // Fix content if it's Lexical format
        if (page.content && typeof page.content === 'object') {
          const { content: fixedContent, fixed } = comprehensiveFixLexicalImages(page.content)
          if (fixed) {
            updateData.content = fixedContent
            needsUpdate = true
          }
        }

        if (needsUpdate) {
          await payload.update({
            collection: 'pages',
            id: page.id,
            data: updateData,
          })
          console.log(`✅ Updated page: ${page.title}`)
        } else {
          console.log(`ℹ️  No changes needed for: ${page.title}`)
        }
      }
    }

    console.log(`\n🎉 Comprehensive fix completed`)
  } catch (error) {
    console.error('Error fixing broken images:', error)
  }

  process.exit(0)
}

comprehensiveFixBrokenImages()

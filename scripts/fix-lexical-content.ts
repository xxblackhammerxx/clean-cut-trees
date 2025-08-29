import dotenv from 'dotenv'
import payload from 'payload'
import config from '../src/payload.config'
import { simpleMarkdownToLexical } from '../src/utils/markdownToLexical'

// Load environment variables
dotenv.config()

const fixLexicalContent = async () => {
  try {
    console.log('🔧 Starting Lexical content fix...')
    console.log('PAYLOAD_SECRET exists:', !!process.env.PAYLOAD_SECRET)
    console.log('DATABASE_URI exists:', !!process.env.DATABASE_URI)

    await payload.init({
      config,
    })

    // Fix Pages collection
    console.log('📄 Fixing Pages collection...')
    const pages = await payload.find({
      collection: 'pages',
      limit: 1000,
    })

    let pagesFixed = 0
    for (const page of pages.docs) {
      if (typeof page.content === 'string' && page.content.trim()) {
        console.log(`   Fixing page: ${page.title}`)

        try {
          const lexicalContent = simpleMarkdownToLexical(page.content)

          await payload.update({
            collection: 'pages',
            id: page.id,
            data: {
              content: lexicalContent,
            },
          })

          pagesFixed++
          console.log(`   ✅ Fixed page: ${page.title}`)
        } catch (error) {
          console.error(`   ❌ Failed to fix page ${page.title}:`, error)
        }
      }
    }

    // Fix BlogPosts collection
    console.log('📝 Fixing BlogPosts collection...')
    const blogPosts = await payload.find({
      collection: 'blog-posts',
      limit: 1000,
    })

    let postsFixed = 0
    for (const post of blogPosts.docs) {
      if (typeof post.content === 'string' && post.content.trim()) {
        console.log(`   Fixing blog post: ${post.title}`)

        try {
          const lexicalContent = simpleMarkdownToLexical(post.content)

          await payload.update({
            collection: 'blog-posts',
            id: post.id,
            data: {
              content: lexicalContent,
            },
          })

          postsFixed++
          console.log(`   ✅ Fixed blog post: ${post.title}`)
        } catch (error) {
          console.error(`   ❌ Failed to fix blog post ${post.title}:`, error)
        }
      }
    }

    console.log('\n🎉 Lexical content fix completed!')
    console.log(`📊 Fixed ${pagesFixed} pages and ${postsFixed} blog posts`)
  } catch (error) {
    console.error('💥 Fix failed:', error)
  } finally {
    process.exit(0)
  }
}

export default fixLexicalContent

// Run fix if this file is executed directly
if (import.meta.url === `file://${process.argv[1]}` || import.meta.url.endsWith(process.argv[1])) {
  fixLexicalContent()
}

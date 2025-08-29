import dotenv from 'dotenv'
import payload from 'payload'
import config from './src/payload.config'

// Load environment variables
dotenv.config()

const verifyMigration = async () => {
  try {
    await payload.init({
      config,
    })

    console.log('🔍 Verifying migration results...\n')

    // Check Categories
    const categories = await payload.find({
      collection: 'categories',
      limit: 100,
    })
    console.log(`📁 Categories: ${categories.totalDocs} found`)
    categories.docs.forEach((cat: any) => {
      console.log(`  - ${cat.title} (${cat.slug})`)
    })

    // Check Tags
    const tags = await payload.find({
      collection: 'tags',
      limit: 100,
    })
    console.log(`\n🏷️  Tags: ${tags.totalDocs} found`)
    tags.docs.forEach((tag: any) => {
      console.log(`  - ${tag.title} (${tag.slug})`)
    })

    // Check Pages
    const pages = await payload.find({
      collection: 'pages',
      limit: 100,
    })
    console.log(`\n📄 Pages: ${pages.totalDocs} found`)
    pages.docs.forEach((page: any) => {
      console.log(`  - ${page.title} (${page.slug}) - ${page.pageType}`)
    })

    // Check Blog Posts
    const blogPosts = await payload.find({
      collection: 'blog-posts',
      limit: 100,
    })
    console.log(`\n📝 Blog Posts: ${blogPosts.totalDocs} found`)
    blogPosts.docs.forEach((post: any) => {
      console.log(`  - ${post.title} (${post.slug}) - ${post.publishedDate}`)
    })

    // Check Media
    const media = await payload.find({
      collection: 'media',
      limit: 100,
    })
    console.log(`\n🖼️  Media: ${media.totalDocs} found`)

    console.log('\n✅ Migration verification complete!')
    console.log('\n📊 Summary:')
    console.log(`   Categories: ${categories.totalDocs}`)
    console.log(`   Tags: ${tags.totalDocs}`)
    console.log(`   Pages: ${pages.totalDocs}`)
    console.log(`   Blog Posts: ${blogPosts.totalDocs}`)
    console.log(`   Media: ${media.totalDocs}`)

    process.exit(0)
  } catch (error) {
    console.error('❌ Verification failed:', error)
    process.exit(1)
  }
}

verifyMigration()

import dotenv from 'dotenv'
import payload from 'payload'
import config from './src/payload.config'

// Load environment variables
dotenv.config()

const checkContentQuality = async () => {
  try {
    await payload.init({
      config,
    })

    console.log('🧐 Checking content quality...\n')

    // Check for blog posts with relationships
    const blogPosts = await payload.find({
      collection: 'blog-posts',
      depth: 2, // Include related data
      limit: 5,
    })

    console.log('📝 Sample Blog Posts with Relationships:')
    blogPosts.docs.forEach((post: any) => {
      console.log(`\n📄 ${post.title}`)
      console.log(`   Slug: ${post.slug}`)
      console.log(`   Published: ${post.publishedDate}`)
      console.log(`   Categories: ${post.categories?.length || 0}`)
      console.log(`   Tags: ${post.tags?.length || 0}`)
      console.log(`   Content length: ${post.content?.length || 0} characters`)
      console.log(`   Has excerpt: ${post.excerpt ? 'Yes' : 'No'}`)
    })

    // Check page types distribution
    const pageTypes = await payload.find({
      collection: 'pages',
      limit: 100,
    })

    const typeCount = pageTypes.docs.reduce((acc: any, page: any) => {
      acc[page.pageType] = (acc[page.pageType] || 0) + 1
      return acc
    }, {})

    console.log('\n📄 Page Types Distribution:')
    Object.entries(typeCount).forEach(([type, count]) => {
      console.log(`   ${type}: ${count}`)
    })

    // Check for SEO data
    const samplePages = await payload.find({
      collection: 'pages',
      limit: 3,
    })

    console.log('\n🔍 SEO Data Sample:')
    samplePages.docs.forEach((page: any) => {
      console.log(`\n📄 ${page.title}`)
      console.log(`   SEO Title: ${page.seo?.title || 'Not set'}`)
      console.log(`   SEO Description: ${page.seo?.description ? 'Set' : 'Not set'}`)
    })

    process.exit(0)
  } catch (error) {
    console.error('❌ Quality check failed:', error)
    process.exit(1)
  }
}

checkContentQuality()

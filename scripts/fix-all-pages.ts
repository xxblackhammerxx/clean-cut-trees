import dotenv from 'dotenv'
import payload from 'payload'
import config from '../src/payload.config'
import { simpleMarkdownToLexical } from '../src/utils/markdownToLexical'

// Load environment variables
dotenv.config()

// Function to remove unwanted contact section from content
const cleanContent = (content: string): string => {
  // Define the pattern to remove - the contact section at the end
  const unwantedSection = `### Contact Us

Fruit Heights, UT 84037

[(801) 473-7548](tel:+18014737548)

[estimates@cleancutstrees.com](mailto:estimates@cleancutstrees.com)

- [Follow](https://www.facebook.com/CleanCutsTrees/ "Follow on Facebook")
- [Follow](https://www.youtube.com/channel/UCSMH2M8_eCp3TM7lxs7HC1w/videos "Follow on Youtube")
- [Follow](https://www.instagram.com/clean_cuts_trees/ "Follow on Instagram")

### Our Services

### Service Areas

### Location`

  // Also handle variations of the contact section
  const variations = [
    // Exact match
    unwantedSection,
    // With different line endings
    unwantedSection.replace(/\n/g, '\r\n'),
    // Without the final "### Location"
    unwantedSection.replace('\n### Location', ''),
    // Just the contact info part
    `### Contact Us

Fruit Heights, UT 84037

[(801) 473-7548](tel:+18014737548)

[estimates@cleancutstrees.com](mailto:estimates@cleancutstrees.com)

- [Follow](https://www.facebook.com/CleanCutsTrees/ "Follow on Facebook")
- [Follow](https://www.youtube.com/channel/UCSMH2M8_eCp3TM7lxs7HC1w/videos "Follow on Youtube")
- [Follow](https://www.instagram.com/clean_cuts_trees/ "Follow on Instagram")`,
  ]

  let cleanedContent = content

  // Remove any of the variations found
  variations.forEach((variation) => {
    cleanedContent = cleanedContent.replace(variation, '')
  })

  // Also remove any trailing empty sections that might be left
  cleanedContent = cleanedContent.replace(/### Our Services\s*$/m, '')
  cleanedContent = cleanedContent.replace(/### Service Areas\s*$/m, '')
  cleanedContent = cleanedContent.replace(/### Location\s*$/m, '')

  // Clean up multiple empty lines
  cleanedContent = cleanedContent.replace(/\n\n\n+/g, '\n\n')

  // Trim trailing whitespace
  cleanedContent = cleanedContent.trim()

  return cleanedContent
}

const fixAllPages = async () => {
  try {
    console.log('🔧 Starting comprehensive page fix...')
    console.log('PAYLOAD_SECRET exists:', !!process.env.PAYLOAD_SECRET)
    console.log('DATABASE_URI exists:', !!process.env.DATABASE_URI)

    await payload.init({
      config,
    })

    console.log('✅ Payload initialized successfully')

    // Find all pages
    const allPages = await payload.find({
      collection: 'pages',
      limit: 1000, // Get all pages
    })

    console.log(`📄 Found ${allPages.docs.length} total pages to process`)

    let pagesFixed = 0
    let pagesSkipped = 0
    let pagesWithContact = 0

    for (const page of allPages.docs) {
      console.log(`\n🔄 Processing: "${page.title}" (ID: ${page.id})`)

      // Check if content is string (needs lexical conversion)
      const needsLexicalFix = typeof page.content === 'string'

      // Check if content contains the unwanted contact section
      const hasUnwantedContact =
        typeof page.content === 'string' &&
        (page.content.includes('### Contact Us') ||
          page.content.includes('Fruit Heights, UT 84037') ||
          page.content.includes('### Our Services') ||
          page.content.includes('### Service Areas') ||
          page.content.includes('### Location'))

      if (!needsLexicalFix && !hasUnwantedContact) {
        console.log('   ⏭️ Skipping - already in correct format and no unwanted content')
        pagesSkipped++
        continue
      }

      try {
        let contentToProcess = page.content

        // If it's already a lexical object but we need to clean contact info,
        // we'll need to handle this differently
        if (typeof contentToProcess !== 'string') {
          console.log(
            '   ⚠️ Page has lexical content but may need contact info cleaning - skipping for now',
          )
          pagesSkipped++
          continue
        }

        // Clean the content first
        if (hasUnwantedContact) {
          console.log('   🧹 Removing unwanted contact section...')
          contentToProcess = cleanContent(contentToProcess)
          pagesWithContact++
        }

        // Convert to lexical format
        if (needsLexicalFix) {
          console.log('   🔄 Converting to Lexical format...')
          const lexicalContent = simpleMarkdownToLexical(contentToProcess)

          // Update the page
          await payload.update({
            collection: 'pages',
            id: page.id,
            data: {
              content: lexicalContent,
            },
          })

          console.log('   ✅ Fixed successfully')
          pagesFixed++
        }
      } catch (error) {
        console.error(`   ❌ Failed to fix page "${page.title}":`, error)
      }
    }

    // Also check blog posts
    console.log('\n📝 Checking blog posts...')
    const allBlogPosts = await payload.find({
      collection: 'blog-posts',
      limit: 1000,
    })

    console.log(`📝 Found ${allBlogPosts.docs.length} blog posts to process`)

    let postsFixed = 0
    let postsSkipped = 0
    let postsWithContact = 0

    for (const post of allBlogPosts.docs) {
      console.log(`\n🔄 Processing blog post: "${post.title}" (ID: ${post.id})`)

      const needsLexicalFix = typeof post.content === 'string'
      const hasUnwantedContact =
        typeof post.content === 'string' &&
        (post.content.includes('### Contact Us') ||
          post.content.includes('Fruit Heights, UT 84037'))

      if (!needsLexicalFix && !hasUnwantedContact) {
        console.log('   ⏭️ Skipping - already in correct format and no unwanted content')
        postsSkipped++
        continue
      }

      try {
        let contentToProcess = post.content

        if (typeof contentToProcess !== 'string') {
          console.log(
            '   ⚠️ Post has lexical content but may need contact info cleaning - skipping for now',
          )
          postsSkipped++
          continue
        }

        if (hasUnwantedContact) {
          console.log('   🧹 Removing unwanted contact section...')
          contentToProcess = cleanContent(contentToProcess)
          postsWithContact++
        }

        if (needsLexicalFix) {
          console.log('   🔄 Converting to Lexical format...')
          const lexicalContent = simpleMarkdownToLexical(contentToProcess)

          await payload.update({
            collection: 'blog-posts',
            id: post.id,
            data: {
              content: lexicalContent,
            },
          })

          console.log('   ✅ Fixed successfully')
          postsFixed++
        }
      } catch (error) {
        console.error(`   ❌ Failed to fix blog post "${post.title}":`, error)
      }
    }

    console.log('\n🎉 Comprehensive fix completed!')
    console.log('📊 Summary:')
    console.log(`   📄 Pages processed: ${allPages.docs.length}`)
    console.log(`   📄 Pages fixed: ${pagesFixed}`)
    console.log(`   📄 Pages skipped: ${pagesSkipped}`)
    console.log(`   📄 Pages with unwanted contact info removed: ${pagesWithContact}`)
    console.log(`   📝 Blog posts processed: ${allBlogPosts.docs.length}`)
    console.log(`   📝 Blog posts fixed: ${postsFixed}`)
    console.log(`   📝 Blog posts skipped: ${postsSkipped}`)
    console.log(`   📝 Blog posts with unwanted contact info removed: ${postsWithContact}`)
    console.log('\n✅ All content is now in proper Lexical format and cleaned!')
  } catch (error) {
    console.error('❌ Error during comprehensive fix:', error)
  } finally {
    process.exit(0)
  }
}

fixAllPages()

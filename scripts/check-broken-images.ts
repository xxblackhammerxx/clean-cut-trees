import dotenv from 'dotenv'
import payload from 'payload'
import config from '../src/payload.config'

// Load environment variables
dotenv.config()

async function checkBrokenImages() {
  await payload.init({
    config,
  })

  console.log('🔍 Checking for broken images in pages...')

  try {
    const pages = await payload.find({
      collection: 'pages',
      limit: 1000,
      depth: 0,
    })

    const brokenImagePatterns = [
      {
        pattern: /!\[([^\]]*)\]\(https:\/\/cleancutstrees\.com\/wp-content\/uploads\/[^)]*\)/g,
        name: 'WordPress image links',
      },
      { pattern: /!\[image1-1\]/g, name: 'image1-1 references' },
      { pattern: /municipal tree service ogden ut/gi, name: 'municipal tree service text' },
      {
        pattern: /(?<!\/content-migration\/assets\/)3360c69ff26cc8732183a7edd60e6ee6f293b9ee\.jpg/g,
        name: 'unpathed municipal image filename',
      },
      { pattern: /image1-1\.jpeg/g, name: 'image1-1.jpeg references' },
      { pattern: /https:\/\/cleancutstrees\.com\/wp-content/g, name: 'WordPress content URLs' },
    ]

    let foundIssues = false

    for (const page of pages.docs) {
      let hasIssues = false
      const issues: string[] = []

      // Check title
      if (page.title) {
        for (const { pattern, name } of brokenImagePatterns) {
          if (pattern.test(page.title)) {
            issues.push(`Title contains broken reference (${name}): ${page.title}`)
            hasIssues = true
          }
        }
      }

      // Check content (if it's Lexical format)
      if (page.content && typeof page.content === 'object') {
        const contentStr = JSON.stringify(page.content)
        for (const { pattern, name } of brokenImagePatterns) {
          if (pattern.test(contentStr)) {
            issues.push(`Content contains broken image references (${name})`)
            hasIssues = true
            break
          }
        }
      }

      // Check content (if it's string format)
      if (page.content && typeof page.content === 'string') {
        for (const { pattern, name } of brokenImagePatterns) {
          if (pattern.test(page.content)) {
            issues.push(`Content contains broken image references (${name})`)
            hasIssues = true
            break
          }
        }
      }

      if (hasIssues) {
        foundIssues = true
        console.log(`\n❌ Issues found in page: ${page.title} (ID: ${page.id})`)
        console.log(`   Slug: ${page.slug}`)
        issues.forEach((issue) => console.log(`   - ${issue}`))
      }
    }

    if (!foundIssues) {
      console.log('✅ No broken image references found in pages')
    }

    console.log(`\n📊 Checked ${pages.docs.length} pages`)
  } catch (error) {
    console.error('Error checking for broken images:', error)
  }

  process.exit(0)
}

checkBrokenImages()

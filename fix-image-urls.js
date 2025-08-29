import { getPayload } from 'payload'
import config from './src/payload.config.ts'

async function fixImageUrls() {
  // Set required environment variables
  process.env.PAYLOAD_SECRET = process.env.PAYLOAD_SECRET || 'temp-secret-key'

  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  console.log('Looking for pages with broken image URLs...')

  // Find the services-tree-removal page
  const pages = await payload.find({
    collection: 'pages',
    where: {
      slug: {
        equals: 'services-tree-removal',
      },
    },
    limit: 1,
  })

  if (pages.docs.length === 0) {
    console.log('Page not found')
    return
  }

  const page = pages.docs[0]
  console.log('Found page:', page.title)

  // Fix the broken image URL in the content
  let updatedContent = page.content

  if (typeof updatedContent === 'string') {
    // Replace the broken external image URL with a comment or remove it
    updatedContent = updatedContent.replace(
      /!\[113347873_4110740395635049_4134012137638257315_o\]\(https:\/\/cleancutstrees\.com\/wp-content\/uploads\/113347873_4110740395635049_4134012137638257315_o\.jpg[^)]*\)/g,
      '<!-- Image removed: 113347873_4110740395635049_4134012137638257315_o.jpg (not found) -->',
    )

    console.log('Updated content length:', updatedContent.length)

    // Update the page in the database
    await payload.update({
      collection: 'pages',
      id: page.id,
      data: {
        content: updatedContent,
      },
    })

    console.log('✅ Fixed broken image URL in services-tree-removal page')
  } else {
    console.log('Content is not a string, skipping...')
  }

  process.exit(0)
}

fixImageUrls().catch((error) => {
  console.error('Error fixing image URLs:', error)
  process.exit(1)
})

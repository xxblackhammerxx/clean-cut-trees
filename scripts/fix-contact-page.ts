import dotenv from 'dotenv'
import { dirname, join } from 'path'
import payload from 'payload'
import { fileURLToPath } from 'url'
import config from '../src/payload.config'

// Get __dirname equivalent for ES modules
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// Load environment variables from the correct path
dotenv.config({ path: join(__dirname, '../.env') })

const createContactPage = async () => {
  try {
    await payload.init({
      config,
    })

    console.log('🔧 Creating proper contact page...')

    const contactPageContent = {
      root: {
        type: 'root',
        version: 1,
        children: [
          {
            type: 'heading',
            version: 1,
            tag: 'h1',
            children: [
              {
                type: 'text',
                version: 1,
                text: 'Contact Us',
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
          },
          {
            type: 'heading',
            version: 1,
            tag: 'h3',
            children: [
              {
                type: 'text',
                version: 1,
                text: 'Clean Cuts Trees',
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
          },
          {
            type: 'paragraph',
            version: 1,
            children: [
              {
                type: 'text',
                version: 1,
                text: 'Fruit Heights, UT 84037',
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            textFormat: 0,
            textStyle: '',
          },
          {
            type: 'paragraph',
            version: 1,
            children: [
              {
                type: 'text',
                version: 1,
                text: '(801) 473-7548',
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            textFormat: 0,
            textStyle: '',
          },
          {
            type: 'paragraph',
            version: 1,
            children: [
              {
                type: 'text',
                version: 1,
                text: 'estimates@cleancutstrees.com',
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            textFormat: 0,
            textStyle: '',
          },
          {
            type: 'paragraph',
            version: 1,
            children: [
              {
                type: 'text',
                version: 1,
                text: 'Clean Cuts Trees is the #1 tree service company in Fruit Heights serving all of Davis, Salt Lake and Weber County, Utah, & surrounding areas.',
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            textFormat: 0,
            textStyle: '',
          },
          {
            type: 'heading',
            version: 1,
            tag: 'h3',
            children: [
              {
                type: 'text',
                version: 1,
                text: 'Our Services',
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
          },
          {
            type: 'heading',
            version: 1,
            tag: 'h3',
            children: [
              {
                type: 'text',
                version: 1,
                text: 'Service Areas',
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
          },
          {
            type: 'heading',
            version: 1,
            tag: 'h3',
            children: [
              {
                type: 'text',
                version: 1,
                text: 'Location',
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
          },
        ],
        direction: 'ltr',
        format: '',
        indent: 0,
      },
    }

    // First, try to find existing contact page
    const existingPages = await payload.find({
      collection: 'pages',
      where: {
        or: [
          { slug: { equals: 'contact' } },
          { slug: { equals: 'contact-us' } },
          { title: { contains: 'Contact' } },
        ],
      },
    })

    if (existingPages.docs.length > 0) {
      const contactPage = existingPages.docs[0]
      console.log(`Found existing contact page: ${contactPage.title}`)

      // Update the existing page
      await payload.update({
        collection: 'pages',
        id: contactPage.id,
        data: {
          content: contactPageContent,
        },
      })

      console.log(`✅ Updated contact page: ${contactPage.title}`)
    } else {
      // Create a new contact page
      const newPage = await payload.create({
        collection: 'pages',
        data: {
          title: 'Contact Us',
          slug: 'contact',
          content: contactPageContent,
          pageType: 'static',
          excerpt: 'Get in touch with Clean Cuts Trees for all your tree service needs.',
          seo: {
            title: 'Contact Us - Clean Cuts Trees',
            description:
              'Contact Clean Cuts Trees for professional tree services in Utah. Call (801) 473-7548 or email estimates@cleancutstrees.com',
          },
        },
      })

      console.log(`✅ Created new contact page: ${newPage.title}`)
    }

    console.log('🎉 Contact page fix completed!')
  } catch (error) {
    console.error('💥 Fix failed:', error)
  } finally {
    process.exit(0)
  }
}

export default createContactPage

// Run fix if this file is executed directly
if (import.meta.url === `file://${process.argv[1]}` || import.meta.url.endsWith(process.argv[1])) {
  createContactPage()
}

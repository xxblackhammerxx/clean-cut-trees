import dotenv from 'dotenv'
import payload from 'payload'
import config from '../src/payload.config'
import { simpleMarkdownToLexical } from '../src/utils/markdownToLexical'

// Load environment variables
dotenv.config()

const aboutPageContent = `# About Us

When it comes to getting rid of unwanted trees on your property, you want someone who can get the job done quickly and efficiently while keeping costs down. We offer affordable rates for any size job that will leave you with no mess behind.

Clean Cuts is your go-to solution when it comes to getting rid of trees. Our team has years of experience in the industry, which means we know exactly what needs to be done to ensure a safe and efficient process. Our prices beat the competition, and our services are unmatched in quality.

We make sure our work is of top quality every single time with no hassle involved. When you need someone who knows how to take care of your trees, Give us a call today at **[801-473-7548](Tel:+18014737548)** or schedule online with our convenient quote request form! Check out what some of our customers have said about their experiences working with us below! You won't find better than us!

Clean Cuts Trees is the #1 tree service company in Fruit Heights serving all of Davis, Salt Lake and Weber County, Utah, & surrounding areas.`

const fixAboutPage = async () => {
  try {
    console.log('🔧 Starting About page fix...')
    console.log('PAYLOAD_SECRET exists:', !!process.env.PAYLOAD_SECRET)
    console.log('DATABASE_URI exists:', !!process.env.DATABASE_URI)

    await payload.init({
      config,
    })

    console.log('✅ Payload initialized successfully')

    // Find the about us page
    const pages = await payload.find({
      collection: 'pages',
      where: {
        or: [
          { title: { contains: 'About Us' } },
          { slug: { equals: 'about-us' } },
          { title: { contains: 'About' } },
        ],
      },
    })

    console.log(`Found ${pages.docs.length} pages matching About Us criteria`)

    if (pages.docs.length === 0) {
      console.log('❌ No about us page found')
      return
    }

    const aboutPage = pages.docs[0]
    console.log(`📄 Found about page: "${aboutPage.title}" (ID: ${aboutPage.id})`)

    // Convert markdown to Lexical format
    console.log('🔄 Converting content to Lexical format...')
    const lexicalContent = simpleMarkdownToLexical(aboutPageContent)

    // Update the page with the new content
    console.log('💾 Updating page in database...')
    await payload.update({
      collection: 'pages',
      id: aboutPage.id,
      data: {
        content: lexicalContent,
      },
    })

    console.log('✅ About Us page updated successfully!')
    console.log('🎉 You can now edit the About Us page in the admin panel without errors')
  } catch (error) {
    console.error('❌ Error fixing about page:', error)
  } finally {
    process.exit(0)
  }
}

fixAboutPage()

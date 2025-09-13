import { getPayload } from 'payload'
import config from './src/payload.config.js'

async function testServices() {
  try {
    const payloadConfig = await config.default
    const payload = await getPayload({ config: payloadConfig })

    console.log('Testing payload connection...')
    
    // Fetch service pages
    const services = await payload.find({
      collection: 'pages',
      where: {
        and: [
          {
            pageType: {
              equals: 'service',
            },
          },
        ],
      },
      sort: 'title',
      limit: 10,
    })

    console.log('Service pages found:', services.docs.length)
    console.log('Service pages:', services.docs.map(s => ({ title: s.title, slug: s.slug })))

  } catch (error) {
    console.error('Error:', error)
  }
}

testServices()

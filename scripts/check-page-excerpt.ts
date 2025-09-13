import dotenv from 'dotenv';
import { getPayload } from 'payload';
import config from '../src/payload.config';

// Load environment variables
dotenv.config();

async function checkPageExcerpt() {
  try {
    console.log('Initializing Payload...');
    const payload = await getPayload({ config });

    // Get the North Ogden page to check excerpt
    const pages = await payload.find({
      collection: 'pages',
      where: {
        slug: {
          equals: 'service-areas-north-ogden-ut-tree-service'
        }
      }
    });

    if (pages.docs.length > 0) {
      const page = pages.docs[0];
      console.log('Page Title:', page.title);
      console.log('Page Excerpt:', page.excerpt);
      console.log('Has excerpt:', !!page.excerpt);
    } else {
      console.log('Page not found');
    }
    
  } catch (error) {
    console.error('Error:', error);
  }
}

checkPageExcerpt().then(() => {
  process.exit(0);
}).catch((error) => {
  console.error('Script failed:', error);
  process.exit(1);
});

import dotenv from 'dotenv';
import { getPayload } from 'payload';
import config from '../src/payload.config';

// Load environment variables
dotenv.config();

async function checkPageContent() {
  try {
    console.log('Initializing Payload...');
    const payload = await getPayload({ config });

    // Get the North Ogden page content to see what we're working with
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
      console.log('\nCurrent Content:');
      console.log('================');
      console.log(page.content);
      console.log('================');
    } else {
      console.log('Page not found');
    }
    
  } catch (error) {
    console.error('Error:', error);
  }
}

checkPageContent().then(() => {
  process.exit(0);
}).catch((error) => {
  console.error('Script failed:', error);
  process.exit(1);
});

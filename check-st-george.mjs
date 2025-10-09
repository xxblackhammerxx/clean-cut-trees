import { getPayload } from 'payload';
import config from './src/payload.config.ts';

async function checkPage() {
  try {
    const payload = await getPayload({ config });
    
    console.log('Checking for St. George page...');
    
    const pages = await payload.find({
      collection: 'pages',
      where: {
        slug: {
          equals: 'service-areas-st-george-ut-tree-service',
        },
      },
      limit: 1,
    });
    
    console.log('Found pages:', pages.docs.length);
    if (pages.docs.length > 0) {
      console.log('Page exists:', pages.docs[0].title, pages.docs[0].slug);
    } else {
      console.log('Page not found. Checking similar slugs...');
      
      const similarPages = await payload.find({
        collection: 'pages',
        where: {
          slug: {
            like: '%george%',
          },
        },
        limit: 10,
      });
      
      console.log('Similar pages found:', similarPages.docs.length);
      similarPages.docs.forEach(page => {
        console.log('- ', page.title, '(', page.slug, ')');
      });
      
      // Let's also check all service area pages
      const serviceAreaPages = await payload.find({
        collection: 'pages',
        where: {
          slug: {
            like: 'service-areas-%',
          },
        },
        limit: 20,
      });
      
      console.log('\nAll service area pages:');
      serviceAreaPages.docs.forEach(page => {
        console.log('- ', page.title, '(', page.slug, ')');
      });
    }
    
    await payload.db.destroy();
  } catch (error) {
    console.error('Error:', error);
  }
}

checkPage();
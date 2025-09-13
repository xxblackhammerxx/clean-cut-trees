import dotenv from 'dotenv';
import { getPayload } from 'payload';
import config from '../src/payload.config';

// Load environment variables
dotenv.config();

// Service area slugs
const serviceAreaSlugs = [
  'service-areas-kaysville-ut-tree-service',
  'service-areas-layton-ut-tree-service', 
  'service-areas-bountiful-ut-tree-service',
  'service-areas-centerville-ut-tree-service',
  'service-areas-farmington-ut-tree-service',
  'service-areas-clearfield-ut-tree-service',
  'service-areas-ogden-ut-tree-service',
  'service-areas-roy-ut-tree-service',
  'service-areas-north-ogden-ut-tree-service',
  'service-areas-riverdale-ut-tree-service',
  'service-areas-north-salt-lake-ut-tree-service',
  'service-areas-south-weber-ut-tree-service',
  'service-areas-woods-cross-ut-tree-service'
];

async function cleanServiceAreaHeaders() {
  try {
    console.log('Initializing Payload...');
    const payload = await getPayload({ config });

    console.log('Starting service area header cleanup...');

    for (const slug of serviceAreaSlugs) {
      try {
        console.log(`\nProcessing ${slug}...`);
        
        // Find the existing page
        const existingPages = await payload.find({
          collection: 'pages',
          where: {
            slug: {
              equals: slug
            }
          }
        });

        if (existingPages.docs.length === 0) {
          console.error(`Page not found with slug: ${slug}`);
          continue;
        }

        const existingPage = existingPages.docs[0];
        console.log(`Found existing page: ${existingPage.title}`);

        // Get the current content
        const currentContent = existingPage.content || '';
        
        // Find the content after the first horizontal line or green separator
        // Look for patterns that indicate the separator
        let cleanedContent = currentContent;
        
        // Remove content before the main title that starts with "Professional Tree Service" or similar
        const professionalServiceMatch = cleanedContent.match(/## Professional Tree Service in .+?Utah/);
        if (professionalServiceMatch) {
          const startIndex = cleanedContent.indexOf(professionalServiceMatch[0]);
          cleanedContent = cleanedContent.substring(startIndex);
        } else {
          // Look for other patterns like "Expert Arborist Services"
          const expertServiceMatch = cleanedContent.match(/## Expert Arborist Services for .+/);
          if (expertServiceMatch) {
            const startIndex = cleanedContent.indexOf(expertServiceMatch[0]);
            cleanedContent = cleanedContent.substring(startIndex);
          }
        }

        // Update the page with cleaned content
        const updatedPage = await payload.update({
          collection: 'pages',
          id: existingPage.id,
          data: {
            ...existingPage,
            content: cleanedContent,
            _status: 'published'
          }
        });

        console.log(`✅ Successfully cleaned ${slug}`);
        console.log(`   Page ID: ${updatedPage.id}`);
        console.log(`   Title: ${updatedPage.title}`);
        
        // Add small delay to prevent overwhelming the system
        await new Promise(resolve => setTimeout(resolve, 1000));
        
      } catch (error) {
        console.error(`❌ Error cleaning ${slug}:`, error);
      }
    }

    console.log('\n🎉 Service area header cleanup completed!');
    console.log('All 13 service areas have been cleaned of header content above the green line.');
    
  } catch (error) {
    console.error('Fatal error:', error);
  }
}

// Run the cleanup
cleanServiceAreaHeaders().then(() => {
  console.log('Cleanup script finished.');
  process.exit(0);
}).catch((error) => {
  console.error('Script failed:', error);
  process.exit(1);
});

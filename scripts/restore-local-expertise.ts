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

async function restoreLocalExpertiseSections() {
  try {
    console.log('Initializing Payload...');
    const payload = await getPayload({ config });

    console.log('Restoring "## Local Expertise:" sections...');

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
        
        // Add back the "## Local Expertise:" header if it's missing
        if (!currentContent.startsWith('## Local Expertise:')) {
          const restoredContent = '## Local Expertise:' + currentContent;
          
          // Update the page with restored content
          const updatedPage = await payload.update({
            collection: 'pages',
            id: existingPage.id,
            data: {
              ...existingPage,
              content: restoredContent,
              _status: 'published'
            }
          });

          console.log(`✅ Successfully restored "## Local Expertise:" section for ${slug}`);
          console.log(`   Page ID: ${updatedPage.id}`);
        } else {
          console.log(`⚠️  "## Local Expertise:" section already present in ${slug}`);
        }
        
        // Add small delay to prevent overwhelming the system
        await new Promise(resolve => setTimeout(resolve, 1000));
        
      } catch (error) {
        console.error(`❌ Error processing ${slug}:`, error);
      }
    }

    console.log('\n🎉 Local Expertise section restoration completed!');
    
  } catch (error) {
    console.error('Fatal error:', error);
  }
}

// Run the restoration
restoreLocalExpertiseSections().then(() => {
  console.log('Restoration script finished.');
  process.exit(0);
}).catch((error) => {
  console.error('Script failed:', error);
  process.exit(1);
});

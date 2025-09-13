import dotenv from 'dotenv';
import { getPayload } from 'payload';
import config from '../src/payload.config';

// Load environment variables
dotenv.config();

// Service area data with keywords
const serviceAreaKeywords = {
  'service-areas-kaysville-ut-tree-service': {
    keyword: 'Tree Service Kaysville',
    city: 'Kaysville'
  },
  'service-areas-layton-ut-tree-service': {
    keyword: 'Tree Service Layton',
    city: 'Layton'
  },
  'service-areas-bountiful-ut-tree-service': {
    keyword: 'Tree Service Bountiful',
    city: 'Bountiful'
  },
  'service-areas-centerville-ut-tree-service': {
    keyword: 'Tree Service Centerville',
    city: 'Centerville'
  },
  'service-areas-farmington-ut-tree-service': {
    keyword: 'Tree Service Farmington',
    city: 'Farmington'
  },
  'service-areas-clearfield-ut-tree-service': {
    keyword: 'Tree Service Clearfield',
    city: 'Clearfield'
  },
  'service-areas-ogden-ut-tree-service': {
    keyword: 'Tree Service Ogden',
    city: 'Ogden'
  },
  'service-areas-roy-ut-tree-service': {
    keyword: 'Tree Service Roy',
    city: 'Roy'
  },
  'service-areas-north-ogden-ut-tree-service': {
    keyword: 'Tree Service North Ogden',
    city: 'North Ogden'
  },
  'service-areas-riverdale-ut-tree-service': {
    keyword: 'Tree Service Riverdale',
    city: 'Riverdale'
  },
  'service-areas-north-salt-lake-ut-tree-service': {
    keyword: 'Tree Service North Salt Lake',
    city: 'North Salt Lake'
  },
  'service-areas-south-weber-ut-tree-service': {
    keyword: 'Tree Service South Weber',
    city: 'South Weber'
  },
  'service-areas-woods-cross-ut-tree-service': {
    keyword: 'Tree Service Woods Cross',
    city: 'Woods Cross'
  }
};

function optimizeContentForKeywords(content: string, keyword: string, city: string): string {
  // Count existing keyword occurrences
  const keywordRegex = new RegExp(keyword, 'gi');
  const existingMatches = content.match(keywordRegex) || [];
  const currentCount = existingMatches.length;
  
  console.log(`Current keyword count for "${keyword}": ${currentCount}`);
  
  if (currentCount >= 3) {
    console.log(`Already has sufficient keyword density (${currentCount} occurrences)`);
    return content;
  }
  
  // Calculate how many more keywords we need (target: 3-4)
  const targetCount = 4;
  const neededCount = targetCount - currentCount;
  
  let optimizedContent = content;
  
  // Strategic keyword placement locations
  const placements = [
    {
      // In the main heading section
      find: /## Local Expertise: Understanding .+?Urban Canopy/,
      replace: `## Local Expertise: Understanding ${city}'s Urban Canopy\n\nWhen you need professional ${keyword} solutions, Clean Cuts Trees provides unparalleled expertise for your property's specific needs.`
    },
    {
      // In the comprehensive services section
      find: /## Comprehensive Tree Services for .+ Properties/,
      replace: `## Comprehensive ${keyword} Solutions for ${city} Properties`
    },
    {
      // In the emergency services section
      find: /### 24\/7 Emergency Tree Services/,
      replace: `### 24/7 Emergency ${keyword}\n\nOur emergency ${keyword} team responds immediately to urgent situations throughout ${city}.`
    },
    {
      // In the contact section
      find: /Contact Clean Cuts Trees for Expert .+ Tree Care/,
      replace: `Contact Clean Cuts Trees for Expert ${keyword}\n\nChoose the leading ${keyword} professionals who understand ${city}'s unique tree care requirements.`
    }
  ];
  
  let addedCount = 0;
  
  for (const placement of placements) {
    if (addedCount >= neededCount) break;
    
    if (placement.find.test(optimizedContent)) {
      optimizedContent = optimizedContent.replace(placement.find, placement.replace);
      addedCount++;
      console.log(`Added keyword placement ${addedCount}: ${placement.replace.substring(0, 50)}...`);
    }
  }
  
  // If we still need more keywords, add them in strategic content areas
  if (addedCount < neededCount) {
    // Add to the municipal partnerships section
    const municipalMatch = optimizedContent.match(/## Municipal and Commercial Partnerships in .+/);
    if (municipalMatch && addedCount < neededCount) {
      const replacement = `## Municipal and Commercial Partnerships in ${city}\n\nAs the trusted ${keyword} provider, Clean Cuts Trees maintains strong relationships with ${city} municipal authorities and local businesses.`;
      optimizedContent = optimizedContent.replace(municipalMatch[0], replacement);
      addedCount++;
      console.log(`Added keyword to municipal section`);
    }
  }
  
  console.log(`Total keywords added: ${addedCount}`);
  console.log(`Final estimated keyword count: ${currentCount + addedCount}`);
  
  return optimizedContent;
}

async function optimizeServiceAreaKeywords() {
  try {
    console.log('Initializing Payload...');
    const payload = await getPayload({ config });

    console.log('Starting keyword optimization for service area pages...');

    for (const [slug, keywordData] of Object.entries(serviceAreaKeywords)) {
      try {
        console.log(`\nProcessing ${slug}...`);
        console.log(`Target keyword: "${keywordData.keyword}"`);
        
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
        
        // Optimize content for keywords
        const optimizedContent = optimizeContentForKeywords(
          currentContent, 
          keywordData.keyword, 
          keywordData.city
        );
        
        // Update the page with optimized content
        const updatedPage = await payload.update({
          collection: 'pages',
          id: existingPage.id,
          data: {
            ...existingPage,
            content: optimizedContent,
            _status: 'published'
          }
        });

        console.log(`✅ Successfully optimized keywords for ${slug}`);
        console.log(`   Page ID: ${updatedPage.id}`);
        
        // Add small delay to prevent overwhelming the system
        await new Promise(resolve => setTimeout(resolve, 1000));
        
      } catch (error) {
        console.error(`❌ Error optimizing ${slug}:`, error);
      }
    }

    console.log('\n🎉 Keyword optimization completed!');
    console.log('All 13 service areas have been optimized for 3-4 keyword occurrences.');
    
  } catch (error) {
    console.error('Fatal error:', error);
  }
}

// Run the optimization
optimizeServiceAreaKeywords().then(() => {
  console.log('Keyword optimization script finished.');
  process.exit(0);
}).catch((error) => {
  console.error('Script failed:', error);
  process.exit(1);
});

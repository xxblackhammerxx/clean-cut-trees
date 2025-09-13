// Script to find and update all service area pages automatically
import dotenv from 'dotenv';
import { getPayload } from 'payload';

// Load environment variables
dotenv.config();

async function updateServiceAreaPages() {
  let payload;
  
  try {
    console.log('🚀 Starting automated service area page updates...');
    
    // Import config dynamically to ensure env vars are loaded
    const { default: config } = await import('./src/payload.config.js');
    
    payload = await getPayload({ config });
    
    console.log('✅ Payload connected successfully!');
    
    // Find all service area pages (they have slugs starting with 'service-areas-')
    const serviceAreaPages = await payload.find({
      collection: 'pages',
      where: {
        slug: {
          like: 'service-areas-%',
        },
      },
      limit: 100, // Should cover all service area pages
    });
    
    console.log(`📍 Found ${serviceAreaPages.totalDocs} service area pages`);
    
    let updatedCount = 0;
    
    for (const page of serviceAreaPages.docs) {
      console.log(`\n🔄 Processing: ${page.title} (${page.slug})`);
      
      // Extract city name from slug (remove 'service-areas-' prefix)
      const citySlug = page.slug.replace('service-areas-', '');
      const cityName = citySlug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
      
      console.log(`   City: ${cityName}`);
      
      // Check current H1 in content
      let needsUpdate = false;
      let updatedContent = page.content;
      
      // For markdown content
      if (typeof page.content === 'string') {
        // Check if H1 already has proper format
        const h1Match = page.content.match(/^#\s*(.+)/m);
        if (h1Match) {
          const currentH1 = h1Match[1].trim();
          const properH1 = `Tree Service in ${cityName}, UT`;
          
          if (currentH1 !== properH1) {
            console.log(`   Current H1: "${currentH1}"`);
            console.log(`   New H1: "${properH1}"`);
            
            updatedContent = page.content.replace(/^#\s*(.+)/m, `# ${properH1}`);
            needsUpdate = true;
          } else {
            console.log(`   ✅ H1 already correct: "${currentH1}"`);
          }
        } else {
          // No H1 found, add one at the beginning
          const properH1 = `Tree Service in ${cityName}, UT`;
          console.log(`   Adding H1: "${properH1}"`);
          updatedContent = `# ${properH1}\n\n${page.content}`;
          needsUpdate = true;
        }
      }
      
      // For Lexical/rich text content
      else if (page.content && page.content.root && page.content.root.children) {
        // Find and update H1 in lexical content
        const children = [...page.content.root.children];
        let h1Found = false;
        
        for (let i = 0; i < children.length; i++) {
          const node = children[i];
          if (node.type === 'heading' && node.tag === 'h1') {
            const currentH1 = node.children?.map((child) => child.text || '').join('');
            const properH1 = `Tree Service in ${cityName}, UT`;
            
            if (currentH1 !== properH1) {
              console.log(`   Current H1: "${currentH1}"`);
              console.log(`   New H1: "${properH1}"`);
              
              // Update the H1 text
              children[i] = {
                ...node,
                children: [{ text: properH1, type: 'text' }],
              };
              needsUpdate = true;
            } else {
              console.log(`   ✅ H1 already correct: "${currentH1}"`);
            }
            h1Found = true;
            break;
          }
        }
        
        // If no H1 found, add one at the beginning
        if (!h1Found) {
          const properH1 = `Tree Service in ${cityName}, UT`;
          console.log(`   Adding H1: "${properH1}"`);
          
          const newH1Node = {
            type: 'heading',
            tag: 'h1',
            children: [{ text: properH1, type: 'text' }],
          };
          
          children.unshift(newH1Node);
          needsUpdate = true;
        }
        
        if (needsUpdate) {
          updatedContent = {
            ...page.content,
            root: {
              ...page.content.root,
              children: children,
            },
          };
        }
      }
      
      // Update the page if needed
      if (needsUpdate) {
        try {
          await payload.update({
            collection: 'pages',
            id: page.id,
            data: {
              content: updatedContent,
            },
          });
          
          console.log(`   ✅ Updated successfully!`);
          updatedCount++;
        } catch (updateError) {
          console.error(`   ❌ Update failed:`, updateError.message);
        }
      } else {
        console.log(`   ⏭️  No update needed`);
      }
    }
    
    console.log(`\n🎉 Update complete! Updated ${updatedCount} out of ${serviceAreaPages.totalDocs} pages`);
    
    // Close the database connection
    await payload.db.destroy();
    console.log('🔒 Database connection closed');
    
    // Force exit to ensure script terminates
    process.exit(0);
    
  } catch (error) {
    console.error('❌ Error:', error.message);
    console.error('Stack:', error.stack);
    
    // Try to close connection if it exists
    try {
      if (payload && payload.db) {
        await payload.db.destroy();
      }
    } catch (closeError) {
      console.error('Error closing connection:', closeError.message);
    }
    
    // Exit with error code
    process.exit(1);
  }
}

updateServiceAreaPages();

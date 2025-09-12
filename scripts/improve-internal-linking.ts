import dotenv from 'dotenv'
import { getPayload } from 'payload'
import config from '../src/payload.config'

// Load environment variables
dotenv.config()

// Internal linking improvements according to SEO audit
async function improveInternalLinking() {
  try {
    const payloadConfig = await config
    const payload = await getPayload({ config: payloadConfig })

    console.log('Improving internal linking throughout the site...')

    // Get all service pages to link to
    const servicePages = await payload.find({
      collection: 'pages',
      where: {
        pageType: {
          equals: 'service'
        }
      }
    })

    // Get all service area pages
    const serviceAreaPages = await payload.find({
      collection: 'pages',
      where: {
        pageType: {
          equals: 'service-area'
        }
      }
    })

    console.log(`Found ${servicePages.docs.length} service pages and ${serviceAreaPages.docs.length} service area pages`)

    // Update each service page to include links to top cities and other services
    for (const servicePage of servicePages.docs) {
      console.log(`Updating internal links for: ${servicePage.title}`)
      
      // Add internal linking content based on the service type
      let additionalContent = ''
      
      if (servicePage.slug === 'services-emergency-tree-damage' || servicePage.slug === 'services-emergency-tree-service') {
        additionalContent = `

## Emergency Tree Service Coverage Areas

We provide 24/7 emergency tree service throughout Utah including:

- [Emergency Tree Service in Kaysville](/service-areas/kaysville-ut-tree-service) - Fast response for Kaysville residents
- [Emergency Tree Service in Layton](/service-areas/layton-ut-tree-service) - Immediate help in Layton
- [Emergency Tree Service in Bountiful](/service-areas/bountiful-ut-tree-service) - Rapid response for Bountiful
- [Emergency Tree Service in Ogden](/service-areas/ogden-ut-tree-service) - Quick emergency help in Ogden
- [Emergency Tree Service in Roy](/service-areas/roy-ut-tree-service) - Fast emergency response in Roy
- [Emergency Tree Service in Clearfield](/service-areas/clearfield-ut-tree-service) - Immediate assistance in Clearfield
- [Emergency Tree Service in Farmington](/service-areas/farmington-ut-tree-service) - Rapid help in Farmington
- [Emergency Tree Service in North Ogden](/service-areas/north-ogden-ut-tree-service) - Quick response in North Ogden

## Related Tree Services

When you need emergency tree service, you may also need:

- [Professional Tree Removal](/services/tree-removal) - Complete tree removal services
- [Storm Damage Cleanup](/services/storm-clean-up) - Comprehensive storm cleanup
- [Tree Trimming & Pruning](/services/tree-trimming) - Preventive tree maintenance
- [Municipal Tree Service](/services/municipal-tree-service) - Commercial and municipal tree care
- [Land Clearing Services](/services/professional-land-clearing-services) - Site preparation and clearing`

      } else if (servicePage.slug === 'services-tree-removal') {
        additionalContent = `

## Tree Removal Service Areas

Professional tree removal services available throughout Utah:

- [Tree Removal in Kaysville](/service-areas/kaysville-ut-tree-service) - Expert tree removal in Kaysville
- [Tree Removal in Layton](/service-areas/layton-ut-tree-service) - Professional removal services in Layton
- [Tree Removal in Bountiful](/service-areas/bountiful-ut-tree-service) - Safe tree removal in Bountiful
- [Tree Removal in Ogden](/service-areas/ogden-ut-tree-service) - Certified arborists in Ogden
- [Tree Removal in Roy](/service-areas/roy-ut-tree-service) - Licensed tree removal in Roy
- [Tree Removal in Clearfield](/service-areas/clearfield-ut-tree-service) - Professional service in Clearfield
- [Tree Removal in Farmington](/service-areas/farmington-ut-tree-service) - Expert removal in Farmington
- [Tree Removal in North Ogden](/service-areas/north-ogden-ut-tree-service) - Reliable service in North Ogden

## Complete Tree Care Services

In addition to tree removal, we provide:

- [24/7 Emergency Tree Service](/services/emergency-tree-service) - Immediate emergency response
- [Tree Trimming & Pruning](/services/tree-trimming) - Professional tree maintenance
- [Storm Damage Cleanup](/services/storm-clean-up) - Post-storm tree services
- [Municipal Tree Service](/services/municipal-tree-service) - Commercial tree care
- [Land Clearing Services](/services/professional-land-clearing-services) - Site preparation services`

      } else if (servicePage.slug === 'services-tree-trimming') {
        additionalContent = `

## Tree Trimming & Pruning Coverage Areas

Professional tree trimming and pruning services available in:

- [Tree Trimming in Kaysville](/service-areas/kaysville-ut-tree-service) - Expert pruning in Kaysville
- [Tree Trimming in Layton](/service-areas/layton-ut-tree-service) - Professional trimming in Layton
- [Tree Trimming in Bountiful](/service-areas/bountiful-ut-tree-service) - Quality trimming in Bountiful
- [Tree Trimming in Ogden](/service-areas/ogden-ut-tree-service) - ISA-certified trimming in Ogden
- [Tree Trimming in Roy](/service-areas/roy-ut-tree-service) - Expert pruning in Roy
- [Tree Trimming in Clearfield](/service-areas/clearfield-ut-tree-service) - Professional trimming in Clearfield
- [Tree Trimming in Farmington](/service-areas/farmington-ut-tree-service) - Quality pruning in Farmington
- [Tree Trimming in North Ogden](/service-areas/north-ogden-ut-tree-service) - Expert trimming in North Ogden

## Full Tree Care Solutions

Complement your tree trimming with our other services:

- [Emergency Tree Service](/services/emergency-tree-service) - 24/7 emergency tree care
- [Professional Tree Removal](/services/tree-removal) - Safe tree removal services
- [Storm Damage Cleanup](/services/storm-clean-up) - Storm damage restoration
- [Municipal Tree Service](/services/municipal-tree-service) - Commercial tree maintenance
- [Land Clearing Services](/services/professional-land-clearing-services) - Site preparation`

      } else if (servicePage.slug === 'services-storm-clean-up') {
        additionalContent = `

## Storm Damage Cleanup Service Areas

24/7 storm damage cleanup available throughout:

- [Storm Cleanup in Kaysville](/service-areas/kaysville-ut-tree-service) - Emergency storm response in Kaysville
- [Storm Cleanup in Layton](/service-areas/layton-ut-tree-service) - Rapid storm cleanup in Layton
- [Storm Cleanup in Bountiful](/service-areas/bountiful-ut-tree-service) - Professional storm services in Bountiful
- [Storm Cleanup in Ogden](/service-areas/ogden-ut-tree-service) - Emergency cleanup in Ogden
- [Storm Cleanup in Roy](/service-areas/roy-ut-tree-service) - Fast storm response in Roy
- [Storm Cleanup in Clearfield](/service-areas/clearfield-ut-tree-service) - Storm damage help in Clearfield
- [Storm Cleanup in Farmington](/service-areas/farmington-ut-tree-service) - Emergency services in Farmington
- [Storm Cleanup in North Ogden](/service-areas/north-ogden-ut-tree-service) - Storm cleanup in North Ogden

## Related Emergency Services

When storm damage occurs, you may also need:

- [24/7 Emergency Tree Service](/services/emergency-tree-service) - Immediate emergency response
- [Professional Tree Removal](/services/tree-removal) - Safe removal of storm-damaged trees
- [Tree Trimming & Pruning](/services/tree-trimming) - Preventive maintenance to reduce storm damage
- [Municipal Tree Service](/services/municipal-tree-service) - Commercial storm response
- [Land Clearing Services](/services/professional-land-clearing-services) - Large-scale cleanup`

      } else if (servicePage.slug === 'services-municipal-tree-service') {
        additionalContent = `

## Municipal Tree Service Coverage

Professional municipal tree services available for governments and organizations in:

- [Municipal Services in Kaysville](/service-areas/kaysville-ut-tree-service) - City tree maintenance in Kaysville
- [Municipal Services in Layton](/service-areas/layton-ut-tree-service) - Government tree care in Layton
- [Municipal Services in Bountiful](/service-areas/bountiful-ut-tree-service) - Municipal tree services in Bountiful
- [Municipal Services in Ogden](/service-areas/ogden-ut-tree-service) - City tree care in Ogden
- [Municipal Services in Roy](/service-areas/roy-ut-tree-service) - Municipal maintenance in Roy
- [Municipal Services in Clearfield](/service-areas/clearfield-ut-tree-service) - Government tree services in Clearfield
- [Municipal Services in Farmington](/service-areas/farmington-ut-tree-service) - Municipal care in Farmington
- [Municipal Services in North Ogden](/service-areas/north-ogden-ut-tree-service) - City services in North Ogden

## Supporting Municipal Tree Care

Our municipal clients also utilize:

- [Emergency Tree Service](/services/emergency-tree-service) - 24/7 emergency municipal response
- [Professional Tree Removal](/services/tree-removal) - Municipal tree removal services
- [Tree Trimming & Pruning](/services/tree-trimming) - Regular municipal maintenance
- [Storm Damage Cleanup](/services/storm-clean-up) - Municipal storm response
- [Land Clearing Services](/services/professional-land-clearing-services) - Municipal development clearing`

      } else if (servicePage.slug === 'services-professional-land-clearing-services') {
        additionalContent = `

## Land Clearing Service Areas

Professional land clearing services available throughout:

- [Land Clearing in Kaysville](/service-areas/kaysville-ut-tree-service) - Site preparation in Kaysville
- [Land Clearing in Layton](/service-areas/layton-ut-tree-service) - Development clearing in Layton
- [Land Clearing in Bountiful](/service-areas/bountiful-ut-tree-service) - Professional clearing in Bountiful
- [Land Clearing in Ogden](/service-areas/ogden-ut-tree-service) - Site preparation in Ogden
- [Land Clearing in Roy](/service-areas/roy-ut-tree-service) - Land development in Roy
- [Land Clearing in Clearfield](/service-areas/clearfield-ut-tree-service) - Professional clearing in Clearfield
- [Land Clearing in Farmington](/service-areas/farmington-ut-tree-service) - Site development in Farmington
- [Land Clearing in North Ogden](/service-areas/north-ogden-ut-tree-service) - Land preparation in North Ogden

## Comprehensive Site Preparation

Land clearing projects often require additional services:

- [Professional Tree Removal](/services/tree-removal) - Selective tree removal for development
- [Tree Trimming & Pruning](/services/tree-trimming) - Preserving valuable trees during clearing
- [Emergency Tree Service](/services/emergency-tree-service) - Emergency response during clearing
- [Storm Damage Cleanup](/services/storm-clean-up) - Post-storm site restoration
- [Municipal Tree Service](/services/municipal-tree-service) - Commercial development support`
      }

      // If we have additional content, append it to the existing content
      if (additionalContent && servicePage.content) {
        const currentContent = servicePage.content

        // Check if content is a string (markdown) or object (rich text)
        if (typeof currentContent === 'string') {
          const updatedContent = currentContent + additionalContent
          
          await payload.update({
            collection: 'pages',
            id: servicePage.id,
            data: {
              content: updatedContent
            }
          })
        } else if (currentContent && currentContent.root && currentContent.root.children) {
          // Add the additional content as a new paragraph
          const additionalParagraph = {
            type: 'paragraph',
            format: '',
            indent: 0,
            version: 1,
            children: [
              {
                type: 'text',
                text: additionalContent,
                format: 0,
                version: 1
              }
            ]
          }

          const updatedContent = {
            ...currentContent,
            root: {
              ...currentContent.root,
              children: [...currentContent.root.children, additionalParagraph]
            }
          }

          await payload.update({
            collection: 'pages',
            id: servicePage.id,
            data: {
              content: updatedContent
            }
          })
        }

        console.log(`✅ Added internal links to ${servicePage.title}`)
      }
    }

    console.log('✅ Internal linking improvements completed!')

  } catch (error) {
    console.error('❌ Error improving internal linking:', error)
  }
}

// Add city cluster links to service area pages
async function addCityClusterLinks() {
  try {
    const payloadConfig = await config
    const payload = await getPayload({ config: payloadConfig })

    console.log('Adding city cluster links to service area pages...')

    // Define city clusters for cross-linking
    const cityGroups = {
      'Davis County Cities': [
        { name: 'Kaysville', slug: 'service-areas-kaysville-ut-tree-service' },
        { name: 'Layton', slug: 'service-areas-layton-ut-tree-service' },
        { name: 'Bountiful', slug: 'service-areas-bountiful-ut-tree-service' },
        { name: 'Farmington', slug: 'service-areas-farmington-ut-tree-service' },
        { name: 'Centerville', slug: 'service-areas-centerville-ut-tree-service' },
        { name: 'Clearfield', slug: 'service-areas-clearfield-ut-tree-service' },
        { name: 'Fruit Heights', slug: 'service-areas-fruit-heights-ut-tree-service' },
        { name: 'West Bountiful', slug: 'service-areas-west-bountiful-ut-tree-service' },
        { name: 'Woods Cross', slug: 'service-areas-woods-cross-ut-tree-service' }
      ],
      'Weber County Cities': [
        { name: 'Ogden', slug: 'service-areas-ogden-ut-tree-service' },
        { name: 'Roy', slug: 'service-areas-roy-ut-tree-service' },
        { name: 'North Ogden', slug: 'service-areas-north-ogden-ut-tree-service' },
        { name: 'South Ogden', slug: 'service-areas-south-ogden-ut-tree-service' },
        { name: 'Riverdale', slug: 'service-areas-riverdale-ut-tree-service' },
        { name: 'Washington Terrace', slug: 'service-areas-washington-terrace-ut-tree-service' },
        { name: 'Clinton', slug: 'service-areas-clinton-ut-tree-service' },
        { name: 'West Haven', slug: 'service-areas-west-haven-ut-tree-service' },
        { name: 'Plain City', slug: 'service-areas-plain-city-ut-tree-service' },
        { name: 'Hooper', slug: 'service-areas-hooper-ut-tree-service' },
        { name: 'Farr West', slug: 'service-areas-farr-west-ut-tree-service' },
        { name: 'Pleasant View', slug: 'service-areas-pleasant-view-ut-tree-service' },
        { name: 'Harrisville', slug: 'service-areas-harrisville-ut-tree-service' },
        { name: 'Sunset', slug: 'service-areas-sunset-ut-tree-service' }
      ]
    }

    // Get all service area pages to update
    const serviceAreaPages = await payload.find({
      collection: 'pages',
      where: {
        pageType: {
          equals: 'service-area'
        }
      }
    })

    for (const page of serviceAreaPages.docs) {
      // Determine which county this city belongs to
      let countyGroup: string | null = null
      let currentCity: { name: string; slug: string } | null = null

      for (const [groupName, cities] of Object.entries(cityGroups)) {
        const foundCity = cities.find(city => city.slug === page.slug)
        if (foundCity) {
          countyGroup = groupName
          currentCity = foundCity
          break
        }
      }

      if (countyGroup && currentCity) {
        const otherCities = cityGroups[countyGroup as keyof typeof cityGroups].filter(city => city.slug !== page.slug)
        
        const nearbyLinksContent = `

## Nearby Tree Service Areas in ${countyGroup.replace(' Cities', '')}

We also provide professional tree services in these nearby communities:

${otherCities.slice(0, 8).map(city => 
  `- [Tree Service in ${city.name}](/service-areas/${city.slug.replace('service-areas-', '')}) - Professional tree care in ${city.name}`
).join('\n')}

## Complete Tree Services Available

Our certified arborists provide comprehensive tree care throughout ${countyGroup.replace(' Cities', '')}:

- [Emergency Tree Service](/services/emergency-tree-service) - 24/7 emergency response
- [Professional Tree Removal](/services/tree-removal) - Safe and efficient tree removal
- [Tree Trimming & Pruning](/services/tree-trimming) - Expert tree maintenance
- [Storm Damage Cleanup](/services/storm-clean-up) - Storm damage restoration
- [Municipal Tree Service](/services/municipal-tree-service) - Commercial tree care
- [Land Clearing Services](/services/professional-land-clearing-services) - Site preparation

Call (801) 473-7548 for professional tree services in ${currentCity.name} and throughout ${countyGroup.replace(' Cities', '')}.`

        // Update the page content
        if (page.content) {
          if (typeof page.content === 'string') {
            const updatedContent = page.content + nearbyLinksContent
            
            await payload.update({
              collection: 'pages',
              id: page.id,
              data: {
                content: updatedContent
              }
            })
          } else if (page.content && page.content.root && page.content.root.children) {
            const additionalParagraph = {
              type: 'paragraph',
              format: '',
              indent: 0,
              version: 1,
              children: [
                {
                  type: 'text',
                  text: nearbyLinksContent,
                  format: 0,
                  version: 1
                }
              ]
            }

            const updatedContent = {
              ...page.content,
              root: {
                ...page.content.root,
                children: [...page.content.root.children, additionalParagraph]
              }
            }

            await payload.update({
              collection: 'pages',
              id: page.id,
              data: {
                content: updatedContent
              }
            })
          }

          console.log(`✅ Added city cluster links to ${page.title}`)
        }
      }
    }

    console.log('✅ City cluster linking completed!')

  } catch (error) {
    console.error('❌ Error adding city cluster links:', error)
  }
}

// Main function
async function main() {
  console.log('🚀 Starting internal linking improvements...')
  
  await improveInternalLinking()
  await addCityClusterLinks()
  
  console.log('🎉 Internal linking improvements completed!')
}

// Check if this is the main module (ES module way)
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

if (process.argv[1] === __filename) {
  main()
}

export { improveInternalLinking, addCityClusterLinks }

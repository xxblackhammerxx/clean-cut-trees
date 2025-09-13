import { getPayload } from 'payload'
import config from '../src/payload.config'

// Area-specific content data
const areaContent = {
  'kaysville-ut-tree-service': {
    cityName: 'Kaysville',
    county: 'Davis County',
    localFeatures: [
      'Established neighborhoods with mature shade trees',
      'Historic downtown area requiring careful tree preservation',
      'New residential developments needing tree planning',
      'Close proximity to Great Salt Lake affecting tree health'
    ],
    commonTrees: [
      'Norway Maple',
      'Blue Spruce',
      'Lombardy Poplar',
      'Honeylocust',
      'Austrian Pine'
    ],
    commonIssues: [
      'Wind damage from Great Salt Lake storms',
      'Salt spray damage to foliage',
      'Mature tree maintenance in older neighborhoods',
      'Power line clearance in residential areas'
    ],
    localInfo: 'Kaysville\'s tree canopy includes many mature trees planted decades ago that now require professional maintenance. The city\'s location near the Great Salt Lake creates unique challenges including salt spray damage and strong winds that can affect tree health.',
    services: [
      'Regular maintenance for mature neighborhood trees',
      'Emergency storm damage response',
      'Tree selection consultation for new properties',
      'Power line clearance services',
      'Disease and pest management for salt-affected trees'
    ]
  },
  'layton-ut-tree-service': {
    cityName: 'Layton',
    county: 'Davis County',
    localFeatures: [
      'Mix of established and developing neighborhoods',
      'Commercial corridors requiring landscape maintenance',
      'Parks and recreational areas with extensive tree cover',
      'Hill Air Force Base proximity affecting regulations'
    ],
    commonTrees: [
      'Green Ash',
      'Norway Maple',
      'Colorado Spruce',
      'Siberian Elm',
      'Cottonwood'
    ],
    commonIssues: [
      'Emerald Ash Borer concerns',
      'Large cottonwood management',
      'Commercial property tree maintenance',
      'Storm damage cleanup'
    ],
    localInfo: 'Layton\'s growing community has a diverse urban forest that includes both native and planted species. The city\'s proximity to Hill Air Force Base and its expanding commercial areas create specific tree care needs.',
    services: [
      'Commercial tree maintenance programs',
      'Emerald Ash Borer prevention and treatment',
      'Large tree removal and replacement',
      'Municipal tree care services',
      'New development tree planning'
    ]
  },
  'bountiful-ut-tree-service': {
    cityName: 'Bountiful',
    county: 'Davis County',
    localFeatures: [
      'Historic downtown with heritage trees',
      'Hillside properties with challenging access',
      'Established neighborhoods with mature canopy',
      'Beautiful bench area with spectacular views'
    ],
    commonTrees: [
      'Silver Maple',
      'Blue Spruce',
      'Austrian Pine',
      'Honey Locust',
      'London Plane Tree'
    ],
    commonIssues: [
      'Heritage tree preservation',
      'Hillside tree access challenges',
      'Root damage to older infrastructure',
      'Beetle infestations in pine trees'
    ],
    localInfo: 'Bountiful\'s tree care needs are shaped by its historic character and topography. Many properties feature mature trees that require specialized care, while hillside locations present unique access challenges.',
    services: [
      'Heritage tree preservation and care',
      'Specialized hillside tree services',
      'Root management for infrastructure protection',
      'Pine beetle prevention and treatment',
      'Crane services for difficult access areas'
    ]
  },
  'ogden-ut-tree-service': {
    cityName: 'Ogden',
    county: 'Weber County',
    localFeatures: [
      'Historic downtown district',
      'Weber State University campus',
      'Diverse neighborhoods from historic to modern',
      'Ogden River corridor with riparian trees'
    ],
    commonTrees: [
      'American Elm',
      'Silver Maple',
      'Cottonwood',
      'Box Elder',
      'Russian Olive (invasive)'
    ],
    commonIssues: [
      'Dutch elm disease management',
      'Invasive species removal',
      'Large cottonwood maintenance',
      'Urban forest renewal'
    ],
    localInfo: 'Ogden\'s urban forest reflects its rich history and includes both valuable heritage trees and newer plantings. The city actively works to maintain and improve its tree canopy while addressing challenges from aging infrastructure.',
    services: [
      'Dutch elm disease prevention',
      'Invasive species management',
      'Historic district tree care',
      'University campus tree maintenance',
      'River corridor tree management'
    ]
  },
  'roy-ut-tree-service': {
    cityName: 'Roy',
    county: 'Weber County',
    localFeatures: [
      'Suburban residential neighborhoods',
      'Agricultural transition areas',
      'Family-friendly community parks',
      'Mix of mature and newly planted trees'
    ],
    commonTrees: [
      'Norway Maple',
      'Green Ash',
      'Siberian Elm',
      'Colorado Spruce',
      'Flowering Pear'
    ],
    commonIssues: [
      'New subdivision tree establishment',
      'Ash tree health monitoring',
      'Removal of declining siberian elms',
      'Residential property tree planning'
    ],
    localInfo: 'Roy\'s tree care needs center around its residential character and growth. Many areas feature newer trees that require establishment care, while older neighborhoods have mature trees needing maintenance.',
    services: [
      'Young tree establishment and care',
      'Residential tree health programs',
      'Property value enhancement through tree care',
      'Safe tree removal in neighborhood settings',
      'Tree selection for new landscapes'
    ]
  },
  'farmington-ut-tree-service': {
    cityName: 'Farmington',
    county: 'Davis County',
    localFeatures: [
      'Station Park commercial development',
      'Historic agricultural heritage',
      'Lagoon amusement park area',
      'Antelope Island State Park proximity'
    ],
    commonTrees: [
      'London Plane Tree',
      'Norway Maple',
      'Blue Spruce',
      'Ornamental Pear',
      'Honeylocust'
    ],
    commonIssues: [
      'Commercial landscape maintenance',
      'Wind exposure from Great Salt Lake',
      'Tourist area tree safety',
      'Drought stress management'
    ],
    localInfo: 'Farmington combines commercial development with residential neighborhoods, creating diverse tree care needs. The area\'s exposure to Great Salt Lake winds and its growing commercial sector require specialized services.',
    services: [
      'Commercial property tree management',
      'Wind-resistant tree selection',
      'Tourist area safety inspections',
      'Drought-tolerant landscaping',
      'Large-scale tree installation'
    ]
  }
}

async function generateUniqueServiceAreaContent() {
  try {
    const payloadConfig = await config
    const payload = await getPayload({ config: payloadConfig })

    // Get all service area pages
    const serviceAreas = await payload.find({
      collection: 'pages',
      where: {
        pageType: {
          equals: 'service-area'
        }
      },
      limit: 100
    })

    console.log(`Found ${serviceAreas.docs.length} service area pages`)

    for (const page of serviceAreas.docs) {
      // Extract the area slug without the service-areas- prefix
      const areaSlug = page.slug.replace('service-areas-', '')
      const areaData = areaContent[areaSlug as keyof typeof areaContent]
      
      if (!areaData) {
        console.log(`No content data found for ${areaSlug}, skipping...`)
        continue
      }

      console.log(`Updating content for ${areaData.cityName}...`)

      // Generate unique content for this area
      const uniqueContent = `
# Professional Tree Service in ${areaData.cityName}, Utah

Welcome to Clean Cuts Trees, your trusted tree service provider in ${areaData.cityName}. We provide comprehensive tree care services throughout ${areaData.county}, with specialized knowledge of the local environment and tree species.

## Local Tree Care Expertise in ${areaData.cityName}

${areaData.localInfo}

### What Makes ${areaData.cityName} Unique for Tree Care:

${areaData.localFeatures.map(feature => `- ${feature}`).join('\n')}

## Common Tree Species We Service in ${areaData.cityName}

Our certified arborists are experienced in caring for the tree species commonly found in ${areaData.cityName}:

${areaData.commonTrees.map(tree => `- **${tree}** - Professional pruning, health assessment, and maintenance`).join('\n')}

## Tree Care Challenges Specific to ${areaData.cityName}

${areaData.commonIssues.map(issue => `- ${issue}`).join('\n')}

## Our ${areaData.cityName} Tree Services

We provide specialized tree care services designed for ${areaData.cityName}'s unique needs:

${areaData.services.map(service => `### ${service}
Professional ${service.toLowerCase()} tailored to ${areaData.cityName}'s specific environmental conditions and local regulations.`).join('\n\n')}

## Why Choose Clean Cuts Trees in ${areaData.cityName}?

- **Local Expertise**: Deep understanding of ${areaData.cityName}'s unique tree care needs
- **Licensed & Insured**: Fully licensed tree care professionals serving ${areaData.county}
- **24/7 Emergency Service**: Available for storm damage and emergency tree situations
- **Free Estimates**: No-cost consultations for all tree service needs
- **Community Focused**: Proud to serve ${areaData.cityName} residents and businesses

## Frequently Asked Questions About Tree Service in ${areaData.cityName}

### What are the best trees to plant in ${areaData.cityName}?
We recommend species that thrive in ${areaData.county}'s climate, including drought-tolerant varieties that can handle local conditions.

### When is the best time to trim trees in ${areaData.cityName}?
Late winter to early spring is ideal for most species, though emergency pruning can be done year-round.

### Do you provide emergency tree service in ${areaData.cityName}?
Yes! We offer 24/7 emergency tree service throughout ${areaData.cityName} and all of ${areaData.county}.

### How often should trees be inspected in ${areaData.cityName}?
We recommend annual inspections, with additional checks after severe weather events common to the area.

## Contact Us for ${areaData.cityName} Tree Service

Ready to schedule professional tree care in ${areaData.cityName}? Our team is standing by to help with all your tree service needs.

**Call (801) 473-7548** for immediate assistance or to schedule your free estimate.

We proudly serve ${areaData.cityName} and all surrounding areas in ${areaData.county}, Utah.
`

      // Update the page content
      await payload.update({
        collection: 'pages',
        id: page.id,
        data: {
          content: uniqueContent,
          excerpt: `Professional tree service in ${areaData.cityName}, ${areaData.county}. Licensed arborists providing tree removal, trimming, and emergency services. Free estimates available.`
        }
      })

      console.log(`✓ Updated ${areaData.cityName} service area page`)
    }

    console.log('All service area pages updated successfully!')

  } catch (error) {
    console.error('Error updating service area content:', error)
  }
}

// Run the script
generateUniqueServiceAreaContent()

import dotenv from 'dotenv'
import { getPayload } from 'payload'

// Load environment variables first
dotenv.config()

// Ensure environment variables are available
if (!process.env.PAYLOAD_SECRET) {
  console.error('❌ PAYLOAD_SECRET environment variable is not set')
  process.exit(1)
}

if (!process.env.DATABASE_URI) {
  console.error('❌ DATABASE_URI environment variable is not set')
  process.exit(1)
}

console.log('✅ Environment variables loaded')

interface CityPageData {
  title: string
  slug: string
  seoTitle: string
  seoDescription: string
  h1: string
  cityName: string
  content: string
}

// Missing cities to create
const missingCities: CityPageData[] = [
  {
    title: 'Tree Service Ogden, UT - Clean Cuts Trees',
    slug: 'service-areas-ogden-ut-tree-service',
    seoTitle: 'Tree Service Ogden, UT | 24/7 Emergency | Clean Cuts Trees',
    seoDescription: 'Local tree service in Ogden, UT—removal, trimming, stump grinding, and 24/7 emergency response.',
    h1: 'Tree Service in Ogden, UT',
    cityName: 'Ogden',
    content: `Clean Cuts Trees provides professional tree services throughout Ogden, Utah. Our experienced team offers comprehensive tree care including removal, trimming, emergency services, and more.

## Professional Tree Services in Ogden, UT

When you need reliable tree care in Ogden, Clean Cuts Trees is your trusted local partner. We provide a full range of tree services to keep your property safe and beautiful.

### Our Tree Services in Ogden Include:

- **Tree Removal**: Safe removal of dangerous, diseased, or unwanted trees
- **Tree Trimming & Pruning**: Expert pruning to improve tree health and appearance
- **Emergency Tree Service**: 24/7 response for storm damage and hazardous situations
- **Stump Grinding**: Complete stump removal and site cleanup
- **Land Clearing**: Lot clearing for construction and development
- **Tree Health Assessment**: Professional evaluation by certified arborists

### Why Choose Clean Cuts Trees in Ogden?

Our team has been serving the Ogden community for years, building trust through:

- Licensed and insured operations
- ISA certified arborists on staff
- Professional-grade equipment
- Free estimates and consultations
- 24/7 emergency response
- Competitive pricing

### Emergency Tree Service in Ogden

Storms and high winds can cause tree emergencies at any time. Our emergency response team is available 24/7 to handle:

- Fallen trees blocking roads or driveways
- Trees on houses or structures
- Hanging branches and hazardous limbs
- Storm damage cleanup

Contact Clean Cuts Trees today for professional tree services in Ogden, UT. We're committed to keeping your property safe and your trees healthy.`
  },
  {
    title: 'Tree Service South Ogden, UT - Clean Cuts Trees',
    slug: 'service-areas-south-ogden-ut-tree-service',
    seoTitle: 'Tree Service South Ogden, UT | 24/7 Emergency | Clean Cuts Trees',
    seoDescription: 'Local tree service in South Ogden, UT—removal, trimming, stump grinding, and 24/7 emergency response.',
    h1: 'Tree Service in South Ogden, UT',
    cityName: 'South Ogden',
    content: `Professional tree care services in South Ogden, Utah. Clean Cuts Trees provides expert tree removal, trimming, and emergency services for residential and commercial properties.

## Trusted Tree Care in South Ogden, UT

South Ogden residents trust Clean Cuts Trees for all their tree service needs. Our certified arborists provide safe, efficient, and professional tree care services.

### Complete Tree Services in South Ogden:

- **Safe Tree Removal**: Proper techniques to remove trees without property damage
- **Tree Trimming & Pruning**: Health-focused pruning and aesthetic shaping
- **24/7 Emergency Response**: Immediate help when storms strike
- **Stump Grinding**: Professional stump removal and cleanup
- **Tree Health Care**: Disease diagnosis and treatment
- **Municipal Services**: Commercial and municipal tree maintenance

### The Clean Cuts Difference in South Ogden

What sets us apart in the South Ogden tree service market:

- Local knowledge of Utah tree species and climate
- Full licensing and comprehensive insurance
- Modern equipment and safety protocols
- Transparent pricing with free estimates
- Commitment to customer satisfaction
- Environmental responsibility

### Emergency Tree Services Available 24/7

Tree emergencies don't wait for business hours. We provide round-the-clock emergency services for:

- Storm-damaged trees
- Trees threatening structures
- Blocked access ways
- Power line interference
- Hazardous hanging branches

Get your free estimate today! Contact Clean Cuts Trees for professional tree services in South Ogden, UT.`
  },
  {
    title: 'Tree Service Fruit Heights, UT - Clean Cuts Trees',
    slug: 'service-areas-fruit-heights-ut-tree-service',
    seoTitle: 'Tree Service Fruit Heights, UT | 24/7 Emergency | Clean Cuts Trees',
    seoDescription: 'Local tree service in Fruit Heights, UT—removal, trimming, stump grinding, and 24/7 emergency response.',
    h1: 'Tree Service in Fruit Heights, UT',
    cityName: 'Fruit Heights',
    content: `Expert tree services in Fruit Heights, Utah. Clean Cuts Trees offers professional tree removal, trimming, and emergency services with a focus on safety and customer satisfaction.

## Professional Tree Care in Fruit Heights, UT

Fruit Heights' beautiful landscape deserves expert tree care. Clean Cuts Trees provides comprehensive tree services to maintain your property's beauty and safety.

### Full Range of Tree Services in Fruit Heights:

- **Expert Tree Removal**: Safe removal with minimal landscape disruption
- **Professional Tree Trimming**: Pruning for health, safety, and aesthetics
- **Emergency Tree Response**: Quick response to storm damage and emergencies
- **Stump Grinding Services**: Complete stump removal and site restoration
- **Tree Health Evaluation**: Assessment and treatment recommendations
- **Landscape Clearing**: Site preparation and lot clearing

### Why Fruit Heights Chooses Clean Cuts Trees

Our reputation in Fruit Heights is built on:

- Certified arborist expertise
- Complete licensing and insurance
- State-of-the-art equipment
- Competitive and fair pricing
- Reliable and timely service
- Clean job site practices

### 24/7 Emergency Tree Service in Fruit Heights

When tree emergencies occur, we're ready to respond immediately:

- Fallen trees on homes or cars
- Storm damage assessment and cleanup
- Dangerous hanging branches
- Trees blocking roads or driveways
- Power line clearance issues

Contact Clean Cuts Trees today for a free estimate on tree services in Fruit Heights, UT. We're your local tree care professionals.`
  },
  {
    title: 'Tree Service Woods Cross, UT - Clean Cuts Trees',
    slug: 'service-areas-woods-cross-ut-tree-service',
    seoTitle: 'Tree Service Woods Cross, UT | 24/7 Emergency | Clean Cuts Trees',
    seoDescription: 'Local tree service in Woods Cross, UT—removal, trimming, stump grinding, and 24/7 emergency response.',
    h1: 'Tree Service in Woods Cross, UT',
    cityName: 'Woods Cross',
    content: `Comprehensive tree services in Woods Cross, Utah. Clean Cuts Trees delivers professional tree care with certified arborists and modern equipment for safe, efficient service.

## Tree Care Excellence in Woods Cross, UT

Woods Cross property owners rely on Clean Cuts Trees for professional tree services that enhance property value and ensure safety.

### Professional Tree Services in Woods Cross:

- **Safe Tree Removal**: Precision removal with property protection
- **Tree Trimming & Pruning**: Health-focused and aesthetic pruning
- **Emergency Tree Services**: 24/7 availability for urgent situations
- **Stump Grinding**: Professional stump removal and cleanup
- **Tree Health Management**: Disease prevention and treatment
- **Commercial Tree Services**: Municipal and business property care

### Your Trusted Woods Cross Tree Service

Clean Cuts Trees stands out in Woods Cross through:

- ISA certified arborist team
- Full licensing and comprehensive insurance
- Advanced equipment and safety protocols
- Transparent estimates and fair pricing
- Local knowledge and community commitment
- Environmental stewardship

### Emergency Response in Woods Cross

Our emergency tree services are available 24/7 for:

- Storm-damaged trees and branches
- Trees threatening buildings or vehicles
- Hazardous tree situations
- Access way blockages
- Power line tree interference

Get professional tree care in Woods Cross, UT. Contact Clean Cuts Trees for your free estimate today.`
  },
  {
    title: 'Tree Service Washington Terrace, UT - Clean Cuts Trees',
    slug: 'service-areas-washington-terrace-ut-tree-service',
    seoTitle: 'Tree Service Washington Terrace, UT | 24/7 Emergency | Clean Cuts Trees',
    seoDescription: 'Local tree service in Washington Terrace, UT—removal, trimming, stump grinding, and 24/7 emergency response.',
    h1: 'Tree Service in Washington Terrace, UT',
    cityName: 'Washington Terrace',
    content: `Quality tree services in Washington Terrace, Utah. Clean Cuts Trees provides expert tree removal, trimming, and emergency services for residential and commercial properties.

## Expert Tree Care in Washington Terrace, UT

Washington Terrace residents choose Clean Cuts Trees for reliable, professional tree services that prioritize safety and property protection.

### Complete Tree Services in Washington Terrace:

- **Professional Tree Removal**: Safe, efficient tree removal services
- **Tree Trimming & Pruning**: Expert pruning for tree health and safety
- **24/7 Emergency Services**: Immediate response to tree emergencies
- **Stump Grinding**: Complete stump removal and site cleanup
- **Tree Assessment**: Professional evaluation and recommendations
- **Land Clearing**: Site preparation and development clearing

### Why Washington Terrace Trusts Clean Cuts Trees

Our commitment to Washington Terrace includes:

- Certified arborist expertise
- Licensed and insured operations
- Professional-grade equipment
- Competitive pricing with free estimates
- Prompt and reliable service
- Community-focused approach

### Emergency Tree Service Available 24/7

Tree emergencies require immediate attention. We provide:

- Storm damage cleanup and assessment
- Fallen tree removal
- Hazardous branch removal
- Property access restoration
- Emergency safety evaluations

Choose Clean Cuts Trees for professional tree services in Washington Terrace, UT. Contact us today for your free consultation.`
  },
  {
    title: 'Tree Service Harrisville, UT - Clean Cuts Trees',
    slug: 'service-areas-harrisville-ut-tree-service',
    seoTitle: 'Tree Service Harrisville, UT | 24/7 Emergency | Clean Cuts Trees',
    seoDescription: 'Local tree service in Harrisville, UT—removal, trimming, stump grinding, and 24/7 emergency response.',
    h1: 'Tree Service in Harrisville, UT',
    cityName: 'Harrisville',
    content: `Professional tree care in Harrisville, Utah. Clean Cuts Trees offers comprehensive tree services including removal, trimming, and emergency response with certified arborists.

## Trusted Tree Services in Harrisville, UT

Harrisville property owners depend on Clean Cuts Trees for professional tree care that enhances safety and property value.

### Full Tree Service Solutions in Harrisville:

- **Safe Tree Removal**: Precision removal with minimal impact
- **Tree Trimming & Pruning**: Health and safety-focused pruning
- **Emergency Tree Response**: 24/7 availability for urgent needs
- **Stump Grinding**: Professional stump removal and restoration
- **Tree Health Care**: Disease management and prevention
- **Municipal Services**: Commercial and city property maintenance

### The Clean Cuts Advantage in Harrisville

What makes us Harrisville's preferred tree service:

- ISA certified arborists on staff
- Complete licensing and insurance coverage
- Modern equipment and safety standards
- Fair pricing with free estimates
- Local expertise and community involvement
- Commitment to environmental responsibility

### 24/7 Emergency Tree Services

Our emergency response team is always ready for:

- Storm-damaged trees and cleanup
- Trees threatening structures
- Dangerous hanging branches
- Blocked driveways and walkways
- Power line tree issues

Experience professional tree care in Harrisville, UT. Contact Clean Cuts Trees for your free estimate and consultation.`
  },
  {
    title: 'Tree Service West Bountiful, UT - Clean Cuts Trees',
    slug: 'service-areas-west-bountiful-ut-tree-service',
    seoTitle: 'Tree Service West Bountiful, UT | 24/7 Emergency | Clean Cuts Trees',
    seoDescription: 'Local tree service in West Bountiful, UT—removal, trimming, stump grinding, and 24/7 emergency response.',
    h1: 'Tree Service in West Bountiful, UT',
    cityName: 'West Bountiful',
    content: `Expert tree services in West Bountiful, Utah. Clean Cuts Trees provides professional tree removal, trimming, and emergency services with a focus on safety and customer satisfaction.

## Professional Tree Care in West Bountiful, UT

West Bountiful's beautiful homes and landscapes deserve expert tree care. Clean Cuts Trees provides comprehensive services to maintain your property's value and safety.

### Complete Tree Services in West Bountiful:

- **Expert Tree Removal**: Safe, efficient removal with property protection
- **Professional Tree Trimming**: Health-focused pruning and shaping
- **Emergency Tree Services**: 24/7 response to urgent situations
- **Stump Grinding**: Complete stump removal and site cleanup
- **Tree Health Assessment**: Professional evaluation and treatment
- **Landscape Services**: Land clearing and site preparation

### Why West Bountiful Chooses Clean Cuts Trees

Our reputation in West Bountiful is built on:

- Certified arborist expertise
- Full licensing and comprehensive insurance
- Professional equipment and techniques
- Competitive pricing with transparency
- Reliable service and communication
- Community-focused business practices

### Emergency Tree Services Available 24/7

When tree emergencies occur in West Bountiful, we respond quickly:

- Storm damage assessment and cleanup
- Fallen trees on homes or vehicles
- Hazardous branch situations
- Access restoration
- Safety evaluations

Trust Clean Cuts Trees for professional tree services in West Bountiful, UT. Contact us today for your free estimate.`
  },
  {
    title: 'Tree Service Sunset, UT - Clean Cuts Trees',
    slug: 'service-areas-sunset-ut-tree-service',
    seoTitle: 'Tree Service Sunset, UT | 24/7 Emergency | Clean Cuts Trees',
    seoDescription: 'Local tree service in Sunset, UT—removal, trimming, stump grinding, and 24/7 emergency response.',
    h1: 'Tree Service in Sunset, UT',
    cityName: 'Sunset',
    content: `Quality tree care services in Sunset, Utah. Clean Cuts Trees offers professional tree removal, trimming, and emergency services with certified arborists and modern equipment.

## Trusted Tree Services in Sunset, UT

Sunset residents and businesses trust Clean Cuts Trees for professional tree care that prioritizes safety, property protection, and customer satisfaction.

### Professional Tree Services in Sunset:

- **Safe Tree Removal**: Precision removal with minimal property impact
- **Tree Trimming & Pruning**: Expert pruning for health and aesthetics
- **24/7 Emergency Response**: Immediate help when you need it most
- **Stump Grinding**: Professional stump removal and cleanup
- **Tree Health Management**: Disease diagnosis and treatment
- **Commercial Services**: Business and municipal tree care

### The Clean Cuts Difference in Sunset

What sets us apart in Sunset:

- ISA certified arborist team
- Licensed and insured operations
- State-of-the-art equipment
- Fair and transparent pricing
- Prompt, reliable service
- Local community commitment

### Emergency Tree Service in Sunset

Our 24/7 emergency services include:

- Storm damage cleanup
- Fallen tree removal
- Hazardous branch elimination
- Property access restoration
- Emergency safety assessments

Choose professional tree care in Sunset, UT. Contact Clean Cuts Trees for your free estimate and consultation today.`
  }
]

// Existing cities that need updates according to audit
const citiesToUpdate = [
  {
    slug: 'service-areas-centerville-ut-tree-service',
    seoTitle: 'Tree Service Centerville, UT | 24/7 Emergency Tree Service | Clean Cuts Trees',
    h1: 'Tree Service in Centerville, UT'
  },
  {
    slug: 'service-areas-clinton-ut-tree-service',
    seoTitle: 'Tree Service Clinton, UT | 24/7 Emergency Tree Service | Clean Cuts Trees',
    h1: 'Tree Service in Clinton, UT'
  },
  {
    slug: 'service-areas-davis-county-ut-tree-service',
    seoTitle: 'Tree Service Davis County, UT | 24/7 Emergency Tree Service | Clean Cuts Trees',
    h1: 'Tree Service in Davis County, UT'
  },
  {
    slug: 'service-areas-eden-ut-tree-service',
    seoTitle: 'Tree Service Eden, UT | 24/7 Emergency Tree Service | Clean Cuts Trees',
    h1: 'Tree Service in Eden, UT'
  },
  {
    slug: 'service-areas-farmington-ut-tree-service',
    seoTitle: 'Tree Service Farmington, UT | 24/7 Emergency Tree Service | Clean Cuts Trees',
    h1: 'Tree Service in Farmington, UT'
  },
  {
    slug: 'service-areas-farr-west-ut-tree-service',
    seoTitle: 'Tree Service Farr West, UT | 24/7 Emergency Tree Service | Clean Cuts Trees',
    h1: 'Tree Service in Farr West, UT'
  },
  {
    slug: 'service-areas-hooper-ut-tree-service',
    seoTitle: 'Tree Service Hooper, UT | 24/7 Emergency Tree Service | Clean Cuts Trees',
    h1: 'Tree Service in Hooper, UT'
  },
  {
    slug: 'service-areas-north-salt-lake-ut-tree-service',
    seoTitle: 'Tree Service North Salt Lake, UT | 24/7 Emergency Tree Service | Clean Cuts Trees',
    h1: 'Tree Service in North Salt Lake, UT'
  },
  {
    slug: 'service-areas-plain-city-ut-tree-service',
    seoTitle: 'Tree Service Plain City, UT | 24/7 Emergency Tree Service | Clean Cuts Trees',
    h1: 'Tree Service in Plain City, UT'
  },
  {
    slug: 'service-areas-pleasant-view-ut-tree-service',
    seoTitle: 'Tree Service Pleasant View, UT | 24/7 Emergency Tree Service | Clean Cuts Trees',
    h1: 'Tree Service in Pleasant View, UT'
  },
  {
    slug: 'service-areas-riverdale-ut-tree-service',
    seoTitle: 'Tree Service Riverdale, UT | 24/7 Emergency Tree Service | Clean Cuts Trees',
    h1: 'Tree Service in Riverdale, UT'
  },
  {
    slug: 'service-areas-salt-lake-county-ut-tree-service',
    seoTitle: 'Tree Service Salt Lake County, UT | 24/7 Emergency Tree Service | Clean Cuts Trees',
    h1: 'Tree Service in Salt Lake County, UT'
  },
  {
    slug: 'service-areas-south-weber-ut-tree-service',
    seoTitle: 'Tree Service South Weber, UT | 24/7 Emergency Tree Service | Clean Cuts Trees',
    h1: 'Tree Service in South Weber, UT'
  },
  {
    slug: 'service-areas-syracuse-ut-tree-service',
    seoTitle: 'Tree Service Syracuse, UT | 24/7 Emergency Tree Service | Clean Cuts Trees',
    h1: 'Tree Service in Syracuse, UT'
  },
  {
    slug: 'service-areas-weber-county-ut-tree-service',
    seoTitle: 'Tree Service Weber County, UT | 24/7 Emergency Tree Service | Clean Cuts Trees',
    h1: 'Tree Service in Weber County, UT'
  },
  {
    slug: 'service-areas-west-haven-ut-tree-service',
    seoTitle: 'Tree Service West Haven, UT | 24/7 Emergency Tree Service | Clean Cuts Trees',
    h1: 'Tree Service in West Haven, UT'
  },
  {
    slug: 'service-areas-bountiful-ut-tree-service',
    seoTitle: 'Tree Service Bountiful, UT | 24/7 Emergency Tree Service | Clean Cuts Trees',
    h1: 'Tree Service in Bountiful, UT'
  },
  {
    slug: 'service-areas-clearfield-ut-tree-service',
    seoTitle: 'Tree Service Clearfield, UT | 24/7 Emergency Tree Service | Clean Cuts Trees',
    h1: 'Tree Service in Clearfield, UT'
  },
  {
    slug: 'service-areas-kaysville-ut-tree-service',
    seoTitle: 'Tree Service Kaysville, UT | 24/7 Emergency Tree Service | Clean Cuts Trees',
    h1: 'Tree Service in Kaysville, UT'
  },
  {
    slug: 'service-areas-layton-ut-tree-service',
    seoTitle: 'Tree Service Layton, UT | 24/7 Emergency Tree Service | Clean Cuts Trees',
    h1: 'Tree Service in Layton, UT'
  },
  {
    slug: 'service-areas-north-ogden-ut-tree-service',
    seoTitle: 'Tree Service North Ogden, UT | 24/7 Emergency Tree Service | Clean Cuts Trees',
    h1: 'Tree Service in North Ogden, UT'
  },
  {
    slug: 'service-areas-roy-ut-tree-service',
    seoTitle: 'Tree Service Roy, UT | 24/7 Emergency Tree Service | Clean Cuts Trees',
    h1: 'Tree Service in Roy, UT'
  }
]

async function createMissingCityPages() {
  try {
    // Import config after environment variables are loaded
    const configModule = await import('../src/payload.config.js')
    const payloadConfig = await configModule.default
    const payload = await getPayload({ config: payloadConfig })

    console.log('Creating missing city pages...')

    for (const city of missingCities) {
      console.log(`Creating page for ${city.cityName}...`)

      const newPage = await payload.create({
        collection: 'pages',
        data: {
          title: city.title,
          slug: city.slug,
          pageType: 'service-area',
          content: {
            root: {
              type: 'root',
              format: '',
              indent: 0,
              version: 1,
              children: [
                {
                  type: 'paragraph',
                  format: '',
                  indent: 0,
                  version: 1,
                  children: [
                    {
                      type: 'text',
                      text: city.content,
                      format: 0,
                      version: 1
                    }
                  ]
                }
              ]
            }
          },
          excerpt: `Professional tree services in ${city.cityName}, UT. Clean Cuts Trees provides expert tree removal, trimming, emergency services, and more. Licensed, insured, and trusted.`,
          seo: {
            title: city.seoTitle,
            description: city.seoDescription,
            keywords: `tree service ${city.cityName}, tree removal ${city.cityName}, emergency tree service, tree trimming ${city.cityName}, Clean Cuts Trees`
          },
          publishedDate: new Date()
        }
      })

      console.log(`✅ Created page for ${city.cityName} with ID: ${newPage.id}`)
    }

    console.log('✅ All missing city pages created successfully!')

  } catch (error) {
    console.error('❌ Error creating city pages:', error)
  }
}

async function updateExistingCityPages() {
  try {
    // Import config after environment variables are loaded
    const configModule = await import('../src/payload.config.js')
    const payloadConfig = await configModule.default
    const payload = await getPayload({ config: payloadConfig })

    console.log('Updating existing city pages...')

    for (const city of citiesToUpdate) {
      console.log(`Updating page: ${city.slug}...`)

      // Find the existing page
      const existingPages = await payload.find({
        collection: 'pages',
        where: {
          slug: {
            equals: city.slug
          }
        },
        limit: 1
      })

      if (existingPages.docs.length > 0) {
        const page = existingPages.docs[0]
        
        await payload.update({
          collection: 'pages',
          id: page.id,
          data: {
            seo: {
              ...page.seo,
              title: city.seoTitle
            }
          }
        })

        console.log(`✅ Updated ${city.slug}`)
      } else {
        console.log(`⚠️ Page not found: ${city.slug}`)
      }
    }

    console.log('✅ All existing city pages updated successfully!')

  } catch (error) {
    console.error('❌ Error updating city pages:', error)
  }
}

// Run the functions
async function main() {
  console.log('🚀 Starting SEO improvements for Clean Cuts Trees...')
  
  await createMissingCityPages()
  await updateExistingCityPages()
  
  console.log('🎉 SEO improvements completed!')
}

// Check if this is the main module (ES module way)
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

if (process.argv[1] === __filename) {
  main()
}

export { createMissingCityPages, updateExistingCityPages }

/**
 * API Examples for Clean Cut Trees Blog Posts and Pages
 *
 * This file contains examples of how to use the API endpoints for creating,
 * reading, updating, and deleting blog posts and pages.
 */

const BASE_URL = 'http://localhost:3000' // Change this to your production URL

// =============================================================================
// BLOG POSTS API EXAMPLES
// =============================================================================

/**
 * Create a single blog post
 */
export async function createBlogPost(postData: any) {
  const response = await fetch(`${BASE_URL}/api/blog-posts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(postData),
  })

  return response.json()
}

/**
 * Get all blog posts with pagination
 */
export async function getBlogPosts(page = 1, limit = 10, status = 'published') {
  const params = new URLSearchParams({
    page: page.toString(),
    limit: limit.toString(),
    status,
  })

  const response = await fetch(`${BASE_URL}/api/blog-posts?${params}`)
  return response.json()
}

/**
 * Get a single blog post by ID
 */
export async function getBlogPost(id: string) {
  const response = await fetch(`${BASE_URL}/api/blog-posts/${id}`)
  return response.json()
}

/**
 * Update a blog post
 */
export async function updateBlogPost(id: string, updateData: any) {
  const response = await fetch(`${BASE_URL}/api/blog-posts/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updateData),
  })

  return response.json()
}

/**
 * Delete a blog post
 */
export async function deleteBlogPost(id: string) {
  const response = await fetch(`${BASE_URL}/api/blog-posts/${id}`, {
    method: 'DELETE',
  })

  return response.json()
}

/**
 * Bulk create blog posts
 */
export async function bulkCreateBlogPosts(posts: any[]) {
  const response = await fetch(`${BASE_URL}/api/blog-posts/bulk`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ posts }),
  })

  return response.json()
}

// =============================================================================
// PAGES API EXAMPLES
// =============================================================================

/**
 * Create a single page
 */
export async function createPage(pageData: any) {
  const response = await fetch(`${BASE_URL}/api/pages`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(pageData),
  })

  return response.json()
}

/**
 * Get all pages with pagination and filtering
 */
export async function getPages(page = 1, limit = 10, pageType?: string, status = 'published') {
  const params = new URLSearchParams({
    page: page.toString(),
    limit: limit.toString(),
    status,
  })

  if (pageType) {
    params.append('pageType', pageType)
  }

  const response = await fetch(`${BASE_URL}/api/pages?${params}`)
  return response.json()
}

/**
 * Get a single page by ID
 */
export async function getPage(id: string) {
  const response = await fetch(`${BASE_URL}/api/pages/${id}`)
  return response.json()
}

/**
 * Update a page
 */
export async function updatePage(id: string, updateData: any) {
  const response = await fetch(`${BASE_URL}/api/pages/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updateData),
  })

  return response.json()
}

/**
 * Delete a page
 */
export async function deletePage(id: string) {
  const response = await fetch(`${BASE_URL}/api/pages/${id}`, {
    method: 'DELETE',
  })

  return response.json()
}

/**
 * Bulk create pages
 */
export async function bulkCreatePages(pages: any[]) {
  const response = await fetch(`${BASE_URL}/api/pages/bulk`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ pages }),
  })

  return response.json()
}

// =============================================================================
// EXAMPLE USAGE
// =============================================================================

/**
 * Example: Create a new blog post
 */
export async function exampleCreateBlogPost() {
  const blogPost = {
    title: '10 Signs Your Tree Needs Professional Care',
    content: `# 10 Signs Your Tree Needs Professional Care

Trees are valuable assets to any property, but they require proper care to remain healthy and safe. Here are the top 10 signs that indicate your tree needs professional attention from a certified arborist.

## 1. Dead or Dying Branches

Dead branches are often the first visible sign of tree distress. These branches:
- Appear brittle and break easily
- Have no leaves during growing season
- Show signs of decay or fungal growth
- Pose safety risks if left untreated

## 2. Leaning Trees

While some trees naturally lean, sudden changes in lean angle indicate:
- Root damage or failure
- Soil erosion or instability
- Storm damage
- Potential fall hazard

## 3. Cracks in the Trunk

Trunk cracks can indicate:
- Structural weakness
- Disease or pest damage
- Weather stress
- Need for professional assessment

## 4. Pest Infestations

Common signs include:
- Visible insects or larvae
- Holes in bark or leaves
- Sawdust-like material at base
- Wilting or discolored foliage

## 5. Fungal Growth

Mushrooms or other fungi growing on or near your tree indicate:
- Internal decay
- Root problems
- Moisture issues
- Potential structural failure

## 6. Proximity to Structures

Trees growing too close to buildings may cause:
- Foundation damage
- Roof damage from branches
- Utility line interference
- Insurance liability issues

## 7. Storm Damage

After severe weather, look for:
- Broken or hanging branches
- Exposed roots
- Bark damage
- Changed tree lean

## 8. Construction Impact

Recent construction can affect trees through:
- Root zone compaction
- Grade changes
- Chemical contamination
- Physical damage

## 9. Poor Growth Patterns

Concerning growth signs include:
- Stunted growth
- Yellowing leaves
- Premature leaf drop
- Sparse canopy

## 10. Age and Species Considerations

Some trees require care based on:
- Species-specific needs
- Mature tree maintenance
- Preventive care schedules
- Environmental adaptation

## Professional Tree Care Services

When you notice these warning signs, contact Clean Cuts Trees for:
- Certified arborist assessment
- Professional tree removal if necessary
- Preventive maintenance programs
- Emergency tree services

Don't wait until a tree becomes a safety hazard. Early intervention can often save a tree and prevent costly damage to your property.

**Contact Clean Cuts Trees at (801) 473-7548 for professional tree care services throughout Utah.**`,
    excerpt:
      'Learn the top 10 warning signs that indicate your tree needs professional care from a certified arborist. Early detection can save your trees and prevent property damage.',
    publishedDate: new Date().toISOString(),
    categories: [], // You would include category IDs here
    tags: [], // You would include tag IDs here
    seo: {
      title: '10 Signs Your Tree Needs Professional Care | Clean Cuts Trees',
      description:
        'Learn the top 10 warning signs that indicate your tree needs professional care from a certified arborist. Early detection can save trees and prevent damage.',
      keywords: 'tree care, arborist, tree health, tree removal, Utah tree service',
    },
  }

  const result = await createBlogPost(blogPost)
  console.log('Blog post created:', result)
  return result
}

/**
 * Example: Create a new service page
 */
export async function exampleCreateServicePage() {
  const servicePage = {
    title: 'Tree Health Assessment - Clean Cuts Trees',
    slug: 'services-tree-health-assessment',
    pageType: 'service',
    content: `# Professional Tree Health Assessment Services

Protect your valuable trees with comprehensive health assessments from Clean Cuts Trees. Our certified arborists provide detailed evaluations to identify potential problems before they become serious issues.

## What's Included in Our Assessment

### Visual Inspection
- Overall tree structure and form
- Bark condition and integrity
- Root system evaluation
- Foliage health and density

### Diagnostic Testing
- Soil analysis and testing
- Disease identification
- Pest detection and identification
- Environmental stress evaluation

### Written Report
- Detailed findings and recommendations
- Treatment plans and timelines
- Cost estimates for recommended services
- Preventive care scheduling

## When You Need an Assessment

- Before purchasing property with mature trees
- After severe weather events
- When you notice changes in tree appearance
- As part of regular preventive maintenance
- For insurance or legal documentation

## Assessment Benefits

- Early problem detection
- Cost-effective preventive care
- Professional recommendations
- Peace of mind about tree safety
- Property value protection

## Schedule Your Assessment

Contact Clean Cuts Trees today to schedule your professional tree health assessment. Our certified arborists will provide you with the information you need to keep your trees healthy and safe.

**Call (801) 473-7548 to schedule your tree health assessment.**`,
    excerpt:
      'Comprehensive tree health assessments by certified arborists. Early detection and professional recommendations to keep your trees healthy and safe.',
    seo: {
      title: 'Professional Tree Health Assessment | Clean Cuts Trees Utah',
      description:
        'Comprehensive tree health assessments by certified arborists. Early detection and professional recommendations to keep your trees healthy and safe.',
      keywords: 'tree health assessment, arborist evaluation, tree inspection, Utah tree care',
    },
  }

  const result = await createPage(servicePage)
  console.log('Service page created:', result)
  return result
}

/**
 * Example: Bulk create trending blog posts
 */
export async function exampleBulkCreateTrendingPosts() {
  const trendingPosts = [
    {
      title: 'Emergency Tree Removal: When to Call Professionals',
      excerpt:
        'Learn when tree removal becomes an emergency and how to respond safely to protect your property and family.',
      content:
        '# Emergency Tree Removal: When to Call Professionals\n\nStorm damage, disease, and age can create emergency tree situations...',
      seo: {
        keywords: 'emergency tree removal, storm damage, tree safety, Utah tree service',
      },
    },
    {
      title: "Winter Tree Care: Protecting Your Trees in Utah's Harsh Weather",
      excerpt:
        "Essential winter tree care tips to help your trees survive Utah's cold temperatures and heavy snow.",
      content:
        "# Winter Tree Care: Protecting Your Trees in Utah's Harsh Weather\n\nUtah's winters can be tough on trees...",
      seo: {
        keywords: 'winter tree care, Utah weather, tree protection, seasonal maintenance',
      },
    },
    {
      title: 'The Complete Guide to Fruit Tree Pruning',
      excerpt:
        "Maximize your fruit harvest with proper pruning techniques and timing for Utah's climate.",
      content:
        '# The Complete Guide to Fruit Tree Pruning\n\nProper pruning is essential for healthy, productive fruit trees...',
      seo: {
        keywords: 'fruit tree pruning, orchard care, apple tree pruning, Utah fruit trees',
      },
    },
    // Add more posts as needed
  ]

  const result = await bulkCreateBlogPosts(trendingPosts)
  console.log('Bulk blog posts created:', result)
  return result
}

import dotenv from 'dotenv'
import { readFileSync } from 'fs'
import matter from 'gray-matter'
import { dirname, join } from 'path'
import payload from 'payload'
import { fileURLToPath } from 'url'
import config from '../src/payload.config'

// Load environment variables
dotenv.config()

// Get __dirname equivalent for ES modules
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// Type for route data structure
interface RouteData {
  slug: string
  file: string
  [key: string]: any
}

const migrateContent = async () => {
  try {
    await payload.init({
      config,
    })

    console.log('🚀 Starting content migration...')

    // Load routes.json
    const routesPath = join(__dirname, '../content-migration/routes.json')
    const routes = JSON.parse(readFileSync(routesPath, 'utf8'))

    const stats = {
      pages: 0,
      blogPosts: 0,
      categories: 0,
      tags: 0,
      errors: 0,
    }

    // First, create categories and tags to establish relationships
    const categoryMap = new Map()
    const tagMap = new Map()

    // Process categories
    for (const [url, data] of Object.entries(routes) as [string, RouteData][]) {
      if (url.includes('/category/')) {
        try {
          const category = await createCategory(url, data)
          if (category) {
            categoryMap.set(data.slug, category.id)
            stats.categories++
            console.log(`✅ Created category: ${(category as any).title}`)
          }
        } catch (error) {
          console.error(`❌ Failed to create category: ${url}`, error)
          stats.errors++
        }
      }
    }

    // Process tags
    for (const [url, data] of Object.entries(routes) as [string, RouteData][]) {
      if (url.includes('/tag/')) {
        try {
          const tag = await createTag(url, data)
          if (tag) {
            tagMap.set(data.slug, tag.id)
            stats.tags++
            console.log(`✅ Created tag: ${(tag as any).title}`)
          }
        } catch (error) {
          console.error(`❌ Failed to create tag: ${url}`, error)
          stats.errors++
        }
      }
    }

    // Process content
    for (const [url, data] of Object.entries(routes) as [string, RouteData][]) {
      if (url.includes('/category/') || url.includes('/tag/')) {
        continue // Already processed
      }

      try {
        const markdownPath = join(
          __dirname,
          '../content-migration/pages',
          data.file.replace('./pages/', ''),
        )
        const content = readFileSync(markdownPath, 'utf8')

        // Parse markdown frontmatter
        const { data: frontmatter, content: body } = matter(content)

        // Determine content type and create entry
        const contentType = determineContentType(url)

        if (contentType === 'blog-posts') {
          await createBlogPost(url, frontmatter, body, data.slug, categoryMap, tagMap)
          stats.blogPosts++
        } else {
          await createPage(url, frontmatter, body, data.slug, contentType)
          stats.pages++
        }

        console.log(`✅ Migrated: ${url}`)
      } catch (error) {
        console.error(`❌ Failed to migrate: ${url}`, error)
        stats.errors++
      }
    }

    console.log('\n🎉 Migration completed!')
    console.log('📊 Statistics:')
    console.log(`   Pages: ${stats.pages}`)
    console.log(`   Blog Posts: ${stats.blogPosts}`)
    console.log(`   Categories: ${stats.categories}`)
    console.log(`   Tags: ${stats.tags}`)
    console.log(`   Errors: ${stats.errors}`)
  } catch (error) {
    console.error('💥 Migration failed:', error)
  }
}

const determineContentType = (url: string) => {
  if (url.includes('/blog/') || url.match(/\/\d{4}\/\d{2}\/\d{2}\//)) {
    return 'blog-posts'
  }
  return 'pages'
}

const createCategory = async (url: string, data: RouteData) => {
  const markdownPath = join(
    __dirname,
    '../content-migration/pages',
    data.file.replace('./pages/', ''),
  )
  const content = readFileSync(markdownPath, 'utf8')
  const { data: frontmatter } = matter(content)

  return await payload.create({
    collection: 'categories' as any,
    data: {
      title: frontmatter.title || extractTitleFromSlug(data.slug),
      slug: data.slug,
      description: frontmatter.description || '',
      seo: {
        title: frontmatter.title,
        description: frontmatter.description,
      },
    } as any,
  })
}

const createTag = async (url: string, data: RouteData) => {
  const markdownPath = join(
    __dirname,
    '../content-migration/pages',
    data.file.replace('./pages/', ''),
  )
  const content = readFileSync(markdownPath, 'utf8')
  const { data: frontmatter } = matter(content)

  return await payload.create({
    collection: 'tags' as any,
    data: {
      title: frontmatter.title || extractTitleFromSlug(data.slug),
      slug: data.slug,
      description: frontmatter.description || '',
      seo: {
        title: frontmatter.title,
        description: frontmatter.description,
      },
    } as any,
  })
}

const createBlogPost = async (
  url: string,
  frontmatter: any,
  body: string,
  slug: string,
  categoryMap: Map<string, string>,
  tagMap: Map<string, string>,
) => {
  // Extract categories and tags from content or URL patterns
  const categories = extractCategoriesFromContent(body, categoryMap)
  const tags = extractTagsFromContent(body, tagMap)

  return await payload.create({
    collection: 'blog-posts' as any,
    data: {
      title: frontmatter.title || extractTitleFromUrl(url),
      slug: slug,
      content: body,
      excerpt: frontmatter.description || extractExcerpt(body),
      publishedDate: extractDateFromUrl(url) || new Date(),
      categories: categories,
      tags: tags,
      seo: {
        title: frontmatter.title,
        description: frontmatter.description,
      },
    } as any,
  })
}

const createPage = async (
  url: string,
  frontmatter: any,
  body: string,
  slug: string,
  contentType: string,
) => {
  return await payload.create({
    collection: 'pages' as any,
    data: {
      title: frontmatter.title || extractTitleFromUrl(url),
      slug: slug,
      content: body,
      excerpt: frontmatter.description || extractExcerpt(body),
      pageType: determinePageType(url),
      publishedDate: new Date(),
      seo: {
        title: frontmatter.title,
        description: frontmatter.description,
      },
    } as any,
  })
}

const determinePageType = (url: string) => {
  if (url === 'https://cleancutstrees.com/') return 'homepage'
  if (url.includes('/services/')) return 'service'
  if (url.includes('/service-areas/')) return 'service-area'
  return 'static'
}

const extractDateFromUrl = (url: string) => {
  const dateMatch = url.match(/\/(\d{4})\/(\d{2})\/(\d{2})\//)
  if (dateMatch) {
    const [, year, month, day] = dateMatch
    return new Date(`${year}-${month}-${day}`)
  }
  return null
}

const extractTitleFromUrl = (url: string) => {
  const parts = url.split('/')
  const lastPart = parts[parts.length - 2] || parts[parts.length - 1]
  return lastPart.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase())
}

const extractTitleFromSlug = (slug: string) => {
  return slug.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase())
}

const extractExcerpt = (content: string, maxLength: number = 160) => {
  // Remove markdown formatting and extract first paragraph
  const plainText = content.replace(/[#*`\[\]]/g, '').trim()
  const firstParagraph = plainText.split('\n\n')[0]
  return firstParagraph.length > maxLength
    ? firstParagraph.substring(0, maxLength) + '...'
    : firstParagraph
}

const extractCategoriesFromContent = (content: string, categoryMap: Map<string, string>) => {
  // Logic to extract categories based on content analysis
  // This is a simplified version - you might want to enhance this
  const categories = []

  if (content.toLowerCase().includes('tree removal')) {
    const categoryId = categoryMap.get('category-tree-removal')
    if (categoryId) categories.push(categoryId)
  }

  if (
    content.toLowerCase().includes('tree trimming') ||
    content.toLowerCase().includes('tree pruning')
  ) {
    const categoryId = categoryMap.get('category-tree-pruning')
    if (categoryId) categories.push(categoryId)
  }

  return categories
}

const extractTagsFromContent = (content: string, tagMap: Map<string, string>) => {
  // Logic to extract tags based on content analysis
  const tags = []

  // Extract common tree service related tags
  const commonTags = [
    'tree removal',
    'tree trimming',
    'tree pruning',
    'emergency service',
    'storm damage',
    'land clearing',
    'municipal service',
  ]

  for (const tag of commonTags) {
    if (content.toLowerCase().includes(tag)) {
      const tagSlug = `tag-${tag.replace(/\s+/g, '-')}`
      const tagId = tagMap.get(tagSlug)
      if (tagId) tags.push(tagId)
    }
  }

  return tags
}

export default migrateContent

// Run migration if this file is executed directly
if (
  import.meta.url === `file://${process.argv[1]}` ||
  import.meta.url === fileURLToPath(process.argv[1])
) {
  migrateContent()
}

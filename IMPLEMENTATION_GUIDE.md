# Clean Cut Trees - PayloadCMS Implementation Guide

## Project Overview
This guide outlines the complete implementation of the Clean Cut Trees website migration from the existing WordPress site to a modern PayloadCMS + Next.js stack.

## Content Analysis
- **Total Pages**: 198 pages scraped
- **Blog Posts**: 45+ articles (2017-2025)
- **Service Pages**: Tree removal, trimming, emergency, municipal, land clearing
- **Service Areas**: 20+ Utah locations (Davis, Weber, Salt Lake Counties)
- **Categories**: 13 different blog categories
- **Tags**: 100+ content tags
- **Static Pages**: About, contact, FAQ, testimonials, etc.

## Phase 1: PayloadCMS Backend Setup (Current Phase)

### 1.1 Database Setup
```bash
# Set up PostgreSQL database (use Railway, Supabase, or local)
# Update your .env file with database connection
DATABASE_URI=postgresql://username:password@host:port/database
```

### 1.2 Core Collections to Implement

#### Priority 1 Collections (Week 1-2)
1. **Pages** - Flexible page builder for static pages
2. **BlogPosts** - All blog content with date-based URLs
3. **Services** - Service offering pages
4. **ServiceAreas** - Location-based landing pages
5. **Media** - Images and assets

#### Priority 2 Collections (Week 2-3)
6. **Categories** - Blog categories
7. **Tags** - Content tags
8. **Testimonials** - Customer reviews
9. **Settings** - Global site configuration
10. **Forms** - Contact and quote forms

### 1.3 URL Structure to Maintain
```
Homepage: /
Services: /services/[slug]/
Service Areas: /service-areas/[slug]/
Blog Posts: /[year]/[month]/[day]/[slug]/
Blog Listing: /blog/
Categories: /category/[slug]/
Tags: /tag/[slug]/
Static Pages: /[slug]/
```

## Phase 2: Collection Schemas

### Pages Collection
```typescript
// src/collections/Pages.ts
export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      unique: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'pageType',
      type: 'select',
      options: [
        { label: 'Homepage', value: 'homepage' },
        { label: 'Service', value: 'service' },
        { label: 'Service Area', value: 'service-area' },
        { label: 'Static Page', value: 'static' },
      ],
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'content',
      type: 'richText',
    },
    {
      name: 'excerpt',
      type: 'textarea',
    },
    {
      name: 'featuredImage',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'seo',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'text',
        },
        {
          name: 'description',
          type: 'textarea',
        },
        {
          name: 'keywords',
          type: 'text',
        },
      ],
    },
    {
      name: 'publishedDate',
      type: 'date',
      admin: {
        position: 'sidebar',
      },
    },
  ],
}
```

### Blog Posts Collection
```typescript
// src/collections/BlogPosts.ts
export const BlogPosts: CollectionConfig = {
  slug: 'blog-posts',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'publishedDate', 'status'],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      unique: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'content',
      type: 'richText',
    },
    {
      name: 'excerpt',
      type: 'textarea',
    },
    {
      name: 'featuredImage',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'publishedDate',
      type: 'date',
      required: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'categories',
      type: 'relationship',
      relationTo: 'categories',
      hasMany: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'tags',
      type: 'relationship',
      relationTo: 'tags',
      hasMany: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'seo',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'text',
        },
        {
          name: 'description',
          type: 'textarea',
        },
      ],
    },
  ],
}
```

### Categories Collection
```typescript
// src/collections/Categories.ts
export const Categories: CollectionConfig = {
  slug: 'categories',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      unique: true,
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'seo',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'text',
        },
        {
          name: 'description',
          type: 'textarea',
        },
      ],
    },
  ],
}
```

### Tags Collection
```typescript
// src/collections/Tags.ts
export const Tags: CollectionConfig = {
  slug: 'tags',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      unique: true,
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'seo',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'text',
        },
        {
          name: 'description',
          type: 'textarea',
        },
      ],
    },
  ],
}
```

## Phase 3: Content Migration Strategy

### 3.1 Migration Script Template
```typescript
// src/scripts/migrate-content.ts
import payload from 'payload'
import { readFileSync } from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const migrateContent = async () => {
  await payload.init({
    secret: process.env.PAYLOAD_SECRET,
    local: true,
  })

  // Load routes.json
  const routesPath = join(__dirname, '../content-migration/routes.json')
  const routes = JSON.parse(readFileSync(routesPath, 'utf8'))

  for (const [url, data] of Object.entries(routes)) {
    try {
      const markdownPath = join(__dirname, '../content-migration/pages', data.file.replace('./pages/', ''))
      const content = readFileSync(markdownPath, 'utf8')
      
      // Parse markdown frontmatter
      const { data: frontmatter, content: body } = matter(content)
      
      // Determine content type and create entry
      const contentType = determineContentType(url)
      await createContentEntry(contentType, url, frontmatter, body, data.slug)
      
      console.log(`✅ Migrated: ${url}`)
    } catch (error) {
      console.error(`❌ Failed to migrate: ${url}`, error)
    }
  }
}

const determineContentType = (url: string) => {
  if (url.includes('/blog/') || url.match(/\/\d{4}\/\d{2}\/\d{2}\//)) {
    return 'blog-posts'
  }
  if (url.includes('/category/')) {
    return 'categories'
  }
  if (url.includes('/tag/')) {
    return 'tags'
  }
  return 'pages'
}

const createContentEntry = async (type: string, url: string, frontmatter: any, body: string, slug: string) => {
  const baseData = {
    title: frontmatter.title || extractTitleFromUrl(url),
    slug: slug,
    content: body,
    seo: {
      title: frontmatter.title,
      description: frontmatter.description,
    },
  }

  switch (type) {
    case 'blog-posts':
      return await payload.create({
        collection: 'blog-posts',
        data: {
          ...baseData,
          publishedDate: extractDateFromUrl(url) || new Date(),
        },
      })
    
    case 'pages':
      return await payload.create({
        collection: 'pages',
        data: {
          ...baseData,
          pageType: determinePageType(url),
        },
      })
    
    default:
      return await payload.create({
        collection: type,
        data: baseData,
      })
  }
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
  return lastPart.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
}

export default migrateContent
```

## Phase 4: Implementation Checklist

### Week 1 Tasks
- [ ] Set up PostgreSQL database
- [ ] Configure environment variables
- [ ] Create Pages collection
- [ ] Create BlogPosts collection
- [ ] Create Media collection
- [ ] Test basic CRUD operations

### Week 2 Tasks
- [ ] Create Categories collection
- [ ] Create Tags collection
- [ ] Create migration script
- [ ] Copy content from scraper to content-migration folder
- [ ] Run initial content migration test

### Week 3 Tasks
- [ ] Import all 198 pages
- [ ] Verify content integrity
- [ ] Set up admin user permissions
- [ ] Configure API endpoints
- [ ] Test GraphQL queries

## Phase 5: API Endpoints for Frontend

### GraphQL Queries Examples
```graphql
# Get homepage
query Homepage {
  Pages(where: { pageType: { equals: "homepage" } }) {
    docs {
      title
      content
      featuredImage {
        url
        alt
      }
      seo {
        title
        description
      }
    }
  }
}

# Get blog posts
query BlogPosts($limit: Int, $page: Int) {
  BlogPosts(limit: $limit, page: $page, sort: "-publishedDate") {
    docs {
      title
      slug
      excerpt
      publishedDate
      featuredImage {
        url
        alt
      }
      categories {
        title
        slug
      }
      tags {
        title
        slug
      }
    }
    totalPages
    totalDocs
  }
}

# Get services
query Services {
  Pages(where: { pageType: { equals: "service" } }) {
    docs {
      title
      slug
      excerpt
      featuredImage {
        url
        alt
      }
    }
  }
}

# Get service areas
query ServiceAreas {
  Pages(where: { pageType: { equals: "service-area" } }) {
    docs {
      title
      slug
      excerpt
    }
  }
}
```

## Next Steps

1. **Complete PayloadCMS Setup**: Implement all collections based on the schemas above
2. **Content Migration**: Copy the scraped content and run migration scripts
3. **API Testing**: Test all GraphQL endpoints
4. **Frontend Setup**: Create Next.js frontend that consumes the PayloadCMS API

## Commands to Run Migration

```bash
# 1. Copy content from scraper to PayloadCMS project
cp -r /path/to/content-scraper/data ./content-migration

# 2. Install migration dependencies
npm install gray-matter

# 3. Run migration script
npm run payload:migrate
```

## Important Notes

- All scraped content is preserved in the content-migration folder
- URL structure maintains SEO value
- Collections are designed for easy content management
- Migration scripts ensure no content loss
- Use gray-matter to parse markdown frontmatter
- Test migration with a few pages first before running full migration

Let's start implementing the collections and then move to content migration!

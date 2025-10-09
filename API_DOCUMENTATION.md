# Clean Cut Trees API Documentation

This document describes the REST API endpoints available for managing blog posts and pages in the Clean Cut Trees application.

## ⚠️ Environment Restrictions

**IMPORTANT**: The custom development API endpoints (`/api/dev/*`) are **DEVELOPMENT ONLY** and will not work in production environments. They are designed for local development, testing, and content creation purposes.

In production (`NODE_ENV=production`), all `/api/dev/*` endpoints will return:

```json
{
  "success": false,
  "error": "This API endpoint is not available in production",
  "message": "Development-only endpoint"
}
```

## Base URL

- **Development**: `http://localhost:3000` (✅ Custom `/api/dev/*` APIs Available)
- **Production**: `https://your-domain.com` (❌ Custom `/api/dev/*` APIs Disabled)

## API Status Endpoint

Check the current status of all API endpoints:

**Endpoint**: `GET /api/status`

**Response**:

```json
{
  "environment": "development",
  "timestamp": "2025-10-08T10:00:00.000Z",
  "apis": {
    "custom": {
      "available": true,
      "reason": "Running in development mode",
      "endpoints": ["POST /api/dev/blog-posts", "GET /api/dev/blog-posts", "..."]
    },
    "payload": {
      "available": true,
      "reason": "Native Payload CMS APIs",
      "endpoints": ["GET /api/blog-posts (native)", "..."]
    }
  }
}
```

## Authentication

- **Development APIs** (`/api/dev/*`): No authentication required for local testing
- **Native Payload APIs**: Authentication required for write operations
- **Admin Panel**: Full authentication system

## Development Blog Posts API (`/api/dev/blog-posts`)

### Create Blog Post

**Endpoint**: `POST /api/dev/blog-posts`

**Request Body**:

```json
{
  "title": "Your Blog Post Title",
  "slug": "optional-custom-slug", // Auto-generated if not provided
  "content": "# Your blog post content in markdown",
  "excerpt": "Brief description of the post",
  "publishedDate": "2025-10-08T10:00:00Z", // Optional, defaults to now
  "author": "Author Name", // Optional, defaults to "Clean Cut Trees"
  "status": "published", // Optional: "published" or "draft"
  "categories": ["category-id-1", "category-id-2"], // Optional array of category IDs
  "tags": ["tag-id-1", "tag-id-2"], // Optional array of tag IDs
  "featuredImage": "media-id", // Optional media ID
  "seo": {
    "title": "SEO title override",
    "description": "Meta description",
    "keywords": "comma, separated, keywords",
    "image": "media-id"
  }
}
```

**Response**:

```json
{
  "success": true,
  "data": {
    "id": "generated-id",
    "title": "Your Blog Post Title",
    "slug": "your-blog-post-title"
    // ... other fields
  },
  "message": "Blog post created successfully"
}
```

### Get All Blog Posts

**Endpoint**: `GET /api/dev/blog-posts`

**Query Parameters**:

- `page` (number): Page number for pagination (default: 1)
- `limit` (number): Number of posts per page (default: 10)
- `status` (string): Filter by status - "published" or "draft" (default: "published")

**Example**: `GET /api/dev/blog-posts?page=1&limit=20&status=published`

**Response**:

```json
{
  "success": true,
  "data": [
    {
      "id": "post-id",
      "title": "Post Title"
      // ... other fields
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 10,
    "totalPages": 5,
    "totalDocs": 47,
    "hasNextPage": true,
    "hasPrevPage": false
  }
}
```

### Get Single Blog Post

**Endpoint**: `GET /api/dev/blog-posts/{id}`

**Response**:

```json
{
  "success": true,
  "data": {
    "id": "post-id",
    "title": "Post Title"
    // ... all post fields
  }
}
```

### Update Blog Post

**Endpoint**: `PATCH /api/dev/blog-posts/{id}`

**Request Body**: Same as create, but all fields are optional

```json
{
  "title": "Updated Title",
  "content": "Updated content"
}
```

### Delete Blog Post

**Endpoint**: `DELETE /api/dev/blog-posts/{id}`

**Response**:

```json
{
  "success": true,
  "message": "Blog post deleted successfully"
}
```

### Bulk Create Blog Posts

**Endpoint**: `POST /api/dev/blog-posts/bulk`

**Request Body**:

```json
{
  "posts": [
    {
      "title": "First Post",
      "content": "Content here"
    },
    {
      "title": "Second Post",
      "content": "More content"
    }
  ]
}
```

**Response**:

```json
{
  "success": true,
  "message": "Successfully created 2 blog posts",
  "data": [
    /* array of created posts */
  ],
  "errors": [
    /* array of any errors */
  ],
  "summary": {
    "total": 2,
    "created": 2,
    "failed": 0
  }
}
```

## Development Pages API (`/api/dev/pages`)

### Create Page

**Endpoint**: `POST /api/dev/pages`

**Request Body**:

```json
{
  "title": "Your Page Title",
  "slug": "optional-custom-slug", // Auto-generated if not provided
  "pageType": "static", // Options: "homepage", "service", "service-area", "static"
  "content": "# Your page content in markdown",
  "excerpt": "Brief description of the page",
  "publishedDate": "2025-10-08T10:00:00Z", // Optional, defaults to now
  "status": "published", // Optional: "published" or "draft"
  "featuredImage": "media-id", // Optional media ID
  "seo": {
    "title": "SEO title override",
    "description": "Meta description",
    "keywords": "comma, separated, keywords",
    "image": "media-id"
  }
}
```

### Get All Pages

**Endpoint**: `GET /api/dev/pages`

**Query Parameters**:

- `page` (number): Page number for pagination (default: 1)
- `limit` (number): Number of pages per page (default: 10)
- `pageType` (string): Filter by page type - "homepage", "service", "service-area", "static"
- `status` (string): Filter by status - "published" or "draft" (default: "published")

**Example**: `GET /api/dev/pages?pageType=service&page=1&limit=20`

### Get Single Page

**Endpoint**: `GET /api/dev/pages/{id}`

### Update Page

**Endpoint**: `PATCH /api/dev/pages/{id}`

### Delete Page

**Endpoint**: `DELETE /api/dev/pages/{id}`

### Bulk Create Pages

**Endpoint**: `POST /api/dev/pages/bulk`

**Request Body**:

```json
{
  "pages": [
    {
      "title": "First Page",
      "pageType": "static",
      "content": "Content here"
    },
    {
      "title": "Service Page",
      "pageType": "service",
      "content": "Service content"
    }
  ]
}
```

**Response**:

```json
{
  "success": true,
  "message": "Successfully created 2 pages",
  "data": [
    /* array of created pages */
  ],
  "errors": [
    /* array of any errors */
  ],
  "summary": {
    "total": 2,
    "created": 2,
    "failed": 0
  }
}
```

**Request Body**:

```json
{
  "pages": [
    {
      "title": "First Page",
      "pageType": "static",
      "content": "Content here"
    },
    {
      "title": "Service Page",
      "pageType": "service",
      "content": "Service content"
    }
  ]
}
```

## Native Payload CMS APIs

In addition to the development APIs, Payload CMS provides native REST and GraphQL APIs that work in both development and production:

### REST API Endpoints

- **Collections**: `GET/POST/PATCH/DELETE /api/{collection-slug}`
- **Documents**: `GET/PATCH/DELETE /api/{collection-slug}/{id}`
- **Authentication**: `POST /api/users/login`, `POST /api/users/logout`

### Available Collections

- **Blog Posts**: `/api/blog-posts`
- **Pages**: `/api/pages`
- **Categories**: `/api/categories`
- **Tags**: `/api/tags`
- **Media**: `/api/media`

### Examples:

```bash
# Get all blog posts (native API)
curl "http://localhost:3000/api/blog-posts"

# Get pages with filtering
curl "http://localhost:3000/api/pages?where[pageType][equals]=service"

# Get specific page by ID
curl "http://localhost:3000/api/pages/60"

# Create content (requires authentication in production)
curl -X POST "http://localhost:3000/api/blog-posts" \
  -H "Content-Type: application/json" \
  -d '{"title": "Test Post", "content": "Test content"}'
```

### GraphQL API

- **Endpoint**: `GET/POST /api/graphql`
- **Playground**: Available in development at `/api/graphql-playground`

### Query Examples:

```graphql
# Get all blog posts
query {
  BlogPosts {
    docs {
      id
      title
      slug
      excerpt
      publishedDate
    }
  }
}

# Get pages by type
query {
  Pages(where: { pageType: { equals: service } }) {
    docs {
      id
      title
      slug
      pageType
      content
    }
  }
}
```

## Other API Endpoints

### Web Vitals Tracking

**Endpoint**: `POST /api/web-vitals`

Collects Core Web Vitals metrics for performance monitoring.

**Request Body**:

```json
{
  "id": "metric-id",
  "name": "CLS",
  "value": 0.1,
  "url": "/page-url",
  "timestamp": "2025-10-08T10:00:00Z"
}
```

## Error Handling

All endpoints return consistent error responses:

```json
{
  "success": false,
  "error": "Error message",
  "details": "Additional error details"
}
```

**Common HTTP Status Codes**:

- `200`: Success
- `400`: Bad Request (validation errors)
- `404`: Not Found
- `500`: Server Error

## Usage Examples

### JavaScript/TypeScript

```javascript
// Create a blog post
const response = await fetch('/api/blog-posts', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    title: 'Tree Care Tips for Winter',
    content: '# Winter Tree Care\n\nWinter can be tough on trees...',
    excerpt: 'Learn how to protect your trees during winter months.',
  }),
})

const result = await response.json()
console.log(result)
```

### cURL

```bash
# Create a blog post
curl -X POST http://localhost:3000/api/blog-posts \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Tree Care Tips for Winter",
    "content": "# Winter Tree Care\n\nWinter can be tough on trees...",
    "excerpt": "Learn how to protect your trees during winter months."
  }'

# Get all blog posts
curl http://localhost:3000/api/blog-posts?page=1&limit=10

# Update a blog post
curl -X PATCH http://localhost:3000/api/blog-posts/POST_ID \
  -H "Content-Type: application/json" \
  -d '{"title": "Updated Title"}'
```

### Python

```python
import requests

# Create a blog post
response = requests.post('http://localhost:3000/api/blog-posts', json={
    'title': 'Tree Care Tips for Winter',
    'content': '# Winter Tree Care\n\nWinter can be tough on trees...',
    'excerpt': 'Learn how to protect your trees during winter months.'
})

result = response.json()
print(result)
```

## Testing

Run the test script to verify all endpoints are working:

```bash
npx tsx scripts/test-api.ts
```

## Native Payload CMS APIs

In addition to these custom endpoints, Payload CMS also provides native REST and GraphQL APIs:

### REST API

- **Collections**: `GET/POST/PATCH/DELETE /api/{collection-slug}`
- **Documents**: `GET/PATCH/DELETE /api/{collection-slug}/{id}`

### GraphQL API

- **Endpoint**: `/api/graphql`
- **Playground**: Available in development at `/admin/api/graphql`

### Examples:

```bash
# Native Payload REST API
curl http://localhost:3000/api/blog-posts
curl http://localhost:3000/api/pages

# Create via native API
curl -X POST http://localhost:3000/api/blog-posts \
  -H "Content-Type: application/json" \
  -d '{"title": "Test", "content": "Content"}'
```

## Production Usage

For production content management, use the native Payload CMS APIs or the admin interface:

### Native Payload CMS APIs (Available in Production)

```bash
# These work in production
GET https://your-domain.com/api/blog-posts
GET https://your-domain.com/api/pages
POST https://your-domain.com/api/blog-posts (with proper auth)
```

### Admin Interface (Recommended for Production)

- Access the admin panel at `https://your-domain.com/admin`
- Create and manage content through the web interface
- Full authentication and authorization

## Next Steps

1. **Enable for Production**: Remove environment checks if you want these endpoints in production
2. **Authentication**: Add API key or JWT authentication for production use
3. **Rate Limiting**: Implement rate limiting to prevent abuse
4. **Validation**: Add more robust input validation
5. **Caching**: Implement caching for better performance
6. **Webhooks**: Add webhook support for integration with other systems

EXAMPLE PAYLOAD TO USE FOR FUTURE SCRIPT:

```json
{
  "title": "Safe Tree Removal Services",
  "slug": "tree-removal/safe-tree-removal",
  "pageType": "static",
  "content": {
    "root": {
      "type": "root",
      "format": "",
      "indent": 0,
      "version": 1,
      "children": [
        {
          "children": [
            {
              "detail": 0,
              "format": 1,
              "mode": "normal",
              "style": "",
              "text": "Professional Safe Tree Removal Services",
              "type": "text",
              "version": 1
            }
          ],
          "direction": "ltr",
          "format": "",
          "indent": 0,
          "type": "heading",
          "version": 1,
          "tag": "h1"
        },
        {
          "children": [
            {
              "detail": 0,
              "format": 0,
              "mode": "normal",
              "style": "",
              "text": "Clean Cut Trees has been Utah'\''s trusted safe tree removal specialist for over 15 years, safely removing thousands of trees while protecting property, utilities, and surrounding landscapes. Our certified arborists and trained removal crews use advanced techniques, specialized equipment, and comprehensive safety protocols to ensure every removal is completed without incident or damage to your property.",
              "type": "text",
              "version": 1
            }
          ],
          "direction": "ltr",
          "format": "",
          "indent": 0,
          "type": "paragraph",
          "version": 1
        },
        {
          "children": [
            {
              "detail": 0,
              "format": 1,
              "mode": "normal",
              "style": "",
              "text": "Comprehensive Pre-Removal Assessment",
              "type": "text",
              "version": 1
            }
          ],
          "direction": "ltr",
          "format": "",
          "indent": 0,
          "type": "heading",
          "version": 1,
          "tag": "h2"
        },
        {
          "children": [
            {
              "detail": 0,
              "format": 0,
              "mode": "normal",
              "style": "",
              "text": "Safe tree removal begins with thorough assessment and planning. Our certified arborists evaluate tree condition and structural integrity, identify potential hazards including power lines and structures, assess site access and equipment requirements, and develop detailed removal strategies. We consider factors like tree lean, decay patterns, surrounding obstacles, and environmental conditions to ensure the safest possible removal approach.",
              "type": "text",
              "version": 1
            }
          ],
          "direction": "ltr",
          "format": "",
          "indent": 0,
          "type": "paragraph",
          "version": 1
        },
        {
          "children": [
            {
              "detail": 0,
              "format": 1,
              "mode": "normal",
              "style": "",
              "text": "Advanced Removal Techniques",
              "type": "text",
              "version": 1
            }
          ],
          "direction": "ltr",
          "format": "",
          "indent": 0,
          "type": "heading",
          "version": 1,
          "tag": "h2"
        },
        {
          "children": [
            {
              "detail": 0,
              "format": 0,
              "mode": "normal",
              "style": "",
              "text": "We employ multiple specialized removal techniques based on site conditions and tree characteristics. Sectional removal for trees near structures dismantles trees piece by piece using advanced rigging systems. Crane-assisted removal provides precise control for large trees in tight spaces. Directional felling safely brings down trees in open areas. Our crews are expert in controlled lowering techniques, precision cutting, and advanced rigging systems that eliminate unpredictable tree behavior.",
              "type": "text",
              "version": 1
            }
          ],
          "direction": "ltr",
          "format": "",
          "indent": 0,
          "type": "paragraph",
          "version": 1
        },
        {
          "children": [
            {
              "detail": 0,
              "format": 1,
              "mode": "normal",
              "style": "",
              "text": "Professional Equipment and Safety Protocols",
              "type": "text",
              "version": 1
            }
          ],
          "direction": "ltr",
          "format": "",
          "indent": 0,
          "type": "heading",
          "version": 1,
          "tag": "h2"
        },
        {
          "children": [
            {
              "detail": 0,
              "format": 0,
              "mode": "normal",
              "style": "",
              "text": "Our safety-first approach includes state-of-the-art equipment and strict protocols. We use professional-grade chainsaws with safety features, climbing equipment certified for arborist work, rigging hardware rated for tree loads, and crane services for complex removals. All crew members wear comprehensive PPE, follow OSHA safety standards, maintain constant communication during operations, and establish secure work zones to protect property and bystanders.",
              "type": "text",
              "version": 1
            }
          ],
          "direction": "ltr",
          "format": "",
          "indent": 0,
          "type": "paragraph",
          "version": 1
        },
        {
          "children": [
            {
              "detail": 0,
              "format": 1,
              "mode": "normal",
              "style": "",
              "text": "Property and Landscape Protection",
              "type": "text",
              "version": 1
            }
          ],
          "direction": "ltr",
          "format": "",
          "indent": 0,
          "type": "heading",
          "version": 1,
          "tag": "h2"
        },
        {
          "children": [
            {
              "detail": 0,
              "format": 0,
              "mode": "normal",
              "style": "",
              "text": "Protecting your property during tree removal is our priority. We use protective barriers for structures and vehicles, plywood and padding for sensitive landscaping, strategic placement of debris to minimize impact, and careful route planning for equipment access. Our crews work methodically to preserve existing trees, gardens, hardscaping, and lawn areas. We guarantee zero damage to your property when proper access is provided.",
              "type": "text",
              "version": 1
            }
          ],
          "direction": "ltr",
          "format": "",
          "indent": 0,
          "type": "paragraph",
          "version": 1
        },
        {
          "children": [
            {
              "detail": 0,
              "format": 1,
              "mode": "normal",
              "style": "",
              "text": "Utility Coordination and Clearance",
              "type": "text",
              "version": 1
            }
          ],
          "direction": "ltr",
          "format": "",
          "indent": 0,
          "type": "heading",
          "version": 1,
          "tag": "h2"
        },
        {
          "children": [
            {
              "detail": 0,
              "format": 0,
              "mode": "normal",
              "style": "",
              "text": "Trees near power lines and utilities require specialized coordination. We work directly with utility companies to ensure safe clearances, coordinate temporary service disconnection when necessary, use specialized techniques for working near energized lines, and maintain required safety distances throughout the removal process. Our crews are trained in electrical hazard recognition and follow strict protocols when working near any utility infrastructure.",
              "type": "text",
              "version": 1
            }
          ],
          "direction": "ltr",
          "format": "",
          "indent": 0,
          "type": "paragraph",
          "version": 1
        },
        {
          "children": [
            {
              "detail": 0,
              "format": 1,
              "mode": "normal",
              "style": "",
              "text": "Complete Cleanup and Stump Options",
              "type": "text",
              "version": 1
            }
          ],
          "direction": "ltr",
          "format": "",
          "indent": 0,
          "type": "heading",
          "version": 1,
          "tag": "h2"
        },
        {
          "children": [
            {
              "detail": 0,
              "format": 0,
              "mode": "normal",
              "style": "",
              "text": "Safe tree removal includes complete site cleanup and restoration. We provide thorough debris removal and hauling, professional wood chipping for organic disposal, site raking and restoration, and optional stump grinding services. We can also cut wood to specified lengths for firewood, deliver wood chips for landscaping use, and provide root zone treatment to prevent regrowth. Your property is left clean and ready for new landscaping or other uses.",
              "type": "text",
              "version": 1
            }
          ],
          "direction": "ltr",
          "format": "",
          "indent": 0,
          "type": "paragraph",
          "version": 1
        },
        {
          "children": [
            {
              "detail": 0,
              "format": 1,
              "mode": "normal",
              "style": "",
              "text": "Insurance and Liability Protection",
              "type": "text",
              "version": 1
            }
          ],
          "direction": "ltr",
          "format": "",
          "indent": 0,
          "type": "heading",
          "version": 1,
          "tag": "h2"
        },
        {
          "children": [
            {
              "detail": 0,
              "format": 0,
              "mode": "normal",
              "style": "",
              "text": "Clean Cut Trees carries comprehensive insurance including general liability, worker'\''s compensation, and property damage coverage. We provide certificates of insurance before beginning work, maintain current licensing and bonding, follow all local permit requirements, and document all work with detailed photography. Our insurance and safety record demonstrates our commitment to protecting both our crews and your property interests.",
              "type": "text",
              "version": 1
            }
          ],
          "direction": "ltr",
          "format": "",
          "indent": 0,
          "type": "paragraph",
          "version": 1
        },
        {
          "children": [
            {
              "detail": 0,
              "format": 1,
              "mode": "normal",
              "style": "",
              "text": "Emergency and Scheduled Removal Services",
              "type": "text",
              "version": 1
            }
          ],
          "direction": "ltr",
          "format": "",
          "indent": 0,
          "type": "heading",
          "version": 1,
          "tag": "h2"
        },
        {
          "children": [
            {
              "detail": 0,
              "format": 0,
              "mode": "normal",
              "style": "",
              "text": "We provide both emergency and scheduled tree removal services throughout Utah. Emergency services respond quickly to storm-damaged, fallen, or immediately hazardous trees with 24/7 availability. Scheduled removals allow for optimal planning, timing, and coordination with other landscape projects. Both services maintain our same high safety standards and complete property protection protocols.",
              "type": "text",
              "version": 1
            }
          ],
          "direction": "ltr",
          "format": "",
          "indent": 0,
          "type": "paragraph",
          "version": 1
        },
        {
          "children": [
            {
              "detail": 0,
              "format": 1,
              "mode": "normal",
              "style": "",
              "text": "Safe Tree Removal Estimate: (801) 473-7548",
              "type": "text",
              "version": 1
            }
          ],
          "direction": "ltr",
          "format": "",
          "indent": 0,
          "type": "heading",
          "version": 1,
          "tag": "h3"
        },
        {
          "children": [
            {
              "detail": 0,
              "format": 0,
              "mode": "normal",
              "style": "",
              "text": "Trust your tree removal to Utah'\''s safety experts. Contact Clean Cut Trees for professional assessment and guaranteed safe removal services. Our certified crews protect your property throughout Davis, Weber, and Salt Lake Counties.",
              "type": "text",
              "version": 1
            }
          ],
          "direction": "ltr",
          "format": "",
          "indent": 0,
          "type": "paragraph",
          "version": 1
        }
      ],
      "direction": "ltr"
    }
  },
  "excerpt": "Professional safe tree removal services in Utah. Advanced techniques, comprehensive safety protocols, and complete property protection. Emergency and scheduled removal services available.",
  "status": "published",
  "seo": {
    "title": "Safe Tree Removal Utah | Professional Tree Removal Services Clean Cut Trees",
    "description": "Expert safe tree removal services in Utah. Advanced techniques, comprehensive safety protocols, and property protection. Emergency and scheduled removal available.",
    "keywords": "safe tree removal, tree removal services, professional tree removal, emergency tree removal, Utah tree removal"
  }
}
```

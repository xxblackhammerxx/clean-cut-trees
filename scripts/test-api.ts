/**
 * API Test Script
 *
 * Run this script to test the blog posts and pages API endpoints
 * Usage: npx tsx scripts/test-api.ts
 */

// Test the API endpoints locally
const BASE_URL = 'http://localhost:3000'

async function testBlogPostAPI() {
  console.log('🧪 Testing Blog Post API...')

  try {
    // Test creating a blog post
    const createResponse = await fetch(`${BASE_URL}/api/blog-posts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: 'Test Blog Post from API',
        content: '# Test Content\n\nThis is a test blog post created via API.',
        excerpt: 'A test blog post to verify the API is working correctly.',
      }),
    })

    const createResult = await createResponse.json()
    console.log('✅ Create Blog Post:', createResult)

    if (createResult.success && createResult.data) {
      const postId = createResult.data.id

      // Test getting the blog post
      const getResponse = await fetch(`${BASE_URL}/api/blog-posts/${postId}`)
      const getResult = await getResponse.json()
      console.log('✅ Get Blog Post:', getResult)

      // Test updating the blog post
      const updateResponse = await fetch(`${BASE_URL}/api/blog-posts/${postId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: 'Updated Test Blog Post from API',
        }),
      })

      const updateResult = await updateResponse.json()
      console.log('✅ Update Blog Post:', updateResult)

      // Test deleting the blog post
      const deleteResponse = await fetch(`${BASE_URL}/api/blog-posts/${postId}`, {
        method: 'DELETE',
      })

      const deleteResult = await deleteResponse.json()
      console.log('✅ Delete Blog Post:', deleteResult)
    }

    // Test getting all blog posts
    const listResponse = await fetch(`${BASE_URL}/api/blog-posts?page=1&limit=5`)
    const listResult = await listResponse.json()
    console.log('✅ List Blog Posts:', {
      success: listResult.success,
      count: listResult.data?.length || 0,
      pagination: listResult.pagination,
    })
  } catch (error) {
    console.error('❌ Blog Post API Error:', error)
  }
}

async function testPageAPI() {
  console.log('\n🧪 Testing Page API...')

  try {
    // Test creating a page
    const createResponse = await fetch(`${BASE_URL}/api/pages`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: 'Test Page from API',
        pageType: 'static',
        content: '# Test Page Content\n\nThis is a test page created via API.',
        excerpt: 'A test page to verify the API is working correctly.',
      }),
    })

    const createResult = await createResponse.json()
    console.log('✅ Create Page:', createResult)

    if (createResult.success && createResult.data) {
      const pageId = createResult.data.id

      // Test getting the page
      const getResponse = await fetch(`${BASE_URL}/api/pages/${pageId}`)
      const getResult = await getResponse.json()
      console.log('✅ Get Page:', getResult)

      // Test updating the page
      const updateResponse = await fetch(`${BASE_URL}/api/pages/${pageId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: 'Updated Test Page from API',
        }),
      })

      const updateResult = await updateResponse.json()
      console.log('✅ Update Page:', updateResult)

      // Test deleting the page
      const deleteResponse = await fetch(`${BASE_URL}/api/pages/${pageId}`, {
        method: 'DELETE',
      })

      const deleteResult = await deleteResponse.json()
      console.log('✅ Delete Page:', deleteResult)
    }

    // Test getting all pages
    const listResponse = await fetch(`${BASE_URL}/api/pages?page=1&limit=5`)
    const listResult = await listResponse.json()
    console.log('✅ List Pages:', {
      success: listResult.success,
      count: listResult.data?.length || 0,
      pagination: listResult.pagination,
    })
  } catch (error) {
    console.error('❌ Page API Error:', error)
  }
}

async function testBulkAPI() {
  console.log('\n🧪 Testing Bulk Creation API...')

  try {
    // Test bulk blog post creation
    const bulkBlogResponse = await fetch(`${BASE_URL}/api/blog-posts/bulk`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        posts: [
          {
            title: 'Bulk Test Post 1',
            content: 'Content for bulk test post 1',
            excerpt: 'Excerpt for bulk test post 1',
          },
          {
            title: 'Bulk Test Post 2',
            content: 'Content for bulk test post 2',
            excerpt: 'Excerpt for bulk test post 2',
          },
        ],
      }),
    })

    const bulkBlogResult = await bulkBlogResponse.json()
    console.log('✅ Bulk Create Blog Posts:', bulkBlogResult)

    // Test bulk page creation
    const bulkPageResponse = await fetch(`${BASE_URL}/api/pages/bulk`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        pages: [
          {
            title: 'Bulk Test Page 1',
            pageType: 'static',
            content: 'Content for bulk test page 1',
            excerpt: 'Excerpt for bulk test page 1',
          },
          {
            title: 'Bulk Test Page 2',
            pageType: 'static',
            content: 'Content for bulk test page 2',
            excerpt: 'Excerpt for bulk test page 2',
          },
        ],
      }),
    })

    const bulkPageResult = await bulkPageResponse.json()
    console.log('✅ Bulk Create Pages:', bulkPageResult)
  } catch (error) {
    console.error('❌ Bulk API Error:', error)
  }
}

async function runAllTests() {
  console.log('🚀 Starting API Tests...\n')

  // Check if we're in development
  if (process.env.NODE_ENV === 'production') {
    console.log('❌ These API endpoints are only available in development mode.')
    console.log(
      'Set NODE_ENV=development or run with: NODE_ENV=development npx tsx scripts/test-api.ts',
    )
    return
  }

  console.log('✅ Running in development mode - APIs available\n')

  await testBlogPostAPI()
  await testPageAPI()
  await testBulkAPI()

  console.log('\n🎉 All API tests completed!')
}

// Run the tests if this file is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  runAllTests().catch(console.error)
}

export { runAllTests, testBlogPostAPI, testBulkAPI, testPageAPI }

import config from '@/payload.config'
import { MetadataRoute } from 'next'
import { getPayload } from 'payload'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  const baseUrl = 'https://cleancutstrees.com'

  // Static routes
  const staticRoutes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/contact-us`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/service-areas`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/about-us`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/testimonials`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/photo-gallery`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/real-salt-lake-partnership`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/referrals`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/free-wood-chips`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.4,
    },
    {
      url: `${baseUrl}/news-media`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.4,
    },
  ]

  try {
    // Get all published pages
    const [services, serviceAreas, blogPosts] = await Promise.all([
      payload.find({
        collection: 'pages',
        where: {
          pageType: {
            equals: 'service',
          },
        },
        limit: 1000,
      }),
      payload.find({
        collection: 'pages',
        where: {
          pageType: {
            equals: 'service-area',
          },
        },
        limit: 1000,
      }),
      payload.find({
        collection: 'blog-posts',
        limit: 1000,
      }),
    ])

    // Service pages
    const serviceRoutes = services.docs.map(
      (service: { slug?: string | null; updatedAt: string }) => ({
        url: `${baseUrl}/services/${service.slug}`,
        lastModified: new Date(service.updatedAt),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
      }),
    )

    // Service area pages
    const serviceAreaRoutes = serviceAreas.docs.map(
      (area: { slug?: string | null; updatedAt: string }) => ({
        url: `${baseUrl}/service-areas/${area.slug}`,
        lastModified: new Date(area.updatedAt),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
      }),
    )

    // Blog posts
    const blogRoutes = blogPosts.docs.map((post: { slug?: string | null; updatedAt: string }) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.updatedAt),
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    }))

    return [...staticRoutes, ...serviceRoutes, ...serviceAreaRoutes, ...blogRoutes]
  } catch (error) {
    console.error('Error generating sitemap:', error)
    return staticRoutes
  }
}

// redirects.config.js
// Clean Cuts Trees — canonical + legacy cleanup (middleware handles archives + feeds)

const redirects = [
  // ─────────────────────────────────────────────────────────────
  // 0) Canonical domain & protocol (production only)
  // ─────────────────────────────────────────────────────────────
  // www → apex
  ...(process.env.NODE_ENV === 'production'
    ? [
        {
          source: '/:path*',
          has: [{ type: 'header', key: 'host', value: 'www.cleancutstrees.com' }],
          destination: 'https://cleancutstrees.com/:path*',
          permanent: true,
        },
      ]
    : []),
  // http → https (production only)
  ...(process.env.NODE_ENV === 'production'
    ? [
        {
          source: '/:path*',
          has: [{ type: 'header', key: 'x-forwarded-proto', value: 'http' }],
          destination: 'https://cleancutstrees.com/:path*',
          permanent: true,
        },
      ]
    : []),
  // Place these BEFORE the global "/:path*/" → "/:path*" rule
  {
    source: '/news-media',
    destination: '/blog',
    permanent: true,
  },
  {
    source: '/news-media/',
    destination: '/blog',
    permanent: true,
  },
  {
    source: '/2021/03/25/tree-removal-permit-in-ogden-ut-city-of-ogden-tree-ordinance',
    destination: '/services/tree-removal',
    permanent: true,
  },

  // ─────────────────────────────────────────────────────────────
  // 1) Global trailing slash removal (except root)
  // ─────────────────────────────────────────────────────────────
  {
    source: '/:path+/',
    destination: '/:path+',
    permanent: true,
  },

  // ─────────────────────────────────────────────────────────────
  // 2) Path convention fixes
  // ─────────────────────────────────────────────────────────────
  // service_areas → service-areas
  {
    source: '/service_areas/:slug*',
    destination: '/service-areas/:slug*',
    permanent: true,
  },

  // City short-path fallbacks → canonical service-area slugs
  {
    source: '/service-areas/plain-city',
    destination: '/service-areas/plain-city-ut-tree-service',
    permanent: true,
  },
  {
    source: '/service-areas/north-salt-lake',
    destination: '/service-areas/north-salt-lake-ut-tree-service',
    permanent: true,
  },
  {
    source: '/service-areas/north-ogden',
    destination: '/service-areas/north-ogden-ut-tree-service',
    permanent: true,
  },

  {
    source: '/service_areas/:slug*',
    destination: '/service-areas/:slug*',
    permanent: true,
  },
  // singular /service → /services
  {
    source: '/service/:slug*',
    destination: '/services/:slug*',
    permanent: true,
  },

  // legacy top-level service slugs
  { source: '/tree-trimming', destination: '/services/tree-trimming', permanent: true },
  { source: '/service/tree-trimming', destination: '/services/tree-trimming', permanent: true },
  { source: '/service/tree-removal', destination: '/services/tree-removal', permanent: true },
  // Specific service rename you had
  {
    source: '/services/emergency-tree-damage',
    destination: '/services/emergency-tree-service',
    permanent: true,
  },

  // Home & sitemap cleanup
  { source: '/home', destination: '/', permanent: true },
  { source: '/sitemap', destination: '/sitemap.xml', permanent: true },

  // Specific service rename from your list
  {
    source: '/services/emergency-tree-damage',
    destination: '/services/emergency-tree-service',
    permanent: true,
  },

  // ─────────────────────────────────────────────────────────────
  // 3) WordPress → new blog routes (pattern catch-all)
  // ─────────────────────────────────────────────────────────────
  {
    source: '/:year(\\d{4})/:month(\\d{2})/:day(\\d{2})/:slug',
    destination: '/blog/:slug',
    permanent: true,
  },
  {
    source: '/:year(\\d{4})/:month(\\d{2})/:day(\\d{2})/:slug/feed',
    destination: '/blog/:slug',
    permanent: true,
  },
  // Legacy WP query by ID → blog hub (best-effort)
  {
    source: '/',
    has: [{ type: 'query', key: 'p' }],
    destination: '/blog',
    permanent: true,
  },

  // ─────────────────────────────────────────────────────────────
  // 4) Legacy/utility pages
  // ─────────────────────────────────────────────────────────────
  { source: '/divi_overlay/form', destination: '/contact-us', permanent: true },
  { source: '/demo', destination: '/', permanent: true },
  { source: '/sample-page', destination: '/', permanent: true },
  { source: '/thank-you', destination: '/contact-us', permanent: true },

  // ─────────────────────────────────────────────────────────────
  // 5) Blog pagination (keep one canonical hub)
  // ─────────────────────────────────────────────────────────────
  { source: '/blog/page/:number', destination: '/blog', permanent: true },
  { source: '/press-release-tag/:slug*', destination: '/blog', permanent: true },

  // NOTE:
  // - Archives (/tag|/category|/author) are NOT redirected here.
  //   Middleware adds `x-robots-tag: noindex, follow` to those.
  // - Feed endpoints are handled by middleware (regex on /feed).
]

export default redirects

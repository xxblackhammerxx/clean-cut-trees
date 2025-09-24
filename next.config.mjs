import { withPayload } from '@payloadcms/next/withPayload'
import redirects from './redirects.config.js'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Performance optimizations
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 768, 1024, 1280, 1600],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 year
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    // Use loader for better caching
    loader: 'default',
    // Optimize loading for better LCP
    unoptimized: false,
  },

  // Compression
  compress: true,

  // Generate smaller chunks
  productionBrowserSourceMaps: false,

  // Bundle analysis
  ...(process.env.ANALYZE === 'true'
    ? {
        webpack: (config, { isServer }) => {
          if (!isServer) {
            config.resolve.fallback = {
              ...config.resolve.fallback,
              fs: false,
            }
          }
          return config
        },
      }
    : {}),

  // Redirects for URL migration
  async redirects() {
    return redirects
  },

  // Webpack optimizations
  webpack: (webpackConfig, { dev, isServer }) => {
    webpackConfig.resolve.extensionAlias = {
      '.cjs': ['.cts', '.cjs'],
      '.js': ['.ts', '.tsx', '.js', '.jsx'],
      '.mjs': ['.mts', '.mjs'],
    }

    // Production optimizations
    if (!dev && !isServer) {
      // Optimize chunk splitting for better caching
      webpackConfig.optimization.splitChunks = {
        chunks: 'all',
        minSize: 20000,
        maxSize: 200000, // Smaller chunks for better loading
        cacheGroups: {
          default: false,
          vendors: false,
          // Separate vendor bundle
          vendor: {
            name: 'vendor',
            chunks: 'all',
            test: /node_modules/,
            priority: 20,
            reuseExistingChunk: true,
          },
          // Common chunks
          common: {
            name: 'common',
            minChunks: 2,
            chunks: 'all',
            priority: 10,
            reuseExistingChunk: true,
            enforce: true,
          },
          // CSS chunks
          styles: {
            name: 'styles',
            test: /\.(css|scss|sass)$/,
            chunks: 'all',
            priority: 30,
            reuseExistingChunk: true,
          },
          // Payload CMS chunks
          payload: {
            name: 'payload',
            test: /node_modules\/@payloadcms/,
            chunks: 'all',
            priority: 25,
            reuseExistingChunk: true,
          },
        },
      }

      // Tree shaking optimization
      webpackConfig.optimization.usedExports = true
      webpackConfig.optimization.sideEffects = false

      // Minimize bundle size
      webpackConfig.optimization.concatenateModules = true
      
      // Aggressive optimization for production
      webpackConfig.optimization.providedExports = true
      webpackConfig.optimization.innerGraph = true
      
      // Optimize module resolution
      webpackConfig.resolve.symlinks = false
      webpackConfig.resolve.cacheWithContext = false
    }

    return webpackConfig
  },

  // Experimental features for better performance
  experimental: {
    optimizePackageImports: ['@payloadcms/ui', 'react', 'react-dom'],
    webVitalsAttribution: ['CLS', 'LCP', 'FCP', 'FID', 'TTFB', 'INP'],
    // Enable modern bundling
    esmExternals: true,
  },

  // Headers for better caching and performance
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
      {
        // Cache static assets aggressively
        source: '/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // Cache images and media
        source: '/(.*\\.(?:jpg|jpeg|png|gif|webp|avif|svg|ico))',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // Cache fonts
        source: '/(.*\\.(?:woff|woff2|eot|ttf|otf))',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // API routes - shorter cache
        source: '/api/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=300, s-maxage=300',
          },
        ],
      },
    ]
  },
}

export default withPayload(nextConfig, {
  devBundleServerPackages: false,
})

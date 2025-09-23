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
  },

  // Compression
  compress: true,

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
        maxSize: 244000,
        cacheGroups: {
          default: false,
          vendors: false,
          vendor: {
            name: 'vendor',
            chunks: 'all',
            test: /node_modules/,
            priority: 20,
          },
          common: {
            name: 'common',
            minChunks: 2,
            chunks: 'all',
            priority: 10,
            reuseExistingChunk: true,
            enforce: true,
          },
          styles: {
            name: 'styles',
            test: /\.(css|scss|sass)$/,
            chunks: 'all',
            priority: 30,
            reuseExistingChunk: true,
          },
        },
      }

      // Tree shaking optimization
      webpackConfig.optimization.usedExports = true
      webpackConfig.optimization.sideEffects = false
    }

    return webpackConfig
  },

  // Experimental features for better performance
  experimental: {
    optimizePackageImports: ['@payloadcms/ui'],
    webVitalsAttribution: ['CLS', 'LCP', 'FCP', 'FID', 'TTFB', 'INP'],
  },

  // Headers for better caching
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
        ],
      },
      {
        source: '/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
}

export default withPayload(nextConfig, {
  devBundleServerPackages: false,
})

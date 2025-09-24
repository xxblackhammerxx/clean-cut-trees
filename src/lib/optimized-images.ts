// Image optimization utilities for serving optimized versions
export interface OptimizedImageVariant {
  src: string
  width: number
  format: 'webp' | 'avif' | 'jpg' | 'png'
}

// Mapping of original images to their optimized variants
export const optimizedImageMap: Record<string, OptimizedImageVariant[]> = {
  '/Emergency-Tree-Service-Team.jpg': [
    { src: '/optimized/Emergency-Tree-Service-Team-640w.avif', width: 640, format: 'avif' },
    { src: '/optimized/Emergency-Tree-Service-Team-768w.avif', width: 768, format: 'avif' },
    { src: '/optimized/Emergency-Tree-Service-Team-1024w.avif', width: 1024, format: 'avif' },
    { src: '/optimized/Emergency-Tree-Service-Team-640w.webp', width: 640, format: 'webp' },
    { src: '/optimized/Emergency-Tree-Service-Team-768w.webp', width: 768, format: 'webp' },
    { src: '/optimized/Emergency-Tree-Service-Team-1024w.webp', width: 1024, format: 'webp' },
    { src: '/optimized/Emergency-Tree-Service-Team-1280w.webp', width: 1280, format: 'webp' },
    { src: '/optimized/Emergency-Tree-Service-Team-1600w.webp', width: 1600, format: 'webp' },
    { src: '/optimized/Emergency-Tree-Service-Team-optimized.jpg', width: 8002, format: 'jpg' },
  ],
  '/cleancutslogo.png': [
    { src: '/optimized/cleancutslogo-optimized.png', width: 150, format: 'png' },
  ],
  '/Emergency-Tree-Service-Always-Ready.jpg': [
    { src: '/optimized/Emergency-Tree-Service-Always-Ready-640w.avif', width: 640, format: 'avif' },
    { src: '/optimized/Emergency-Tree-Service-Always-Ready-768w.avif', width: 768, format: 'avif' },
    {
      src: '/optimized/Emergency-Tree-Service-Always-Ready-1024w.avif',
      width: 1024,
      format: 'avif',
    },
    { src: '/optimized/Emergency-Tree-Service-Always-Ready-640w.webp', width: 640, format: 'webp' },
    { src: '/optimized/Emergency-Tree-Service-Always-Ready-768w.webp', width: 768, format: 'webp' },
    {
      src: '/optimized/Emergency-Tree-Service-Always-Ready-1024w.webp',
      width: 1024,
      format: 'webp',
    },
    {
      src: '/optimized/Emergency-Tree-Service-Always-Ready-optimized.jpg',
      width: 1215,
      format: 'jpg',
    },
  ],
  '/Emergency-Tree-Service-Equipment.jpg': [
    { src: '/optimized/Emergency-Tree-Service-Equipment-640w.avif', width: 640, format: 'avif' },
    { src: '/optimized/Emergency-Tree-Service-Equipment-768w.avif', width: 768, format: 'avif' },
    { src: '/optimized/Emergency-Tree-Service-Equipment-1024w.avif', width: 1024, format: 'avif' },
    { src: '/optimized/Emergency-Tree-Service-Equipment-640w.webp', width: 640, format: 'webp' },
    { src: '/optimized/Emergency-Tree-Service-Equipment-768w.webp', width: 768, format: 'webp' },
    { src: '/optimized/Emergency-Tree-Service-Equipment-1024w.webp', width: 1024, format: 'webp' },
    {
      src: '/optimized/Emergency-Tree-Service-Equipment-optimized.jpg',
      width: 1215,
      format: 'jpg',
    },
  ],
}

// Get the optimized image source for a given original path
export function getOptimizedImageSrc(originalSrc: string, preferredWidth?: number): string {
  const variants = optimizedImageMap[originalSrc]

  if (!variants || variants.length === 0) {
    // If no optimized version exists, return original
    return originalSrc
  }

  // If no preferred width specified, return the best AVIF format
  if (!preferredWidth) {
    const avifVariant = variants.find((v) => v.format === 'avif')
    return avifVariant ? avifVariant.src : variants[0].src
  }

  // Find the best variant for the preferred width
  // Prefer AVIF > WebP > Original format
  const suitableVariants = variants
    .filter((v) => v.width >= preferredWidth)
    .sort((a, b) => {
      // Sort by format preference first (AVIF > WebP > others)
      const formatPriority = { avif: 3, webp: 2, jpg: 1, png: 1 }
      const aPriority = formatPriority[a.format] || 0
      const bPriority = formatPriority[b.format] || 0

      if (aPriority !== bPriority) {
        return bPriority - aPriority
      }

      // Then sort by width (closest to preferred)
      return a.width - b.width
    })

  return suitableVariants.length > 0 ? suitableVariants[0].src : variants[0].src
}

// Generate srcSet for responsive images
export function generateSrcSet(originalSrc: string): string {
  const variants = optimizedImageMap[originalSrc]

  if (!variants || variants.length === 0) {
    return ''
  }

  // Group by format to create proper srcSet
  const webpVariants = variants.filter((v) => v.format === 'webp')
  const avifVariants = variants.filter((v) => v.format === 'avif')

  // Use AVIF if available, fallback to WebP
  const preferredVariants = avifVariants.length > 0 ? avifVariants : webpVariants

  return preferredVariants.map((v) => `${v.src} ${v.width}w`).join(', ')
}

// Get the optimized source for meta tags and structured data
export function getOptimizedMetaImageSrc(originalSrc: string): string {
  const variants = optimizedImageMap[originalSrc]

  if (!variants || variants.length === 0) {
    return originalSrc
  }

  // For meta tags, prefer WebP for broader compatibility over AVIF
  const webpVariant = variants.find((v) => v.format === 'webp' && v.width >= 1200)
  const largeVariant = variants.find((v) => v.width >= 1200)

  return webpVariant?.src || largeVariant?.src || variants[0].src
}

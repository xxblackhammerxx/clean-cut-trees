#!/usr/bin/env node

/**
 * Image Optimization Script
 * Converts existing images to modern formats (WebP, AVIF) for better performance
 * Also optimizes existing JPEGs and PNGs
 */

import fs from 'fs/promises'
import path from 'path'
import sharp from 'sharp'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const publicDir = path.join(__dirname, '../public')
const mediaDir = path.join(__dirname, '../media')

// Image optimization settings
const QUALITY_SETTINGS = {
  jpeg: { quality: 85, progressive: true },
  webp: { quality: 85, effort: 6 },
  avif: { quality: 75, effort: 9 },
  png: { compressionLevel: 9, progressive: true },
}

const RESIZE_BREAKPOINTS = [
  { width: 400, suffix: '-400w' },
  { width: 800, suffix: '-800w' },
  { width: 1200, suffix: '-1200w' },
  { width: 1600, suffix: '-1600w' },
]

async function getAllImageFiles(dir) {
  const files = []
  const items = await fs.readdir(dir, { withFileTypes: true })

  for (const item of items) {
    const fullPath = path.join(dir, item.name)
    if (item.isDirectory()) {
      files.push(...(await getAllImageFiles(fullPath)))
    } else if (/\.(jpg|jpeg|png)$/i.test(item.name)) {
      files.push(fullPath)
    }
  }

  return files
}

async function optimizeImage(imagePath) {
  try {
    const image = sharp(imagePath)
    const metadata = await image.metadata()
    const { name, ext, dir } = path.parse(imagePath)

    console.log(`Optimizing: ${path.relative(process.cwd(), imagePath)}`)

    // Skip if image is already very small
    if (metadata.width && metadata.width < 400) {
      console.log(`  Skipping small image (${metadata.width}px wide)`)
      return
    }

    // Generate responsive versions
    for (const breakpoint of RESIZE_BREAKPOINTS) {
      if (!metadata.width || metadata.width < breakpoint.width) continue

      const outputName = `${name}${breakpoint.suffix}`

      // Generate WebP version
      await image
        .resize(breakpoint.width, null, { withoutEnlargement: true })
        .webp(QUALITY_SETTINGS.webp)
        .toFile(path.join(dir, `${outputName}.webp`))

      // Generate AVIF version (smaller but more processing)
      await image
        .resize(breakpoint.width, null, { withoutEnlargement: true })
        .avif(QUALITY_SETTINGS.avif)
        .toFile(path.join(dir, `${outputName}.avif`))

      console.log(`    Generated ${outputName}.webp and ${outputName}.avif`)
    }

    // Optimize original format
    if (ext.toLowerCase() === '.jpg' || ext.toLowerCase() === '.jpeg') {
      await image.jpeg(QUALITY_SETTINGS.jpeg).toFile(path.join(dir, `${name}-optimized${ext}`))

      // Replace original with optimized version
      await fs.rename(path.join(dir, `${name}-optimized${ext}`), imagePath)
      console.log(`    Optimized original JPEG`)
    } else if (ext.toLowerCase() === '.png') {
      await image.png(QUALITY_SETTINGS.png).toFile(path.join(dir, `${name}-optimized${ext}`))

      // Replace original with optimized version
      await fs.rename(path.join(dir, `${name}-optimized${ext}`), imagePath)
      console.log(`    Optimized original PNG`)
    }

    // Generate modern format versions for the original size
    const originalName = name
    await image.webp(QUALITY_SETTINGS.webp).toFile(path.join(dir, `${originalName}.webp`))
    await image.avif(QUALITY_SETTINGS.avif).toFile(path.join(dir, `${originalName}.avif`))
    console.log(`    Generated ${originalName}.webp and ${originalName}.avif`)
  } catch (error) {
    console.error(`Error optimizing ${imagePath}:`, error.message)
  }
}

async function main() {
  console.log('🖼️  Starting image optimization...\n')

  try {
    // Get all image files from public and media directories
    const publicImages = await getAllImageFiles(publicDir).catch(() => [])
    const mediaImages = await getAllImageFiles(mediaDir).catch(() => [])
    const allImages = [...publicImages, ...mediaImages]

    if (allImages.length === 0) {
      console.log('No images found to optimize.')
      return
    }

    console.log(`Found ${allImages.length} images to optimize\n`)

    // Process images in batches to avoid overwhelming the system
    const batchSize = 3
    for (let i = 0; i < allImages.length; i += batchSize) {
      const batch = allImages.slice(i, i + batchSize)
      await Promise.all(batch.map(optimizeImage))
    }

    console.log('\n✅ Image optimization complete!')
    console.log('\nNext steps:')
    console.log('1. Update your components to use <picture> elements for responsive images')
    console.log('2. Use the OptimizedImage component for automatic format selection')
    console.log('3. Consider implementing lazy loading for below-the-fold images')
  } catch (error) {
    console.error('Error during image optimization:', error)
    process.exit(1)
  }
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main()
}

export default main

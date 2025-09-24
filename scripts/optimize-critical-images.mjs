#!/usr/bin/env node

import { existsSync, mkdirSync, readdirSync, statSync } from 'fs'
import { basename, extname, join } from 'path'
import sharp from 'sharp'

const PROJECT_ROOT = process.cwd()
const PUBLIC_DIR = join(PROJECT_ROOT, 'public')
const ASSETS_DIR = join(PUBLIC_DIR, 'assets')
const OPTIMIZED_DIR = join(PUBLIC_DIR, 'optimized')

// Image optimization settings
const QUALITY_SETTINGS = {
  jpeg: 85,
  webp: 90,
  avif: 85,
  png: 95,
}

const RESIZE_BREAKPOINTS = [640, 768, 1024, 1280, 1600]

async function optimizeImage(inputPath, outputDir, filename) {
  try {
    const image = sharp(inputPath)
    const metadata = await image.metadata()

    console.log(`Optimizing: ${filename} (${metadata.width}x${metadata.height})`)

    // Create WebP versions for different sizes
    for (const width of RESIZE_BREAKPOINTS) {
      if (width < metadata.width) {
        await image
          .resize(width, null, { withoutEnlargement: true })
          .webp({ quality: QUALITY_SETTINGS.webp })
          .toFile(join(outputDir, `${basename(filename, extname(filename))}-${width}w.webp`))
      }
    }

    // Create AVIF versions for smaller sizes (better compression)
    for (const width of [640, 768, 1024]) {
      if (width < metadata.width) {
        await image
          .resize(width, null, { withoutEnlargement: true })
          .avif({ quality: QUALITY_SETTINGS.avif })
          .toFile(join(outputDir, `${basename(filename, extname(filename))}-${width}w.avif`))
      }
    }

    // Optimize original format
    const ext = extname(filename).toLowerCase()
    if (ext === '.jpg' || ext === '.jpeg') {
      await image
        .jpeg({ quality: QUALITY_SETTINGS.jpeg, progressive: true })
        .toFile(join(outputDir, `${basename(filename, extname(filename))}-optimized.jpg`))
    } else if (ext === '.png') {
      await image
        .png({ quality: QUALITY_SETTINGS.png, compressionLevel: 9 })
        .toFile(join(outputDir, `${basename(filename, extname(filename))}-optimized.png`))
    }

    console.log(`✅ Optimized: ${filename}`)
  } catch (error) {
    console.error(`❌ Failed to optimize ${filename}:`, error.message)
  }
}

async function processDirectory(dirPath, outputDir) {
  if (!existsSync(dirPath)) {
    console.log(`Directory not found: ${dirPath}`)
    return
  }

  if (!existsSync(outputDir)) {
    mkdirSync(outputDir, { recursive: true })
  }

  const files = readdirSync(dirPath)

  for (const file of files) {
    const filePath = join(dirPath, file)
    const stat = statSync(filePath)

    if (stat.isDirectory()) {
      const subOutputDir = join(outputDir, file)
      await processDirectory(filePath, subOutputDir)
    } else {
      const ext = extname(file).toLowerCase()
      if (['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) {
        await optimizeImage(filePath, outputDir, file)
      }
    }
  }
}

async function optimizeCriticalImages() {
  console.log('🚀 Starting critical image optimization...')

  // Optimize hero images with highest priority
  const criticalImages = [
    'Emergency-Tree-Service-Team.jpg',
    'cleancutslogo.png',
    'Emergency-Tree-Service-Always-Ready.jpg',
    'Emergency-Tree-Service-Equipment.jpg',
  ]

  for (const imageName of criticalImages) {
    const imagePath = join(PUBLIC_DIR, imageName)
    if (existsSync(imagePath)) {
      await optimizeImage(imagePath, OPTIMIZED_DIR, imageName)
    }
  }

  // Process assets directory
  if (existsSync(ASSETS_DIR)) {
    await processDirectory(ASSETS_DIR, join(OPTIMIZED_DIR, 'assets'))
  }

  console.log('✅ Image optimization complete!')
  console.log(`Optimized images saved to: ${OPTIMIZED_DIR}`)
}

// Run optimization
optimizeCriticalImages().catch(console.error)

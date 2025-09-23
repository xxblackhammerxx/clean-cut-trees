'use client'
import { useState } from 'react'

interface ResponsiveImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
  sizes?: string
}

export default function ResponsiveImage({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
}: ResponsiveImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)

  // Generate different format sources
  const getImageSources = (baseSrc: string) => {
    const { ext } = parsePath(baseSrc)
    const basePath = baseSrc.replace(ext, '')

    return {
      avif: `${basePath}.avif`,
      webp: `${basePath}.webp`,
      original: baseSrc,
    }
  }

  // Generate responsive sizes for each format
  const getResponsiveSources = (baseSrc: string) => {
    const sources = getImageSources(baseSrc)
    const breakpoints = [400, 800, 1200, 1600]

    return {
      avif: breakpoints
        .map((w) => `${sources.avif.replace('.avif', `-${w}w.avif`)} ${w}w`)
        .join(', '),
      webp: breakpoints
        .map((w) => `${sources.webp.replace('.webp', `-${w}w.webp`)} ${w}w`)
        .join(', '),
      original: breakpoints
        .map((w) => {
          const ext = sources.original.split('.').pop()
          return `${sources.original.replace(`.${ext}`, `-${w}w.${ext}`)} ${w}w`
        })
        .join(', '),
    }
  }

  function parsePath(path: string) {
    const lastDot = path.lastIndexOf('.')
    const name = path.substring(0, lastDot)
    const ext = path.substring(lastDot)
    return { name, ext }
  }

  const sources = getImageSources(src)
  const responsiveSources = getResponsiveSources(src)

  return (
    <div className={`relative ${className}`}>
      <picture>
        {/* AVIF format - best compression */}
        <source srcSet={responsiveSources.avif} sizes={sizes} type="image/avif" />

        {/* WebP format - good compression, wide support */}
        <source srcSet={responsiveSources.webp} sizes={sizes} type="image/webp" />

        {/* Fallback to original format */}
        <img
          src={sources.original}
          srcSet={responsiveSources.original}
          sizes={sizes}
          alt={alt}
          width={width}
          height={height}
          className={`${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
          loading={priority ? 'eager' : 'lazy'}
          decoding={priority ? 'sync' : 'async'}
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          style={{
            maxWidth: '100%',
            height: 'auto',
            ...(width && height && { aspectRatio: `${width} / ${height}` }),
          }}
        />
      </picture>

      {/* Loading placeholder */}
      {!isLoaded && !hasError && (
        <div
          className="absolute inset-0 bg-gray-200 animate-pulse rounded"
          style={{ aspectRatio: width && height ? `${width} / ${height}` : undefined }}
        />
      )}

      {/* Error fallback */}
      {hasError && (
        <div
          className="absolute inset-0 bg-gray-100 flex items-center justify-center text-gray-500 text-sm rounded"
          style={{ aspectRatio: width && height ? `${width} / ${height}` : undefined }}
        >
          Image unavailable
        </div>
      )}
    </div>
  )
}

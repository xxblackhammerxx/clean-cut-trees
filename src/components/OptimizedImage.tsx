'use client'
import Image from 'next/image'
import { useState } from 'react'

interface OptimizedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  priority?: boolean
  className?: string
  sizes?: string
  style?: React.CSSProperties
  fill?: boolean
  loading?: 'lazy' | 'eager'
}

export default function OptimizedImage({
  src,
  alt,
  width = 100,
  height = 100,
  priority = false,
  className = '',
  sizes,
  style,
  fill = false,
  loading = 'lazy',
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)

  // Generate a simple blur placeholder
  const shimmer = (w: number, h: number) => `
    <svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <defs>
        <linearGradient id="g">
          <stop stop-color="#f6f7f8" offset="20%" />
          <stop stop-color="#edeef1" offset="50%" />
          <stop stop-color="#f6f7f8" offset="70%" />
        </linearGradient>
      </defs>
      <rect width="${w}" height="${h}" fill="#f6f7f8" />
      <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
      <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
    </svg>`

  const toBase64 = (str: string) =>
    typeof window === 'undefined' ? Buffer.from(str).toString('base64') : window.btoa(str)

  const blurDataURL = `data:image/svg+xml;base64,${toBase64(shimmer(width, height))}`

  const imageProps = {
    src,
    alt,
    priority,
    className: `${className} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`,
    onLoad: () => setIsLoaded(true),
    onError: () => setHasError(true),
    placeholder: 'blur' as const,
    blurDataURL,
    ...(fill ? { fill: true } : { width, height }),
    ...(sizes && { sizes }),
    ...(style && { style }),
    // Only apply loading prop if priority is not set (priority implies eager loading)
    ...(!priority && loading && { loading }),
  }

  if (hasError) {
    return (
      <div
        className={`${className} bg-gray-200 flex items-center justify-center`}
        style={{ width: fill ? '100%' : width, height: fill ? '100%' : height, ...style }}
      >
        <span className="text-gray-500 text-sm">Image unavailable</span>
      </div>
    )
  }

  return (
    <div className={`relative ${fill ? 'w-full h-full' : ''}`}>
      <Image {...imageProps} />
      {/* {!isLoaded && (
        <div
          className="absolute inset-0 bg-gray-200 animate-pulse"
          style={{ width: fill ? '100%' : width, height: fill ? '100%' : height }}
        />
      )} */}
    </div>
  )
}

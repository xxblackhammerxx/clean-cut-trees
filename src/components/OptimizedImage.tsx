'use client'
import Image from 'next/image'
import { useCallback, useState } from 'react'

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
  quality?: number
  placeholder?: 'blur' | 'empty'
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
  quality = 85,
  placeholder = 'blur',
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)

  // Generate optimized shimmer for better performance
  const shimmer = useCallback(
    (w: number, h: number) => `
    <svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg">
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
    </svg>`,
    [],
  )

  const toBase64 = useCallback(
    (str: string) =>
      typeof window === 'undefined' ? Buffer.from(str).toString('base64') : window.btoa(str),
    [],
  )

  const blurDataURL = `data:image/svg+xml;base64,${toBase64(shimmer(width, height))}`

  const handleLoad = useCallback(() => {
    setIsLoaded(true)
  }, [])

  const handleError = useCallback(() => {
    setHasError(true)
  }, [])

  // Optimized sizes prop for responsive images
  const optimizedSizes =
    sizes || (fill ? '100vw' : '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw')

  const imageProps = {
    src,
    alt,
    priority,
    quality,
    className: `${className} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`,
    onLoad: handleLoad,
    onError: handleError,
    ...(placeholder === 'blur' && { placeholder: 'blur' as const, blurDataURL }),
    ...(fill ? { fill: true } : { width, height }),
    sizes: optimizedSizes,
    ...(style && { style }),
    // Use eager loading for priority images, lazy for others
    loading: priority ? 'eager' : loading,
  }

  if (hasError) {
    return (
      <div
        className={`${className} bg-gray-200 flex items-center justify-center text-gray-500 text-sm`}
        style={{
          width: fill ? '100%' : width,
          height: fill ? '100%' : height,
          ...style,
        }}
        role="img"
        aria-label={`Failed to load image: ${alt}`}
      >
        Image unavailable
      </div>
    )
  }

  return (
    <div className={`relative ${fill ? 'w-full h-full' : ''}`}>
      <Image {...imageProps} alt={alt} />
    </div>
  )
}

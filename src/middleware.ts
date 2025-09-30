import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Handle common WordPress legacy patterns that might not be caught by redirects
  
  // RSS Feed patterns - redirect to blog
  if (pathname.includes('/feed') || pathname.endsWith('/feed/')) {
    const url = request.nextUrl.clone()
    url.pathname = '/blog'
    return NextResponse.redirect(url, 301)
  }

  // WordPress category/tag patterns
  if (pathname.startsWith('/category/') || pathname.startsWith('/tag/') || pathname.startsWith('/author/')) {
    const url = request.nextUrl.clone()
    url.pathname = '/blog'
    return NextResponse.redirect(url, 301)
  }

  // Handle WordPress wp-content, wp-admin, etc.
  if (pathname.startsWith('/wp-')) {
    const url = request.nextUrl.clone()
    url.pathname = '/'
    return NextResponse.redirect(url, 301)
  }

  // Handle divi overlay forms
  if (pathname.includes('divi_overlay')) {
    const url = request.nextUrl.clone()
    url.pathname = '/contact-us'
    return NextResponse.redirect(url, 301)
  }

  // Handle old service patterns
  if (pathname === '/service' || pathname === '/service/') {
    const url = request.nextUrl.clone()
    url.pathname = '/services'
    return NextResponse.redirect(url, 301)
  }

  // Handle old service-area patterns
  if (pathname === '/service-area' || pathname === '/service-area/') {
    const url = request.nextUrl.clone()
    url.pathname = '/service-areas'
    return NextResponse.redirect(url, 301)
  }

  // Handle sample-page and demo pages
  if (pathname === '/sample-page' || pathname === '/sample-page/' || pathname === '/demo' || pathname === '/demo/') {
    const url = request.nextUrl.clone()
    url.pathname = '/'
    return NextResponse.redirect(url, 301)
  }

  // Log redirects in development for debugging
  if (process.env.NODE_ENV === 'development') {
    console.log(`[Middleware] Processing: ${pathname}`)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - robots.txt
     * - sitemap.xml
     */
    '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)',
  ],
}
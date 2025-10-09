import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

const TRACKING_PARAMS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_term',
  'utm_content',
  'gclid',
  'fbclid',
  '_hsenc',
  '_hsmi',
  'ref',
  '_rdr',
]

export function middleware(request: NextRequest) {
  const url = request.nextUrl
  const { pathname, searchParams } = url
  if (
    pathname.startsWith('/.well-known/') ||
    pathname === '/favicon.ico' ||
    pathname === '/manifest.json' ||
    pathname === '/site.webmanifest' ||
    pathname === '/ads.txt'
  ) {
    return NextResponse.next()
  }
  // 1) Strip tracking params → canonical URL
  let mutated = false
  for (const p of TRACKING_PARAMS) {
    if (searchParams.has(p)) {
      searchParams.delete(p)
      mutated = true
    }
  }
  if (mutated) {
    url.search = searchParams.toString()
    return NextResponse.redirect(url, 308)
  }

  // 2) Archives: allow crawl, drop from index (preserve equity)
  if (
    pathname.startsWith('/tag/') ||
    pathname.startsWith('/category/') ||
    pathname.startsWith('/author/')
  ) {
    const res = NextResponse.next()
    res.headers.set('x-robots-tag', 'noindex, follow')
    return res
  }

  // 3) Exact "feed" endpoints → /blog (for humans; robots already disallows)
  if (/(?:^|\/)feed\/?$/.test(pathname)) {
    const to = url.clone()
    to.pathname = '/blog'
    to.search = ''
    return NextResponse.redirect(to, 301)
  }

  // (Optional) dev logging
  if (process.env.NODE_ENV === 'development') {
    console.log(`[Middleware] ${pathname}`)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    // exclude: api, next internals, icons/manifests, robots/sitemap, ads.txt, and .well-known
    '/((?!api|_next/static|_next/image|_next/data|favicon.ico|robots.txt|sitemap.xml|manifest.json|site.webmanifest|ads.txt|\\.well-known).*)',
  ],
}

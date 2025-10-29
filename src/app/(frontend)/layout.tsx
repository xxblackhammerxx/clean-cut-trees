import FloatingBookingButton from '@/components/FloatingBookingButton'
import Footer from '@/components/Footer'
import GoogleAnalytics from '@/components/GoogleAnalytics'
import GoogleTagManager from '@/components/GoogleTagManager'
import GoogleTagManagerNoScript from '@/components/GoogleTagManagerNoScript'
import Navbar from '@/components/Navbar'
import WebVitals from '@/components/WebVitals'
import WebVitalsDashboard from '@/components/WebVitalsDashboard'
import { getCriticalCSS } from '@/lib/critical-css'
import { inter, materialSymbolsConfig } from '@/lib/fonts'
import { getOptimizedImageSrc, getOptimizedMetaImageSrc } from '@/lib/optimized-images'
import React from 'react'
import '../global.css'
import './seo-improvements.css'
import './styles.css'

const heroImageSrc = '/Emergency-Tree-Service-Team.jpg'
const optimizedHeroImage = getOptimizedMetaImageSrc(heroImageSrc)

export const metadata = {
  title: 'Emergency Tree Service & Tree Care | Davis & Weber Counties | Clean Cuts Trees',
  description:
    'Clean Cuts Trees provides expert tree removal, trimming, and 24/7 emergency service across Davis & Weber Counties. Call now for fast, professional help.',
  keywords:
    'emergency tree service, tree removal, tree trimming, 24/7 tree service, Davis County tree service, Weber County tree service, Kaysville UT, Layton UT, tree care Utah',
  metadataBase: new URL('https://cleancutstrees.com'),
  openGraph: {
    title: 'Emergency Tree Service & Tree Care | Davis & Weber Counties | Clean Cuts Trees',
    description:
      'Clean Cuts Trees provides expert tree removal, trimming, and 24/7 emergency service across Davis & Weber Counties. Call now for fast, professional help.',
    images: [
      {
        url: optimizedHeroImage,
        width: 1200,
        height: 630,
        alt: 'Clean Cuts Trees professional emergency tree service team in Davis and Weber Counties - licensed arborists for 24/7 storm damage and tree removal',
      },
    ],
    type: 'website',
    siteName: 'Clean Cuts Trees',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Emergency Tree Service & Tree Care | Davis & Weber Counties | Clean Cuts Trees',
    description:
      'Clean Cuts Trees provides expert tree removal, trimming, and 24/7 emergency service across Davis & Weber Counties. Call now for fast, professional help.',
    images: [optimizedHeroImage],
  },
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  // Get optimized image sources for preloading
  const optimizedHeroImageSrc = getOptimizedImageSrc('/Emergency-Tree-Service-Team.jpg', 1280)
  const optimizedLogoSrc = getOptimizedImageSrc('/cleancutslogo.png')

  // Google tracking IDs
  const gaId = 'G-XXXXXXXXXX' // Replace with your actual Google Analytics 4 ID when you get it
  const gtmId = 'GTM-WLVGKH2M'

  return (
    <html lang="en" className={inter.variable}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://cleancutstrees.com/" />

        {/* DNS Prefetch and Preconnect for Performance */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <link rel="dns-prefetch" href="//vercel.app" />
        <link rel="dns-prefetch" href="//cleancutstrees.com" />
        <link rel="dns-prefetch" href="//online-booking.housecallpro.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//analytics.google.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />

        {/* Critical LCP Image Preloads - Using Optimized Versions */}
        <link rel="preload" as="image" href={optimizedHeroImageSrc} fetchPriority="high" />
        <link rel="preload" as="image" href={optimizedLogoSrc} />

        {/* Font Preloading - Only critical font */}
        <link
          rel="preload"
          href="https://fonts.gstatic.com/s/materialsymbolsoutlined/v256/kJEhBvYX7BgnkSrUwT8OhrdQw4oELdPIeeII9v6oDMzByHX9rA6RzaxHMPdY.woff2"
          as="font"
          type="font/woff2"
          crossOrigin=""
        />

        {/* Optimized Material Symbols Font Loading - Async to avoid render blocking */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var link = document.createElement('link');
                link.rel = 'stylesheet';
                link.href = '${materialSymbolsConfig.href}';
                link.media = 'print';
                link.onload = function() { this.media = 'all'; };
                document.head.appendChild(link);
                
                // Preload critical hero image for LCP optimization - use optimized version
                var heroImg = new Image();
                heroImg.src = '${optimizedHeroImageSrc}';
                heroImg.loading = 'eager';
                heroImg.fetchPriority = 'high';
              })();
            `,
          }}
        />
        <noscript>
          <link rel="stylesheet" href={materialSymbolsConfig.href} />
        </noscript>

        {/* Additional SEO Meta Tags */}
        <meta name="geo.region" content="US-UT" />
        <meta name="geo.placename" content="Davis County, Weber County, Utah" />
        <meta name="geo.position" content="41.1220;-111.9738" />
        <meta name="ICBM" content="41.1220, -111.9738" />

        {/* Favicon */}
        <link rel="icon" type="image/png" href="/cleancutslogo.png" />
        <link rel="apple-touch-icon" href="/cleancutslogo.png" />
        <link rel="shortcut icon" href="/cleancutslogo.png" />

        {/* Inline critical font styles for immediate rendering */}
        <style
          dangerouslySetInnerHTML={{
            __html: getCriticalCSS(),
          }}
        />

        {/* HouseCallPro Online Booking Script - Defer for better performance */}
        <script
          defer
          src="https://online-booking.housecallpro.com/script.js?token=b4a00fdb66b64c1da2f367aa3c485101&orgName=Clean-Cuts-Trees"
        />

        {/* Essential structured data only */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'Clean Cuts Trees',
              image: `https://cleancutstrees.com${optimizedHeroImage}`,
              description:
                'Emergency tree service and tree care company serving Davis and Weber Counties, Utah. 24/7 emergency tree removal, tree trimming, and professional tree services.',
              url: 'https://cleancutstrees.com',
              telephone: '+1-801-473-7548',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Fruit Heights',
                addressRegion: 'UT',
                postalCode: '84037',
                addressCountry: 'US',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 41.122,
                longitude: -111.9738,
              },
              areaServed: ['Davis County, UT', 'Weber County, UT', 'Salt Lake County, UT'],
              serviceType: ['Emergency Tree Service', 'Tree Removal', 'Tree Care', 'Tree Trimming'],
            }),
          }}
        />
        {/* Google Analytics */}
        {gaId !== 'G-XXXXXXXXXX' && <GoogleAnalytics gaId={gaId} />}

        {/* Google Tag Manager */}
        <GoogleTagManager gtmId={gtmId} />
      </head>
      <body className={inter.className} suppressHydrationWarning={true}>
        {/* Google Tag Manager (noscript) - Must be immediately after opening body tag */}
        <GoogleTagManagerNoScript gtmId={gtmId} />

        <WebVitals debug={process.env.NODE_ENV === 'development'} />
        <WebVitalsDashboard />
        <Navbar />
        <main style={{ paddingTop: '100px' }}>{children}</main>
        <Footer />
        <FloatingBookingButton />
      </body>
    </html>
  )
}

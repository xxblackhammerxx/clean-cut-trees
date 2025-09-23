import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import FloatingBookingButton from '@/components/FloatingBookingButton'
import React from 'react'
import './styles.css'
import './seo-improvements.css'

// For now, we'll keep the font link in the head for Material Symbols
// Future improvement: convert to next/font when Material Symbols is supported

export const metadata = {
  title: 'Emergency Tree Service & Tree Care | Davis & Weber Counties | Clean Cuts Trees',
  description:
    'Clean Cuts Trees provides expert tree removal, trimming, and 24/7 emergency service across Davis & Weber Counties. Call now for fast, professional help.',
  keywords:
    'emergency tree service, tree removal, tree trimming, 24/7 tree service, Davis County tree service, Weber County tree service, Kaysville UT, Layton UT, tree care Utah',
  metadataBase: new URL('https://cleancutstrees.com'),
  openGraph: {
    title: 'Emergency Tree Service & Tree Care | Davis & Weber Counties | Clean Cuts Trees',
    description: 'Clean Cuts Trees provides expert tree removal, trimming, and 24/7 emergency service across Davis & Weber Counties. Call now for fast, professional help.',
    images: [
      {
        url: '/Emergency-Tree-Service-Team.jpg',
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
    description: 'Clean Cuts Trees provides expert tree removal, trimming, and 24/7 emergency service across Davis & Weber Counties. Call now for fast, professional help.',
    images: ['/Emergency-Tree-Service-Team.jpg'],
  },
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://cleancutstrees.com/" />
        
        {/* Critical Image Preloads for Performance */}
        <link rel="preload" as="image" href="/Emergency-Tree-Service-Team.jpg" />
        <link rel="preload" as="image" href="/cleancutslogo.png" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="geo.region" content="US-UT" />
        <meta name="geo.placename" content="Davis County, Weber County, Utah" />
        <meta name="geo.position" content="41.1220;-111.9738" />
        <meta name="ICBM" content="41.1220, -111.9738" />

        {/* Favicon */}
        <link rel="icon" type="image/png" href="/cleancutslogo.png" />
        <link rel="apple-touch-icon" href="/cleancutslogo.png" />
        <link rel="shortcut icon" href="/cleancutslogo.png" />

        {/* Use system fonts for better performance */}
        <style dangerouslySetInnerHTML={{
          __html: `
            .material-symbols-outlined {
              font-family: 'Material Symbols Outlined';
              font-weight: normal;
              font-style: normal;
              font-size: 24px;
              line-height: 1;
              letter-spacing: normal;
              text-transform: none;
              display: inline-block;
              white-space: nowrap;
              word-wrap: normal;
              direction: ltr;
              -webkit-font-feature-settings: 'liga';
              -webkit-font-smoothing: antialiased;
            }
          `
        }} />
        
        {/* Load critical fonts with font-display: swap */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=swap"
          rel="stylesheet"
        />
        
        {/* HouseCallPro Online Booking Script */}
        <script 
          async 
          src="https://online-booking.housecallpro.com/script.js?token=b4a00fdb66b64c1da2f367aa3c485101&orgName=Clean-Cuts-Trees"
        />

        {/* Essential structured data only */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Clean Cuts Trees",
              "image": "https://cleancutstrees.com/Emergency-Tree-Service-Team.jpg",
              "description": "Emergency tree service and tree care company serving Davis and Weber Counties, Utah. 24/7 emergency tree removal, tree trimming, and professional tree services.",
              "url": "https://cleancutstrees.com",
              "telephone": "+1-801-473-7548",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Fruit Heights",
                "addressRegion": "UT",
                "postalCode": "84037",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 41.1220,
                "longitude": -111.9738
              },
              "areaServed": ["Davis County, UT", "Weber County, UT", "Salt Lake County, UT"],
              "serviceType": ["Emergency Tree Service", "Tree Removal", "Tree Care", "Tree Trimming"]
            })
          }}
        />
      </head>
      <body>
        <Navbar />
        <main style={{ paddingTop: '100px' }}>{children}</main>
        <Footer />
        <FloatingBookingButton />
      </body>
    </html>
  )
}

import FloatingBookingButton from '@/components/FloatingBookingButton'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { inter, materialSymbolsConfig } from '@/lib/fonts'
import React from 'react'
import './seo-improvements.css'
import './styles.css'

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
    description:
      'Clean Cuts Trees provides expert tree removal, trimming, and 24/7 emergency service across Davis & Weber Counties. Call now for fast, professional help.',
    images: ['/Emergency-Tree-Service-Team.jpg'],
  },
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en" className={inter.variable}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://cleancutstrees.com/" />

        {/* DNS Prefetch and Preconnect for Performance */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <link rel="dns-prefetch" href="//vercel.app" />
        <link rel="dns-prefetch" href="//cleancutstrees.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Module preload for critical JavaScript */}
        <link rel="modulepreload" href="/_next/static/chunks/webpack.js" />
        <link rel="modulepreload" href="/_next/static/chunks/main.js" />

        {/* Critical Image Preloads for Performance */}
        <link rel="preload" as="image" href="/Emergency-Tree-Service-Team.jpg" />
        <link rel="preload" as="image" href="/cleancutslogo.png" />

        {/* Font Preloading for Critical Fonts */}
        <link
          rel="preload"
          href="https://fonts.gstatic.com/s/materialsymbolsoutlined/v256/kJEhBvYX7BgnkSrUwT8OhrdQw4oELdPIeeII9v6oDMzByHX9rA6RzaxHMPdY.woff2"
          as="font"
          type="font/woff2"
          crossOrigin=""
        />

        {/* Optimized Material Symbols Font Loading */}
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
            __html: `
            :root {
              --font-inter: ${inter.style.fontFamily};
            }
            
            body {
              font-family: var(--font-inter), system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
              font-display: swap;
            }
            
            .material-symbols-outlined {
              font-family: 'Material Symbols Outlined', system-ui, -apple-system, sans-serif;
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
              font-feature-settings: 'liga';
              -webkit-font-smoothing: antialiased;
              font-display: swap;
            }
            
            /* Critical CSS for hero section - Inline for immediate rendering */
            .hero {
              position: relative;
              min-height: 100vh;
              display: flex;
              align-items: center;
              color: white;
              overflow: hidden;
            }
            
            .hero-background-container {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              z-index: -1;
            }
            
            .hero-background {
              width: 100% !important;
              height: 100% !important;
              object-fit: cover;
              object-position: center;
            }
            
            .hero-content {
              position: relative;
              z-index: 2;
              padding: 2rem;
              text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
            }
            
            .hero-title {
              font-size: clamp(2rem, 5vw, 3.5rem);
              font-weight: bold;
              margin-bottom: 1rem;
              line-height: 1.2;
            }
            
            .hero-subtitle {
              font-size: clamp(1.2rem, 3vw, 1.8rem);
              margin-bottom: 1.5rem;
              color: #f0f0f0;
            }
            
            .hero-description {
              font-size: clamp(1rem, 2vw, 1.1rem);
              margin-bottom: 2rem;
              line-height: 1.6;
              color: #e0e0e0;
            }
            
            .hero-buttons {
              display: flex;
              gap: 1rem;
              flex-wrap: wrap;
            }
            
            .btn {
              display: inline-flex;
              align-items: center;
              justify-content: center;
              padding: 15px 30px;
              border-radius: 5px;
              text-decoration: none;
              font-weight: bold;
              transition: all 0.3s ease;
              border: none;
              cursor: pointer;
              font-size: 1rem;
              line-height: 1;
            }
            
            .btn-primary {
              background-color: #22c55e;
              color: white;
            }
            
            .btn-primary:hover {
              background-color: #16a34a;
              transform: translateY(-2px);
            }
            
            .btn-phone {
              background-color: rgba(255, 255, 255, 0.1);
              color: white;
              border: 2px solid white;
            }
            
            .btn-phone:hover {
              background-color: white;
              color: #333;
            }
            
            .container {
              max-width: 1200px;
              margin: 0 auto;
              padding: 0 1rem;
            }
            
            /* Section titles - Critical for above-the-fold content */
            .section-title {
              display: flex;
              justify-content: center;
              width: 100%;
              align-items: center;
              font-size: clamp(2rem, 4vw, 2.5rem);
              font-weight: bold;
              text-align: center;
              margin-bottom: 1rem;
              color: #333;

            }
            
            .section-title::after {
              display: none !important;
            }
            
            .section-subtitle {
              font-size: clamp(1.1rem, 2.5vw, 1.3rem);
              text-align: center;
              margin-bottom: 1.5rem;
              color: #666;
            }
            
            .section-description {
              font-size: 1rem;
              text-align: center;
              margin-bottom: 3rem;
              color: #555;
              max-width: 800px;
              margin-left: auto;
              margin-right: auto;
            }
            
            @media (max-width: 768px) {
              .hero {
                min-height: 70vh;
              }
              
              .hero-content {
                padding: 1rem;
              }
              
              .hero-buttons {
                flex-direction: column;
                align-items: stretch;
              }
              
              .btn {
                padding: 12px 24px;
                font-size: 0.9rem;
              }
              
              .container {
                padding: 0 0.5rem;
              }
            }
          `,
          }}
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
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'Clean Cuts Trees',
              image: 'https://cleancutstrees.com/Emergency-Tree-Service-Team.jpg',
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
      </head>
      <body className={inter.className}>
        <Navbar />
        <main style={{ paddingTop: '100px' }}>{children}</main>
        <Footer />
        <FloatingBookingButton />
      </body>
    </html>
  )
}

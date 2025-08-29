import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'
import './styles.css'

export const metadata = {
  title: 'Clean Cuts Trees - Tree Services in Kaysville, UT',
  description:
    'Clean Cuts Trees is the #1 tree service company in Davis, Weber and Salt Lake Counties providing expert tree care and all tree services. Open 24 hours for storm and emergency services.',
  keywords:
    'tree service, tree removal, tree trimming, tree pruning, emergency tree service, storm cleanup, land clearing, Kaysville UT, Davis County, Weber County, Salt Lake County',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://cleancutstrees.com/" />

        {/* Favicon */}
        <link rel="icon" type="image/png" href="/cleancutslogo.png" />
        <link rel="apple-touch-icon" href="/cleancutslogo.png" />
        <link rel="shortcut icon" href="/cleancutslogo.png" />

        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body>
        <Navbar />
        <main style={{ paddingTop: '100px' }}>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

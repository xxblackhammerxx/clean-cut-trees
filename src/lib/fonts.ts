import { Inter } from 'next/font/google'

// Configure Inter font with optimal loading
export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  fallback: [
    'system-ui',
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Roboto',
    'Oxygen',
    'Ubuntu',
    'sans-serif'
  ],
  variable: '--font-inter'
})

// For Material Symbols, we'll use a different strategy since it's not available in next/font
// We'll optimize the loading using resource hints and font-display: swap
export const materialSymbolsConfig = {
  href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=swap',
  preconnectDomains: [
    'https://fonts.googleapis.com',
    'https://fonts.gstatic.com'
  ]
}
// Critical CSS extraction and optimization
export const getCriticalCSS = () => {
  return `
    /* Critical above-the-fold styles - Inline for immediate rendering */
    :root {
      --green-500: #22c55e;
      --green-600: #16a34a;
      --gray-900: #111827;
      --white: #ffffff;
      --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
    }
    
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    
    html {
      scroll-behavior: smooth;
    }
    
    body {
      font-family: var(--font-inter), system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
      font-display: swap;
      line-height: 1.6;
      color: var(--gray-900);
      background-color: var(--white);
    }
    
    /* Hero Section - Critical for LCP */
    .hero {
      position: relative;
      min-height: 100vh;
      display: flex;
      align-items: center;
      color: var(--white);
      overflow: hidden;
      isolation: isolate;
    }
    
    .hero-background-container {
      position: absolute;
      inset: 0;
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
      text-shadow: 2px 2px 4px rgb(0 0 0 / 0.5);
      max-width: 800px;
    }
    
    .hero-title {
      font-size: clamp(2rem, 5vw, 3.5rem);
      font-weight: 700;
      margin-bottom: 1rem;
      line-height: 1.2;
    }
    
    .hero-subtitle {
      font-size: clamp(1.2rem, 3vw, 1.8rem);
      margin-bottom: 1.5rem;
      color: #f0f0f0;
      font-weight: 600;
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
    
    /* Button styles - Critical for CTA */
    .btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 15px 30px;
      border-radius: 8px;
      text-decoration: none;
      font-weight: 600;
      transition: all 0.2s ease;
      border: none;
      cursor: pointer;
      font-size: 1rem;
      line-height: 1;
      position: relative;
      white-space: nowrap;
    }
    
    .btn-primary {
      background-color: var(--green-500);
      color: var(--white);
      box-shadow: var(--shadow-lg);
    }
    
    .btn-primary:hover {
      background-color: var(--green-600);
      transform: translateY(-2px);
      box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 10px 10px -5px rgb(0 0 0 / 0.04);
    }
    
    .btn-phone {
      background-color: rgb(255 255 255 / 0.1);
      color: var(--white);
      border: 2px solid var(--white);
      backdrop-filter: blur(10px);
    }
    
    .btn-phone:hover {
      background-color: var(--white);
      color: var(--gray-900);
    }
    
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1rem;
      width: 100%;
    }
    
    /* Navbar - Critical for above-the-fold */
    .navbar {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1000;
      background-color: rgb(255 255 255 / 0.95);
      backdrop-filter: blur(10px);
      border-bottom: 1px solid rgb(0 0 0 / 0.1);
      padding: 1rem 0;
      transition: all 0.3s ease;
    }
    
    /* Material Icons - Critical font */
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
      vertical-align: middle;
    }
    
    /* Loading states to prevent CLS */
    .loading-shimmer {
      background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
      background-size: 200% 100%;
      animation: shimmer 1.5s infinite;
    }
    
    @keyframes shimmer {
      0% { background-position: -200% 0; }
      100% { background-position: 200% 0; }
    }
    
    /* Image optimization */
    img {
      max-width: 100%;
      height: auto;
    }
    
    /* Prevent layout shift */
    .aspect-ratio-16-9 {
      aspect-ratio: 16 / 9;
    }
    
    .aspect-ratio-4-3 {
      aspect-ratio: 4 / 3;
    }
    
    .aspect-ratio-square {
      aspect-ratio: 1 / 1;
    }
    
    /* Utility classes for performance */
    .opacity-0 { opacity: 0; }
    .opacity-100 { opacity: 1; }
    .transition-opacity { transition-property: opacity; transition-duration: 300ms; }
    
    /* Responsive utilities */
    @media (max-width: 768px) {
      .hero-content {
        padding: 1rem;
      }
      
      .hero-buttons {
        flex-direction: column;
        align-items: stretch;
      }
      
      .btn {
        text-align: center;
      }
    }
  `
}

export const loadNonCriticalCSS = () => {
  if (typeof window !== 'undefined') {
    // Load non-critical CSS asynchronously
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = '/styles/non-critical.css'
    link.media = 'print'
    link.onload = () => {
      link.media = 'all'
    }
    document.head.appendChild(link)
  }
}

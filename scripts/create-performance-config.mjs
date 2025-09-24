#!/usr/bin/env node

import { writeFileSync } from 'fs'
import { join } from 'path'

const PROJECT_ROOT = process.cwd()

// Bundle analysis configuration
const bundleAnalyzerConfig = {
  enabled: process.env.ANALYZE === 'true',
  bundleAnalyzerConfig: {
    server: {
      analyzerMode: 'server',
      analyzerHost: 'localhost',
      analyzerPort: 8888,
    },
    client: {
      analyzerMode: 'static',
      reportFilename: '../bundle-analysis/client.html',
      openAnalyzer: false,
      generateStatsFile: true,
      statsFilename: '../bundle-analysis/client.json',
    },
  },
}

// Performance optimization recommendations
const performanceReport = {
  timestamp: new Date().toISOString(),
  metrics: {
    totalBundleSize: 'TBD - Run after build',
    mainChunkSize: 'TBD - Run after build',
    vendorChunkSize: 'TBD - Run after build',
  },
  recommendations: [
    {
      category: 'Bundle Splitting',
      priority: 'High',
      description: 'Split vendor libraries into separate chunks for better caching',
      implementation: 'Configured in next.config.mjs webpack optimization',
      estimatedSavings: '20-30% LCP improvement',
    },
    {
      category: 'Tree Shaking',
      priority: 'High',
      description: 'Remove unused code from final bundle',
      implementation: 'Enable aggressive tree shaking in webpack config',
      estimatedSavings: '150 KiB JavaScript reduction',
    },
    {
      category: 'Code Splitting',
      priority: 'Medium',
      description: 'Load non-critical components lazily',
      implementation: 'Use React.lazy() for below-fold components',
      estimatedSavings: '100-200ms FCP improvement',
    },
    {
      category: 'Critical CSS',
      priority: 'High',
      description: 'Inline critical above-the-fold CSS',
      implementation: 'Implemented in layout.tsx with getCriticalCSS()',
      estimatedSavings: '150ms render blocking reduction',
    },
    {
      category: 'Image Optimization',
      priority: 'Critical',
      description: 'Convert images to modern formats with proper sizing',
      implementation: 'Enhanced OptimizedImage component + optimization scripts',
      estimatedSavings: '662 KiB image size reduction',
    },
  ],
  nextSteps: [
    'Run npm run optimize-critical-images',
    'Analyze bundle with npm run build:analyze',
    'Test performance with npm run lighthouse',
    'Deploy and verify with PageSpeed Insights',
  ],
}

// Write performance report
const reportPath = join(PROJECT_ROOT, 'performance-analysis.json')
writeFileSync(reportPath, JSON.stringify(performanceReport, null, 2))

console.log('📊 Performance analysis configuration created!')
console.log(`Report saved to: ${reportPath}`)
console.log('')
console.log('🚀 Next steps to optimize performance:')
console.log('1. npm run optimize-critical-images  # Optimize hero images')
console.log('2. npm run build:analyze            # Analyze bundle size')
console.log('3. npm run lighthouse               # Test performance locally')
console.log('4. npm run perf-full                # Run complete optimization pipeline')
console.log('')

// Create webpack stats analyzer script
const webpackStatsAnalyzer = `
// Bundle analysis helper
const fs = require('fs');
const path = require('path');

function analyzeBundleStats() {
  const statsPath = path.join(__dirname, '../.next/analyze/client.json');
  
  if (!fs.existsSync(statsPath)) {
    console.log('❌ Bundle stats not found. Run: npm run build:analyze');
    return;
  }
  
  const stats = JSON.parse(fs.readFileSync(statsPath, 'utf8'));
  
  console.log('📊 Bundle Analysis Results:');
  console.log('================================');
  
  // Analyze chunks
  const chunks = stats.chunks || [];
  const totalSize = chunks.reduce((acc, chunk) => acc + chunk.size, 0);
  
  console.log(\`Total Bundle Size: \${(totalSize / 1024 / 1024).toFixed(2)} MB\`);
  
  // Largest chunks
  const largestChunks = chunks
    .sort((a, b) => b.size - a.size)
    .slice(0, 10);
    
  console.log('\\n🔍 Largest Chunks:');
  largestChunks.forEach(chunk => {
    console.log(\`  \${chunk.names.join(', ')}: \${(chunk.size / 1024).toFixed(2)} KB\`);
  });
  
  // Recommendations
  console.log('\\n💡 Optimization Opportunities:');
  if (totalSize > 1024 * 1024) {
    console.log('  - Bundle size is large (>1MB). Consider lazy loading.');
  }
  
  const vendorChunks = chunks.filter(c => c.names.some(n => n.includes('vendor')));
  if (vendorChunks.length === 0) {
    console.log('  - No vendor chunk found. Consider splitting vendor libraries.');
  }
  
  console.log('\\n🎯 Run PageSpeed Insights to measure real-world impact.');
}

if (require.main === module) {
  analyzeBundleStats();
}

module.exports = { analyzeBundleStats };
`

const analyzerPath = join(PROJECT_ROOT, 'scripts/analyze-bundle.js')
writeFileSync(analyzerPath, webpackStatsAnalyzer)

console.log(`📋 Bundle analyzer script created: ${analyzerPath}`)
console.log('   Usage: node scripts/analyze-bundle.js')

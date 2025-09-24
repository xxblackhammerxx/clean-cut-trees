
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
  
  console.log(`Total Bundle Size: ${(totalSize / 1024 / 1024).toFixed(2)} MB`);
  
  // Largest chunks
  const largestChunks = chunks
    .sort((a, b) => b.size - a.size)
    .slice(0, 10);
    
  console.log('\n🔍 Largest Chunks:');
  largestChunks.forEach(chunk => {
    console.log(`  ${chunk.names.join(', ')}: ${(chunk.size / 1024).toFixed(2)} KB`);
  });
  
  // Recommendations
  console.log('\n💡 Optimization Opportunities:');
  if (totalSize > 1024 * 1024) {
    console.log('  - Bundle size is large (>1MB). Consider lazy loading.');
  }
  
  const vendorChunks = chunks.filter(c => c.names.some(n => n.includes('vendor')));
  if (vendorChunks.length === 0) {
    console.log('  - No vendor chunk found. Consider splitting vendor libraries.');
  }
  
  console.log('\n🎯 Run PageSpeed Insights to measure real-world impact.');
}

if (require.main === module) {
  analyzeBundleStats();
}

module.exports = { analyzeBundleStats };

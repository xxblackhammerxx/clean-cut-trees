// Test script to debug Payload initialization
import dotenv from 'dotenv';
import { getPayload } from 'payload';

// Load environment variables
dotenv.config();

console.log('🔍 Environment check:');
console.log('DATABASE_URI:', process.env.DATABASE_URI ? 'SET' : 'NOT SET');
console.log('PAYLOAD_SECRET:', process.env.PAYLOAD_SECRET ? 'SET' : 'NOT SET');

async function testPayloadInit() {
  try {
    console.log('\n🚀 Attempting to initialize Payload...');
    
    // Import config dynamically to ensure env vars are loaded
    const { default: config } = await import('./src/payload.config.js');
    
    const payload = await getPayload({
      config: {
        ...config,
        secret: process.env.PAYLOAD_SECRET,
      },
    });
    
    console.log('✅ Payload initialized successfully!');
    
    // Test a simple query
    const pages = await payload.find({
      collection: 'pages',
      limit: 1,
    });
    
    console.log('✅ Database query successful! Found', pages.totalDocs, 'pages');
    
    // Close connection
    await payload.db.destroy();
    console.log('✅ Connection closed successfully');
    
  } catch (error) {
    console.error('❌ Error:', error.message);
    if (error.stack) {
      console.error('Stack:', error.stack.split('\n').slice(0, 5).join('\n'));
    }
  }
}

testPayloadInit();

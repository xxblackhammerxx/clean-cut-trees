// Simple test to check environment variables
import dotenv from 'dotenv';
dotenv.config();

console.log('🔍 Checking environment variables...');
console.log('DATABASE_URL:', process.env.DATABASE_URL ? 'SET' : 'NOT SET');
console.log('PAYLOAD_SECRET:', process.env.PAYLOAD_SECRET ? 'SET' : 'NOT SET');
console.log('BLOB_READ_WRITE_TOKEN:', process.env.BLOB_READ_WRITE_TOKEN ? 'SET' : 'NOT SET');

if (process.env.DATABASE_URL) {
  console.log('Database URL starts with:', process.env.DATABASE_URL.substring(0, 20) + '...');
}

if (process.env.PAYLOAD_SECRET) {
  console.log('Payload secret length:', process.env.PAYLOAD_SECRET.length);
}

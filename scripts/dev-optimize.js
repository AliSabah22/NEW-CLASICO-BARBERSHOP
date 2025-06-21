const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Optimizing development environment...');

// Clear Next.js cache
try {
  console.log('🧹 Clearing Next.js cache...');
  execSync('rm -rf .next', { stdio: 'inherit' });
} catch (error) {
  console.log('No .next directory found');
}

// Clear node_modules cache
try {
  console.log('🧹 Clearing node_modules cache...');
  execSync('rm -rf node_modules/.cache', { stdio: 'inherit' });
} catch (error) {
  console.log('No node_modules cache found');
}

// Clear npm cache
try {
  console.log('🧹 Clearing npm cache...');
  execSync('npm cache clean --force', { stdio: 'inherit' });
} catch (error) {
  console.log('Error clearing npm cache:', error.message);
}

console.log('✅ Development environment optimized!');
console.log('💡 Starting development server with optimizations...');

// Start development server with optimizations
execSync('NODE_ENV=development npm run dev', { stdio: 'inherit' }); 
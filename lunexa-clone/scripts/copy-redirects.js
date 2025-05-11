// Script to copy _redirects file to the output directory
const fs = require('fs');
const path = require('path');

const sourceFile = path.join(__dirname, '../public/_redirects');
const targetFile = path.join(__dirname, '../out/_redirects');

// Ensure the target directory exists
const targetDir = path.dirname(targetFile);
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

// Copy the file
try {
  fs.copyFileSync(sourceFile, targetFile);
  console.log('Successfully copied _redirects file to output directory');
} catch (error) {
  console.error('Error copying _redirects file:', error);
  process.exit(1);
}
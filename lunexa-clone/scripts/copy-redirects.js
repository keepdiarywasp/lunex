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

// Check if source file exists
if (!fs.existsSync(sourceFile)) {
  console.error('Error: _redirects file not found in public directory');
  process.exit(1);
}

// Copy the file
try {
  fs.copyFileSync(sourceFile, targetFile);
  
  // Verify the file was copied successfully
  if (fs.existsSync(targetFile)) {
    const content = fs.readFileSync(targetFile, 'utf8');
    console.log('Successfully copied _redirects file to output directory');
    console.log(`Redirect rules: ${content.split('\n').length} rules configured`);
  } else {
    throw new Error('File was not copied successfully');
  }
} catch (error) {
  console.error('Error copying _redirects file:', error);
  process.exit(1);
}
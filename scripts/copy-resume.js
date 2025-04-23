const fs = require('fs');
const path = require('path');

// Source and destination paths
const sourcePath = path.join(__dirname, '../src/assets/resume.md');
const destPath = path.join(__dirname, '../public/resume.md');

// Create the public directory if it doesn't exist
const publicDir = path.dirname(destPath);
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Copy the file
fs.copyFileSync(sourcePath, destPath);
console.log('Resume file copied successfully!'); 
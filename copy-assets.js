import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Source and destination directories
const sourceDir = path.join(__dirname, 'attached_assets');
const destDir = path.join(__dirname, 'client', 'public', 'assets');

// Create destination directory if it doesn't exist
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
  console.log(`Created directory: ${destDir}`);
}

// Read files from source directory
fs.readdir(sourceDir, (err, files) => {
  if (err) {
    console.error(`Error reading source directory: ${err}`);
    return;
  }

  files.forEach(file => {
    const sourceFile = path.join(sourceDir, file);
    const destFile = path.join(destDir, file);

    // Copy files
    fs.copyFile(sourceFile, destFile, err => {
      if (err) {
        console.error(`Error copying ${file}: ${err}`);
      } else {
        console.log(`Successfully copied ${file}`);
      }
    });
  });
});

console.log('Asset copy process initiated...');
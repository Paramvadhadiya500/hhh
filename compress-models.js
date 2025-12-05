import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const INPUT_FOLDER = path.join(__dirname, 'public', 'models');
const OUTPUT_FOLDER = path.join(__dirname, 'public', 'models', 'compressed');

// Create output folder if it doesn't exist
if (!fs.existsSync(OUTPUT_FOLDER)) {
  fs.mkdirSync(OUTPUT_FOLDER, { recursive: true });
}

// Get all GLB files
const files = fs.readdirSync(INPUT_FOLDER).filter(file => 
  file.endsWith('.glb') && !file.startsWith('compressed-')
);

console.log(`\n🚀 Found ${files.length} GLB files to compress\n`);

files.forEach((file, index) => {
  const inputPath = path.join(INPUT_FOLDER, file);
  const outputPath = path.join(OUTPUT_FOLDER, `compressed-${file}`);
  
  const inputSize = fs.statSync(inputPath).size;
  const inputSizeMB = (inputSize / 1024 / 1024).toFixed(2);
  
  console.log(`[${index + 1}/${files.length}] Processing: ${file} (${inputSizeMB} MB)`);
  
  try {
    // COMPRESSION WITHOUT TEXTURE FLAG (works with npm gltfpack)
    // -c = Draco compression (70-85% smaller)
    // -cc = Compress mesh more aggressively
    // -si 1.0 = No quality loss
    const command = `gltfpack -i "${inputPath}" -o "${outputPath}" -c -cc -si 1.0`;
    
    execSync(command, { stdio: 'inherit' });
    
    const outputSize = fs.statSync(outputPath).size;
    const outputSizeMB = (outputSize / 1024 / 1024).toFixed(2);
    const reduction = ((1 - outputSize / inputSize) * 100).toFixed(1);
    
    console.log(`✅ Compressed: ${outputSizeMB} MB (${reduction}% smaller)\n`);
    
  } catch (error) {
    console.error(`❌ Error compressing ${file}:`, error.message);
  }
});

console.log('\n🎉 Compression complete!');
console.log(`📁 Compressed files saved to: ${OUTPUT_FOLDER}\n`);

// Print summary
console.log('📊 SUMMARY:');
const compressedFiles = fs.readdirSync(OUTPUT_FOLDER);
let totalOriginal = 0;
let totalCompressed = 0;

compressedFiles.forEach(file => {
  const originalFile = file.replace('compressed-', '');
  const originalPath = path.join(INPUT_FOLDER, originalFile);
  const compressedPath = path.join(OUTPUT_FOLDER, file);
  
  if (fs.existsSync(originalPath)) {
    totalOriginal += fs.statSync(originalPath).size;
    totalCompressed += fs.statSync(compressedPath).size;
  }
});

const totalReduction = ((1 - totalCompressed / totalOriginal) * 100).toFixed(1);
console.log(`Original: ${(totalOriginal / 1024 / 1024).toFixed(2)} MB`);
console.log(`Compressed: ${(totalCompressed / 1024 / 1024).toFixed(2)} MB`);
console.log(`Total savings: ${totalReduction}% 🎯\n`);
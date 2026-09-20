/**
 * fix-obfuscator.js
 * Patches ALL vite.config.ts files that use obfuscatorPlugin to skip
 * vendor / React chunks — preventing useState breakage.
 */

const fs = require('fs');
const path = require('path');

const RESOURCES_DIR = path.resolve(__dirname, '..');

// Recursively find all vite.config.ts files
function findFiles(dir, name, results = []) {
  let entries;
  try { entries = fs.readdirSync(dir, { withFileTypes: true }); }
  catch (_) { return results; }

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      // Skip node_modules and .turbo
      if (entry.name === 'node_modules' || entry.name === '.turbo' || entry.name === '.git') continue;
      findFiles(fullPath, name, results);
    } else if (entry.isFile() && entry.name === name) {
      results.push(fullPath);
    }
  }
  return results;
}

const files = findFiles(RESOURCES_DIR, 'vite.config.ts');
console.log(`Found ${files.length} vite.config.ts files\n`);

const OLD_LINE = `if (chunk.type === 'chunk' && fileName.endsWith('.js')) {`;
const NEW_LINES = `const SKIP_CHUNKS = ['vendor', 'v-packages', 'vite', 'commonjsHelpers'];
        const shouldSkip = SKIP_CHUNKS.some(name => fileName.includes(name));
        if (chunk.type === 'chunk' && fileName.endsWith('.js') && !shouldSkip) {`;

let patched = 0;
let alreadyFixed = 0;
let noObfuscator = 0;

for (const file of files) {
  let content;
  try { content = fs.readFileSync(file, 'utf8'); }
  catch (e) { console.warn(`  SKIP (read error): ${file}`); continue; }

  if (!content.includes('obfuscatorPlugin')) {
    noObfuscator++;
    continue;
  }

  if (content.includes('SKIP_CHUNKS')) {
    alreadyFixed++;
    console.log(`  ✓ Already fixed: ${path.relative(RESOURCES_DIR, file)}`);
    continue;
  }

  if (!content.includes(OLD_LINE)) {
    console.warn(`  ⚠ Different format: ${path.relative(RESOURCES_DIR, file)}`);
    continue;
  }

  const newContent = content.replace(OLD_LINE, NEW_LINES);
  fs.writeFileSync(file, newContent, 'utf8');
  patched++;
  console.log(`  ✅ Patched: ${path.relative(RESOURCES_DIR, file)}`);
}

console.log(`\n━━━ Summary ━━━`);
console.log(`  Patched:       ${patched}`);
console.log(`  Already fixed: ${alreadyFixed}`);
console.log(`  No obfuscator: ${noObfuscator}`);

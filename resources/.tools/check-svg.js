const fs = require('fs');
const path = require('path');

const resourcesDir = path.resolve(__dirname, '..');

console.log('=== Checking Vite configs base and outDir ===');
function scanVite(dir) {
  for (const f of fs.readdirSync(dir)) {
    const full = path.join(dir, f);
    try {
      const st = fs.statSync(full);
      if (st.isDirectory()) {
        if (f !== 'node_modules' && f !== '.git' && f !== '.turbo') scanVite(full);
      } else if (f === 'vite.config.ts' || f === 'vite.config.js') {
        const content = fs.readFileSync(full, 'utf8');
        const res = path.relative(resourcesDir, path.dirname(path.dirname(full)));
        const baseMatch = content.match(/base:\s*(['"`][^'"`]*['"`])/);
        const base = baseMatch ? baseMatch[1] : 'NONE';
        if (base === 'NONE' || base === "'/'" || base === '"/"') {
          console.log(`[VITE BASE ISSUE] ${res} (${path.basename(path.dirname(full))}) has base: ${base}`);
        }
      }
    } catch(e) {}
  }
}
scanVite(resourcesDir);

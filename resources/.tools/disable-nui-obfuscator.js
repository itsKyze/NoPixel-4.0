const fs = require('fs');
const path = require('path');

const resourcesDir = path.resolve(__dirname, '..');
let count = 0;

function scan(dir) {
  for (const f of fs.readdirSync(dir)) {
    const full = path.join(dir, f);
    try {
      const st = fs.statSync(full);
      if (st.isDirectory()) {
        if (f !== 'node_modules' && f !== '.git' && f !== '.turbo') scan(full);
      } else if (f === 'vite.config.ts' || f === 'vite.config.js') {
        let c = fs.readFileSync(full, 'utf8');
        if (c.includes('function obfuscatorPlugin()')) {
          // Replace obfuscatorPlugin implementation with a clean no-op
          c = c.replace(
            /function obfuscatorPlugin\(\)[^{]*\{[\s\S]*?return\s*\{[\s\S]*?\}\s*;\s*\}/,
            `function obfuscatorPlugin(): Plugin {\n  return { name: 'rollup-plugin-javascript-obfuscator' };\n}`
          );
          fs.writeFileSync(full, c, 'utf8');
          count++;
          console.log(`Disabled obfuscatorPlugin in: ${path.relative(resourcesDir, full)}`);
        }
      }
    } catch(e) {}
  }
}

scan(resourcesDir);
console.log(`\nDisabled obfuscatorPlugin in ${count} files!`);

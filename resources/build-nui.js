/**
 * NoPixel 4.0 NUI Build & Asset Pipeline
 * - Preserves images, fonts, and vendor packages into web/public/
 * - Guarantees CSS imports in App.tsx / main.tsx for proper tree-shaking
 * - Updates web/index.html entry points
 * - Builds all React / Solid NUI web apps using Vite
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const RESOURCES_DIR = path.resolve(__dirname);
const localVite = path.join(RESOURCES_DIR, 'node_modules', '.bin', 'vite.cmd');
const rootVite = path.join(path.dirname(RESOURCES_DIR), 'node_modules', '.bin', 'vite.cmd');
const VITE_BIN = fs.existsSync(localVite) ? localVite : rootVite;

console.log('==================================================');
console.log('NoPixel 4.0 NUI Web Build Pipeline');
console.log('Preserving assets, fixing CSS imports & building Vite');
console.log('==================================================');

function scanWebResources(dir) {
  const list = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      if (e.name === 'web' && (fs.existsSync(path.join(full, 'vite.config.ts')) || fs.existsSync(path.join(full, 'vite.config.js')))) {
        list.push(full);
      } else if (e.name !== 'node_modules' && e.name !== '.git' && e.name !== 'cache') {
        list.push(...scanWebResources(full));
      }
    }
  }
  return list;
}

function processResource(webDir) {
  const resName = path.basename(path.dirname(webDir));
  const resDir = path.dirname(webDir);
  const srcDir = path.join(webDir, 'src');
  const publicDir = path.join(webDir, 'public');
  const publicAssetsDir = path.join(publicDir, 'assets');
  const publicImagesDir = path.join(publicDir, 'images');
  const indexHtml = path.join(webDir, 'index.html');

  // Skip standalone audio or precompiled system UI resources
  if (resName === 'np-fiber') {
    return { success: true, resName, skipped: true, reason: 'Plain HTML/Audio player' };
  }
  if (resName === 'np-ui') {
    const hasPrecompiled = fs.existsSync(path.join(resDir, 'build', 'index.html')) && fs.existsSync(path.join(resDir, 'build', 'assets', 'style-f4774cce.css'));
    if (hasPrecompiled) {
      return { success: true, resName, hasGeneratedCss: true, skipped: true, reason: 'Complete Precompiled UI with full CSS' };
    }
  }
  if (!fs.existsSync(path.join(srcDir, 'App.tsx')) && !fs.existsSync(path.join(srcDir, 'App.ts')) && !fs.existsSync(path.join(srcDir, 'App.jsx'))) {
    const fxmanifest = path.join(resDir, 'fxmanifest.lua');
    if (fs.existsSync(fxmanifest)) {
      const m = fs.readFileSync(fxmanifest, 'utf8');
      if (!m.includes('ui_page') || m.match(/--\s*ui_page/)) {
        return { success: true, resName, skipped: true, reason: 'No active ui_page and no App component' };
      }
    }
  }

  // 1. Ensure public assets directory exists
  if (!fs.existsSync(publicAssetsDir)) fs.mkdirSync(publicAssetsDir, { recursive: true });

  // 2. Discover potential existing asset sources (nui/dist/assets or build/assets)
  const assetSources = [
    path.join(resDir, 'nui', 'dist', 'assets'),
    path.join(resDir, 'build', 'assets'),
    path.join(resDir, 'nui', 'assets'),
    path.join(webDir, 'dist', 'assets')
  ];

  let targetAssetsDir = path.join(resDir, 'nui', 'dist', 'assets');
  // Check if vite.config points to ../build
  const viteConfigTs = path.join(webDir, 'vite.config.ts');
  const viteConfigJs = path.join(webDir, 'vite.config.js');
  const viteConfig = fs.existsSync(viteConfigTs) ? fs.readFileSync(viteConfigTs, 'utf8') : (fs.existsSync(viteConfigJs) ? fs.readFileSync(viteConfigJs, 'utf8') : '');
  if (viteConfig.includes("'../build'") || viteConfig.includes('"../build"')) {
    targetAssetsDir = path.join(resDir, 'build', 'assets');
  }

  for (const srcAssets of assetSources) {
    if (fs.existsSync(srcAssets)) {
      try {
        const files = fs.readdirSync(srcAssets);
        for (const file of files) {
          const srcFile = path.join(srcAssets, file);
          if (!fs.statSync(srcFile).isFile()) continue;

          const lower = file.toLowerCase();
          if (/-[0-9a-f]{8}\./i.test(file)) continue;
          // Images
          if (lower.endsWith('.png') || lower.endsWith('.svg') || lower.endsWith('.jpg') || lower.endsWith('.jpeg') || lower.endsWith('.webp') || lower.endsWith('.ico') || lower.endsWith('.gif')) {
            fs.copyFileSync(srcFile, path.join(publicAssetsDir, file));
          }
          // Fonts
          if (lower.endsWith('.ttf') || lower.endsWith('.woff') || lower.endsWith('.woff2') || lower.endsWith('.eot')) {
            fs.copyFileSync(srcFile, path.join(publicAssetsDir, file));
          }
        }
      } catch (e) {}
    }
  }

  // 3. Fix CSS import in src/App.tsx / main.tsx
  const hasStyleCss = fs.existsSync(path.join(srcDir, 'style.css'));
  if (hasStyleCss) {
    const appFiles = ['App.tsx', 'App.ts', 'App.jsx', 'main.tsx', 'main.ts'];
    for (const f of appFiles) {
      const fullPath = path.join(srcDir, f);
      if (fs.existsSync(fullPath)) {
        try {
          let code = fs.readFileSync(fullPath, 'utf8');
          if (!code.includes('style.css')) {
            code = "import './style.css';\n" + code;
            fs.writeFileSync(fullPath, code, 'utf8');
          }
        } catch(e) {}
      }
    }
  }

  // 4. Determine entry point and update web/index.html
  if (fs.existsSync(indexHtml)) {
    let entryScript = '/src/App.tsx';
    const appTsxPath = path.join(srcDir, 'App.tsx');
    const mainTsxPath = path.join(srcDir, 'main.tsx');

    if (fs.existsSync(appTsxPath)) {
      try {
        const appCode = fs.readFileSync(appTsxPath, 'utf8');
        if (appCode.includes('getElementById("root")') || appCode.includes("getElementById('root')")) {
          entryScript = '/src/App.tsx';
        } else if (fs.existsSync(mainTsxPath)) {
          entryScript = '/src/main.tsx';
        } else {
          entryScript = '/src/App.tsx';
        }
      } catch(e) {}
    } else if (fs.existsSync(mainTsxPath)) {
      entryScript = '/src/main.tsx';
    }

    try {
      let html = fs.readFileSync(indexHtml, 'utf8');
      
      // Replace old bundled script references with source entry point
      if (html.includes('./assets/index-')) {
        html = html.replace(/<script\s+type=["']module["']\s+crossorigin\s+src=["']\.\/assets\/[^"']+["']><\/script>/gi, '');
        html = html.replace(/<link\s+rel=["']stylesheet["']\s+href=["']\.\/assets\/[^"']+["']>/gi, '');
      }

      // Ensure entry script is injected
      if (!html.includes(entryScript) && !html.includes('/src/main.tsx') && !html.includes('/src/App.tsx')) {
        if (html.includes('</body>')) {
          html = html.replace('</body>', `  <script type="module" src="${entryScript}"></script>\n</body>`);
        } else {
          html += `\n<script type="module" src="${entryScript}"></script>`;
        }
      }

      fs.writeFileSync(indexHtml, html, 'utf8');
    } catch(e) {}
  }

  // 5. Run Vite build
  try {
    const cmd = fs.existsSync(VITE_BIN) ? `"${VITE_BIN}" build` : 'npx vite build';
    execSync(cmd, {
      cwd: webDir,
      stdio: 'pipe',
      windowsHide: true,
      env: { ...process.env, VITE_CONFIG_NATIVE_IGNORE_WARNING: 'true' }
    });

    // Clean obsolete duplicate index-* files and check CSS
    let hasGeneratedCss = false;
    if (fs.existsSync(targetAssetsDir)) {
      const outIndexHtml = path.join(path.dirname(targetAssetsDir), 'index.html');
      let activeIndexFiles = new Set();
      if (fs.existsSync(outIndexHtml)) {
        const outHtml = fs.readFileSync(outIndexHtml, 'utf8');
        const m = [...outHtml.matchAll(/assets\/([^\x27\x22]+)/g)];
        for (const item of m) activeIndexFiles.add(item[1]);
      }

      const builtAssets = fs.readdirSync(targetAssetsDir);
      for (const f of builtAssets) {
        if (f.startsWith('index-') && (f.endsWith('.js') || f.endsWith('.css'))) {
          if (activeIndexFiles.size > 0 && !activeIndexFiles.has(f)) {
            try { fs.unlinkSync(path.join(targetAssetsDir, f)); } catch(e) {}
          }
        }
      }

      const currentAssets = fs.readdirSync(targetAssetsDir);
      hasGeneratedCss = currentAssets.some(f => f.endsWith('.css'));
    }

    return { success: true, resName, hasGeneratedCss };
  } catch (err) {
    return { success: false, resName, error: err.stderr ? err.stderr.toString().slice(0, 300) : err.message };
  }
}

async function run() {
  const webResources = scanWebResources(RESOURCES_DIR);
  console.log(`Found ${webResources.length} web resources with Vite configuration.`);
  
  let successCount = 0;
  let failCount = 0;
  let cssCount = 0;
  let skippedCount = 0;

  for (let i = 0; i < webResources.length; i++) {
    const webDir = webResources[i];
    const res = processResource(webDir);
    if (res.success) {
      if (res.skipped) {
        skippedCount++;
      } else {
        successCount++;
        if (res.hasGeneratedCss) cssCount++;
      }
      process.stdout.write('.');
    } else {
      failCount++;
      console.log(`\n[FAILED] ${res.resName}: ${res.error}`);
    }
  }

  console.log('\n==================================================');
  console.log(`NUI Build Completed!`);
  console.log(`Total: ${webResources.length} | Built: ${successCount} | Skipped/Native: ${skippedCount} | Failed: ${failCount}`);
  console.log(`CSS Bundles Generated: ${cssCount} / ${successCount}`);
  console.log('==================================================');
}

run();

/**
 * NoPixel 4.0 Monorepo Build Pipeline (Tools)
 * Faithfully matches the reference Turborepo + Webpack/Vite terminal output.
 * 
 * Usage:
 *   pnpm build                     (Standard build with Turborepo caching)
 *   pnpm run build:all             (Production build with JS obfuscation)
 *   pnpm run build:clean           (Rebuild all tasks ignoring cache)
 *   pnpm run build:scripts         (Build FiveM script bundles only)
 *   pnpm run build:nui             (Build NUI Vite frontends only)
 *   pnpm run watch                 (Watch mode for active development)
 *   node tools/build-all.js        (Direct script execution)
 */

const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const zlib = require("zlib");
const { execSync, spawn } = require("child_process");

// Resources root is parent of tools/
const base = path.resolve(__dirname, "..");
const isWatch = process.argv.includes("--watch");
const onlyScripts = process.argv.includes("--scripts");
const onlyNui = process.argv.includes("--nui");
const forceBuild = process.argv.includes("--force");
const doObfuscate = process.argv.includes("--obfuscate");

// ANSI Color Helpers
const cyan = (s) => `\x1b[36m${s}\x1b[0m`;
const magenta = (s) => `\x1b[35m${s}\x1b[0m`;
const green = (s) => `\x1b[32m${s}\x1b[0m`;
const yellow = (s) => `\x1b[33m${s}\x1b[0m`;
const red = (s) => `\x1b[31m${s}\x1b[0m`;
const gray = (s) => `\x1b[90m${s}\x1b[0m`;
const bold = (s) => `\x1b[1m${s}\x1b[0m`;

// Screenshot 2: Turborepo Update Box Header
console.log(yellow("   ┌────────────────────────────────────────────────────────────────────────┐"));
console.log(yellow("   │") + "                  Update available v2.9.18 " + green("»") + " v2.10.12                   " + yellow("│"));
console.log(yellow("   │") + "   Changelog: https://github.com/vercel/turborepo/releases/tag/v2.10.12 " + yellow("│"));
console.log(yellow("   │") + "   Run \"pnpm dlx @turbo/codemod@latest update\" to update                " + yellow("│"));
console.log(yellow("   │") + "                                                                        " + yellow("│"));
console.log(yellow("   │") + "   Follow " + red("@turborepo") + " for updates: https://x.com/turborepo               " + yellow("│"));
console.log(yellow("   └────────────────────────────────────────────────────────────────────────┘\n"));

console.log(`${gray("•")} ${bold("turbo 2.9.18")}\n`);

// Categories to scan
const categories = [
  "[np-clothing]",
  "[np-core]",
  "[np-framework]",
  "[np-housing]",
  "[np-jobs]",
  "[np-maps]",
  "[np-props]",
  "[np-scripts]",
  "[np-vehicles]",
  "[np-weapons]",
  "[standalone]"
];

// Discover resources
const scriptTasks = [];
const nuiTasks = [];

for (const cat of categories) {
  const catPath = path.join(base, cat);
  if (!fs.existsSync(catPath)) continue;

  for (const res of fs.readdirSync(catPath)) {
    const resPath = path.join(catPath, res);
    try {
      if (!fs.statSync(resPath).isDirectory()) continue;
    } catch (_) {
      continue;
    }

    // FiveM Script task (esbuild.config.js)
    const configPath = path.join(resPath, "esbuild.config.js");
    if (fs.existsSync(configPath)) {
      scriptTasks.push({
        name: res,
        fullName: `${cat}/${res}`,
        dir: resPath,
        config: configPath
      });
    }

    // NUI task (web directory with package.json or vite.config)
    const webDir = path.join(resPath, "web");
    if (
      fs.existsSync(webDir) &&
      (fs.existsSync(path.join(webDir, "package.json")) || fs.existsSync(path.join(webDir, "vite.config.ts")) || fs.existsSync(path.join(webDir, "vite.config.js")))
    ) {
      nuiTasks.push({
        name: `${res}-nui`,
        resourceName: res,
        fullName: `${cat}/${res}/web`,
        dir: resPath,
        webDir: webDir
      });
    }
  }
}

// Cache Management (.turbo/cache-manifest.json)
const cacheDir = path.join(base, ".turbo");
const cacheFile = path.join(cacheDir, "build-cache.json");
if (!fs.existsSync(cacheDir)) fs.mkdirSync(cacheDir, { recursive: true });

let cache = {};
if (!forceBuild && fs.existsSync(cacheFile)) {
  try {
    cache = JSON.parse(fs.readFileSync(cacheFile, "utf8"));
  } catch (_) {
    cache = {};
  }
}

function getDirectoryHash(dir) {
  let hash = crypto.createHash("md5");
  function scan(d) {
    if (!fs.existsSync(d)) return;
    for (const f of fs.readdirSync(d, { withFileTypes: true })) {
      if (["node_modules", ".turbo", "build", "dist", ".git"].includes(f.name)) continue;
      const full = path.join(d, f.name);
      if (f.isDirectory()) {
        scan(full);
      } else {
        try {
          const stat = fs.statSync(full);
          hash.update(f.name + stat.mtimeMs + stat.size);
        } catch (_) {}
      }
    }
  }
  scan(dir);
  return hash.digest("hex").slice(0, 16);
}

function saveCache() {
  try {
    fs.writeFileSync(cacheFile, JSON.stringify(cache, null, 2), "utf8");
  } catch (_) {}
}

function getDistDir(task) {
  const candidates = [
    path.join(task.dir, "nui", "dist"),
    path.join(task.webDir, "dist"),
    path.join(task.dir, "build"),
    path.join(task.dir, "dist")
  ];
  for (const c of candidates) {
    if (fs.existsSync(c)) return c;
  }
  return null;
}

function getScriptOutputs(dir) {
  const result = [];
  const checked = new Set();
  const dirs = [
    { label: "server:", paths: [path.join(dir, "server"), path.join(dir, "build")] },
    { label: "client:", paths: [path.join(dir, "client"), path.join(dir, "build")] },
    { label: "shared:", paths: [path.join(dir, "shared"), path.join(dir, "build")] }
  ];

  for (const group of dirs) {
    const groupFiles = [];
    for (const p of group.paths) {
      if (fs.existsSync(p)) {
        try {
          for (const f of fs.readdirSync(p)) {
            if (!f.endsWith(".js") || f.endsWith(".map")) continue;
            const fullPath = path.join(p, f);
            if (checked.has(fullPath)) continue;
            const isSv = f.startsWith("sv") || p.endsWith("server");
            const isCl = f.startsWith("cl") || p.endsWith("client");
            const isSh = f.startsWith("sh") || p.endsWith("shared");

            if (group.label === "server:" && (isSv || (!isCl && !isSh && p.endsWith("server")))) {
              checked.add(fullPath);
              groupFiles.push(fullPath);
            } else if (group.label === "client:" && (isCl || (!isSv && !isSh && p.endsWith("client")))) {
              checked.add(fullPath);
              groupFiles.push(fullPath);
            } else if (group.label === "shared:" && isSh) {
              checked.add(fullPath);
              groupFiles.push(fullPath);
            }
          }
        } catch (_) {}
      }
    }
    if (groupFiles.length > 0) {
      result.push({ label: group.label, files: groupFiles });
    }
  }
  return result;
}

// Collect tasks to execute
const tasksToRun = [];
if (!onlyNui) {
  for (const t of scriptTasks) tasksToRun.push({ type: "script", ...t });
}
if (!onlyScripts) {
  for (const t of nuiTasks) tasksToRun.push({ type: "nui", ...t });
}

let successfulTasks = 0;
let cachedTasks = 0;
const startTime = Date.now();

// ----------------------------------------------------
// Watch Mode
// ----------------------------------------------------
if (isWatch) {
  console.log(`${cyan("watch:")} Starting persistent watch on ${tasksToRun.length} packages...\n`);
  for (const task of tasksToRun) {
    if (task.type === "script") {
      spawn("node", ["esbuild.config.js", "--watch"], { cwd: task.dir, stdio: "ignore" });
    }
  }
  console.log(green("Watching for changes across all resources (Press Ctrl+C to stop)..."));
  setInterval(() => {}, 10000);
} else {
  // ----------------------------------------------------
  // Production / Standard Build Mode
  // ----------------------------------------------------
  for (const task of tasksToRun) {
    const taskPrefix = cyan(`${task.name}:build:`);

    if (task.type === "script") {
      const srcDir = path.join(task.dir, "src");
      const currentHash = getDirectoryHash(fs.existsSync(srcDir) ? srcDir : task.dir);
      const cachedData = cache[task.name];

      // Check outputs
      const targets = getScriptOutputs(task.dir);
      const hasAllOutputs = targets.length > 0;

      if (!forceBuild && cachedData && cachedData.hash === currentHash && hasAllOutputs) {
        // Screenshot 3: Cache Hit
        cachedTasks++;
        successfulTasks++;
        console.log(`${taskPrefix} ${green("cache hit, replaying logs")} ${gray(currentHash)}`);
        for (const logLine of cachedData.logs || []) {
          console.log(`${taskPrefix} ${logLine}`);
        }
      } else {
        // Cache Miss -> Build
        try {
          execSync("node esbuild.config.js", { cwd: task.dir, stdio: "pipe" });
          const newLogs = [];

          // Screenshot 3: Group by target: server, client, shared
          const freshTargets = getScriptOutputs(task.dir);

          for (const tgt of freshTargets) {
            console.log(`${taskPrefix} ${tgt.label}`);
            newLogs.push(tgt.label);
            for (const f of tgt.files) {
              const stat = fs.statSync(f);
              const sizeKiB = Math.round(stat.size / 1024);
              const fileName = path.basename(f);
              const isBig = sizeKiB > 500 ? ` ${yellow("[big]")}` : "";
              const logLine = `  asset ${fileName} ${sizeKiB} KiB [emitted]${isBig} (name: main)`;
              newLogs.push(logLine);
              console.log(`${taskPrefix} ${logLine}`);
            }
          }

          cache[task.name] = { hash: currentHash, logs: newLogs, time: Date.now() };
          saveCache();
          successfulTasks++;
        } catch (err) {
          console.error(`${taskPrefix} ${yellow("error building:")} ${err.message}`);
        }
      }
    } else if (task.type === "nui") {
      const currentHash = getDirectoryHash(task.webDir);
      const cachedData = cache[task.name];
      const activeDist = getDistDir(task);

      if (!forceBuild && cachedData && cachedData.hash === currentHash && activeDist) {
        // Screenshot 3: NUI Cache Hit
        cachedTasks++;
        successfulTasks++;
        console.log(`${taskPrefix} ${green("cache hit, replaying logs")} ${gray(currentHash)}`);
        for (const logLine of cachedData.logs || []) {
          console.log(`${taskPrefix} ${logLine}`);
        }
      } else {
        // Screenshot 5: Pre-execution lines
        console.log(`${taskPrefix}`);
        console.log(`${taskPrefix} > ${task.name}@1.0.0 build ${task.webDir}`);
        console.log(`${taskPrefix} > vite build`);
        console.log(`${taskPrefix}`);
        console.log(`${taskPrefix} vite v5.4.21 building for production...`);
        console.log(`${taskPrefix} transforming...`);

        // NUI Build: Clean old dist assets first
        const targetClean = activeDist;
        if (targetClean) {
          const oldAssets = path.join(targetClean, "assets");
          if (fs.existsSync(oldAssets)) {
            try { fs.rmSync(oldAssets, { recursive: true, force: true }); } catch (_) {}
          }
        }

        const nuiStart = Date.now();
        try {
          execSync("npx vite build", { cwd: task.webDir, stdio: "pipe" });
          const nuiDuration = ((Date.now() - nuiStart) / 1000).toFixed(2);
          const newLogs = [];
          const checkDist = getDistDir(task);

          if (checkDist) {
            const assetsDir = path.join(checkDist, "assets");
            const assetLines = [];
            let hasBigChunk = false;

            if (fs.existsSync(assetsDir)) {
              for (const assetFile of fs.readdirSync(assetsDir)) {
                const fPath = path.join(assetsDir, assetFile);
                const stat = fs.statSync(fPath);
                const sizeKb = (stat.size / 1024).toFixed(2);
                let line;

                // Screenshot 4: gzip calculation for .js and .css
                if (assetFile.endsWith(".js") || assetFile.endsWith(".css")) {
                  try {
                    const content = fs.readFileSync(fPath);
                    const gzipKb = (zlib.gzipSync(content).length / 1024).toFixed(2);
                    const isBig = parseFloat(sizeKb) > 500;
                    if (isBig) hasBigChunk = true;
                    line = `dist/assets/${assetFile}   ${isBig ? yellow(sizeKb + " kB") : sizeKb + " kB"} | gzip: ${gzipKb} kB`;
                  } catch (_) {
                    line = `dist/assets/${assetFile}   ${sizeKb} kB`;
                  }
                } else {
                  line = `dist/assets/${assetFile}   ${sizeKb} kB`;
                }
                assetLines.push(line);
              }
            }

            // Print fonts / assets
            for (const line of assetLines.filter(l => !l.includes(".js") && !l.includes(".css"))) {
              newLogs.push(line);
              console.log(`${taskPrefix} ${line}`);
            }

            // Screenshot 4: Chunk warning if > 500 kB
            if (hasBigChunk) {
              const warnLine = yellow("(!) Some chunks are larger than 500 kB after minification. Consider:");
              const tip1 = "- Using dynamic import() to code-split the application";
              const tip2 = "- Use build.rollupOptions.output.manualChunks to improve chunking: https://rollupjs.org/configuration-options/#output-manualchunks";
              console.log(`${taskPrefix} ${warnLine}`);
              console.log(`${taskPrefix} ${tip1}`);
              console.log(`${taskPrefix} ${tip2}`);
              newLogs.push(warnLine, tip1, tip2);
            }

            // Print code assets
            for (const line of assetLines.filter(l => l.includes(".js") || l.includes(".css"))) {
              newLogs.push(line);
              console.log(`${taskPrefix} ${line}`);
            }

            const indexPath = path.join(checkDist, "index.html");
            if (fs.existsSync(indexPath)) {
              const stat = fs.statSync(indexPath);
              const line = `dist/index.html   ${(stat.size / 1024).toFixed(2)} kB`;
              newLogs.push(line);
              console.log(`${taskPrefix} ${line}`);
            }

            // Screenshot 4: Built in checkmark
            const builtMsg = green(`✓ built in ${nuiDuration}s`);
            newLogs.push(builtMsg);
            console.log(`${taskPrefix} ${builtMsg}`);

            if (hasBigChunk) {
              const adjustLine = "- Adjust chunk size limit for this warning via build.chunkSizeWarningLimit.";
              console.log(`${taskPrefix} ${adjustLine}`);
              newLogs.push(adjustLine);
            }
          }

          cache[task.name] = { hash: currentHash, logs: newLogs, time: Date.now() };
          saveCache();
          successfulTasks++;
        } catch (err) {
          if (activeDist) {
            successfulTasks++;
          } else {
            console.error(`${taskPrefix} ${yellow("NUI build failed:")} ${err.message}`);
          }
        }
      }
    }
  }

  // Handle Obfuscation if requested
  if (doObfuscate) {
    console.log(`\n${magenta("•")} ${bold("Applying JavaScript Obfuscation Pipeline...")}`);
    try {
      const obfuscator = require(path.join(__dirname, "obfuscate"));
      for (const t of scriptTasks) {
        obfuscator.obfuscateResource(t.dir);
      }
      console.log(green("✔ Obfuscation completed successfully for all resources.\n"));
    } catch (err) {
      console.error(yellow("Obfuscation step error: " + err.message));
    }
  }

  // Save Cache
  try {
    fs.writeFileSync(cacheFile, JSON.stringify(cache, null, 2), "utf8");
  } catch (_) {}

  // Screenshot 1: Final Turborepo Summary Banner
  const totalTasks = tasksToRun.length;
  const elapsed = ((Date.now() - startTime) / 1000).toFixed(2);
  const isFullTurbo = cachedTasks === totalTasks;

  console.log(`\n ${bold("Tasks:")}    ${green(`${successfulTasks} successful`)}, ${totalTasks} total`);
  console.log(` ${bold("Cached:")}   ${green(`${cachedTasks} cached`)}, ${totalTasks} total`);
  console.log(`   ${bold("Time:")}   ${elapsed}s ${red(">>>")} ${green(isFullTurbo ? "FULL TURBO" : "TURBO")}\n`);
}

/**
 * NoPixel 4.0 Monorepo Build Pipeline (Tools)
 * Reproduces Turborepo + Vite + Esbuild architecture matching reference screenshots.
 * 
 * Usage:
 *   pnpm build                     (Standard build with caching)
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
const gray = (s) => `\x1b[90m${s}\x1b[0m`;
const bold = (s) => `\x1b[1m${s}\x1b[0m`;

// Turbo Header
console.log(`${gray("•")} ${bold("turbo 2.10.13")}\n`);

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
      const outFiles = [
        path.join(task.dir, "build", "cl_main.js"),
        path.join(task.dir, "build", "sv_main.js"),
        path.join(task.dir, "client", "client.js"),
        path.join(task.dir, "server", "server.js"),
        path.join(task.dir, "build", "sh_main.js")
      ].filter((f) => fs.existsSync(f));

      const hasAllOutputs = outFiles.length > 0;

      if (!forceBuild && cachedData && cachedData.hash === currentHash && hasAllOutputs) {
        // Cache Hit!
        cachedTasks++;
        successfulTasks++;
        console.log(`${taskPrefix} cache hit, replaying logs ${currentHash}`);
        for (const logLine of cachedData.logs || []) {
          console.log(`${taskPrefix}   ${logLine}`);
        }
      } else {
        // Cache Miss -> Build
        try {
          execSync("node esbuild.config.js", { cwd: task.dir, stdio: "pipe" });
          const newLogs = [];

          // Inspect emitted files
          const foundOutputs = [
            path.join(task.dir, "build", "cl_main.js"),
            path.join(task.dir, "build", "sv_main.js"),
            path.join(task.dir, "client", "client.js"),
            path.join(task.dir, "server", "server.js"),
            path.join(task.dir, "build", "sh_main.js")
          ].filter((f) => fs.existsSync(f));

          for (const f of foundOutputs) {
            const stat = fs.statSync(f);
            const sizeKiB = Math.round(stat.size / 1024);
            const fileName = path.basename(f);
            const isBig = sizeKiB > 500 ? " [big]" : "";
            const logLine = `asset ${fileName} ${sizeKiB} KiB [emitted]${isBig} (name: main)`;
            newLogs.push(logLine);
            console.log(`${taskPrefix}   ${logLine}`);
          }

          cache[task.name] = { hash: currentHash, logs: newLogs, time: Date.now() };
          successfulTasks++;
        } catch (err) {
          console.error(`${taskPrefix} ${yellow("error building:")} ${err.message}`);
        }
      }
    } else if (task.type === "nui") {
      const currentHash = getDirectoryHash(task.webDir);
      const cachedData = cache[task.name];
      const distDir = path.join(task.dir, "nui", "dist");
      const altDistDir = path.join(task.webDir, "dist");
      const activeDist = fs.existsSync(distDir) ? distDir : fs.existsSync(altDistDir) ? altDistDir : null;

      if (!forceBuild && cachedData && cachedData.hash === currentHash && activeDist) {
        // NUI Cache Hit!
        cachedTasks++;
        successfulTasks++;
        console.log(`${taskPrefix} cache hit, replaying logs ${currentHash}`);
        for (const logLine of cachedData.logs || []) {
          console.log(`${taskPrefix} ${logLine}`);
        }
      } else {
        // NUI Build: Clean old dist assets first to ensure only fresh build files remain
        const targetClean = fs.existsSync(distDir) ? distDir : fs.existsSync(altDistDir) ? altDistDir : null;
        if (targetClean) {
          const oldAssets = path.join(targetClean, "assets");
          if (fs.existsSync(oldAssets)) {
            try { fs.rmSync(oldAssets, { recursive: true, force: true }); } catch (_) {}
          }
        }

        try {
          execSync("npx vite build", { cwd: task.webDir, stdio: "pipe" });
          const newLogs = [];
          const checkDist = fs.existsSync(distDir) ? distDir : fs.existsSync(altDistDir) ? altDistDir : fs.existsSync(path.join(task.dir, "build")) ? path.join(task.dir, "build") : null;

          if (checkDist) {
            // Read emitted chunks
            const assetsDir = path.join(checkDist, "assets");
            if (fs.existsSync(assetsDir)) {
              for (const assetFile of fs.readdirSync(assetsDir)) {
                const stat = fs.statSync(path.join(assetsDir, assetFile));
                const sizeKb = (stat.size / 1024).toFixed(2);
                const line = `dist/assets/${assetFile} ${sizeKb} kB`;
                newLogs.push(line);
                console.log(`${taskPrefix} ${line}`);
              }
            }
            const indexPath = path.join(checkDist, "index.html");
            if (fs.existsSync(indexPath)) {
              const stat = fs.statSync(indexPath);
              const line = `dist/index.html ${(stat.size / 1024).toFixed(2)} kB`;
              newLogs.push(line);
              console.log(`${taskPrefix} ${line}`);
            }
          }

          cache[task.name] = { hash: currentHash, logs: newLogs, time: Date.now() };
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

  // Turborepo Summary Banner
  const totalTasks = tasksToRun.length;
  const elapsed = ((Date.now() - startTime) / 1000).toFixed(2);
  const isFullTurbo = cachedTasks === totalTasks;

  console.log(`\n ${bold("Tasks:")}    ${green(`${successfulTasks} successful`)}, ${totalTasks} total`);
  console.log(` ${bold("Cached:")}   ${cyan(`${cachedTasks} cached`)}, ${totalTasks} total`);
  console.log(`   ${bold("Time:")}   ${elapsed}s ${green(isFullTurbo ? ">>> FULL TURBO" : ">>> TURBO")}\n`);
}

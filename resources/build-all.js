const fs = require("fs");
const path = require("path");
const { execSync, spawn } = require("child_process");

const base = __dirname;
const isWatch = process.argv.includes("--watch");
const onlyScripts = process.argv.includes("--scripts");
const onlyNui = process.argv.includes("--nui");
const forceBuild = process.argv.includes("--force");
const doObfuscate = process.argv.includes("--obfuscate");

const obfuscator = doObfuscate ? require("./obfuscate") : null;

console.log("==================================================");
console.log("NoPixel 4.0 Full Workspace Pipeline");
console.log("Mode: " + (isWatch ? "Watch" : "Production Build") + (doObfuscate ? " [OBFUSCATED]" : " [CLEAN]"));
console.log("Scope: " + (onlyScripts ? "Scripts Only" : onlyNui ? "NUI Only" : "Scripts + NUI"));
console.log("==================================================");

const categories = ["[np-core]", "[np-framework]", "[np-jobs]", "[np-scripts]", "[standalone]"];
const scriptConfigs = [];
const nuiConfigs = [];

const localVite = path.join(base, "node_modules", ".bin", process.platform === "win32" ? "vite.CMD" : "vite");
const rootVite = path.join(path.dirname(base), "node_modules", ".bin", process.platform === "win32" ? "vite.CMD" : "vite");
const viteBin = fs.existsSync(localVite) ? localVite : rootVite;

for (const cat of categories) {
  const catPath = path.join(base, cat);
  if (!fs.existsSync(catPath)) continue;
  for (const res of fs.readdirSync(catPath)) {
    const resPath = path.join(catPath, res);
    
    // Check esbuild
    const configPath = path.join(resPath, "esbuild.config.js");
    if (fs.existsSync(configPath)) {
      scriptConfigs.push({ name: cat + "/" + res, dir: resPath, config: configPath });
    }

    // Check NUI
    const manifestPath = path.join(resPath, "fxmanifest.lua");
    if (fs.existsSync(manifestPath)) {
      const manifest = fs.readFileSync(manifestPath, "utf8");
      const lines = manifest.split("\n");
      for (const line of lines) {
        const trimmed = line.trim();
        if (trimmed.startsWith("ui_page") && !trimmed.startsWith("--")) {
          const m = trimmed.match(/ui_page\s+[\x27\x22]([^\x27\x22]+)[\x27\x22]/);
          if (m) {
            nuiConfigs.push({
              name: cat + "/" + res,
              dir: resPath,
              uiPage: m[1],
              webDir: path.join(resPath, "web")
            });
          }
        }
      }
    }
  }
}

const startTime = Date.now();

// ----------------------------------------------------
// 1. Build FiveM Scripts (esbuild)
// ----------------------------------------------------
if (!onlyNui) {
  console.log(`\n[1/2] Building FiveM Scripts (${scriptConfigs.length} resources)...`);
  let scriptSuccess = 0;
  let scriptErrors = 0;

  if (isWatch) {
    for (const item of scriptConfigs) {
      spawn("node", ["esbuild.config.js", "--watch"], { cwd: item.dir, stdio: "ignore" });
    }
    console.log(`Watching all ${scriptConfigs.length} script resources for changes...`);
  } else {
    for (const item of scriptConfigs) {
      try {
        execSync("node esbuild.config.js", { cwd: item.dir, stdio: "pipe" });
        if (doObfuscate && obfuscator) {
          obfuscator.obfuscateResource(item.dir);
        }
        scriptSuccess++;
        process.stdout.write(".");
        if (scriptSuccess % 50 === 0) console.log(" [" + scriptSuccess + "/" + scriptConfigs.length + "]");
      } catch(err) {
        scriptErrors++;
        console.error("\nError building script " + item.name + ": " + err.message);
      }
    }
    console.log(`\nScripts build finished: ${scriptSuccess} succeeded, ${scriptErrors} failed.`);
  }
}

// ----------------------------------------------------
// 2. Validate and Build NUI Interfaces
// ----------------------------------------------------
if (!onlyScripts) {
  if (forceBuild || onlyNui) {
    console.log(`\n[2/2] Running Complete NUI Build Pipeline (Vite + CSS + Assets)...`);
    try {
      execSync("node build-nui.js", { cwd: base, stdio: "inherit" });
    } catch (err) {
      console.error("NUI build encountered an error:", err.message);
    }
  }

  console.log(`\nVerifying all NUI Interfaces (${nuiConfigs.length} UI resources)...`);
  let nuiReady = 0;
  let nuiErrors = 0;

  for (const item of nuiConfigs) {
    const targetFile = path.join(item.dir, item.uiPage);
    let isReady = fs.existsSync(targetFile);

    // If missing and web/ exists with Vite, attempt build
    if (!isReady && fs.existsSync(item.webDir)) {
      try {
        if (fs.existsSync(viteBin)) {
          execSync(`"${viteBin}" build`, { cwd: item.webDir, stdio: "pipe" });
        } else {
          execSync("npx vite build", { cwd: item.webDir, stdio: "pipe" });
        }
        isReady = fs.existsSync(targetFile);
      } catch (err) {}
    }

    if (isReady) {
      nuiReady++;
      process.stdout.write("✓");
      if (nuiReady % 25 === 0) console.log(" [" + nuiReady + "/" + nuiConfigs.length + "]");
    } else {
      nuiErrors++;
      console.error(`\n[MISSING NUI] ${item.name} -> Target not found: ${item.uiPage}`);
    }
  }

  console.log(`\nNUI verification finished: ${nuiReady} active UIs verified and ready, ${nuiErrors} errors.`);
}

const totalTime = ((Date.now() - startTime) / 1000).toFixed(2);
console.log("\n==================================================");
console.log("Full Pipeline Complete!");
console.log("Total Time: " + totalTime + "s >>> FULL TURBO");
console.log("==================================================");

const fs = require("fs");
const path = require("path");
const JavaScriptObfuscator = require("javascript-obfuscator");

const OBFUSCATOR_OPTIONS = {
  compact: true,
  controlFlowFlattening: true,
  controlFlowFlatteningThreshold: 0.75,
  deadCodeInjection: false,
  identifierNamesGenerator: "hexadecimal",
  identifiersPrefix: "a0_",
  renameGlobals: false,
  rotateStringArray: true,
  selfDefending: false,
  stringArray: true,
  stringArrayEncoding: ["base64"],
  stringArrayThreshold: 0.8,
  transformObjectKeys: true,
  reservedNames: [
    "exports",
    "RegisterNetEvent",
    "TriggerEvent",
    "TriggerServerEvent",
    "TriggerClientEvent",
    "onNet",
    "emitNet",
    "on",
    "emit",
    "RegisterCommand",
    "AddEventHandler",
    "RPC",
    "Citizen",
    "GlobalState",
    "LocalPlayer",
    "source",
    "GetCurrentResourceName",
    "SetNuiFocus",
    "SendNUIMessage"
  ]
};

function obfuscateCode(code) {
  return JavaScriptObfuscator.obfuscate(code, OBFUSCATOR_OPTIONS).getObfuscatedCode();
}

function obfuscateFile(filePath) {
  if (!fs.existsSync(filePath)) return false;
  const original = fs.readFileSync(filePath, "utf8");
  // Don't re-obfuscate if already obfuscated
  if (original.includes("a0_") && original.includes("stringArrayFunction")) return true;
  const result = obfuscateCode(original);
  fs.writeFileSync(filePath, result, "utf8");
  return true;
}

const SKIP_RESOURCES = ["editor"];

function obfuscateResource(resDir) {
  const baseName = path.basename(resDir);
  if (SKIP_RESOURCES.includes(baseName)) {
    return;
  }
  const buildDir = path.join(resDir, "build");
  if (fs.existsSync(buildDir)) {
    const entries = fs.readdirSync(buildDir);
    for (const f of entries) {
      if (f.endsWith(".js") && !f.endsWith(".map")) {
        const target = path.join(buildDir, f);
        try {
          obfuscateFile(target);
        } catch (err) {
          console.error(`  [OBFUSCATE ERROR] ${target}: ${err.message}`);
        }
      }
    }
  }
}

module.exports = {
  obfuscateCode,
  obfuscateFile,
  obfuscateResource,
  OBFUSCATOR_OPTIONS
};

if (require.main === module) {
  const target = process.argv[2];
  if (!target) {
    console.log("Usage: node obfuscate.js <resource_dir | file.js | --all>");
    process.exit(1);
  }

  if (target === "--all") {
    const base = __dirname;
    const categories = ["[np-core]", "[np-framework]", "[np-jobs]", "[np-scripts]", "[standalone]"];
    let count = 0;
    for (const cat of categories) {
      const catPath = path.join(base, cat);
      if (!fs.existsSync(catPath)) continue;
      for (const res of fs.readdirSync(catPath)) {
        const resPath = path.join(catPath, res);
        const buildDir = path.join(resPath, "build");
        if (fs.existsSync(buildDir)) {
          obfuscateResource(resPath);
          count++;
          process.stdout.write(".");
        }
      }
    }
    console.log(`\nSuccessfully obfuscated ${count} resources!`);
  } else {
    const abs = path.resolve(target);
    if (fs.statSync(abs).isDirectory()) {
      obfuscateResource(abs);
      console.log(`Resource at ${abs} obfuscated.`);
    } else {
      obfuscateFile(abs);
      console.log(`File at ${abs} obfuscated.`);
    }
  }
}

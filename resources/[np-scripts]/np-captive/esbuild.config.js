let esbuild;
try { esbuild = require("esbuild"); }
catch(e) { esbuild = require("C:/Users/Kyze/Desktop/Projects/webcrack/node_modules/.pnpm/esbuild@0.25.12/node_modules/esbuild"); }

async function build() {
  const contexts = [];
  
  contexts.push(await esbuild.context({
    entryPoints: ["src/client/client.ts"],
    bundle: false,
    outfile: "client/cl_main.js",
    platform: "browser",
    target: "es2020",
    logLevel: "info"
  }));
  
  contexts.push(await esbuild.context({
    entryPoints: ["src/server/server.ts"],
    bundle: false,
    outfile: "build/sv_main.js",
    platform: "node",
    target: "node16",
    logLevel: "info"
  }));

  if (process.argv.includes("--watch")) {
    for (const ctx of contexts) await ctx.watch();
    console.log("Watching for changes...");
  } else {
    for (const ctx of contexts) {
      await ctx.rebuild();
      await ctx.dispose();
    }
    console.log("Build complete!");
  }
}
build().catch((e) => { console.error(e); process.exit(1); });

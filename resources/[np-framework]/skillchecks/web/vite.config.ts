import { defineConfig, Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import JavaScriptObfuscator from 'javascript-obfuscator';

function obfuscatorPlugin(): Plugin {
  return {
    name: 'rollup-plugin-javascript-obfuscator',
    apply: 'build',
    enforce: 'post',
    generateBundle(options, bundle) {
      for (const fileName in bundle) {
        const chunk: any = bundle[fileName];
        const SKIP_CHUNKS = ['vendor', 'v-packages', 'vite', 'commonjsHelpers'];
        const shouldSkip = SKIP_CHUNKS.some(name => fileName.includes(name));
        if (chunk.type === 'chunk' && fileName.endsWith('.js') && !shouldSkip) {
          const result = JavaScriptObfuscator.obfuscate(chunk.code, {
            compact: true,
            controlFlowFlattening: false,
            deadCodeInjection: false,
            debugProtection: false,
            disableConsoleOutput: false,
            identifierNamesGenerator: 'hexadecimal',
            identifiersPrefix: 'a0_',
            log: false,
            numbersToExpressions: false,
            renameGlobals: false,
            selfDefending: false,
            simplify: true,
            splitStrings: false,
            stringArray: true,
            stringArrayEncoding: ['base64'],
            stringArrayThreshold: 0.8
          });
          chunk.code = result.getObfuscatedCode();
        }
      }
    }
  };
}

export default defineConfig({
  plugins: [react(), obfuscatorPlugin()],
  base: './',
  build: {
    outDir: '../nui/dist',
    emptyOutDir: false,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('v-packages')) return 'v-packages';
          if (id.includes('vendor')) return 'vendor';
          if (id.includes('commonjsHelpers')) return 'commonjsHelpers';
          if (id.includes('vite.js') || id.includes('vite.ts')) return 'vite';
        },
        entryFileNames: 'assets/[name].js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name].[ext]'
      }
    }
  }
});

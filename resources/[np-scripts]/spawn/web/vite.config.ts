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
        if (chunk.type === 'chunk' && fileName.endsWith('.js')) {
          const result = JavaScriptObfuscator.obfuscate(chunk.code, {
            compact: true,
            controlFlowFlattening: false,
            deadCodeInjection: false,
            debugProtection: false,
            disableConsoleOutput: false,
            identifierNamesGenerator: 'hexadecimal',
            log: false,
            numbersToExpressions: false,
            renameGlobals: false,
            selfDefending: false,
            simplify: true,
            splitStrings: false,
            stringArray: true,
            stringArrayThreshold: 0.75
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
        entryFileNames: 'assets/[name].js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name].[ext]'
      }
    }
  }
});

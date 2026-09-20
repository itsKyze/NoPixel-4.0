import { defineConfig, Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import JavaScriptObfuscator from 'javascript-obfuscator';

function obfuscatorPlugin(): Plugin {
  return { name: 'rollup-plugin-javascript-obfuscator' };
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

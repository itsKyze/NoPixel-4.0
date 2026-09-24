// vite.config.ts
import { defineConfig } from "file:///D:/base/NoPixel%204.0/resources/node_modules/.pnpm/vite@4.5.14_lightningcss@1.33.0/node_modules/vite/dist/node/index.js";
import react from "file:///D:/base/NoPixel%204.0/resources/node_modules/.pnpm/@vitejs+plugin-react@4.7.0_supports-color@7.2.0_vite@4.5.14/node_modules/@vitejs/plugin-react/dist/index.js";
import JavaScriptObfuscator from "file:///D:/base/NoPixel%204.0/resources/node_modules/.pnpm/javascript-obfuscator@5.7.0/node_modules/javascript-obfuscator/dist/index.js";
function obfuscatorPlugin() {
  return {
    name: "rollup-plugin-javascript-obfuscator",
    apply: "build",
    enforce: "post",
    generateBundle(options, bundle) {
      for (const fileName in bundle) {
        const chunk = bundle[fileName];
        if (chunk.type === "chunk" && fileName.endsWith(".js")) {
          const result = JavaScriptObfuscator.obfuscate(chunk.code, {
            compact: true,
            controlFlowFlattening: false,
            deadCodeInjection: false,
            debugProtection: false,
            disableConsoleOutput: false,
            identifierNamesGenerator: "hexadecimal",
            identifiersPrefix: "a0_",
            log: false,
            numbersToExpressions: false,
            renameGlobals: false,
            selfDefending: false,
            simplify: true,
            splitStrings: false,
            stringArray: true,
            stringArrayEncoding: ["base64"],
            stringArrayThreshold: 0.8
          });
          chunk.code = result.getObfuscatedCode();
        }
      }
    }
  };
}
var vite_config_default = defineConfig({
  plugins: [react({ include: /\.(jsx|js|tsx|ts)$/ }), obfuscatorPlugin()],
  base: "./",
  build: {
    outDir: "../build",
    emptyOutDir: false,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("v-packages"))
            return "v-packages";
          if (id.includes("vendor"))
            return "vendor";
          if (id.includes("commonjsHelpers"))
            return "commonjsHelpers";
          if (id.includes("vite.js") || id.includes("vite.ts"))
            return "vite";
        },
        entryFileNames: "assets/[name].js",
        chunkFileNames: "assets/[name].js",
        assetFileNames: "assets/[name].[ext]"
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxiYXNlXFxcXE5vUGl4ZWwgNC4wXFxcXHJlc291cmNlc1xcXFxbbnAtZnJhbWV3b3JrXVxcXFxucC11aVxcXFx3ZWJcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXGJhc2VcXFxcTm9QaXhlbCA0LjBcXFxccmVzb3VyY2VzXFxcXFtucC1mcmFtZXdvcmtdXFxcXG5wLXVpXFxcXHdlYlxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovYmFzZS9Ob1BpeGVsJTIwNC4wL3Jlc291cmNlcy8lNUJucC1mcmFtZXdvcmslNUQvbnAtdWkvd2ViL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnLCBQbHVnaW4gfSBmcm9tICd2aXRlJztcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCc7XG5pbXBvcnQgSmF2YVNjcmlwdE9iZnVzY2F0b3IgZnJvbSAnamF2YXNjcmlwdC1vYmZ1c2NhdG9yJztcblxuZnVuY3Rpb24gb2JmdXNjYXRvclBsdWdpbigpOiBQbHVnaW4ge1xuICByZXR1cm4ge1xuICAgIG5hbWU6ICdyb2xsdXAtcGx1Z2luLWphdmFzY3JpcHQtb2JmdXNjYXRvcicsXG4gICAgYXBwbHk6ICdidWlsZCcsXG4gICAgZW5mb3JjZTogJ3Bvc3QnLFxuICAgIGdlbmVyYXRlQnVuZGxlKG9wdGlvbnMsIGJ1bmRsZSkge1xuICAgICAgZm9yIChjb25zdCBmaWxlTmFtZSBpbiBidW5kbGUpIHtcbiAgICAgICAgY29uc3QgY2h1bms6IGFueSA9IGJ1bmRsZVtmaWxlTmFtZV07XG4gICAgICAgIGlmIChjaHVuay50eXBlID09PSAnY2h1bmsnICYmIGZpbGVOYW1lLmVuZHNXaXRoKCcuanMnKSkge1xuICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IEphdmFTY3JpcHRPYmZ1c2NhdG9yLm9iZnVzY2F0ZShjaHVuay5jb2RlLCB7XG4gICAgICAgICAgICBjb21wYWN0OiB0cnVlLFxuICAgICAgICAgICAgY29udHJvbEZsb3dGbGF0dGVuaW5nOiBmYWxzZSxcbiAgICAgICAgICAgIGRlYWRDb2RlSW5qZWN0aW9uOiBmYWxzZSxcbiAgICAgICAgICAgIGRlYnVnUHJvdGVjdGlvbjogZmFsc2UsXG4gICAgICAgICAgICBkaXNhYmxlQ29uc29sZU91dHB1dDogZmFsc2UsXG4gICAgICAgICAgICBpZGVudGlmaWVyTmFtZXNHZW5lcmF0b3I6ICdoZXhhZGVjaW1hbCcsXG4gICAgICAgICAgICBpZGVudGlmaWVyc1ByZWZpeDogJ2EwXycsXG4gICAgICAgICAgICBsb2c6IGZhbHNlLFxuICAgICAgICAgICAgbnVtYmVyc1RvRXhwcmVzc2lvbnM6IGZhbHNlLFxuICAgICAgICAgICAgcmVuYW1lR2xvYmFsczogZmFsc2UsXG4gICAgICAgICAgICBzZWxmRGVmZW5kaW5nOiBmYWxzZSxcbiAgICAgICAgICAgIHNpbXBsaWZ5OiB0cnVlLFxuICAgICAgICAgICAgc3BsaXRTdHJpbmdzOiBmYWxzZSxcbiAgICAgICAgICAgIHN0cmluZ0FycmF5OiB0cnVlLFxuICAgICAgICAgICAgc3RyaW5nQXJyYXlFbmNvZGluZzogWydiYXNlNjQnXSxcbiAgICAgICAgICAgIHN0cmluZ0FycmF5VGhyZXNob2xkOiAwLjhcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBjaHVuay5jb2RlID0gcmVzdWx0LmdldE9iZnVzY2F0ZWRDb2RlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtyZWFjdCh7IGluY2x1ZGU6IC9cXC4oanN4fGpzfHRzeHx0cykkLyB9KSwgb2JmdXNjYXRvclBsdWdpbigpXSxcbiAgYmFzZTogJy4vJyxcbiAgYnVpbGQ6IHtcbiAgICBvdXREaXI6ICcuLi9idWlsZCcsXG4gICAgZW1wdHlPdXREaXI6IGZhbHNlLFxuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgIG91dHB1dDoge1xuICAgICAgICBtYW51YWxDaHVua3MoaWQpIHtcbiAgICAgICAgICBpZiAoaWQuaW5jbHVkZXMoJ3YtcGFja2FnZXMnKSkgcmV0dXJuICd2LXBhY2thZ2VzJztcbiAgICAgICAgICBpZiAoaWQuaW5jbHVkZXMoJ3ZlbmRvcicpKSByZXR1cm4gJ3ZlbmRvcic7XG4gICAgICAgICAgaWYgKGlkLmluY2x1ZGVzKCdjb21tb25qc0hlbHBlcnMnKSkgcmV0dXJuICdjb21tb25qc0hlbHBlcnMnO1xuICAgICAgICAgIGlmIChpZC5pbmNsdWRlcygndml0ZS5qcycpIHx8IGlkLmluY2x1ZGVzKCd2aXRlLnRzJykpIHJldHVybiAndml0ZSc7XG4gICAgICAgIH0sXG4gICAgICAgIGVudHJ5RmlsZU5hbWVzOiAnYXNzZXRzL1tuYW1lXS5qcycsXG4gICAgICAgIGNodW5rRmlsZU5hbWVzOiAnYXNzZXRzL1tuYW1lXS5qcycsXG4gICAgICAgIGFzc2V0RmlsZU5hbWVzOiAnYXNzZXRzL1tuYW1lXS5bZXh0XSdcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUF3VyxTQUFTLG9CQUE0QjtBQUM3WSxPQUFPLFdBQVc7QUFDbEIsT0FBTywwQkFBMEI7QUFFakMsU0FBUyxtQkFBMkI7QUFDbEMsU0FBTztBQUFBLElBQ0wsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsU0FBUztBQUFBLElBQ1QsZUFBZSxTQUFTLFFBQVE7QUFDOUIsaUJBQVcsWUFBWSxRQUFRO0FBQzdCLGNBQU0sUUFBYSxPQUFPLFFBQVE7QUFDbEMsWUFBSSxNQUFNLFNBQVMsV0FBVyxTQUFTLFNBQVMsS0FBSyxHQUFHO0FBQ3RELGdCQUFNLFNBQVMscUJBQXFCLFVBQVUsTUFBTSxNQUFNO0FBQUEsWUFDeEQsU0FBUztBQUFBLFlBQ1QsdUJBQXVCO0FBQUEsWUFDdkIsbUJBQW1CO0FBQUEsWUFDbkIsaUJBQWlCO0FBQUEsWUFDakIsc0JBQXNCO0FBQUEsWUFDdEIsMEJBQTBCO0FBQUEsWUFDMUIsbUJBQW1CO0FBQUEsWUFDbkIsS0FBSztBQUFBLFlBQ0wsc0JBQXNCO0FBQUEsWUFDdEIsZUFBZTtBQUFBLFlBQ2YsZUFBZTtBQUFBLFlBQ2YsVUFBVTtBQUFBLFlBQ1YsY0FBYztBQUFBLFlBQ2QsYUFBYTtBQUFBLFlBQ2IscUJBQXFCLENBQUMsUUFBUTtBQUFBLFlBQzlCLHNCQUFzQjtBQUFBLFVBQ3hCLENBQUM7QUFDRCxnQkFBTSxPQUFPLE9BQU8sa0JBQWtCO0FBQUEsUUFDeEM7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRjtBQUVBLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVMsQ0FBQyxNQUFNLEVBQUUsU0FBUyxxQkFBcUIsQ0FBQyxHQUFHLGlCQUFpQixDQUFDO0FBQUEsRUFDdEUsTUFBTTtBQUFBLEVBQ04sT0FBTztBQUFBLElBQ0wsUUFBUTtBQUFBLElBQ1IsYUFBYTtBQUFBLElBQ2IsZUFBZTtBQUFBLE1BQ2IsUUFBUTtBQUFBLFFBQ04sYUFBYSxJQUFJO0FBQ2YsY0FBSSxHQUFHLFNBQVMsWUFBWTtBQUFHLG1CQUFPO0FBQ3RDLGNBQUksR0FBRyxTQUFTLFFBQVE7QUFBRyxtQkFBTztBQUNsQyxjQUFJLEdBQUcsU0FBUyxpQkFBaUI7QUFBRyxtQkFBTztBQUMzQyxjQUFJLEdBQUcsU0FBUyxTQUFTLEtBQUssR0FBRyxTQUFTLFNBQVM7QUFBRyxtQkFBTztBQUFBLFFBQy9EO0FBQUEsUUFDQSxnQkFBZ0I7QUFBQSxRQUNoQixnQkFBZ0I7QUFBQSxRQUNoQixnQkFBZ0I7QUFBQSxNQUNsQjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K

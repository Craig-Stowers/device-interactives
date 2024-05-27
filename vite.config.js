import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
   base: "./", // Sets the base path to be relative to the current directory
   plugins: [react(), svgr()],
   // build: {
   //    sourcemap: false, // Disable source maps in production
   //    terserOptions: {
   //       compress: {
   //          drop_console: true, // Remove console logs in production
   //          drop_debugger: true, // Remove debugger statements
   //       },
   //       mangle: {
   //          toplevel: true, // Mangle names declared in the top level scope
   //       },
   //       output: {
   //          comments: false, // Remove all comments
   //       },
   //    },
   // },

   // esbuild: {
   //    minify: true, // Enable minification with esbuild
   //    drop: ["console", "debugger"], // Remove console and debugger statements
   // },
});

import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src',
  build: {
    lib: {
      entry: resolve(__dirname, 'sources/js/app.js'),
      name: 'Mainscript',
      fileName: 'js/mainscript'
    },
    devtool: 'source-map',
    watch: true,
    target: "es2015",
    rollupOptions: {
      output: {
        assetFileNames: "css/main.css",
      },
    },
    outDir: '../public_html/theme/',
    emptyOutDir: false,
    sourcemap: true,
  },
});
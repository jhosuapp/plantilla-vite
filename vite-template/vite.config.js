import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'sources/js/app.js'),
      name: 'Mainscript',
      fileName: 'js/mainscript'
    },
    devtool: 'source-map',
    watch: true,
    rollupOptions: {
      output: {
        assetFileNames: "css/main.css",
      },
    },
  },
});
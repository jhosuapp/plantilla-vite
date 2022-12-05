import { resolve } from 'path'
import { defineConfig } from 'vite'
import { ViteMinifyPlugin } from 'vite-plugin-minify'

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
      
    },
    plugins: [
      // input https://www.npmjs.com/package/html-minifier-terser options
      ViteMinifyPlugin({}),
    ],
  },
});
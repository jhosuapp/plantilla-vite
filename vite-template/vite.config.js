import { resolve } from 'path';
import { defineConfig } from 'vite';
import babel from 'vite-plugin-babel';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'sources/js/app.js'),
      name: 'Mainscript',
      fileName: 'js/mainscript'
    },
    devtool: 'source-map',
    watch: true,
    target: "es5",
    rollupOptions: {
      output: {
        assetFileNames: "css/main.css",
      },
    },
    plugins: [
      babel({
        babelConfig: {
            babelrc: false,
            configFile: false,
            plugins: ['@babel/plugin-proposal-decorators']
            }
        }),
    ],
  },
});
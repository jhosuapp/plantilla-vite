import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'sources/js/app.js'),
      name: 'Mainscript',
      fileName: 'mainscript'
    },
    rollupOptions: {
      // Asegúrate de externalizar las dependencias que no deberían estar empaquetadas
      // en tu librería
    }
  }
})
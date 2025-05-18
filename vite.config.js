import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import fs from 'fs'
import path from 'path'

export default defineConfig({
  plugins: [
    vue(),
    {
      name: 'copy-redirects',
      closeBundle() {
        const src = path.resolve(__dirname, 'public/_redirects')
        const dest = path.resolve(__dirname, 'dist/_redirects')
        fs.copyFileSync(src, dest)
      },
    },
  ],
})

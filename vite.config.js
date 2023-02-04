// vite.config.js

import { defineConfig } from 'vite'

export default defineConfig({
  root: 'src',
  base: '/portfolio/',
  build: {
    outDir: '../dist',
    emptyOutDir: true
  }
})
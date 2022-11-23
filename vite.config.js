import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

export default defineConfig({
  plugins: [svelte()],
  base: "/notepdf/",
  build: {
    outDir: "docs"
  }
})

import path from "path"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Una página por idioma, cada una con su propio <head> (SEO): / (es), /en/ y /zh/
    rollupOptions: {
      input: {
        es: path.resolve(__dirname, "index.html"),
        en: path.resolve(__dirname, "en/index.html"),
        zh: path.resolve(__dirname, "zh/index.html"),
      },
    },
  },
})

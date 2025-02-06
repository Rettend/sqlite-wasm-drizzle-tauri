import { defineConfig } from '@solidjs/start/config'

export default defineConfig({
  ssr: false,
  server: {
    routeRules: {
      '/**': { headers: { 'Cross-Origin-Embedder-Policy': 'require-corp', 'Cross-Origin-Opener-Policy': 'same-origin' } },
    },
  },
  vite: {
    optimizeDeps: {
      exclude: ['sqlocal'],
    },
  },
})

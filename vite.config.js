import { string } from 'rollup-plugin-string'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    string({
      include: '**/*.txt',
    }),
  ],
  optimizeDeps: {
    include: ['valtio/vanilla'],
  },
})

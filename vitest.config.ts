import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./tests/setup.ts'],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
      '@/components': path.resolve(__dirname, './components'),
      '@/data': path.resolve(__dirname, './data'),
      '@/layouts': path.resolve(__dirname, './layouts'),
      '@/css': path.resolve(__dirname, './css'),
    },
  },
})

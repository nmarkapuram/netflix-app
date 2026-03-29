import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  test: {
    globals: true, // Allows using test functions globally without explicit imports
    environment: 'jsdom', // Simulates a browser environment
    setupFiles: './src/tests/setup.js', // Path to your test setup file
  },
})

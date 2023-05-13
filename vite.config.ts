import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/react-training-framer-motion',
  plugins: [react()],
  build: {
    outDir: './build'
  }
})

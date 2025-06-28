import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/portfolio/',  // ← ここ重要！
  plugins: [react()],
})

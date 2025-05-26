import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '128.0.1.110',
    allowedHosts: ['uniproje.emirercan.net.tr'],
    port: 80,
  },
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 2083,  // 設定端口為 2083
  },
  root: '.', // 根目錄
  base: '/', // 部署路徑
})

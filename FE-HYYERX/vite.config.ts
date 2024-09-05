import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
      babel: {
        
        plugins: ['@emotion/babel-plugin']
      }
    })
  ],
  server: {
    port: process.env.PORT || 3000,
    host: true // Đảm bảo Vite sẽ lắng nghe từ tất cả các địa chỉ IP (0.0.0.0)
  },
  css: {
    devSourcemap: true
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './src')
    }
  }
})

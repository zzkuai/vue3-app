const { resolve } = require('path')
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '~src': resolve(__dirname, './src/'),
      '~comps': resolve(__dirname, './src/components/'),
      '~imgs': resolve(__dirname, './src/assets/images/'),
    },
  },
  server: {
    proxy: {
      '/music-api/': {
        target: 'http://192.168.124.19:3000',
        changeOrigin: true,
        secure: false,
      },
    },
  },
})

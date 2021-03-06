const { resolve } = require('path')
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport from 'vite-plugin-style-import'

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  plugins: [
    vue(),
    styleImport({
      libs: [
        {
          libraryName: 'vant',
          esModule: true,
          resolveStyle: (name) => {
            return `vant/es/${name}/style/index`
          },
        },
      ],
    }),
  ],
  resolve: {
    alias: {
      '~src': resolve(__dirname, './src/'),
      '~comps': resolve(__dirname, './src/components/'),
      '~imgs': resolve(__dirname, './src/assets/images/'),
      '~api': resolve(__dirname, './src/service/api/'),
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

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import WindiCSS from 'vite-plugin-windicss'
// import vitePluginImport from 'vite-plugin-babel-import'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    WindiCSS(),
    // vitePluginImport([
    //   {
    //     libraryName: 'antd-mobile',
    //     libraryDirectory: 'es',
    //     style(name) {
    //       return `antd-mobile/lib/${name}/style/index.css`
    //     },
    //     ignoreStyles: [],
    //   },
    // ]),
  ],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
})

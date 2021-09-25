import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import WindiCSS from 'vite-plugin-windicss'
// import vitePluginImport from 'vite-plugin-babel-import'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    reactRefresh(),
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

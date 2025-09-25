import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    // 设置开发服务器端口为8080
    port: 8080,
    // 配置热更新
    hmr: {
      // 在构建错误时显示全屏覆盖层
      overlay: true
    },
    // 允许从任何IP访问开发服务器
    host: true,
    // 自动在浏览器中打开应用
    open: true,
    // 端口被占用时自动尝试其他端口
    strictPort: false
  },
   resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})

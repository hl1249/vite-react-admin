import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from "path"

// https://vitejs.dev/config/
export default defineConfig({
  base:"./",
  plugins: [react()],
  resolve: {
    alias: {
      "@": resolve(".", "./src"),
      "~": resolve(".", "./node_modules")
    },
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', ".less"]
  },
  css: {
    preprocessorOptions: {
      less: {
        // 如果你有全局的 Less 变量文件，可以在这里导入
        // additionalData: `@import "@/styles/variables";`,
      },
    },
  },
})

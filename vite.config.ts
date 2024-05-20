import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { vitePluginForArco } from '@arco-plugins/vite-vue';
import AutoImport from 'unplugin-auto-import/vite';
import { URL, fileURLToPath } from 'node:url';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  plugins: [
    vue(),
    vitePluginForArco({
      style: 'css',
    }),
    AutoImport({
      imports: ['vue', 'vue-router', 'pinia'],
      dts: './src/types/auto-imports.d.ts',
      eslintrc: {
        enabled: true,
      },
    }),
  ],
});

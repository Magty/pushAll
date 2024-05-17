import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { vitePluginForArco } from '@arco-plugins/vite-vue';
import AutoImport from 'unplugin-auto-import/vite';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
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

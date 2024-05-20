import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { vitePluginForArco } from '@arco-plugins/vite-vue';
import AutoImport from 'unplugin-auto-import/vite';
import { URL, fileURLToPath } from 'node:url';
import { webUpdateNotice } from '@plugin-web-update-notification/vite';

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
    webUpdateNotice({
      versionType: 'build_timestamp',
      notificationProps: {
        title: '📢 系统更新1',
        description:
          '为了您更好的体验我们升级了系统，请您刷新页面体验最新版本,如需自己刷新,请使用shift加f5进行刷新',
        buttonText: '刷新',
        dismissButtonText: '忽略',
      },
    }),
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

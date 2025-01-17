import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: { alias: { './runtimeConfig': './runtimeConfig.browser' } },
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true,
      },
      injectRegister: 'auto',
      workbox: {
        maximumFileSizeToCacheInBytes: 3 * 1024 * 1024,
      },
      manifest: {
        name: 'Chat RSG',
        short_name: 'Chat RSG',
        description: 'Chat RSG',
        start_url: '/index.html',
        display: 'standalone',
        theme_color: '#232F3E',
        icons: [
          {
            src: '/images/rsg_64.svg',
            sizes: '64x64',
            type: 'image/png',
          },
          {
            src: '/images/rsg_96.svg',
            sizes: '96x96',
            type: 'image/svg',
          },
        ],
      },
    }),
  ],
  server: { host: true }
});

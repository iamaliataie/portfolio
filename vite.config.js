import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    vue(),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        cleanupOutdatedCaches: true,
        skipWaiting: true,
        globPatterns: ['**/*.{js,css,html,ico,png,svg,jpg,jpeg,pdf}']
      },
      manifest: {
        name: "Ali Ahmad Ataie",
        short_name: "Ali's Portfolio",
        icons: [
          {
            src: "/icons/192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/icons/256.png",
            sizes: "256x256",
            type: "image/png",
          },
          {
            src: "/icons/384.png",
            sizes: "384x384",
            type: "image/png",
          },
          {
            src: "/icons/512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any"
          },
          {
            src: "/icons/maskable_icon.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable"
          },
        ]
      },
    })
  ],
})

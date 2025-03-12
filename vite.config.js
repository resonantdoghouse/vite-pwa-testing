import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "Vite PWA Testing",
        short_name: "Vite PWA Testing",
        description: "Catch 'em all!",
        theme_color: "#ffcc00",
        background_color: "#ffffff",
        display: "standalone",
        icons: [
          { src: "/pwa-192x192.png", sizes: "192x192", type: "image/png" },
          { src: "/pwa-512x512.png", sizes: "512x512", type: "image/png" },
        ],
      },
      workbox: {
        runtimeCaching: [
          {
            // Cache Pokémon API responses
            urlPattern: /^https:\/\/pokeapi\.co\/api\/v2\//,
            handler: "StaleWhileRevalidate",
            options: {
              cacheName: "pokemon-api-cache",
              expiration: {
                maxEntries: 50, // Store up to 50 API calls
                maxAgeSeconds: 60 * 60 * 24, // Cache for 1 day
              },
            },
          },
        ],
      },
    }),
  ],
});

// vite.config.js
import { defineConfig } from "file:///Users/michaelheim/Documents/git-ferienlernapp/ferienlernapp/node_modules/vite/dist/node/index.js";
import { svelte } from "file:///Users/michaelheim/Documents/git-ferienlernapp/ferienlernapp/node_modules/@sveltejs/vite-plugin-svelte/src/index.js";
import { VitePWA } from "file:///Users/michaelheim/Documents/git-ferienlernapp/ferienlernapp/node_modules/vite-plugin-pwa/dist/index.js";
var base = process.env.NODE_ENV === "production" ? "/ferienlernapp/" : "/";
var vite_config_default = defineConfig({
  base,
  plugins: [
    svelte(),
    VitePWA({
      registerType: "prompt",
      includeAssets: ["favicon.svg", "icons/*.png"],
      manifest: {
        name: "Startklar fuer die 3. Klasse",
        short_name: "Lisa lernt",
        description: "Bunte Weltraum-Lern-App fuer Mathe und Deutsch",
        lang: "de",
        theme_color: "#5b3fd6",
        background_color: "#0b1026",
        display: "standalone",
        orientation: "any",
        start_url: ".",
        scope: ".",
        icons: [
          { src: "icons/icon-192.png", sizes: "192x192", type: "image/png" },
          { src: "icons/icon-512.png", sizes: "512x512", type: "image/png" },
          { src: "icons/icon-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" }
        ]
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,svg,png,ico,woff2,mp3}"]
      }
    })
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvbWljaGFlbGhlaW0vRG9jdW1lbnRzL2dpdC1mZXJpZW5sZXJuYXBwL2Zlcmllbmxlcm5hcHBcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9taWNoYWVsaGVpbS9Eb2N1bWVudHMvZ2l0LWZlcmllbmxlcm5hcHAvZmVyaWVubGVybmFwcC92aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvbWljaGFlbGhlaW0vRG9jdW1lbnRzL2dpdC1mZXJpZW5sZXJuYXBwL2Zlcmllbmxlcm5hcHAvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCB7IHN2ZWx0ZSB9IGZyb20gJ0BzdmVsdGVqcy92aXRlLXBsdWdpbi1zdmVsdGUnO1xuaW1wb3J0IHsgVml0ZVBXQSB9IGZyb20gJ3ZpdGUtcGx1Z2luLXB3YSc7XG4vLyBBdWYgR2l0SHViIFBhZ2VzIGxpZWd0IGRpZSBBcHAgdW50ZXIgL2Zlcmllbmxlcm5hcHAvLlxuLy8gRnVlciBsb2thbGUgRW50d2lja2x1bmcgKCducG0gcnVuIGRldicpIHNvbGwgZGllIGJhc2UgJy8nIHNlaW4uXG52YXIgYmFzZSA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgPyAnL2Zlcmllbmxlcm5hcHAvJyA6ICcvJztcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gICAgYmFzZTogYmFzZSxcbiAgICBwbHVnaW5zOiBbXG4gICAgICAgIHN2ZWx0ZSgpLFxuICAgICAgICBWaXRlUFdBKHtcbiAgICAgICAgICAgIHJlZ2lzdGVyVHlwZTogJ3Byb21wdCcsXG4gICAgICAgICAgICBpbmNsdWRlQXNzZXRzOiBbJ2Zhdmljb24uc3ZnJywgJ2ljb25zLyoucG5nJ10sXG4gICAgICAgICAgICBtYW5pZmVzdDoge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdTdGFydGtsYXIgZnVlciBkaWUgMy4gS2xhc3NlJyxcbiAgICAgICAgICAgICAgICBzaG9ydF9uYW1lOiAnTGlzYSBsZXJudCcsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdCdW50ZSBXZWx0cmF1bS1MZXJuLUFwcCBmdWVyIE1hdGhlIHVuZCBEZXV0c2NoJyxcbiAgICAgICAgICAgICAgICBsYW5nOiAnZGUnLFxuICAgICAgICAgICAgICAgIHRoZW1lX2NvbG9yOiAnIzViM2ZkNicsXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZF9jb2xvcjogJyMwYjEwMjYnLFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdzdGFuZGFsb25lJyxcbiAgICAgICAgICAgICAgICBvcmllbnRhdGlvbjogJ2FueScsXG4gICAgICAgICAgICAgICAgc3RhcnRfdXJsOiAnLicsXG4gICAgICAgICAgICAgICAgc2NvcGU6ICcuJyxcbiAgICAgICAgICAgICAgICBpY29uczogW1xuICAgICAgICAgICAgICAgICAgICB7IHNyYzogJ2ljb25zL2ljb24tMTkyLnBuZycsIHNpemVzOiAnMTkyeDE5MicsIHR5cGU6ICdpbWFnZS9wbmcnIH0sXG4gICAgICAgICAgICAgICAgICAgIHsgc3JjOiAnaWNvbnMvaWNvbi01MTIucG5nJywgc2l6ZXM6ICc1MTJ4NTEyJywgdHlwZTogJ2ltYWdlL3BuZycgfSxcbiAgICAgICAgICAgICAgICAgICAgeyBzcmM6ICdpY29ucy9pY29uLTUxMi5wbmcnLCBzaXplczogJzUxMng1MTInLCB0eXBlOiAnaW1hZ2UvcG5nJywgcHVycG9zZTogJ21hc2thYmxlJyB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHdvcmtib3g6IHtcbiAgICAgICAgICAgICAgICBnbG9iUGF0dGVybnM6IFsnKiovKi57anMsY3NzLGh0bWwsc3ZnLHBuZyxpY28sd29mZjIsbXAzfSddXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgXVxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXNXLFNBQVMsb0JBQW9CO0FBQ25ZLFNBQVMsY0FBYztBQUN2QixTQUFTLGVBQWU7QUFHeEIsSUFBSSxPQUFPLFFBQVEsSUFBSSxhQUFhLGVBQWUsb0JBQW9CO0FBQ3ZFLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQ3hCO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDTCxPQUFPO0FBQUEsSUFDUCxRQUFRO0FBQUEsTUFDSixjQUFjO0FBQUEsTUFDZCxlQUFlLENBQUMsZUFBZSxhQUFhO0FBQUEsTUFDNUMsVUFBVTtBQUFBLFFBQ04sTUFBTTtBQUFBLFFBQ04sWUFBWTtBQUFBLFFBQ1osYUFBYTtBQUFBLFFBQ2IsTUFBTTtBQUFBLFFBQ04sYUFBYTtBQUFBLFFBQ2Isa0JBQWtCO0FBQUEsUUFDbEIsU0FBUztBQUFBLFFBQ1QsYUFBYTtBQUFBLFFBQ2IsV0FBVztBQUFBLFFBQ1gsT0FBTztBQUFBLFFBQ1AsT0FBTztBQUFBLFVBQ0gsRUFBRSxLQUFLLHNCQUFzQixPQUFPLFdBQVcsTUFBTSxZQUFZO0FBQUEsVUFDakUsRUFBRSxLQUFLLHNCQUFzQixPQUFPLFdBQVcsTUFBTSxZQUFZO0FBQUEsVUFDakUsRUFBRSxLQUFLLHNCQUFzQixPQUFPLFdBQVcsTUFBTSxhQUFhLFNBQVMsV0FBVztBQUFBLFFBQzFGO0FBQUEsTUFDSjtBQUFBLE1BQ0EsU0FBUztBQUFBLFFBQ0wsY0FBYyxDQUFDLDBDQUEwQztBQUFBLE1BQzdEO0FBQUEsSUFDSixDQUFDO0FBQUEsRUFDTDtBQUNKLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==

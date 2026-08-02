import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { VitePWA } from 'vite-plugin-pwa'

// Auf GitHub Pages liegt die App unter /ferienlernapp/.
// Fuer lokale Entwicklung ('npm run dev') soll die base '/' sein.
const base = process.env.NODE_ENV === 'production' ? '/ferienlernapp/' : '/'

export default defineConfig({
  base,
  plugins: [
    svelte(),
    VitePWA({
      registerType: 'prompt',
      includeAssets: ['favicon.svg', 'icons/*.png'],
      manifest: {
        name: 'Startklar fuer die 3. Klasse',
        short_name: 'Lisa lernt',
        description: 'Bunte Weltraum-Lern-App fuer Mathe und Deutsch',
        lang: 'de',
        theme_color: '#5b3fd6',
        background_color: '#0b1026',
        display: 'standalone',
        orientation: 'any',
        start_url: '.',
        scope: '.',
        icons: [
          { src: 'icons/icon-192.png', sizes: '192x192', type: 'image/png' },
          { src: 'icons/icon-512.png', sizes: '512x512', type: 'image/png' },
          { src: 'icons/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,svg,png,ico,woff2,mp3}']
      }
    })
  ]
})

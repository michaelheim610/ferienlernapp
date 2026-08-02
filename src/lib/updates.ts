import { writable } from 'svelte/store'
import { registerSW } from 'virtual:pwa-register'

// Zeigt einen Hinweis, wenn eine neue App-Version bereitsteht.
export const needRefresh = writable(false)

let updateSW: ((reloadPage?: boolean) => Promise<void>) | null = null

export function initUpdates() {
  try {
    updateSW = registerSW({
      onNeedRefresh() {
        needRefresh.set(true)
      }
    })
  } catch (e) {
    // Service Worker nicht verfuegbar (z.B. im Dev-Modus) -> ignorieren.
  }
}

export function applyUpdate() {
  needRefresh.set(false)
  if (updateSW) updateSW(true)
  else location.reload()
}

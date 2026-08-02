import { get, writable } from 'svelte/store'
import { progress } from './store'
import { profiles, type Profile } from './profiles'
import { joinOrCreate, pushProgress, type CloudError } from './cloud'

// Verbindet den lokalen Fortschritt eines Cloud-Profils mit der Datenbank.
// Lokal-first: offline laeuft alles weiter, bei Internet wird abgeglichen.

export type SyncStatus = 'off' | 'syncing' | 'online' | 'offline'
export const syncStatus = writable<SyncStatus>('off')

let current: { cloudId: string; pin: string } | null = null
let unsub: (() => void) | null = null
let timer: ReturnType<typeof setTimeout> | null = null
let connectivityWired = false

export function isCloudProfile(p: Profile | undefined): boolean {
  return !!(p && p.cloudId && p.classCode && p.code)
}

/** Einmalig: auf "wieder online" hoeren und dann sofort abgleichen. */
export function initConnectivity() {
  if (connectivityWired || typeof window === 'undefined') return
  connectivityWired = true
  window.addEventListener('online', () => {
    if (current) {
      syncStatus.set('syncing')
      doPush()
    }
  })
  window.addEventListener('offline', () => {
    if (current) syncStatus.set('offline')
  })
}

/** Beim Aktivieren eines Cloud-Profils: ziehen + zusammenfuehren + abonnieren. */
export async function startCloudSync(profile: Profile): Promise<{ ok: boolean; error?: CloudError }> {
  stopCloudSync()
  if (!isCloudProfile(profile)) {
    syncStatus.set('off')
    return { ok: false }
  }
  // current sofort setzen, damit auch nach Offline-Start spaeter abgeglichen wird.
  current = { cloudId: profile.cloudId!, pin: profile.code! }
  syncStatus.set('syncing')

  // Auf Aenderungen hoeren (auch wenn der erste Pull offline scheitert).
  unsub = progress.subscribe(() => schedulePush())

  try {
    const cloud = await joinOrCreate(profile.classCode!, profile.name, profile.avatar, profile.code!)
    progress.mergeSolved(cloud.solved || {})
    syncStatus.set('online')
    schedulePush()
    return { ok: true }
  } catch (e) {
    // Offline o.ae. -> lokal weiterarbeiten, spaeter erneut versuchen.
    syncStatus.set('offline')
    return { ok: false, error: e as CloudError }
  }
}

export function stopCloudSync() {
  if (unsub) {
    unsub()
    unsub = null
  }
  if (timer) {
    clearTimeout(timer)
    timer = null
  }
  current = null
  syncStatus.set('off')
}

function schedulePush() {
  if (!current) return
  if (timer) clearTimeout(timer)
  timer = setTimeout(doPush, 1200)
}

async function doPush() {
  if (!current) return
  const solved = get(progress).solved
  try {
    const res = await pushProgress(current.cloudId, current.pin, solved)
    progress.mergeSolved(res.solved || {})
    syncStatus.set('online')
  } catch (e) {
    // Offline: bei naechster Aenderung oder "online"-Event erneut versuchen.
    syncStatus.set('offline')
  }
}

/** Klasse beitreten / Kind in der Cloud anlegen und lokales Profil erzeugen. */
export async function joinClass(opts: {
  classCode: string
  name: string
  avatar: string
  pin: string
}): Promise<{ ok: true; id: string } | { ok: false; error: CloudError }> {
  try {
    const cloud = await joinOrCreate(opts.classCode, opts.name, opts.avatar, opts.pin)
    const id = profiles.add({
      name: opts.name,
      avatar: cloud.avatar || opts.avatar,
      code: opts.pin,
      classCode: opts.classCode.trim(),
      cloudId: cloud.id
    })
    progress.useProfile(id)
    progress.mergeSolved(cloud.solved || {})
    return { ok: true, id }
  } catch (e) {
    return { ok: false, error: e as CloudError }
  }
}

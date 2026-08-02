import { get } from 'svelte/store'
import { progress } from './store'
import { profiles, type Profile } from './profiles'
import { joinOrCreate, pushProgress, type CloudError } from './cloud'

// Verbindet den lokalen Fortschritt eines Cloud-Profils mit der Datenbank.
// Lokal-first: offline laeuft alles weiter, bei Internet wird abgeglichen.

let current: { cloudId: string; pin: string } | null = null
let unsub: (() => void) | null = null
let timer: ReturnType<typeof setTimeout> | null = null

export type SyncStatus = 'off' | 'syncing' | 'online' | 'offline'
let statusListener: ((s: SyncStatus) => void) | null = null
export function onSyncStatus(cb: (s: SyncStatus) => void) {
  statusListener = cb
}
function setStatus(s: SyncStatus) {
  if (statusListener) statusListener(s)
}

export function isCloudProfile(p: Profile | undefined): boolean {
  return !!(p && p.cloudId && p.classCode && p.code)
}

/** Beim Aktivieren eines Cloud-Profils: ziehen + zusammenfuehren + abonnieren. */
export async function startCloudSync(profile: Profile): Promise<{ ok: boolean; error?: CloudError }> {
  stopCloudSync()
  if (!isCloudProfile(profile)) {
    setStatus('off')
    return { ok: false }
  }
  setStatus('syncing')
  try {
    const cloud = await joinOrCreate(profile.classCode!, profile.name, profile.avatar, profile.code!)
    progress.mergeSolved(cloud.solved || {})
    current = { cloudId: profile.cloudId!, pin: profile.code! }
    setStatus('online')
    // Zusammengefuehrten Stand gleich hochladen und auf Aenderungen hoeren.
    schedulePush()
    unsub = progress.subscribe(() => schedulePush())
    return { ok: true }
  } catch (e) {
    // Offline o.ae. -> lokal weiterarbeiten, kein Fehler fuer das Kind.
    setStatus('offline')
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
  setStatus('off')
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
    setStatus('online')
  } catch (e) {
    // Offline: spaeter erneut versuchen (bei naechster Aenderung).
    setStatus('offline')
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

// Aktuelles Cloud-Profil anhand des Stores finden (Hilfsfunktion).
export function activeCloudProfile(): Profile | undefined {
  const s = get(profiles)
  const p = s.profiles.find((x) => x.id === s.activeId)
  return isCloudProfile(p) ? p : undefined
}

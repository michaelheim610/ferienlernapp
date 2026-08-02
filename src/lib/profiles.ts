import { writable } from 'svelte/store'

// Lokale Profile (mehrere Kinder auf einem Geraet). Kein Login, alles offline.
export interface Profile {
  id: string
  name: string
  avatar: string
  code?: string // 4-stelliger Geheimcode (weicher Geschwister-Schutz, kein echter Passwortschutz)
}

interface ProfilesState {
  profiles: Profile[]
  activeId: string | null
}

const KEY = 'ferienlernapp.profiles.v1'

function load(): ProfilesState {
  try {
    const raw = localStorage.getItem(KEY)
    if (raw) {
      const s = JSON.parse(raw) as Partial<ProfilesState>
      return { profiles: s.profiles ?? [], activeId: s.activeId ?? null }
    }
  } catch (e) {
    // defekter Speicher -> frisch starten
  }
  return { profiles: [], activeId: null }
}

function genId(): string {
  try {
    if (typeof crypto !== 'undefined' && crypto.randomUUID) return crypto.randomUUID()
  } catch (e) {
    // ignore
  }
  return 'p_' + Date.now().toString(36) + Math.random().toString(36).slice(2, 8)
}

function createProfiles() {
  const store = writable<ProfilesState>(load())

  store.subscribe((value) => {
    try {
      localStorage.setItem(KEY, JSON.stringify(value))
    } catch (e) {
      // ignore
    }
  })

  return {
    subscribe: store.subscribe,
    /** Neues Profil anlegen und direkt aktiv setzen. Gibt die neue id zurueck. */
    add(name: string, avatar: string, code = ''): string {
      const id = genId()
      store.update((s) => ({
        profiles: [...s.profiles, { id, name: name.trim() || 'Kind', avatar, code }],
        activeId: id
      }))
      return id
    },
    select(id: string) {
      store.update((s) => ({ ...s, activeId: id }))
    },
    clearActive() {
      store.update((s) => ({ ...s, activeId: null }))
    },
    remove(id: string) {
      store.update((s) => ({
        profiles: s.profiles.filter((p) => p.id !== id),
        activeId: s.activeId === id ? null : s.activeId
      }))
      try {
        localStorage.removeItem(`ferienlernapp.progress.v1.${id}`)
      } catch (e) {
        // ignore
      }
    }
  }
}

export const profiles = createProfiles()

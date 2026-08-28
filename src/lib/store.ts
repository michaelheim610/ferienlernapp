import { writable } from 'svelte/store'

// Fortschritt pro Profil: welche Aufgaben (per exerciseId) sind geschafft + Sterne.
export interface Progress {
  solved: Record<string, boolean> // exerciseId -> true
  stars: number
  soundOn: boolean
  streak: number // Tage-in-Folge-Serie
  lastPlayed?: string // YYYY-MM-DD (lokal), letzter Uebungstag
}

// Lokales Datum als YYYY-MM-DD (nicht UTC, damit der Tageswechsel stimmt).
function localDate(d = new Date()): string {
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${y}-${m}-${day}`
}

function keyFor(profileId: string): string {
  return `ferienlernapp.progress.v1.${profileId}`
}

function loadFor(profileId: string | null): Progress {
  if (!profileId) return { solved: {}, stars: 0, soundOn: true, streak: 0 }
  try {
    const raw = localStorage.getItem(keyFor(profileId))
    if (raw) {
      const p = JSON.parse(raw) as Partial<Progress>
      return {
        solved: p.solved ?? {},
        stars: p.stars ?? 0,
        soundOn: p.soundOn ?? true,
        streak: p.streak ?? 0,
        lastPlayed: p.lastPlayed
      }
    }
  } catch (e) {
    // defekter Speicher -> frisch starten
  }
  return { solved: {}, stars: 0, soundOn: true, streak: 0 }
}

// Welches Profil ist gerade aktiv (bestimmt den Speicher-Schluessel).
let activeProfileId: string | null = null

function createProgress() {
  const store = writable<Progress>(loadFor(null))

  store.subscribe((value) => {
    if (!activeProfileId) return
    try {
      localStorage.setItem(keyFor(activeProfileId), JSON.stringify(value))
    } catch (e) {
      // Speicher voll o.ae. -> ignorieren
    }
  })

  return {
    subscribe: store.subscribe,
    /** Auf ein Profil umschalten und dessen Fortschritt laden. */
    useProfile(profileId: string) {
      activeProfileId = profileId
      store.set(loadFor(profileId))
    },
    /** Aufgabe als geschafft markieren. Gibt zurueck, ob es das erste Mal war. */
    solve(exerciseId: string, starReward = 1): boolean {
      let firstTime = false
      store.update((p) => {
        if (!p.solved[exerciseId]) {
          firstTime = true
          // Lern-Serie aktualisieren
          const today = localDate()
          let streak = p.streak
          if (p.lastPlayed !== today) {
            const yest = localDate(new Date(Date.now() - 86400000))
            streak = p.lastPlayed === yest ? p.streak + 1 : 1
          }
          return {
            ...p,
            solved: { ...p.solved, [exerciseId]: true },
            stars: p.stars + starReward,
            streak,
            lastPlayed: today
          }
        }
        return p
      })
      return firstTime
    },
    /** Geloeste Aufgaben aus der Cloud zusammenfuehren (Union). Sterne = Anzahl. */
    mergeSolved(incoming: Record<string, boolean>) {
      store.update((p) => {
        const solved = { ...p.solved }
        for (const k in incoming) if (incoming[k]) solved[k] = true
        return { ...p, solved, stars: Object.keys(solved).length }
      })
    },
    toggleSound() {
      store.update((p) => ({ ...p, soundOn: !p.soundOn }))
    },
    reset() {
      store.set({ solved: {}, stars: 0, soundOn: true, streak: 0 })
    }
  }
}

export const progress = createProgress()

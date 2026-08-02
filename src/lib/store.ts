import { writable } from 'svelte/store'

// Fortschritt pro Profil: welche Aufgaben (per exerciseId) sind geschafft + Sterne.
export interface Progress {
  solved: Record<string, boolean> // exerciseId -> true
  stars: number
  soundOn: boolean
}

function keyFor(profileId: string): string {
  return `ferienlernapp.progress.v1.${profileId}`
}

function loadFor(profileId: string | null): Progress {
  if (!profileId) return { solved: {}, stars: 0, soundOn: true }
  try {
    const raw = localStorage.getItem(keyFor(profileId))
    if (raw) {
      const p = JSON.parse(raw) as Partial<Progress>
      return {
        solved: p.solved ?? {},
        stars: p.stars ?? 0,
        soundOn: p.soundOn ?? true
      }
    }
  } catch (e) {
    // defekter Speicher -> frisch starten
  }
  return { solved: {}, stars: 0, soundOn: true }
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
          return {
            ...p,
            solved: { ...p.solved, [exerciseId]: true },
            stars: p.stars + starReward
          }
        }
        return p
      })
      return firstTime
    },
    toggleSound() {
      store.update((p) => ({ ...p, soundOn: !p.soundOn }))
    },
    reset() {
      store.set({ solved: {}, stars: 0, soundOn: true })
    }
  }
}

export const progress = createProgress()

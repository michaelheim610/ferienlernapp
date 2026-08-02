import { writable } from 'svelte/store'

// Fortschritt: welche Aufgaben (per exerciseId) sind geschafft + gesammelte Sterne.
export interface Progress {
  solved: Record<string, boolean> // exerciseId -> true
  stars: number
  soundOn: boolean
}

const KEY = 'ferienlernapp.progress.v1'

function load(): Progress {
  try {
    const raw = localStorage.getItem(KEY)
    if (raw) {
      const p = JSON.parse(raw) as Partial<Progress>
      return {
        solved: p.solved ?? {},
        stars: p.stars ?? 0,
        soundOn: p.soundOn ?? true
      }
    }
  } catch (e) {
    // Bei defektem Speicher einfach frisch starten.
  }
  return { solved: {}, stars: 0, soundOn: true }
}

function createProgress() {
  const store = writable<Progress>(load())

  store.subscribe((value) => {
    try {
      localStorage.setItem(KEY, JSON.stringify(value))
    } catch (e) {
      // Speicher voll o.ae. -> ignorieren, App laeuft weiter.
    }
  })

  return {
    subscribe: store.subscribe,
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

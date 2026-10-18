import { writable } from 'svelte/store'

// Fortschritt pro Profil: welche Aufgaben (per exerciseId) sind geschafft + Sterne.
export interface Progress {
  solved: Record<string, boolean> // exerciseId -> true
  stars: number
  soundOn: boolean
  streak: number // Tage-in-Folge-Serie
  lastPlayed?: string // YYYY-MM-DD (lokal), letzter Uebungstag
  couponsRedeemed: Record<string, string> // couponId -> Einloese-Datum (YYYY-MM-DD)
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

function empty(): Progress {
  return { solved: {}, stars: 0, soundOn: true, streak: 0, couponsRedeemed: {} }
}

function loadFor(profileId: string | null): Progress {
  if (!profileId) return empty()
  try {
    const raw = localStorage.getItem(keyFor(profileId))
    if (raw) {
      const p = JSON.parse(raw) as Partial<Progress>
      return {
        solved: p.solved ?? {},
        stars: p.stars ?? 0,
        soundOn: p.soundOn ?? true,
        streak: p.streak ?? 0,
        lastPlayed: p.lastPlayed,
        couponsRedeemed: p.couponsRedeemed ?? {}
      }
    }
  } catch (e) {
    // defekter Speicher -> frisch starten
  }
  return empty()
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
    /** Gutschein bei Papa einloesen (abstempeln). */
    redeemCoupon(couponId: string) {
      store.update((p) => ({
        ...p,
        couponsRedeemed: { ...p.couponsRedeemed, [couponId]: localDate() }
      }))
    },
    toggleSound() {
      store.update((p) => ({ ...p, soundOn: !p.soundOn }))
    },
    reset() {
      store.set(empty())
    }
  }
}

export const progress = createProgress()

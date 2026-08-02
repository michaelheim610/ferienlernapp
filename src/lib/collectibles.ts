// Sammelbare Weltraum-Objekte, die mit gesammelten Sternen freigeschaltet werden.
export interface Collectible {
  stars: number
  emoji: string
  name: string
}

export const collectibles: Collectible[] = [
  { stars: 1, emoji: '🌙', name: 'Mond' },
  { stars: 3, emoji: '⭐', name: 'Stern' },
  { stars: 6, emoji: '☄️', name: 'Komet' },
  { stars: 10, emoji: '🪐', name: 'Ringplanet' },
  { stars: 15, emoji: '🛰️', name: 'Satellit' },
  { stars: 20, emoji: '🚀', name: 'Rakete' },
  { stars: 26, emoji: '🌍', name: 'Erde' },
  { stars: 32, emoji: '👽', name: 'Alien' },
  { stars: 38, emoji: '🛸', name: 'Ufo' },
  { stars: 44, emoji: '🌠', name: 'Sternschnuppe' },
  { stars: 52, emoji: '🌌', name: 'Galaxie' },
  { stars: 60, emoji: '🌞', name: 'Sonne' }
]

/** Anzahl bereits freigeschalteter Objekte. */
export function unlockedCount(stars: number): number {
  return collectibles.filter((c) => stars >= c.stars).length
}

/** Naechstes noch nicht freigeschaltetes Objekt (oder null, wenn alle da sind). */
export function nextCollectible(stars: number): Collectible | null {
  return collectibles.find((c) => stars < c.stars) ?? null
}

/** Wurde beim Sprung von `before` auf `after` Sternen etwas Neues freigeschaltet? */
export function newlyUnlocked(before: number, after: number): Collectible | null {
  const c = collectibles.find((c) => c.stars > before && c.stars <= after)
  return c ?? null
}

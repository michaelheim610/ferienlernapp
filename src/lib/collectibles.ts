// Sammelbare Weltraum-Objekte, die mit gesammelten Sternen freigeschaltet werden.
export interface Collectible {
  stars: number
  emoji: string
  name: string
}

export const collectibles: Collectible[] = [
  { stars: 1, emoji: '🌙', name: 'Mond' },
  { stars: 3, emoji: '⭐', name: 'Stern' },
  { stars: 5, emoji: '☄️', name: 'Komet' },
  { stars: 8, emoji: '🪐', name: 'Ringplanet' },
  { stars: 11, emoji: '🛰️', name: 'Satellit' },
  { stars: 14, emoji: '🚀', name: 'Rakete' },
  { stars: 18, emoji: '🌍', name: 'Erde' },
  { stars: 22, emoji: '🌕', name: 'Vollmond' },
  { stars: 26, emoji: '🔭', name: 'Teleskop' },
  { stars: 30, emoji: '👽', name: 'Alien' },
  { stars: 34, emoji: '🛸', name: 'Ufo' },
  { stars: 38, emoji: '🌠', name: 'Sternschnuppe' },
  { stars: 42, emoji: '🌌', name: 'Galaxie' },
  { stars: 46, emoji: '🌞', name: 'Sonne' },
  { stars: 50, emoji: '👾', name: 'Weltraum-Monster' },
  { stars: 54, emoji: '🧑‍🚀', name: 'Astronaut' },
  { stars: 58, emoji: '🪨', name: 'Asteroid' },
  { stars: 62, emoji: '🌛', name: 'Mondsichel' },
  { stars: 66, emoji: '💫', name: 'Wirbelstern' },
  { stars: 70, emoji: '🏆', name: 'Pokal' },
  { stars: 74, emoji: '🥇', name: 'Goldmedaille' },
  { stars: 78, emoji: '👑', name: 'Krone' }
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

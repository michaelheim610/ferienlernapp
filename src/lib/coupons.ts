// Papa-Gutscheine: echte Belohnungen, die Lisa mit Sternen freischaltet
// und dann bei Papa einloesen darf ("seltener & groesser").
// Die Werte (Sterne, Titel, Beschreibung) kann Papa im Papa-Zugang anpassen;
// Aenderungen werden lokal auf dem Geraet gespeichert.
import { writable, get } from 'svelte/store'

export interface Coupon {
  id: string
  stars: number
  emoji: string
  title: string
  desc: string
}

// Ausgangswerte (Standard). Papa kann sie ueberschreiben.
export const defaultCoupons: Coupon[] = [
  { id: 'eis', stars: 50, emoji: '🍦', title: 'Eis essen gehen', desc: 'Such dir deine Lieblingssorte aus!' },
  { id: 'mueller', stars: 70, emoji: '🛍️', title: 'Müller-Einkauf', desc: 'Du darfst dir etwas Kleines aussuchen.' },
  { id: 'pizza', stars: 90, emoji: '🍕', title: 'Pizza-Abend', desc: 'Deine Lieblingspizza mit Papa.' },
  { id: 'schwimmen', stars: 110, emoji: '🏊', title: 'Schwimmen gehen', desc: 'Ein Nachmittag im Schwimmbad.' },
  { id: 'mcd', stars: 130, emoji: '🍔', title: 'Happy Meal', desc: "McDonald's Happy Meal – mit Spielzeug!" },
  { id: 'kino', stars: 150, emoji: '🎬', title: 'Kino mit Popcorn', desc: 'Ein Film im Kino + großes Popcorn.' },
  { id: 'mega', stars: 170, emoji: '🎁', title: 'MEGA-Überraschung', desc: 'Papa überrascht dich mit etwas Besonderem!' }
]

export type CouponOverride = { stars?: number; title?: string; desc?: string }
export type CouponOverrides = Record<string, CouponOverride>

const STORAGE_KEY = 'ferienlernapp.coupons.v1'

function loadOverrides(): CouponOverrides {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return {}
    const parsed = JSON.parse(raw)
    return parsed && typeof parsed === 'object' ? (parsed as CouponOverrides) : {}
  } catch (e) {
    return {}
  }
}

/** Standardwerte mit Papas Aenderungen zusammenfuehren und nach Sternen sortieren. */
function applyOverrides(ov: CouponOverrides): Coupon[] {
  const list = defaultCoupons.map((c) => {
    const o = ov[c.id]
    if (!o) return { ...c }
    return {
      ...c,
      stars: typeof o.stars === 'number' && o.stars > 0 ? Math.round(o.stars) : c.stars,
      title: o.title && o.title.trim() ? o.title.trim() : c.title,
      desc: o.desc && o.desc.trim() ? o.desc.trim() : c.desc
    }
  })
  list.sort((a, b) => a.stars - b.stars)
  return list
}

// Reaktive Gutschein-Liste (reagiert auf Papas Aenderungen).
export const coupons = writable<Coupon[]>(applyOverrides(loadOverrides()))

/** Aktuelle gespeicherte Aenderungen auslesen (fuer den Papa-Editor). */
export function getCouponOverrides(): CouponOverrides {
  return loadOverrides()
}

/** Papas Aenderungen speichern und Liste aktualisieren. */
export function saveCouponOverrides(ov: CouponOverrides): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(ov))
  } catch (e) {
    // ignore
  }
  coupons.set(applyOverrides(ov))
}

/** Alles auf die Standardwerte zuruecksetzen. */
export function resetCoupons(): void {
  try {
    localStorage.removeItem(STORAGE_KEY)
  } catch (e) {
    // ignore
  }
  coupons.set(applyOverrides({}))
}

export function couponById(id: string): Coupon | undefined {
  return get(coupons).find((c) => c.id === id)
}

export function unlockedCouponCount(stars: number): number {
  return get(coupons).filter((c) => stars >= c.stars).length
}

export function nextCoupon(stars: number, list: Coupon[] = get(coupons)): Coupon | null {
  return list.find((c) => stars < c.stars) ?? null
}

/** Wurde beim Sprung von before -> after Sternen ein Gutschein freigeschaltet? */
export function newlyUnlockedCoupon(
  before: number,
  after: number,
  list: Coupon[] = get(coupons)
): Coupon | null {
  return list.find((c) => c.stars > before && c.stars <= after) ?? null
}

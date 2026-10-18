// Papa-Gutscheine: echte Belohnungen, die Lisa mit Sternen freischaltet
// und dann bei Papa einloesen darf ("seltener & groesser").
export interface Coupon {
  id: string
  stars: number
  emoji: string
  title: string
  desc: string
}

export const coupons: Coupon[] = [
  { id: 'eis', stars: 25, emoji: '🍦', title: 'Eis essen gehen', desc: 'Such dir deine Lieblingssorte aus!' },
  { id: 'mueller', stars: 40, emoji: '🛍️', title: 'Müller-Einkauf', desc: 'Du darfst dir etwas Kleines aussuchen.' },
  { id: 'pizza', stars: 55, emoji: '🍕', title: 'Pizza-Abend', desc: 'Deine Lieblingspizza mit Papa.' },
  { id: 'schwimmen', stars: 70, emoji: '🏊', title: 'Schwimmen gehen', desc: 'Ein Nachmittag im Schwimmbad.' },
  { id: 'mcd', stars: 85, emoji: '🍔', title: 'Happy Meal', desc: "McDonald's Happy Meal – mit Spielzeug!" },
  { id: 'kino', stars: 100, emoji: '🎬', title: 'Kino mit Popcorn', desc: 'Ein Film im Kino + großes Popcorn.' },
  { id: 'mega', stars: 115, emoji: '🎁', title: 'MEGA-Überraschung', desc: 'Papa überrascht dich mit etwas Besonderem!' }
]

export function couponById(id: string): Coupon | undefined {
  return coupons.find((c) => c.id === id)
}

export function unlockedCouponCount(stars: number): number {
  return coupons.filter((c) => stars >= c.stars).length
}

export function nextCoupon(stars: number): Coupon | null {
  return coupons.find((c) => stars < c.stars) ?? null
}

/** Wurde beim Sprung von before -> after Sternen ein Gutschein freigeschaltet? */
export function newlyUnlockedCoupon(before: number, after: number): Coupon | null {
  return coupons.find((c) => c.stars > before && c.stars <= after) ?? null
}

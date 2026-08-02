// Kleine, freundliche Toene per WebAudio (keine Dateien noetig -> offline ok).
let ctx: AudioContext | null = null
let enabled = true

export function setSoundEnabled(on: boolean) {
  enabled = on
}

function ac(): AudioContext | null {
  if (!enabled) return null
  try {
    if (!ctx) {
      const AC = window.AudioContext || (window as any).webkitAudioContext
      ctx = new AC()
    }
    if (ctx.state === 'suspended') ctx.resume()
    return ctx
  } catch (e) {
    return null
  }
}

function tone(freq: number, start: number, dur: number, type: OscillatorType = 'sine', gain = 0.14) {
  const c = ac()
  if (!c) return
  const osc = c.createOscillator()
  const g = c.createGain()
  osc.type = type
  osc.frequency.value = freq
  const t = c.currentTime + start
  g.gain.setValueAtTime(0, t)
  g.gain.linearRampToValueAtTime(gain, t + 0.02)
  g.gain.exponentialRampToValueAtTime(0.0001, t + dur)
  osc.connect(g)
  g.connect(c.destination)
  osc.start(t)
  osc.stop(t + dur + 0.02)
}

/** Freundlicher aufsteigender Erfolgs-Jingle. */
export function playCorrect() {
  tone(523.25, 0, 0.14, 'triangle') // C5
  tone(659.25, 0.1, 0.14, 'triangle') // E5
  tone(783.99, 0.2, 0.22, 'triangle') // G5
}

/** Grosse Erfolgs-Fanfare am Ende eines Themas. */
export function playFanfare() {
  const notes = [523.25, 659.25, 783.99, 1046.5]
  notes.forEach((f, i) => tone(f, i * 0.12, 0.3, 'triangle', 0.16))
}

/** Sanftes, nicht-bestrafendes "nochmal". */
export function playTry() {
  tone(330, 0, 0.16, 'sine', 0.1)
  tone(262, 0.12, 0.2, 'sine', 0.1)
}

/** Kurzer Tipp-Klick. */
export function playTap() {
  tone(660, 0, 0.05, 'square', 0.05)
}

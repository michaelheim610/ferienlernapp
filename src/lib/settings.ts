// Geraete-weiter Papa-Code zum Bestaetigen (Abstempeln) von Gutscheinen.
const PIN_KEY = 'ferienlernapp.papapin.v1'

export function getPapaPin(): string {
  try {
    return localStorage.getItem(PIN_KEY) || ''
  } catch (e) {
    return ''
  }
}

export function setPapaPin(pin: string): void {
  try {
    localStorage.setItem(PIN_KEY, pin)
  } catch (e) {
    // ignore
  }
}

export function hasPapaPin(): boolean {
  return getPapaPin().length === 4
}

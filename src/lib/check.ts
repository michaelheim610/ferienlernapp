// Antwort-Helfer.

/** Text robust vergleichen: Gross/Klein, Umlaute, Leerzeichen egal. */
export function normalize(s: string): string {
  return s
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '')
    .replace(/ä/g, 'ae')
    .replace(/ö/g, 'oe')
    .replace(/ü/g, 'ue')
    .replace(/ß/g, 'ss')
}

export function textMatches(input: string, answer: string | string[]): boolean {
  const answers = Array.isArray(answer) ? answer : [answer]
  const n = normalize(input)
  return answers.some((a) => normalize(a) === n)
}

/** Splittet einen Text an "{}" fuer die Anzeige mit Antwortkasten. */
export function splitTemplate(text: string): string[] {
  return text.split('{}')
}

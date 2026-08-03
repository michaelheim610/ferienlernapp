// Inhalts-Pruefung: rechnet Mathe-Loesungen nach und prueft die Struktur
// jeder Aufgabe. Aufruf:  npm run check
//
// Faengt automatisch: falsche Mathe-Ergebnisse, Auswahl-Antwort nicht in den
// Optionen, ungueltige Wortart-Kategorie, doppelte IDs, Platzhalter-Fehler u.v.m.

import { matheTopics } from '../src/data/exercises/mathe.ts'
import { deutschTopics } from '../src/data/exercises/deutsch.ts'

const topics: any[] = [...matheTopics, ...deutschTopics]
const errors: string[] = []
const seenExerciseIds = new Set<string>()
let exerciseCount = 0
let problemCount = 0

function err(where: string, msg: string) {
  errors.push(`❌ ${where}: ${msg}`)
}

function uniqueIds(where: string, items: { id: string }[]) {
  const s = new Set<string>()
  for (const it of items) {
    if (!it.id) err(where, 'Eintrag ohne id')
    else if (s.has(it.id)) err(where, `doppelte id "${it.id}"`)
    else s.add(it.id)
  }
}

function countPlaceholders(text: string): number {
  return (text.match(/\{\}/g) || []).length
}

// Nachbarzahlen "x ← n → y": muessen aufeinanderfolgend sein.
function checkNeighbors(where: string, text: string, answer: number) {
  const filled = text.replace('{}', String(answer))
  const nums = (filled.match(/-?\d+/g) || []).map(Number)
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1] + 1) {
      err(where, `Nachbarzahlen nicht fortlaufend: "${filled}"`)
      return
    }
  }
}

// Zahl-Aufgabe pruefen: Gleichung nachrechnen, Nachbarzahlen checken,
// sonst nur strukturell (genau ein {}).
function checkNumberProblem(where: string, text: string, answer: number) {
  if (countPlaceholders(text) !== 1) {
    err(where, `Text braucht genau ein {} : "${text}"`)
    return
  }
  if (text.includes('←') || text.includes('→')) {
    checkNeighbors(where, text, answer)
    return
  }
  if (!text.includes('=')) return // kein pruefbares Muster
  const filled = text.replace('{}', String(answer))
  const m = filled.match(/^\s*(-?\d+)\s*([+\-·*x:])\s*(-?\d+)\s*=\s*(-?\d+)\s*$/)
  if (!m) {
    err(where, `Rechnung nicht lesbar: "${filled}"`)
    return
  }
  const a = Number(m[1])
  const op = m[2]
  const b = Number(m[3])
  const c = Number(m[4])
  let expected: number | null = null
  if (op === '+') expected = a + b
  else if (op === '-') expected = a - b
  else if (op === '·' || op === '*' || op === 'x') expected = a * b
  else if (op === ':') {
    if (b === 0 || a % b !== 0) {
      err(where, `Division geht nicht glatt auf: "${filled}"`)
      return
    }
    expected = a / b
  }
  if (expected !== c) {
    err(where, `Rechnung stimmt nicht: "${filled}" (erwartet ${expected})`)
  }
}

for (const t of topics) {
  const twhere = `Thema ${t.id}`
  if (seenExerciseIds.has(t.id)) err('Themen', `doppelte Themen-id "${t.id}"`)
  if (!t.exercises?.length) err(twhere, 'keine Aufgaben')

  for (const ex of t.exercises || []) {
    exerciseCount++
    const w = `Aufgabe ${ex.id}`
    if (seenExerciseIds.has(ex.id)) err('Aufgaben', `doppelte Aufgaben-id "${ex.id}"`)
    seenExerciseIds.add(ex.id)
    if (!ex.instruction) err(w, 'keine Anweisung')

    switch (ex.type) {
      case 'fillNumber':
        uniqueIds(w, ex.problems)
        for (const p of ex.problems) {
          problemCount++
          if (typeof p.answer !== 'number') err(w, `Antwort ist keine Zahl (${p.id})`)
          else checkNumberProblem(`${w}/${p.id}`, p.text, p.answer)
        }
        break

      case 'placeValue':
        uniqueIds(w, ex.problems)
        for (const p of ex.problems) {
          problemCount++
          if (p.z < 0 || p.z > 9 || p.e < 0 || p.e > 9) err(w, `Z/E ausserhalb 0-9 (${p.id})`)
        }
        break

      case 'fillText':
        uniqueIds(w, ex.problems)
        for (const p of ex.problems) {
          problemCount++
          if (countPlaceholders(p.text) !== 1) err(w, `Text braucht ein {} (${p.id})`)
          const ans = Array.isArray(p.answer) ? p.answer : [p.answer]
          if (!ans.length || ans.some((a: string) => !a || !a.trim())) err(w, `leere Antwort (${p.id})`)
        }
        break

      case 'choice':
        uniqueIds(w, ex.questions)
        for (const q of ex.questions) {
          problemCount++
          if (countPlaceholders(q.text) !== 1) err(w, `Text braucht ein {} (${q.id})`)
          if (!q.options?.includes(q.answer)) err(w, `Antwort "${q.answer}" nicht in Optionen (${q.id})`)
        }
        break

      case 'classify': {
        const cats = new Set(ex.categories.map((c: any) => c.id))
        uniqueIds(w, ex.words)
        for (const word of ex.words) {
          problemCount++
          if (!cats.has(word.category)) err(w, `Kategorie "${word.category}" gibt es nicht (${word.id})`)
        }
        break
      }

      case 'connect': {
        uniqueIds(w, [...ex.left, ...ex.right])
        const lg = ex.left.map((i: any) => i.group).sort()
        const rg = ex.right.map((i: any) => i.group).sort()
        problemCount += ex.left.length
        if (lg.length !== rg.length || lg.some((g: string, i: number) => g !== rg[i]))
          err(w, `Verbinden: linke und rechte Gruppen passen nicht (${lg} vs ${rg})`)
        break
      }

      case 'distribute':
        uniqueIds(w, ex.problems)
        for (const p of ex.problems) {
          problemCount++
          if (p.total % p.plates !== 0) err(w, `Division geht nicht auf: ${p.total}:${p.plates} (${p.id})`)
        }
        break

      case 'numberLine':
        uniqueIds(w, ex.marks)
        for (const mk of ex.marks) {
          problemCount++
          if (mk.value < ex.min || mk.value > ex.max) err(w, `Marke ${mk.value} ausserhalb ${ex.min}-${ex.max}`)
        }
        break

      case 'hundredChart':
        uniqueIds(w, ex.targets)
        for (const tg of ex.targets) {
          problemCount++
          if (tg.value < 1 || tg.value > 100) err(w, `Feld ${tg.value} nicht 1-100 (${tg.id})`)
        }
        break

      case 'order':
        uniqueIds(w, ex.groups)
        for (const g of ex.groups) {
          problemCount++
          if (!g.words || g.words.length < 2) err(w, `Gruppe braucht >=2 Woerter (${g.id})`)
          const lower = g.words.map((x: string) => x.toLowerCase())
          if (new Set(lower).size !== lower.length) err(w, `doppelte Woerter in Gruppe (${g.id})`)
        }
        break

      case 'syllable':
        uniqueIds(w, ex.words)
        for (const wd of ex.words) {
          problemCount++
          if (!wd.syllables?.length) err(w, `keine Silben (${wd.id})`)
          for (const k of wd.kings || []) if (k < 0 || k >= wd.word.length) err(w, `Koenig-Index ${k} ausserhalb "${wd.word}" (${wd.id})`)
        }
        break

      default:
        err(w, `unbekannter Typ "${ex.type}"`)
    }
  }
}

console.log(`\nGeprueft: ${topics.length} Themen, ${exerciseCount} Aufgaben, ${problemCount} Teilaufgaben.`)
if (errors.length) {
  console.error(`\n${errors.length} Problem(e) gefunden:\n`)
  for (const e of errors) console.error(e)
  process.exit(1)
} else {
  console.log('✅ Alles in Ordnung – keine Fehler gefunden.\n')
}

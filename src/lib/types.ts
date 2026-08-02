// Datenmodell fuer alle Aufgabentypen.
// Kern-Idee: Aufgaben sind reine Daten, generische Komponenten rendern sie.

export type Subject = 'mathe' | 'deutsch'

export interface Topic {
  id: string
  subject: Subject
  index: number
  title: string
  subtitle: string
  emoji: string
  exercises: Exercise[]
}

export type Exercise =
  | ConnectExercise
  | FillNumberExercise
  | FillTextExercise
  | ChoiceExercise
  | ClassifyExercise
  | DistributeExercise
  | NumberLineExercise
  | HundredChartExercise
  | PlaceValueExercise
  | OrderExercise
  | SyllableExercise

interface Base {
  id: string
  instruction: string
}

/* Verbinden: linke Spalte <-> rechte Spalte, Paarung ueber gemeinsame group */
export interface ConnectItem {
  id: string
  group: string
  label?: string
  z?: number // Zehner (fuer Bloecke)
  e?: number // Einer (fuer Bloecke)
}
export interface ConnectExercise extends Base {
  type: 'connect'
  leftKind?: 'text' | 'blocks'
  rightKind?: 'text'
  left: ConnectItem[]
  right: ConnectItem[]
}

/* Zahl eintragen. text enthaelt {} als Platzhalter fuer den Antwortkasten. */
export interface NumProblem { id: string; text: string; answer: number }
export interface FillNumberExercise extends Base {
  type: 'fillNumber'
  columns?: number
  problems: NumProblem[]
}

/* Wort/Woerter eintragen. answer kann mehrere gueltige Loesungen sein. */
export interface TextProblem { id: string; text: string; answer: string | string[]; width?: number }
export interface FillTextExercise extends Base {
  type: 'fillText'
  problems: TextProblem[]
}

/* Auswahl (z.B. Satzzeichen, Artikel). */
export interface ChoiceQuestion { id: string; text: string; options: string[]; answer: string }
export interface ChoiceExercise extends Base {
  type: 'choice'
  questions: ChoiceQuestion[]
}

/* Woerter einer Kategorie zuordnen (Antippen schaltet Farbe durch). */
export interface Category { id: string; label: string; color: string }
export interface ClassifyWord { id: string; text: string; category: string }
export interface ClassifyExercise extends Base {
  type: 'classify'
  categories: Category[]
  words: ClassifyWord[]
}

/* Gerecht verteilen (Division). */
export interface DistributeProblem { id: string; total: number; plates: number; emoji: string }
export interface DistributeExercise extends Base {
  type: 'distribute'
  problems: DistributeProblem[]
}

/* Zahlenstrahl ablesen. */
export interface NumberLineMark { id: string; value: number }
export interface NumberLineExercise extends Base {
  type: 'numberLine'
  min: number
  max: number
  majorStep: number
  marks: NumberLineMark[]
}

/* Hundertertafel: Tier steht auf einem Feld, Zahl eintragen. */
export interface ChartTarget { id: string; value: number; emoji: string }
export interface HundredChartExercise extends Base {
  type: 'hundredChart'
  anchors: number[]
  targets: ChartTarget[]
}

/* Stellenwert: bunte Zehner/Einer -> Zahl. */
export interface PVProblem { id: string; z: number; e: number }
export interface PlaceValueExercise extends Base {
  type: 'placeValue'
  problems: PVProblem[]
}

/* Nach Alphabet ordnen. */
export interface OrderGroup { id: string; words: string[] }
export interface OrderExercise extends Base {
  type: 'order'
  groups: OrderGroup[]
}

/* Silben klatschen + Silbenkoenige zeigen. */
export interface SyllableWord { id: string; word: string; syllables: string[]; kings: number[] }
export interface SyllableExercise extends Base {
  type: 'syllable'
  words: SyllableWord[]
}

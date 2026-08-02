import type { Topic } from '../../lib/types'

// ----------------------------------------------------------------------------
// MATHE - 7 Themen, faithful zum Heft "Startklar fuer die 3. Klasse"
// ----------------------------------------------------------------------------

export const matheTopics: Topic[] = [
  {
    id: 'mathe-1',
    subject: 'mathe',
    index: 1,
    title: 'Zahlen bis 100',
    subtitle: 'Zahldarstellung',
    emoji: '🔢',
    exercises: [
      {
        id: 'mathe-1-a',
        type: 'connect',
        instruction: 'Was passt zusammen? Verbinde!',
        leftKind: 'text',
        rightKind: 'text',
        left: [
          { id: 'l1', group: '64', label: '6 Z + 4 E' },
          { id: 'l2', group: '28', label: '2 Z + 8 E' },
          { id: 'l3', group: '43', label: '4 Z + 3 E' }
        ],
        right: [
          { id: 'r1', group: '64', label: 'vierundsechzig' },
          { id: 'r2', group: '28', label: 'achtundzwanzig' },
          { id: 'r3', group: '43', label: 'dreiundvierzig' }
        ]
      },
      {
        id: 'mathe-1-b',
        type: 'placeValue',
        instruction: 'Wie heißt die Zahl? Zähle die Zehner und Einer!',
        problems: [
          { id: 'p1', z: 3, e: 7 },
          { id: 'p2', z: 2, e: 4 },
          { id: 'p3', z: 5, e: 1 },
          { id: 'p4', z: 0, e: 9 }
        ]
      }
    ]
  },

  {
    id: 'mathe-2',
    subject: 'mathe',
    index: 2,
    title: 'Zahlen bis 100',
    subtitle: 'Hundertertafel',
    emoji: '📋',
    exercises: [
      {
        id: 'mathe-2-a',
        type: 'hundredChart',
        instruction: 'Auf welcher Zahl sitzt das Tier? Tippe die Zahl ein!',
        anchors: [1, 10, 50, 100],
        targets: [
          { id: 't1', value: 4, emoji: '🐌' },
          { id: 't2', value: 17, emoji: '🐢' },
          { id: 't3', value: 23, emoji: '🦀' },
          { id: 't4', value: 38, emoji: '🐰' },
          { id: 't5', value: 41, emoji: '🐭' },
          { id: 't6', value: 66, emoji: '🐘' },
          { id: 't7', value: 73, emoji: '🐱' },
          { id: 't8', value: 95, emoji: '🐦' }
        ]
      }
    ]
  },

  {
    id: 'mathe-3',
    subject: 'mathe',
    index: 3,
    title: 'Zahlen bis 100',
    subtitle: 'Zahlenstrahl',
    emoji: '📏',
    exercises: [
      {
        id: 'mathe-3-a',
        type: 'numberLine',
        instruction: 'Wie heißen die gesuchten Zahlen? Lies den Zahlenstrahl ab!',
        min: 0,
        max: 100,
        majorStep: 10,
        marks: [
          { id: 'm1', value: 3 },
          { id: 'm2', value: 17 },
          { id: 'm3', value: 24 },
          { id: 'm4', value: 45 },
          { id: 'm5', value: 58 },
          { id: 'm6', value: 76 },
          { id: 'm7', value: 92 }
        ]
      },
      {
        id: 'mathe-3-b',
        type: 'fillNumber',
        instruction: 'Ergänze die Nachbarzahlen richtig!',
        columns: 1,
        problems: [
          { id: 'p1', text: '{} ← 44 → 45', answer: 43 },
          { id: 'p2', text: '43 ← 44 → {}', answer: 45 },
          { id: 'p3', text: '{} ← 75 → 76', answer: 74 },
          { id: 'p4', text: '74 ← 75 → {}', answer: 76 }
        ]
      }
    ]
  },

  {
    id: 'mathe-4',
    subject: 'mathe',
    index: 4,
    title: 'Plus und Minus',
    subtitle: 'mit Zehnerübergang',
    emoji: '➕',
    exercises: [
      {
        id: 'mathe-4-a',
        type: 'fillNumber',
        instruction: 'Notiere die Ergebnisse!',
        problems: [
          { id: 'a1', text: '25 + 7 = {}', answer: 32 },
          { id: 'a2', text: '59 + 5 = {}', answer: 64 },
          { id: 'a3', text: '54 + 9 = {}', answer: 63 },
          { id: 'a4', text: '80 - 4 = {}', answer: 76 },
          { id: 'a5', text: '25 + {} = 32', answer: 7 },
          { id: 'a6', text: '36 + 6 = {}', answer: 42 },
          { id: 'a7', text: '65 - 9 = {}', answer: 56 },
          { id: 'a8', text: '11 + 9 = {}', answer: 20 },
          { id: 'a9', text: '50 - 1 = {}', answer: 49 },
          { id: 'a10', text: '62 - {} = 56', answer: 6 },
          { id: 'a11', text: '41 - 4 = {}', answer: 37 },
          { id: 'a12', text: '77 + 7 = {}', answer: 84 },
          { id: 'a13', text: '73 + 8 = {}', answer: 81 },
          { id: 'a14', text: '30 - 8 = {}', answer: 22 },
          { id: 'a15', text: '49 + {} = 58', answer: 9 }
        ]
      },
      {
        id: 'mathe-4-b',
        type: 'fillNumber',
        instruction: 'Notiere die Ergebnisse!',
        problems: [
          { id: 'b1', text: '25 + 32 = {}', answer: 57 },
          { id: 'b2', text: '64 - 41 = {}', answer: 23 },
          { id: 'b3', text: '84 - 34 = {}', answer: 50 },
          { id: 'b4', text: '45 + 37 = {}', answer: 82 },
          { id: 'b5', text: '47 + 51 = {}', answer: 98 },
          { id: 'b6', text: '55 + 33 = {}', answer: 88 },
          { id: 'b7', text: '73 + 17 = {}', answer: 90 },
          { id: 'b8', text: '72 - 54 = {}', answer: 18 }
        ]
      }
    ]
  },

  {
    id: 'mathe-5',
    subject: 'mathe',
    index: 5,
    title: 'Einmaleins',
    subtitle: 'Grundvorstellungen',
    emoji: '✖️',
    exercises: [
      {
        id: 'mathe-5-a',
        type: 'connect',
        instruction: 'Was passt zusammen? Verbinde Plus- und Malaufgabe!',
        left: [
          { id: 'l1', group: 'g8', label: '4 + 4' },
          { id: 'l2', group: 'g10', label: '2 + 2 + 2 + 2 + 2' },
          { id: 'l3', group: 'g9', label: '3 + 3 + 3' }
        ],
        right: [
          { id: 'r1', group: 'g8', label: '2 · 4' },
          { id: 'r2', group: 'g10', label: '5 · 2' },
          { id: 'r3', group: 'g9', label: '3 · 3' }
        ]
      },
      {
        id: 'mathe-5-b',
        type: 'fillNumber',
        instruction: 'Löse die Malaufgaben!',
        problems: [
          { id: 'p1', text: '2 · 7 = {}', answer: 14 },
          { id: 'p2', text: '3 · 6 = {}', answer: 18 },
          { id: 'p3', text: '5 · 9 = {}', answer: 45 }
        ]
      }
    ]
  },

  {
    id: 'mathe-6',
    subject: 'mathe',
    index: 6,
    title: 'Einmaleins',
    subtitle: 'Beherrschst du es?',
    emoji: '🌟',
    exercises: [
      {
        id: 'mathe-6-a',
        type: 'fillNumber',
        instruction: 'Notiere die Ergebnisse!',
        problems: [
          { id: 'a1', text: '2 · 4 = {}', answer: 8 },
          { id: 'a2', text: '6 · 10 = {}', answer: 60 },
          { id: 'a3', text: '3 · 3 = {}', answer: 9 },
          { id: 'a4', text: '7 · 5 = {}', answer: 35 },
          { id: 'a5', text: '0 · 9 = {}', answer: 0 },
          { id: 'a6', text: '3 · 7 = {}', answer: 21 },
          { id: 'a7', text: '4 · 4 = {}', answer: 16 },
          { id: 'a8', text: '5 · 6 = {}', answer: 30 },
          { id: 'a9', text: '10 · 2 = {}', answer: 20 },
          { id: 'a10', text: '1 · 6 = {}', answer: 6 },
          { id: 'a11', text: '9 · 6 = {}', answer: 54 },
          { id: 'a12', text: '2 · 8 = {}', answer: 16 },
          { id: 'a13', text: '7 · 7 = {}', answer: 49 },
          { id: 'a14', text: '8 · 4 = {}', answer: 32 },
          { id: 'a15', text: '5 · 8 = {}', answer: 40 }
        ]
      },
      {
        id: 'mathe-6-b',
        type: 'fillNumber',
        instruction: 'Was fehlt? Notiere!',
        problems: [
          { id: 'b1', text: '2 · {} = 16', answer: 8 },
          { id: 'b2', text: '3 · {} = 12', answer: 4 },
          { id: 'b3', text: '10 · {} = 50', answer: 5 },
          { id: 'b4', text: '6 · {} = 36', answer: 6 },
          { id: 'b5', text: '9 · {} = 45', answer: 5 },
          { id: 'b6', text: '{} · 4 = 16', answer: 4 },
          { id: 'b7', text: '{} · 8 = 48', answer: 6 },
          { id: 'b8', text: '{} · 5 = 25', answer: 5 },
          { id: 'b9', text: '{} · 10 = 10', answer: 1 },
          { id: 'b10', text: '{} · 7 = 56', answer: 8 }
        ]
      }
    ]
  },

  {
    id: 'mathe-7',
    subject: 'mathe',
    index: 7,
    title: 'Division',
    subtitle: 'Beherrschst du es?',
    emoji: '🍪',
    exercises: [
      {
        id: 'mathe-7-a',
        type: 'distribute',
        instruction: 'Verteile die Kekse gerecht auf die Teller!',
        problems: [
          { id: 'p1', total: 6, plates: 2, emoji: '🍪' },
          { id: 'p2', total: 12, plates: 3, emoji: '🍪' },
          { id: 'p3', total: 6, plates: 3, emoji: '🍪' }
        ]
      },
      {
        id: 'mathe-7-b',
        type: 'fillNumber',
        instruction: 'Notiere die Ergebnisse!',
        problems: [
          { id: 'b1', text: '8 : 2 = {}', answer: 4 },
          { id: 'b2', text: '10 : 5 = {}', answer: 2 },
          { id: 'b3', text: '15 : 3 = {}', answer: 5 },
          { id: 'b4', text: '21 : 7 = {}', answer: 3 },
          { id: 'b5', text: '12 : 4 = {}', answer: 3 },
          { id: 'b6', text: '18 : 6 = {}', answer: 3 },
          { id: 'b7', text: '25 : 5 = {}', answer: 5 },
          { id: 'b8', text: '20 : 4 = {}', answer: 5 },
          { id: 'b9', text: '64 : 8 = {}', answer: 8 },
          { id: 'b10', text: '40 : 8 = {}', answer: 5 }
        ]
      }
    ]
  }
]

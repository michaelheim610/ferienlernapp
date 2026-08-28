import type { Topic } from '../../lib/types'

// ----------------------------------------------------------------------------
// MATHE - 7 Themen, eigene Aufgaben im Stil einer Vorbereitung auf die 3. Klasse
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
          { id: 'l1', group: '71', label: '7 Z + 1 E' },
          { id: 'l2', group: '36', label: '3 Z + 6 E' },
          { id: 'l3', group: '52', label: '5 Z + 2 E' }
        ],
        right: [
          { id: 'r1', group: '71', label: 'einundsiebzig' },
          { id: 'r2', group: '36', label: 'sechsunddreißig' },
          { id: 'r3', group: '52', label: 'zweiundfünfzig' }
        ]
      },
      {
        id: 'mathe-1-b',
        type: 'placeValue',
        instruction: 'Wie heißt die Zahl? Zähle die Zehner und Einer!',
        problems: [
          { id: 'p1', z: 4, e: 2 },
          { id: 'p2', z: 6, e: 5 },
          { id: 'p3', z: 2, e: 8 },
          { id: 'p4', z: 1, e: 9 }
        ]
      },
      {
        id: 'mathe-1-c',
        type: 'connect',
        instruction: 'Welche Zahl passt zum Wort? Verbinde!',
        left: [
          { id: 'l1', group: 'g37', label: '37' },
          { id: 'l2', group: 'g24', label: '24' },
          { id: 'l3', group: 'g51', label: '51' },
          { id: 'l4', group: 'g9', label: '9' }
        ],
        right: [
          { id: 'r1', group: 'g37', label: 'siebenunddreißig' },
          { id: 'r2', group: 'g24', label: 'vierundzwanzig' },
          { id: 'r3', group: 'g51', label: 'einundfünfzig' },
          { id: 'r4', group: 'g9', label: 'neun' }
        ]
      },
      {
        id: 'mathe-1-d',
        type: 'placeValue',
        instruction: 'Level 2: Wie heißt die Zahl?',
        problems: [
          { id: 'p1', z: 7, e: 3 },
          { id: 'p2', z: 9, e: 0 },
          { id: 'p3', z: 4, e: 8 },
          { id: 'p4', z: 6, e: 6 },
          { id: 'p5', z: 8, e: 1 }
        ]
      },
      {
        id: 'mathe-1-e',
        type: 'connect',
        instruction: 'Level 3: Zehner + Einer und Zahl verbinden!',
        left: [
          { id: 'l1', group: 'g72', label: '7 Z + 2 E' },
          { id: 'l2', group: 'g39', label: '3 Z + 9 E' },
          { id: 'l3', group: 'g55', label: '5 Z + 5 E' },
          { id: 'l4', group: 'g80', label: '8 Z + 0 E' }
        ],
        right: [
          { id: 'r1', group: 'g72', label: '72' },
          { id: 'r2', group: 'g39', label: '39' },
          { id: 'r3', group: 'g55', label: '55' },
          { id: 'r4', group: 'g80', label: '80' }
        ]
      },
      {
        id: 'mathe-1-f',
        type: 'placeValue',
        instruction: 'Profi: Wie heißt die Zahl?',
        problems: [
          { id: 'p1', z: 5, e: 4 },
          { id: 'p2', z: 8, e: 7 },
          { id: 'p3', z: 3, e: 3 },
          { id: 'p4', z: 9, e: 6 },
          { id: 'p5', z: 2, e: 0 }
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
          { id: 't1', value: 5, emoji: '🐌' },
          { id: 't2', value: 16, emoji: '🐢' },
          { id: 't3', value: 28, emoji: '🦀' },
          { id: 't4', value: 33, emoji: '🐰' },
          { id: 't5', value: 47, emoji: '🐭' },
          { id: 't6', value: 61, emoji: '🐘' },
          { id: 't7', value: 72, emoji: '🐱' },
          { id: 't8', value: 88, emoji: '🐦' }
        ]
      },
      {
        id: 'mathe-2-b',
        type: 'hundredChart',
        instruction: 'Runde 2: Auf welcher Zahl sitzt das Tier?',
        anchors: [1, 10, 50, 100],
        targets: [
          { id: 't1', value: 12, emoji: '🐝' },
          { id: 't2', value: 29, emoji: '🦋' },
          { id: 't3', value: 45, emoji: '🐞' },
          { id: 't4', value: 63, emoji: '🐬' },
          { id: 't5', value: 81, emoji: '🦩' },
          { id: 't6', value: 96, emoji: '🐨' }
        ]
      },
      {
        id: 'mathe-2-c',
        type: 'hundredChart',
        instruction: 'Level 3: Auf welcher Zahl sitzt das Tier?',
        anchors: [1, 10, 50, 100],
        targets: [
          { id: 't1', value: 7, emoji: '🐙' },
          { id: 't2', value: 34, emoji: '🦈' },
          { id: 't3', value: 58, emoji: '🐳' },
          { id: 't4', value: 76, emoji: '🦭' },
          { id: 't5', value: 89, emoji: '🐠' },
          { id: 't6', value: 100, emoji: '🦀' }
        ]
      },
      {
        id: 'mathe-2-d',
        type: 'hundredChart',
        instruction: 'Profi: Auf welcher Zahl sitzt das Tier?',
        anchors: [1, 10, 50, 100],
        targets: [
          { id: 't1', value: 15, emoji: '🐡' },
          { id: 't2', value: 42, emoji: '🦑' },
          { id: 't3', value: 53, emoji: '🐟' },
          { id: 't4', value: 67, emoji: '🦐' },
          { id: 't5', value: 84, emoji: '🦞' },
          { id: 't6', value: 91, emoji: '🐚' }
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
          { id: 'p1', text: '{} ← 57 → 58', answer: 56 },
          { id: 'p2', text: '56 ← 57 → {}', answer: 58 },
          { id: 'p3', text: '{} ← 83 → 84', answer: 82 },
          { id: 'p4', text: '82 ← 83 → {}', answer: 84 }
        ]
      },
      {
        id: 'mathe-3-c',
        type: 'numberLine',
        instruction: 'Runde 2: Welche Zahl zeigt der Pfeil?',
        min: 0,
        max: 100,
        majorStep: 10,
        marks: [
          { id: 'm1', value: 8 },
          { id: 'm2', value: 26 },
          { id: 'm3', value: 33 },
          { id: 'm4', value: 52 },
          { id: 'm5', value: 69 },
          { id: 'm6', value: 87 }
        ]
      },
      {
        id: 'mathe-3-d',
        type: 'numberLine',
        instruction: 'Level 3: Welche Zahl zeigt der Pfeil?',
        min: 0,
        max: 100,
        majorStep: 10,
        marks: [
          { id: 'm1', value: 6 },
          { id: 'm2', value: 19 },
          { id: 'm3', value: 37 },
          { id: 'm4', value: 43 },
          { id: 'm5', value: 61 },
          { id: 'm6', value: 78 },
          { id: 'm7', value: 94 }
        ]
      },
      {
        id: 'mathe-3-e',
        type: 'fillNumber',
        instruction: 'Level 3: Ergänze die Nachbarzahlen!',
        columns: 1,
        problems: [
          { id: 'p1', text: '{} ← 50 → 51', answer: 49 },
          { id: 'p2', text: '69 ← 70 → {}', answer: 71 },
          { id: 'p3', text: '{} ← 90 → 91', answer: 89 },
          { id: 'p4', text: '39 ← 40 → {}', answer: 41 },
          { id: 'p5', text: '{} ← 60 → 61', answer: 59 }
        ]
      },
      {
        id: 'mathe-3-f',
        type: 'numberLine',
        instruction: 'Profi: Welche Zahl zeigt der Pfeil?',
        min: 0,
        max: 100,
        majorStep: 10,
        marks: [
          { id: 'm1', value: 11 },
          { id: 'm2', value: 27 },
          { id: 'm3', value: 49 },
          { id: 'm4', value: 58 },
          { id: 'm5', value: 73 },
          { id: 'm6', value: 96 }
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
          { id: 'a1', text: '34 + 8 = {}', answer: 42 },
          { id: 'a2', text: '47 + 6 = {}', answer: 53 },
          { id: 'a3', text: '62 + 9 = {}', answer: 71 },
          { id: 'a4', text: '90 - 3 = {}', answer: 87 },
          { id: 'a5', text: '34 + {} = 41', answer: 7 },
          { id: 'a6', text: '28 + 5 = {}', answer: 33 },
          { id: 'a7', text: '73 - 6 = {}', answer: 67 },
          { id: 'a8', text: '15 + 7 = {}', answer: 22 },
          { id: 'a9', text: '40 - 2 = {}', answer: 38 },
          { id: 'a10', text: '55 - {} = 48', answer: 7 },
          { id: 'a11', text: '52 - 6 = {}', answer: 46 },
          { id: 'a12', text: '68 + 9 = {}', answer: 77 },
          { id: 'a13', text: '47 + 8 = {}', answer: 55 },
          { id: 'a14', text: '20 - 3 = {}', answer: 17 },
          { id: 'a15', text: '39 + {} = 45', answer: 6 }
        ]
      },
      {
        id: 'mathe-4-b',
        type: 'fillNumber',
        instruction: 'Notiere die Ergebnisse!',
        problems: [
          { id: 'b1', text: '41 + 38 = {}', answer: 79 },
          { id: 'b2', text: '76 - 53 = {}', answer: 23 },
          { id: 'b3', text: '92 - 48 = {}', answer: 44 },
          { id: 'b4', text: '35 + 47 = {}', answer: 82 },
          { id: 'b5', text: '53 + 44 = {}', answer: 97 },
          { id: 'b6', text: '66 + 29 = {}', answer: 95 },
          { id: 'b7', text: '88 - 59 = {}', answer: 29 },
          { id: 'b8', text: '74 - 46 = {}', answer: 28 }
        ]
      },
      {
        id: 'mathe-4-c',
        type: 'fillNumber',
        instruction: 'Noch mehr Übung! Notiere die Ergebnisse!',
        problems: [
          { id: 'c1', text: '38 + 7 = {}', answer: 45 },
          { id: 'c2', text: '46 + 8 = {}', answer: 54 },
          { id: 'c3', text: '63 - 5 = {}', answer: 58 },
          { id: 'c4', text: '91 - 6 = {}', answer: 85 },
          { id: 'c5', text: '27 + 9 = {}', answer: 36 },
          { id: 'c6', text: '84 - 7 = {}', answer: 77 },
          { id: 'c7', text: '55 + {} = 62', answer: 7 },
          { id: 'c8', text: '70 - {} = 64', answer: 6 }
        ]
      },
      {
        id: 'mathe-4-d',
        type: 'fillNumber',
        instruction: 'Level 3: Zweistellig plus und minus!',
        problems: [
          { id: 'd1', text: '47 + 38 = {}', answer: 85 },
          { id: 'd2', text: '66 + 27 = {}', answer: 93 },
          { id: 'd3', text: '84 - 59 = {}', answer: 25 },
          { id: 'd4', text: '92 - 47 = {}', answer: 45 },
          { id: 'd5', text: '58 + 36 = {}', answer: 94 },
          { id: 'd6', text: '73 - 48 = {}', answer: 25 },
          { id: 'd7', text: '45 + 49 = {}', answer: 94 },
          { id: 'd8', text: '81 - 34 = {}', answer: 47 }
        ]
      },
      {
        id: 'mathe-4-e',
        type: 'fillNumber',
        instruction: 'Profi: Rechne geschickt!',
        problems: [
          { id: 'e1', text: '39 + 44 = {}', answer: 83 },
          { id: 'e2', text: '57 + 38 = {}', answer: 95 },
          { id: 'e3', text: '100 - 63 = {}', answer: 37 },
          { id: 'e4', text: '100 - 28 = {}', answer: 72 },
          { id: 'e5', text: '68 + 25 = {}', answer: 93 },
          { id: 'e6', text: '91 - 56 = {}', answer: 35 },
          { id: 'e7', text: '48 + {} = 90', answer: 42 },
          { id: 'e8', text: '100 - {} = 45', answer: 55 }
        ]
      },
      {
        id: 'mathe-4-f',
        type: 'fillNumber',
        instruction: 'Profi: gemischte Aufgaben!',
        problems: [
          { id: 'f1', text: '63 + 29 = {}', answer: 92 },
          { id: 'f2', text: '77 + 18 = {}', answer: 95 },
          { id: 'f3', text: '90 - 45 = {}', answer: 45 },
          { id: 'f4', text: '84 - 38 = {}', answer: 46 },
          { id: 'f5', text: '46 + 47 = {}', answer: 93 },
          { id: 'f6', text: '100 - 71 = {}', answer: 29 },
          { id: 'f7', text: '55 + {} = 100', answer: 45 },
          { id: 'f8', text: '82 - {} = 39', answer: 43 }
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
          { id: 'l1', group: 'g10', label: '5 + 5' },
          { id: 'l2', group: 'g12', label: '4 + 4 + 4' },
          { id: 'l3', group: 'g21', label: '7 + 7 + 7' }
        ],
        right: [
          { id: 'r1', group: 'g10', label: '2 · 5' },
          { id: 'r2', group: 'g12', label: '3 · 4' },
          { id: 'r3', group: 'g21', label: '3 · 7' }
        ]
      },
      {
        id: 'mathe-5-b',
        type: 'fillNumber',
        instruction: 'Löse die Malaufgaben!',
        problems: [
          { id: 'p1', text: '2 · 8 = {}', answer: 16 },
          { id: 'p2', text: '4 · 6 = {}', answer: 24 },
          { id: 'p3', text: '7 · 9 = {}', answer: 63 }
        ]
      },
      {
        id: 'mathe-5-c',
        type: 'fillNumber',
        instruction: 'Löse die Malaufgaben!',
        problems: [
          { id: 'c1', text: '4 · 5 = {}', answer: 20 },
          { id: 'c2', text: '6 · 3 = {}', answer: 18 },
          { id: 'c3', text: '2 · 9 = {}', answer: 18 },
          { id: 'c4', text: '7 · 4 = {}', answer: 28 },
          { id: 'c5', text: '8 · 2 = {}', answer: 16 },
          { id: 'c6', text: '3 · 8 = {}', answer: 24 }
        ]
      },
      {
        id: 'mathe-5-d',
        type: 'fillNumber',
        instruction: 'Level 3: Malaufgaben!',
        problems: [
          { id: 'd1', text: '6 · 4 = {}', answer: 24 },
          { id: 'd2', text: '9 · 3 = {}', answer: 27 },
          { id: 'd3', text: '7 · 6 = {}', answer: 42 },
          { id: 'd4', text: '8 · 5 = {}', answer: 40 },
          { id: 'd5', text: '4 · 8 = {}', answer: 32 },
          { id: 'd6', text: '9 · 5 = {}', answer: 45 }
        ]
      },
      {
        id: 'mathe-5-e',
        type: 'connect',
        instruction: 'Level 3: Plus- und Malaufgabe verbinden!',
        left: [
          { id: 'l1', group: 'g18', label: '6 + 6 + 6' },
          { id: 'l2', group: 'g16', label: '4 + 4 + 4 + 4' },
          { id: 'l3', group: 'g30', label: '5 + 5 + 5 + 5 + 5 + 5' },
          { id: 'l4', group: 'g14', label: '7 + 7' }
        ],
        right: [
          { id: 'r1', group: 'g18', label: '3 · 6' },
          { id: 'r2', group: 'g16', label: '4 · 4' },
          { id: 'r3', group: 'g30', label: '6 · 5' },
          { id: 'r4', group: 'g14', label: '2 · 7' }
        ]
      },
      {
        id: 'mathe-5-f',
        type: 'fillNumber',
        instruction: 'Profi: Malaufgaben!',
        problems: [
          { id: 'f1', text: '6 · 6 = {}', answer: 36 },
          { id: 'f2', text: '7 · 3 = {}', answer: 21 },
          { id: 'f3', text: '8 · 4 = {}', answer: 32 },
          { id: 'f4', text: '9 · 2 = {}', answer: 18 },
          { id: 'f5', text: '4 · 9 = {}', answer: 36 },
          { id: 'f6', text: '5 · 6 = {}', answer: 30 }
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
          { id: 'a1', text: '2 · 5 = {}', answer: 10 },
          { id: 'a2', text: '5 · 10 = {}', answer: 50 },
          { id: 'a3', text: '4 · 3 = {}', answer: 12 },
          { id: 'a4', text: '6 · 5 = {}', answer: 30 },
          { id: 'a5', text: '0 · 7 = {}', answer: 0 },
          { id: 'a6', text: '8 · 3 = {}', answer: 24 },
          { id: 'a7', text: '5 · 5 = {}', answer: 25 },
          { id: 'a8', text: '3 · 6 = {}', answer: 18 },
          { id: 'a9', text: '10 · 4 = {}', answer: 40 },
          { id: 'a10', text: '1 · 9 = {}', answer: 9 },
          { id: 'a11', text: '6 · 4 = {}', answer: 24 },
          { id: 'a12', text: '2 · 6 = {}', answer: 12 },
          { id: 'a13', text: '4 · 5 = {}', answer: 20 },
          { id: 'a14', text: '7 · 2 = {}', answer: 14 },
          { id: 'a15', text: '9 · 3 = {}', answer: 27 }
        ]
      },
      {
        id: 'mathe-6-b',
        type: 'fillNumber',
        instruction: 'Was fehlt? Notiere!',
        problems: [
          { id: 'b1', text: '2 · {} = 12', answer: 6 },
          { id: 'b2', text: '4 · {} = 20', answer: 5 },
          { id: 'b3', text: '5 · {} = 30', answer: 6 },
          { id: 'b4', text: '3 · {} = 15', answer: 5 },
          { id: 'b5', text: '7 · {} = 21', answer: 3 },
          { id: 'b6', text: '{} · 4 = 24', answer: 6 },
          { id: 'b7', text: '{} · 6 = 42', answer: 7 },
          { id: 'b8', text: '{} · 9 = 27', answer: 3 },
          { id: 'b9', text: '{} · 10 = 40', answer: 4 },
          { id: 'b10', text: '8 · {} = 48', answer: 6 }
        ]
      },
      {
        id: 'mathe-6-c',
        type: 'fillNumber',
        instruction: 'Die schweren Reihen! Notiere die Ergebnisse!',
        problems: [
          { id: 'c1', text: '8 · 6 = {}', answer: 48 },
          { id: 'c2', text: '9 · 9 = {}', answer: 81 },
          { id: 'c3', text: '7 · 8 = {}', answer: 56 },
          { id: 'c4', text: '6 · 6 = {}', answer: 36 },
          { id: 'c5', text: '4 · 7 = {}', answer: 28 },
          { id: 'c6', text: '9 · 7 = {}', answer: 63 },
          { id: 'c7', text: '8 · 8 = {}', answer: 64 },
          { id: 'c8', text: '6 · 9 = {}', answer: 54 }
        ]
      },
      {
        id: 'mathe-6-d',
        type: 'fillNumber',
        instruction: 'Level 3: Was fehlt?',
        problems: [
          { id: 'd1', text: '7 · {} = 63', answer: 9 },
          { id: 'd2', text: '8 · {} = 72', answer: 9 },
          { id: 'd3', text: '6 · {} = 54', answer: 9 },
          { id: 'd4', text: '{} · 8 = 72', answer: 9 },
          { id: 'd5', text: '{} · 6 = 48', answer: 8 },
          { id: 'd6', text: '9 · {} = 81', answer: 9 },
          { id: 'd7', text: '{} · 7 = 49', answer: 7 },
          { id: 'd8', text: '8 · {} = 64', answer: 8 }
        ]
      },
      {
        id: 'mathe-6-e',
        type: 'fillNumber',
        instruction: 'Profi: die ganz großen Reihen!',
        problems: [
          { id: 'e1', text: '8 · 7 = {}', answer: 56 },
          { id: 'e2', text: '9 · 8 = {}', answer: 72 },
          { id: 'e3', text: '7 · 9 = {}', answer: 63 },
          { id: 'e4', text: '6 · 8 = {}', answer: 48 },
          { id: 'e5', text: '9 · 6 = {}', answer: 54 },
          { id: 'e6', text: '8 · 9 = {}', answer: 72 },
          { id: 'e7', text: '7 · 7 = {}', answer: 49 },
          { id: 'e8', text: '9 · 9 = {}', answer: 81 }
        ]
      },
      {
        id: 'mathe-6-f',
        type: 'fillNumber',
        instruction: 'Profi: alles gemischt!',
        problems: [
          { id: 'f1', text: '3 · 9 = {}', answer: 27 },
          { id: 'f2', text: '4 · 6 = {}', answer: 24 },
          { id: 'f3', text: '7 · 5 = {}', answer: 35 },
          { id: 'f4', text: '8 · 3 = {}', answer: 24 },
          { id: 'f5', text: '6 · 7 = {}', answer: 42 },
          { id: 'f6', text: '9 · 4 = {}', answer: 36 },
          { id: 'f7', text: '5 · 8 = {}', answer: 40 },
          { id: 'f8', text: '2 · 9 = {}', answer: 18 }
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
          { id: 'p1', total: 8, plates: 2, emoji: '🍪' },
          { id: 'p2', total: 9, plates: 3, emoji: '🍪' },
          { id: 'p3', total: 10, plates: 5, emoji: '🍪' }
        ]
      },
      {
        id: 'mathe-7-b',
        type: 'fillNumber',
        instruction: 'Notiere die Ergebnisse!',
        problems: [
          { id: 'b1', text: '6 : 3 = {}', answer: 2 },
          { id: 'b2', text: '12 : 2 = {}', answer: 6 },
          { id: 'b3', text: '14 : 7 = {}', answer: 2 },
          { id: 'b4', text: '20 : 5 = {}', answer: 4 },
          { id: 'b5', text: '9 : 3 = {}', answer: 3 },
          { id: 'b6', text: '16 : 8 = {}', answer: 2 },
          { id: 'b7', text: '21 : 3 = {}', answer: 7 },
          { id: 'b8', text: '24 : 4 = {}', answer: 6 },
          { id: 'b9', text: '15 : 5 = {}', answer: 3 },
          { id: 'b10', text: '18 : 2 = {}', answer: 9 }
        ]
      },
      {
        id: 'mathe-7-c',
        type: 'fillNumber',
        instruction: 'Noch mehr Teilen! Notiere die Ergebnisse!',
        problems: [
          { id: 'c1', text: '16 : 4 = {}', answer: 4 },
          { id: 'c2', text: '24 : 6 = {}', answer: 4 },
          { id: 'c3', text: '27 : 9 = {}', answer: 3 },
          { id: 'c4', text: '30 : 5 = {}', answer: 6 },
          { id: 'c5', text: '36 : 6 = {}', answer: 6 },
          { id: 'c6', text: '45 : 9 = {}', answer: 5 },
          { id: 'c7', text: '28 : 7 = {}', answer: 4 },
          { id: 'c8', text: '54 : 6 = {}', answer: 9 }
        ]
      },
      {
        id: 'mathe-7-d',
        type: 'fillNumber',
        instruction: 'Level 3: Teilen mit den großen Reihen!',
        problems: [
          { id: 'd1', text: '48 : 6 = {}', answer: 8 },
          { id: 'd2', text: '56 : 8 = {}', answer: 7 },
          { id: 'd3', text: '63 : 9 = {}', answer: 7 },
          { id: 'd4', text: '42 : 7 = {}', answer: 6 },
          { id: 'd5', text: '72 : 8 = {}', answer: 9 },
          { id: 'd6', text: '81 : 9 = {}', answer: 9 },
          { id: 'd7', text: '49 : 7 = {}', answer: 7 },
          { id: 'd8', text: '36 : 9 = {}', answer: 4 }
        ]
      },
      {
        id: 'mathe-7-e',
        type: 'distribute',
        instruction: 'Level 3: Verteile gerecht auf die Teller!',
        problems: [
          { id: 'p1', total: 20, plates: 4, emoji: '🍬' },
          { id: 'p2', total: 24, plates: 3, emoji: '🍬' },
          { id: 'p3', total: 15, plates: 5, emoji: '🍬' }
        ]
      },
      {
        id: 'mathe-7-f',
        type: 'fillNumber',
        instruction: 'Profi: gemischtes Teilen!',
        problems: [
          { id: 'f1', text: '32 : 4 = {}', answer: 8 },
          { id: 'f2', text: '54 : 9 = {}', answer: 6 },
          { id: 'f3', text: '48 : 8 = {}', answer: 6 },
          { id: 'f4', text: '35 : 5 = {}', answer: 7 },
          { id: 'f5', text: '72 : 9 = {}', answer: 8 },
          { id: 'f6', text: '40 : 5 = {}', answer: 8 },
          { id: 'f7', text: '63 : 7 = {}', answer: 9 },
          { id: 'f8', text: '56 : 7 = {}', answer: 8 }
        ]
      }
    ]
  }
]

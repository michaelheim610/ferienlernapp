import type { Topic } from '../../lib/types'

// ----------------------------------------------------------------------------
// ENGLISH - erste Basics: Farben (Colours) und Zahlen (Numbers 1-10)
// Je Thema: Zuordnen (connect), Lesen (choice), Schreiben (fillText).
// ----------------------------------------------------------------------------

// Farbwerte fuer die bunten Farbkreise
const C = {
  red: '#e53935',
  blue: '#4a90e2',
  green: '#43a047',
  yellow: '#fdd835',
  orange: '#fb8c00',
  pink: '#ec407a',
  white: '#ffffff',
  black: '#222222',
  grey: '#9e9e9e',
  brown: '#8d6e63'
}

export const englishTopics: Topic[] = [
  {
    id: 'english-1',
    subject: 'english',
    index: 1,
    title: 'Colours',
    subtitle: 'Farben auf Englisch',
    emoji: '🎨',
    exercises: [
      {
        id: 'english-1-a',
        type: 'connect',
        instruction: 'Ordne zu: Welche Farbe heißt wie? Verbinde!',
        left: [
          { id: 'l1', group: 'red', color: C.red },
          { id: 'l2', group: 'blue', color: C.blue },
          { id: 'l3', group: 'green', color: C.green },
          { id: 'l4', group: 'yellow', color: C.yellow },
          { id: 'l5', group: 'orange', color: C.orange }
        ],
        right: [
          { id: 'r1', group: 'red', label: 'red' },
          { id: 'r2', group: 'blue', label: 'blue' },
          { id: 'r3', group: 'green', label: 'green' },
          { id: 'r4', group: 'yellow', label: 'yellow' },
          { id: 'r5', group: 'orange', label: 'orange' }
        ]
      },
      {
        id: 'english-1-b',
        type: 'connect',
        instruction: 'Runde 2: Verbinde die Farben mit dem Wort!',
        left: [
          { id: 'l1', group: 'pink', color: C.pink },
          { id: 'l2', group: 'white', color: C.white },
          { id: 'l3', group: 'black', color: C.black },
          { id: 'l4', group: 'grey', color: C.grey },
          { id: 'l5', group: 'brown', color: C.brown }
        ],
        right: [
          { id: 'r1', group: 'pink', label: 'pink' },
          { id: 'r2', group: 'white', label: 'white' },
          { id: 'r3', group: 'black', label: 'black' },
          { id: 'r4', group: 'grey', label: 'grey' },
          { id: 'r5', group: 'brown', label: 'brown' }
        ]
      },
      {
        id: 'english-1-c',
        type: 'choice',
        instruction: 'Lesen: Welche Farbe ist das? Tippe das englische Wort!',
        questions: [
          { id: 'q1', text: '{}', swatch: C.green, options: ['green', 'blue', 'red'], answer: 'green' },
          { id: 'q2', text: '{}', swatch: C.yellow, options: ['yellow', 'orange', 'white'], answer: 'yellow' },
          { id: 'q3', text: '{}', swatch: C.pink, options: ['brown', 'pink', 'red'], answer: 'pink' },
          { id: 'q4', text: '{}', swatch: C.blue, options: ['black', 'green', 'blue'], answer: 'blue' },
          { id: 'q5', text: '{}', swatch: C.brown, options: ['brown', 'grey', 'orange'], answer: 'brown' },
          { id: 'q6', text: '{}', swatch: C.black, options: ['blue', 'black', 'grey'], answer: 'black' }
        ]
      },
      {
        id: 'english-1-d',
        type: 'fillText',
        instruction: 'Schreiben: Wie heißt die Farbe auf Englisch?',
        problems: [
          { id: 'p1', text: '{}', swatch: C.red, answer: 'red' },
          { id: 'p2', text: '{}', swatch: C.blue, answer: 'blue' },
          { id: 'p3', text: '{}', swatch: C.green, answer: 'green' },
          { id: 'p4', text: '{}', swatch: C.yellow, answer: 'yellow' },
          { id: 'p5', text: '{}', swatch: C.black, answer: 'black' },
          { id: 'p6', text: '{}', swatch: C.pink, answer: 'pink' }
        ]
      }
    ]
  },

  {
    id: 'english-2',
    subject: 'english',
    index: 2,
    title: 'Numbers',
    subtitle: 'Zahlen 1–10',
    emoji: '🔢',
    exercises: [
      {
        id: 'english-2-a',
        type: 'connect',
        instruction: 'Ordne zu: Zahl und englisches Wort verbinden!',
        left: [
          { id: 'l1', group: '1', label: '1' },
          { id: 'l2', group: '2', label: '2' },
          { id: 'l3', group: '3', label: '3' },
          { id: 'l4', group: '4', label: '4' },
          { id: 'l5', group: '5', label: '5' }
        ],
        right: [
          { id: 'r1', group: '1', label: 'one' },
          { id: 'r2', group: '2', label: 'two' },
          { id: 'r3', group: '3', label: 'three' },
          { id: 'r4', group: '4', label: 'four' },
          { id: 'r5', group: '5', label: 'five' }
        ]
      },
      {
        id: 'english-2-b',
        type: 'connect',
        instruction: 'Runde 2: Zahl und Wort verbinden!',
        left: [
          { id: 'l1', group: '6', label: '6' },
          { id: 'l2', group: '7', label: '7' },
          { id: 'l3', group: '8', label: '8' },
          { id: 'l4', group: '9', label: '9' },
          { id: 'l5', group: '10', label: '10' }
        ],
        right: [
          { id: 'r1', group: '6', label: 'six' },
          { id: 'r2', group: '7', label: 'seven' },
          { id: 'r3', group: '8', label: 'eight' },
          { id: 'r4', group: '9', label: 'nine' },
          { id: 'r5', group: '10', label: 'ten' }
        ]
      },
      {
        id: 'english-2-c',
        type: 'choice',
        instruction: 'Lesen: Welche Zahl ist das englische Wort?',
        questions: [
          { id: 'q1', text: 'seven → {}', options: ['6', '7', '8'], answer: '7' },
          { id: 'q2', text: 'three → {}', options: ['2', '3', '4'], answer: '3' },
          { id: 'q3', text: 'ten → {}', options: ['9', '10', '1'], answer: '10' },
          { id: 'q4', text: 'five → {}', options: ['5', '9', '4'], answer: '5' },
          { id: 'q5', text: 'eight → {}', options: ['6', '3', '8'], answer: '8' },
          { id: 'q6', text: 'two → {}', options: ['2', '10', '4'], answer: '2' }
        ]
      },
      {
        id: 'english-2-d',
        type: 'fillText',
        instruction: 'Schreiben: Wie heißt die Zahl auf Englisch?',
        problems: [
          { id: 'p1', text: '2 → {}', answer: 'two' },
          { id: 'p2', text: '4 → {}', answer: 'four' },
          { id: 'p3', text: '6 → {}', answer: 'six' },
          { id: 'p4', text: '7 → {}', answer: 'seven' },
          { id: 'p5', text: '9 → {}', answer: 'nine' },
          { id: 'p6', text: '10 → {}', answer: 'ten' }
        ]
      }
    ]
  }
]

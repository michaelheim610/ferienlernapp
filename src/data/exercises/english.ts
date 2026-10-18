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
      },
      {
        id: 'english-1-e',
        type: 'choice',
        instruction: 'Runde 2 – Lesen: Welche Farbe ist das?',
        questions: [
          { id: 'q1', text: '{}', swatch: C.orange, options: ['orange', 'yellow', 'red'], answer: 'orange' },
          { id: 'q2', text: '{}', swatch: C.white, options: ['white', 'grey', 'black'], answer: 'white' },
          { id: 'q3', text: '{}', swatch: C.grey, options: ['grey', 'brown', 'blue'], answer: 'grey' },
          { id: 'q4', text: '{}', swatch: C.red, options: ['red', 'pink', 'orange'], answer: 'red' },
          { id: 'q5', text: '{}', swatch: C.green, options: ['green', 'blue', 'grey'], answer: 'green' },
          { id: 'q6', text: '{}', swatch: C.yellow, options: ['yellow', 'white', 'orange'], answer: 'yellow' }
        ]
      },
      {
        id: 'english-1-f',
        type: 'fillText',
        instruction: 'Profi – Schreiben: Wie heißt die Farbe auf Englisch?',
        problems: [
          { id: 'p1', text: '{}', swatch: C.orange, answer: 'orange' },
          { id: 'p2', text: '{}', swatch: C.yellow, answer: 'yellow' },
          { id: 'p3', text: '{}', swatch: C.green, answer: 'green' },
          { id: 'p4', text: '{}', swatch: C.grey, answer: 'grey' },
          { id: 'p5', text: '{}', swatch: C.white, answer: 'white' },
          { id: 'p6', text: '{}', swatch: C.brown, answer: 'brown' }
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
      },
      {
        id: 'english-2-e',
        type: 'choice',
        instruction: 'Runde 2 – Lesen: Welche Zahl ist das englische Wort?',
        questions: [
          { id: 'q1', text: 'one → {}', options: ['1', '2', '3'], answer: '1' },
          { id: 'q2', text: 'six → {}', options: ['5', '6', '7'], answer: '6' },
          { id: 'q3', text: 'nine → {}', options: ['8', '9', '10'], answer: '9' },
          { id: 'q4', text: 'four → {}', options: ['3', '4', '5'], answer: '4' },
          { id: 'q5', text: 'ten → {}', options: ['1', '10', '9'], answer: '10' },
          { id: 'q6', text: 'three → {}', options: ['2', '3', '8'], answer: '3' }
        ]
      },
      {
        id: 'english-2-f',
        type: 'fillText',
        instruction: 'Profi – Schreiben: Wie heißt die Zahl auf Englisch?',
        problems: [
          { id: 'p1', text: '1 → {}', answer: 'one' },
          { id: 'p2', text: '3 → {}', answer: 'three' },
          { id: 'p3', text: '5 → {}', answer: 'five' },
          { id: 'p4', text: '8 → {}', answer: 'eight' },
          { id: 'p5', text: '6 → {}', answer: 'six' },
          { id: 'p6', text: '10 → {}', answer: 'ten' }
        ]
      }
    ]
  },

  {
    id: 'english-3',
    subject: 'english',
    index: 3,
    title: 'Colours & Numbers',
    subtitle: 'Alles gemischt',
    emoji: '🌈',
    exercises: [
      {
        id: 'english-3-a',
        type: 'connect',
        instruction: 'Verbinde die Farben mit dem englischen Wort!',
        left: [
          { id: 'l1', group: 'red', color: C.red },
          { id: 'l2', group: 'blue', color: C.blue },
          { id: 'l3', group: 'yellow', color: C.yellow },
          { id: 'l4', group: 'green', color: C.green },
          { id: 'l5', group: 'pink', color: C.pink }
        ],
        right: [
          { id: 'r1', group: 'red', label: 'red' },
          { id: 'r2', group: 'blue', label: 'blue' },
          { id: 'r3', group: 'yellow', label: 'yellow' },
          { id: 'r4', group: 'green', label: 'green' },
          { id: 'r5', group: 'pink', label: 'pink' }
        ]
      },
      {
        id: 'english-3-b',
        type: 'connect',
        instruction: 'Verbinde die Zahl mit dem englischen Wort!',
        left: [
          { id: 'l1', group: '2', label: '2' },
          { id: 'l2', group: '4', label: '4' },
          { id: 'l3', group: '6', label: '6' },
          { id: 'l4', group: '8', label: '8' },
          { id: 'l5', group: '10', label: '10' }
        ],
        right: [
          { id: 'r1', group: '2', label: 'two' },
          { id: 'r2', group: '4', label: 'four' },
          { id: 'r3', group: '6', label: 'six' },
          { id: 'r4', group: '8', label: 'eight' },
          { id: 'r5', group: '10', label: 'ten' }
        ]
      },
      {
        id: 'english-3-c',
        type: 'choice',
        instruction: 'Gemischt: Farbe oder Zahl? Tippe richtig an!',
        questions: [
          { id: 'q1', text: '{}', swatch: C.red, options: ['red', 'blue', 'green'], answer: 'red' },
          { id: 'q2', text: 'five → {}', options: ['4', '5', '6'], answer: '5' },
          { id: 'q3', text: '{}', swatch: C.yellow, options: ['yellow', 'orange', 'white'], answer: 'yellow' },
          { id: 'q4', text: 'eight → {}', options: ['7', '8', '9'], answer: '8' },
          { id: 'q5', text: '{}', swatch: C.blue, options: ['blue', 'black', 'grey'], answer: 'blue' },
          { id: 'q6', text: 'two → {}', options: ['1', '2', '3'], answer: '2' }
        ]
      },
      {
        id: 'english-3-d',
        type: 'fillText',
        instruction: 'Profi – gemischt: Schreibe das englische Wort!',
        problems: [
          { id: 'p1', text: '{}', swatch: C.green, answer: 'green' },
          { id: 'p2', text: '3 → {}', answer: 'three' },
          { id: 'p3', text: '{}', swatch: C.pink, answer: 'pink' },
          { id: 'p4', text: '7 → {}', answer: 'seven' },
          { id: 'p5', text: '{}', swatch: C.orange, answer: 'orange' },
          { id: 'p6', text: '10 → {}', answer: 'ten' }
        ]
      }
    ]
  },

  {
    id: 'english-4',
    subject: 'english',
    index: 4,
    title: 'School things',
    subtitle: 'Sachen in der Schule',
    emoji: '✏️',
    exercises: [
      {
        id: 'english-4-a',
        type: 'connect',
        instruction: 'Entdecke die Wörter: Verbinde Bild und englisches Wort!',
        left: [
          { id: 'l1', group: 'pencil', label: '✏️' },
          { id: 'l2', group: 'book', label: '📖' },
          { id: 'l3', group: 'ruler', label: '📏' },
          { id: 'l4', group: 'scissors', label: '✂️' },
          { id: 'l5', group: 'bag', label: '🎒' },
          { id: 'l6', group: 'pen', label: '🖊️' }
        ],
        right: [
          { id: 'r1', group: 'pencil', label: 'pencil' },
          { id: 'r2', group: 'book', label: 'book' },
          { id: 'r3', group: 'ruler', label: 'ruler' },
          { id: 'r4', group: 'scissors', label: 'scissors' },
          { id: 'r5', group: 'bag', label: 'bag' },
          { id: 'r6', group: 'pen', label: 'pen' }
        ]
      },
      {
        id: 'english-4-b',
        type: 'choice',
        instruction: 'Lesen: Wie heißt das auf Englisch?',
        questions: [
          { id: 'q1', text: '✏️ → {}', options: ['pencil', 'book', 'pen'], answer: 'pencil' },
          { id: 'q2', text: '📖 → {}', options: ['ruler', 'book', 'bag'], answer: 'book' },
          { id: 'q3', text: '📏 → {}', options: ['ruler', 'scissors', 'pen'], answer: 'ruler' },
          { id: 'q4', text: '✂️ → {}', options: ['bag', 'scissors', 'book'], answer: 'scissors' },
          { id: 'q5', text: '🎒 → {}', options: ['bag', 'pencil', 'ruler'], answer: 'bag' },
          { id: 'q6', text: '🖊️ → {}', options: ['pen', 'pencil', 'book'], answer: 'pen' }
        ]
      },
      {
        id: 'english-4-c',
        type: 'fillText',
        instruction: 'Schreiben: Wie heißt das auf Englisch?',
        problems: [
          { id: 'p1', text: '✏️ → {}', answer: 'pencil' },
          { id: 'p2', text: '📖 → {}', answer: 'book' },
          { id: 'p3', text: '📏 → {}', answer: 'ruler' },
          { id: 'p4', text: '✂️ → {}', answer: 'scissors' },
          { id: 'p5', text: '🎒 → {}', answer: 'bag' },
          { id: 'p6', text: '🖊️ → {}', answer: 'pen' }
        ]
      }
    ]
  },

  {
    id: 'english-5',
    subject: 'english',
    index: 5,
    title: 'Family & Pets',
    subtitle: 'Familie und Haustiere',
    emoji: '👨‍👩‍👧',
    exercises: [
      {
        id: 'english-5-a',
        type: 'connect',
        instruction: 'Entdecke die Wörter: Verbinde Bild und englisches Wort!',
        left: [
          { id: 'l1', group: 'mother', label: '👩' },
          { id: 'l2', group: 'father', label: '👨' },
          { id: 'l3', group: 'sister', label: '👧' },
          { id: 'l4', group: 'brother', label: '👦' },
          { id: 'l5', group: 'dog', label: '🐶' },
          { id: 'l6', group: 'cat', label: '🐱' }
        ],
        right: [
          { id: 'r1', group: 'mother', label: 'mother' },
          { id: 'r2', group: 'father', label: 'father' },
          { id: 'r3', group: 'sister', label: 'sister' },
          { id: 'r4', group: 'brother', label: 'brother' },
          { id: 'r5', group: 'dog', label: 'dog' },
          { id: 'r6', group: 'cat', label: 'cat' }
        ]
      },
      {
        id: 'english-5-b',
        type: 'choice',
        instruction: 'Lesen: Wie heißt das auf Englisch?',
        questions: [
          { id: 'q1', text: '🐶 → {}', options: ['dog', 'cat', 'father'], answer: 'dog' },
          { id: 'q2', text: '👩 → {}', options: ['mother', 'sister', 'cat'], answer: 'mother' },
          { id: 'q3', text: '👦 → {}', options: ['brother', 'father', 'dog'], answer: 'brother' },
          { id: 'q4', text: '🐱 → {}', options: ['cat', 'dog', 'sister'], answer: 'cat' },
          { id: 'q5', text: '👨 → {}', options: ['father', 'brother', 'mother'], answer: 'father' },
          { id: 'q6', text: '👧 → {}', options: ['sister', 'mother', 'brother'], answer: 'sister' }
        ]
      },
      {
        id: 'english-5-c',
        type: 'fillText',
        instruction: 'Schreiben: Wie heißt das auf Englisch?',
        problems: [
          { id: 'p1', text: '🐶 → {}', answer: 'dog' },
          { id: 'p2', text: '🐱 → {}', answer: 'cat' },
          { id: 'p3', text: '👩 → {}', answer: 'mother' },
          { id: 'p4', text: '👨 → {}', answer: 'father' },
          { id: 'p5', text: '👧 → {}', answer: 'sister' },
          { id: 'p6', text: '👦 → {}', answer: 'brother' }
        ]
      }
    ]
  },

  {
    id: 'english-6',
    subject: 'english',
    index: 6,
    title: 'Weather',
    subtitle: 'Wie ist das Wetter?',
    emoji: '🌦️',
    exercises: [
      {
        id: 'english-6-a',
        type: 'connect',
        instruction: 'Entdecke die Wörter: Verbinde Bild und englisches Wort!',
        left: [
          { id: 'l1', group: 'sunny', label: '☀️' },
          { id: 'l2', group: 'rainy', label: '🌧️' },
          { id: 'l3', group: 'cloudy', label: '☁️' },
          { id: 'l4', group: 'snowy', label: '❄️' },
          { id: 'l5', group: 'windy', label: '💨' },
          { id: 'l6', group: 'rainbow', label: '🌈' }
        ],
        right: [
          { id: 'r1', group: 'sunny', label: 'sunny' },
          { id: 'r2', group: 'rainy', label: 'rainy' },
          { id: 'r3', group: 'cloudy', label: 'cloudy' },
          { id: 'r4', group: 'snowy', label: 'snowy' },
          { id: 'r5', group: 'windy', label: 'windy' },
          { id: 'r6', group: 'rainbow', label: 'rainbow' }
        ]
      },
      {
        id: 'english-6-b',
        type: 'choice',
        instruction: 'Lesen: Wie ist das Wetter auf Englisch?',
        questions: [
          { id: 'q1', text: '☀️ → {}', options: ['sunny', 'rainy', 'windy'], answer: 'sunny' },
          { id: 'q2', text: '🌧️ → {}', options: ['cloudy', 'rainy', 'sunny'], answer: 'rainy' },
          { id: 'q3', text: '☁️ → {}', options: ['cloudy', 'snowy', 'windy'], answer: 'cloudy' },
          { id: 'q4', text: '❄️ → {}', options: ['snowy', 'rainy', 'sunny'], answer: 'snowy' },
          { id: 'q5', text: '💨 → {}', options: ['windy', 'cloudy', 'rainy'], answer: 'windy' },
          { id: 'q6', text: '🌈 → {}', options: ['rainbow', 'sunny', 'snowy'], answer: 'rainbow' }
        ]
      },
      {
        id: 'english-6-c',
        type: 'fillText',
        instruction: 'Schreiben: Wie ist das Wetter auf Englisch?',
        problems: [
          { id: 'p1', text: '☀️ → {}', answer: 'sunny' },
          { id: 'p2', text: '🌧️ → {}', answer: 'rainy' },
          { id: 'p3', text: '☁️ → {}', answer: 'cloudy' },
          { id: 'p4', text: '❄️ → {}', answer: 'snowy' },
          { id: 'p5', text: '💨 → {}', answer: 'windy' },
          { id: 'p6', text: '🌈 → {}', answer: 'rainbow' }
        ]
      }
    ]
  },

  {
    id: 'english-7',
    subject: 'english',
    index: 7,
    title: 'My Body',
    subtitle: 'Körperteile',
    emoji: '🧍',
    exercises: [
      {
        id: 'english-7-a',
        type: 'connect',
        instruction: 'Entdecke die Wörter: Verbinde Bild und englisches Wort!',
        left: [
          { id: 'l1', group: 'hand', label: '✋' },
          { id: 'l2', group: 'foot', label: '🦶' },
          { id: 'l3', group: 'eye', label: '👁️' },
          { id: 'l4', group: 'ear', label: '👂' },
          { id: 'l5', group: 'nose', label: '👃' },
          { id: 'l6', group: 'mouth', label: '👄' }
        ],
        right: [
          { id: 'r1', group: 'hand', label: 'hand' },
          { id: 'r2', group: 'foot', label: 'foot' },
          { id: 'r3', group: 'eye', label: 'eye' },
          { id: 'r4', group: 'ear', label: 'ear' },
          { id: 'r5', group: 'nose', label: 'nose' },
          { id: 'r6', group: 'mouth', label: 'mouth' }
        ]
      },
      {
        id: 'english-7-b',
        type: 'choice',
        instruction: 'Lesen: Wie heißt das auf Englisch?',
        questions: [
          { id: 'q1', text: '✋ → {}', options: ['hand', 'foot', 'ear'], answer: 'hand' },
          { id: 'q2', text: '🦶 → {}', options: ['eye', 'foot', 'hand'], answer: 'foot' },
          { id: 'q3', text: '👁️ → {}', options: ['eye', 'ear', 'nose'], answer: 'eye' },
          { id: 'q4', text: '👂 → {}', options: ['ear', 'eye', 'mouth'], answer: 'ear' },
          { id: 'q5', text: '👃 → {}', options: ['nose', 'mouth', 'eye'], answer: 'nose' },
          { id: 'q6', text: '👄 → {}', options: ['mouth', 'nose', 'ear'], answer: 'mouth' }
        ]
      },
      {
        id: 'english-7-c',
        type: 'fillText',
        instruction: 'Schreiben: Wie heißt das auf Englisch?',
        problems: [
          { id: 'p1', text: '✋ → {}', answer: 'hand' },
          { id: 'p2', text: '🦶 → {}', answer: 'foot' },
          { id: 'p3', text: '👁️ → {}', answer: 'eye' },
          { id: 'p4', text: '👂 → {}', answer: 'ear' },
          { id: 'p5', text: '👃 → {}', answer: 'nose' },
          { id: 'p6', text: '👄 → {}', answer: 'mouth' }
        ]
      }
    ]
  },

  {
    id: 'english-8',
    subject: 'english',
    index: 8,
    title: 'Clothes',
    subtitle: 'Kleidung',
    emoji: '👕',
    exercises: [
      {
        id: 'english-8-a',
        type: 'connect',
        instruction: 'Entdecke die Wörter: Verbinde Bild und englisches Wort!',
        left: [
          { id: 'l1', group: 'tshirt', label: '👕' },
          { id: 'l2', group: 'trousers', label: '👖' },
          { id: 'l3', group: 'shoes', label: '👟' },
          { id: 'l4', group: 'dress', label: '👗' },
          { id: 'l5', group: 'hat', label: '🎩' },
          { id: 'l6', group: 'socks', label: '🧦' }
        ],
        right: [
          { id: 'r1', group: 'tshirt', label: 't-shirt' },
          { id: 'r2', group: 'trousers', label: 'trousers' },
          { id: 'r3', group: 'shoes', label: 'shoes' },
          { id: 'r4', group: 'dress', label: 'dress' },
          { id: 'r5', group: 'hat', label: 'hat' },
          { id: 'r6', group: 'socks', label: 'socks' }
        ]
      },
      {
        id: 'english-8-b',
        type: 'choice',
        instruction: 'Lesen: Wie heißt das auf Englisch?',
        questions: [
          { id: 'q1', text: '👕 → {}', options: ['t-shirt', 'dress', 'socks'], answer: 't-shirt' },
          { id: 'q2', text: '👖 → {}', options: ['shoes', 'trousers', 'hat'], answer: 'trousers' },
          { id: 'q3', text: '👟 → {}', options: ['shoes', 'socks', 'trousers'], answer: 'shoes' },
          { id: 'q4', text: '👗 → {}', options: ['dress', 't-shirt', 'hat'], answer: 'dress' },
          { id: 'q5', text: '🎩 → {}', options: ['hat', 'dress', 'shoes'], answer: 'hat' },
          { id: 'q6', text: '🧦 → {}', options: ['socks', 'shoes', 't-shirt'], answer: 'socks' }
        ]
      },
      {
        id: 'english-8-c',
        type: 'fillText',
        instruction: 'Schreiben: Wie heißt das auf Englisch?',
        problems: [
          { id: 'p1', text: '👕 → {}', answer: ['t-shirt', 'tshirt'] },
          { id: 'p2', text: '👖 → {}', answer: 'trousers' },
          { id: 'p3', text: '👟 → {}', answer: 'shoes' },
          { id: 'p4', text: '👗 → {}', answer: 'dress' },
          { id: 'p5', text: '🎩 → {}', answer: 'hat' },
          { id: 'p6', text: '🧦 → {}', answer: 'socks' }
        ]
      }
    ]
  },

  {
    id: 'english-9',
    subject: 'english',
    index: 9,
    title: 'Festivals',
    subtitle: 'Feste feiern',
    emoji: '🎉',
    exercises: [
      {
        id: 'english-9-a',
        type: 'connect',
        instruction: 'Entdecke die Wörter: Verbinde Bild und englisches Wort!',
        left: [
          { id: 'l1', group: 'christmas', label: '🎄' },
          { id: 'l2', group: 'halloween', label: '🎃' },
          { id: 'l3', group: 'easter', label: '🐰' },
          { id: 'l4', group: 'birthday', label: '🎂' },
          { id: 'l5', group: 'present', label: '🎁' },
          { id: 'l6', group: 'santa', label: '🎅' }
        ],
        right: [
          { id: 'r1', group: 'christmas', label: 'Christmas' },
          { id: 'r2', group: 'halloween', label: 'Halloween' },
          { id: 'r3', group: 'easter', label: 'Easter' },
          { id: 'r4', group: 'birthday', label: 'birthday' },
          { id: 'r5', group: 'present', label: 'present' },
          { id: 'r6', group: 'santa', label: 'Santa' }
        ]
      },
      {
        id: 'english-9-b',
        type: 'choice',
        instruction: 'Lesen: Wie heißt das auf Englisch?',
        questions: [
          { id: 'q1', text: '🎄 → {}', options: ['Christmas', 'Easter', 'Santa'], answer: 'Christmas' },
          { id: 'q2', text: '🎃 → {}', options: ['Halloween', 'birthday', 'present'], answer: 'Halloween' },
          { id: 'q3', text: '🐰 → {}', options: ['Easter', 'Christmas', 'present'], answer: 'Easter' },
          { id: 'q4', text: '🎂 → {}', options: ['birthday', 'present', 'Halloween'], answer: 'birthday' },
          { id: 'q5', text: '🎁 → {}', options: ['present', 'birthday', 'Santa'], answer: 'present' },
          { id: 'q6', text: '🎅 → {}', options: ['Santa', 'Christmas', 'Easter'], answer: 'Santa' }
        ]
      },
      {
        id: 'english-9-c',
        type: 'fillText',
        instruction: 'Schreiben: Wie heißt das auf Englisch?',
        problems: [
          { id: 'p1', text: '🎄 → {}', answer: 'Christmas' },
          { id: 'p2', text: '🎃 → {}', answer: 'Halloween' },
          { id: 'p3', text: '🐰 → {}', answer: 'Easter' },
          { id: 'p4', text: '🎂 → {}', answer: 'birthday' },
          { id: 'p5', text: '🎁 → {}', answer: 'present' },
          { id: 'p6', text: '🎅 → {}', answer: 'Santa' }
        ]
      }
    ]
  }
]

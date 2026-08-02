import type { Topic } from '../../lib/types'

// ----------------------------------------------------------------------------
// DEUTSCH - 7 Themen, faithful zum Heft "Startklar fuer die 3. Klasse"
// ----------------------------------------------------------------------------

export const deutschTopics: Topic[] = [
  {
    id: 'deutsch-1',
    subject: 'deutsch',
    index: 1,
    title: 'Silben',
    subtitle: 'und Silbenkönige',
    emoji: '👑',
    exercises: [
      {
        id: 'deutsch-1-a',
        type: 'syllable',
        instruction: 'Klatsche die Silben! Tippe für jede Silbe einmal.',
        words: [
          { id: 'w1', word: 'Biene', syllables: ['Bie', 'ne'], kings: [1, 4] },
          { id: 'w2', word: 'Maus', syllables: ['Maus'], kings: [1] },
          { id: 'w3', word: 'Zitrone', syllables: ['Zi', 'tro', 'ne'], kings: [1, 4, 6] },
          { id: 'w4', word: 'Glueck', syllables: ['Glueck'], kings: [2] },
          { id: 'w5', word: 'Papagei', syllables: ['Pa', 'pa', 'gei'], kings: [1, 3, 5] },
          { id: 'w6', word: 'Schildkroete', syllables: ['Schild', 'kroe', 'te'], kings: [3, 8, 11] }
        ]
      },
      {
        id: 'deutsch-1-b',
        type: 'syllable',
        instruction: 'Runde 2: Klatsche die Silben!',
        words: [
          { id: 'w1', word: 'Sonne', syllables: ['Son', 'ne'], kings: [1, 4] },
          { id: 'w2', word: 'Ball', syllables: ['Ball'], kings: [1] },
          { id: 'w3', word: 'Elefant', syllables: ['E', 'le', 'fant'], kings: [0, 2, 4] },
          { id: 'w4', word: 'Banane', syllables: ['Ba', 'na', 'ne'], kings: [1, 3, 5] },
          { id: 'w5', word: 'Regenbogen', syllables: ['Re', 'gen', 'bo', 'gen'], kings: [1, 3, 6, 8] }
        ]
      }
    ]
  },

  {
    id: 'deutsch-2',
    subject: 'deutsch',
    index: 2,
    title: 'Wortarten',
    subtitle: 'Nomen',
    emoji: '🦁',
    exercises: [
      {
        id: 'deutsch-2-a',
        type: 'choice',
        instruction: 'Welcher Artikel passt? der, die oder das?',
        questions: [
          { id: 'q1', text: '{} Löwe', options: ['der', 'die', 'das'], answer: 'der' },
          { id: 'q2', text: '{} Stift', options: ['der', 'die', 'das'], answer: 'der' },
          { id: 'q3', text: '{} Baum', options: ['der', 'die', 'das'], answer: 'der' },
          { id: 'q4', text: '{} Kind', options: ['der', 'die', 'das'], answer: 'das' },
          { id: 'q5', text: '{} Katze', options: ['der', 'die', 'das'], answer: 'die' }
        ]
      },
      {
        id: 'deutsch-2-b',
        type: 'fillText',
        instruction: 'Schreibe in der Mehrzahl (mit "die")!',
        problems: [
          { id: 'p1', text: 'der Löwe → die {}', answer: ['Löwen', 'Loewen'] },
          { id: 'p2', text: 'der Stift → die {}', answer: 'Stifte' },
          { id: 'p3', text: 'der Baum → die {}', answer: ['Bäume', 'Baeume'] },
          { id: 'p4', text: 'das Kind → die {}', answer: 'Kinder' },
          { id: 'p5', text: 'die Katze → die {}', answer: 'Katzen' }
        ]
      },
      {
        id: 'deutsch-2-c',
        type: 'choice',
        instruction: 'Runde 2: Welcher Artikel passt?',
        questions: [
          { id: 'q1', text: '{} Sonne', options: ['der', 'die', 'das'], answer: 'die' },
          { id: 'q2', text: '{} Hund', options: ['der', 'die', 'das'], answer: 'der' },
          { id: 'q3', text: '{} Auto', options: ['der', 'die', 'das'], answer: 'das' },
          { id: 'q4', text: '{} Blume', options: ['der', 'die', 'das'], answer: 'die' },
          { id: 'q5', text: '{} Tisch', options: ['der', 'die', 'das'], answer: 'der' }
        ]
      }
    ]
  },

  {
    id: 'deutsch-3',
    subject: 'deutsch',
    index: 3,
    title: 'Wortarten',
    subtitle: 'Verben',
    emoji: '🏃',
    exercises: [
      {
        id: 'deutsch-3-a',
        type: 'fillText',
        instruction: 'Was tun die Kinder? Notiere ein passendes Verb!',
        problems: [
          { id: 'p1', text: '📖 → {}', answer: ['lesen', 'liest'] },
          { id: 'p2', text: '🏃 → {}', answer: ['rennen', 'laufen', 'rennt', 'laeuft', 'läuft'] },
          { id: 'p3', text: '😴 → {}', answer: ['schlafen', 'schlaeft', 'schläft'] },
          { id: 'p4', text: '😢 → {}', answer: ['weinen', 'weint'] }
        ]
      },
      {
        id: 'deutsch-3-b',
        type: 'fillText',
        instruction: 'Notiere die richtige Verbform!',
        problems: [
          { id: 'p1', text: 'spielen – er {}', answer: 'spielt' },
          { id: 'p2', text: 'lachen – ich {}', answer: 'lache' },
          { id: 'p3', text: 'malen – du {}', answer: 'malst' },
          { id: 'p4', text: 'fliegen – wir {}', answer: 'fliegen' }
        ]
      },
      {
        id: 'deutsch-3-c',
        type: 'fillText',
        instruction: 'Runde 2: Notiere die richtige Verbform!',
        problems: [
          { id: 'p1', text: 'kochen – er {}', answer: 'kocht' },
          { id: 'p2', text: 'tanzen – ich {}', answer: 'tanze' },
          { id: 'p3', text: 'springen – du {}', answer: 'springst' },
          { id: 'p4', text: 'malen – ihr {}', answer: 'malt' },
          { id: 'p5', text: 'rufen – wir {}', answer: 'rufen' }
        ]
      }
    ]
  },

  {
    id: 'deutsch-4',
    subject: 'deutsch',
    index: 4,
    title: 'Wortarten',
    subtitle: 'Adjektive',
    emoji: '🌈',
    exercises: [
      {
        id: 'deutsch-4-a',
        type: 'connect',
        instruction: 'Wie sind die Dinge? Verbinde mit dem passenden Adjektiv!',
        left: [
          { id: 'l1', group: 'leicht', label: '🪶 Feder' },
          { id: 'l2', group: 'sauer', label: '🍋 Zitrone' },
          { id: 'l3', group: 'langsam', label: '🐌 Schnecke' },
          { id: 'l4', group: 'laut', label: '⏰ Wecker' }
        ],
        right: [
          { id: 'r1', group: 'sauer', label: 'sauer' },
          { id: 'r2', group: 'leicht', label: 'leicht' },
          { id: 'r3', group: 'laut', label: 'laut' },
          { id: 'r4', group: 'langsam', label: 'langsam' }
        ]
      },
      {
        id: 'deutsch-4-b',
        type: 'fillText',
        instruction: 'Notiere den passenden Gegensatz! (klein, dick, weich, alt)',
        problems: [
          { id: 'p1', text: 'dünn – {}', answer: 'dick' },
          { id: 'p2', text: 'hart – {}', answer: 'weich' },
          { id: 'p3', text: 'groß – {}', answer: 'klein' },
          { id: 'p4', text: 'jung – {}', answer: 'alt' }
        ]
      },
      {
        id: 'deutsch-4-c',
        type: 'fillText',
        instruction: 'Runde 2: Notiere den passenden Gegensatz!',
        problems: [
          { id: 'p1', text: 'nass – {}', answer: 'trocken' },
          { id: 'p2', text: 'hell – {}', answer: 'dunkel' },
          { id: 'p3', text: 'schnell – {}', answer: 'langsam' },
          { id: 'p4', text: 'voll – {}', answer: 'leer' },
          { id: 'p5', text: 'kalt – {}', answer: ['warm', 'heiß', 'heiss'] }
        ]
      }
    ]
  },

  {
    id: 'deutsch-5',
    subject: 'deutsch',
    index: 5,
    title: 'Wortarten',
    subtitle: 'Alles gemischt',
    emoji: '🎨',
    exercises: [
      {
        id: 'deutsch-5-a',
        type: 'classify',
        instruction: 'Tippe die Woerter an: Nomen blau, Verben rot, Adjektive gruen!',
        categories: [
          { id: 'nomen', label: 'Nomen', color: 'var(--wa-nomen)' },
          { id: 'verb', label: 'Verb', color: 'var(--wa-verb)' },
          { id: 'adjektiv', label: 'Adjektiv', color: 'var(--wa-adjektiv)' }
        ],
        words: [
          { id: 'x1', text: 'Rakete', category: 'nomen' },
          { id: 'x2', text: 'süß', category: 'adjektiv' },
          { id: 'x3', text: 'Tomate', category: 'nomen' },
          { id: 'x4', text: 'weich', category: 'adjektiv' },
          { id: 'x5', text: 'trinken', category: 'verb' },
          { id: 'x6', text: 'schlafen', category: 'verb' },
          { id: 'x7', text: 'Opa', category: 'nomen' },
          { id: 'x8', text: 'gießen', category: 'verb' },
          { id: 'x9', text: 'Esel', category: 'nomen' },
          { id: 'x10', text: 'klein', category: 'adjektiv' },
          { id: 'x11', text: 'Ananas', category: 'nomen' },
          { id: 'x12', text: 'Stift', category: 'nomen' },
          { id: 'x13', text: 'hart', category: 'adjektiv' },
          { id: 'x14', text: 'Apfel', category: 'nomen' },
          { id: 'x15', text: 'rennen', category: 'verb' },
          { id: 'x16', text: 'lesen', category: 'verb' }
        ]
      },
      {
        id: 'deutsch-5-b',
        type: 'classify',
        instruction: 'Runde 2: Nomen blau, Verben rot, Adjektive grün!',
        categories: [
          { id: 'nomen', label: 'Nomen', color: 'var(--wa-nomen)' },
          { id: 'verb', label: 'Verb', color: 'var(--wa-verb)' },
          { id: 'adjektiv', label: 'Adjektiv', color: 'var(--wa-adjektiv)' }
        ],
        words: [
          { id: 'y1', text: 'Blume', category: 'nomen' },
          { id: 'y2', text: 'lachen', category: 'verb' },
          { id: 'y3', text: 'gelb', category: 'adjektiv' },
          { id: 'y4', text: 'Hund', category: 'nomen' },
          { id: 'y5', text: 'springen', category: 'verb' },
          { id: 'y6', text: 'rund', category: 'adjektiv' },
          { id: 'y7', text: 'Auto', category: 'nomen' },
          { id: 'y8', text: 'müde', category: 'adjektiv' },
          { id: 'y9', text: 'singen', category: 'verb' },
          { id: 'y10', text: 'Baum', category: 'nomen' },
          { id: 'y11', text: 'kochen', category: 'verb' },
          { id: 'y12', text: 'bunt', category: 'adjektiv' }
        ]
      }
    ]
  },

  {
    id: 'deutsch-6',
    subject: 'deutsch',
    index: 6,
    title: 'Das Alphabet',
    subtitle: 'Buchstaben und Ordnen',
    emoji: '🔤',
    exercises: [
      {
        id: 'deutsch-6-a',
        type: 'fillText',
        instruction: 'Was fehlt? Setze den fehlenden Buchstaben ein!',
        problems: [
          { id: 'p1', text: 'A B C {} E F', answer: 'D' },
          { id: 'p2', text: 'F {} H', answer: 'G' },
          { id: 'p3', text: 'H {} J K L', answer: 'I' },
          { id: 'p4', text: 'L {} {} O', answer: 'M' },
          { id: 'p5', text: 'R {} T', answer: 'S' },
          { id: 'p6', text: 'T {} V', answer: 'U' },
          { id: 'p7', text: 'V {} X Y {}', answer: 'W' }
        ]
      },
      {
        id: 'deutsch-6-b',
        type: 'order',
        instruction: 'Ordne nach dem Alphabet! Tippe die Wörter der Reihe nach an.',
        groups: [
          { id: 'g1', words: ['Trauben', 'Melone', 'Zitrone'] },
          { id: 'g2', words: ['Schere', 'Stift', 'Spitzer'] }
        ]
      },
      {
        id: 'deutsch-6-c',
        type: 'order',
        instruction: 'Runde 2: Ordne nach dem Alphabet!',
        groups: [
          { id: 'g1', words: ['Banane', 'Apfel', 'Orange'] },
          { id: 'g2', words: ['Hund', 'Maus', 'Katze'] }
        ]
      }
    ]
  },

  {
    id: 'deutsch-7',
    subject: 'deutsch',
    index: 7,
    title: 'Satzzeichen',
    subtitle: 'Punkt, Frage, Ausruf',
    emoji: '❗',
    exercises: [
      {
        id: 'deutsch-7-a',
        type: 'choice',
        instruction: 'Welches Satzzeichen fehlt? Tippe es an!',
        questions: [
          { id: 'q1', text: 'Die Sommerferien sind vorbei {}', options: ['.', '?', '!'], answer: '.' },
          { id: 'q2', text: 'In welcher Klasse bist du jetzt {}', options: ['.', '?', '!'], answer: '?' },
          { id: 'q3', text: 'Juhu {}', options: ['.', '?', '!'], answer: '!' },
          { id: 'q4', text: 'Jetzt bin ich endlich in der dritten Klasse {}', options: ['.', '?', '!'], answer: '!' }
        ]
      },
      {
        id: 'deutsch-7-b',
        type: 'choice',
        instruction: 'Runde 2: Welches Satzzeichen fehlt?',
        questions: [
          { id: 'q1', text: 'Wie heißt du {}', options: ['.', '?', '!'], answer: '?' },
          { id: 'q2', text: 'Ich freue mich so {}', options: ['.', '?', '!'], answer: '!' },
          { id: 'q3', text: 'Der Hund schläft {}', options: ['.', '?', '!'], answer: '.' },
          { id: 'q4', text: 'Kommst du mit {}', options: ['.', '?', '!'], answer: '?' }
        ]
      }
    ]
  }
]

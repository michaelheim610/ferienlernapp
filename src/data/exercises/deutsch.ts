import type { Topic } from '../../lib/types'

// ----------------------------------------------------------------------------
// DEUTSCH - 7 Themen, eigene Aufgaben im Stil einer Vorbereitung auf die 3. Klasse
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
          { id: 'w1', word: 'Blume', syllables: ['Blu', 'me'], kings: [2, 4] },
          { id: 'w2', word: 'Fisch', syllables: ['Fisch'], kings: [1] },
          { id: 'w3', word: 'Kamel', syllables: ['Ka', 'mel'], kings: [1, 3] },
          { id: 'w4', word: 'Nashorn', syllables: ['Nas', 'horn'], kings: [1, 4] },
          { id: 'w5', word: 'Schokolade', syllables: ['Scho', 'ko', 'la', 'de'], kings: [3, 5, 7, 9] }
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
      },
      {
        id: 'deutsch-1-c',
        type: 'syllable',
        instruction: 'Level 3: Klatsche die Silben!',
        words: [
          { id: 'w1', word: 'Fahrrad', syllables: ['Fahr', 'rad'], kings: [1, 5] },
          { id: 'w2', word: 'Krokodil', syllables: ['Kro', 'ko', 'dil'], kings: [2, 4, 6] },
          { id: 'w3', word: 'Computer', syllables: ['Com', 'pu', 'ter'], kings: [1, 4, 6] },
          { id: 'w4', word: 'Schmetterling', syllables: ['Schmet', 'ter', 'ling'], kings: [4, 7, 10] }
        ]
      },
      {
        id: 'deutsch-1-d',
        type: 'syllable',
        instruction: 'Profi: Klatsche die Silben!',
        words: [
          { id: 'w1', word: 'Tomate', syllables: ['To', 'ma', 'te'], kings: [1, 3, 5] },
          { id: 'w2', word: 'Delfin', syllables: ['Del', 'fin'], kings: [1, 4] },
          { id: 'w3', word: 'Giraffe', syllables: ['Gi', 'raf', 'fe'], kings: [1, 3, 6] },
          { id: 'w4', word: 'Kartoffel', syllables: ['Kar', 'tof', 'fel'], kings: [1, 4, 7] }
        ]
      },
      {
        id: 'deutsch-1-e',
        type: 'syllable',
        instruction: 'Level 4: Klatsche die Silben!',
        words: [
          { id: 'w1', word: 'Ananas', syllables: ['A', 'na', 'nas'], kings: [0, 2, 4] },
          { id: 'w2', word: 'Auto', syllables: ['Au', 'to'], kings: [0, 3] },
          { id: 'w3', word: 'Pinguin', syllables: ['Pin', 'gu', 'in'], kings: [1, 4, 5] },
          { id: 'w4', word: 'Sonnenblume', syllables: ['Son', 'nen', 'blu', 'me'], kings: [1, 4, 8, 10] }
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
          { id: 'q1', text: '{} Tiger', options: ['der', 'die', 'das'], answer: 'der' },
          { id: 'q2', text: '{} Wolke', options: ['der', 'die', 'das'], answer: 'die' },
          { id: 'q3', text: '{} Pferd', options: ['der', 'die', 'das'], answer: 'das' },
          { id: 'q4', text: '{} Nase', options: ['der', 'die', 'das'], answer: 'die' },
          { id: 'q5', text: '{} Schuh', options: ['der', 'die', 'das'], answer: 'der' }
        ]
      },
      {
        id: 'deutsch-2-b',
        type: 'fillText',
        instruction: 'Schreibe in der Mehrzahl (mit "die")!',
        problems: [
          { id: 'p1', text: 'der Schuh → die {}', answer: 'Schuhe' },
          { id: 'p2', text: 'die Wolke → die {}', answer: 'Wolken' },
          { id: 'p3', text: 'das Pferd → die {}', answer: 'Pferde' },
          { id: 'p4', text: 'die Nase → die {}', answer: 'Nasen' },
          { id: 'p5', text: 'der Hut → die {}', answer: ['Hüte', 'Huete'] }
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
      },
      {
        id: 'deutsch-2-d',
        type: 'choice',
        instruction: 'Level 3: Welcher Artikel passt?',
        questions: [
          { id: 'q1', text: '{} Fenster', options: ['der', 'die', 'das'], answer: 'das' },
          { id: 'q2', text: '{} Löffel', options: ['der', 'die', 'das'], answer: 'der' },
          { id: 'q3', text: '{} Gabel', options: ['der', 'die', 'das'], answer: 'die' },
          { id: 'q4', text: '{} Messer', options: ['der', 'die', 'das'], answer: 'das' },
          { id: 'q5', text: '{} Teller', options: ['der', 'die', 'das'], answer: 'der' }
        ]
      },
      {
        id: 'deutsch-2-e',
        type: 'fillText',
        instruction: 'Profi: Schreibe in der Mehrzahl!',
        problems: [
          { id: 'p1', text: 'der Apfel → die {}', answer: ['Äpfel', 'Aepfel'] },
          { id: 'p2', text: 'das Buch → die {}', answer: ['Bücher', 'Buecher'] },
          { id: 'p3', text: 'der Vogel → die {}', answer: ['Vögel', 'Voegel'] },
          { id: 'p4', text: 'die Maus → die {}', answer: ['Mäuse', 'Maeuse'] },
          { id: 'p5', text: 'der Ball → die {}', answer: ['Bälle', 'Baelle'] }
        ]
      },
      {
        id: 'deutsch-2-f',
        type: 'choice',
        instruction: 'Profi: Welcher Artikel passt?',
        questions: [
          { id: 'q1', text: '{} Haus', options: ['der', 'die', 'das'], answer: 'das' },
          { id: 'q2', text: '{} Berg', options: ['der', 'die', 'das'], answer: 'der' },
          { id: 'q3', text: '{} Lampe', options: ['der', 'die', 'das'], answer: 'die' },
          { id: 'q4', text: '{} Bett', options: ['der', 'die', 'das'], answer: 'das' },
          { id: 'q5', text: '{} Stuhl', options: ['der', 'die', 'das'], answer: 'der' }
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
          { id: 'p1', text: '🤸 → {}', answer: ['turnen', 'turnt'] },
          { id: 'p2', text: '🚴 → {}', answer: ['fahren', 'faehrt', 'fährt', 'radfahren'] },
          { id: 'p3', text: '🧗 → {}', answer: ['klettern', 'klettert'] },
          { id: 'p4', text: '🥁 → {}', answer: ['trommeln', 'trommelt'] }
        ]
      },
      {
        id: 'deutsch-3-b',
        type: 'fillText',
        instruction: 'Notiere die richtige Verbform!',
        problems: [
          { id: 'p1', text: 'winken – er {}', answer: 'winkt' },
          { id: 'p2', text: 'hüpfen – ich {}', answer: 'hüpfe' },
          { id: 'p3', text: 'baden – du {}', answer: 'badest' },
          { id: 'p4', text: 'klatschen – wir {}', answer: 'klatschen' }
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
      },
      {
        id: 'deutsch-3-d',
        type: 'fillText',
        instruction: 'Level 3: Achtung, tricky Verben!',
        problems: [
          { id: 'p1', text: 'schwimmen – er {}', answer: 'schwimmt' },
          { id: 'p2', text: 'lesen – du {}', answer: 'liest' },
          { id: 'p3', text: 'essen – er {}', answer: 'isst' },
          { id: 'p4', text: 'fahren – ich {}', answer: 'fahre' },
          { id: 'p5', text: 'sein – ich {}', answer: 'bin' }
        ]
      },
      {
        id: 'deutsch-3-e',
        type: 'fillText',
        instruction: 'Profi: Welches Verb passt? (Grundform)',
        problems: [
          { id: 'p1', text: '🖌️ → {}', answer: ['malen', 'malt'] },
          { id: 'p2', text: '🎤 → {}', answer: ['singen', 'singt'] },
          { id: 'p3', text: '🏊 → {}', answer: ['schwimmen', 'schwimmt'] },
          { id: 'p4', text: '🍽️ → {}', answer: ['essen', 'isst'] }
        ]
      },
      {
        id: 'deutsch-3-f',
        type: 'fillText',
        instruction: 'Profi: die richtige Verbform!',
        problems: [
          { id: 'p1', text: 'gehen – ich {}', answer: 'gehe' },
          { id: 'p2', text: 'kommen – du {}', answer: 'kommst' },
          { id: 'p3', text: 'sehen – er {}', answer: 'sieht' },
          { id: 'p4', text: 'trinken – wir {}', answer: 'trinken' },
          { id: 'p5', text: 'spielen – ihr {}', answer: 'spielt' }
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
          { id: 'l1', group: 'schnell', label: '🐆 Gepard' },
          { id: 'l2', group: 'suess', label: '🍭 Lolli' },
          { id: 'l3', group: 'hart', label: '🪨 Stein' },
          { id: 'l4', group: 'laut', label: '🔔 Glocke' }
        ],
        right: [
          { id: 'r1', group: 'suess', label: 'süß' },
          { id: 'r2', group: 'schnell', label: 'schnell' },
          { id: 'r3', group: 'laut', label: 'laut' },
          { id: 'r4', group: 'hart', label: 'hart' }
        ]
      },
      {
        id: 'deutsch-4-b',
        type: 'fillText',
        instruction: 'Notiere den passenden Gegensatz! (kurz, schwach, unten, schlecht)',
        problems: [
          { id: 'p1', text: 'lang – {}', answer: 'kurz' },
          { id: 'p2', text: 'stark – {}', answer: 'schwach' },
          { id: 'p3', text: 'oben – {}', answer: 'unten' },
          { id: 'p4', text: 'gut – {}', answer: 'schlecht' }
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
      },
      {
        id: 'deutsch-4-d',
        type: 'fillText',
        instruction: 'Level 3: Notiere den passenden Gegensatz!',
        problems: [
          { id: 'p1', text: 'sauber – {}', answer: ['schmutzig', 'dreckig'] },
          { id: 'p2', text: 'laut – {}', answer: 'leise' },
          { id: 'p3', text: 'reich – {}', answer: 'arm' },
          { id: 'p4', text: 'breit – {}', answer: 'schmal' },
          { id: 'p5', text: 'früh – {}', answer: ['spät', 'spaet'] }
        ]
      },
      {
        id: 'deutsch-4-e',
        type: 'connect',
        instruction: 'Profi: Wie ist das Tier/Ding? Verbinde!',
        left: [
          { id: 'l1', group: 'gross', label: '🐘 Elefant' },
          { id: 'l2', group: 'klein', label: '🐭 Maus' },
          { id: 'l3', group: 'heiss', label: '🔥 Feuer' },
          { id: 'l4', group: 'kalt', label: '❄️ Schnee' }
        ],
        right: [
          { id: 'r1', group: 'klein', label: 'klein' },
          { id: 'r2', group: 'gross', label: 'groß' },
          { id: 'r3', group: 'kalt', label: 'kalt' },
          { id: 'r4', group: 'heiss', label: 'heiß' }
        ]
      },
      {
        id: 'deutsch-4-f',
        type: 'fillText',
        instruction: 'Profi: Notiere den Gegensatz!',
        problems: [
          { id: 'p1', text: 'offen – {}', answer: ['zu', 'geschlossen'] },
          { id: 'p2', text: 'leicht – {}', answer: 'schwer' },
          { id: 'p3', text: 'wenig – {}', answer: 'viel' },
          { id: 'p4', text: 'traurig – {}', answer: ['fröhlich', 'froehlich', 'glücklich', 'gluecklich'] },
          { id: 'p5', text: 'weit – {}', answer: ['nah', 'nahe'] }
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
        instruction: 'Tippe die Wörter an: Nomen blau, Verben rot, Adjektive grün!',
        categories: [
          { id: 'nomen', label: 'Nomen', color: 'var(--wa-nomen)' },
          { id: 'verb', label: 'Verb', color: 'var(--wa-verb)' },
          { id: 'adjektiv', label: 'Adjektiv', color: 'var(--wa-adjektiv)' }
        ],
        words: [
          { id: 'x1', text: 'Pizza', category: 'nomen' },
          { id: 'x2', text: 'sauer', category: 'adjektiv' },
          { id: 'x3', text: 'backen', category: 'verb' },
          { id: 'x4', text: 'Insel', category: 'nomen' },
          { id: 'x5', text: 'glatt', category: 'adjektiv' },
          { id: 'x6', text: 'träumen', category: 'verb' },
          { id: 'x7', text: 'Zahn', category: 'nomen' },
          { id: 'x8', text: 'breit', category: 'adjektiv' },
          { id: 'x9', text: 'rollen', category: 'verb' },
          { id: 'x10', text: 'Krone', category: 'nomen' },
          { id: 'x11', text: 'laut', category: 'adjektiv' },
          { id: 'x12', text: 'winken', category: 'verb' },
          { id: 'x13', text: 'Ohr', category: 'nomen' },
          { id: 'x14', text: 'spitz', category: 'adjektiv' },
          { id: 'x15', text: 'hüpfen', category: 'verb' }
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
      },
      {
        id: 'deutsch-5-c',
        type: 'classify',
        instruction: 'Level 3: Nomen blau, Verben rot, Adjektive grün!',
        categories: [
          { id: 'nomen', label: 'Nomen', color: 'var(--wa-nomen)' },
          { id: 'verb', label: 'Verb', color: 'var(--wa-verb)' },
          { id: 'adjektiv', label: 'Adjektiv', color: 'var(--wa-adjektiv)' }
        ],
        words: [
          { id: 'z1', text: 'Fisch', category: 'nomen' },
          { id: 'z2', text: 'grün', category: 'adjektiv' },
          { id: 'z3', text: 'malen', category: 'verb' },
          { id: 'z4', text: 'Tisch', category: 'nomen' },
          { id: 'z5', text: 'weinen', category: 'verb' },
          { id: 'z6', text: 'stark', category: 'adjektiv' },
          { id: 'z7', text: 'Mond', category: 'nomen' },
          { id: 'z8', text: 'tanzen', category: 'verb' },
          { id: 'z9', text: 'leise', category: 'adjektiv' },
          { id: 'z10', text: 'Buch', category: 'nomen' },
          { id: 'z11', text: 'fahren', category: 'verb' },
          { id: 'z12', text: 'warm', category: 'adjektiv' }
        ]
      },
      {
        id: 'deutsch-5-d',
        type: 'classify',
        instruction: 'Profi: Nomen blau, Verben rot, Adjektive grün!',
        categories: [
          { id: 'nomen', label: 'Nomen', color: 'var(--wa-nomen)' },
          { id: 'verb', label: 'Verb', color: 'var(--wa-verb)' },
          { id: 'adjektiv', label: 'Adjektiv', color: 'var(--wa-adjektiv)' }
        ],
        words: [
          { id: 'z1', text: 'Sonne', category: 'nomen' },
          { id: 'z2', text: 'schwimmen', category: 'verb' },
          { id: 'z3', text: 'rot', category: 'adjektiv' },
          { id: 'z4', text: 'Berg', category: 'nomen' },
          { id: 'z5', text: 'klettern', category: 'verb' },
          { id: 'z6', text: 'hoch', category: 'adjektiv' },
          { id: 'z7', text: 'Katze', category: 'nomen' },
          { id: 'z8', text: 'schlafen', category: 'verb' },
          { id: 'z9', text: 'Stern', category: 'nomen' },
          { id: 'z10', text: 'rufen', category: 'verb' },
          { id: 'z11', text: 'kalt', category: 'adjektiv' },
          { id: 'z12', text: 'Vogel', category: 'nomen' }
        ]
      },
      {
        id: 'deutsch-5-e',
        type: 'classify',
        instruction: 'Level 4: Nomen blau, Verben rot, Adjektive grün!',
        categories: [
          { id: 'nomen', label: 'Nomen', color: 'var(--wa-nomen)' },
          { id: 'verb', label: 'Verb', color: 'var(--wa-verb)' },
          { id: 'adjektiv', label: 'Adjektiv', color: 'var(--wa-adjektiv)' }
        ],
        words: [
          { id: 'w1', text: 'Haus', category: 'nomen' },
          { id: 'w2', text: 'rennen', category: 'verb' },
          { id: 'w3', text: 'schön', category: 'adjektiv' },
          { id: 'w4', text: 'Wasser', category: 'nomen' },
          { id: 'w5', text: 'trinken', category: 'verb' },
          { id: 'w6', text: 'nass', category: 'adjektiv' },
          { id: 'w7', text: 'Kind', category: 'nomen' },
          { id: 'w8', text: 'spielen', category: 'verb' },
          { id: 'w9', text: 'lustig', category: 'adjektiv' },
          { id: 'w10', text: 'Ball', category: 'nomen' },
          { id: 'w11', text: 'werfen', category: 'verb' },
          { id: 'w12', text: 'dunkel', category: 'adjektiv' }
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
          { id: 'p4', text: 'L {} N O', answer: 'M' },
          { id: 'p5', text: 'L M {} O', answer: 'N' },
          { id: 'p6', text: 'R {} T', answer: 'S' },
          { id: 'p7', text: 'T {} V', answer: 'U' },
          { id: 'p8', text: 'V {} X', answer: 'W' },
          { id: 'p9', text: 'X Y {}', answer: 'Z' }
        ]
      },
      {
        id: 'deutsch-6-b',
        type: 'order',
        instruction: 'Ordne nach dem Alphabet! Tippe die Wörter der Reihe nach an.',
        groups: [
          { id: 'g1', words: ['Wolke', 'Blume', 'Stern'] },
          { id: 'g2', words: ['Ente', 'Biene', 'Fisch'] }
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
      },
      {
        id: 'deutsch-6-d',
        type: 'fillText',
        instruction: 'Level 3: Welcher Buchstabe fehlt?',
        problems: [
          { id: 'p1', text: 'C {} E', answer: 'D' },
          { id: 'p2', text: 'P {} R', answer: 'Q' },
          { id: 'p3', text: 'W {} Y', answer: 'X' },
          { id: 'p4', text: 'E {} G', answer: 'F' },
          { id: 'p5', text: 'N {} P', answer: 'O' }
        ]
      },
      {
        id: 'deutsch-6-e',
        type: 'order',
        instruction: 'Profi: Ordne 4 Wörter nach dem Alphabet!',
        groups: [
          { id: 'g1', words: ['Erdbeere', 'Apfel', 'Banane', 'Kirsche'] },
          { id: 'g2', words: ['Tiger', 'Affe', 'Elefant', 'Löwe'] }
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
          { id: 'q1', text: 'Es regnet heute {}', options: ['.', '?', '!'], answer: '.' },
          { id: 'q2', text: 'Wo ist meine Jacke {}', options: ['.', '?', '!'], answer: '?' },
          { id: 'q3', text: 'Super gemacht {}', options: ['.', '?', '!'], answer: '!' },
          { id: 'q4', text: 'Wir fahren ans Meer {}', options: ['.', '?', '!'], answer: '.' }
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
      },
      {
        id: 'deutsch-7-c',
        type: 'choice',
        instruction: 'Level 3: Welches Satzzeichen fehlt?',
        questions: [
          { id: 'q1', text: 'Pass auf {}', options: ['.', '?', '!'], answer: '!' },
          { id: 'q2', text: 'Wo ist mein Ball {}', options: ['.', '?', '!'], answer: '?' },
          { id: 'q3', text: 'Ich heiße Lisa {}', options: ['.', '?', '!'], answer: '.' },
          { id: 'q4', text: 'Wie schön {}', options: ['.', '?', '!'], answer: '!' }
        ]
      },
      {
        id: 'deutsch-7-d',
        type: 'choice',
        instruction: 'Profi: Welches Satzzeichen fehlt?',
        questions: [
          { id: 'q1', text: 'Hast du Hunger {}', options: ['.', '?', '!'], answer: '?' },
          { id: 'q2', text: 'Der Ball ist rund {}', options: ['.', '?', '!'], answer: '.' },
          { id: 'q3', text: 'Hilfe {}', options: ['.', '?', '!'], answer: '!' },
          { id: 'q4', text: 'Wann kommst du {}', options: ['.', '?', '!'], answer: '?' }
        ]
      },
      {
        id: 'deutsch-7-e',
        type: 'choice',
        instruction: 'Level 4: Welches Satzzeichen fehlt?',
        questions: [
          { id: 'q1', text: 'Es schneit {}', options: ['.', '?', '!'], answer: '.' },
          { id: 'q2', text: 'Magst du Eis {}', options: ['.', '?', '!'], answer: '?' },
          { id: 'q3', text: 'Autsch {}', options: ['.', '?', '!'], answer: '!' },
          { id: 'q4', text: 'Wie spät ist es {}', options: ['.', '?', '!'], answer: '?' }
        ]
      }
    ]
  },

  {
    id: 'deutsch-8',
    subject: 'deutsch',
    index: 8,
    title: 'Reimwörter',
    subtitle: 'Was klingt gleich?',
    emoji: '🎵',
    exercises: [
      {
        id: 'deutsch-8-a',
        type: 'choice',
        instruction: 'Welches Wort reimt sich? Tippe es an!',
        questions: [
          { id: 'q1', text: 'Haus reimt sich auf {}', options: ['Maus', 'Ball', 'Tisch'], answer: 'Maus' },
          { id: 'q2', text: 'Baum reimt sich auf {}', options: ['Traum', 'Hund', 'Stern'], answer: 'Traum' },
          { id: 'q3', text: 'Katze reimt sich auf {}', options: ['Tatze', 'Blume', 'Auto'], answer: 'Tatze' },
          { id: 'q4', text: 'Hand reimt sich auf {}', options: ['Sand', 'Mond', 'Fisch'], answer: 'Sand' },
          { id: 'q5', text: 'Sonne reimt sich auf {}', options: ['Tonne', 'Berg', 'Ente'], answer: 'Tonne' },
          { id: 'q6', text: 'Ball reimt sich auf {}', options: ['Knall', 'Rose', 'Wolke'], answer: 'Knall' }
        ]
      },
      {
        id: 'deutsch-8-b',
        type: 'choice',
        instruction: 'Runde 2: Welches Wort reimt sich?',
        questions: [
          { id: 'q1', text: 'Fisch reimt sich auf {}', options: ['Tisch', 'Baum', 'Hand'], answer: 'Tisch' },
          { id: 'q2', text: 'Hut reimt sich auf {}', options: ['gut', 'klein', 'rot'], answer: 'gut' },
          { id: 'q3', text: 'Stein reimt sich auf {}', options: ['klein', 'groß', 'warm'], answer: 'klein' },
          { id: 'q4', text: 'Rose reimt sich auf {}', options: ['Hose', 'Jacke', 'Schuh'], answer: 'Hose' },
          { id: 'q5', text: 'Nacht reimt sich auf {}', options: ['acht', 'drei', 'null'], answer: 'acht' },
          { id: 'q6', text: 'Maus reimt sich auf {}', options: ['Haus', 'Turm', 'Garten'], answer: 'Haus' }
        ]
      },
      {
        id: 'deutsch-8-c',
        type: 'choice',
        instruction: 'Level 3: Welches Wort reimt sich?',
        questions: [
          { id: 'q1', text: 'Licht reimt sich auf {}', options: ['nicht', 'dann', 'hier'], answer: 'nicht' },
          { id: 'q2', text: 'Kuchen reimt sich auf {}', options: ['suchen', 'essen', 'backen'], answer: 'suchen' },
          { id: 'q3', text: 'Hase reimt sich auf {}', options: ['Nase', 'Ohr', 'Auge'], answer: 'Nase' },
          { id: 'q4', text: 'Schnee reimt sich auf {}', options: ['See', 'Fluss', 'Teich'], answer: 'See' },
          { id: 'q5', text: 'Glück reimt sich auf {}', options: ['Stück', 'Teil', 'Rest'], answer: 'Stück' },
          { id: 'q6', text: 'Wagen reimt sich auf {}', options: ['tragen', 'fahren', 'ziehen'], answer: 'tragen' }
        ]
      },
      {
        id: 'deutsch-8-d',
        type: 'choice',
        instruction: 'Profi: Welches Wort reimt sich?',
        questions: [
          { id: 'q1', text: 'Herz reimt sich auf {}', options: ['Schmerz', 'Weh', 'Aua'], answer: 'Schmerz' },
          { id: 'q2', text: 'Wald reimt sich auf {}', options: ['bald', 'gleich', 'jetzt'], answer: 'bald' },
          { id: 'q3', text: 'Licht reimt sich auf {}', options: ['Gedicht', 'Vers', 'Reim'], answer: 'Gedicht' },
          { id: 'q4', text: 'Maus reimt sich auf {}', options: ['raus', 'rein', 'weg'], answer: 'raus' },
          { id: 'q5', text: 'Hand reimt sich auf {}', options: ['Wand', 'Decke', 'Boden'], answer: 'Wand' },
          { id: 'q6', text: 'Tüte reimt sich auf {}', options: ['Blüte', 'Tasche', 'Beutel'], answer: 'Blüte' }
        ]
      }
    ]
  },

  {
    id: 'deutsch-9',
    subject: 'deutsch',
    index: 9,
    title: 'Mehr Wortarten',
    subtitle: 'Nomen, Verben, Adjektive',
    emoji: '🧩',
    exercises: [
      {
        id: 'deutsch-9-a',
        type: 'classify',
        instruction: 'Nomen blau, Verben rot, Adjektive grün!',
        categories: [
          { id: 'nomen', label: 'Nomen', color: 'var(--wa-nomen)' },
          { id: 'verb', label: 'Verb', color: 'var(--wa-verb)' },
          { id: 'adjektiv', label: 'Adjektiv', color: 'var(--wa-adjektiv)' }
        ],
        words: [
          { id: 'a1', text: 'Garten', category: 'nomen' },
          { id: 'a2', text: 'hüpfen', category: 'verb' },
          { id: 'a3', text: 'weich', category: 'adjektiv' },
          { id: 'a4', text: 'Fenster', category: 'nomen' },
          { id: 'a5', text: 'lesen', category: 'verb' },
          { id: 'a6', text: 'süß', category: 'adjektiv' },
          { id: 'a7', text: 'Wolke', category: 'nomen' },
          { id: 'a8', text: 'fallen', category: 'verb' },
          { id: 'a9', text: 'dünn', category: 'adjektiv' },
          { id: 'a10', text: 'Löffel', category: 'nomen' },
          { id: 'a11', text: 'zeigen', category: 'verb' },
          { id: 'a12', text: 'frech', category: 'adjektiv' }
        ]
      },
      {
        id: 'deutsch-9-b',
        type: 'classify',
        instruction: 'Runde 2: Nomen blau, Verben rot, Adjektive grün!',
        categories: [
          { id: 'nomen', label: 'Nomen', color: 'var(--wa-nomen)' },
          { id: 'verb', label: 'Verb', color: 'var(--wa-verb)' },
          { id: 'adjektiv', label: 'Adjektiv', color: 'var(--wa-adjektiv)' }
        ],
        words: [
          { id: 'b1', text: 'Brücke', category: 'nomen' },
          { id: 'b2', text: 'klingeln', category: 'verb' },
          { id: 'b3', text: 'hell', category: 'adjektiv' },
          { id: 'b4', text: 'Teller', category: 'nomen' },
          { id: 'b5', text: 'wandern', category: 'verb' },
          { id: 'b6', text: 'krumm', category: 'adjektiv' },
          { id: 'b7', text: 'Nadel', category: 'nomen' },
          { id: 'b8', text: 'flüstern', category: 'verb' },
          { id: 'b9', text: 'sanft', category: 'adjektiv' },
          { id: 'b10', text: 'Kissen', category: 'nomen' },
          { id: 'b11', text: 'bügeln', category: 'verb' },
          { id: 'b12', text: 'eckig', category: 'adjektiv' }
        ]
      },
      {
        id: 'deutsch-9-c',
        type: 'classify',
        instruction: 'Level 3: Nomen blau, Verben rot, Adjektive grün!',
        categories: [
          { id: 'nomen', label: 'Nomen', color: 'var(--wa-nomen)' },
          { id: 'verb', label: 'Verb', color: 'var(--wa-verb)' },
          { id: 'adjektiv', label: 'Adjektiv', color: 'var(--wa-adjektiv)' }
        ],
        words: [
          { id: 'c1', text: 'Wiese', category: 'nomen' },
          { id: 'c2', text: 'graben', category: 'verb' },
          { id: 'c3', text: 'schnell', category: 'adjektiv' },
          { id: 'c4', text: 'Regen', category: 'nomen' },
          { id: 'c5', text: 'hören', category: 'verb' },
          { id: 'c6', text: 'laut', category: 'adjektiv' },
          { id: 'c7', text: 'Schuh', category: 'nomen' },
          { id: 'c8', text: 'binden', category: 'verb' },
          { id: 'c9', text: 'eng', category: 'adjektiv' },
          { id: 'c10', text: 'Tasse', category: 'nomen' },
          { id: 'c11', text: 'gießen', category: 'verb' },
          { id: 'c12', text: 'voll', category: 'adjektiv' }
        ]
      },
      {
        id: 'deutsch-9-d',
        type: 'classify',
        instruction: 'Profi: Nomen blau, Verben rot, Adjektive grün!',
        categories: [
          { id: 'nomen', label: 'Nomen', color: 'var(--wa-nomen)' },
          { id: 'verb', label: 'Verb', color: 'var(--wa-verb)' },
          { id: 'adjektiv', label: 'Adjektiv', color: 'var(--wa-adjektiv)' }
        ],
        words: [
          { id: 'd1', text: 'Treppe', category: 'nomen' },
          { id: 'd2', text: 'steigen', category: 'verb' },
          { id: 'd3', text: 'steil', category: 'adjektiv' },
          { id: 'd4', text: 'Feder', category: 'nomen' },
          { id: 'd5', text: 'schreiben', category: 'verb' },
          { id: 'd6', text: 'leicht', category: 'adjektiv' },
          { id: 'd7', text: 'Wurzel', category: 'nomen' },
          { id: 'd8', text: 'wachsen', category: 'verb' },
          { id: 'd9', text: 'tief', category: 'adjektiv' },
          { id: 'd10', text: 'Korb', category: 'nomen' },
          { id: 'd11', text: 'tragen', category: 'verb' },
          { id: 'd12', text: 'schwer', category: 'adjektiv' }
        ]
      }
    ]
  },

  {
    id: 'deutsch-10',
    subject: 'deutsch',
    index: 10,
    title: 'der, die oder das?',
    subtitle: 'Die richtigen Artikel',
    emoji: '🏷️',
    exercises: [
      {
        id: 'deutsch-10-a',
        type: 'choice',
        instruction: 'Welcher Artikel passt? Tippe ihn an!',
        questions: [
          { id: 'q1', text: '{} Mond', options: ['der', 'die', 'das'], answer: 'der' },
          { id: 'q2', text: '{} Fahrrad', options: ['der', 'die', 'das'], answer: 'das' },
          { id: 'q3', text: '{} Treppe', options: ['der', 'die', 'das'], answer: 'die' },
          { id: 'q4', text: '{} Garten', options: ['der', 'die', 'das'], answer: 'der' },
          { id: 'q5', text: '{} Wiese', options: ['der', 'die', 'das'], answer: 'die' },
          { id: 'q6', text: '{} Fenster', options: ['der', 'die', 'das'], answer: 'das' }
        ]
      },
      {
        id: 'deutsch-10-b',
        type: 'choice',
        instruction: 'Runde 2: Welcher Artikel passt?',
        questions: [
          { id: 'q1', text: '{} Blume', options: ['der', 'die', 'das'], answer: 'die' },
          { id: 'q2', text: '{} Stern', options: ['der', 'die', 'das'], answer: 'der' },
          { id: 'q3', text: '{} Buch', options: ['der', 'die', 'das'], answer: 'das' },
          { id: 'q4', text: '{} Gabel', options: ['der', 'die', 'das'], answer: 'die' },
          { id: 'q5', text: '{} Löffel', options: ['der', 'die', 'das'], answer: 'der' },
          { id: 'q6', text: '{} Kissen', options: ['der', 'die', 'das'], answer: 'das' }
        ]
      },
      {
        id: 'deutsch-10-c',
        type: 'choice',
        instruction: 'Profi: Welcher Artikel passt?',
        questions: [
          { id: 'q1', text: '{} Apfel', options: ['der', 'die', 'das'], answer: 'der' },
          { id: 'q2', text: '{} Banane', options: ['der', 'die', 'das'], answer: 'die' },
          { id: 'q3', text: '{} Auto', options: ['der', 'die', 'das'], answer: 'das' },
          { id: 'q4', text: '{} Sonne', options: ['der', 'die', 'das'], answer: 'die' },
          { id: 'q5', text: '{} Berg', options: ['der', 'die', 'das'], answer: 'der' },
          { id: 'q6', text: '{} Haus', options: ['der', 'die', 'das'], answer: 'das' }
        ]
      }
    ]
  }
]

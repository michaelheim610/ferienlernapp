# 🚀 Startklar für die 3. Klasse

Eine bunte, kindgerechte Weltraum-Lern-App für Lisa – nachgebaut aus dem Ferienheft ihres Lehrers.
Mathe & Deutsch zum Üben, mit Sternen 🌟 und Fortschritt, angelehnt an die ANTON-App.

Läuft als **PWA** auf iPhone, iPad und im Browser – **komplett offline** (perfekt fürs Zelten).

## Lokal starten (zum Entwickeln)

```bash
npm install
npm run dev
```

Dann im Browser `http://localhost:5173` öffnen.

## Auf iPad / iPhone bekommen (offline nutzbar)

**Empfohlen – GitHub Pages (automatisch):**
1. Änderungen committen und pushen (Branch `main`).
2. Auf GitHub unter **Settings → Pages → Build and deployment → Source: GitHub Actions** aktivieren.
3. Der mitgelieferte Workflow (`.github/workflows/deploy.yml`) baut und veröffentlicht automatisch.
4. Die App liegt dann unter `https://michaelheim610.github.io/ferienlernapp/`.
5. Auf dem iPad in **Safari** öffnen → Teilen-Symbol → **„Zum Home-Bildschirm"**.
6. Einmal öffnen (lädt & speichert alles). Danach läuft sie **offline** – auch im Flugmodus. ✈️

**Wichtig fürs Zelten:** Einmal zu Hause mit WLAN öffnen und zum Home-Bildschirm hinzufügen,
damit der Service Worker alles zwischenspeichert. Danach braucht Lisa kein Internet mehr.

## Was ist drin?

**Mathe (7 Missionen):** Zahldarstellung, Hundertertafel, Zahlenstrahl,
Plus/Minus mit Zehnerübergang, Einmaleins (Grundvorstellungen & Üben), Division.

**Deutsch (7 Missionen):** Silben & Silbenkönige, Nomen, Verben, Adjektive,
Wortarten gemischt, Alphabet, Satzzeichen.

## Aufbau (für Entwickler)

Datengetrieben: Aufgaben sind reine Daten in `src/data/exercises/`, gerendert von
generischen Aufgaben-Komponenten in `src/components/exercises/`. Neue Aufgaben = einfach
Daten-Objekte ergänzen. Fortschritt & Sterne liegen im `localStorage` (`src/lib/store.ts`).

- `src/lib/types.ts` – alle Aufgabentypen
- `src/components/screens/` – Startseite, Fach, Aufgabe, Belohnung
- `src/components/exercises/` – 11 Interaktions-Bausteine
- `vite.config.ts` – PWA/Service-Worker-Konfiguration

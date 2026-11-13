# My Collection

**BEYOND THE MUSIC** 🎵

_Three sisters. Three journeys. Their music and the stories behind it._

## Thema

### Projektidee

**Beyond the Music** ist eine interaktive Musiksammlung, die sich mit den Veröffentlichungen und künstlerischen, persönlichen Entwicklungen der drei Schwestern **RAYE, Amma und Absolutely** beschäftigt.

Im Mittelpunkt stehen dabei nicht nur ihre Songs, EPs oder Alben, sondern vor allem auch ihr musikalischer Werdegang und Bedeutungen hinter ihrer Musik. Die Website soll somit dazu einladen, ihre musikalischen Werke zu entdecken, ihre Hintergründe kennenzulernen und die unterschiedlichen künstlerischen Wege der drei Sängerinnen nachzuvollziehen.

### Was wird gesammelt?

Die Sammlung umfasst ausgewählte musikalische Veröffentlichungen der drei Schwestern. Dazu gehören:

- Singles oder einzelne Songs
- EPs
- Studioalben
- Live-Alben

Jeder Eintrag beschreibt dabei eine Veröffentlichung mit den wichtigsten Informationen und einer kurzen thematischen Einordnung.

### Zielgruppe

Die Webseite richtet sich an Musikinteressierte, Fans von RAYE, Amma und Absolutely sowie an diejenigen, die mehr über die Hintergründe und auch Interpretationen ihrer Veröffentlichungen erfahren möchten.

### Kategorien

Die Sammlung ist in drei Hauptkategorien unterteilt: **RAYE, Amma und Absolutely**. Jede Musikveröffentlichung wird der jeweiligen Künstlerin zugeordnet.

Auf der Übersichtsseite (index.html) werden die Veröffentlichungen in eigenen Bereichen pro Künstlerin dargestellt. Mithilfe eines Kategorienfilters können Nutzer sich entweder alle Veröffentlichungen oder nur die einer bestimmten Künstlerin anzeigen lassen.

Zusätzlich ist für die einzelnen Künstlerinnenseiten ein weiterer Filter nach **Veröffentlichungsart** geplant:

- **All:** Zeigt alle Veröffentlichungen der jeweiligen Künstlerin.

- **EPs:** Zeigt ausschließlich EPs.

- **Albums:** Zeigt Studio- und Live-Alben.

- **Songs:** Zeigt einzelne Songs und Singles.

Damit können Nutzer auf einer Künstlerinnenseite unter dem "The Records"-Abschnitt dann gezielt nach einer bestimmten Art von Musikveröffentlichung suchen.

Die Veröffentlichungsart _(sei es Single, EP, Studioalbum oder Live-Album)_ ist somit keine eigene Hauptkategorie der Sammlung, sondern eine zusätzliche Eigenschaft der Einträge, nach der auf den Künstlerinnenseiten gefiltert werden kann.

### Fakten pro Sammlungseintrag

Jeder Eintrag steht für eine bestimmte musikalische Veröffentlichung. Da sich die relevanten Informationen aber zwischen Alben/ EPs und einzelnen Songs unterscheiden, werden zwei Arten von Faktenlisten verwendet.

Auf den Detailseiten wird der Titel einer Veröffentlichung als große Überschrift (h1) dargestellt. Die weiteren Fakten erscheinen dann darunter in kleinen, ovalen Infofeldern, die mit der HTML-Definitionsliste (dl) umgesetzt werden.

**Fakten für Alben und EPs**

| Fakt                     | Beschreibung                        |
| ------------------------ | ----------------------------------- |
| Künstlerin               | RAYE, Amma oder Absolutely          |
| Veröffentlichungsart     | EP, Studioalbum oder Live-Album     |
| Veröffentlichungsdatum   | Jahr bzw. genaues Erscheinungsdatum |
| Umfang                   | Anzahl der Tracks bei EPs und Alben |
| Musikalischer Stil       | Genres, z.B. Jazz, Soul, Pop,...    |
| ggf. Beteiligte Künstler | Features                            |

Ergänzend zur Faktenliste enthalten die Album- und EP-Detailseiten die Hintergrundinformationen zur Entstehung, musikalische Besonderheiten sowie eine Tracklist.

Der musikalische Stil wird dabei zunächst als kompakter Fakt angegeben und dann in einem eigenen Abschnitt **"The Sound"** ausführlicher beschrieben.

**Fakten für einzelne Songs/ Singles**

| Fakt                           | Beschreibung                                                 |
| ------------------------------ | ------------------------------------------------------------ |
| Künstlerin                     | RAYE, Amma oder Absolutely                                   |
| Veröffentlichungsart           | Song oder Single                                             |
| Veröffentlichungsdatum         | Jahr bzw. genaues Erscheinungsdatum                          |
| Spieldauer                     | Länge des Songs in Minuten und Sekunden                      |
| Musikalischer Stil             | Genres, z.B. Jazz, Soul, Pop,...                             |
| ggf. Zugehöriges Album oder EP | Name des Albums/ der EP, auf dem/ der der Song enthalten ist |
| ggf. Beteiligte Künstler       | Features                                                     |

Bei Songs, die Teil eines Albums oder einer EP sind, soll die entsprechende Veröffentlichung direkt verlinkt werden. Eigenständige Singles benötigen diese zusätzliche Angabe dagegen nicht.

Neben den Fakten erhalten die Songdetailseiten noch weitere Abschnitte: z.B. **„The Story“**, **„The Sound Profile"** und **„The Meaning Behind It“**.
Dadurch können Nutzer nicht nur die grundlegenden Informationen nachlesen, sondern auch die Geschichte, musikalischen Besonderheiten und mögliche Interpretationen eines Songs entdecken.

### Langfristige Projektvision

Geplant sind zusätzlich noch eine Seite für die Geschichte der Karriere in einer chronologischen Zeitleiste pro Artist, eine Detailseite für einen bestimmten Song mit Interpretation oder auch Infos zum Soundprofil des Songs _(welche Instrumente etc.)_ sowie eine persönliche **My Collection**-Seite.

Dort können Nutzer dann ihre Lieblingswerke _(sei es Song, Album oder Karriere-Kapitel)_ speichern und eigene Gedanken oder Erinnerungen dazu festhalten.

### Repository

**GitLab:** https://gitlab.lrz.de/000000003B9CE8E3/my-collection.git

## Seitenstruktur

Die **Startseite (index.html)** stellt RAYE, Amma und Absolutely vor und enthält eine Übersicht ihrer ausgewählten Musikveröffentlichungen. Ein Kategoriefilter ermöglicht es außerdem, entweder alle Veröffentlichungen oder nur die Einträge einer bestimmten Künstlerin anzuzeigen.

**Album-Detailseiten im Ordner items/:**

- raye-album-hope.html - Detailseite zu RAYEs THIS MUSIC MAY CONTAIN HOPE. mit Fakten, Hintergrundgeschichte, Tracklist und weiterführenden Informationen (Bedeutung, Sound, Quellen etc.)

- absolutely-album-paracosm.html - Detailseite zu Absolutelys Paracosm mit Fakten, Hintergrundgeschichte, Tracklist und weiterführenden Informationen (Bedeutung, Sound, Quellen etc.)

**Kontaktformular-Seite:**

- contact.html - Kontaktseite mit aktivem POST-Formular (`type="submit"`); ohne Backend werden die Angaben derzeit nicht verarbeitet oder gespeichert

**Weitere Seiten:**

- raye.html, amma.html und absolutely.html - derzeit als Coming-Soon-Seiten gestaltet; künftig für musikalische Karrierewege der drei Schwestern vorgesehen

- my-collection.html - Platzhalter für spätere persönliche Gedankensammlung zu gespeicherten Records/ Chapters

- sources.html - Platzhalter für zukünftige zentrale Quellenübersicht

Die Seiten sind durch Links in der Header-Navigation, im Footer und innerhalb der Seiten miteinander verbunden (z.B. Explore the Record etc.).

## Bildquellen

### Homepage-Hero-Bilder

- **RAYE (`hero-raye.jpg`):** Konzertfotografie von RAYEs Auftritt in der Radio City Music Hall. Bildquelle: Instagram, „Never ever getting over seeing @raye live at Radio City!!!“.
  Quelle: https://www.instagram.com/p/DXWpvZhjkzJ/

- **Amma (`hero-amma.jpg`):** Konzertfotografie von Ammas Live-Debüt beim All Points East Festival. Bildquelle: Instagram, „amma making her live debut at @allpointseastuk“.
  Quelle: https://www.instagram.com/p/DNtEcMFUGkb/

- **Absolutely (`hero-absolutely.webp`):** Konzertfotografie von Absolutelys Auftritt im Palladium in Köln am 15.03.2026. Foto: Laura Keimel, Frontstage Magazine, „Renee Rapp am 15. März im Palladium in Köln“ (16.03.2026).  
  Quelle: https://frontstage-magazine.de/2026/03/16/renee-rapp-am-15-maerz-im-palladium-in-koeln/

### Künstlerinnenporträts

- **RAYE:** Journal.hr, „Poslušali smo: This Music May Contain Hope, Raye“ (31.03.2026). Bildcredit: Profimedia.
  Quelle: https://www.journal.hr/kultura/glazba/this-music-may-contain-hope-raye-poslusali-smo/

- **Amma:** WithGuitars, „Amma Unveils Bold and Versatile Debut Project Middle Child“ (22.08.2025).
  Foto: Nat Raxel.
  Quelle: https://www.withguitars.com/amma-unveils-bold-and-versatile-debut-project-middle-child/

- **Absolutely:** The Independent, „The next big star in UK pop? Absolutely“ (11.01.2026).
  Bildcredit: Press; Fotograf nicht angegeben.
  Quelle: https://www.independent.co.uk/arts-entertainment/music/features/absolutely-singer-raye-sister-tour-b2897570.html

### KI-generierte Bilder

- **Favicon für Website (`favicon_BTM.png`):**
  Mit ChatGPT (OpenAI) generiertes Bild, abgestimmt auf meinen Websiteninhalt (Schallplatte).

- **Coming-Soon-Hintergrundbilder (`coming-soon-turntable-desktop.png` und `coming-soon-turntable-mobile.png`):** Mit ChatGPT (OpenAI) generierte Bildmotive auf Grundlage meiner eigenen gestalterischen Idee. Dargestellt wird ein stillstehender Schallplattenspieler mit angehobenem Tonarm als visuelle Metapher für noch nicht verfügbare Seiten. Die beiden Varianten wurden für Desktop- und Mobile-Bildschirme unterschiedlich komponiert.

  **Bildgenerierung:** ChatGPT (OpenAI), 2026.

### Record-Cover

**RAYE**

- **Welcome to the Winter (EP, 2014):** Offizielles Albumcover, Quelle: https://raye.fandom.com/wiki/Welcome_to_the_Winter_(EP)

- **My 21st Century Blues (Album, 2023):** Offizielles Albumcover, Quelle: https://www.deezer.com/album/393727427

- **THIS MUSIC MAY CONTAIN HOPE. (Album, 2026):** Offizielles Albumcover, Quelle: https://open.spotify.com/album/3ZN01xzenGMhWHdC5kfAe9

**Amma**

- **Middle Child (Single, 2025):** Cover-Artwork, Quelle: https://open.spotify.com/album/5KfhyZmRRUfQuiJB1aZVlV

- **Blame Game (EP, 2025):** Cover-Artwork, Quelle: https://open.spotify.com/album/3n7Vjwe7Jm5PiEdYYpgrih

- **Middle Child (Album, 2026):** Cover-Artwork, Quelle: https://open.spotify.com/album/40UETJYLuyi0ys3kWhFuXM

**Absolutely**

- **CEREBRUM (Album, 2023):** Offizielles Albumcover, Quelle: https://open.spotify.com/intl-de/album/3NY3LrCmVkMoUKrAc9wSPQ

- **Paracosm (Album, 2026):** Offizielles Albumcover, Quelle: https://open.spotify.com/album/6LifnNApEGwyRpFHMKNW25

## KI-Nutzung

<details>
<summary><strong>Modularbeit 1 – Konzeption und statische Grundlage</strong></summary>

- **ChatGPT – Projektidee und Struktur:** Brainstorming zu „Beyond the Music“, Feedback zu meinen eigenen Wireframes, zur HTML-Seitenstruktur und zur Entscheidung zwischen Flexbox und Grid. Unterstützung bei der README-Tabelle und bei der Formulierung ausgewählter Albumtexte.
- **Claude und v0 – Inspiration:** Visuelle und interaktive Prototypen zur Erkundung einer späteren Projektvision; die statische Abgabe habe ich eigenständig in HTML, CSS und JavaScript weiterentwickelt.
- **ChatGPT – HTML-Grundlagen:** Semantische Elemente (`<main>`, `<section>`, `<article>`, `<aside>`), Albumfakten mit `<dl>/<dt>/<dd>`, Zitate mit `<blockquote>/<cite>`, nummerierte Tracklists mit `<ol>`, Quellen mit `<details>/<summary>` und Formulare mit `<label>`, Eingabetypen und `method="post"` verstehen.
- **ChatGPT – CSS-Grundlagen:** Selektoren und Kaskade, `:root` und `var()`, Box-Modell, Flexbox/Grid, `minmax()`, `clamp()`, `object-fit`, Hover-/Fokuszustände und Mobile-First-Media-Queries anhand der Homepage und Albumdetailseiten verstehen.
- **ChatGPT – Bedienung und Navigation:** Unterstützung beim Lesezeichen-SVG, bei `aria-label`, `:focus-visible`, aufklappbarem Mobile-Menü sowie Ankerlinks und deren Gestaltung.
- **ChatGPT – Kategoriefilter:** Erklärung von `data-filter`/`data-category`, `querySelectorAll()`, `addEventListener()`, `dataset`, Bedingungen, `hidden` und `aria-pressed`. 
- **ChatGPT – Inhalte und Nachweise:** Unterstützung beim Bildquellenverzeichnis und bei einem zum Musikthema passenden KI-generierten Schallplatten-Favicon. Die Bildnachweise stehen separat unter „Bildquellen“.

</details>

<details>
<summary><strong>Modularbeit 2 – Weiterentwicklung der statischen Website</strong></summary>

**Ausgangslage:** Aufbauend auf `collection-static` wurden vor allem die Homepage, beide Albumdetailseiten, Contact und Coming Soon gestalterisch überarbeitet. Für „Meet the Artists“ kam `artist-carousel.js` hinzu; der vorhandene Records-Filter blieb bestehen. Die späteren Refactoring- und Kommentierungsschritte dienten dagegen überwiegend der Wartbarkeit und meinem Codeverständnis.

### Homepage – Konzert-Hero und Navigation

- **ChatGPT:** Unterstützung bei einer immersiven Collage aus drei Konzertfotografien, abgestimmt auf Sichtbarkeit, Bildpositionen, Helligkeit, weiche Bildkanten und die responsive Textlesbarkeit.
- **ChatGPT:** Ergänzung des dezenten, animierten „Scroll to discover“-Links zu `#artists` und Abstimmung der mobilen und breiten Desktop-Darstellung.
- **Neu vertieft:** gestaffelte Bildebenen mit `position`, `z-index` und `isolation`; `mask-image`/`-webkit-mask-image`, Gradients und `pointer-events: none`; Fade-ins mit `@keyframes`, `opacity` und `animation-delay`; Rücksicht auf `prefers-reduced-motion`.

### Homepage – Cinematic Artist-Carousel

- **ChatGPT:** Weiterentwicklung der drei Künstlerinnenkarten zu farblich getrennten, schwebenden Cinematic Stages mit Masken, weichgezeichneten Porträts und einem einheitlichen Lichteffekt.
- **ChatGPT:** Unterstützung bei der Umsetzung eines Carousels mit Vanilla JavaScript: Pfeile, drei Positionspunkte, Zähler, Tastatursteuerung und horizontale Wischgesten. Ohne JavaScript bleiben die drei Karten als normale Inhalte sichtbar.
- **Neu vertieft:** gemeinsame Grid-Position für wechselnde Karten; Aktivierung über `.artist-carousel--ready`, Zustandsklasse `is-active`, `inert`, `aria-hidden`, `aria-pressed` und `aria-live`; Navigation mit Modulo (`%`), Touch-Events sowie `:focus-within` und geräteabhängige Hover-Abfragen.

### Homepage – How to Explore und Records

- **ChatGPT:** Editorial-Überarbeitung der vier „How to Explore“-Kapitel mit nummerierten Schritten und ruhigem Hintergrundlicht. Record-Cards wurden mit Cover-Overlays, sanften Hover-/Fokuszuständen und einer auf Mobilgeräten horizontal scrollbaren Galerie verfeinert.
- **Neu vertieft:** `scroll-snap-type`/`scroll-snap-align` für Albumkarten und bedingte Overlay-Effekte bei `(hover: hover) and (pointer: fine)`. Der Kategorienfilter aus MA1 wird weiterhin in `app.js` gesteuert.

### RAYE – Album-Hero, Story und Four Seasons

- **ChatGPT:** Gestaltung einer bordeauxfarbenen Wolkenatmosphäre aus dem weichgezeichneten Albumcover; neue Anordnung von Hero, Cover, Buttons und Faktenkarte mittels benannter Grid-Bereiche. Die Story erhielt eine offenere Lesetypografie, ein Pull Quote und ergänzende Editorial-Kapitel.
- **ChatGPT:** Entwicklung vier individuell abgestimmter Jahreszeiten-Karten für die 17 Tracks; der bestehende Quellen- und Timeline-Bereich wurde visuell verfeinert.
- **Neu vertieft:** `grid-template-areas`, `:is()` für später gemeinsame Album-Komponenten, CSS-Counter mit durchgehender zweistelliger Nummerierung sowie lokale `--season-*`-Variablen für Licht und Farben. Die Track-Sterne sind derzeit dekorativ, keine Songlinks.

### Absolutely – Paracosm und gemeinsame Albumkomponenten

- **ChatGPT:** Ausarbeitung einer eigenständigen Farbwelt aus Rot, Kupferorange und Aubergine; cinematischer Hero und Story-Aufbau analog zu RAYE, jedoch mit eigenem Theme.
- **ChatGPT:** Entwicklung einer zweigeteilten Paracosm-Tracklist (Einleitung links, 13 Songs rechts) sowie Abstimmung der Hover-Effekte beider Albumseiten. „Keep Going“ und die Timelines wurden hinsichtlich gemeinsam nutzbarer CSS-Grundlagen verglichen.
- **Neu vertieft:** CSS-Variablen auf Seiten- und Komponentenebene, `counter-reset`/`counter-increment`, `minmax()` und bewusste seitenspezifische Überschreibungen. Die Songs sind aktuell nicht als Detailseiten verlinkt.

### Contact und Coming Soon

- **ChatGPT:** Contact wurde in ein zweispaltiges Editorial-Layout überführt. Das **aktive** Formular verwendet `method="post"` und einen `type="submit"`-Button; ohne Backend erfolgt derzeit keine Speicherung. Der deaktivierte „Save this record“-Button gehört dagegen zur RAYE-Albumdetailseite.
- **ChatGPT:** Gestaltung einer ruhigen Schallplattenspieler-Szene für die Coming-Soon-Seiten; zwei mit ChatGPT erstellte, unterschiedlich komponierte Desktop-/Mobile-Hintergründe werden rein über CSS eingebunden. Beide Dateien und ihre Urheberschaft stehen bereits unter „Bildquellen“.
- **Neu vertieft:** responsive Formulargrids, `svh`, `background-size: cover`, `background-position` und ein bildabhängiger Hintergrundwechsel per Media Query.

### Zweite Editorial-Layoutiteration – breite Desktop-Bühnen

- **ChatGPT:** Auf großen Bildschirmen wurden die Inhaltsbereiche verbreitert, ohne die mobile Grundanordnung zu verändern. `--layout-stage: 92rem` und `--layout-gutter` definieren die große Bühne mit responsiven Seitenabständen; später ergänzen `--layout-content: 70rem` und `--layout-facts: 48rem` die schmaleren Standard- und Faktenbreiten.
- **ChatGPT:** `--album-stage-inset` sorgt ab `1280px` mit `max()`, `calc()` und `var()` für gemeinsame horizontale Inhaltsachsen von Album-Hero, Faktenkarte, Story und Tracklist. „Keep Going“, Quellen und Timeline wurden symmetrisch daran ausgerichtet; die Story-Spalten erhielten mehr Abstand.
- **ChatGPT:** Die Carousel-Pfeile wurden für `1280px` bis `1599px` gesondert positioniert. RAYEs Jahreszeiten erhielten über `--season-title` und `--season-glow` zusätzliche individuelle Überschriftenfarben und Lichtreflexe.

### Abschließendes CSS-Refactoring – Design-Tokens und Redundanzen

- **ChatGPT:** Zentralisierung der RAYE-/Amma-Bühnenverläufe als `--raye-stage` und `--amma-stage` neben der bereits vorhandenen Variable `--absolutely-stage`, sodass Homepage-Karten und Keep-Going-Vorschauen dieselbe Künstlerinnenfarbwelt verwenden. Wiederkehrende Breiten und Kartenradien wurden ebenfalls zentralisiert; individuelle Schatten, Grid-Verhältnisse und Themes blieben bewusst lokal.
- **ChatGPT:** Prüfung und Zusammenfassung gemeinsamer Hero-, Story-, Fakten-, Zitat-, Keep-Going- und Timeline-Regeln von RAYE und Absolutely mit `:is(.page-raye, .page-absolutely)`. Nicht mehr passende Timeline-Selektoren und überprüfte CSS-Duplikate wurden entfernt; die Datei wurde nach funktionalen Bereichen sortiert.

### Kommentare vereinheitlichen und Code verstehen

- **ChatGPT:** Deutsche, fachlich überprüfte Kommentare für die gesamte CSS sowie neun HTML- und zwei JavaScript-Dateien; 24 benannte CSS-Regionen und zusätzliche HTML-/JS-Regionen verbessern die Navigation in VS Code.
- **ChatGPT:** Lernkommentare beim ersten relevanten Auftreten von CSS Custom Properties, Layouttechniken, semantischen HTML-Elementen und JavaScript-Abläufen; spätere Anwendungen bewusst kürzer kommentiert. Irrtümliche Erklärungen (etwa zu `dataset.filter`, `cursor: pointer` oder nicht verlinkten Songs) wurden korrigiert.

</details>

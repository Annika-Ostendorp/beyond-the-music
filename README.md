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

- contact.html - Kontaktseite mit Demo-Formular (da noch kein Backend für das tatsächliche Absenden/ Speichern von Nachrichten)

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
<summary><strong>Modularbeit 1</strong></summary>

- **ChatGPT:** Brainstorming und Weiterentwicklung meiner ursprünglichen Projektidee zu einer Entdeckungsseite für RAYE, Amma und Absolutely mit deren Karrieren und Musik.

- **ChatGPT:** Feedback zu meinen selbst skizzierten Wireframes, insbesondere zur semantischen HTML-Struktur und zu den Layoutentscheidungen (Flexbox vs. Grid).

- **ChatGPT:** Unterstützung bei der Erstellung und Formatierung einer Markdown-Tabelle für das README.

- **Claude und v0:** Erstellung visueller, interaktiver Prototypen als Designinspiration für die langfristige Projektvision.

- **ChatGPT:** Erstellung eines abgestimmten Favicons für meine Website & Footer-Inhalt (Unterscheidung zwischen Header-/Footer-Navigation mit aria-label)

- **ChatGPT:** Bildquellen richtig zitieren für README & HTML-Tags **dl**, **dt** und **dd** verstehen

- **ChatGPT:** Verstehen, wie ich Lesezeichen-Icon einfügen kann für My-Collection Button im Header -> mit M6 4h12v17l-6-4-6 4z

- **ChatGPT:** Hilfe bei der Erstellung der Infotexte auf den Album-Detailseiten.

- **ChatGPT:** Verstehen, wie man ein Zitat in HTML programmiert (blockquote) & wie man Zusatzinfos festhält (aside); mit **cite** Titel korrekter kennzeichnen statt nur mit **i**.

- **ChatGPT:** Verstehen, wie ich eine Tracklist passend in HTML programmieren kann (mit geordneter Liste, Feature richtig schreiben und span-Tag für richtige Ausrichtung der Songdauer später mit CSS)

- **ChatGPT:** Verstehen, wie ich die Quellen für die bereitgestellten Infos einer Seite in HTML passend darstellen kann zum Aufklappen (details, summary,...)

- **ChatGPT:** Verstehen, wie man ein Kontaktformular in HTML programmiert (mit label, POST, Email, Themenauswahl mit select etc.)

- **ChatGPT:** Erklärung von verwendeten CSS-Elementen für Homepage

  **Header:**
  - margin: 0
  - :root
  - flex-wrap, flex-basis, :focus-visible,
  - wie Lesezeichen-Symbol einfügen für My Collection Button im Header --> index.html class="header-action"
  - width oder top: calc(100%-2rem)
  - text-decoration & white-space: nowrap
  - .mobile-menu summary::-webkit-details-marker
  - z-index, .nav-list a:hover, .mobile-menu nav a:hover {color: var(--color-accent);}

  **Hero-Section:**
  - clamp(..rem, ..vw,..rem)

  **Artists-Section:**
  - aria-labelledby
  - transition
  - object-fit & object-position

  **Explore the Records-Section:**
  - Verstehen & Programmierung von Code für 4 Filterbuttons (mit data-filter, aria-pressed) --> noch ohne Veränderung der Ansicht nach Klicken
  - .filter-chip[aria-pressed="true"]
  - flex-direction: column
  - .record-group + .record-group

  **Footer-Section:**
  - flex-direction: row
  - flex: 1
  - flex-shrink

- **ChatGPT:** Erklärung von verwendeten CSS-Elementen für RAYE Album Detailseite

  **Hero-Section:**
  - grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr)
  - class="text-link"
  - display: inline-flex
  - overflow-wrap: anywhere
  - mehrere Fakten-Pills nebeneinander anordnen (Musical Style & Collaborators) --> flex-direction: row

  **Story-Section:**
  - .story-details > section

  **Tracklist-Section:**
  - grid-column: 1 / -1
  - font-variant-numeric: tabular-nums für Track-Duration
  - Tracklist-Nummerierung anpassen mit counter-reset: track, counter-increment: track, content: counter(track, decimal-leading-zero)

  **Page Sources-Section:**
  - Wie bei aufklappbarer Liste Symbol von + zu - ändern --> mit [open]

  **Timeline-Section:**
  - Wie Richtungspfeile je Timeline Event gestalten --> mit article:first-of-type p::before bzw. article:last-of-type p::after

- **ChatGPT:** Erklärung von verwendeten CSS-Elementen für Coming-Soon-Seiten
  - min-height: 65vh --> damit Inhalt großzügigen Bereich bekommt und nicht direkt unter oberem Seitenrand steht
  - wie focus-visible zentral an einer Stelle gestalten für Tastaturbedienung? --> mit :where(a, button, input, select, textarea, summary):focus-visible

- **ChatGPT:** Hilfe bei der Umsetzung des JavaScript-Kategoriefilters
  - verstehen, wie ich nach Kategoriebegriffen aus index.html gezielt suchen kann für JavaScript -> diese Sektion soll ja gestaltet werden (mit document.querySelectorAll())

  - Erklärung, wie JavaScript erkennt, welcher Button angeklickt wurde --> Filterlogik (mit addEventListener, button.dataset.filter, shouldShow, isActive etc.)
  </details>

<details>
<summary><strong>Modularbeit 2</strong></summary>

**Teil 1 – KI-gestützte Aufwertung der statischen Website**

### Weiterentwicklung der Homepage

### Weiterentwicklung der Hero-Section

- **ChatGPT:** Brainstorming zur gestalterischen Weiterentwicklung meiner bestehenden Homepage -> Ziel = hochwertigere, musikalischere und atmosphärischere Gestaltung, die die unterschiedlichen künstlerischen Welten von RAYE, Amma und Absolutely stärker widerspiegelt, ohne das ursprüngliche Designkonzept aus MA1 zu verändern.

- **ChatGPT:** Erstellung eines ersten HTML- und CSS-Vorschlags für eine langsam rotierende Vinyl-Schallplatte als dekoratives Element im Hero-Bereich. Diesen Entwurf habe ich nach der Umsetzung bewusst verworfen, da er mir zu generisch erschien und die persönliche Geschichte der drei Künstlerinnen nicht ausreichend visualisierte.

- **ChatGPT:** Unterstützung bei der Entwicklung und Programmierung einer neuen, vollflächigen Hero-Collage aus drei von mir ausgewählten Bildern. Dabei sollte RAYE als zentraler visueller Fokus erscheinen, Absolutely links und Amma rechts. Die Bilder sollten ohne harte Übergänge ineinander übergehen und den Hero insgesamt lebendiger gestalten.

  **Neue HTML- und CSS-Techniken:**
  - `aria-hidden="true"` für die dekorative Bildcollage, damit diese nicht unnötig von Screenreadern vorgelesen wird.
  - `position: relative` und `position: absolute` mit `inset: 0`, um die Fotografien über die gesamte Hero-Section zu positionieren.
  - `isolation: isolate` und `z-index`, um Bild-, Overlay- und Textebenen kontrolliert übereinander anzuordnen.
  - `pointer-events: none`, damit dekorativer Hintergrund keine Interaktionen blockiert.
  - `background-image`, `background-size`, `background-position` und relative Bildpfade für die Einbindung und Positionierung der Bilder.
  - `mask-image: radial-gradient(...)` und `-webkit-mask-image`, um die Bildränder auf allen Seiten weich auszublenden und eine harmonische Collage zu erzeugen.
  - Mehrere `linear-gradient()`-Verläufe als dunkles Overlay, um die Lesbarkeit des Hero-Textes sicherzustellen.
  - Individuelle CSS-Variablen wie `--photo-opacity`, um die Transparenz der einzelnen Fotografien gezielt innerhalb ihrer Animationen zu steuern.

- **ChatGPT:** Unterstützung bei der Programmierung langsamer Fade-in-Animationen für die Konzertbilder und den Hero-Text beim erstmaligen Laden der Homepage.

  **Neue Animationstechniken:**
  - `@keyframes` zur Definition von Animationen mit unterschiedlichen Anfangs- und Endzuständen.
  - `opacity` für das schrittweise Einblenden von Bildern und Text ohne Zoom oder Positionsveränderung.
  - `animation-duration`, `animation-delay`, `ease-out` und `animation-fill-mode: both` für langsamere und zeitlich abgestimmte Übergänge.
  - Unterschiedliche Startverzögerungen für die drei Fotografien, um die Collage harmonisch erscheinen zu lassen.

- **ChatGPT:** Mehrfache Überarbeitung der generierten HTML- und CSS-Vorschläge anhand meiner eigenen Desktop- und Mobile-Screenshots. Insbesondere wurden die Bildpositionen, die Bildgrößen, die Transparenz, die Maskierungen und die Overlay-Verläufe wiederholt angepasst. Frühere Ergebnisse wirkten teilweise zu dunkel, gequetscht oder zeigten harte Bildkanten. Außerdem waren einzelne Künstlerinnen zunächst kaum sichtbar. Die abschließende Bildkomposition wurde entsprechend meiner gestalterischen Vorstellungen überarbeitet.

- **ChatGPT:** Unterstützung bei der responsiven Anpassung des neuen Hero-Bereichs. Während die Konzertbilder auf Desktop rechts neben bzw. hinter der großen Überschrift standen, erscheinen sie auf Mobile oberhalb des Textes. Die unterschiedlichen Layouts wurden mit bestehenden Media Queries umgesetzt, ohne zusätzliche HTML-Strukturen für die Smartphone-Ansicht anzulegen.

- **ChatGPT:** Unterstützung bei der Überprüfung und Bereinigung meiner `style.css`.
  - Verstehen und Beheben von Fehlern bei CSS-Bildpfaden, fehlenden `background-image`-Eigenschaften sowie nicht übereinstimmenden Namen von Animationen und `@keyframes`.
  - Entfernen nicht mehr benötigter CSS-Regeln aus dem ursprünglichen Vinyl-Entwurf.
  - Vermeidung doppelter Deklarationen und Vereinheitlichung der Einrückungen innerhalb von Media Queries.

- **ChatGPT:** Unterstützung bei der übersichtlicheren Strukturierung der KI-Nutzungsdokumentation im README mithilfe der HTML-Elemente `<details>` und `<summary>`.

- **ChatGPT:** Unterstützung bei der Erweiterung der bereits neu gestalteten Hero-Section um einen dezenten, animierten „Scroll to discover“-Button. Ziel war es, den großzügigen Freiraum unterhalb des Hero-Textes sinnvoll zu nutzen und Besucher intuitiv darauf hinzuweisen, dass unterhalb der Konzertcollage weitere Inhalte entdeckt werden können.

- **ChatGPT:** Erstellung eines HTML-Ankerlinks (`<a href="#artists">`), der direkt zur „Meet the Artists“-Section führt. Hierfür wurde die Ziel-Section um `id="artists"` ergänzt. Der Button besteht aus einem kurzen Beschreibungstext und einem dekorativen Pfeil, der mithilfe von `aria-hidden="true"` vor Screenreadern verborgen wird.

  **Neue CSS-Techniken:**
  - `display: inline-flex` und `align-items: center`, um Beschriftung und Pfeil horizontal auszurichten.
  - `clamp()` in Verbindung mit `vh`, um den Abstand unterhalb der Hero-Beschreibung an unterschiedliche Bildschirmhöhen anzupassen.
  - Halbtransparente `rgb()`-Hintergrundfarben, abgerundete Rahmen und die bestehenden Cremeweiß- und Goldtöne für eine harmonische Einbindung in das Design.
  - `@keyframes hero-scroll-arrow` und `transform: translateY(5px)`, um ausschließlich den Pfeil langsam nach unten und wieder zurückzubewegen.
  - `animation-delay`, `ease-in-out` und `infinite`, um die Bewegung zeitlich auf die bereits vorhandenen Hero-Fade-ins abzustimmen und anschließend kontinuierlich zu wiederholen.
  - `scroll-behavior: smooth`, um beim Anklicken des Ankerlinks sanft zur nächsten Section zu scrollen.

- **ChatGPT:** Berücksichtigung von Barrierefreiheit und Tastaturbedienung durch `:focus-visible` sowie `@media (prefers-reduced-motion: reduce)`. Bei reduzierter Bewegung wird die Pfeilanimation deaktiviert und das sanfte Scrollen durch das normale Sprungverhalten ersetzt.

### Weiterentwicklung der „Meet the Artists“-Section

**Neue HTML- und CSS-Techniken:**

- Zusätzlicher HTML-Container `.artist-card__image-frame` um die jeweiligen Künstlerinnenporträts, damit sich die Fotografien unabhängig vom Kartenlayout animieren lassen.
- `overflow: hidden` und `border-radius`, damit der Bild-Zoom innerhalb des abgerundeten Bildrahmens bleibt.
- `transform: scale(1.045)` für eine minimale Vergrößerung der Porträts beim Hover.
- `filter: saturate()` und `contrast()` für eine dezente Verstärkung der Bildfarben und Kontraste.
- `transition` mit unterschiedlichen Animationsdauern und `cubic-bezier()` für sanfte, individuell gesteuerte Bewegungen.
- `transform: translateY(-5px)` für eine leichte Anhebung der Karten beim Hover, kombiniert mit einem weichen Schatten und einer dezenten Veränderung der Rahmenfarbe.
- `@media (hover: hover) and (pointer: fine)`, um Hover-Animationen gezielt auf Geräte mit präziser Zeigersteuerung anzuwenden.
- `:focus-within`, um die Hervorhebung der Karten auch bei der Tastaturnavigation sichtbar zu machen.
- `::before` und `linear-gradient()` zur Gestaltung einer feinen Trennlinie zwischen der Hero-Section und „Meet the Artists“, ohne zusätzliches HTML zu benötigen.

- **ChatGPT:** Unterstützung bei der gestalterischen und technischen Neuentwicklung der Homepage-Section „Meet the Artists“. Die ursprünglichen drei nebeneinanderstehenden Künstlerinnenkarten wurden zunächst in großflächige Cinematic Artist Stages umgestaltet und anschließend zu einem interaktiven Carousel zusammengeführt.

- **ChatGPT:** Umsetzung weicher Fotoübergänge durch CSS-Gradients, Pseudoelemente, Unschärfefilter und Maskierungen. Die Porträts werden in ihre jeweiligen Hintergrundfarben eingebettet, statt als rechteckige Einzelbilder dargestellt zu werden.

- **ChatGPT:** Entwicklung eines einheitlichen schwebenden 3D-Effekts durch einen dezenten cremeweißen Kartenrahmen, mehrschichtige `box-shadow`-Effekte und eine leichte Anhebung bei Hover beziehungsweise Tastaturfokus. Die Effekte wurden unter Berücksichtigung von `prefers-reduced-motion` gestaltet.

- **ChatGPT:** Umsetzung des interaktiven Carousels mit HTML, CSS und Vanilla JavaScript ohne externe Frameworks. Die drei bestehenden Bühnen werden mittels CSS Grid übereinander positioniert. JavaScript steuert die aktive Künstlerin über `is-active`, navigiert zwischen den drei Karten und aktualisiert die Positionsanzeige.

- **ChatGPT:** Gestaltung der Carousel-Navigation mit Vorwärts- und Rückwärtspfeilen, drei Positionsindikatoren und einem Zähler. Auf Desktop befinden sich die Pfeile seitlich außerhalb der Bühne; auf Mobile stehen sie auf Höhe der vertikalen Kartenmitte. Das Carousel unterstützt außerdem horizontale Wischgesten auf Touchgeräten und die Navigation über die Tastatur.

- **ChatGPT:** Entwicklung sanfter Übergangsanimationen beim Wechsel der Künstlerinnen. Dabei werden Porträt, Hintergrundwelt und Informationen ineinander überblendet beziehungsweise gestaffelt eingeblendet. Die Animationen werden beim Künstlerinnenwechsel ausgelöst, nicht beim Scrollen.

- **ChatGPT:** Berücksichtigung von Accessibility durch beschriftete Navigationsbuttons, `aria-pressed` für die Positionsindikatoren, eine `aria-live`-Statusmeldung und `inert` für nicht aktive Künstlerinnenkarten. Bei deaktiviertem JavaScript bleiben alle drei Bühnen als reguläre Inhalte sichtbar.

### Weiterentwicklung der „How to Explore“-Section

- **ChatGPT:** Unterstützung bei der Erweiterung der HTML-Struktur um `.explore-section__inner` und `.explore-section__heading`. Der innere Container begrenzt die Inhalte auf die bestehende maximale Breite von `70rem`, während sich der Hintergrund über die gesamte Bildschirmbreite erstreckt. Die Section wurde außerdem über `aria-labelledby` mit ihrer Überschrift verknüpft.

- **ChatGPT:** Erstellung eines atmosphärischen Hintergrunds aus mehreren übereinanderliegenden `radial-gradient()`- und `linear-gradient()`-Verläufen.

- **ChatGPT:** Implementierung eines dezenten, langsam wechselnden Hintergrundlichts mit dem Pseudoelement `::before` und einer eigenen `@keyframes`-Animation. Durch `animation: ... infinite alternate` entsteht eine ruhige, wiederkehrende Lichtveränderung, ohne dass sich die Inhalte bewegen. Mit `prefers-reduced-motion` wird die Animation bei entsprechender Systemeinstellung deaktiviert.

- **ChatGPT:** Stylen von dezenten vertikalen Kapitelmarkierungen mit `border-left`. Die Schriftgrößen wurden angepasst und die Überschrift mit `clamp()` an die bestehende „Meet the Artists“-Section angeglichen. Die nicht mehr benötigten HTML-Elemente und CSS-Regeln wurden entfernt.

- **ChatGPT:** Erklärung und Überprüfung der verwendeten HTML- und CSS-Techniken, insbesondere `radial-gradient()`, `linear-gradient()`, `::before`, `@keyframes`, `infinite alternate`, `opacity`, responsive CSS-Grids, `clamp()`, `border-left` und `prefers-reduced-motion`.

### Weiterentwicklung der „Explore the Records“-Section

- **ChatGPT:** Erstellung und Anpassung neuer HTML- und CSS-Codeabschnitte für die beiden Alben mit bereits vorhandenen Detailseiten: RAYEs „THIS MUSIC MAY CONTAIN HOPE.“ und Absolutelys „Paracosm“. Mithilfe der zusätzlichen Klasse `.record-card--featured` wurden diese Karten von den übrigen Albumkarten unterschieden. Ein neuer Bildcontainer `.record-card__media` und ein Overlay `.record-card__overlay` ermöglichen eine gezielte Darstellung zusätzlicher Informationen.

- **ChatGPT:** Implementierung eines cineastischen Hover-Reveals für die beiden Featured-Cards. Bei der Interaktion wird das Albumcover durch `transform: scale(1.045)` minimal vergrößert und durch `filter: brightness()` und `saturate()` dezent verändert. Gleichzeitig erscheint mit `opacity`, `transform` und `transition` eine dunkle Informationsebene mit der Beschriftung „Inside the Record“ und dem Link „Explore the Record“. Die Übergänge werden mit `cubic-bezier()` zeitlich abgestimmt.

- **ChatGPT:** Unterstützung bei der responsiven Umsetzung der neuen Albuminteraktionen. Auf Desktop wird der vorhandene Detailseiten-Link mithilfe von CSS Grid (`grid-column`, `grid-row`) und `z-index` über dem Albumcover positioniert. Auf Mobile bleibt derselbe Link dauerhaft unter dem Albumtitel und den Metadaten sichtbar. Für die Desktop-Interaktion werden Media Queries mit `hover: hover` und `pointer: fine` verwendet. Durch `:focus-within` ist das Reveal außerdem über die Tastaturnavigation erreichbar.

- **ChatGPT:** Überarbeitung der visuellen Gestaltung der Record Cards. Die Albencover erhielten ein einheitliches quadratisches Seitenverhältnis mit `aspect-ratio: 1 / 1`, `object-fit: cover`, dezente Schatten und abgerundete Bildrahmen. Die Karten wurden durch angepasste Hintergründe, Rahmen, Typografie und Abstände stärker an das Editorial-Design der Homepage angeglichen. Mithilfe von `align-items: stretch` im CSS-Grid wurden unterschiedliche Kartenhöhen auf Desktop ausgeglichen.

- **ChatGPT:** Gestalterische Aufwertung der Kategorie-Filter. Die vorhandenen Buttons wurden in einer gemeinsamen, dezent abgesetzten Filterleiste zusammengefasst. Für aktive und inaktive Filter wurden unterschiedliche Hintergrund-, Rahmen- und Schattenwerte definiert. Die bereits vorhandenen `aria-pressed`-Attribute werden weiterhin zur Darstellung des ausgewählten Filters verwendet; die JavaScript-Filterlogik wurde nicht verändert.

- **ChatGPT:** Entwicklung eines einheitlichen warmweißen Hover-Glows für alle Albumkarten mit Detailseiten. Hierfür wurden die CSS-Variablen `--album-light` und `--album-light-soft` eingeführt. Die Lichtwirkung basiert auf der bereits vorhandenen cremeweißen Homepage-Farbe `#F3E8DA` und wird durch mehrere unterschiedlich große `box-shadow`-Effekte erzeugt.

- **ChatGPT:** Überarbeitung der Albumkarten mit einheitlichem quadratischem Bildformat (`aspect-ratio: 1 / 1`), angepassten Abständen, abgerundeten Bildrahmen, subtilen cremeweißen Konturen und mehrschichtigen `box-shadow`-Effekten. Die Originalcover bleiben der visuelle Mittelpunkt.

- **ChatGPT:** Entwicklung sanfter Hover- und Fokus-Effekte mit `transform`, `transition` und Schattenveränderungen. Normale Albumcover werden leicht vergrößert; bei Alben mit Detailseiten wird stattdessen der vollständige Bildrahmen skaliert, damit der Vergrößerungseffekt einheitlich wirkt.

- **ChatGPT:** Weiterentwicklung der interaktiven Detailseiten-Karten für „THIS MUSIC MAY CONTAIN HOPE.“ und „Paracosm“. Auf geeigneten Desktopgeräten erscheinen beim Hover ein abgedunkeltes Bild-Overlay, die Beschriftung „Inside the Record“ und ein Link zur jeweiligen Albumdetailseite. Auf Mobile bleibt der Detailseiten-Link unterhalb des Covers zugänglich.

- **ChatGPT:** Umsetzung einer horizontal durchstöberbaren Albumgalerie auf Mobile mit CSS Grid, `grid-auto-flow: column`, `overflow-x: auto`, `scroll-snap-type` und `scroll-snap-align`. Das nächste Album bleibt teilweise sichtbar, um die horizontale Navigation anzudeuten. Auf Desktop werden die Veröffentlichungen weiterhin in einem zweispaltigen beziehungsweise dreispaltigen Grid dargestellt.

- **ChatGPT:** Berücksichtigung von Tastaturbedienung, ausreichenden Button-Klickflächen und `prefers-reduced-motion`, damit die wesentlichen Inhalte und Links auch ohne Animationen zugänglich bleiben.

### Weiterentwicklung der RAYE-Albumdetailseite

### Weiterentwicklung der Hero-Section

- **ChatGPT:** Entwicklung einer atmosphärischen Wolkenkulisse auf Basis des bereits vorhandenen Albumcovers. Das Cover wird zusätzlich als weichgezeichnetes Hintergrundbild eingebunden und mit mehreren Farb- und Lichtverläufen kombiniert. Das eigentliche Albumcover bleibt im Vordergrund scharf sichtbar und erhält durch dezente Rahmen und mehrschichtige Schatten einen schwebenden Effekt.

- **ChatGPT:** Unterstützung bei der Überarbeitung der HTML-Struktur. Die umfangreiche Faktenliste wurde aus dem ursprünglichen Hero in eine eigene Section „The record at a glance“ unterhalb des Albumcovers verschoben. Die Fakten und der bereits vorhandene deaktivierte Speicherbutton blieben dabei erhalten. Ergänzend wurden ein kurzer Einführungstext sowie zwei Links zu Spotify und zur bestehenden Tracklist eingefügt.

- **ChatGPT:** Umsetzung eines responsiven Hero-Layouts mithilfe von CSS Grid. Auf Desktop stehen der großformatige Albumtitel und die Aktionsbuttons links neben dem Albumcover. Auf Mobile werden die Inhalte in der Reihenfolge Text, Albumcover und darunter zentrierte Buttons angeordnet.

- **ChatGPT:** Unterstützung bei der Entwicklung eines durchgehenden Hintergrundbereichs mit `.raye-atmosphere`, der den Header, den Hero und die Albumfakten umfasst. Die Hintergrundfotografie wurde durch Transparenzmasken und Verläufe so angepasst, dass sie ohne harte Bildkanten nach unten in die bestehende Bordeaux-Farbwelt übergeht. Dabei wurden unterschiedliche Positionierungen, Unschärfegrade und Fade-out-Verläufe ausprobiert.

  **Neue HTML- und CSS-Techniken:**
  - `grid-template-areas` und `grid-area`, um die Positionen von Text, Cover und Buttons für Mobile und Desktop gezielt festzulegen.
  - `::before` und `::after`, um dekorative Bild- und Lichtebenen ohne zusätzliche HTML-Bildelemente zu erzeugen.
  - `filter: blur()`, `brightness()` und `saturate()`, um das Albumcover als atmosphärischen Wolkenhintergrund darzustellen.
  - `mask-image: linear-gradient()` und `-webkit-mask-image`, um die Hintergrundfotografie weich auszublenden und sichtbare Bildkanten zu vermeiden.
  - `radial-gradient()` und `linear-gradient()` zur Kombination mehrerer Licht-, Farb- und Dunkelverläufe.
  - `position: relative`, `position: absolute`, `isolation: isolate` und `z-index`, um die Hintergrundebenen hinter den eigentlichen Seiteninhalten anzuordnen.
  - `box-shadow` mit mehreren Schattenebenen für eine räumliche Wirkung des Albumcovers.
  - `max-width`, `min()`, `clamp()` und Media Queries für die responsive Anpassung der Bildgrößen, Abstände und Faktenkarte.
  - HTML-Ankerlink mit `href="#seasons"` und `id="seasons"`, um ohne zusätzliches JavaScript direkt zur Tracklist zu navigieren.

### Weiterentwicklung der Story-Section

- **ChatGPT:** Unterstützung bei der Verbesserung der Lesetypografie. Die maximale Zeilenlänge wurde mit `max-width` und der CSS-Einheit `ch` begrenzt, die Zeilenhöhe angepasst und der Abstand zwischen den Absätzen vergrößert. Der erste Absatz erhielt eine etwas größere Schrift, um als redaktionelle Einführung hervorzustechen. Die Hauptgeschichte wurde von ihrem bisherigen Kartenhintergrund befreit, damit die Texte offener und weniger eingeengt wirken.

- **ChatGPT:** Gestalterische Hervorhebung eines bestehenden RAYE-Zitats als großes Editorial Pull Quote. Hierfür wurden die Serifenschrift, kursive Darstellung, die goldene Akzentfarbe und eine feine obere Trennlinie verwendet. Bereits vorhandene Album- und Songtitel wurden mit dem semantischen HTML-Element `<cite>` weiterhin kursiv und in der Akzentfarbe hervorgehoben.

- **ChatGPT:** Ergänzung kleiner Kapitelmarkierungen über den drei Überschriften und Anpassung der HTML-Struktur mit `aria-labelledby` und einer beschrifteten `<aside>`-Section. Die vorhandenen Story-Texte wurden dabei beibehalten. Die neuen CSS-Regeln wurden mit `.page-raye` auf RAYEs Detailseite begrenzt, damit andere Albumdetailseiten nicht unbeabsichtigt verändert werden.

  **Neue HTML- und CSS-Techniken:**
  - `grid-template-columns` mit `minmax()` und `fr` für eine asymmetrische, responsive Zweispaltenaufteilung.
  - `max-width` mit der Einheit `ch` zur Begrenzung der Zeilenlänge.
  - `clamp()` zur flexiblen Anpassung der Überschriften und Abstände.
  - `:first-of-type` und benachbarte Geschwisterselektoren wie `p + p` für die unterschiedliche Gestaltung von Einleitungs- und Folgeabsätzen.
  - `<blockquote>` für die semantische Auszeichnung eines Zitats und `<cite>` für Album- und Songtitel.
  - `aria-labelledby` und `<aside>` zur semantischen Strukturierung ergänzender Inhalte.
  - Kombinierte `linear-gradient()`-Hintergründe, dezente `box-shadow`-Effekte und transparente Rahmen für zurückhaltende Editorial-Panels.

### Weiterentwicklung der Tracklist-Section

- **ChatGPT:** Entwicklung eines gemeinsamen Designs für vier cineastische Jahreszeiten-Kapitel. Jede Jahreszeit erhielt eine eigene Farb- und Lichtstimmung: warme Bronze- und Terrakottatöne für Autumn, dunkle Blautöne für Winter, Rosé- und Bordeauxfarben für Spring sowie goldene und bernsteinfarbene Töne für Summer. Die individuellen Farben wurden über CSS Custom Properties definiert und innerhalb einer gemeinsamen `.season`-Regel verwendet.

  **Neue HTML- und CSS-Techniken:**
  - CSS Custom Properties wie `--season-light`, `--season-start` und `--season-end` zur Wiederverwendung eines gemeinsamen Layouts mit individuellen Farbwelten.
  - `radial-gradient()` und `linear-gradient()` zur Erzeugung unterschiedlicher Lichtstimmungen ohne zusätzliche Bilddateien.
  - `::before` für dekorative Lichtebenen innerhalb der Jahreszeiten-Karten.
  - CSS Grid zur Anordnung von Kapitelbeschreibung, Tracknummer, Songtitel, Gastmusikern und Laufzeiten.
  - `counter-reset`, `counter-increment` und `counter(..., decimal-leading-zero)` für die automatische, durchgehende Nummerierung der 17 Songs.
  - `font-variant-numeric: tabular-nums` für optisch gleich breite Ziffern bei den Laufzeiten.
  - `::after`, `:hover`, `:focus-within`, `opacity`, `transform` und `transition` für die Vorbereitung visueller Songinteraktionen.
  - `prefers-reduced-motion` zur Reduzierung der Animationen bei entsprechender Systemeinstellung.
  - `aria-labelledby` zur Verbindung der Jahreszeiten-Abschnitte mit ihren Überschriften.

### Weiterentwicklung der "Keep Going"-Section

- **ChatGPT:** Unterstützung bei der Übertragung der bereits entwickelten Farbwelten aus der „Meet the Artists“-Section der Homepage. Für Amma wurden warme Coffee- und Terrakottatöne verwendet, während Absolutely ihre charakteristische Farbwelt aus dunklem Kirschrot, Bordeaux und Schwarz erhielt. Die Creme- und Goldtöne der RAYE-Detailseite blieben für die Texte und Navigationselemente erhalten, um ein einheitliches Erscheinungsbild zu gewährleisten.

- **ChatGPT:** Umsetzung eines weichen Bildübergangs auf größeren Bildschirmen. Die Porträtbilder wurden rechts innerhalb der Karten positioniert und mithilfe von CSS-Maskierungen mit dem jeweiligen Hintergrundverlauf verbunden. Zusätzlich wurde über ein `::before`-Pseudoelement eine weichgezeichnete Version des Porträts als atmosphärische Hintergrundebene eingebunden. Auf kleineren Bildschirmen bleiben die Karten kompakt mit quadratischem Porträt, Text und Navigationspfeil.

- **ChatGPT:** Ergänzung dezenter Hover- und Fokuszustände für die vollständig verlinkten Karten. Durch kleine Verschiebungen mit `transform`, veränderte Rahmenfarben und mehrschichtige `box-shadow`-Effekte entsteht eine leicht schwebende Wirkung. Mithilfe von `prefers-reduced-motion` werden die Bewegungsanimationen für Nutzer\*innen mit entsprechender Systemeinstellung deaktiviert.

  **Neue HTML- und CSS-Techniken:**
  - CSS Grid mit `minmax()` und Media Queries zur responsiven Anordnung der Künstlerkarten.
  - CSS Custom Properties zur Definition unterschiedlicher Hintergrundverläufe innerhalb einer gemeinsamen Kartenstruktur.
  - Kombination von `radial-gradient()` und `linear-gradient()` zur Gestaltung mehrschichtiger Farbatmosphären.
  - `::before`-Pseudoelemente und `filter: blur()` zur Erzeugung weichgezeichneter Bildhintergründe.
  - `mask-image` und `-webkit-mask-image` zum weichen Überblenden der Porträtbilder in den Hintergrund.
  - `isolation: isolate` und `z-index` zur gezielten Anordnung der verschiedenen Bildebenen.
  - Mehrschichtige `box-shadow`-Effekte für eine dezente räumliche Wirkung der Karten.
  - `:hover`, `:focus-visible`, `transform` und `transition` für Maus- und Tastaturinteraktionen.
  - `prefers-reduced-motion` zur Berücksichtigung reduzierter Bewegung.

### Weiterentwicklung der Timeline-Section

- **ChatGPT:** Entwicklung einer visuellen Verbindung zwischen den beiden bereits vorhandenen Ereignissen „The long wait“ (2025) und „Her second Royal Albert Hall performance“ (2026). Die Ereignisse wurden um große Jahreszahlen, kleine Kapitelmarkierungen und eine goldene Verbindungslinie ergänzt. Die goldenen Punkte stehen als Markierungen für einzelne Momente in RAYEs musikalischer Laufbahn.

- **ChatGPT:** Umsetzung eines responsiven Timeline-Layouts mit CSS Grid. Auf Desktop werden die beiden Ereignisse nebeneinander unter einer horizontalen Linie dargestellt. Auf Mobile verläuft die Zeitachse vertikal, sodass die Ereignisse untereinander gelesen werden können. Die bestehende Farbwelt aus Bordeaux, Cremeweiß und Gold wurde beibehalten.

- **ChatGPT:** Unterstützung bei der semantischen Überarbeitung der HTML-Struktur. Die einzelnen Ereignisse werden weiterhin mit `<article>` ausgezeichnet. Die Jahreszahlen erhielten das HTML-Element `<time>` mit dem Attribut `datetime`. Zusätzlich wurde die Section mithilfe von `aria-labelledby` mit ihrer Überschrift verbunden.

  **Neue HTML- und CSS-Techniken:**
  - `<time>` mit `datetime` für die semantische Auszeichnung von Jahreszahlen.
  - CSS Grid mit `repeat()` und `minmax()` zur responsiven Anordnung der Timeline-Ereignisse.
  - `::before`-Pseudoelemente zur Darstellung der Verbindungslinie und der goldenen Ereignispunkte.
  - `position: relative` und `position: absolute` zur genauen Positionierung der Timeline-Elemente.
  - `linear-gradient()` zur Gestaltung einer weich auslaufenden Verbindungslinie und dezenter Kartenhintergründe.
  - `box-shadow` für die Lichtwirkung der goldenen Punkte und die räumliche Tiefe der Ereigniskarten.
  - Media Queries zur Umstellung zwischen horizontaler und vertikaler Zeitachse.
  - `font-variant-numeric: tabular-nums` zur einheitlichen Darstellung der Jahreszahlen.
  - `aria-labelledby` für die semantische Verbindung von Section und Überschrift.

### Weiterentwicklung der Absolutely-Farbwelt und Bereinigung gemeinsamer Albumdetailseiten-Styles

- **ChatGPT:** Unterstützung bei der erneuten gestalterischen Abstimmung von Absolutelys Farbwelt auf Grundlage meiner ausgewählten Referenzbilder. Die zunächst verwendete Rot-Schwarz-Palette und anschließend ergänzte blaue Farbkomponente wurden überarbeitet, da Absolutelys künstlerische Welt stärker von warmen Rot- und Orangetönen sowie sehr dunklem Aubergine-Lila geprägt sein soll.

- **ChatGPT:** Entwicklung eines neuen, mehrschichtigen Hintergrundverlaufs mit warmem Rot-Orange, dunklem Violett und fast schwarzem Aubergine. Hierfür wurde die gemeinsame CSS Custom Property `--absolutely-stage` im `:root`-Bereich eingeführt. Diese wird sowohl für die große Absolutely-Karte in der „Meet the Artists“-Section als auch für die Absolutely-Vorschau in RAYEs „Keep Going“-Section wiederverwendet.

- **ChatGPT:** Unterstützung bei der Anpassung der Bildhintergründe und weichen Überblendungen von Absolutelys Porträt. Die zuvor eingeführten bläulichen Hintergrundfarben wurden durch Aubergine- und Rottöne ersetzt. Die Bildkanten werden weiterhin mithilfe von Farbverläufen, CSS-Maskierungen und weichgezeichneten Bildebenen in die Hintergrundatmosphäre eingebettet.

- **ChatGPT:** Anpassung der zentralen Farbvariablen für Absolutelys Albumdetailseite. Die Klasse `.page-absolutely` erhielt passende Werte für Seitenhintergrund, Kartenflächen, Überschriften, Fließtext, Rahmen, Akzentfarben und Buttons. Als Hauptakzent wurde ein warmes Kupferorange gewählt. Bestehende einzelne Rahmen- und Hover-Farben wurden an die neue Palette angeglichen.

### Weiterentwicklung der Absolutely-Albumdetailseite

- **ChatGPT:** Entwicklung einer eigenständigen, cinematischen Tracklist-Bühne mit einer zweigeteilten Desktop-Gestaltung. Links befindet sich die große redaktionelle Einführung „Every track, another door.“, während rechts sämtliche Songs innerhalb einer dunklen, kontrastreichen Liste dargestellt werden. Auf mobilen Bildschirmen werden beide Bereiche untereinander angeordnet.

- **ChatGPT:** Unterstützung bei der Vereinheitlichung der Hover-Animationen beider Albumdetailseiten. Beim Überfahren einer Songzeile verschieben sich die gesamte Zeile und der Songtitel leicht nach rechts, die Laufzeit wird deutlicher sichtbar und ein kleines Symbol erscheint. Während Absolutely einen ausgefüllten kupferfarbenen Stern verwendet, erhält RAYE einen goldenen Umrissstern. Die Zeilen bleiben zunächst nicht anklickbar, da noch keine eigenen Songdetailseiten existieren.

- **ChatGPT:** Unterstützung bei der gestalterischen Verfeinerung von RAYEs Four-Seasons-Tracklist auf Basis von Absolutelys Tracklist-Design. Die Songlisten innerhalb der vier Jahreszeiten wurden durch dunklere, farblich abgestimmte Innenflächen ergänzt. Für Autumn, Winter, Spring und Summer wurden individuelle Farbverläufe und Hover-Hintergründe definiert, um die unterschiedlichen musikalischen Stimmungen stärker hervorzuheben.

- **ChatGPT:** Unterstützung bei der Bereinigung gemeinsamer CSS-Regeln und der Korrektur fehlerhafter Klassenselektoren. Die Gestaltung von Keep Going wurde für beide Albumdetailseiten vereinheitlicht, ohne die individuellen Künstlerfarben aufzugeben. Hierfür wurden unter anderem die seitenspezifischen Klassen `.page-raye` und `.page-absolutely` über `:is()` zusammengefasst.

  **Neue HTML- und CSS-Techniken:**
  - CSS Grid mit `minmax()` zur responsiven Aufteilung der Paracosm-Tracklist.
  - CSS Counters mit `counter-reset`, `counter-increment` und `decimal-leading-zero` zur automatischen Tracknummerierung.
  - Kombination mehrerer `radial-gradient()`- und `linear-gradient()`-Ebenen für atmosphärische Hintergrundflächen.
  - CSS Custom Properties zur Definition und Wiederverwendung individueller Jahreszeiten- und Künstlerfarben.
  - `transform`, `transition` und Pseudoelemente für sanfte Hover-Animationen.
  - `:is()` zur gemeinsamen Gestaltung wiederverwendeter Komponenten auf mehreren Albumdetailseiten.
  - Seitenspezifische CSS-Selektoren zur Anpassung einzelner Farbwelten ohne Duplikation der gesamten Layoutregeln.
  - Responsive Media Queries zur horizontalen und vertikalen Anordnung der Timeline.
  - `clamp()` und Viewport-Einheiten zur Anpassung der Albumüberschrift an unterschiedliche Bildschirmbreiten.
  - `prefers-reduced-motion` zur Deaktivierung von Bewegungsanimationen bei entsprechender Systemeinstellung.
  - Wiederverwendung der bereits bei RAYE dokumentierten Bildmaskierungs-, Blur- und Editorial-Layout-Techniken.

### Weiterentwicklung der Contact Page & Coming Soon Pages

- **ChatGPT:** Unterstützung bei der vollständigen gestalterischen Überarbeitung der Contact-Seite. Die ursprüngliche einfache Seitenstruktur wurde in ein responsives Editorial-Layout übertragen. Auf großen Bildschirmen stehen die Einleitung „Leave a Note.“ und das Formular nebeneinander, während beide Bereiche auf mobilen Geräten untereinander dargestellt werden. Die vorhandenen vier Formularfelder und ihre Inhalte wurden beibehalten.

- **ChatGPT:** Unterstützung bei der Konzeption und Gestaltung der Coming-Soon-Seiten als eigenständiges cinematisches Seitenerlebnis. Anstelle eines gewöhnlichen Platzhalters wurde das Motiv eines stillstehenden Schallplattenspielers gewählt. Der angehobene Tonarm und die ruhende Schallplatte symbolisieren, dass ein weiterer musikalischer Abschnitt der Website noch nicht verfügbar ist.

- **ChatGPT:** Unterstützung bei der Generierung und Einbindung zweier atmosphärischer Hintergrundbilder für Desktop und Mobile. Die Bildvarianten wurden an unterschiedliche Bildschirmformate angepasst und als PNG-Dateien eingebunden. Die Bilder werden über CSS als dekorative Hintergrundflächen verwendet; eine zusätzliche HTML-Bildstruktur oder JavaScript-Animation ist dafür nicht erforderlich.

  **Neue HTML- und CSS-Techniken:**
  - Responsive CSS-Grid-Layouts für die zweispaltige Contact-Seite und die Anordnung der Formularfelder.
  - Kombination mehrerer `radial-gradient()`- und `linear-gradient()`-Ebenen für atmosphärische Seitenhintergründe.
  - Verwendung von `max-width`, `minmax()` und Media Queries zur Anpassung an verschiedene Bildschirmgrößen.
  - `background-image`, `background-size: cover` und `background-position` zur responsiven Darstellung unterschiedlicher Desktop- und Mobile-Hintergrundbilder.
  - `min-height` mit `svh`-Einheiten zur Gestaltung einer möglichst bildschirmfüllenden Coming-Soon-Bühne.
  - Seitenspezifische CSS-Klassen wie `.page-contact` und `.page-coming-soon`, um unterschiedliche Gestaltungswelten unabhängig voneinander zu definieren.
  - `:focus-visible` zur visuellen Kennzeichnung fokussierter Formularelemente bei der Tastaturnavigation.
  - `aria-labelledby` und `aria-describedby` zur semantischen Zuordnung von Überschriften und ergänzenden Beschreibungen.
  - Wiederverwendung bestehender Navigationselemente, Buttons, Typografie und CSS-Farbvariablen zur Sicherstellung eines konsistenten Gesamtdesigns.

### Weiterentwicklung der responsiven Editorial-Layouts (Iteration 2)

- **ChatGPT:** Unterstützung bei einer zweiten Layoutiteration der bestehenden Homepage und Albumdetailseiten. Ziel war es, die bisher relativ schmalen Inhaltsbereiche auf großen Desktop-Bildschirmen großzügiger zu gestalten und den vorhandenen Platz besser zu nutzen. Die ursprüngliche Mobile-First-Struktur und das visuelle Design sollten dabei unverändert bleiben.

- **ChatGPT:** Einführung der zentralen CSS Custom Properties `--layout-stage` und `--layout-gutter` in `:root`. Mit einer maximalen Inhaltsbreite von `92rem` und responsiven Seitenabständen werden die Homepage-Abschnitte „Meet the Artists“, „How to Explore“ und „Explore the Records“ auf großen Bildschirmen breiter dargestellt. Auch Header und Footer wurden an dieser gemeinsamen Inhaltsbreite ausgerichtet.

- **ChatGPT:** Unterstützung bei der Vereinheitlichung der horizontalen Inhaltsausrichtung auf den beiden Albumdetailseiten. Mithilfe der neuen Variable `--album-stage-inset` wurden Album-Hero, Faktenkarte, Story und Tracklists an einer gemeinsamen linken Inhaltsachse ausgerichtet. Gleichzeitig erhielten die Hauptgeschichte und die ergänzenden Kapitel „Why It Matters“ und „The Sound“ einen großzügigeren Spaltenabstand.

- **ChatGPT:** Anpassung der Abschnitte „Keep Going“, „Sources“ und der Timeline, damit diese innerhalb der breiteren Editorial-Bühne wieder symmetrisch angeordnet sind. Hierfür wurden die verfügbare Breite und die seitlichen Abstände mithilfe von `calc()` und der gemeinsamen Layoutvariable berechnet. Zuvor wirkten einige Abschnitte auf großen Desktop-Bildschirmen zu stark linksbündig.

- **ChatGPT:** Unterstützung bei der weiteren gestalterischen Verfeinerung von RAYEs „Four Seasons“-Tracklist. Die bereits vorhandenen individuellen Jahreszeitenfarben wurden um die CSS-Variablen `--season-title` und `--season-glow` ergänzt. Dadurch erhalten Autumn, Winter, Spring und Summer jeweils eine eigene Überschriftenfarbe und einen dezenten farblich abgestimmten Lichtschein, ohne dass die gemeinsame Kartenstruktur verändert werden musste.

- **ChatGPT:** Feinabstimmung des responsiven Layouts durch kleinere Anpassungen am oberen Abstand der Coming-Soon-Seiten und an der Position der Carousel-Navigationspfeile auf mittleren Desktop-Bildschirmen. Die Pfeile bleiben dadurch auch bei Bildschirmbreiten zwischen `1280px` und `1599px` innerhalb des sichtbaren Bereichs.

  **Neue beziehungsweise weiterführende CSS-Techniken:**
  - `--layout-stage` und `--layout-gutter` als zentral verwaltete Custom Properties für eine wiederverwendbare Inhaltsbreite und responsive Seitenabstände.
  - Kombination von `max()`, `calc()` und `var()`, um den linken Seitenabstand abhängig von der Bildschirmbreite und der maximalen Editorial-Bühne zu berechnen.
  - `padding-inline` und `margin-inline` zur gemeinsamen Steuerung horizontaler Abstände ohne getrennte `left`- und `right`-Eigenschaften.
  - `:is(.page-raye, .page-absolutely)` zur gemeinsamen Anwendung von Layoutregeln auf beide Albumdetailseiten, während die seitenspezifischen Farbwelten erhalten bleiben.
  - Wiederverwendung eines gemeinsamen Tracklist-Designs mit individuellen CSS Custom Properties für die Überschriftenfarben und atmosphärischen Lichtreflexe der vier Jahreszeiten.
  - Kombinierte Media Queries mit `min-width` und `max-width`, um die Carousel-Navigation nur innerhalb eines bestimmten Desktop-Breitenbereichs anzupassen.

### Abschließendes CSS-Refactoring – Zentralisierung der Design-Variablen

- **ChatGPT:** Unterstützung bei der systematischen Überprüfung der bestehenden `style.css` hinsichtlich wiederkehrender Farbverläufe, Layoutbreiten, Rundungen und weiterer fest definierter CSS-Werte. Ziel war es, die Wartbarkeit und Wiederverwendbarkeit des bestehenden Designs zu verbessern, ohne die visuelle Gestaltung der Website zu verändern.

- **ChatGPT:** Zentralisierung der bisher mehrfach definierten Farbverläufe von RAYE und Amma. Die neuen CSS Custom Properties `--raye-stage` und `--amma-stage` wurden gemeinsam mit der bereits vorhandenen Variable `--absolutely-stage` im `:root`-Bereich definiert. Die jeweiligen Artist-Karten in „Meet the Artists“ und „Keep Going“ greifen nun auf dieselben Hintergrundvariablen zurück. Dadurch bleiben die Farbwelten konsistent und können künftig an einer zentralen Stelle angepasst werden.

- **ChatGPT:** Einführung der gemeinsamen Layoutvariablen `--layout-content` (`70rem`) und `--layout-facts` (`48rem`). Wiederkehrende `max-width`-Angaben wurden durch `var()`-Referenzen ersetzt. Ergänzend wurden auch die entsprechenden Berechnungen mit `calc()` und `min()` angepasst. Die bereits in der zweiten Layoutiteration eingeführten Variablen `--layout-stage` und `--layout-gutter` blieben erhalten, sodass normale Inhaltsbereiche und breitere Desktop-Bühnen weiterhin unterschiedliche Aufgaben erfüllen.

- **ChatGPT:** Unterstützung bei der Vereinheitlichung wiederkehrender Kartenrundungen. Hierfür wurden die Variablen `--radius-full`, `--radius-card` und `--radius-panel` ergänzt. Sie werden für vollständig gerundete Bedienelemente, normale Karten und größere Informationspanels verwendet. Individuelle Rundungen, die eine besondere gestalterische Funktion erfüllen, wurden bewusst beibehalten.

- **ChatGPT:** Überprüfung der seitenspezifischen Farbvariablen und individuellen CSS-Werte. Die bestehenden Theme-Overrides in `.page-raye` und `.page-absolutely` sowie die lokalen Variablen der vier Jahreszeiten wurden unverändert beibehalten. Auch spezielle Schatten, Abstände und Grid-Verhältnisse wurden nicht pauschal zentralisiert, da diese unterschiedliche gestalterische Funktionen erfüllen.

- **ChatGPT:** Technische Überprüfung der vorgenommenen Refactoring-Änderungen durch Vergleich mit dem vorherigen CSS-Stand. Dabei wurde kontrolliert, ob die ursprünglichen Deklarationswerte nach Auflösung der neuen Variablen erhalten bleiben. Zusätzlich wurden ausgewählte berechnete CSS-Eigenschaften auf verschiedenen Bildschirmbreiten verglichen, um unbeabsichtigte Layoutveränderungen auszuschließen.

  **Neue beziehungsweise weiterführende CSS-Techniken:**
  - Zentralisierte Design-Tokens für wiederkehrende Farbverläufe, Inhaltsbreiten und Kartenrundungen innerhalb von `:root`.
  - Wiederverwendung mehrschichtiger Hintergrundverläufe durch `background: var(--raye-stage)` beziehungsweise `background: var(--amma-stage)`, anstatt identische Gradient-Definitionen mehrfach zu schreiben.
  - Verwendung von `var()` innerhalb der CSS-Funktionen `calc()` und `min()`, sodass auch berechnete Breiten auf zentralen Layoutvariablen basieren.
  - Unterscheidung zwischen globalen Designvariablen und lokalen Custom Properties zur Beibehaltung individueller Künstlerinnen- und Jahreszeitenfarben.
  - Bewusster Verzicht auf die Zentralisierung komponentenspezifischer Werte, um unnötige Abhängigkeiten und eine übermäßig komplexe Variablenstruktur zu vermeiden.

### Abschließendes CSS-Refactoring – Struktur und Redundanzen

- **ChatGPT:** Unterstützung bei der systematischen Überprüfung der bestehenden `style.css` hinsichtlich ihrer Struktur, wiederholter Deklarationen und möglicher Überschreibungen. Hierfür wurden die globalen Grundlagen, Header, Homepage, Albumdetailseiten, Contact, Coming Soon und die responsiven Anpassungen einzeln untersucht. Ziel war es, die Wartbarkeit und Übersichtlichkeit des Stylesheets zu verbessern, ohne weitere gestalterische Änderungen vorzunehmen.

- **ChatGPT:** Unterstützung bei der Zusammenfassung identischer CSS-Regeln der beiden Albumdetailseiten. Gemeinsame Eigenschaften der Cinematic Album-Heroes, Album-Faktenkarten, Story-Typografie, Zitate und ergänzenden Kapitel wurden in wiederverwendbare Regelblöcke übertragen. Mithilfe von `:is(.page-raye, .page-absolutely)` beziehungsweise spezifischen kombinierten Selektoren können beide Seiten dieselben Layoutregeln verwenden. Individuelle Albumtitel, Cover-Schatten, Hintergrundverläufe, Rahmenfarben und Künstlerinnen-Themes blieben als seitenspezifische Anpassungen erhalten.

- **ChatGPT:** Unterstützung bei der Bereinigung veralteter und redundanter CSS-Regeln. Dazu gehörten frühere Desktop-Definitionen, die durch das überarbeitete Layout nicht mehr wirksam waren, sowie Selektoren der ursprünglichen Timeline-Struktur. Nach der Weiterentwicklung der HTML-Timeline lagen die Ereigniskarten innerhalb von `.timeline-neighbors__path`, sodass die bisherigen Regeln für direkt untergeordnete `<article>`-Elemente nicht mehr benötigt wurden. Zusätzlich wurden doppelte Selektoren bei Albumcovern, Tracklists und einzelnen Layoutkomponenten zusammengeführt.

- **ChatGPT:** Unterstützung bei der Unterscheidung zwischen unbeabsichtigten Duplikaten und bewusst eingesetzten CSS-Überschreibungen. Die allgemeinen Komponentenregeln wurden als gemeinsame Grundlage beibehalten, während spezifischere Selektoren gezielt individuelle Eigenschaften ergänzen oder ersetzen. Besonders die lokalen Farbvariablen, atmosphärischen Hintergrundebenen und die breiten Editorial-Anpassungen ab `1280px` sollten ihre bisherige Wirkung behalten.

- **ChatGPT:** Unterstützung bei der Neuordnung der CSS-Hauptabschnitte. Die übergreifenden Responsive-Regeln für Header, Homepage und Footer wurden unmittelbar hinter den Footer verschoben. Die Contact- und Coming-Soon-Bereiche wurden getrennt und in eine nachvollziehbare Reihenfolge gebracht. Gemeinsame Album- und Keep-Going-Komponenten erhielten passendere Abschnittsüberschriften. Die breiten Editorial-Regeln blieben bewusst am Ende des Stylesheets, damit ihre vorgesehenen Überschreibungen durch die CSS-Kaskade erhalten bleiben.

- **ChatGPT:** Überprüfung der vorhandenen Media Queries und ihrer jeweiligen Funktionen. Die Mobile-First-Grundregeln bilden weiterhin die Basis, während mittlere Bildschirmgrößen komponentenabhängige Layoutwechsel ermöglichen. Ab `1280px` werden die großzügigeren Editorial-Breiten angewendet. Separate Abfragen für `hover`, `pointer` und `prefers-reduced-motion` blieben erhalten. Die Anzahl der Media-Query-Blöcke wurde nicht künstlich auf drei reduziert, da die verschiedenen Komponenten unterschiedliche sinnvolle Breakpoints benötigen.

  **Neue beziehungsweise weiterführende CSS-Techniken und Prinzipien:**
  - Einsatz von `:is()` zur gemeinsamen Gestaltung identischer Komponenten auf unterschiedlichen Seiten, unter Berücksichtigung der Selektorspezifität.
  - Trennung zwischen allgemeinen Komponentenregeln und seitenspezifischen Overrides, um gemeinsame Layoutstrukturen und individuelle Farbwelten unabhängig voneinander zu pflegen.
  - Gezielte Anwendung der CSS-Kaskade: Reihenfolge, Spezifität und Vererbung bestimmen, welche Deklarationen wirksam sind.
  - Entfernung nicht mehr passender Selektoren nach Abgleich mit der aktuellen HTML-Struktur.
  - Wiederverwendung vorhandener Grundregeln anstelle mehrfacher Definitionen identischer Eigenschaften.
  - Organisation responsiver Layoutregeln nach ihren funktionalen Aufgaben statt nach einer möglichst geringen Anzahl von Media Queries.

  ### Vereinheitlichung und fachliche Überprüfung der CSS-Kommentare

- **ChatGPT:** Unterstützung bei der systematischen Überprüfung und Vereinheitlichung sämtlicher Kommentare in der bestehenden `style.css`. Hierfür wurden die globalen Designvariablen, Header, Homepage, Albumdetailseiten, Contact, Coming Soon und die responsiven Anpassungen erneut Abschnitt für Abschnitt durchgegangen. Ziel war es, den bereits funktionierenden CSS-Code verständlicher und leichter nachvollziehbar zu dokumentieren, ohne die Gestaltung oder technische Funktionsweise zu verändern.

- **ChatGPT:** Unterstützung bei der Strukturierung des Stylesheets in 24 nummerierte, thematisch zusammenhängende Bereiche. Hierfür wurden benannte `#region`- und `#endregion`-Kommentare ergänzt, die in Visual Studio Code das gezielte Navigieren und Einklappen größerer Codeabschnitte ermöglichen. Die vorhandenen guten Kommentare wurden beibehalten; uneinheitliche englische und deutsche Erklärungen wurden sprachlich vereinheitlicht.

- **ChatGPT:** Ergänzung verständlicher deutscher Lernkommentare beim ersten relevanten Einsatz wichtiger CSS-Eigenschaften, Selektoren, Funktionen und Variablen. Insbesondere wurde zwischen fest definierten CSS-Eigenschaften und selbst definierten CSS Custom Properties unterschieden. Die Kommentare erklären unter anderem die Bedeutung globaler Variablen in `:root`, lokaler Theme-Overrides und komponentenspezifischer Variablen für Künstlerinnenporträts, Album-Atmosphären und Jahreszeiten. Bei späteren Wiederverwendungen wurden die Erklärungen bewusst nicht wiederholt.

- **ChatGPT:** Fachliche Überprüfung und Korrektur ungenauer oder veralteter Kommentare. Dabei wurde beispielsweise der Unterschied zwischen `cursor: pointer` und tatsächlichen Hover-Effekten verdeutlicht. Außerdem wurden rein dekorative Tracklist-Symbole korrekt als solche beschrieben, da die zugehörigen Songs aktuell noch keine eigenen Detailseiten besitzen. Die Erklärungen zum Contact-Formular wurden an den aktiven Submit-Button und die noch fehlende serverseitige Verarbeitung angepasst.

- **ChatGPT:** Unterstützung beim Verständnis komplexerer CSS-Techniken anhand des vorhandenen Codes. Dazu gehören die CSS-Kaskade, Selektorspezifität, Flexbox und Grid, benannte Grid-Bereiche, Pseudoelemente, Bildmasken, Transformationen, Animationen, CSS-Counter, responsive Media Queries sowie Zustände für Hover, Tastaturfokus und reduzierte Bewegung. Die Erläuterungen wurden an den jeweils passenden Stellen ergänzt, ohne die bestehenden CSS-Deklarationen zu verändern.

### Vereinheitlichung und fachliche Überprüfung der HTML-Kommentare

- **ChatGPT:** Unterstützung bei der Überprüfung und Kommentierung aller neun HTML-Dateien der statischen Website. Die umfangreicheren Seiten erhielten nummerierte Abschnittsmarkierungen für Header, Hero, Künstlerinnen-Carousel, Albuminformationen, Story, Tracklists, Keep Going, Quellen und Timeline. Die kleineren Coming-Soon-Seiten wurden zurückhaltender kommentiert, um unnötige Wiederholungen zu vermeiden.

- **ChatGPT:** Ergänzung kurzer deutscher Erklärungen zu wichtigen semantischen HTML-Elementen und Attributen. Dazu gehören unter anderem `<header>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<nav>`, `<ol>`, `<dl>`, `<dt>`, `<dd>`, `<details>`, `<summary>` sowie die Verknüpfung von Formularfeldern mit `<label>`. Die Kommentare erläutern, warum diese Elemente verwendet werden und wie sie zur sinnvollen Strukturierung der Website beitragen.

- **ChatGPT:** Unterstützung beim Verständnis der Barrierefreiheitsattribute `aria-labelledby`, `aria-hidden`, `aria-pressed` und `aria-live`. Zusätzlich wurde die Verbindung zwischen HTML und JavaScript dokumentiert, insbesondere die Bedeutung der `data-*`-Attribute im Records-Filter und Artist-Carousel. Auch das `defer`-Attribut der eingebundenen JavaScript-Dateien wurde präziser erklärt.

### Vereinheitlichung der JavaScript-Kommentare und Verständnis der Programmabläufe

- **ChatGPT:** Unterstützung bei der vollständigen Kommentierung und schrittweisen Erklärung der beiden JavaScript-Dateien `app.js` und `artist-carousel.js`. Die Dateien wurden durch nummerierte `#region`-Bereiche übersichtlicher gegliedert. Ergänzt wurden deutsche Kommentare, die wichtige Variablen, Funktionen, Bedingungen und Ereignisbehandlungen direkt an ihrer Verwendung erklären.

- **ChatGPT:** Unterstützung beim Verständnis der Filterlogik in `app.js`. Hierbei wurden die DOM-Auswahl mit `querySelectorAll()`, die Verarbeitung von NodeLists mit `forEach()`, das Registrieren von Klickereignissen durch `addEventListener()`, das Auslesen von `data-filter` und `data-category` über `dataset`, die logischen Operatoren sowie die Sichtbarkeit der Albumgruppen mit `hidden` erläutert. Zusätzlich wurde erklärt, wie `aria-pressed` den ausgewählten Filter kennzeichnet.

- **ChatGPT:** Unterstützung bei der Erklärung des Künstlerinnen-Carousels in `artist-carousel.js`. Die Kommentare behandeln die sofort ausgeführte Funktion zur Begrenzung des Variablenbereichs, die Auswahl und Prüfung benötigter DOM-Elemente sowie den zyklischen Kartenwechsel durch den Modulo-Operator `%`. Außerdem wurden die Zustandsverwaltung durch `classList.toggle()`, die Verwendung von `inert` und `aria-hidden`, die Aktualisierung der Navigationspunkte und des Zählers sowie die Screenreader-Ansage über eine Live-Region erklärt.

- **ChatGPT:** Unterstützung beim Verständnis der verschiedenen Bedienmöglichkeiten des Carousels. Dazu gehören Klickereignisse für Navigationspfeile und Punkte, die Tastatursteuerung mit den Pfeiltasten, `event.preventDefault()`, das gezielte Setzen des Tastaturfokus mit `.focus()` sowie die Erkennung horizontaler Wischgesten über Touch-Events. Die Kommentare erklären insbesondere, wie horizontale Gesten von vertikalem Scrollen unterschieden werden.

- **ChatGPT:** Korrektur einzelner unzutreffender JavaScript-Kommentare, beispielsweise zur Bedeutung von `dataset.filter`, zur Referenzgleichheit mit `===` und zur Aktivierung des Carousels erst nach der Initialisierung. Die vorhandene Programmlogik, Funktionsnamen, Variablen und Ereignisbehandlungen wurden dabei nicht verändert.

  **Vertiefte HTML-, CSS- und JavaScript-Konzepte:**
  - Unterschied zwischen CSS-Eigenschaften, globalen Custom Properties und lokal überschriebenen Variablen sowie deren Verwendung mit `var()`.
  - CSS-Kaskade, Selektorspezifität, Vererbung und bewusste Überschreibungen zur Wiederverwendung gemeinsamer Komponenten.
  - CSS Grid und Flexbox, Pseudoelemente, Maskierungen, Animationen und CSS-Counter im Zusammenhang mit dem vorhandenen Layout.
  - Semantisches HTML sowie Barrierefreiheitsattribute zur verständlichen Strukturierung und Bedienbarkeit von Inhalten.
  - DOM-Zugriffe, Event Listener, Arrays, Bedingungen, logische Operatoren und Zustandsänderungen im JavaScript-Code.
  - Verbindung von HTML, CSS und JavaScript durch Klassen, `data-*`-Attribute und ARIA-Zustände.
  - Einsatz verständlicher Codekommentare und benannter VS-Code-Regionen als Unterstützung beim Lernen, Debuggen und späteren Weiterentwickeln der Website.
  </details>

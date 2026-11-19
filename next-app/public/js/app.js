
// #region 00 · REFLEXION MA2 TEIL 4E
// Warum wird JavaScript im public/-Ordner nicht zu TypeScript?
// Dateien im public/-Ordner sind unsere statischen Dateien aus static-site und werden von Next.js als solche unverändert
// an Browser geliefert & nicht durch TypeScript-Kompilierung verarbeitet.

// => Typescript zu JavaScript kompiliert, aber JavaScript wird nicht automatisch zu TypeScript umgewandelt.
// Deshalb bleibt app.js eine JavaScript-Datei, die der Browser direkt ausführen kann.
// #endregion


// #region 01 · RECORDS-FILTER: HTML-ELEMENTE FINDEN
// querySelectorAll liefert alle passenden Elemente als NodeList.
// Die CSS-Klassen und data-Attribute stammen aus index.html.
const filterButtons = document.querySelectorAll(".filter-chip");

// [data-category] wählt nur Albumgruppen, denen eine Kategorie zugewiesen ist.
const recordGroups = document.querySelectorAll(".record-group[data-category]");

// #endregion

// #region 02 · RECORDS-FILTER: KLICK UND SICHTBARKEIT
// forEach geht alle Filterbuttons durch; addEventListener reagiert erst beim Klick.
filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
        // dataset.filter liest den Wert aus data-filter, ohne etwas in der Konsole auszugeben.
        const selectedCategory = button.dataset.filter;
        const filteredRecords = filterRecordsByCategory(selectedCategory); // nach Auswahl von Nutzer filtern

        if (filteredRecords.length > 0) {
            emptyMessage.hidden = true;
        } else {
            emptyMessage.hidden = false;
        }
    
        recordGroups.forEach((group) => {
            // Jede Albumgruppe besitzt data-category (raye, amma oder absolutely).
            const category = group.dataset.category;
            const groupRecords = filteredRecords.filter((record) => record.category === category); // ausgewählte Records dem richtigen Künstlercontainer zuordnen

            const grid = group.querySelector(".record-grid");
            renderRecords(groupRecords, grid);

            const shouldShow = 
            selectedCategory === "all" || category === selectedCategory; // || heißt ODER: Alle oder die passende Künstlerin anzeigen.

            // ! kehrt den Boolean um: Eine passende Gruppe erhält hidden=false.
            group.hidden = !shouldShow;
        });

        // Danach den gewählten Zustand aller Filterbuttons für CSS und Screenreader aktualisieren.
        filterButtons.forEach((filterButton) => {
            // === vergleicht hier, ob beide Variablen dasselbe Button-Element referenzieren.
            const isActive = filterButton === button;

            // aria-pressed kennzeichnet den aktiven Filter; String erzeugt "true" oder "false".
            filterButton.setAttribute("aria-pressed", String(isActive));
        })
    });
});

// #endregion

// #region 03 · RECORDS VON DER API LADEN

let records = [];

async function loadRecordsFromApi() {
    const response = await fetch("/api/records"); // mit fetch HTTP-Anfrage senden --> Records mit fetch damit sie vom Server geladen werden

    if (!response.ok) {
        throw new Error(`Server responded with status ${response.status}`);
    }
    const data = await response.json(); // nur erfolgreiche Antworten verarbeiten
    return data;
}

// Auf Fehler reagieren
const loadingMessage = document.querySelector("#records-loading");
const errorMessage = document.querySelector("#records-error");
const emptyMessage = document.querySelector("#records-empty");


async function init() {
    try {
        records = await loadRecordsFromApi();

        emptyMessage.hidden = records.length > 0;

        console.log("All:", filterRecordsByCategory("all").length);
        console.log("RAYE:", filterRecordsByCategory("raye").length);
        console.log("Amma:", filterRecordsByCategory("amma").length);
        console.log("Absolutely:", filterRecordsByCategory("absolutely").length);

        const rayeRecords = records.filter((record) => record.category === "raye");
        const ammaRecords = records.filter((record) => record.category === "amma");
        const absolutelyRecords = records.filter((record) => record.category === "absolutely");

        renderRecords(rayeRecords, rayeGrid); // rayeRecords = Array mit 3 RAYE-Records, rayeGrid = HTML-Container für RAYE und renderRecords erzeugt daraus Karten
        renderRecords(ammaRecords, ammaGrid);
        renderRecords(absolutelyRecords, absolutelyGrid);

        console.log(`${records.length} records loaded from the server`);
        console.log(`${rayeRecords.length} RAYE records found`);
        console.log(`${ammaRecords.length} Amma records found`);
        console.log(`${absolutelyRecords.length} Absolutely records found`);
    } catch (error) {
        console.error("Failed to load records:", error);
        errorMessage.hidden = false;
    } finally {
        loadingMessage.hidden = true;
    }   
}

// #endregion

// #region 04 · RECORD-KARTEN DYNAMISCH ERZEUGEN 

function createRecordCard(record) {
    const card = document.createElement("article");
    card.className = "record-card";
    card.dataset.category = record.category; // damit JavaScript dann z.B. <article class="record-card" data-category="raye"> erzeugt

    const cover = document.createElement("img");
    cover.className = "record-cover";
    cover.src = record.coverImage;
    cover.alt = record.coverAlt;
    cover.width = 180;
    cover.height = 180;

    const title = document.createElement("h4");
    title.textContent = record.title;

    const paragraph = document.createElement("p");
    paragraph.className = "record-meta";
    paragraph.textContent = `${record.releaseType} · ${record.releaseDate.slice(0, 4)}`;  // weil ja nur Jahr angezeigt wird auf Homepage -> erste 4 Zeichen des Datums nehmen --> Jahr      
    
    if (record.featured) { // ist Record featured? (true) --> Alben mit Detailseiten --> eigene Regeln
        card.classList.add("record-card--featured"); // falls ja, dann Klasse record-card zusätzlich Klasse record-card--featured hinzufügen

        const media = document.createElement("div"); // Albumbild mit interaktivem Hover, wo Link zu Detailseite erscheint
        media.className = "record-card__media";

        const overlay = document.createElement("div"); // Overlay, wenn man über Album drüberhovert
        overlay.className = "record-card__overlay";

        const overlayLabel = document.createElement("span");
        overlayLabel.className = "record-card__overlay-label";
        overlayLabel.textContent = `Inside the Record`;
        overlayLabel.setAttribute("aria-hidden", "true"); // Label jetzt für Screenreader ausgeblendet

        const link = document.createElement("a");
        link.className = "button button--secondary button--compact record-card__link";
        link.href = `items/${record.id}.html`; // erzeugt automatisch die passende Detailseiten-Adresse
        link.textContent = `Explore the Record →`;

        overlay.append(overlayLabel);
        media.append(cover, overlay);

        card.append(media, title, paragraph, link); // hier media statt cover mit overlay etc.
    } else {
        card.append(cover, title, paragraph); // falls falsch, bleibt es bei normaler Karte
    }

    return card; // fertige Karte zurückgeben
}

function renderRecords(list, container) { // da für jede Künstlerin ja eigener Container auf Homepage mit eigenen Records --> list beinhaltet Records die angezeigt werden sollen
    const cards = list.map((record) => createRecordCard(record)); // mit map einzelne HTML-Karten erstellen
    container.replaceChildren(...cards); // damit HTML-Elemente in übergebenen HTML-Container einsetzen --> cards

    console.log(`Rendering ${cards.length} record cards`);
}

const rayeGrid = document.querySelector( // wieder querySelector Dokument durchsuchen --> innerhalb Künstlergruppe mit data-category="raye" Container mit Klasse record-grid suchen
        '.record-group[data-category="raye"] .record-grid'
    );

const ammaGrid = document.querySelector( // wieder querySelector Dokument durchsuchen --> innerhalb Künstlergruppe mit data-category="amma" Container mit Klasse record-grid suchen
        '.record-group[data-category="amma"] .record-grid'
    );

const absolutelyGrid = document.querySelector( // wieder querySelector Dokument durchsuchen --> innerhalb Künstlergruppe mit data-category="absolutely" Container mit Klasse record-grid suchen
        '.record-group[data-category="absolutely"] .record-grid'
    );

init();
// #endregion

// #region 05 · RECORDS NACH KATEGORIE FILTERN

function filterRecordsByCategory(category) {
    if (category === "all") {
        return records;
    }

    return records.filter((record) => record.category === category) // stimmt Kategorie von Record mit übergebener category überein? 
}
// #endregion
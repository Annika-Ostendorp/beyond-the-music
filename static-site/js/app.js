
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
    
        recordGroups.forEach((group) => {
            // Jede Albumgruppe besitzt data-category (raye, amma oder absolutely).
            const category = group.dataset.category;

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


// Kategoriebegriffe aus index.html gezielt suchen für JavaScript
const filterButtons = document.querySelectorAll(".filter-chip");

const recordGroups = document.querySelectorAll(".record-group[data-category]"); // mit data-category, da ja nach best. Künstlerinnen filtern möchte

// Welcher Button wurde angeklickt
filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const selectedCategory = button.dataset.filter; // damit dann in Konsole (Entwicklertools) Künstlername, je nachdem welcher angeklickt wurde (HTML-Attribut data-filter auslesen aus index.html)
    
        recordGroups.forEach((group) => {
            const category = group.dataset.category;

            const shouldShow = 
            selectedCategory === "all" || category === selectedCategory; // mit || Albumgruppe soll sichtbar sein, wenn "All" ausgewählt wurde ODER ihre Kategorie zum ausgewählten Filter passt (jew. Künstlergruppe anzeigen)

            group.hidden = !shouldShow; // ! kehrt booleschen Wert um --> shouldShow = true (Bedingung) --> hidden ist false --> Albumgruppe bleibt sichtbar
        });
    });
});
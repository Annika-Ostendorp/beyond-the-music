
/* Interaktiver Künstlerinnen-Carousel (statische Website, MA2 Teil 1).
   Der Code ergänzt die auch ohne JavaScript sichtbare Künstlerinnenübersicht um eine steuerbare Einzelkarten-Ansicht. */

// #region 01 · CAROUSEL: ELEMENTE UND SICHERHEITSPRÜFUNG
(() => {
    // IIFE: Die sofort ausgeführte Funktion hält Hilfsvariablen aus dem globalen Namensraum heraus.
    const carousel = document.querySelector(".artist-carousel");
    if (!carousel) return;

    // Nur innerhalb des Carousels nach benötigten Elementen suchen.
    // Array.from wandelt die NodeList in Arrays um, die wir mit forEach bearbeiten.
    const grid = carousel.querySelector(".artist-grid");
    const cards = Array.from(
        grid.querySelectorAll(".artist-card--cinematic")
    );
    const dots = Array.from(
        carousel.querySelectorAll(".artist-carousel__dot")
    );

    const previous = carousel.querySelector("[data-artist-prev]");
    const next = carousel.querySelector("[data-artist-next]");
    const count = carousel.querySelector(".artist-carousel__count");
    const announcement = carousel.querySelector(
        ".artist-carousel__announcement"
    );

    // Abbrechen, falls die erwarteten drei Karten, Punkte oder Steuerelemente fehlen.
    // Voraussetzung: .artist-grid existiert; dieser Zugriff erfolgt bereits davor.
    // CSS aktiviert das Carousel erst später mit der Klasse artist-carousel--ready.
    if (
        cards.length !== 3 ||
        dots.length !== cards.length ||
        !previous || !next || !count || !announcement
    ) {
        return;
    }

    // #endregion
    // #region 02 · CAROUSEL: AKTIVE KARTE ANZEIGEN
    let currentIndex = 0;

    // currentIndex merkt sich die aktuell sichtbare Karte (0, 1 oder 2).
    // showArtist bündelt den Wechsel: Sichtbarkeit, ARIA-Status, Punkte und Zähler.
    function showArtist(index, animate = true) {
        // Modulo (%) hält den Index im Bereich 0 bis 2: Nach der letzten folgt die erste Karte.
        // + cards.length verhindert bei einem Schritt rückwärts einen negativen Rest.
        const newIndex = (index + cards.length) % cards.length;

        // Wiederholtes Anwählen der bereits aktiven Karte löst keine erneute Animation aus.
        if (animate && newIndex === currentIndex) return;

        currentIndex = newIndex;

        cards.forEach((card, cardIndex) => {
            const isActive = cardIndex === currentIndex;

            // toggle(Klasse, Boolean) setzt oder entfernt die CSS-Zustandsklasse gezielt.
            card.classList.toggle("is-active", isActive);
            card.classList.toggle(
                "is-changing",
                isActive && animate
            );

            // inert macht inaktive Karten (inkl. Links) nicht bedienbar und nimmt sie
            // aus der Tastaturnavigation; aria-hidden ergänzt den Zustand für Assistenztechnik.
            card.inert = !isActive;
            card.setAttribute(
                "aria-hidden",
                String(!isActive)
            );
        });

        // aria-pressed macht den ausgewählten Navigationspunkt für Screenreader erkennbar.
        dots.forEach((dot, dotIndex) => {
            dot.setAttribute(
                "aria-pressed",
                String(dotIndex === currentIndex)
            );
        });

        // textContent ersetzt den sichtbaren Zähler; padStart ergänzt führende Nullen.
        count.textContent =
            `${String(currentIndex + 1).padStart(2, "0")} / ` +
            `${String(cards.length).padStart(2, "0")}`;

        // Die Live-Region kündigt einen echten Wechsel an; beim ersten Aufbau nicht.
        if (animate) {
            const artistName = cards[currentIndex]
                .querySelector("h3")
                .textContent.trim();

            announcement.textContent =
                `${artistName}, ${currentIndex + 1} of ${cards.length}`;
        }
    }

    // RAYE beim Laden ohne Eintrittsanimation anzeigen; danach JS-gesteuerte Darstellung aktivieren.
    showArtist(0, false);

    carousel.classList.add("artist-carousel--ready");
    carousel.setAttribute("aria-roledescription", "carousel");

    // #endregion
    // #region 03 · CAROUSEL: PFEILE UND DIREKTE AUSWAHL
    // Die Pfeile verändern den Index; showArtist kümmert sich um alle weiteren Zustände.
    previous.addEventListener("click", () => {
        showArtist(currentIndex - 1);
    });

    next.addEventListener("click", () => {
        showArtist(currentIndex + 1);
    });

    // Jeder Punkt kann eine Künstlerin direkt auswählen und reagiert auf Pfeiltasten.
    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            showArtist(index);
        });

        dot.addEventListener("keydown", (event) => {
            if (
                event.key !== "ArrowLeft" &&
                event.key !== "ArrowRight"
            ) {
                return;
            }

            // Standardreaktion der Pfeiltaste verhindern, damit sie hier nur den Carousel steuert.
            event.preventDefault();

            const direction =
                event.key === "ArrowRight" ? 1 : -1;

            const nextIndex =
                (currentIndex + direction + cards.length) %
                cards.length;

            showArtist(nextIndex);
            // Den Tastaturfokus auf den neu ausgewählten Punkt mitbewegen.
            dots[nextIndex].focus();
        });
    });

    // #endregion
    // #region 04 · CAROUSEL: WISCHGESTEN AUF TOUCHGERÄTEN
    // Wischgesten beginnen nur bei einem Finger und nicht auf Links/Buttons.
    let touchStart = null;

    // passive: true bei touchstart und touchend erlaubt dem Browser, normal weiterzuscrollen.
    grid.addEventListener("touchstart", (event) => {
        if (
            event.touches.length !== 1 ||
            event.target.closest("a, button")
        ) {
            return;
        }

        touchStart = {
            x: event.touches[0].clientX,
            y: event.touches[0].clientY
        };
    }, { passive: true });

    grid.addEventListener("touchend", (event) => {
        if (!touchStart || !event.changedTouches.length) {
            return;
        }

        const deltaX =
            event.changedTouches[0].clientX - touchStart.x;

        const deltaY =
            event.changedTouches[0].clientY - touchStart.y;

        touchStart = null;

        // Nur klare horizontale Bewegung zählt: mindestens 55px und
        // 1,3-mal stärker horizontal als vertikal, damit vertikales Scrollen nicht stört.
        if (
            Math.abs(deltaX) > 55 &&
            Math.abs(deltaX) > Math.abs(deltaY) * 1.3
        ) {
            // Nach links wischen: nächste Karte; nach rechts wischen: vorherige.
            showArtist(
                currentIndex + (deltaX < 0 ? 1 : -1)
            );
        }
    }, { passive: true });

    // Bei abgebrochener Berührung den gespeicherten Startpunkt zurücksetzen.
    grid.addEventListener("touchcancel", () => {
        touchStart = null;
    });
    // #endregion
})();


/* MA2 Part 1 - Interactive artist carousel */

(() => {
    const carousel = document.querySelector(".artist-carousel");
    if (!carousel) return;

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

    if (
        cards.length !== 3 ||
        dots.length !== cards.length ||
        !previous || !next || !count || !announcement
    ) {
        return;
    }

    let currentIndex = 0;

    function showArtist(index, animate = true) {
        // Wrap around from last to first artist and vice versa.
        const newIndex = (index + cards.length) % cards.length;

        if (animate && newIndex === currentIndex) return;

        currentIndex = newIndex;

        cards.forEach((card, cardIndex) => {
            const isActive = cardIndex === currentIndex;

            card.classList.toggle("is-active", isActive);
            card.classList.toggle(
                "is-changing",
                isActive && animate
            );

            // Inactive links must not receive keyboard focus.
            card.inert = !isActive;
            card.setAttribute(
                "aria-hidden",
                String(!isActive)
            );
        });

        dots.forEach((dot, dotIndex) => {
            dot.setAttribute(
                "aria-pressed",
                String(dotIndex === currentIndex)
            );
        });

        count.textContent =
            `${String(currentIndex + 1).padStart(2, "0")} / ` +
            `${String(cards.length).padStart(2, "0")}`;

        if (animate) {
            const artistName = cards[currentIndex]
                .querySelector("h3")
                .textContent.trim();

            announcement.textContent =
                `${artistName}, ${currentIndex + 1} of ${cards.length}`;
        }
    }

    // Show RAYE immediately without an entrance animation.
    showArtist(0, false);

    carousel.classList.add("artist-carousel--ready");
    carousel.setAttribute("aria-roledescription", "carousel");

    // Previous and next buttons
    previous.addEventListener("click", () => {
        showArtist(currentIndex - 1);
    });

    next.addEventListener("click", () => {
        showArtist(currentIndex + 1);
    });

    // Navigation dots and arrow-key navigation
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

            event.preventDefault();

            const direction =
                event.key === "ArrowRight" ? 1 : -1;

            const nextIndex =
                (currentIndex + direction + cards.length) %
                cards.length;

            showArtist(nextIndex);
            dots[nextIndex].focus();
        });
    });

    // Swipe support for touch devices
    let touchStart = null;

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

        // Only a clear horizontal gesture changes the artist.
        if (
            Math.abs(deltaX) > 55 &&
            Math.abs(deltaX) > Math.abs(deltaY) * 1.3
        ) {
            showArtist(
                currentIndex + (deltaX < 0 ? 1 : -1)
            );
        }
    }, { passive: true });

    grid.addEventListener("touchcancel", () => {
        touchStart = null;
    });
})();

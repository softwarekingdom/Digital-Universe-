/* =========================================
   EARTH SCIENCE
   PART 1 — JAVASCRIPT
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        const page =
            document.querySelector(
                ".earth-science-main"
            );


        if (!page) {
            return;
        }


        /* =====================================
           NAVIGATION ACTIVE STATE
        ====================================== */

        const navLinks =
            document.querySelectorAll(
                ".earth-science-nav a"
            );


        const currentPage =
            window.location.pathname
                .split("/")
                .pop();


        navLinks.forEach((link) => {

            const linkPage =
                link.getAttribute("href");


            if (
                linkPage === currentPage
            ) {

                link.classList.add(
                    "active"
                );

            }

        });


        /* =====================================
           BUTTON SAFETY
        ====================================== */

        const dashboardButtons =
            document.querySelectorAll(
                'a[href="earth-dashboard.html"]'
            );


        dashboardButtons.forEach(
            (button) => {

                button.addEventListener(
                    "click",
                    () => {

                        button.classList.add(
                            "earth-button-active"
                        );

                    }
                );

            }
        );


        /* =====================================
           PAGE READY
        ====================================== */

        document.body.classList.add(
            "earth-science-ready"
        );


        console.log(
            "🌍 Earth Science Part 1 loaded successfully."
        );

    }
);
/* =========================================
   EARTH SCIENCE
   PART 2 — JAVASCRIPT
========================================= */


/* =========================================
   IMAGE LOADING
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        const earthImages =
            document.querySelectorAll(
                ".earth-image-wrapper img, .cta-earth-image img"
            );


        earthImages.forEach((image) => {

            image.addEventListener(
                "load",
                () => {

                    image.classList.add(
                        "earth-image-loaded"
                    );

                }
            );


            image.addEventListener(
                "error",
                () => {

                    image.classList.add(
                        "earth-image-error"
                    );

                    console.warn(
                        "Earth image could not be loaded:",
                        image.src
                    );

                }
            );

        });


        /* =================================
           EXPLORE ITEMS
        ================================== */

        const exploreItems =
            document.querySelectorAll(
                ".earth-explore-item"
            );


        exploreItems.forEach(
            (item, index) => {

                item.dataset.number =
                    String(index + 1)
                        .padStart(2, "0");

            }
        );


        /* =================================
           DASHBOARD BUTTON
        ================================== */

        const dashboardButton =
            document.querySelector(
                '.earth-main-cta a[href="earth-dashboard.html"]'
            );


        if (dashboardButton) {

            dashboardButton.addEventListener(
                "click",
                () => {

                    dashboardButton.setAttribute(
                        "aria-label",
                        "Earth Dashboard-க்கு செல்க"
                    );

                }
            );

        }


        /* =================================
           IMAGE ACCESSIBILITY
        ================================= */

        earthImages.forEach((image) => {

            if (
                !image.getAttribute("alt")
            ) {

                image.setAttribute(
                    "alt",
                    "பூமியின் படம்"
                );

            }

        });


        console.log(
            "🌍 Earth Science Part 2 loaded successfully."
        );

    }
);
/* =========================================
   EARTH SCIENCE
   PART 3 — JAVASCRIPT
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        /* =================================
           CURRENT YEAR
        ================================== */

        const yearElement =
            document.getElementById(
                "earthYear"
            );


        if (yearElement) {

            yearElement.textContent =
                new Date().getFullYear();

        }


        /* =================================
           NAVIGATION CARD FEEDBACK
        ================================== */

        const navigationCards =
            document.querySelectorAll(
                ".earth-navigation-card"
            );


        navigationCards.forEach(
            (card) => {

                card.addEventListener(
                    "click",
                    () => {

                        card.classList.add(
                            "earth-navigation-selected"
                        );

                    }
                );

            }
        );


        /* =================================
           FINAL BUTTON FEEDBACK
        ================================== */

        const finalButtons =
            document.querySelectorAll(
                ".earth-final-button"
            );


        finalButtons.forEach(
            (button) => {

                button.addEventListener(
                    "click",
                    () => {

                        button.classList.add(
                            "earth-final-selected"
                        );

                    }
                );

            }
        );


        /* =================================
           IMAGE CHECK
        ================================== */

        const finalImage =
            document.querySelector(
                ".final-earth-image img"
            );


        if (finalImage) {

            finalImage.addEventListener(
                "error",
                () => {

                    console.warn(
                        "⚠️ Earth night image could not be loaded:",
                        finalImage.src
                    );

                }
            );

        }


        /* =================================
           KEYBOARD ACCESSIBILITY
        ================================== */

        document.addEventListener(
            "keydown",
            (event) => {

                if (
                    event.key === "Escape"
                ) {

                    document.activeElement?.blur();

                }

            }
        );


        /* =================================
           PAGE READY
        ================================== */

        document.body.classList.add(
            "earth-science-complete"
        );


        console.log(
            "🌍 SciWonderVerse Earth Science page completed successfully."
        );

    }
);
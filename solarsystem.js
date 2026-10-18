/* =====================================================
   SOLAR SYSTEM
   PART 1 — JS
===================================================== */

document.addEventListener("DOMContentLoaded", () => {


    /* =================================================
       HERO BUTTON SCROLL
    ================================================== */

    const exploreButton =
        document.querySelector(
            '.solar-primary-btn[href="#solar-overview"]'
        );


    if (exploreButton) {

        exploreButton.addEventListener("click", () => {

            const overview =
                document.querySelector(
                    "#solar-overview"
                );

            if (overview) {

                overview.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    }



    /* =================================================
       HEADER ACTIVE STATE
    ================================================== */

    const navLinks =
        document.querySelectorAll(
            ".solar-nav-link"
        );


    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            navLinks.forEach(item => {

                item.classList.remove("active");

            });

            link.classList.add("active");

        });

    });



    /* =================================================
       OVERVIEW REVEAL
    ================================================== */

    const revealElements =
        document.querySelectorAll(
            ".solar-overview-card, .solar-science-note"
        );


    const revealObserver =
        new IntersectionObserver(
            (entries, observer) => {

                entries.forEach(entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "solar-visible"
                        );

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.15
            }
        );


    revealElements.forEach(element => {

        revealObserver.observe(element);

    });



    /* =================================================
       HERO VISUAL PARALLAX
    ================================================== */

    const heroVisual =
        document.querySelector(
            ".solar-hero-visual"
        );


    if (heroVisual) {

        heroVisual.addEventListener(
            "pointermove",
            event => {

                const rect =
                    heroVisual.getBoundingClientRect();

                const x =
                    (event.clientX - rect.left)
                    / rect.width
                    - 0.5;

                const y =
                    (event.clientY - rect.top)
                    / rect.height
                    - 0.5;


                const orbit =
                    heroVisual.querySelector(
                        ".solar-system-orbit"
                    );


                if (orbit) {

                    orbit.style.transform =
                        `translate(${x * 10}px, ${y * 10}px)`;

                }

            }
        );


        heroVisual.addEventListener(
            "pointerleave",
            () => {

                const orbit =
                    heroVisual.querySelector(
                        ".solar-system-orbit"
                    );


                if (orbit) {

                    orbit.style.transform =
                        "translate(0, 0)";

                }

            }
        );

    }



    /* =================================================
       IMAGE LOADING
    ================================================== */

    const solarImage =
        document.querySelector(
            ".solar-overview-image img"
        );


    if (solarImage) {

        solarImage.addEventListener(
            "load",
            () => {

                solarImage.classList.add(
                    "solar-image-loaded"
                );

            }
        );

    }



    console.log(
        "☀️ Solar System — Part 1 initialized successfully."
    );

});
/* ============================================================
   SOLAR SYSTEM — PART 2 JS
   PLANET CARDS INTERACTION
============================================================ */

document.addEventListener("DOMContentLoaded", () => {

    const planetCards = document.querySelectorAll(
        ".solar-planet-card"
    );


    /* --------------------------------------------------------
       PLANET CARD REVEAL
    -------------------------------------------------------- */

    const planetObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach((entry, index) => {

                if (!entry.isIntersecting) return;

                setTimeout(() => {

                    entry.target.classList.add(
                        "solar-planet-visible"
                    );

                }, index * 80);

                observer.unobserve(entry.target);

            });

        },
        {
            threshold: 0.12
        }
    );


    planetCards.forEach(card => {
        planetObserver.observe(card);
    });


    /* --------------------------------------------------------
       PLANET CARD POINTER EFFECT
    -------------------------------------------------------- */

    planetCards.forEach(card => {

        card.addEventListener("pointermove", event => {

            const rect = card.getBoundingClientRect();

            const x =
                (event.clientX - rect.left) /
                rect.width;

            const y =
                (event.clientY - rect.top) /
                rect.height;

            const rotateX = (0.5 - y) * 5;
            const rotateY = (x - 0.5) * 5;

            card.style.transform =
                `perspective(800px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 translateY(-8px)`;

        });


        card.addEventListener("pointerleave", () => {

            card.style.transform = "";

        });

    });


    /* --------------------------------------------------------
       PLANET IMAGE LOAD
    -------------------------------------------------------- */

    const planetImages =
        document.querySelectorAll(".solar-planet-image img");


    planetImages.forEach(image => {

        if (image.complete) {

            image.classList.add(
                "solar-planet-image-loaded"
            );

        } else {

            image.addEventListener("load", () => {

                image.classList.add(
                    "solar-planet-image-loaded"
                );

            });

        }

    });


    /* --------------------------------------------------------
       PLANET CARD KEYBOARD ACCESS
    -------------------------------------------------------- */

    planetCards.forEach(card => {

        card.setAttribute("tabindex", "0");

        card.addEventListener("focus", () => {
            card.classList.add("solar-card-focus");
        });

        card.addEventListener("blur", () => {
            card.classList.remove("solar-card-focus");
        });

    });


    console.log(
        "🌌 Solar System Part 2 loaded successfully."
    );

});
/* ============================================================
   SOLAR SYSTEM — PART 3 JS
   ORBIT SECTION INTERACTIONS
============================================================ */

document.addEventListener("DOMContentLoaded", () => {

    const orbitSection =
        document.querySelector(".solar-orbits-section");

    const orbitImage =
        document.querySelector(".solar-orbit-image");

    const orbitFacts =
        document.querySelectorAll(".solar-orbit-fact");

    const orbitPoints =
        document.querySelectorAll(".solar-orbit-point");


    /* --------------------------------------------------------
       ORBIT SECTION REVEAL
    -------------------------------------------------------- */

    if (orbitSection) {

        const orbitObserver =
            new IntersectionObserver(
                entries => {

                    entries.forEach(entry => {

                        if (!entry.isIntersecting) return;

                        entry.target.classList.add(
                            "solar-orbit-visible"
                        );

                        orbitObserver.unobserve(
                            entry.target
                        );

                    });

                },
                {
                    threshold: 0.12
                }
            );


        orbitObserver.observe(orbitSection);
    }


    /* --------------------------------------------------------
       ORBIT IMAGE PARALLAX
    -------------------------------------------------------- */

    if (orbitImage) {

        orbitImage.addEventListener(
            "pointermove",
            event => {

                const rect =
                    orbitImage.getBoundingClientRect();

                const x =
                    (event.clientX - rect.left) /
                    rect.width;

                const y =
                    (event.clientY - rect.top) /
                    rect.height;

                const moveX =
                    (x - 0.5) * 10;

                const moveY =
                    (y - 0.5) * 10;

                orbitImage.style.transform =
                    `translate(${moveX}px, ${moveY}px)`;
            }
        );


        orbitImage.addEventListener(
            "pointerleave",
            () => {

                orbitImage.style.transform = "";

            }
        );
    }


    /* --------------------------------------------------------
       ORBIT POINT INTERACTION
    -------------------------------------------------------- */

    orbitPoints.forEach(point => {

        point.addEventListener("click", () => {

            orbitPoints.forEach(item => {
                item.classList.remove(
                    "solar-orbit-point-active"
                );
            });

            point.classList.add(
                "solar-orbit-point-active"
            );

        });

    });


    /* --------------------------------------------------------
       FACT CARDS
    -------------------------------------------------------- */

    orbitFacts.forEach((fact, index) => {

        fact.style.transitionDelay =
            `${index * 80}ms`;

    });


    console.log(
        "🛰️ Solar System Part 3 loaded successfully."
    );

});
/* ============================================================
   SOLAR SYSTEM — PART 4 JS
   PLANET SIZE INTERACTIONS
============================================================ */

document.addEventListener("DOMContentLoaded", () => {

    const sizeSection =
        document.querySelector(".solar-sizes-section");

    const sizeImage =
        document.querySelector(".solar-size-image");

    const highlights =
        document.querySelectorAll(
            ".solar-size-highlight"
        );

    const worldCards =
        document.querySelectorAll(
            ".solar-world-type"
        );


    /* --------------------------------------------------------
       SECTION REVEAL
    -------------------------------------------------------- */

    if (sizeSection) {

        const sizeObserver =
            new IntersectionObserver(
                entries => {

                    entries.forEach(entry => {

                        if (!entry.isIntersecting) return;

                        entry.target.classList.add(
                            "solar-size-visible"
                        );

                        sizeObserver.unobserve(
                            entry.target
                        );

                    });

                },
                {
                    threshold: 0.12
                }
            );


        sizeObserver.observe(sizeSection);
    }


    /* --------------------------------------------------------
       IMAGE PARALLAX
    -------------------------------------------------------- */

    if (sizeImage) {

        sizeImage.addEventListener(
            "pointermove",
            event => {

                const rect =
                    sizeImage.getBoundingClientRect();

                const x =
                    (event.clientX - rect.left) /
                    rect.width;

                const y =
                    (event.clientY - rect.top) /
                    rect.height;

                const moveX =
                    (x - 0.5) * 8;

                const moveY =
                    (y - 0.5) * 8;

                sizeImage.style.transform =
                    `translate(${moveX}px, ${moveY}px)`;

            }
        );


        sizeImage.addEventListener(
            "pointerleave",
            () => {

                sizeImage.style.transform = "";

            }
        );

    }


    /* --------------------------------------------------------
       SIZE HIGHLIGHTS
    -------------------------------------------------------- */

    highlights.forEach((item, index) => {

        item.style.transitionDelay =
            `${index * 70}ms`;

        item.addEventListener("click", () => {

            highlights.forEach(element => {

                element.classList.remove(
                    "solar-size-highlight-active"
                );

            });

            item.classList.add(
                "solar-size-highlight-active"
            );

        });

    });


    /* --------------------------------------------------------
       WORLD TYPE CARDS
    -------------------------------------------------------- */

    worldCards.forEach(card => {

        card.addEventListener("pointermove", event => {

            const rect =
                card.getBoundingClientRect();

            const x =
                (event.clientX - rect.left) /
                rect.width;

            const y =
                (event.clientY - rect.top) /
                rect.height;

            const rotateX =
                (0.5 - y) * 3;

            const rotateY =
                (x - 0.5) * 3;

            card.style.transform =
                `perspective(900px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 translateY(-5px)`;

        });


        card.addEventListener("pointerleave", () => {

            card.style.transform = "";

        });

    });


    console.log(
        "📏 Solar System Part 4 loaded successfully."
    );

});
 /* ============================================================
    SOLAR SYSTEM — PART 5 JS
    BEYOND THE PLANETS INTERACTIONS
 ============================================================ */

document.addEventListener("DOMContentLoaded", () => {

    const beyondSection =
        document.querySelector(
            ".solar-beyond-section"
        );

    const cosmicCards =
        document.querySelectorAll(
            ".solar-cosmic-card"
        );

    const plutoCard =
        document.querySelector(
            ".solar-pluto-card"
        );

    const explorerButtons =
        document.querySelectorAll(
            ".solar-explorer-button"
        );


    /* --------------------------------------------------------
       SECTION REVEAL
    -------------------------------------------------------- */

    if (beyondSection) {

        const beyondObserver =
            new IntersectionObserver(
                entries => {

                    entries.forEach(entry => {

                        if (!entry.isIntersecting) {
                            return;
                        }

                        entry.target.classList.add(
                            "solar-beyond-visible"
                        );

                        beyondObserver.unobserve(
                            entry.target
                        );

                    });

                },
                {
                    threshold: 0.1
                }
            );


        beyondObserver.observe(
            beyondSection
        );
    }


    /* --------------------------------------------------------
       COSMIC CARD STAGGER
    -------------------------------------------------------- */

    cosmicCards.forEach((card, index) => {

        card.style.transitionDelay =
            `${index * 80}ms`;

    });


    /* --------------------------------------------------------
       COSMIC CARD POINTER EFFECT
    -------------------------------------------------------- */

    cosmicCards.forEach(card => {

        card.addEventListener(
            "pointermove",
            event => {

                const rect =
                    card.getBoundingClientRect();

                const x =
                    (event.clientX - rect.left) /
                    rect.width;

                const y =
                    (event.clientY - rect.top) /
                    rect.height;

                const rotateX =
                    (0.5 - y) * 3;

                const rotateY =
                    (x - 0.5) * 3;

                card.style.transform =
                    `perspective(900px)
                     rotateX(${rotateX}deg)
                     rotateY(${rotateY}deg)
                     translateY(-7px)`;

            }
        );


        card.addEventListener(
            "pointerleave",
            () => {

                card.style.transform = "";

            }
        );

    });


    /* --------------------------------------------------------
       PLUTO HOVER
    -------------------------------------------------------- */

    if (plutoCard) {

        plutoCard.addEventListener(
            "pointermove",
            event => {

                const rect =
                    plutoCard.getBoundingClientRect();

                const x =
                    (event.clientX - rect.left) /
                    rect.width;

                const y =
                    (event.clientY - rect.top) /
                    rect.height;

                const moveX =
                    (x - 0.5) * 5;

                const moveY =
                    (y - 0.5) * 5;

                plutoCard.style.transform =
                    `translate(${moveX}px, ${moveY}px)`;

            }
        );


        plutoCard.addEventListener(
            "pointerleave",
            () => {

                plutoCard.style.transform = "";

            }
        );

    }


    /* --------------------------------------------------------
       EXPLORER BUTTON FEEDBACK
    -------------------------------------------------------- */

    explorerButtons.forEach(button => {

        button.addEventListener(
            "click",
            () => {

                button.classList.add(
                    "solar-explorer-clicked"
                );

            }
        );

    });


    console.log(
        "🌌 Solar System Part 5 loaded successfully."
    );

});
// =========================================
// PART 6 — FINAL SECTION
// =========================================

document.addEventListener("DOMContentLoaded", () => {

    const backTopButton =
        document.getElementById("solarBackTop");


    // -----------------------------------------
    // BACK TO TOP
    // -----------------------------------------

    if (backTopButton) {

        backTopButton.addEventListener("click", () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    }


    // -----------------------------------------
    // FINAL BUTTON FEEDBACK
    // -----------------------------------------

    const finalButtons =
        document.querySelectorAll(".solar-final-button");


    finalButtons.forEach((button) => {

        button.addEventListener("click", () => {

            button.classList.add("solar-button-clicked");

            setTimeout(() => {
                button.classList.remove("solar-button-clicked");
            }, 500);

        });

    });


    // -----------------------------------------
    // FINAL SECTION REVEAL
    // -----------------------------------------

    const finalSection =
        document.querySelector(".solar-final-section");


    if (finalSection && "IntersectionObserver" in window) {

        const finalObserver =
            new IntersectionObserver(
                (entries) => {

                    entries.forEach((entry) => {

                        if (entry.isIntersecting) {

                            entry.target.classList.add(
                                "solar-final-visible"
                            );

                            finalObserver.unobserve(
                                entry.target
                            );

                        }

                    });

                },
                {
                    threshold: 0.15
                }
            );


        finalObserver.observe(finalSection);

    }


    // -----------------------------------------
    // FINAL ORBIT PARALLAX
    // -----------------------------------------

    const finalVisual =
        document.querySelector(".solar-final-visual");


    if (finalVisual) {

        finalVisual.addEventListener(
            "pointermove",
            (event) => {

                const rect =
                    finalVisual.getBoundingClientRect();

                const x =
                    (event.clientX - rect.left)
                    / rect.width - 0.5;

                const y =
                    (event.clientY - rect.top)
                    / rect.height - 0.5;


                finalVisual.style.transform =
                    `perspective(900px)
                     rotateX(${y * -4}deg)
                     rotateY(${x * 4}deg)`;

            }
        );


        finalVisual.addEventListener(
            "pointerleave",
            () => {

                finalVisual.style.transform =
                    "perspective(900px) rotateX(0deg) rotateY(0deg)";

            }
        );

    }


    // -----------------------------------------
    // FOOTER YEAR / CONSOLE
    // -----------------------------------------

    console.log(
        "🌌 Solar System Explorer completed."
    );

    console.log(
        "🚀 Keep exploring the Digital Universe."
    );

});
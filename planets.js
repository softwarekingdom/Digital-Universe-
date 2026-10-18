/* =========================================================
   PLANETS.JS
   PART 1
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    "use strict";


    /* =====================================================
       DASHBOARD BUTTON
    ====================================================== */

    const dashboardLinks =
        document.querySelectorAll(
            "[data-dashboard-link]"
        );


    dashboardLinks.forEach((link) => {

        link.addEventListener("click", () => {

            link.setAttribute(
                "aria-busy",
                "true"
            );

        });

    });


    /* =====================================================
       SIMPLE REVEAL ANIMATION
    ====================================================== */

    const revealItems =
        document.querySelectorAll(
            ".planet-intro-card, .planet-order-item"
        );


    if ("IntersectionObserver" in window) {

        const observer =
            new IntersectionObserver(
                (entries, observerInstance) => {

                    entries.forEach((entry) => {

                        if (!entry.isIntersecting) {
                            return;
                        }


                        entry.target.classList.add(
                            "planet-visible"
                        );


                        observerInstance.unobserve(
                            entry.target
                        );

                    });

                },
                {
                    threshold: 0.12
                }
            );


        revealItems.forEach((item) => {

            observer.observe(item);

        });

    } else {

        revealItems.forEach((item) => {

            item.classList.add(
                "planet-visible"
            );

        });

    }


    /* =====================================================
       HERO POINTER EFFECT
    ====================================================== */

    const heroVisual =
        document.querySelector(
            ".planet-hero-visual"
        );


    if (
        heroVisual &&
        window.matchMedia(
            "(prefers-reduced-motion: no-preference)"
        ).matches
    ) {

        heroVisual.addEventListener(
            "pointermove",
            (event) => {

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


                heroVisual.style.transform =
                    `perspective(700px)
                     rotateY(${x * 3}deg)
                     rotateX(${y * -3}deg)`;

            }
        );


        heroVisual.addEventListener(
            "pointerleave",
            () => {

                heroVisual.style.transform =
                    "";

            }
        );

    }


    /* =====================================================
       ESCAPE KEY
    ====================================================== */

    document.addEventListener(
        "keydown",
        (event) => {

            if (event.key === "Escape") {

                document.activeElement?.blur();

            }

        }
    );


    console.log(
        "Digital Universe — Planets Part 1 loaded."
    );

});
/* =========================================================
   PLANETS.JS
   PART 2 — Mercury
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    "use strict";


    /* =====================================================
       MERCURY IMAGE INTERACTION
    ====================================================== */

    const mercuryImage =
        document.querySelector(
            ".mercury-section .planet-image-frame img"
        );


    if (mercuryImage) {

        mercuryImage.addEventListener(
            "load",
            () => {

                mercuryImage.classList.add(
                    "planet-image-loaded"
                );

            }
        );

    }


    /* =====================================================
       NEXT PLANET BUTTON
    ====================================================== */

    const nextPlanetButton =
        document.querySelector(
            ".mercury-section .planet-next-button"
        );


    if (nextPlanetButton) {

        nextPlanetButton.addEventListener(
            "click",
            () => {

                nextPlanetButton.setAttribute(
                    "aria-busy",
                    "true"
                );

            }
        );

    }


    /* =====================================================
       MERCURY SECTION REVEAL
    ====================================================== */

    const mercuryItems =
        document.querySelectorAll(
            ".mercury-section .planet-science-card, " +
            ".mercury-section .planet-fact"
        );


    if ("IntersectionObserver" in window) {

        const mercuryObserver =
            new IntersectionObserver(
                (entries, observer) => {

                    entries.forEach((entry) => {

                        if (!entry.isIntersecting) {
                            return;
                        }


                        entry.target.classList.add(
                            "planet-visible"
                        );


                        observer.unobserve(
                            entry.target
                        );

                    });

                },
                {
                    threshold: 0.12
                }
            );


        mercuryItems.forEach((item) => {

            mercuryObserver.observe(item);

        });

    } else {

        mercuryItems.forEach((item) => {

            item.classList.add(
                "planet-visible"
            );

        });

    }


    console.log(
        "Digital Universe — Mercury Part 2 loaded."
    );

});
/* =================================
   PART 3 — VENUS
   JS PART
================================= */

document.addEventListener("DOMContentLoaded", () => {

    const venusSection =
        document.querySelector(".venus-section");

    const venusImage =
        document.querySelector(".venus-section .planet-main-image");

    const venusButtons =
        document.querySelectorAll(
            ".venus-section a"
        );

    /* Venus image loading */

    if (venusImage) {

        venusImage.addEventListener("load", () => {

            venusImage.classList.add(
                "planet-image-loaded"
            );

        });

    }


    /* Venus section animation */

    if (venusSection) {

        const observer =
            new IntersectionObserver(
                (entries) => {

                    entries.forEach((entry) => {

                        if (entry.isIntersecting) {

                            entry.target.classList.add(
                                "planet-visible"
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

        observer.observe(venusSection);

    }


    /* Venus buttons */

    venusButtons.forEach((button) => {

        button.addEventListener("click", () => {

            button.setAttribute(
                "aria-busy",
                "true"
            );

        });

    });


    console.log(
        "🌕 Venus section initialized successfully."
    );

});
/* =====================================================
   PART 4 — EARTH
   JS PART
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const earthSection =
        document.querySelector(".earth-section");

    const earthImage =
        document.querySelector(
            ".earth-section .planet-main-image"
        );

    const earthCards =
        document.querySelectorAll(
            ".earth-section .planet-fact-card, " +
            ".earth-section .science-card"
        );

    const earthButtons =
        document.querySelectorAll(
            ".earth-section .planet-navigation a"
        );


    /* ================================================
       EARTH IMAGE
    ================================================= */

    if (earthImage) {

        earthImage.addEventListener("load", () => {

            earthImage.classList.add(
                "planet-image-loaded"
            );

        });

    }


    /* ================================================
       EARTH SECTION REVEAL
    ================================================= */

    if (earthSection) {

        const earthObserver =
            new IntersectionObserver(
                (entries) => {

                    entries.forEach((entry) => {

                        if (entry.isIntersecting) {

                            entry.target.classList.add(
                                "planet-visible"
                            );

                            earthObserver.unobserve(
                                entry.target
                            );

                        }

                    });

                },
                {
                    threshold: 0.15
                }
            );

        earthObserver.observe(earthSection);
    }


    /* ================================================
       EARTH CARDS
    ================================================= */

    if (earthCards.length) {

        const cardObserver =
            new IntersectionObserver(
                (entries) => {

                    entries.forEach((entry) => {

                        if (entry.isIntersecting) {

                            entry.target.classList.add(
                                "planet-card-visible"
                            );

                            cardObserver.unobserve(
                                entry.target
                            );

                        }

                    });

                },
                {
                    threshold: 0.15
                }
            );


        earthCards.forEach((card) => {

            cardObserver.observe(card);

        });

    }


    /* ================================================
       BUTTON FEEDBACK
    ================================================= */

    earthButtons.forEach((button) => {

        button.addEventListener("click", () => {

            button.setAttribute(
                "aria-busy",
                "true"
            );

        });

    });


    console.log(
        "🌍 Earth section initialized successfully."
    );

});
 /* =====================================================
    PART 5 — MARS
    JS PART
 ===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const marsSection =
        document.querySelector(".mars-section");

    const marsImage =
        document.querySelector(
            ".mars-section .planet-main-image"
        );

    const marsCards =
        document.querySelectorAll(
            ".mars-section .planet-fact-card, " +
            ".mars-section .science-card"
        );

    const marsButtons =
        document.querySelectorAll(
            ".mars-section .planet-navigation a"
        );


    /* ================================================
       MARS IMAGE
    ================================================= */

    if (marsImage) {

        marsImage.addEventListener("load", () => {

            marsImage.classList.add(
                "planet-image-loaded"
            );

        });

    }


    /* ================================================
       MARS SECTION REVEAL
    ================================================= */

    if (marsSection) {

        const marsObserver =
            new IntersectionObserver(
                (entries) => {

                    entries.forEach((entry) => {

                        if (entry.isIntersecting) {

                            entry.target.classList.add(
                                "planet-visible"
                            );

                            marsObserver.unobserve(
                                entry.target
                            );

                        }

                    });

                },
                {
                    threshold: 0.15
                }
            );

        marsObserver.observe(marsSection);

    }


    /* ================================================
       MARS CARDS
    ================================================= */

    if (marsCards.length) {

        const cardObserver =
            new IntersectionObserver(
                (entries) => {

                    entries.forEach((entry) => {

                        if (entry.isIntersecting) {

                            entry.target.classList.add(
                                "planet-card-visible"
                            );

                            cardObserver.unobserve(
                                entry.target
                            );

                        }

                    });

                },
                {
                    threshold: 0.15
                }
            );


        marsCards.forEach((card) => {

            cardObserver.observe(card);

        });

    }


    /* ================================================
       BUTTON FEEDBACK
    ================================================= */

    marsButtons.forEach((button) => {

        button.addEventListener("click", () => {

            button.setAttribute(
                "aria-busy",
                "true"
            );

        });

    });


    console.log(
        "🔴 Mars section initialized successfully."
    );

});
/* =====================================================
   PART 6 — JUPITER
   JS PART
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const jupiterSection =
        document.querySelector(".jupiter-section");

    const jupiterImage =
        document.querySelector(
            ".jupiter-section .planet-main-image"
        );

    const jupiterCards =
        document.querySelectorAll(
            ".jupiter-section .planet-fact-card, " +
            ".jupiter-section .science-card"
        );

    const jupiterButtons =
        document.querySelectorAll(
            ".jupiter-section .planet-navigation a"
        );


    /* ================================================
       JUPITER IMAGE
    ================================================= */

    if (jupiterImage) {

        jupiterImage.addEventListener("load", () => {

            jupiterImage.classList.add(
                "planet-image-loaded"
            );

        });

    }


    /* ================================================
       SECTION REVEAL
    ================================================= */

    if (jupiterSection) {

        const jupiterObserver =
            new IntersectionObserver(
                (entries) => {

                    entries.forEach((entry) => {

                        if (entry.isIntersecting) {

                            entry.target.classList.add(
                                "planet-visible"
                            );

                            jupiterObserver.unobserve(
                                entry.target
                            );

                        }

                    });

                },
                {
                    threshold: 0.15
                }
            );

        jupiterObserver.observe(jupiterSection);

    }


    /* ================================================
       CARDS REVEAL
    ================================================= */

    if (jupiterCards.length) {

        const cardObserver =
            new IntersectionObserver(
                (entries) => {

                    entries.forEach((entry) => {

                        if (entry.isIntersecting) {

                            entry.target.classList.add(
                                "planet-card-visible"
                            );

                            cardObserver.unobserve(
                                entry.target
                            );

                        }

                    });

                },
                {
                    threshold: 0.15
                }
            );


        jupiterCards.forEach((card) => {

            cardObserver.observe(card);

        });

    }


    /* ================================================
       BUTTON FEEDBACK
    ================================================= */

    jupiterButtons.forEach((button) => {

        button.addEventListener("click", () => {

            button.setAttribute(
                "aria-busy",
                "true"
            );

        });

    });


    console.log(
        "🟤 Jupiter section initialized successfully."
    );

});
/* =====================================================
   PART 7 — SATURN
   JS PART
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const saturnSection =
        document.querySelector(".saturn-section");

    if (!saturnSection) return;


    /* SATURN IMAGE */

    const saturnImage =
        saturnSection.querySelector(".planet-main-image");


    if (saturnImage) {

        saturnImage.addEventListener("load", () => {

            saturnImage.classList.add(
                "planet-image-loaded"
            );

        });

    }


    /* SECTION REVEAL */

    const saturnObserver =
        new IntersectionObserver(
            (entries, observer) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "planet-visible"
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


    saturnObserver.observe(saturnSection);


    /* SCIENCE CARD REVEAL */

    const saturnCards =
        saturnSection.querySelectorAll(
            ".planet-fact-card, .science-card"
        );


    const cardObserver =
        new IntersectionObserver(
            (entries, observer) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "planet-card-visible"
                        );

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.12
            }
        );


    saturnCards.forEach(card => {

        cardObserver.observe(card);

    });


    /* BUTTON INTERACTION */

    const saturnButtons =
        saturnSection.querySelectorAll(
            ".planet-detail-btn, .planet-next-btn, .planet-dashboard-btn"
        );


    saturnButtons.forEach(button => {

        button.addEventListener("click", () => {

            button.setAttribute(
                "aria-busy",
                "true"
            );

            setTimeout(() => {

                button.removeAttribute(
                    "aria-busy"
                );

            }, 700);

        });

    });


    console.log(
        "🪐 Saturn section initialized successfully."
    );

});
/* =====================================================
   PART 8 — URANUS
   JS PART
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const uranusSection =
        document.querySelector(".uranus-section");

    if (!uranusSection) return;


    /* URANUS IMAGE */

    const uranusImage =
        uranusSection.querySelector(
            ".planet-main-image"
        );


    if (uranusImage) {

        uranusImage.addEventListener("load", () => {

            uranusImage.classList.add(
                "planet-image-loaded"
            );

        });

    }


    /* SECTION REVEAL */

    const uranusObserver =
        new IntersectionObserver(
            (entries, observer) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "planet-visible"
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


    uranusObserver.observe(uranusSection);


    /* CARD REVEAL */

    const uranusCards =
        uranusSection.querySelectorAll(
            ".planet-fact-card, .science-card"
        );


    const cardObserver =
        new IntersectionObserver(
            (entries, observer) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "planet-card-visible"
                        );

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.12
            }
        );


    uranusCards.forEach(card => {

        cardObserver.observe(card);

    });


    /* BUTTON INTERACTION */

    const uranusButtons =
        uranusSection.querySelectorAll(
            ".planet-detail-btn, .planet-next-btn, .planet-dashboard-btn"
        );


    uranusButtons.forEach(button => {

        button.addEventListener("click", () => {

            button.setAttribute(
                "aria-busy",
                "true"
            );

            setTimeout(() => {

                button.removeAttribute(
                    "aria-busy"
                );

            }, 700);

        });

    });


    console.log(
        "💠 Uranus section initialized successfully."
    );

});
/* =====================================================
   PART 9 — NEPTUNE
   JS PART
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const neptuneSection =
        document.querySelector(".neptune-section");

    if (!neptuneSection) return;


    /* NEPTUNE IMAGE */

    const neptuneImage =
        neptuneSection.querySelector(
            ".planet-main-image"
        );


    if (neptuneImage) {

        neptuneImage.addEventListener("load", () => {

            neptuneImage.classList.add(
                "planet-image-loaded"
            );

        });

    }


    /* SECTION REVEAL */

    const neptuneObserver =
        new IntersectionObserver(
            (entries, observer) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "planet-visible"
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


    neptuneObserver.observe(neptuneSection);


    /* CARD REVEAL */

    const neptuneCards =
        neptuneSection.querySelectorAll(
            ".planet-fact-card, .science-card"
        );


    const cardObserver =
        new IntersectionObserver(
            (entries, observer) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "planet-card-visible"
                        );

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.12
            }
        );


    neptuneCards.forEach(card => {

        cardObserver.observe(card);

    });


    /* BUTTON INTERACTION */

    const neptuneButtons =
        neptuneSection.querySelectorAll(
            ".planet-detail-btn, .planet-next-btn, .planet-dashboard-btn"
        );


    neptuneButtons.forEach(button => {

        button.addEventListener("click", () => {

            button.setAttribute(
                "aria-busy",
                "true"
            );

            setTimeout(() => {

                button.removeAttribute(
                    "aria-busy"
                );

            }, 700);

        });

    });


    console.log(
        "🔵 Neptune section initialized successfully."
    );

});
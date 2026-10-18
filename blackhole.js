document.addEventListener("DOMContentLoaded", () => {

    // =========================================
    // SMOOTH SCROLL
    // =========================================

    const exploreButton =
        document.querySelector(
            '.blackhole-primary-button[href="#blackhole-overview"]'
        );


    if (exploreButton) {

        exploreButton.addEventListener("click", (event) => {

            event.preventDefault();

            const target =
                document.getElementById(
                    "blackhole-overview"
                );


            if (target) {

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    }


    // =========================================
    // HERO IMAGE PARALLAX
    // =========================================

    const heroVisual =
        document.querySelector(
            ".blackhole-hero-visual"
        );


    if (heroVisual) {

        heroVisual.addEventListener(
            "pointermove",
            (event) => {

                const rect =
                    heroVisual.getBoundingClientRect();


                const x =
                    (event.clientX - rect.left)
                    / rect.width - 0.5;


                const y =
                    (event.clientY - rect.top)
                    / rect.height - 0.5;


                heroVisual.style.transform =
                    `perspective(1000px)
                     rotateX(${y * -3}deg)
                     rotateY(${x * 3}deg)`;

            }
        );


        heroVisual.addEventListener(
            "pointerleave",
            () => {

                heroVisual.style.transform =
                    "perspective(1000px) rotateX(0deg) rotateY(0deg)";

            }
        );

    }


    // =========================================
    // IMAGE LOAD EFFECT
    // =========================================

    const mainImage =
        document.querySelector(
            ".blackhole-main-image"
        );


    if (mainImage) {

        if (mainImage.complete) {

            mainImage.classList.add(
                "blackhole-image-loaded"
            );

        } else {

            mainImage.addEventListener(
                "load",
                () => {

                    mainImage.classList.add(
                        "blackhole-image-loaded"
                    );

                }
            );

        }

    }


    // =========================================
    // INFO CARD REVEAL
    // =========================================

    const infoCards =
        document.querySelectorAll(
            ".blackhole-info-card"
        );


    if (
        infoCards.length &&
        "IntersectionObserver" in window
    ) {

        const observer =
            new IntersectionObserver(
                (entries) => {

                    entries.forEach((entry) => {

                        if (entry.isIntersecting) {

                            entry.target.classList.add(
                                "blackhole-card-visible"
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


        infoCards.forEach((card, index) => {

            card.style.transitionDelay =
                `${index * 80}ms`;

            observer.observe(card);

        });

    }


    // =========================================
    // CONSOLE MESSAGE
    // =========================================

    console.log(
        "🕳️ Black Hole Explorer — Section 01 loaded."
    );

});
document.addEventListener("DOMContentLoaded", () => {

    // =========================================
    // EVENT HORIZON IMAGE
    // =========================================

    const eventImage =
        document.querySelector(
            ".blackhole-event-image"
        );


    if (eventImage) {

        eventImage.addEventListener(
            "load",
            () => {

                eventImage.classList.add(
                    "blackhole-event-image-loaded"
                );

            }
        );

    }


    // =========================================
    // EVENT SECTION REVEAL
    // =========================================

    const eventElements =
        document.querySelectorAll(
            ".blackhole-event-point, .blackhole-event-callout"
        );


    if (
        eventElements.length &&
        "IntersectionObserver" in window
    ) {

        const eventObserver =
            new IntersectionObserver(
                (entries) => {

                    entries.forEach((entry) => {

                        if (entry.isIntersecting) {

                            entry.target.classList.add(
                                "blackhole-event-visible"
                            );

                            eventObserver.unobserve(
                                entry.target
                            );

                        }

                    });

                },
                {
                    threshold: 0.15
                }
            );


        eventElements.forEach(
            (element, index) => {

                element.style.transitionDelay =
                    `${index * 80}ms`;

                eventObserver.observe(element);

            }
        );

    }


    // =========================================
    // EVENT IMAGE PARALLAX
    // =========================================

    const eventImageFrame =
        document.querySelector(
            ".blackhole-event-image-frame"
        );


    if (eventImageFrame) {

        eventImageFrame.addEventListener(
            "pointermove",
            (event) => {

                const rect =
                    eventImageFrame.getBoundingClientRect();


                const x =
                    (event.clientX - rect.left)
                    / rect.width - 0.5;


                const y =
                    (event.clientY - rect.top)
                    / rect.height - 0.5;


                eventImageFrame.style.transform =
                    `perspective(900px)
                     rotateX(${y * -2}deg)
                     rotateY(${x * 2}deg)`;

            }
        );


        eventImageFrame.addEventListener(
            "pointerleave",
            () => {

                eventImageFrame.style.transform =
                    "perspective(900px) rotateX(0deg) rotateY(0deg)";

            }
        );

    }


    // =========================================
    // CONSOLE
    // =========================================

    console.log(
        "🌑 Black Hole Explorer — Section 02 loaded."
    );

});
/* =========================================================
   SECTION 03 — ACCRETION DISK
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const accretionSection =
        document.querySelector("#accretion-disk");

    if (!accretionSection) return;


    /* ---------------------------------
       படம் Load effect
       --------------------------------- */

    const accretionImage =
        accretionSection.querySelector(
            ".blackhole-accretion-image"
        );

    if (accretionImage) {

        accretionImage.addEventListener("load", () => {

            accretionImage.classList.add(
                "blackhole-accretion-image-loaded"
            );

        });

    }


    /* ---------------------------------
       Scroll reveal
       --------------------------------- */

    const revealItems =
        accretionSection.querySelectorAll(
            ".blackhole-accretion-point, " +
            ".blackhole-accretion-mini-card, " +
            ".blackhole-accretion-fact"
        );


    const revealObserver =
        new IntersectionObserver(
            (entries, observer) => {

                entries.forEach((entry) => {

                    if (!entry.isIntersecting) return;

                    entry.target.classList.add(
                        "blackhole-accretion-visible"
                    );

                    observer.unobserve(entry.target);

                });

            },
            {
                threshold: 0.15
            }
        );


    revealItems.forEach((item, index) => {

        item.style.transitionDelay =
            `${index * 80}ms`;

        revealObserver.observe(item);

    });


    /* ---------------------------------
       படத்திற்கு சிறிய mouse movement
       --------------------------------- */

    const imageFrame =
        accretionSection.querySelector(
            ".blackhole-accretion-image-frame"
        );


    if (imageFrame && window.innerWidth > 700) {

        imageFrame.addEventListener(
            "mousemove",
            (event) => {

                const rect =
                    imageFrame.getBoundingClientRect();

                const x =
                    (event.clientX - rect.left)
                    / rect.width;

                const y =
                    (event.clientY - rect.top)
                    / rect.height;

                const moveX =
                    (x - 0.5) * 8;

                const moveY =
                    (y - 0.5) * 8;


                if (accretionImage) {

                    accretionImage.style.transform =
                        `scale(1.06)
                         translate(${moveX}px, ${moveY}px)`;

                }

            }
        );


        imageFrame.addEventListener(
            "mouseleave",
            () => {

                if (accretionImage) {

                    accretionImage.style.transform =
                        "scale(1.02)";

                }

            }
        );

    }


    /* ---------------------------------
       Console status
       --------------------------------- */

    console.log(
        "🌌 Black Hole Explorer — சேர்க்கை வட்டு பகுதி இயங்குகிறது."
    );

});
/* =========================================================
   SECTION 05 — RELATIVISTIC JETS
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const jetsSection =
        document.querySelector(
            "#relativistic-jets"
        );

    if (!jetsSection) return;


    /* ---------------------------------
       படம் ஏற்றப்பட்டதும்
       --------------------------------- */

    const jetsImage =
        jetsSection.querySelector(
            ".blackhole-jets-image"
        );


    if (jetsImage) {

        jetsImage.addEventListener(
            "load",
            () => {

                jetsImage.classList.add(
                    "blackhole-jets-image-loaded"
                );

            }
        );

    }


    /* ---------------------------------
       Scroll Reveal
       --------------------------------- */

    const revealElements =
        jetsSection.querySelectorAll(
            ".blackhole-jets-process-card, " +
            ".blackhole-jets-fact, " +
            ".blackhole-jets-info-card"
        );


    const jetsObserver =
        new IntersectionObserver(
            (entries, observer) => {

                entries.forEach((entry) => {

                    if (!entry.isIntersecting) {
                        return;
                    }


                    entry.target.classList.add(
                        "blackhole-jets-visible"
                    );


                    observer.unobserve(
                        entry.target
                    );

                });

            },
            {
                threshold: 0.14
            }
        );


    revealElements.forEach(
        (element, index) => {

            element.style.opacity = "0";

            element.style.transform =
                "translateY(25px)";

            element.style.transition =
                "opacity 0.7s ease, " +
                "transform 0.7s ease";

            element.style.transitionDelay =
                `${index * 90}ms`;

            jetsObserver.observe(element);

        }
    );


    /* ---------------------------------
       Reveal class effect
       --------------------------------- */

    const revealStyle =
        document.createElement("style");

    revealStyle.textContent = `
        .blackhole-jets-visible {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;

    document.head.appendChild(
        revealStyle
    );


    /* ---------------------------------
       படத்தின் mouse parallax
       --------------------------------- */

    const imageFrame =
        jetsSection.querySelector(
            ".blackhole-jets-image-frame"
        );


    if (
        imageFrame &&
        jetsImage &&
        window.innerWidth > 700
    ) {

        imageFrame.addEventListener(
            "mousemove",
            (event) => {

                const rect =
                    imageFrame.getBoundingClientRect();


                const x =
                    (event.clientX - rect.left)
                    / rect.width;


                const y =
                    (event.clientY - rect.top)
                    / rect.height;


                const moveX =
                    (x - 0.5) * 7;


                const moveY =
                    (y - 0.5) * 7;


                jetsImage.style.transform =
                    `scale(1.055)
                     translate(${moveX}px, ${moveY}px)`;

            }
        );


        imageFrame.addEventListener(
            "mouseleave",
            () => {

                jetsImage.style.transform =
                    "scale(1.02)";

            }
        );

    }


    /* ---------------------------------
       கற்றை animation interaction
       --------------------------------- */

    const beams =
        jetsSection.querySelectorAll(
            ".blackhole-jet-beam"
        );


    beams.forEach((beam) => {

        beam.addEventListener(
            "mouseenter",
            () => {

                beam.style.opacity = "1";

            }
        );


        beam.addEventListener(
            "mouseleave",
            () => {

                beam.style.opacity = "";

            }
        );

    });


    /* ---------------------------------
       Console status
       --------------------------------- */

    console.log(
        "🚀 Black Hole Explorer — சார்பியல் துகள்க் கற்றைகள் பகுதி இயங்குகிறது."
    );

});
/* =========================================================
   SECTION 06 — STELLAR-MASS BLACK HOLE
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const stellarSection =
        document.querySelector(
            "#stellar-blackhole"
        );

    if (!stellarSection) return;


    /* ---------------------------------
       படம் ஏற்றப்பட்டதும்
       --------------------------------- */

    const stellarImage =
        stellarSection.querySelector(
            ".blackhole-stellar-image"
        );


    if (stellarImage) {

        stellarImage.addEventListener(
            "load",
            () => {

                stellarImage.classList.add(
                    "blackhole-stellar-image-loaded"
                );

            }
        );

    }


    /* ---------------------------------
       Scroll Reveal
       --------------------------------- */

    const revealElements =
        stellarSection.querySelectorAll(
            ".blackhole-stellar-step, " +
            ".blackhole-stellar-fact, " +
            ".blackhole-stellar-info"
        );


    const stellarObserver =
        new IntersectionObserver(
            (entries, observer) => {

                entries.forEach((entry) => {

                    if (!entry.isIntersecting) {
                        return;
                    }


                    entry.target.classList.add(
                        "blackhole-stellar-visible"
                    );


                    observer.unobserve(
                        entry.target
                    );

                });

            },
            {
                threshold: 0.13
            }
        );


    /* ---------------------------------
       Reveal animation
       --------------------------------- */

    revealElements.forEach(
        (element, index) => {

            element.style.opacity = "0";

            element.style.transform =
                "translateY(25px)";

            element.style.transition =
                "opacity 0.7s ease, " +
                "transform 0.7s ease";

            element.style.transitionDelay =
                `${index * 85}ms`;

            stellarObserver.observe(
                element
            );

        }
    );


    const revealStyle =
        document.createElement("style");

    revealStyle.textContent = `
        .blackhole-stellar-visible {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;

    document.head.appendChild(
        revealStyle
    );


    /* ---------------------------------
       படத்திற்கு Parallax
       --------------------------------- */

    const imageFrame =
        stellarSection.querySelector(
            ".blackhole-stellar-image-frame"
        );


    if (
        imageFrame &&
        stellarImage &&
        window.innerWidth > 700
    ) {

        imageFrame.addEventListener(
            "mousemove",
            (event) => {

                const rect =
                    imageFrame.getBoundingClientRect();


                const x =
                    (event.clientX - rect.left)
                    / rect.width;


                const y =
                    (event.clientY - rect.top)
                    / rect.height;


                const moveX =
                    (x - 0.5) * 7;


                const moveY =
                    (y - 0.5) * 7;


                stellarImage.style.transform =
                    `scale(1.055)
                     translate(${moveX}px, ${moveY}px)`;

            }
        );


        imageFrame.addEventListener(
            "mouseleave",
            () => {

                stellarImage.style.transform =
                    "scale(1.02)";

            }
        );

    }


    /* ---------------------------------
       Console status
       --------------------------------- */

    console.log(
        "⭐ Black Hole Explorer — நட்சத்திர நிறை கருந்துளை பகுதி இயங்குகிறது."
    );

});
/* =========================================================
   SECTION 07 — SUPERMASSIVE BLACK HOLE
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const supermassiveSection =
        document.querySelector("#supermassive-blackhole");

    if (!supermassiveSection) return;


    /* IMAGE */

    const supermassiveImage =
        supermassiveSection.querySelector(
            ".blackhole-supermassive-image"
        );

    if (supermassiveImage) {

        supermassiveImage.addEventListener(
            "load",
            () => {

                supermassiveImage.classList.add(
                    "blackhole-supermassive-image-loaded"
                );

            }
        );

    }


    /* REVEAL ANIMATION */

    const revealElements =
        supermassiveSection.querySelectorAll(
            ".blackhole-supermassive-fact-card, " +
            ".blackhole-supermassive-discovery-card, " +
            ".blackhole-supermassive-fact, " +
            ".blackhole-supermassive-bottom-card"
        );


    const supermassiveObserver =
        new IntersectionObserver(
            (entries, observer) => {

                entries.forEach((entry) => {

                    if (!entry.isIntersecting) return;

                    entry.target.classList.add(
                        "blackhole-supermassive-visible"
                    );

                    observer.unobserve(entry.target);

                });

            },
            {
                threshold: 0.12
            }
        );


    revealElements.forEach(
        (element, index) => {

            element.style.opacity = "0";

            element.style.transform =
                "translateY(28px)";

            element.style.transition =
                "opacity 0.75s ease, " +
                "transform 0.75s ease";

            element.style.transitionDelay =
                `${index * 80}ms`;

            supermassiveObserver.observe(element);

        }
    );


    /* DYNAMIC REVEAL STYLE */

    const revealStyle =
        document.createElement("style");

    revealStyle.textContent = `

        .blackhole-supermassive-visible {

            opacity: 1 !important;

            transform:
                translateY(0) !important;

        }

    `;

    document.head.appendChild(revealStyle);


    /* IMAGE PARALLAX */

    const imageFrame =
        supermassiveSection.querySelector(
            ".blackhole-supermassive-image-frame"
        );


    if (
        imageFrame &&
        supermassiveImage &&
        window.innerWidth > 700
    ) {

        imageFrame.addEventListener(
            "mousemove",
            (event) => {

                const rect =
                    imageFrame.getBoundingClientRect();

                const x =
                    (event.clientX - rect.left)
                    / rect.width;

                const y =
                    (event.clientY - rect.top)
                    / rect.height;

                const moveX =
                    (x - 0.5) * 8;

                const moveY =
                    (y - 0.5) * 8;

                supermassiveImage.style.transform =
                    `scale(1.065)
                     translate(${moveX}px, ${moveY}px)`;

            }
        );


        imageFrame.addEventListener(
            "mouseleave",
            () => {

                supermassiveImage.style.transform =
                    "scale(1.025)";

            }
        );

    }


    /* MASS METER INTERACTION */

    const massMeter =
        supermassiveSection.querySelector(
            ".blackhole-supermassive-meter"
        );

    const massFill =
        supermassiveSection.querySelector(
            ".blackhole-supermassive-meter-fill"
        );


    if (massMeter && massFill) {

        massMeter.addEventListener(
            "mouseenter",
            () => {

                massFill.style.width = "100%";

            }
        );


        massMeter.addEventListener(
            "mouseleave",
            () => {

                massFill.style.width = "";

            }
        );

    }


    /* DISCOVERY CARD TILT */

    const discoveryCards =
        supermassiveSection.querySelectorAll(
            ".blackhole-supermassive-discovery-card"
        );


    if (window.innerWidth > 800) {

        discoveryCards.forEach((card) => {

            card.addEventListener(
                "mousemove",
                (event) => {

                    const rect =
                        card.getBoundingClientRect();

                    const x =
                        (event.clientX - rect.left)
                        / rect.width;

                    const y =
                        (event.clientY - rect.top)
                        / rect.height;

                    const rotateX =
                        (y - 0.5) * -5;

                    const rotateY =
                        (x - 0.5) * 5;

                    card.style.transform =
                        `translateY(-6px)
                         rotateX(${rotateX}deg)
                         rotateY(${rotateY}deg)`;

                }
            );


            card.addEventListener(
                "mouseleave",
                () => {

                    card.style.transform =
                        "translateY(0)";

                }
            );

        });

    }


    console.log(
        "🌀 Black Hole Explorer — " +
        "அதிபெரும் நிறை கருந்துளை பகுதி இயங்குகிறது."
    );

});
/* =========================================================
   SECTION 08 — BINARY BLACK HOLE MERGER
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const binarySection =
        document.querySelector("#binary-blackhole");

    if (!binarySection) return;


    /* IMAGE */

    const binaryImage =
        binarySection.querySelector(
            ".blackhole-binary-image"
        );

    if (binaryImage) {

        binaryImage.addEventListener(
            "load",
            () => {

                binaryImage.classList.add(
                    "blackhole-binary-image-loaded"
                );

            }
        );

    }


    /* REVEAL ANIMATION */

    const revealElements =
        binarySection.querySelectorAll(
            ".blackhole-binary-stage, " +
            ".blackhole-binary-gravity-card, " +
            ".blackhole-binary-wave-visual, " +
            ".blackhole-binary-fact, " +
            ".blackhole-binary-bottom-card"
        );


    const binaryObserver =
        new IntersectionObserver(
            (entries, observer) => {

                entries.forEach((entry) => {

                    if (!entry.isIntersecting) return;

                    entry.target.classList.add(
                        "blackhole-binary-visible"
                    );

                    observer.unobserve(entry.target);

                });

            },
            {
                threshold: 0.12
            }
        );


    revealElements.forEach(
        (element, index) => {

            element.style.opacity = "0";

            element.style.transform =
                "translateY(28px)";

            element.style.transition =
                "opacity 0.75s ease, " +
                "transform 0.75s ease";

            element.style.transitionDelay =
                `${index * 85}ms`;

            binaryObserver.observe(element);

        }
    );


    /* REVEAL STYLE */

    const revealStyle =
        document.createElement("style");

    revealStyle.textContent = `

        .blackhole-binary-visible {

            opacity: 1 !important;

            transform:
                translateY(0) !important;

        }

    `;

    document.head.appendChild(revealStyle);


    /* IMAGE PARALLAX */

    const imageFrame =
        binarySection.querySelector(
            ".blackhole-binary-image-frame"
        );


    if (
        imageFrame &&
        binaryImage &&
        window.innerWidth > 700
    ) {

        imageFrame.addEventListener(
            "mousemove",
            (event) => {

                const rect =
                    imageFrame.getBoundingClientRect();

                const x =
                    (event.clientX - rect.left)
                    / rect.width;

                const y =
                    (event.clientY - rect.top)
                    / rect.height;

                const moveX =
                    (x - 0.5) * 8;

                const moveY =
                    (y - 0.5) * 8;

                binaryImage.style.transform =
                    `scale(1.06)
                     translate(${moveX}px, ${moveY}px)`;

            }
        );


        imageFrame.addEventListener(
            "mouseleave",
            () => {

                binaryImage.style.transform =
                    "scale(1.025)";

            }
        );

    }


    /* BLACK HOLE INTERACTION */

    const binaryHoles =
        binarySection.querySelectorAll(
            ".blackhole-binary-hole"
        );


    binaryHoles.forEach((hole) => {

        hole.addEventListener(
            "mouseenter",
            () => {

                hole.style.filter =
                    "brightness(1.35)";

            }
        );


        hole.addEventListener(
            "mouseleave",
            () => {

                hole.style.filter = "";

            }
        );

    });


    /* WAVE VISUAL INTERACTION */

    const waveVisual =
        binarySection.querySelector(
            ".blackhole-binary-wave-visual"
        );


    if (waveVisual) {

        waveVisual.addEventListener(
            "mouseenter",
            () => {

                waveVisual.classList.add(
                    "binary-wave-active"
                );

            }
        );


        waveVisual.addEventListener(
            "mouseleave",
            () => {

                waveVisual.classList.remove(
                    "binary-wave-active"
                );

            }
        );

    }


    console.log(
        "🌀 Black Hole Explorer — " +
        "Binary Black Hole Merger பகுதி இயங்குகிறது."
    );

});
/* =========================================================
   SECTION 09 — FINAL EXPLORATION
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const finalSection =
        document.querySelector("#blackhole-final");

    if (!finalSection) return;


    /* FINAL HERO REVEAL */

    const finalHero =
        finalSection.querySelector(
            ".blackhole-final-hero"
        );


    if (finalHero) {

        finalHero.style.opacity = "0";
        finalHero.style.transform =
            "translateY(30px)";

        finalHero.style.transition =
            "opacity 1s ease, transform 1s ease";


        const heroObserver =
            new IntersectionObserver(
                (entries, observer) => {

                    entries.forEach((entry) => {

                        if (!entry.isIntersecting) return;

                        finalHero.style.opacity = "1";

                        finalHero.style.transform =
                            "translateY(0)";

                        observer.unobserve(
                            entry.target
                        );

                    });

                },
                {
                    threshold: 0.15
                }
            );


        heroObserver.observe(finalHero);

    }


    /* FINAL NAV CARDS */

    const navigationCards =
        finalSection.querySelectorAll(
            ".blackhole-final-nav-card"
        );


    const navigationObserver =
        new IntersectionObserver(
            (entries, observer) => {

                entries.forEach((entry) => {

                    if (!entry.isIntersecting) return;

                    entry.target.classList.add(
                        "blackhole-final-visible"
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


    navigationCards.forEach(
        (card, index) => {

            card.style.opacity = "0";

            card.style.transform =
                "translateY(22px)";

            card.style.transition =
                "opacity 0.7s ease, " +
                "transform 0.7s ease";

            card.style.transitionDelay =
                `${index * 100}ms`;

            navigationObserver.observe(card);

        }
    );


    /* SUMMARY CARDS */

    const summaryCards =
        finalSection.querySelectorAll(
            ".blackhole-final-summary-card"
        );


    summaryCards.forEach(
        (card, index) => {

            card.style.opacity = "0";

            card.style.transform =
                "translateY(20px)";

            card.style.transition =
                "opacity 0.65s ease, " +
                "transform 0.65s ease";

            card.style.transitionDelay =
                `${index * 70}ms`;

            navigationObserver.observe(card);

        }
    );


    /* DYNAMIC VISIBILITY STYLE */

    const finalStyle =
        document.createElement("style");


    finalStyle.textContent = `

        .blackhole-final-visible {

            opacity: 1 !important;

            transform:
                translateY(0) !important;

        }

    `;


    document.head.appendChild(finalStyle);


    /* SMOOTH BACK TO TOP */

    const backToTop =
        finalSection.querySelector(
            'a[href="#blackhole-introduction"]'
        );


    if (backToTop) {

        backToTop.addEventListener(
            "click",
            (event) => {

                event.preventDefault();

                const introduction =
                    document.querySelector(
                        "#blackhole-introduction"
                    );

                if (introduction) {

                    introduction.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }

            }
        );

    }


    /* FINAL HERO MOUSE PARALLAX */

    if (
        finalHero &&
        window.innerWidth > 750
    ) {

        finalHero.addEventListener(
            "mousemove",
            (event) => {

                const rect =
                    finalHero.getBoundingClientRect();

                const x =
                    (event.clientX - rect.left)
                    / rect.width;

                const y =
                    (event.clientY - rect.top)
                    / rect.height;

                const moveX =
                    (x - 0.5) * 8;

                const moveY =
                    (y - 0.5) * 8;

                finalHero.style.backgroundPosition =
                    `${50 + moveX}% ${50 + moveY}%`;

            }
        );

    }


    console.log(
        "🌌 Black Hole Explorer — " +
        "முழு Explorer successfully loaded."
    );

});
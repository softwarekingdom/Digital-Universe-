/* =========================================================
   DIGITAL UNIVERSE
   UNIVERSE.JS
   PART 01
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {


    /* =====================================================
       HERO ELEMENTS
       ===================================================== */

    const hero =
        document.querySelector(".universe-hero");

    const cosmicVisual =
        document.querySelector(".hero-cosmic-visual");

    const cosmicCore =
        document.querySelector(".cosmic-core");

    const cosmicLabels =
        document.querySelectorAll(".cosmic-label");


    if (!hero) {
        return;
    }


    /* =====================================================
       SMOOTH ANCHOR SCROLL
       ===================================================== */

    const heroLinks =
        document.querySelectorAll(
            '.universe-hero a[href^="#"]'
        );


    heroLinks.forEach((link) => {

        link.addEventListener("click", (event) => {

            const targetId =
                link.getAttribute("href");

            const target =
                document.querySelector(targetId);

            if (!target) {
                return;
            }

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });


    /* =====================================================
       DESKTOP COSMIC PARALLAX
       ===================================================== */

    const finePointer =
        window.matchMedia(
            "(pointer: fine)"
        );


    if (
        finePointer.matches &&
        cosmicVisual
    ) {

        hero.addEventListener(
            "pointermove",
            (event) => {

                const rect =
                    hero.getBoundingClientRect();

                const x =
                    (event.clientX - rect.left)
                    / rect.width
                    - 0.5;

                const y =
                    (event.clientY - rect.top)
                    / rect.height
                    - 0.5;


                if (cosmicCore) {

                    cosmicCore.style.transform =
                        `translate(
                            ${x * 10}px,
                            ${y * 10}px
                        )`;

                }


                cosmicLabels.forEach(
                    (label, index) => {

                        const strength =
                            5 + index * 2;

                        label.style.transform =
                            `translate(
                                ${x * strength}px,
                                ${y * strength}px
                            )`;

                    }
                );

            }
        );


        hero.addEventListener(
            "pointerleave",
            () => {

                if (cosmicCore) {

                    cosmicCore.style.transform =
                        "";

                }


                cosmicLabels.forEach(
                    (label) => {

                        label.style.transform =
                            "";

                    }
                );

            }
        );

    }


    /* =====================================================
       HERO VISIBILITY
       ===================================================== */

    if ("IntersectionObserver" in window) {

        const observer =
            new IntersectionObserver(
                (entries) => {

                    entries.forEach(
                        (entry) => {

                            if (entry.isIntersecting) {

                                hero.classList.add(
                                    "hero-visible"
                                );

                            }

                        }
                    );

                },
                {
                    threshold: 0.15
                }
            );


        observer.observe(hero);

    }


    /* =====================================================
       DEBUG
       ===================================================== */

    console.log(
        "🌌 Digital Universe — Hero loaded successfully."
    );

});
/* =========================================================
   DIGITAL UNIVERSE
   UNIVERSE.JS
   PART 02
   SECTION: WHAT IS THE UNIVERSE?
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {


    const introduction =
        document.querySelector(
            ".universe-introduction"
        );


    if (!introduction) {
        return;
    }


    /* =====================================================
       REVEAL ANIMATION
       ===================================================== */

    const revealElements =
        introduction.querySelectorAll(
            ".introduction-header, " +
            ".introduction-visual, " +
            ".introduction-content, " +
            ".introduction-science-note, " +
            ".cosmic-scale-section"
        );


    revealElements.forEach((element) => {

        element.style.opacity = "0";

        element.style.transform =
            "translateY(24px)";

        element.style.transition =
            "opacity 700ms ease, transform 700ms ease";

    });


    if ("IntersectionObserver" in window) {

        const observer =
            new IntersectionObserver(
                (entries) => {

                    entries.forEach((entry) => {

                        if (!entry.isIntersecting) {
                            return;
                        }


                        entry.target.style.opacity =
                            "1";

                        entry.target.style.transform =
                            "translateY(0)";


                        observer.unobserve(
                            entry.target
                        );

                    });

                },
                {
                    threshold: 0.12
                }
            );


        revealElements.forEach((element) => {

            observer.observe(element);

        });

    } else {

        revealElements.forEach((element) => {

            element.style.opacity =
                "1";

            element.style.transform =
                "translateY(0)";

        });

    }


    /* =====================================================
       CONCEPT CARD HOVER
       ===================================================== */

    const cards =
        introduction.querySelectorAll(
            ".universe-concept-card"
        );


    cards.forEach((card) => {

        card.addEventListener(
            "pointerenter",
            () => {

                card.classList.add(
                    "concept-active"
                );

            }
        );


        card.addEventListener(
            "pointerleave",
            () => {

                card.classList.remove(
                    "concept-active"
                );

            }
        );

    });


    /* =====================================================
       SCALE HORIZONTAL SCROLL
       ===================================================== */

    const scaleLine =
        introduction.querySelector(
            ".scale-line"
        );


    if (scaleLine) {

        scaleLine.addEventListener(
            "wheel",
            (event) => {

                if (
                    scaleLine.scrollWidth >
                    scaleLine.clientWidth
                ) {

                    event.preventDefault();

                    scaleLine.scrollLeft +=
                        event.deltaY;

                }

            },
            {
                passive: false
            }
        );

    }


    /* =====================================================
       DEBUG
       ===================================================== */

    console.log(
        "🌌 Digital Universe — Introduction section loaded."
    );

});
/* =========================================================
   DIGITAL UNIVERSE
   UNIVERSE.JS
   PART 03
   SECTION: BIG BANG
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {


    const bigBang =
        document.querySelector(
            ".bigbang-section"
        );


    if (!bigBang) {
        return;
    }


    /* =====================================================
       REVEAL ELEMENTS
       ===================================================== */

    const revealElements =
        bigBang.querySelectorAll(
            ".bigbang-header, " +
            ".timeline-event, " +
            ".bigbang-visual, " +
            ".bigbang-evidence, " +
            ".bigbang-facts"
        );


    revealElements.forEach((element) => {

        element.style.opacity =
            "0";

        element.style.transform =
            "translateY(24px)";

        element.style.transition =
            "opacity 700ms ease, " +
            "transform 700ms ease";

    });


    if ("IntersectionObserver" in window) {

        const observer =
            new IntersectionObserver(
                (entries) => {

                    entries.forEach((entry) => {

                        if (!entry.isIntersecting) {
                            return;
                        }


                        entry.target.style.opacity =
                            "1";

                        entry.target.style.transform =
                            "translateY(0)";


                        observer.unobserve(
                            entry.target
                        );

                    });

                },
                {
                    threshold: 0.10
                }
            );


        revealElements.forEach((element) => {

            observer.observe(element);

        });

    } else {

        revealElements.forEach((element) => {

            element.style.opacity =
                "1";

            element.style.transform =
                "translateY(0)";

        });

    }


    /* =====================================================
       TIMELINE CARD INTERACTION
       ===================================================== */

    const timelineCards =
        bigBang.querySelectorAll(
            ".timeline-card"
        );


    timelineCards.forEach((card) => {

        card.addEventListener(
            "pointerenter",
            () => {

                card.classList.add(
                    "timeline-active"
                );

            }
        );


        card.addEventListener(
            "pointerleave",
            () => {

                card.classList.remove(
                    "timeline-active"
                );

            }
        );

    });


    /* =====================================================
       EXPANSION VISUAL PARALLAX
       ===================================================== */

    const visual =
        bigBang.querySelector(
            ".bigbang-visual"
        );


    const center =
        bigBang.querySelector(
            ".expansion-center"
        );


    const particles =
        bigBang.querySelectorAll(
            ".expansion-particle"
        );


    const finePointer =
        window.matchMedia(
            "(pointer: fine)"
        );


    if (
        visual &&
        finePointer.matches
    ) {

        visual.addEventListener(
            "pointermove",
            (event) => {

                const rect =
                    visual.getBoundingClientRect();


                const x =
                    (
                        event.clientX -
                        rect.left
                    ) / rect.width - 0.5;


                const y =
                    (
                        event.clientY -
                        rect.top
                    ) / rect.height - 0.5;


                if (center) {

                    center.style.transform =
                        `translate(
                            ${x * 8}px,
                            ${y * 8}px
                        )`;

                }


                particles.forEach(
                    (particle, index) => {

                        const strength =
                            4 + index * 1.5;

                        particle.style.marginLeft =
                            `${x * strength}px`;

                        particle.style.marginTop =
                            `${y * strength}px`;

                    }
                );

            }
        );


        visual.addEventListener(
            "pointerleave",
            () => {

                if (center) {

                    center.style.transform =
                        "";

                }


                particles.forEach(
                    (particle) => {

                        particle.style.marginLeft =
                            "";

                        particle.style.marginTop =
                            "";

                    }
                );

            }
        );

    }


    /* =====================================================
       DEBUG
       ===================================================== */

    console.log(
        "🌌 Digital Universe — Big Bang section loaded."
    );

});
/* =========================================================
   DIGITAL UNIVERSE
   UNIVERSE.JS
   PART 04
   SECTION: COSMIC WEB
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {


    const cosmicWeb =
        document.querySelector(
            ".cosmicweb-section"
        );


    if (!cosmicWeb) {
        return;
    }


    /* =====================================================
       REVEAL
       ===================================================== */

    const revealElements =
        cosmicWeb.querySelectorAll(
            ".cosmicweb-header, " +
            ".cosmicweb-visual, " +
            ".structure-card, " +
            ".cosmicweb-scale, " +
            ".cosmicweb-note"
        );


    revealElements.forEach(
        (element) => {

            element.style.opacity =
                "0";

            element.style.transform =
                "translateY(24px)";

            element.style.transition =
                "opacity 700ms ease, " +
                "transform 700ms ease";

        }
    );


    if (
        "IntersectionObserver"
        in window
    ) {

        const observer =
            new IntersectionObserver(
                (entries) => {

                    entries.forEach(
                        (entry) => {

                            if (
                                !entry.isIntersecting
                            ) {
                                return;
                            }


                            entry.target.style.opacity =
                                "1";

                            entry.target.style.transform =
                                "translateY(0)";


                            observer.unobserve(
                                entry.target
                            );

                        }
                    );

                },
                {
                    threshold:
                        0.08
                }
            );


        revealElements.forEach(
            (element) => {

                observer.observe(
                    element
                );

            }
        );

    } else {

        revealElements.forEach(
            (element) => {

                element.style.opacity =
                    "1";

                element.style.transform =
                    "translateY(0)";

            }
        );

    }


    /* =====================================================
       WEB PARALLAX
       ===================================================== */

    const visual =
        cosmicWeb.querySelector(
            ".cosmicweb-visual"
        );


    const cluster =
        cosmicWeb.querySelector(
            ".web-cluster"
        );


    const nodes =
        cosmicWeb.querySelectorAll(
            ".web-node"
        );


    const finePointer =
        window.matchMedia(
            "(pointer: fine)"
        );


    if (
        visual &&
        finePointer.matches
    ) {

        visual.addEventListener(
            "pointermove",
            (event) => {

                const rect =
                    visual.getBoundingClientRect();


                const x =
                    (
                        event.clientX -
                        rect.left
                    ) / rect.width -
                    0.5;


                const y =
                    (
                        event.clientY -
                        rect.top
                    ) / rect.height -
                    0.5;


                if (cluster) {

                    cluster.style.transform =
                        `translate(
                            calc(-50% + ${x * 8}px),
                            calc(-50% + ${y * 8}px)
                        )`;

                }


                nodes.forEach(
                    (node, index) => {

                        const strength =
                            2 +
                            (index % 4) * 1.5;


                        node.style.marginLeft =
                            `${x * strength}px`;

                        node.style.marginTop =
                            `${y * strength}px`;

                    }
                );

            }
        );


        visual.addEventListener(
            "pointerleave",
            () => {

                if (cluster) {

                    cluster.style.transform =
                        "translate(-50%, -50%)";

                }


                nodes.forEach(
                    (node) => {

                        node.style.marginLeft =
                            "";

                        node.style.marginTop =
                            "";

                    }
                );

            }
        );

    }


    /* =====================================================
       STRUCTURE CARD INTERACTION
       ===================================================== */

    const cards =
        cosmicWeb.querySelectorAll(
            ".structure-card"
        );


    cards.forEach(
        (card) => {

            card.addEventListener(
                "pointerenter",
                () => {

                    card.classList.add(
                        "structure-active"
                    );

                }
            );


            card.addEventListener(
                "pointerleave",
                () => {

                    card.classList.remove(
                        "structure-active"
                    );

                }
            );

        }
    );


    /* =====================================================
       SCALE TRACK
       ===================================================== */

    const scaleTrack =
        cosmicWeb.querySelector(
            ".scale-track"
        );


    if (scaleTrack) {

        scaleTrack.addEventListener(
            "wheel",
            (event) => {

                if (
                    Math.abs(
                        event.deltaY
                    ) <=
                    Math.abs(
                        event.deltaX
                    )
                ) {
                    return;
                }


                if (
                    scaleTrack.scrollWidth <=
                    scaleTrack.clientWidth
                ) {
                    return;
                }


                event.preventDefault();


                scaleTrack.scrollLeft +=
                    event.deltaY;

            },
            {
                passive:
                    false
            }
        );

    }


    /* =====================================================
       DEBUG
       ===================================================== */

    console.log(
        "🌌 Digital Universe — Cosmic Web section loaded."
    );

});
 /* =========================================================
    DIGITAL UNIVERSE
    UNIVERSE.JS
    PART 05
    SECTION: GALAXIES
    ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {


        const galaxies =
            document.querySelector(
                ".galaxies-section"
            );


        if (!galaxies) {
            return;
        }


        /* =================================================
           REVEAL
           ================================================= */

        const revealElements =
            galaxies.querySelectorAll(
                ".galaxies-header, " +
                ".galaxy-showcase, " +
                ".galaxy-type-card, " +
                ".milkyway-highlight, " +
                ".galaxy-formation"
            );


        revealElements.forEach(
            (element) => {

                element.style.opacity =
                    "0";

                element.style.transform =
                    "translateY(24px)";

                element.style.transition =
                    "opacity 700ms ease, " +
                    "transform 700ms ease";

            }
        );


        if (
            "IntersectionObserver"
            in window
        ) {

            const observer =
                new IntersectionObserver(
                    (entries) => {

                        entries.forEach(
                            (entry) => {

                                if (
                                    !entry.isIntersecting
                                ) {
                                    return;
                                }


                                entry.target.style.opacity =
                                    "1";

                                entry.target.style.transform =
                                    "translateY(0)";


                                observer.unobserve(
                                    entry.target
                                );

                            }
                        );

                    },
                    {
                        threshold:
                            0.08
                    }
                );


            revealElements.forEach(
                (element) => {

                    observer.observe(
                        element
                    );

                }
            );

        } else {

            revealElements.forEach(
                (element) => {

                    element.style.opacity =
                        "1";

                    element.style.transform =
                        "translateY(0)";

                }
            );

        }


        /* =================================================
           GALAXY PARALLAX
           ================================================= */

        const visual =
            galaxies.querySelector(
                ".galaxy-visual"
            );


        const core =
            galaxies.querySelector(
                ".galaxy-core"
            );


        const particles =
            galaxies.querySelectorAll(
                ".galaxy-particle"
            );


        const finePointer =
            window.matchMedia(
                "(pointer: fine)"
            );


        if (
            visual &&
            finePointer.matches
        ) {

            visual.addEventListener(
                "pointermove",
                (event) => {

                    const rect =
                        visual.getBoundingClientRect();


                    const x =
                        (
                            event.clientX -
                            rect.left
                        ) / rect.width -
                        0.5;


                    const y =
                        (
                            event.clientY -
                            rect.top
                        ) / rect.height -
                        0.5;


                    if (core) {

                        core.style.transform =
                            `translate(
                                ${x * 7}px,
                                ${y * 7}px
                            )`;

                    }


                    particles.forEach(
                        (particle, index) => {

                            const strength =
                                2 +
                                (index % 4) * 1.3;


                            particle.style.marginLeft =
                                `${x * strength}px`;

                            particle.style.marginTop =
                                `${y * strength}px`;

                        }
                    );

                }
            );


            visual.addEventListener(
                "pointerleave",
                () => {

                    if (core) {

                        core.style.transform =
                            "";

                    }


                    particles.forEach(
                        (particle) => {

                            particle.style.marginLeft =
                                "";

                            particle.style.marginTop =
                                "";

                        }
                    );

                }
            );

        }


        /* =================================================
           TYPE CARD INTERACTION
           ================================================= */

        const typeCards =
            galaxies.querySelectorAll(
                ".galaxy-type-card"
            );


        typeCards.forEach(
            (card) => {

                card.addEventListener(
                    "pointerenter",
                    () => {

                        card.classList.add(
                            "galaxy-type-active"
                        );

                    }
                );


                card.addEventListener(
                    "pointerleave",
                    () => {

                        card.classList.remove(
                            "galaxy-type-active"
                        );

                    }
                );

            }
        );


        /* =================================================
           MILKY WAY VISUAL
           ================================================= */

        const milkyway =
            galaxies.querySelector(
                ".milkyway-visual"
            );


        const milkywayCore =
            galaxies.querySelector(
                ".milkyway-core"
            );


        if (
            milkyway &&
            milkywayCore &&
            finePointer.matches
        ) {

            milkyway.addEventListener(
                "pointermove",
                (event) => {

                    const rect =
                        milkyway.getBoundingClientRect();


                    const x =
                        (
                            event.clientX -
                            rect.left
                        ) / rect.width -
                        0.5;


                    const y =
                        (
                            event.clientY -
                            rect.top
                        ) / rect.height -
                        0.5;


                    milkywayCore.style.transform =
                        `translate(
                            ${x * 6}px,
                            ${y * 6}px
                        )`;

                }
            );


            milkyway.addEventListener(
                "pointerleave",
                () => {

                    milkywayCore.style.transform =
                        "";

                }
            );

        }


        /* =================================================
           DEBUG
           ================================================= */

        console.log(
            "🌌 Digital Universe — Galaxies section loaded."
        );

    }
);
 /* =========================================================
    DIGITAL UNIVERSE
    UNIVERSE.JS
    PART 06
    SECTION: DARK MATTER + DARK ENERGY
    ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {


        const darkSection =
            document.querySelector(
                ".dark-section"
            );


        if (!darkSection) {
            return;
        }


        /* =================================================
           REVEAL
           ================================================= */

        const revealElements =
            darkSection.querySelectorAll(
                ".dark-header, " +
                ".dark-world, " +
                ".cosmic-balance, " +
                ".dark-questions, " +
                ".dark-science-note"
            );


        revealElements.forEach(
            (element) => {

                element.style.opacity =
                    "0";

                element.style.transform =
                    "translateY(24px)";

                element.style.transition =
                    "opacity 700ms ease, " +
                    "transform 700ms ease";

            }
        );


        if (
            "IntersectionObserver"
            in window
        ) {

            const observer =
                new IntersectionObserver(
                    (entries) => {

                        entries.forEach(
                            (entry) => {

                                if (
                                    !entry.isIntersecting
                                ) {
                                    return;
                                }


                                entry.target.style.opacity =
                                    "1";

                                entry.target.style.transform =
                                    "translateY(0)";


                                observer.unobserve(
                                    entry.target
                                );

                            }
                        );

                    },
                    {
                        threshold:
                            0.08
                    }
                );


            revealElements.forEach(
                (element) => {

                    observer.observe(
                        element
                    );

                }
            );

        } else {

            revealElements.forEach(
                (element) => {

                    element.style.opacity =
                        "1";

                    element.style.transform =
                        "translateY(0)";

                }
            );

        }


        /* =================================================
           MATTER VISUAL PARALLAX
           ================================================= */

        const matterWorld =
            darkSection.querySelector(
                ".dark-matter-world"
            );


        const matterGalaxy =
            darkSection.querySelector(
                ".matter-galaxy"
            );


        const matterParticles =
            darkSection.querySelectorAll(
                ".matter-particle"
            );


        /* =================================================
           ENERGY VISUAL
           ================================================= */

        const energyWorld =
            darkSection.querySelector(
                ".dark-energy-world"
            );


        const energyCenter =
            darkSection.querySelector(
                ".energy-center"
            );


        const finePointer =
            window.matchMedia(
                "(pointer: fine)"
            );


        if (
            finePointer.matches
        ) {


            if (
                matterWorld &&
                matterGalaxy
            ) {

                matterWorld.addEventListener(
                    "pointermove",
                    (event) => {

                        const visual =
                            matterWorld.querySelector(
                                ".dark-world-visual"
                            );


                        if (!visual) {
                            return;
                        }


                        const rect =
                            visual.getBoundingClientRect();


                        const x =
                            (
                                event.clientX -
                                rect.left
                            ) / rect.width -
                            0.5;


                        const y =
                            (
                                event.clientY -
                                rect.top
                            ) / rect.height -
                            0.5;


                        matterGalaxy.style.transform =
                            `translate(
                                ${x * 7}px,
                                ${y * 7}px
                            ) rotate(-14deg)`;


                        matterParticles.forEach(
                            (particle, index) => {

                                const strength =
                                    2 +
                                    (index % 4) * 1.4;


                                particle.style.marginLeft =
                                    `${x * strength}px`;

                                particle.style.marginTop =
                                    `${y * strength}px`;

                            }
                        );

                    }
                );


                matterWorld.addEventListener(
                    "pointerleave",
                    () => {

                        matterGalaxy.style.transform =
                            "rotate(-14deg)";


                        matterParticles.forEach(
                            (particle) => {

                                particle.style.marginLeft =
                                    "";

                                particle.style.marginTop =
                                    "";

                            }
                        );

                    }
                );

            }


            if (
                energyWorld &&
                energyCenter
            ) {

                energyWorld.addEventListener(
                    "pointermove",
                    (event) => {

                        const visual =
                            energyWorld.querySelector(
                                ".dark-world-visual"
                            );


                        if (!visual) {
                            return;
                        }


                        const rect =
                            visual.getBoundingClientRect();


                        const x =
                            (
                                event.clientX -
                                rect.left
                            ) / rect.width -
                            0.5;


                        const y =
                            (
                                event.clientY -
                                rect.top
                            ) / rect.height -
                            0.5;


                        energyCenter.style.transform =
                            `translate(
                                ${x * 7}px,
                                ${y * 7}px
                            )`;

                    }
                );


                energyWorld.addEventListener(
                    "pointerleave",
                    () => {

                        energyCenter.style.transform =
                            "";

                    }
                );

            }

        }


        /* =================================================
           BALANCE BAR
           ================================================= */

        const balanceBar =
            darkSection.querySelector(
                ".balance-bar"
            );


        if (balanceBar) {

            balanceBar.setAttribute(
                "role",
                "img"
            );

            balanceBar.setAttribute(
                "aria-label",
                "Approximate cosmic composition: " +
                "68 percent dark energy, " +
                "27 percent dark matter, " +
                "5 percent normal matter"
            );

        }


        /* =================================================
           DEBUG
           ================================================= */

        console.log(
            "🌌 Digital Universe — Dark Universe section loaded."
        );

    }
);
/* ==================================================
   PART 07
   BLACK HOLES + SUPERNOVAE
   ================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const extremeSection =
        document.querySelector(".extreme-section");

    if (!extremeSection) {
        return;
    }


    /* ==================================================
       REVEAL ANIMATION
       ================================================== */

    const revealItems =
        extremeSection.querySelectorAll(
            ".blackhole-world, " +
            ".supernova-world, " +
            ".extreme-consequences, " +
            ".extreme-science-statement"
        );


    const revealObserver =
        new IntersectionObserver(
            (entries, observer) => {

                entries.forEach(entry => {

                    if (!entry.isIntersecting) {
                        return;
                    }

                    entry.target.style.opacity = "1";
                    entry.target.style.transform =
                        "translateY(0)";

                    observer.unobserve(entry.target);

                });

            },
            {
                threshold: 0.12
            }
        );


    revealItems.forEach(item => {

        item.style.opacity = "0";

        item.style.transform =
            "translateY(35px)";

        item.style.transition =
            "opacity .8s ease, transform .8s ease";

        revealObserver.observe(item);

    });



    /* ==================================================
       BLACK HOLE PARALLAX
       ================================================== */

    const blackholeVisual =
        document.querySelector(".blackhole-visual");


    const blackholeCore =
        document.querySelector(".blackhole-shadow");


    const accretion =
        document.querySelector(".blackhole-accretion");


    if (
        blackholeVisual &&
        blackholeCore &&
        accretion
    ) {

        blackholeVisual.addEventListener(
            "pointermove",
            event => {

                const rect =
                    blackholeVisual.getBoundingClientRect();

                const x =
                    (event.clientX - rect.left) /
                    rect.width -
                    0.5;

                const y =
                    (event.clientY - rect.top) /
                    rect.height -
                    0.5;


                blackholeCore.style.transform =
                    `translate(${x * 8}px, ${y * 8}px)`;


                accretion.style.transform =
                    `translate(${x * 12}px, ${y * 12}px) rotate(${x * 2}deg)`;

            }
        );


        blackholeVisual.addEventListener(
            "pointerleave",
            () => {

                blackholeCore.style.transform =
                    "translate(0, 0)";

                accretion.style.transform =
                    "translate(0, 0) rotate(0deg)";

            }
        );

    }



    /* ==================================================
       SUPERNOVA PARALLAX
       ================================================== */

    const supernovaVisual =
        document.querySelector(".supernova-visual");


    const supernovaCore =
        document.querySelector(".supernova-core");


    if (
        supernovaVisual &&
        supernovaCore
    ) {

        supernovaVisual.addEventListener(
            "pointermove",
            event => {

                const rect =
                    supernovaVisual.getBoundingClientRect();

                const x =
                    (event.clientX - rect.left) /
                    rect.width -
                    0.5;

                const y =
                    (event.clientY - rect.top) /
                    rect.height -
                    0.5;


                supernovaCore.style.transform =
                    `translate(${x * 10}px, ${y * 10}px)`;

            }
        );


        supernovaVisual.addEventListener(
            "pointerleave",
            () => {

                supernovaCore.style.transform =
                    "translate(0, 0)";

            }
        );

    }



    /* ==================================================
       SUPERNOVA PARTICLE MOTION
       ================================================== */

    const particles =
        extremeSection.querySelectorAll(
            ".supernova-particle"
        );


    particles.forEach((particle, index) => {

        const duration =
            3 + (index * 0.35);

        const delay =
            index * 0.22;

        particle.style.animation =
            `extremeParticleFloat ${duration}s ease-in-out ${delay}s infinite alternate`;

    });



    /* ==================================================
       BLACK HOLE PARTICLE MOTION
       ================================================== */

    const blackholeParticles =
        extremeSection.querySelectorAll(
            ".blackhole-particle"
        );


    blackholeParticles.forEach(
        (particle, index) => {

            const duration =
                2.8 + (index * 0.3);

            const delay =
                index * 0.18;

            particle.style.animation =
                `extremeParticleFloat ${duration}s ease-in-out ${delay}s infinite alternate`;

        }
    );



    /* ==================================================
       DYNAMIC PARTICLE KEYFRAMES
       ================================================== */

    if (
        !document.getElementById(
            "extreme-particle-keyframes"
        )
    ) {

        const style =
            document.createElement("style");

        style.id =
            "extreme-particle-keyframes";

        style.textContent = `
            @keyframes extremeParticleFloat {

                from {
                    transform:
                        translate3d(0, 0, 0)
                        scale(.8);
                    opacity: .45;
                }

                to {
                    transform:
                        translate3d(0, -12px, 0)
                        scale(1.25);
                    opacity: 1;
                }

            }
        `;

        document.head.appendChild(style);

    }



    /* ==================================================
       HOVER TILT — CONSEQUENCE CARDS
       ================================================== */

    const consequenceCards =
        extremeSection.querySelectorAll(
            ".consequence-card"
        );


    consequenceCards.forEach(card => {

        card.addEventListener(
            "pointermove",
            event => {

                if (window.innerWidth < 700) {
                    return;
                }

                const rect =
                    card.getBoundingClientRect();

                const x =
                    (event.clientX - rect.left) /
                    rect.width -
                    0.5;

                const y =
                    (event.clientY - rect.top) /
                    rect.height -
                    0.5;


                card.style.transform =
                    `perspective(700px)
                     rotateX(${y * -3}deg)
                     rotateY(${x * 3}deg)
                     translateY(-6px)`;

            }
        );


        card.addEventListener(
            "pointerleave",
            () => {

                card.style.transform =
                    "";

            }
        );

    });



    /* ==================================================
       ACCESSIBILITY
       ================================================== */

    const blackholeWorld =
        document.querySelector(
            "#blackHoleWorld"
        );


    const supernovaWorld =
        document.querySelector(
            "#supernovaWorld"
        );


    if (blackholeWorld) {
        blackholeWorld.setAttribute(
            "aria-label",
            "கருந்துளை பற்றிய அறிவியல் பகுதி"
        );
    }


    if (supernovaWorld) {
        supernovaWorld.setAttribute(
            "aria-label",
            "Supernova பற்றிய அறிவியல் பகுதி"
        );
    }



    /* ==================================================
       DEBUG
       ================================================== */

    console.log(
        "🌌 Digital Universe — Part 07 loaded successfully."
    );

});
/* ==================================================
   PART 08
   HUMAN SPACE EXPLORATION
   ================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const section =
        document.querySelector(
            ".exploration-section"
        );

    if (!section) {
        return;
    }



    /* ==================================================
       REVEAL ANIMATION
       ================================================== */

    const revealItems =
        section.querySelectorAll(
            ".exploration-hero," +
            ".space-history," +
            ".exploration-methods," +
            ".future-exploration," +
            ".exploration-statement"
        );


    const observer =
        new IntersectionObserver(
            (entries, obs) => {

                entries.forEach(entry => {

                    if (!entry.isIntersecting) {
                        return;
                    }


                    entry.target.style.opacity =
                        "1";

                    entry.target.style.transform =
                        "translateY(0)";


                    obs.unobserve(
                        entry.target
                    );

                });

            },
            {
                threshold: .12
            }
        );


    revealItems.forEach(item => {

        item.style.opacity = "0";

        item.style.transform =
            "translateY(30px)";

        item.style.transition =
            "opacity .8s ease, transform .8s ease";

        observer.observe(item);

    });



    /* ==================================================
       EARTH PARALLAX
       ================================================== */

    const orbitVisual =
        section.querySelector(
            ".exploration-orbit-visual"
        );


    const earth =
        section.querySelector(
            ".exploration-earth"
        );


    const satellite =
        section.querySelector(
            ".exploration-satellite"
        );


    if (
        orbitVisual &&
        earth &&
        satellite
    ) {

        orbitVisual.addEventListener(
            "pointermove",
            event => {

                if (window.innerWidth < 700) {
                    return;
                }


                const rect =
                    orbitVisual.getBoundingClientRect();


                const x =
                    (event.clientX - rect.left) /
                    rect.width -
                    .5;


                const y =
                    (event.clientY - rect.top) /
                    rect.height -
                    .5;


                earth.style.transform =
                    `translate(${x * 8}px, ${y * 8}px)`;


                satellite.style.transform =
                    `translate(${x * -15}px, ${y * -10}px)
                     rotate(-12deg)`;

            }
        );


        orbitVisual.addEventListener(
            "pointerleave",
            () => {

                earth.style.transform =
                    "";

                satellite.style.transform =
                    "rotate(-12deg)";

            }
        );

    }



    /* ==================================================
       FUTURE PLANET PARALLAX
       ================================================== */

    const futureVisual =
        section.querySelector(
            ".future-visual"
        );


    const futurePlanet =
        section.querySelector(
            ".future-planet"
        );


    if (
        futureVisual &&
        futurePlanet
    ) {

        futureVisual.addEventListener(
            "pointermove",
            event => {

                if (window.innerWidth < 700) {
                    return;
                }


                const rect =
                    futureVisual.getBoundingClientRect();


                const x =
                    (event.clientX - rect.left) /
                    rect.width -
                    .5;


                const y =
                    (event.clientY - rect.top) /
                    rect.height -
                    .5;


                futurePlanet.style.transform =
                    `translate(${x * 7}px, ${y * 7}px)`;

            }
        );


        futureVisual.addEventListener(
            "pointerleave",
            () => {

                futurePlanet.style.transform =
                    "";

            }
        );

    }



    /* ==================================================
       TIMELINE CARD MOTION
       ================================================== */

    const eventCards =
        section.querySelectorAll(
            ".space-event-card"
        );


    eventCards.forEach(
        (card, index) => {

            card.style.transitionDelay =
                `${index * .04}s`;

        }
    );



    /* ==================================================
       ACCESSIBILITY
       ================================================== */

    const hero =
        section.querySelector(
            ".exploration-hero"
        );


    if (hero) {

        hero.setAttribute(
            "aria-label",
            "மனித விண்வெளி ஆய்வு"
        );

    }



    /* ==================================================
       DEBUG
       ================================================== */

    console.log(
        "🚀 Digital Universe — Part 08 loaded successfully."
    );

});
/* ==================================================
   PART 09
   UNIVERSE DESTINATIONS
   ================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const section =
        document.querySelector(
            ".destinations-section"
        );

    if (!section) {
        return;
    }



    /* ==================================================
       DESTINATION CARD REVEAL
       ================================================== */

    const cards =
        section.querySelectorAll(
            ".destination-card"
        );


    const cardObserver =
        new IntersectionObserver(
            (entries, observer) => {

                entries.forEach(entry => {

                    if (!entry.isIntersecting) {
                        return;
                    }


                    const card =
                        entry.target;


                    const index =
                        [...cards].indexOf(card);


                    card.style.opacity =
                        "1";

                    card.style.transform =
                        "translateY(0)";


                    card.style.transitionDelay =
                        `${index * 70}ms`;


                    observer.unobserve(card);

                });

            },
            {
                threshold: .1
            }
        );


    cards.forEach(card => {

        card.style.opacity = "0";

        card.style.transform =
            "translateY(28px)";

        card.style.transition =
            "opacity .7s ease, " +
            "transform .7s ease, " +
            "border-color .4s ease, " +
            "box-shadow .4s ease";


        cardObserver.observe(card);

    });



    /* ==================================================
       DESTINATION VISUAL PARALLAX
       ================================================== */

    cards.forEach(card => {

        const visual =
            card.querySelector(
                ".destination-visual"
            );


        if (!visual) {
            return;
        }


        card.addEventListener(
            "pointermove",
            event => {

                if (window.innerWidth < 700) {
                    return;
                }


                const rect =
                    card.getBoundingClientRect();


                const x =
                    (event.clientX - rect.left) /
                    rect.width -
                    .5;


                const y =
                    (event.clientY - rect.top) /
                    rect.height -
                    .5;


                visual.style.transform =
                    `translate(
                        ${x * 5}px,
                        ${y * 5}px
                    )`;

            }
        );


        card.addEventListener(
            "pointerleave",
            () => {

                visual.style.transform =
                    "";

            }
        );

    });



    /* ==================================================
       CARD KEYBOARD ACCESS
       ================================================== */

    cards.forEach(card => {

        if (
            card.tagName.toLowerCase() !== "a"
        ) {
            return;
        }


        card.addEventListener(
            "keydown",
            event => {

                if (
                    event.key === "Enter" ||
                    event.key === " "
                ) {

                    event.preventDefault();

                    card.click();

                }

            }
        );

    });



    /* ==================================================
       JOURNEY PROGRESS
       ================================================== */

    const journey =
        section.querySelector(
            ".journey-track"
        );


    const progress =
        section.querySelector(
            ".journey-progress"
        );


    if (journey && progress) {

        const updateProgress =
            () => {

                const rect =
                    journey.getBoundingClientRect();


                const viewportCenter =
                    window.innerHeight * .65;


                let value =
                    (viewportCenter - rect.top) /
                    rect.height;


                value =
                    Math.max(
                        0,
                        Math.min(1, value)
                    );


                if (
                    window.innerWidth <= 650
                ) {

                    progress.style.background =
                        `linear-gradient(
                            to bottom,
                            rgba(140,165,255,.35)
                            ${value * 100}%,
                            rgba(140,165,255,.08)
                            ${value * 100}%
                        )`;

                } else {

                    progress.style.background =
                        `linear-gradient(
                            90deg,
                            rgba(140,165,255,.35)
                            ${value * 100}%,
                            rgba(140,165,255,.08)
                            ${value * 100}%
                        )`;

                }

            };


        window.addEventListener(
            "scroll",
            updateProgress,
            {
                passive: true
            }
        );


        window.addEventListener(
            "resize",
            updateProgress
        );


        updateProgress();

    }



    /* ==================================================
       DESTINATION LINKS
       ================================================== */

    const destinationLinks =
        section.querySelectorAll(
            ".destination-card[href]"
        );


    destinationLinks.forEach(link => {

        link.addEventListener(
            "click",
            () => {

                link.setAttribute(
                    "aria-busy",
                    "true"
                );

            }
        );

    });



    /* ==================================================
       DEBUG
       ================================================== */

    console.log(
        "🌌 Digital Universe — Part 09 loaded successfully."
    );

});
/* =========================================================
   PART 10 — FINAL CTA + FOOTER JAVASCRIPT
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const finalSection =
        document.querySelector(".universe-final-section");

    const backTop =
        document.getElementById("universeBackTop");

    const yearElement =
        document.getElementById("universeYear");


    /* =====================================================
       CURRENT YEAR
       ===================================================== */

    if (yearElement) {

        yearElement.textContent =
            new Date().getFullYear();

    }



    /* =====================================================
       BACK TO TOP
       ===================================================== */

    if (backTop) {

        backTop.addEventListener("click", () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    }



    /* =====================================================
       FINAL SECTION REVEAL
       ===================================================== */

    if (finalSection) {

        finalSection.classList.add(
            "universe-final-ready"
        );


        const revealElements =
            finalSection.querySelectorAll(
                ".universe-final-title, " +
                ".universe-final-description, " +
                ".universe-final-actions, " +
                ".universe-final-visual, " +
                ".universe-final-science"
            );


        const observer =
            new IntersectionObserver(
                (entries, observerInstance) => {

                    entries.forEach(entry => {

                        if (!entry.isIntersecting) {
                            return;
                        }


                        entry.target.classList.add(
                            "universe-final-visible"
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


        revealElements.forEach(element => {

            observer.observe(element);

        });

    }



    /* =====================================================
       FOOTER LINK ACCESSIBILITY
       ===================================================== */

    const footerLinks =
        document.querySelectorAll(
            ".universe-footer-column a"
        );


    footerLinks.forEach(link => {

        link.addEventListener(
            "keydown",
            event => {

                if (event.key === "Enter") {

                    link.click();

                }

            }
        );

    });



    /* =====================================================
       FINAL COSMIC VISUAL PARALLAX
       ===================================================== */

    const finalVisual =
        document.querySelector(
            ".universe-final-visual"
        );


    if (
        finalVisual &&
        window.matchMedia(
            "(pointer: fine)"
        ).matches
    ) {

        finalVisual.addEventListener(
            "pointermove",
            event => {

                const rect =
                    finalVisual.getBoundingClientRect();


                const x =
                    (
                        event.clientX -
                        rect.left
                    ) /
                    rect.width -
                    0.5;


                const y =
                    (
                        event.clientY -
                        rect.top
                    ) /
                    rect.height -
                    0.5;


                finalVisual.style.transform =
                    `
                    perspective(900px)
                    rotateX(${y * -4}deg)
                    rotateY(${x * 4}deg)
                    `;
            }
        );


        finalVisual.addEventListener(
            "pointerleave",
            () => {

                finalVisual.style.transform =
                    "";

            }
        );

    }



    /* =====================================================
       CONSOLE STATUS
       ===================================================== */

    console.log(
        "🌌 Digital Universe — Final section initialized."
    );

});
/* =========================================================
   MAIN PAGE / DASHBOARD NAVIGATION
   ========================================================= */

const universeNavigationLinks =
    document.querySelectorAll(
        ".universe-footer-home, " +
        ".universe-footer-dashboard"
    );


universeNavigationLinks.forEach(link => {

    link.addEventListener("click", () => {

        link.setAttribute(
            "aria-busy",
            "true"
        );

        link.style.pointerEvents = "none";

    });

});
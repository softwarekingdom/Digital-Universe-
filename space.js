/* ==================================================
   DIGITAL UNIVERSE
   INDEX JS — PART 1
================================================== */


document.addEventListener(
    "DOMContentLoaded",
    () => {


        /* ==========================================
           MENU BUTTON
        =========================================== */

        const menuButton =
            document.getElementById(
                "menuButton"
            );


        if (menuButton) {

            menuButton.addEventListener(
                "click",
                () => {

                    menuButton.classList.toggle(
                        "active"
                    );

                }
            );

        }



        /* ==========================================
           HERO PARALLAX
        =========================================== */

        const hero =
            document.querySelector(
                ".hero-section"
            );


        const astronaut =
            document.querySelector(
                ".hero-astronaut"
            );


        const spaceship =
            document.querySelector(
                ".hero-spaceship"
            );


        if (hero) {

            hero.addEventListener(
                "mousemove",
                (event) => {

                    const x =
                        (
                            event.clientX /
                            window.innerWidth
                        ) - 0.5;


                    const y =
                        (
                            event.clientY /
                            window.innerHeight
                        ) - 0.5;


                    if (astronaut) {

                        astronaut.style.transform =
                            `
                            translate(
                                ${x * -18}px,
                                ${y * -18}px
                            )
                            `;

                    }


                    if (spaceship) {

                        spaceship.style.transform =
                            `
                            translate(
                                ${x * 30}px,
                                ${y * 30}px
                            )
                            `;

                    }

                }
            );

        }



        /* ==========================================
           SMOOTH INTERNAL LINKS
        =========================================== */

        const internalLinks =
            document.querySelectorAll(
                'a[href^="#"]'
            );


        internalLinks.forEach(
            (link) => {

                link.addEventListener(
                    "click",
                    (event) => {

                        const targetId =
                            link.getAttribute(
                                "href"
                            );


                        const target =
                            document.querySelector(
                                targetId
                            );


                        if (target) {

                            event.preventDefault();


                            target.scrollIntoView({
                                behavior:
                                    "smooth"
                            });

                        }

                    }
                );

            }
        );



        /* ==========================================
           CONSOLE MESSAGE
        =========================================== */

        console.log(
            "🌌 Digital Universe தொடங்கப்பட்டது."
        );

        console.log(
            "🚀 பிரபஞ்சப் பயணத்திற்கு வரவேற்கிறோம்!"
        );


    }
);
/* ==================================================
   DIGITAL UNIVERSE
   INDEX JS — PART 2
   INTRODUCTION INTERACTIONS
================================================== */


document.addEventListener(
    "DOMContentLoaded",
    () => {


        /* ==========================================
           INTRO VISUAL PARALLAX
        =========================================== */

        const introVisual =
            document.querySelector(
                ".intro-visual"
            );


        if (introVisual) {

            introVisual.addEventListener(
                "mousemove",
                (event) => {

                    const rect =
                        introVisual.getBoundingClientRect();


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


                    const core =
                        introVisual.querySelector(
                            ".visual-core"
                        );


                    if (core) {

                        core.style.transform =
                            `
                            translate(
                                ${x * 12}px,
                                ${y * 12}px
                            )
                            `;

                    }

                }
            );


            introVisual.addEventListener(
                "mouseleave",
                () => {

                    const core =
                        introVisual.querySelector(
                            ".visual-core"
                        );


                    if (core) {

                        core.style.transform =
                            "translate(0, 0)";

                    }

                }
            );

        }



        /* ==========================================
           SCALE ITEMS REVEAL
        =========================================== */

        const scaleItems =
            document.querySelectorAll(
                ".scale-item"
            );


        if ("IntersectionObserver" in window) {

            const observer =
                new IntersectionObserver(
                    (entries) => {

                        entries.forEach(
                            (entry) => {

                                if (
                                    entry.isIntersecting
                                ) {

                                    entry.target.classList.add(
                                        "scale-visible"
                                    );

                                }

                            }
                        );

                    },
                    {
                        threshold: 0.2
                    }
                );


            scaleItems.forEach(
                (item) => {

                    observer.observe(item);

                }
            );

        }



        /* ==========================================
           INTRO BUTTON FEEDBACK
        =========================================== */

        const introButton =
            document.querySelector(
                ".intro-button"
            );


        if (introButton) {

            introButton.addEventListener(
                "mouseenter",
                () => {

                    introButton.classList.add(
                        "button-hovered"
                    );

                }
            );


            introButton.addEventListener(
                "mouseleave",
                () => {

                    introButton.classList.remove(
                        "button-hovered"
                    );

                }
            );

        }


    }
);
/* ==================================================
   DIGITAL UNIVERSE
   INDEX JS — PART 3
   COSMIC TIMELINE
================================================== */


document.addEventListener(
    "DOMContentLoaded",
    () => {


        /* ==========================================
           TIMELINE REVEAL
        =========================================== */

        const timelineCards =
            document.querySelectorAll(
                ".timeline-card"
            );


        if (
            "IntersectionObserver"
            in window
        ) {

            const timelineObserver =
                new IntersectionObserver(
                    (entries) => {

                        entries.forEach(
                            (entry) => {

                                if (
                                    entry.isIntersecting
                                ) {

                                    entry.target.classList.add(
                                        "timeline-visible"
                                    );

                                }

                            }
                        );

                    },
                    {
                        threshold: 0.15
                    }
                );


            timelineCards.forEach(
                (card) => {

                    timelineObserver.observe(
                        card
                    );

                }
            );

        }



        /* ==========================================
           TIMELINE CARD TILT
        =========================================== */

        timelineCards.forEach(
            (card) => {


                const content =
                    card.querySelector(
                        ".timeline-card-content"
                    );


                if (!content) {
                    return;
                }


                content.addEventListener(
                    "mousemove",
                    (event) => {

                        if (
                            window.innerWidth <=
                            800
                        ) {
                            return;
                        }


                        const rect =
                            content.getBoundingClientRect();


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


                        content.style.transform =
                            `
                            perspective(900px)
                            rotateY(${x * 3}deg)
                            rotateX(${y * -3}deg)
                            translateY(-4px)
                            `;

                    }
                );


                content.addEventListener(
                    "mouseleave",
                    () => {

                        content.style.transform =
                            "";

                    }
                );

            }
        );



        /* ==========================================
           TIMELINE NUMBER HIGHLIGHT
        =========================================== */

        const markers =
            document.querySelectorAll(
                ".timeline-marker"
            );


        markers.forEach(
            (marker, index) => {

                marker.style.transition =
                    "0.4s ease";


                marker.addEventListener(
                    "mouseenter",
                    () => {

                        marker.style.transform =
                            "scale(1.2)";

                    }
                );


                marker.addEventListener(
                    "mouseleave",
                    () => {

                        marker.style.transform =
                            "";

                    }
                );

            }
        );


    }
);
/* ==================================================
   DIGITAL UNIVERSE
   INDEX JS — PART 4
   SOLAR SYSTEM INTERACTIONS
================================================== */


document.addEventListener(
    "DOMContentLoaded",
    () => {


        /* ==========================================
           PLANET ORBIT ANIMATION
        =========================================== */

        const orbits =
            document.querySelectorAll(
                ".planet-orbit"
            );


        let orbitAngle = 0;


        function animateSolarOrbits() {

            orbitAngle += 0.08;


            orbits.forEach(
                (orbit, index) => {

                    const speed =
                        1 + index * 0.35;


                    orbit.style.transform =
                        `
                        translate(-50%, -50%)
                        rotate(${orbitAngle * speed}deg)
                        `;

                }
            );


            requestAnimationFrame(
                animateSolarOrbits
            );

        }


        if (orbits.length) {

            animateSolarOrbits();

        }



        /* ==========================================
           SOLAR SCENE MOUSE MOVEMENT
        =========================================== */

        const solarScene =
            document.querySelector(
                ".solar-scene"
            );


        if (solarScene) {

            solarScene.addEventListener(
                "mousemove",
                (event) => {

                    if (
                        window.innerWidth <=
                        800
                    ) {
                        return;
                    }


                    const rect =
                        solarScene.getBoundingClientRect();


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


                    const ship =
                        solarScene.querySelector(
                            ".solar-spaceship"
                        );


                    const satellite =
                        solarScene.querySelector(
                            ".solar-satellite"
                        );


                    if (ship) {

                        ship.style.marginLeft =
                            `${x * 20}px`;

                        ship.style.marginTop =
                            `${y * 20}px`;

                    }


                    if (satellite) {

                        satellite.style.marginLeft =
                            `${x * -12}px`;

                        satellite.style.marginTop =
                            `${y * -12}px`;

                    }

                }
            );

        }



        /* ==========================================
           DESCRIPTION CARD REVEAL
        =========================================== */

        const solarCards =
            document.querySelectorAll(
                ".solar-description-card"
            );


        if (
            "IntersectionObserver"
            in window
        ) {

            const solarObserver =
                new IntersectionObserver(
                    (entries) => {

                        entries.forEach(
                            (entry) => {

                                if (
                                    entry.isIntersecting
                                ) {

                                    entry.target.classList.add(
                                        "solar-card-visible"
                                    );

                                }

                            }
                        );

                    },
                    {
                        threshold: 0.15
                    }
                );


            solarCards.forEach(
                (card) => {

                    solarObserver.observe(
                        card
                    );

                }
            );

        }



        /* ==========================================
           SOLAR BUTTON
        =========================================== */

        const solarButton =
            document.querySelector(
                ".solar-enter-button"
            );


        if (solarButton) {

            solarButton.addEventListener(
                "mouseenter",
                () => {

                    solarButton.style.transform =
                        "translateY(-4px) scale(1.02)";

                }
            );


            solarButton.addEventListener(
                "mouseleave",
                () => {

                    solarButton.style.transform =
                        "";

                }
            );

        }


    }
);
/* ==================================================
   DIGITAL UNIVERSE
   INDEX JS — PART 5
   PLANETS SHOWCASE
================================================== */


document.addEventListener(
    "DOMContentLoaded",
    () => {


        /* ==========================================
           PLANET CARD REVEAL
        =========================================== */

        const planetCards =
            document.querySelectorAll(
                ".planet-card"
            );


        if (
            "IntersectionObserver"
            in window
        ) {

            const planetObserver =
                new IntersectionObserver(
                    (entries) => {

                        entries.forEach(
                            (entry) => {

                                if (
                                    entry.isIntersecting
                                ) {

                                    entry.target.classList.add(
                                        "planet-visible"
                                    );

                                }

                            }
                        );

                    },
                    {
                        threshold: 0.12
                    }
                );


            planetCards.forEach(
                (card) => {

                    planetObserver.observe(
                        card
                    );

                }
            );

        }



        /* ==========================================
           PLANET CARD MOUSE EFFECT
        =========================================== */

        planetCards.forEach(
            (card) => {


                card.addEventListener(
                    "mousemove",
                    (event) => {

                        if (
                            window.innerWidth <=
                            650
                        ) {
                            return;
                        }


                        const rect =
                            card.getBoundingClientRect();


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


                        card.style.transform =
                            `
                            perspective(1000px)
                            rotateY(${x * 3}deg)
                            rotateX(${y * -3}deg)
                            translateY(-8px)
                            `;

                    }
                );


                card.addEventListener(
                    "mouseleave",
                    () => {

                        card.style.transform =
                            "";

                    }
                );

            }
        );



        /* ==========================================
           PLANET SPHERE ROTATION
        =========================================== */

        planetCards.forEach(
            (card) => {


                const sphere =
                    card.querySelector(
                        ".planet-sphere"
                    );


                if (!sphere) {
                    return;
                }


                card.addEventListener(
                    "mouseenter",
                    () => {

                        sphere.style.transform =
                            "scale(1.08) rotate(8deg)";

                    }
                );


                card.addEventListener(
                    "mouseleave",
                    () => {

                        sphere.style.transform =
                            "";

                    }
                );

            }
        );



        /* ==========================================
           PLANETS BUTTON EFFECT
        =========================================== */

        const planetsButton =
            document.querySelector(
                ".planets-explore-button"
            );


        if (planetsButton) {

            planetsButton.addEventListener(
                "mouseenter",
                () => {

                    planetsButton.style.transform =
                        "translateY(-4px) scale(1.02)";

                }
            );


            planetsButton.addEventListener(
                "mouseleave",
                () => {

                    planetsButton.style.transform =
                        "";

                }
            );

        }


    }
);
/* ==================================================
   DIGITAL UNIVERSE
   INDEX JS — PART 6
   STARS & GALAXIES
================================================== */


document.addEventListener(
    "DOMContentLoaded",
    () => {


        /* ==========================================
           STAR GLOW PARALLAX
        =========================================== */

        const giantStar =
            document.querySelector(
                ".giant-star"
            );


        const starSection =
            document.querySelector(
                ".stars-galaxies-section"
            );


        if (
            giantStar &&
            starSection
        ) {

            starSection.addEventListener(
                "mousemove",
                (event) => {

                    if (
                        window.innerWidth <=
                        850
                    ) {
                        return;
                    }


                    const rect =
                        starSection.getBoundingClientRect();


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


                    giantStar.style.transform =
                        `
                        translate(
                            ${x * 18}px,
                            ${y * 18}px
                        )
                        `;

                }
            );


            starSection.addEventListener(
                "mouseleave",
                () => {

                    giantStar.style.transform =
                        "";

                }
            );

        }



        /* ==========================================
           STAR TYPE CARD REVEAL
        =========================================== */

        const starCards =
            document.querySelectorAll(
                ".star-type-card"
            );


        if (
            "IntersectionObserver"
            in window
        ) {

            const starObserver =
                new IntersectionObserver(
                    (entries) => {

                        entries.forEach(
                            (entry) => {

                                if (
                                    entry.isIntersecting
                                ) {

                                    entry.target.classList.add(
                                        "star-card-visible"
                                    );

                                }

                            }
                        );

                    },
                    {
                        threshold: 0.15
                    }
                );


            starCards.forEach(
                (card) => {

                    starObserver.observe(
                        card
                    );

                }
            );

        }



        /* ==========================================
           GALAXY ROTATION
        =========================================== */

        const galaxyDisplay =
            document.querySelector(
                ".galaxy-display"
            );


        if (galaxyDisplay) {

            let galaxyRotation = 0;


            function rotateGalaxy() {

                galaxyRotation += 0.015;


                galaxyDisplay.style.transform =
                    `rotate(${galaxyRotation}deg)`;


                requestAnimationFrame(
                    rotateGalaxy
                );

            }


            rotateGalaxy();

        }



        /* ==========================================
           GALAXY STARS TWINKLE
        =========================================== */

        const galaxyStars =
            document.querySelectorAll(
                ".galaxy-star"
            );


        galaxyStars.forEach(
            (star, index) => {

                star.style.animation =
                    `
                    galaxyTwinkle
                    ${2 + index * 0.4}s
                    ease-in-out
                    infinite
                    alternate
                    `;

            }
        );


        /* ==========================================
           MILKY WAY BUTTON
        =========================================== */

        const milkyButton =
            document.querySelector(
                ".milky-way-button"
            );


        if (milkyButton) {

            milkyButton.addEventListener(
                "mouseenter",
                () => {

                    milkyButton.style.transform =
                        "translateY(-3px) scale(1.02)";

                }
            );


            milkyButton.addEventListener(
                "mouseleave",
                () => {

                    milkyButton.style.transform =
                        "";

                }
            );

        }



        /* ==========================================
           STARS PAGE BUTTON
        =========================================== */

        const starsButton =
            document.querySelector(
                ".stars-explore-button"
            );


        if (starsButton) {

            starsButton.addEventListener(
                "mouseenter",
                () => {

                    starsButton.style.transform =
                        "translateY(-4px) scale(1.02)";

                }
            );


            starsButton.addEventListener(
                "mouseleave",
                () => {

                    starsButton.style.transform =
                        "";

                }
            );

        }


    }
);


/* ==================================================
   GALAXY TWINKLE
================================================== */

const galaxyTwinkleStyle =
    document.createElement(
        "style"
    );


galaxyTwinkleStyle.textContent = `

    @keyframes galaxyTwinkle {

        0% {

            opacity: 0.25;

            transform:
                scale(0.8);

        }

        100% {

            opacity: 1;

            transform:
                scale(1.25);

        }

    }

`;


document.head.appendChild(
    galaxyTwinkleStyle
);
/* ==================================================
   DIGITAL UNIVERSE
   INDEX JS — PART 7
   COSMIC EXPLORATION JOURNEY
================================================== */


document.addEventListener(
    "DOMContentLoaded",
    () => {


        /* ==========================================
           JOURNEY CARD REVEAL
        =========================================== */

        const journeyCards =
            document.querySelectorAll(
                ".journey-card"
            );


        if (
            "IntersectionObserver"
            in window
        ) {

            const journeyObserver =
                new IntersectionObserver(
                    (entries) => {

                        entries.forEach(
                            (entry) => {

                                if (
                                    entry.isIntersecting
                                ) {

                                    entry.target.classList.add(
                                        "journey-visible"
                                    );

                                }

                            }
                        );

                    },
                    {
                        threshold: 0.12
                    }
                );


            journeyCards.forEach(
                (card) => {

                    journeyObserver.observe(
                        card
                    );

                }
            );

        }



        /* ==========================================
           JOURNEY CARD TILT
        =========================================== */

        journeyCards.forEach(
            (card) => {


                card.addEventListener(
                    "mousemove",
                    (event) => {

                        if (
                            window.innerWidth <=
                            800
                        ) {
                            return;
                        }


                        const rect =
                            card.getBoundingClientRect();


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


                        card.style.transform =
                            `
                            perspective(1000px)
                            rotateY(${x * 2.5}deg)
                            rotateX(${y * -2.5}deg)
                            translateY(-8px)
                            scale(1.015)
                            `;

                    }
                );


                card.addEventListener(
                    "mouseleave",
                    () => {

                        card.style.transform =
                            "";

                    }
                );

            }
        );



        /* ==========================================
           JOURNEY ICON PULSE
        =========================================== */

        const journeyIcons =
            document.querySelectorAll(
                ".journey-icon span"
            );


        journeyIcons.forEach(
            (icon, index) => {

                icon.style.animation =
                    `
                    journeyIconPulse
                    ${3 + index * 0.25}s
                    ease-in-out
                    infinite
                    `;

            }
        );

    }
);


/* ==================================================
   JOURNEY ICON ANIMATION
================================================== */

const journeyAnimationStyle =
    document.createElement(
        "style"
    );


journeyAnimationStyle.textContent = `

    @keyframes journeyIconPulse {

        0%,
        100% {

            opacity:
                0.75;

            transform:
                scale(0.95);

        }

        50% {

            opacity:
                1;

            transform:
                scale(1.08);

        }

    }

`;


document.head.appendChild(
    journeyAnimationStyle
);
/* ==================================================
   DIGITAL UNIVERSE
   INDEX JS — PART 8
   COSMIC WONDERS
================================================== */


document.addEventListener(
    "DOMContentLoaded",
    () => {


        /* ==========================================
           WONDER CARDS
        =========================================== */

        const wonderCards =
            document.querySelectorAll(
                ".wonder-feature-card, .wonder-small-card"
            );


        if (
            "IntersectionObserver"
            in window
        ) {

            const wonderObserver =
                new IntersectionObserver(
                    (entries) => {

                        entries.forEach(
                            (entry) => {

                                if (
                                    entry.isIntersecting
                                ) {

                                    entry.target.classList.add(
                                        "wonder-visible"
                                    );

                                }

                            }
                        );

                    },
                    {
                        threshold:
                            0.12
                    }
                );


            wonderCards.forEach(
                (card) => {

                    wonderObserver.observe(
                        card
                    );

                }
            );

        }



        /* ==========================================
           BLACK HOLE MOUSE EFFECT
        =========================================== */

        const blackHole =
            document.querySelector(
                ".black-hole-visual"
            );


        if (blackHole) {

            blackHole.addEventListener(
                "mousemove",
                (event) => {

                    if (
                        window.innerWidth <=
                        850
                    ) {
                        return;
                    }


                    const rect =
                        blackHole.getBoundingClientRect();


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


                    const ring =
                        blackHole.querySelector(
                            ".black-hole-ring"
                        );


                    if (ring) {

                        ring.style.transform =
                            `
                            translate(
                                -50%,
                                -50%
                            )
                            rotate(
                                ${-18 + x * 15}deg
                            )
                            translate(
                                ${x * 12}px,
                                ${y * 12}px
                            )
                            `;

                    }

                }
            );


            blackHole.addEventListener(
                "mouseleave",
                () => {

                    const ring =
                        blackHole.querySelector(
                            ".black-hole-ring"
                        );


                    if (ring) {

                        ring.style.transform =
                            `
                            translate(
                                -50%,
                                -50%
                            )
                            rotate(-18deg)
                            `;

                    }

                }
            );

        }



        /* ==========================================
           WONDER LINKS
        =========================================== */

        const wonderLinks =
            document.querySelectorAll(
                ".wonder-link"
            );


        wonderLinks.forEach(
            (link) => {

                link.addEventListener(
                    "click",
                    () => {

                        link.classList.add(
                            "wonder-link-clicked"
                        );

                    }
                );

            }
        );



        /* ==========================================
           COSMIC QUOTE REVEAL
        =========================================== */

        const cosmicQuote =
            document.querySelector(
                ".cosmic-quote"
            );


        if (
            cosmicQuote &&
            "IntersectionObserver"
            in window
        ) {

            const quoteObserver =
                new IntersectionObserver(
                    (entries) => {

                        entries.forEach(
                            (entry) => {

                                if (
                                    entry.isIntersecting
                                ) {

                                    cosmicQuote.classList.add(
                                        "quote-visible"
                                    );

                                }

                            }
                        );

                    },
                    {
                        threshold:
                            0.3
                    }
                );


            quoteObserver.observe(
                cosmicQuote
            );

        }



        /* ==========================================
           WONDERS BUTTON
        =========================================== */

        const wondersButton =
            document.querySelector(
                ".wonders-button"
            );


        if (wondersButton) {

            wondersButton.addEventListener(
                "mouseenter",
                () => {

                    wondersButton.style.transform =
                        "translateY(-5px) scale(1.02)";

                }
            );


            wondersButton.addEventListener(
                "mouseleave",
                () => {

                    wondersButton.style.transform =
                        "";

                }
            );

        }


    }
);
/* ==================================================
   DIGITAL UNIVERSE
   INDEX JS — PART 9
   COSMIC FACTS & FINAL CTA
================================================== */


document.addEventListener(
    "DOMContentLoaded",
    () => {


        /* ==========================================
           FACT CARDS REVEAL
        =========================================== */

        const factCards =
            document.querySelectorAll(
                ".cosmic-fact-card"
            );


        if (
            "IntersectionObserver"
            in window
        ) {

            const factObserver =
                new IntersectionObserver(
                    (entries) => {

                        entries.forEach(
                            (entry) => {

                                if (
                                    entry.isIntersecting
                                ) {

                                    entry.target.classList.add(
                                        "fact-visible"
                                    );

                                    factObserver.unobserve(
                                        entry.target
                                    );

                                }

                            }
                        );

                    },
                    {
                        threshold:
                            0.2
                    }
                );


            factCards.forEach(
                (card) => {

                    factObserver.observe(
                        card
                    );

                }
            );

        }



        /* ==========================================
           FACT NUMBER COUNTER
        =========================================== */

        const factNumbers =
            document.querySelectorAll(
                ".fact-number"
            );


        let counterStarted =
            false;


        function startFactCounters() {

            if (counterStarted) {
                return;
            }


            counterStarted =
                true;


            factNumbers.forEach(
                (number) => {

                    const target =
                        parseFloat(
                            number.dataset.target
                        );


                    if (
                        Number.isNaN(target)
                    ) {
                        return;
                    }


                    const isDecimal =
                        !Number.isInteger(
                            target
                        );


                    const duration =
                        1500;


                    const startTime =
                        performance.now();


                    function updateCounter(
                        currentTime
                    ) {

                        const progress =
                            Math.min(
                                (
                                    currentTime -
                                    startTime
                                ) /
                                duration,
                                1
                            );


                        const eased =
                            1 -
                            Math.pow(
                                1 - progress,
                                3
                            );


                        const current =
                            target *
                            eased;


                        if (isDecimal) {

                            number.textContent =
                                current.toFixed(1);

                        } else {

                            number.textContent =
                                Math.floor(
                                    current
                                ).toLocaleString(
                                    "en-US"
                                );

                        }


                        if (
                            progress <
                            1
                        ) {

                            requestAnimationFrame(
                                updateCounter
                            );

                        } else {

                            if (isDecimal) {

                                number.textContent =
                                    target.toFixed(1);

                            } else {

                                number.textContent =
                                    target.toLocaleString(
                                        "en-US"
                                    );

                            }

                        }

                    }


                    requestAnimationFrame(
                        updateCounter
                    );

                }
            );

        }



        /* ==========================================
           START COUNTERS WHEN VISIBLE
        =========================================== */

        const factGrid =
            document.querySelector(
                ".cosmic-facts-grid"
            );


        if (
            factGrid &&
            "IntersectionObserver"
            in window
        ) {

            const counterObserver =
                new IntersectionObserver(
                    (entries) => {

                        entries.forEach(
                            (entry) => {

                                if (
                                    entry.isIntersecting
                                ) {

                                    startFactCounters();

                                    counterObserver.unobserve(
                                        entry.target
                                    );

                                }

                            }
                        );

                    },
                    {
                        threshold:
                            0.25
                    }
                );


            counterObserver.observe(
                factGrid
            );

        }



        /* ==========================================
           DISCOVERY CARD EFFECT
        =========================================== */

        const discoveryCards =
            document.querySelectorAll(
                ".discovery-card"
            );


        discoveryCards.forEach(
            (card, index) => {

                card.style.transitionDelay =
                    `${index * 100}ms`;


                card.addEventListener(
                    "mouseenter",
                    () => {

                        card.style.transform =
                            "translateY(-8px)";

                    }
                );


                card.addEventListener(
                    "mouseleave",
                    () => {

                        card.style.transform =
                            "";

                    }
                );

            }
        );



        /* ==========================================
           FINAL CTA
        =========================================== */

        const finalCTA =
            document.querySelector(
                ".final-cosmic-cta"
            );


        if (
            finalCTA &&
            "IntersectionObserver"
            in window
        ) {

            const ctaObserver =
                new IntersectionObserver(
                    (entries) => {

                        entries.forEach(
                            (entry) => {

                                if (
                                    entry.isIntersecting
                                ) {

                                    finalCTA.classList.add(
                                        "cta-visible"
                                    );

                                }

                            }
                        );

                    },
                    {
                        threshold:
                            0.2
                    }
                );


            ctaObserver.observe(
                finalCTA
            );

        }



        /* ==========================================
           CTA BUTTON RIPPLE
        =========================================== */

        const ctaPrimary =
            document.querySelector(
                ".cta-primary"
            );


        if (ctaPrimary) {

            ctaPrimary.addEventListener(
                "click",
                () => {

                    ctaPrimary.classList.add(
                        "cta-clicked"
                    );


                    setTimeout(
                        () => {

                            ctaPrimary.classList.remove(
                                "cta-clicked"
                            );

                        },
                        400
                    );

                }
            );

        }


    }
);
/* ==================================================
   DIGITAL UNIVERSE
   INDEX JS — PART 10
   FINAL CONTROLLER
================================================== */


document.addEventListener(
    "DOMContentLoaded",
    () => {


        /* ==========================================
           FINAL MISSION PARALLAX
        =========================================== */

        const missionSection =
            document.querySelector(
                ".universe-mission-section"
            );


        const missionStars =
            document.querySelector(
                ".mission-stars"
            );


        if (
            missionSection &&
            missionStars
        ) {

            window.addEventListener(
                "scroll",
                () => {

                    const rect =
                        missionSection.getBoundingClientRect();


                    const height =
                        window.innerHeight;


                    if (
                        rect.bottom > 0 &&
                        rect.top < height
                    ) {

                        const progress =
                            (
                                height -
                                rect.top
                            ) /
                            (
                                height +
                                rect.height
                            );


                        missionStars.style.transform =
                            `
                            translateY(
                                ${progress * 40}px
                            )
                            `;

                    }

                },
                {
                    passive: true
                }
            );

        }



        /* ==========================================
           QUICK NAVIGATION
        =========================================== */

        const quickCards =
            document.querySelectorAll(
                ".quick-nav-card"
            );


        if (
            "IntersectionObserver"
            in window
        ) {

            const quickObserver =
                new IntersectionObserver(
                    (entries) => {

                        entries.forEach(
                            (entry) => {

                                if (
                                    entry.isIntersecting
                                ) {

                                    entry.target.classList.add(
                                        "quick-card-visible"
                                    );

                                    quickObserver.unobserve(
                                        entry.target
                                    );

                                }

                            }
                        );

                    },
                    {
                        threshold:
                            0.12
                    }
                );


            quickCards.forEach(
                (card) => {

                    quickObserver.observe(
                        card
                    );

                }
            );

        }



        /* ==========================================
           QUICK CARD 3D EFFECT
        =========================================== */

        quickCards.forEach(
            (card) => {


                card.addEventListener(
                    "mousemove",
                    (event) => {

                        if (
                            window.innerWidth <=
                            800
                        ) {

                            return;

                        }


                        const rect =
                            card.getBoundingClientRect();


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


                        card.style.transform =
                            `
                            perspective(900px)
                            rotateY(${x * 4}deg)
                            rotateX(${y * -4}deg)
                            translateY(-8px)
                            `;

                    }
                );


                card.addEventListener(
                    "mouseleave",
                    () => {

                        card.style.transform =
                            "";

                    }
                );

            }
        );



        /* ==========================================
           BACK TO TOP
        =========================================== */

        const backToTop =
            document.querySelector(
                ".back-to-top"
            );


        if (backToTop) {

            backToTop.addEventListener(
                "click",
                () => {

                    window.scrollTo(
                        {
                            top: 0,
                            behavior:
                                "smooth"
                        }
                    );

                }
            );

        }



        /* ==========================================
           FOOTER YEAR
        =========================================== */

        const footerYear =
            document.querySelector(
                ".footer-year"
            );


        if (footerYear) {

            footerYear.textContent =
                new Date()
                    .getFullYear();

        }



        /* ==========================================
           FINAL PAGE READY
        =========================================== */

        document.body.classList.add(
            "universe-page-ready"
        );


        console.log(
            "🌌 Digital Universe — பக்கம் முழுமையாக தயாராகிவிட்டது."
        );

    }
);
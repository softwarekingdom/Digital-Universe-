/* =========================================================
   DIGITAL UNIVERSE
   INDEX.JS — PART A
   GRAND INTRODUCTION INTERACTIONS
========================================================= */


/* ================= DOM READY ================= */

document.addEventListener("DOMContentLoaded", () => {

    initMobileMenu();

    initScrollEffects();

    initRevealAnimation();

    initActiveNavigation();

    initHeroParallax();

});


/* ================= MOBILE MENU ================= */

function initMobileMenu() {

    const menuButton =
        document.querySelector(".mobile-menu-button");

    const navigation =
        document.querySelector(".main-nav");


    if (!menuButton || !navigation) {
        return;
    }


    menuButton.addEventListener("click", () => {

        navigation.classList.toggle("mobile-open");

        const isOpen =
            navigation.classList.contains("mobile-open");

        menuButton.textContent =
            isOpen ? "✕" : "☰";

    });


    const navLinks =
        navigation.querySelectorAll("a");


    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            navigation.classList.remove(
                "mobile-open"
            );

            menuButton.textContent = "☰";

        });

    });

}


/* ================= SCROLL EFFECT ================= */

function initScrollEffects() {

    const header =
        document.querySelector(".main-header");


    if (!header) {
        return;
    }


    window.addEventListener(
        "scroll",
        () => {

            if (window.scrollY > 30) {

                header.classList.add(
                    "header-scrolled"
                );

            } else {

                header.classList.remove(
                    "header-scrolled"
                );

            }

        },
        { passive: true }
    );

}


/* ================= REVEAL ANIMATION ================= */

function initRevealAnimation() {

    const elements =
        document.querySelectorAll(
            ".topic-preview-card, .quick-action-card, .intro-note"
        );


    if (!elements.length) {
        return;
    }


    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "reveal-visible"
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


    elements.forEach(element => {

        element.classList.add(
            "reveal-hidden"
        );

        observer.observe(element);

    });

}


/* ================= ACTIVE NAVIGATION ================= */

function initActiveNavigation() {

    const sections =
        document.querySelectorAll(
            "section[id]"
        );

    const navLinks =
        document.querySelectorAll(
            ".nav-link[href^='#']"
        );


    if (!sections.length || !navLinks.length) {
        return;
    }


    const sectionObserver =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (!entry.isIntersecting) {
                        return;
                    }


                    navLinks.forEach(link => {

                        link.classList.remove(
                            "active"
                        );

                    });


                    const activeLink =
                        document.querySelector(
                            `.nav-link[href="#${entry.target.id}"]`
                        );


                    if (activeLink) {

                        activeLink.classList.add(
                            "active"
                        );

                    }

                });

            },
            {
                threshold: 0.35
            }
        );


    sections.forEach(section => {

        sectionObserver.observe(section);

    });

}


/* ================= HERO PARALLAX ================= */

function initHeroParallax() {

    const visual =
        document.querySelector(".hero-visual");


    if (!visual) {
        return;
    }


    const isMobile =
        window.matchMedia(
            "(max-width: 700px)"
        ).matches;


    if (isMobile) {
        return;
    }


    window.addEventListener(
        "mousemove",
        event => {

            const x =
                (event.clientX /
                    window.innerWidth) - 0.5;

            const y =
                (event.clientY /
                    window.innerHeight) - 0.5;


            visual.style.transform =
                `translate3d(${x * 8}px, ${y * 8}px, 0)`;

        },
        { passive: true }
    );

}


/* ================= SMOOTH ANCHOR ================= */

document.addEventListener(
    "click",
    event => {

        const link =
            event.target.closest(
                'a[href^="#"]'
            );


        if (!link) {
            return;
        }


        const targetId =
            link.getAttribute("href");


        if (
            !targetId ||
            targetId === "#"
        ) {
            return;
        }


        const target =
            document.querySelector(
                targetId
            );


        if (!target) {
            return;
        }


        event.preventDefault();


        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }
);
/* =========================================================
   DIGITAL UNIVERSE
   INDEX.JS — PART 2
   SPACE SCIENCE INTERACTIONS
========================================================= */


/* ================= SCIENCE IMAGE TILT ================= */

function initScienceImageEffect() {

    const imageFrames =
        document.querySelectorAll(
            ".science-image-frame"
        );


    if (!imageFrames.length) {
        return;
    }


    const isMobile =
        window.matchMedia(
            "(max-width: 700px)"
        ).matches;


    if (isMobile) {
        return;
    }


    imageFrames.forEach(frame => {

        frame.addEventListener(
            "mousemove",
            event => {

                const rect =
                    frame.getBoundingClientRect();


                const x =
                    event.clientX -
                    rect.left;


                const y =
                    event.clientY -
                    rect.top;


                const rotateY =
                    ((x / rect.width) - 0.5) * 4;


                const rotateX =
                    ((y / rect.height) - 0.5) * -4;


                frame.style.transform =
                    `perspective(900px)
                     rotateX(${rotateX}deg)
                     rotateY(${rotateY}deg)`;

            }
        );


        frame.addEventListener(
            "mouseleave",
            () => {

                frame.style.transform =
                    "perspective(900px) rotateX(0deg) rotateY(0deg)";

            }
        );

    });

}


/* ================= SCIENCE FACTS ================= */

function initScienceFacts() {

    const facts =
        document.querySelectorAll(
            ".science-fact"
        );


    if (!facts.length) {
        return;
    }


    facts.forEach((fact, index) => {

        fact.style.transitionDelay =
            `${index * 80}ms`;

    });

}


/* ================= INITIALIZE PART 2 ================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        initScienceImageEffect();

        initScienceFacts();

    }
);
/* =========================================================
   PART 3 / 9
   OCEAN MYSTERIES JAVASCRIPT
   ========================================================= */


/* ---------------------------------------------------------
   OCEAN IMAGE PARALLAX EFFECT
   --------------------------------------------------------- */

function initOceanImageEffect() {

    const oceanSection =
        document.querySelector(".ocean-mysteries-section");

    const oceanImage =
        document.querySelector(".ocean-image");

    if (!oceanSection || !oceanImage) {
        return;
    }


    const updateOceanImage = () => {

        const rect =
            oceanSection.getBoundingClientRect();

        const windowHeight =
            window.innerHeight;

        const sectionCenter =
            rect.top + rect.height / 2;

        const distance =
            sectionCenter - windowHeight / 2;

        const movement =
            Math.max(
                -18,
                Math.min(18, distance * -0.025)
            );

        oceanImage.style.transform =
            `scale(1.06) translateY(${movement}px)`;

    };


    window.addEventListener(
        "scroll",
        updateOceanImage,
        { passive: true }
    );


    updateOceanImage();

}


/* ---------------------------------------------------------
   OCEAN FACT HOVER EFFECT
   --------------------------------------------------------- */

function initOceanFacts() {

    const facts =
        document.querySelectorAll(".ocean-fact");

    if (!facts.length) {
        return;
    }


    facts.forEach((fact) => {

        fact.addEventListener("mouseenter", () => {

            facts.forEach((otherFact) => {

                if (otherFact !== fact) {

                    otherFact.style.opacity = "0.55";

                }

            });

        });


        fact.addEventListener("mouseleave", () => {

            facts.forEach((otherFact) => {

                otherFact.style.opacity = "1";

            });

        });

    });

}


/* ---------------------------------------------------------
   INITIALIZE OCEAN SECTION
   --------------------------------------------------------- */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        initOceanImageEffect();

        initOceanFacts();

    }
);
/* =========================================================
   PART 4 / 9
   EARTH SCIENCE JAVASCRIPT
   ========================================================= */


/* ---------------------------------------------------------
   EARTH IMAGE PARALLAX
   --------------------------------------------------------- */

function initEarthImageEffect() {

    const earthSection =
        document.querySelector(".earth-science-section");

    const earthImage =
        document.querySelector(".earth-image");

    if (!earthSection || !earthImage) {
        return;
    }


    const updateEarthImage = () => {

        const rect =
            earthSection.getBoundingClientRect();

        const windowHeight =
            window.innerHeight;

        const sectionCenter =
            rect.top + rect.height / 2;

        const distance =
            sectionCenter - windowHeight / 2;

        const movement =
            Math.max(
                -16,
                Math.min(16, distance * -0.022)
            );

        earthImage.style.transform =
            `scale(1.06) translateY(${movement}px)`;

    };


    window.addEventListener(
        "scroll",
        updateEarthImage,
        { passive: true }
    );


    updateEarthImage();

}


/* ---------------------------------------------------------
   EARTH FACT INTERACTION
   --------------------------------------------------------- */

function initEarthFacts() {

    const facts =
        document.querySelectorAll(".earth-fact");

    if (!facts.length) {
        return;
    }


    facts.forEach((fact) => {

        fact.addEventListener("mouseenter", () => {

            facts.forEach((otherFact) => {

                if (otherFact !== fact) {

                    otherFact.style.opacity =
                        "0.55";

                }

            });

        });


        fact.addEventListener("mouseleave", () => {

            facts.forEach((otherFact) => {

                otherFact.style.opacity =
                    "1";

            });

        });

    });

}


/* ---------------------------------------------------------
   EARTH SECTION INITIALIZATION
   --------------------------------------------------------- */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        initEarthImageEffect();

        initEarthFacts();

    }
);
 /* =========================================================
    PART 5 / 9
    HUMAN EVOLUTION JAVASCRIPT
    ========================================================= */


/* ---------------------------------------------------------
   EVOLUTION IMAGE PARALLAX
   --------------------------------------------------------- */

function initEvolutionImageEffect() {

    const evolutionSection =
        document.querySelector(
            ".human-evolution-section"
        );

    const evolutionImage =
        document.querySelector(
            ".evolution-image"
        );

    if (!evolutionSection || !evolutionImage) {
        return;
    }


    const updateEvolutionImage = () => {

        const rect =
            evolutionSection.getBoundingClientRect();

        const windowHeight =
            window.innerHeight;

        const sectionCenter =
            rect.top + rect.height / 2;

        const distance =
            sectionCenter - windowHeight / 2;

        const movement =
            Math.max(
                -16,
                Math.min(16, distance * -0.022)
            );

        evolutionImage.style.transform =
            `scale(1.06) translateY(${movement}px)`;

    };


    window.addEventListener(
        "scroll",
        updateEvolutionImage,
        { passive: true }
    );


    updateEvolutionImage();

}


/* ---------------------------------------------------------
   EVOLUTION FACT INTERACTION
   --------------------------------------------------------- */

function initEvolutionFacts() {

    const facts =
        document.querySelectorAll(
            ".evolution-fact"
        );

    if (!facts.length) {
        return;
    }


    facts.forEach((fact) => {

        fact.addEventListener(
            "mouseenter",
            () => {

                facts.forEach((otherFact) => {

                    if (otherFact !== fact) {

                        otherFact.style.opacity =
                            "0.55";

                    }

                });

            }
        );


        fact.addEventListener(
            "mouseleave",
            () => {

                facts.forEach((otherFact) => {

                    otherFact.style.opacity =
                        "1";

                });

            }
        );

    });

}


/* ---------------------------------------------------------
   EVOLUTION INITIALIZATION
   --------------------------------------------------------- */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        initEvolutionImageEffect();

        initEvolutionFacts();

    }
);
/* =========================================================
   PART 6 / 9
   SCIENTIFIC DISCOVERIES JAVASCRIPT
   ========================================================= */


/* ---------------------------------------------------------
   DISCOVERY IMAGE PARALLAX
   --------------------------------------------------------- */

function initDiscoveriesImageEffect() {

    const discoveriesSection =
        document.querySelector(
            ".discoveries-section"
        );

    const discoveriesImage =
        document.querySelector(
            ".discoveries-image"
        );

    if (!discoveriesSection || !discoveriesImage) {
        return;
    }


    const updateDiscoveriesImage = () => {

        const rect =
            discoveriesSection.getBoundingClientRect();

        const windowHeight =
            window.innerHeight;

        const sectionCenter =
            rect.top + rect.height / 2;

        const distance =
            sectionCenter - windowHeight / 2;

        const movement =
            Math.max(
                -16,
                Math.min(16, distance * -0.022)
            );

        discoveriesImage.style.transform =
            `scale(1.06) translateY(${movement}px)`;

    };


    window.addEventListener(
        "scroll",
        updateDiscoveriesImage,
        { passive: true }
    );


    updateDiscoveriesImage();

}


/* ---------------------------------------------------------
   DISCOVERY CARD INTERACTION
   --------------------------------------------------------- */

function initDiscoveryFacts() {

    const facts =
        document.querySelectorAll(
            ".discovery-fact"
        );

    if (!facts.length) {
        return;
    }


    facts.forEach((fact) => {

        fact.addEventListener(
            "mouseenter",
            () => {

                facts.forEach((otherFact) => {

                    if (otherFact !== fact) {

                        otherFact.style.opacity =
                            "0.55";

                    }

                });

            }
        );


        fact.addEventListener(
            "mouseleave",
            () => {

                facts.forEach((otherFact) => {

                    otherFact.style.opacity =
                        "1";

                });

            }
        );

    });

}


/* ---------------------------------------------------------
   DISCOVERY SECTION INITIALIZATION
   --------------------------------------------------------- */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        initDiscoveriesImageEffect();

        initDiscoveryFacts();

    }
);
/* =========================================================
   PART 7 / 9
   FUTURE SCIENCE & TECHNOLOGY JAVASCRIPT
   ========================================================= */


/* ---------------------------------------------------------
   FUTURE IMAGE PARALLAX
   --------------------------------------------------------- */

function initFutureImageEffect() {

    const futureSection =
        document.querySelector(
            ".future-science-section"
        );

    const futureImage =
        document.querySelector(
            ".future-image"
        );

    if (!futureSection || !futureImage) {
        return;
    }


    const updateFutureImage = () => {

        const rect =
            futureSection.getBoundingClientRect();

        const windowHeight =
            window.innerHeight;

        const sectionCenter =
            rect.top + rect.height / 2;

        const distance =
            sectionCenter - windowHeight / 2;

        const movement =
            Math.max(
                -17,
                Math.min(17, distance * -0.023)
            );

        futureImage.style.transform =
            `scale(1.06) translateY(${movement}px)`;

    };


    window.addEventListener(
        "scroll",
        updateFutureImage,
        { passive: true }
    );


    updateFutureImage();

}


/* ---------------------------------------------------------
   FUTURE CARD INTERACTION
   --------------------------------------------------------- */

function initFutureFacts() {

    const facts =
        document.querySelectorAll(
            ".future-fact"
        );

    if (!facts.length) {
        return;
    }


    facts.forEach((fact) => {

        fact.addEventListener(
            "mouseenter",
            () => {

                facts.forEach((otherFact) => {

                    if (otherFact !== fact) {

                        otherFact.style.opacity =
                            "0.55";

                    }

                });

            }
        );


        fact.addEventListener(
            "mouseleave",
            () => {

                facts.forEach((otherFact) => {

                    otherFact.style.opacity =
                        "1";

                });

            }
        );

    });

}


/* ---------------------------------------------------------
   FUTURE SECTION INITIALIZATION
   --------------------------------------------------------- */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        initFutureImageEffect();

        initFutureFacts();

    }
);
/* =========================================================
   PART 8 / 9
   EARTH AT NIGHT JAVASCRIPT
   ========================================================= */


/* ---------------------------------------------------------
   EARTH NIGHT IMAGE PARALLAX
   --------------------------------------------------------- */

function initEarthNightImageEffect() {

    const earthNightSection =
        document.querySelector(
            ".earth-night-section"
        );

    const earthNightImage =
        document.querySelector(
            ".earth-night-image"
        );

    if (
        !earthNightSection ||
        !earthNightImage
    ) {
        return;
    }


    const updateEarthNightImage = () => {

        const rect =
            earthNightSection.getBoundingClientRect();

        const windowHeight =
            window.innerHeight;

        const sectionCenter =
            rect.top + rect.height / 2;

        const distance =
            sectionCenter - windowHeight / 2;

        const movement =
            Math.max(
                -17,
                Math.min(17, distance * -0.023)
            );

        earthNightImage.style.transform =
            `scale(1.06) translateY(${movement}px)`;

    };


    window.addEventListener(
        "scroll",
        updateEarthNightImage,
        { passive: true }
    );


    updateEarthNightImage();

}


/* ---------------------------------------------------------
   EARTH NIGHT FACT INTERACTION
   --------------------------------------------------------- */

function initEarthNightFacts() {

    const facts =
        document.querySelectorAll(
            ".earth-night-fact"
        );

    if (!facts.length) {
        return;
    }


    facts.forEach((fact) => {

        fact.addEventListener(
            "mouseenter",
            () => {

                facts.forEach((otherFact) => {

                    if (otherFact !== fact) {

                        otherFact.style.opacity =
                            "0.55";

                    }

                });

            }
        );


        fact.addEventListener(
            "mouseleave",
            () => {

                facts.forEach((otherFact) => {

                    otherFact.style.opacity =
                        "1";

                });

            }
        );

    });

}


/* ---------------------------------------------------------
   EARTH NIGHT INITIALIZATION
   --------------------------------------------------------- */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        initEarthNightImageEffect();

        initEarthNightFacts();

    }
);
/* ==========================================
   PART 9 — FINAL DIGITAL UNIVERSE JS
   ========================================== */


/* ==========================================
   FINAL DASHBOARD INTERACTION
   ========================================== */

function initFinalDashboardInteraction() {

    const dashboardButton =
        document.querySelector(".final-dashboard-button");

    if (!dashboardButton) return;


    dashboardButton.addEventListener("mouseenter", () => {

        dashboardButton.classList.add(
            "dashboard-hover"
        );

    });


    dashboardButton.addEventListener("mouseleave", () => {

        dashboardButton.classList.remove(
            "dashboard-hover"
        );

    });


    dashboardButton.addEventListener("click", () => {

        dashboardButton.classList.add(
            "dashboard-launching"
        );

    });

}


/* ==========================================
   FOOTER YEAR
   ========================================== */

function initFooterYear() {

    const yearElement =
        document.getElementById("footer-year");

    if (!yearElement) return;

    yearElement.textContent =
        new Date().getFullYear();

}


/* ==========================================
   FINAL PLANET PARALLAX
   ========================================== */

function initFinalPlanetEffect() {

    const planet =
        document.querySelector(".final-planet");

    if (!planet) return;


    let ticking = false;


    window.addEventListener(
        "scroll",
        () => {

            if (ticking) return;

            window.requestAnimationFrame(() => {

                const rect =
                    planet.getBoundingClientRect();

                const windowHeight =
                    window.innerHeight;

                const distance =
                    (rect.top - windowHeight / 2)
                    * 0.015;

                planet.style.marginTop =
                    `${distance}px`;

                ticking = false;

            });

            ticking = true;

        },
        { passive: true }
    );

}


/* ==========================================
   FINAL SECTION REVEAL
   ========================================== */

function initFinalSectionReveal() {

    const elements =
        document.querySelectorAll(
            ".final-content, .footer-brand, .footer-links, .footer-dashboard"
        );

    if (!elements.length) return;


    const observer =
        new IntersectionObserver(
            (entries) => {

                entries.forEach(entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.style.opacity =
                            "1";

                        entry.target.style.transform =
                            "translateY(0)";

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


    elements.forEach(element => {

        element.style.opacity = "0";

        element.style.transform =
            "translateY(25px)";

        element.style.transition =
            "opacity 0.8s ease, transform 0.8s ease";

        observer.observe(element);

    });

}


/* ==========================================
   BACK TO TOP
   ========================================== */

function initBackToTop() {

    const homeLinks =
        document.querySelectorAll(
            '.final-home-link[href="#introduction"]'
        );


    homeLinks.forEach(link => {

        link.addEventListener(
            "click",
            event => {

                event.preventDefault();

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

            }
        );

    });

}


/* ==========================================
   FINAL SECTION INITIALIZER
   ========================================== */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        initFinalDashboardInteraction();

        initFooterYear();

        initFinalPlanetEffect();

        initFinalSectionReveal();

        initBackToTop();

    }
);
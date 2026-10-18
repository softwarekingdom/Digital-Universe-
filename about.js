/* =========================================================
   SCIWONDERVERSE — ABOUT PAGE
   PART 6 — JS A
========================================================= */

"use strict";


/* =========================================================
   DOM ELEMENTS
========================================================= */

const siteHeader =
    document.getElementById("site-header");

const menuToggle =
    document.getElementById("menu-toggle");

const mainNavigation =
    document.getElementById("main-navigation");

const revealElements =
    document.querySelectorAll(".reveal");


/* =========================================================
   MOBILE MENU
========================================================= */

if (menuToggle && mainNavigation) {

    menuToggle.addEventListener(
        "click",
        () => {

            mainNavigation.classList.toggle("open");

            menuToggle.classList.toggle("active");

        }
    );


    const navigationLinks =
        mainNavigation.querySelectorAll("a");


    navigationLinks.forEach(link => {

        link.addEventListener(
            "click",
            () => {

                mainNavigation.classList.remove("open");

                menuToggle.classList.remove("active");

            }
        );

    });

}


/* =========================================================
   HEADER SCROLL EFFECT
========================================================= */

function updateHeader() {

    if (!siteHeader) return;


    if (window.scrollY > 40) {

        siteHeader.classList.add("scrolled");

    } else {

        siteHeader.classList.remove("scrolled");

    }

}


window.addEventListener(
    "scroll",
    updateHeader,
    { passive: true }
);


updateHeader();


/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealObserver =
    new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(
                entry => {

                    if (!entry.isIntersecting)
                        return;


                    entry.target.classList.add(
                        "visible"
                    );


                    observer.unobserve(
                        entry.target
                    );

                }
            );

        },
        {
            threshold: 0.12,

            rootMargin:
                "0px 0px -50px 0px"
        }
    );


revealElements.forEach(
    element => {

        revealObserver.observe(
            element
        );

    }
);


/* =========================================================
   STAGGER REVEAL
========================================================= */

const revealGroups = [
    ".why-card",
    ".science-card",
    ".timeline-item",
    ".fact-card"
];


revealGroups.forEach(
    selector => {

        const elements =
            document.querySelectorAll(selector);


        elements.forEach(
            (element, index) => {

                element.style.transitionDelay =
                    `${index * 80}ms`;

            }
        );

    }
);


/* =========================================================
   SMOOTH INTERNAL LINKS
========================================================= */

document
    .querySelectorAll('a[href^="#"]')
    .forEach(link => {

        link.addEventListener(
            "click",
            event => {

                const targetId =
                    link.getAttribute("href");


                if (!targetId ||
                    targetId === "#") {
                    return;
                }


                const target =
                    document.querySelector(targetId);


                if (!target) return;


                event.preventDefault();


                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }
        );

    });


/* =========================================================
   CREATOR PARALLAX
========================================================= */

const heroVisual =
    document.querySelector(".hero-visual");


if (
    heroVisual &&
    window.matchMedia("(pointer: fine)").matches
) {

    window.addEventListener(
        "mousemove",
        event => {

            const x =
                (event.clientX /
                    window.innerWidth - 0.5) * 2;


            const y =
                (event.clientY /
                    window.innerHeight - 0.5) * 2;


            heroVisual.style.transform =
                `translate3d(${x * 8}px, ${y * 8}px, 0)`;

        },
        { passive: true }
    );

}


/* =========================================================
   SCIENCE CARD POINTER GLOW
========================================================= */

const interactiveCards =
    document.querySelectorAll(
        ".science-card, .why-card, .fact-card"
    );


interactiveCards.forEach(card => {

    card.addEventListener(
        "pointermove",
        event => {

            const rect =
                card.getBoundingClientRect();


            const x =
                event.clientX - rect.left;


            const y =
                event.clientY - rect.top;


            card.style.setProperty(
                "--mouse-x",
                `${x}px`
            );


            card.style.setProperty(
                "--mouse-y",
                `${y}px`
            );

        }
    );

});
/* =========================================================
   COSMIC PARTICLE FIELD
========================================================= */

const particleContainer =
    document.getElementById(
        "particle-container"
    );


function createParticles() {

    if (!particleContainer)
        return;


    const isMobile =
        window.innerWidth <= 600;


    const particleCount =
        isMobile ? 18 : 32;


    const fragment =
        document.createDocumentFragment();


    for (
        let i = 0;
        i < particleCount;
        i++
    ) {

        const particle =
            document.createElement("span");


        particle.className =
            "cosmic-particle";


        particle.style.left =
            `${Math.random() * 100}%`;


        particle.style.top =
            `${Math.random() * 100}%`;


        particle.style.animationDelay =
            `${Math.random() * 8}s`;


        particle.style.animationDuration =
            `${6 + Math.random() * 8}s`;


        fragment.appendChild(
            particle
        );

    }


    particleContainer.appendChild(
        fragment
    );

}


createParticles();


/* =========================================================
   DYNAMIC PARTICLE CSS
========================================================= */

const particleStyle =
    document.createElement("style");


particleStyle.textContent = `

    .cosmic-particle {

        position: absolute;

        width: 3px;
        height: 3px;

        border-radius: 50%;

        background: #ffffff;

        box-shadow:
            0 0 10px rgba(0,217,255,0.8);

        opacity: 0;

        animation:
            particleFloat
            8s ease-in-out infinite;

    }


    @keyframes particleFloat {

        0% {

            opacity: 0;

            transform:
                translate3d(0,0,0)
                scale(0.5);

        }

        20% {

            opacity: 0.8;

        }

        50% {

            transform:
                translate3d(
                    20px,
                    -35px,
                    0
                )
                scale(1);

        }

        80% {

            opacity: 0.35;

        }

        100% {

            opacity: 0;

            transform:
                translate3d(
                    -15px,
                    -70px,
                    0
                )
                scale(0.5);

        }

    }

`;


document.head.appendChild(
    particleStyle
);


/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

const currentPage =
    window.location.pathname
        .split("/")
        .pop();


document
    .querySelectorAll(".main-navigation a")
    .forEach(link => {

        const href =
            link.getAttribute("href");


        if (
            href &&
            href === currentPage
        ) {

            link.classList.add(
                "active"
            );

        }

    });


/* =========================================================
   FOOTER YEAR
========================================================= */

const footerYear =
    document.getElementById(
        "footer-year"
    );


if (footerYear) {

    footerYear.textContent =
        new Date().getFullYear();

}


/* =========================================================
   AI PLACEHOLDER — EASY TO EDIT
========================================================= */

/*
   நண்பா:

   உன் AI / ChatGPT பகுதியை எழுதும்போது
   HTML-ல் இருக்கும்:

   .ai-user-writing

   என்ற class-க்குள் இருக்கும் text-ஐ
   நேரடியாக மாற்றலாம்.

   JavaScript மூலம் அதை மாற்ற வேண்டிய
   அவசியம் இல்லை.
*/


/* =========================================================
   PAGE READY
========================================================= */

document.body.classList.add(
    "page-ready"
);
/* =========================================================
   SCIWONDERVERSE — EXTRA ANIMATION ENGINE
   Existing JavaScript is NOT replaced.
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* -----------------------------------------------------
       01. COSMIC PARTICLE FIELD
       ----------------------------------------------------- */

    const particleContainer = document.querySelector(".cosmic-background");

    if (particleContainer) {

        const particleCount =
            window.innerWidth <= 768 ? 18 : 32;

        const particleFragment = document.createDocumentFragment();

        for (let i = 0; i < particleCount; i++) {

            const particle = document.createElement("span");

            particle.className = "dynamic-cosmic-particle";

            particle.style.left =
                Math.random() * 100 + "%";

            particle.style.top =
                Math.random() * 100 + "%";

            particle.style.animationDelay =
                (Math.random() * 8) + "s";

            particle.style.animationDuration =
                (7 + Math.random() * 8) + "s";

            particleFragment.appendChild(particle);
        }

        particleContainer.appendChild(particleFragment);
    }


    /* -----------------------------------------------------
       02. CREATOR SECTION MOUSE DEPTH
       ----------------------------------------------------- */

    const creatorVisual =
        document.querySelector(".creator-visual");

    if (creatorVisual && window.innerWidth > 768) {

        creatorVisual.addEventListener("mousemove", (event) => {

            const rect =
                creatorVisual.getBoundingClientRect();

            const x =
                (event.clientX - rect.left) / rect.width - 0.5;

            const y =
                (event.clientY - rect.top) / rect.height - 0.5;

            creatorVisual.style.setProperty(
                "--mouse-x",
                `${x * 12}px`
            );

            creatorVisual.style.setProperty(
                "--mouse-y",
                `${y * 12}px`
            );
        });

        creatorVisual.addEventListener("mouseleave", () => {

            creatorVisual.style.setProperty(
                "--mouse-x",
                "0px"
            );

            creatorVisual.style.setProperty(
                "--mouse-y",
                "0px"
            );
        });
    }


    /* -----------------------------------------------------
       03. AI CARD MOUSE GLOW
       ----------------------------------------------------- */

    const aiCard =
        document.querySelector(".ai-story-card");

    if (aiCard && window.innerWidth > 768) {

        aiCard.addEventListener("mousemove", (event) => {

            const rect =
                aiCard.getBoundingClientRect();

            const x =
                ((event.clientX - rect.left) / rect.width) * 100;

            const y =
                ((event.clientY - rect.top) / rect.height) * 100;

            aiCard.style.setProperty(
                "--ai-mouse-x",
                `${x}%`
            );

            aiCard.style.setProperty(
                "--ai-mouse-y",
                `${y}%`
            );
        });

        aiCard.addEventListener("mouseleave", () => {

            aiCard.style.setProperty(
                "--ai-mouse-x",
                "50%"
            );

            aiCard.style.setProperty(
                "--ai-mouse-y",
                "50%"
            );
        });
    }


    /* -----------------------------------------------------
       04. STAGGERED CARD REVEAL
       ----------------------------------------------------- */

    const animatedGroups = [
        ".why-card",
        ".science-card",
        ".timeline-item",
        ".creator-detail"
    ];

    animatedGroups.forEach(selector => {

        const elements =
            document.querySelectorAll(selector);

        elements.forEach((element, index) => {

            element.style.transitionDelay =
                `${index * 90}ms`;
        });
    });


    /* -----------------------------------------------------
       05. AI QUOTE LETTER REVEAL
       ----------------------------------------------------- */

    const aiQuote =
        document.querySelector(".ai-quote");

    if (aiQuote) {

        aiQuote.classList.add("ai-quote-ready");

        const observer =
            new IntersectionObserver(
                (entries) => {

                    entries.forEach(entry => {

                        if (entry.isIntersecting) {

                            entry.target.classList.add(
                                "ai-quote-visible"
                            );

                            observer.unobserve(
                                entry.target
                            );
                        }

                    });

                },
                {
                    threshold: 0.3
                }
            );

        observer.observe(aiQuote);
    }


    /* -----------------------------------------------------
       06. ACTIVE SECTION INDICATOR
       ----------------------------------------------------- */

    const sections =
        document.querySelectorAll("section[id]");

    const navLinks =
        document.querySelectorAll(
            '.main-navigation a[href^="#"]'
        );

    if (sections.length && navLinks.length) {

        const sectionObserver =
            new IntersectionObserver(
                (entries) => {

                    entries.forEach(entry => {

                        if (!entry.isIntersecting) {
                            return;
                        }

                        const id =
                            entry.target.getAttribute("id");

                        navLinks.forEach(link => {

                            link.classList.toggle(
                                "section-active",
                                link.getAttribute("href") ===
                                `#${id}`
                            );

                        });

                    });

                },
                {
                    rootMargin: "-35% 0px -55% 0px"
                }
            );

        sections.forEach(section => {
            sectionObserver.observe(section);
        });
    }


    /* -----------------------------------------------------
       07. FLOATING PARALLAX SYMBOLS
       ----------------------------------------------------- */

    const symbols =
        document.querySelectorAll(".floating-symbol");

    if (symbols.length && window.innerWidth > 768) {

        window.addEventListener(
            "mousemove",
            (event) => {

                const x =
                    (event.clientX / window.innerWidth) - 0.5;

                const y =
                    (event.clientY / window.innerHeight) - 0.5;

                symbols.forEach((symbol, index) => {

                    const depth =
                        (index + 1) * 5;

                    symbol.style.setProperty(
                        "--parallax-x",
                        `${x * depth}px`
                    );

                    symbol.style.setProperty(
                        "--parallax-y",
                        `${y * depth}px`
                    );
                });
            },
            { passive: true }
        );
    }


    /* -----------------------------------------------------
       08. PAGE VISIBILITY PERFORMANCE
       ----------------------------------------------------- */

    document.addEventListener(
        "visibilitychange",
        () => {

            const animatedElements =
                document.querySelectorAll(
                    ".nebula-one, .nebula-two, .nebula-three, " +
                    ".stars-layer-1, .stars-layer-2, .stars-layer-3"
                );

            animatedElements.forEach(element => {

                element.style.animationPlayState =
                    document.hidden
                        ? "paused"
                        : "running";
            });

        }
    );


    /* -----------------------------------------------------
       09. CREATOR PAGE READY
       ----------------------------------------------------- */

    document.documentElement.classList.add(
        "creator-page-enhanced"
    );

});
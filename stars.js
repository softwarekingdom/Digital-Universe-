
/* =========================================================
   STARS EXPLORER
   PART 01 — JAVASCRIPT
   ========================================================= */


document.addEventListener(
    "DOMContentLoaded",
    () => {


        /* =================================================
           HERO IMAGE PARALLAX
           ================================================= */

        const heroSection =
            document.querySelector(
                ".stars-hero-section"
            );

        const heroImage =
            document.querySelector(
                ".stars-hero-image img"
            );


        if (heroSection && heroImage) {

            heroSection.addEventListener(
                "mousemove",
                (event) => {

                    const rect =
                        heroSection.getBoundingClientRect();

                    const x =
                        (event.clientX - rect.left)
                        / rect.width;

                    const y =
                        (event.clientY - rect.top)
                        / rect.height;

                    const moveX =
                        (x - 0.5) * 10;

                    const moveY =
                        (y - 0.5) * 7;


                    heroImage.style.transform =
                        `scale(1.08)
                         translate(${moveX}px, ${moveY}px)`;

                }
            );


            heroSection.addEventListener(
                "mouseleave",
                () => {

                    heroImage.style.transform =
                        "scale(1.04)";

                }
            );

        }



        /* =================================================
           SCROLL REVEAL
           ================================================= */

        const revealItems =
            document.querySelectorAll(
                ".stellar-stat-card, " +
                ".stellar-introduction, " +
                ".journey-node, " +
                ".journey-note"
            );


        revealItems.forEach(
            (item) => {

                item.style.opacity = "0";

                item.style.transform =
                    "translateY(25px)";

                item.style.transition =
                    "opacity .75s ease, " +
                    "transform .75s ease";

            }
        );


        const revealObserver =
            new IntersectionObserver(
                (entries) => {

                    entries.forEach(
                        (entry) => {

                            if (!entry.isIntersecting) {
                                return;
                            }


                            entry.target.style.opacity =
                                "1";

                            entry.target.style.transform =
                                "translateY(0)";


                            revealObserver.unobserve(
                                entry.target
                            );

                        }
                    );

                },
                {
                    threshold: 0.12
                }
            );


        revealItems.forEach(
            (item) => {

                revealObserver.observe(item);

            }
        );



        /* =================================================
           STAT CARD STAGGER
           ================================================= */

        const statCards =
            document.querySelectorAll(
                ".stellar-stat-card"
            );


        statCards.forEach(
            (card, index) => {

                card.style.transitionDelay =
                    `${index * 90}ms`;

            }
        );



        /* =================================================
           JOURNEY NODE INTERACTION
           ================================================= */

        const journeyNodes =
            document.querySelectorAll(
                ".journey-node"
            );


        journeyNodes.forEach(
            (node) => {

                node.addEventListener(
                    "mouseenter",
                    () => {

                        journeyNodes.forEach(
                            (other) => {

                                other.classList.remove(
                                    "active"
                                );

                            }
                        );


                        node.classList.add(
                            "active"
                        );

                    }
                );

            }
        );



        /* =================================================
           MOBILE MENU
           ================================================= */

        const menuButton =
            document.querySelector(
                ".stars-menu-button"
            );

        const navigation =
            document.querySelector(
                ".stars-navigation"
            );


        if (menuButton && navigation) {

            menuButton.addEventListener(
                "click",
                () => {

                    navigation.classList.toggle(
                        "mobile-visible"
                    );

                }
            );

        }



        /* =================================================
           SMOOTH ANCHOR HANDLING
           ================================================= */

        document
            .querySelectorAll(
                'a[href^="#"]'
            )
            .forEach(
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


                            if (!target) {
                                return;
                            }


                            event.preventDefault();


                            target.scrollIntoView(
                                {
                                    behavior: "smooth",
                                    block: "start"
                                }
                            );

                        }
                    );

                }
            );



        /* =================================================
           PAGE READY
           ================================================= */

        requestAnimationFrame(
            () => {

                document.body.classList.add(
                    "stars-page-ready"
                );

            }
        );


        console.log(
            "⭐ Stars Explorer — Part 01 loaded successfully."
        );


    }
);
/* =========================================================
   PART 02 — STELLAR NURSERY JAVASCRIPT
   ========================================================= */


/* =========================================================
   NURSERY IMAGE PARALLAX
   ========================================================= */

const nurseryVisual =
    document.querySelector(
        ".nursery-visual"
    );

const nurseryImage =
    document.querySelector(
        ".nursery-image-frame img"
    );


if (nurseryVisual && nurseryImage) {

    nurseryVisual.addEventListener(
        "mousemove",
        (event) => {

            const rect =
                nurseryVisual.getBoundingClientRect();

            const x =
                (event.clientX - rect.left)
                / rect.width;

            const y =
                (event.clientY - rect.top)
                / rect.height;


            const moveX =
                (x - 0.5) * 12;

            const moveY =
                (y - 0.5) * 9;


            nurseryImage.style.transform =
                `scale(1.10)
                 translate(${moveX}px, ${moveY}px)`;

        }
    );


    nurseryVisual.addEventListener(
        "mouseleave",
        () => {

            nurseryImage.style.transform =
                "scale(1.04)";

        }
    );

}



/* =========================================================
   CONDITION CARD OBSERVER
   ========================================================= */

const conditionCards =
    document.querySelectorAll(
        ".condition-card"
    );


const conditionObserver =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(
                (entry) => {

                    if (!entry.isIntersecting) {
                        return;
                    }


                    entry.target.classList.add(
                        "condition-visible"
                    );


                    conditionObserver.unobserve(
                        entry.target
                    );

                }
            );

        },
        {
            threshold: .15
        }
    );


conditionCards.forEach(
    (card, index) => {

        card.style.opacity = "0";

        card.style.transform =
            "translateY(25px)";

        card.style.transition =
            "opacity .7s ease, " +
            "transform .7s ease";

        card.style.transitionDelay =
            `${index * 100}ms`;

        conditionObserver.observe(card);

    }
);


/* =========================================================
   CONDITION VISIBILITY
   ========================================================= */

document.addEventListener(
    "mouseover",
    (event) => {

        const card =
            event.target.closest(
                ".condition-card"
            );


        if (
            card &&
            card.classList.contains(
                "condition-visible"
            )
        ) {

            card.style.transform =
                "translateY(-6px)";

        }

    }
);



/* =========================================================
   FORMATION STEPS REVEAL
   ========================================================= */

const formationSteps =
    document.querySelectorAll(
        ".formation-step"
    );


const formationObserver =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(
                (entry) => {

                    if (!entry.isIntersecting) {
                        return;
                    }


                    const steps =
                        document.querySelectorAll(
                            ".formation-step"
                        );


                    steps.forEach(
                        (step, index) => {

                            setTimeout(
                                () => {

                                    step.style.opacity =
                                        "1";

                                    step.style.transform =
                                        "translateY(0)";

                                },
                                index * 180
                            );

                        }
                    );


                    formationObserver.unobserve(
                        entry.target
                    );

                }
            );

        },
        {
            threshold: .2
        }
    );


formationSteps.forEach(
    (step) => {

        step.style.opacity = "0";

        step.style.transform =
            "translateY(25px)";

        step.style.transition =
            "opacity .7s ease, transform .7s ease";

        formationObserver.observe(step);

    }
);



/* =========================================================
   NURSERY TARGET INTERACTION
   ========================================================= */

const cosmicTarget =
    document.querySelector(
        ".cosmic-target"
    );


if (cosmicTarget) {

    cosmicTarget.addEventListener(
        "click",
        () => {

            cosmicTarget.classList.toggle(
                "target-focused"
            );

        }
    );

}



/* =========================================================
   COSMIC MESSAGE
   ========================================================= */

const nurseryMessage =
    document.querySelector(
        ".nursery-message"
    );


if (nurseryMessage) {

    const messageStar =
        nurseryMessage.querySelector(
            ".message-star"
        );


    nurseryMessage.addEventListener(
        "mouseenter",
        () => {

            if (messageStar) {

                messageStar.style.transform =
                    "scale(1.15) rotate(12deg)";

                messageStar.style.transition =
                    "transform .35s ease";

            }

        }
    );


    nurseryMessage.addEventListener(
        "mouseleave",
        () => {

            if (messageStar) {

                messageStar.style.transform =
                    "scale(1) rotate(0deg)";

            }

        }
    );

}



console.log(
    "🌌 Stars Explorer — Part 02: Stellar Nursery loaded."
);
/* =========================================
   SECTION 03 — PROTOSTAR
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    const protostarSection =
        document.querySelector(".protostar-section");

    if (!protostarSection) return;


    /* -----------------------------------------
       REVEAL ANIMATION
    ------------------------------------------ */

    const revealItems =
        protostarSection.querySelectorAll(
            ".reveal-protostar"
        );

    const revealObserver =
        new IntersectionObserver(
            (entries, observer) => {

                entries.forEach((entry) => {

                    if (!entry.isIntersecting) return;

                    entry.target.classList.add(
                        "is-visible"
                    );

                    observer.unobserve(entry.target);

                });

            },
            {
                threshold: 0.12,
                rootMargin: "0px 0px -40px 0px"
            }
        );


    revealItems.forEach((item, index) => {

        item.style.transitionDelay =
            `${Math.min(index * 70, 420)}ms`;

        revealObserver.observe(item);

    });


    /* -----------------------------------------
       PROTOSTAR IMAGE PARALLAX
    ------------------------------------------ */

    const imageFrame =
        protostarSection.querySelector(
            ".protostar-image-frame"
        );

    const image =
        protostarSection.querySelector(
            ".protostar-image"
        );


    if (imageFrame && image) {

        imageFrame.addEventListener(
            "mousemove",
            (event) => {

                const rect =
                    imageFrame.getBoundingClientRect();

                const x =
                    (event.clientX - rect.left)
                    / rect.width - 0.5;

                const y =
                    (event.clientY - rect.top)
                    / rect.height - 0.5;

                const moveX = x * 12;
                const moveY = y * 12;

                image.style.transform =
                    `scale(1.055)
                     translate(${moveX}px, ${moveY}px)`;

            }
        );


        imageFrame.addEventListener(
            "mouseleave",
            () => {

                image.style.transform =
                    "scale(1) translate(0, 0)";

            }
        );

    }


    /* -----------------------------------------
       TIMELINE ACTIVATION
    ------------------------------------------ */

    const timeline =
        protostarSection.querySelector(
            ".protostar-timeline"
        );

    if (timeline) {

        const timelineObserver =
            new IntersectionObserver(
                (entries, observer) => {

                    entries.forEach((entry) => {

                        if (!entry.isIntersecting) return;

                        timeline.classList.add(
                            "timeline-active"
                        );

                        observer.unobserve(
                            entry.target
                        );

                    });

                },
                {
                    threshold: 0.25
                }
            );

        timelineObserver.observe(timeline);

    }


    /* -----------------------------------------
       FORMATION STEP ANIMATION
    ------------------------------------------ */

    const steps =
        protostarSection.querySelectorAll(
            ".proto-step"
        );


    const stepObserver =
        new IntersectionObserver(
            (entries, observer) => {

                entries.forEach((entry) => {

                    if (!entry.isIntersecting) return;

                    const step =
                        entry.target;

                    const stepNumber =
                        Number(
                            step.dataset.step || 1
                        );

                    setTimeout(() => {

                        step.classList.add(
                            "step-visible"
                        );

                    }, stepNumber * 180);

                    observer.unobserve(step);

                });

            },
            {
                threshold: 0.2
            }
        );


    steps.forEach((step) => {

        stepObserver.observe(step);

    });


    /* -----------------------------------------
       IGNITION PANEL
    ------------------------------------------ */

    const ignitionPanel =
        protostarSection.querySelector(
            ".ignition-panel"
        );


    if (ignitionPanel) {

        const ignitionObserver =
            new IntersectionObserver(
                (entries, observer) => {

                    entries.forEach((entry) => {

                        if (!entry.isIntersecting)
                            return;

                        ignitionPanel.classList.add(
                            "ignition-active"
                        );

                        observer.unobserve(
                            entry.target
                        );

                    });

                },
                {
                    threshold: 0.35
                }
            );

        ignitionObserver.observe(
            ignitionPanel
        );

    }


    /* -----------------------------------------
       PROTOSTAR IMAGE CLICK
    ------------------------------------------ */

    if (imageFrame) {

        imageFrame.addEventListener(
            "click",
            () => {

                imageFrame.classList.toggle(
                    "proto-focused"
                );

                const core =
                    imageFrame.querySelector(
                        ".protostar-core"
                    );

                if (!core) return;

                if (
                    imageFrame.classList.contains(
                        "proto-focused"
                    )
                ) {

                    core.style.filter =
                        "brightness(1.25)";

                } else {

                    core.style.filter =
                        "";

                }

            }
        );

    }


    /* -----------------------------------------
       DATA CARD INTERACTION
    ------------------------------------------ */

    const dataCards =
        protostarSection.querySelectorAll(
            ".hud-data-card"
        );


    dataCards.forEach((card) => {

        card.addEventListener(
            "mouseenter",
            () => {

                dataCards.forEach((other) => {

                    if (other !== card) {
                        other.style.opacity = ".55";
                    }

                });

            }
        );


        card.addEventListener(
            "mouseleave",
            () => {

                dataCards.forEach((other) => {

                    other.style.opacity = "";

                });

            }
        );

    });


    /* -----------------------------------------
       COSMIC MESSAGE INTERACTION
    ------------------------------------------ */

    const message =
        protostarSection.querySelector(
            ".protostar-message"
        );

    if (message) {

        message.addEventListener(
            "mouseenter",
            () => {

                message.style.transform =
                    "translateY(-3px)";

                message.style.borderColor =
                    "rgba(105,240,255,.25)";

            }
        );


        message.addEventListener(
            "mouseleave",
            () => {

                message.style.transform =
                    "";

                message.style.borderColor =
                    "";

            }
        );

    }


    /* -----------------------------------------
       REDUCED MOTION SUPPORT
    ------------------------------------------ */

    const reducedMotion =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;


    if (reducedMotion) {

        protostarSection
            .querySelectorAll("*")
            .forEach((element) => {

                element.style.animationDuration =
                    "0.001ms";

                element.style.transitionDuration =
                    "0.001ms";

            });

    }


    console.log(
        "⭐ Digital Universe — Protostar Explorer loaded."
    );

});
/* =========================================
   SECTION 04 — SUN-LIKE STARS
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    const sunstarSection =
        document.querySelector(".sunstar-section");

    if (!sunstarSection) return;


    /* -----------------------------------------
       REVEAL SYSTEM
    ------------------------------------------ */

    const revealItems =
        sunstarSection.querySelectorAll(
            ".reveal-sunstar"
        );


    const revealObserver =
        new IntersectionObserver(
            (entries, observer) => {

                entries.forEach((entry) => {

                    if (!entry.isIntersecting) return;

                    entry.target.classList.add(
                        "is-visible"
                    );

                    observer.unobserve(
                        entry.target
                    );

                });

            },
            {
                threshold: 0.12,
                rootMargin: "0px 0px -40px 0px"
            }
        );


    revealItems.forEach((item, index) => {

        item.style.transitionDelay =
            `${Math.min(index * 75, 450)}ms`;

        revealObserver.observe(item);

    });


    /* -----------------------------------------
       SUN IMAGE PARALLAX
    ------------------------------------------ */

    const imageFrame =
        sunstarSection.querySelector(
            ".sunstar-image-frame"
        );

    const image =
        sunstarSection.querySelector(
            ".sunstar-image"
        );


    if (imageFrame && image) {

        imageFrame.addEventListener(
            "mousemove",
            (event) => {

                const rect =
                    imageFrame.getBoundingClientRect();

                const x =
                    (event.clientX - rect.left)
                    / rect.width - .5;

                const y =
                    (event.clientY - rect.top)
                    / rect.height - .5;

                const moveX = x * 10;
                const moveY = y * 10;

                image.style.transform =
                    `scale(1.055)
                     translate(${moveX}px, ${moveY}px)`;

            }
        );


        imageFrame.addEventListener(
            "mouseleave",
            () => {

                image.style.transform =
                    "scale(1) translate(0,0)";

            }
        );

    }


    /* -----------------------------------------
       IMAGE FOCUS MODE
    ------------------------------------------ */

    if (imageFrame) {

        imageFrame.addEventListener(
            "click",
            () => {

                imageFrame.classList.toggle(
                    "sunstar-focused"
                );

                const core =
                    imageFrame.querySelector(
                        ".sunstar-core"
                    );

                if (!core) return;

                if (
                    imageFrame.classList.contains(
                        "sunstar-focused"
                    )
                ) {

                    core.style.filter =
                        "brightness(1.25)";

                } else {

                    core.style.filter = "";

                }

            }
        );

    }


    /* -----------------------------------------
       DATA CARD HOVER
    ------------------------------------------ */

    const dataCards =
        sunstarSection.querySelectorAll(
            ".sunstar-data-card"
        );


    dataCards.forEach((card) => {

        card.addEventListener(
            "mouseenter",
            () => {

                dataCards.forEach((other) => {

                    if (other !== card) {
                        other.style.opacity = ".5";
                    }

                });

            }
        );


        card.addEventListener(
            "mouseleave",
            () => {

                dataCards.forEach((other) => {

                    other.style.opacity = "";

                });

            }
        );

    });


    /* -----------------------------------------
       LIFECYCLE ANIMATION
    ------------------------------------------ */

    const lifecycle =
        sunstarSection.querySelector(
            ".sunstar-lifecycle"
        );


    if (lifecycle) {

        const lifecycleObserver =
            new IntersectionObserver(
                (entries, observer) => {

                    entries.forEach((entry) => {

                        if (!entry.isIntersecting)
                            return;

                        lifecycle.classList.add(
                            "lifecycle-active"
                        );

                        observer.unobserve(
                            entry.target
                        );

                    });

                },
                {
                    threshold: .25
                }
            );

        lifecycleObserver.observe(
            lifecycle
        );

    }


    /* -----------------------------------------
       LIFECYCLE NODE INTERACTION
    ------------------------------------------ */

    const lifeNodes =
        sunstarSection.querySelectorAll(
            ".life-node"
        );


    lifeNodes.forEach((node) => {

        node.addEventListener(
            "click",
            () => {

                lifeNodes.forEach((item) => {

                    item.classList.remove(
                        "active"
                    );

                });

                node.classList.add(
                    "active"
                );

            }
        );

    });


    /* -----------------------------------------
       ENGINE CARD INTERACTION
    ------------------------------------------ */

    const engineCards =
        sunstarSection.querySelectorAll(
            ".engine-card"
        );


    engineCards.forEach((card) => {

        card.addEventListener(
            "mouseenter",
            () => {

                engineCards.forEach((other) => {

                    if (other !== card) {
                        other.style.opacity = ".48";
                    }

                });

            }
        );


        card.addEventListener(
            "mouseleave",
            () => {

                engineCards.forEach((other) => {

                    other.style.opacity = "";

                });

            }
        );

    });


    /* -----------------------------------------
       MESSAGE INTERACTION
    ------------------------------------------ */

    const message =
        sunstarSection.querySelector(
            ".sunstar-message"
        );


    if (message) {

        message.addEventListener(
            "mouseenter",
            () => {

                const icon =
                    message.querySelector(
                        ".sun-message-icon"
                    );

                if (icon) {
                    icon.style.transform =
                        "rotate(12deg) scale(1.08)";
                }

            }
        );


        message.addEventListener(
            "mouseleave",
            () => {

                const icon =
                    message.querySelector(
                        ".sun-message-icon"
                    );

                if (icon) {
                    icon.style.transform = "";
                }

            }
        );

    }


    /* -----------------------------------------
       REDUCED MOTION
    ------------------------------------------ */

    const reducedMotion =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;


    if (reducedMotion) {

        sunstarSection
            .querySelectorAll("*")
            .forEach((element) => {

                element.style.animationDuration =
                    "0.001ms";

                element.style.transitionDuration =
                    "0.001ms";

            });

    }


    console.log(
        "☀️ Digital Universe — Sun-like Stars Explorer loaded."
    );

});
/* =========================================
   SECTION 05 — RED STARS
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    const redstarSection =
        document.querySelector(".redstar-section");

    if (!redstarSection) return;


    /* -----------------------------------------
       REVEAL SYSTEM
    ------------------------------------------ */

    const revealItems =
        redstarSection.querySelectorAll(
            ".reveal-redstar"
        );


    const revealObserver =
        new IntersectionObserver(
            (entries, observer) => {

                entries.forEach((entry) => {

                    if (!entry.isIntersecting) return;

                    entry.target.classList.add(
                        "is-visible"
                    );

                    observer.unobserve(
                        entry.target
                    );

                });

            },
            {
                threshold: 0.12,
                rootMargin: "0px 0px -40px 0px"
            }
        );


    revealItems.forEach((item, index) => {

        item.style.transitionDelay =
            `${Math.min(index * 70, 450)}ms`;

        revealObserver.observe(item);

    });


    /* -----------------------------------------
       IMAGE PARALLAX
    ------------------------------------------ */

    const imageFrame =
        redstarSection.querySelector(
            ".redstar-image-frame"
        );

    const image =
        redstarSection.querySelector(
            ".redstar-image"
        );


    if (imageFrame && image) {

        imageFrame.addEventListener(
            "mousemove",
            (event) => {

                const rect =
                    imageFrame.getBoundingClientRect();

                const x =
                    (event.clientX - rect.left)
                    / rect.width - .5;

                const y =
                    (event.clientY - rect.top)
                    / rect.height - .5;

                const moveX = x * 11;
                const moveY = y * 11;

                image.style.transform =
                    `scale(1.055)
                     translate(${moveX}px, ${moveY}px)`;

            }
        );


        imageFrame.addEventListener(
            "mouseleave",
            () => {

                image.style.transform =
                    "scale(1) translate(0,0)";

            }
        );

    }


    /* -----------------------------------------
       IMAGE FOCUS
    ------------------------------------------ */

    if (imageFrame) {

        imageFrame.addEventListener(
            "click",
            () => {

                imageFrame.classList.toggle(
                    "redstar-focused"
                );

                const core =
                    imageFrame.querySelector(
                        ".redstar-core"
                    );

                if (!core) return;

                if (
                    imageFrame.classList.contains(
                        "redstar-focused"
                    )
                ) {

                    core.style.filter =
                        "brightness(1.3)";

                } else {

                    core.style.filter = "";

                }

            }
        );

    }


    /* -----------------------------------------
       DATA CARD INTERACTION
    ------------------------------------------ */

    const dataCards =
        redstarSection.querySelectorAll(
            ".redstar-data-card"
        );


    dataCards.forEach((card) => {

        card.addEventListener(
            "mouseenter",
            () => {

                dataCards.forEach((other) => {

                    if (other !== card) {
                        other.style.opacity = ".48";
                    }

                });

            }
        );


        card.addEventListener(
            "mouseleave",
            () => {

                dataCards.forEach((other) => {

                    other.style.opacity = "";

                });

            }
        );

    });


    /* -----------------------------------------
       TYPE CARD INTERACTION
    ------------------------------------------ */

    const typeCards =
        redstarSection.querySelectorAll(
            ".redstar-type-card"
        );


    typeCards.forEach((card) => {

        card.addEventListener(
            "mouseenter",
            () => {

                typeCards.forEach((other) => {

                    if (other !== card) {
                        other.style.opacity = ".5";
                    }

                });

            }
        );


        card.addEventListener(
            "mouseleave",
            () => {

                typeCards.forEach((other) => {

                    other.style.opacity = "";

                });

            }
        );

    });


    /* -----------------------------------------
       COLOR SPECTRUM INTERACTION
    ------------------------------------------ */

    const spectrum =
        redstarSection.querySelector(
            ".spectrum-track"
        );


    if (spectrum) {

        spectrum.addEventListener(
            "click",
            () => {

                spectrum.classList.toggle(
                    "spectrum-active"
                );

                spectrum.style.boxShadow =
                    spectrum.classList.contains(
                        "spectrum-active"
                    )
                    ? "0 0 40px rgba(255,100,100,.25)"
                    : "";

            }
        );

    }


    /* -----------------------------------------
       MESSAGE
    ------------------------------------------ */

    const message =
        redstarSection.querySelector(
            ".redstar-message"
        );


    if (message) {

        message.addEventListener(
            "mouseenter",
            () => {

                const icon =
                    message.querySelector(
                        ".red-message-icon"
                    );

                if (icon) {

                    icon.style.transform =
                        "scale(1.08) rotate(-8deg)";

                }

            }
        );


        message.addEventListener(
            "mouseleave",
            () => {

                const icon =
                    message.querySelector(
                        ".red-message-icon"
                    );

                if (icon) {

                    icon.style.transform = "";

                }

            }
        );

    }


    /* -----------------------------------------
       REDUCED MOTION
    ------------------------------------------ */

    const reducedMotion =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;


    if (reducedMotion) {

        redstarSection
            .querySelectorAll("*")
            .forEach((element) => {

                element.style.animationDuration =
                    "0.001ms";

                element.style.transitionDuration =
                    "0.001ms";

            });

    }


    console.log(
        "🔴 Digital Universe — Red Stars Explorer loaded."
    );

});
/* =========================================================
   STARS EXPLORER — SECTION 06
   ORANGE STARS
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       ELEMENTS
    ===================================================== */

    const orangeSection =
        document.querySelector(".orange-star-section");

    const orangeImage =
        document.querySelector(".orange-star-image");

    const orangeFrame =
        document.querySelector(".orange-star-image-frame");

    const revealItems =
        document.querySelectorAll(".reveal-orange");

    const profileCards =
        document.querySelectorAll(".orange-profile-card");

    const spectrumStars =
        document.querySelectorAll(".spectrum-star");

    const spectrumInfo =
        document.querySelector(".orange-spectrum-info");

    const spectrumInfoTitle =
        spectrumInfo?.querySelector("h4");

    const spectrumInfoText =
        spectrumInfo?.querySelector("p");

    const messageSymbol =
        document.querySelector(".orange-message-symbol");

    const energyNodes =
        document.querySelectorAll(".energy-node");


    /* =====================================================
       SCROLL REVEAL
    ===================================================== */

    if ("IntersectionObserver" in window) {

        const orangeObserver =
            new IntersectionObserver(
                (entries, observer) => {

                    entries.forEach(entry => {

                        if (!entry.isIntersecting) {
                            return;
                        }

                        entry.target.classList.add(
                            "orange-visible"
                        );

                        observer.unobserve(entry.target);

                    });

                },
                {
                    threshold: 0.12
                }
            );

        revealItems.forEach((item, index) => {

            item.style.transitionDelay =
                `${Math.min(index * 70, 420)}ms`;

            orangeObserver.observe(item);

        });

    } else {

        revealItems.forEach(item => {
            item.classList.add("orange-visible");
        });

    }


    /* =====================================================
       IMAGE PARALLAX
    ===================================================== */

    if (
        orangeFrame &&
        orangeImage &&
        window.matchMedia("(pointer: fine)").matches
    ) {

        orangeFrame.addEventListener(
            "mousemove",
            event => {

                const rect =
                    orangeFrame.getBoundingClientRect();

                const x =
                    (event.clientX - rect.left)
                    / rect.width
                    - 0.5;

                const y =
                    (event.clientY - rect.top)
                    / rect.height
                    - 0.5;

                orangeImage.style.transform =
                    `scale(1.045)
                     translate(${x * 10}px, ${y * 10}px)`;

            }
        );


        orangeFrame.addEventListener(
            "mouseleave",
            () => {

                orangeImage.style.transform =
                    "scale(1) translate(0, 0)";

            }
        );

    }


    /* =====================================================
       IMAGE FOCUS
    ===================================================== */

    if (orangeFrame) {

        orangeFrame.addEventListener(
            "click",
            () => {

                orangeFrame.classList.toggle(
                    "orange-frame-focused"
                );

                if (
                    orangeFrame.classList.contains(
                        "orange-frame-focused"
                    )
                ) {

                    orangeFrame.style.boxShadow =
                        `0 0 100px rgba(255, 136, 42, 0.25),
                         0 30px 100px rgba(0, 0, 0, 0.5)`;

                } else {

                    orangeFrame.style.boxShadow = "";

                }

            }
        );

    }


    /* =====================================================
       PROFILE CARD INTERACTION
    ===================================================== */

    profileCards.forEach(card => {

        card.addEventListener(
            "mouseenter",
            () => {

                profileCards.forEach(other => {

                    if (other !== card) {
                        other.style.opacity = "0.58";
                    }

                });

            }
        );


        card.addEventListener(
            "mouseleave",
            () => {

                profileCards.forEach(other => {

                    other.style.opacity = "";

                });

            }
        );

    });


    /* =====================================================
       SPECTRUM INTERACTION
    ===================================================== */

    const spectrumMessages = {

        hot: {
            title:
                "Blue stars → generally hotter surfaces",
            text:
                "Blue appearance is associated with a higher-energy distribution of emitted light."
        },

        "very-warm": {
            title:
                "White stars → very warm stellar surfaces",
            text:
                "White appearance can occur when the visible spectrum is spread more evenly across several wavelengths."
        },

        warm: {
            title:
                "Yellow stars → warm stellar surfaces",
            text:
                "Sun-like stars are a familiar example of stars that appear yellowish or nearly white depending on viewing conditions."
        },

        cooler: {
            title:
                "Orange stars → relatively cooler side",
            text:
                "Orange appearance is commonly associated with cooler stellar surfaces than yellow, white, and blue stars."
        },

        cool: {
            title:
                "Red stars → cooler stellar surfaces",
            text:
                "Red appearance is generally associated with the cooler end of the visible stellar color sequence."
        }

    };


    spectrumStars.forEach(star => {

        star.addEventListener(
            "click",
            () => {

                spectrumStars.forEach(item => {
                    item.style.filter = "brightness(0.58)";
                });

                star.style.filter =
                    "brightness(1.18)";

                const type =
                    star.dataset.spectrum;

                const message =
                    spectrumMessages[type];

                if (
                    message &&
                    spectrumInfoTitle &&
                    spectrumInfoText
                ) {

                    spectrumInfoTitle.textContent =
                        message.title;

                    spectrumInfoText.textContent =
                        message.text;

                }

            }
        );

    });


    /* =====================================================
       ENERGY FLOW
    ===================================================== */

    energyNodes.forEach((node, index) => {

        node.addEventListener(
            "mouseenter",
            () => {

                energyNodes.forEach(other => {

                    other.style.opacity = "0.45";

                });

                node.style.opacity = "1";

                node.style.transform =
                    "translateY(-5px)";

                node.style.borderColor =
                    "rgba(255, 174, 82, 0.38)";

            }
        );


        node.addEventListener(
            "mouseleave",
            () => {

                energyNodes.forEach(other => {

                    other.style.opacity = "";
                    other.style.transform = "";
                    other.style.borderColor = "";

                });

            }
        );

    });


    /* =====================================================
       COSMIC MESSAGE
    ===================================================== */

    if (messageSymbol) {

        messageSymbol.addEventListener(
            "click",
            () => {

                messageSymbol.animate(
                    [
                        {
                            transform: "scale(1)"
                        },
                        {
                            transform:
                                "scale(1.18) rotate(8deg)"
                        },
                        {
                            transform:
                                "scale(1) rotate(0deg)"
                        }
                    ],
                    {
                        duration: 650,
                        easing: "cubic-bezier(.2,.8,.2,1)"
                    }
                );

            }
        );

    }


    /* =====================================================
       REDUCE MOTION SUPPORT
    ===================================================== */

    const reducedMotion =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

    if (reducedMotion) {

        document
            .querySelectorAll(
                ".orange-dust, .orange-orbit, .orange-core-inner, " +
                ".orange-core-glow, .orange-scan-line, " +
                ".ktype-star-core, .ktype-star-glow, " +
                ".ktype-orbit, .orange-message-signal i"
            )
            .forEach(element => {

                element.style.animation =
                    "none";

            });

    }


    /* =====================================================
       SECTION ACTIVE STATE
    ===================================================== */

    if (orangeSection) {

        const activeObserver =
            new IntersectionObserver(
                entries => {

                    entries.forEach(entry => {

                        if (entry.isIntersecting) {

                            orangeSection.classList.add(
                                "orange-section-active"
                            );

                        } else {

                            orangeSection.classList.remove(
                                "orange-section-active"
                            );

                        }

                    });

                },
                {
                    threshold: 0.08
                }
            );

        activeObserver.observe(orangeSection);

    }


    /* =====================================================
       CONSOLE
    ===================================================== */

    console.log(
        "⭐ Stars Explorer — Section 06 loaded: Orange Stars"
    );

});
/* =========================================================
   STARS EXPLORER — SECTION 07
   WHITE & BLUE STARS
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       ELEMENTS
    ===================================================== */

    const section =
        document.querySelector(".whiteblue-section");

    const image =
        document.querySelector("#whiteblueMainImage");

    const imageFrame =
        document.querySelector(".whiteblue-image-frame");

    const revealItems =
        document.querySelectorAll(".reveal-whiteblue");

    const switchButtons =
        document.querySelectorAll(".whiteblue-switch");

    const viewLabel =
        document.querySelector("#whiteblueViewLabel");

    const typeCards =
        document.querySelectorAll(".whiteblue-type-card");

    const temperaturePoints =
        document.querySelectorAll(".temperature-point");

    const temperatureTitle =
        document.querySelector("#temperatureInfoTitle");

    const temperatureText =
        document.querySelector("#temperatureInfoText");

    const energyItems =
        document.querySelectorAll(".energy-chain-item");


    /* =====================================================
       IMAGE DATA
    ===================================================== */

    const starImages = {

        white: {
            image:
                "assets/images/white-star.png",

            label:
                "WHITE STAR"
        },

        blue: {
            image:
                "assets/images/blue-star.jpg",

            label:
                "BLUE STAR"
        }

    };


    /* =====================================================
       SCROLL REVEAL
    ===================================================== */

    if ("IntersectionObserver" in window) {

        const revealObserver =
            new IntersectionObserver(
                (entries, observer) => {

                    entries.forEach(entry => {

                        if (!entry.isIntersecting) {
                            return;
                        }

                        entry.target.classList.add(
                            "whiteblue-visible"
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

        revealItems.forEach((item, index) => {

            item.style.transitionDelay =
                `${Math.min(index * 75, 450)}ms`;

            revealObserver.observe(item);

        });

    } else {

        revealItems.forEach(item => {

            item.classList.add(
                "whiteblue-visible"
            );

        });

    }


    /* =====================================================
       STAR IMAGE SWITCHER
    ===================================================== */

    switchButtons.forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const selected =
                    button.dataset.star;

                const data =
                    starImages[selected];

                if (!data || !image) {
                    return;
                }


                switchButtons.forEach(item => {

                    item.classList.remove(
                        "active"
                    );

                });

                button.classList.add(
                    "active"
                );


                image.style.opacity = "0";

                image.style.transform =
                    "scale(1.08)";


                window.setTimeout(() => {

                    image.src =
                        data.image;

                    image.alt =
                        data.label;


                    if (viewLabel) {

                        viewLabel.textContent =
                            data.label;

                    }


                    image.style.opacity =
                        "1";

                    image.style.transform =
                        "scale(1)";

                }, 220);

            }
        );

    });


    /* =====================================================
       IMAGE PARALLAX
    ===================================================== */

    if (
        imageFrame &&
        image &&
        window.matchMedia("(pointer: fine)").matches
    ) {

        imageFrame.addEventListener(
            "mousemove",
            event => {

                const rect =
                    imageFrame.getBoundingClientRect();

                const x =
                    (event.clientX - rect.left)
                    / rect.width
                    - 0.5;

                const y =
                    (event.clientY - rect.top)
                    / rect.height
                    - 0.5;

                image.style.transform =
                    `scale(1.045)
                     translate(${x * 10}px, ${y * 10}px)`;

            }
        );


        imageFrame.addEventListener(
            "mouseleave",
            () => {

                image.style.transform =
                    "scale(1) translate(0, 0)";

            }
        );

    }


    /* =====================================================
       TYPE CARD INTERACTION
    ===================================================== */

    typeCards.forEach(card => {

        card.addEventListener(
            "mouseenter",
            () => {

                typeCards.forEach(other => {

                    if (other !== card) {

                        other.style.opacity =
                            "0.52";

                    }

                });

            }
        );


        card.addEventListener(
            "mouseleave",
            () => {

                typeCards.forEach(other => {

                    other.style.opacity =
                        "";

                });

            }
        );

    });


    /* =====================================================
       TEMPERATURE INFORMATION
    ===================================================== */

    const temperatureMessages = {

        blue: {

            title:
                "Blue stars → generally hotter stellar surfaces.",

            text:
                "Blue appearance is commonly associated with a higher-temperature stellar spectrum and high-energy radiation."

        },

        white: {

            title:
                "White stars → light spread across visible wavelengths.",

            text:
                "White appearance can occur when a broad range of visible wavelengths contributes strongly to the observed light."

        },

        yellow: {

            title:
                "Yellow stars → a familiar middle part of the sequence.",

            text:
                "Sun-like stars can appear yellowish or nearly white depending on viewing conditions and how their light is observed."

        },

        orange: {

            title:
                "Orange stars → generally cooler than blue and white stars.",

            text:
                "Orange appearance is commonly associated with cooler stellar surfaces than the hotter blue end of the sequence."

        },

        red: {

            title:
                "Red stars → toward the cooler side of stellar colors.",

            text:
                "Red appearance is generally associated with cooler stellar surfaces, although stellar classification involves more than color alone."

        }

    };


    temperaturePoints.forEach(point => {

        point.addEventListener(
            "click",
            () => {

                const type =
                    point.dataset.temperature;

                const data =
                    temperatureMessages[type];

                if (!data) {
                    return;
                }


                temperaturePoints.forEach(item => {

                    item.style.filter =
                        "brightness(0.55)";

                });

                point.style.filter =
                    "brightness(1.2)";


                if (temperatureTitle) {

                    temperatureTitle.textContent =
                        data.title;

                }


                if (temperatureText) {

                    temperatureText.textContent =
                        data.text;

                }

            }
        );

    });


    /* =====================================================
       ENERGY CHAIN INTERACTION
    ===================================================== */

    energyItems.forEach(item => {

        item.addEventListener(
            "mouseenter",
            () => {

                energyItems.forEach(other => {

                    other.style.opacity =
                        "0.45";

                });

                item.style.opacity =
                    "1";

                item.style.transform =
                    "translateY(-6px)";

            }
        );


        item.addEventListener(
            "mouseleave",
            () => {

                energyItems.forEach(other => {

                    other.style.opacity =
                        "";

                    other.style.transform =
                        "";

                });

            }
        );

    });


    /* =====================================================
       IMAGE CLICK FOCUS
    ===================================================== */

    if (imageFrame) {

        imageFrame.addEventListener(
            "click",
            () => {

                imageFrame.classList.toggle(
                    "whiteblue-focused"
                );


                if (
                    imageFrame.classList.contains(
                        "whiteblue-focused"
                    )
                ) {

                    imageFrame.style.boxShadow =
                        `0 0 110px rgba(92, 169, 255, 0.24),
                         0 30px 100px rgba(0, 0, 0, 0.52)`;

                } else {

                    imageFrame.style.boxShadow =
                        "";

                }

            }
        );

    }


    /* =====================================================
       SECTION ACTIVE STATE
    ===================================================== */

    if (section) {

        const sectionObserver =
            new IntersectionObserver(
                entries => {

                    entries.forEach(entry => {

                        if (entry.isIntersecting) {

                            section.classList.add(
                                "whiteblue-active"
                            );

                        }

                    });

                },
                {
                    threshold: 0.08
                }
            );

        sectionObserver.observe(section);

    }


    /* =====================================================
       REDUCED MOTION
    ===================================================== */

    const reducedMotion =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

    if (reducedMotion) {

        document
            .querySelectorAll(
                ".whiteblue-core-inner, " +
                ".whiteblue-ring, " +
                ".whiteblue-scan, " +
                ".whiteblue-status-dot, " +
                ".temp-bars i, " +
                ".energy-star-core, " +
                ".energy-orbit, " +
                ".whiteblue-signal i"
            )
            .forEach(element => {

                element.style.animation =
                    "none";

            });

    }


    /* =====================================================
       CONSOLE
    ===================================================== */

    console.log(
        "⭐ Stars Explorer — Section 07 loaded: White & Blue Stars"
    );

});
/* =========================================================
   STARS EXPLORER — SECTION 08
   RED SUPERGIANTS & SUPERNOVA
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       ELEMENTS
    ===================================================== */

    const section =
        document.querySelector(
            ".redsupernova-section"
        );

    const redImage =
        document.querySelector(
            "#redSupergiantImage"
        );

    const supernovaImage =
        document.querySelector(
            "#supernovaImage"
        );

    const imageFrame =
        document.querySelector(
            ".redsupernova-image-frame"
        );

    const switchButtons =
        document.querySelectorAll(
            ".super-switch"
        );

    const revealItems =
        document.querySelectorAll(
            ".reveal-redsupernova"
        );

    const transformationStages =
        document.querySelectorAll(
            ".transformation-stage"
        );

    const remnantCards =
        document.querySelectorAll(
            ".remnant-card"
        );


    /* =====================================================
       VIEW DATA
    ===================================================== */

    const viewData = {

        supergiant: {
            image:
                "assets/images/red-supergiant.jpg",

            label:
                "RED SUPERGIANT"
        },

        supernova: {
            image:
                "assets/images/supernova.png",

            label:
                "SUPERNOVA"
        }

    };


    /* =====================================================
       SCROLL REVEAL
    ===================================================== */

    if ("IntersectionObserver" in window) {

        const revealObserver =
            new IntersectionObserver(
                (entries, observer) => {

                    entries.forEach(entry => {

                        if (!entry.isIntersecting) {
                            return;
                        }

                        entry.target.classList.add(
                            "redsupernova-visible"
                        );

                        observer.unobserve(
                            entry.target
                        );

                    });

                },
                {
                    threshold: 0.10
                }
            );

        revealItems.forEach((item, index) => {

            item.style.transitionDelay =
                `${Math.min(index * 80, 480)}ms`;

            revealObserver.observe(item);

        });

    } else {

        revealItems.forEach(item => {

            item.classList.add(
                "redsupernova-visible"
            );

        });

    }


    /* =====================================================
       IMAGE VIEW SWITCHER
    ===================================================== */

    switchButtons.forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const selected =
                    button.dataset.view;

                const data =
                    viewData[selected];

                if (!data) {
                    return;
                }


                switchButtons.forEach(item => {

                    item.classList.remove(
                        "active"
                    );

                });

                button.classList.add(
                    "active"
                );


                if (!redImage) {
                    return;
                }


                redImage.style.opacity =
                    "0";

                redImage.style.transform =
                    "scale(1.08)";


                window.setTimeout(() => {

                    redImage.src =
                        data.image;

                    redImage.alt =
                        data.label;

                    redImage.style.opacity =
                        "1";

                    redImage.style.transform =
                        "scale(1)";

                }, 230);

            }
        );

    });


    /* =====================================================
       RED SUPERGIANT PARALLAX
    ===================================================== */

    if (
        imageFrame &&
        redImage &&
        window.matchMedia(
            "(pointer: fine)"
        ).matches
    ) {

        imageFrame.addEventListener(
            "mousemove",
            event => {

                const rect =
                    imageFrame.getBoundingClientRect();

                const x =
                    (event.clientX - rect.left)
                    / rect.width
                    - 0.5;

                const y =
                    (event.clientY - rect.top)
                    / rect.height
                    - 0.5;

                redImage.style.transform =
                    `scale(1.045)
                     translate(${x * 10}px, ${y * 10}px)`;

            }
        );


        imageFrame.addEventListener(
            "mouseleave",
            () => {

                redImage.style.transform =
                    "scale(1) translate(0, 0)";

            }
        );

    }


    /* =====================================================
       TRANSFORMATION STAGE INTERACTION
    ===================================================== */

    transformationStages.forEach(stage => {

        stage.addEventListener(
            "mouseenter",
            () => {

                transformationStages.forEach(
                    other => {

                        if (other !== stage) {

                            other.style.opacity =
                                "0.48";

                        }

                    }
                );

            }
        );


        stage.addEventListener(
            "mouseleave",
            () => {

                transformationStages.forEach(
                    other => {

                        other.style.opacity =
                            "";

                    }
                );

            }
        );

    });


    /* =====================================================
       REMNANT CARD INTERACTION
    ===================================================== */

    remnantCards.forEach(card => {

        card.addEventListener(
            "mouseenter",
            () => {

                remnantCards.forEach(
                    other => {

                        if (other !== card) {

                            other.style.opacity =
                                "0.48";

                        }

                    }
                );

            }
        );


        card.addEventListener(
            "mouseleave",
            () => {

                remnantCards.forEach(
                    other => {

                        other.style.opacity =
                            "";

                    }
                );

            }
        );

    });


    /* =====================================================
       SUPERNOVA IMAGE PARALLAX
    ===================================================== */

    const supernovaFrame =
        document.querySelector(
            ".supernova-image-frame"
        );


    if (
        supernovaFrame &&
        supernovaImage &&
        window.matchMedia(
            "(pointer: fine)"
        ).matches
    ) {

        supernovaFrame.addEventListener(
            "mousemove",
            event => {

                const rect =
                    supernovaFrame.getBoundingClientRect();

                const x =
                    (event.clientX - rect.left)
                    / rect.width
                    - 0.5;

                const y =
                    (event.clientY - rect.top)
                    / rect.height
                    - 0.5;

                supernovaImage.style.transform =
                    `scale(1.055)
                     translate(${x * 9}px, ${y * 9}px)`;

            }
        );


        supernovaFrame.addEventListener(
            "mouseleave",
            () => {

                supernovaImage.style.transform =
                    "scale(1) translate(0, 0)";

            }
        );

    }


    /* =====================================================
       IMAGE CLICK FOCUS
    ===================================================== */

    if (imageFrame) {

        imageFrame.addEventListener(
            "click",
            () => {

                imageFrame.classList.toggle(
                    "redsupernova-focused"
                );

                if (
                    imageFrame.classList.contains(
                        "redsupernova-focused"
                    )
                ) {

                    imageFrame.style.boxShadow =
                        `0 0 120px rgba(255, 72, 58, 0.22),
                         0 35px 110px rgba(0, 0, 0, 0.55)`;

                } else {

                    imageFrame.style.boxShadow =
                        "";

                }

            }
        );

    }


    /* =====================================================
       SECTION ACTIVE
    ===================================================== */

    if (section) {

        const sectionObserver =
            new IntersectionObserver(
                entries => {

                    entries.forEach(entry => {

                        if (entry.isIntersecting) {

                            section.classList.add(
                                "redsupernova-active"
                            );

                        }

                    });

                },
                {
                    threshold: 0.08
                }
            );

        sectionObserver.observe(section);

    }


    /* =====================================================
       REDUCED MOTION
    ===================================================== */

    const reducedMotion =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

    if (reducedMotion) {

        document
            .querySelectorAll(
                ".redsupernova-core-inner, " +
                ".redsupernova-ring, " +
                ".redsupernova-scan, " +
                ".super-status-dot, " +
                ".mass-meter i, " +
                ".stage-orb-explosion, " +
                ".supernova-blast, " +
                ".supernova-pulse, " +
                ".redsupernova-signal i"
            )
            .forEach(element => {

                element.style.animation =
                    "none";

            });

    }


    /* =====================================================
       CONSOLE
    ===================================================== */

    console.log(
        "💥 Stars Explorer — Section 08 loaded: Red Supergiants & Supernova"
    );

});
/* =========================================================
   STARS EXPLORER — PART 09
   GRAND FINALE — JS
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const finalSection =
        document.querySelector(".stellarfinal-section");

    if (!finalSection) return;


    /* =====================================================
       REVEAL ANIMATION
       ===================================================== */

    const revealItems =
        finalSection.querySelectorAll(".reveal-final");

    const revealObserver =
        new IntersectionObserver(
            (entries, observer) => {

                entries.forEach((entry) => {

                    if (!entry.isIntersecting) return;

                    entry.target.classList.add(
                        "final-visible"
                    );

                    observer.unobserve(entry.target);
                });

            },
            {
                threshold: 0.12
            }
        );

    revealItems.forEach((item, index) => {

        item.style.transitionDelay =
            `${Math.min(index * 70, 420)}ms`;

        revealObserver.observe(item);

    });


    /* =====================================================
       CARD HOVER DIMMING
       ===================================================== */

    const cards =
        finalSection.querySelectorAll(
            ".stellarfinal-card"
        );

    cards.forEach((card) => {

        card.addEventListener("mouseenter", () => {

            cards.forEach((otherCard) => {

                if (otherCard !== card) {
                    otherCard.style.opacity = "0.62";
                }

            });

        });

        card.addEventListener("mouseleave", () => {

            cards.forEach((otherCard) => {

                otherCard.style.opacity = "1";

            });

        });

    });


    /* =====================================================
       MILKY WAY PARALLAX
       ===================================================== */

    const milkyWayImage =
        finalSection.querySelector(
            ".stellarfinal-milkyway-card img"
        );

    const milkyWayCard =
        finalSection.querySelector(
            ".stellarfinal-milkyway-card"
        );

    if (milkyWayImage && milkyWayCard) {

        milkyWayCard.addEventListener(
            "mousemove",
            (event) => {

                if (
                    window.matchMedia(
                        "(prefers-reduced-motion: reduce)"
                    ).matches
                ) return;

                const rect =
                    milkyWayCard.getBoundingClientRect();

                const x =
                    (event.clientX - rect.left) /
                    rect.width -
                    0.5;

                const y =
                    (event.clientY - rect.top) /
                    rect.height -
                    0.5;

                milkyWayImage.style.transform =
                    `scale(1.09)
                     translate(${x * 10}px, ${y * 10}px)`;

            }
        );

        milkyWayCard.addEventListener(
            "mouseleave",
            () => {

                milkyWayImage.style.transform =
                    "scale(1.04) translate(0,0)";

            }
        );

    }


    /* =====================================================
       BINARY STAR INTERACTION
       ===================================================== */

    const binarySystem =
        finalSection.querySelector(
            ".stellarfinal-binary-system"
        );

    const binaryCard =
        finalSection.querySelector(
            ".stellarfinal-binary-card"
        );

    if (binarySystem && binaryCard) {

        binaryCard.addEventListener(
            "click",
            () => {

                binarySystem.classList.toggle(
                    "binary-focused"
                );

                if (
                    binarySystem.classList.contains(
                        "binary-focused"
                    )
                ) {

                    binarySystem.style.transform =
                        "translate(-50%, -50%) scale(1.12)";

                    binarySystem.style.filter =
                        "drop-shadow(0 0 25px rgba(105,240,255,.45))";

                } else {

                    binarySystem.style.transform =
                        "translate(-50%, -50%) scale(1)";

                    binarySystem.style.filter =
                        "none";

                }

            }
        );

    }


    /* =====================================================
       JOURNEY PROGRESS
       ===================================================== */

    const journeyNodes =
        finalSection.querySelectorAll(
            ".stellarfinal-journey-node"
        );

    const progressFill =
        finalSection.querySelector(
            ".stellarfinal-progress-fill"
        );

    const progressValue =
        finalSection.querySelector(
            "#stellarfinal-progress-value"
        );

    const stageTitle =
        finalSection.querySelector(
            "#stellarfinal-stage-title"
        );

    const stageText =
        finalSection.querySelector(
            "#stellarfinal-stage-text"
        );


    const journeyData = {

        "Molecular Cloud": {
            text:
                "நட்சத்திரப் பிறப்புக்கான ஆரம்ப சூழல். " +
                "Gas மற்றும் dust நிறைந்த பகுதிகளில் " +
                "gravitational collapse தொடங்கலாம்."
        },

        "Protostar": {
            text:
                "சுருங்கும் gas மற்றும் dust மூலம் " +
                "protostar உருவாகிறது. அதன் மையத்தில் " +
                "வெப்பநிலையும் அடர்த்தியும் அதிகரிக்கின்றன."
        },

        "Main Sequence": {
            text:
                "Hydrogen fusion நீண்ட காலத்திற்கு " +
                "நட்சத்திரத்தின் முக்கிய energy source ஆகிறது."
        },

        "Evolution": {
            text:
                "மையத்தில் fuel மாற்றம் ஏற்படும் போது " +
                "நட்சத்திரத்தின் structure மற்றும் luminosity " +
                "மாறத் தொடங்குகின்றன."
        },

        "Final Fate": {
            text:
                "Mass-ஐப் பொறுத்து white dwarf, neutron star, " +
                "black hole அல்லது பிற stellar remnants " +
                "போன்ற முடிவுகள் ஏற்படலாம்."
        },

        "Cosmic Legacy": {
            text:
                "நட்சத்திரங்களின் பொருட்கள் மற்றும் அவற்றின் " +
                "செயல்முறைகள் அடுத்த cosmic generation-ஐ " +
                "பாதிக்கின்றன."
        }

    };


    journeyNodes.forEach((node) => {

        node.addEventListener("click", () => {

            journeyNodes.forEach((item) => {

                item.classList.remove(
                    "is-active"
                );

            });

            node.classList.add(
                "is-active"
            );


            const progress =
                Number(
                    node.dataset.progress || 0
                );

            const title =
                node.querySelector(
                    "strong"
                )?.textContent.trim() ||
                "Stellar Stage";


            if (progressFill) {

                progressFill.style.width =
                    `${progress}%`;

            }

            if (progressValue) {

                animateProgress(
                    progressValue,
                    progress
                );

            }

            if (stageTitle) {

                stageTitle.textContent =
                    title;

            }

            if (stageText) {

                stageText.textContent =
                    journeyData[title]?.text ||
                    "Stellar evolution stage.";

            }


            /* COMPLETE EFFECT */

            if (progress >= 100) {

                finalSection.classList.add(
                    "stellar-journey-complete"
                );

                setTimeout(() => {

                    finalSection.classList.remove(
                        "stellar-journey-complete"
                    );

                }, 1400);

            }

        });

    });


    function animateProgress(element, target) {

        const start =
            Number(element.textContent) || 0;

        const duration = 500;

        const startTime =
            performance.now();


        function update(currentTime) {

            const elapsed =
                currentTime - startTime;

            const ratio =
                Math.min(
                    elapsed / duration,
                    1
                );

            const eased =
                1 -
                Math.pow(
                    1 - ratio,
                    3
                );

            const value =
                Math.round(
                    start +
                    (target - start) *
                    eased
                );

            element.textContent =
                value;


            if (ratio < 1) {

                requestAnimationFrame(
                    update
                );

            }

        }

        requestAnimationFrame(
            update
        );

    }


    /* =====================================================
       GRAND FINALE CORE CLICK
       ===================================================== */

    const grandCore =
        finalSection.querySelector(
            ".stellarfinal-grand-core"
        );

    const grand =
        finalSection.querySelector(
            ".stellarfinal-grand"
        );


    if (grandCore && grand) {

        grandCore.addEventListener(
            "click",
            () => {

                grand.classList.toggle(
                    "grand-focused"
                );

                if (
                    grand.classList.contains(
                        "grand-focused"
                    )
                ) {

                    grandCore.style.boxShadow =
                        "0 0 100px rgba(105,240,255,.38)";

                    grandCore.style.transform =
                        "translate(-50%, -50%) scale(1.18)";

                } else {

                    grandCore.style.boxShadow =
                        "";

                    grandCore.style.transform =
                        "";

                }

            }
        );

    }


    /* =====================================================
       SMOOTH SCROLL
       ===================================================== */

    const actionLinks =
        finalSection.querySelectorAll(
            'a[href^="#"]'
        );

    actionLinks.forEach((link) => {

        link.addEventListener(
            "click",
            (event) => {

                const targetId =
                    link.getAttribute("href");

                const target =
                    document.querySelector(
                        targetId
                    );

                if (!target) return;

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }
        );

    });


    /* =====================================================
       SECTION ACTIVE STATE
       ===================================================== */

    const activeObserver =
        new IntersectionObserver(
            (entries) => {

                entries.forEach((entry) => {

                    if (
                        entry.isIntersecting
                    ) {

                        finalSection.classList.add(
                            "stellarfinal-active"
                        );

                    } else {

                        finalSection.classList.remove(
                            "stellarfinal-active"
                        );

                    }

                });

            },
            {
                threshold: 0.18
            }
        );

    activeObserver.observe(
        finalSection
    );


    /* =====================================================
       REDUCED MOTION
       ===================================================== */

    const reducedMotion =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        );

    if (reducedMotion.matches) {

        revealItems.forEach((item) => {

            item.classList.add(
                "final-visible"
            );

            item.style.transitionDelay =
                "0ms";

        });

    }


    /* =====================================================
       PAGE READY
       ===================================================== */

    requestAnimationFrame(() => {

        finalSection.classList.add(
            "stellarfinal-ready"
        );

    });


    console.log(
        "⭐ Stars Explorer Part 09 loaded — GRAND FINALE COMPLETE."
    );

});
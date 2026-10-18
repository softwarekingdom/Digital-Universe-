/* =========================================================
   EARTH DASHBOARD
   PART 1 — JAVASCRIPT
   Simple Navigation
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* -----------------------------------------------------
       MOBILE MENU
       ----------------------------------------------------- */

    const menuToggle =
        document.getElementById("menuToggle");

    const mainNav =
        document.querySelector(".main-nav");


    if (menuToggle && mainNav) {

        menuToggle.addEventListener("click", () => {

            const isOpen =
                mainNav.classList.toggle("is-open");

            menuToggle.setAttribute(
                "aria-expanded",
                String(isOpen)
            );


            const icon =
                menuToggle.querySelector("i");

            if (icon) {

                icon.className = isOpen
                    ? "fa-solid fa-xmark"
                    : "fa-solid fa-bars";

            }

        });


        /* Close menu after navigation */

        const navLinks =
            mainNav.querySelectorAll("a");

        navLinks.forEach(link => {

            link.addEventListener("click", () => {

                mainNav.classList.remove("is-open");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

                const icon =
                    menuToggle.querySelector("i");

                if (icon) {
                    icon.className =
                        "fa-solid fa-bars";
                }

            });

        });

    }


    /* -----------------------------------------------------
       ESCAPE KEY — CLOSE MOBILE MENU
       ----------------------------------------------------- */

    document.addEventListener("keydown", event => {

        if (event.key !== "Escape") {
            return;
        }

        if (!mainNav || !menuToggle) {
            return;
        }

        mainNav.classList.remove("is-open");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

        const icon =
            menuToggle.querySelector("i");

        if (icon) {
            icon.className =
                "fa-solid fa-bars";
        }

    });


    /* -----------------------------------------------------
       CURRENT YEAR READY FOR FUTURE FOOTER
       ----------------------------------------------------- */

    const currentYear =
        new Date().getFullYear();

    document.documentElement.dataset.year =
        currentYear;


    /* -----------------------------------------------------
       PAGE READY
       ----------------------------------------------------- */

    document.documentElement.classList.add(
        "earth-dashboard-ready"
    );

});
/* =========================================================
   EARTH DASHBOARD
   PART 2 — JAVASCRIPT
   Quick Action Navigation
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {


    /* -----------------------------------------------------
       QUICK ACTION CLICK FEEDBACK
       ----------------------------------------------------- */

    const quickCards =
        document.querySelectorAll(".quick-card");


    quickCards.forEach(card => {

        card.addEventListener("click", () => {

            card.classList.add("quick-card-clicked");

        });

    });


    /* -----------------------------------------------------
       KEYBOARD ACCESSIBILITY
       ----------------------------------------------------- */

    quickCards.forEach(card => {

        card.addEventListener("keydown", event => {

            if (
                event.key === "Enter" ||
                event.key === " "
            ) {

                event.preventDefault();

                card.click();

            }

        });

    });


    /* -----------------------------------------------------
       CLOSE MOBILE MENU WHEN RESIZING
       ----------------------------------------------------- */

    const mainNav =
        document.querySelector(".main-nav");

    const menuToggle =
        document.getElementById("menuToggle");


    window.addEventListener("resize", () => {

        if (window.innerWidth > 700) {

            if (mainNav) {
                mainNav.classList.remove("is-open");
            }

            if (menuToggle) {

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

                const icon =
                    menuToggle.querySelector("i");

                if (icon) {

                    icon.className =
                        "fa-solid fa-bars";

                }

            }

        }

    });


    /* -----------------------------------------------------
       PREVENT RAPID DOUBLE ACTIVATION
       ----------------------------------------------------- */

    quickCards.forEach(card => {

        card.addEventListener(
            "pointerdown",
            () => {

                card.style.transform =
                    "translateY(-1px)";

            },
            { passive: true }
        );

        card.addEventListener(
            "pointerup",
            () => {

                card.style.transform = "";

            },
            { passive: true }
        );

    });


    /* -----------------------------------------------------
       PAGE READY
       ----------------------------------------------------- */

    document.documentElement.classList.add(
        "earth-dashboard-part-two-ready"
    );

});
/* =========================================================
   EARTH DASHBOARD
   PART 3 — JAVASCRIPT
   Final Page Functions
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {


    /* -----------------------------------------------------
       CURRENT YEAR
       ----------------------------------------------------- */

    const yearElement =
        document.getElementById("currentYear");

    if (yearElement) {

        yearElement.textContent =
            new Date().getFullYear();

    }


    /* -----------------------------------------------------
       FINAL NAVIGATION ACCESSIBILITY
       ----------------------------------------------------- */

    const finalCards =
        document.querySelectorAll(".final-nav-card");


    finalCards.forEach(card => {

        card.addEventListener("keydown", event => {

            if (
                event.key === "Enter" ||
                event.key === " "
            ) {

                event.preventDefault();

                card.click();

            }

        });

    });


    /* -----------------------------------------------------
       EARTH DASHBOARD READY
       ----------------------------------------------------- */

    document.documentElement.classList.add(
        "earth-dashboard-complete"
    );


});
/* =========================================================
   EARTH DASHBOARD
   ANIMATION SYSTEM
   PART 1 — JAVASCRIPT
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {


    /* -----------------------------------------------------
       CREATE FLOATING EARTH ELEMENTS
       ----------------------------------------------------- */

    const floatingContainer =
        document.createElement("div");

    floatingContainer.className =
        "earth-floating-elements";


    const totalDots = 5;


    for (
        let i = 0;
        i < totalDots;
        i++
    ) {

        const dot =
            document.createElement("span");

        dot.className =
            "earth-floating-dot";


        if (i % 2 !== 0) {

            dot.classList.add("green");

        }


        floatingContainer.appendChild(dot);

    }


    document.body.appendChild(
        floatingContainer
    );


    /* -----------------------------------------------------
       SCROLL REVEAL
       ----------------------------------------------------- */

    const revealElements =
        document.querySelectorAll(
            ".quick-card, " +
            ".summary-item, " +
            ".final-nav-card, " +
            ".quick-navigation-box"
        );


    revealElements.forEach(
        element => {

            element.style.opacity = "0";

            element.style.transform =
                "translateY(20px)";

            element.style.transition =
                "opacity 0.7s ease, " +
                "transform 0.7s ease";

        }
    );


    const revealObserver =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

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

                });

            },
            {
                threshold: 0.12
            }
        );


    revealElements.forEach(
        element => {

            revealObserver.observe(element);

        }
    );


    /* -----------------------------------------------------
       CARD CLICK ANIMATION
       ----------------------------------------------------- */

    const cards =
        document.querySelectorAll(
            ".quick-card"
        );


    cards.forEach(card => {

        card.addEventListener(
            "click",
            () => {

                card.classList.remove(
                    "quick-card-clicked"
                );


                void card.offsetWidth;


                card.classList.add(
                    "quick-card-clicked"
                );

            }
        );

    });


    /* -----------------------------------------------------
       MOUSE / POINTER PARALLAX
       ----------------------------------------------------- */

    let pointerX = 0;
    let pointerY = 0;


    window.addEventListener(
        "pointermove",
        event => {

            pointerX =
                (event.clientX /
                    window.innerWidth -
                    0.5) * 2;


            pointerY =
                (event.clientY /
                    window.innerHeight -
                    0.5) * 2;

        },
        { passive: true }
    );


    let animationFrame;


    function animateAtmosphere() {

        const leftGlow =
            document.querySelector(
                "main::before"
            );


        const rightGlow =
            document.querySelector(
                "main::after"
            );


        /*
         * CSS pseudo-elements cannot be
         * directly selected with JavaScript.
         *
         * The pointer values are therefore
         * applied to the floating layer.
         */


        const floating =
            document.querySelector(
                ".earth-floating-elements"
            );


        if (floating) {

            floating.style.transform =
                `translate(
                    ${pointerX * 5}px,
                    ${pointerY * 5}px
                )`;

        }


        animationFrame =
            requestAnimationFrame(
                animateAtmosphere
            );

    }


    animateAtmosphere();


    /* -----------------------------------------------------
       REDUCED MOTION SUPPORT
       ----------------------------------------------------- */

    const reducedMotion =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        );


    if (reducedMotion.matches) {

        cancelAnimationFrame(
            animationFrame
        );


        floatingContainer.style.display =
            "none";


        revealElements.forEach(
            element => {

                element.style.opacity = "1";

                element.style.transform =
                    "none";

                element.style.transition =
                    "none";

            }
        );

    }


    /* -----------------------------------------------------
       CLEANUP ON PAGE HIDE
       ----------------------------------------------------- */

    document.addEventListener(
        "visibilitychange",
        () => {

            if (
                document.hidden &&
                animationFrame
            ) {

                cancelAnimationFrame(
                    animationFrame
                );

            }

        }
    );


    /* -----------------------------------------------------
       READY STATE
       ----------------------------------------------------- */

    document.documentElement.classList.add(
        "earth-animation-part-one-ready"
    );


});
/* =========================================================
   EARTH DASHBOARD
   ANIMATION SYSTEM
   PART 2 — JAVASCRIPT
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {


    /* -----------------------------------------------------
       STAGGER SUMMARY ITEMS
       ----------------------------------------------------- */

    const summaryItems =
        document.querySelectorAll(
            ".summary-item"
        );


    summaryItems.forEach(
        (item, index) => {

            item.style.transitionDelay =
                `${index * 90}ms`;

        }
    );


    /* -----------------------------------------------------
       STAGGER FINAL NAVIGATION
       ----------------------------------------------------- */

    const finalCards =
        document.querySelectorAll(
            ".final-nav-card"
        );


    finalCards.forEach(
        (card, index) => {

            card.style.transitionDelay =
                `${index * 120}ms`;

        }
    );


    /* -----------------------------------------------------
       BRAND INTERACTION
       ----------------------------------------------------- */

    const brand =
        document.querySelector(
            ".brand, .logo, .site-brand"
        );


    if (brand) {

        brand.addEventListener(
            "pointerenter",
            () => {

                brand.classList.add(
                    "earth-brand-active"
                );

            }
        );


        brand.addEventListener(
            "pointerleave",
            () => {

                brand.classList.remove(
                    "earth-brand-active"
                );

            }
        );

    }


    /* -----------------------------------------------------
       ACTIVE SECTION DETECTION
       ----------------------------------------------------- */

    const sections =
        document.querySelectorAll(
            "main section"
        );


    const sectionObserver =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "earth-section-visible"
                        );

                    }

                });

            },
            {
                threshold: 0.08
            }
        );


    sections.forEach(section => {

        sectionObserver.observe(
            section
        );

    });


    /* -----------------------------------------------------
       POINTER GLOW FOR SUMMARY ITEMS
       ----------------------------------------------------- */

    summaryItems.forEach(item => {

        item.addEventListener(
            "pointermove",
            event => {

                const rect =
                    item.getBoundingClientRect();


                const x =
                    event.clientX - rect.left;


                const y =
                    event.clientY - rect.top;


                item.style.setProperty(
                    "--pointer-x",
                    `${x}px`
                );


                item.style.setProperty(
                    "--pointer-y",
                    `${y}px`
                );

            },
            { passive: true }
        );

    });


    /* -----------------------------------------------------
       POINTER GLOW FOR FINAL CARDS
       ----------------------------------------------------- */

    finalCards.forEach(card => {

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
                    "--pointer-x",
                    `${x}px`
                );


                card.style.setProperty(
                    "--pointer-y",
                    `${y}px`
                );

            },
            { passive: true }
        );

    });


    /* -----------------------------------------------------
       MOBILE PERFORMANCE
       ----------------------------------------------------- */

    const isTouchDevice =
        window.matchMedia(
            "(hover: none)"
        ).matches;


    if (isTouchDevice) {

        document.documentElement.classList.add(
            "earth-touch-device"
        );

    }


    /* -----------------------------------------------------
       PART TWO READY
       ----------------------------------------------------- */

    document.documentElement.classList.add(
        "earth-animation-part-two-ready"
    );

});
/* =========================================================
   EARTH DASHBOARD
   ANIMATION SYSTEM
   PART 3 — JAVASCRIPT
   FINAL ANIMATION CONTROLLER
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {


    /* =====================================================
       SCROLL PROGRESS BAR
       ===================================================== */

    const progress =
        document.createElement("div");

    progress.className =
        "earth-scroll-progress";

    document.body.appendChild(progress);


    function updateScrollProgress() {

        const scrollTop =
            window.scrollY;

        const documentHeight =
            document.documentElement.scrollHeight -
            window.innerHeight;


        if (documentHeight <= 0) {

            progress.style.width = "0%";

            return;

        }


        const percentage =
            (scrollTop / documentHeight) * 100;


        progress.style.width =
            `${Math.min(100, percentage)}%`;

    }


    window.addEventListener(
        "scroll",
        updateScrollProgress,
        { passive: true }
    );


    updateScrollProgress();


    /* =====================================================
       POINTER GLOW
       ===================================================== */

    const pointerGlow =
        document.createElement("div");

    pointerGlow.className =
        "earth-pointer-glow";

    document.body.appendChild(
        pointerGlow
    );


    const supportsHover =
        window.matchMedia(
            "(hover: hover)"
        ).matches;


    if (supportsHover) {

        window.addEventListener(
            "pointermove",
            event => {

                pointerGlow.style.left =
                    `${event.clientX}px`;

                pointerGlow.style.top =
                    `${event.clientY}px`;

                pointerGlow.style.opacity =
                    "0.35";

            },
            { passive: true }
        );


        document.addEventListener(
            "pointerleave",
            () => {

                pointerGlow.style.opacity =
                    "0";

            }
        );

    }


    /* =====================================================
       INTERACTIVE BACK BUTTON
       ===================================================== */

    const backButton =
        document.querySelector(
            ".back-earth-button"
        );


    if (backButton) {

        backButton.addEventListener(
            "pointerdown",
            () => {

                backButton.classList.add(
                    "earth-button-pressed"
                );

            }
        );


        backButton.addEventListener(
            "pointerup",
            () => {

                setTimeout(() => {

                    backButton.classList.remove(
                        "earth-button-pressed"
                    );

                }, 180);

            }
        );

    }


    /* =====================================================
       FINAL NAVIGATION CARD EFFECT
       ===================================================== */

    const finalCards =
        document.querySelectorAll(
            ".final-nav-card"
        );


    finalCards.forEach(card => {

        card.addEventListener(
            "pointerdown",
            () => {

                card.style.transform =
                    "scale(0.985)";

            },
            { passive: true }
        );


        card.addEventListener(
            "pointerup",
            () => {

                card.style.transform = "";

            },
            { passive: true }
        );

    });


    /* =====================================================
       SUMMARY ITEM HOVER TRACKING
       ===================================================== */

    const summaryItems =
        document.querySelectorAll(
            ".summary-item"
        );


    summaryItems.forEach(item => {

        item.addEventListener(
            "pointerenter",
            () => {

                item.classList.add(
                    "summary-active"
                );

            }
        );


        item.addEventListener(
            "pointerleave",
            () => {

                item.classList.remove(
                    "summary-active"
                );

            }
        );

    });


    /* =====================================================
       VISIBILITY PERFORMANCE
       ===================================================== */

    let pageVisible = true;


    document.addEventListener(
        "visibilitychange",
        () => {

            pageVisible =
                !document.hidden;


            document.documentElement
                .classList.toggle(
                    "earth-page-hidden",
                    !pageVisible
                );

        }
    );


    /* =====================================================
       CLEANUP ON PAGE EXIT
       ===================================================== */

    window.addEventListener(
        "pagehide",
        () => {

            progress.style.width =
                "0%";

            pointerGlow.style.opacity =
                "0";

        }
    );


    /* =====================================================
       FINAL READY STATE
       ===================================================== */

    document.documentElement.classList.add(
        "earth-animation-complete"
    );


    console.log(
        "🌍 SciWonderVerse Earth Dashboard animations ready."
    );

});
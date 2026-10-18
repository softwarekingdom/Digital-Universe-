/* ==========================================
   DIGITAL UNIVERSE
   MAIN DASHBOARD JS
   ========================================== */


/* ==========================================
   MOBILE NAVIGATION
   ========================================== */

function initMobileNavigation() {

    const menuButton =
        document.getElementById(
            "mobile-menu-button"
        );

    const navigation =
        document.getElementById(
            "dashboard-navigation"
        );

    const header =
        document.querySelector(
            ".dashboard-header"
        );


    if (
        !menuButton ||
        !navigation ||
        !header
    ) {
        return;
    }


    menuButton.addEventListener(
        "click",
        () => {

            const isOpen =
                navigation.classList.toggle(
                    "navigation-open"
                );


            header.classList.toggle(
                "menu-open",
                isOpen
            );


            menuButton.setAttribute(
                "aria-expanded",
                String(isOpen)
            );

        }
    );


    /* CLOSE MENU AFTER LINK CLICK */

    const navigationLinks =
        navigation.querySelectorAll(
            "a"
        );


    navigationLinks.forEach(link => {

        link.addEventListener(
            "click",
            () => {

                navigation.classList.remove(
                    "navigation-open"
                );

                header.classList.remove(
                    "menu-open"
                );

                menuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }
        );

    });

}


/* ==========================================
   HEADER SCROLL EFFECT
   ========================================== */

function initHeaderScroll() {

    const header =
        document.querySelector(
            ".dashboard-header"
        );


    if (!header) return;


    const updateHeader =
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

        };


    window.addEventListener(
        "scroll",
        updateHeader,
        { passive: true }
    );


    updateHeader();

}


/* ==========================================
   SMOOTH INTERNAL NAVIGATION
   ========================================== */

function initSmoothNavigation() {

    const links =
        document.querySelectorAll(
            'a[href^="#"]'
        );


    links.forEach(link => {

        link.addEventListener(
            "click",
            event => {

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


                if (!target) return;


                event.preventDefault();


                const header =
                    document.querySelector(
                        ".dashboard-header"
                    );


                const headerHeight =
                    header
                        ? header.offsetHeight
                        : 0;


                const targetPosition =
                    target.getBoundingClientRect().top
                    +
                    window.scrollY
                    -
                    headerHeight
                    -
                    15;


                window.scrollTo({

                    top:
                        Math.max(
                            0,
                            targetPosition
                        ),

                    behavior: "smooth"

                });

            }
        );

    });

}


/* ==========================================
   ACTIVE NAVIGATION
   ========================================== */

function initActiveNavigation() {

    const sections =
        document.querySelectorAll(
            "main section[id]"
        );


    const navLinks =
        document.querySelectorAll(
            ".dashboard-navigation a[href^='#']"
        );


    if (
        !sections.length ||
        !navLinks.length
    ) {
        return;
    }


    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (!entry.isIntersecting) {
                        return;
                    }


                    const currentId =
                        entry.target.id;


                    navLinks.forEach(link => {

                        link.classList.remove(
                            "active"
                        );


                        if (
                            link.getAttribute(
                                "href"
                            ) ===
                            `#${currentId}`
                        ) {

                            link.classList.add(
                                "active"
                            );

                        }

                    });

                });

            },
            {
                threshold: 0.25,

                rootMargin:
                    "-20% 0px -60% 0px"
            }
        );


    sections.forEach(section => {

        observer.observe(section);

    });

}


/* ==========================================
   QUICK ACTION CARD REVEAL
   ========================================== */

function initCardReveal() {

    const cards =
        document.querySelectorAll(
            ".quick-action-card"
        );


    if (!cards.length) return;


    cards.forEach(card => {

        card.style.opacity = "0";

        card.style.transform =
            "translateY(25px)";


        card.style.transition =
            "opacity 0.7s ease, transform 0.7s ease";

    });


    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(
                    (entry, index) => {

                        if (
                            !entry.isIntersecting
                        ) {
                            return;
                        }


                        const card =
                            entry.target;


                        const delay =
                            Array
                                .from(cards)
                                .indexOf(card)
                            * 80;


                        setTimeout(
                            () => {

                                card.style.opacity =
                                    "1";

                                card.style.transform =
                                    "translateY(0)";

                            },
                            delay
                        );


                        observer.unobserve(
                            card
                        );

                    }
                );

            },
            {
                threshold: 0.12
            }
        );


    cards.forEach(card => {

        observer.observe(card);

    });

}


/* ==========================================
   HERO PARALLAX
   ========================================== */

function initHeroParallax() {

    const visual =
        document.querySelector(
            ".hero-visual"
        );


    if (!visual) return;


    const motionQuery =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        );


    if (motionQuery.matches) {
        return;
    }


    let ticking = false;


    window.addEventListener(
        "scroll",
        () => {

            if (ticking) return;


            window.requestAnimationFrame(
                () => {

                    const scroll =
                        window.scrollY;


                    if (
                        scroll <
                        window.innerHeight
                    ) {

                        visual.style.transform =
                            `translateY(${scroll * 0.08}px)`;

                    }


                    ticking = false;

                }
            );


            ticking = true;

        },
        {
            passive: true
        }
    );

}


/* ==========================================
   MAP NODE INTERACTION
   ========================================== */

function initMapNodes() {

    const nodes =
        document.querySelectorAll(
            ".map-node"
        );


    nodes.forEach(node => {

        node.addEventListener(
            "mouseenter",
            () => {

                node.classList.add(
                    "map-node-active"
                );

            }
        );


        node.addEventListener(
            "mouseleave",
            () => {

                node.classList.remove(
                    "map-node-active"
                );

            }
        );

    });

}


/* ==========================================
   FOOTER YEAR
   ========================================== */

function initFooterYear() {

    const year =
        document.getElementById(
            "footer-year"
        );


    if (!year) return;


    year.textContent =
        new Date().getFullYear();

}


/* ==========================================
   CARD CLICK FEEDBACK
   ========================================== */

function initQuickActionFeedback() {

    const cards =
        document.querySelectorAll(
            ".quick-action-card"
        );


    cards.forEach(card => {

        card.addEventListener(
            "click",
            () => {

                card.classList.add(
                    "card-launching"
                );


                setTimeout(
                    () => {

                        card.classList.remove(
                            "card-launching"
                        );

                    },
                    500
                );

            }
        );

    });

}


/* ==========================================
   BACK TO TOP
   ========================================== */

function initBackToTop() {

    const backButton =
        document.querySelector(
            '.footer-bottom a[href="#dashboard-home"]'
        );


    if (!backButton) return;


    backButton.addEventListener(
        "click",
        event => {

            event.preventDefault();


            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        }
    );

}


/* ==========================================
   DASHBOARD INITIALIZATION
   ========================================== */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        initMobileNavigation();

        initHeaderScroll();

        initSmoothNavigation();

        initActiveNavigation();

        initCardReveal();

        initHeroParallax();

        initMapNodes();

        initFooterYear();

        initQuickActionFeedback();

        initBackToTop();

    }
);
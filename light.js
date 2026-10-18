/* =========================================================
   LIGHT EXPLORER JAVASCRIPT
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const lightPage =
        document.querySelector(".light-main");


    /* =====================================================
       IMAGE LOAD EFFECT
       ===================================================== */

    const images =
        document.querySelectorAll(
            ".light-hero-image, .light-travel-image, .light-cosmos-image"
        );


    images.forEach((image) => {

        image.addEventListener("load", () => {

            image.classList.add(
                "light-image-loaded"
            );

        });

    });


    /* =====================================================
       SCROLL REVEAL
       ===================================================== */

    const revealElements =
        document.querySelectorAll(
            ".light-concept-card, " +
            ".light-travel-card, " +
            ".light-science-note, " +
            ".light-travel-note, " +
            ".light-cosmos-main-card, " +
            ".light-cosmos-fact"
        );


    revealElements.forEach((element) => {

        element.style.opacity = "0";

        element.style.transform =
            "translateY(25px)";

        element.style.transition =
            "opacity .7s ease, transform .7s ease";

    });


    const revealObserver =
        new IntersectionObserver(
            (entries, observer) => {

                entries.forEach((entry) => {

                    if (!entry.isIntersecting) {
                        return;
                    }

                    entry.target.style.opacity = "1";

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

        revealObserver.observe(element);

    });


    /* =====================================================
       STAGGER CARDS
       ===================================================== */

    document
        .querySelectorAll(".light-concept-card")
        .forEach((card, index) => {

            card.style.transitionDelay =
                `${index * 100}ms`;

        });


    document
        .querySelectorAll(".light-travel-card")
        .forEach((card, index) => {

            card.style.transitionDelay =
                `${index * 100}ms`;

        });


    document
        .querySelectorAll(".light-cosmos-fact")
        .forEach((card, index) => {

            card.style.transitionDelay =
                `${index * 100}ms`;

        });


    /* =====================================================
       HERO IMAGE PARALLAX
       ===================================================== */

    const heroImage =
        document.querySelector(
            ".light-hero-image"
        );


    if (heroImage) {

        window.addEventListener(
            "mousemove",
            (event) => {

                const x =
                    (event.clientX /
                        window.innerWidth - 0.5) * 5;

                const y =
                    (event.clientY /
                        window.innerHeight - 0.5) * 5;


                heroImage.style.transform =
                    `scale(1.025) translate(${x}px, ${y}px)`;

            }
        );

    }


    /* =====================================================
       COSMIC IMAGE PARALLAX
       ===================================================== */

    const cosmicImage =
        document.querySelector(
            ".light-cosmos-image"
        );


    if (cosmicImage) {

        window.addEventListener(
            "scroll",
            () => {

                const rect =
                    cosmicImage.getBoundingClientRect();

                const center =
                    window.innerHeight / 2;

                const distance =
                    (rect.top - center) * 0.015;


                cosmicImage.style.transform =
                    `scale(1.025) translateY(${distance}px)`;

            },
            {
                passive: true
            }
        );

    }


    /* =====================================================
       SMOOTH ANCHOR NAVIGATION
       ===================================================== */

    document
        .querySelectorAll(
            'a[href^="#"]'
        )
        .forEach((link) => {

            link.addEventListener(
                "click",
                (event) => {

                    const targetId =
                        link.getAttribute("href");

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

        });


    /* =====================================================
       LIGHT RAY INTERACTION
       ===================================================== */

    const rays =
        document.querySelectorAll(
            ".light-ray"
        );


    window.addEventListener(
        "mousemove",
        (event) => {

            const movement =
                (event.clientX /
                    window.innerWidth - 0.5) * 18;


            rays.forEach((ray, index) => {

                const direction =
                    index % 2 === 0 ? 1 : -1;

                ray.style.translate =
                    `${movement * direction}px 0`;

            });

        }
    );


    /* =====================================================
       COSMIC SIGNAL HOVER
       ===================================================== */

    const signal =
        document.querySelector(
            ".light-cosmos-signal"
        );


    if (signal) {

        signal.addEventListener(
            "mouseenter",
            () => {

                signal.style.transform =
                    "translateY(-4px)";

                signal.style.transition =
                    "transform .25s ease";

            }
        );


        signal.addEventListener(
            "mouseleave",
            () => {

                signal.style.transform =
                    "translateY(0)";

            }
        );

    }


    /* =====================================================
       PAGE READY
       ===================================================== */

    if (lightPage) {

        lightPage.classList.add(
            "light-page-ready"
        );

    }


    console.log(
        "✨ Light Explorer — successfully loaded."
    );

});
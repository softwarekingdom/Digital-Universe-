/* =========================================================
   DIGITAL UNIVERSE — OUR EARTH
   JAVASCRIPT
========================================================= */


/* =========================================================
   MOBILE NAVIGATION
========================================================= */

function initMobileNavigation() {

    const menuButton =
        document.getElementById(
            "mobile-menu-button"
        );

    const navigation =
        document.getElementById(
            "earth-navigation"
        );

    if (!menuButton || !navigation) {
        return;
    }


    menuButton.addEventListener(
        "click",
        () => {

            const isOpen =
                navigation.classList.toggle(
                    "active"
                );

            menuButton.classList.toggle(
                "active",
                isOpen
            );

            menuButton.setAttribute(
                "aria-expanded",
                String(isOpen)
            );

            document.body.classList.toggle(
                "menu-open",
                isOpen
            );

        }
    );


    navigation
        .querySelectorAll("a")
        .forEach(link => {

            link.addEventListener(
                "click",
                () => {

                    navigation.classList.remove(
                        "active"
                    );

                    menuButton.classList.remove(
                        "active"
                    );

                    menuButton.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                    document.body.classList.remove(
                        "menu-open"
                    );

                }
            );

        });

}


/* =========================================================
   HEADER SCROLL
========================================================= */

function initHeaderScroll() {

    const header =
        document.getElementById(
            "earth-header"
        );

    if (!header) {
        return;
    }


    function updateHeader() {

        if (window.scrollY > 30) {

            header.classList.add(
                "header-scrolled"
            );

        } else {

            header.classList.remove(
                "header-scrolled"
            );

        }

    }


    updateHeader();

    window.addEventListener(
        "scroll",
        updateHeader,
        {
            passive: true
        }
    );

}


/* =========================================================
   SMOOTH INTERNAL NAVIGATION
========================================================= */

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
                    link.getAttribute(
                        "href"
                    );

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


                const header =
                    document.getElementById(
                        "earth-header"
                    );


                const headerHeight =
                    header
                        ? header.offsetHeight
                        : 0;


                const targetPosition =
                    target.getBoundingClientRect()
                        .top
                    +
                    window.scrollY
                    -
                    headerHeight
                    -
                    12;


                window.scrollTo({

                    top:
                        targetPosition,

                    behavior:
                        "smooth"

                });

            }
        );

    });

}


/* =========================================================
   EARTH LAYER EXPLORER
========================================================= */

function initEarthLayers() {

    const buttons =
        document.querySelectorAll(
            ".layer-button"
        );

    const description =
        document.getElementById(
            "layer-description"
        );

    if (
        !buttons.length ||
        !description
    ) {
        return;
    }


    const layerData = {

        crust: {

            title:
                "பூமியின் மேற்பரப்பு",

            text:
                "நாம் வாழும் மிக வெளிப்புற திடமான அடுக்கு. கண்டங்கள், கடலடித்தளம் மற்றும் பூமியின் மேற்பரப்புடன் தொடர்புடைய பாறைகள் இந்த பகுதியில் உள்ளன."

        },


        mantle: {

            title:
                "மண்டலம்",

            text:
                "Crust-க்கு கீழே இருக்கும் மிகப்பெரிய அடுக்கு. இங்கு வெப்பமும் அழுத்தமும் அதிகமாக இருக்கும்; மெதுவான பொருள் இயக்கங்கள் புவித்தட்டு இயக்கங்களுடன் தொடர்புடையவை."

        },


        "outer-core": {

            title:
                "வெளிப்புற மையம்",

            text:
                "பூமியின் மையப்பகுதியில் இருக்கும் திரவ உலோக அடுக்கு. இதில் பெரும்பாலும் இரும்பு மற்றும் நிக்கல் போன்ற தனிமங்கள் உள்ளன. இதன் இயக்கங்கள் பூமியின் காந்தப்புலத்துடன் தொடர்புடையவை."

        },


        "inner-core": {

            title:
                "உள்மையம்",

            text:
                "பூமியின் மையத்தில் இருக்கும் மிகவும் ஆழமான பகுதி. மிகப்பெரிய அழுத்தம் காரணமாக இப்பகுதியில் உள்ள இரும்பு-நிக்கல் பொருள் திட நிலையில் இருப்பதாக விஞ்ஞானிகள் கருதுகின்றனர்."

        }

    };


    buttons.forEach(button => {

        button.addEventListener(
            "click",
            () => {

                buttons.forEach(
                    item => {

                        item.classList.remove(
                            "active"
                        );

                    }
                );


                button.classList.add(
                    "active"
                );


                const layer =
                    button.dataset.layer;


                const data =
                    layerData[layer];


                if (!data) {
                    return;
                }


                description.innerHTML = `

                    <span class="description-label">
                        CURRENT LAYER
                    </span>

                    <h3>
                        ${data.title}
                    </h3>

                    <p>
                        ${data.text}
                    </p>

                `;


                description.animate(

                    [
                        {
                            opacity: 0.45,
                            transform:
                                "translateY(8px)"
                        },

                        {
                            opacity: 1,
                            transform:
                                "translateY(0)"
                        }
                    ],

                    {
                        duration: 350,
                        easing:
                            "ease-out"
                    }

                );

            }
        );

    });

}


/* =========================================================
   CARD REVEAL
========================================================= */

function initRevealAnimations() {

    const elements =
        document.querySelectorAll(
            ".info-card, " +
            ".fact-card, " +
            ".continent-card, " +
            ".atmosphere-card, " +
            ".life-card, " +
            ".dynamic-card, " +
            ".relationship-card, " +
            ".future-card, " +
            ".explore-card"
        );


    if (!elements.length) {
        return;
    }


    elements.forEach(
        element => {

            element.classList.add(
                "reveal"
            );

        }
    );


    if (
        !("IntersectionObserver" in window)
    ) {

        elements.forEach(
            element => {

                element.classList.add(
                    "visible"
                );

            }
        );

        return;

    }


    const observer =
        new IntersectionObserver(

            entries => {

                entries.forEach(
                    entry => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "visible"
                            );

                            observer.unobserve(
                                entry.target
                            );

                        }

                    }
                );

            },

            {
                threshold: 0.12
            }

        );


    elements.forEach(
        element => {

            observer.observe(
                element
            );

        }
    );

}


/* =========================================================
   HERO PARALLAX
========================================================= */

function initHeroParallax() {

    const heroEarth =
        document.querySelector(
            ".hero-earth-visual"
        );


    if (!heroEarth) {
        return;
    }


    let ticking = false;


    function updateParallax() {

        const scroll =
            window.scrollY;


        if (
            scroll < window.innerHeight
        ) {

            const movement =
                scroll * 0.08;


            heroEarth.style.transform =
                `translateY(${movement}px)`;

        }


        ticking = false;

    }


    window.addEventListener(
        "scroll",
        () => {

            if (!ticking) {

                window.requestAnimationFrame(
                    updateParallax
                );

                ticking = true;

            }

        },
        {
            passive: true
        }
    );

}


/* =========================================================
   CONTINENT CARD INTERACTION
========================================================= */

function initContinentInteraction() {

    const cards =
        document.querySelectorAll(
            ".continent-card"
        );


    cards.forEach(card => {

        card.addEventListener(
            "click",
            () => {

                cards.forEach(
                    item => {

                        item.classList.remove(
                            "continent-selected"
                        );

                    }
                );


                card.classList.add(
                    "continent-selected"
                );


                setTimeout(
                    () => {

                        card.classList.remove(
                            "continent-selected"
                        );

                    },
                    900
                );

            }
        );

    });

}


/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

function initActiveNavigation() {

    const sections =
        document.querySelectorAll(
            "main section[id]"
        );


    const navLinks =
        document.querySelectorAll(
            '.earth-navigation a[href^="#"]'
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

                entries.forEach(
                    entry => {

                        if (
                            !entry.isIntersecting
                        ) {
                            return;
                        }


                        const id =
                            entry.target.id;


                        navLinks.forEach(
                            link => {

                                link.classList.toggle(

                                    "active",

                                    link.getAttribute(
                                        "href"
                                    ) ===
                                    `#${id}`

                                );

                            }
                        );

                    }
                );

            },

            {
                rootMargin:
                    "-30% 0px -55% 0px"
            }

        );


    sections.forEach(
        section => {

            observer.observe(
                section
            );

        }
    );

}


/* =========================================================
   SCROLL TOP
========================================================= */

function initScrollTop() {

    const button =
        document.createElement(
            "button"
        );


    button.type =
        "button";


    button.className =
        "earth-scroll-top";


    button.innerHTML =
        "↑";


    button.setAttribute(
        "aria-label",
        "மேலே செல்ல"
    );


    document.body.appendChild(
        button
    );


    function updateButton() {

        button.classList.toggle(

            "visible",

            window.scrollY > 600

        );

    }


    window.addEventListener(
        "scroll",
        updateButton,
        {
            passive: true
        }
    );


    button.addEventListener(
        "click",
        () => {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        }
    );

}


/* =========================================================
   DYNAMIC SCROLL TOP STYLE
========================================================= */

function initScrollTopStyle() {

    const style =
        document.createElement(
            "style"
        );


    style.textContent = `

        .earth-scroll-top {

            position: fixed;

            right: 16px;

            bottom: 18px;

            width: 46px;

            height: 46px;

            border: 1px solid
                rgba(148,163,184,0.18);

            border-radius: 14px;

            background:
                rgba(2,6,23,0.88);

            color:
                #f8fafc;

            display: grid;

            place-items: center;

            font-size: 1.2rem;

            cursor: pointer;

            z-index: 900;

            opacity: 0;

            visibility: hidden;

            transform:
                translateY(15px);

            transition:
                opacity .3s ease,
                visibility .3s ease,
                transform .3s ease;

            backdrop-filter:
                blur(12px);

        }


        .earth-scroll-top.visible {

            opacity: 1;

            visibility: visible;

            transform:
                translateY(0);

        }


        .earth-scroll-top:hover {

            border-color:
                rgba(56,189,248,0.45);

            color:
                #22d3ee;

        }


        .continent-selected {

            transform:
                translateY(-8px)
                scale(1.02) !important;

            border-color:
                rgba(56,189,248,0.65) !important;

            box-shadow:
                0 0 35px
                rgba(56,189,248,0.14);

        }


        .earth-navigation a.active {

            color:
                #22d3ee;

            background:
                rgba(34,211,238,0.07);

        }

    `;


    document.head.appendChild(
        style
    );

}


/* =========================================================
   PAGE LOADED EFFECT
========================================================= */

function initPageLoaded() {

    document.body.classList.add(
        "page-loaded"
    );

}


/* =========================================================
   INITIALIZE
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        initMobileNavigation();

        initHeaderScroll();

        initSmoothNavigation();

        initEarthLayers();

        initRevealAnimations();

        initHeroParallax();

        initContinentInteraction();

        initActiveNavigation();

        initScrollTop();

        initScrollTopStyle();

        initPageLoaded();

    }
);
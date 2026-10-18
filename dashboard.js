/* =========================================================
   DIGITAL UNIVERSE — DASHBOARD JS
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {


        /* =================================================
           ELEMENTS
           ================================================= */

        const searchInput =
            document.getElementById(
                "dashboardSearch"
            );


        const cards =
            Array.from(
                document.querySelectorAll(
                    ".quick-action-card"
                )
            );


        const noResult =
            document.getElementById(
                "dashboardNoResult"
            );


        const quickCount =
            document.getElementById(
                "quickCount"
            );


        const timeElement =
            document.getElementById(
                "dashboardTime"
            );



        /* =================================================
           LIVE CLOCK
           ================================================= */

        function updateClock() {

            if (!timeElement) {
                return;
            }


            const now =
                new Date();


            const hours =
                String(
                    now.getHours()
                ).padStart(
                    2,
                    "0"
                );


            const minutes =
                String(
                    now.getMinutes()
                ).padStart(
                    2,
                    "0"
                );


            timeElement.textContent =
                `${hours}:${minutes}`;

        }


        updateClock();


        setInterval(
            updateClock,
            1000
        );



        /* =================================================
           SEARCH
           ================================================= */

        function searchActions() {

            if (!searchInput) {
                return;
            }


            const query =
                searchInput.value
                    .trim()
                    .toLowerCase();


            let visibleCount = 0;


            cards.forEach(
                card => {

                    const searchableText =
                        (
                            card.dataset.search ||
                            card.textContent
                        ).toLowerCase();


                    const matches =
                        query === "" ||
                        searchableText.includes(
                            query
                        );


                    if (matches) {

                        card.style.display =
                            "";

                        visibleCount++;

                    } else {

                        card.style.display =
                            "none";

                    }

                }
            );


            if (quickCount) {

                quickCount.textContent =
                    `${visibleCount} தலைப்புகள்`;

            }


            if (noResult) {

                if (
                    query !== "" &&
                    visibleCount === 0
                ) {

                    noResult.classList.add(
                        "visible"
                    );

                } else {

                    noResult.classList.remove(
                        "visible"
                    );

                }

            }

        }


        if (searchInput) {

            searchInput.addEventListener(
                "input",
                searchActions
            );

        }



        /* =================================================
           "/" SEARCH SHORTCUT
           ================================================= */

        document.addEventListener(
            "keydown",
            event => {

                const active =
                    document.activeElement;


                const isTyping =
                    active &&
                    (
                        active.tagName ===
                            "INPUT" ||
                        active.tagName ===
                            "TEXTAREA"
                    );


                if (
                    event.key === "/" &&
                    !isTyping
                ) {

                    event.preventDefault();


                    if (searchInput) {

                        searchInput.focus();

                    }

                }


                if (
                    event.key === "Escape" &&
                    active === searchInput
                ) {

                    searchInput.value = "";

                    searchActions();

                    searchInput.blur();

                }

            }
        );



        /* =================================================
           CARD REVEAL
           ================================================= */

        const revealObserver =
            new IntersectionObserver(
                entries => {

                    entries.forEach(
                        entry => {

                            if (
                                !entry.isIntersecting
                            ) {
                                return;
                            }


                            entry.target.classList.add(
                                "dashboard-card-visible"
                            );


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


        cards.forEach(
            card => {

                revealObserver.observe(
                    card
                );

            }
        );



        /* =================================================
           CARD KEYBOARD ACCESS
           ================================================= */

        cards.forEach(
            card => {

                card.addEventListener(
                    "keydown",
                    event => {

                        if (
                            event.key ===
                            "Enter"
                        ) {

                            card.click();

                        }

                    }
                );

            }
        );



        /* =================================================
           MOUSE PARALLAX
           ================================================= */

        const background =
            document.querySelector(
                ".dashboard-background"
            );


        if (
            background &&
            window.matchMedia(
                "(pointer: fine)"
            ).matches
        ) {

            document.addEventListener(
                "pointermove",
                event => {

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


                    background.style.transform =
                        `
                        translate(
                            ${x * -8}px,
                            ${y * -8}px
                        )
                        `;

                }
            );

        }



        /* =================================================
           EXTERNAL NAVIGATION STATUS
           ================================================= */

        cards.forEach(
            card => {

                card.addEventListener(
                    "click",
                    () => {

                        card.setAttribute(
                            "aria-busy",
                            "true"
                        );

                    }
                );

            }
        );



        /* =================================================
           DEBUG
           ================================================= */

        console.log(
            "🌌 Digital Universe Dashboard initialized."
        );

        console.log(
            `🚀 ${cards.length} Quick Actions loaded.`
        );

    }
);
/* =========================================
   OPEN GARDEN
========================================= */

const openGarden =
    document.getElementById("openGarden");

const opening =
    document.getElementById("opening");

const garden =
    document.getElementById("garden");

const field =
    document.getElementById("field");


openGarden.addEventListener("click", () => {

    opening.classList.add("hide");

    garden.classList.add("show");

});


/* =========================================
   TULIP COLORS
========================================= */

const tulipColors = [

    "#e94b70",
    "#ff6685",
    "#f47b91",
    "#d94368",
    "#ff9aaa",
    "#c83e61"

];


/* =========================================
   CREATE TULIP
========================================= */

function createTulip(
    x,
    bottom,
    scale,
    duration,
    delay,
    depth
) {

    const tulip =
        document.createElement("div");

    tulip.className =
        "tulip";

    tulip.style.left =
        x + "%";

    tulip.style.bottom =
        bottom + "%";

    tulip.style.setProperty(
        "--duration",
        duration + "s"
    );

    tulip.style.setProperty(
        "--delay",
        delay + "s"
    );

    tulip.style.setProperty(
        "--depth",
        depth
    );

    tulip.style.transform =
        `scale(${scale})`;


    const color =
        tulipColors[
            Math.floor(
                Math.random() *
                tulipColors.length
            )
        ];


    tulip.innerHTML = `

        <div class="flower">

            <div
                class="petal"
                style="background:${color}"
            ></div>

            <div
                class="petal"
                style="background:${color}"
            ></div>

            <div
                class="petal"
                style="background:${color}"
            ></div>

        </div>

        <div class="stem"></div>

        <div class="leaf left"></div>

        <div class="leaf right"></div>

    `;


    field.appendChild(tulip);
}


/* =========================================
   GENERATE MANY TULIPS
========================================= */

function generateTulips() {

    /* BACK */

    for (
        let i = 0;
        i < 45;
        i++
    ) {

        createTulip(

            Math.random() * 110 - 5,

            Math.random() * 50 + 15,

            Math.random() * .45 + .45,

            Math.random() * 2 + 3,

            Math.random() * 2,

            1

        );

    }


    /* MIDDLE */

    for (
        let i = 0;
        i < 50;
        i++
    ) {

        createTulip(

            Math.random() * 110 - 5,

            Math.random() * 35 + 5,

            Math.random() * .55 + .55,

            Math.random() * 2 + 3,

            Math.random() * 2,

            3

        );

    }


    /* FRONT */

    for (
        let i = 0;
        i < 45;
        i++
    ) {

        createTulip(

            Math.random() * 110 - 5,

            Math.random() * 20,

            Math.random() * .55 + .75,

            Math.random() * 2 + 3,

            Math.random() * 2,

            10

        );

    }

}


generateTulips();


/* =========================================
   LOVE ENVELOPE
========================================= */

const loveEnvelope =
    document.getElementById("loveEnvelope");


loveEnvelope.addEventListener(
    "click",
    () => {

        loveEnvelope.classList.toggle(
            "opened"
        );

    }
);
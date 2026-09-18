```javascript
/* =========================
   STARS
========================= */

const stars = document.getElementById("stars");

for (let i = 0; i < 100; i++) {

    const star = document.createElement("div");

    star.classList.add("star");

    star.style.left =
        Math.random() * 100 + "%";

    star.style.top =
        Math.random() * 75 + "%";

    star.style.animationDelay =
        Math.random() * 4 + "s";

    stars.appendChild(star);
}


/* =========================
   FIREFLIES
========================= */

for (let i = 0; i < 18; i++) {

    const firefly =
        document.createElement("div");

    firefly.classList.add("firefly");

    firefly.style.left =
        10 + Math.random() * 80 + "%";

    firefly.style.top =
        45 + Math.random() * 35 + "%";

    firefly.style.animationDelay =
        Math.random() * 6 + "s";

    firefly.style.animationDuration =
        (6 + Math.random() * 5) + "s";

    document.body.appendChild(firefly);
}


/* =========================
   FLOATING HEARTS
========================= */

function createHeart() {

    const heart =
        document.createElement("div");

    heart.classList.add("heart");

    const hearts = [
        "♥",
        "♡",
        "❤"
    ];

    heart.innerHTML =
        hearts[
            Math.floor(
                Math.random() * hearts.length
            )
        ];

    heart.style.left =
        Math.random() * 100 + "%";

    heart.style.setProperty(
        "--move",
        (Math.random() * 180 - 90) + "px"
    );

    heart.style.fontSize =
        (12 + Math.random() * 14) + "px";

    heart.style.animationDuration =
        (6 + Math.random() * 4) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 11000);
}


/* Start hearts slowly */

setTimeout(() => {

    setInterval(
        createHeart,
        900
    );

}, 5000);


/* =========================
   CLICK HEART BURST
========================= */

document.addEventListener(
    "click",
    function (event) {

        for (let i = 0; i < 12; i++) {

            const heart =
                document.createElement("div");

            heart.classList.add("heart");

            heart.innerHTML =
                Math.random() > 0.5
                    ? "♥"
                    : "♡";

            heart.style.left =
                event.clientX + "px";

            heart.style.top =
                event.clientY + "px";

            heart.style.bottom =
                "auto";

            heart.style.setProperty(
                "--move",
                (Math.random() * 220 - 110) + "px"
            );

            heart.style.animationDuration =
                (2 + Math.random() * 2) + "s";

            document.body.appendChild(heart);

            setTimeout(() => {
                heart.remove();
            }, 4500);
        }
    }
);
```

```javascript
// ====================================
// 1. ZUFÄLLIGE PANDA-FAKTEN
// ====================================

const facts = [
    "🐾 Rote Pandas benutzen ihren buschigen Schwanz zum Balancieren und Wärmen.",
    "🌙 Sie sind vor allem in der Dämmerung und nachts aktiv.",
    "🎋 Bambus ist ein wichtiger Bestandteil ihrer Nahrung.",
    "🌳 Rote Pandas sind ausgezeichnete Kletterer.",
    "❄️ Ihr dichtes Fell hilft ihnen, in kühlen Bergwäldern zu leben.",
    "🔬 Ihr wissenschaftlicher Name lautet Ailurus fulgens.",
    "🦊 Trotz ihres Aussehens sind Rote Pandas keine Füchse.",
    "🌏 Sie leben in Teilen des Himalaya und angrenzenden Gebieten Asiens."
];

const factButton = document.getElementById("factButton");
const randomFact = document.getElementById("randomFact");

factButton.addEventListener("click", function () {

    const randomIndex = Math.floor(Math.random() * facts.length);

    randomFact.textContent = facts[randomIndex];

    randomFact.animate(
        [
            { opacity: 0, transform: "translateY(8px)" },
            { opacity: 1, transform: "translateY(0)" }
        ],
        {
            duration: 400,
            easing: "ease-out"
        }
    );

});


// ====================================
// 2. GEHEIME ÜBERRASCHUNG
// ====================================

const secretButton = document.getElementById("secretButton");
const secretMessage = document.getElementById("secretMessage");

let secretClicks = 0;

secretButton.addEventListener("click", function () {

    secretClicks++;

    if (secretClicks === 1) {

        secretMessage.textContent =
            "🌿 Pssst ... irgendwo auf dieser Website wartet noch ein Geheimnis!";

    } else if (secretClicks === 2) {

        secretMessage.textContent =
            "🐾 Du bist auf einer geheimen Panda-Mission!";

    } else {

        secretMessage.textContent =
            "🎉 PANDA-MODUS AKTIVIERT! Du bist offiziell ein Wald-Entdecker!";

        document.body.classList.toggle("panda-mode");

        secretClicks = 0;
    }

});


// ====================================
// 3. GEHEIMER PANDA-REGEN
// ====================================

const magicPanda = document.getElementById("magicPanda");
const pandaRain = document.getElementById("pandaRain");

let rainActive = false;

magicPanda.addEventListener("click", function () {

    if (rainActive) {
        return;
    }

    rainActive = true;

    for (let i = 0; i < 35; i++) {

        const panda = document.createElement("span");

        panda.className = "falling-panda";

        panda.textContent = ["🐼", "🐾", "🍃", "🎋"][
            Math.floor(Math.random() * 4)
        ];

        panda.style.left = Math.random() * 100 + "vw";

        panda.style.fontSize = (20 + Math.random() * 25) + "px";

        panda.style.animationDuration = (2.5 + Math.random() * 3) + "s";

        panda.style.animationDelay = (Math.random() * 1.5) + "s";

        pandaRain.appendChild(panda);

        panda.addEventListener("animationend", function () {
            panda.remove();
        });

    }

    setTimeout(function () {
        rainActive = false;
    }, 6000);

});


// ====================================
// 4. NACH-OBEN-BUTTON
// ====================================

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", function () {

    if (window.scrollY > 400) {

        backToTop.classList.add("visible");

    } else {

        backToTop.classList.remove("visible");

    }

});

backToTop.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// ====================================
// 5. EXTRA EASTER EGG: GEHEIME TASTE
// ====================================

let pandaCode = "";

const secretCode = "panda";

document.addEventListener("keydown", function (event) {

    // Nicht auslösen, während man in ein Eingabefeld schreibt.
    if (
        event.target.tagName === "INPUT" ||
        event.target.tagName === "TEXTAREA"
    ) {
        return;
    }

    pandaCode += event.key.toLowerCase();

    pandaCode = pandaCode.slice(-secretCode.length);

    if (pandaCode === secretCode) {

        document.body.classList.toggle("panda-mode");

        alert("🐼✨ Du hast das geheime Panda-Code-Easter-Egg gefunden!");

        pandaCode = "";
    }

});


// ====================================
// 6. KLEINE BEGRÜSSUNG
// ====================================

console.log(
    "%c🐼 Willkommen in Red Panda World!",
    "color: #d87536; font-size: 20px; font-weight: bold;"
);

console.log(
    "Geheimtipp: Tippe das Wort panda auf deiner Tastatur!"
);
```
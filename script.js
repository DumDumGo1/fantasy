
// CHAMÄLEON-FARBEN
const colors = [
    "#61d96b",
    "#36c8d9",
    "#ff9d45",
    "#d66bdb",
    "#f0dc55",
    "#e85d75"
];

let colorIndex = 0;

function changeColor() {
    colorIndex = (colorIndex + 1) % colors.length;

    const lizard = document.querySelector(".hero-lizard");
    lizard.style.filter = `drop-shadow(0 0 55px ${colors[colorIndex]})`;
    lizard.style.transform = "translateY(-50%) scale(1.2)";

    setTimeout(() => {
        lizard.style.transform = "translateY(-50%) scale(1)";
    }, 350);
}

// FARB-LABOR
function setColor(color) {
    const lizard = document.getElementById("lab-lizard");
    lizard.style.filter = `drop-shadow(0 0 35px ${color})`;
    lizard.style.transform = "scale(1.2)";

    document.getElementById("color-message").textContent =
        "✨ Eine neue Farbe wurde entdeckt!";

    setTimeout(() => {
        lizard.style.transform = "scale(1)";
    }, 400);
}

function randomColor() {
    const color = colors[Math.floor(Math.random() * colors.length)];
    setColor(color);
}

// ARTEN-POPUPS
const animalInfo = {
    panther: "🌈 Das Pantherchamäleon (Furcifer pardalis) lebt auf Madagaskar. Es ist für seine beeindruckenden Farbvariationen bekannt.",
    veiled: "👑 Das Jemenchamäleon (Chamaeleo calyptratus) besitzt einen hohen Helm auf dem Kopf. Es stammt von der Arabischen Halbinsel.",
    jackson: "🦖 Das Jackson-Chamäleon (Trioceros jacksonii) ist für die drei Hörner bekannt, die besonders bei Männchen auffallen."
};

function openAnimal(type) {
    document.getElementById("popup-text").textContent = animalInfo[type];
    document.getElementById("popup").classList.add("active");
}

function closePopup() {
    document.getElementById("popup").classList.remove("active");
}

// GEHEIMNIS
let secretClicks = 0;

function revealSecret() {
    secretClicks++;

    const messages = [
        "🦎 Ein Chamäleon kann seine Augen unabhängig voneinander bewegen!",
        "👀 Du bist auf dem richtigen Weg ...",
        "🌿 Irgendwo im Dschungel versteckt sich ein geheimes Chamäleon.",
        "✨ Noch ein Klick bis zum geheimen Level!"
    ];

    if (secretClicks >= 5) {
        document.getElementById("secret-text").textContent =
            "🏆 CHAMELEON MASTER! Du hast das geheime Level freigeschaltet!";
        document.body.style.background =
            "linear-gradient(120deg, #092a24, #321b40)";
    } else {
        document.getElementById("secret-text").textContent =
            messages[secretClicks - 1];
    }
}

// HELL / DUNKEL
document.getElementById("themeButton").addEventListener("click", function() {
    document.body.classList.toggle("light");
    this.textContent = document.body.classList.contains("light")
        ? "☀️"
        : "🌙";
});

// FUNKELN BEI MAUSBEWEGUNG
document.addEventListener("mousemove", function(event) {
    if (Math.random() > 0.93) {
        const particle = document.createElement("span");

        particle.textContent = "✦";
        particle.style.position = "fixed";
        particle.style.left = event.clientX + "px";
        particle.style.top = event.clientY + "px";
        particle.style.color = "#8bff9a";
        particle.style.pointerEvents = "none";
        particle.style.zIndex = "99";
        particle.style.animation = "particleFade 1s forwards";

        document.getElementById("particles").appendChild(particle);

        setTimeout(() => particle.remove(), 1000);
    }
});

// SCROLL NACH OBEN
window.addEventListener("scroll", function() {
    document.getElementById("top").classList.toggle(
        "visible",
        window.scrollY > 400
    );
});

// GEHEIME TASTENKOMBINATION
let secretKeys = "";

document.addEventListener("keydown", function(event) {
    secretKeys += event.key.toLowerCase();
    secretKeys = secretKeys.slice(-8);

    if (secretKeys === "chameleon") {
        document.getElementById("popup-text").textContent =
            "🌌 GEHEIMNIS ENTDECKT! Du bist ein echter Meister der Tarnung!";
        document.getElementById("popup").classList.add("active");
    }

    if (event.key === "Escape") {
        closePopup();
    }
});

// ANIMATION
const style = document.createElement("style");

style.textContent = `
@keyframes particleFade {
    from { opacity: 1; transform: translateY(0) scale(1); }
    to { opacity: 0; transform: translateY(-35px) scale(0); }
}
`;

document.head.appendChild(style);

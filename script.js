
/* --------------------------------
   CHAMELEON WEBSITE
   Interactive JavaScript
---------------------------------- */


/* ARTEN-POPUPS */

const species = {
    panther: {
        title: "Pantherchamäleon",
        description: "Das Pantherchamäleon lebt auf Madagaskar. Es ist besonders für seine intensiven Farben bekannt. Je nach Herkunftsregion unterscheiden sich seine Farbmuster.",
        detail: "HERKUNFT · MADAGASKAR"
    },

    jemen: {
        title: "Jemenchamäleon",
        description: "Das Jemenchamäleon stammt von der Arabischen Halbinsel. Sein auffälliger Helm auf dem Kopf ist ein besonderes Erkennungsmerkmal.",
        detail: "HERKUNFT · JEMEN UND SAUDI-ARABIEN"
    },

    jackson: {
        title: "Jackson-Chamäleon",
        description: "Das Jackson-Chamäleon stammt aus Ostafrika. Besonders die Männchen besitzen drei auffällige Hörner auf dem Kopf.",
        detail: "HERKUNFT · OSTAFRIKA"
    }
};

const modal = document.getElementById("speciesModal");

function openSpecies(name) {
    const animal = species[name];

    document.getElementById("modalTitle").textContent = animal.title;
    document.getElementById("modalDescription").textContent = animal.description;
    document.getElementById("modalDetail").textContent = animal.detail;

    modal.classList.add("show");
}

function closeSpecies() {
    modal.classList.remove("show");
}

document.getElementById("modalClose").addEventListener("click", closeSpecies);

modal.addEventListener("click", event => {
    if (event.target === modal) {
        closeSpecies();
    }
});

document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
        closeSpecies();
    }
});


/* FARB-LABOR */

const colorButtons = document.querySelectorAll(".color-choice");
const colorDisplay = document.getElementById("colorDisplay");
const colorName = document.getElementById("colorName");

colorButtons.forEach(button => {

    button.addEventListener("click", () => {

        const color = button.dataset.color;
        const name = button.dataset.name;

        colorDisplay.style.background = color;
        colorName.textContent = name;

        colorButtons.forEach(item => {
            item.classList.remove("active");
        });

        button.classList.add("active");

    });

});


/* MOBILE NAVIGATION */

const menuToggle = document.getElementById("menuToggle");
const navigation = document.querySelector(".navigation");

menuToggle.addEventListener("click", () => {
    navigation.classList.toggle("open");

    menuToggle.textContent =
        navigation.classList.contains("open") ? "×" : "☰";
});

document.querySelectorAll(".navigation a").forEach(link => {
    link.addEventListener("click", () => {
        navigation.classList.remove("open");
        menuToggle.textContent = "☰";
    });
});


/* CURSOR-LICHT */

const cursorGlow = document.querySelector(".cursor-glow");

window.addEventListener("mousemove", event => {
    cursorGlow.style.left = event.clientX + "px";
    cursorGlow.style.top = event.clientY + "px";
});


/* SCROLL-ANIMATIONEN */

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
        }

    });

}, {
    threshold: 0.12
});

document.querySelectorAll(
    ".species-card, .ability-card, .section-heading, .color-layout, .protection-content"
).forEach(element => {

    element.classList.add("reveal");
    observer.observe(element);

});


/* NAVIGATION: AKTIVEN BEREICH ERKENNEN */

const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll(".navigation a");

window.addEventListener("scroll", () => {

    let current = "home";

    sections.forEach(section => {
        if (window.scrollY >= section.offsetTop - 180) {
            current = section.id;
        }
    });

    navLinks.forEach(link => {
        link.classList.toggle(
            "active",
            link.getAttribute("href") === "#" + current
        );
    });

});


/* EASTER EGG 1: GEHEIMWORT */

let secretWord = "";

document.addEventListener("keydown", event => {

    if (event.key.length !== 1) return;

    secretWord += event.key.toLowerCase();
    secretWord = secretWord.slice(-9);

    if (secretWord === "chameleon") {
        showSecret();
        secretWord = "";
    }

});


/* EASTER EGG 2: LOGO DREIMAL KLICKEN */

let logoClicks = 0;
let logoTimer;

document.querySelector(".brand").addEventListener("click", () => {

    logoClicks++;

    clearTimeout(logoTimer);

    logoTimer = setTimeout(() => {
        logoClicks = 0;
    }, 1200);

    if (logoClicks >= 3) {
        showSecret();
        logoClicks = 0;
    }

});


/* GEHEIMNIS ANZEIGEN */

let secretTimeout;

function showSecret() {

    const message = document.getElementById("secretMessage");

    message.classList.add("show");

    clearTimeout(secretTimeout);

    secretTimeout = setTimeout(() => {
        message.classList.remove("show");
    }, 3500);

}


/* EASTER EGG 3: DOPPELKLICK AUF DEN HERO-TITEL */

document.querySelector(".hero h1").addEventListener("dblclick", () => {

    document.body.style.setProperty("--bright", "#ffda59");

    showSecret();

});

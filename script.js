
const speciesInfo = {
    panther: {
        title: "Pantherchamäleon",
        text: "Das Pantherchamäleon stammt aus Madagaskar. Besonders bekannt ist es für seine intensive Färbung. Je nach Herkunftsregion können die Farben und Muster stark variieren."
    },
    jemen: {
        title: "Jemenchamäleon",
        text: "Das Jemenchamäleon lebt auf der Arabischen Halbinsel. Sein hoher Helm auf dem Kopf ist besonders auffällig. Es bewohnt unter anderem Bäume und Sträucher."
    },
    jackson: {
        title: "Jackson-Chamäleon",
        text: "Das Jackson-Chamäleon stammt aus Ostafrika. Männchen besitzen häufig drei Hörner. Die Art lebt vor allem in bewachsenen, kühleren Gebirgsregionen."
    }
};

function showInfo(type) {
    const info = speciesInfo[type];

    document.getElementById("popupTitle").textContent = info.title;
    document.getElementById("popupText").textContent = info.text;
    document.getElementById("popup").classList.add("show");
}

function closeInfo() {
    document.getElementById("popup").classList.remove("show");
}

document.getElementById("popup").addEventListener("click", function(event) {
    if (event.target === this) closeInfo();
});

document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") closeInfo();
});

function setColor(color, name, button) {
    const display = document.getElementById("colorDisplay");

    display.style.background = color;
    document.getElementById("colorName").textContent = name;

    document.querySelectorAll(".color-button").forEach(btn => {
        btn.classList.remove("active");
    });

    button.classList.add("active");
}

const topButton = document.getElementById("topButton");

window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
        topButton.classList.add("visible");
    } else {
        topButton.classList.remove("visible");
    }
});

// Easter Egg: Tippe CHAMELEON!
let secret = "";

document.addEventListener("keydown", event => {
    if (event.key.length === 1) {
        secret += event.key.toLowerCase();
        secret = secret.slice(-9);

        if (secret === "chameleon") {
            document.body.classList.toggle("secret-mode");
            alert("🦎 You discovered the hidden chameleon!");
            secret = "";
        }
    }
});

// Easter Egg: Doppelklick auf das Logo
document.querySelector(".logo").addEventListener("dblclick", () => {
    document.body.classList.toggle("secret-mode");
    alert("🌿 Secret jungle mode activated!");
});

// Kleine Scrollanimationen
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll(".species-card, .ability, .intro-grid, .about-grid").forEach(item => {
    item.classList.add("reveal");
    observer.observe(item);
});

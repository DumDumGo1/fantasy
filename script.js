
document.addEventListener("DOMContentLoaded", function () {
    const titel = document.getElementById("haupttitel");
    const logo = document.getElementById("logo-kuh");
    const kuehe = document.querySelectorAll(".kuh");
    const meldung = document.getElementById("meldung");
    const magie = document.getElementById("magie");

    let titelKlicks = 0;
    let logoKlicks = 0;
    let muhText = "";
    let timerMeldung;
    let timerMagie;
    let regenbogenTimer;
    const kuhKlicks = {};

    function zeigeMeldung(text) {
        meldung.textContent = text;
        meldung.classList.add("zeigen");
        clearTimeout(timerMeldung);

        timerMeldung = setTimeout(function () {
            meldung.classList.remove("zeigen");
        }, 3000);
    }

    function zeigeMagie(emoji, ueberschrift, text) {
        clearTimeout(timerMagie);
        magie.innerHTML = `
            <div class="magie-bild">${emoji}</div>
            <h2>${ueberschrift}</h2>
            <p>${text}</p>
        `;
        magie.classList.add("aktiv");

        timerMagie = setTimeout(function () {
            magie.classList.remove("aktiv");
        }, 5000);
    }

    // Easter Egg 1: Fünf Klicks auf den Haupttitel
    titel.addEventListener("click", function () {
        titelKlicks++;

        if (titelKlicks >= 5) {
            titelKlicks = 0;
            zeigeMagie(
                "🌈 🐮 🌈",
                "DER MAGISCHE KUH-REGENBOGEN!",
                "Du hast das erste Geheimnis entdeckt!"
            );
        }
    });

    // Easter Egg 2: Zehn Klicks auf das Logo
    logo.addEventListener("click", function () {
        logoKlicks++;

        if (logoKlicks >= 10) {
            logoKlicks = 0;
            zeigeMagie(
                "👑🐮👑",
                "KÖNIGLICHE HOCHLANDKUH!",
                "Du bist jetzt Ehrenmitglied der Muh-Königsfamilie."
            );
        }
    });

    // Easter Egg 3: Jede Kuh hat ihr eigenes Geheimnis
    kuehe.forEach(function (kuh) {
        const nummer = kuh.dataset.kuh;
        kuhKlicks[nummer] = 0;

        kuh.addEventListener("click", function () {
            kuhKlicks[nummer]++;

            if (kuhKlicks[nummer] >= 3) {
                kuhKlicks[nummer] = 0;

                const geheimnisse = {
                    "1": "🐮 Geheimnis: Diese Kuh ist die Chefin der Herde!",
                    "2": "🐂 Geheimnis: Dieser Bulle träumt von einer Karriere als Rockstar!",
                    "3": "🌸 Geheimnis: Diese Kuh liebt Blumen mehr als Gras!"
                };

                document.getElementById("kuh-nachricht").textContent =
                    geheimnisse[nummer];
            } else {
                document.getElementById("kuh-nachricht").textContent =
                    "Muh! Noch " + (3 - kuhKlicks[nummer]) +
                    " Klick(s) bis zum Geheimnis ...";
            }
        });
    });

    // Easter Egg 4: Das geheime Tastaturwort MUH
    document.addEventListener("keydown", function (event) {
        if (event.ctrlKey || event.altKey || event.metaKey) return;

        if (event.key.length === 1) {
            muhText = (muhText + event.key.toLowerCase()).slice(-3);

            if (muhText === "muh") {
                muhText = "";
                zeigeMagie(
                    "🐮💨🐮",
                    "MUH-ULTRA-MODUS!",
                    "Die Kuh sagt: Du hast das geheime Wort gefunden!"
                );
            }
        }
    });

    // Easter Egg 5: Der MUH-Knopf
    document.getElementById("muh-knopf").addEventListener("click", function () {
        zeigeMeldung("M̲U̲U̲U̲H̲! 🐮 Die ganze Herde antwortet: MÖÖÖH!");
        document.body.animate(
            [
                { transform: "translateX(0)" },
                { transform: "translateX(-4px)" },
                { transform: "translateX(4px)" },
                { transform: "translateX(0)" }
            ],
            { duration: 350 }
        );
    });

    // Easter Egg 6: Nachtmodus
    document.getElementById("nacht-knopf").addEventListener("click", function () {
        document.body.classList.toggle("nacht");

        if (document.body.classList.contains("nacht")) {
            this.textContent = "☀️ Tagmodus";
            zeigeMeldung("🌙 Die Highlands schlafen jetzt ... gute Nacht, Kühe!");
        } else {
            this.textContent = "🌙 Nachtmodus";
            zeigeMeldung("☀️ Die Sonne geht über der Weide auf!");
        }
    });

    // Easter Egg 7: Doppelklick auf eine Kuh
    kuehe.forEach(function (kuh) {
        kuh.addEventListener("dblclick", function () {
            zeigeMagie(
                "🛸🐮",
                "KUH-ABENTEUER!",
                "Eine Kuh wurde gerade von Aliens eingeladen. Muhahaha!"
            );
        });
    });

    // Easter Egg 8: Alle Kühe gleichzeitig anklicken
    let kuhReiheKlicks = 0;

    kuehe.forEach(function (kuh) {
        kuh.addEventListener("click", function () {
            kuhReiheKlicks++;

            if (kuhReiheKlicks >= 12) {
                kuhReiheKlicks = 0;
                zeigeMagie(
                    "🐮🐮🐮✨",
                    "DIE SUPERHERDE!",
                    "Du hast die geheime Superherde freigeschaltet!"
                );
            }
        });
    });

    // Easter Egg 9: Ein Klick auf den Hinweistext
    document.querySelector(".mini-hinweis").addEventListener("click", function () {
        zeigeMeldung("🤫 Der beste Detektiv findet auch die kleinsten Geheimnisse!");
    });

    document.querySelector(".mini-hinweis").style.cursor = "pointer";

    // Easter Egg 10: Das Logo reagiert auf Doppelklick
    logo.addEventListener("dblclick", function () {
        zeigeMagie(
            "🧙🐮✨",
            "DER KUH-ZAUBERER!",
            "Du hast den geheimsten Zauber der Highlands gefunden."
        );
    });
});

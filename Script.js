let selectedZone = "UTC";

const analog = document.getElementById("analog");
const hourHand = document.getElementById("hour-hand");
const minuteHand = document.getElementById("minute-hand");
const secondHand = document.getElementById("second-hand");
const digital = document.getElementById("digital");

const searchBox = document.getElementById("search");
const dropdown = document.getElementById("dropdown");
const addBtn = document.getElementById("addBtn");
const savedBox = document.getElementById("saved");

function rgb(h, s, l) {
    s /= 100;
    l /= 100;
    const k = n => (n + h / 30) % 12;
    const a = s * Math.min(l, 1 - l);
    const f = n =>
        Math.round(255 * (l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)))));
    return `rgb(${f(0)}, ${f(8)}, ${f(4)})`;
}

function drawClock() {
    const now = new Date();
    const local = new Date(now.toLocaleString("en-US", { timeZone: selectedZone }));

    const ms = local.getMilliseconds();
    const s = local.getSeconds() + ms / 1000;
    const m = local.getMinutes() + s / 60;
    const h = local.getHours() + m / 60;

    secondHand.style.transform = `rotate(${s * 6}deg)`;
    minuteHand.style.transform = `rotate(${m * 6}deg)`;
    hourHand.style.transform = `rotate(${(h % 12) * 30}deg)`;

    const hueTrail = (s * 6) % 360;
    const hueHour = (Date.now() / 200) % 360;
    const hueMinute = (Date.now() / 80) % 360;

    document.documentElement.style.setProperty("--trailColor", rgb(hueTrail, 100, 50));
    document.documentElement.style.setProperty("--hourColor", rgb(hueHour, 100, 50));
    document.documentElement.style.setProperty("--minuteColor", rgb(hueMinute, 100, 50));
    document.documentElement.style.setProperty("--faceGlow", rgb(hueHour, 100, 50));

    digital.textContent = local.toLocaleTimeString("en-GB", { hour12: false });

    requestAnimationFrame(drawClock);
}

requestAnimationFrame(drawClock);

searchBox.addEventListener("input", function () {
    const value = this.value.toLowerCase();
    if (!value) {
        dropdown.style.display = "none";
        return;
    }

    const results = countryZones.filter(z =>
        z.label.toLowerCase().includes(value)
    );

    dropdown.innerHTML = "";
    results.forEach(z => {
        const div = document.createElement("div");
        div.textContent = z.label;
        div.onclick = function () {
            selectedZone = z.tz;
            searchBox.value = z.label;
            dropdown.style.display = "none";
        };
        dropdown.appendChild(div);
    });

    dropdown.style.display = "block";
});

addBtn.onclick = function () {
    if (searchBox.value.trim() === "") return;
    const entry = document.createElement("div");
    entry.textContent = searchBox.value;
    savedBox.appendChild(entry);
};

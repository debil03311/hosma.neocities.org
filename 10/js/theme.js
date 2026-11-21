if (!localStorage.ten_theme)
    localStorage.setItem("ten_theme", "default");

const themeLink = document.getElementById("theme-link");
const themePicker = document.getElementById("theme-picker");
const themeSection = themePicker.children[0];
const toggleThemePicker=()=> themePicker.classList.toggle("invisible");

const themes = [
    "coffee",
    "default",
    "fauux",
    "geocities",
    "glitch_city",
    "neon",
    "none",
    "nord",
    "nord_light",
    "u",
];

themePicker.onclick=(e)=> {
    (e.target === themePicker) && toggleThemePicker();
}

for (const t of themes) {
    const themeButton = document.createElement("a");
    themeButton.className = "theme";
    themeButton.innerText = t.replace(/_/g," ");
    themeButton.onclick=()=> setTheme(t);
    themeSection.appendChild(themeButton);
}

function setTheme(name) {
    themeLink.href = `./css/theme/${name}.css`;

    if (name === "goodbye")
        return;

    localStorage.setItem("ten_theme", name);
}
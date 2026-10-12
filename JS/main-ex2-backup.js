
const themeToggle = document.querySelector("#theme-toggle");
const root = document.documentElement;
const savedTheme = localStorage.getItem("theme");

function applyTheme(theme) {
    const isDark = theme === "dark";

    if (isDark) {
        root.dataset.theme = "dark";
    } else {
        delete root.dataset.theme;
    }

    themeToggle.setAttribute("aria-pressed", String(isDark));
    themeToggle.textContent = isDark
        ? "Switch to Light Mode"
        : "Switch to Dark Mode";
}

// Restore saved theme, if available.
applyTheme(savedTheme === "dark" ? "dark" : "light");

themeToggle.addEventListener("click", () => {
    const isCurrentlyDark = root.dataset.theme === "dark";
    const nextTheme = isCurrentlyDark ? "light" : "dark";

    applyTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
});

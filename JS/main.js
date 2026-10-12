
"use strict";

// ========================================
// 1. DARK MODE
// ========================================
const themeToggle = document.querySelector("#theme-toggle");
const root = document.documentElement;

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

// Restore the saved theme
const savedTheme = localStorage.getItem("theme");
applyTheme(savedTheme === "dark" ? "dark" : "light");

// Toggle between light and dark themes
themeToggle.addEventListener("click", () => {
    const isCurrentlyDark = root.dataset.theme === "dark";
    const nextTheme = isCurrentlyDark ? "light" : "dark";

    applyTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
});

// ========================================
// 2. CONTACT FORM
// ========================================
const contactForm = document.querySelector("#contact-form");
const formStatus = document.querySelector("#form-status");

contactForm.addEventListener("submit", (event) => {
    // Prevent the browser from reloading the page
    event.preventDefault();

    // Read the form values
    const formData = new FormData(contactForm);
    const name = formData.get("name").trim();

    // Display a confirmation message
    formStatus.textContent =
        `Thank you, ${name}! Your form passed the browser-side demo.`;

    // Reset the form fields
    contactForm.reset();
});

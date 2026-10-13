
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


/* ========================================
   3. PROJECT DATA & LIVE RENDERING
   T-03B: Live Data State
   ======================================== */

const projects = [
    {
        title: "Semantic DOM Architecture",
        category: "Frontend",
        description:
            "A semantic HTML portfolio focused on accessibility, meaningful page structure, and keyboard navigation.",
        technologies: ["HTML5", "Accessibility", "CSS"],
        link: "#about",
        linkText: "View Project Details"
    },
    {
        title: "Product Management Application",
        category: "Python",
        description:
            "A Python application for managing products, orders, quantities, and total prices.",
        technologies: ["Python", "SQL", "Data Management"],
        link: "#contact",
        linkText: "Ask About This Project"
    },
    {
        title: "Responsive Portfolio",
        category: "Web Development",
        description:
            "A responsive portfolio with reusable UI components and a persistent light and dark theme.",
        technologies: ["CSS Grid", "JavaScript", "Responsive Design"],
        link: "#contact",
        linkText: "Ask About This Project"
    }
];

const projectsContainer = document.querySelector("#projects-container");
const projectsStatus = document.querySelector("#projects-status");

function createProjectCard(project) {
    const article = document.createElement("article");
    article.classList.add("project-card");
    article.dataset.category = project.category.toLowerCase();

    const header = document.createElement("header");
    header.classList.add("project-card-header");

    const category = document.createElement("p");
    category.classList.add("project-category");
    category.textContent = project.category;

    const title = document.createElement("h3");
    title.textContent = project.title;

    header.append(category, title);

    const description = document.createElement("p");
    description.textContent = project.description;

    const tagList = document.createElement("ul");
    tagList.classList.add("tag-list");
    tagList.setAttribute("aria-label", "Technologies used");

    project.technologies.forEach((technology) => {
        const tag = document.createElement("li");
        tag.textContent = technology;
        tagList.append(tag);
    });

    const footer = document.createElement("footer");
    footer.classList.add("project-card-footer");

    const link = document.createElement("a");
    link.href = project.link;
    link.textContent = project.linkText;

    footer.append(link);
    article.append(header, description, tagList, footer);

    return article;
}

function renderProjects(projectList) {
    projectsContainer.replaceChildren();

    projectList.forEach((project) => {
        const card = createProjectCard(project);
        projectsContainer.append(card);
    });

    projectsContainer.setAttribute("aria-busy", "false");
    projectsStatus.textContent =
        `${projectList.length} projects loaded.`;
}

renderProjects(projects);

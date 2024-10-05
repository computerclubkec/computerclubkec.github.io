document.addEventListener("DOMContentLoaded", function () {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll("nav ul li a");

    const activeColor = document
        .querySelector("nav")
        .getAttribute("active-page-color");

    navLinks.forEach((link) => {
        if (link.getAttribute("href") === currentPath) {
            link.style.color = activeColor;
        }
    });
});

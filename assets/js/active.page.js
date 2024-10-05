document.addEventListener("DOMContentLoaded", function () {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach((link) => {
        if (link.getAttribute("href") === currentPath) {
            link.style.fontWeight = "bold";
        }
    });
});

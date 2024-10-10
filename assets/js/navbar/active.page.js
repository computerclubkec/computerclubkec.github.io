document.addEventListener("DOMContentLoaded", function () {
    const currentPath = window.location.pathname;
    // Get all navigation links (both desktop and mobile)
    const allNavLinks = document.querySelectorAll("nav a, nav li, #mobileMenu a");
    
    allNavLinks.forEach((link) => {
        const linkPath = link.getAttribute("href");
        
        // Remove any existing font weight classes
        link.classList.remove('font-semibold', 'font-bold');
        
        // Add normal font weight to all links by default
        link.classList.add('font-semibold');
        
        // Check if this link is for the current page
        if (linkPath === currentPath) {
            link.classList.remove('font-semibold');
            link.classList.add('font-bold');
            
            // Also set the color from the nav attribute
            const activeColor = document.querySelector("nav").getAttribute("active-page-color");
            if (activeColor) {
                link.style.color = activeColor;
            }
        }
    });
    
    // Handle dropdown buttons
    const dropdownButtons = document.querySelectorAll("#eventsDropdown, #resourcesDropdown, #mobileEventsDropdown, #mobileResourcesDropdown");
    dropdownButtons.forEach(button => {
        const dropdownList = button.nextElementSibling;
        if (dropdownList) {
            const dropdownLinks = dropdownList.querySelectorAll('a');
            dropdownLinks.forEach(link => {
                if (link.getAttribute("href") === currentPath) {
                    button.classList.remove('font-semibold');
                    button.classList.add('font-bold');
                    const activeColor = document.querySelector("nav").getAttribute("active-page-color");
                    if (activeColor) {
                        button.style.color = activeColor;
                    }
                }
            });
        }
    });
});
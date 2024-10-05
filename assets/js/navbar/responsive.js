document.addEventListener("DOMContentLoaded", function () {
    const mobileMenuButton = document.getElementById("mobileMenuButton");
    const mobileMenu = document.getElementById("mobileMenu");

    mobileMenuButton.addEventListener("click", function () {
        mobileMenu.classList.toggle("hidden");
    });

    // Handle mobile dropdowns
    const mobileEventsDropdown = document.getElementById(
        "mobileEventsDropdown"
    );
    const mobileDropdownEvents = document.getElementById(
        "mobileDropdownEvents"
    );

    mobileEventsDropdown.addEventListener("click", function () {
        mobileDropdownEvents.classList.toggle("hidden");
    });

    const mobileResourcesDropdown = document.getElementById(
        "mobileResourcesDropdown"
    );
    const mobileDropdownResources = document.getElementById(
        "mobileDropdownResources"
    );

    mobileResourcesDropdown.addEventListener("click", function () {
        mobileDropdownResources.classList.toggle("hidden");
    });
});

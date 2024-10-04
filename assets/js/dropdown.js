// Dropdown for Events
const eventsButton = document.getElementById("eventsDropdown");
const dropdownEvents = document.getElementById("dropdownEvents");
eventsButton.addEventListener("click", () => {
    dropdownEvents.classList.toggle("hidden");
});

// Dropdown for Resources
const resourcesButton = document.getElementById("resourcesDropdown");
const dropdownResources = document.getElementById("dropdownResources");
resourcesButton.addEventListener("click", () => {
    dropdownResources.classList.toggle("hidden");
});

document.addEventListener("click", (e) => {
    if (
        !eventsButton.contains(e.target) &&
        !dropdownEvents.contains(e.target)
    ) {
        dropdownEvents.classList.add("hidden");
    }
    if (
        !resourcesButton.contains(e.target) &&
        !dropdownResources.contains(e.target)
    ) {
        dropdownResources.classList.add("hidden");
    }
});

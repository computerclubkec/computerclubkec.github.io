document.addEventListener("DOMContentLoaded", function () {
    const dropdownButton = document.getElementById("eventsDropdown");
    const dropdownMenu = document.getElementById("dropdownEvents");

    dropdownButton.addEventListener("click", function () {
        // Toggle the 'hidden' class to show/hide the dropdown
        dropdownMenu.classList.toggle("hidden");
    });

    // Optional: Click outside to close the dropdown
    document.addEventListener("click", function (e) {
        if (
            !dropdownButton.contains(e.target) &&
            !dropdownMenu.contains(e.target)
        ) {
            dropdownMenu.classList.add("hidden");
        }
    });
});

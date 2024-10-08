// Read More and Read Less function
document.addEventListener("DOMContentLoaded", function () {
  const readMoreLinks = document.querySelectorAll(".read-more");
  const readLessLinks = document.querySelectorAll(".read-less");

  readMoreLinks.forEach(function (readMore) {
    readMore.addEventListener("click", function (e) {
      e.preventDefault();
      const parent = e.target.closest("p");

      parent.querySelector(".event-description-short").classList.add("hidden");
      parent
        .querySelector(".event-description-full")
        .classList.remove("hidden");
      parent.querySelector(".read-more").classList.add("hidden");
      parent.querySelector(".read-less").classList.remove("hidden");
    });
  });

  readLessLinks.forEach(function (readLess) {
    readLess.addEventListener("click", function (e) {
      e.preventDefault();
      const parent = e.target.closest("p");

      parent
        .querySelector(".event-description-short")
        .classList.remove("hidden");
      parent.querySelector(".event-description-full").classList.add("hidden");
      parent.querySelector(".read-more").classList.remove("hidden");
      parent.querySelector(".read-less").classList.add("hidden");
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  function showYear(year, button) {
    // Hide both sections initially
    document.getElementById("members_2024").classList.add("hidden");
    document.getElementById("members_2023").classList.add("hidden");

    // Show the selected year
    document.getElementById(year).classList.remove("hidden");

    // Reset button styles for both buttons
    document
      .getElementById("btn-2024")
      .classList.remove("bg-[#FB8500]", "hover:bg-[#FB8500]/90", "text-white");
    document
      .getElementById("btn-2024")
      .classList.add(
        "border-4",
        "border-[#FB8500]",
        "text-[#FB8500]",
        "hover:bg-[#FB8500]/90",
        "hover:text-white"
      );

    document
      .getElementById("btn-2023")
      .classList.remove("bg-[#FB8500]", "hover:bg-[#FB8500]/90", "text-white");
    document
      .getElementById("btn-2023")
      .classList.add(
        "border-4",
        "border-[#FB8500]",
        "text-[#FB8500]",
        "hover:bg-[#FB8500]/90",
        "hover:text-white"
      );

    // Set active button style for the selected button
    button.classList.remove(
      "border-4",
      "border-[#FB8500]",
      "text-[#FB8500]",
      "hover:bg-[#FB8500]/90",
      "hover:text-white"
    );
    button.classList.add("bg-[#FB8500]", "hover:bg-[#FB8500]/90", "text-white");
  }

  // Attach the function to the global window object so it can be called from HTML
  window.showYear = showYear;
});

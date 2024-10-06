// Read More and Read Less function
document.addEventListener("DOMContentLoaded", function () {
    const readMoreLinks = document.querySelectorAll(".read-more");
    const readLessLinks = document.querySelectorAll(".read-less");

    readMoreLinks.forEach(function (readMore) {
      readMore.addEventListener("click", function (e) {
        e.preventDefault();
        const parent = e.target.closest("p");

        parent
          .querySelector(".event-description-short")
          .classList.add("hidden");
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
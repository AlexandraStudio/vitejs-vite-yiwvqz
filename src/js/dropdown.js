document.addEventListener('DOMContentLoaded', () => {
  document
    .querySelectorAll(".dropdown__container .dropdown__button")
    .forEach((dropdown) => {
      dropdown.addEventListener("click", () => {
        if (!dropdown.parentElement.classList.contains("open")) {
          dropdown.parentElement.classList.add("open");
        } else {
          dropdown.parentElement.classList.remove("open");
        }
      });
    });
  });
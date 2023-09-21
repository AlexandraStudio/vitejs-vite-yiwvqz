document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById("menu-button");
  const closeButton = document.getElementById("close-button");
  const menu = document.getElementById("menu");

  const bookCallButton = document.getElementById("book-call-button");
  const thanksButton = document.getElementById("thanks-popup-button");
  const bookCallPopup = document.getElementById("book-call-popup");
  const thanksPopup = document.getElementById("thanks-popup");
  const closePopup = document.getElementById("close-thanks-popup");

  button.addEventListener("click", () => {
    menu.classList.remove("hidden");
    menu.classList.add("flex");
    document.body.style.overflow = "hidden";
    document.body.style.height = "100%";
  });

  closeButton.addEventListener("click", () => {
    menu.classList.add("hidden");
    menu.classList.remove("flex");
    document.body.style.overflow = "auto";
    document.body.style.height = "auto";
  });

  bookCallButton.addEventListener("click", () => {
    bookCallPopup.classList.remove("hidden");
    bookCallPopup.classList.add("flex");
    document.body.style.overflow = "hidden";
    document.body.style.height = "100%";
  });

  thanksButton.addEventListener("click", () => {
    bookCallPopup.classList.remove("flex");
    bookCallPopup.classList.add("hidden");
    thanksPopup.classList.remove("hidden");
    thanksPopup.classList.add("flex");
  });

  closePopup.addEventListener("click", () => {
    thanksPopup.classList.remove("flex");
    thanksPopup.classList.add("hidden");
    document.body.style.overflow = "auto";
    document.body.style.height = "auto";
  });

  document
    .querySelectorAll(".tabs__container--mobile .tabs__button--mobile")
    .forEach((tab) => {
      tab.addEventListener("click", () => {
        if (!tab.parentElement.classList.contains("open")) {
          tab.parentElement.classList.add("open");
        } else {
          tab.parentElement.classList.remove("open");
        }
      });
    });
  });
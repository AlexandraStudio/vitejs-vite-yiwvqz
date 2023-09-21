document.addEventListener('DOMContentLoaded', () => {
  document
    .querySelectorAll(".filter__container .filter__button")
    .forEach((tab) => {
      tab.addEventListener("click", () => {
        if (!tab.parentElement.classList.contains("open")) {
          tab.parentElement.classList.add("open");
        } else {
          tab.parentElement.classList.remove("open");
        }
      });
    });

  const openFilters = document.getElementById("open-filters");
  const openMenu = document.getElementById("open-menu");
  const closeFilters = document.getElementById("close-filters");
  const closeMenu = document.getElementById("close-menu");
  const filters = document.getElementById("catalog-filters");
  const menu = document.getElementById("catalog-menu");

  openFilters.addEventListener("click", () => {
    filters.classList.remove("hidden");
    document.body.style.overflow = "hidden";
    document.body.style.height = "100%";
  });

  openMenu.addEventListener("click", () => {
    menu.classList.remove("hidden");
    document.body.style.overflow = "hidden";
    document.body.style.height = "100%";
  });

  closeFilters.addEventListener("click", () => {
    filters.classList.add("hidden");
    document.body.style.overflow = "auto";
    document.body.style.height = "auto";
  });

  closeMenu.addEventListener("click", () => {
    menu.classList.add("hidden");
    document.body.style.overflow = "auto";
    document.body.style.height = "auto";
  });
});
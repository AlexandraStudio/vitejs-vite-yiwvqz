document.addEventListener('DOMContentLoaded', () => {

  document.querySelectorAll(".cart-tabs__container .cart-tabs__button").forEach((tab) => {
    tab.addEventListener("click", () => {
      document
        .querySelectorAll(".cart-tabs__container .cart-tabs__button")
        .forEach((tab) => {
          tab.classList.remove("text-light-gray");
        });
      tab.classList.add("text-light-gray");
      let id = tab.getAttribute("id");
      document
        .querySelectorAll(".cart-tabs__container .cart-tabs__item")
        .forEach((content) => {
          content.style.display = "none";
        });
      document.getElementById(
        "cart-content" + id.charAt(id.length - 1),
      ).style.display = "flex";
    });
  });

  document
    .querySelectorAll(".cart-tabs__container--mobile .cart-tabs__button--mobile")
    .forEach((tab) => {
      tab.addEventListener("click", () => {
        document
          .querySelectorAll(".cart-tabs__container--mobile .cart-tabs__button--mobile")
          .forEach((tab) => {
            tab.classList.remove("text-black");
            tab.classList.add("text-light-gray");
          });
        tab.classList.remove("text-light-gray");
        tab.classList.add("text-black");
        let id = tab.getAttribute("id");
        document
          .querySelectorAll(".cart-tabs__container--mobile .cart-tabs__item--mobile")
          .forEach((content) => {
            content.style.display = "none";
          });
        document.getElementById(
          "mobile-cart-content" + id.charAt(id.length - 1),
        ).style.display = "flex";
      });
    });
});
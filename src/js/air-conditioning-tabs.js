document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll(".air-conditioning-tabs__container .air-conditioning-tabs__button").forEach((tab) => {
    tab.addEventListener("click", () => {
      document
        .querySelectorAll(".air-conditioning-tabs__container .air-conditioning-tabs__button")
        .forEach((tab) => {
          tab.classList.remove("text-black");
          tab.classList.replace("bg-light-gray", "bg-dark-gray");
        });
      tab.classList.add("text-black");
      tab.classList.replace("bg-dark-gray", "bg-light-gray");
      let id = tab.getAttribute("id");
      document
        .querySelectorAll(".air-conditioning-tabs__container .air-conditioning-tabs__item")
        .forEach((content) => {
          content.classList.remove("flex");
          content.classList.add("hidden");
        });
      document
        .getElementById("air-conditioning-content" + id.charAt(id.length - 1))
        .classList.replace("hidden", "flex");
    });
  });

  document
    .querySelectorAll(".air-conditioning-tabs__container--mobile .air-conditioning-tabs__button--mobile")
    .forEach((tab) => {
      tab.addEventListener("click", () => {
        document
          .querySelectorAll(".air-conditioning-tabs__container--mobile .air-conditioning-tabs__button--mobile")
          .forEach((tab) => {
            tab.classList.remove("text-black");
            tab.classList.replace("bg-light-gray", "bg-dark-gray");
          });
        tab.classList.add("text-black");
        tab.classList.replace("bg-dark-gray", "bg-light-gray");
        let id = tab.getAttribute("id");
        document
          .querySelectorAll(".air-conditioning-tabs__container--mobile .air-conditioning-tabs__item--mobile")
          .forEach((content) => {
            content.classList.remove("flex");
            content.classList.add("hidden");
          });
        document
          .getElementById("mobile-air-conditioning-content" + id.charAt(id.length - 1))
          .classList.replace("hidden", "flex");
      });
    });
});
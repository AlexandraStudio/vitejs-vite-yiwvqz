document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll(".tabs__container .tabs__button").forEach((tab) => {
    tab.addEventListener("click", () => {
      document
        .querySelectorAll(".tabs__container .tabs__button")
        .forEach((tab) => {
          tab.classList.remove("text-white");
        });
      tab.classList.add("text-white");
      let id = tab.getAttribute("id");
      document
        .querySelectorAll(".tabs__container .tabs__item")
        .forEach((content) => {
          content.classList.add("hidden");
          content.classList.remove("flex");
        });
      const currrentTab = document.getElementById(
        "content" + id.charAt(id.length - 1),
      ).classList;
      currrentTab.remove("hidden");
      currrentTab.add("flex");
    });
  });
});
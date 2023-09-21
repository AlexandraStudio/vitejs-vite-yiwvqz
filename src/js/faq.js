document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll(".faq__container .faq__button").forEach((tab) => {
    tab.addEventListener("click", () => {
      if (!tab.parentElement.classList.contains("open")) {
        tab.parentElement.classList.add("open");
        tab.parentElement.classList.add("text-green");
        tab.parentElement.classList.add("text-base");
        tab.parentElement.classList.add("lg:text-xl");
      } else {
        tab.parentElement.classList.remove("open");
        tab.parentElement.classList.remove("text-green");
        tab.parentElement.classList.remove("text-base");
        tab.parentElement.classList.remove("lg:text-xl");
      }
    });
  });
});
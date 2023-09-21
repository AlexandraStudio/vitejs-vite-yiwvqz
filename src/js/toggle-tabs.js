document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll(".tab-button").forEach((tab) => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".tab-button").forEach((tab) => {
        tab.classList.remove("!bg-border-color");
      });
      tab.classList.add("!bg-border-color");
    });
  });
});
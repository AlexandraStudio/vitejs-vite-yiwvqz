document.addEventListener('DOMContentLoaded', () => {
  const increase = document.getElementById("increase");
  const decrease = document.getElementById("decrease");
  const counter = document.getElementById("counter");

  increase.addEventListener("click", () => {
    counter.value++;
  });

  decrease.addEventListener("click", () => {
    counter.value--;
  });
});

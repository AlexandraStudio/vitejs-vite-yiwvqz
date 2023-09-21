document.addEventListener('DOMContentLoaded', () => {
  const openPopup = document.getElementById("open-popup");
  const closePopup = document.getElementById("close-popup");
  const popup = document.getElementById("popup");

  openPopup.addEventListener("click", () => {
    popup.classList.remove("hidden");
    document.body.style.overflow = "hidden";
    document.body.style.height = "100%";
  });

  closePopup.addEventListener("click", () => {
    popup.classList.add("hidden");
    document.body.style.overflow = "auto";
    document.body.style.height = "auto";
  });
});

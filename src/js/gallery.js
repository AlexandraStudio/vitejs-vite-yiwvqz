import Swiper from "swiper/bundle";
import { Pagination } from "swiper/modules";
import "swiper/css";

document.addEventListener('DOMContentLoaded', () => {
  const thumbnails = new Swiper(".thumbnails", {
    modules: [Pagination],
    spaceBetween: 10,
    slidesPerView: "auto",
    watchOverflow: true,
  });

  const showcase = new Swiper(".showcase", {
    spaceBetween: 10,
    slidesPerView: "auto",
    watchOverflow: true,
    thumbs: {
      swiper: thumbnails,
    },
  });

  const mobile = new Swiper(".mobile", {
    modules: [Pagination],
    slidesPerView: "auto",
    watchOverflow: true,
    pagination: {
      el: `.swiper-pagination`,
      clickable: true,
    },
  });
});
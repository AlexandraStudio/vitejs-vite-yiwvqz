import Swiper from "swiper/bundle";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";

document.addEventListener('DOMContentLoaded', () => {
  const buildSwiperSlider = (sliderElm) => {
    return new Swiper(`#${sliderElm.id}`, {
      modules: [Navigation, Pagination],
      breakpoints: {
        480: {
          spaceBetween: 12,
        },
        1366: {
          spaceBetween: 20,
        },
        1920: {
          spaceBetween: 30,
        },
      },
      // autoHeight: true,
      slidesPerView: "auto",
      watchOverflow: true,
      navigation: {
        nextEl: `.swiper-button-next`,
        prevEl: `.swiper-button-prev`,
      },
      pagination: {
        el: `.swiper-pagination`,
        clickable: true,
      },
    });
  };

  // Get all of the swipers on the page
  const allSliders = document.querySelectorAll(".swiper");

  // Loop over all of the fetched sliders and apply Swiper on each one.
  allSliders.forEach((slider) => buildSwiperSlider(slider));
});
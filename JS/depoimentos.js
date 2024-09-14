var swiper = new Swiper(".depoimentos", {
  slidesPerView: 2,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  breakpoints: {
    768: {
      slidesPerView: 2, // Dois slides por vez para telas maiores que 768px
      spaceBetween: 30,
    },
    0: {
      slidesPerView: 1, // Um slide por vez para telas menores que 768px
      spaceBetween: 20,
    }
  }
});

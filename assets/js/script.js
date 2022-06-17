$(document).ready(() => {
  $('.hamburgerMenu').click(() => {
    $('.menu-wrapper').addClass('active')
  });

  $('.menuClose').click(() => {
    $('.menu-wrapper').removeClass('active')
  });
});

var swiper = new Swiper(".mySwiperHome", {
  // auto 1 per slide
  slidesPerView: "auto",
  // posisikan slide di tengah
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
  },
  autoplay: {
    delay: 2000
  }
});
$(document).ready(() => {
  $('.hamburgerMenu').click(() => {
    $('.menu-wrapper').addClass('active')
  });

  $('.menuClose').click(() => {
    $('.menu-wrapper').removeClass('active')
  });

  // ketika scroll navbar melebihi tinggi dari navbar tersebut
  $(document).scroll(() => {
    $('.navbar').toggleClass('active', $(this).scrollTop() > $('.navbar').height())
  })
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

var swiper = new Swiper(".mySwiperProduct", {
  slidesPerView: "auto",
  spaceBetween: 40,
  navigation: {
    nextEl: ".bxs-chevron-right-square",
    prevEl: ".bxs-chevron-left-square",
  },
});
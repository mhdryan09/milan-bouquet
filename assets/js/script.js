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
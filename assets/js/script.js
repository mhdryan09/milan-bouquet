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
  breakpoints: {
    350: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 40,
    }
  }
});

var swiper = new Swiper(".mySwiperTesti", {
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
  },
  autoplay: {
    delay: 2000
  }
});
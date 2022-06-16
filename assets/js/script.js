$(document).ready(() => {
  $('.hamburgerMenu').click(() => {
    $('.menu-wrapper').addClass('active')
  });

  $('.menuClose').click(() => {
    $('.menu-wrapper').removeClass('active')
  });
});
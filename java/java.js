$(document).ready(function(){


$("#navToggle").on("click", function() {
  $("#navMenu").toggle(250);
  $("#navToggle").toggleClass("hide");
  $("#navX").toggleClass("hide");
});

$("#navX").on("click", function() {
  $("#navMenu").toggle(250);
  $("#navToggle").toggleClass("hide");
  $("#navX").toggleClass("hide");
});

// $(".menuClose").on("click", function() {
//   $("#navMenu").toggle(250);
//   $("#navToggle").toggleClass("hide");
//   $("#navX").toggleClass("hide");
// });

$("#navMenu").on("mouseleave", function() {
  $("#navMenu").toggle(250);
  $("#navToggle").toggleClass("hide");
  $("#navX").toggleClass("hide");
});

$('.wordScroll').slick({
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3000,
  speed: 750,
  fade: true,
  swipe: false,
  cssEase: 'linear'
});

$('.reviewScroll').slick({
  nextArrow: '<i class="fa fa-arrow-right fa-2x"></i>',
  prevArrow: '<i class="fa fa-arrow-left fa-2x"></i>',
  autoplay: true,
  autoplaySpeed: 5000,
  speed: 750,
  cssEase: 'ease-in-out',
  fade: true,
});


});

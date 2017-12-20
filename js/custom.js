$(function () {

  $(".slider1").owlCarousel({
    items: 4,
    autoplay:true,
    smartSpeed:700,
    loop: true,
    autoplayHoverPause: true,
    dots: false,
    responsive : {
    // breakpoint from 0 up
    0 : {
    items: 1
    },
    // breakpoint from 480 up
    480 : {
    items: 2
    },
    // breakpoint from 768 up
    768 : {
    items: 4
    }
    }
    });
/************************************************************

						              ZVEZDICE

************************************************************/

    $(".rateYo").rateYo({
      rating: 3.6
      });
// Getter
var starWidth = $(".rateYo").rateYo("option", "starWidth"); //returns 20px

// Setter
$(".rateYo").rateYo("option", "starWidth", "15px"); //returns a jQuery Element


});
$('.img-wrapper').mouseover(function(){
    $(this).find('.restoran-hover').fadeIn(500);
});
$('.restoran-hover').mouseleave(function(){
  $(this).fadeOut(500);
});
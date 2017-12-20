$(function () {


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
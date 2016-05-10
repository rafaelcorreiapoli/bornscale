Template.praxiLevel.onRendered(function() {
  $('.parallax-bg').parallax({
    speed: 0.5,
    zIndex: -100
  });  
  $('html,body').animate({
    scrollTop: 0
  }, 200);  
});

Template.ehs.onRendered(function() {
  $('.parallax-bg').parallax({
    speed: 0.5,
    zIndex: -100
  });  
});
Template.ehs.onCreated(function() {
  $('html,body').animate({
    scrollTop: 0
  }, 200);  
});
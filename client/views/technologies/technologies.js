Template.technologies.onRendered(function() {
  var options = {
    items: 11,
    loop: true,
    dots: false,
    margin: 20,
    autoplay: true,
    autoplayTimeout: 2000
  }

  $('.tech-carousel').owlCarousel(options);
});

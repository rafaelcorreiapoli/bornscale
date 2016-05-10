Template.technologies.onRendered(function() {
  var options = {
    items: 5,
    loop: true,
    dots: false,
    margin: 20,
    autoplay: true,
    autoplayTimeout: 2000,
    responsive:{
      0:{
        items: 2,
      },
      768:{
        items: 3,
      },
      992:{
        items: 4,
      },
      1200: {
        items: 5
      },
      1824: {
        items: 6
      }      
    }    
  }

  $('.tech-carousel').owlCarousel(options);
});

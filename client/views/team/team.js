Template.team.onRendered(function() {
  $('.owl-carousel').each(function(index, el) {
    var dataOptions = $(this).data('options') || {};
    dataOptions.items = 2;
    var options = {
      items: dataOptions.items || 4,
      loop: dataOptions.loop || true,
      dots: dataOptions.dots || false,
      margin: dataOptions.margin || 10,
      autoplay: dataOptions.autoplay || false,
      responsiveClass: true,
      responsive: {
        0: {
          items: dataOptions.xsItems || 1,
          margin: 25
        },
        768: {
          items: dataOptions.smItems || 2,
        },
        992: {
          items: dataOptions.mdItems || 3,
        },
        1200: {
          items: dataOptions.items || 4
        }
      }
    }

    if (options.autoplay) {
      options.autoplayTimeout = dataOptions.autoplayTimeout || 2000;
      options.autoplayHoverPause = true;
    }


    $(el).owlCarousel(options);
  });
});

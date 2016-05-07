Template.portfolio.onRendered(function() {
  var $grid = $('#works').imagesLoaded(function() {
    $grid.isotope({
      masonry: {
        columnWidth: 0
      },
      itemSelector: '.work-item',
      filter: '*'
    });

    $grid.on('layoutComplete', function(event) {
      console.log('layoutComplete');
      $(window).trigger('resize');
      fixScroll();
    });;

    $('#filters').on('click', 'li', function() {
      $('#filters li').removeClass('active');
      $(this).addClass('active');
      var filterValue = $(this).attr('data-filter');
      $('#works').isotope({
        filter: filterValue
      });
      $(window).trigger('resize');
    });
  })
});

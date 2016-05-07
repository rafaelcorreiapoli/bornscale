
Template.hero.onRendered(function() {
  $('#home-slider img').each(function(index, el) {
    var slide = $(this).parent('li');
    var image = $(this).attr('src');

    $(slide).prepend($('<div class="slide-image"></div>').css('background-image', 'url(' + image + ')'));

    if (navigator.userAgent.indexOf("Firefox") != -1 && $('#home').hasClass('bordered')) {
      $('.slide-image').addClass('ff-fix');
    }

    $(this).remove();
  });

  var options = {
    prevText: '<i class="ti-angle-left"></i>',
    nextText: '<i class="ti-angle-right"></i>',
    keyboard: false,
  };

  if ($('#home-slider .slides > li').length < 2) {
    options.directionNav = false
  }

  if ($('#home-slider').hasClass('kenburn')) {

    options.start = function() {
      $('#home-slider').find(".slides > li.flex-active-slide > .slide-image").each(function() {
        var $content = $(this);
        $content.css({
          '-webkit-transform': 'scale(1.2)',
          '-moz-transform': 'scale(1.2)',
          'transform': 'scale(1.2)',
        });
      })
    }

    options.before = function() {
      $('#home-slider').find(".slides > li > .slide-image").each(function() {
        var $content = $(this);
        $content.css({
          '-webkit-transform': 'scale(1)',
          '-moz-transform': 'scale(1)',
          'transform': 'scale(1)',
        });
      })
    }

    options.after = function() {
      $('#home-slider').find(".slides > li.flex-active-slide > .slide-image").each(function() {
        var $content = $(this);
        $content.css({
          '-webkit-transform': 'scale(1.2)',
          '-moz-transform': 'scale(1.2)',
          'transform': 'scale(1.2)',
        });
      })
    }
  }

  $('#home-slider').flexslider(options);

  $('#text-rotator').flexslider({
    controlNav: false,
    directionNav: false
  })

});

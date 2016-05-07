Template.header.onRendered(function() {
  if (!$('section:first').is('.parallax, #home, .splash')) {
    $('#topnav').addClass('scroll');
    $('body').addClass('top-padding');
  }

  if ($('section:first').is('#home') && $('#home').hasClass('bordered')) {
    $('#topnav').addClass('top-space');
  }

  $(window).scroll(function() {

    if ($('section:first').is('.parallax, #home, .splash')) {
      if ($(window).scrollTop() >= 100) {
        $('#topnav').addClass('scroll');
      } else {
        $('#topnav').removeClass('scroll');
      }
    }

    var filters = $('#filters');
    if (filters.length && !filters.hasClass('no-fix')) {
      if ($(window).scrollTop() >= $('.page-title:first').height() + 30) {
        filters.addClass('fixed');
      } else {
        filters.removeClass('fixed');
      }
    }

  }).trigger('scroll');

  $('.navbar-toggle').on('click', function(event) {
    $(this).toggleClass('open');
    $('#navigation').slideToggle(400);
    $('.cart, .search').removeClass('open');
  });


  $('body').on('click', function(event) {
    $('.cart, .search').removeClass('open');
  });

  $('.navigation-menu>li').slice(-2).addClass('last-elements');

  $('.navigation-menu li.has-submenu a[href="#"]').on('click', function(e) {
    if ($(window).width() < 992) {
      e.preventDefault();
      $(this).parent('li').toggleClass('open').find('.submenu:first').toggleClass('open');
    }
  });


  // Fix Scroll
  $('#sscr').css('height', 0);
  $('#sscr').css('height', document.documentElement.scrollHeight + 'px');// 

  // Init General
  $("a[href='#top']").on('click', function() {
    $("html, body").animate({
      scrollTop: 0
    }, 1000);
    return false;
  });

  $('a[data-scroll="true"]').on('click', function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

  if ($('#navigation').data('onepage')) {
    $('body').scrollspy({
      target: '#navigation'
    });
  }

  $('.bg-img, .thumb-placeholder').each(function(index, el) {
    var image = $(el).attr('src');
    $(el).parent().css('background-image', 'url(' + image + ')');
    $(el).remove();
  });

  $('.alert').on('closed.bs.alert', function() {
    fixScroll();
  });

  $('body').on('click', '.alert', function() {
    $(this).on('closed.bs.alert', function() {
      fixScroll();
    });
  });

  var parallaxZIndex = -100;

  if (navigator.userAgent.indexOf("Firefox") != -1 || navigator.userAgent.indexOf("MSIE ") != -1 || navigator.userAgent.match(/Trident.*rv\:11\./) != null) {
    parallaxZIndex = 11;
    $('section.parallax').css('z-index', 20);
  }

  $('.parallax-bg').parallax({
    speed: 0.5,
    zIndex: parallaxZIndex
  });

  $('#login-tabs a:first').tab('show');

  $('#login-content .tab-pane:first').addClass('fade in');

  $('#login-tabs li a').on('click', function(e) {
    e.preventDefault();
    $(this).tab('show');
  });

  $('a[data-toggle=tab]').on('click', function(event) {
    $(window).trigger('resize');
  }).on('shown.bs.tab', function(e) {
    var container = $($(this).attr('href'));

    if (container.find('.progress-bar').length) {
      container.find('.progress-bar').each(function(index, el) {
        $(el).css('width', $(this).data('progress') + '%');
        $(el).parents('.skill').find('.skill-perc').css('right', 100 - $(el).data('progress') + '%');
      });
    }

  });;


  $('.boxes [data-bg-color]').each(function(index, el) {
    $(el).css('background-color', $(el).data('bg-color'));
  });

});

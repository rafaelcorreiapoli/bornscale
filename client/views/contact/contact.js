Template.contact.onRendered(function() {
  var lat = $('#map').data('lat');
  var lang = $('#map').data('lang');

  var myLatlng = new google.maps.LatLng(lat, lang);

  var styles = [{
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [{
      "color": "#e9e9e9"
    }, {
      "lightness": 17
    }]
  }, {
    "featureType": "landscape",
    "elementType": "geometry",
    "stylers": [{
      "color": "#f5f5f5"
    }, {
      "lightness": 20
    }]
  }, {
    "featureType": "road.highway",
    "elementType": "geometry.fill",
    "stylers": [{
      "color": "#ffffff"
    }, {
      "lightness": 17
    }]
  }, {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [{
      "color": "#ffffff"
    }, {
      "lightness": 29
    }, {
      "weight": 0.2
    }]
  }, {
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [{
      "color": "#ffffff"
    }, {
      "lightness": 18
    }]
  }, {
    "featureType": "road.local",
    "elementType": "geometry",
    "stylers": [{
      "color": "#ffffff"
    }, {
      "lightness": 16
    }]
  }, {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [{
      "color": "#f5f5f5"
    }, {
      "lightness": 21
    }]
  }, {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [{
      "color": "#dedede"
    }, {
      "lightness": 21
    }]
  }, {
    "elementType": "labels.text.stroke",
    "stylers": [{
      "visibility": "on"
    }, {
      "color": "#ffffff"
    }, {
      "lightness": 16
    }]
  }, {
    "elementType": "labels.text.fill",
    "stylers": [{
      "saturation": 36
    }, {
      "color": "#333333"
    }, {
      "lightness": 40
    }]
  }, {
    "elementType": "labels.icon",
    "stylers": [{
      "visibility": "off"
    }]
  }, {
    "featureType": "transit",
    "elementType": "geometry",
    "stylers": [{
      "color": "#f2f2f2"
    }, {
      "lightness": 19
    }]
  }, {
    "featureType": "administrative",
    "elementType": "geometry.fill",
    "stylers": [{
      "color": "#fefefe"
    }, {
      "lightness": 20
    }]
  }, {
    "featureType": "administrative",
    "elementType": "geometry.stroke",
    "stylers": [{
      "color": "#fefefe"
    }, {
      "lightness": 17
    }, {
      "weight": 1.2
    }]
  }];

  var mapOptions = {
    zoom: 14,
    center: myLatlng,
    mapTypeControl: false,
    disableDefaultUI: true,
    zoomControl: false,
    scrollwheel: false,
    styles: styles
  }

  var map = new google.maps.Map(document.getElementById('map'), mapOptions);

  var infowindow = new google.maps.InfoWindow({
    content: "We are here!"
  });

  var marker = new google.maps.Marker({
    position: myLatlng,
    map: map,
    icon: 'images/marker.svg',
    title: 'We are here!'
  });

  google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map, marker);
  });

  var requiredInputs = $('#contact-form').find('input[data-required="true"], textarea[data-required="true"]').toArray();

  var isValidForm = function() {
    var toReturn;

    requiredInputs.forEach(function(element, index) {
      if (!$(element).val()) {
        toReturn = false;
      } else {
        toReturn = true;
      }
    });

    return toReturn;
  }

  $('#contact-form').on('submit', function(event) {

    event.preventDefault();

    requiredInputs.forEach(function(element, index) {
      if (!$(element).val()) {
        $(element).parent('.form-group').addClass('has-error');
      } else {
        $(element).parent('.form-group').removeClass('has-error');
      }
    });

    if (isValidForm()) {
      console.log('send form!');
    }

  });

  $('#contact-form input, #contact-form textarea').on('keyup', function(event) {
    event.preventDefault();
    if ($(this).val()) {
      $(this).parent('.form-group').removeClass('has-error');
    }
  });  
});

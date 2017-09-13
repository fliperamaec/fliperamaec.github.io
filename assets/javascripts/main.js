(function($) {
  'use strict';

  function fadeArrow() {
    var topWindow = $(window).scrollTop() * 1.5;
    var windowHeight = $(window).height();
    var position = 1 - (topWindow / windowHeight);

    $('.js-hero-arrow').css('opacity', position);
  }

  function animateHeader() {
    var $header = $('.js-navbar');
    $(window).scrollTop() > 1 ? $header.addClass('sticky') : $header.removeClass('sticky');
  }

  function initAnchorLinks() {
    $('.js-anchor-link').on('click', 'a', function(event) {
      event.preventDefault();

      $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
      }, 500);
    });
  }

  function scrollToTopOnVisit() {
    $(window).scrollTop(0);
  }

  $(window).scroll(function(){
    fadeArrow();
    animateHeader();
  });

  function myMap() {
    var myLatLng = { lat: -26.2893037, lng: -48.8451019 }
    var mapProp= {
        center:new google.maps.LatLng(-26.2893037,-48.8451019),
        zoom:15,
    };
    var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
    var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      title: 'Estamos aqui!'
    });
  }

  function initHighlights() {
    $('.column-value, .column-title').on('mouseover', function() {
      var cointainer = $(this).parents('.container');
      cointainer.find('.column-value').removeClass('highlight')
      cointainer.find('.column-title').removeClass('highlight')
      cointainer.find('.column-value:nth-child('+ ($(this).index() + 1) +')').addClass('highlight')
      cointainer.find('.column-title:nth-child('+ ($(this).index() + 1) +')').addClass('highlight')
    })
  }

  $(function() {
    initAnchorLinks();
    scrollToTopOnVisit();
    myMap();
    initHighlights();
  })
})(jQuery);

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
    $('.js-anchor-link').on('click', function(event) {
      event.preventDefault();

      $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
      }, 1000);
    });
  }

  function scrollToTopOnVisit() {
    $(window).scrollTop(0);
  }

  $(window).scroll(function(){
    fadeArrow();
    animateHeader();
  });

  $(function() {
    initAnchorLinks();
    scrollToTopOnVisit();
  })
})(jQuery);

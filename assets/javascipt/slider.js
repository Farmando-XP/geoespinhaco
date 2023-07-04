const swiper = new Swiper('.swiper', {
    // Optional parameters
    simulateTouch: false,
    speed: 1000,
    direction: 'horizontal',

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
  });
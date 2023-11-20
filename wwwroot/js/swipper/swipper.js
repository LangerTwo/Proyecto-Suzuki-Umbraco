const swiper = new Swiper('.swiper-hero', {
    // Optional parameters
    // direction: 'horizontal',
    loop: true,
    autoplay: {
      delay: 2000,
    },
    effect: 'fade',
      fadeEffect: {
      crossFade: true
    },

  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      // type: 'bullets',
      clickable: true,
      dynamicBullets: true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },
});
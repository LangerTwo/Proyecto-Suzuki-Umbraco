const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");

const swiper = new Swiper('.swiper-hero', {
    // Optional parameters
    // direction: 'horizontal',
    loop: true,
      autoplay: {
        delay: 2000,
      disableOnInteraction: false
    },
    effect: 'fade',
      fadeEffect: {
      crossFade: true
    },
    on: {
      autoplayTimeLeft(s, time, progress) {
        progressCircle.style.setProperty("--progress", 1 - progress);
        progressContent.textContent = `${Math.ceil(time / 1000)}s`;
      }
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

const swiperTwo = new Swiper('.swiper-hero-two', {
  // ancho slide
  slidesPerView: 4.5,
  spaceBetween: 15,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
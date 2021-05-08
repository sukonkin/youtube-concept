// Первый слайдер
const swiper = new Swiper('.channel-slider', {
  // Optional parameters
  loop: true,
  slidesPerView: 4,
  // Navigation arrows
  navigation: {
    nextEl: '.channel-button-next',
    prevEl: '.channel-button-prev',
  },
});

// Второй слайдер
const swiperTwo = new Swiper('.recommended-slider', {
  // Optional parameters
  loop: true,
  slidesPerView: 2,
  // Navigation arrows
  navigation: {
    nextEl: '.recommended-button-next',
    prevEl: '.recommended-button-prev',
  },
});

// Третий слайдер
const swiperThree = new Swiper('.food-slider', {
  // Optional parameters
  loop: true,
  slidesPerView: 4,
  // Navigation arrows
  navigation: {
    nextEl: '.food-button-next',
    prevEl: '.food-button-prev',
  },
});
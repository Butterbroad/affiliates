

//Slider
const sliderContainer = document.querySelector('.swiper-container');
const slider = new Swiper(sliderContainer, {
  infinite: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 4000,
  }
});

@@include('webpSupport.js')


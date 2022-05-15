const myCarousel = document.querySelector('#carouselExampleIndicators');
const carousel = new bootstrap.Carousel(myCarousel, {
  interval: false,
  wrap: false,
});

const myCarouselMobile = document.querySelector(
  '#carouselExampleIndicatorsMobile'
);
const carouselMobile = new bootstrap.Carousel(myCarousel, {
  interval: false,
  wrap: false,
});

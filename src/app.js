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

const programBtnGroup = document.querySelector('.programBtns');

programBtnGroup.addEventListener('click', (e) => {
  e.preventDefault();

  if (e.target.nodeName !== 'A') {
    return;
  }

  // 切換按下按鈕樣式
  const programBtns = programBtnGroup.querySelectorAll('.btn');
  programBtns.forEach((item) => {
    item.classList.remove('active');
  });
  e.target.classList.toggle('active');

  // 更換文字
  const newNumLen = e.target.textContent.length;
  const newNum = e.target.textContent.slice(0, newNumLen - 1);
  const nums = document.querySelectorAll('.num');
  nums.forEach((item) => {
    // 如果是 >25000 要把字變小，避免跑版
    if (newNum === '>25000') {
      item.parentElement.classList.remove('fs-3');
      item.parentElement.classList.add('fs-4');
    }

    item.textContent = newNum;
  });
});

'use strict';

const sliderItems = [...document.querySelectorAll('.slider__item')];

const sliderDots = [...document.querySelectorAll('.slider__dot')];

const sliderArrows = document.querySelector('.slider__arrows');

//Активный слайд
let activeIndex = sliderItems.findIndex(item => item.classList.contains('slider__item_active') === true);
sliderDots[activeIndex].classList.add('slider__dot_active');

// Слушатели
for (let index = 0; index < sliderDots.length; index++) {
  sliderDots[index].addEventListener('click', chooseSlide);
}
sliderArrows.addEventListener('click', swipeSlides);



//Точки
function chooseSlide(event) {
  let index = sliderDots.indexOf(event.target);
  for (let sliderItem of sliderItems) {
    sliderItem.className = 'slider__item';
  }
   for (let sliderDot of sliderDots) {
    sliderDot.className = 'slider__dot';
  }
  sliderItems[index].classList.add('slider__item_active');
  event.target.classList.add('slider__dot_active');
}

//??? Стоит ли как-то упростить код? Всё работает как нужно, но я не уверен в правильности моего подхода)

// Стрелочки
function swipeSlides(event) {
  let activeIndex = sliderItems.findIndex(item => item.classList.contains('slider__item_active') === true);

  if (event.target.classList.contains('slider__arrow_next')) {
    sliderItems[activeIndex].classList.remove('slider__item_active');
    sliderDots[activeIndex].classList.remove('slider__dot_active');
    if (sliderItems[activeIndex] === sliderItems[sliderItems.length - 1]) {      
      activeIndex = 0;
      sliderItems[activeIndex].classList.add('slider__item_active');
      sliderDots[activeIndex].classList.add('slider__dot_active'); 
    } else {
      sliderItems[activeIndex + 1].classList.add('slider__item_active');
      sliderDots[activeIndex + 1].classList.add('slider__dot_active'); 
    }
  }

  if (event.target.classList.contains('slider__arrow_prev')) {
    sliderItems[activeIndex].classList.remove('slider__item_active');
    sliderDots[activeIndex].classList.remove('slider__dot_active');
    if (sliderItems[activeIndex] === sliderItems[0]) {      
      activeIndex = sliderItems.length - 1;
      sliderItems[activeIndex].classList.add('slider__item_active');
      sliderDots[activeIndex].classList.add('slider__dot_active'); 
    } else {
      sliderItems[activeIndex - 1].classList.add('slider__item_active');
      sliderDots[activeIndex - 1].classList.add('slider__dot_active'); 
    }
  }
}
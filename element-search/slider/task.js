'use strict';

// Я переписал в соответствии с рекомендациями. Надеюсь, правильно уловил вашу мысль про разделение логики и излишнее дублирование)

const sliderItems = [...document.querySelectorAll('.slider__item')];
const sliderDots = [...document.querySelectorAll('.slider__dot')];
const sliderArrows = document.querySelector('.slider__arrows');

//Активный слайд
let activeIndex = sliderItems.findIndex(item => item.classList.contains('slider__item_active'));
sliderDots[activeIndex].classList.add('slider__dot_active');

// Слушатели
for (let index = 0; index < sliderDots.length; index++) {
  sliderDots[index].addEventListener('click', chooseSlide);
}
sliderArrows.addEventListener('click', swipeSlides);

function showSlide(slideIndex) {
  sliderItems[activeIndex].classList.toggle('slider__item_active');
  sliderItems[slideIndex].classList.toggle('slider__item_active');
  activeIndex = slideIndex;
};

function chooseSlide() {
  let chosenDot = sliderDots.indexOf(this);
  switchDotsVisuals(chosenDot);
  showSlide(chosenDot);
  activeIndex = chosenDot;
};

function swipeSlides(event) {
  if (event.target.classList.contains('slider__arrow_next')) {
    let nextSlideIndex;
    if (activeIndex === sliderItems.length - 1) {
      nextSlideIndex = 0;
    } else {
      nextSlideIndex = activeIndex + 1;
    }    
    switchDotsVisuals(nextSlideIndex);    
    showSlide(nextSlideIndex);
    activeIndex = nextSlideIndex;
  }
  if (event.target.classList.contains('slider__arrow_prev')) {
    let prevSlideIndex;
    if (activeIndex === 0) {
      prevSlideIndex = sliderItems.length - 1;  
    } else {
      prevSlideIndex = activeIndex - 1;
    }
    switchDotsVisuals(prevSlideIndex);    
    showSlide(prevSlideIndex);
    activeIndex = prevSlideIndex;
  }
};

function switchDotsVisuals(newSlide) {
  sliderDots[activeIndex].classList.toggle('slider__dot_active');
  sliderDots[newSlide].classList.toggle('slider__dot_active');
};
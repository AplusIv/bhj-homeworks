'use strict';

const elements = document.querySelectorAll('.has-tooltip');
document.body.addEventListener('click', showTooltip);

const tooltip = document.createElement('div'); // создаю новый элемент подсказки.

function showTooltip(event) {
  event.preventDefault();

  if (event.target.tagName === "A" && event.target.classList.contains('has-tooltip')) {
    if (event.target.querySelector('.tooltip_active') !== null) {
      event.target.querySelector('.tooltip_active').classList.remove('tooltip_active');
    } else {
      for (let element of elements) {
        if (element.querySelector('.tooltip_active') !== null) {
          element.querySelector('.tooltip_active').classList.remove('tooltip_active')
        };
      };

      // настраиваю отображение подсказки.      
      tooltip.innerHTML = event.target.title;

      tooltip.dataset.position = 'bottom';
      //tooltip.dataset.position = 'right';
      //tooltip.dataset.position = 'top';
      //tooltip.dataset.position = 'left';

      tooltip.classList.add('tooltip', 'tooltip_active');
      //tooltip.style.left = `${event.target.getBoundingClientRect().left}px`;
      //tooltip.style.top = `${event.target.getBoundingClientRect().bottom}px`;
      positionTooltip(tooltip);

      event.target.appendChild(tooltip);
      
      console.log(`bottom = ${event.target.getBoundingClientRect().bottom}`);
      console.log(`top = ${event.target.getBoundingClientRect().top}`);
      console.log(`left = ${event.target.getBoundingClientRect().left}`);
      console.log(`right = ${event.target.getBoundingClientRect().right}`);
    };
  };
};

function positionTooltip(elem) {
  // проверим наличие data атрибута
  if (elem.hasAttribute('data-position')) {
    if (elem.dataset.position === 'bottom') {
      elem.style.left = `${event.target.getBoundingClientRect().left}px`;
    } else if (elem.dataset.position === 'right') {      
      elem.style.left = `${event.target.getBoundingClientRect().right}px`;
      elem.style.top = `${event.target.getBoundingClientRect().top}px`;
    } else if (elem.dataset.position === 'top') {      
      elem.style.left = `${event.target.getBoundingClientRect().left}px`;      
      elem.style.top = `${event.target.getBoundingClientRect().top - getComputedStyle(elem).paddingTop.slice(0, -2) - getComputedStyle(elem).height.slice(0, -2) - getComputedStyle(elem).paddingBottom.slice(0, -2)}px`; 
      // (!!!) getComputedStyle(elem) возвращает объект, содержащий значения всех CSS-свойств элемента, полученных после применения всех активных таблиц стилей
    } else if (elem.dataset.position === 'left') {      
      elem.style.left = `${event.target.getBoundingClientRect().left - getComputedStyle(elem).paddingLeft.slice(0, -2) - getComputedStyle(elem).width.slice(0, -2) - getComputedStyle(elem).paddingRight.slice(0, -2)}px`;
      elem.style.top = `${event.target.getBoundingClientRect().top}px`;
    } else return
  }
}
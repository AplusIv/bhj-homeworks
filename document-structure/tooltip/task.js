'use strict';

/* ??? Вопрос по доп. заданию. Как именно должно осуществляться взаимодействие с data-атрибутами? Что нужно реализовать в этой части дополнительного задания? */

const elements = document.querySelectorAll('.has-tooltip');
document.body.addEventListener('click', showTooltip);

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

      // создаю новый элемент подсказки.
      const tooltip = document.createElement('div');
      tooltip.innerHTML = event.target.title;
      tooltip.dataset.position = 'bottom';
      //console.log(tooltip.innerHTML);
      tooltip.classList.add('tooltip', 'tooltip_active');
      // ??? Расположение подсказки настраивал при помощи метода getBoundingClientRect, примененного к родителю подсказки. Так можно было или подразумвалось другое решение?
      tooltip.style.left = `${event.target.getBoundingClientRect().left}px`;
      tooltip.style.top = `${event.target.getBoundingClientRect().bottom}px`;      

      event.target.appendChild(tooltip);
      //console.log(event.target.innerHTML);
      
      console.log(`bottom = ${event.target.getBoundingClientRect().bottom}`);
      console.log(`top = ${event.target.getBoundingClientRect().top}`);
      console.log(`left = ${event.target.getBoundingClientRect().left}`);console.log(`right = ${event.target.getBoundingClientRect().right}`);
  	};
  };
};
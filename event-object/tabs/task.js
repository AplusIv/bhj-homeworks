'use strict';

const tabs = [...document.querySelectorAll('.tab')];
const tabContents = [...document.querySelectorAll('.tab__content')];
console.log(tabs);
console.log(tabContents);

for (let tab of tabs) {
  tab.addEventListener('click', chooseTabs);
}

function chooseTabs() {
  console.log(tabs.indexOf(this));
  console.log(tabs.findIndex(item => item.classList.contains('tab_active')));
  
  let index = tabs.indexOf(this);  
  let currentIndex = tabs.findIndex(item => item.classList.contains('tab_active'));

  tabs[currentIndex].classList.remove('tab_active');
  tabContents[currentIndex].classList.remove('tab__content_active');

  this.classList.add('tab_active');
  tabContents[index].classList.add('tab__content_active');  
}

/*
// ??? Какой-то костыль получился... Как-то проще можно сделать? Или такое решение имеет место быть?

for (let i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener('click', () => {
    if (tabs[i].className.includes('tab_active')) {
      tabs[i].className = 'tab';
      tabContents[i].className = 'tab__content';
    } else {
      tabs[i].className = 'tab tab_active';
      tabContents[i].className = 'tab__content tab__content_active';

      for (let index = 0; index < tabs.length; index++) {
        if (tabs[index] === tabs[i]) { continue; }
        tabs[index].className = 'tab';
        tabContents[index].className = 'tab__content';
      }
    }
  })
}
*/
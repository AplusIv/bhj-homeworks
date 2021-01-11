'use strict';


const dropdowns = document.querySelectorAll('.dropdown');
console.log(dropdowns);


//??? На одной лекции нам говорили, что через цикл навешивать обработчики не самая хорошая практика? А как же поступать тогда? Всё к body крепить?

for (let dropdown of dropdowns) {
  dropdown.addEventListener('click', function openMenu(event) {
    if (event.target.classList.contains('dropdown__value')) {
      this.querySelector('ul.dropdown__list').classList.toggle('dropdown__list_active');
    }
    dropdown.querySelector('ul.dropdown__list').addEventListener('click', chooseMenuItem);
  });

  //??? Может же быть обработчик в обработчике? Или так не нужно делать?
}

function chooseMenuItem(event) {
  event.preventDefault();
  console.log(event.target.textContent);
  console.log(event.target.closest('div.dropdown').querySelector('.dropdown__value'));
  event.target.closest('div.dropdown').querySelector('.dropdown__value').textContent = event.target.textContent;
  this.classList.toggle('dropdown__list_active');
}

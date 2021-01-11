'use strict';

// Я сделал, что модули открываются по нажатию на текст. Надеюсь, так можно было:)

const divs = [...document.getElementsByTagName("div")];
console.log(divs);

const divsWithoutModals = divs.slice(5, divs.length)
console.log(divsWithoutModals);

const modalClosers = [...document.querySelectorAll('div.modal__close')];
console.log(modalClosers);

const showSuccessBtn = document.querySelector('.show-success');
console.log(showSuccessBtn);

for (let div of divsWithoutModals) {
  div.onclick = () => {
    document.getElementById('modal_main').className = 'modal modal_active';
  };
}

for (let modalCloser of modalClosers) {
  modalCloser.onclick = () => {
    modalCloser.closest('div.modal').className = 'modal';
  };
}

showSuccessBtn.onclick = () => {
  document.getElementById('modal_main').className = 'modal';
  document.getElementById('modal_success').className = 'modal modal_active';
}

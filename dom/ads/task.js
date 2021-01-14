'use strict';

/* Сделайте акцент на том, чтобы на странице можно было использовать несколько ротаторов одновременно. Что имеется в виду в этом задании? Достаточно того, что сделал? */

const rotator = document.getElementsByClassName('rotator');
console.log(rotator); // На случай, если много ротаторов на странице
const rotatorCases = [...rotator[0].getElementsByClassName('rotator__case')];
console.log(rotatorCases);
let delay;

const timerId = setTimeout(rotateCases, delay);

function rotateCases() {
  for (let i = 0; i < rotatorCases.length; i++) {
    if (rotatorCases[i].classList.contains('rotator__case_active')) {
      console.log(i);
      if (i === rotatorCases.length - 1) {
        // Если активный элемент списка послений, тогда поменять на нулевой и выполнить следующий код
        delay = rotatorCases[0].dataset.speed;
        console.log(delay);
        rotatorCases[0].classList.add('rotator__case_active');
        rotatorCases[0].style.color = rotatorCases[0].dataset.color;
        rotatorCases[i].classList.remove('rotator__case_active');    
      } else {
        delay = rotatorCases[i + 1].dataset.speed;
        console.log(delay);
        rotatorCases[i + 1].classList.add('rotator__case_active');
         rotatorCases[i + 1].style.color = rotatorCases[i + 1].dataset.color;
        rotatorCases[i].classList.remove('rotator__case_active');
      }
      setTimeout(rotateCases, delay);      
      break;      
    }
  }
}

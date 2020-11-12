'use strict';

let deadStatus = document.getElementById('dead');
let lostStatus = document.getElementById('lost');

// ??? Решил через заполнение массива. Изящнее способа не придумал:) Это хороший вариант?

const holesArray = [];

for (let index = 1; index < 10; index++) {
  const getHole = index => document.getElementById(`hole${index}`);
  holesArray.push(getHole(index));
}

console.log(holesArray);

for (let hole of holesArray) {
  hole.onclick = () => {
    if (hole.className.includes('hole_has-mole')) {
      deadStatus.textContent++;
        if (deadStatus.textContent >= 10) {
          alert('Вы одолели кротов!');
          deadStatus.textContent = 0;
          lostStatus.textContent = 0;
        }
    } else {
      lostStatus.textContent++;
      if (lostStatus.textContent >= 5) {
        alert('Кроты оказались сильнее!');
        deadStatus.textContent = 0;
        lostStatus.textContent = 0;
      }
    }
  }
}
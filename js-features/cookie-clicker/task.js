'use strict';

let cookie = document.getElementById('cookie');

let counter = document.getElementById('clicker__counter');

let speedometer = document.getElementById('clicker__speedometer');
let momentTimestamp;

let arr = [];

function countClicks() {
  momentTimestamp = new Date().getTime();
  console.log(momentTimestamp);
  counter.textContent++;
  if (counter.textContent % 2 > 0) {
    this.width = 300;    
  } else {
    this.width = 200;
  }

  
  /* ??? Может быть, не самый изящный способ, но считает:) Как можно было не используя массив решить? Как по-другому запоминать нужные таймстемпы? */
  arr.push(momentTimestamp);
  console.log(arr);

  if (arr.length > 1) {
    let lastClick = arr[arr.length - 1];
    // ??? Почему-то вернулся undefined при записи arr[length - 1], хотя я до этого всегда таким образом писал вывод последнего элемента
    console.log(`last = ${arr[arr.length - 1]}`);
    let previousClick = arr[arr.length - 2];
    console.log(`previous = ${arr[arr.length - 2]}`);
    let diffSeconds = (lastClick - previousClick) / 1000;
    console.log(diffSeconds);
    speedometer.textContent = (1 / diffSeconds).toFixed(2);
    console.log(speedometer.textContent);
    
    arr.shift(); // Можно убирать устаревающие таймстемпы.
    console.log(arr);
  }
  // return momentTimestamp;
}
cookie.onclick = countClicks;



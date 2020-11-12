'use strict';

console.log('Задание №1.1');

//let time = document.getElementById('timer'); // Прочитать время через Id элемента
//console.log(time);
//let time = 9;
/* let go = () => {
  if (time.textContent <= 0) {
    clearInterval(timerId);
    alert("Вы победили в конкурсе!");
} else {
    //console.log(time--);
    //time--;
    time.textContent--;
  }
}
let timerId = setInterval(go, 1000);
*/
console.log('Задание №1.2');

let time2 = document.getElementById('timer'); // Прочитать время через Id элемента
let timestamp = time2.textContent * 1000;

let go = () => {
  if (timestamp < 0) {
    clearInterval(timerId2);
    alert("У нас есть победитель!");
    document.querySelector('a').click();
    /*  ??? Я не совсем разобрался с загружаемым файлом. У меня получилось только отправиться по ссылке на другую страницу. Как добавить, например, картинку. Я же должен указать её адрес, а тогда по истечении времени браузер также на неё просто перейдёт. Хочется разобраться:)*/
} else {
    let timer = new Date(timestamp);
    let hours = timer.getUTCHours();
    let minutes = timer.getUTCMinutes();
    let seconds = timer.getUTCSeconds();
    if (hours < 10) {
      hours = '0' + hours;
    }
    if (minutes < 10) {
      minutes = '0' + minutes;
    }
    if (seconds < 10) {
      seconds = '0' + seconds;
    }
    time2.textContent = `${hours}:${minutes}:${seconds}`

    timestamp -= 1000;
  }
}

let timerId2 = setInterval(go, 1000);
// ??? в первую секунду показывает в первичном формате "59", затем начинает отчёт как положено "00:00:59". Откуда эта задержка?
